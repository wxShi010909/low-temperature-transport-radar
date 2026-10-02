import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const write = (f, v) => fs.writeFileSync(path.join(root, f), `${JSON.stringify(v, null, 2)}\n`);
const add = (a, x) => { if (a.some((e) => e.id === x.id)) throw new Error(`duplicate id: ${x.id}`); a.push(x); };
const date = "2026-10-02";
const ids = {
  A: "a-mtj-noise-224423",
  B: "b-14nm-auto-10631315",
  C: "c-uvpp-transformer-9830351",
  D: "d-cryogenic-cfms-9-18t",
  E: "e-atomic-chemistry-5b03627",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B"],
    title: "Low-frequency and shot noises in CoFeB/MgO/CoFeB magnetic tunneling junctions",
    titleZh: "低温噪声给MgO隧穿做通道鉴别｜1/f、RTN与散粒噪声三证合一",
    authors: "Tomonori Arakawa et al.", venue: "Physical Review B 86, 224423 (2012)", published: "2012-12-28",
    timeTier: "关键低温噪声/界面输运", system: "自旋阀型CoFeB/MgO/CoFeB磁隧道结；在低温下围绕自由层磁滞回线比较P/AP态的低频1/f噪声、随机电报噪声（RTN）与散粒噪声。",
    conditions: "出版社摘要确认低温噪声测量和磁滞回线扫描；公开摘要未给完整膜层、结面积、绝对温度、偏压范围和带宽，因此本站不补写这些数值。",
    methods: ["低温电输运", "1/f噪声", "RTN时域/频域", "散粒噪声", "P/AP磁态对照"],
    summary: "【实测】自由层磁滞附近1/f噪声增强，主要指向磁涨落；【实测】RTN在磁滞回线中对两种磁配置对称增强，但AP态RTN更强，显示自旋相关激活；【实测/作者解释】散粒噪声支持晶态MgO中的自旋相关相干隧穿。",
    relevance: "把低温平台从只测R-H/TMR升级为缺陷与磁涨落诊断：1/f看分布式涨落，RTN追单个/少数两态源，散粒噪声检验传输统计，适合反推退火、刻蚀和边缘损伤。",
    limitation: "摘要未公开温度、频段、Fano因子、结尺寸和样本数；磁涨落与陷阱电荷可能耦合，不能仅凭单一谱形锁定微观缺陷。",
    industrialization: "最接近失效分析和读噪声筛查；距量产需建立晶圆级噪声抽测、RTN尾部分布、RBER/读窗相关、测试时间与自动判据。",
    whyRecommended: "先看磁滞附近噪声地图，再对照P/AP态RTN，最后看散粒噪声与相干隧穿；45–60分钟。",
    score: 9.7, priority: "S", doi: "10.1103/PhysRevB.86.224423", arxiv: "",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.86.224423", backupUrl: "https://doi.org/10.1103/PhysRevB.86.224423",
    accessNote: "本轮已打开APS直接页面，核验低温、1/f、RTN、P/AP差异与散粒噪声结论；未公开定量条件明确留空。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["C"],
    title: "14nm FinFET Node Embedded MRAM Technology for Automotive Non-Volatile RAM Applications with Endurance Over 1E12-Cycles",
    titleZh: "14 nm汽车级eMRAM｜10^12次耐久、150 °C十年保持与18 Mb/mm²",
    authors: "Joosung Oh et al.", venue: "2024 IEEE Symposium on VLSI Technology and Circuits", published: "2024-06-16",
    timeTier: "近期正式发表/汽车级阵列", system: "14 nm FinFET节点嵌入式MRAM宏，使用SRAM接口，目标是汽车非易失RAM而非只替代低频eFlash。公开题录未披露完整pMTJ膜层和阵列容量。",
    conditions: "公开题录给出100 ns写入、10^12次耐久、150 °C十年保持、18 Mb/mm²；与28 nm nvRAM型eMRAM及SRAM/Flash型eMRAM比较。",
    methods: ["14 nm FinFET eMRAM", "汽车级高温保持", "10^12循环", "SRAM接口", "宏密度比较"],
    summary: "【实测/公开题录】耐久超过10^12次、100 ns写入、150 °C十年保持、宏密度18 Mb/mm²；【对比】写速较Flash型eMRAM快24倍、面积较SRAM约省50%；相对28 nm方案，保持温度由89 °C提高到150 °C且维持同级耐久。",
    relevance: "把pMTJ材料DOE对应到汽车产品门槛：高温Δ、写入过驱、MgO寿命、感测裕量和宏密度必须共同优化，而不是只追室温TMR。",
    limitation: "题录未公开ECC、RBER/WER分布、焊接回流、磁场抗扰、失效位图、PVT与批次良率；10年保持属于加速外推而非十年实测。",
    industrialization: "已进入先进节点汽车级宏验证；仍缺AEC-Q100完整资格、量产良率、晶圆/批次统计、成本、EM/TDDB细节及现场故障率。",
    whyRecommended: "先读四个宏指标，再看与28 nm、SRAM和Flash型eMRAM的同口径对照；30–45分钟。",
    score: 9.9, priority: "S", doi: "10.1109/VLSITechnologyandCir46783.2024.10631315", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/10631315", backupUrl: "https://doi.org/10.1109/VLSITechnologyandCir46783.2024.10631315",
    accessNote: "本轮已核验IEEE直接题录的14 nm、10^12、100 ns、150 °C十年、18 Mb/mm²、24倍和约50%数据。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B", "D"],
    title: "Accurate and Fast STT-MRAM Endurance Evaluation Using a Novel Metric for Asymmetric Bipolar Stress and Deep Learning",
    titleZh: "MTJ寿命外推｜UVPP统一双极应力＋Transformer把测试提速最高10^9倍",
    authors: "Zhiqiang Wei et al.", venue: "2022 IEEE Symposium on VLSI Technology and Circuits", published: "2022-06-12",
    timeTier: "可靠性建模/量产测试", system: "面向STT-MRAM MgO势垒TDDB与电阻演化的耐久评估框架；统一单极、对称双极和非对称双极应力，并用时间序列Transformer预测循环寿命。",
    conditions: "用1–10^6次已测电阻序列预测10^6–10^15次区间及击穿点；公开摘要未给训练/验证样本量、误差、芯片节点、温度、脉宽和外部盲测。",
    methods: ["UVPP幂律", "非对称双极应力", "电阻时间序列", "Transformer", "TDDB/击穿外推"],
    summary: "【模型】UVPP用新应力度量统一三种电压极性历史；【实测输入＋预测】以1–10^6次序列外推10^6–10^15次和击穿点；【作者宣称】测试时间最高缩短10^9倍；【边界】公开摘要未给预测误差和跨批次泛化。",
    relevance: "非常适合把现有自动化电测升级成工艺反馈：保留每次脉冲极性/幅值/宽度与R_P/R_AP轨迹，再用物理幂律基线约束机器学习，避免纯黑箱寿命数字。",
    limitation: "10^9倍是相对加速声明，不等于10^15次真实验证；Transformer可能学习特定批次漂移，需留出晶圆、批次和工艺角做外推测试。",
    industrialization: "最接近量产可靠性筛选和测试成本压缩；仍缺校准不确定度、错误拒收/放行率、跨设备迁移、标准样与监管可追溯性。",
    whyRecommended: "先看UVPP应力定义，再看训练窗口—预测区间，最后找误差和外部验证；35–50分钟。",
    score: 9.6, priority: "S", doi: "10.1109/VLSITechnologyandCir46769.2022.9830351", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/9830351", backupUrl: "https://doi.org/10.1109/VLSITechnologyandCir46769.2022.9830351",
    accessNote: "本轮已核验IEEE直接题录的UVPP、三类极性应力、1–10^6输入、10^6–10^15预测和最高10^9倍提速。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A"],
    title: "Cryogen Free Magnet System 9–18 Tesla (CFMS)",
    titleZh: "Cryogenic Ltd CFMS｜9–18 T、1.6–325 K与顶装几分钟换样",
    authors: "Cryogenic Limited", venue: "厂商官方产品页与系统规格", published: "2026-10-02核验",
    timeTier: "厂商技术资料/不作为科研证明", system: "传导冷却高场超导磁体与气流式集成VTI的一体化无液氦系统，含脉管/冷头、压缩机、多通道温度监测、Lakeshore控制器和磁体电源。",
    conditions: "厂商标称磁场系列9–18 T、样品温区1.6–325 K；同一冷头冷却磁体和VTI，4 K冷凝氦后经针阀降至1.6 K；顶装气闸允许熟练操作员几分钟换样。",
    methods: ["无液氦超导磁体", "气流式VTI", "顶装气闸", "Cernox温控", "传输/磁性选件集成"],
    summary: "【厂商标称】9–18 T、1.6–325 K；磁体基温低于4 K，VTI经液氦缓冲与针阀达到1.6 K；【厂商标称】样品顶装、熟练者数分钟换样；磁体被动防失超，整机交付前测试。",
    relevance: "可作为现有Oxford平台的互校/采购基准，重点不是极限参数，而是换样周转、真空/气路污染、磁场扫描时温稳和探杆电噪声的可复现验收。",
    limitation: "厂商页面没有给温稳、振动、场均匀度、扫场率、线缆热漏、运输后性能、软件API与MTBF；所有数字均需FAT/SAT复测。",
    industrialization: "最接近研发计量和失效分析基础设施；采购/升级前仍缺样品吞吐、自动化接口、维护成本、备件周期、跨平台GR&R与安全联锁验证。",
    whyRecommended: "先看冷却回路与1.6 K形成机制，再核对顶装气闸、控制器和选件接口；25–35分钟。",
    score: 8.8, priority: "A", doi: "", arxiv: "",
    url: "https://www.cryogenic.co.uk/products/cryogen-free-magnet-system-9-18-tesla-cfms", backupUrl: "https://www.cryogenic.co.uk/sites/default/files/product_files/cryogenic_cfms_brochure_v5.0_may_2020_compressed_9.pdf",
    accessNote: "本轮已打开Cryogenic Ltd官方产品页，核验9–18 T、<4 K磁体、1.6–325 K VTI、针阀循环、顶装换样与被动失超保护；明确标注厂商资料。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B", "C"],
    title: "Atomic-Scale Structure and Local Chemistry of CoFeB–MgO Magnetic Tunnel Junctions",
    titleZh: "退火后CoFeB/MgO原子化学｜B进入Ta间隙、Fe(Co)-O键合但CoFe不进入MgO",
    authors: "Zhongchang Wang et al.", venue: "Nano Letters 16, 1530–1536 (2016)", published: "2016-02-23",
    timeTier: "关键原子级界面/扩散证据", system: "退火后的CoFeB–MgO MTJ原子层堆栈，联合原子分辨电子显微、谱学与第一性原理解析B扩散和CoFe/MgO界面键合。",
    conditions: "直接来源确认研究退火前后局部结构与化学；公开摘要未给完整堆栈、退火温时、MgO厚度、样本统计和器件TMR/RA，本站不推定。",
    methods: ["原子分辨STEM", "谱学/元素识别", "HRTEM/衍射", "第一性原理", "界面键合与扩散"],
    summary: "【实测＋计算】退火后B从CoFeB外扩并进入Ta间隙位，而非进入MgO；CoFe与MgO晶粒形成外延取向关系，通过Fe(Co)-O键原子级结合；未观察到CoFe掺入MgO。",
    relevance: "这是为吸B层、退火窗口和界面氧化建立证据链的模板：成像回答原子在哪里，谱学回答是什么元素/键态，DFT回答哪种结构稳定，再与RA/TMR/噪声闭环。",
    limitation: "局部薄片视野不代表300 mm晶圆；摘要无扩散系数、浓度分布、结晶体积分数、器件电性和可靠性，且制样可能引入局部偏差。",
    industrialization: "最接近材料失效根因和退火模块开发；仍需统计STEM/EELS、晶圆级XPS/HAXPES、扩散动力学、TMR/RA/TDDB关联和可量产在线量测。",
    whyRecommended: "先看元素分布，再看Fe(Co)-O界面模型和DFT，最后核对哪些结论是局部观察；45–60分钟。",
    score: 9.8, priority: "S", doi: "10.1021/acs.nanolett.5b03627", arxiv: "",
    url: "https://pubs.acs.org/doi/10.1021/acs.nanolett.5b03627", backupUrl: "https://doi.org/10.1021/acs.nanolett.5b03627",
    accessNote: "本轮已打开ACS直接来源，核验STEM/谱学/DFT、B→Ta间隙、Fe(Co)-O键与CoFe不进入MgO。", recommendedOn: date, featured: true,
  },
];

