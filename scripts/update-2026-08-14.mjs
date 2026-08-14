import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-08-14';
const updatedAt = '2026-08-14T09:01:49+08:00';

const papers = [
  {
    id: 'arxiv-2608-06708', track: 'A', secondaryTracks: ['D'],
    title: 'Electron Temperature and Electron-Electron Scattering Length in GaAs/AlGaAs Using Mesoscopic Multiparallel Aperture Geometries',
    titleZh: '用多平行孔弹道磁阻标定电子温度与电子—电子散射长度',
    authors: 'Arati Thapa, Rishav Khatiwada, Prakash Sharma, Jean J. Heremans, Adbhut Gupta, Kirk W. Baldwin, Loren N. Pfeiffer, Mansour Shayegan',
    venue: 'arXiv:2608.06708 [cond-mat.mes-hall]（预印本）', published: '2026-08-07', recommendedOn: date,
    timeTier: '一周内预印本',
    system: '超高迁移率GaAs/AlGaAs二维电子气；12个并联孔径，邻孔中心距3 μm；四端局域磁阻结构',
    conditions: '4.2–20 K温变与垂直磁场扫描；交流总电流100 nA，即每孔8.33 nA；4.2 K下叠加直流加热电流；论文未给MTJ相关TMR、RA或WER',
    methods: ['微纳加工多平行孔屏障', '四端测量对称弹道磁聚焦峰', '由峰幅随温度指数衰减反演电子—电子散射长度', '用温度标定曲线把直流偏置映射为电子温度'],
    summary: '不同回旋轨迹的磁阻峰在8、12和20 K附近先后偏离电子—电子散射主导区；4.2 K下电子温度随直流加热呈近二次关系，并出现超弹道电导迹象。',
    relevance: '为低温MTJ脉冲自热提供“台温不等于电子温度”的独立校准范式，可用峰值或其他温敏输运特征替代仅靠热台读数。',
    limitation: '预印本尚未同行评议；GaAs二维电子气不是MTJ；电子温度反演依赖电子—电子散射主导假设，高温时电子—声子散射使模型失效。',
    industrialization: '属于低温计量方法；转向器件需在真实结偏压、纳秒脉冲、封装热阻和器件分布下建立结温—WER—可靠性校准。',
    whyRecommended: '先看图1孔径与回旋轨迹、图2温度衰减、图3偏置加热和图4超弹道区；45–60分钟。',
    score: 9.8, priority: 'S', arxiv: '2608.06708',
    url: 'https://arxiv.org/html/2608.06708v1', backupUrl: 'https://arxiv.org/abs/2608.06708',
    accessNote: '已打开arXiv全文，核验作者、提交日期、12孔、3 μm、4.2–20 K、100 nA及直流加热结论', featured: true
  },
  {
    id: 'jap-140-013901', track: 'B', secondaryTracks: ['D', 'E'],
    title: 'Thickness-dependent spin pumping in YIG/W90Ti10 bilayers',
    titleZh: 'YIG/WTi双层自旋泵浦：3 nm合金层的有效混合电导达到峰值',
    authors: 'M. Hachem, Z. Harajli, S. Isber, M. Haidar',
    venue: 'Journal of Applied Physics 140, 013901 (2026)', published: '2026-07-01', recommendedOn: date,
    timeTier: '2026正式实验论文',
    system: '不同厚度YIG/W90Ti10双层，并以YIG/W作比较；WTi厚度系列至少包含3和5 nm',
    conditions: '宽带铁磁共振测量阻尼与线宽；公开摘要未给完整YIG厚度、温度、频率端点、沉积温度和退火条件',
    methods: ['制备YIG与WTi厚度系列', '宽带FMR提取Gilbert阻尼', '用裸YIG基线分离自旋泵浦阻尼', '反演有效自旋混合电导并与YIG/W对照'],
    summary: '5 nm WTi使薄YIG阻尼增加，对应有效混合电导3.3×10^18 m^-2；WTi厚度3 nm时峰值4.2×10^18 m^-2，Ti掺杂相对纯W降低界面传输。',
    relevance: '给出“合金成分—厚度—结构相—界面自旋透明度”的材料筛选模板，可迁移到SOT-MRAM重金属/自由层界面。',
    limitation: 'YIG为绝缘铁磁体，不是CoFeB/MgO结；混合电导来自FMR模型反演；原文公开摘要未给TMR、RA、Jc、WER、保持和耐久。',
    industrialization: '处于自旋源材料筛选；需在CMOS兼容金属自由层、纳米器件、300 mm均匀性、退火互扩散和脉冲写入下再验证。',
    whyRecommended: '先看厚度系列与FMR线宽，再看有效混合电导峰值及结构相解释；35–50分钟。',
    score: 9.6, priority: 'S', doi: '10.1063/5.0320132',
    url: 'https://pubs.aip.org/aip/jap/article/140/1/013901/3397164/Thickness-dependent-spin-pumping-in-YIG-W90Ti10',
    backupUrl: 'https://doi.org/10.1063/5.0320132',
    accessNote: '已打开AIP正式页，核验作者、日期、DOI、3/5 nm与3.3/4.2×10^18 m^-2', featured: true
  },
  {
    id: 'prb-whhg-tfv4', track: 'C', secondaryTracks: ['A', 'D'],
    title: 'Finite-temperature spin diffusion in the two-dimensional XY model',
    titleZh: '二维XY模型有限温自旋扩散：高温展开与量子模拟器定量对照',
    authors: 'Erik Fitzner, Byungjin Lee, Junhyeok Hur, Minseok Kim, Benedikt Schneider, Jae-yoon Choi, Björn Sbierski',
    venue: 'Physical Review B, accepted (2026)', published: '2026-08-13', recommendedOn: date,
    timeTier: '昨日接收',
    system: '方格晶格量子自旋1/2 XY模型；实验用光晶格硬核玻色子量子模拟器实现',
    conditions: '有限温、高温至流体动力学长时标；公开摘要未给晶格尺寸、耦合常数、温度端点和误差条范围',
    methods: ['动力学高温展开计算长时间自旋关联', '提取二维自旋扩散常数', '光晶格量子模拟器制备硬核玻色子', '实验与理论逐温度定量比较'],
    summary: '理论与实验的自旋扩散常数高度一致，验证二维有限温自旋输运的定量量子模拟；并预测动态自旋电导和各向异性破坏可积性后的行为。',
    relevance: '提供“理论模型—可编程实验—输运系数”闭环，适合用于验证MTJ热涨落和自旋扩散模型的推断层级。',
    limitation: '原子量子模拟器不是固态MTJ；结果针对XY哈密顿量和有限温扩散，不能直接给CoFeB自旋扩散长度或写入电流。',
    industrialization: '属于基础理论验证；器件化需把无序、声子、界面SOC、有限尺寸、焦耳热和真实材料参数纳入并与电学实验对照。',
    whyRecommended: '先读模型映射，再看扩散常数的理论—实验对照和未来动态电导预测；40–55分钟。',
    score: 9.7, priority: 'S', arxiv: '2605.20124', doi: '10.1103/whhg-tfv4',
    url: 'https://arxiv.org/abs/2605.20124', backupUrl: 'https://journals.aps.org/prb/accepted/10.1103/whhg-tfv4',
    accessNote: '已核验APS接收页元数据和arXiv直接来源；APS全文入口受限，未公开数值明确标注', featured: true
  },
  {
    id: 'rsi-97-031302', track: 'D', secondaryTracks: ['A', 'E'],
    title: 'Cryogenic magnetic force microscopy at 35 T and Sub-3 K in a water-cooled magnet',
    titleZh: '35 T、2.7 K低温磁力显微镜：33 T下频移噪声约60 mHz',
    authors: 'Shuai Dong et al.',
    venue: 'Review of Scientific Instruments 97, 031302 (2026)', published: '2026-03-20', recommendedOn: date,
    timeTier: '2026正式仪器论文',
    system: '水冷电阻磁体内的非金属MFM头、高Q悬臂、静态交换气氦低温恒温器；以SrRuO3薄膜验证',
    conditions: '2.7 K、0–35 T成像；33 T频移噪声约60 mHz，典型磁信号>200 mHz',
    methods: ['非金属扫描头抑制涡流与磁力', '静态交换气低温环境降低振动', '高Q探针与频移读出', '磁场爬升中连续成像SrRuO3磁畴'],
    summary: '平台在35 T以下保持亚3 K成像；33 T噪声约60 mHz；SrRuO3磁畴受铁弹畴锁定并在0–35 T范围演化。',
    relevance: '可直接观察极端场下磁畴/缺陷，而不是只从电阻反演；适合验证MTJ边缘损伤、钉扎与翻转不均匀性。',
    limitation: 'MFM探针会扰动软磁层；空间分辨率和扫描速度在公开摘要中未给；SrRuO3薄膜不等于纳米MTJ写入状态。',
    industrialization: '科研级极端场平台；量产诊断需自动定位、晶圆兼容、无扰动探针、吞吐量和与电学脉冲同步。',
    whyRecommended: '先看非金属头/低振动设计，再看33 T噪声和2.7 K的0–35 T磁畴序列；40–60分钟。',
    score: 9.8, priority: 'S', doi: '10.1063/5.0309120',
    url: 'https://pubs.aip.org/aip/rsi/article/97/3/031302/3384131/Cryogenic-magnetic-force-microscopy-at-35-T-and',
    backupUrl: 'https://doi.org/10.1063/5.0309120',
    accessNote: '已打开AIP正式页，核验作者、DOI、2.7 K、35 T、33 T/60 mHz及>200 mHz信号', featured: true
  },
  {
    id: 'apl-128-202901', track: 'E', secondaryTracks: ['B', 'D'],
    title: 'Recoverable ultrathin Hf0.5Zr0.5O2-based ferroelectric tunnel junctions with significantly prolonged endurance',
    titleZh: '3 nm HZO隧道结的缺陷恢复：10 ns写入下耐久达到10^8次',
    authors: 'Jingchao Xiao, Huiping Wang, Wei Liu, Wei Zhang, Yubao Li',
    venue: 'Applied Physics Letters 128, 202901 (2026)', published: '2026-05-19', recommendedOn: date,
    timeTier: '2026正式器件论文',
    system: 'W/WOx/Hf0.5Zr0.5O2/Pt铁电隧道结；HZO厚3 nm，含溅射高导WOx界面层',
    conditions: '10^5与10^6 Hz双极方波循环；10 ns单脉冲编程与单极负恢复脉冲；公开摘要未给器件横向尺寸、沉积温度和完整电压端点',
    methods: ['制备3 nm HZO与WOx界面层', '测剩余极化和隧穿电阻窗口', '高频双极循环施加疲劳', '单极负脉冲释放界面钉扎氧空位并恢复'],
    summary: '剩余极化19 μC/cm²；薄膜循环达到3.7×10^9与4.53×10^10次；FTJ隧穿电致电阻比最高5.8×10^5；10 ns写入下恢复后耐久10^8次且窗口>13000。',
    relevance: '虽非磁隧道结，但它把原子级氧空位、界面层、记忆窗口和恢复脉冲连成可量化可靠性链，对MgO势垒缺陷治理非常有启发。',
    limitation: 'FTJ的极化/氧空位机制不能直接等同MTJ自旋隧穿；摘要未给RA、TMR、写入能量、保持时间和晶圆分布。',
    industrialization: '接近超薄非易失存储器件，但仍需阵列选通、片内/批间分布、数据保持、工艺热预算、BEOL兼容和恢复策略开销。',
    whyRecommended: '先看3 nm堆栈与极化，再看疲劳—恢复循环、10 ns耐久和氧空位机制；35–50分钟。',
    score: 9.9, priority: 'S', doi: '10.1063/5.0313762',
    url: 'https://pubs.aip.org/aip/apl/article/128/20/202901/3391612/Recoverable-ultrathin-Hf0-5Zr0-5O2-based',
    backupUrl: 'https://doi.org/10.1063/5.0313762',
    accessNote: '已打开AIP正式页，核验作者、DOI、3 nm、19 μC/cm²、循环次数、5.8×10^5、10 ns与>13000', featured: true
  }
];

