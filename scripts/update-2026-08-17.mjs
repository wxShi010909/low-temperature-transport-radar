import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-08-17';
const updatedAt = '2026-08-17T09:01:15+08:00';

const papers = [
  {
    id: 'rsi-97-081303', track: 'A', secondaryTracks: ['D'],
    title: 'A cryogen-free terahertz near-field scanning noise microscope for nanoscale hot-electron imaging in devices at 70–300 K',
    titleZh: '70–300 K无液氦太赫兹近场噪声显微镜：把器件热点电子直接成像',
    authors: 'Yinan Wang, Weijie Deng, Likai Sun, Shaowei Wang, Wei Lu, Qianchun Weng',
    venue: 'Review of Scientific Instruments 97, 081303 (2026)', published: '2026-08-14', recommendedOn: date,
    timeTier: '三日前正式发表',
    system: '太赫兹扫描噪声显微镜（SNoiM）：AFM/样品为一级冷端，太赫兹探测器为二级冷端；无液氮、无液氦运行',
    conditions: '样品温度连续可调约70–300 K；探测器约5 K；原文公开页未给空间分辨率、扫描速度、样品器件堆栈、偏压和磁场范围',
    methods: ['两级脉冲管分别冷却AFM/样品与太赫兹探测器', '检测电流涨落产生的太赫兹倏逝场', '低温光学链路抑制背景辐射', '在连续温区对非平衡热点电子做实空间成像'],
    summary: '把以往仅300 K与约110 K两个离散温点的低温SNoiM扩展为约70–300 K连续调温，并把探测器维持在约5 K；论文定位是温变非平衡电子输运的空间计量平台。',
    relevance: '可用于定位MTJ写入热点、边缘电流拥挤和局域损伤，帮助区分“台温、晶格温度与电子温度”。',
    limitation: '这是一篇仪器论文；公开页面没有给MTJ样品、TMR、RA、Jc、WER、保持、耐久或空间分辨率，不能据此宣称已能解析单个先进MTJ结区。',
    industrialization: '处于失效分析/研发计量环节；进入晶圆级MRAM需验证磁场兼容、纳秒脉冲同步、自动定位、吞吐量、校准不确定度和洁净室兼容。',
    whyRecommended: '先看系统热架构与光路，再看70–300 K连续成像定义及噪声抑制；35–50分钟。',
    score: 9.8, priority: 'S', doi: '10.1063/5.0332221',
    url: 'https://pubs.aip.org/aip/rsi/article/97/8/081303/3401126/A-cryogen-free-terahertz-near-field-scanning-noise', backupUrl: 'https://doi.org/10.1063/5.0332221',
    accessNote: '已打开AIP正式页，核验作者、发表日期、DOI、70–300 K连续温区、约5 K探测器及两级脉冲管结构', featured: true
  },
  {
    id: 'apl-129-032403', track: 'B', secondaryTracks: ['A', 'C'],
    title: 'Demonstration of exchange biased de Gennes spin valves',
    titleZh: '交换偏置de Gennes超导自旋阀：用反铁磁层稳定非易失双稳态',
    authors: 'Biswajit Dutta, Sonali Baral, Pramod K. Sharma, Pushpak Banerjee, Avradeep Pal',
    venue: 'Applied Physics Letters 129, 032403 (2026)', published: '2026-07-21', recommendedOn: date,
    timeTier: '近一月正式实验论文',
    system: '薄超导层夹在两层铁磁绝缘体之间，其中一侧铁磁绝缘体再与反铁磁层耦合形成交换偏置；公开页面未给具体材料名称与各层厚度',
    conditions: '不同方向场冷后测超导转变温度Tc与磁开关；公开页未给温区、场冷磁场、器件横向尺寸、绝对Tc与矫顽场数值',
    methods: ['制备FI/S/FI并在一侧加入AFM交换偏置层', '沿相反方向场冷设定AFM界面态', '测电阻—温度提取Tc', '测磁滞与双稳态并比较对小场波动的敏感性'],
    summary: '实测显示Tc随场冷方向改变；反铁磁层提高矫顽性并使非易失双稳态更稳健，降低小磁场波动导致误切换的敏感性。',
    relevance: '交换偏置是把“稳定参考态/自由态窗口”做宽的通用工具，可迁移到低温存储与MTJ钉扎层、训练效应和场历史管理。',
    limitation: '不是MgO/CoFeB常温MTJ；公开页没有绝对Tc、矫顽场增量、TMR、RA、写入能量、WER、保持和耐久，不能量化阵列收益。',
    industrialization: '处于低温存储单元材料验证；还需图形化器件、反复热循环、训练效应、写入场/电流兼容、阵列误码与CMOS低温外围验证。',
    whyRecommended: '先看器件结构与场冷协议，再看Tc双稳态及交换偏置磁滞；30–45分钟。',
    score: 9.7, priority: 'S', doi: '10.1063/5.0327245',
    url: 'https://pubs.aip.org/aip/apl/article/129/3/032403/3398975/Demonstration-of-exchange-biased-de-Gennes-spin', backupUrl: 'https://doi.org/10.1063/5.0327245',
    accessNote: '已打开AIP正式页并核验作者、日期、DOI、场冷方向依赖Tc、双稳态和矫顽性增强', featured: true
  },
  {
    id: 'prb-x7b4-t1hk', track: 'C', secondaryTracks: ['B', 'E'],
    title: 'Mirror-time reversal symmetry controlled antiferromagnetic tunnel junctions',
    titleZh: '镜面—时间反演对称性控制的全反铁磁隧道结：滑移极化实现非易失电阻切换',
    authors: 'Jing Sun, Xiaohong Zheng, Kang Jia, Tengfei Cao et al.',
    venue: 'Physical Review B 113 (2026), accepted article', published: '2026-06', recommendedOn: date,
    timeTier: '2026正式接收理论论文',
    system: '全反铁磁隧道结；通过层间滑移改变极化与镜面—时间反演联合对称性；公开摘要未给可直接制造的完整电极/势垒厚度和器件尺寸',
    conditions: '第一性原理电子结构与量子输运计算；公开摘要报道非易失TMR最高约300%；温度、偏压窗口、k点与势垒厚度完整参数以正文/补充材料为准',
    methods: ['筛选具有滑移极化的反铁磁层状结构', '比较滑移前后联合对称性与能带自旋纹理', '计算平行/等效反平行电导', '由电导差得到TMR并验证极化反转不需要改写磁序'],
    summary: '理论提出仅靠层间滑移和极化反转切换电阻，而无需翻转反铁磁序；公开摘要给出最高约300%的非易失TMR预测。',
    relevance: '提供“原子位移—界面对称性—隧穿通道—电阻态”的直接设计链，适合指导原子级界面终止与滑移缺陷DOE。',
    limitation: '为理论预测；约300%依赖理想晶体、界面和计算参数；没有实测RA、写入电压/电流、WER、保持、耐久、热稳定和晶圆均匀性。',
    industrialization: '处于候选材料/结构设计；需要可控外延堆叠、低电压滑移写入、室温保持、重复循环、接触电阻、封装应力和阵列读写验证。',
    whyRecommended: '先看对称性操作与滑移路径，再看k分辨输运和TMR；40–60分钟。',
    score: 9.8, priority: 'S', doi: '10.1103/x7b4-t1hk',
    url: 'https://journals.aps.org/prb/accepted/10.1103/x7b4-t1hk', backupUrl: 'https://doi.org/10.1103/x7b4-t1hk',
    accessNote: '已打开APS直接来源并核验题目、DOI、滑移极化、联合对称性和约300% TMR；未公开项明确标注', featured: true
  },
  {
    id: 'rsi-97-025214', track: 'D', secondaryTracks: ['A'],
    title: 'A compact cryogen-free continuous adiabatic demagnetization refrigeration platform for quantum technology applications',
    titleZh: '四级连续绝热去磁制冷：27 mK零负载、50 mK下3 μW的单机架平台',
    authors: 'P. Schüßler, R. A. Chandavar, S. I. Afroozeh Borjeni, A. Kinast, A. Reinold, F. Galli Geleilate, S. Säubert et al.',
    venue: 'Review of Scientific Instruments 97, 025214 (2026)', published: '2026-02-27', recommendedOn: date,
    timeTier: '2026正式仪器论文（厂商关联）',
    system: 'kiutra GmbH与Delft Circuits参与的四级cADR；机械/超导热开关；16路输入、8路输出RF布线；除压缩机外集成于80×80×207 cm机架',
    conditions: '连续工作零负载基温27 mK、低于30 mK；单次ADR最低20 mK；50 mK样品级净制冷量3 μW；支持最多五比特超导QPU布线',
    methods: ['两组ADR级交替磁化/退磁形成连续制冷', '机械与超导热开关控制热流', '逐温测样品级净制冷量', '加入完整RF线树后复测热性能与接口容量'],
    summary: '在不使用He-3的条件下实现连续低于30 mK，加入RF布线后50 mK仍有3 μW；系统除压缩机外装入单机架。',
    relevance: '为低温MTJ/量子器件的自动化、长期运行、RF热预算和扩展布线提供可量化平台参考。',
    limitation: '作者包含设备厂商，需标注为厂商关联科研论文；3 μW与基温是该原型实测，不代表所有cADR；未验证MTJ脉冲热负载、磁场背景和晶圆探针。',
    industrialization: '接近科研/小规模量子硬件基础设施；还缺长期可用率、维护周期、磁干扰、更多通道热预算、故障恢复、成本和量产服务数据。',
    whyRecommended: '先看图1机架、四级热循环，再看图6制冷量与RF热负载；45–60分钟。',
    score: 9.7, priority: 'S', doi: '10.1063/5.0302131',
    url: 'https://pubs.aip.org/aip/rsi/article/97/2/025214/3381412/A-compact-cryogen-free-continuous-adiabatic', backupUrl: 'https://doi.org/10.1063/5.0302131',
    accessNote: '已打开AIP全文，核验27/20 mK、50 mK下3 μW、80×80×207 cm、16入8出RF与五比特容量', featured: true
  },
  {
    id: 'jvb-44-042206', track: 'E', secondaryTracks: ['B', 'C'],
    title: 'Neuromorphic tunnel junctions using atomic-layer-deposited Al2O3 for emulating highly reliable synaptic functions',
    titleZh: '1–2 nm ALD Al₂O₃神经形态隧道结：用隧穿主导抑制随机导电丝',
    authors: 'J. Jyothish Raj, T. Archana, K. B. Jinesh',
    venue: 'Journal of Vacuum Science & Technology B 44, 042206 (2026)', published: '2026-06', recommendedOn: date,
    timeTier: '2026正式器件/工艺论文',
    system: 'FTO/1–2 nm ALD Al₂O₃/Ag神经形态隧道结，并与更厚Al₂O₃器件对照',
    conditions: '在高于通常本征击穿相关的电场下测试突触型模拟行为；公开摘要未给ALD温度、前驱体、循环数、电压端点、器件面积和绝对电阻',
    methods: ['在FTO上ALD生长1–2 nm Al₂O₃', '沉积Ag顶电极形成隧道结', '与厚势垒的导电丝型器件比较', '施加成对脉冲、时序和脉冲数协议测试突触可塑性'],
    summary: '超薄势垒使隧穿占主导并限制随机导电丝；实测复现成对脉冲促进/抑制、脉冲时序依赖可塑性与脉冲数依赖可塑性。',
    relevance: '把原子级势垒厚度、缺陷通道和模拟写入可靠性直接关联，对MgO势垒的均匀性、软击穿与多级态研究有方法迁移价值。',
    limitation: '不是磁隧道结，Ag离子与Al₂O₃机制不能直接等同CoFeB/MgO；公开摘要无TMR、RA、WER、保持、耐久循环数和晶圆统计。',
    industrialization: '处于超薄忆阻/突触器件验证；还需面积缩放、片内/片间分布、阵列半选扰动、保持、能耗、BEOL热预算和CMOS选通。',
    whyRecommended: '先看1–2 nm与厚层对照，再看三类突触协议及导电丝解释；35–50分钟。',
    score: 9.6, priority: 'S', doi: '10.1116/6.0005462',
    url: 'https://pubs.aip.org/avs/jvb/article/44/4/042206/3394463/Neuromorphic-tunnel-junctions-using-atomic-layer', backupUrl: 'https://doi.org/10.1116/6.0005462',
    accessNote: '已打开AIP/AVS正式页，核验作者、DOI、1–2 nm ALD Al₂O₃、FTO/Ag结构与三类突触行为', featured: true
  }
];

