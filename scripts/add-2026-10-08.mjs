import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const write = (f, v) => fs.writeFileSync(path.join(root, f), `${JSON.stringify(v, null, 2)}\n`);
const add = (a, x) => { if (a.some((e) => e.id === x.id)) throw new Error(`duplicate id: ${x.id}`); a.push(x); };
const date = "2026-10-08";
const ids = {
  A: "a-twisted-crsbr-afmtj-07818-x",
  B: "b-vgsot-array-3565284",
  C: "c-comnfe-mtj-pw88-4llt",
  D: "d-qd-dynacool-eto-platform",
  E: "e-oxygen-rich-mgo-intermixing-0199011",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B", "E"],
    title: "Twist-assisted all-antiferromagnetic tunnel junction in the atomic limit",
    titleZh: "原子极限反铁磁隧道结｜2 K零场非易失TMR超过700%",
    authors: "Yuliang Chen et al.", venue: "Nature 632, 1045–1051 (2024)", published: "2024-08-28",
    timeTier: "近2年高质量/原子层MTJ", system: "石墨电极夹持两片CrSBr反铁磁双层，双层之间按约35°等角度扭转；整个CrSBr堆栈既是磁性层也是隧穿势垒，利用晶轴各向异性形成零场双稳态。",
    conditions: "代表性器件在2 K测量；正文公开35°器件采用±0.3 T、15 mV，另用±1.5 T和9 T辨认状态；10°、40°、55°与90°结构用于角度/层数对照。公开摘要报告零场非易失TMR超过700%，未给晶圆级样本数、良率或耐久。",
    methods: ["低温垂直输运", "扭角堆叠", "角分辨扫场", "I–V/TMR", "DFT相干隧穿"],
    summary: "【实测】零场非易失TMR超过700%；【实测】35°扭角器件在2 K呈双稳隧穿电流；【实测】扭转界面的TMR随升温衰减弱于未扭转界面；【理论】平行动量相关衰减率与扭角模型解释角度依赖。",
    relevance: "它不是传统CoFeB/MgO量产堆栈，但把原子层配准、界面旋转、相干隧穿和低温读出放进同一实验，是评估原子制造误差如何变成TMR分布的高价值方法学样板。",
    limitation: "依赖机械剥离/转移、低温和二维反铁磁材料；面积、接触、扭角、封装与氧化稳定性均未达到CMOS晶圆流程。超过700%是实验器件结果，不能外推为室温MRAM性能。",
    industrialization: "最接近原子层界面工程与新型MTJ概念验证；距离可制造存储器仍缺室温写入、纳米图形化、晶圆级对准、封装、保持/耐久、WER和CMOS集成。",
    whyRecommended: "先看图1器件结构、图3的2 K零场回线，再看图4扭角模型和扩展数据温变；50–65分钟。",
    score: 9.4, priority: "S", doi: "10.1038/s41586-024-07818-x", arxiv: "",
    url: "https://www.nature.com/articles/s41586-024-07818-x", backupUrl: "https://doi.org/10.1038/s41586-024-07818-x",
    accessNote: "本轮已打开Nature正文，核验器件结构、2 K/偏压/磁场条件、>700%零场TMR与理论边界。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["A", "C"],
    title: "Ultrafast Switching and Selective Data Writing Through Voltage-Gated Spin-Orbit Torque in Perpendicular Magnetic Tunnel Junction Arrays",
    titleZh: "80 nm VGSOT阵列｜0.3 ns动态过程、功耗降76%与WER低于6.7×10⁻⁵",
    authors: "Authors as listed by IEEE Transactions on Magnetics", venue: "IEEE Transactions on Magnetics 61, 4401005 (2025)", published: "2025-04-29",
    timeTier: "近期正式发表/阵列写入", system: "直径80 nm的W基垂直MTJ，多个MTJ共享W自旋霍尔写入条；对单结做纳秒SOT动态测量，再用栅压调节VCMA以选择性写入阵列。",
    conditions: "公开摘要给出0.3 ns incubation、0.3 ns switching；1 V栅压使SOT写功耗降低76%；选择性写入WER低于6.7×10⁻⁵。完整膜层、W条宽/长、阵列规模、温度、脉冲电流密度、样本数和尾部统计定义未在摘要公开。",
    methods: ["W基pMTJ", "纳秒SOT脉冲", "VCMA门控", "共享写线阵列", "WER统计"],
    summary: "【实测】80 nm W基pMTJ保持纳秒脉冲可靠开关；【实测】incubation和switching时间均约0.3 ns；【实测】1 V门控使写功耗降低76%；【实测】阵列选择性写入WER低于6.7×10⁻⁵。",
    relevance: "把SOT高速、VCMA选通和共享写线阵列连起来，直接对应用户关注的读写、能耗、密度与器件集成，而非只报告材料级力矩。",
    limitation: "公开摘要未给晶圆直径、跨片/跨批分布、良率、保持、耐久、TDDB、半选扰动、门介质可靠性和完整外围电路；6.7×10⁻⁵尚不能代表产品级尾部误码。",
    industrialization: "最接近VGSOT阵列单元和选择写入模块；仍缺BEOL热预算、共享写线IR-drop、门控晶体管面积、阵列级ECC、10⁹级尾部统计与封装温度角。",
    whyRecommended: "先看动态开关图，再看1 V门控节能，最后看共享W条选择写入和WER统计；45–60分钟。",
    score: 9.8, priority: "S", doi: "10.1109/TMAG.2025.3565284", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/10980142", backupUrl: "https://doi.org/10.1109/TMAG.2025.3565284",
    accessNote: "本轮已打开IEEE直接入口并用出版社题录核验尺寸、动态时间、功耗和WER；页面正文受脚本限制，未公开的数据不补写。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B", "E"],
    title: "Understanding of electronic structure and magnetism of body-centered cubic Co-Mn-Fe alloys for magnetic tunnel junctions",
    titleZh: "Co–Mn–Fe无序合金理论｜稳健Δ₁能带、Tc>1000 K与阻尼约10⁻⁴",
    authors: "Tufan Roy, Shunsuke Kubota, Masahito Tsujikawa, and Masafumi Shirai", venue: "Physical Review Materials 9, 114406 (2025)", published: "2025-11-12",
    timeTier: "近期正式发表/第一性原理", system: "面向MgO-MTJ电极的体心立方无序Co–Mn–Fe三元合金；扫描化学成分并计算电子结构、磁性、结构稳定性、平均场转变温度、Gilbert阻尼和四方畸变下PMA。",
    conditions: "出版社摘要公开Δ₁自旋极化能带在宽成分区间稳健、平均场Tc>1000 K、Gilbert阻尼约10⁻⁴及四方畸变下显著PMA；具体超胞/CPA方案、k点、成分网格、畸变量和界面终止需回全文核对。",
    methods: ["第一性原理", "无序合金", "Δ₁能带", "Gilbert阻尼", "四方畸变PMA"],
    summary: "【理论】宽Co–Mn–Fe成分区间保留费米能级自旋极化Δ₁带；【平均场预测】铁磁转变温度高于1000 K；【理论】Gilbert阻尼约10⁻⁴；【理论】四方畸变可产生较大PMA。",
    relevance: "将MgO对称性过滤、低阻尼、热稳定和成分窗口放在同一筛选框架，可指导共溅射/组合材料库，而不是单点成分优化。",
    limitation: "所有器件性能为材料层预测；平均场Tc通常高估，体相无序模型不包含真实CoFeB/MgO界面、B扩散、粗糙、缺陷、退火晶化、RA/TMR与工艺分布。",
    industrialization: "最接近候选电极与成分窗口筛选；距可制造MTJ还需薄膜相稳定、MgO外延匹配、400 °C退火、阻尼/FMR、TMR/RA、WER和晶圆均匀性实测。",
    whyRecommended: "先看成分—Δ₁图，再看Tc和阻尼，最后核对四方畸变PMA及模型假设；40–55分钟。",
    score: 9.3, priority: "S", doi: "10.1103/pw88-4llt", arxiv: "",
    url: "https://journals.aps.org/prmaterials/abstract/10.1103/pw88-4llt", backupUrl: "https://doi.org/10.1103/pw88-4llt",
    accessNote: "本轮已打开APS出版社摘要，核验作者、日期、Δ₁、Tc、阻尼与PMA结论。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A", "B"],
    title: "Quantum Design PPMS DynaCool Electrical Transport Platform",
    titleZh: "Quantum Design DynaCool/ETO｜1.8–400 K、最高14 T与10 μΩ–5 GΩ覆盖",
    authors: "Quantum Design North America", venue: "厂商正式产品页与PPMS Platform技术手册", published: "2024-01-01",
    timeTier: "厂商技术资料/不作为科研证明", system: "无液氦DynaCool低温强磁场平台，可配置ETO四探针AC、高阻两探针、DC电阻、van der Pauw/Hall、角度旋转、³He/ADR/稀释制冷和外部多功能探杆。",
    conditions: "厂商标称1.8–400 K、9/12/14 T；ETO四探针10 μΩ–10 MΩ，高阻两探针2 MΩ–5 GΩ；DC四探针10 μΩ–5 MΩ、2 nA–8 mA。DR最低50 mK、³He最低0.4 K。具体最低噪声受接线、接触和量程影响。",
    methods: ["AC/DC四探针", "高阻输运", "Hall/van der Pauw", "角分辨磁输运", "MultiVu自动化"],
    summary: "【厂商标称】1.8–400 K、9/12/14 T；【厂商标称】ETO覆盖10 μΩ–10 MΩ四探针及2 MΩ–5 GΩ高阻两探针；【厂商标称】DC源电流2 nA–8 mA；【兼容性】可扩展至0.4 K ³He或50 mK DR。",
    relevance: "适合建立MTJ从高阻隧穿态到低阻金属引线的统一温变/扫场平台，并把用户既有LabVIEW/Python质量评分迁移到MultiVu序列与外部仪器。",
    limitation: "全部是厂商规格，不构成样品端科研证明；未公开用户接线下的噪声PSD、电子温度、脉冲带宽、磁场均匀性、跨机台GR&R、维护停机和成本。",
    industrialization: "最接近研发验证与失效分析平台；距生产测试仍缺自动探针/装片、MES、秒级吞吐、校准追溯、跨设备相关性和高压脉冲可靠性模块。",
    whyRecommended: "先看ETO量程与接线模式，再看低温插件兼容性，最后据标准电阻、短开路和MTJ样品制定FAT/SAT；25–35分钟。",
    score: 9.0, priority: "A", doi: "", arxiv: "",
    url: "https://qdusa.com/products/dynacool.html", backupUrl: "https://www.qdusa.com/siteDocs/productBrochures/1084-500.pdf",
    accessNote: "本轮已打开Quantum Design官方产品页，核验温区、磁场、ETO/DC量程、Hall和低温插件；全部按厂商标称处理。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B", "C"],
    title: "Intermixing of iron and cobalt with oxygen-rich magnesium oxide in CoFeB/MgO/CoFeB magnetic tunneling junctions",
    titleZh: "氧富MgO界面原子迁移｜Fe/Co进入势垒、PMA下降与漏电/TMR退化",
    authors: "Michael A. Gribelyuk et al.", venue: "Journal of Applied Physics 135, 125301 (2024)", published: "2024-03-26",
    timeTier: "近2年高相关/原子界面表征", system: "磁控溅射CoFeB/MgO/CoFeB模型MTJ，采用氧富、较厚MgO势垒放大界面化学信号；结合原子尺度STEM/EELS与第一性原理，比较沉积态和退火态。",
    conditions: "公开摘要确认对溅射结构做原子尺度谱学成像，并研究退火前后Fe价态；未公开可核验的MgO/CoFeB确切厚度、氧分压、退火温度时间、扩散长度、PMA/TMR绝对下降量，因此不补写。",
    methods: ["磁控溅射", "原子分辨STEM", "EELS价态", "退火对照", "第一性原理缺陷"],
    summary: "【实测】Fe和Co从电极进入氧富MgO；【实测解释】沉积态势垒内Fe呈Fe²⁺/Fe³⁺或更高混合价，退火后趋向Fe²⁺；【理论】Fe经Mg空位扩散能量有利；【理论】Fe杂质降低界面PMA、增加漏电并降低TMR。",
    relevance: "把‘氧剂量—Mg空位—Fe/Co迁移—价态—PMA/漏电/TMR’串成可检验链，直接服务MgO沉积、退火和B/金属扩散控制。",
    limitation: "为增强EELS信号使用氧富厚势垒，不能直接等同量产约纳米级MgO；公开来源缺绝对扩散/PMA/TMR数据，理论预测需在实际器件上标定。",
    industrialization: "最接近势垒成分控制、退火窗口和失效根因分析；距工艺放行仍需标准厚度MTJ、跨晶圆EELS/XPS抽检、RA/TMR、TDDB、保持/耐久与批次统计。",
    whyRecommended: "先看原子分辨EELS与价态，再看Mg空位扩散计算，最后把PMA/漏电/TMR预测映射到自家退火DOE；45–60分钟。",
    score: 9.7, priority: "S", doi: "10.1063/5.0199011", arxiv: "",
    url: "https://doi.org/10.1063/5.0199011", backupUrl: "https://pubs.aip.org/aip/jap/article/135/12/125301/3278320/Intermixing-of-iron-and-cobalt-with-oxygen-rich",
    accessNote: "本轮已打开公开论文页面/摘要并核验STEM/EELS、价态、Mg空位扩散和器件性能预测；未公开定量数据明确留空。", recommendedOn: date, featured: true,
  },
];

