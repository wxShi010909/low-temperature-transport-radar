import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const write = (f, v) => fs.writeFileSync(path.join(root, f), `${JSON.stringify(v, null, 2)}\n`);
const add = (a, x) => { if (a.some((e) => e.id === x.id)) throw new Error(`duplicate id: ${x.id}`); a.push(x); };
const date = "2026-10-05";
const ids = {
  A: "a-sot-3omega-selfheat-3701972",
  B: "b-sot-mram-156tmr-3635232",
  C: "c-mg-interface-cim-3692177",
  D: "d-multifields-fmr-stfmr",
  E: "e-mgo-cofeb-mgo-174207",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B", "D"],
    title: "Direct Characterization of Self-Heating in SOT-MRAM Using the 3ω Method",
    titleZh: "3ω直接测SOT-MRAM自热｜温升超过150 K、约5 ns热弛豫",
    authors: "Guansong Li et al.", venue: "IEEE Electron Device Letters 47, 1595–1598 (2026)", published: "2026-06-15",
    timeTier: "近期正式发表/电热可靠性", system: "SOT-MRAM器件；作者用3ω电热测量直接提取写入通道自热，并改变底电极直径、SOT轨道宽度与MgO势垒厚度。公开摘要未披露完整磁性堆栈、各几何量的具体取值和样本数。",
    conditions: "公开摘要给出自热温升超过150 K，脉宽超过5 ns时对写电流和WER影响明显；热模拟给出约5 ns热弛豫时间。基础温度、脉冲幅值、绝对电流密度及3ω标定误差未在公开摘要中披露。",
    methods: ["3ω电热测量", "脉冲写入", "几何DOE", "电热模拟", "WER关联"],
    summary: "【实测】器件自热温升可超过150 K；【实测】底电极直径、SOT轨道宽度和MgO厚度改变热响应；【实测/作者解释】脉宽>5 ns时自热显著影响写电流与WER；【模拟】热弛豫约5 ns。",
    relevance: "可把现有脉冲写入平台升级为写电流—结温—WER三变量闭环，避免将热辅助误判为SOT效率提升，并为低温/室温外推和MgO TDDB提供真实结温。",
    limitation: "公开摘要未给完整堆栈、几何数值、基温、脉冲电流、标定不确定度和器件统计；3ω稳态/准稳态标定到纳秒脉冲的映射仍需独立验证。",
    industrialization: "最接近写入窗口与热可靠性建模；距量产仍缺300 mm热参数分布、阵列邻近热串扰、PVT、封装热阻、循环后漂移和在线测试成本。",
    whyRecommended: "先看3ω测试结构与温标，再看几何依赖，最后核对>5 ns写入和约5 ns热弛豫；40–55分钟。",
    score: 9.9, priority: "S", doi: "10.1109/LED.2026.3701972", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/11563518/", backupUrl: "https://doi.org/10.1109/LED.2026.3701972",
    accessNote: "本轮已打开IEEE直接题录并核验3ω、>150 K、三类几何变量、>5 ns与约5 ns；摘要未公开条件均明确留空。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["C", "E"],
    title: "High TMR Over 156% in Perpendicular SOT-MRAM Realized With Channel Engineering",
    titleZh: "300 mm垂直SOT-MRAM｜平均TMR 156%、0.9 pJ与>10^12次耐久",
    authors: "D. G. Zeng et al.", venue: "IEEE Electron Device Letters 47, 411–414 (2026)", published: "2025-11-20",
    timeTier: "近期正式发表/300 mm器件", system: "300 mm晶圆上的顶钉扎垂直SOT-pMTJ，采用新型SOT通道工程。公开摘要未披露通道成分、完整pMTJ膜层、结直径、图形化流程和阵列规模。",
    conditions: "公开题录给出室温和85 °C统计、0.9 pJ写能、>10^12次耐久与十年保持；写脉宽、保持加速条件、样本量和良率未公开。",
    methods: ["300 mm集成", "SOT通道工程", "TMR统计", "85 °C表征", "耐久/保持"],
    summary: "【实测】最高TMR 168%、平均156%；【实测】TMR/σ(RP)在室温为29、85 °C为24；【实测】写能0.9 pJ、耐久>10^12次；【加速评估】报告十年保持，目标为超高速LLC。",
    relevance: "这是把通道材料、pMTJ界面与300 mm统计放在同一篇里的高优先级标杆；TMR/σ(RP)比单个冠军值更接近读窗和良率。",
    limitation: "摘要未披露通道材料、脉宽、开关电流、结尺寸、阵列容量、WER/RBER、保持温度/置信度和晶圆数；十年保持不是十年实测。",
    industrialization: "已接近300 mm工艺集成与缓存应用验证；仍缺跨批良率、CMOS/BEOL完整兼容、磁场抗扰、ECC、阵列级功耗/速度、封装后可靠性和成本。",
    whyRecommended: "先看300 mm结构与通道工程，再看TMR分布而非只看168%，最后核对0.9 pJ、耐久和保持边界；45–60分钟。",
    score: 9.9, priority: "S", doi: "10.1109/LED.2025.3635232", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/11261853/", backupUrl: "https://doi.org/10.1109/LED.2025.3635232",
    accessNote: "本轮已打开IEEE直接题录，核验300 mm、168%/156%、29/24、0.9 pJ、>10^12与十年保持。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B", "E"],
    title: "Interface-Engineered STT-MRAM for Device-to-Device Variation-Aware, Energy-Efficient, and Reliable Computing-in-Memory Arrays",
    titleZh: "Mg插层STT-MRAM协同设计｜30–180 nm统计映射到CIM节能36%",
    authors: "Zhou-Yu Wu et al.", venue: "IEEE Transactions on Electron Devices 73, 4102–4109 (2026)", published: "2026-05-20",
    timeTier: "近期正式发表/器件—阵列协同", system: "CoFeB/MgO垂直MTJ，比较无Mg插层、Mg位于上界面、Mg位于下界面三种结构；测试30–180 nm器件，每个条件20只，再把统计分布写入CIM阵列仿真。",
    conditions: "公开摘要明确三种界面、30–180 nm与每条件20只；Mg厚度、完整膜层、退火条件、读写脉冲、仿真网络/数据集和绝对能耗未公开。",
    methods: ["Mg界面插层", "尺寸缩放", "器件统计", "击穿测试", "CIM协同仿真"],
    summary: "【实测】Mg插层提高RA、降低开关电流并提高击穿电压，但牺牲TMR；【实测】对30–180 nm、每条件20只建立器件差异；【仿真】将实测统计注入CIM；【预测】下界面Mg可在维持稳健推理准确率时最多节能36%。",
    relevance: "提供了材料—器件—阵列的可复制工作流：不能只优化TMR或Ic，必须把RA、击穿、电流分布与应用准确率共同纳入目标函数。",
    limitation: "36%是基于实测参数的阵列级仿真，不是大阵列硅上实测；20只/条件不足以刻画量产尾部，且Mg厚度、模型、数据集与准确率数值未在摘要中披露。",
    industrialization: "最接近界面模块与CIM设计技术协同；仍缺300 mm晶圆/批次分布、纳米尺寸尾部、真实阵列、电路PVT、ECC、保持/耐久耦合和成本。",
    whyRecommended: "先看三种Mg位置与30–180 nm统计，再看RA—TMR—Ic—Vbd权衡，最后把36%严格视为仿真结果；45–60分钟。",
    score: 9.7, priority: "S", doi: "10.1109/TED.2026.3692177", arxiv: "",
    url: "https://ieeexplore.ieee.org/document/11528186/", backupUrl: "https://doi.org/10.1109/TED.2026.3692177",
    accessNote: "本轮已打开IEEE直接题录，核验三种Mg界面、30–180 nm、20只/条件、器件权衡和最多36%阵列节能。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A", "B"],
    title: "MultiFields FMR & ST-FMR Measurement System",
    titleZh: "多场科技FMR/ST-FMR平台｜1.4–400 K、18 T与40 GHz兼容路线",
    authors: "MultiFields Tech", venue: "厂商官方技术资料", published: "2026-10-05核验",
    timeTier: "厂商技术资料/不作为科研证明", system: "面向FMR、ST-FMR、ISHE和spin pumping的20或40 GHz测量系统/探杆；可与多场ColdTUBE、Oxford TeslatronPT、Quantum Design PPMS及Cryogenic系统组合。",
    conditions: "厂商标称环境1.4–400 K、0–18 T；探杆外径≤25 mm、2个RF和6/8个DC通道；20/40 GHz版本需分别核对线损和功率。所有数值是厂商声明，未作为科研实证。",
    methods: ["FMR", "ST-FMR", "ISHE/spin pumping", "低温高场探杆", "Kittel/线宽拟合"],
    summary: "【厂商标称】可测1 nm CoFeB，系统兼容1.4–400 K与0–18 T；【厂商标称】频率1–20或1–40 GHz、步进0.01 GHz；【厂商标称】20/40 GHz探杆在20 GHz插损约-6/-4 dB；【软件功能】拟合Hr、fr、线宽、α、γ、g、Meff与ISHE电压。",
    relevance: "适合把原位/退火后的薄膜筛选与器件SOT效率连接起来，但必须做RF去嵌、热漂、相位混合与跨平台互校，不能把软件输出的α或θ直接当材料常数。",
    limitation: "网页未给系统噪声底、场均匀度、温稳、相位校准、线损温度依赖、标准样误差、API和GR&R；‘1 nm CoFeB’是灵敏度声明，需FAT/SAT复测。",
    industrialization: "最接近研发量测与工艺监控平台；距生产放行仍缺标准样、校准追溯、自动化接口、吞吐、维护/备件、跨设备一致性和测量不确定度预算。",
    whyRecommended: "先核对探杆/主机兼容和RF损耗，再看拟合参数，最后按标准样—低温—真实MTJ制定FAT/SAT；25–35分钟。",
    score: 9.2, priority: "A", doi: "", arxiv: "",
    url: "https://www.multifields.com/anm/measure/fmr/", backupUrl: "https://www.multifields.com/",
    accessNote: "本轮检索并打开厂商官方技术页；页面抓取一度超时，但官方索引已核验温区、磁场、频率、线损、通道和兼容系统，全部按厂商标称处理。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B", "C"],
    title: "A high interfacial anisotropy of MgO/CoFeB/MgO structures with perpendicular magnetic anisotropy",
    titleZh: "双MgO界面工程｜Ki提高1.8倍、PMA延伸至1.7 nm CoFeB",
    authors: "H. Kobayashi, K. Onimura, Y. Wu, K. Kakushima", venue: "Journal of Magnetism and Magnetic Materials 652, 174207 (2026)", published: "2026-08-15",
    timeTier: "近期正式发表/原子界面工程", system: "从Ta/CoFeB/MgO结构去除Ta盖层，再沉积第二层MgO与W盖层，形成W/MgO/CoFeB/MgO双界面结构；研究退火对死层、Ms和PMA的作用。",
    conditions: "公开摘要给出Ta去除、第二MgO与W盖层流程、250 °C以上恢复趋势、1.8倍Ki和1.7 nm厚度上限；具体膜厚、去除工艺、退火时长/最高温度与晶圆统计未公开。",
    methods: ["盖层去除", "第二MgO沉积", "双界面PMA", "退火", "磁性表征"],
    summary: "【实测】退火至250 °C以上后，死层导致的Ms损失得到恢复并超过初始值；【实测】双界面Ki提高1.8倍；【实测】PMA保持到1.7 nm CoFeB；【作者解释】双MgO界面提高热稳定性和缩放潜力。",
    relevance: "把‘再造一个MgO/CoFeB界面’转化为可执行的原子制造路线，直接连接盖层去除损伤、真空互联、第二界面氧化和退火恢复。",
    limitation: "摘要未给Ki绝对值、完整膜厚、去除选择性、界面粗糙度、氧/B深度、退火时间和样本统计；尚无完整MTJ的TMR、RA、WER、TDDB或阵列数据。",
    industrialization: "最接近自由层/PMA材料模块；距可制造器件仍缺真空集成可重复性、300 mm均匀性、400 °C BEOL、纳米图形化、完整MTJ电性、良率与可靠性。",
    whyRecommended: "先看Ta去除—第二MgO—W封盖流程，再看Ms恢复和1.8倍Ki，最后检查1.7 nm是否能转化为完整MTJ热稳定；40–55分钟。",
    score: 9.6, priority: "S", doi: "10.1016/j.jmmm.2026.174207", arxiv: "",
    url: "https://www.sciencedirect.com/science/article/pii/S0304885326003987", backupUrl: "https://doi.org/10.1016/j.jmmm.2026.174207",
    accessNote: "本轮已打开ScienceDirect直接来源并核验堆栈改造、>250 °C、1.8倍Ki与1.7 nm；未公开数值不补写。", recommendedOn: date, featured: true,
  },
];