const details = [
  {
    id: 'rsi-97-081303',
    oneSentence: '两级脉冲管把样品连续扫过约70–300 K，同时把太赫兹探测器稳定在约5 K，从而直接成像热点电子。',
    background: '器件中的“热点”常是非平衡电子而不是整块芯片均匀升温。SNoiM利用电流涨落产生的太赫兹倏逝场，在AFM尺度上读出局域电子噪声，因此能把电子耗散的位置画出来。',
    question: '能否摆脱液氮只给300 K和约110 K两个温点的限制，在连续温区观察非平衡电子分布如何演化？',
    workflow: ['一级脉冲管冷却AFM与样品并连续控温', '二级冷端把太赫兹探测器维持约5 K', '冷却光学件降低背景辐射', '逐温扫描局域太赫兹噪声并生成热点电子图'],
    findings: ['【直接实测/工程实现】样品温区约70–300 K连续可调。', '【直接实测/工程实现】太赫兹探测器保持约5 K。', '【直接对比】突破以往300 K与约110 K两个离散点。', '【作者解释】低温光学和独立探测器冷端降低背景，支持长时间低噪运行。', '【本站推断】可迁移到MTJ热点/边缘电流拥挤，但原文未证明单个MTJ空间分辨能力。'],
    explanation: '温区、冷端和系统结构是直接公开结果；背景抑制是作者解释；MTJ用途是本站推断。',
    whyItMatters: ['把台温、晶格温度和电子热点分开。', '可为脉冲自热—WER模型提供空间约束。'],
    researchConnection: '先用金属蛇形线和功率已知的微加热器做校准，再比较未刻蚀膜、微米MTJ和纳米MTJ；变量为温度、脉冲幅度/宽度/占空比和边缘工艺；指标为热点半高宽、温升、TMR、RA、WER及恢复时间；设备需脉冲源、高速同步、低温SNoiM和热仿真。',
    limitationsDetailed: '公开页未给空间分辨率、扫描速度、样品、偏压、磁场兼容性、TMR、RA、Jc、WER、保持和耐久，均不能编造。',
    terms: ['热点电子：能量分布高于晶格平衡态的载流子。', '倏逝场：局域在表面附近、不向远场传播的电磁场。', '噪声显微：用电流涨落而非平均电流成像。'],
    takeaway: '先看热架构和光路，再看温区/噪声定义；35–50分钟。'
  },
  {
    id: 'apl-129-032403',
    oneSentence: '在FI/S/FI超导自旋阀一侧加入AFM交换偏置，使Tc双稳态对小场扰动更不敏感。',
    background: 'de Gennes自旋阀以两层铁磁绝缘体夹住薄超导层；两侧磁矩状态改变超导近邻效应，从而改变Tc。交换偏置是AFM与FM界面耦合带来的磁滞偏移和钉扎。',
    question: '普通超导自旋阀的双稳态容易受小场波动影响，能否用AFM交换偏置稳定其中一侧磁态并保留非易失Tc读出？',
    workflow: ['制备AFM/FI/S/FI多层结构', '沿不同方向场冷设定交换偏置', '测电阻—温度确定Tc', '比较磁滞、双稳态与小场扰动敏感度'],
    findings: ['【直接实测】Tc随场冷方向发生可区分变化。', '【直接实测】器件保持非易失双稳态。', '【直接实测】加入AFM后矫顽性显著增强。', '【作者解释】AFM改变FI开关过程，降低小场波动造成的误切换。', '【证据边界】公开页未给绝对Tc、场值和矫顽场增量。'],
    explanation: 'Tc和磁开关为实测；稳态增强归因于交换偏置是作者解释；迁移到常规pMTJ参考层是本站推断。',
    whyItMatters: ['稳定参考态/自由态窗口是低误码存储的共同需求。', '场冷历史提醒低温测试必须记录完整磁热路径。'],
    researchConnection: '做无AFM、不同AFM厚度和不同场冷方向三组；测训练效应、热循环、磁滞、Tc窗口和写入扰动；若迁移到pMTJ，再测TMR、RA、Jc、WER、保持和耐久。设备需低温矢量磁体、四端电阻、VSM/MOKE与自动场温协议。',
    limitationsDetailed: '公开页没有具体材料/厚度、温区、场冷强度、器件尺寸、TMR、RA、写入功耗、WER、保持和耐久；不能直接外推到室温MRAM。',
    terms: ['场冷：在外磁场中穿过磁/超导相变温区。', '交换偏置：AFM/FM界面造成的单向磁各向异性。', 'Tc：超导转变温度。'],
    takeaway: '先结构与场冷协议，再看Tc双稳态和磁滞；30–45分钟。'
  },
  {
    id: 'prb-x7b4-t1hk',
    oneSentence: '理论用层间滑移改变镜面—时间反演联合对称性，在不翻转AFM磁序的情况下预测约300%非易失TMR。',
    background: '反铁磁体净磁矩近零，但动量空间仍可有自旋极化。联合对称性决定哪些隧穿通道彼此抵消；若原子层滑移改变极化和对称性，就可能仅用电极化切换电阻。',
    question: '能否设计完全由反铁磁材料组成、无需磁场翻转Néel序、仅靠原子层滑移/极化就写入的隧道结？',
    workflow: ['分析滑移前后晶体与联合对称性', '第一性原理计算能带/自旋纹理', '量子输运计算两种极化态电导', '由电导比计算TMR并检查磁序是否保持'],
    findings: ['【理论预测】滑移极化反转可切换电阻且不改变AFM磁序。', '【理论预测】全反铁磁隧道结TMR最高约300%。', '【理论预测】镜面—时间反演联合对称性是开关选择规则。', '【作者解释】滑移重排界面原子与k分辨自旋通道。', '【本站推断】界面终止/堆垛错层将成为首要工艺变量。'],
    explanation: '所有器件性能为计算预测；对称性机制是作者理论解释；制造DOE是本站推断。',
    whyItMatters: ['把原子级位置误差直接映射到电阻态。', '提供不依赖净磁矩的高密度存储概念。'],
    researchConnection: '先做滑移路径/界面终止的DFT灵敏度，再制备可控堆垛样品；变量为滑移位移、势垒层数、终止、应变和缺陷；对照为锁定堆垛与非极性结构；指标为TMR、RA、极化写入电压、保持、循环和温度稳定性。',
    limitationsDetailed: '理论理想界面；公开摘要未给实测材料堆栈、尺寸、RA、写入能量、WER、保持、耐久和晶圆统计；约300%不可当成实验结果。',
    terms: ['联合对称性：两个对称操作组合后仍保持哈密顿量不变。', 'Néel序：反铁磁子晶格的相对取向。', '滑移极化：层间横向位移诱导、可翻转的电极化。'],
    takeaway: '先对称性图，再滑移路径和k分辨输运；40–60分钟。'
  },
  {
    id: 'rsi-97-025214',
    oneSentence: '四级cADR在无He-3条件下连续到27 mK零负载，50 mK样品级仍给3 μW，并集成16入8出RF线。',
    background: 'ADR利用顺磁盐磁化放热、退磁吸热；单级只能间歇工作。多级交替再生可连续制冷，并避开稀缺He-3混合气。',
    question: '连续ADR能否被压缩到单机架，同时保留超导量子器件所需的RF布线、样品空间和50 mK冷量？',
    workflow: ['四个ADR级按并联/串联模式交替磁化退磁', '机械/超导热开关管理热流', '测零负载基温与温度—冷量曲线', '接入RF线树后重复热性能验收'],
    findings: ['【直接实测】连续零负载基温27 mK，单次ADR最低20 mK。', '【直接实测】50 mK净制冷量3 μW。', '【直接工程结果】除压缩机外机架80×80×207 cm。', '【直接工程结果】16输入/8输出RF线，支持最多五比特QPU接口。', '【作者解释】交替ADR级和热开关实现连续工作；【本站推断】可作为低温自旋器件自动平台蓝本。'],
    explanation: '温度、冷量、尺寸、通道是实测/工程结果；可扩展性是作者展望；MTJ适配是本站推断。',
    whyItMatters: ['冷量和线缆热负载能被统一验收。', '无He-3降低供应和运维约束。'],
    researchConnection: '先编制每根DC/RF线从300 K到50 mK的热预算，再加入脉冲源、低噪放大和磁场屏蔽；变量为通道数、衰减器位置、占空比和样品耗散；指标为基温、3 μW余量、温稳、噪声、恢复时间和连续运行可用率。',
    limitationsDetailed: '厂商关联科研论文；单原型数据不能代表产品系列。未给MTJ磁场兼容、晶圆探针、长期MTBF、维护成本和更大通道规模。',
    terms: ['cADR：连续绝热去磁制冷。', '热开关：可控地接通或隔断两级热流。', '净制冷量：扣除静态热漏后可供样品使用的冷量。'],
    takeaway: '看图1、四级循环和图6；45–60分钟。'
  },
  {
    id: 'jvb-44-042206',
    oneSentence: '把ALD Al₂O₃压到1–2 nm后，隧穿主导抑制随机导电丝，并复现三类突触可塑性。',
    background: '厚介质忆阻常靠离子迁移形成导电丝，导电丝位置随机且会造成电阻突跳。超薄均匀势垒更可能由量子隧穿控制，使模拟权重更新更连续。',
    question: '原子层厚度控制能否把随机导电丝型器件转成更稳定的隧穿型突触元件？',
    workflow: ['FTO上ALD沉积1–2 nm Al₂O₃', '形成Ag/Al₂O₃/FTO结', '与更厚势垒器件比较', '施加PPF/PPD、STDP与脉冲数协议'],
    findings: ['【直接制备】Al₂O₃厚度1–2 nm。', '【直接实测】超薄器件行为比厚层更稳定。', '【直接实测】复现成对脉冲促进/抑制。', '【直接实测】复现时序依赖与脉冲数依赖可塑性。', '【作者解释】隧穿占主导并限制随机导电丝；公开摘要未给循环数和电压。'],
    explanation: '结构和突触协议为实测；导电丝受限为作者机制解释；迁移到MgO多级MTJ是本站推断。',
    whyItMatters: ['把势垒厚度均匀性与模拟态可靠性连接起来。', 'ALD适合覆盖高纵横比和晶圆级厚度控制。'],
    researchConnection: '在MgO/CoFeB或Al₂O₃见证结做0.8–2.5 nm厚度梯度；对照厚势垒与缺陷富集势垒；测I-V隧穿拟合、RTN、击穿、TMR、RA、多级态线性、循环和保持；配合椭偏/TEM-EELS/XPS验证厚度与氧成分。',
    limitationsDetailed: 'Ag/FTO/Al₂O₃不是磁隧道结；公开摘要未给ALD前驱体/温度、面积、循环数、电压、功耗、保持、TMR、RA和晶圆均匀性。',
    terms: ['导电丝：由缺陷/离子聚集形成的局域高导通道。', 'STDP：权重随前后脉冲相对时序变化。', 'PPF/PPD：成对脉冲引起短时促进/抑制。'],
    takeaway: '先结构和厚度对照，再看三类突触协议；35–50分钟。'
  }
];