const details = [
  {
    id: 'arxiv-2608-06708',
    oneSentence: '作者把弹道磁聚焦峰当作电子温度计，在4.2–20 K区间标定散射长度与直流焦耳热。',
    background: '低温器件中电子常比温度计显示的晶格更热。弹道电子在磁场中沿回旋轨迹从一个孔到相邻孔，磁阻峰的幅度会被电子—电子散射削弱，因此可反推电子温度。',
    question: '能否用紧凑局域四端结构同时测电子温度、电子—电子散射长度和从弹道到流体动力学的转变？',
    workflow: ['在超高迁移率GaAs/AlGaAs上加工12个并联孔，间距3 μm', '以总100 nA交流、每孔8.33 nA测对称磁阻峰', '4.2–20 K标定峰幅和散射长度', '4.2 K叠加直流电流并把峰幅换算为电子温度'],
    findings: ['【直接实测】m=1,n=1主轨迹直径3 μm；反射一次/两次轨迹为1.5 μm等。', '【直接实测】A、B、C峰的共同交点分别到约20、12、8 K后开始失效。', '【直接实测】4.2 K的峰幅随直流偏置下降，换算后的电子温度近似随电流平方增长。', '【作者解释】15 K以下电子—声子散射受抑，峰衰减主要来自电子—电子碰撞；更高温假设破坏。', '【本站推断】同类自热校准可用于MTJ结温—WER，而不能直接套用GaAs数值。'],
    explanation: '磁阻曲线和温度/电流扫描是实测；散射长度和电子温度由模型反演；超弹道与散射机制是作者解释；迁移到MTJ是本站推断。',
    whyItMatters: ['避免把台温当成器件电子温度。', '给低噪声平台提供无需噪声温度计的交叉校准。'],
    researchConnection: '在MTJ旁布置温敏电阻/量子点或选取稳定非线性特征，做4–300 K、直流/纳秒脉冲、不同占空比和封装热阻DOE；空白金属线对照；同步记录TMR、RA、瞬态R、WER和恢复时间。设备需低温锁相、脉冲源、高速示波和热模型。',
    limitationsDetailed: '预印本；GaAs二维电子气；模型需电子—电子散射主导；未给MTJ尺寸、TMR、RA、临界电流、WER、保持或耐久。',
    terms: ['电子温度：描述电子分布的有效温度，可高于晶格温度。', '弹道输运：电子跨越器件时很少发生动量散射。', '超弹道电导：电子碰撞反而提高窄通道流量的流体动力学效应。'],
    takeaway: '图1→图2→图3→结论，45–60分钟；重点区分直接温度计与模型反演电子温度。'
  },
  {
    id: 'jap-140-013901',
    oneSentence: 'WTi不是越厚越好：有效自旋混合电导在3 nm达到4.2×10^18 m^-2峰值。',
    background: 'FMR驱动YIG磁化进动时会向相邻金属泵出自旋流，表现为额外阻尼；有效自旋混合电导衡量界面传递角动量的能力。',
    question: 'YIG和W90Ti10厚度如何共同决定自旋泵浦，Ti掺杂及结构相变化是增益还是损失？',
    workflow: ['制备YIG厚度系列并覆盖不同厚度WTi', '宽带FMR拟合频率—线宽和Gilbert阻尼', '扣除裸YIG阻尼', '与YIG/W对照并反演有效混合电导'],
    findings: ['【直接实测】5 nm WTi使薄YIG的Gilbert阻尼增加。', '【模型提取】5 nm WTi对应有效混合电导3.3×10^18 m^-2。', '【模型提取】3 nm WTi出现4.2×10^18 m^-2的非单调峰值。', '【直接比较】Ti掺杂相对纯W降低有效混合电导。', '【作者解释】WTi化学/结构相随厚度改变造成非单调性。'],
    explanation: 'FMR线宽和阻尼为直接测量/拟合；混合电导为模型提取；相变原因是作者解释；用于SOT-MTJ层厚优化是本站推断。',
    whyItMatters: ['证明合金厚度必须做细步长DOE。', '为界面与体相贡献提供纯W对照。'],
    researchConnection: '做W、W90Ti10、Ta三组×2–8 nm厚度×250–350 °C退火；XRD/XPS/TEM对照结构相和互扩散；FMR测阻尼/混合电导，SOT-Hall测效率，完整MTJ测TMR/RA/Jc/WER。',
    limitationsDetailed: 'YIG绝缘磁体和CoFeB金属自由层机制不同；摘要未公开完整沉积/温度/频率窗口，也无晶圆级均匀性、TMR、RA、Jc、WER、保持、耐久。',
    terms: ['自旋泵浦：磁化进动向邻层注入角动量。', '有效自旋混合电导：界面净自旋传输的模型参数。', 'Gilbert阻尼：磁化进动耗散强度。'],
    takeaway: '35–50分钟；先阻尼厚度图，再读3 nm峰值及相变解释。'
  },
  {
    id: 'prb-whhg-tfv4',
    oneSentence: '二维XY量子模拟把有限温自旋扩散常数从理论预测推进到定量实验校验。',
    background: 'XY模型保留平面内自旋交换，是研究自旋守恒与扩散的最简二维量子模型；扩散常数连接微观碰撞与宏观自旋流。',
    question: '二维强关联系统在有限温下是否真的进入扩散区，现代高温展开能否在长时间尺度与量子模拟器一致？',
    workflow: ['建立方格自旋1/2 XY模型', '动力学高温展开延伸到流体动力学时间', '光晶格硬核玻色子实现同一哈密顿量', '逐温度比较自旋扩散常数并预测动态电导'],
    findings: ['【理论预测】高温展开可覆盖二维长时扩散区。', '【直接实验+理论比较】量子模拟器提取的扩散常数与理论高度一致。', '【理论预测】可进一步测动态自旋电导。', '【理论预测】引入各向异性可研究可积性破坏。', '【证据边界】公开摘要未给数值端点，本站不补造。'],
    explanation: '扩散常数同时有实验提取和理论计算；一致性是直接比较；对MTJ热涨落模型的启发属于本站推断。',
    whyItMatters: ['示范复杂输运理论必须接受可编程实验的定量检验。', '为有限温扩散和动态电导提供严格概念框架。'],
    researchConnection: 'MTJ模型中逐级加入无序、界面SOC、各向异性和热噪声；用非局域自旋阀/FMR或泵浦实验提扩散系数做校验；变量为温度、层厚、无序和频率，对照为纯扩散极限。',
    limitationsDetailed: '冷原子系统没有声子、真实界面和电荷；APS公开页未给晶格尺寸、温度、耦合和误差范围；不能直接预测CoFeB自旋扩散长度、TMR或WER。',
    terms: ['XY模型：自旋主要在平面内交换的量子模型。', '高温展开：以逆温度为小参数的系统近似。', '硬核玻色子：每格最多一个粒子的玻色子，可映射到自旋1/2。'],
    takeaway: '40–55分钟；先看模型映射，再看扩散常数主图和动态电导展望。'
  },
  {
    id: 'rsi-97-031302',
    oneSentence: '非金属MFM头在2.7 K、35 T水冷磁体中实现成像，33 T频移噪声仍约60 mHz。',
    background: '超高磁场水冷磁体有强振动、电磁噪声和狭小孔径，金属扫描头还会产生涡流；MFM通过磁性探针的共振频移成像磁力梯度。',
    question: '如何在35 T连续爬场和亚3 K环境下保留足够低的频移噪声，并实空间观察磁畴？',
    workflow: ['设计非金属紧凑MFM头和高Q悬臂', '静态交换气氦恒温器隔离热与振动', '标定频移噪声随磁场变化', '2.7 K下对SrRuO3从0扫到35 T连续成像'],
    findings: ['【工程实测】工作温度低于3 K，最高磁场35 T。', '【直接实测】33 T频移噪声约60 mHz。', '【直接实测】典型磁信号大于200 mHz，仍高于噪声。', '【直接实测】SrRuO3在2.7 K、0–35 T显示磁畴演化。', '【作者解释】磁畴被铁弹畴锁定，非金属头与交换气环境抑制扰动。'],
    explanation: '噪声和磁畴图为实测；铁弹锁定为作者解释；用于MTJ边缘诊断是本站推断。',
    whyItMatters: ['把极端场下的磁状态从电阻间接信号变成实空间图像。', '给平台设计提供噪声必须低于目标信号的定量验收值。'],
    researchConnection: '先在标准磁膜做0–14 T、2–300 K噪声图，再测刻蚀前后自由层/大尺寸MTJ；变量为扫描头材料、Q值、交换气压、场爬升率和探针磁矩；指标为频移噪声、漂移、空间分辨率、畴壁钉扎与TMR同步。',
    limitationsDetailed: 'MFM探针可能扰动软磁层；摘要未给空间分辨率、扫描速度、温稳和长期漂移；35 T水冷磁体不适合晶圆生产。',
    terms: ['MFM：用磁性探针感测磁力梯度的扫描显微术。', '频移噪声：悬臂共振频率读出的随机波动。', '铁弹畴：由晶格应变取向形成、可钉扎磁畴的结构域。'],
    takeaway: '40–60分钟；先仪器剖面，再噪声谱与0–35 T磁畴序列。'
  },
  {
    id: 'apl-128-202901',
    oneSentence: '3 nm HZO的氧空位钉扎并非只能报废：单极负脉冲可恢复极化和隧穿窗口。',
    background: 'FTJ用铁电极化改变隧穿势垒；3 nm薄膜对氧空位和界面钉扎极敏感。循环疲劳会缩小记忆窗口，但受控脉冲可能重新分布缺陷。',
    question: '超薄HZO在高频和10 ns写入下能否通过电学方式恢复，而不增加厚度或重新退火？',
    workflow: ['构筑W/WOx/3 nm HZO/Pt', '测极化和隧穿电致电阻', '10^5/10^6 Hz双极循环施加疲劳', '单极负脉冲恢复并在10 ns编程下复测耐久'],
    findings: ['【直接实测】3 nm HZO剩余极化19 μC/cm²。', '【直接实测】双极循环耐久达3.7×10^9和4.53×10^10次。', '【直接实测】隧穿电致电阻比最高5.8×10^5。', '【直接实测】10 ns编程下恢复后耐久10^8次、窗口>13000。', '【作者解释】负脉冲释放界面钉扎的氧空位；【本站推断】MgO缺陷也可探索受控电恢复，但机制不能照搬。'],
    explanation: '极化、窗口和循环数是实测；氧空位释放为作者解释；迁移到磁隧道结是本站推断。',
    whyItMatters: ['把缺陷从静态坏点变成可测、可干预的动态状态。', '可靠性测试同时产出机理和恢复策略。'],
    researchConnection: '对MgO/CoFeB做双向偏压恢复DOE：未疲劳、疲劳无恢复、正/负恢复三对照；变量为脉宽、幅度、温度和占空比；指标为TMR、RA、I-V非线性、RTN、TDDB、WER和保持。需脉冲源、高速读出、低噪声谱与温控探针。',
    limitationsDetailed: 'FTJ与MTJ机制不同；摘要未给器件尺寸、沉积温度、电压端点、RA、写入能量与保持；高循环薄膜电容数据不等同完整阵列。',
    terms: ['隧穿电致电阻：铁电极化翻转引起的隧穿电阻比。', '氧空位钉扎：带电缺陷固定畴壁或界面极化。', '恢复脉冲：用于重排缺陷而非写数据的脉冲。'],
    takeaway: '35–50分钟；先堆栈和极化，再看疲劳—恢复、10 ns耐久与氧空位解释。'
  }
];

