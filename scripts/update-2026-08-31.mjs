import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-08-31';
const updatedAt = '2026-08-31T09:00:00+08:00';

const papers = [
  {
    id: 'prb-114-125201', track: 'A', secondaryTracks: ['B', 'E'],
    title: 'Dopant-species-dependent quantum interference and spin-orbit coupling in n-type silicon hyperdoped with group-V dopants',
    titleZh: '超掺杂Si的低温量子干涉：As/Sb/Bi决定相干长度与WL–WAL竞争',
    authors: 'Weiyan Li, Yuling Jiang, Moritz Hoesch, R. Heller, U. Kentsch, Shengqiang Zhou, Mao Wang',
    venue: 'Physical Review B 114, 125201 (2026)', published: '2026-08-17', recommendedOn: date,
    timeTier: '两周内正式发表',
    system: 'Si中分别以As、Sb、Bi进行V族元素超掺杂；离子注入后脉冲激光退火，形成单晶n++层。原文公开摘要未显示各层厚、注入剂量、激光能量密度与最低温度。',
    conditions: '低温磁电导；二维Hikami–Larkin–Nagaoka模型拟合。载流子浓度高于10^20 cm^-3、迁移率超过50 cm²/(V·s)；摘要未公开完整温区、磁场端点及器件横向尺寸。',
    methods: ['As/Sb/Bi离子注入形成超掺杂层', '脉冲激光退火恢复单晶并激活掺杂', '测温变电阻与低场磁电导', '用二维HLN模型提取相干长度和自旋轨道长度'],
    summary: '三种超掺杂Si均呈金属性输运；低温相干长度45–120 nm，Si:Bi的自旋轨道长度30–67 nm，并出现弱局域化到弱反局域化竞争。',
    relevance: '它把“离子损伤—快速退火—结构无序—低温相干/自旋轨道散射”串成可测链条，可迁移到IBE后CoFeB/MgO侧壁损伤与低温噪声诊断。',
    limitation: '材料是超掺杂Si而非MTJ；HLN长度为模型拟合；摘要未公开温区、磁场、膜厚、TMR、RA、WER、保持或耐久。',
    industrialization: '接近CMOS兼容的掺杂与激光退火材料模块；仍缺晶圆均匀性、接触电阻、器件阵列、长期稳定及与BEOL热预算的联合验证。',
    whyRecommended: '先看不同掺杂种类的R–T和磁电导，再看HLN拟合及Si:Bi的WL–WAL交叉；35–50分钟。',
    score: 9.4, priority: 'A', doi: '10.1103/8fdl-32w3',
    url: 'https://journals.aps.org/prb/abstract/10.1103/8fdl-32w3', backupUrl: 'https://doi.org/10.1103/8fdl-32w3',
    accessNote: '已打开APS正式页，核验作者、2026-08-17日期、DOI、离子注入/脉冲激光退火、载流子/迁移率及45–120 nm、30–67 nm；未公开量明确标注。', featured: true
  },
  {
    id: 'jos-26040004', track: 'B', secondaryTracks: ['E', 'D'],
    title: 'Achieving high-yield 16 Kb SOT-MRAM array through ion-beam-etched profile control of MTJ cells',
    titleZh: '300 mm、16 Kb无通道SOT‑MRAM：用IBE台阶角控制残留、界面损伤与阵列功能分布',
    authors: 'Zhenghui Ji, Guoxiu Qiu, Qijun Guo, Enlong Liu, Wenlong Yang, Qingxiu Li, Lei Zhao, Hengan Zhou, Dinggui Zeng, Shasha Wang, Weiming He, Shikun He',
    venue: 'Journal of Semiconductors, in press (2026)', published: '2026-07-24', recommendedOn: date,
    timeTier: '近期正式在线论文',
    system: '300 mm平台制造的channel-less SOT-MRAM，16 Kb阵列；核心为MgO/CoFeB MTJ柱及SOT写入结构。公开摘要未给完整堆栈、MTJ直径、MgO厚度、RA与TMR。',
    conditions: 'IBE改变MTJ侧壁台阶角；比较金属再沉积、隧穿势垒附近清理与MgO/CoFeB界面损伤；室温提取热稳定因子并做阵列功能统计。',
    methods: ['在300 mm平台制造16 Kb CHL SOT-MRAM', '系统改变IBE柱形/台阶角', '分析侧壁净刻蚀与金属再沉积', '关联界面损伤、热稳定因子和阵列功能统计'],
    summary: '台阶角超过80°时侧壁净去除增强，可清除势垒附近金属残留并减小MgO/CoFeB损伤；优化器件室温热稳定因子Δ>95。摘要把阵列结果写成“functional yield reaches 60 ppm”，该措辞与量纲语义异常，本站不擅自换算。',
    relevance: '这是本日最直接服务MTJ量产的问题：IBE角度、再沉积、侧壁损伤、阵列统计和300 mm工艺被放在同一因果链。',
    limitation: '公开页面未给完整堆栈、CD、TMR、RA、写电流/能耗、WER、保持时长、耐久及跨晶圆统计；“60 ppm”需正文或作者澄清其究竟是失效率还是原文定义的指标。',
    industrialization: '最接近300 mm阵列制造与图形化良率环节；已有16 Kb和Δ>95，但距产品还缺多批次/跨片Cpk、坏点空间分布、完整PVT、ECC、10年保持、耐久和BEOL整合。',
    whyRecommended: '先看侧壁角定义和截面，再看>80°的清残机理、Δ统计及16 Kb功能图；45–60分钟，并优先核对60 ppm原始定义。',
    score: 10, priority: 'S', doi: '10.1088/1674-4926/26040004',
    url: 'https://www.jos.ac.cn/en/article/doi/10.1088/1674-4926/26040004', backupUrl: 'https://doi.org/10.1088/1674-4926/26040004',
    accessNote: '已打开期刊正式HTML，核验作者、DOI、300 mm、16 Kb、>80°、Δ>95及原文60 ppm措辞；对语义歧义未作无依据换算。', featured: true
  },
  {
    id: 'prb-114-094112', track: 'C', secondaryTracks: ['E', 'B'],
    title: 'Asymmetric interfacial strain governing anomalous fluorine diffusion in ultrathin CaF2−BaF2 heterostructures',
    titleZh: '超薄CaF₂/BaF₂界面离子扩散：应变把空位与间隙通道分隔到两侧',
    authors: 'Zefeng Lao, Jinkai Hu, Zhong-Kang Han, Yong Wang',
    venue: 'Physical Review B 114, 094112 (2026)', published: '2026-08-19', recommendedOn: date,
    timeTier: '近期正式计算论文',
    system: '超薄CaF2−BaF2多层异质结构及F空位/间隙缺陷；面向约600 K异常高F离子扩散的原子尺度解释。',
    conditions: '团簇展开结合机器学习分子动力学；重点比较600 K与900 K。公开摘要未给超胞尺寸、层数、应变百分比、时间步长或扩散系数数值。',
    methods: ['建立界面缺陷构型与团簇展开模型', '用机器学习分子动力学采样热运动', '分辨空位与间隙的空间分布', '比较600/900 K扩散路径及电子—应变耦合'],
    summary: '空位优先聚集在CaF2侧，间隙仅出现在BaF2侧；600 K由BaF2间隙扩散主导，900 K时CaF2空位扩散启动并与前者协同增强。',
    relevance: '虽不是MgO/CoFeB，但“缺陷种类—界面应变—温度—扩散通道”的建模范式可直接用于B、O或金属再沉积在MTJ界面的热扩散敏感性筛选。',
    limitation: '全部为特定氟化物模型预测；不能直接外推MgO、CoFeB或BEOL温区，扩散系数和应变定量值未在公开摘要给出。',
    industrialization: '处于原子机制与模型方法阶段；距离器件需真实界面参数标定、缺陷浓度测量、跨尺度动力学、工艺时间映射和实验扩散验证。',
    whyRecommended: '先看缺陷分布图，再看600/900 K轨迹与应变示意；最后读电子成对稳定空位团簇部分；40–55分钟。',
    score: 9.5, priority: 'A', doi: '10.1103/sz89-51zk',
    url: 'https://journals.aps.org/prb/abstract/10.1103/sz89-51zk', backupUrl: 'https://doi.org/10.1103/sz89-51zk',
    accessNote: '已打开APS正式页，核验作者、2026-08-19、DOI、团簇展开+MLMD、600/900 K及缺陷分侧结论。', featured: true
  },
  {
    id: 'oxford-teslatronpt-plus-2025', track: 'D', secondaryTracks: ['A'],
    title: 'Oxford Instruments NanoScience introduces TeslatronPT Plus, an open-architecture low temperature measurement system',
    titleZh: 'TeslatronPT Plus开放式低温磁输运平台：Python/QCoDeS、时间戳与低噪声信号链',
    authors: 'Oxford Instruments NanoScience', venue: 'Oxford Instruments vendor technical material', published: '2025-03-06', recommendedOn: date,
    timeTier: '厂商技术资料（非科研证据）',
    system: '无液氦超导磁体低温系统，集成Lake Shore M81同步源测量与M91 FastHall选件；浏览器/oi.DECS环境控制、Jupyter/Python、Grafana及QCoDeS第三方仪器驱动。',
    conditions: '支持低/高电阻、Hall bar与van der Pauw Hall、I–V、低电平DC/AC锁相；温度/磁场与仪器数据统一时间戳。该公告未公开最低温度、最大磁场、噪声谱、样品吞吐或长期漂移。',
    methods: ['用oi.DECS自动控制温度与磁场', '由M81执行低电平DC/AC锁相输运', '由M91执行FastHall', '以Jupyter/QCoDeS编排并用Grafana实时监控'],
    summary: '平台采用开放架构和浏览器控制，可接QCoDeS兼容仪器；厂商称M91对低迁移率材料最高快100倍，并提供经过验证的低噪声信号链。',
    relevance: '适合把MTJ的R–T–H–I、Hall、噪声和工艺批次元数据自动关联；开放驱动也便于接入现有电流源、前置放大器和脉冲设备。',
    limitation: '这是厂商技术资料，100×为厂商声明，不是同行评议证明；公告缺最低温度、磁场范围、底噪、漂移、样品线数、价格及第三方复现。',
    industrialization: '接近研发和器件资格平台采购环节；量产验证仍需FAT/SAT、标准电阻/Hall样品、空载噪声、温漂、磁滞、断电恢复、脚本版本化及跨机台GR&R。',
    whyRecommended: '先看开放架构和数据时间戳，再看M81/M91能力；把温场规格与底噪列为询价必问项；20–30分钟。',
    score: 9.2, priority: 'A', doi: '',
    url: 'https://www.oxinst.com/news/oxford-instruments-introduces-teslatronpt-plus/', backupUrl: 'https://www.oxinst.com/news/oxford-instruments-introduces-teslatronpt-plus/',
    accessNote: '已打开Oxford Instruments官方页面，核验2025-03-06、开放架构、M81/M91、Python/Jupyter/Grafana/QCoDeS与统一时间戳；明确标注厂商资料。', featured: true
  },
  {
    id: 'jva-44-053213', track: 'E', secondaryTracks: ['B', 'D'],
    title: 'Effects of H2 addition on highly selective SiOCN etching using NF3-based plasma',
    titleZh: 'NF₃/Ar/H₂高选择性SiOCN刻蚀：F自由基、贫O反应层与NHx保护层的三窗口',
    authors: 'Takahiro Goya, Masanaga Fukasawa, Akiko Hirata, Wataru Mizubayashi, Yoshihiro Hayashi',
    venue: 'Journal of Vacuum Science & Technology A 44, 053213 (2026)', published: '2026-08-27', recommendedOn: date,
    timeTier: '四日前正式发表',
    system: '面向3D堆叠逻辑侧墙的低k SiOCN，选择层/对照材料包括SiO2、poly-Si和SiN；采用NF3/Ar等离子体并改变H2添加。',
    conditions: '测刻蚀速率与材料选择性，以光发射光谱和XPS分析等离子体及表面反应。公开HTML摘要未给H2流量、功率、压力、温度、膜厚、速率与选择比数值。',
    methods: ['在NF3/Ar中扫描H2添加', '分别测SiOCN、SiO2、poly-Si、SiN刻蚀响应', '用OES追踪活性物种', '用XPS识别贫O反应层与NHx保护层'],
    summary: 'SiOCN刻蚀率随H2呈峰值而非单调变化；作者划分为F自由基增加、贫O反应层促进、NHx保护层抑制三个区间，并指出不同材料的H2响应不同。',
    relevance: '虽然对象不是MTJ，但它给出“气相活性物种—表面改性层—选择比”可复制诊断法，可用于MTJ侧壁介质回刻、封护前清洗及避免H相关界面漂移。',
    limitation: '不是ALE也不是磁性材料；摘要无关键工艺数值，不能直接生成recipe，更不能推断CoFeB/MgO兼容性。',
    industrialization: '接近3D器件选择性刻蚀模块；仍需图形晶圆、HAR loading、CD/侧壁粗糙、颗粒、腔体记忆、片内/片间均匀性、下游电性和可靠性。',
    whyRecommended: '先看刻蚀率—H2曲线，再看OES/XPS与三区机制；最后看四种材料选择性；35–50分钟。',
    score: 9.6, priority: 'S', doi: '10.1116/6.0005595',
    url: 'https://pubs.aip.org/avs/jva/article/44/5/053213/3403231/Effects-of-H2-addition-on-highly-selective-SiOCN', backupUrl: 'https://doi.org/10.1116/6.0005595',
    accessNote: '已打开AIP/AVS正式HTML，核验作者、2026-08-27、DOI、NF3/Ar/H2、OES/XPS和三反应区；摘要未公开工艺数值已明示。', featured: true
  }
];

