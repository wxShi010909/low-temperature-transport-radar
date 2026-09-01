import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-09-01';
const updatedAt = '2026-09-01T09:00:00+08:00';

const papers = [
  {
    id: 'apl-129-083103', track: 'A', secondaryTracks: ['B', 'D'],
    title: 'Uniaxial strain-induced spin zero effect in ZrTe5', titleZh: '单轴应变诱导ZrTe₅自旋零点：用SdH振幅节点区分Zeeman相位与Berry相位',
    authors: 'Peipei Wang, Xinmin Wang, Lingxiao Zhao, Ziyue Qi, Alei Li, Long Cheng, Ziheng Sun, Chengying Liu, Hongming Weng, Xi Dai, Quansheng Wu, Liyuan Zhang',
    venue: 'Applied Physics Letters 129, 083103 (2026)', published: '2026-08-28', recommendedOn: date, timeTier: '四日前正式发表',
    system: 'ZrTe5单晶低温输运样品，沿晶体a轴施加连续可调拉伸应变；公开HTML未给样品厚度、接触金属、应变百分比和载流子密度。',
    conditions: '在拉伸应变下测Shubnikov–de Haas量子振荡并作Landau fan分析。公开页面未给最低温度、最高磁场、扫场速率和应变标定误差，均标为原文公开页面未公开。',
    methods: ['沿a轴施加原位单轴拉伸应变', '测磁阻并提取SdH振荡幅值和相位', '追踪振幅节点与振荡符号反转', '用Landau fan截距检验Berry相位是否改变'],
    summary: '应变调谐使SdH振幅出现节点并反相，而Landau fan截距仍接近π Berry相位；作者据此把反相归因于Zeeman分裂轨道的相对相位，而不是全局拓扑相变。',
    relevance: '方法可迁移到MTJ封装应力、BEOL应变和磁性层磁弹耦合：同时看幅度节点、相位和独立结构标定，避免把应力引起的相位重排误判成界面拓扑或磁相改变。',
    limitation: '材料不是MTJ；摘要没有温度、磁场、应变、器件尺寸等量值；对极值费米面分裂和自旋几何相位的解释依赖模型，不能直接外推CoFeB/MgO。',
    industrialization: '处于应变低温计量方法阶段；距离可制造器件还缺晶圆应力图、封装前后对照、器件级TMR/RA/WER关联、温循和批次GR&R。',
    whyRecommended: '先看SdH振幅随应变的节点/反相图，再看Landau fan截距，最后读Zeeman轨道相位模型；35–50分钟。',
    score: 9.2, priority: 'A', doi: '10.1063/5.0348138',
    url: 'https://pubs.aip.org/aip/apl/article/129/8/083103/3403274/Uniaxial-strain-induced-spin-zero-effect-in-ZrTe5', backupUrl: 'https://doi.org/10.1063/5.0348138',
    accessNote: '已打开AIP正式HTML，核验题名、作者、2026-08-28、DOI、a轴拉伸、SdH节点/反相和Landau fan结论；页面未公开量值不补写。', featured: true
  },
  {
    id: 'nr-94908447', track: 'B', secondaryTracks: ['D', 'E'],
    title: 'Unveiling the endurance limit of SOT-MRAM with CoFeB/MgO/CoFeB junctions: From elemental interdiffusion to array-level reliability', titleZh: 'CoFeB/MgO/CoFeB SOT‑MRAM耐久极限：从写入自热与元素互扩散到2 Kb阵列可靠性',
    authors: 'Chuanpeng Jiang, Jinhao Li, Chao Wang, Shiyang Lu, Xingyu Yao, Wenlong Cai, Danrong Xiong, Xiaofei Fan, Hong-Xi Liu, Gefei Wang, He Zhang, Kaihua Cao, Zhaohao Wang, Weisheng Zhao',
    venue: 'Nano Research 19(7), 94908447 (2026)', published: '2026-05-06', recommendedOn: date, timeTier: '近期正式发表',
    system: 'CoFeB/MgO/CoFeB磁隧道结与SOT写入通道组成的2 Kb SOT-MRAM阵列。可访问摘要未公开完整种子层/自旋源/钉扎层堆栈、MgO/CoFeB厚度、结CD、TMR与RA。',
    conditions: '对2 Kb阵列进行不同写电压和热应力循环；公开摘要报告写入期间SOT通道焦耳升温超过180 K，并在优化通道材料和缩短通道后于125 °C验证耐久超过10^18次。脉宽、电压、占空比和失效判据未公开。',
    methods: ['在2 Kb阵列上扫描写电压与热应力循环', '分析失效与MTJ元素互扩散/热退化', '量化SOT通道写入自热', '优化通道材料并缩短通道长度', '在125 °C重复阵列耐久测试'],
    summary: '主要失效来自MTJ热驱动元素互扩散；写入通道焦耳升温超过180 K。降低通道热负担后，125 °C阵列耐久超过10^18次，高于作者采用的≥10^17“近无限耐久”目标。',
    relevance: '本日最高优先级：它把CoFeB/MgO界面、B/金属扩散、线长/材料、写入自热和阵列耐久放进同一条可制造因果链，直接服务SOT‑MRAM工艺与可靠性。',
    limitation: '180 K是报告的写入温升而非绝对结温；公开摘要没有完整堆栈、CD、TMR、RA、脉宽、WER、保持、读扰、失效分布和加速模型，不能据此宣称产品量产。',
    industrialization: '最接近阵列级耐久与热设计；已有2 Kb、125 °C和>10^18次，但仍缺大阵列、多晶圆/多批次、PVT、ECC、10年保持、写错误率尾部、BEOL热预算和封装热阻验证。',
    whyRecommended: '先看2 Kb耐久/失效图，再看温升与互扩散证据，最后看通道材料/长度优化；50–70分钟，优先核对加速模型。',
    score: 10, priority: 'S', doi: '10.26599/NR.2026.94908447',
    url: 'https://www.sciopen.com/article/10.26599/NR.2026.94908447', backupUrl: 'https://doi.org/10.26599/NR.2026.94908447',
    accessNote: '已打开SciOpen正式页面，核验作者、2026-05-06、2 Kb、>180 K温升、125 °C与>10^18次；未把温升误写成绝对温度。', featured: true
  },
  {
    id: 'prb-114-l080101', track: 'C', secondaryTracks: ['B', 'E'],
    title: 'The polarization of hafnia ferroelectrics is not a bulk property', titleZh: 'HfO₂铁电极化不是孤立体相常数：同一极性原子层可因界面环境产生相反退极化场',
    authors: 'Binayak Mukherjee, Xabier Diaz de Cerio, Iñigo Robredo-Magro, Natalya S. Fedorova, Jorge Íñiguez-González',
    venue: 'Physical Review B 114, L080101 (2026)', published: '2026-08-20', recommendedOn: date, timeTier: '两周内正式计算论文',
    system: 'HfO2铁电结构及其不同电学/原子环境；对固定极性HfO2原子层进行第一性原理比较。公开摘要未给超胞、相结构厚度、电极终止或场强数值。',
    conditions: '第一性原理计算同一极性层在不同环境中的局域极化/退极化场。无实验温度、磁场、器件尺寸、耐久或保持数据。',
    methods: ['构造固定极性HfO2原子层', '改变其周围界面/电学环境', '由第一性原理计算局域响应与退极化场', '比较场方向并检验体相极化定义'],
    summary: '同一极性HfO2原子层可因环境产生正或负退极化场，因此作者认为hafnia的“体相极化”并非良定义的内禀常数，而具有环境依赖的外禀性。',
    relevance: '对HZO铁电隧道结、VCMA/多铁耦合和原子层界面建模尤其关键：电极终止、邻层和缺陷必须进入模型，不能只用一个体相P值解释器件。',
    limitation: '这是理论论证；公开摘要缺相型、厚度、终止与定量场强，也未提供器件实测。不能直接外推到MgO/CoFeB磁隧穿或商业HZO工艺。',
    industrialization: '位于界面感知的材料模型环节；还缺真实电极/缺陷/应力、有限温度、晶粒统计、泄漏、循环退化及晶圆电学标定。',
    whyRecommended: '先读核心反例图，再看局域极化/退极化场定义，最后读对连续体模型的限制；35–50分钟。',
    score: 9.6, priority: 'S', doi: '10.1103/dssv-gsq9',
    url: 'https://journals.aps.org/prb/abstract/10.1103/dssv-gsq9', backupUrl: 'https://doi.org/10.1103/dssv-gsq9',
    accessNote: '已打开APS正式页，核验作者、2026-08-20、DOI、第一性原理方法和环境依赖退极化场结论。', featured: true
  },
  {
    id: 'qd-opticool', track: 'D', secondaryTracks: ['A', 'B'],
    title: 'OptiCool Cryogen-free Optical Cryostat', titleZh: 'Quantum Design OptiCool低振动光学低温平台：1.7–350 K、7 T或4‑1‑1 T矢量场',
    authors: 'Quantum Design North America', venue: 'Quantum Design vendor technical material', published: '原网页未公开', recommendedOn: date, timeTier: '厂商技术资料（非科研证明）',
    system: '无液氦光学低温恒温器系列：7 T分裂锥形超导磁体、4‑1‑1 T矢量磁体或无磁体Flex；自动温度/磁场控制，面向光学、电学和磁性测量。',
    conditions: '厂商标称1.7–350 K、振动<10 nm峰峰值；7 T版为±7 T、3 cm DSV内均匀度±0.3%、8个光学端口，矢量版为±4 T(z)/±1 T(x,y)、5端口。需FAT/SAT复核。',
    methods: ['闭循环制冷并自动控制1.7–350 K', '在7 T或4‑1‑1 T矢量磁场下原位光/电/磁测量', '利用侧向与顶部高NA光路接显微/光谱', '以标准样品验收振动、温场、磁场和电噪声'],
    summary: '厂商提供低振动、宽温区和多光口磁光平台；7 T版样品空间84×89 mm，Flex无磁体版为75×200 mm并提供4 K热总线。',
    relevance: '适合MTJ磁畴/Kerr、磁光泵浦、矢量场翻转和封装应力成像，可把磁结构与TMR异常关联；但电流脉冲、低噪声引线和阵列吞吐需单独设计。',
    limitation: '全部性能来自厂商网页，非同行评议证据；网页未给冷却时间、样品实际振动频谱、温度稳定度、底噪、线数、脉冲带宽、价格和第三方复现。',
    industrialization: '接近研发设备采购与故障分析平台；需用标准电阻/Hall片/MTJ dummy执行FAT/SAT，核验热锚、电噪声、磁滞、自动恢复、脚本审计和跨日GR&R。',
    whyRecommended: '先看三种磁体配置，再看光口/样品空间与振动声明；把电学feedthrough和实测噪声列为询价必问；20–30分钟。',
    score: 9.3, priority: 'A', doi: '', url: 'https://qdusa.com/products/opticool.html', backupUrl: 'https://qdusa.com/products/opticool.html',
    accessNote: '已打开Quantum Design官方产品页并核验温区、磁场、振动、端口、均匀度和样品空间；明确标为厂商技术资料。', featured: true
  },
  {
    id: 'jva-44-053402', track: 'E', secondaryTracks: ['B', 'D'],
    title: 'Structural, mechanical, and electrical properties of magnetron-sputtered HfO2/SiO2 stacks', titleZh: '磁控溅射HfO₂/SiO₂：压力与厚度共同控制结晶、应力、固定电荷和界面态',
    authors: 'Vl. Kolkovsky, E. Kurth', venue: 'Journal of Vacuum Science & Technology A 44, 053402 (2026)', published: '2026-08-03', recommendedOn: date, timeTier: '近一个月正式发表',
    system: 'n-Si（约2 Ω·cm）/热氧化SiO2（30±1或60±2 nm）/RF溅射HfO2；电测结构为Al(500 nm, 0.25 mm²)/HfO2/SiO2/Si MOS电容。',
    conditions: 'HfO2陶瓷靶99.99%，靶基距12 cm，1800 W，O2/Ar=1:45，约25 °C、约1 nm/s；压力0.2–5 Pa与厚度16–193 nm。部分样品950 °C O2 20 min+Ar 10 min，之后440 °C forming gas 2 h；C–V/G–V为室温100 kHz。',
    methods: ['系统扫描溅射压力和HfO2厚度', 'XRD/SEM表征相与晶粒', '晶圆弯曲测应力并做退火序列', 'Al电容C–V/G–V提取固定电荷和界面态', '用多晶圆复现检查工艺稳定性'],
    summary: '室温沉积即可能部分结晶；高压力促进单斜相。193 nm膜压应力约−1500 MPa，950 °C后转为600–1100 MPa拉应力；固定电荷−6.6×10^10 cm−2至近零，Dit由<70 nm时<5×10^10增至193 nm约8×10^12 cm−2eV−1。',
    relevance: '直接连接磁控溅射、原子/界面缺陷、电荷与应力计量；可把“压力—厚度—晶相—应力—Dit”模板迁移到HZO隧道结和MTJ封装介质的DOE。',
    limitation: '对象是ISFET用厚HfO2/SiO2，不是超薄HZO铁电或MgO势垒；950 °C不符合后端热预算，193 nm结论不能直接外推1–3 nm隧穿层。',
    industrialization: '接近可放大的溅射介质模块，作者报告独立批次±10%复现；仍缺全片映射、颗粒、漏电/击穿、TDDB、薄层极限、低温电学和BEOL兼容。',
    whyRecommended: '先看图5压力—非晶临界厚度，再看图6/7应力转变，最后看固定电荷和Dit；55–75分钟。',
    score: 9.8, priority: 'S', doi: '10.1116/6.0005594',
    url: 'https://pubs.aip.org/avs/jva/article/44/5/053402/3400150/Structural-mechanical-and-electrical-properties-of', backupUrl: 'https://doi.org/10.1116/6.0005594',
    accessNote: '已打开AIP/AVS全文，核验作者、日期、堆栈、压力/功率/气比/退火、XRD/应力/C–V/G–V及公开定量数据。', featured: true
  }
];

