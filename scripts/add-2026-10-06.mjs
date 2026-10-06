import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const write = (file, value) => fs.writeFileSync(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
const add = (items, value) => { if (items.some((item) => item.id === value.id)) throw new Error(`duplicate id: ${value.id}`); items.push(value); };
const date = "2026-10-06";
const ids = {
  A: "a-mram-4k-400k-mg-mo-cfl-202509788",
  B: "b-ptw-vcma-work-function-5c01956",
  C: "c-sot-mram-7nm-codesign-3621279",
  D: "d-physike-cryom9-case-180",
  E: "e-cofeb-subcrystallization-115280",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B", "E"],
    title: "High Perpendicular Anisotropy in Mo-Inserted Mg Composite Free Layer for Nonvolatile Magnetoresistive Random Access Memory in 4K-400K Universal Temperature Applications",
    titleZh: "4–400 K通用温区MRAM｜Mo插层Mg复合自由层压低VSW与Δ温漂",
    authors: "Ming-Chun Hong et al.", venue: "Small 22, e09788 (2026)", published: "2026-03-01",
    timeTier: "近期正式发表/宽温输运与可靠性", system: "以MgO/MgOx盖层、Mg间隔层和Mo插入CoFeB复合自由层构成宽温MRAM单元。公开全文页面确认4–400 K目标；公开摘要未给出所有层厚、结尺寸、阵列容量和晶圆统计。",
    conditions: "4–400 K；报告开关电压温度系数VSW/T约0.68 mV/K、热稳定因子温度系数Δ/T约0.1 K⁻¹，并在全温区评估10 ns写入、保持、WER与耐久。退火温度、脉冲幅值分布和统计样本数未在摘要中公开。",
    methods: ["宽温电输运", "PMA/热稳定提取", "脉冲写入", "WER/保持/耐久", "复合自由层工程"],
    summary: "【实测/作者报告】VSW/T≈0.68 mV/K、Δ/T≈0.1 K⁻¹；【测试/外推】4–400 K范围内保持目标超过10年；【实测】10 ns写入、WER<1 ppm、耐久>10¹¹次；【作者解释】MgO/MgOx盖层和Mo插层Mg复合自由层共同降低温度敏感性。",
    relevance: "把低温输运直接落到MRAM写窗、保持与错误率，而非只测磁矩；适合做现有脉冲平台的温区校准标杆，并反推CoFeB/MgO界面与复合自由层工艺窗口。",
    limitation: "摘要未披露TMR、RA、结尺寸、完整层厚、样本量、置信区间、400 °C实际BEOL流程及阵列级数据；‘>10年’属于保持模型/加速评估，不是十年实测。",
    industrialization: "最接近宽温器件资格与汽车/航天存储单元；距可制造产品仍缺300 mm跨片/跨批良率、封装热循环、磁扰、ECC、阵列功耗和CMOS/BEOL整合。",
    whyRecommended: "先看复合自由层与MgO/MgOx盖层，再看VSW/T、Δ/T，最后核对WER/耐久的温度与统计定义；50–65分钟。",
    score: 9.8, priority: "S", doi: "10.1002/smll.202509788", arxiv: "",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202509788", backupUrl: "https://doi.org/10.1002/smll.202509788",
    accessNote: "本轮已打开Wiley直接全文页并以PubMed摘要交叉核验4–400 K、复合自由层与公开定量结果；未公开条件不补写。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["E", "C"],
    title: "Large and Tunable Electron-Depletion-Based Voltage-Controlled Magnetic Anisotropy in the CoFeB/MgO System via Work-Function-Engineered PtxW1−x Underlayers",
    titleZh: "功函数工程VCMA｜PtₓW₁₋ₓ底层把CoFeB/MgO响应提高约8倍",
    authors: "Yu-Chia Chen et al.", venue: "ACS Nano 19, 15953–15962 (2025)", published: "2025-04-14",
    timeTier: "近2年正式发表/界面与成分控制", system: "CoFeB/MgO体系采用不同Pt浓度的PtₓW₁₋ₓ底层调功函数；补充信息列出W、Pt77W23、Pt的UPS功函数校准和W(3)/PtₓW₁₋ₓ(5)/MgO(2)/W(5) nm校准堆栈。完整磁性样品逐层厚度未在公开摘要中列全。",
    conditions: "通过HR-XPS Fe 2p₃/₂、2p₁/₂位移追踪电子耗尽，以栅压下AHE评估VCMA；另用HAADF-STEM/EDS和深度XPS检查结构/成分。公开摘要未给绝对VCMA系数、退火条件、偏压窗口或样本数。",
    methods: ["Pt-W共溅射/成分扫描", "UPS功函数", "HR-XPS深度分析", "HAADF-STEM/EDS", "栅压AHE"],
    summary: "【实测】最高Pt浓度样品的VCMA响应约为纯W对照的8倍；【实测】Fe 2p结合能位移显示CoFeB电子耗尽；【作者解释】Pt浓度提高底层功函数并调控界面电荷；【实测】结构与成分由STEM/EDS和XPS辅助确认。",
    relevance: "把合金成分—功函数—界面电荷—VCMA串成可测工艺链，适合现有多靶溅射、XPS与电输运平台做连续梯度样片和原位反馈。",
    limitation: "约8倍是相对纯W而非绝对器件能耗；公开摘要未给绝对VCMA、TMR、RA、WER、耐久、晶圆均匀性和纳米结结果，且电荷耗尽与具体轨道杂化的因果仍依赖作者解释。",
    industrialization: "最接近VCMA材料筛选和底电极模块；距存储器仍缺完整pMTJ、亚纳米成分控制、400 °C热预算、300 mm均匀性、写入协议、TDDB与阵列验证。",
    whyRecommended: "先看Pt浓度—功函数标定，再看Fe 2p位移与VCMA趋势，最后审查约8倍是否能转化为写能和可靠性；45–60分钟。",
    score: 9.7, priority: "S", doi: "10.1021/acsnano.5c01956", arxiv: "",
    url: "https://pubs.acs.org/doi/10.1021/acsnano.5c01956", backupUrl: "https://doi.org/10.1021/acsnano.5c01956",
    accessNote: "本轮已打开ACS出版社直接题录/摘要与补充信息索引，核验约8倍、HR-XPS、UPS、STEM/EDS和栅压AHE；缺失数值明确留空。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B", "A"],
    title: "Comprehensive Device to System Co-Design for SOT-MRAM at the 7 nm Node",
    titleZh: "7 nm SOT-MRAM器件—系统协同｜14.8 Mb/mm²、16 Mb全链路模型",
    authors: "Piyush Kumar, Da Eun Shim, Azad Naeemi", venue: "IEEE Journal on Exploratory Solid-State Computational Devices and Circuits 11, 139–147 (2025)", published: "2025-10-01",
    timeTier: "近期正式发表/理论与EDA协同", system: "三端SOT-MRAM：器件级微磁开关/WER模型接入ASAP7 PDK版图、寄生提取、阵列SPICE、控制器与1–16 Mb place-and-route系统。全部性能为建模/仿真，不是流片实测。",
    conditions: "7 nm ASAP7；容量1–16 Mb。公开稿表格给出16 Mb面积1.149 mm²、密度13.9 Mb/mm²、64 bit写/读能40.66/30.22 pJ、频率1059 MHz、读/写访问6.61/4.72 ns。",
    methods: ["微磁WER", "版图/寄生提取", "阵列SPICE", "内存控制器", "系统place-and-route"],
    summary: "【仿真】峰值密度14.8 Mb/mm²、读带宽2.98 GB/s；【仿真】容量1→16 Mb使性能和读写带宽下降约33–38%；【仿真】256×128阵列读/写可低至2/2.4 ns；【仿真】SOT阵列写能可比STT低最多75%；【仿真】16 Mb写能中焦耳热占66%。",
    relevance: "给材料团队一个反向指标：自旋霍尔效率、轨道电阻、结尺寸和WER必须穿过互连、译码和阵列寄生后仍有系统收益。",
    limitation: "所有数字是模型预测；ASAP7不等于可制造SOT-MRAM PDK，缺真实材料分布、热串扰、工艺角、写驱动版图规则、硅上阵列、良率和封装数据。",
    industrialization: "最接近设计技术协同优化和架构筛选；距量产需可校准紧凑模型、代工设计规则、测试芯片、PVT/蒙卡、ECC、可靠性和软件工作负载验证。",
    whyRecommended: "先看器件参数如何进入阵列，再看16 Mb能耗分解，最后把14.8 Mb/mm²和75%严格标为仿真上限；55–70分钟。",
    score: 9.5, priority: "S", doi: "10.1109/JXCDC.2025.3621279", arxiv: "",
    url: "https://ieee-jxcdc.org/index.php/jxcdc/article/view/372", backupUrl: "https://doi.org/10.1109/JXCDC.2025.3621279",
    accessNote: "本轮已打开IEEE SSCS直接文章页及开放稿，核验方法链、容量扫描和公开表格数值；全部按理论/EDA预测标注。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A", "B"],
    title: "CryoM-9 Dry Variable-Temperature Superconducting Magnet System Installation Case",
    titleZh: "北京飞斯科CryoM-9安装案例｜1.5–300 K、±9 T与<15 mK厂商指标",
    authors: "北京飞斯科", venue: "厂商官方技术资料/安装案例", published: "2026-04-08",
    timeTier: "厂商技术资料/不作为科研证明", system: "CryoM-9采用GM制冷机、冷头悬浮减振、顶部装卸、静态交换氦气、50 mm内径样品管，配置电学与马达旋转样品杆。",
    conditions: "厂商标称初始降温<18 h、1.5–300 K、±9 T、励磁<22 min、满量程温稳优于15 mK；未公开场均匀度、振动谱、温度传感器不确定度、布线热漏和载样条件。",
    methods: ["闭循环GM制冷", "静态交换气", "四象限励磁", "旋转电输运", "温度稳定性验收"],
    summary: "【厂商标称】温区1.5–300 K、磁场±9 T；【厂商标称】初始降温<18 h、励磁<22 min；【厂商标称】满量程温稳优于15 mK；【配置】50 mm样品管和电控旋转样品杆；【边界】安装案例不是独立科研性能证明。",
    relevance: "可承接宽温MRAM、角分辨磁输运和低噪声失效分析，但应把指标转换成带载样、带线缆、带脉冲的FAT/SAT与重复性预算。",
    limitation: "没有第三方校准、不确定度、振动频谱、场均匀度、样品实际温差、基温冷量、API、跨批GR&R或MTJ脉冲兼容数据。",
    industrialization: "最接近研发验证设备采购与平台升级；距产线量测仍缺自动装片、吞吐、校准追溯、维护SLA、跨设备一致性、MES接口和量产成本。",
    whyRecommended: "先核对带载样温稳和振动，再验收磁场/旋转/布线，最后用标准电阻与MTJ做跨温GR&R；25–35分钟。",
    score: 8.9, priority: "A", doi: "", arxiv: "",
    url: "https://www.physike.com/article/180", backupUrl: "https://www.physike.com/product/13",
    accessNote: "本轮已打开北京飞斯科官方安装案例和产品页，所有数值均标为厂商声明，不作为科研证明。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B", "D"],
    title: "CoFeB below crystallization temperature: Pivotal role of thickness and annealing temperature on the evolution of magnetic properties",
    titleZh: "CoFeB亚晶化温区｜厚度×退火决定B迁移、死层与各向异性",
    authors: "Vishal Tyagi et al.", venue: "Vacuum 249, 115280 (2026)", published: "2026-06-01",
    timeTier: "近期正式发表/退火与界面工艺", system: "在Si(001)上制备楔形CoFeB薄膜并加Al盖层；同步辐射XRR校准厚度，以MOKE和XRD追踪低于总体晶化温度时的磁性与相演化。",
    conditions: "研究变量为CoFeB厚度和退火温度；公开摘要未披露厚度范围、具体温度点/保温时间、溅射压力功率、Al厚度、样本数和误差。",
    methods: ["楔形磁控溅射", "同步辐射XRR", "MOKE", "XRD", "退火DOE"],
    summary: "【实测】较薄CoFeB更早出现各向异性下降；【作者解释】B向界面迁移增大磁死层，MOKE厚度依赖支持该解释；【实测】晶化温度以下已出现晶化CoFe相与富B CoFe相；【实测】MOKE回线与XRD共同显示厚度—退火耦合。",
    relevance: "直接服务CoFeB退火窗口、B扩散和界面死层控制；楔形片可把一次沉积转成连续厚度DOE，再把磁性转折点反馈给MTJ堆栈。",
    limitation: "不是MgO完整MTJ；摘要没有厚度/温度绝对范围、各向异性和死层数值，也无TMR、RA、PMA、WER、片内均匀性或400 °C BEOL验证。",
    industrialization: "最接近自由层沉积/退火窗口和过程监控；距器件制造需在MgO/CoFeB实际堆栈、300 mm快速热处理、纳米图形化后复现并关联电性与可靠性。",
    whyRecommended: "先看楔形厚度标定，再看MOKE/XRD的相变对应，最后把B迁移假说交给XPS/SIMS/STEM-EELS验证；40–55分钟。",
    score: 9.4, priority: "S", doi: "10.1016/j.vacuum.2026.115280", arxiv: "",
    url: "https://www.sciencedirect.com/science/article/pii/S0042207X26003213", backupUrl: "https://doi.org/10.1016/j.vacuum.2026.115280",
    accessNote: "本轮已打开ScienceDirect直接题录/摘要，核验样片、XRR/MOKE/XRD和两相解释；摘要未公开的工艺数值不补写。", recommendedOn: date, featured: true,
  },
];

