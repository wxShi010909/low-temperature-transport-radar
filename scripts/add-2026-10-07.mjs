import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const write = (f, v) => fs.writeFileSync(path.join(root, f), `${JSON.stringify(v, null, 2)}\n`);
const add = (a, x) => { if (a.some((e) => e.id === x.id)) throw new Error(`duplicate id: ${x.id}`); a.push(x); };
const date = "2026-10-07";
const ids = {
  A: "a-cryogenic-vcma-3284503",
  B: "b-wafer-sot-crossbar-aee6952",
  C: "c-partial-oxidation-ae24d6",
  D: "d-oxford-teslatronpt-plus",
  E: "e-rie-damage-recovery-170296",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B", "C"],
    title: "Engineering of Voltage-Controlled Magnetic Anisotropy Magnetic Tunnel Junctions at Cryogenic Temperatures",
    titleZh: "低温VCMA-MTJ｜10 K系数35 fJ/Vm与4 K确定性写入窗口",
    authors: "Pedro Brandão Veiga et al.", venue: "IEEE Transactions on Magnetics 59, 3401105 (2023)", published: "2023-06-16",
    timeTier: "近2年高相关/低温器件建模", system: "CoFeB/MgO/CoFeB垂直MTJ，自由层约1.7 nm；实验提取高RA器件的VCMA系数，再以随机Landau–Lifshitz–Gilbert类模型寻找低温确定性进动翻转窗口。",
    conditions: "温度从室温降至5 K；公开来源给出10 K时VCMA系数最高约35 fJ/Vm。模拟采用ξ=100 fJ/Vm、面内辅助场9 mT，在4 K得到0.6–0.7 V确定性开关窗口；脉冲宽度、结直径和完整堆栈需回原文核对。",
    methods: ["低温电输运", "VCMA系数提取", "随机磁化动力学", "电压脉冲", "开关概率图"],
    summary: "【实测】ξ随降温增强，10 K最高约35 fJ/Vm；【模拟】4 K、ξ=100 fJ/Vm、9 mT下出现0.6–0.7 V确定性窗口；【作者估算】低温可将热稳定要求相关参数缩小约100倍；【推演】优化后写能可能降至约70 aJ，非本器件直接实测。",
    relevance: "把低温下PMA、VCMA系数、热噪声和确定性开关连成可复现实验—模型链，可直接用于4–300 K MTJ脉冲平台和参数标定。",
    limitation: "70 aJ是条件性推演；确定性窗口依赖100 fJ/Vm和9 mT模拟条件。缺大样本WER、阵列、无场写入、TDDB、耐久和晶圆统计。",
    industrialization: "最接近低温VCMA单元和紧凑模型；距可制造存储器仍缺无辅助场方案、工艺分布、纳米结尾部WER、CMOS驱动、阵列读写与封装热预算。",
    whyRecommended: "先看ξ(T)实测，再看0.6–0.7 V概率图，最后严格区分35 fJ/Vm实测、100 fJ/Vm模拟和70 aJ推演；45–60分钟。",
    score: 9.6, priority: "S", doi: "10.1109/TMAG.2023.3284503", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/10153992/", backupUrl: "https://doi.org/10.1109/TMAG.2023.3284503",
    accessNote: "本轮已打开IEEE出版社题录并核验ξ(T)与模拟结论；定量边界以出版社页面和作者机构说明交叉确认。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["C", "E"],
    title: "Wafer-scale SOT-MRAM for analog crossbar array applications",
    titleZh: "300 mm兼容SOT-MRAM｜150% TMR、2 ns、<1 V与2 pJ",
    authors: "Samuel Liu et al.", venue: "Science Advances 12, eaee6952 (2026)", published: "2026-08-28",
    timeTier: "近期正式发表/晶圆级器件", system: "300 mm兼容SOT-MRAM器件，利用双稳态各向异性和随机开关，面向推理、二值神经网络训练及概率图模型。",
    conditions: "公开摘要给出2 ns、<1 V、2 pJ、0.1%写噪声和10%器件间差异；完整膜层、结尺寸、晶圆数、样本数、温度、写脉冲统计定义与良率未在摘要中披露。",
    methods: ["300 mm兼容制程", "SOT脉冲开关", "TMR统计", "校准推理模型", "概率计算"],
    summary: "【实测】TMR 150%；【实测】2 ns、<1 V、2 pJ写入；【实测】写噪声0.1%、器件间差异10%；【器件+模型】校准模型用于推理；【单器件演示】利用随机开关训练二值网络并达到理想准确率。",
    relevance: "这篇比孤立冠军器件更接近产业判断：同时给出300 mm兼容、速度、能耗、噪声和器件差异，并说明二态SOT-MRAM如何进入模拟交叉阵列。",
    limitation: "摘要未给完整阵列规模、良率、跨晶圆/批次、WER定义、保持耐久、温度角、BEOL整合和实际大网络准确率；‘单器件理想准确率’不等于阵列产品。",
    industrialization: "最接近300 mm器件模块与AI加速器映射；仍缺阵列级ADC/DAC、互连、漂移、校准开销、ECC、封装、系统吞吐及制造成本。",
    whyRecommended: "先看300 mm工艺与器件分布，再看150%/2 ns/2 pJ，最后检查随机性如何校准到阵列任务；50–65分钟。",
    score: 9.9, priority: "S", doi: "10.1126/sciadv.aee6952", arxiv: "",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13524016/", backupUrl: "https://doi.org/10.1126/sciadv.aee6952",
    accessNote: "本轮已打开PubMed和开放全文PMC直接来源，核验发表日期、器件指标与应用边界。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B", "E"],
    title: "Effect of partial oxidization on the transport in Fe/MgO/Fe tunnel junctions",
    titleZh: "Fe/MgO/Fe部分氧化模型｜TMR抑制、偏压不对称与高偏压负TMR",
    authors: "Authors as listed by Journal of Physics: Condensed Matter", venue: "Journal of Physics: Condensed Matter (2026)", published: "2026-01-01",
    timeTier: "近期正式发表/理论计算", system: "Fe/MgO/Fe磁性隧道结，在理想界面中引入部分氧化/FeO样界面层，用第一性原理电子结构与量子输运比较自旋相关电导和偏压响应。",
    conditions: "公开摘要确认研究部分氧化、偏压不对称和负TMR转变；未公开可核验的MgO层数、氧化覆盖率、k点、交换关联泛函、偏压阈值和绝对TMR数值，因此不补写。",
    methods: ["第一性原理", "非平衡量子输运", "界面氧化模型", "偏压扫描", "自旋分辨电导"],
    summary: "【理论预测】部分氧化系统性抑制TMR；【理论预测】产生明显偏压不对称；【理论预测】高偏压下可转为负TMR；【作者解释】氧化改变界面电子态与对称性过滤通道。",
    relevance: "为MgO沉积、氧剂量和退火提供可计算的失效签名：若实测出现偏压不对称或TMR符号变化，可优先排查界面过氧化/混层。",
    limitation: "理想Fe/MgO/Fe模型不等于非晶CoFeB退火后的多晶MTJ；缺缺陷分布、B扩散、粗糙、温度和器件统计。公开摘要未给定量阈值。",
    industrialization: "最接近界面氧化窗口的机理筛选；距工艺放行需用XPS/EELS、偏压TMR、RA、击穿和晶圆均匀性建立模型—实测标定。",
    whyRecommended: "先看界面结构假设，再看自旋通道与偏压非对称，最后把负TMR作为诊断信号而非量产预测；40–55分钟。",
    score: 9.3, priority: "S", doi: "10.1088/1361-648X/ae24d6", arxiv: "",
    url: "https://pubmed.ncbi.nlm.nih.gov/41297132/", backupUrl: "https://doi.org/10.1088/1361-648X/ae24d6",
    accessNote: "本轮已打开PubMed正式摘要和DOI入口；未公开模型数值明确留空。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A", "B"],
    title: "TeslatronPT Plus: An Open-Architecture, Low-Temperature Measurement System",
    titleZh: "Oxford TeslatronPT Plus｜1.5–300 K、最高14 T与开放Python自动化",
    authors: "Oxford Instruments NanoScience", venue: "厂商正式产品/发布资料", published: "2025-03-06",
    timeTier: "厂商技术资料/不作为科研证明", system: "无液氦超导磁体与VTI低温输运平台，提供8/12/14 T及6/1/1 T矢量磁场选项、低噪声探杆/转接盒、M81同步源测量系统和开放Python环境。",
    conditions: "厂商标称1.5–300 K、最高14 T；M81支持DC、最高100 kHz AC和混合DC+AC、最多6通道。网页未给完整噪声谱、样品温差、温稳、场均匀度、API版本和跨设备GR&R。",
    methods: ["低温高场输运", "DC/AC锁相", "多通道同步", "Python自动化", "矢量磁场"],
    summary: "【厂商标称】1.5–300 K、8/12/14 T与6/1/1 T矢量选项；【厂商标称】M81可同步DC、100 kHz AC及混合源测量，最多6通道；【平台特性】开放Python、低噪声信号链和数据管理；【边界】均非独立科研性能证明。",
    relevance: "适合把用户既有LabVIEW/Python自动采集迁移为可复现低温MTJ测量平台，重点是驱动接口、同步触发、温标、接地和低噪声验收。",
    limitation: "厂商公开页缺噪声底、温度稳定度、样品电子温度、扫场涡流、脉冲带宽、软件许可和维护成本；需FAT/SAT。",
    industrialization: "最接近研发量测与自动化平台；距生产测试仍缺自动装片、吞吐、MES、校准追溯、跨机台一致性和故障恢复SLA。",
    whyRecommended: "先核对磁体/VTI/探杆组合，再做标准电阻与Hall样GR&R，最后接入MTJ脉冲和Python API；25–35分钟。",
    score: 9.1, priority: "A", doi: "", arxiv: "",
    url: "https://www.oxinst.com/news/oxford-instruments-introduces-teslatronpt-plus/", backupUrl: "https://nanoscience.oxinst.com/products/cryofree-magnets/teslatronpt",
    accessNote: "本轮已打开Oxford Instruments官方发布与产品页，全部参数按厂商标称处理。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B", "D"],
    title: "Process-induced magnetic tunnel junction damage and its recovery for the development of spin–orbit torque magnetic random access memory",
    titleZh: "SOT-MRAM图形化损伤｜CF/NH反应离子刻蚀、停层与晶圆统计",
    authors: "Ziaur Rahaman Sk et al.", venue: "Journal of Magnetism and Magnetic Materials 565, 170296 (2023)", published: "2023-01-01",
    timeTier: "关键工艺文章/图形化损伤", system: "Ta/CoFeB/MgO/Ta硬掩膜磁性堆栈，设置Ta种子楔形和CoFeB楔形；比较CF-Etch与NH-Etch两种RIE配方及刻蚀后退火，形成停在MgO的step结构和停在Ta重金属层的trench结构。",
    conditions: "两种RIE均在MgO移除前终止；公开摘要未给气体比例、功率、偏压、压力、温度、刻蚀速率数值、晶圆直径和统计样本数。",
    methods: ["CF/NH反应离子刻蚀", "楔形DOE", "刻蚀停层", "退火恢复", "晶圆级SOT统计"],
    summary: "【实测】CF-Etch快速刻Ta、缓慢刻MgO，并降低CoFeB/MgO界面各向异性、破坏CoFeB磁矩；【实测】后续退火使CF损伤进一步恶化；【实测】NH-Etch对Ta/MgO速率更接近且磁性影响较小；【实测】对TMR、SOT阈值和RP/RAP做晶圆级统计。",
    relevance: "直击MTJ量产最难环节之一：停在几纳米HM/MgO而不损伤自由层、不过刻、不产生侧壁再沉积与电桥。",
    limitation: "公开摘要缺配方、绝对刻蚀速率、TMR/阈值分布、良率和长期可靠性数值；RIE优于或劣于IBE不能脱离设备、结构和清洗流程泛化。",
    industrialization: "最接近MTJ图形化模块与良率工程；仍缺300 mm跨批、CD/侧壁角、残留化学、短路率、后清洗、TDDB、保持/耐久和BEOL整合。",
    whyRecommended: "先看CF/NH选择比与停层，再看磁矩/PMA损伤，最后看step/trench晶圆统计如何连接良率；45–60分钟。",
    score: 9.7, priority: "S", doi: "10.1016/j.jmmm.2022.170296", arxiv: "",
    url: "https://www.sciencedirect.com/science/article/pii/S0304885322011817", backupUrl: "https://doi.org/10.1016/j.jmmm.2022.170296",
    accessNote: "本轮已打开ScienceDirect直接摘要/Highlights，核验堆栈、两种刻蚀、停层、损伤和晶圆统计边界。", recommendedOn: date, featured: true,
  },
];

