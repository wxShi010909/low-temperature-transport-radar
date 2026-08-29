import fs from "node:fs";

const read = (name) => JSON.parse(fs.readFileSync(new URL(`../data/${name}`, import.meta.url), "utf8"));
const weeklyFile = new URL("../data/weekly-reading.json", import.meta.url);
const weekly = read("weekly-reading.json");
const reports = read("reports.json");
const paperDetails = read("paper-details.json");
const curated = read("curated-reading.json");
const curatedDetails = read("curated-details.json");

const reviewId = "review-sot-mram-probabilistic-2026";
const paperIds = [
  "jva-44-042402-peald-sin-md",
  "jva-44-042601-diamond-bpale",
  "jphysd-59-055004-cryogenic-mtj-sensors",
  "rsi-97-083701-rf-mk-stm",
];

const paperById = new Map(reports.papers.map((item) => [item.id, item]));
const detailById = new Map(paperDetails.map((item) => [item.id, item]));
const curatedById = new Map(curated.items.map((item) => [item.id, item]));
const curatedDetailById = new Map(curatedDetails.map((item) => [item.id, item]));

const roles = {
  [reviewId]: "正式综述 · SOT-MRAM材料—单元—晶圆—应用总图",
  "jva-44-042402-peald-sin-md": "理论计算 / 原子制造 · PEALD表面反应与亚表面残留",
  "jva-44-042601-diamond-bpale": "原子与极端制造 · 高吞吐偏压脉冲ALE",
  "jphysd-59-055004-cryogenic-mtj-sensors": "MTJ器件 / 低温输运 · 磁化模式与读出稳定性",
  "rsi-97-083701-rf-mk-stm": "设备与测量平台 · mK隧穿结射频反射计量",
};

const structures = {
  [reviewId]: "正式Review覆盖重金属/铁磁层产生SOT、MgO基MTJ读出以及2T–1SOT/三端单元；文中汇总多种材料和晶圆平台，不存在一个统一固定堆栈。",
  "jva-44-042402-peald-sin-md": "Si与Cl终止Si原子模型；对应SiCl₄类含氯前驱体第一半循环之后、N₂⁺等离子体参与的SiN PEALD第二半循环。该模型不是CoFeB/MgO。",
  "jva-44-042601-diamond-bpale": "单晶金刚石试样；Oxford Instruments PlasmaPro 100 Cobra ICP-RIE，Ar/Cl₂连续供气，仅对基片DC偏压做脉冲控制。",
  "jphysd-59-055004-cryogenic-mtj-sensors": "热氧化Si上磁控溅射MTJ；MgO势垒2.0–2.9 nm。单轴代表单元160×20 μm²、38个串联；涡旋自由层为6–16 μm圆形，代表器件直径15 μm。",
  "rsi-97-083701-rf-mk-stm": "自建毫开尔文STM加装RF匹配网络；Nb针尖/Au单晶构成超导体—绝缘体—正常金属隧穿结，以针尖—样品电容调节阻抗。",
};

const nextSteps = {
  [reviewId]: "变量：SOT层材料/厚度/晶向×自由层厚度×退火；对照：无SOT层、Cu间隔层与同堆栈STT-MTJ；指标：转矩效率、PMA、TMR/RA、2 ns级Jc、WER、保持、耐久和片内/片间3σ。先做连续膜—Hall bar—完整MTJ三级样，避免一开始就把所有波动混在器件端。",
  "jva-44-042402-peald-sin-md": "变量：离子能量×剂量×占空比×基板温度；对照：无偏压自由基、热ALD、不同前驱体；指标：角分辨XPS/ToF-SIMS深度、TEM-EELS、H/N/Cl、漏电、击穿、TMR/RA保持率。先用Si见证片校准表面去Cl与埋Cl，再转真实MTJ侧壁。",
  "jva-44-042601-diamond-bpale": "变量：偏压功率×脉宽×Cl₂/Ar×吹扫时间；对照：连续RIE、传统ALE、纯Ar物理刻蚀；指标：EPC平台、选择比、RMS、残Cl、损伤层深度、PMA与TMR保持率。迁移到CoFeB/MgO时先做 blanket film，不直接从金刚石化学外推。",
  "jphysd-59-055004-cryogenic-mtj-sensors": "变量：自由层几何/磁化模式×10–300 K×场方向；对照：同堆栈单轴/涡旋器件与非磁电阻；指标：TMR、RA、低场斜率、矫顽场、磁滞、1/f噪声和温漂。至少5个器件/条件并同时报告中位数与3σ。",
  "rsi-97-083701-rf-mk-stm": "变量：匹配电容/针尖距离×载波功率×温度×DC偏压；对照：DC STM、50 Ω标准、开路/短路和假结；指标：S₁₁、带宽、电子温度、噪声、漂移、空间复现率。随后把高RA MTJ或测试结接入同一去嵌入链验证局域缺陷。",
};