const backgrounds = {
  'prb-114-125201': '低温电子绕闭合路径传播时会发生量子干涉。时间反演路径相长会产生弱局域化（WL）；强自旋轨道耦合可使其变为弱反局域化（WAL）。相干长度越长，材料中的无序与非弹性散射越弱。',
  'jos-26040004': 'SOT-MRAM用重金属/自旋源写入MTJ自由层，读出仍依靠MgO隧穿电阻。IBE刻柱时，侧壁再沉积可能短路势垒，过强离子轰击又会破坏MgO/CoFeB，柱形因而直接决定阵列尾部失效。',
  'prb-114-094112': '界面扩散既可由晶格空位也可由间隙原子承担。应变改变可用空隙和迁移势垒，俘获电子又会改变带电缺陷的稳定性，因此平均浓度相同也可能产生完全不同的扩散路径。',
  'oxford-teslatronpt-plus-2025': '低温输运平台不仅是制冷机和磁体，还包括激励、前置放大、锁相、切线、仪器同步与元数据。没有统一时间戳和脚本版本，温漂或磁滞容易被误判为器件效应。',
  'jva-44-053213': 'SiOCN是3D逻辑中的低k间隔材料。选择性刻蚀要求去掉SiOCN同时保护SiO2、SiN和poly-Si；加入H2会同时改变F自由基、表面O含量和含氮保护层，反应并非单一方向。'
};
const questions = {
  'prb-114-125201': '同样通过离子注入和激光退火制得的Si:As、Si:Sb、Si:Bi，为何呈现不同相干长度和WL/WAL行为？',
  'jos-26040004': '怎样把IBE侧壁形貌变成可控工艺变量，同时去除势垒附近再沉积、保护MgO/CoFeB并提升16 Kb阵列功能表现？',
  'prb-114-094112': '为什么CaF2/BaF2超薄多层在约600 K出现异常高F离子扩散，空位与间隙各走哪条路？',
  'oxford-teslatronpt-plus-2025': '怎样用开放软硬件把温度、磁场、Hall、低电阻和I–V测量串成可复现的自动化低温平台？',
  'jva-44-053213': 'H2怎样改变NF3/Ar等离子体与SiOCN表面，使刻蚀率出现峰值并获得对多种材料的选择性？'
};
const findings = {
  'prb-114-125201': ['【直接实测】As/Sb/Bi超掺杂层均呈金属性，载流子浓度>10^20 cm^-3、迁移率>50 cm²/(V·s)。','【模型提取】二维HLN拟合得到低温相干长度45–120 nm。','【直接实测+模型解释】Si:Bi出现WL与WAL竞争，自旋轨道长度30–67 nm且对温度无明确单调性。','【作者解释】Si:Sb在较高温仍保持较长相干；Si:Bi低温相干受结构无序缩短，强自旋轨道散射驱动WL–WAL交叉。','【本站推断】同一分析可作为离子加工后MTJ引线/自旋源层无序的低温诊断，但不能直接代表隧穿势垒。'],
  'jos-26040004': ['【直接工艺观察】台阶角>80°时侧壁净刻蚀率增大。','【作者解释】更陡侧壁有助去除隧穿势垒附近金属残留，同时减小MgO/CoFeB等离子体损伤。','【直接实测】优化器件室温热稳定因子Δ>95。','【阵列实测，表述待澄清】16 Kb CHL SOT-MRAM给出“in-die functional yield ... 60 ppm”；原文把ppm称为yield，本站不擅自解释为失效率或99.994%良率。','【证据边界】未公开TMR、RA、WER、功耗、保持时长、耐久和跨片Cpk。'],
  'prb-114-094112': ['【理论预测】F空位优先聚集在CaF2侧界面，F间隙仅出现在BaF2侧。','【理论预测】600 K时BaF2区的间隙扩散主导。','【理论预测】900 K时CaF2侧空位扩散启动，两机制协同增强总扩散。','【作者解释】相邻空位中的俘获电子成对稳定空位团簇；BaF2侧拉伸应变扩大八面体间隙，CaF2侧压缩应变抑制间隙占位。','【证据边界】缺陷分布和机制来自模型，尚非MTJ材料实测。'],
  'oxford-teslatronpt-plus-2025': ['【厂商工程说明】支持低/高电阻、Hall bar/van der Pauw Hall和I–V。','【厂商工程说明】M81可在同一单元完成低电平DC、AC锁相；M91用于FastHall。','【厂商声明】M91对低迁移率材料最高快100倍；公告未给对照条件或原始数据。','【平台特性】oi.DECS把温度、磁场和仪器数据统一时间戳；Jupyter、Grafana、QCoDeS支持开放自动化。','【证据边界】最低温度、最大磁场、底噪、漂移和长期复现原文未公开。'],
  'jva-44-053213': ['【直接实测】SiOCN刻蚀率随H2添加出现峰值，而非单调增减。','【直接实测】SiO2、poly-Si、SiN对H2流量的响应与SiOCN不同。','【作者解释】低H2区由F自由基增加促进刻蚀，中间区由贫O反应层促进，高H2区由NHx保护层抑制。','【方法证据】OES用于气相物种，XPS用于表面化学，两类证据共同支持三区模型。','【证据边界】公开摘要未给流量、功率、压力、温度、速率和选择比数值。']
};