const details = [
  ['apl-129-083103','SdH量子振荡来自Landau量子化；Zeeman分裂可让两套自旋轨道的振荡相消，出现“自旋零点”。Berry相位反映波函数几何性质，不能只凭一次符号反转判断。','应变造成的SdH反相到底来自Berry相位改变，还是Zeeman分裂轨道的相对相位？',['【直接实测】a轴拉伸使SdH振幅连续变化并出现节点。','【直接实测】过节点后振荡符号反转。','【直接实测】Landau fan截距仍接近π Berry相位。','【作者解释】极值费米面面积分裂和自旋依赖几何相位改变Zeeman分裂轨道的相对相位。','【本站推断】可作为器件封装/BEOL应力敏感性诊断，但不能当MTJ机制证明。'],'变量：单轴应变、温度和磁场角度；对照：零应变、卸载回线、横向应变；指标：R–T、SdH频率/幅值/相位、Landau截距、应变滞后。设备：低温磁体、原位应变台、锁相和独立应变计。'],
  ['nr-94908447','SOT-MRAM把写电流放在横向自旋源中，理论上减轻MgO读写共路损伤；但通道焦耳热会传给MTJ并加速CoFeB/MgO附近B与金属互扩散。耐久必须在阵列和高温下验证。','2 Kb SOT-MRAM的真实耐久上限由什么控制，怎样通过通道热设计把它推过10^18次？',['【阵列实测】循环失效主要与MTJ热驱动元素互扩散相关。','【直接测量/热分析】写入时SOT通道焦耳升温超过180 K；这是温升，不是绝对温度。','【工艺—器件关联】通道材料与长度决定热负担和失效速度。','【阵列实测】优化后125 °C耐久超过10^18次。','【作者判据】该值超过边缘计算“近无限耐久”≥10^17目标；产品级外推仍需公开加速模型。'],'变量：通道材料/长度/宽度、脉宽、电压、占空比、环境温度；对照：等电阻不同热导、等温升不同线长、无写入热存储；指标：结温、TMR/RA、SIMS/TEM-EELS互扩散、WER、耐久分布、保持和读扰。设备：高速脉冲、热反射/电阻温标、自动阵列台、截面分析。'],
  ['prb-114-l080101','传统铁电把极化视为体相材料常数；超薄hafnia中，电极屏蔽、相邻层、终止和缺陷会重塑局域电场。退极化场是未完全屏蔽束缚电荷产生、通常反向于极化的场。','固定同一极性原子层时，能否定义与环境无关的HfO2体相极化？',['【理论预测】同一固定极性HfO2原子层可在不同环境中产生相反方向退极化场。','【理论推论】以单一体相极化值描述hafnia并非普遍良定义。','【作者解释】极化表现对周围原子/电学环境具有外禀依赖。','【证据边界】公开摘要没有相型、层厚、终止和定量场强。','【本站推断】HZO/电极界面DOE和模型需成对定义，不能单独优化“体相P”。'],'变量：电极材料/终止、Hf:Zr、氧空位、应力与厚度；对照：同一原子层不同环境、对称/非对称电极；指标：局域极化、退极化场、P–E、C–V、漏电、保持/耐久和TEM-EELS。先DFT筛选，再用真实电容/隧道结标定。'],
  ['qd-opticool','低温磁光平台必须同时控制温度、磁场、振动、光路和电引线。峰峰振动、磁场均匀区和数值孔径直接决定显微/光谱分辨率；厂商目录规格仍需在目标配置和样品负载下验收。','OptiCool能否成为MTJ磁畴—电输运联合诊断平台，且怎样把厂商规格转为可复现FAT/SAT？',['【厂商标称】温区1.7–350 K，振动<10 nm峰峰值。','【厂商标称】7 T版为±7 T，3 cm DSV内均匀度±0.3%，8个光口。','【厂商标称】矢量版为±4 T(z)、±1 T(x/y)，5个光口。','【厂商标称】7 T/矢量版样品空间84×89 mm；Flex为75×200 mm并有4 K热总线。','【证据边界】上述均为厂商资料，未由独立论文验证。'],'变量：T/H扫速、光功率、样品台负载、线缆和滤波；对照：标准电阻、Hall片、Kerr标准样、MTJ dummy；指标：底噪谱、温稳、磁滞、振动频谱、光斑漂移、跨日GR&R和脉冲串扰。'],
  ['jva-44-053402','溅射粒子能量、碰撞和到达通量随压力变化；膜越厚，晶粒、孔隙和内应力会演化。固定电荷影响阈值漂移，界面态密度Dit反映绝缘层/界面电活性缺陷。','压力和厚度怎样共同决定室温溅射HfO2的结晶、应力与电性缺陷？',['【直接实测】0.2 Pa时非晶可保持到约90 nm，接近10 Pa时临界厚度降至约20 nm；<0.2 Pa有等离子体不稳，>4 Pa颗粒增多。','【直接实测】35–127 nm晶粒约6.8–9.5 nm；950 °C后54 nm样品约10.2 nm。','【直接实测】约190–193 nm压应力达−1500 MPa；950 °C后转为约600–1100 MPa拉应力。','【直接实测】固定电荷−6.6×10^10 cm−2至近零；Dit从<5×10^10升至约8×10^12 cm−2eV−1。','【作者解释】厚度/压力改变成核、晶界与残余应力，退火结晶和应力反转增加界面缺陷。'],'变量：0.2/0.8/2/3/5 Pa、16–193 nm、退火温度/气氛；对照：ALD HfO2、无退火、低厚度；指标：XRD/SEM/AFM、晶圆弯曲、C–V/G–V、漏电/TDDB、片内3σ和颗粒。迁移到MTJ时先做1–10 nm见证片并限制BEOL温度。']
].map(([id,background,question,findings,researchConnection]) => {
  const p = papers.find(x => x.id === id);
  return { id, oneSentence:p.summary, background, question, workflow:p.methods, findings,
    explanation: id === 'prb-114-l080101' ? '结果为第一性原理理论预测；“环境决定场方向”为作者论证，迁移到HZO/MTJ工艺是本站推断。' : id === 'qd-opticool' ? '参数均来自厂商产品页，只能作为选型和验收输入，不能当作科研性能证明。' : '直接实测、作者解释和本站推断已在发现中逐条标记；公开来源没有的数据明确留空。',
    whyItMatters:[p.relevance,p.industrialization], researchConnection, limitationsDetailed:p.limitation,
    terms: id === 'apl-129-083103' ? ['自旋零点：两套Zeeman分裂量子振荡恰好相消的幅度节点。','Landau fan：用振荡级次与1/B线性关系估计相位截距。'] : id === 'nr-94908447' ? ['耐久：存储单元可承受的成功写循环数。','WER：写错误率，平均耐久高不代表低概率尾部合格。'] : id === 'prb-114-l080101' ? ['退极化场：不完全屏蔽的束缚电荷产生、削弱极化的内部场。','局域极化：按原子层/局域结构分解的电偶极响应。'] : id === 'qd-opticool' ? ['DSV：定义磁场均匀度的球形体积。','NA：数值孔径，决定集光能力和空间分辨率。'] : ['固定电荷：绝缘层内不随小信号快速交换的净电荷。','Dit：单位面积、单位能量的界面态密度。'], takeaway:p.whyRecommended };
});

