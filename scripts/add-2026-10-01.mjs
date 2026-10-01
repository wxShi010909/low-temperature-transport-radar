import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const write = (file, value) => fs.writeFileSync(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
const addUnique = (arr, item) => {
  if (arr.some((entry) => entry.id === item.id)) throw new Error(`duplicate id: ${item.id}`);
  arr.push(item);
};

const date = "2026-10-01";
const ids = {
  A: "a-elastic-inelastic-064416",
  B: "b-22nm-32mb-9062955",
  C: "c-boron-kotoite-014114",
  D: "d-qd-mpms3",
  E: "e-mg-insertion-7b11293",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B", "C"],
    title: "Elastic and inelastic conductance in Co-Fe-B/MgO/Co-Fe-B magnetic tunnel junctions",
    titleZh: "MgO厚度放大低温TMR衰减｜4.0 nm势垒从15 K 293%降至300 K 21.9%",
    authors: "Ayaz A. Khan et al.", venue: "Physical Review B 82, 064416 (2010)", published: "2010-08-16",
    timeTier: "关键低温输运/偏压谱学",
    system: "Co-Fe-B/MgO/Co-Fe-B磁隧道结，MgO势垒厚度tB系统覆盖1.8–4.0 nm；比较平行/反平行态电导随温度与偏压的变化。",
    conditions: "温区15–300 K，系统扫描偏压和MgO厚度。公开摘要未披露完整底层/钉扎层、结面积、退火温时和RA绝对值，本期不补写。",
    methods: ["15–300 K输运", "偏压谱", "MgO厚度序列", "P/AP电导分解", "弹性/非弹性通道拟合"],
    summary: "【实测】tB=4.0 nm时TMR由15 K的293%降至300 K的21.9%，衰减13.4倍；tB=1.8 nm仅衰减约1.6倍；【作者解释】热激发、自旋无关非弹性通道与界面/势垒缺陷共同削弱厚势垒的相干贡献。",
    relevance: "给MgO/CoFeB低温数据提供明确警告：TMR温变不能脱离势垒厚度、偏压和非弹性通道讨论，适合转成现有PPMS的厚度—温度—偏压三维DOE。",
    limitation: "器件较早且非现代纳米pMTJ；摘要未公开样本统计、WER、噪声、TDDB和晶圆级均匀性；弹性/非弹性分解属于模型解释。",
    industrialization: "最接近势垒厚度窗口与读偏压设计；仍缺低RA纳米结、BEOL退火、片内CV、读扰动、击穿寿命和阵列温度角验证。",
    whyRecommended: "先看TMR—温度随tB的分叉，再看P/AP偏压电导和非弹性拟合；40–55分钟。",
    score: 9.5, priority: "S", doi: "10.1103/PhysRevB.82.064416", arxiv: "",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.82.064416", backupUrl: "https://doi.org/10.1103/PhysRevB.82.064416",
    accessNote: "本轮已打开APS直接页面，核验1.8–4.0 nm厚度范围、15–300 K以及293%→21.9%、13.4倍与1.6倍对照。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["A"],
    title: "A 22nm 32Mb Embedded STT-MRAM with 10ns Read Speed, 1M Cycle Write Endurance, 10 Years Retention at 150°C and High Immunity to Magnetic Field Interference",
    titleZh: "22 nm 32 Mb嵌入式STT-MRAM｜10 ns读、150 °C十年保持与磁场抗扰",
    authors: "Yu-Der Chih et al.", venue: "2020 IEEE ISSCC, pp. 222–224", published: "2020-02-17",
    timeTier: "正式发表/产业阵列与可靠性",
    system: "22 nm逻辑工艺上的32 Mb嵌入式STT-MRAM宏，面向高温保持、快速读取和外磁场抗扰；公开题录未给完整MTJ膜层与RA。",
    conditions: "IEEE题录公开10 ns读取、100万次写耐久、150 °C下10年保持和高磁场抗扰。公开页面未披露逐bit原始分布、ECC配置、写脉宽/能耗及所有PVT条件。",
    methods: ["22 nm eMRAM", "32 Mb阵列", "10 ns读取", "150 °C保持", "磁场抗扰"],
    summary: "【实测/公开题录】32 Mb宏实现10 ns读、10^6次写耐久、150 °C下10年保持并强调外磁场抗扰；【未公开】公开题录不足以判断无ECC RBER、全阵列良率、测试磁场幅值与方向。",
    relevance: "把单结的TMR/RA拉回产品约束：高温保持、读速度、耐久和磁场免疫必须共同满足，且彼此存在Δ、写电流和感测裕量权衡。",
    limitation: "ISSCC题录数字是宏级宣称；100万次耐久低于先进器件常见目标，不能据此推断所有应用合格；缺失效位图和晶圆/批次统计。",
    industrialization: "已处于CMOS嵌入式阵列演示；距量产判断仍需PVT、焊接回流、磁场标准、ECC开销、长期老化、良率和成本数据。",
    whyRecommended: "先看10 ns感测路径与磁免疫方案，再追150 °C保持推算和耐久分布；30–45分钟。",
    score: 9.8, priority: "S", doi: "10.1109/ISSCC19947.2020.9062955", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/9062955", backupUrl: "https://doi.org/10.1109/ISSCC19947.2020.9062955",
    accessNote: "本轮已打开IEEE直接题录并核验22 nm、32 Mb、10 ns、10^6次、150 °C十年保持和磁场抗扰。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B", "E"],
    title: "Boron diffusion induced symmetry reduction and scattering in CoFeB/MgO/CoFeB magnetic tunnel junctions",
    titleZh: "B扩散把MgO变成kotoite｜C4v→C2v使理论TMR降至210%",
    authors: "Zhaoqiang Bai et al.", venue: "Physical Review B 87, 014114 (2013)", published: "2013-01-23",
    timeTier: "关键第一性原理/退火与界面缺陷",
    system: "从CoFeB/MgO/CoFeB退火后的B扩散出发，比较理想MgO、Mg3B2O6（kotoite）势垒以及界面残余B对结构稳定性与自旋输运的影响。",
    conditions: "用第一性原理结构/声子与量子输运计算评估退火后相稳定和TMR；公开摘要未给全部超胞、k点、交换关联泛函和电极层数。",
    methods: ["第一性原理", "声子色散", "kotoite稳定性", "对称性分析", "自旋输运"],
    summary: "【理论预测】Mg3B2O6声子稳定；CoFe/kotoite/CoFe的TMR约210%，比理想CoFe/MgO/CoFe预测低约2个数量级；【机制】势垒对称性由C4v降为C2v，散射并削弱Δ1类Bloch态；界面残余B会进一步降TMR。",
    relevance: "把退火中的B去向直接映射到势垒晶相、对称性过滤和TMR，可指导Ta/W/Mo吸B层、退火时间及原位界面化学表征。",
    limitation: "静态理想模型不等于真实非晶/多晶势垒；210%是理论值，不是器件实测；缺有限温扩散动力学、浓度连续变化和TDDB。",
    industrialization: "最接近退火扩散根因与材料筛选；仍缺真实堆栈STEM-EELS/HAXPES定量、扩散系数、晶圆统计及RA/TMR/击穿关联。",
    whyRecommended: "先看kotoite结构与声子，再看C4v/C2v输运对称性和界面B；45–60分钟。",
    score: 9.7, priority: "S", doi: "10.1103/PhysRevB.87.014114", arxiv: "",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.87.014114", backupUrl: "https://doi.org/10.1103/PhysRevB.87.014114",
    accessNote: "本轮已打开APS直接页面，核验Mg3B2O6稳定、210% TMR、低两个数量级、C4v→C2v与残余B结论。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A", "B"],
    title: "Magnetic Property Measurement System MPMS 3",
    titleZh: "Quantum Design MPMS 3｜≤10^-8 emu、±7 T、1.8–400 K与DC/VSM交叉校准",
    authors: "Quantum Design North America", venue: "厂商正式产品页与应用说明", published: "2026-10-01核验",
    timeTier: "厂商技术资料/不作为科研证明",
    system: "7 T SQUID磁强计/磁化率平台，支持SQUID-VSM、传统DC Scan和AC Susceptibility；可扩展He-3、ETO、旋转和高温炉。",
    conditions: "厂商标称1.8–400 K、±7 T、最大扫场700 Oe/s、300→1.8 K典型25 min；VSM低场灵敏度<1×10^-8 emu，高场<8×10^-8 emu，振幅0.1–8 mm。",
    methods: ["SQUID-VSM", "DC Scan", "AC磁化率", "QuickSwitch 7 T", "MultiVu自动化"],
    summary: "【厂商标称】低场VSM灵敏度优于10^-8 emu、7 T高场优于8×10^-8 emu；传统DC Scan低/高场分别优于5×10^-8/6×10^-7 emu；【应用说明】双模式比对可得到与样品形状/径向偏移相关的校正因子。",
    relevance: "可用于超薄CoFeB自由层、退火吸B层和低温各向异性的独立磁学基线，DC/VSM双模式尤其适合检查样品安装和背景伪差。",
    limitation: "厂商规格不是用户现场数据；灵敏度依赖磁场、平均时间、样品托和居中；ETO不能替代专用低噪声输运链，需FAT/SAT实测。",
    industrialization: "最接近研发计量与工艺反馈平台；采购前仍缺标准样IQ/OQ/PQ、GR&R、脚本/API回归、维护成本、MTBF和探杆兼容矩阵。",
    whyRecommended: "先看低/高场灵敏度分段，再看DC/VSM校正应用说明和He-3/ETO选件边界；25–35分钟。",
    score: 8.9, priority: "A", doi: "", arxiv: "",
    url: "https://qdusa.com/products/mpms3.html", backupUrl: "https://qdusa.com/siteDocs/appNotes/1500-031.pdf",
    accessNote: "本轮已打开Quantum Design官方产品页与应用说明，核验温区、磁场、扫场、冷却时间、两种DC模式灵敏度及自动化；明确标注厂商资料。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B"],
    title: "Voltage-Assisted Magnetic Switching in MgO/CoFeB-Based Magnetic Tunnel Junctions by Way of Interface Reconstruction",
    titleZh: "0.2 nm Mg原子级插层重构界面｜TMR 13.2%→57.6%、VCMA超100 fJ/Vm",
    authors: "Jungho Ko and Jongill Hong", venue: "ACS Applied Materials & Interfaces 9, 42296–42301 (2017)", published: "2017-11-21",
    timeTier: "关键原子界面工程/VCMA",
    system: "MgO/CoFeB垂直MTJ，在MgO与CoFeB之间插入0.2–0.4 nm Mg，以抑制过氧化、改善织构/粗糙度并释放界面应力。",
    conditions: "比较无插层和亚单层Mg插层；公开摘要给出0.2 nm最佳TMR数据与0.2–0.4 nm工艺窗口，但未公开完整堆栈、退火温时、RA和晶圆均匀性。",
    methods: ["0.2–0.4 nm Mg插层", "结构/粗糙度", "PMA", "TMR", "VCMA开关"],
    summary: "【实测】垂直磁矩与PMA分别提高2.1和1.8倍；TMR由13.2%增至57.6%（4.4倍）；VCMA系数超过100 fJ/Vm、约为插层前6倍，并呈对电场近对称双极性；【实测】外磁场辅助下实现电压诱导翻转。",
    relevance: "直接展示亚单层金属插层如何同时改变氧化、织构、粗糙度、应力和VCMA，是MBE/溅射原子级界面DOE的高价值模板。",
    limitation: "仍需外磁场辅助且绝对TMR低于现代MRAM；名义0.2 nm可能不连续；缺RA、WER、保持、耐久、TDDB、纳米尺寸和300 mm统计。",
    industrialization: "最接近VCMA界面模块；障碍是亚单层覆盖率/厚度计量、氧剂量窗口、无场翻转、BEOL退火、图形化后可靠性和片内均匀性。",
    whyRecommended: "先看0/0.2/0.4 nm界面结构，再看TMR、PMA与VCMA三组联动；40–55分钟。",
    score: 9.8, priority: "S", doi: "10.1021/acsami.7b11293", arxiv: "",
    url: "https://pubs.acs.org/doi/10.1021/acsami.7b11293", backupUrl: "https://doi.org/10.1021/acsami.7b11293",
    accessNote: "本轮已打开ACS直接页面，核验0.2–0.4 nm、2.1/1.8倍、13.2%→57.6%、4.4倍、>100 fJ/Vm和6倍VCMA。", recommendedOn: date, featured: true,
  },
];