const report = read('reports.json');
report.reportDate = date; report.updatedAt = updatedAt;
report.papers = report.papers.filter((x) => !papers.some((p) => p.id === x.id)).concat(papers);
report.history = report.history.filter((x) => x.date !== date).concat([{
  date,
  label: '详细日报：电子温度校准—自旋界面厚度—有限温扩散—35 T磁成像—3 nm隧道缺陷恢复',
  total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: papers.map((x) => x.id)
}]);
write('reports.json', report);
write('paper-details.json', read('paper-details.json').filter((x) => !details.some((d) => d.id === x.id)).concat(details));

const review = {
  id: 'review-straintronic-computing-2026', kind: '每日综述', track: 'B', secondaryTracks: ['C', 'E'],
  title: 'Straintronic nanomagnetic computing', titleZh: '应变纳磁计算：从约100 aJ/bit写入到缺陷与误差挑战',
  authors: 'Md Mahadi Rajib, Shouvik Sarker, Dhritiman Bhattacharya, Jayasimha Atulasimha',
  venue: 'Applied Physics Letters 128, 150501 (2026)', published: '2026-04-13', recommendedOn: date,
  doi: '10.1063/5.0288178', url: 'https://pubs.aip.org/aip/apl/article/128/15/150501/3386904/Straintronic-nanomagnetic-computing', backupUrl: 'https://doi.org/10.1063/5.0288178',
  assistantSummary: '正式Perspective系统梳理压电层把电场转成应变、再通过逆磁致伸缩控制纳磁体和MTJ软层的路线；给出约100 aJ/bit潜力，并覆盖布尔、非布尔和神经形态器件。',
  whySelected: '它把今天的界面自旋输运、磁成像、缺陷可靠性与低功耗写入放到共同的“材料耦合—器件误差—计算架构”框架。',
  readingGuide: ['先读逆磁致伸缩和应变转移。', '再看MTJ与布尔器件。', '重点看缺陷、热误差和神经形态部分。', '最后审视100 aJ/bit的边界；70–90分钟。'], notNew: true
};