const meta = [
  ["MRAM跨温工作不仅要求电阻可读，还要求写电压、热稳定因子、WER和势垒寿命在同一温区成立。", "复合自由层能否把4–400 K温漂压到可管理范围？", ["【实测/作者报告】VSW/T≈0.68 mV/K。", "【实测/作者报告】Δ/T≈0.1 K⁻¹。", "【实测】10 ns下WER<1 ppm。", "【实测】耐久>10¹¹次；【评估】保持>10年。"], "Mo插层、Mg间隔和双氧化物盖层共同调控PMA、B/O化学与热稳定；各项贡献尚需拆分对照。", "变量：Mo/Mg厚度、退火、4/77/300/400 K、脉宽；对照：标准CoFeB自由层；指标：VSW、Δ、TMR/RA、WER、保持、耐久。"],
  ["VCMA本质是电场改变铁磁/氧化物界面的电荷与轨道占据；底层功函数可通过电子化学势远程调控界面。", "Pt-W功函数连续可调时，VCMA能否随电子耗尽被放大？", ["【实测】最高Pt含量相对W约8倍。", "【实测】Fe 2p结合能位移指向电子耗尽。", "【实测】UPS建立功函数序列。", "【实测】STEM/EDS与XPS检查结构和成分。"], "作者将增强归因于底层功函数诱导的电子耗尽；对具体轨道杂化的本站推断不作定论。", "变量：Pt比例、合金厚度、退火和栅压；对照：纯W/纯Pt；指标：功函数、Fe 2p、绝对VCMA、TMR/RA、漏电与TDDB。"],
  ["器件冠军参数若不进入版图寄生、阵列和控制器，无法判断系统收益。", "7 nm节点下SOT-MRAM从器件到16 Mb系统的真正瓶颈在哪里？", ["【仿真】峰值14.8 Mb/mm²、2.98 GB/s。", "【仿真】1→16 Mb性能/带宽损失33–38%。", "【仿真】16 Mb 64 bit写/读40.66/30.22 pJ。", "【仿真】焦耳热占写能66%，SOT比STT最多省75%。"], "微磁开关分布向上抽象至电路和物理设计；结论依赖模型与7 nm设计规则，不是硅上证据。", "变量：SOT效率/电阻、阵列尺寸、互连层和WER；对照：STT/SRAM；指标：面积、延迟、带宽、能耗、温升、PVT和尾部错误。"],
  ["闭循环低温磁体的页面指标必须在真实线缆、样品杆和脉冲负载下重新验收。", "CryoM-9能否稳定支撑宽温MTJ输运与角分辨测量？", ["【厂商标称】1.5–300 K、±9 T。", "【厂商标称】降温<18 h、励磁<22 min。", "【厂商标称】温稳优于15 mK。", "【配置】50 mm样品管与马达旋转杆。"], "GM制冷与交换气提供温区，悬浮减振和双控温意在减小机械/热扰动；真实性须用可追溯标准样验证。", "变量：样品负载、线缆数、扫场速率、角度和脉冲功率；对照：空杆/标准电阻；指标：样品温差、噪声、漂移、振动、磁滞和GR&R。"],
  ["CoFeB在完全晶化前已可能发生B迁移、局部相分离和磁死层变化，决定后续MgO界面PMA与TMR。", "厚度与亚晶化退火如何共同决定磁各向异性？", ["【实测】薄膜越薄，各向异性越早下降。", "【实测】MOKE支持死层增加。", "【实测】XRD显示晶化CoFe与富B CoFe两相。", "【作者解释】B向界面迁移驱动变化。"], "磁体积损失与相演化相互耦合；B迁移是作者解释，元素深度证据仍需补充。", "变量：厚度、退火温度/时间、盖层和升温速率；对照：无退火/厚膜；指标：Ms、Hk、死层、B/O深度、XRD相、TMR/RA。"],
];
const details = papers.map((paper, index) => ({
  id: paper.id, oneSentence: paper.summary, background: meta[index][0], question: meta[index][1], workflow: paper.methods,
  findings: meta[index][2], explanation: meta[index][3], whyItMatters: [paper.relevance, paper.industrialization], researchConnection: meta[index][4],
  limitationsDetailed: paper.limitation, terms: ["实测、仿真/理论、作者解释、厂商标称与本站推断分开标注。", "公开来源未给出的条件、误差和统计不补写。"], takeaway: paper.whyRecommended,
}));