const backgrounds = [
  "TMR来自自旋相关隧穿；温度、偏压和势垒厚度会改变相干Δ1与缺陷/磁振子非弹性通道的相对权重。",
  "阵列级eMRAM必须把材料热稳定因子、写入寿命、感测裕量和外磁场抗扰合并验证。",
  "CoFeB退火结晶依赖B外扩散；若B进入MgO或滞留界面，会改变局域晶相与对称性过滤。",
  "超薄磁层磁矩接近背景量级，SQUID的测量模式、样品居中和高场背景会决定结果是否可信。",
  "亚单层Mg既可能作为氧化牺牲层，也可能改变织构、粗糙度和应力，从而联动PMA、TMR与VCMA。",
];
const questions = [
  "MgO厚度为何显著放大TMR的温度与偏压衰减，哪些通道负责？",
  "22 nm 32 Mb宏能否同时达到10 ns读、150 °C保持、耐久与磁免疫？",
  "B扩散形成的kotoite怎样通过对称性降低把理想TMR拉回实际量级？",
  "MPMS 3的DC/VSM模式如何交叉校正超薄磁层的背景和安装误差？",
  "0.2–0.4 nm Mg插层能否重构MgO/CoFeB界面并放大VCMA？",
];
const findings = [
  ["【实测】4.0 nm MgO：TMR 293%@15 K→21.9%@300 K。", "【实测】厚势垒衰减13.4倍，1.8 nm仅约1.6倍。", "【实测】电阻和TMR都随温度、偏压升高而下降。", "【作者解释】非弹性/缺陷通道对厚势垒贡献更显著。"],
  ["【实测/题录】22 nm、32 Mb、10 ns读取。", "【实测/题录】写耐久10^6次。", "【实测/题录】150 °C十年保持。", "【实测/题录】高外磁场抗扰；公开页未给磁场数值。"],
  ["【理论】Mg3B2O6声子稳定。", "【理论】CoFe/kotoite/CoFe TMR约210%。", "【理论】相对理想MgO预测降低约2个数量级。", "【机制】C4v→C2v散射Δ1类态，残余界面B进一步降TMR。"],
  ["【厂商标称】1.8–400 K、±7 T、700 Oe/s。", "【厂商标称】VSM低场<10^-8 emu、高场<8×10^-8 emu。", "【厂商标称】300→1.8 K典型25 min。", "【应用说明】DC/VSM比对可校正样品形状和径向偏移。"],
  ["【实测】磁矩/PMA提高2.1/1.8倍。", "【实测】TMR 13.2%→57.6%，提高4.4倍。", "【实测】VCMA>100 fJ/Vm，约提高6倍。", "【实测】外磁场辅助下完成电压诱导翻转。"],
];
const explanations = [
  "厚势垒放大缺陷与非弹性隧穿的串联影响，使热激发对自旋选择性的稀释更明显；该归因来自模型，需噪声/谱学交叉确认。",
  "高Δ改善保持但通常提高写入代价，感测电路和磁屏蔽/编码用于吸收分布；公开题录不能拆分各模块贡献。",
  "B进入MgO后形成低对称稳定相，破坏MgO四重对称的Δ1过滤；静态理论不提供真实扩散速率。",
  "VSM快速且动态范围大，DC Scan对特定样品托/选件更合适；两者比例可暴露偏心和几何响应差异。",
  "Mg优先氧化可保护CoFeB并改善界面结构，但插层过厚会改变势垒和连续性；最佳点必须与RA/可靠性共同确定。",
];
const connections = [
  "变量：MgO 1.0–4.0 nm、温度、偏压；对照：同批次空白；指标：RA、TMR、dI/dV、RTN、TDDB。",
  "变量：温度、读时序、磁场方向/幅值、写循环；对照：ECC/磁免疫开关；指标：RBER、WER、保持、耐久、功耗。",
  "变量：Ta/W/Mo吸B层、退火温时、MgO沉积法；对照：无吸B层；指标：HAXPES/EELS、相结构、RA/TMR、击穿。",
  "变量：DC/VSM、振幅、场区和样品托；对照：Pd/标准磁矩/空托；指标：偏差、噪声、居中误差、GR&R。",
  "变量：Mg 0/0.1/0.2/0.3/0.4 nm与氧剂量；对照：无插层；指标：XPS/TEM、粗糙度、应力、PMA、TMR、VCMA、TDDB。",
];
const details = papers.map((paper, i) => ({
  id: paper.id, oneSentence: paper.summary, background: backgrounds[i], question: questions[i], workflow: paper.methods,
  findings: findings[i], explanation: explanations[i], whyItMatters: [paper.relevance, paper.industrialization], researchConnection: connections[i],
  limitationsDetailed: paper.limitation, terms: ["实测、理论、厂商标称和本站推断分别标注。", "未公开的堆栈、样本量或可靠性数字不补写。"], takeaway: paper.whyRecommended,
}));