const detailMeta = [
  ["低频噪声是分布式磁/缺陷涨落，RTN是少数两态源，散粒噪声反映载流统计；三者同时测量比单一TMR更接近失效根因。", "低温下不同噪声能否区分自由层磁涨落、陷阱激活和相干MgO隧穿？", ["【实测】磁滞附近1/f噪声增强。", "【实测】RTN来自自由层两磁态涨落。", "【实测】AP态RTN更强，呈自旋相关激活。", "【实测/解释】散粒噪声支持相干隧穿。"], "1/f与磁损耗相关，RTN的占据时间可指向两态能垒；但电荷陷阱与磁涨落仍可能耦合。", "变量：退火、IBE剂量、温度、偏压、磁态；对照：未图形化结/空前放；指标：归一化1/f、RTN幅值/驻留时间、Fano因子、RBER。"],
  ["汽车级nvRAM必须同时承受高温保持和高循环写入；Δ、MgO电场和访问晶体管共同决定这一矛盾。", "14 nm eMRAM怎样同时达到10^12次、150 °C十年与高密度？", ["【实测/题录】耐久>10^12次。", "【实测/题录】100 ns写入。", "【外推/题录】150 °C十年保持。", "【实测/题录】18 Mb/mm²，快24倍、面积省约50%。"], "高温保持要求足够能垒，写入则需受控过驱和可靠势垒；宏级结果还包含电路、编码和工艺协同。", "变量：温度、脉宽/幅值、读偏压、循环；对照：28 nm/Flash型eMRAM；指标：WER、RBER、Δ、TDDB、失效位图、片内CV。"],
  ["加速寿命测试必须保留极性和波形历史；物理模型提供外推骨架，机器学习拟合复杂电阻演化。", "能否用前10^6次电阻轨迹可信预测到10^15次并显著缩短测试？", ["【模型】UVPP统一单极/对称/非对称双极应力。", "【实测输入】使用1–10^6次电阻序列。", "【预测】覆盖10^6–10^15次和击穿点。", "【作者宣称】测试提速最高10^9倍。"], "UVPP把应力历史压成可比较指标，Transformer捕捉非线性序列；两者都必须接受留批验证。", "变量：波形极性、幅值、脉宽、温度、工艺批；对照：传统幂律/Weibull；指标：击穿循环误差、置信区间、假放行率和跨批泛化。"],
  ["无液氦系统的实际价值取决于温稳、噪声、换样和自动化，而不只是标称磁场与最低温。", "CFMS的冷却、VTI和顶装架构如何转换为可验收的输运平台？", ["【厂商标称】9–18 T。", "【厂商标称】VTI 1.6–325 K。", "【厂商说明】4 K冷凝氦经针阀降温。", "【厂商标称】熟练者数分钟换样。"], "磁体传导冷却，样品由闭合氦循环气流控温；两条热路耦合决定扫场时温漂。", "变量：温度、扫场、探杆、换样人；对照：标准电阻/霍尔片；指标：温稳、场误差、噪声谱、接触重复性、吞吐和GR&R。"],
  ["CoFeB退火结晶与B排出是MgO相干隧穿形成的核心；原子位置与键合必须由多模态表征约束。", "退火后B究竟进入MgO还是吸B层，CoFe/MgO怎样原子级接触？", ["【实测＋计算】B进入Ta间隙而非MgO。", "【实测】CoFe与MgO晶粒有外延取向。", "【模型/谱学】界面形成Fe(Co)-O键。", "【实测】CoFe未掺入MgO。"], "Ta提供B容纳位点，B排出后CoFeB结晶并与MgO定向接合；这是特定堆栈的局部结论。", "变量：Ta/W/Mo吸B层、退火温时、MgO氧化；对照：未退火；指标：B深度/键态、结晶率、界面粗糙度、RA/TMR、噪声和TDDB。"],
];
const details = papers.map((p, i) => ({
  id: p.id, oneSentence: p.summary, background: detailMeta[i][0], question: detailMeta[i][1], workflow: p.methods,
  findings: detailMeta[i][2], explanation: detailMeta[i][3], whyItMatters: [p.relevance, p.industrialization], researchConnection: detailMeta[i][4],
  limitationsDetailed: p.limitation, terms: ["实测、理论/模型、厂商标称和本站推断分别标注。", "原文未公开的条件、误差和样本量不补写。"], takeaway: p.whyRecommended,
}));