const classic = {
  id: 'classic-spin-pumping-2002', kind: '经典文章', track: 'B', secondaryTracks: ['C', 'D'],
  title: 'Spin pumping and magnetization dynamics in metallic multilayers', titleZh: '自旋泵浦与金属多层磁化动力学的经典理论',
  authors: 'Y. Tserkovnyak, A. Brataas, G. E. W. Bauer',
  venue: 'Physical Review B 66, 224403 (2002)', published: '2002-12-18', recommendedOn: date,
  doi: '10.1103/PhysRevB.66.224403', url: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.66.224403', backupUrl: 'https://doi.org/10.1103/PhysRevB.66.224403',
  assistantSummary: '该理论奠定了用磁化进动向相邻金属泵出自旋流、并以附加Gilbert阻尼表征界面角动量损失的框架，是今天YIG/WTi混合电导反演的理论根基。',
  whySelected: '与B类厚度实验直接成对阅读，能看清“线宽实测—阻尼拟合—混合电导模型”三层证据。',
  readingGuide: ['先看自旋泵浦边界条件。', '再看混合电导和反向作用。', '重点看附加阻尼的厚度关系。', '最后与YIG/WTi数值对照；35–50分钟。'], notNew: true
};

const curatedDetails = [
  {
    id: review.id, oneSentence: review.assistantSummary,
    background: '电场在压电体中产生应变，应变传入磁致伸缩纳磁体后改变磁各向异性，因此可用极少电荷控制磁状态。',
    question: '应变写入能否从单磁体演示扩展到可靠的存储、逻辑和神经形态计算？',
    workflow: ['梳理压电—磁致伸缩耦合', '比较纳磁体和MTJ结构', '覆盖布尔/非布尔/神经形态器件', '总结缺陷、热涨落和电路挑战'],
    findings: ['【综述归纳】应变写入能耗潜力约100 aJ/bit。', '【综述归纳】逆磁致伸缩可调MTJ软层磁状态。', '【综述归纳】器件已覆盖逻辑、存储和神经形态方案。', '【证据边界】能耗来自特定方案，不代表阵列外围电路总能耗。'],
    explanation: '这是Perspective的综合结论，不是单一量产阵列的实测证明。',
    whyItMatters: [review.whySelected],
    researchConnection: '在同一MTJ上联测应变、TMR、RA、Jc、WER与保持；变量为压电厚度、电极几何、应变转移效率和缺陷，对照为无压电层与电流写入。',
    limitationsDetailed: '材料疲劳、应变不均匀、热涨落、CMOS电压、阵列互扰和封装应力仍需验证；约100 aJ/bit不能外推为系统能耗。',
    terms: ['逆磁致伸缩：应力改变磁各向异性。', '应变转移效率：压电层形变实际传到磁层的比例。'],
    takeaway: review.readingGuide.join(' ')
  },
  {
    id: classic.id, oneSentence: classic.assistantSummary,
    background: '进动磁体可向相邻导体输运角动量，反作用表现为阻尼增加；界面自旋混合电导把散射矩阵与可测线宽连接起来。',
    question: '如何从量子散射出发推导自旋泵浦，并预测多层膜磁化动力学的附加阻尼？',
    workflow: ['建立界面散射矩阵', '推导进动磁化泵出的自旋流', '加入自旋回流', '映射到Landau–Lifshitz–Gilbert方程的附加阻尼'],
    findings: ['【理论预测】磁化进动可在无电荷偏压下泵出自旋流。', '【理论预测】净角动量损失增加Gilbert阻尼。', '【理论预测】效应由混合电导、非磁层自旋弛豫与磁层厚度共同决定。', '【证据边界】理论参数必须由具体界面实验校准。'],
    explanation: '全部为理论推导；今天B类FMR实验是具体材料验证，不应把模型参数当直接实测。',
    whyItMatters: [classic.whySelected],
    researchConnection: '用FMR厚度系列同时拟合本征阻尼、两磁子散射和泵浦项；加入惰性间隔层及温度对照，并用逆自旋Hall电压交叉验证。',
    limitationsDetailed: '理想界面与扩散近似不能完整覆盖粗糙、互扩散、SOC、自旋记忆损失和纳米器件非均匀模式。',
    terms: ['自旋回流：未在非磁层耗散的自旋返回磁层。', '混合电导：界面对横向自旋相干吸收的复数参数。'],
    takeaway: classic.readingGuide.join(' ')
  }
];

