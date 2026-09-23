import fs from 'node:fs';

const read = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const write = (p, value) => fs.writeFileSync(p, `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-09-23';

const reports = read('data/reports.json');
const details = read('data/paper-details.json');
const curated = read('data/curated-reading.json');
const curatedDetails = read('data/curated-details.json');
const daily = read('data/daily-reading.json');
const insights = read('data/insight-archive.json');

const papers = [
  {
    id: 'a-mgalox-tmr-2112-09910', track: 'A', secondaryTracks: ['B', 'E'],
    title: 'Enhanced Tunnel Magnetoresistance in Fe/Mg4Al-Ox/Fe(001) Magnetic Tunnel Junctions',
    titleZh: 'Fe/Mg₄Al–Oₓ/Fe低温输运｜10 K达1034% TMR并出现0.3 nm周期振荡',
    authors: 'Thomas Scheike, Zhenchao Wen, Hiroaki Sukegawa, Seiji Mitani',
    venue: 'Applied Physics Letters 120, 032404 (2022)', published: '2022-01-20',
    timeTier: '近年正式发表/低温输运基准',
    system: '外延Fe/Mg₄Al–Oₓ/Fe(001)磁隧道结；Mg–Al–O势垒由电子束蒸发形成，研究势垒厚度、偏压与温度对相干隧穿的影响。',
    conditions: '室温与10 K对比；系统扫描势垒厚度，微分电导覆盖约±0.6 V；公开摘要未给出完整底电极/封帽层厚度、结尺寸和退火参数，故不补写。',
    methods: ['电子束蒸发', '外延MTJ', '低温TMR', '厚度序列', '微分电导谱'],
    summary: '【实测】TMR为室温429%、10 K 1034%；TMR随势垒厚度以约0.3 nm周期振荡，室温峰谷差125%；低温P态微分电导在|0.2–0.6| V范围出现峰内嵌于谷的对称谱结构。',
    relevance: '把势垒原子层厚度、能带/对称性过滤与低温谱学直接连接；可作为MgO/CoFeB厚度非均匀、界面成分和局域缺陷诊断的参照。',
    limitation: '外延Fe与电子束蒸发Mg–Al–O不同于量产溅射CoFeB/MgO；摘要未公开RA、器件统计、晶圆均匀性和可靠性，1034%峰值不能外推为阵列性能。',
    industrialization: '最接近势垒材料筛选和低温界面诊断；仍缺300 mm工艺、低RA、BEOL退火、击穿、WER、保持、耐久及批间SPC。',
    whyRecommended: '先看TMR—势垒厚度振荡和10 K/300 K对比，再看P/AP微分电导；35–45分钟。',
    score: 9.5, priority: 'S', doi: '10.1063/5.0082715', arxiv: '2112.09910',
    url: 'https://arxiv.org/abs/2112.09910', backupUrl: 'https://doi.org/10.1063/5.0082715',
    accessNote: '已实际打开arXiv摘要页并核验标题、作者、电子束蒸发、429%/1034% TMR、0.3 nm周期、125%峰谷差与DOI。',
    recommendedOn: date, featured: true
  },
  {
    id: 'b-sttmram-cache-reliability-2201-02855', track: 'B', secondaryTracks: ['C'],
    title: 'A System-Level Framework for Analytical and Empirical Reliability Exploration of STT-MRAM Caches',
    titleZh: 'STT-MRAM缓存联合可靠性｜工作负载使总错误率跨越32倍',
    authors: 'Elham Cheshmikhani, Hamed Farbeh, Hossein Asadi',
    venue: 'arXiv:2201.02855 (可靠预印本)', published: '2022-01-08',
    timeTier: '可靠预印本/系统级可靠性方法',
    system: 'STT-MRAM缓存；在同一框架中联合建模保持失效、读扰动和写失败，并把工作负载访问行为与工艺波动带入全系统仿真。',
    conditions: '使用gem5全系统模拟器和分析/经验可靠性模型；公开摘要未给阵列节点、温度、电流脉宽、样本次数和绝对FIT值，故仅报告已公开倍数。',
    methods: ['保持/读扰/写失败联合模型', '工艺变异', '工作负载分析', 'gem5全系统仿真'],
    summary: '【模拟】不同工作负载下总错误率相差32.0倍；叠加工艺变化后脆弱性再变化6.5倍；三类错误的相对贡献随访问模式和器件变异而改变。',
    relevance: '提醒MTJ开发不能用单一器件最佳值替代应用可靠性；应把P/AP写入、读占空比、温度、保持和空间变异映射到真实工作负载。',
    limitation: '这是模型与仿真，不是硅阵列实测；模型参数、纠错机制和缓存策略若与目标工艺不同，绝对错误率不可直接使用。',
    industrialization: '最接近MRAM系统可靠性预算与测试向量设计；仍缺与特定工艺批次、芯片实测、ECC/冗余、老化和PVT角落闭环校准。',
    whyRecommended: '先读三类错误统一框架，再看工作负载与工艺变异敏感度；30–40分钟。',
    score: 9.2, priority: 'A', doi: '', arxiv: '2201.02855',
    url: 'https://arxiv.org/abs/2201.02855', backupUrl: 'https://arxiv.org/pdf/2201.02855',
    accessNote: '已实际打开arXiv摘要页并核验三类失效、gem5、32.0倍与6.5倍结果；明确按预印本和模拟证据处理。',
    recommendedOn: date, featured: true
  },
  {
    id: 'c-magnified-tmr-imc-2110-03937', track: 'C', secondaryTracks: ['B'],
    title: 'Proposal of Analog In-Memory Computing with Magnified Tunnel Magnetoresistance Ratio and Universal STT-MRAM Cell',
    titleZh: '放大TMR的模拟存内计算｜1T1MTJ并行1024路MAC的电路预测',
    authors: 'Hao Cai, Yue Wang, Lirida Naviner, Weisheng Zhao',
    venue: 'arXiv:2110.03937 (理论/电路预印本)', published: '2021-10-08',
    timeTier: '理论与电路设计/方法参考',
    system: '标准1T1MTJ STT-MRAM单元结合电流镜反馈和锁存读出；2 bit输入由脉宽编码，1 bit权重由MTJ状态表示。',
    conditions: '28 nm CMOS与MTJ紧凑模型仿真；最多1024个单元并行MAC；公开摘要未给硅片实测、温度角落、器件离散性分布或寿命数据。',
    methods: ['MTJ紧凑模型', '28 nm CMOS仿真', '电流镜反馈', '脉宽编码', 'CNN能效评估'],
    summary: '【理论/仿真】锁存结构把读出等效TMR放大7500倍；积分非线性降低57.6%；2 bit输入、1 bit权重、4 bit输出CNN的能效为9.47–25.4 TOPS/W；最多并行1024路MAC。',
    relevance: '提供从TMR/RA离散性到感放与阵列并行度的跨层设计示例，可反向定义器件必须满足的读窗口、漂移和噪声指标。',
    limitation: '全部为紧凑模型/电路仿真；“7500倍TMR”是读出电路增益，不是材料本征TMR，且未证明大阵列寄生、温漂与随机电报噪声下仍成立。',
    industrialization: '最接近MRAM感放与存内计算架构；缺测试芯片、PVT/Monte Carlo、阵列IR-drop、ECC、耐久、功耗分解和编译映射验证。',
    whyRecommended: '重点看读出反馈、1024路并行限制和能效假设；25–35分钟。',
    score: 8.9, priority: 'A', doi: '', arxiv: '2110.03937',
    url: 'https://arxiv.org/abs/2110.03937', backupUrl: 'https://arxiv.org/pdf/2110.03937',
    accessNote: '已实际打开arXiv摘要页，核验1T1MTJ、1024路MAC、7500倍读出放大、57.6%非线性改善与能效范围。',
    recommendedOn: date, featured: true
  },
  {
    id: 'd-low-vibration-cryo-2408-10477', track: 'D', secondaryTracks: ['A'],
    title: 'Low-vibration cryogenic test facility for next generation of ground-based gravitational-wave observatories',
    titleZh: '低振动低温测试平台｜123 K、±1 mK与10⁻¹⁶ m/√Hz位移噪声',
    authors: 'D. P. Kapasi et al.',
    venue: 'Review of Scientific Instruments 95 (2024)', published: '2024-09-24',
    timeTier: '近两年正式设备论文',
    system: '辐射冷却低温腔、约36 L屏蔽体、3 kg光学腔与克级硅悬臂；多级摆隔振并用干涉仪测量宽带位移噪声。',
    conditions: '41 h辐射冷却到123 K；数月相对温稳±1 mK；50 Hz–10 kHz干涉测量；1 kHz处目标/实测量级10⁻¹⁶ m/√Hz。',
    methods: ['辐射冷却', '多级摆隔振', '干涉测振', '长时温稳', '宽带噪声预算'],
    summary: '【实测】约36 L冷区在41 h降至123 K；可容纳3 kg光学腔和克级硅悬臂；数月温度相对稳定度±1 mK；1 kHz位移噪声达到10⁻¹⁶ m/√Hz量级。',
    relevance: '虽面向引力波材料测试，但其机械—热—读出分离方法可直接迁移到闭循环低温MTJ的微音、接触漂移与低频噪声验收。',
    limitation: '不是MTJ输运平台，也未覆盖4 K/mK、高磁场、直流接线与脉冲写入；不能把位移噪声直接换算为电压/电阻噪声。',
    industrialization: '最接近低振动平台设计和设备验收；缺商用维护、磁场兼容、样品换片节拍、线缆热锚及电学噪声的联合指标。',
    whyRecommended: '先看隔振链和噪声预算，再看41 h冷却与长期温稳；35–50分钟。',
    score: 9.1, priority: 'A', doi: '10.1063/5.0236965', arxiv: '2408.10477',
    url: 'https://arxiv.org/abs/2408.10477', backupUrl: 'https://doi.org/10.1063/5.0236965',
    accessNote: '已实际打开arXiv摘要页并核验容积、载荷、冷却时间、温稳、频段、位移噪声与正式DOI。',
    recommendedOn: date, featured: true
  },
  {
    id: 'e-cobalt-thermal-ale-0002488', track: 'E', secondaryTracks: ['B'],
    title: 'Thermal atomic layer etching of cobalt using sulfuryl chloride for chlorination and tetramethylethylenediamine or trimethylphosphine for ligand addition',
    titleZh: 'Co热ALE｜SO₂Cl₂氯化与配体去除实现0.62–10.56 Å/cycle',
    authors: 'Jessica A. Murdzek, Ann Lii-Rosales, Steven M. George',
    venue: 'Journal of Vacuum Science & Technology A 41, 032603 (2023)', published: '2023-04-25',
    timeTier: '近年正式发表/原子制造',
    system: 'Co薄膜先经SO₂Cl₂氯化，再用TMEDA或PMe₃配体加成去除CoCl₂表层；原位QCM跟踪质量增减，并以XRR、QMS和AFM交叉验证。',
    conditions: 'TMEDA路线175–300 °C；PMe₃路线约130–200 °C需20–40次暴露，低于130 °C需更多暴露；具体脉冲剂量以原文图表为准。',
    methods: ['热ALE', '原位QCM', 'XRR', 'QMS', 'AFM'],
    summary: '【实测】SO₂Cl₂/TMEDA在175、200、225、250、275、300 °C的EPC分别为0.62±0.41、1.35±0.64、2.31±0.91、6.43±1.31、10.56±2.94、7.62±4.87 Å/cycle；PMe₃路线为2–4 Å/cycle；TMEDA使表面变平滑而PMe₃使其粗化。',
    relevance: 'Co是磁电极与互连核心材料；论文把配体选择、温度和粗糙度方向关联起来，为低损伤磁性层回刻提供可检验化学路线。',
    limitation: 'EPC可超过一个晶胞，不能简单称为逐原子层；未验证CoFeB合金、MgO选择比、磁性保持、侧壁残氯、晶圆均匀性或器件TMR。',
    industrialization: '最接近Co选择性去除与原子级修整；仍缺合金化学、300 mm反应器、残Cl控制、颗粒、吞吐、腔体记忆和完整MTJ功能验证。',
    whyRecommended: '先看QCM半反应、EPC—温度曲线和QMS产物，再比较TMEDA/PMe₃粗糙度；40–55分钟。',
    score: 9.6, priority: 'S', doi: '10.1116/6.0002488', arxiv: '',
    url: 'https://pubs.aip.org/avs/jva/article/41/3/032603/2886713/Thermal-atomic-layer-etching-of-cobalt-using', backupUrl: 'https://doi.org/10.1116/6.0002488',
    accessNote: '已实际打开AIP全文页，核验反应物、QCM/XRR/QMS/AFM、六个TMEDA温度点EPC、PMe₃暴露次数与粗糙度趋势。',
    recommendedOn: date, featured: true
  }
];

const paperDetails = [
  {
    id: papers[0].id,
    oneSentence: papers[0].summary,
    background: '晶态MgO类势垒借助Δ₁对称性过滤获得高TMR，但单个高值不足以区分势垒厚度起伏、界面共振与缺陷辅助隧穿；温度、厚度和偏压三维数据更有诊断力。',
    question: 'Mg–Al–O势垒能否在Fe(001)电极间维持高相干隧穿，并呈现可归因于原子层尺度的厚度振荡与低温谱结构？',
    workflow: ['电子束蒸发Mg₄Al–Oₓ势垒', '制备外延Fe/Mg₄Al–Oₓ/Fe(001)', '扫描势垒厚度', '室温/10 K测TMR', '测P/AP微分电导—偏压谱'],
    findings: [
      '【实测】室温TMR达到429%，10 K提高到1034%。',
      '【实测】TMR随势垒厚度振荡，周期约0.3 nm。',
      '【实测】室温振荡峰谷TMR差达到125%。',
      '【实测】微分电导关于零偏近似对称，支持两侧界面较对称。',
      '【实测】10 K P态在|0.2–0.6| V范围出现峰嵌谷；【作者解释】与相干隧穿电子结构有关；【边界】摘要不能唯一排除界面态或缺陷通道。'
    ],
    explanation: 'Mg–Al–O的晶格与能带匹配维持对称性选择，势垒厚度改变量子干涉相位；降温减少热展宽，使相干通道与能带特征更明显。',
    whyItMatters: ['给MgO/CoFeB建立“厚度—温度—偏压谱”三维基线。', '0.3 nm周期意味着亚单层厚度漂移可能显著改变器件分布。'],
    researchConnection: '变量：势垒标称厚度±0.05/0.10/0.15 nm、Al比例、退火温度、测量10/77/150/300 K；对照：标准MgO与Mg–Al–O；指标：RA/TMR、dI/dV、击穿、Hooge噪声、TEM/EELS厚度CV。',
    limitationsDetailed: papers[0].limitation,
    terms: ['TMR=(R_AP−R_P)/R_P。', '对称性过滤：势垒优先传输特定Bloch态。', '本站推断：用振荡相位作厚度均匀性探针；原文未做晶圆映射。'],
    takeaway: papers[0].whyRecommended
  },
  {
    id: papers[1].id,
    oneSentence: papers[1].summary,
    background: 'STT-MRAM的保持、读扰和写失败来自不同物理过程，却会被工作负载、温度与工艺离散性共同调制。仅报告单项WER或单元级平均值会漏掉系统风险。',
    question: '能否在统一框架中量化三类错误，并判断工作负载和工艺波动怎样重排主导失效机制？',
    workflow: ['建立保持/读扰/写失败模型', '引入器件工艺变异', '把模型接入gem5', '运行不同缓存工作负载', '分解总错误率与贡献'],
    findings: [
      '【模拟】不同工作负载使总错误率变化32.0倍。',
      '【模拟】加入工艺变化后，脆弱性再变化6.5倍。',
      '【模拟】保持、读扰和写失败的相对贡献随访问模式改变。',
      '【模拟】同一名义器件在不同应用负载下需要不同可靠性优化重点。',
      '【边界】原文结果依赖模型和gem5输入，不是芯片失效率实测。'
    ],
    explanation: '读/写频率、空闲驻留时间与数据状态改变三类失效的暴露时间；工艺波动进一步改变热稳定因子和临界电流分布。',
    whyItMatters: ['可用真实访问轨迹生成器件测试向量。', '把器件DOE的输出转成缓存级风险，而非孤立最佳值。'],
    researchConnection: '变量：温度、脉宽、读电压、数据状态、器件尺寸、P/AP方向；对照：均匀参数与实测分布、合成与真实访问轨迹；指标：分项/总错误率、尾部分布、ECC开销、能耗、性能。',
    limitationsDetailed: papers[1].limitation,
    terms: ['Retention failure：热激活导致存储状态丢失。', 'Read disturbance：读电流本身改变状态。', '本站推断：用工作负载驱动测试仪；原文未实现该硬件闭环。'],
    takeaway: papers[1].whyRecommended
  },
  {
    id: papers[2].id,
    oneSentence: papers[2].summary,
    background: '模拟存内计算希望直接用阵列电流完成乘加，但MTJ本征TMR、支路寄生和器件变异限制并行规模与线性度。电路增益可放大读窗，却同时可能放大失配和噪声。',
    question: '标准1T1MTJ能否借助反馈读出完成高并行度模拟MAC，而无需特殊多级MTJ？',
    workflow: ['建立28 nm CMOS+MTJ紧凑模型', '1T1MTJ表示1 bit权重', '用脉宽编码2 bit输入', '电流镜反馈/锁存放大读窗', '评估1024路MAC与CNN能效'],
    findings: [
      '【理论/仿真】最多1024个单元同时进行MAC。',
      '【理论/仿真】读出等效TMR放大最高7500倍；这不是材料本征TMR。',
      '【理论/仿真】积分非线性降低57.6%。',
      '【理论/仿真】2 bit输入、1 bit权重、4 bit输出CNN能效9.47–25.4 TOPS/W。',
      '【边界】摘要未给硅片PVT、温漂、RTN与老化实测。'
    ],
    explanation: '反馈和锁存把微小P/AP电流差映射为更大的电压/电流输出；并行度提高摊薄外围开销，但阵列寄生和失配会成为新的上限。',
    whyItMatters: ['可从电路容差反推TMR/RA/噪声规格。', '区分“材料TMR提高”和“读出等效增益”，避免误判器件突破。'],
    researchConnection: '变量：TMR 80–200%、RA CV 2–15%、RTN幅值、温度、并行行数；对照：传统电流感放与反馈锁存；指标：INL、读错率、TOPS/W、面积、PVT良率、耐久后漂移。',
    limitationsDetailed: papers[2].limitation,
    terms: ['MAC：乘累加。', 'INL：积分非线性。', '本站推断：把低温噪声数据注入紧凑模型；原文未完成。'],
    takeaway: papers[2].whyRecommended
  },
  {
    id: papers[3].id,
    oneSentence: papers[3].summary,
    background: '闭循环或辐射冷却平台中的机械振动可经线缆、接触与磁场梯度转成电压噪声。高灵敏输运若没有机械—热—电学分项预算，很容易把平台伪影当成器件信号。',
    question: '怎样在可容纳公斤级载荷的冷区同时获得长时温稳与极低宽带位移噪声？',
    workflow: ['约36 L辐射屏蔽冷区', '多级摆悬挂3 kg腔体/克级悬臂', '41 h冷却至123 K', '数月温漂记录', '50 Hz–10 kHz干涉测振'],
    findings: [
      '【实测】冷区体积约36 L。',
      '【实测】3 kg光学腔和克级硅悬臂可在41 h降至123 K。',
      '【实测】数月相对温度稳定度达到±1 mK。',
      '【实测】1 kHz位移噪声达到10⁻¹⁶ m/√Hz量级。',
      '【边界】位移指标不能直接等同于MTJ电阻噪声，需要同步转移函数测量。'
    ],
    explanation: '辐射冷却减少刚性热链，多级摆在测量频带隔离地面振动；大热容和稳定环境压低长时温漂。',
    whyItMatters: ['为低温平台建立可量化的机械验收模板。', '可通过同步加速度/电压谱识别微音耦合。'],
    researchConnection: '变量：压缩机开/关、泵速、线缆松紧、热锚级数、样品架质量；对照：刚性/柔性热链与不同悬挂；指标：加速度PSD、位移PSD、电压噪声、相干函数、温稳与冷却时间。',
    limitationsDetailed: papers[3].limitation,
    terms: ['位移ASD：m/√Hz表示单位带宽位移噪声。', '相干函数：检验机械与电学噪声是否同源。', '本站推断：迁移到MTJ输运平台；原文目标是引力波材料测试。'],
    takeaway: papers[3].whyRecommended
  },
  {
    id: papers[4].id,
    oneSentence: papers[4].summary,
    background: '热ALE用连续、近自限的表面化学替代高能离子轰击。对磁性金属，刻蚀量、残卤素、粗糙度和磁性保持必须同时受控。',
    question: 'SO₂Cl₂氯化后，TMEDA或PMe₃能否通过配体加成去除CoCl₂表层，并实现温度可调的循环刻蚀？',
    workflow: ['SO₂Cl₂氯化Co表面', 'TMEDA或PMe₃配体去除', 'QCM记录半反应质量', 'XRR核验厚度', 'QMS识别CoCl₂(TMEDA)', 'AFM比较粗糙度'],
    findings: [
      '【实测】TMEDA路线175–300 °C的EPC依次为0.62±0.41、1.35±0.64、2.31±0.91、6.43±1.31、10.56±2.94、7.62±4.87 Å/cycle。',
      '【实测】一次TMEDA暴露可去除氯化表层，并由QMS识别CoCl₂(TMEDA)产物。',
      '【实测】PMe₃在130–200 °C需20–40次暴露，低于130 °C需更多。',
      '【实测】PMe₃路线EPC约2–4 Å/cycle。',
      '【实测】TMEDA使表面平滑，PMe₃使表面粗化；【边界】均未验证CoFeB/MgO器件。'
    ],
    explanation: '氯化生成表面CoCl₂，配体配位降低产物脱附能；温度和配体体积/反应动力学决定去除量与形貌演化。',
    whyItMatters: ['展示化学配体选择可反转粗糙度趋势。', '为Co/CoFeB低离子损伤修整提供可测试起点。'],
    researchConnection: '变量：175–300 °C、SO₂Cl₂剂量、TMEDA/PMe₃、循环数；对照：仅氯化、仅配体、低能IBE；指标：EPC饱和、残Cl/S/C/N/P、AFM、PMA/FMR、TMR/RA、侧壁选择比。',
    limitationsDetailed: papers[4].limitation,
    terms: ['配体加成：配体与金属卤化物配位形成更易脱附物种。', 'EPC>晶胞：说明并非严格单原子层去除。', '本站推断：可用于CoFeB修整；需先验证B/Fe的竞争反应。'],
    takeaway: papers[4].whyRecommended
  }
];

const review = {
  id: 'review-thermal-ale-0000894', kind: '正式综述', track: 'E', secondaryTracks: ['B'],
  title: 'Thermal atomic layer etching: A review', titleZh: '热原子层刻蚀正式综述｜材料化学、动力学与高深宽比非理想性',
  authors: 'Andreas Fischer, Aaron Routzahn, Steven M. George, Thorsten Lill',
  venue: 'Journal of Vacuum Science & Technology A 39, 030801 (2021)', published: '2021-04-16', recommendedOn: date,
  doi: '10.1116/6.0000894',
  url: 'https://pubs.aip.org/avs/jva/article/39/3/030801/1079664/Thermal-atomic-layer-etching-A-review',
  backupUrl: 'https://doi.org/10.1116/6.0000894',
  assistantSummary: '正式综述覆盖金属、氧化物、氮化物、半导体及其氧化物的热ALE，系统讨论热力学、动力学和与连续热刻蚀的关系，并用模型说明高深宽比结构中传质与副产物清除可造成非饱和和各向异性。',
  whySelected: '为今日Co ALE提供跨材料反应框架，并明确“循环工艺”不自动等于自限、保形或低损伤。',
  readingGuide: ['先看材料—反应物总表', '再看热力学/动力学判据', '重点读高深宽比非理想模型', '50–70分钟'],
  notNew: false
};

const classic = {
  id: 'classic-high-temp-anneal-mtj-0610526', kind: '经典文章', track: 'B', secondaryTracks: ['A', 'E'],
  title: 'Effect of high annealing temperature on giant tunnel magnetoresistance ratio of CoFeB/MgO/CoFeB magnetic tunnel junctions',
  titleZh: 'CoFeB/MgO高温退火经典｜450 °C下472% TMR与Mn/Ru互扩散边界',
  authors: 'Jun Hayakawa, Shoji Ikeda, Young Min Lee, Fumihiro Matsukura, Hideo Ohno',
  venue: 'Applied Physics Letters 89, 232510 (2006)', published: '2006-12-05', recommendedOn: date,
  doi: '10.1063/1.2402904', url: 'https://arxiv.org/abs/cond-mat/0610526', backupUrl: 'https://doi.org/10.1063/1.2402904',
  assistantSummary: '伪自旋阀CoFeB/MgO/CoFeB在450 °C退火后获得室温472%、5 K 804% TMR；但含MnIr交换偏置的结构在450 °C退化，EDX显示Mn/Ru向MgO及铁磁层互扩散。',
  whySelected: '它把“高温促进CoFeB结晶”与“参考层元素扩散破坏势垒”放进同一实验，至今仍是MTJ热预算与扩散阻挡层设计的关键边界。',
  readingGuide: ['先看TMR—退火温度', '比较伪自旋阀与交换偏置结构', '看EDX扩散证据', '30–40分钟'],
  notNew: true
};

const curatedDetailRows = [
  {
    id: review.id, oneSentence: review.assistantSummary, background: review.titleZh,
    question: '怎样从反应热力学、表面动力学和传质三层判断热ALE是否真正自限、选择性且适合三维制造？',
    workflow: review.readingGuide,
    findings: [
      '【综述事实】覆盖金属、金属氧化物、氮化物、半导体及其氧化物。',
      '【综述事实】按材料/反应物整理已发表热ALE体系，便于筛选可能的MTJ层选择性化学。',
      '【作者框架】热力学可判断反应可行性，但不能替代动力学和脱附验证。',
      '【作者模型】高深宽比结构中，反应物输运和副产物清除可导致非饱和与空间各向异性。',
      '【边界】综述不提供统一300 mm均匀性、吞吐或MTJ功能数据。'
    ],
    explanation: '理想热ALE需要表面改性与挥发性产物生成都在有限位点终止；当传质、再吸附或副反应主导时，即使循环重复也可能失去自限。',
    whyItMatters: [review.whySelected],
    researchConnection: '用“半反应饱和—协同度—选择比—残留—功能保持”五级门槛筛选Co/Ru/Ta/MgO配方；平面见证片合格后再进入侧壁与完整MTJ。',
    limitationsDetailed: '不同材料文献条件不可直接横比；部分体系仅有QCM/膜厚证据，缺晶圆、三维结构和器件功能。',
    terms: ['自限：延长单步剂量后反应趋于饱和。', '协同度：完整循环去除量相对两个单步之和的增益。', '本站推断：将框架用于MTJ多层膜选择性。'],
    takeaway: review.readingGuide.join('；')
  },
  {
    id: classic.id, oneSentence: classic.assistantSummary, background: classic.titleZh,
    question: '高温退火提升CoFeB/MgO相干隧穿的收益，何时被Mn/Ru互扩散导致的界面污染反转？',
    workflow: classic.readingGuide,
    findings: [
      '【实测】伪自旋阀在450 °C退火后室温TMR达到472%。',
      '【实测】同类器件5 K TMR达到804%。',
      '【实测】含MnIr交换偏置的结构在450 °C反而退化。',
      '【实测】EDX观察到Mn和Ru进入MgO势垒及铁磁层。',
      '【作者解释】结晶收益与元素扩散竞争；【边界】老式堆栈和横向EDX分辨率不等同现代pMTJ。'
    ],
    explanation: '退火促进非晶CoFeB以MgO为模板结晶、增强对称性过滤；过高热预算也驱动参考层元素穿越阻挡层，污染势垒和磁电极。',
    whyItMatters: [classic.whySelected],
    researchConnection: '变量：350/375/400/425/450 °C×不同时间、Ta/W/Mo扩散阻挡层；指标：TMR/RA、PMA、B/Mn/Ru深度分布、WER、保持和击穿。',
    limitationsDetailed: '2006年面内/早期结构与现代pMTJ不同；单点峰值不能代表晶圆良率，也未给阵列级WER与长期可靠性。',
    terms: ['模板结晶：CoFeB由MgO晶格诱导形成有序结构。', '互扩散：退火驱动元素跨层迁移。', '本站推断：以扩散阻挡层DOE重做现代堆栈。'],
    takeaway: classic.readingGuide.join('；')
  }
];

const insightRows = [
  {
    id: '2026-09-23-barrier-spectrum-process-window', type: 'research', typeZh: '研究机会', trackLabel: 'A/B · 势垒谱学与可靠性',
    title: '建立“势垒厚度—低温谱—错误率”联合窗口', subtitle: '把高TMR转化为可制造读写窗口。', summary: '同片完成厚度、温度、谱学、噪声与可靠性关联。', status: '优先DOE',
    relatedPaperIds: [papers[0].id, papers[1].id, classic.id],
    question: '亚单层势垒波动造成的TMR/RA谱学差异，是否能预测阵列读扰、写失败与保持尾部？',
    rationale: 'Mg–Al–O显示0.3 nm振荡，而系统模型显示工作负载可放大错误率32倍；二者之间缺真实器件桥接。',
    workflow: ['MgO/MgAlO厚度楔形', '10–300 K TMR/dI/dV', '1/f与RTN', 'P/AP写入统计', '输入工作负载模型'],
    equipment: ['溅射/EBE', '低温磁输运', '低噪声前放', '脉冲发生器/示波器', 'TEM/EELS'],
    measurements: ['RA/TMR地图', '谱峰位置', 'Hooge/RTN', 'WER/读扰/保持', '晶圆坐标'],
    metrics: ['厚度周期与CV', '尾部错误率', '谱学—缺陷相关系数', '模型校准误差'],
    evidenceBoundary: '势垒振荡来自外延Fe体系；把它用于CoFeB阵列错误预测属于本站假设。',
    firstSteps: ['先小面积楔形片', '再同片纳米结', '最后工作负载测试'],
    researchConnection: '连接原子层势垒控制、低温输运、噪声、阵列可靠性和应用负载。',
    takeaway: '最高TMR只是起点，能预测错误尾部的谱学指标才有制造价值。'
  },
  {
    id: '2026-09-23-cryo-vibration-acceptance', type: 'method', typeZh: '设备与方法路线', trackLabel: 'D/A · 低温微音验收',
    title: '给低温MTJ平台增加机械—电学同步验收', subtitle: '用相干函数区分器件噪声与平台微音。', summary: '压缩机、线缆、热锚和样品架逐项量化。', status: '平台验收',
    relatedPaperIds: [papers[3].id, papers[0].id],
    question: '闭循环振动通过哪些路径进入MTJ电压噪声，怎样设置可复现的验收阈值？',
    rationale: '设备论文提供位移噪声和长期温稳标杆，但输运平台需要额外测机械—电学转移函数。',
    workflow: ['布置三轴加速度计', '同步记录电压/温度/位移', '压缩机与泵状态切换', '改变线缆和热锚', '计算PSD与相干函数'],
    equipment: ['低温恒温器', '加速度计/激光测振', '低噪声前放', '同步DAQ', '标准电阻/参考MTJ'],
    measurements: ['加速度/位移PSD', '电压噪声PSD', '相干函数', '温漂', '冷却时间'],
    metrics: ['50 Hz–10 kHz峰值', '1/f拐点', '机械到电学转移增益', '重复装样差异'],
    evidenceBoundary: '10⁻¹⁶ m/√Hz是引力波测试设施指标，不是现有MTJ平台应直接承诺的验收值。',
    firstSteps: ['室温短路基线', '低温标准电阻', '参考MTJ与压缩机切换'],
    researchConnection: '把平台振动、接触、温漂与低温TMR/噪声数据放入同一时间轴。',
    takeaway: '先证明信号不随平台机械状态变化，再解释器件物理。'
  },
  {
    id: '2026-09-23-cobalt-ale-mtj-transfer', type: 'atomic', typeZh: '原子与极端制造', trackLabel: 'E/B · Co ALE迁移',
    title: '从纯Co热ALE推进到CoFeB/MgO选择性修整', subtitle: '配体路线先过残留和磁性门槛。', summary: '比较TMEDA与PMe₃的去除量、粗糙度和功能保持。', status: '工艺DOE',
    relatedPaperIds: [papers[4].id, review.id, classic.id],
    question: 'SO₂Cl₂/配体化学能否选择性去除CoFeB而不让Cl/S/P/C进入MgO界面并破坏PMA/TMR？',
    rationale: '纯Co结果显示TMEDA平滑、PMe₃粗化且EPC温敏；合金和隧穿界面仍是关键未知。',
    workflow: ['Co/Fe/B单组分见证片', 'CoFeB合金片', 'MgO/CoFeB双层', '完整MTJ模拟堆栈', '侧壁与器件验证'],
    equipment: ['热ALE', '原位QCM', 'XPS/SIMS', 'AFM/TEM', 'VSM/FMR/CIPT'],
    measurements: ['半反应饱和', 'EPC/选择比', '残Cl/S/C/N/P', 'PMA/阻尼', 'TMR/RA/噪声'],
    metrics: ['粗糙度增量', '磁性保持率', '界面污染深度', '片内CV', '循环时间'],
    evidenceBoundary: '原文只证明纯Co薄膜热ALE；迁移到CoFeB/MgO和纳米侧壁属于本站工艺假设。',
    firstSteps: ['175–225 °C TMEDA低EPC窗口', '与低能IBE同深度对照', '残Cl合格后进入MTJ'],
    researchConnection: '连接配体化学、原子级去除、界面扩散、磁性和隧穿可靠性。',
    takeaway: '先用残留和磁性否决不合格配方，再谈EPC与吞吐。'
  }
];

reports.updatedAt = '2026-09-23T11:58:00+08:00';
reports.reportDate = date;
reports.history = reports.history.filter((h) => h.date !== date);
reports.history.push({
  date, label: '详细日报：Mg–Al–O低温TMR—STT-MRAM联合可靠性—模拟IMC—低振动低温平台—Co热ALE', total: 5,
  counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: papers.map((p) => p.id)
});
reports.papers = reports.papers.filter((p) => p.recommendedOn !== date && !papers.some((n) => n.id === p.id));
reports.papers.push(...papers);

const ids = new Set(paperDetails.map((x) => x.id));
for (let i = details.length - 1; i >= 0; i--) if (ids.has(details[i].id)) details.splice(i, 1);
details.push(...paperDetails);

curated.history = curated.history.filter((h) => h.date !== date);
curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] });
curated.items = curated.items.filter((x) => x.recommendedOn !== date && x.id !== review.id && x.id !== classic.id);
curated.items.push(review, classic);

const curatedIds = new Set(curatedDetailRows.map((x) => x.id));
for (let i = curatedDetails.length - 1; i >= 0; i--) if (curatedIds.has(curatedDetails[i].id)) curatedDetails.splice(i, 1);
curatedDetails.push(...curatedDetailRows);

daily.date = date;
daily.review = review;
daily.classics = [classic];

insights.history = insights.history.filter((h) => h.date !== date);
insights.history.push({
  date,
  opportunityIds: [insightRows[0].id],
  methodIds: [insightRows[1].id],
  atomicIds: [insightRows[2].id]
});
const insightIds = new Set(insightRows.map((x) => x.id));
insights.items = insights.items.filter((x) => !insightIds.has(x.id));
insights.items.push(...insightRows);

write('data/reports.json', reports);
write('data/paper-details.json', details);
write('data/curated-reading.json', curated);
write('data/curated-details.json', curatedDetails);
write('data/daily-reading.json', daily);
write('data/insight-archive.json', insights);

console.log(`Added ${date}: ${papers.length} papers, 1 review, 1 classic, ${insightRows.length} routes.`);