const details = papers.map((p) => ({
  id: p.id, oneSentence: p.summary, background: backgrounds[p.id], question: questions[p.id], workflow: p.methods,
  findings: findings[p.id],
  explanation: p.id === 'prb-114-094112' ? '扩散路径、温度切换和应变机制均为理论预测；作者用电子稳定与非对称应变解释，迁移到B/O扩散是本站推断。' : p.id === 'oxford-teslatronpt-plus-2025' ? '全部功能与性能来自厂商页面；可作为采购/验收线索，不作为科研结论。' : '直接实测、拟合结果、作者解释和本站迁移判断已逐条分开，未公开数据没有补写。',
  whyItMatters: [p.relevance, p.industrialization],
  researchConnection: p.id === 'prb-114-125201' ? '变量：离子剂量/种类、激光退火能量、后退火温度；对照：未注入、炉退火、不同损伤层；指标：R–T、低场磁电导、Lφ/Lso、Hall、XRD/TEM、低频噪声。设备：离子注入/IBE见证片、脉冲激光或RTA、PPMS/低温锁相。' : p.id === 'jos-26040004' ? '变量：IBE入射角/步进角、终点、过刻、旋转和侧壁封护；对照：<80°、>80°、stop-on-MgO及无封护；指标：截面角、再沉积厚度、TMR/RA、Δ、WER、漏电、坏点ppm与空间图。设备：IBE、截面TEM/EDS、自动探针、脉冲测试。' : p.id === 'prb-114-094112' ? '变量：界面应变、B/O空位与间隙、退火温度/时间；对照：无应变、对称界面、单缺陷通道；指标：迁移势垒、扩散系数、缺陷分布、SIMS/EELS深度剖面、TMR/RA漂移。先用DFT/MLMD筛选，再用退火见证片验证。' : p.id === 'oxford-teslatronpt-plus-2025' ? '做采购前FAT：标准电阻、低迁移率Hall片和MTJ dummy各一；变量为温度扫速、磁场扫速、量程、线频/滤波；指标为底噪谱、热电势、漂移、磁滞、重复性、时间戳偏差、断电恢复和第三方驱动成功率。' : '变量：H2流量、NF3/Ar比例、功率、压力、温度；对照：无H2及四种材料；指标：刻蚀率/选择比、XPS O/F/N/C、OES F/NHx、CD、粗糙、漏电与后续MTJ TMR/RA。设备：等离子刻蚀、OES、XPS、椭偏/SEM和电测。',
  limitationsDetailed: p.limitation,
  terms: p.id === 'prb-114-125201' ? ['HLN模型：由低场磁电导曲线提取相干与自旋轨道散射尺度的二维量子修正模型。','WL/WAL：弱局域化使零场电导降低；强自旋轨道耦合可使符号反转为弱反局域化。'] : p.id === 'jos-26040004' ? ['台阶角：MTJ柱侧壁相对基面的几何角，影响离子入射、再沉积和清残。','热稳定因子Δ：能垒与热能kBT之比，越大通常越利于保持。'] : p.id === 'prb-114-094112' ? ['团簇展开：用局域占位组合表达材料能量的统计模型。','MLMD：用机器学习势能面加速原子动力学采样。'] : p.id === 'oxford-teslatronpt-plus-2025' ? ['van der Pauw：用任意形薄片边缘四接触提取片电阻/Hall的几何方法。','QCoDeS：Python仪器驱动与实验数据框架。'] : ['OES：通过等离子体发光谱追踪活性物种。','保护层：反应中生成、会抑制继续刻蚀的表面薄层。'],
  takeaway: p.whyRecommended
}));