const review = {
  id: "review-sot-material-design-00054-z", kind: "正式综述", track: "C", secondaryTracks: ["B", "E"],
  title: "Recent progress on controlling spin-orbit torques by materials design", titleZh: "2024正式综述｜用应变、界面与对称性工程控制SOT",
  authors: "Guiping Ji et al.", venue: "npj Spintronics 2, 56 (2024)", published: "2024-11-21", recommendedOn: date,
  doi: "10.1038/s44306-024-00054-z", url: "https://www.nature.com/articles/s44306-024-00054-z", backupUrl: "https://doi.org/10.1038/s44306-024-00054-z",
  assistantSummary: "开放获取正式综述把SOT材料工程归为应变调Spin Hall角、界面调自旋透明度/拓扑表面态、对称性工程实现垂直磁化无场确定性翻转；例示SrIrO3厚度10→15晶胞时SHA由0.2增至0.5，以及W(O)含氧12.1%附近的SOT效率峰值。",
  whySelected: "它把原子制造变量直接翻译为SOT效率、界面透明度和无场翻转，同时明确规模制造一致性仍是核心障碍。",
  readingGuide: ["先看图1三类材料工程", "读SHA与界面透明度定义", "看无场翻转三类对称性破缺", "最后读可制造性局限；60–80分钟"], notNew: false,
};
const classic = {
  id: "classic-machlup-rtn-1954", kind: "经典文章", track: "A", secondaryTracks: ["C", "D"],
  title: "Noise in Semiconductors: Spectrum of a Two-Parameter Random Signal", titleZh: "Machlup 1954经典｜非对称两态RTN的洛伦兹谱与速率相加",
  authors: "Stefan Machlup", venue: "Journal of Applied Physics 25, 341–343 (1954)", published: "1954-03-01", recommendedOn: date,
  doi: "10.1063/1.1721637", url: "https://pubs.aip.org/aip/jap/article-abstract/25/3/341/160580/Noise-in-Semiconductors-Spectrum-of-a-Two", backupUrl: "https://doi.org/10.1063/1.1721637",
  assistantSummary: "经典理论计算占据两个状态且平均寿命σ、τ可不相等的随机电报信号功率谱；谱形仍为洛伦兹型，有效时间常数由2[(1/σ)+(1/τ)]^-1给出，即两方向跃迁率相加。",
  whySelected: "它是把MTJ时域跳变转换为驻留时间、角频率和缺陷激活率的最小模型，可直接支撑今天A类RTN自动拟合。",
  readingGuide: ["先画两态驻留时间", "推导跃迁率相加", "对应洛伦兹拐点", "再映射MTJ的P/AP与缺陷态；20–30分钟"], notNew: true,
};
const curatedDetails = [
  { id: review.id, oneSentence: review.assistantSummary, background: review.titleZh, question: "材料结构怎样同时提高SOT效率并实现可集成的无场垂直翻转？", workflow: review.readingGuide,
    findings: ["【综述】SOT来源包括SHE、Rashba-Edelstein、轨道Hall、磁振子等。", "【文献汇总】SrIrO3 10→15晶胞时SHA 0.2→0.5。", "【文献汇总】W(O)含氧12.1%附近SOT效率峰值。", "【综述】无场翻转依赖器件、晶体或磁对称性破缺。"],
    explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "把氧浓度、插层厚度、应变和晶向做成DOE，并以ST-FMR、二次谐波、PMA、无场WER和晶圆CV共同放行。",
    limitationsDetailed: "综述汇集不同材料、测试法和器件尺寸，数值不能横向直接排名；作者明确指出界面机制、测量伪差和规模一致性仍未解决。", terms: ["θSOT=T_int×θSH", "无场垂直翻转要求打破镜面对称"], takeaway: review.readingGuide.join("；") },
  { id: classic.id, oneSentence: classic.assistantSummary, background: classic.titleZh, question: "两个驻留时间不相等的RTN，其功率谱和有效时间常数如何表示？", workflow: classic.readingGuide,
    findings: ["【理论】信号在两个离散状态间随机跳变。", "【理论】两态平均寿命σ、τ可不同。", "【理论】谱形保持洛伦兹形式。", "【理论】有效时间常数为2[(1/σ)+(1/τ)]^-1。"],
    explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "对MTJ逐偏压/温度拟合两个驻留时间与拐点频率，再用Arrhenius和磁场依赖区分电荷陷阱与磁两态。",
    limitationsDetailed: "理想单一两态模型不覆盖多陷阱叠加、非平稳漂移、带宽截断和测量链滤波；实测必须报告采样率、记录时长和检测阈值。", terms: ["RTN：两离散电阻/电流态随机切换", "单一RTN对应洛伦兹谱"], takeaway: classic.readingGuide.join("；") },
];

