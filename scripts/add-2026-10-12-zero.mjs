import fs from "node:fs";

const read = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const write = (path, data) => fs.writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
const date = "2026-10-12";

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`;
reports.reportDate = date;
reports.history = reports.history.filter((entry) => entry.date !== date);
reports.history.push({
  date,
  label: "无新增但已完成核查：周末后正式来源、预印本与设备文档去重复核",
  total: 0,
  counts: { A: 0, B: 0, C: 0, D: 0, E: 0 },
  paperIds: [],
});
write("data/reports.json", reports);

const curated = read("data/curated-reading.json");
curated.history = curated.history.filter((entry) => entry.date !== date);
curated.history.push({
  date,
  reviewId: "review-ald-ale-nbe-d4na00784k",
  classicIds: ["classic-anneal-tmr-prb81-144406"],
});
write("data/curated-reading.json", curated);

const daily = read("data/daily-reading.json");
daily.date = date;
write("data/daily-reading.json", daily);

const insights = read("data/insight-archive.json");
const ids = {
  research: `${date}-zero-day-screening`,
  method: `${date}-zero-day-platform-audit`,
  atomic: `${date}-zero-day-process-baseline`,
};
insights.history = insights.history.filter((entry) => entry.date !== date);
insights.items = insights.items.filter((entry) => !Object.values(ids).includes(entry.id));
insights.history.push({
  date,
  opportunityIds: [ids.research],
  methodIds: [ids.method],
  atomicIds: [ids.atomic],
});
insights.items.push(
  {
    id: ids.research,
    date,
    type: "research",
    typeZh: "研究机会",
    trackLabel: "A–E · 质量门槛复核",
    title: "零新增日：把筛选门槛本身纳入可追溯记录",
    subtitle: "不以低相关论文填满A—E，保留后续真正增量的判别能力。",
    summary: "记录检索、去重、直接来源可达性与产业相关性四级筛选。",
    status: "已完成核查",
    relatedPaperIds: [],
    question: "当日没有达到门槛的核心论文时，如何证明不是漏检或静默失败？",
    rationale: "零新增记录把检索范围、去重和淘汰原因变成可审计数据，避免用弱相关内容稀释MTJ与原子制造主线。",
    workflow: ["正式期刊复核", "可靠预印本复核", "近两年高质量池去重", "设备厂商文档复核", "直接来源可达性检查"],
    equipment: ["DOI/出版社索引", "arXiv", "厂商官网", "站内DOI去重", "人工相关性门槛"],
    measurements: ["直接来源可打开", "DOI/标题唯一", "A—E相关性", "公开定量数据", "产业验证层级"],
    metrics: ["漏检线索", "重复率", "来源失效率", "弱相关淘汰数", "新增核心条目数=0"],
    evidenceBoundary: "本日结论仅表示在既定检索范围和质量门槛下无新增，不等于相关领域当天没有任何新记录。",
    firstSteps: ["保留查询式", "记录淘汰理由", "下一工作日增量复核"],
    researchConnection: "保护原子制造、MTJ/MRAM和可产业化低温计量的选文优先级。",
    takeaway: "宁可可审计地报零，也不以低相关内容凑数。",
  },
  {
    id: ids.method,
    date,
    type: "method",
    typeZh: "设备与方法路线",
    trackLabel: "D · 平台复现性",
    title: "零新增日设备路线：冻结参考样与脚本版本",
    subtitle: "利用无新文献窗口整理跨平台GR&R基线。",
    summary: "标准电阻、参考MTJ和标准磁样组成最小验收套件。",
    status: "平台SOP",
    relatedPaperIds: [],
    question: "如何把Oxford、Cryogenic和Quantum Design平台结果保持可比较？",
    rationale: "设备规格不是科研证明，只有同一样品、同一脚本和同一不确定度预算才能建立平台可追溯性。",
    workflow: ["开短路", "标准电阻", "参考MTJ", "标准磁样", "跨平台GR&R"],
    equipment: ["Oxford CFMS/He-3", "参考电阻", "参考MTJ", "标准磁矩样", "版本化采集脚本"],
    measurements: ["温稳", "场误差", "噪声PSD", "接触重复性", "丢点率"],
    metrics: ["重复性", "再现性", "偏差", "漂移", "样品端电子温度"],
    evidenceBoundary: "这是本站方法建议；需用真实平台数据建立控制限，不能由厂商标称值替代。",
    firstSteps: ["冻结样品", "冻结接线", "冻结脚本"],
    researchConnection: "直接服务MTJ低温输运、噪声和可靠性工艺反馈。",
    takeaway: "先锁定计量基线，再比较材料批次。",
  },
  {
    id: ids.atomic,
    date,
    type: "atomic",
    typeZh: "原子与极端制造",
    trackLabel: "E/B · 工艺基线",
    title: "零新增日原子制造路线：建立界面工艺最小元数据",
    subtitle: "让每个Å级变化都能追溯到腔体、靶材、真空与热预算。",
    summary: "为溅射、ALD/ALE、IBE和退火统一批次元数据。",
    status: "原子制造SOP",
    relatedPaperIds: [],
    question: "如何避免0.1–0.5 nm工艺变化被腔体历史和计量误差淹没？",
    rationale: "亚纳米插层和MgO界面研究只有在厚度、基压、真空中断、氧剂量与热预算可追溯时才可重复。",
    workflow: ["记录基压/残气", "靶材与腔次", "QCM/厚度校准", "真空中断", "退火热历史"],
    equipment: ["磁控溅射", "ALD/ALE", "IBE", "原位XPS/QCM", "RTA"],
    measurements: ["厚度", "成分深度", "粗糙度", "PMA/阻尼", "TMR/RA"],
    metrics: ["Å级重复性", "片内3σ", "跨批偏差", "界面污染", "失效率"],
    evidenceBoundary: "该路线是工艺数据治理建议，不代表任何具体插层或刻蚀配方已获得器件验证。",
    firstSteps: ["统一批次表", "标定厚度", "绑定电学结果"],
    researchConnection: "对应原子层界面、缺陷和成分控制的第一优先级。",
    takeaway: "没有元数据，就没有可信的原子级工艺窗口。",
  },
);
write("data/insight-archive.json", insights);

console.log(`Added verified zero-result archive for ${date}`);
