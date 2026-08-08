import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const fail = (message) => {
  throw new Error(`Content validation failed: ${message}`);
};
const requireIds = (ids, records, label) => {
  const known = new Set(records.map((record) => record.id));
  for (const id of ids) if (!known.has(id)) fail(`${label} is missing ${id}`);
};

const reports = read("data/reports.json");
const paperDetails = read("data/paper-details.json");
const curated = read("data/curated-reading.json");
const curatedDetails = read("data/curated-details.json");
const dailyReading = read("data/daily-reading.json");
const insights = read("data/insight-archive.json");
const weekly = read("data/weekly-reading.json");

const latestReport = [...reports.history].sort((a, b) => b.date.localeCompare(a.date))[0];
if (!latestReport) fail("reports history is empty");
if (reports.reportDate !== latestReport.date) fail("reportDate is not the latest archived date");
if (!String(reports.updatedAt).startsWith(`${reports.reportDate}T`)) fail("updatedAt does not match reportDate");
if (new Set(latestReport.paperIds).size !== latestReport.paperIds.length) fail("latest paperIds contain duplicates");
if (latestReport.total !== latestReport.paperIds.length) fail("latest total does not match paperIds");

requireIds(latestReport.paperIds, reports.papers, "reports.papers");
requireIds(latestReport.paperIds, paperDetails, "paper-details");

const latestPapers = reports.papers.filter((paper) => latestReport.paperIds.includes(paper.id));
const calculatedCounts = Object.fromEntries(["A", "B", "C", "D", "E"].map((track) => [track, 0]));
for (const paper of latestPapers) calculatedCounts[paper.track] += 1;
for (const track of Object.keys(calculatedCounts)) {
  if ((latestReport.counts?.[track] ?? 0) !== calculatedCounts[track]) fail(`latest ${track} count is incorrect`);
}
if (latestReport.total !== 0 && Object.values(calculatedCounts).some((count) => count !== 1)) {
  fail("a non-empty workday report must contain exactly one primary paper in each A-E track");
}

const curatedHistory = curated.history.find((entry) => entry.date === reports.reportDate);
if (!curatedHistory) fail("latest review/classic archive is missing");
const curatedIds = [curatedHistory.reviewId, ...(curatedHistory.classicIds ?? [])].filter(Boolean);
if (!curatedHistory.reviewId || (curatedHistory.classicIds ?? []).length < 1) fail("latest review or classic is missing");
requireIds(curatedIds, curated.items, "curated-reading items");
requireIds(curatedIds, curatedDetails, "curated-details");
if (dailyReading.date !== reports.reportDate) fail("daily-reading date does not match reportDate");
if (dailyReading.review?.id !== curatedHistory.reviewId) fail("daily-reading review does not match the archive");

const insightHistory = insights.history.find((entry) => entry.date === reports.reportDate);
if (!insightHistory) fail("latest insight archive is missing");
const insightIds = [
  ...(insightHistory.opportunityIds ?? []),
  ...(insightHistory.methodIds ?? []),
  ...(insightHistory.atomicIds ?? []),
];
if (
  (insightHistory.opportunityIds ?? []).length < 1 ||
  (insightHistory.methodIds ?? []).length < 1 ||
  (insightHistory.atomicIds ?? []).length < 1
) fail("latest report must include research, method, and atomic-manufacturing routes");
requireIds(insightIds, insights.items, "insight items");

const latestWeekly = [...weekly.reports].sort((a, b) => b.date.localeCompare(a.date))[0];
if (!latestWeekly) fail("weekly-reading reports are empty");
if (latestWeekly.selectionCount < 3 || latestWeekly.selectionCount > 5) fail("weekly selection must contain 3-5 items");
if (latestWeekly.selectionCount !== latestWeekly.items.length) fail("weekly selectionCount does not match items");
if (latestWeekly.paperIds.length + 1 !== latestWeekly.selectionCount) fail("weekly paperIds plus review do not match selectionCount");
if (latestWeekly.items[0]?.id !== latestWeekly.reviewId) fail("weekly formal review must be the first detailed item");
requireIds(latestWeekly.paperIds, reports.papers, "weekly reports.papers");
requireIds(latestWeekly.paperIds, paperDetails, "weekly paper-details");
requireIds([latestWeekly.reviewId], curated.items, "weekly formal review");
requireIds([latestWeekly.reviewId], curatedDetails, "weekly review details");
const weeklyIds = [latestWeekly.reviewId, ...latestWeekly.paperIds];
if (new Set(weeklyIds).size !== weeklyIds.length) fail("weekly IDs contain duplicates");
if (new Set(latestWeekly.items.map((item) => item.id)).size !== latestWeekly.items.length) fail("weekly detailed items contain duplicates");
for (const id of weeklyIds) if (!latestWeekly.items.some((item) => item.id === id)) fail(`weekly detailed item is missing ${id}`);
for (const key of ["A", "B", "C", "D", "E"]) if (!latestWeekly.coverage?.[key]) fail(`weekly A-E coverage is missing ${key}`);
if (latestWeekly.comparison.length !== latestWeekly.selectionCount) fail("weekly comparison table is incomplete");
if (latestWeekly.readingOrder.length !== latestWeekly.selectionCount) fail("weekly reading order is incomplete");
if (latestWeekly.checklist.length < 3) fail("weekly executable checklist is incomplete");
for (const item of latestWeekly.items) {
  const required = ["background", "question", "structure", "process", "mechanism", "boundary", "connection", "nextStep", "industrialization", "readingGuide"];
  for (const field of required) if (!item[field]) fail(`weekly ${item.id} is missing ${field}`);
  if ((item.keyFindings ?? []).length < 3 || item.keyFindings.length > 5) fail(`weekly ${item.id} must have 3-5 key findings`);
}
const selectedSources = weeklyIds.map((id) => reports.papers.find((entry) => entry.id === id) ?? curated.items.find((entry) => entry.id === id));
const normalizedTitles = selectedSources.map((entry) => entry.title.toLowerCase().replace(/[^a-z0-9]+/g, ""));
const normalizedDois = selectedSources.map((entry) => entry.doi.toLowerCase().trim()).filter(Boolean);
if (new Set(normalizedTitles).size !== normalizedTitles.length) fail("weekly normalized titles contain duplicates");
if (new Set(normalizedDois).size !== normalizedDois.length) fail("weekly DOIs contain duplicates");

console.log(`Content validation passed for ${reports.reportDate}: ${latestReport.total} daily papers; weekly ${latestWeekly.date}: ${latestWeekly.selectionCount} detailed selections.`);
