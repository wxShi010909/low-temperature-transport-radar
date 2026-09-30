import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const write = (file, value) => fs.writeFileSync(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
const addUnique = (arr, item) => {
  if (arr.some((entry) => entry.id === item.id)) throw new Error(`duplicate id: ${item.id}`);
  arr.push(item);
};

const date = "2026-09-30";
const ids = {
  A: "a-cofecral-mtj-1905-04070",
  B: "b-16nm-16mb-sttmram-10454339",
  C: "c-sttmram-quantizer-2410-05164",
  D: "d-cryogenic-s700x-squid",
  E: "e-mgo-insertion-mggao-0247660",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B", "E"],
    title: "Magnetic tunnel junctions with a B2-ordered CoFeCrAl equiatomic Heusler alloy",
    titleZh: "CoFeCrAl/MgO低温隧穿｜300 K 87%、10 K 165% TMR",
    authors: "T. Tsuchiya et al.", venue: "Physical Review Materials 3, 084403 (2019); arXiv:1905.04070", published: "2019-08-05",
    timeTier: "正式发表/低温MTJ材料与界面",
    system: "MgO(100)/Cr(40)/CoFeCrAl(30)/Mg(0.4)/MgO(2)/CoFe(5)/IrMn(10)/Ta(3)/Ru(5) nm外延MTJ；结尺寸10×10至30×30 μm²。",
    conditions: "MBE基压2×10^-7 Pa；MgO基片700 °C闪蒸，Cr 700 °C退火1 h，CoFeCrAl原位退火400–800 °C；器件在5 kOe下250–500 °C退火。PPMS测10–300 K、磁场最高1 kOe；定量曲线示例为10×10 μm²。",
    methods: ["MBE外延", "TEM/XRD", "XMCD", "10–300 K磁输运", "FP-SPRKKR+CPA"],
    summary: "【实测】最佳结TMR为300 K 87%、10 K 165%，CoFeCrAl饱和磁化约380 emu cm^-3；【实测】合金成分Co25.5Fe23.1Cr28.1Al23.3 at.%并呈B2有序；【作者解释】低温偏压依赖由相干隧穿叠加磁振子非弹性过程解释。",
    relevance: "把Heusler化学有序、Mg插层/MgO界面和低温TMR放到同一可制造堆栈，适合现有MBE/溅射—退火—PPMS链路复现。",
    limitation: "微米结且非CoFeB pMTJ；未给晶圆级均匀性、RA分布、WER、保持与耐久；B2并非理论预期的完全Y有序，165%不可外推到纳米MRAM。",
    industrialization: "最接近新电极材料筛选与势垒界面优化；距可制造器件仍缺纳米图形化、BEOL温度预算、片内CV、交换偏置稳定性及阵列统计。",
    whyRecommended: "先看TMR—温度/偏压，再看TEM、XMCD与有序度；45–60分钟。",
    score: 9.4, priority: "S", doi: "10.1103/PhysRevMaterials.3.084403", arxiv: "1905.04070",
    url: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.3.084403", backupUrl: "https://arxiv.org/abs/1905.04070",
    accessNote: "本轮已打开arXiv摘要及HTML全文，核验完整堆栈、制备/测量条件、87%/165% TMR、380 emu cm^-3和成分。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["A"],
    title: "A 16nm 16Mb Embedded STT-MRAM with a 20ns Write Time, a 10^12 Write Endurance and Integrated Margin-Expansion Schemes",
    titleZh: "16 nm嵌入式STT-MRAM｜16 Mb、20 ns写入与10^12次耐久",
    authors: "Ku-Feng Lin et al.", venue: "2024 IEEE ISSCC, pp. 116–118", published: "2024-02-19",
    timeTier: "近2年正式发表/产业阵列",
    system: "16 nm逻辑平台上的16 Mb嵌入式STT-MRAM宏，集成读写裕量扩展方案；公开题录未披露完整MTJ膜层、单元面积和RA。",
    conditions: "公开标题与IEEE题录确认16 nm、16 Mb、20 ns和10^12次写耐久；可访问页面未公开测试温区、电压、良率样本量、保持时间和错误率置信区间，本期不补写。",
    methods: ["16 nm eMRAM", "16 Mb阵列", "20 ns写入", "耐久测试", "裕量扩展电路"],
    summary: "【实测/公开题录】展示16 nm 16 Mb嵌入式STT-MRAM，写时间20 ns、写耐久10^12次，并集成裕量扩展方案；【未公开】公开题录不足以确认PVT角、ECC配置、写电流和逐bit分布。",
    relevance: "提供实验室单结必须对标的系统级门槛：速度、耐久和读写裕量必须同时成立，不能只报告峰值TMR。",
    limitation: "ISSCC公开题录信息有限；20 ns和10^12不能自动证明全阵列在所有PVT角的良率、10年保持或无ECC原始误码率。",
    industrialization: "已进入嵌入式阵列演示，最接近CMOS/BEOL集成；量产判断仍需晶圆级良率、长期保持、PVT/老化、测试成本、失效位图与客户资格数据。",
    whyRecommended: "先看宏架构和margin-expansion，再查测试条件及原始分布；30–45分钟。",
    score: 9.8, priority: "S", doi: "10.1109/ISSCC49657.2024.10454339", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/10454339", backupUrl: "https://doi.org/10.1109/ISSCC49657.2024.10454339",
    accessNote: "本轮已打开IEEE直接题录并核验标题中的制程、容量、写时间、耐久和裕量扩展；其余未公开项明确留空。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B"],
    title: "Union Bound Analysis for STT-MRAM With Channel Quantization",
    titleZh: "STT-MRAM量化读通道｜q≥2时联合界逼近低WER仿真",
    authors: "Zhong Zhong, Kui Cai and Wenxue Song", venue: "arXiv:2410.05164 (2024)", published: "2024-10-07",
    timeTier: "可靠预印本/编码与读出理论",
    system: "45×90 nm面内MTJ及45 nm PTM外围模型；以二元非对称写通道串联高斯混合读通道，研究q-bit量化、BCJR/ML译码和(72,64)扩展Hamming码。",
    conditions: "模型取低/高阻均值约1/2 kΩ，码最小距离4、A(dmin)=8157，示例写错误概率P1=10^-5；差分进化种群10M、上限100代、F=0.8、CR=0.5，示例17代收敛。",
    methods: ["BAC+高斯混合通道", "q-bit量化", "联合上界", "BCJR/ML", "差分进化阈值优化"],
    summary: "【理论/仿真】q≥2且WER低于10^-6时，联合界与仿真较接近；3 bit相对2 bit收益有限；【理论】联合界优化阈值优于互信息、最小通道错误率和成对概率界基准。",
    relevance: "把MTJ电阻分布、读ADC位数、ECC与目标WER连接起来，可用于评估低温分布收窄是否真的能换成更低功耗读出。",
    limitation: "纯模型与蒙特卡洛，没有硅后位图、RTN、温漂、邻近耦合、老化和阵列相关失效；1/2 kΩ参数不能视为用户器件实测。",
    industrialization: "最接近读通道/ECC协同设计；距产品验证仍缺实测分布拟合、PVT、软信息校准、译码面积/延迟/能耗和大样本尾部。",
    whyRecommended: "先看级联通道图和阈值算法，再看q=2/3的WER曲线；40–55分钟。",
    score: 9.1, priority: "A", doi: "", arxiv: "2410.05164",
    url: "https://arxiv.org/abs/2410.05164", backupUrl: "https://arxiv.org/html/2410.05164",
    accessNote: "本轮已打开arXiv摘要与HTML全文，核验器件参数、码参数、优化设置及q-bit结论。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A"],
    title: "S700X SQUID Magnetometer",
    titleZh: "Cryogenic S700X SQUID｜10^-11 A·m²灵敏度与He-3低于300 mK选件",
    authors: "Cryogenic Ltd", venue: "厂商正式技术资料", published: "2026-09-30核验",
    timeTier: "厂商技术资料/不作为科研证明",
    system: "二阶梯度线圈SQUID磁强计，含传统液氦或R-S700X零蒸发配置；可配He-3、样品旋转和1000 K高温炉。",
    conditions: "厂商标称输入噪声能量灵敏度10^-30 J/√Hz、磁矩分辨率10^-11 A m²；常规1.6–400 K，He-3低于300 mK至300 K以上，约0.9 cc He-3且300 mK附近最长约12 h。R型用1 W脉管和7 kW水冷压缩机。",
    methods: ["SQUID二阶梯度计", "零蒸发氦回收", "He-3插杆", "线性电机扫描", "0.1°旋转"],
    summary: "【厂商标称】磁矩分辨率10^-11 A m²、输入噪声能量灵敏度10^-30 J/√Hz；样品行程20–25 mm、1–3 Hz；【厂商标称】He-3可低于300 mK并在约300 mK维持最长12 h。",
    relevance: "可作为超薄磁层、退火前后磁矩和低温各向异性的独立基线，与电输运互相校验。",
    limitation: "全部性能为厂商资料，未给特定样品托、扫场条件、背景扣除和跨实验室GR&R；页面同时出现约10 mG屏蔽区域与约100 μT背景表述，验收时须定义测量位置。",
    industrialization: "最接近材料/来料磁学计量平台；尚缺对现有探杆兼容、自动化API、维护成本、校准溯源、MTBF和用户样品验收数据。",
    whyRecommended: "先看低场屏蔽、He-3和样品运动规格，再制定标准样品验收；20–30分钟。",
    score: 8.7, priority: "A", doi: "", arxiv: "",
    url: "https://www.cryogenic.co.uk/products/squid-magnetometers/s700x-squid-magnetometer", backupUrl: "https://www.cryogenic.co.uk/products/squid-magnetometers",
    accessNote: "本轮已打开Cryogenic Ltd官方产品页，逐项核验灵敏度、温区、He-3、行程、频率、压缩机和旋转指标；明确标注为厂商资料。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B"],
    title: "Enhanced tunnel magnetoresistance of Fe/MgGa2O4/Fe(001) magnetic tunnel junctions by interface-tuning with atomic-scale MgO insertion layers",
    titleZh: "0.3 nm MgO界面插层｜Fe/MgGaO/Fe室温151%、5 K 291% TMR",
    authors: "J. Sihombing et al.", venue: "Applied Physics Letters 126, 022407 (2025)", published: "2025-01-15",
    timeTier: "近2年正式发表/原子层界面工程",
    system: "Fe(001)/MgGa2O4势垒/Fe(001)外延MTJ，在势垒上下界面各插入0.3 nm MgO；总势垒厚2.3 nm，并与无插层及MgAl2O4参照比较。",
    conditions: "原子尺度插层后形成均匀岩盐结构Mg0.55Ga0.45O(001)，目标是抑制Ga向Fe扩散并保持晶格匹配；公开摘要未给完整底层、退火窗口、沉积速率和晶圆级统计。",
    methods: ["外延生长", "双界面0.3 nm MgO", "结构/成分表征", "5–300 K TMR", "RA对照"],
    summary: "【实测】室温TMR 151%、RA 23 kΩ μm²；5 K TMR 291%、RA 26 kΩ μm²；【对照】无插层低温TMR约165%；【作者解释】MgO抑制Ga界面扩散并稳定均匀岩盐Mg0.55Ga0.45O。",
    relevance: "展示亚纳米插层把成分扩散、势垒晶相和隧穿性能联动，是可迁移到MgO/CoFeB和其他尖晶石势垒的原子界面DOE范式。",
    limitation: "高RA和Fe外延微结构离嵌入式MRAM仍远；0.3 nm为名义厚度，未证明全片连续性；缺纳米柱、写入、TDDB、热预算和片内CV。",
    industrialization: "最接近势垒/电极界面材料模块；障碍是23 kΩ μm²高RA、外延要求、插层连续性、厚度控制、退火兼容和纳米尺寸可靠性。",
    whyRecommended: "先看插层前后结构/成分，再看TMR—温度与RA权衡；40–55分钟。",
    score: 9.7, priority: "S", doi: "10.1063/5.0247660", arxiv: "",
    url: "https://mdr.nims.go.jp/concern/publications/5d86p8862", backupUrl: "https://doi.org/10.1063/5.0247660",
    accessNote: "本轮已打开NIMS官方全文记录与AIP题录，核验0.3 nm双插层、2.3 nm势垒、151%/291% TMR、23/26 kΩ μm²及岩盐相。", recommendedOn: date, featured: true,
  },
];