const report = read('reports.json');
report.reportDate = date; report.updatedAt = updatedAt;
report.papers = report.papers.filter((x) => !papers.some((p) => p.id === x.id)).concat(papers);
report.history = report.history.filter((x) => x.date !== date).concat([{
  date,
  label: '详细日报：热点电子成像—交换偏置自旋阀—AFM滑移隧穿—连续mK制冷—1–2 nm ALD势垒',
  total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: papers.map((x) => x.id)
}]);
write('reports.json', report);
write('paper-details.json', read('paper-details.json').filter((x) => !details.some((d) => d.id === x.id)).concat(details));

const review = {
  id: 'review-ferroelectric-spintronics-vdw-2026', kind: '每日综述', track: 'B', secondaryTracks: ['C', 'E'],
  title: 'Ferroelectric spintronics in van der Waals materials', titleZh: '范德华材料中的铁电自旋电子学：用可翻转极化非易失调控自旋',
  authors: 'Soumya Sarkar, Sergio Alvarruiz, Zhiren He, Ahmet Avsar, Christian Rinaldi et al., Jagoda Sławińska',
  venue: 'npj 2D Materials and Applications (Perspective, 2026)', published: '2026-08-14', recommendedOn: date,
  doi: '10.1038/s41699-026-00731-z', url: 'https://www.nature.com/articles/s41699-026-00731-z', backupUrl: 'https://doi.org/10.1038/s41699-026-00731-z',
  assistantSummary: '正式开放Perspective系统梳理用铁电极化非易失控制自旋纹理、自旋—电荷转换和界面态的材料路线，并讨论超薄极化稳定性与转换效率瓶颈。',
  whySelected: '它把今天C类的滑移极化、E类的原子级势垒和B类的非易失磁态放到共同的“电极化—界面对称性—自旋输运”框架。',
  readingGuide: ['先读极化如何改变Rashba/自旋纹理。', '再看自旋—电荷转换与器件概念。', '重点看超薄极化稳定和界面污染。', '最后审视CMOS集成边界；60–80分钟。'], notNew: false
};