const review = {
  id:'review-mram-versatile-2026', kind:'每日综述', track:'B', secondaryTracks:['C','E'], title:'MRAM: A Versatile Non-Volatile Memory for Next-Generation Computing Applications', titleZh:'MRAM全景综述：从MTJ、STT/SOT/VCMA到阵列、计算与产业化约束',
  authors:'Zhihan Wang, Haiwen Li, Sheng Jiang', venue:'Nanomaterials 16(13), 816 (2026)', published:'2026-07-01', recommendedOn:date, doi:'10.3390/nano16130816',
  url:'https://www.mdpi.com/2079-4991/16/13/816', backupUrl:'https://doi.org/10.3390/nano16130816',
  assistantSummary:'正式综述系统梳理MTJ相干隧穿、STT/SOT/VCMA写入、MRAM阵列与新型计算应用，并讨论速度、功耗、密度、保持、耐久和CMOS集成的权衡。',
  whySelected:'为本日耐久论文提供全栈坐标：材料互扩散和通道自热最终要落到写错误、保持、阵列外围与制造成本，而不能只看循环数。',
  readingGuide:['先看MRAM技术路线与MTJ结构总图。','比较STT、SOT和VCMA写入的电流路径与可靠性。','重点读阵列/外围、规模化和商业化障碍。','最后把综述指标表与2 Kb耐久论文逐项对照；70–90分钟。'], notNew:true
};
const classic = {
  id:'classic-jap-105-033916', kind:'经典文章', track:'B', secondaryTracks:['E'], title:'Annealing of CoFeB/MgO based single and double barrier magnetic tunnel junctions: Tunnel magnetoresistance, bias dependence, and output voltage', titleZh:'CoFeB/MgO单/双势垒MTJ退火经典：TMR、偏压对称性与输出电压的工艺窗口',
  authors:'G. Feng, Sebastiaan van Dijken, J. F. Feng, J. M. D. Coey, T. Leo, David J. Smith', venue:'Journal of Applied Physics 105, 033916 (2009)', published:'2009-02-11', recommendedOn:date,
  doi:'10.1063/1.3068186', url:'https://pubs.aip.org/aip/jap/article/105/3/033916/383720/Annealing-of-CoFeB-MgO-based-single-and-double', backupUrl:'https://doi.org/10.1063/1.3068186',
  assistantSummary:'Co40Fe40B20/MgO单/双势垒分别用dc磁控溅射和target-facing-target势垒沉积；800 mT场退火后室温TMR达230%/120%，350 °C后偏压曲线近对称，300 °C时输出0.65/0.85 V。',
  whySelected:'它给今日耐久研究一个必要的历史基线：退火既决定CoFeB结晶和TMR，也改变偏压不对称；更高循环数若以界面互扩散和读窗损失为代价并不等于更可靠。',
  readingGuide:['先看单/双势垒堆栈和沉积法。','再看退火温度—TMR。','重点看偏压对称性与0.65/0.85 V输出。','最后思考现代pMTJ中B扩散与BEOL窗口；35–50分钟。'], notNew:true
};
const curatedDetails = [
  {id:review.id,oneSentence:review.assistantSummary,background:'MRAM以磁化方向存储信息，MgO/CoFeB MTJ负责电阻读出；STT让电流穿过势垒，SOT把写电流移到相邻自旋源，VCMA用电场调各向异性。不同路线在密度、能耗、速度与可靠性间权衡。',question:'怎样从材料、写入物理、阵列和应用层统一比较MRAM，而不是只比较单器件最佳值？',workflow:['梳理MTJ与TMR基础','比较STT/SOT/VCMA写入','整理阵列与外围电路','讨论新计算应用与产业障碍'],findings:['【综述归纳】MgO相干隧穿是主流MRAM读出基础。','【综述归纳】STT密度高但写电流经过势垒；SOT分离读写并提高速度/耐久但面积和三端集成更难。','【综述归纳】VCMA可降能耗但写窗与保持需协同。','【综述归纳】产品评价必须同时看WER、保持、耐久、阵列和CMOS/BEOL。','【证据边界】跨论文演示条件不同，不能横向拼接成单一可量产指标。'],explanation:'这是正式综述的跨文献归纳，不是单一晶圆实测；具体器件指标应回到原始论文。',whyItMatters:[review.whySelected],researchConnection:'建立统一表：CD、TMR、RA、Ic/Jc、脉宽、WER、Δ/保持、耐久、温度、阵列规模、晶圆尺寸与BEOL温度；缺项一律标“原文未公开”。',limitationsDetailed:'综述覆盖面广但无法替代每项原始数据、批次统计和产品资格报告；商业成本与良率细节通常不公开。',terms:['STT：由穿过MTJ的自旋极化电流施加转矩。','SOT：相邻自旋源中的面内电流产生自旋流/轨道流写磁体。'],takeaway:review.readingGuide.join(' ')},
  {id:classic.id,oneSentence:classic.assistantSummary,background:'CoFeB沉积时常为非晶，退火后在MgO模板上结晶形成Δ1相干隧穿；但双势垒中间自由层可能难以充分结晶，且高温会加剧B/金属扩散。偏压对称性反映两侧界面是否等价。',question:'单/双MgO势垒的退火怎样同时改变室温TMR、偏压对称性和可用输出？',workflow:['dc溅射CoFeB电极','target-facing-target溅射MgO势垒','在800 mT场中分温度退火','测室温TMR、偏压依赖和输出电压'],findings:['【直接实测】场退火后单/双势垒TMR分别230%/120%。','【作者解释】双势垒较低TMR来自中间CoFeB自由层仍较非晶。','【直接实测】随退火升温，偏压不对称减弱，350 °C后近对称。','【直接实测】300 °C退火时单/双势垒最大输出0.65/0.85 V。','【证据边界】2009平面MTJ结果不能直接代表现代纳米pMTJ、SOT阵列或10年保持。'],explanation:'TMR、偏压和输出为直接实测；中间层结晶解释为作者解释；对现代B扩散/BEOL窗口的应用是本站推断。',whyItMatters:[classic.whySelected],researchConnection:'变量：250–400 °C退火温度、时间、场和升降温；对照：单/双势垒、不同B扩散阻挡层；指标：TMR/RA、Vhalf/偏压对称、PMA/Δ、SIMS/TEM-EELS、1/f噪声、WER与耐久。',limitationsDetailed:'正式页面公开摘要未给完整层厚、结尺寸、RA、退火时间、保持、WER和耐久；不能从最佳TMR推断阵列良率。',terms:['Δ1通道：MgO(001)中衰减较慢、产生高自旋选择性的对称电子态。','偏压不对称：正负偏压下TMR衰减不同，常提示两侧界面/电极不等价。'],takeaway:classic.readingGuide.join(' ')}
];