const insights = [
  {
    id: "2026-10-02-noise-to-failure", date, type: "research", typeZh: "研究机会", trackLabel: "A/B/E · 噪声—缺陷—失效",
    title: "RTN—原子化学—TDDB同片闭环", subtitle: "用噪声先发现弱缺陷，再用结构化学和加速寿命确认。", summary: "把平均TMR之外的尾部信息变成工艺反馈。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.C, ids.E, classic.id], question: "单个RTN源能否预示后续MgO软击穿或读窗漂移？", rationale: "A给动态缺陷信号，E给原子位置，C给寿命外推；三者目前通常分属不同样品。",
    workflow: ["同片平面/微米/纳米结构", "10–300 K RTN与1/f", "分段循环应力", "失效前后STEM-EELS/XPS", "UVPP＋留批验证"], equipment: ["低噪声前放/频谱仪", "PPMS/CFMS", "脉冲源表", "STEM-EELS/XPS", "自动化数据库"],
    measurements: ["RTN驻留时间", "1/f归一化幅值", "R_P/R_AP轨迹", "B/O深度与键态", "TDDB/失效位图"], metrics: ["缺陷先兆提前量", "击穿预测误差", "跨批AUC", "假放行率", "片内CV"],
    evidenceBoundary: "RTN与击穿的因果关系尚未由入选文献直接证明；本路线是待验证的本站推断。", firstSteps: ["先做重复噪声基线", "再加入分段应力", "最后做破坏性结构分析"], researchConnection: "直接服务图形化损伤、退火和势垒可靠性。", takeaway: "把噪声从漂亮谱线变成可验证的寿命先兆。",
  },
  {
    id: "2026-10-02-cfms-acceptance", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/A · CFMS现场验收",
    title: "CFMS温场—磁场—电噪声三轴FAT/SAT", subtitle: "用标准件和真实MTJ探杆验收1.6 K与高场下的可复现性。", summary: "不以最低温/最高场单点代替系统能力。", status: "平台SOP",
    relatedPaperIds: [ids.D, ids.A], question: "厂商9–18 T、1.6–325 K如何变成可追溯的实验室能力？", rationale: "低温噪声测量对温漂、振动、地环路、换样接触和扫场耦合极其敏感。",
    workflow: ["标准温度计/霍尔片", "空探杆噪声谱", "顶装换样GR&R", "扫场温漂矩阵", "脚本掉线/断电恢复"], equipment: ["CFMS", "标准电阻/霍尔片", "短路/开路线", "低噪声锁相/前放", "时间同步记录"],
    measurements: ["温稳", "场误差/均匀度", "电压噪声谱", "接触电阻", "换样/降温吞吐"], metrics: ["偏差", "重复性", "再现性", "1/f拐点", "恢复时间"], evidenceBoundary: "厂商页只给架构和标称范围，所有验收阈值需由合同与现场数据确认。", firstSteps: ["先空系统", "再标准样", "最后真实MTJ"], researchConnection: "用于低噪声输运和批间工艺反馈。", takeaway: "用三轴矩阵验收整条测量链，而不是只验磁体。",
  },
  {
    id: "2026-10-02-boron-sink-map", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B · 吸B层原子设计",
    title: "Ta/W/Mo吸B层—退火—界面键合三维窗口", subtitle: "将B容纳能力与Fe(Co)-O界面形成同步优化。", summary: "从单张原子像升级为统计工艺地图。", status: "原子制造路线",
    relatedPaperIds: [ids.E, ids.B, review.id], question: "吸B层材料和厚度怎样兼顾B外扩、PMA、低RA与400 °C级兼容？", rationale: "E证明特定Ta堆栈中B进Ta间隙且CoFe/MgO定向键合，但尚未覆盖替代吸B层和晶圆统计。",
    workflow: ["Ta/W/Mo厚度矩阵", "350/375/400/425 °C退火", "XPS/HAXPES深度", "统计STEM-EELS", "RA/TMR/PMA/TDDB"], equipment: ["多靶溅射＋真空互联", "快速/炉管退火", "XPS/HAXPES", "STEM-EELS", "CIPT/图形化电测"],
    measurements: ["B/O/Co/Fe深度", "Fe(Co)-O键态", "结晶/粗糙度", "RA/TMR/PMA", "噪声/TDDB"], metrics: ["B捕获量", "界面CV", "400 °C保持率", "片内均匀性", "寿命尾部"], evidenceBoundary: "Ta间隙结论来自特定局部结构；替代材料优劣和400 °C窗口需重新实测。", firstSteps: ["先平面膜高通量", "再CIPT", "最后纳米柱"], researchConnection: "直接对应BEOL退火、B扩散和可制造pMTJ。", takeaway: "吸B层的放行条件必须同时包含原子化学、电输运和寿命。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`; reports.reportDate = date;
reports.history.push({ date, label: "详细日报：低温噪声—14 nm汽车eMRAM—寿命外推—CFMS—原子化学", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
for (const p of papers) add(reports.papers, p); write("data/reports.json", reports);
const paperDetails = read("data/paper-details.json"); for (const d of details) add(paperDetails, d); write("data/paper-details.json", paperDetails);
const curated = read("data/curated-reading.json"); curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] }); add(curated.items, review); add(curated.items, classic); write("data/curated-reading.json", curated);
const curatedDetailData = read("data/curated-details.json"); for (const d of curatedDetails) add(curatedDetailData, d); write("data/curated-details.json", curatedDetailData);
write("data/daily-reading.json", { date, review, classics: [classic] });
const insightData = read("data/insight-archive.json"); insightData.history.push({ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }); for (const x of insights) add(insightData.items, x); write("data/insight-archive.json", insightData);
console.log(`Added detailed radar for ${date}`);