const meta = [
  ["低温降低热涨落，但同时改变PMA、阻尼、TMR和VCMA系数；写入窗口不能直接从300 K外推。", "CoFeB/MgO/CoFeB在4–10 K能否用VCMA获得低能且确定的翻转？", ["【实测】10 K ξ约35 fJ/Vm。", "【模拟】4 K确定性窗口0.6–0.7 V。", "【模拟条件】ξ=100 fJ/Vm、面内场9 mT。", "【推演】优化写能约70 aJ。"], "低温提升能垒相对热能的比值，VCMA暂时降低PMA以触发进动；窗口依赖脉冲相位和辅助场。", "变量：温度、ξ、偏压、脉宽、场角；对照：无门控/室温；指标：开关概率、WER、TMR/RA、能量、TDDB。"],
  ["交叉阵列既需要低能高速器件，也需要低噪声和低器件差异，否则校准开销会吞噬收益。", "300 mm兼容SOT-MRAM能否同时满足器件指标与AI映射？", ["【实测】TMR 150%。", "【实测】2 ns、<1 V、2 pJ。", "【实测】写噪声0.1%、器件差异10%。", "【器件+模型】支持推理、二值训练和概率图。"], "SOT三端分离读写，双稳态用于二值权重，随机开关用于概率更新；系统收益仍受外围电路影响。", "变量：尺寸、脉冲、温度、校准频率；对照：单器件/阵列、SRAM；指标：TMR、能耗、噪声、D2D、准确率与吞吐。"],
  ["MgO的Δ1对称性过滤要求洁净有序界面；过氧化会引入FeO样态和额外散射。", "部分氧化怎样改变Fe/MgO/Fe的自旋输运与偏压响应？", ["【理论】TMR系统性下降。", "【理论】I–V/TMR出现强偏压不对称。", "【理论】高偏压可转负TMR。", "【解释】界面态破坏对称性过滤。"], "氧化重构界面态密度和自旋选择通道；负TMR是模型预测，需要实验标定。", "变量：氧剂量、退火、偏压和温度；对照：理想/欠氧/过氧；指标：XPS/EELS、TMR(V)、RA、非对称、击穿。"],
  ["低温输运的真实性能由磁体、温控、线缆、接地、源测和自动化共同决定。", "TeslatronPT Plus能否成为可追溯的MTJ低温自动化平台？", ["【厂商标称】1.5–300 K、最高14 T。", "【厂商标称】6/1/1 T矢量选项。", "【厂商标称】DC/100 kHz AC/混合源测。", "【平台】Python开放架构、最多6通道。"], "开放软件有利于复现实验，但电子温度、噪声和同步误差必须通过标准样而非页面参数确认。", "变量：布线/滤波、扫场、温度、通道同步；对照：标准电阻/Hall条；指标：噪声谱、温差、相位、GR&R、吞吐。"],
  ["MTJ图形化要求穿过厚硬掩膜并停在数纳米MgO/HM，过刻、离子损伤与侧壁残留都会缩窄读写窗。", "CF与NH刻蚀化学怎样影响选择比、磁矩和界面PMA？", ["【实测】CF刻Ta快、刻MgO慢。", "【实测】CF降低PMA并破坏磁矩。", "【实测】退火加剧CF损伤。", "【实测】NH速率更匹配、磁性影响较小。"], "化学选择性决定停层窗口，高能离子/反应产物改变CoFeB/MgO界面；恢复退火并非总能修复。", "变量：配方、偏压、过刻、退火；对照：未刻/IBE/CF/NH；指标：速率选择比、PMA/Ms、TMR、RP/RAP、阈值、短路率。"],
];
const details = papers.map((p, i) => ({ id: p.id, oneSentence: p.summary, background: meta[i][0], question: meta[i][1], workflow: p.methods, findings: meta[i][2], explanation: meta[i][3], whyItMatters: [p.relevance, p.industrialization], researchConnection: meta[i][4], limitationsDetailed: p.limitation, terms: ["实测、理论/仿真、作者解释、厂商标称与本站推断分别标注。", "原文公开来源未披露的数据明确留空。"], takeaway: p.whyRecommended }));

