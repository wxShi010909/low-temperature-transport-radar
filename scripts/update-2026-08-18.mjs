import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-08-18';
const updatedAt = '2026-08-18T09:00:00+08:00';
const staleIds = ['npjspin-4-19', '2026-08-18-rf-interface-fingerprint'];

const papers = [
  {
    id: 'jvb-44-052203', track: 'A', secondaryTracks: ['D', 'E'],
    title: 'Voltage-tunable Josephson junctions on germanium quantum wells with in situ aluminum contacts',
    titleZh: '原位Al/Ge量子阱电压可调约瑟夫森结：无氧化界面与深台面集成',
    authors: 'J. P. Thompson, J. T. Dong, B. Langa Jr., C. K. Gaspe, Riis Card et al.',
    venue: 'Journal of Vacuum Science & Technology B 44, 052203 (2026)', published: '2026-08-07', recommendedOn: date,
    timeTier: '11日前正式开放论文',
    system: '浮区Si(001)/150 nm Si/1 μm Ge/700 nm反向渐变SiGe/300 nm Si0.2Ge0.8/16 nm Ge量子阱/11 nm Si0.2Ge0.8/1 nm Si帽层；原位10 °C沉积50 nm Al',
    conditions: '2 K霍尔输运；栅压调控横向Josephson结；峰值空穴迁移率26800 cm²/Vs、平均自由程482 nm；公开正文未给本文最低测量温度与完整磁场端点',
    methods: ['MBE连续生长Ge/SiGe量子阱', '不破真空转移并原位沉积Al', '深台面刻蚀移除结区外有损外延层', '低温霍尔与栅控超电流测量'],
    summary: '实测峰值临界电流超过100 nA、IcRn=8.63 μV，计算界面透明度约4%–9%；25–100 nA可对应约4.25–8.7 GHz的transmon调谐范围。',
    relevance: '它把真空互联、界面洁净、侧壁形貌和低温输运放进同一工艺闭环，可迁移到MTJ原位封护与刻蚀后无氧化接触。',
    limitation: '这是超导—半导体结而非MTJ；透明度为模型提取；未给TMR、RA、WER、保持、耐久或300 mm统计。',
    industrialization: '接近可扩展混合量子器件集成；仍需解决深台面光刻起伏、界面陷阱、批间均匀性、微波损耗和晶圆级良率。',
    whyRecommended: '先看图1完整堆栈与2 K输运，再看深台面、Ic栅控和总结；45–60分钟。',
    score: 9.8, priority: 'S', doi: '10.1116/6.0005651', arxiv: '2606.28585',
    url: 'https://pubs.aip.org/avs/jvb/article/44/5/052203/3400538/Voltage-tunable-Josephson-junctions-on-germanium', backupUrl: 'https://arxiv.org/abs/2606.28585',
    accessNote: '已打开AVS/AIP正式全文，核验作者、日期、DOI、完整MBE层厚、2 K输运、>100 nA、8.63 μV与4%–9%透明度', featured: true
  },
  {
    id: 'apl-128-102401', track: 'B', secondaryTracks: ['A', 'D'],
    title: 'Thermally stable multistate characteristics in multidomain-driven magnetic tunnel junctions',
    titleZh: '多畴pMTJ的六个稳定电阻态：5.4–360 K与1小时保持验证',
    authors: 'Yapeng Zhao, Tiaoyang Li, Zhijie Wang, Tai Min, Yanqing Wu',
    venue: 'Applied Physics Letters 128, 102401 (2026)', published: '2026-03-09', recommendedOn: date,
    timeTier: '2026正式器件论文',
    system: '不同直径的垂直各向异性MTJ；以自由层多畴顺序翻转产生P与AP之间的中间电阻态；公开摘要未给完整材料层厚和RA',
    conditions: '无外场电压写入；直径系列；590 nm器件得到最多六态；5.4–360 K变温并对各态做1 h保持',
    methods: ['测不同直径MTJ的电阻—电压特性', '以电压脉冲顺序操控多畴', '统计各电阻态与写入电压窗口', '跨5.4–360 K验证区分度和1 h保持'],
    summary: '590 nm器件实测最多六个清晰稳定电阻态；各态在5.4–360 K保持显著电阻裕量和写入窗口，并完成1 h保持验证。',
    relevance: '把传统“多畴坏状态”转化为可利用的多比特资源，也给低温至高温的磁畴—电阻联合测试提供直接样板。',
    limitation: '590 nm远大于先进MRAM单元；1 h不等于10年保持；摘要未给TMR、RA、写入能耗、WER、耐久、层厚和阵列统计。',
    industrialization: '处于单器件多态验证；还需纳米缩放、状态分布长尾、选择器、读扰、10年保持、循环耐久和PVT角。',
    whyRecommended: '先看直径—状态数关系，再看590 nm六态、5.4–360 K和1 h保持；35–50分钟。',
    score: 9.8, priority: 'S', doi: '10.1063/5.0312080',
    url: 'https://pubs.aip.org/aip/apl/article-abstract/128/10/102401/3382667', backupUrl: 'https://doi.org/10.1063/5.0312080',
    accessNote: '已打开AIP正式页，核验作者、日期、DOI、590 nm六态、5.4–360 K与1 h保持；未公开数据明确标注', featured: true
  },
  {
    id: 'apl-129-062401', track: 'C', secondaryTracks: ['B', 'E'],
    title: 'Electrical-controlled and layer-filtered altermagnetic tunnel junction with all-in-one architecture',
    titleZh: '双层V₂Se₂O全电控交变磁隧道结：层过滤与约10¹⁰%理论TMR',
    authors: 'Chao Mao, Shiqi Liu, Baochun Wu, Shunfang Li, Jinbo Yang, Jie Yang',
    venue: 'Applied Physics Letters 129, 062401 (2026)', published: '2026-08-10', recommendedOn: date,
    timeTier: '八日前正式理论论文',
    system: '仅由双层V2Se2O构成的“全合一”交变磁隧道结；两端施加同向或反向垂直电场',
    conditions: '第一性原理+量子输运；电场增至0.25 V/Å时导带和价带自旋劈裂带共同交叉；温度、缺陷、实器件尺寸与RA不适用/原文未公开',
    methods: ['计算双层能带与层分辨自旋极化', '施加两端同向/反向电场', '计算层分辨透射通道', '由两种电导态求TMR'],
    summary: '理论预测电场解除能带简并并产生费米能级层依赖自旋极化；两种电场构型形成高低电导态，理想TMR最高约10^10%，通常仅底层贡献输运。',
    relevance: '把“电场—原子层—自旋通道”直接连接，可作为极薄MTJ原子终止、层错和电场强度的计算筛选案例。',
    limitation: '全部为理想结构计算；10^10%不是实测，极易受接触、缺陷、有限温、偏压和层间错位压低；无WER/保持/耐久。',
    industrialization: '处于概念/候选结构阶段；还缺可生长材料、击穿前电场窗口、电极接触、室温保持、阵列写入和晶圆工艺。',
    whyRecommended: '先看电场构型和层分辨能带，再看透射与0.25 V/Å交叉；40–55分钟。',
    score: 9.7, priority: 'S', doi: '10.1063/5.0346964',
    url: 'https://pubs.aip.org/aip/apl/article/129/6/062401/3400606/Electrical-controlled-and-layer-filtered', backupUrl: 'https://doi.org/10.1063/5.0346964',
    accessNote: '已打开AIP正式页，核验作者、日期、DOI、双层V2Se2O、电场构型、0.25 V/Å和约10^10%理论TMR', featured: true
  },
  {
    id: 'rsi-97-081304', track: 'D', secondaryTracks: ['A', 'E'],
    title: 'Ultra-high vacuum cluster system integrating two-dimensional heterostructures growth, characterization, device fabrication and electrical transport measurement',
    titleZh: '全流程UHV集群：生长—表征—五轴掩模加工—变温输运不破真空',
    authors: 'Jinze Fan, Zhanbo Fang, Jiuduan Fan, Fangying Song, Chaojie Luo et al.',
    venue: 'Review of Scientific Instruments 97, 081304 (2026)', published: '2026-08-17', recommendedOn: date,
    timeTier: '昨日正式发表',
    system: '固定/移动MBE、磁控溅射、VT-STM、LEED、器件蒸镀、Ar离子刻蚀、商用四探针和模块化变温测量平台；统一Mo旗形样品托',
    conditions: '主流程压力<5×10^-10 mbar；样品≤10×10 mm²、厚0.1–3 mm；Nb验证膜150 nm、50 W、0.16 Pa Ar，4.5–90 K/500 μA测量',
    methods: ['UHV移动MBE生长', '原位STM/LEED表征', '实时光学五轴动态掩模对准', '预制焊盘模块探针做四端R–T'],
    summary: '完整流程在UHV完成；五轴掩模支持微米级多层器件；Nb膜外围以3×10^-4 Pa Ar等离子刻蚀30 min后对地>20 MΩ，并测得4.5 K超导状态。',
    relevance: '几乎是MTJ“沉积—原位表征—无胶加工—封护—输运”的平台蓝本，可避免空气吸附和探针刮伤。',
    limitation: '验证样品以二维材料和Nb为主；未展示CoFeB/MgO、纳米CD、晶圆级套刻、TMR/WER或量产吞吐。',
    industrialization: '接近高端研发集群；距离300 mm生产还差自动传片、颗粒控制、腔体匹配、统计过程控制、MTBF和成本数据。',
    whyRecommended: '先看图1集群拓扑、五轴掩模系统、图7模块探针，再看Nb 4.5–90 K验证；55–75分钟。',
    score: 10, priority: 'S', doi: '10.1063/5.0328828',
    url: 'https://pubs.aip.org/aip/rsi/article/97/8/081304/3401260/Ultra-high-vacuum-cluster-system-integrating-two', backupUrl: 'https://doi.org/10.1063/5.0328828',
    accessNote: '已打开AIP正式全文，核验作者、日期、DOI、真空度、样品尺寸、各腔体、Nb工艺与4.5–90 K测量', featured: true
  },
  {
    id: 'jvb-44-042802', track: 'E', secondaryTracks: ['A', 'D'],
    title: 'Temperature-dependent dielectric function of tantalum nitride formed by atomic layer deposition for tunnel barriers in Josephson junctions',
    titleZh: '300 mm晶圆ALD绝缘TaN：80–600 K介电函数与1.5–1.8 eV带隙',
    authors: 'Ekta Bhatia, Aaron Lopez Gonzalez, Yoshitha Hettige, Tuan Vo, Sandra Schujman et al.',
    venue: 'Journal of Vacuum Science & Technology B 44, 042802 (2026)', published: '2026-06-05', recommendedOn: date,
    timeTier: '2026正式晶圆级材料论文',
    system: '300 mm Si/SiO2上的13和25 nm名义厚度绝缘ALD TaN；面向Ta基Josephson结势垒',
    conditions: '70°椭偏；0.03–0.7 eV/80–300 K与0.5–6.5 eV/80–600 K；TEM/SAED、XRD、溅射深度XPS',
    methods: ['300 mm ALD沉积两厚度TaN', '跨红外—紫外变温椭偏', 'Tauc–Lorentz色散拟合', '结构和N/Ta深度成分交叉验证'],
    summary: '两厚度在全温区均呈绝缘、中红外透明且无自由载流子吸收；光学带隙1.5–1.8 eV，N/Ta约1.2并贯穿膜厚。',
    relevance: '提供“晶圆级沉积—成分—结构—变温介电”完整计量链，可迁移到MgO/AlOx势垒的厚度、氧化学计量和热稳定评估。',
    limitation: '13/25 nm远厚于实际JJ/MTJ隧穿势垒；未制成结，因此无Jc、IcRn、RA、TMR、WER、击穿或保持数据。',
    industrialization: '处于300 mm材料资格；下一步必须做亚2 nm连续性、晶圆九点统计、结电流、TLS损耗、老化和BEOL热预算。',
    whyRecommended: '先看实验温区/光谱窗口，再看介电模型、XPS的N/Ta和对AlOx的比较；40–55分钟。',
    score: 9.8, priority: 'S', doi: '10.1116/5.0333748',
    url: 'https://pubs.aip.org/avs/jvb/article/44/4/042802/3393881/Temperature-dependent-dielectric-function-of', backupUrl: 'https://doi.org/10.1116/5.0333748',
    accessNote: '已打开AIP/AVS正式页，核验300 mm、13/25 nm、两段温度/光谱范围、带隙、绝缘行为与N/Ta≈1.2', featured: true
  }
];