const insights = [
  {id:'2026-09-01-thermal-endurance-map',date,type:'opportunity',typeZh:'研究机会',trackLabel:'B · SOT‑MRAM可靠性',title:'把写入温升、互扩散和WER尾部做成同一张耐久相图',subtitle:'线长/材料/脉宽与环境温度四维DOE，连接瞬态结温、B/金属扩散、TMR/RA漂移和阵列失效分布。',summary:'把“>10^18次”升级为带热史、失效模式和置信区间的可制造可靠性证据。',status:'本站组合推断，待用户阵列验证',relatedPaperIds:['nr-94908447','classic-jap-105-033916','jva-44-053402'],question:'耐久尾部由瞬态峰值温度、累计热剂量还是特定界面扩散先触发？',rationale:'新论文给阵列耐久/温升，经典文给退火—界面读窗，HfO2文给应力/缺陷联合计量范式。',workflow:['红外/热反射或电阻温标校准瞬态结温','通道材料×长度×脉宽DOE','循环中间点测TMR/RA/WER','SIMS/TEM-EELS定位扩散并拟合失效分布'],equipment:['高速脉冲源与示波器','热反射/电阻温标','自动2 Kb阵列台','SIMS/TEM-EELS'],measurements:['ΔT峰值/热剂量','TMR/RA漂移','WER/失效分位','B/金属扩散深度'],metrics:['10^18次置信界','ppm尾部','Weibull斜率','跨片Cpk'],evidenceBoundary:'>180 K与>10^18次来自特定论文阵列；用户堆栈、热阻和脉冲条件不同，必须重新标定。',firstSteps:['先用dummy线标定R–T温标','固定写成功率比较等热剂量','设置无写入125 °C存储对照'],researchConnection:'直连CoFeB/MgO界面、SOT线、阵列、低温/高温输运和产品可靠性。',takeaway:'先测真实结温和失效分布，再优化平均循环数。'},
  {id:'2026-09-01-opticool-fat',date,type:'method',typeZh:'设备与测量平台',trackLabel:'A/D · 磁光低温验收',title:'OptiCool用于MTJ磁畴—输运联合测量的FAT/SAT',subtitle:'用Kerr标准样、Hall片和MTJ dummy验收1.7–350 K、矢量场、振动、光漂移与电噪声。',summary:'把厂商参数转成可重复、可审计的设备验收矩阵。',status:'厂商资料驱动的本站验收方案',relatedPaperIds:['qd-opticool','apl-129-083103'],question:'低振动和多光口是否在真实线缆/样品负载下仍支持MTJ畴成像和同步电测？',rationale:'厂商给边界规格，应变输运论文提示相位/机械扰动可能被误判为材料效应。',workflow:['空载振动/温稳测试','标准电阻与Hall磁场映射','Kerr样品光斑漂移/磁滞','MTJ脉冲与同步成像A/B'],equipment:['OptiCool候选配置','干涉振动计','低噪声电测','Kerr显微/光谱'],measurements:['振动频谱','温度稳定度','场均匀/磁滞','光斑漂移/电噪声'],metrics:['跨日GR&R','漂移nm/h','噪声nV/√Hz','自动恢复时间'],evidenceBoundary:'<10 nm、1.7–350 K和磁场值为厂商标称，验收阈值需在合同配置中锁定。',firstSteps:['索取feedthrough/线缆完整规格','定义三类标准样','跑24 h空载与满载'],researchConnection:'支持MTJ磁性、低温输运、设备自动化和失效定位。',takeaway:'设备合格标准应是目标样品上的噪声和复现，而不是目录页参数。'},
  {id:'2026-09-01-interface-aware-hafnia',date,type:'atomic',typeZh:'原子与极端制造',trackLabel:'C/E · 界面环境与溅射窗口',title:'界面感知的HfO₂/HZO沉积—退火—电性闭环',subtitle:'用压力/厚度/终止/退火矩阵，把晶相、应力、固定电荷、Dit与局域极化模型对齐。',summary:'从“优化体相材料”转向“定义电极—介质—缺陷整体环境”。',status:'本站组合推断，需超薄器件验证',relatedPaperIds:['prb-114-l080101','jva-44-053402'],question:'HfO2/HZO的极化和可靠性波动究竟由体相相型还是界面环境/应力主导？',rationale:'计算否定环境无关的单一体相极化，实验给压力—厚度—应力—Dit的可量化链。',workflow:['1–10 nm压力/功率见证片DOE','对称/非对称电极终止','BEOL兼容退火矩阵','XRD/XRR/应力/C–V/G–V/P–E与TEM-EELS联合'],equipment:['磁控溅射或ALD/PEALD','原位XPS/椭偏可选','晶圆弯曲/XRD/XRR','电容/隧道结自动电测'],measurements:['厚度/粗糙/晶相','应力/固定电荷/Dit','局域成分/氧空位','P–E/漏电/保持/耐久'],metrics:['片内3σ/Cpk','Dit分位','击穿Weibull','循环漂移'],evidenceBoundary:'厚膜ISFET HfO2与第一性原理结论不能直接当作超薄HZO器件结果；950 °C退火不适合BEOL。',firstSteps:['先做1/3/5/10 nm厚度阶梯','加入ALD对照','把退火上限限制在现有BEOL窗口'],researchConnection:'连接原子层界面、缺陷/应力控制、磁控溅射、铁电/隧道器件和可靠性。',takeaway:'每个极化值都要带上电极、终止、厚度、应力和缺陷条件。'}
];