const industrialization = {
  [reviewId]: "最接近SOT-MRAM技术路线与系统需求定义。已有文献涉及200/300 mm晶圆，但综述本身不是单一量产流程；仍缺统一节点下的单元面积、BEOL热预算、2 ns写入尾部分布、PVT、阵列良率、ECC、封装和成本/OEE闭环。",
  "jva-44-042402-peald-sin-md": "最接近PEALD封护和界面残留窗口设计。距离可制造MTJ还缺真实CoFeB/MgO侧壁、鞘层能量分布、300 mm深度均匀性、颗粒、前驱体残留、TMR/RA、击穿、保持和耐久验证。",
  "jva-44-042601-diamond-bpale": "最接近设备级高吞吐ALE模块；6 s节拍有制造吸引力，但材料是金刚石。尚缺MTJ材料选择比、端点、Cl残留、再沉积、侧壁磁损伤、300 mm均匀性、批间SPC、腔体记忆和器件良率。",
  "jphysd-59-055004-cryogenic-mtj-sensors": "最接近低温磁传感器器件验证，并非MRAM单元演示。进入存储器仍需纳米pMTJ、写电流/脉宽、WER、保持、耐久、读扰、阵列互联和晶圆级PVT统计。",
  "rsi-97-083701-rf-mk-stm": "处于先进研发计量环节。要服务器件开发还需标准件溯源、自动阻抗匹配、封装/晶圆探针兼容、坐标回访、长期漂移、吞吐和跨设备GR&R；不能把局域成像直接写成产线检测。",
};

function weeklyItem(id, rank) {
  const meta = id === reviewId ? curatedById.get(id) : paperById.get(id);
  const detail = id === reviewId ? curatedDetailById.get(id) : detailById.get(id);
  if (!meta || !detail) throw new Error(`Missing weekly source ${id}`);
  return {
    id,
    rank,
    role: roles[id],
    background: detail.background,
    question: detail.question,
    structure: structures[id],
    process: detail.workflow.join(" → "),
    keyFindings: detail.findings.slice(0, 5),
    mechanism: detail.explanation,
    boundary: detail.limitationsDetailed,
    connection: detail.researchConnection,
    nextStep: nextSteps[id],
    industrialization: industrialization[id],
    readingGuide: meta.whyRecommended ?? meta.readingGuide?.join(" ") ?? detail.takeaway,
  };
}