const report = read('reports.json');
report.reportDate = date; report.updatedAt = updatedAt;
report.papers = report.papers.filter((x) => !papers.some((p) => p.id === x.id)).concat(papers);
report.history = report.history.filter((x) => x.date !== date).concat([{ date, label: '详细日报：离子损伤低温相干—IBE阵列良率—界面缺陷扩散—开放低温平台—高选择刻蚀', total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: papers.map((x) => x.id) }]);
write('reports.json', report);
write('paper-details.json', read('paper-details.json').filter((x) => !details.some((d) => d.id === x.id)).concat(details));

const review = {
  id: 'review-ale-extreme-2026', kind: '每日综述', track: 'E', secondaryTracks: ['C', 'D'],
  title: 'Atomic Layer Etching for Extreme Manufacturing: Pushing the Limits of Atomic Scale Precision', titleZh: '极端制造中的原子层刻蚀：机制、建模、三维集成与量产缺口',
  authors: 'Yuqun Feng, Bowen Sun, Fan Yang, Kun Cao, Yuan Gao, Bin Shan, Fred Roozeboom, Rong Chen et al.', venue: 'Nanomanufacturing and Metrology 9, 11 (2026)', published: '2026-03-23', recommendedOn: date,
  doi: '10.1007/s41871-026-00297-w', url: 'https://link.springer.com/article/10.1007/s41871-026-00297-w', backupUrl: 'https://doi.org/10.1007/s41871-026-00297-w',
  assistantSummary: '开放获取正式综述把ALE的“表面改性—选择性移除—吹扫”自限循环，与第一性原理、等离子体/特征尺度模型、选择性、形貌、3D和量子器件连接起来。',
  whySelected: '为今日SiOCN连续等离子刻蚀提供机制坐标：先判断哪些反应可被改造成真正自限窗口，再决定是否值得上ALE/ALD超循环。',
  readingGuide: ['先看图1的能量窗口和EPC定义。','再读thermal/plasma ALE差异。','重点查选择性、形貌与ALD–ALE超循环。','最后看原位监控、放大和量产缺口；70–90分钟。'], notNew: true
};
const classic = {
  id: 'classic-mgo-noise-2007', kind: '经典文章', track: 'B', secondaryTracks: ['A', 'D'],
  title: 'Noise in MgO barrier magnetic tunnel junctions with CoFeB electrodes: Influence of annealing temperature', titleZh: 'CoFeB/MgO MTJ低频噪声与退火：从235%磁阻到势垒局域陷阱',
  authors: 'J. Scola, H. Polovy, C. Fermon, M. Pannetier-Lecœur, G. Feng, K. Fahy, J. M. D. Coey', venue: 'Applied Physics Letters 90, 252501 (2007)', published: '2007-06-20', recommendedOn: date,
  doi: '10.1063/1.2749433', url: 'https://pubs.aip.org/aip/apl/article/90/25/252501/152367/Noise-in-MgO-barrier-magnetic-tunnel-junctions', backupUrl: 'https://doi.org/10.1063/1.2749433',
  assistantSummary: '经典实测比较不同退火/结晶程度下CoFeB/MgO MTJ低频噪声，磁阻最高235%，1/f噪声显著低于Al2O3势垒结，并将其归因于MgO内局域电荷陷阱。',
  whySelected: '它把今日IBE侧壁损伤和低温自动化落到一个敏感量：TMR合格并不等于势垒无缺陷，1/f/RTN能揭示平均电阻看不到的陷阱。',
  readingGuide: ['先看退火温度与TMR。','再看归一化1/f噪声。','对比MgO与Al2O3。','最后审视“陷阱归因”的证据边界；30–45分钟。'], notNew: true
};
const curatedDetails = [
  { id: review.id, oneSentence: review.assistantSummary, background: 'ALE用交替且自限的表面改性与移除，每循环只去除有限厚度；EPC是每循环刻蚀量。热ALE通常各向同性，等离子ALE可依靠定向离子获得各向异性。', question: '怎样从原子反应和能量窗口出发，把ALE连接到选择性、低损伤、3D形貌和可制造性？', workflow: ['梳理改性/移除/吹扫机制','比较thermal与plasma ALE','整合DFT到特征尺度模型','评估选择性、3D、量子器件和放大'], findings: ['【综述归纳】ALE依靠两步自限反应实现原子/近原子深度控制。','【综述归纳】能量过低会去除不完全，过高会过刻和造缺陷，存在工艺窗口。','【综述归纳】thermal ALE偏各向同性，plasma ALE可各向异性。','【综述归纳】ALD–ALE协同有利于自对准和复杂形貌。','【证据边界】跨材料最佳EPC/选择比不能拼成一个通用recipe。'], explanation: '这是正式综述的跨文献归纳，不是单一晶圆或器件实测；应用到MTJ是本站路线判断。', whyItMatters: [review.whySelected], researchConnection: '变量：改性剂量、移除能量、吹扫、循环数；对照：连续刻蚀和不同势垒材料；指标：EPC饱和、选择比、粗糙、残留、TMR/RA/噪声、片内均匀性。', limitationsDetailed: '未提供通用量产recipe；对原位计量、颗粒、吞吐、腔体匹配、300 mm Cpk和MTJ可靠性仍需材料级实证。', terms: ['EPC：每个ALE循环移除的厚度。','自限窗口：反应或能量变化时EPC仍稳定的平台区。'], takeaway: review.readingGuide.join(' ') },
  { id: classic.id, oneSentence: classic.assistantSummary, background: 'MTJ的1/f噪声通常随低频增强，RTN则来自少量陷阱在两个状态间切换。退火会改善CoFeB在MgO模板上的结晶，也可能重排B/O和缺陷。', question: '不同退火导致的结晶与CoFeB/MgO界面质量，怎样同时影响磁阻和低频噪声？', workflow: ['制备CoFeB/MgO MTJ','设置不同退火温度','测磁阻与低频噪声','与Al2O3势垒结比较并讨论陷阱'], findings: ['【直接实测】MgO MTJ磁阻最高235%。','【直接实测】噪声随退火/结晶与界面质量变化。','【直接实测】MgO结1/f噪声显著低于对比Al2O3结。','【作者解释】低频噪声来自MgO势垒中的局域电荷陷阱。','【证据边界】2007器件不代表现代pMTJ纳米阵列或低温条件。'], explanation: '磁阻和噪声为直接测量；陷阱来源是作者解释；把它用于现代IBE损伤验收是本站推断。', whyItMatters: [classic.whySelected], researchConnection: '变量：退火温度/时间、IBE角度与封护；对照：未退火、不同势垒和未图形化见证结；指标：TMR/RA、1/f Hooge参数、RTN幅度/时间常数、低温I–V、TEM-EELS与SIMS。', limitationsDetailed: '原文公开页面未给本站所需的完整堆栈、尺寸、RA、噪声频段、温度及耐久；不能据摘要建立现代量产阈值。', terms: ['1/f噪声：功率谱密度近似与频率成反比的低频涨落。','局域陷阱：势垒中能捕获/释放载流子的缺陷态。'], takeaway: classic.readingGuide.join(' ') }
];
const curated = read('curated-reading.json');
curated.items = curated.items.filter((x) => ![review.id, classic.id].includes(x.id)).concat([review, classic]);
curated.history = curated.history.filter((x) => x.date !== date).concat([{ date, reviewId: review.id, classicIds: [classic.id] }]);
write('curated-reading.json', curated);
write('curated-details.json', read('curated-details.json').filter((x) => !curatedDetails.some((d) => d.id === x.id)).concat(curatedDetails));
write('daily-reading.json', { date, review, classics: [classic] });