const review = {
  id: "review-mgo-mtj-174101", kind: "正式综述", track: "B", secondaryTracks: ["C", "E"],
  title: "How we developed MgO-based magnetic tunnel junctions", titleZh: "2026正式综述｜MgO-MTJ从>1000%理论预言到CoFeB量产堆栈",
  authors: "Shinji Yuasa", venue: "Journal of Magnetism and Magnetic Materials 648, 174101 (2026)", published: "2026-06-15", recommendedOn: date,
  doi: "10.1016/j.jmmm.2026.174101", url: "https://www.sciencedirect.com/science/article/pii/S0304885326002921", backupUrl: "https://doi.org/10.1016/j.jmmm.2026.174101",
  assistantSummary: "开放获取正式综述回顾Al-O结、2001年Fe/MgO/Fe超过1000%的Δ1相干隧穿预言、2004年室温近200%的外延实证，以及CoFeB/MgO/CoFeB向HDD、STT-MRAM和传感器的产业迁移。",
  whySelected: "它把今天的低温厚度效应、B扩散、Mg插层和阵列指标串成一条材料—界面—产品主线。",
  readingGuide: ["先看Al-O到MgO的性能断点", "再看Δ1对称性过滤", "跟踪外延Fe到非晶CoFeB转化", "最后看HDD/MRAM/传感器产业化；55–75分钟"], notNew: false,
};