const meta = [
  ["反铁磁MTJ利用极低杂散场和快自旋动力学提高密度，但传统反铁磁体难以产生净自旋极化读出。", "原子层扭角能否在零场产生可读、非易失的反铁磁隧穿状态？", ["【实测】零场TMR超过700%。", "【实测】2 K下出现双稳回线。", "【实测】扭转界面温度衰减较慢。", "【理论】相干隧穿与动量旋转解释角度依赖。"], "扭转削弱层间交换并旋转平行动量，两个准平行/准反平行态具有不同隧穿衰减；这是作者模型与实验的对应。", "变量：扭角、层数、偏压、温度、场角；对照：0°/不同扭角；指标：TMR、保持、循环稳定、接触噪声、界面污染。"],
  ["SOT三端器件分离读写，但共享写线阵列仍需选择单元并降低电流，VCMA可暂时改变自由层能垒。", "VCMA门控能否在共享W条上同时实现亚纳秒SOT和选择写入？", ["【实测】80 nm器件纳秒开关。", "【实测】0.3 ns等待+0.3 ns翻转。", "【实测】1 V门控降功耗76%。", "【实测】WER<6.7×10⁻⁵。"], "门压降低有效各向异性能垒，使相同SOT电流更容易翻转目标结；未选结保持较高能垒。", "变量：门压、SOT脉幅/宽、共享线长度、温度；对照：无门压/单结；指标：WER、半选扰动、能耗、IR-drop、TDDB。"],
  ["MgO优先传输Δ₁对称性态，电极若同时具备高自旋极化、低阻尼和PMA，可降低写电流并保持读出。", "无序Co–Mn–Fe能否在宽成分窗口保留适合MgO-MTJ的电子与磁性？", ["【理论】Δ₁带宽成分稳健。", "【平均场】Tc>1000 K。", "【理论】阻尼约10⁻⁴。", "【理论】四方畸变产生PMA。"], "成分改变费米能级、自旋态和交换作用；四方畸变进一步打破晶体对称性产生PMA。", "变量：Co/Mn/Fe比、畸变、退火；对照：CoFe/CoFeB；指标：XRD、FMR阻尼、PMA、TMR/RA、Tc与相稳定。"],
  ["低温MTJ既可能从几十微欧到数吉欧，还需要温度、磁场、接触和自动化在同一平台闭环。", "DynaCool/ETO能否覆盖MTJ材料筛选到高阻器件诊断？", ["【厂商标称】1.8–400 K、最高14 T。", "【厂商标称】四探针10 μΩ–10 MΩ。", "【厂商标称】两探针2 MΩ–5 GΩ。", "【厂商标称】可扩至0.4 K/50 mK。"], "宽量程与低温插件提供平台兼容性，但真实噪声和电子温度由接线、滤波、接触及量程共同决定。", "变量：接线、量程、激励、温度、场角；对照：标准电阻/开短路；指标：噪声PSD、漂移、GR&R、丢点率、样品升温。"],
  ["MgO势垒的氧化学计量和Mg空位会改变金属原子迁移、界面价态及对称性过滤。", "氧富MgO中的Fe/Co迁移如何连接到PMA、漏电和TMR退化？", ["【实测】Fe/Co进入MgO。", "【实测】Fe价态随退火改变。", "【理论】Mg空位促进Fe迁移。", "【理论】PMA下降、漏电增加、TMR降低。"], "氧富势垒提供空位/氧化还原路径，退火重排价态与扩散；器件影响由作者的第一性原理推断，需电测验证。", "变量：氧分压、MgO厚度、退火温时；对照：欠氧/化学计量/氧富；指标：EELS/XPS、扩散长度、PMA、RA/TMR、漏电与TDDB。"],
];
const details = papers.map((p, i) => ({ id: p.id, oneSentence: p.summary, background: meta[i][0], question: meta[i][1], workflow: p.methods, findings: meta[i][2], explanation: meta[i][3], whyItMatters: [p.relevance, p.industrialization], researchConnection: meta[i][4], limitationsDetailed: p.limitation, terms: ["实测、理论/仿真、作者解释、厂商标称与本站推断分别标注。", "原文公开来源未披露的数据明确留空。"], takeaway: p.whyRecommended }));