const details = papers.map((paper, i) => ({
  id: paper.id,
  oneSentence: paper.summary,
  background: [
    "Heusler电极的半金属性依赖化学有序；低温TMR可放大界面无序、磁振子和缺陷通道。",
    "单结峰值性能不足以证明存储可用，嵌入式MRAM必须同时满足阵列速度、耐久、读写裕量和CMOS接口。",
    "STT-MRAM的写入与读取都呈非对称统计，有限ADC位数会改变软信息及ECC极限。",
    "超薄磁层的磁矩很小，电输运异常需要独立磁学测量排除样品背景、磁场和温度伪差。",
    "一个原子层量级的界面成分足以改变扩散、晶相、对称性过滤及势垒高度。",
  ][i],
  question: [
    "B2-CoFeCrAl能否在MgO外延结中产生可复现的温度增强TMR，限制来自何处？",
    "16 nm eMRAM如何把20 ns写入、10^12次耐久和阵列裕量放进同一个16 Mb宏？",
    "在非对称写错和高斯混合读取噪声并存时，多少量化位和哪些阈值足以逼近低WER？",
    "S700X的低温、低场、背景和自动化规格能否支持薄膜磁矩与输运的交叉验证？",
    "0.3 nm MgO双界面插层能否抑制Ga扩散而不牺牲晶格匹配和隧穿？",
  ][i],
  workflow: paper.methods,
  findings: [
    ["【实测】300 K/10 K TMR为87%/165%。", "【实测】Ms约380 emu cm^-3，合金接近等原子比但Cr富集。", "【结构】B2有序且界面位错较少。", "【实测+理论】XMCD见Co/Fe铁磁矩；CPA/PBE用于无序电子结构。"],
    ["【实测/题录】16 nm CMOS集成16 Mb STT-MRAM。", "【实测/题录】写时间20 ns。", "【实测/题录】写耐久10^12次。", "【设计】集成读写裕量扩展；公开页未给原始误码率。"],
    ["【模型】45×90 nm MTJ，电阻均值约1/2 kΩ。", "【理论/仿真】q≥2时低WER联合界接近仿真。", "【理论/仿真】3 bit相对2 bit增益有限。", "【优化】差分进化阈值优于MMI/MCR/PPVB基准。"],
    ["【厂商标称】磁矩分辨率10^-11 A m²。", "【厂商标称】温区1.6–400 K，He-3低于300 mK。", "【厂商标称】20–25 mm、1–3 Hz样品运动。", "【厂商标称】R型为1 W脉管+7 kW水冷压缩机。"],
    ["【实测】室温TMR 151%、RA 23 kΩ μm²。", "【实测】5 K TMR 291%、RA 26 kΩ μm²。", "【对照】无插层低温TMR约165%。", "【结构/作者解释】形成Mg0.55Ga0.45O岩盐相并抑制Ga扩散。"],
  ][i],
  explanation: [
    "有序化改善自旋极化和相干通道，低温减少热散射；磁振子非弹性贡献用于解释低偏压温度依赖，但不是对所有峰形的唯一证明。",
    "裕量扩展电路可吸收器件分布与感测波动；不过公开题录不足以拆分电路、器件、ECC各自贡献。",
    "联合界保留非对称写错、量化转移概率和码字谱，因而比只最大化互信息更贴近目标WER；仍是模型预测。",
    "二阶梯度计抑制均匀背景，He-3拓展低温区；真正分辨率还受样品托、振动、场历史和背景拟合控制。",
    "MgO插层阻挡Ga互扩散并促成均匀岩盐势垒，改善相干隧穿；TMR提升并不等价于低RA或可量产。",
  ][i],
  whyItMatters: [paper.relevance, paper.industrialization],
  researchConnection: [
    "变量：有序退火、Mg插层、成分；对照：未退火/不同有序度；指标：XRD/TEM/XMCD、RA、TMR(T,V)、噪声。",
    "变量：写脉宽/电压、温度、bit位置；对照：margin scheme开/关；指标：WER、RBER、耐久、保持、功耗、良率。",
    "变量：q、阈值、温度和分布偏度；对照：硬判决/MMI；指标：WER、译码延迟、能耗、模型残差。",
    "变量：温度、扫场、扫描频率、样品托；对照：标准磁矩与空托；指标：噪声谱、漂移、磁矩、GR&R。",
    "变量：MgO 0/0.15/0.3/0.45/0.6 nm与退火；对照：MgAl2O4；指标：STEM-EELS、XRD、RA/TMR、TDDB。",
  ][i],
  limitationsDetailed: paper.limitation,
  terms: ["实测、理论/仿真、厂商标称和本站推断分别标注。", "原始来源未公开的堆栈、样本量或可靠性数据不补写。"],
  takeaway: paper.whyRecommended,
}));

