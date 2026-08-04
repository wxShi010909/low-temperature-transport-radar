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

console.log(`Content validation passed for ${reports.reportDate}: ${latestReport.total} core papers, review, classic, and three routes.`);