const details = papers.map((p) => ({
  id: p.id,
  oneSentence: p.summary,
  background: p.id === 'jvb-44-052203' ? '约瑟夫森结允许无耗散超电流跨过弱连接；半导体量子阱把载流子密度和超电流变成栅压可调。原位金属接触避免界面氧化，但外延缓冲层会带来微波损耗。' : p.id === 'apl-128-102401' ? 'MTJ通常用P/AP两态存1 bit；尺寸较大或自由层不均匀时会出现多畴中间态。过去它们常被视作误码源，但若电阻和写入窗口稳定，就可能编码多级信息。' : p.id === 'apl-129-062401' ? '交变磁体净磁矩为零，却可因晶体对称性出现非相对论自旋劈裂。若电场能选择某一原子层的自旋通道，就可能不靠磁场写入。' : p.id === 'rsi-97-081304' ? '原子级界面一旦暴露空气，会吸附水氧并改变接触；常规光刻还会引入胶、辐射和机械接触。UHV集群试图让生长、加工和测量共享同一真空链。' : 'ALD依靠自限表面反应控制厚度和成分；绝缘TaN可能比AlOx更耐老化，但先要证明跨温度仍无自由载流子吸收并建立介电模型。',
  question: p.id === 'jvb-44-052203' ? '怎样同时得到无氧化Al/Ge界面、栅控超电流和可接入低损耗电路的深台面几何？' : p.id === 'apl-128-102401' ? '能否通过直径和多畴顺序翻转，把中间态变成跨宽温区可读写、可保持的多级存储？' : p.id === 'apl-129-062401' ? '仅用一块双层交变磁体，能否由电场构成可读的高低隧穿态？' : p.id === 'rsi-97-081304' ? '能否把原子级生长、无污染多层加工、可靠接触和变温四端输运真正串成不破真空流程？' : '300 mm ALD TaN在80–600 K是否持续绝缘、成分均一，能否作为可控隧穿势垒候选？',
  workflow: p.methods,
  findings: p.id === 'jvb-44-052203' ? ['【直接实测】2 K峰值迁移率26800 cm²/Vs、平均自由程482 nm。','【直接实测】临界电流>100 nA，IcRn=8.63 μV。','【模型提取】界面透明度约4%–9%。','【作者解释】原位Al避免氧化和扩散导致的结长不均。','【本站推断】同类真空互联可减少MTJ封护前的界面漂移。'] : p.id === 'apl-128-102401' ? ['【直接实测】状态数随MTJ直径可控。','【直接实测】590 nm器件最多六个稳定且可区分电阻态。','【直接实测】六态跨5.4–360 K保持显著电阻和写入电压裕量。','【直接实测】完成1 h多态保持验证。','【作者解释】自由层多畴顺序翻转产生中间态；【本站推断】缩放会改变畴结构与裕量。'] : p.id === 'apl-129-062401' ? ['【理论预测】垂直电场解除双层V2Se2O能带简并。','【理论预测】同向/反向电场形成两种显著电导态。','【理论预测】理想TMR最高约10^10%。','【理论预测】通常仅底层输运，0.25 V/Å出现能带共同交叉。','【证据边界】没有实测器件，所有性能必须标为计算。'] : p.id === 'rsi-97-081304' ? ['【工程实测】全链压力<5×10^-10 mbar。','【工程实现】五轴动态掩模对准支持微米级多层加工。','【直接实测】150 nm Nb经Ar刻蚀后对地>20 MΩ。','【直接实测】500 μA下完成4.5–90 K R–T并确认4.5 K超导。','【本站推断】迁移到MTJ还需纳米图形、侧壁封护和磁场兼容。'] : ['【直接实测】13/25 nm TaN在80–600 K保持绝缘。','【模型提取】光学带隙1.5–1.8 eV。','【直接实测】无自由载流子红外吸收。','【直接实测】深度XPS给N/Ta≈1.2且贯穿膜厚。','【作者解释】较低带隙、低粗糙与热稳定性可能允许比AlOx更厚的势垒；尚未做成结。'],
  explanation: p.id === 'apl-129-062401' ? '电导、TMR和层过滤均为理论预测；作者用电场诱导层分辨自旋极化解释；可制造性判断是本站推断。' : '直接测量、模型提取和作者机制已在关键发现中逐条标明；向MTJ/MRAM迁移的部分均为本站推断，不等同原文结论。',
  whyItMatters: [p.relevance, p.industrialization],
  researchConnection: p.id === 'jvb-44-052203' ? '做“空气暴露/真空转移/原位封护”三组CoFeB/MgO见证片；变量为暴露时间、台面斜率和退火；测XPS、TEM-EELS、RA/TMR、RTN与低温I-V。设备需互联真空、MBE/溅射、低温探针与截面TEM。' : p.id === 'apl-128-102401' ? '做200–800 nm直径×5–360 K×脉冲幅宽DOE；单畴小器件作对照；测状态数、电阻间隔、写入窗口、误码、保持和10^6以上循环，并用MOKE/MFM确认畴结构。' : p.id === 'apl-129-062401' ? '先用DFT/NEGF做电场、缺陷、层错、接触和温度灵敏度；对照无电场和单层结构；指标为TMR、RA、电场击穿裕量、保持和写入能耗；实验需原子层生长、双栅和低噪声输运。' : p.id === 'rsi-97-081304' ? '按“沉积—XPS/STM—五轴掩模—IBE—原位封护—四端输运”搭建最小链；变量为真空等待、掩模套刻、刻蚀剂量；指标为颗粒、CD、接触电阻、TMR/RA和重复性。' : '先在300 mm做中心/边缘9点厚度与N/Ta，再把13/25 nm缩放到0.8–3 nm；对照AlOx/MgO；测椭偏、XPS、TEM、AFM、I-V/RA、击穿、TLS噪声和热循环。',
  limitationsDetailed: p.limitation,
  terms: p.id === 'jvb-44-052203' ? ['IcRn：临界电流与正常态电阻乘积，反映结耦合。','界面透明度：载流子穿过超导—半导体边界的概率。'] : p.id === 'apl-128-102401' ? ['多畴：自由层同时存在多个磁化方向不同的区域。','电阻裕量：相邻可读状态之间可容纳噪声和漂移的间隔。'] : p.id === 'apl-129-062401' ? ['交变磁体：净磁矩为零但能带具有自旋劈裂的共线磁体。','层过滤：只有特定原子层主导电流。'] : p.id === 'rsi-97-081304' ? ['UHV：通常低于10^-9 mbar的超高真空。','动态掩模：真空中实时对准的无胶图形化掩模。'] : ['介电函数：描述材料对不同频率电场响应的复函数。','Tauc–Lorentz模型：拟合无定形半导体/绝缘体光学跃迁的色散模型。'],
  takeaway: p.whyRecommended
}));