const review = {
  id: "review-stt-reliability-irps-10983522", kind: "正式综述", track: "B", secondaryTracks: ["C", "E"],
  title: "Overview of Reliability in Scaling Embedded STT-MRAM", titleZh: "2025正式可靠性综述｜嵌入式STT-MRAM缩放中的保持、耐久与工艺波动",
  authors: "Hyunsung Jung and Yoon Jong Song", venue: "2025 IEEE International Reliability Physics Symposium (IRPS)", published: "2025-03-30", recommendedOn: date,
  doi: "10.1109/IRPS48204.2025.10983522", url: "https://ieeexplore.ieee.org/document/10983522", backupUrl: "https://doi.org/10.1109/IRPS48204.2025.10983522",
  assistantSummary: "正式IEEE可靠性综述聚焦嵌入式STT-MRAM缩放，系统梳理数据保持、写耐久、热稳定、外磁场/扰动和工艺变化的尺度依赖；它提供可靠性框架而非一套新的器件实测数据。",
  whySelected: "本日五条线最终都要落到可靠性：扭角/氧化/成分决定材料分布，VGSOT决定写入应力，平台决定测量真实性；综述可把这些结果归一到保持、耐久、扰动和PVT尾部。",
  readingGuide: ["先看缩放后的保持与热稳定", "再看写耐久和隧穿势垒", "对照工艺/电路波动", "最后建立可靠性验证矩阵；45–60分钟"], notNew: false,
};
const classic = {
  id: "classic-kanai-vcma-4753816", kind: "经典文章", track: "B", secondaryTracks: ["A", "C"],
  title: "Electric field-induced magnetization reversal in a perpendicular-anisotropy CoFeB-MgO magnetic tunnel junction", titleZh: "Kanai 2012经典｜CoFeB/MgO pMTJ电场诱导约180°磁化翻转",
  authors: "Shun Kanai et al.", venue: "Applied Physics Letters 101, 122403 (2012)", published: "2012-09-17", recommendedOn: date,
  doi: "10.1063/1.4753816", url: "https://doi.org/10.1063/1.4753816", backupUrl: "https://cir.nii.ac.jp/crid/1360283692075112064",
  assistantSummary: "经典实验在溅射CoFeB/MgO垂直MTJ中、静态外磁场辅助下实现电场诱导约180°磁化翻转，确立了以VCMA暂时改变能垒并触发翻转的器件路径。",
  whySelected: "它为本日VGSOT门控和低温/阵列VCMA建立最小实验基线，也提醒今天的76%节能与选择写入仍需区分门控降能垒、SOT驱动和外场依赖。",
  readingGuide: ["先看器件与外场条件", "再看电压触发的180°翻转", "核对成功窗口与失效窗口", "最后对照现代无场VGSOT；25–35分钟"], notNew: true,
};
const curatedDetails = [
  { id: review.id, oneSentence: review.assistantSummary, background: "MTJ缩小后，热稳定、随机写入和氧化层可靠性的统计尾部比均值更重要。", question: "嵌入式STT-MRAM缩放时哪些失效会成为主导？", workflow: review.readingGuide, findings: ["【综述】保持与热稳定具有尺寸依赖。", "【综述】写耐久和势垒应力必须联合评估。", "【综述】外部扰动与工艺变化会压缩窗口。", "【综述】需要材料—器件—电路协同缓解。"], explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "建立温度×电压×脉宽×循环数×工艺角矩阵，报告均值、方差和尾部失效率。", limitationsDetailed: "综述不能代替特定代工节点、堆栈和阵列的实测；公开题录未给可直接复用的统一验收阈值。", terms: ["Retention：无电保持", "Endurance：循环写入寿命", "PVT：工艺/电压/温度"], takeaway: review.readingGuide.join("；") },
  { id: classic.id, oneSentence: classic.assistantSummary, background: "VCMA用电场改变铁磁/氧化物界面的轨道占据与磁各向异性，理论上可减少经过势垒的写电流。", question: "电场是否能在真实溅射CoFeB/MgO pMTJ中触发完整磁化反转？", workflow: classic.readingGuide, findings: ["【实测】实现约180°磁化反转。", "【实测】器件为溅射CoFeB/MgO pMTJ。", "【条件】需要静态外磁场。", "【边界】公开摘要未给产品级WER、耐久和阵列数据。"], explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "以此为VCMA基线，对照现代SOT+VCMA的门压、辅助场、WER、能耗和TDDB。", limitationsDetailed: "早期单器件演示依赖外场，不能直接等同无场阵列存储；公开摘要未给完整堆栈、结尺寸、脉冲与统计。", terms: ["VCMA：电压控制磁各向异性", "pMTJ：垂直磁隧道结"], takeaway: classic.readingGuide.join("；") },
];