const report = {
  date: "2026-08-29",
  weekStart: "2026-08-24",
  weekEnd: "2026-08-28",
  title: "从原子层残留控制走到MTJ低温读出与局域RF计量",
  subtitle: "本周不追逐零散新论文，而用一篇SOT-MRAM正式综述和四篇可落地研究，把晶圆路线、PEALD/ALE、低温MTJ与毫开尔文测量串成制造—器件—计量闭环。",
  selectionCount: 5,
  reviewId,
  paperIds,
  mainLine: "SOT-MRAM材料与晶圆路线 → PEALD表面/亚表面成分控制 → 偏压脉冲ALE低损伤精修 → 10–300 K MTJ读出稳定性 → mK局域RF阻抗计量",
  coverage: {
    A: "用10–300 K单轴/涡旋MTJ实测说明TMR、灵敏度、矫顽场和磁滞必须分开计量，并以mK STM的RF链延伸到局域隧穿缺陷。",
    B: "以SOT-MRAM读写分离、MgO基MTJ和自由层磁化模式为器件主线，聚焦PMA、TMR/RA、Jc、温漂与读出窗口。",
    C: "SiN PEALD论文用分子动力学追踪N₂⁺碰撞级联、表面去Cl与亚表面埋Cl；这是理论+既有实验趋势核验，不冒充MTJ直接实测。",
    D: "以mK STM射频反射计的阻抗匹配、Nb相干峰电子温度校准和5 nm²局域成像建立高RA隧穿结计量模板；本周未拿厂商资料替代科研证据。",
    E: "以PEALD离子能量/残留和BP-ALE连续气体+偏压脉冲两条路线，连接原位封护、侧壁精修、节拍与损伤控制。",
  },
  sharedVariables: [
    "材料与界面：SOT层/自由层/MgO、SiN封护、Cl/H/N残留、自由层磁化模式与势垒局域缺陷。",
    "工艺：SOT层厚度/晶向、退火、N₂⁺能量/剂量/占空比、Cl₂/Ar、偏压功率/脉宽、吹扫时间和原位封护。",
    "器件：2T–1SOT/三端单元、结面积、自由层几何、TMR、RA、PMA、Jc、低场灵敏度、磁滞和接触/侧壁漏电。",
    "测量：10–300 K R–H、1/f噪声、温漂、S₁₁、电子温度、RF带宽、局域成像、XPS/ToF-SIMS深度和TEM-EELS。",
    "制造与可靠性：300 mm片内/片间3σ、颗粒、端点、批间SPC、WER、保持、耐久、读扰、BEOL热预算、吞吐、GR&R和成本。",
  ],
  readingOrder: [
    { id: reviewId, reason: "先建立SOT材料、读写分离单元、无场翻转、晶圆集成与p-bit的共同评价框架。" },
    { id: "jva-44-042402-peald-sin-md", reason: "再看原子层工艺为什么不能只看表面：去Cl同时可能把Cl压入亚表面。" },
    { id: "jva-44-042601-diamond-bpale", reason: "随后看连续气体和偏压脉冲如何把原子精度与6 s节拍放进同一窗口。" },
    { id: "jphysd-59-055004-cryogenic-mtj-sensors", reason: "接着检验制造得到的MTJ在降温后究竟是TMR变好，还是实际读出斜率和磁滞也变好。" },
    { id: "rsi-97-083701-rf-mk-stm", reason: "最后把宏观R–H推进到mK局域RF阻抗与电子温度校准，寻找平均值掩盖的缺陷。" },
  ],
  checklist: [
    "建立连续膜—图形化MTJ—完整三端器件三级样品链；同批记录XRR/TEM/XPS、PMA、TMR/RA、Jc、侧壁残留、10–300 K读出与失效截面。",
    "做PEALD离子能量×剂量×占空比DOE；无偏压自由基和热ALD作对照，用XPS/ToF-SIMS深度、TEM-EELS、漏电与TMR保持率共同判定，不只看表面Cl。",
    "做BP-ALE偏压功率×脉宽×Cl₂/Ar×吹扫时间DOE；连续RIE、传统ALE和纯Ar作对照，联测EPC、选择比、RMS、残Cl、磁损伤与TMR损失。",
    "做同堆栈单轴/涡旋自由层×10–300 K×场方向矩阵；同时报告TMR、RA、灵敏度、矫顽场、磁滞、1/f噪声、温漂、中位数和3σ。",
    "建立RF链开路/短路/50 Ω/假结/Nb标准五级校准；固定S₁₁、带宽、电子温度、载波加热、漂移和坐标回访，再接高RA MTJ测试结。",
    "所有制造判断至少补齐300 mm或等效九点均匀性、样本量、尾部分布、WER、保持、耐久、读扰、BEOL热预算和批间SPC；原文未公开数据不估算。",
  ],
  comparison: [
    {
      id: reviewId,
      stage: "SOT-MRAM路线与晶圆框架",
      evidence: "2026正式Review的跨文献归纳；SHE/REE、2T–1SOT、晶圆集成和p-bit来自不同平台，不能拼成同一器件。",
      keyNumbers: "综述引用MgO/CoFeB室温TMR 604%和300 mm高良率SOT-MTJ等代表结果；这些是被综述引用的独立论文数字，不是综述作者同一批实测。",
      manufacturingGap: "缺统一工艺节点下的单元面积、PVT、写入尾部、阵列ECC、BEOL热预算、封装、成本与OEE闭环。",
    },
    {
      id: "jva-44-042402-peald-sin-md",
      stage: "PEALD成分/损伤控制",
      evidence: "分子动力学为主，并与可比离子束实验趋势核验；不是CoFeB/MgO器件实测。",
      keyNumbers: "正式发表于2026-05-11；公开摘要未给模拟离子能量、剂量、温度、胞元和Cl残留比例，故不补造定量值。",
      manufacturingGap: "缺真实MTJ侧壁、能量分布、300 mm深度均匀性、颗粒、漏电、TMR/RA、击穿、保持和耐久。",
    },
    {
      id: "jva-44-042601-diamond-bpale",
      stage: "高吞吐原子层精修",
      evidence: "EPC、循环时间、ALE窗口、AFM平滑与OES为金刚石上的直接实验；迁移到MTJ是本站建议。",
      keyNumbers: "Ar/Cl₂、室温、6 s/cycle、0.90±0.02 Å/cycle；多块单晶金刚石粗糙度降低，公开摘要未给300 mm均匀性。",
      manufacturingGap: "缺CoFeB/MgO选择比、残Cl/再沉积、端点、磁损伤、300 mm SPC、腔体记忆和器件良率。",
    },
    {
      id: "jphysd-59-055004-cryogenic-mtj-sensors",
      stage: "低温MTJ器件读出",
      evidence: "10–300 K TMR、灵敏度、矫顽场与磁滞为直接实测；低温热激活/磁化模式为作者解释。",
      keyNumbers: "10 K时TMR相对300 K：单轴+54%、涡旋+32%；灵敏度1.05→0.88与0.54→0.57 %/Oe；涡旋温度系数−376→−21 ppm/K。",
      manufacturingGap: "微米传感器而非纳米MRAM；缺RA、Jc、WER、保持、耐久、读扰、阵列互联和晶圆PVT。",
    },
    {
      id: "rsi-97-083701-rf-mk-stm",
      stage: "mK局域RF计量",
      evidence: "阻抗调谐、Nb相干峰校准和Au局域RF成像为工程实测；迁移到MTJ为本站推断。",
      keyNumbers: "Au扫描区50×50 nm²；可分辨总表面积低至5 nm²小岛。公开摘要未给基温、载频、带宽、S₁₁和绝对灵敏度。",
      manufacturingGap: "缺晶圆/封装兼容、自动匹配、坐标回访统计、长期漂移、吞吐、标准件溯源和GR&R。",
    },
  ],
  items: [reviewId, ...paperIds].map((id, index) => weeklyItem(id, index + 1)),
  sourceNote: "五篇均在本轮实际打开并核验至少一个直接来源：Wiley正式Review页、AVS/AIP正式论文页、IOP正式论文的作者公开全文以及AIP RSI正式页；逐项核对题目、作者、发表日期、DOI和公开关键数据，并按DOI/规范化标题去重。未选厂商资料充当科研证据；PEALD与RF公开页未提供的能量、剂量、基温、频率、带宽、RA、WER等均明确标为原文未公开。",
};

weekly.reports = [report, ...weekly.reports.filter((entry) => entry.date !== report.date)];
weekly.updatedAt = "2026-08-29T10:00:00+08:00";
fs.writeFileSync(weeklyFile, `${JSON.stringify(weekly, null, 2)}\n`);

console.log(`Updated weekly-reading.json for ${report.date} with ${report.selectionCount} selections.`);