const insights = [
  { id: '2026-08-31-ibe-noise-yield', date, type: 'opportunity', typeZh: '研究机会', trackLabel: 'A/B · 图形化与可靠性', title: '把IBE侧壁角、陷阱噪声和阵列坏点放进同一张良率图', subtitle: '用截面形貌、TMR/RA、1/f/RTN与16 Kb坏点空间分布区分短路、势垒损伤和热稳定不足。', summary: '把>80°侧壁工艺假设转换成可证伪的“形貌—界面—噪声—阵列”闭环。', status: '本站组合推断，待同一pMTJ平台验证', relatedPaperIds: ['jos-26040004','classic-mgo-noise-2007','prb-114-125201'], question: '阵列尾部失效究竟由再沉积短路、MgO陷阱还是自由层热稳定不足主导？', rationale: '三篇分别提供阵列工艺、势垒噪声和离子损伤后低温相干诊断。', workflow: ['IBE角度/过刻DOE','截面TEM/EDS与侧壁轮廓','单结TMR/RA/1/f/RTN','16 Kb坏点空间关联'], equipment: ['IBE','截面TEM/EDS','低噪声前置/频谱','自动阵列探针'], measurements: ['侧壁角/再沉积','TMR/RA','1/f与RTN','Δ/WER/坏点ppm'], metrics: ['跨片Cpk','6σ读窗','噪声分位数','失效模式占比'], evidenceBoundary: '60 ppm定义必须回到全文确认；经典噪声机制不能直接视为现代阵列失效证明。', firstSteps: ['确定80°上下三档','做未刻蚀见证结','建立噪声与坏点数据库'], researchConnection: '直连MTJ图形化、低温噪声、可靠性与量产统计。', takeaway: '优先把“平均TMR”升级为“尾部噪声+阵列空间失效”验收。' },
  { id: '2026-08-31-open-cryogenic-qa', date, type: 'method', typeZh: '设备与测量平台', trackLabel: 'A/D · 低温自动化', title: '开放低温平台的FAT/SAT与可复现脚本基线', subtitle: '标准电阻、Hall片、MTJ dummy三类样品共同验收底噪、漂移、磁滞、时间戳和恢复能力。', summary: '在采购或升级前把厂商功能清单变成可重复的量化验收。', status: '厂商资料驱动的本站验收方案', relatedPaperIds: ['oxford-teslatronpt-plus-2025','prb-114-125201'], question: '怎样证明开放软件确实改善复现，而不仅是接口更多？', rationale: '统一时间戳和QCoDeS适合建立审计链，但必须用独立标准件验证。', workflow: ['冻结Python/QCoDeS环境','空载与标准件噪声测试','T/B扫速与磁滞矩阵','断电/断网恢复与复测'], equipment: ['低温磁体系统','M81/M91或等效仪器','标准电阻/Hall片','MTJ dummy'], measurements: ['噪声谱','温漂/热电势','时间戳偏差','跨日重复性'], metrics: ['GR&R','漂移ppm/h','字段缺失率','自动恢复时间'], evidenceBoundary: '100×速度为厂商声明；验收阈值需按用户现有设备和样品重新定义。', firstSteps: ['索取完整T/B/噪声规格','跑24 h空载','用同一样品与现平台A/B'], researchConnection: '服务器件开发、低噪声测量与设备平台资产化。', takeaway: '先验证底噪、同步和恢复，再讨论“开放”是否带来真实效率。' },
  { id: '2026-08-31-interface-window', date, type: 'atomic', typeZh: '原子与极端制造', trackLabel: 'C/E · 界面反应窗口', title: '从H₂三区反应到ALE自限窗口的原子制造路线', subtitle: '用OES/XPS实时区分F自由基、贫O层与NHx保护层，再尝试脉冲化为改性—移除循环。', summary: '把连续SiOCN刻蚀的峰值曲线转化为可测、可反馈的表面反应窗口。', status: '本站组合推断，需图形晶圆验证', relatedPaperIds: ['jva-44-053213','review-ale-extreme-2026','prb-114-094112'], question: 'H2反应三区中是否存在能转化为自限EPC的平台，并保持对下层材料的选择性？', rationale: '实验给出三区机理，综述提供ALE窗口框架，计算论文提示应变/缺陷会改变扩散通道。', workflow: ['连续流H2基线扫描','脉冲改性/移除/吹扫','原位OES与离线XPS','图形片CD/电性反馈'], equipment: ['NF3/Ar/H2等离子腔','OES','XPS','椭偏/SEM/AFM'], measurements: ['EPC饱和','选择比','表面O/F/N','粗糙/CD/漏电'], metrics: ['片内3σ','循环漂移','颗粒','下游TMR/RA保持率'], evidenceBoundary: 'SiOCN机制不能直接外推CoFeB/MgO；磁性材料必须先做小剂量见证片和氢残留检查。', firstSteps: ['补齐流量/功率窗口','设置无H2对照','确认EPC是否饱和'], researchConnection: '连接原位表征、ALE、侧壁介质和MTJ界面保护。', takeaway: '先证明自限与低损伤，再谈把连续刻蚀升级为ALE。' }
];
const archive = read('insight-archive.json');
archive.items = archive.items.filter((x) => !insights.some((y) => y.id === x.id)).concat(insights);
archive.history = archive.history.filter((x) => x.date !== date).concat([{ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }]);
write('insight-archive.json', archive);

console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