const meta = [
  ["SOT写入同时产生焦耳热；若用环境温度代替真实结温，开关效率、WER和寿命模型都会偏移。", "能否直接测出SOT-MRAM纳秒写入的自热，并分离几何与热弛豫？", ["【实测】温升超过150 K。", "【实测】底电极、轨道宽度、MgO厚度均影响热响应。", "【实测】脉宽>5 ns时影响写电流与WER。", "【模拟】热弛豫约5 ns。"], "3ω利用电阻温度系数把三次谐波映射为焦耳热温升；纳秒写入还需动态热模型连接。", "变量：底电极直径、轨道宽度、MgO厚度、基温和脉宽；对照：相同磁性堆栈；指标：ΔT、热时间常数、Ic、WER、TDDB。"],
  ["SOT-MRAM要兼顾低能写入与pMTJ高TMR/保持；300 mm统计比孤立器件峰值更接近可制造性。", "通道工程能否在300 mm上同时给出高TMR、低能、耐久与保持？", ["【实测】TMR最高168%、平均156%。", "【实测】TMR/σ(RP)=29（室温）、24（85 °C）。", "【实测】写能0.9 pJ、耐久>10^12次。", "【加速评估】十年保持。"], "通道改变自旋—轨道转换与热/电阻负载；最终指标还受pMTJ界面、工艺分布和电路共同影响。", "变量：通道材料/厚度、退火、温度、脉冲；对照：基准W/Ta类通道；指标：ξDL、TMR/CV、WER、0.9 pJ复现、保持与耐久。"],
  ["Mg插层同时改变界面势垒、PMA、RA、TMR、开关电流和击穿，是典型多目标优化问题。", "Mg应放在CoFeB/MgO哪一侧，才能把器件收益传递到CIM阵列？", ["【实测】Mg提高RA、降低开关电流。", "【实测】Mg提高击穿电压但降低TMR。", "【实测】30–180 nm、每条件20只。", "【仿真】下界面Mg最多节能36%。"], "Mg改变界面氧化与隧穿势垒；阵列模型将器件统计映射为能耗和推理稳健性，但不是硅上阵列证明。", "变量：Mg位置/厚度、尺寸、退火；对照：无Mg；指标：RA/TMR/Ic/Vbd分布、WER、阵列能耗、准确率与尾部。"],
  ["FMR测磁阻尼和有效磁化，ST-FMR从混频电压提取SOT；低温高场测量特别依赖RF链校准和相位去嵌。", "一套20/40 GHz探杆如何与现有Oxford、QD或Cryogenic系统形成可复现平台？", ["【厂商标称】1.4–400 K、0–18 T。", "【厂商标称】可测1 nm CoFeB。", "【厂商标称】1–20/40 GHz、0.01 GHz步进。", "【厂商标称】20 GHz处插损-6/-4 dB。"], "Kittel关系给共振色散，线宽随频率给阻尼；ST-FMR对称/反对称分量还混合SOT、Oersted场与热电压。", "变量：频率、功率、温度、磁场角度、标准样；对照：NiFe标准与直通件；指标：S参数、α误差、相位稳定、噪声底、GR&R。"],
  ["CoFeB/MgO界面提供PMA；双界面可增加总界面各向异性，但盖层去除与再沉积容易引入氧化、粗糙和污染。", "第二MgO界面能否在较厚CoFeB中维持PMA并通过退火恢复死层？", ["【实测】>250 °C后Ms恢复并超过初始值。", "【实测】Ki提高1.8倍。", "【实测】PMA维持到1.7 nm。", "【作者解释】有利于热稳定与缩放。"], "双界面贡献叠加提高总PMA；退火可能恢复磁性体积和界面有序，但具体原子机制需化学/结构表征验证。", "变量：Ta去除剂量、真空等待、第二MgO厚度、退火；对照：单界面；指标：Ki/Ms/死层、XPS/STEM、TMR/RA、WER、TDDB与片内CV。"],
];
const details = papers.map((p, i) => ({ id: p.id, oneSentence: p.summary, background: meta[i][0], question: meta[i][1], workflow: p.methods, findings: meta[i][2], explanation: meta[i][3], whyItMatters: [p.relevance, p.industrialization], researchConnection: meta[i][4], limitationsDetailed: p.limitation, terms: ["实测、模拟/理论、厂商标称与本站推断分别标注。", "原文公开摘要未披露的条件、误差和统计不补写。"], takeaway: p.whyRecommended }));