const classic = {
  id: "classic-miyazaki-tezuka-1995", kind: "经典文章", track: "A", secondaryTracks: ["B"],
  title: "Giant magnetic tunneling effect in Fe/Al2O3/Fe junction", titleZh: "Miyazaki–Tezuka 1995经典｜Fe/Al2O3/Fe在4.2 K 30%、300 K 18%",
  authors: "T. Miyazaki and N. Tezuka", venue: "Journal of Magnetism and Magnetic Materials 139, L231–L234 (1995)", published: "1995-01-02", recommendedOn: date,
  doi: "10.1016/0304-8853(95)90001-2", url: "https://www.sciencedirect.com/science/article/abs/pii/0304885395900012", backupUrl: "https://doi.org/10.1016/0304-8853(95)90001-2",
  assistantSummary: "Fe/Al2O3/Fe结首次实测4.2 K 30%、300 K 18%的大TMR；室温电导满足G=96.2(1+0.09cosθ) Ω^-1，并在4.2–300 K追踪电阻与隧穿电流。",
  whySelected: "它提供从低温到室温TMR和角度余弦关系的原始基线，可与今天MgO厚度、对称性和界面工程逐层对照。",
  readingGuide: ["先看4.2/300 K TMR", "理解cosθ电导关系", "查看温度依赖", "再比较MgO Δ1过滤；20–30分钟"], notNew: true,
};