const review = {
  id: "review-magnetoresistance-methods-00477-4", kind: "正式综述", track: "A", secondaryTracks: ["B", "D"],
  title: "Magnetoresistance phenomena and measurement methodologies", titleZh: "2026 Nature Reviews Methods Primers｜磁阻机理、器件制备与伪差控制",
  authors: "C. Yi et al.", venue: "Nature Reviews Methods Primers 6 (2026)", published: "2026-03-24", recommendedOn: date,
  doi: "10.1038/s43586-026-00477-4", url: "https://www.nature.com/articles/s43586-026-00477-4", backupUrl: "https://doi.org/10.1038/s43586-026-00477-4",
  assistantSummary: "正式Primer从Drude/Boltzmann到量子线性响应，系统讨论薄膜/块材磁阻、器件制备、电极与几何，并重点处理电流喷射、Hall混入和寄生电容等伪差。",
  whySelected: "它给今天所有材料和设备条目提供统一测量学底座，尤其适合建立低温TMR、四端测量和背景扣除SOP。",
  readingGuide: ["先看图1典型MR平台", "再看图2接触几何", "重点看图3伪差控制", "最后映射到MTJ与自动化验收；60–80分钟"], notNew: false,
};

const classic = {
  id: "classic-negative-resistance-3122503", kind: "经典文章", track: "D", secondaryTracks: ["A", "B"],
  title: "‘Negative resistance’ errors in four-point measurements of tunnel junctions and other crossed-wire devices", titleZh: "交叉线结四端负电阻伪差｜非均匀电流与有限元校正",
  authors: "J. M. Pomeroy and H. Grube", venue: "Journal of Applied Physics 105, 094503 (2009)", published: "2009-05-01", recommendedOn: date,
  doi: "10.1063/1.3122503", url: "https://www.nist.gov/publications/negative-resistance-errors-four-point-measurements-crossed-wire-devices", backupUrl: "https://doi.org/10.1063/1.3122503",
  assistantSummary: "实测与有限元证明，交叉线器件即使采用四端法，只要结电阻接近或低于电极电阻，非均匀电流仍会产生所谓负电阻伪差，并扭曲MR、I–V和变温输运。",
  whySelected: "它直接提醒MTJ工艺快速筛选不能把‘四端’当作无条件正确，必须测电极片阻、几何和非线性并做校正。",
  readingGuide: ["先看电流拥挤示意", "比较校正前后MR/I–V", "核对非方形与异电阻率", "把校正加入低温SOP；30–40分钟"], notNew: true,
};