const classic = {
  id: 'classic-slonczewski-1996-stt', kind: '经典文章', track: 'B', secondaryTracks: ['C'],
  title: 'Current-driven excitation of magnetic multilayers', titleZh: '电流驱动磁性多层激发：自旋转移力矩的经典起点',
  authors: 'J. C. Slonczewski', venue: 'Journal of Magnetism and Magnetic Materials 159, L1–L7 (1996)', published: '1996-06', recommendedOn: date,
  doi: '10.1016/0304-8853(96)00062-5', url: 'https://linkinghub.elsevier.com/retrieve/pii/0304885396000625', backupUrl: 'https://doi.org/10.1016/0304-8853(96)00062-5',
  assistantSummary: '经典理论指出自旋极化电流能把角动量传给另一磁层并激发或翻转磁化，奠定STT-MRAM写入的物理基础。',
  whySelected: '与今天C类“无需翻转AFM磁序的极化写入”形成鲜明对照，可看清传统STT和新型原子滑移写入的变量、功耗与证据差异。',
  readingGuide: ['先看两磁层与电流方向。', '再看力矩角度依赖。', '理解临界条件的理想化假设。', '最后与现代TMR/WER指标对照；35–50分钟。'], notNew: true
};

const curatedDetails = [
  {
    id: review.id, oneSentence: review.assistantSummary,
    background: '铁电极化可在撤去电压后保留；若它能重排界面电荷、自旋轨道耦合和能带，自旋状态也可被非易失电控。范德华界面原子级平整，但仍受堆垛、污染和超薄极化稳定性限制。',
    question: '范德华铁电体能否把低功耗非易失极化可靠地转换为可读出的自旋纹理、SCC或磁性变化？',
    workflow: ['梳理传统铁电自旋电子学', '比较vdW铁电/半导体/磁体异质结', '按自旋纹理、SCC和磁控功能分类', '总结超薄稳定、效率和集成瓶颈'],
    findings: ['【综述归纳】极化反转可非易失调控自旋纹理和自旋—电荷转换。', '【综述归纳】vdW界面有利于原子级堆叠和无悬挂键集成。', '【综述归纳】超薄铁电极化稳定性与SCC效率仍是实用瓶颈。', '【证据边界】Perspective汇总跨材料结果，不代表单一量产器件。'],
    explanation: '为正式Perspective的综合判断；对MgO/CoFeB接口的迁移属于本站推断。',
    whyItMatters: [review.whySelected],
    researchConnection: '把极化层、MgO势垒与SOT层组合成DOE：极化方向、层数、界面终止和退火为变量；无铁电层与锁定极化为对照；测TMR、RA、SCC、Jc、WER、保持、耐久和温变。',
    limitationsDetailed: '二维材料转移污染、面积、对准、接触、极化疲劳和CMOS热预算未解决；综述中的单器件数值不可跨材料直接比较。',
    terms: ['SCC：自旋—电荷转换。', 'Rashba效应：反演对称性破缺下的自旋分裂。', '滑移铁电：层间相对位移产生的可翻转极化。'],
    takeaway: review.readingGuide.join(' ')
  },
  {
    id: classic.id, oneSentence: classic.assistantSummary,
    background: '普通电流携带电荷；经过磁层后还带净自旋角动量。当它进入另一磁层，横向自旋被吸收并形成磁矩上的力矩。',
    question: '电流本身能否在没有外加交变磁场时激发或翻转磁性多层中的自由层？',
    workflow: ['建立两磁层夹非磁层结构', '计算自旋相关散射与角动量流', '导出随夹角和电流变化的力矩', '求磁化不稳定/激发条件'],
    findings: ['【理论预测】自旋极化电流能直接传递角动量。', '【理论预测】力矩随两磁层夹角和电流方向改变。', '【理论预测】超过临界电流可激发磁化动态。', '【证据边界】1996模型未包含现代pMTJ的完整热涨落、VCMA、缺陷和WER长尾。'],
    explanation: '为经典理论预测；后续大量实验支持STT，但本条不把现代器件数据倒填进原论文。',
    whyItMatters: [classic.whySelected],
    researchConnection: '用现代LLG+Slonczewski项建立基线，再逐层加入温度、界面SOC、VCMA和缺陷；用脉冲宽度—电流相图、WER和自热数据校准。',
    limitationsDetailed: '理想化宏自旋/散射假设无法独立预测真实器件TMR、RA、Jc分布、保持、耐久和阵列功耗。',
    terms: ['STT：电流自旋角动量施加的磁力矩。', '自由层：其磁化可被写入的磁层。', '临界电流：使初始磁态失稳的电流阈值。'],
    takeaway: classic.readingGuide.join(' ')
  }
];