const report = read('reports.json'); report.reportDate=date; report.updatedAt=updatedAt;
report.papers=report.papers.filter(x=>!papers.some(p=>p.id===x.id)).concat(papers);
report.history=report.history.filter(x=>x.date!==date).concat([{date,label:'详细日报：应变低温相位—SOT阵列耐久—hafnia界面理论—低振动磁光平台—溅射应力缺陷',total:5,counts:{A:1,B:1,C:1,D:1,E:1},paperIds:papers.map(x=>x.id)}]); write('reports.json',report);
write('paper-details.json',read('paper-details.json').filter(x=>!details.some(d=>d.id===x.id)).concat(details));
const curated=read('curated-reading.json'); curated.items=curated.items.filter(x=>![review.id,classic.id].includes(x.id)).concat([review,classic]); curated.history=curated.history.filter(x=>x.date!==date).concat([{date,reviewId:review.id,classicIds:[classic.id]}]); write('curated-reading.json',curated);
write('curated-details.json',read('curated-details.json').filter(x=>!curatedDetails.some(d=>d.id===x.id)).concat(curatedDetails)); write('daily-reading.json',{date,review,classics:[classic]});
const archive=read('insight-archive.json'); archive.items=archive.items.filter(x=>!insights.some(y=>y.id===x.id)).concat(insights); archive.history=archive.history.filter(x=>x.date!==date).concat([{date,opportunityIds:[insights[0].id],methodIds:[insights[1].id],atomicIds:[insights[2].id]}]); write('insight-archive.json',archive);
console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