const review = {
  id: "review-stt-mram-s1063739726600135", kind: "正式综述", track: "B", secondaryTracks: ["C", "E"],
  title: "Current State of STT-MRAM Cell-Based MTJ with MgO Tunnel Barrier", titleZh: "2026正式综述｜MgO-MTJ型STT-MRAM现状与物理模型",
  authors: "K. K. Abgaryan et al.", venue: "Russian Microelectronics 55, 43–65 (2026)", published: "2026-05-26", recommendedOn: date,
  doi: "10.1134/S1063739726600135", url: "https://link.springer.com/article/10.1134/S1063739726600135", backupUrl: "https://doi.org/10.1134/S1063739726600135",
  assistantSummary: "正式综述围绕MgO-MTJ型STT-MRAM建立物理模型，梳理TMR、自由层临界开关电流、热稳定与电阻之间的权衡，并把DRAM、Flash、PCM背景与材料/缩放挑战连接起来；综述不提供新的器件实测。",
  whySelected: "适合作为本日A/B/C/E的统一坐标：低温、氧化、刻蚀和晶圆差异最终都必须落到R、TMR、Ic与Δ四个模型参数及其分布。",
  readingGuide: ["先看MTJ/STT基础模型", "再看R/TMR/Ic/Δ权衡", "对照材料和缩放挑战", "最后建立自家参数表；55–70分钟"], notNew: false,
};
const classic = {
  id: "classic-slonczewski-1996-00062-5", kind: "经典文章", track: "C", secondaryTracks: ["A", "B"],
  title: "Current-driven excitation of magnetic multilayers", titleZh: "Slonczewski 1996经典｜电流驱动自旋转移力矩",
  authors: "J. C. Slonczewski", venue: "Journal of Magnetism and Magnetic Materials 159, L1–L7 (1996)", published: "1996-06-01", recommendedOn: date,
  doi: "10.1016/0304-8853(96)00062-5", url: "https://www.sciencedirect.com/science/article/pii/0304885396000625", backupUrl: "https://doi.org/10.1016/0304-8853(96)00062-5",
  assistantSummary: "经典理论提出垂直流过磁性多层的自旋极化电流可转移角动量、激发进动或翻转磁化；原文指出在约1 nm磁层、横向尺度小于约10²–10³ nm时，该力矩可压过电流奥斯特场引起的拉莫尔响应。",
  whySelected: "它是STT-MRAM的力矩起点，也为今天区分STT、SOT、VCMA和热辅助提供最小物理基线。",
  readingGuide: ["先看角动量转移图景", "再看临界尺度", "核对模型假设", "最后映射现代MTJ缺陷与热噪声；30–40分钟"], notNew: true,
};
const curatedDetails = [
  { id: review.id, oneSentence: review.assistantSummary, background: "STT-MRAM以自旋极化电流翻转MTJ自由层，核心指标互相牵制。", question: "怎样用统一物理参数描述MgO-MTJ型STT-MRAM并识别材料/缩放瓶颈？", workflow: review.readingGuide, findings: ["【综述】比较易失与非易失存储。", "【综述】以R、TMR、Ic、Δ为核心参数。", "【综述】指出热稳定与临界电流的权衡。", "【综述】强调材料与缩放仍是产业缺口。"], explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "把每次工艺DOE结果统一映射到R/TMR/Ic/Δ及均值、方差和尾部。", limitationsDetailed: "综述和模型不能替代具体堆栈、温度和阵列实测；公开摘要没有量产节点、良率或完整可靠性数字。", terms: ["TMR：平行/反平行态电阻差", "Δ：热稳定因子"], takeaway: review.readingGuide.join("；") },
  { id: classic.id, oneSentence: classic.assistantSummary, background: "自旋极化电流携带角动量，可对磁矩施加非保守力矩。", question: "电流何时足以激发或翻转纳米磁层？", workflow: classic.readingGuide, findings: ["【理论】提出电流驱动的新磁激发机制。", "【理论】力矩来自跨层自旋角动量转移。", "【理论】约1 nm磁层和10²–10³ nm以下横向尺度有利。", "【边界】不含现代MgO势垒、SOT、VCMA与工艺分布。"], explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "以STT基线比较SOT/VCMA辅助写入的临界电流、能量和温度依赖。", limitationsDetailed: "理想多层模型不能直接预测现代pMTJ的WER、边缘损伤、B扩散和阵列可靠性。", terms: ["STT：自旋转移力矩", "Larmor response：磁矩对磁场的进动响应"], takeaway: classic.readingGuide.join("；") },
];