const review = {
  id: "review-ald-primer-00435-6", kind: "正式综述", track: "E", secondaryTracks: ["B", "D"],
  title: "Atomic layer deposition", titleZh: "2025正式综述｜ALD从表面自限反应到大规模原子制造",
  authors: "Erwin Kessels, Anjana Devi, Jin-Seong Park, Mikko Ritala, Angel Yanguas-Gil, Claudia Wiemer et al.", venue: "Nature Reviews Methods Primers 5, 66 (2025)", published: "2025-10-16", recommendedOn: date,
  doi: "10.1038/s43586-025-00435-6", url: "https://www.nature.com/articles/s43586-025-00435-6", backupUrl: "https://doi.org/10.1038/s43586-025-00435-6",
  assistantSummary: "正式Primer系统梳理ALD前驱体、共反应物、表面自限反应、反应器、表征和典型结果，并专门讨论可重复性、技术指标、标准化、半导体高量产应用及局限；核心优势是原子级厚度控制与复杂三维表面的均匀共形覆盖。",
  whySelected: "对用户的原子级制造优先级最直接：它把单片结果扩展到反应饱和、批次重复、设备设计和高量产标准，同时可为MgO/界面层的ALD或PEALD路线建立审查清单。",
  readingGuide: ["先看图1表面自限循环", "图2核对前驱体/共反应物", "图3比较反应器", "图5读半导体量产；70–90分钟"], notNew: false,
};
const classic = {
  id: "classic-vcma-nmat3171", kind: "经典文章", track: "B", secondaryTracks: ["C", "E"],
  title: "Electric-field-assisted switching in magnetic tunnel junctions", titleZh: "VCMA经典｜CoFeB/MgO/CoFeB电场辅助翻转",
  authors: "Wei-Gang Wang, Mingen Li, Stephen Hageman, C. L. Chien", venue: "Nature Materials 11, 64–68 (2012)", published: "2011-11-13", recommendedOn: date,
  doi: "10.1038/nmat3171", url: "https://www.nature.com/articles/nmat3171", backupUrl: "https://doi.org/10.1038/nmat3171",
  assistantSummary: "经典实验证明在具有界面PMA的CoFeB/MgO/CoFeB中，可用电压脉冲调制矫顽力、磁态与TMR并辅助可逆翻转；论文以当时STT临界电流密度约10^6–10^7 A/cm²为能耗背景，强调以更小电流密度利用电场效应。",
  whySelected: "它奠定VCMA作为‘界面电场调各向异性’的器件路线，与今天的双MgO、Mg插层和低能写入形成清晰历史主线。",
  readingGuide: ["先看器件堆栈与PMA", "再看电压对矫顽力/TMR的调制", "区分电场与STT/热效应", "最后核对脉冲和耐久边界；35–50分钟"], notNew: true,
};
const curatedDetails = [
  { id: review.id, oneSentence: review.assistantSummary, background: "ALD依靠交替、表面自限反应逐层生长；原子级控制必须同时满足饱和、清洗、温度窗口与反应器均匀性。", question: "怎样从化学循环建立可重复、可标准化并可扩展到高量产的原子制造？", workflow: review.readingGuide, findings: ["【综述】ALD是表面控制的CVD方法。", "【综述】提供原子级厚度控制。", "【综述】可均匀共形覆盖大面积和复杂3D结构。", "【综述】专门讨论重复性、标准化、高量产与局限。"], explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "建立前驱体—剂量—清洗—温度—循环数DOE；以QCM/原位光谱、XPS、TEM、厚度/成分片内CV和器件RA/TMR闭环。", limitationsDetailed: "综述不是特定MgO/CoFeB堆栈的工艺配方；摘要不提供用户设备的前驱体窗口、杂质下限、吞吐或成本，必须在本机重新标定。", terms: ["self-limiting：表面反应达到饱和后不再随剂量增加", "conformality：复杂三维结构的覆盖均匀性"], takeaway: review.readingGuide.join("；") },
  { id: classic.id, oneSentence: classic.assistantSummary, background: "VCMA利用电场改变铁磁/氧化物界面各向异性，目标是降低纯STT所需的大电流。", question: "MgO界面电场能否可逆调磁态并辅助MTJ翻转？", workflow: classic.readingGuide, findings: ["【实测】CoFeB/MgO/CoFeB具有界面PMA。", "【实测】电压脉冲可调矫顽力。", "【实测】可调磁配置与TMR。", "【实测/作者解释】以远低于传统STT背景的电流密度辅助可逆翻转。"], explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "在同一结上做正/负电压、脉宽、温度和占空比矩阵，用热校准与对称性分析区分VCMA、STT和自热。", limitationsDetailed: "公开摘要未披露本次归档所需的完整脉冲幅值/时长、能耗和寿命统计；早期微器件演示不能直接外推到纳米阵列或量产可靠性。", terms: ["VCMA：电压控制磁各向异性", "PMA：垂直磁各向异性"], takeaway: classic.readingGuide.join("；") },
];