const report = read('reports.json');
report.reportDate = date; report.updatedAt = updatedAt;
report.papers = report.papers.filter((x) => !staleIds.includes(x.id) && !papers.some((p) => p.id === x.id)).concat(papers);
report.history = report.history.filter((x) => x.date !== date).concat([{ date, label: '详细日报：原位低温结—RF辅助pMTJ—全电控理论—UHV全流程—300 mm ALD势垒', total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: papers.map((x) => x.id) }]);
write('reports.json', report);
write('paper-details.json', read('paper-details.json').filter((x) => !staleIds.includes(x.id) && !details.some((d) => d.id === x.id)).concat(details));

const review = {
  id: 'review-ald-superconducting-films-2025', kind: '每日综述', track: 'E', secondaryTracks: ['A', 'D'],
  title: 'Recent advances in atomic layer deposition of superconducting thin films: a review', titleZh: '超导薄膜ALD近期进展：材料、前驱体、原子级控制与器件瓶颈',
  authors: 'G. K. Deyu et al.', venue: 'Materials Horizons 12, 5594–5626 (2025)', published: '2025-05-09', recommendedOn: date,
  doi: '10.1039/D5MH00323G', url: 'https://pubs.rsc.org/en/content/articlelanding/2025/mh/d5mh00323g', backupUrl: 'https://doi.org/10.1039/D5MH00323G',
  assistantSummary: '正式综述系统梳理ALD超导金属、氮化物和氧化物的自限反应、厚度/成分控制及量子器件应用，并强调前驱体纯度、成核、杂质与规模化难点。',
  whySelected: '与今天300 mm TaN和原位Al/Ge结互补：一篇给材料/化学总图，两篇给晶圆计量和实际器件。',
  readingGuide: ['先读ALD循环与成核。','再按NbN/TiN/TaN等材料查表。','重点看杂质、Tc和薄膜连续性。','最后审视量子器件与规模化；70–90分钟。'], notNew: true
};
const classic = {
  id: 'classic-cofeb-mgo-interface-2006', kind: '经典文章', track: 'B', secondaryTracks: ['C', 'E'],
  title: 'Atomic and electronic structure of the CoFeB/MgO interface from first principles', titleZh: 'CoFeB/MgO界面原子与电子结构：B位置为何决定隧穿通道',
  authors: 'J. D. Burton, S. S. Jaswal, E. Y. Tsymbal, O. N. Mryasov, O. G. Heinonen', venue: 'Applied Physics Letters 89, 142507 (2006)', published: '2006-10-05', recommendedOn: date,
  doi: '10.1063/1.2360189', url: 'https://pubs.aip.org/aip/apl/article/89/14/142507/332142/Atomic-and-electronic-structure-of-the-CoFeB-MgO', backupUrl: 'https://doi.org/10.1063/1.2360189',
  assistantSummary: '经典第一性原理工作指出CoFeB/MgO界面附近B的占位和氧配位会改变界面电子结构，为退火驱动B扩散与高TMR形成提供原子尺度解释框架。',
  whySelected: '与今日多畴pMTJ形成“界面原子结构—磁畴—电阻态”的跨尺度对照，提醒多态稳定性最终仍受界面化学约束。',
  readingGuide: ['先看界面结构模型。','再比较不同B占位的态密度。','注意这是理想计算。','最后与现代TEM/EELS和RF数据对照；30–45分钟。'], notNew: true
};
const curatedDetails = [review, classic].map((x) => ({
  id: x.id, oneSentence: x.assistantSummary,
  background: x.id === review.id ? 'ALD以交替、饱和表面反应逐循环生长，适合亚纳米厚度和高纵横比结构；但超导薄膜对C/O/H杂质和成核中断极敏感。' : 'CoFeB沉积时多为非晶，退火后在MgO模板上晶化；B从界面迁移的位置会改变成键、态密度和相干隧穿。',
  question: x.id === review.id ? '哪些超导材料已经能用ALD实现，原子级控制与杂质/成核/规模化之间的主要矛盾是什么？' : 'B在CoFeB/MgO附近的原子占位怎样改变界面电子结构？',
  workflow: x.id === review.id ? ['梳理ALD原理与前驱体','按超导材料分类','比较薄膜结构/电学/器件','总结产业与可靠性缺口'] : ['建立晶体界面模型','设置不同B占位','第一性原理弛豫','比较界面态与隧穿相关电子结构'],
  findings: x.id === review.id ? ['【综述归纳】ALD可原子级控制厚度、成分和共形覆盖。','【综述归纳】超导性质对成核、杂质和后处理高度敏感。','【综述归纳】氮化物是量子器件的重要材料族。','【证据边界】跨论文Tc/电阻率不能脱离各自工艺直接比较。'] : ['【理论预测】B占位显著改变界面原子和电子结构。','【理论解释】退火驱动的B迁移与CoFe在MgO上的晶化相关。','【理论边界】模型未包含真实粗糙、缺陷分布和纳米器件统计。','【本站推断】RF慢动力学应与B/O化学和界面磁死层联合检查。'],
  explanation: x.id === review.id ? '为正式综述的综合归纳，不是单一器件实测。' : '为第一性原理理论；向现代RF-pMTJ的连接是本站推断。',
  whyItMatters: [x.whySelected],
  researchConnection: x.id === review.id ? '建立前驱体/温度/循环/后处理DOE，统一测厚度、C/O/H、粗糙、Tc/电阻率和晶圆均匀性；空白衬底与PVD膜作对照。' : '做退火温度×时间×吸B层矩阵；TEM-EELS/XPS/SIMS测B/O，FMR测磁死层与阻尼，MTJ测TMR/RA/RTN/WER和RF延迟响应。',
  limitationsDetailed: x.id === review.id ? '综述覆盖不同材料与设备；未给单一可复制工艺窗口，也不能证明300 mm良率。' : '2006年理想晶体计算；没有直接TMR、RA、WER、保持、耐久和晶圆数据。',
  terms: x.id === review.id ? ['成核延迟：ALD初始循环不能立即形成连续膜。','共形性：复杂表面各处厚度接近一致。'] : ['界面态：局域在两材料边界的电子态。','相干隧穿：电子保持晶体动量/对称选择规则穿越势垒。'],
  takeaway: x.readingGuide.join(' ')
}));
const curated = read('curated-reading.json');
curated.items = curated.items.filter((x) => ![review.id, classic.id].includes(x.id)).concat([review, classic]);
curated.history = curated.history.filter((x) => x.date !== date).concat([{ date, reviewId: review.id, classicIds: [classic.id] }]);
write('curated-reading.json', curated);
write('curated-details.json', read('curated-details.json').filter((x) => !curatedDetails.some((d) => d.id === x.id)).concat(curatedDetails));
write('daily-reading.json', { date, review, classics: [classic] });