const curated = read('curated-reading.json');
curated.items = curated.items.filter((x) => ![review.id, classic.id].includes(x.id)).concat([review, classic]);
curated.history = curated.history.filter((x) => x.date !== date).concat([{ date, reviewId: review.id, classicIds: [classic.id] }]);
write('curated-reading.json', curated);
write('curated-details.json', read('curated-details.json').filter((x) => !curatedDetails.some((d) => d.id === x.id)).concat(curatedDetails));
write('daily-reading.json', { date, review, classics: [classic] });

const insightBase = (id, type, typeZh, title, relatedPaperIds, summary, workflow, equipment, measurements, metrics) => ({
  id, date, type, typeZh,
  trackLabel: type === 'opportunity' ? 'A/B · 热点—稳定写态' : type === 'method' ? 'C/D · 对称性—低温平台' : 'B/E · 原子势垒与极化',
  title, subtitle: summary, summary, status: '本站组合推断，待实验验证', relatedPaperIds,
  question: type === 'opportunity' ? '局域电子热点如何放大磁态窗口的长尾误码？' : type === 'method' ? '如何在连续mK平台上把对称性预测转成可复现实验？' : '原子层势垒和滑移极化能否共同形成低功耗多级隧穿状态？',
  rationale: '由今日直接实测、理论预测与正式综述组合形成，尚未在同一MTJ平台验证。',
  workflow, equipment, measurements, metrics,
  evidenceBoundary: '跨材料迁移属于本站推断；所有定量性能必须在目标CoFeB/MgO或AFMTJ器件上重新测量。',
  firstSteps: workflow.slice(0, 3), researchConnection: '连接原子制造、MTJ/MRAM、低温输运和设备平台。', takeaway: summary
});