const insights = [
  {
    id: "2026-10-05-electrothermal-wer", date, type: "research", typeZh: "研究机会", trackLabel: "A/B/C · 结温—WER—TDDB",
    title: "真实结温驱动的写错率与寿命模型", subtitle: "把3ω温标嵌入SOT/STT脉冲测试。", summary: "将环境温度替换为纳秒脉冲下的真实结温。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.B, ids.C], question: "同一写入脉冲中，SOT/STT贡献、热辅助和MgO损伤各占多少？", rationale: "A证明温升可>150 K且时间常数约5 ns；B/C的能耗、WER与击穿解释若忽略结温会产生系统偏差。",
    workflow: ["标定TCR与3ω", "脉宽/幅值/基温矩阵", "同步R-H/写入统计", "热—磁联合拟合", "分段TDDB/耐久"], equipment: ["3ω/锁相链", "脉冲源表", "低温探针台或PPMS", "高速示波器", "热仿真"], measurements: ["ΔT(t)", "Ic/WER", "R_P/R_AP", "热弛豫", "Vbd/耐久"], metrics: ["温标不确定度", "WER拟合误差", "热辅助比例", "TDDB加速因子", "跨尺寸泛化"], evidenceBoundary: "温升与WER关联来自A；将其用于B/C器件的定量归因是本站提出的待验证路线。", firstSteps: ["先做金属线标准结构", "再做无磁对照", "最后做完整MTJ"], researchConnection: "直接服务低功耗写入、低温输运与势垒可靠性。", takeaway: "每个写入能耗数字都应带真实结温。",
  },
  {
    id: "2026-10-05-stfmr-fat", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/A · 低温ST-FMR验收",
    title: "20/40 GHz低温ST-FMR去嵌与GR&R", subtitle: "把厂商规格转成可追溯的测量能力。", summary: "先验收RF链，再提取阻尼和SOT。", status: "平台SOP",
    relatedPaperIds: [ids.D, ids.B], question: "1.4–400 K、18 T平台怎样在换探杆、换温度和换操作者后仍给出一致α与SOT？", rationale: "厂商给出频率和线损范围，但科研/工艺结论依赖温度相关S参数、相位、热电压和拟合模型。",
    workflow: ["VNA直通/开路/短路", "NiFe标准样", "频率—功率—温度矩阵", "角度对称性分解", "跨平台GR&R"], equipment: ["20/40 GHz探杆", "VNA/微波源", "锁相/偏置器", "Oxford/QD/Cryogenic低温磁体", "温度传感器"], measurements: ["S11/S21", "Hr/线宽", "α/Meff", "对称/反对称电压", "噪声底"], metrics: ["去嵌残差", "α偏差", "相位漂移", "重复性/再现性", "每样吞吐"], evidenceBoundary: "所有平台数值来自厂商资料，必须通过标准样FAT/SAT；不能当成科学性能证明。", firstSteps: ["先室温RF校准", "再低温标准样", "最后真实SOT堆栈"], researchConnection: "服务SOT通道筛选、退火反馈和低温磁动力学。", takeaway: "软件拟合之前，先证明传输链。",
  },
  {
    id: "2026-10-05-dual-interface", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B · 双界面原子制造",
    title: "Mg插层×双MgO×退火三维工艺窗口", subtitle: "同时优化PMA、TMR、RA、Ic与Vbd。", summary: "把两篇界面工程结果合成可制造DOE。", status: "原子制造路线",
    relatedPaperIds: [ids.C, ids.E, review.id, classic.id], question: "第二MgO界面与Mg插层的收益能否在同一pMTJ中叠加，而不牺牲TMR和可靠性？", rationale: "E给出1.8倍Ki和1.7 nm，C显示Mg插层的RA/TMR/Ic/Vbd权衡；ALD综述提供表面反应与均匀性框架。",
    workflow: ["单/双MgO对照", "Mg位置/厚度扫描", "真空等待与去盖剂量", "250–400 °C退火", "平面→CIPT→纳米柱"], equipment: ["多靶溅射/IBE", "真空互联ALD/PEALD", "XPS/STEM-EELS", "VSM/FMR", "CIPT与脉冲电测"], measurements: ["Ki/Ms/死层", "B/O/Mg深度", "RA/TMR/Ic/Vbd", "WER/耐久", "片内CV"], metrics: ["界面均匀性", "PMA热预算", "TMR损失", "击穿裕量", "跨晶圆良率"], evidenceBoundary: "两篇论文并未共同验证双MgO+Mg插层；组合收益是本站假设，可能因过氧化或势垒增厚相互抵消。", firstSteps: ["先平面膜筛选", "再做CIPT", "最后纳米柱可靠性"], researchConnection: "直接对应MgO/CoFeB界面、退火、真空互联与BEOL。", takeaway: "用多目标Pareto而不是单指标冠军筛工艺。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`; reports.reportDate = date;
reports.history.push({ date, label: "详细日报：SOT自热—300 mm SOT-MRAM—Mg界面CIM—低温ST-FMR—双MgO", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
for (const p of papers) add(reports.papers, p); write("data/reports.json", reports);
const paperDetails = read("data/paper-details.json"); for (const d of details) add(paperDetails, d); write("data/paper-details.json", paperDetails);
const curated = read("data/curated-reading.json"); curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] }); add(curated.items, review); add(curated.items, classic); write("data/curated-reading.json", curated);
const curatedDetailData = read("data/curated-details.json"); for (const d of curatedDetails) add(curatedDetailData, d); write("data/curated-details.json", curatedDetailData);
write("data/daily-reading.json", { date, review, classics: [classic] });
const insightData = read("data/insight-archive.json"); insightData.history.push({ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }); for (const x of insights) add(insightData.items, x); write("data/insight-archive.json", insightData);
console.log(`Added detailed radar for ${date}`);