const insights = [
  {
    id: "2026-10-07-cryo-wafer-model", date, type: "research", typeZh: "研究机会", trackLabel: "A/B/C · 低温—晶圆协同",
    title: "低温VCMA参数回灌300 mm SOT-MRAM阵列", subtitle: "从ξ(T)到噪声、差异与系统校准。", summary: "把4–300 K器件物理连接到晶圆统计。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.B, ids.C], question: "低温增强的VCMA能否抵消10%器件差异和阵列校准成本？", rationale: "A给出ξ(T)与确定性窗口，B给出300 mm噪声/差异，C提示氧化会引入偏压非对称。",
    workflow: ["4/10/77/300 K参数提取", "氧化/退火对照", "脉冲概率矩阵", "D2D/循环统计", "交叉阵列模型回灌"], equipment: ["低温磁体", "脉冲源表", "低噪声读出", "CIPT/探针台", "Python统计"], measurements: ["ξ(T)", "TMR(V)", "WER", "D2D", "校准开销"], metrics: ["确定性窗口", "ppm WER", "10%差异压缩", "能耗", "准确率"], evidenceBoundary: "三篇并未共同验证；跨温晶圆协同是本站提出的待验证路线。", firstSteps: ["先单结温变", "再片内阵列", "最后模型"], researchConnection: "直接服务低温存储和产业化验证。", takeaway: "材料增益必须穿过分布和校准。",
  },
  {
    id: "2026-10-07-teslatron-fat", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/A · 开放低温平台",
    title: "TeslatronPT Plus低噪声自动化验收", subtitle: "Python、M81与磁体/VTI同步验证。", summary: "把厂商架构变成可追溯SOP。", status: "平台SOP",
    relatedPaperIds: [ids.D, ids.A], question: "开放Python和6通道同步能否在脉冲MTJ下保持低噪声与温度真实性？", rationale: "页面规格不包含样品电子温度、脉冲串扰和跨日重复性。",
    workflow: ["驱动/API版本锁定", "标准电阻/Hall条", "DC/AC同步", "扫场/温变", "MTJ脉冲GR&R"], equipment: ["TeslatronPT Plus", "M81-SSM", "低噪声探杆", "标准温度计", "示波器"], measurements: ["噪声谱", "相位", "样品温差", "场滞后", "触发抖动"], metrics: ["GR&R", "温标误差", "噪声底", "丢点率", "吞吐"], evidenceBoundary: "所有硬件能力来自厂商资料，需FAT/SAT后方能作为科研证据。", firstSteps: ["空载校准", "标准样", "真实MTJ"], researchConnection: "延续用户现有LabVIEW/Python自动化经验。", takeaway: "开放接口不等于已验证测量。",
  },
  {
    id: "2026-10-07-etch-oxidation", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B/C · 刻蚀—氧化闭环",
    title: "刻蚀停层×界面氧化×退火恢复三维窗口", subtitle: "把侧壁损伤与TMR(V)失真对应起来。", summary: "用偏压非对称定位原子界面损伤。", status: "原子制造路线",
    relatedPaperIds: [ids.C, ids.E, review.id], question: "CF/NH刻蚀造成的损伤能否用TMR偏压不对称和元素深度直接诊断？", rationale: "E给出工艺损伤趋势，C给出氧化输运指纹，综述提供R/TMR/Ic/Δ统一指标。",
    workflow: ["未刻/CF/NH/IBE对照", "过刻剂量扫描", "分区退火", "XPS/EELS/截面TEM", "TMR(V)/TDDB"], equipment: ["RIE/IBE", "真空退火", "XPS/TEM-EELS", "CIPT", "低噪声电测"], measurements: ["选择比", "侧壁化学", "PMA/Ms", "TMR非对称", "短路/击穿"], metrics: ["停层窗口", "TMR恢复率", "负TMR阈值", "短路率", "跨晶圆CV"], evidenceBoundary: "理论Fe/MgO/Fe与实验Ta/CoFeB/MgO/Ta不同；指纹映射是待验证假设。", firstSteps: ["平面刻蚀片", "纳米柱", "晶圆统计"], researchConnection: "直接对应IBE/RIE、图形化损伤、界面氧化和可靠性。", takeaway: "用输运指纹反推刻蚀化学。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`; reports.reportDate = date;
reports.history.push({ date, label: "详细日报：低温VCMA—300 mm SOT交叉阵列—界面氧化理论—TeslatronPT Plus—刻蚀损伤", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
for (const p of papers) add(reports.papers, p); write("data/reports.json", reports);
const paperDetails = read("data/paper-details.json"); for (const d of details) add(paperDetails, d); fs.writeFileSync(path.join(root, "data/paper-details.json"), `${JSON.stringify(paperDetails)}\n`);
const curated = read("data/curated-reading.json"); curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] }); add(curated.items, review); add(curated.items, classic); write("data/curated-reading.json", curated);
const curatedDetailData = read("data/curated-details.json"); for (const d of curatedDetails) add(curatedDetailData, d); write("data/curated-details.json", curatedDetailData);
write("data/daily-reading.json", { date, review, classics: [classic] });
const insightData = read("data/insight-archive.json"); insightData.history.push({ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }); for (const x of insights) add(insightData.items, x); write("data/insight-archive.json", insightData);
console.log(`Added detailed radar for ${date}`);