const curatedDetails = [
  {
    id: review.id, oneSentence: review.assistantSummary, background: review.titleZh,
    question: "如何在跨温区、跨几何的磁阻实验中把真实输运与接触、Hall混入、电流喷射和寄生电容分开？", workflow: review.readingGuide,
    findings: ["【综述】覆盖经典、关联和拓扑磁阻机理。", "【综述】比较薄膜与块材的器件制备、电极和测量几何。", "【综述】给出电流喷射、Hall混入和寄生电容的最小化策略。", "【边界】方法综述不替代特定MTJ堆栈的可靠性数据。"],
    explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "建立场反转、电流反转、端子置换、频率扫描与空载/短路标准件的自动化矩阵。",
    limitationsDetailed: "付费页面公开摘要与图题可核验方法范围，但具体公式和案例需全文；综述跨材料，不能直接给出用户设备的误差预算。", terms: ["MR几何与TMR器件需分别建模", "校正结果需保留原始数据"], takeaway: review.readingGuide.join("；"),
  },
  {
    id: classic.id, oneSentence: classic.assistantSummary, background: classic.titleZh,
    question: "为什么四端交叉线结仍会出现非物理负电阻，何时必须做几何校正？", workflow: classic.readingGuide,
    findings: ["【实测】负电阻伪差来自非均匀电流分布。", "【实测+有限元】结电阻接近或低于电极电阻时误差占主导。", "【模型】非方形、上下电极电阻率不同和非线性I–V都会改变误差。", "【方法】作者给出并验证直接校正方案。"],
    explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "对每个MTJ交叉线测试片同步测上下电极片阻、几何尺寸、四端排列和I–V非线性，再计算校正前后TMR。",
    limitationsDetailed: "模型针对交叉线几何；纳米柱、Kelvin结构和复杂电流扩散需重新建模，不能套用单一修正系数。", terms: ["负电阻是测量伪差而非器件产能", "四端法不自动消除电流拥挤"], takeaway: classic.readingGuide.join("；"),
  },
];