const review = {
  id: "review-vcmtj-ae3f41", kind: "正式综述", track: "B", secondaryTracks: ["C", "E"],
  title: "Material strategies for energy-efficient voltage-controlled magnetic tunnel junctions", titleZh: "2026正式综述｜节能电压控制MTJ的材料策略",
  authors: "Takayuki Nozaki et al.", venue: "Journal of Physics D: Applied Physics 59, 073002 (2026)", published: "2026-02-17", recommendedOn: date,
  doi: "10.1088/1361-6463/ae3f41", url: "https://iopscience.iop.org/article/10.1088/1361-6463/ae3f41", backupUrl: "https://doi.org/10.1088/1361-6463/ae3f41",
  assistantSummary: "这篇开放获取Topical Review从VCMA基本机制出发，比较外延与多晶MTJ的材料/界面策略，并把高VCMA、可靠写入和尺寸缩放放进同一框架。它是综述，不产生新的器件实测数据。",
  whySelected: "可用来解释今天Pt-W功函数工程、MgO/CoFeB界面和复合自由层为何有效，同时提醒材料系数必须转成写入窗口、波动和可靠性。",
  readingGuide: ["先看图2的VCMA概念与MOKE例", "再看外延/多晶材料策略", "核对写入可靠性与缩放约束", "最后建立自家材料—器件指标表；60–80分钟"], notNew: false,
};
const classic = {
  id: "classic-stoner-wohlfarth-1948", kind: "经典文章", track: "C", secondaryTracks: ["A", "B"],
  title: "A mechanism of magnetic hysteresis in heterogeneous alloys", titleZh: "Stoner–Wohlfarth经典｜单畴一致转动与磁滞边界",
  authors: "E. C. Stoner and E. P. Wohlfarth", venue: "Philosophical Transactions of the Royal Society A 240, 599–642 (1948)", published: "1948-05-04", recommendedOn: date,
  doi: "10.1098/rsta.1948.0007", url: "https://royalsocietypublishing.org/doi/10.1098/rsta.1948.0007", backupUrl: "https://doi.org/10.1098/rsta.1948.0007",
  assistantSummary: "经典模型把颗粒视为互不作用的单畴体并以一致转动解释磁滞，给出取向依赖的开关边界。它是理想化理论，不含MgO、STT/SOT、热激活、缺陷或纳米图形化损伤。",
  whySelected: "今日A与C都依赖热稳定和开关分布；先掌握一致转动的理想基线，才能识别真实pMTJ中的非一致翻转、边缘损伤和热激活偏差。",
  readingGuide: ["先看模型假设", "再看能量极值与开关边界", "核对随机取向平均", "最后列出现代MTJ不满足的假设；35–50分钟"], notNew: true,
};
const curatedDetails = [
  { id: review.id, oneSentence: review.assistantSummary, background: "VCMA以电压调控界面磁各向异性，是降低MTJ写入电流的重要路线。", question: "哪些材料与界面策略能同时提高VCMA、保持TMR并实现可靠缩放？", workflow: review.readingGuide, findings: ["【综述】梳理VCMA基本机制。", "【综述】覆盖外延与多晶MTJ。", "【综述】比较材料和界面策略。", "【综述】强调缩放与可靠写入仍是核心挑战。"], explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "用综述框架建立Pt-W、Mg/Mo插层、MgO质量、退火和器件指标的因果矩阵。", limitationsDetailed: "综述不是工艺配方；不同文献的VCMA测量、热效应和样品结构不可直接横比，需回查原始数据。", terms: ["VCMA：电压控制磁各向异性", "多晶MTJ：更接近量产但界面/晶粒分布更复杂"], takeaway: review.readingGuide.join("；") },
  { id: classic.id, oneSentence: classic.assistantSummary, background: "单畴一致转动是磁性开关的基准模型。", question: "不含热与缺陷时，形状各向异性能否解释磁滞与取向依赖？", workflow: classic.readingGuide, findings: ["【理论】假设非相互作用单畴颗粒。", "【理论】磁化通过一致转动翻转。", "【理论】开关场由能量极值和稳定性决定。", "【边界】真实MTJ的热激活、非均匀模式和边缘损伤不在模型内。"], explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "以SW模型拟合基线，再用微磁和温度/脉宽依赖识别非一致翻转。", limitationsDetailed: "理想模型不能直接预测现代pMTJ的WER、STT/SOT、VCMA、DMI和缺陷分布。", terms: ["single-domain：单畴", "coherent rotation：一致转动"], takeaway: classic.readingGuide.join("；") },
];