const insights = [
  insightBase('2026-08-17-hotspot-stability', 'opportunity', '研究机会', '热点电子—交换偏置—WER长尾联合实验', ['rsi-97-081303', 'apl-129-032403'], '把局域热点图与磁态稳定窗口逐器件关联，找出小场扰动和自热共同造成的尾部失效。', ['校准金属微加热器热点', '制备有/无交换偏置器件', '温变脉冲写入并成像', '关联热点、磁滞与WER'], ['低温SNoiM', '矢量磁体与脉冲源', '高速示波/锁相'], ['热点宽度与温升', '磁滞/Tc/TMR/RA', 'WER与恢复'], ['热点—WER相关系数', '场扰动容限', '3σ器件分布']),
  insightBase('2026-08-17-cadr-symmetry-loop', 'method', '设备与测量平台', '连续mK—对称性输运—热预算闭环', ['prb-x7b4-t1hk', 'rsi-97-025214'], '用连续cADR承载极化/滑移AFMTJ温变输运，并把每根线缆与写入脉冲纳入3 μW级热预算。', ['建立DC/RF热预算', '加工滑移/极化隧道器件', '20–300 mK连续输运', '对照联合对称性模型'], ['四级cADR或同级平台', '低噪DC/RF线', '脉冲与极化控制'], ['TMR/RA/偏压谱', '极化与保持', '样品级温升'], ['50 mK冷量余度', '模型—实测一致率', '连续运行可用率']),
  insightBase('2026-08-17-atomic-barrier', 'atomic', '原子与极端制造', '0.8–2.5 nm势垒—滑移极化—缺陷通道DOE', ['jvb-44-042206', 'prb-x7b4-t1hk'], '用ALD厚度梯度和界面堆垛控制区分均匀隧穿、导电丝与对称性选择通道。', ['沉积厚度楔形Al₂O₃/MgO', '设置终止/滑移/退火对照', '做TEM-EELS/XPS', '联测I-V、RTN、TMR与保持'], ['ALD/溅射真空互联', 'TEM-EELS/XPS', '低噪声与脉冲参数仪'], ['厚度/氧成分', 'I-V/RTN/TMR/RA', '多级态线性/保持/耐久'], ['片内厚度3σ', '无突变模拟更新', '保持与循环达标'])
];

const archive = read('insight-archive.json');
archive.items = archive.items.filter((x) => !insights.some((y) => y.id === x.id)).concat(insights);
archive.history = archive.history.filter((x) => x.date !== date).concat([{ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }]);
write('insight-archive.json', archive);

console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