const insights = [
  {
    id: "2026-09-30-order-cryo-tmr-doe", date, type: "research", typeZh: "研究机会", trackLabel: "A/E · 有序度—界面—低温TMR",
    title: "Heusler有序度与界面扩散解耦DOE", subtitle: "把退火收益拆成体相有序和界面化学两部分。", summary: "用同片温度梯度和Mg插层矩阵追踪B2有序、界面扩散与TMR。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.E], question: "TMR提升主要来自电极有序、界面阻挡还是势垒晶相？", rationale: "两篇实测都显示界面原子结构关键，但材料体系与RA差异很大。",
    workflow: ["成分标定", "退火温度梯度", "MgO插层矩阵", "结构/化学表征", "5–300 K输运"], equipment: ["MBE/溅射", "真空转移", "XRD/TEM/XPS", "PPMS"], measurements: ["有序参数", "界面扩散", "RA", "TMR(T,V)", "噪声"], metrics: ["片内CV", "TMR", "RA", "热预算", "缺陷密度"], evidenceBoundary: "跨材料比较只支持实验设计，不证明CoFeCrAl与MgGaO可直接集成。", firstSteps: ["先平面膜", "再微米结", "最后纳米柱"], researchConnection: "连接原子界面、低温输运和材料筛选。", takeaway: "让每一项TMR收益都对应一个可观测结构变量。",
  },
  {
    id: "2026-09-30-mr-metrology-crosscheck", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/A · 磁阻计量与磁矩交叉",
    title: "SQUID—四端MR双链路验收", subtitle: "用标准磁矩、端子置换和有限元校正关闭伪差。", summary: "建立温度、磁场、接触几何和背景的可追溯误差预算。", status: "平台SOP",
    relatedPaperIds: [ids.D, review.id, classic.id], question: "低温MR变化中多少来自磁性，多少来自几何与仪器？", rationale: "SQUID背景与交叉线电流拥挤可分别伪造磁矩和电阻异常。",
    workflow: ["空托/标准样", "电极片阻", "端子置换", "场/流反转", "有限元校正", "GR&R"], equipment: ["S700X或现有SQUID", "PPMS/低噪声源表", "标准电阻", "Hall标准片"], measurements: ["噪声谱", "背景", "MR", "Hall混入", "磁矩"], metrics: ["偏差", "重复性", "再现性", "漂移", "校正残差"], evidenceBoundary: "厂商规格不是验收结果，有限元校正也需匹配真实几何。", firstSteps: ["先空载", "再标准件", "最后真实MTJ"], researchConnection: "服务低温输运、薄膜磁性和工艺反馈。", takeaway: "任何异常先通过独立磁学和端子对称性双重检验。",
  },
  {
    id: "2026-09-30-atomic-mgo-insertion-map", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B · 亚纳米MgO插层",
    title: "0–0.6 nm MgO双界面插层地图", subtitle: "用0.15 nm步进寻找扩散阻挡、连续性和RA的共同窗口。", summary: "把名义厚度、实际覆盖率、Ga/B扩散与器件电性逐点关联。", status: "原子制造路线",
    relatedPaperIds: [ids.E, ids.A, ids.B], question: "最薄连续插层能否抑制扩散且不把RA推离读写窗口？", rationale: "0.3 nm带来高TMR但RA仍达23 kΩ μm²，必须做厚度—连续性—性能权衡。",
    workflow: ["QCM/RHEED标定", "0.15 nm步进", "原位封护", "STEM-EELS/XPS", "微米到纳米结"], equipment: ["MBE/ALD", "真空互联", "原位RHEED/XPS", "TEM", "CIPT/PPMS"], measurements: ["覆盖率", "界面扩散", "晶相", "RA/TMR", "TDDB"], metrics: ["厚度误差", "片内CV", "RA", "TMR", "击穿寿命"], evidenceBoundary: "本站路线是由MgGaO结果外推的待验证方案；不能假定对CoFeB/MgO同样增益。", firstSteps: ["见证片校准", "微米结筛选", "纳米柱可靠性"], researchConnection: "直接连接原子层控制、MTJ势垒和可制造性。", takeaway: "最优点不是最高TMR，而是连续、低扩散、可接受RA与可靠性的交集。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`;
reports.reportDate = date;
reports.history.push({ date, label: "详细日报：Heusler低温TMR—16 nm阵列—量化读出—SQUID平台—原子MgO插层", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
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