const makeInsight = (id, type, typeZh, title, relatedPaperIds, summary, workflow, equipment, measurements, metrics) => ({
  id, date, type, typeZh, trackLabel: type === 'opportunity' ? 'A/B · 写入与界面' : type === 'method' ? 'A/D · 真空—低温闭环' : 'C/E · 原子势垒',
  title, subtitle: summary, summary, status: '本站组合推断，待同一MTJ平台验证', relatedPaperIds,
  question: type === 'opportunity' ? 'RF写入收益有多少来自界面慢动力学，怎样变成可控工艺反馈？' : type === 'method' ? '怎样把沉积到低温输运的空气暴露和接触误差降到可审计？' : '怎样把晶圆级势垒成分和理论层过滤转成真实RA/TMR良率？',
  rationale: '由今日论文的直接实测/理论组合而来，跨材料迁移不是原作者结论。', workflow, equipment, measurements, metrics,
  evidenceBoundary: '所有目标数值均需在CoFeB/MgO器件上重新测量；理论TMR和JJ数据不得当作MRAM实测。',
  firstSteps: workflow.slice(0, 3), researchConnection: '连接原子制造、MTJ/MRAM、低温输运、设备和可靠性。', takeaway: summary
});
const insights = [
  makeInsight('2026-08-18-multistate-interface-map','opportunity','研究机会','界面化学—多畴数量—多态保持联合地图',['apl-128-102401','classic-cofeb-mgo-interface-2006'],'把B/O分布、器件直径和5–360 K多态窗口放进同一可靠性模型。',['退火与吸B层DOE','直径×温度多态扫描','TEM-EELS/SIMS/MFM对照','保持/耐久闭环'],['脉冲参数分析仪','低温探针','TEM-EELS/SIMS','MFM/MOKE'],['状态数/间隔','TMR/RA','B/O深度','保持/耐久'],['相邻态6σ裕量','1 h到加速保持模型','循环寿命','界面批次可分辨度']),
  makeInsight('2026-08-18-uhv-transport-chain','method','设备与测量平台','不破真空加工—模块探针—低温输运最小闭环',['jvb-44-052203','rsi-97-081304'],'用空气暴露对照量化真空互联对界面、接触和低温输运的真实收益。',['建立统一样品托','原位沉积/表征','五轴掩模与刻蚀封护','4–300 K四端验收'],['UHV互联','溅射/MBE','XPS/STM','低温四端平台'],['接触电阻','XPS污染','TMR/RA','温变I-V'],['真空等待时间','接触重复性3σ','颗粒/CD','TMR良率']),
  makeInsight('2026-08-18-wafer-barrier-map','atomic','原子与极端制造','300 mm势垒化学—厚度—隧穿良率地图',['jvb-44-042802','apl-129-062401'],'从厚膜介电资格逐步缩到亚2 nm结，并把理想层过滤对缺陷的敏感性纳入晶圆图。',['13/25 nm材料基线','0.8–3 nm缩放','九点/全片XPS椭偏','见证结RA/TMR/击穿'],['300 mm ALD','椭偏/XPS','TEM/AFM','参数分析仪'],['N/Ta或O/金属比','厚度/粗糙','RA/TMR','TDDB/RTN'],['全片3σ','针孔率','击穿分布','结良率'])
];
const archive = read('insight-archive.json');
archive.items = archive.items.filter((x) => !staleIds.includes(x.id) && !insights.some((y) => y.id === x.id)).concat(insights);
archive.history = archive.history.filter((x) => x.date !== date).concat([{ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }]);
write('insight-archive.json', archive);

console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