const insights = [
  {
    id: "2026-10-06-wide-temp-mtj", date, type: "research", typeZh: "研究机会", trackLabel: "A/B/C · 宽温写窗",
    title: "4–400 K真实结温下的写窗—保持—WER统一图", subtitle: "材料温漂与脉冲自热放入同一统计模型。", summary: "用VSW/T和Δ/T约束宽温MTJ设计。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.B, ids.C], question: "宽温下材料参数、VCMA增益与阵列焦耳热如何共同决定WER？", rationale: "A给出宽温器件指标，B提供界面调控变量，C说明系统级焦耳热和寄生不能忽略。",
    workflow: ["4/77/150/300/400 K校准", "正负偏压与脉宽矩阵", "提取VSW/Δ/WER", "热—磁联合拟合", "阵列角落条件回灌"], equipment: ["宽温磁体", "脉冲源表", "高速示波器", "低噪声前放", "热仿真"], measurements: ["VSW/T", "Δ/T", "TMR/RA", "WER", "真实结温"], metrics: ["ppm级WER", "温漂", "模型残差", "保持置信度", "跨器件CV"], evidenceBoundary: "A的数值是论文实测/评估；与B/C组合后的统一图是本站待验证方案。", firstSteps: ["先做无VCMA对照", "再做Pt-W成分点", "最后回灌阵列模型"], researchConnection: "直接服务宽温MRAM、低温失效和工艺反馈。", takeaway: "温度、偏压和热稳定必须一起测。",
  },
  {
    id: "2026-10-06-cryom9-fat", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/A · CryoM-9验收",
    title: "±9 T宽温平台的带载样FAT/SAT", subtitle: "把厂商页面指标变成可追溯能力。", summary: "按温度、磁场、旋转和脉冲四轴验收。", status: "平台SOP",
    relatedPaperIds: [ids.D, ids.A], question: "厂商标称1.5–300 K与<15 mK能否在真实MTJ脉冲布线下复现？", rationale: "安装案例只证明交付配置，宽温MRAM需要样品真实温度、噪声、漂移与跨天重复性。",
    workflow: ["校准温度计", "空杆/标准电阻", "扫场与旋转映射", "脉冲负载测试", "三日GR&R"], equipment: ["CryoM-9", "标准温度计", "标准电阻", "加速度计", "脉冲源表"], measurements: ["样品温差", "温漂", "场滞后", "旋转误差", "电噪声"], metrics: ["基温/降温时间", "15 mK复现", "ppm稳定性", "GR&R", "吞吐"], evidenceBoundary: "全部设备指标为厂商声明；通过验收前不得用于科研结论。", firstSteps: ["先无样品校准", "再标准样", "最后MTJ"], researchConnection: "连接低温输运、设备升级与可靠性数据质量。", takeaway: "验收对象是样品环境，不是控制器读数。",
  },
  {
    id: "2026-10-06-workfunction-anneal", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B · 成分—退火闭环",
    title: "Pt-W功函数梯度×CoFeB厚度×退火三维窗口", subtitle: "从电子耗尽到B迁移和器件VCMA。", summary: "同片梯度缩短原子界面DOE。", status: "原子制造路线",
    relatedPaperIds: [ids.B, ids.E, review.id], question: "功函数诱导电子耗尽能否在B迁移和亚晶化后仍保持VCMA增益？", rationale: "B展示Pt-W成分调VCMA，E表明厚度与退火会改变死层和相组成，综述提供机制边界。",
    workflow: ["Pt-W连续成分", "CoFeB楔形厚度", "分区退火", "UPS/XPS/MOKE/XRD", "完整MTJ电测"], equipment: ["多靶溅射", "真空互联", "UPS/XPS", "MOKE/XRD", "CIPT/脉冲台"], measurements: ["功函数", "Fe/B/O深度", "死层/Hk", "VCMA", "TMR/RA/TDDB"], metrics: ["片内均匀性", "绝对VCMA", "热预算", "TMR损失", "可靠性"], evidenceBoundary: "两篇论文未共同验证Pt-W与退火/B迁移耦合；该组合是本站假设。", firstSteps: ["先平面膜", "再CIPT", "最后纳米柱"], researchConnection: "直接对应溅射、真空互联、界面成分和退火控制。", takeaway: "把电子结构增益放进热预算后再判断。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`; reports.reportDate = date;
reports.history.push({ date, label: "详细日报：宽温MRAM—功函数VCMA—7 nm协同设计—CryoM-9—CoFeB亚晶化", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
for (const paper of papers) add(reports.papers, paper); write("data/reports.json", reports);
const paperDetails = read("data/paper-details.json"); for (const detail of details) add(paperDetails, detail); write("data/paper-details.json", paperDetails);
const curated = read("data/curated-reading.json"); curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] }); add(curated.items, review); add(curated.items, classic); write("data/curated-reading.json", curated);
const curatedDetailData = read("data/curated-details.json"); for (const detail of curatedDetails) add(curatedDetailData, detail); write("data/curated-details.json", curatedDetailData);
write("data/daily-reading.json", { date, review, classics: [classic] });
const insightData = read("data/insight-archive.json"); insightData.history.push({ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }); for (const item of insights) add(insightData.items, item); write("data/insight-archive.json", insightData);
console.log(`Added detailed radar for ${date}`);