const insights = [
  {
    id: "2026-10-08-interface-digital-twin", date, type: "research", typeZh: "研究机会", trackLabel: "A/C/E · 原子界面数字孪生",
    title: "扭角/氧化/成分到TMR与PMA的界面数字孪生", subtitle: "把原子结构表征与可测器件参数闭环。", summary: "用同一参数表连接原子界面、第一性原理和输运。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.C, ids.E], question: "原子层配准、MgO氧化学计量和电极成分如何共同决定TMR、PMA与漏电？", rationale: "A给出扭角—相干隧穿，C给出成分—Δ₁/阻尼，E给出氧化—迁移/价态链。",
    workflow: ["建立界面结构变量字典", "DFT/成分筛选", "溅射氧剂量DOE", "STEM/EELS与XPS", "TMR/RA/PMA标定"], equipment: ["磁控溅射/真空互联", "原位XPS", "STEM-EELS", "FMR/VSM", "低温输运"], measurements: ["界面粗糙/价态", "Δ₁代理", "阻尼/PMA", "TMR/RA", "漏电/TDDB"], metrics: ["模型残差", "批间漂移", "PMA保持率", "TMR窗口", "失效可解释率"], evidenceBoundary: "三篇并未共同验证；数字孪生是本站提出的待验证工艺反馈路线。", firstSteps: ["平面膜片", "完整MTJ", "晶圆统计"], researchConnection: "服务原子级制造和MTJ界面控制。", takeaway: "原子结构必须映射到器件可测量。",
  },
  {
    id: "2026-10-08-dynacool-mtj-validation", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/B · 宽量程低温MTJ平台",
    title: "DynaCool/ETO宽量程MTJ自动化验收", subtitle: "覆盖高阻势垒、低阻引线与亚开尔文扩展。", summary: "把厂商量程变成标准样和真实器件SOP。", status: "平台SOP",
    relatedPaperIds: [ids.D, ids.B], question: "10 μΩ–5 GΩ的标称范围在MTJ脉冲和温变时能否保持低噪声、低自热和可追溯？", rationale: "平台规格覆盖宽，但VGSOT需要外部脉冲、同步触发和半选扰动测量。",
    workflow: ["开短路/标准电阻", "接触I–V筛查", "4–300 K扫温", "扫场/角分辨", "外部脉冲同步"], equipment: ["DynaCool/ETO", "³He或DR", "脉冲源表", "示波器", "低噪声前置"], measurements: ["噪声PSD", "温漂/自热", "TMR/RA", "触发抖动", "数据丢点"], metrics: ["GR&R", "量程交叠误差", "电子温度", "半选读扰", "吞吐"], evidenceBoundary: "Quantum Design参数是厂商标称；必须FAT/SAT后才能作为科研测量能力。", firstSteps: ["标准样", "单结", "阵列"], researchConnection: "延续用户已有LabVIEW/Python自动化和质量评分。", takeaway: "量程覆盖不等于样品端已验证。",
  },
  {
    id: "2026-10-08-mgo-vacancy-anneal", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B/C · 势垒成分—退火闭环",
    title: "MgO氧剂量×Mg空位×退火的原子制造窗口", subtitle: "用价态、扩散和电学尾部共同放行。", summary: "将势垒化学计量变成可执行的工艺控制图。", status: "原子制造路线",
    relatedPaperIds: [ids.E, ids.C, review.id], question: "如何避免氧富MgO诱发金属迁移，同时保持晶化、PMA和TMR？", rationale: "E定位Mg空位/价态链，C提供Δ₁电极筛选，综述要求最终验证保持和耐久尾部。",
    workflow: ["氧分压/功率矩阵", "原位XPS", "分区退火", "截面EELS", "RA/TMR/TDDB/保持"], equipment: ["真空互联溅射", "原位XPS", "RTA", "TEM-EELS", "CIPT/电测"], measurements: ["O/Mg比", "Fe/Co/B深度", "PMA/阻尼", "RA/TMR", "漏电/击穿"], metrics: ["工艺窗口宽度", "扩散长度", "TMR均匀性", "尾部漏电", "保持/耐久"], evidenceBoundary: "厚氧富模型样的机制不能直接量化标准势垒；需同片对照和真实器件标定。", firstSteps: ["厚模型层", "标准势垒", "纳米柱/阵列"], researchConnection: "直接对应MgO沉积、退火、扩散和可靠性。", takeaway: "用原子价态与电学尾部共同定义放行。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`; reports.reportDate = date;
reports.history.push({ date, label: "详细日报：原子极限AFMTJ—80 nm VGSOT阵列—CoMnFe理论—DynaCool/ETO—MgO原子迁移", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
for (const p of papers) add(reports.papers, p); write("data/reports.json", reports);
const paperDetails = read("data/paper-details.json"); for (const d of details) add(paperDetails, d); fs.writeFileSync(path.join(root, "data/paper-details.json"), `${JSON.stringify(paperDetails)}\n`);
const curated = read("data/curated-reading.json"); curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] }); add(curated.items, review); add(curated.items, classic); write("data/curated-reading.json", curated);
const curatedDetailData = read("data/curated-details.json"); for (const d of curatedDetails) add(curatedDetailData, d); write("data/curated-details.json", curatedDetailData);
write("data/daily-reading.json", { date, review, classics: [classic] });
const insightData = read("data/insight-archive.json"); insightData.history.push({ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }); for (const x of insights) add(insightData.items, x); write("data/insight-archive.json", insightData);
console.log(`Added detailed radar for ${date}`);