const curated = read('curated-reading.json');
curated.items = curated.items.filter((x) => ![review.id, classic.id].includes(x.id)).concat([review, classic]);
curated.history = curated.history.filter((x) => x.date !== date).concat([{ date, reviewId: review.id, classicIds: [classic.id] }]);
write('curated-reading.json', curated);
write('curated-details.json', read('curated-details.json').filter((x) => !curatedDetails.some((d) => d.id === x.id)).concat(curatedDetails));
write('daily-reading.json', { date, review, classics: [classic] });

const insightBase = (id, type, typeZh, title, relatedPaperIds, summary) => ({
  id, date, type, typeZh, trackLabel: type === 'opportunity' ? 'A/B · 结温与自旋界面' : type === 'method' ? 'C/D · 模型—成像闭环' : 'B/E · 界面与缺陷恢复',
  title, subtitle: summary, summary, status: '本站组合推断，待实验验证', relatedPaperIds,
  question: type === 'opportunity' ? '电子温度和自旋透明度如何共同决定低温写入分布？' : type === 'method' ? '如何让有限温模型接受实空间磁畴和电学的联合校验？' : '能否用受控脉冲恢复隧道势垒缺陷而不牺牲保持？',
  rationale: '由今日直接实测或理论结果组合形成，尚未在同一MTJ平台验证。',
  workflow: type === 'opportunity' ? ['建立电子温度校准', '制备重金属厚度系列', '同步测FMR/TMR/RA', '脉冲写入统计WER与恢复'] : type === 'method' ? ['有限温模型预测磁畴/扩散', '2–300 K电学测量', '低温MFM实空间成像', '比较位置、时间与输运系数'] : ['制造MgO/CoFeB见证片', '电疲劳至可控退化', '正/负恢复脉冲矩阵', 'TEM-EELS/RTN/TMR/保持复核'],
  equipment: type === 'opportunity' ? ['低温锁相与脉冲源', 'FMR/TR-MOKE', '高速示波与热模型'] : type === 'method' ? ['低温矢量磁体', 'MFM', '高速电学与模拟服务器'] : ['脉冲参数分析仪', 'TEM-EELS', '低频噪声与温控探针'],
  measurements: type === 'opportunity' ? ['电子温度', '阻尼/混合电导', 'TMR/RA/Jc/WER'] : type === 'method' ? ['扩散常数', '磁畴位置', '频移噪声', '电阻/磁滞'] : ['TMR/RA', 'RTN陷阱', 'TDDB', '保持/耐久'],
  metrics: type === 'opportunity' ? ['结温误差<校准不确定度', '混合电导3σ', 'WER长尾'] : type === 'method' ? ['模型—实测一致率', '60 mHz级噪声基线', '空间/时间分辨率'] : ['恢复率', 'TMR保留率', '保持无退化', '循环寿命'],
  evidenceBoundary: '跨材料迁移属于本站推断；所有数值必须在CoFeB/MgO器件上重新测量。',
  firstSteps: type === 'opportunity' ? ['先校准台温—电子温度', '再做3/5 nm材料对照', '最后进入纳米MTJ'] : type === 'method' ? ['标准磁膜验收噪声', '再做大尺寸器件', '最后联测纳米MTJ'] : ['先用见证电容验证极性', '再做MTJ小样本', '通过保持后才扩大统计'],
  researchConnection: '连接原子制造、MTJ/MRAM、低温输运与设备平台。',
  takeaway: summary
});

const insights = [
  insightBase('2026-08-14-electron-temp-spin-interface', 'opportunity', '研究机会', '电子温度—界面透明度—WER联合标定', ['arxiv-2608-06708', 'jap-140-013901'], '不要只用台温解释写入；把电子温度和自旋混合电导同时纳入WER模型。'),
  insightBase('2026-08-14-diffusion-mfm-loop', 'method', '设备与测量平台', '有限温扩散—35 T磁成像—电学联合平台', ['prb-whhg-tfv4', 'rsi-97-031302'], '用模型预测、MFM实空间图和电阻三路互证磁输运。'),
  insightBase('2026-08-14-interface-recovery', 'atomic', '原子与极端制造', 'MgO界面缺陷的脉冲诊断与恢复路线', ['jap-140-013901', 'apl-128-202901'], '借鉴HZO氧空位恢复，但在MgO/CoFeB中重新验证极性、保持和自旋隧穿机制。')
];

const archive = read('insight-archive.json');
archive.items = archive.items.filter((x) => !insights.some((y) => y.id === x.id)).concat(insights);
archive.history = archive.history.filter((x) => x.date !== date).concat([{ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }]);
write('insight-archive.json', archive);

console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