const curatedDetails = [
  {
    id: review.id, oneSentence: review.assistantSummary, background: review.titleZh,
    question: "MgO-MTJ为何能从被怀疑的>1000%理论预言走到CoFeB量产堆栈？", workflow: review.readingGuide,
    findings: ["【综述】Al-O室温MR仅数十个百分点。", "【理论史】2001年预测Fe/MgO/Fe超过1000%。", "【实验史】2004年外延Fe/MgO/Fe室温接近200%。", "【产业】CoFeB/MgO/CoFeB进入HDD读头、STT-MRAM和传感器。"],
    explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "把每个材料/工艺DOE明确归入对称性过滤、结晶/扩散、RA/TMR或器件可靠性四类指标。",
    limitationsDetailed: "作者视角的历史综述侧重成功路线；并非对各厂商量产良率、成本和所有替代势垒的系统meta分析。", terms: ["Δ1是MgO相干隧穿关键对称性", "历史性能不代表当前工艺窗口"], takeaway: review.readingGuide.join("；"),
  },
  {
    id: classic.id, oneSentence: classic.assistantSummary, background: classic.titleZh,
    question: "非晶Al2O3势垒能否在室温保持可用TMR，温度和磁化夹角怎样控制电导？", workflow: classic.readingGuide,
    findings: ["【实测】4.2 K TMR 30%。", "【实测】300 K TMR 18%。", "【实测】室温G=96.2(1+0.09cosθ) Ω^-1。", "【实测】覆盖4.2–300 K电阻与隧穿电流。"],
    explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "用同样的温度/角度测量框架比较Al2O3、MgO及缺陷富集势垒，分离电极磁化与势垒通道。",
    limitationsDetailed: "早期Fe/Al2O3/Fe大面积结、无现代PMA与纳米写入；30%/18%只用于历史基线，不能代表MRAM指标。", terms: ["角度余弦关系是简化自旋极化图景", "实测与现代相干隧穿机制不同"], takeaway: classic.readingGuide.join("；"),
  },
];

const insights = [
  {
    id: "2026-10-01-boron-barrier-transport", date, type: "research", typeZh: "研究机会", trackLabel: "A/C/E · B扩散—势垒—输运",
    title: "B去向—MgO厚度—低温谱学三联DOE", subtitle: "把B扩散和非弹性隧穿放进同一批厚度/退火矩阵。", summary: "用结构化学证据解释TMR(T,V)而非只比较峰值。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.C, review.id], question: "厚势垒的强温变有多少来自B诱导相变和界面残余？", rationale: "实验厚度效应和理论kotoite机制指向同一势垒缺陷链，但尚未在同片样品闭环。",
    workflow: ["MgO厚度矩阵", "Ta/W/Mo吸B层", "退火温时矩阵", "HAXPES/EELS", "15–300 K dI/dV/RTN"], equipment: ["多靶溅射/MBE", "真空退火", "XPS/TEM", "PPMS", "低噪声前放"], measurements: ["B深度分布", "晶相", "RA/TMR", "dI/dV", "RTN/TDDB"], metrics: ["厚度误差", "B原子比", "TMR温变倍数", "缺陷谱", "击穿寿命"], evidenceBoundary: "kotoite与210%来自理想理论；需由真实堆栈结构化学直接验证。", firstSteps: ["先平面膜化学", "再微米结谱学", "最后纳米柱可靠性"], researchConnection: "连接退火扩散、低温输运和可靠性。", takeaway: "让每条输运异常都有对应的B分布与势垒相证据。",
  },
  {
    id: "2026-10-01-mpms-dual-mode", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/A · SQUID双模式计量",
    title: "MPMS 3 DC—VSM双模式GR&R", subtitle: "用同一样品比值识别居中、几何与高场背景误差。", summary: "把厂商灵敏度转成超薄磁层的现场验收矩阵。", status: "平台SOP",
    relatedPaperIds: [ids.D, ids.E], question: "≤10^-8 emu规格在真实CoFeB见证片上能否重现？", rationale: "模式、场区、振幅和样品托都会改变有效噪声与系统误差。",
    workflow: ["空托/标准样", "DC与VSM比值", "0.1–8 mm振幅", "低/高场分段", "跨日GR&R"], equipment: ["MPMS 3", "Pd标准样", "超薄CoFeB见证片", "自动化脚本"], measurements: ["磁矩", "背景", "居中曲线", "噪声谱", "漂移"], metrics: ["偏差", "重复性", "再现性", "模式比例", "测量时间"], evidenceBoundary: "厂商标称是验收目标，不是现有实验室结果。", firstSteps: ["先标准样", "再空托", "最后真实薄膜"], researchConnection: "为PMA/VCMA和退火反馈提供独立磁学证据。", takeaway: "用双模式一致性而非单次最低噪声宣称验收平台。",
  },
  {
    id: "2026-10-01-mg-insertion-window", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B · 亚单层Mg界面",
    title: "0–0.4 nm Mg插层—氧剂量二维窗口", subtitle: "同时寻找覆盖连续性、低RA、高PMA与高VCMA交集。", summary: "把亚单层沉积从名义厚度升级为覆盖率和化学态闭环。", status: "原子制造路线",
    relatedPaperIds: [ids.E, ids.B, review.id], question: "0.2 nm最佳点能否在用户设备上稳定复现并支持无场器件？", rationale: "Mg插层联动多个指标，但名义0.2 nm易受沉积速率、岛状生长和氧剂量影响。",
    workflow: ["QCM/RHEED标定", "Mg 0–0.4 nm", "氧剂量矩阵", "原位XPS/封护", "PMA/TMR/VCMA/TDDB"], equipment: ["MBE/溅射", "真空互联", "原位XPS/RHEED", "TEM/AFM", "脉冲电测"], measurements: ["覆盖率", "氧化态", "粗糙度/应力", "RA/TMR", "VCMA/可靠性"], metrics: ["0.02 nm级重复性", "片内CV", "PMA", "VCMA", "WER/TDDB"], evidenceBoundary: "57.6% TMR和>100 fJ/Vm来自特定堆栈；本站二维路线为待验证推断。", firstSteps: ["平面见证片", "微米结", "纳米无场开关"], researchConnection: "直接服务原子界面、VCMA与可制造pMTJ。", takeaway: "最优插层必须同时通过化学、磁性、电输运和可靠性四道门。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`;
reports.reportDate = date;
reports.history.push({ date, label: "详细日报：MgO低温通道—22 nm阵列—B扩散对称性—MPMS 3—Mg原子插层", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
for (const paper of papers) addUnique(reports.papers, paper);
write("data/reports.json", reports);

const paperDetails = read("data/paper-details.json");
for (const item of details) addUnique(paperDetails, item);
write("data/paper-details.json", paperDetails);

const curated = read("data/curated-reading.json");
curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] });
addUnique(curated.items, review); addUnique(curated.items, classic);
write("data/curated-reading.json", curated);

const curatedDetailData = read("data/curated-details.json");
for (const item of curatedDetails) addUnique(curatedDetailData, item);
write("data/curated-details.json", curatedDetailData);
write("data/daily-reading.json", { date, review, classics: [classic] });

const insightData = read("data/insight-archive.json");
insightData.history.push({ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] });
for (const item of insights) addUnique(insightData.items, item);
write("data/insight-archive.json", insightData);

console.log(`Added detailed radar for ${date}`);
