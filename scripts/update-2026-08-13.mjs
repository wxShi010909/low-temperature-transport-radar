import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-08-13';
const updatedAt = '2026-08-13T09:00:28+08:00';

const papers = [
  {
    id: 'prb-114-055422', track: 'A', secondaryTracks: ['D', 'E'],
    title: 'Anisotropic transport of Josephson vortices in atomic-layer superconductors on vicinal surfaces',
    titleZh: '原子台阶上的约瑟夫森涡旋：0.4 K下迁移率各向异性超过10³',
    authors: 'Wenxuan Qian, Yash Chauhan, Ryohei Nemoto, Keisuke Sagisaka, Shunsuke Yoshizawa, Takashi Uchihashi',
    venue: 'Physical Review B 114, 055422 (2026)', published: '2026-08-11', recommendedOn: date,
    timeTier: '两日前正式发表',
    system: 'Si(111)-(√7×√3)-In原子层超导体；Si(111)邻晶面偏切0.2°，主要单原子台阶高0.31 nm、平均台面宽约89 nm；In原子双层覆盖；四端电流道0.3×1.2 mm²',
    conditions: 'UHV基压<1×10⁻⁸ Pa；STM与四端输运最低0.4 K，输运0.4–4.2 K；垂直磁场0–0.40 T；STM在0.04 T直接观察涡旋；Tc约3.1 K',
    methods: ['UHV清洁邻晶Si并生长In原子双层', 'STM/ZBC与dI/dV确认台阶、超导能隙和涡旋', '沿/垂直台阶布置四端电流道', '温度—磁场扫描、Arrhenius与Ullah–Dorsey标度建立B–T相图'],
    summary: '0.4 K、0.16 T时，沿台阶和跨台阶的片电阻/涡旋迁移率之比超过10³；0.10–0.20 T出现一维无钉扎流动；更低温进入量子隧穿区。',
    relevance: '把原子级台阶从“形貌缺陷”变成可定量的低温输运变量，提供界面台阶—局域态—宏观电阻的完整范例，可迁移到MTJ势垒台阶和侧壁缺陷诊断。',
    limitation: '这是In/Si原子层超导体，不是MgO/CoFeB MTJ；电阻各向异性等同涡旋迁移率各向异性依赖模型；0.4 K是平台下限，最低温量子区仍需排除残余热激活与测量电流效应。',
    industrialization: '处于原子层量子器件与低温传感基础阶段；还缺大面积台阶均匀性、封装后稳定性、空气转移、器件阵列分布和与CMOS工艺的兼容验证。',
    whyRecommended: '先看图1样品/电流方向，图2 STM直接证据，图3电阻各向异性，图4–5机制与B–T相图；45–65分钟。',
    score: 9.9, priority: 'S', arxiv: '2608.01196', doi: '10.1103/b2j3-xj19',
    url: 'https://journals.aps.org/prb/abstract/10.1103/b2j3-xj19', backupUrl: 'https://arxiv.org/html/2608.01196v1',
    accessNote: '已打开APS关联DOI与arXiv全文，核验正式卷页、作者、0.4 K、0.40 T、台阶尺寸、能隙和迁移率各向异性', featured: true
  },
  {
    id: 'jap-139-063904', track: 'B', secondaryTracks: ['A', 'E'],
    title: 'Effective modulation of interfacial spin transport at CoFeB/Ta interface through ultrafast laser pulses',
    titleZh: '飞秒光脉冲调控CoFeB/Ta界面自旋输运：透明度变化最高85%',
    authors: 'Pengfei Yan, Yu Yan, Yao Li, Liang He, Jing Wu, Yongbing Xu, Xianyang Lu',
    venue: 'Journal of Applied Physics 139, 063904 (2026)', published: '2026-02-12', recommendedOn: date,
    timeTier: '2026正式实验论文',
    system: 'Si/MgO(10)/Ta(tTa=4、5、6、7、10)/CoFeB(1)/MgO(5) nm；Ta/CoFeB直流溅射，MgO射频溅射；300 °C退火30 min',
    conditions: '室温TR-MOKE；800 nm泵浦/400 nm探测；1 kHz、约50 fs；泵浦/探测光斑约450/250 μm；外场相对样品面30°；泵浦通量完整端点在网页公式中未公开显示',
    methods: ['磁控溅射Ta厚度系列并退火', 'VSM确认易轴随Ta厚度变化', 'TR-MOKE泵浦—探测提取进动频率和弛豫', '厚度模型分离本征阻尼、自旋回流、混合电导与透明度'],
    summary: '随泵浦增强，本征Gilbert阻尼下降；Ta自旋扩散长度低通量约2.52 nm；界面自旋透明度调制最高85%，作者归因于热致Ta自旋扩散长度增加和自旋回流增强。',
    relevance: '直接给出CoFeB/重金属界面“层厚—热激发—自旋扩散—阻尼/透明度”的联合标定链，可作为SOT-MRAM自由层和脉冲自热模型的材料输入。',
    limitation: '室温、宏观光斑、双层薄膜而非完整MTJ；透明度来自模型提取并依赖自旋Hall磁阻参数；原文未公开TMR、RA、临界写入电流、WER、保持、耐久与晶圆分布。',
    industrialization: '处于界面材料与动态计量阶段；转入器件需纳米SOT-MTJ、工作偏压、脉冲结温、片内厚度3σ、退火扩散、读写电路和长期可靠性。',
    whyRecommended: '先看图1 TR-MOKE与三阶段动力学，再看图2阻尼，图3混合电导，图4自旋扩散长度/透明度；45–60分钟。',
    score: 9.7, priority: 'S', doi: '10.1063/5.0296589',
    url: 'https://pubs.aip.org/aip/jap/article/139/6/063904/3379928/Effective-modulation-of-interfacial-spin-transport',
    backupUrl: 'https://doi.org/10.1063/5.0296589',
    accessNote: '已打开AIP全文，核验作者、DOI、Ta厚度、溅射/退火、50 fs TR-MOKE、光斑、2.52 nm与85%调制', featured: true
  },
  {
    id: 'jap-140-063903', track: 'C', secondaryTracks: ['B'],
    title: 'Spatially asymmetric switching under spin–orbit torque and Dzyaloshinskii–Moriya interaction',
    titleZh: 'SOT与DMI共同决定空间非对称翻转：从角落成核到畴壁扩展',
    authors: 'Zhenhang Kong, Zhengde Xu, Xue Zhang, Boyu Zhao, Yumeng Yang, Lijun Zhu, Zhifeng Zhu',
    venue: 'Journal of Applied Physics 140, 063903 (2026)', published: '2026-08-11', recommendedOn: date,
    timeTier: '两日前正式发表',
    system: '具有垂直磁各向异性的铁磁/亚铁磁薄膜连续体模型，含阻尼型SOT、可变号/幅值场型SOT、DMI与沿电流方向外场Hx；具体材料堆栈、厚度和横向尺寸在公开摘要中未公开',
    conditions: '超快磁化翻转的数值动力学与力矩分析；扫描电流极性、Hx极性及场型SOT的正负和强度；公开摘要未给温度、网格、脉宽、TMR、RA或WER',
    methods: ['建立含SOT、DMI与Hx的磁化动力学方程', '跟踪反向磁畴的空间成核位置', '比较场型SOT为零、正值和负值', '用统一力矩符号分析左右/上下不对称'],
    summary: '理论显示翻转先在器件角落成核，再由畴壁扩展；即使场型SOT为零，电流与Hx极性也能造成左右和上下不对称；场型SOT显著改变过程但不是不对称的必要条件。',
    relevance: '提醒MTJ写入不能只看宏自旋临界电流；成核角、DMI、边缘粗糙和场型SOT共同决定长尾WER及器件几何容差。',
    limitation: '这是理论/数值结果，不是器件实测；公开摘要未给完整参数表，本站不补造；理想边界、材料均匀性和温度噪声与量产侧壁缺陷可能改变成核位置。',
    industrialization: '处于器件物理和版图规则前验证阶段；需时间分辨磁成像、不同边缘方向/圆角、纳米MTJ统计、场自由结构、PVT角与10⁻⁹以下WER验证。',
    whyRecommended: '先读摘要与力矩符号框架，再看角落成核快照、场型SOT扫描和最终不对称相图；35–50分钟，重点核对理论与实测边界。',
    score: 9.8, priority: 'S', doi: '10.1063/5.0326907',
    url: 'https://pubs.aip.org/aip/jap/article/140/6/063903/3400735/Spatially-asymmetric-switching-under-spin-orbit',
    backupUrl: 'https://doi.org/10.1063/5.0326907',
    accessNote: '已打开AIP正式页，核验2026-08-11、作者、DOI、角落成核、畴壁传播与场型SOT结论；未公开参数均明确标注', featured: true
  },
  {
    id: 'rsi-97-031301', track: 'D', secondaryTracks: ['A', 'E'],
    title: 'A compact unified sample stage for 2D materials ultra-thin film preparation and in situ optoelectronic transport measurements',
    titleZh: '二维超薄膜生长—电阻—光输运一体化UHV样品台',
    authors: 'Yinuo Zhang, Yanlu Zhao, Yifan Liu, Zhicheng Zhang, Youqi Zhang, Yunan Lin, Yi Pan',
    venue: 'Review of Scientific Instruments 97, 031301 (2026)', published: '2026-03-01', recommendedOn: date,
    timeTier: '2026正式仪器论文',
    system: 'UHV腔体内紧凑统一样品台；旗形样品架带多触点；微型蒸发源可共沉积；集成辐射加热、温度测量、电阻监测和光学窗口',
    conditions: '以Au、Cr、Pd金属膜、SnSe半导体和2H-MoTe₂验证；可在生长中与不同加热温度下测电阻，并在UHV内光照；公开摘要未给极限基压、最低温、蒸发速率和噪声底',
    methods: ['在绝缘基底预制电极并装入多针旗形架', '微蒸发源原位生长/共沉积', '同步监测膜电阻与温度', '经光窗做原位光电响应并用多材料验证'],
    summary: '同一位置完成UHV蒸发、膜电阻、加热和光输运；验证Au/Cr/Pd成膜、SnSe的UHV光响应，以及2H-MoTe₂随加热诱生Te空位的电阻演化。',
    relevance: '把“生长参数—实时电阻—缺陷生成—器件响应”闭环，适合改造成MgO/CoFeB超薄层原位电阻/磁光监控与真空互联平台。',
    limitation: '仪器验证以二维/光电材料为主，未直接制备MTJ；公开摘要未给噪声、温度均匀性、膜厚精度、样品更换重复性、磁场或低温能力。',
    industrialization: '科研设备原型；走向晶圆级需300 mm兼容、颗粒/交叉污染、蒸发率闭环、全片温差、维护周期、自动配方和SECS/GEM接口。',
    whyRecommended: '先看统一台结构与电连接，再看微蒸发源、加热/测温、Au/Cr/Pd电阻验证、SnSe/MoTe₂案例；40–60分钟。',
    score: 9.6, priority: 'S', doi: '10.1063/5.0318522',
    url: 'https://pubs.aip.org/aip/rsi/article/97/3/031301/3383338/A-compact-unified-sample-stage-for-2D-materials',
    backupUrl: 'https://doi.org/10.1063/5.0318522',
    accessNote: '已打开AIP正式页，核验作者、DOI、样品台功能、材料验证与公开数据边界', featured: true
  },
  {
    id: 'rsi-97-023904', track: 'E', secondaryTracks: ['A', 'D'],
    title: 'A practical guide for microdevice fabrication using a focused ion beam equipped with a flip-stage',
    titleZh: '翻转台FIB微器件制造指南：30 kV损伤层、三维雕刻与低阻接触',
    authors: 'Federico Balduini, Luca Laveder, Nathan Drucker, Soujanya Madasu, Steffen Reidt, Marilyne Sousa, Cezar Zota, Bernd Gotsmann, Heinz Schmid',
    venue: 'Review of Scientific Instruments 97, 023904 (2026)', published: '2026-02-12', recommendedOn: date,
    timeTier: '2026开放获取方法论文',
    system: 'SEM–Ga FIB配原位flip-stage；从单晶切片、lift-out、锚定、45°底切、三维图形化，再转移到Hall、热输运、门控或MEMS芯片；IBID/EBID Pt接触',
    conditions: 'Ga离子典型30 kV；CoSi截面实测损伤层28.4 nm；Pt IBID最优电流密度约0.01 nA/μm²；沉积1 μm厚约3 min；悬浮MEMS需降电流3–5倍；接触面积示例约5 μm²',
    methods: ['预先确定晶向并切出lamella', 'lift-out至flip-stage后多自由度三维雕刻', '保护Pt、低损伤精修与再沉积控制', 'IBID/EBID Pt接触及温变电阻/接触电阻验收'],
    summary: '30 kV Ga在CoSi形成28.4 nm损伤层，说明纳米器件边缘不能视为理想体材料；flip-stage提升三维几何/晶向控制；Pt IBID在约0.01 nA/μm²获得最低电阻。',
    relevance: '直接对应MTJ侧壁再沉积、FIB截面、低温微器件和异质芯片集成；可把“离子剂量—损伤宽度—接触电阻—低温输运”设为固定验收链。',
    limitation: '这是跨材料的实践指南，不证明相同30 kV条件在CoFeB/MgO形成28.4 nm损伤；Ga注入、热负载和Pt碳含量强依赖材料与几何；未给MTJ TMR/RA/WER。',
    industrialization: '适合研发与失效分析，不是高吞吐量晶圆图形化；还需自动对准、剂量数据库、低能清洗、无Ga替代束、统计良率和BEOL污染控制。',
    whyRecommended: '先看图1损伤/再沉积与28.4 nm TEM，图2–4完整flip-stage流程，图5 Pt电阻/接触；50–75分钟。',
    score: 9.9, priority: 'S', doi: '10.1063/5.0295819',
    url: 'https://pubs.aip.org/aip/rsi/article/97/2/023904/3379366/A-practical-guide-for-microdevice-fabrication',
    backupUrl: 'https://doi.org/10.1063/5.0295819',
    accessNote: '已打开AIP全文，核验作者、日期、30 kV/28.4 nm损伤、0.01 nA/μm²、3 min、MEMS降流与flip-stage流程', featured: true
  }
];

const details = [
  {
    id: 'prb-114-055422',
    oneSentence: '作者把0.31 nm原子台阶设计成约瑟夫森弱连接，并在0.4 K直接观测到涡旋与超过10³的方向性迁移率。',
    background: '二维超导体中的磁通以涡旋进入样品。原子台阶弱耦合相邻台面，可形成约瑟夫森结；沿台阶方向平移对称，涡旋更易滑动，跨台阶则被钉扎。片电阻由运动涡旋产生，因此电阻可当作涡旋迁移率探针。',
    question: '小于1 nm的台阶相对80–100 nm涡旋核看似极小，它是否仍能控制宏观输运？热激活、无钉扎流动和量子隧穿分别出现在哪些B–T区间？',
    workflow: ['偏切0.2°的Si(111)经UHV清洁并覆盖In原子双层', '0.4 K STM/ZBC/dI/dV验证台阶、Δ=0.552 meV能隙和约瑟夫森涡旋', '用影罩形成0.3×1.2 mm²四端电流道，分别让洛伦兹力平行/垂直台阶', '0.4–4.2 K、0–0.40 T扫描，做Arrhenius和Ullah–Dorsey标度'],
    findings: ['【直接实测】平均台面约80–89 nm，单/双原子台阶高0.31/0.62 nm；涡旋核横向约80–100 nm。', '【直接实测】0.4 K、0.16 T时，平行方向约达正常态160 Ω，垂直方向<0.1 Ω，迁移率比>10³。', '【直接实测】平行激活能在约0.10 T趋零，垂直方向到约0.20 T仍有限，形成0.10–0.20 T一维无钉扎窗口。', '【直接实测】最低温电阻饱和且Arrhenius失效，作者据此归为量子隧穿主导。', '【本站推断】在MTJ中系统控制势垒台阶密度，可把局域缺陷与低温RTN/隧穿通道建立同类关联。'],
    explanation: '台阶与涡旋的STM图、电阻和各向异性是直接实测；电阻正比迁移率、最低温饱和来自量子隧穿是作者模型解释；把该方法迁移到MgO/CoFeB是本站推断。',
    whyItMatters: ['原子制造真正有价值的地方，是把亚纳米结构变量映射到可量化输运。', '该工作也给低温平台提供四端方向对照、残余场检查和B–T机制分区范式。'],
    researchConnection: '立即做“台阶方向/密度×温度×磁场”DOE：平/垂直电流道、平坦Si对照、0.4–4.2 K、0–0.4 T；测R(T,B)、I–V、噪声PSD、非线性与重复样本。设备需UHV生长/转移、STM、低温四端锁相与矢量磁场。',
    limitationsDetailed: '样品是表面In超导体，不能外推到室温MRAM；仅4个输运样本；最低0.4 K；残余约0.1 Ω可能含杂散场/Kibble–Zurek涡旋；阵列、保持、耐久均不适用。',
    terms: ['约瑟夫森涡旋：弱连接中磁通及相位绕转形成的细长涡旋。', '邻晶面：相对高对称晶面轻微偏切、周期出现原子台阶的表面。', '量子蠕变：涡旋在低温下通过量子隧穿越过钉扎势垒。'],
    takeaway: '建议先看图1、2、3、4–5，45–65分钟；阅读时把“结构实测—输运实测—机制判据”三列记录。'
  },
  {
    id: 'jap-139-063904',
    oneSentence: '50 fs光脉冲不改层结构，却通过Ta热响应把CoFeB/Ta有效自旋透明度调制到最高85%。',
    background: 'CoFeB磁矩进动会把纯自旋流泵入Ta，表现为额外Gilbert阻尼；部分自旋又从Ta回流。自旋扩散长度和界面混合电导共同决定有多少角动量真正离开自由层。',
    question: '能否用非接触超快光脉冲可逆调控CoFeB/Ta界面自旋传输，而不是永久改变材料；其厚度依赖来自界面还是Ta体内扩散？',
    workflow: ['溅射MgO(10)/Ta(4–10)/CoFeB(1)/MgO(5) nm并300 °C退火30 min', '室温VSM确定Ta 4–7 nm为面外易轴、10 nm转为面内', '800/400 nm、50 fs、1 kHz TR-MOKE记录亚皮秒退磁—数十ps恢复—数百ps进动', '拟合Kittel/LLG并用厚度模型提取阻尼、Gmix、λTa和透明度'],
    findings: ['【直接实测】Ta厚度4、5、6、7、10 nm；泵浦/探测光斑约450/250 μm，所有测量为室温。', '【直接实测+模型提取】低泵浦下Ta自旋扩散长度约2.52 nm；泵浦增强时λTa上升。', '【直接实测】随通量提高，本征Gilbert阻尼下降；频率和有效垂直各向异性场基本不变。', '【模型提取】有效混合电导随泵浦下降，界面自旋透明度调制最高85%。', '【作者解释】Ta升温导致薄膜电阻率下降、λ增大、自旋回流增强，从而降低净角动量耗散。'],
    explanation: 'Kerr时域信号是直接实测；阻尼来自拟合；λ、混合电导和透明度是模型提取；“热致Ta电阻率—λ”是作者解释；用于预测SOT-MTJ写入电流仍是本站假设。',
    whyItMatters: ['给CoFeB/重金属界面提供不拆样品的动态计量。', '提醒写入脉冲的热效应可能同时改变阻尼和自旋传输，不能只做静态室温参数。'],
    researchConnection: '做Ta/W/Pt×厚度2–10 nm×退火250/300/350 °C×温度10–300 K×脉冲通量矩阵；无重金属与不退火对照；同步测TR-MOKE、片电阻、FMR阻尼、热反射和SOT效率。后续在同批MTJ测TMR/RA、Jc、WER及恢复时间。',
    limitationsDetailed: '宏观双层而非结；所有结果室温；高通量实际峰值在网页数学对象中未显示，故不编造；模型假设弹道/扩散参数；未公开TMR、RA、Jc、WER、保持、耐久。',
    terms: ['自旋泵浦：磁体进动向相邻层注入角动量。', '自旋回流：非磁层未耗散的自旋返回磁层。', '界面透明度：通过界面的净自旋流比例，常为模型提取量。'],
    takeaway: '先图1，再图2–4；45–60分钟。记录每个量是直接测得、拟合还是模型反演。'
  },
  {
    id: 'jap-140-063903',
    oneSentence: '最新理论表明SOT翻转先从角落成核，电流/外场极性决定左右和上下不对称，场型SOT只调制而非创造这种不对称。',
    background: '宏自旋模型假定器件整体同步翻转，但真实pMTJ常先形成小反向磁畴，再由畴壁扩展。DMI赋予畴壁手性；阻尼型和场型SOT对空间不同位置施加不同有效力矩。',
    question: '角落成核的空间不对称究竟由场型SOT造成，还是即使没有场型SOT也由阻尼型SOT、Hx和DMI共同产生？',
    workflow: ['建立垂直亚铁磁薄膜动力学模型', '加入阻尼型SOT、DMI和沿电流Hx', '分别将场型SOT设为零、正、负并扫描幅值', '追踪反向畴的首个角落、畴壁方向和全片完成时间'],
    findings: ['【理论预测】反向磁畴首先在样品角落成核，再经畴壁传播完成翻转。', '【理论预测】即使场型SOT=0，电流与Hx极性仍造成左右和上下成核不对称。', '【理论预测】改变场型SOT的符号和强度可显著移动/改变成核，但不是不对称的必要条件。', '【作者解释】统一力矩分析可用局域磁化、DMI边界倾斜和SOT方向解释四角差异。', '【本站推断】边缘粗糙、刻蚀损伤和圆角会把确定的成核角转化为器件间WER长尾。'],
    explanation: '所有“发现”均为理论/数值预测，不是直接实测；作者用力矩框架解释；把边缘缺陷加入WER模型是本站推断。',
    whyItMatters: ['为版图/侧壁制造提供可测的“成核位置”指标。', '解释为什么平均Jc相同的器件仍可能有不同长尾WER。'],
    researchConnection: '在同一pMTJ版图做四种边缘：尖角、圆角、单侧缺口、对称缺口；正/负电流与Hx正/负全组合；模拟与时间分辨MOKE/XMCD成像对照。指标：首核位置概率、完成时间、Jc、WER 10⁻⁶先验、温度与脉宽依赖。',
    limitationsDetailed: '公开摘要未给材料堆栈、厚度、网格、温度、脉宽和数值范围，故均标“原文未公开”；理想连续体不含晶粒、缺陷、焦耳热、随机热场或读出层。',
    terms: ['DMI：反演对称破缺界面产生的手性交换作用。', '阻尼型SOT：通常直接推动磁化离开原态。', '场型SOT：作用形式类似横向有效磁场。'],
    takeaway: '35–50分钟；先看成核快照，再看场型SOT扫描和力矩符号表，避免把理论相图写成实测。'
  },
  {
    id: 'rsi-97-031301',
    oneSentence: '统一UHV样品台把超薄膜共沉积、加热、实时电阻与原位光输运放在同一真空链。',
    background: '二维/超薄膜一旦暴露空气，吸附物、氧化和接触漂移会掩盖本征输运；分腔转移也会让生长参数与电学不能一一对应。统一样品台减少取放和真空破坏。',
    question: '如何在有限腔体空间同时完成多源蒸发、温控、在生长电阻和光输运，并支持快速材料配方迭代？',
    workflow: ['预制电极绝缘基底安装到多针旗形样品架', '紧凑微蒸发源单源或共沉积', '辐射加热/测温下实时记录膜电阻', '经光学窗测光响应，并以Au/Cr/Pd/SnSe/2H-MoTe₂验证'],
    findings: ['【直接实测】Au、Cr、Pd成膜过程可实时监测电阻。', '【直接实测】SnSe在UHV内表现良好光响应。', '【直接实测】2H-MoTe₂随加热产生Te空位，其电阻演化被原位捕捉。', '【工程实现】同一旗形台集成多触点、加热/测温、微蒸发源和光窗口。', '【本站推断】把蒸发源替换为MgO/CoFeB/Ta并增加磁场/MOKE，可用于MTJ界面闭环。'],
    explanation: '材料电阻/光响应为直接实测；“Te空位导致电阻演化”为作者基于材料行为的解释；迁移到MTJ是本站推断。',
    whyItMatters: ['设备平台从“做完再测”升级为“边做边看”。', '可把异常成核、空位/扩散和电阻漂移在生产时点即时关联。'],
    researchConnection: '先以Au/Cr复现电阻基线，再做Ta/CoFeB/MgO楔形层厚；变量：源功率、基底温度、共沉积比、停顿/退火、氧分压；对照：空气暴露和真空转移；指标：成核阈值、R□、漂移、噪声、厚度/温度均匀性。需UHV、QCM/RHEED、低噪声四端、光窗与自动配方。',
    limitationsDetailed: '公开摘要未给极限真空、噪声底、最低温、速率精度和温差，故明确为原文未公开；二维光电验证不能直接证明隧道势垒质量。',
    terms: ['旗形样品架：便于真空转移并提供多触点的标准机械接口。', '共沉积：多个源同时供料以控制成分。', '原位：样品不离开目标环境即完成测量。'],
    takeaway: '40–60分钟；按“机械接口—热学—电学—蒸发—验证样品”顺序读。'
  },
  {
    id: 'rsi-97-023904',
    oneSentence: '翻转台FIB把单晶定向切片做成三维输运器件，同时用28.4 nm实测损伤和Pt接触数据提醒每一步都要计量。',
    background: 'FIB能直接从微小单晶切出Hall条或热输运器件，但Ga注入、非晶化、侧壁再沉积和含碳Pt接触会改变低温输运。flip-stage允许从不同方向雕刻，减少几何死角。',
    question: '怎样从晶向选择、lamella切取、翻转雕刻到Pt接触形成一套可复现流程，并量化FIB损伤与接触工艺窗口？',
    workflow: ['TEM/晶向预判后从单晶切lamella并lift-out', '锚定flip-stage、修边、45°底切和三维图形化', '保护Pt与低损伤精修抑制再沉积', '转移到目标芯片，IBID/EBID Pt接触并做温变电阻/接触电阻'],
    findings: ['【直接实测】30 kV Ga切割CoSi形成28.4 nm损伤层，非晶区还可深于离子平均射程。', '【方法验证】flip-stage增加翻转/倾斜自由度，可制作CoSi/NbP Hall条、热电加热器和反点阵等复杂结构。', '【直接实测】Pt IBID最低电阻窗口约0.01 nA/μm²。', '【直接实测】约1 μm厚Pt结构沉积约3 min；悬浮MEMS需把电流密度降低3–5倍避免刻蚀/热损伤。', '【证据边界】28.4 nm只属于给定CoSi/30 kV条件，不能直接套用到CoFeB/MgO。'],
    explanation: '损伤层、接触电阻和沉积窗口为实测；SRIM给出离子轨迹/位移的模型解释；用于MTJ侧壁DOE是本站推断。',
    whyItMatters: ['为低温输运微器件提供从单晶到芯片的完整接口。', '为MTJ失效分析给出“束能—剂量—损伤—接触”记录模板。'],
    researchConnection: '做CoFeB/MgO见证片：30/16/5 kV终抛×入射角×保护Pt厚度×离子种类；未照射和机械截面作对照；TEM-EELS测Ga/氧扩散宽度，四端测R□/接触电阻/RTN，完整MTJ测TMR/RA恢复。设备需FIB-SEM flip-stage、低kV精修、TEM-EELS和低温探针。',
    limitationsDetailed: '研发级低吞吐流程；材料和几何依赖强；IBID Pt含C且可能超导/有磁杂质；原文没有MTJ TMR、RA、WER、保持、耐久或晶圆级良率。',
    terms: ['lift-out：用探针把切下薄片搬运到支架。', 'IBID/EBID：离子/电子束诱导前驱体分解沉积Pt。', '再沉积：被溅射材料落回侧壁并造成短路/成分混合。'],
    takeaway: '50–75分钟；优先图1、图2–4和图5，并把每个“建议值”连同材料/几何条件一起抄录。'
  }
];

const report = read('reports.json');
report.reportDate = date;
report.updatedAt = updatedAt;
report.papers = report.papers.filter((x) => !papers.some((p) => p.id === x.id)).concat(papers);
report.history = report.history.filter((x) => x.date !== date).concat([{
  date,
  label: '详细日报：原子台阶低温涡旋—CoFeB/Ta光调自旋—SOT/DMI成核—UHV原位闭环—FIB损伤计量',
  total: 5,
  counts: { A: 1, B: 1, C: 1, D: 1, E: 1 },
  paperIds: papers.map((x) => x.id)
}]);
write('reports.json', report);
write('paper-details.json', read('paper-details.json').filter((x) => !details.some((d) => d.id === x.id)).concat(details));

const review = {
  id: 'review-interfacial-sot-2020', kind: '每日综述', track: 'B', secondaryTracks: ['C', 'E'],
  title: 'Interfacial spin-orbit torques', titleZh: '界面自旋轨道转矩：混合电导、自旋记忆损失、过滤/交换与三层结构',
  authors: 'Vivek P. Amin, Paul M. Haney, Mark D. Stiles',
  venue: 'Journal of Applied Physics 128, 151101 (2020)', published: '2020-10-21', recommendedOn: date,
  doi: '10.1063/5.0024019', arxiv: '2008.01182',
  url: 'https://pubs.aip.org/aip/jap/article/128/15/151101/1025668/Interfacial-spin-orbit-torques', backupUrl: 'https://arxiv.org/abs/2008.01182',
  assistantSummary: '正式综述统一解释垂直界面的混合电导/自旋记忆损失，以及面内电场下的自旋轨道过滤、交换和进动，并讨论界面生成自旋流如何跨间隔层产生新型转矩。',
  whySelected: '它把今天CoFeB/Ta的透明度、SOT/DMI理论、UHV界面制造和FIB损伤放到同一“界面散射矩阵”语言中。',
  readingGuide: ['先读混合电导和自旋记忆损失。', '再读过滤/交换/进动三个机制。', '重点看三层结构跨间隔层转矩。', '最后用本文术语重整今天五篇；70–100分钟。'], notNew: true
};

const classic = {
  id: 'classic-werner-2011-lsmo-sto', kind: '经典文章', track: 'A', secondaryTracks: ['B', 'E'],
  title: 'Improved tunneling magnetoresistance at low temperature in manganite junctions grown by molecular beam epitaxy',
  titleZh: 'MBE锰氧化物隧道结的低温1900% TMR与四重磁各向异性',
  authors: 'Robert Werner, Alexander Yu. Petrov, Liviu A. Munteanu, Andreas Roessler, Bruce A. Davidson',
  venue: 'Applied Physics Letters 98, 162505 (2011)', published: '2011-04-06', recommendedOn: date,
  doi: '10.1063/1.3581885', arxiv: '1104.1072',
  url: 'https://arxiv.org/abs/1104.1072', backupUrl: 'https://doi.org/10.1063/1.3581885',
  assistantSummary: 'La₀.₆₅Sr₀.₃₅MnO₃/SrTiO₃/La₀.₆₅Sr₀.₃₅MnO₃外延结在4 K达到约1900% TMR；按对称界面Jullière模型对应界面自旋极化>95%，角度扫描呈晶轴锁定四重对称。',
  whySelected: '它是“低温隧穿把界面质量放大”的经典基准，也警告大TMR可由晶体各向异性和磁畴窗口共同塑造。',
  readingGuide: ['先看堆栈和MBE生长。', '再看4 K磁场扫描与1900%窗口。', '重点看360°角扫描的四重对称。', '最后审视Jullière外推边界；25–40分钟。'], notNew: true
};

const curatedDetails = [
  {
    id: review.id, oneSentence: review.assistantSummary,
    background: '界面自旋轨道耦合既改变穿越界面的纵向自旋流，也能在面内电场下直接生成横向自旋流和转矩。不同实验常用“透明度、记忆损失、Rashba、spin Hall”等词，综述给出统一语言。',
    question: '垂直与平行界面的电荷/自旋流在含SOC的界面如何转换，哪些效应应归入混合电导、记忆损失或界面生成转矩？',
    workflow: ['扩展磁电子电路理论', '推导含SOC的界面散射与边界条件', '分类过滤/交换/进动机制', '连接双层/三层实验几何'],
    findings: ['【综述理论】垂直自旋流的界面SOC会同时改混合电导并产生自旋记忆损失。', '【综述理论】面内电场可通过自旋轨道过滤、交换和进动产生界面SOT。', '【综述理论】界面生成的自旋流可进入非磁层。', '【综述理论】三层结构中该自旋流可跨间隔层作用于第二磁层。'],
    explanation: '这是正式综述中的理论综合，不是单一器件的TMR/Jc/WER数据。',
    whyItMatters: [review.whySelected],
    researchConnection: '为每个界面样品同时记录Gmix、透明度、SML、阻尼型/场型SOT、粗糙度、互扩散与温度；用Ta厚度和惰性间隔层对照分离体/界面贡献。',
    limitationsDetailed: '综述模型依赖散射与对称性假设；不能替代具体CoFeB/Ta或MgO/CoFeB的材料参数、晶圆统计和可靠性。',
    terms: ['自旋记忆损失：自旋跨界面时发生退极化。', '自旋轨道过滤：界面对不同自旋/轨道散射概率不同。'],
    takeaway: review.readingGuide.join(' ')
  },
  {
    id: classic.id, oneSentence: classic.assistantSummary,
    background: '锰氧化物接近半金属，理论上可提供接近100%的自旋极化；SrTiO₃势垒把两侧电极分开，TMR对界面有序和磁畴极敏感。',
    question: '高质量MBE外延界面在4 K能把TMR提高到什么程度，器件形状和晶体磁各向异性谁决定翻转窗口？',
    workflow: ['MBE生长LSMO/STO/LSMO结', '4 K扫描面内磁场并测TMR', '旋转面内场0–360°', '用Jullière模型估算界面自旋极化'],
    findings: ['【直接实测】4 K TMR约1900%。', '【模型提取】假设两界面相同，界面自旋极化>95%。', '【直接实测】TMR随面内角度呈四重对称。', '【作者解释】磁各向异性沿晶轴而非器件长轴，单轴各向异性并非获得大TMR的必要条件。'],
    explanation: 'TMR和角度依赖为直接实测；>95%为Jullière模型反演；它不等于偏压下或室温自旋极化。',
    whyItMatters: [classic.whySelected],
    researchConnection: '现代MgO/CoFeB样品增加4–300 K、360°矢量场和多偏压扫描；对照未退火/不同界面粗糙；测TMR、RA、矫顽场窗口、RTN与角度谐波，避免只报峰值。',
    limitationsDetailed: '锰氧化物低温外延结不具备先进BEOL兼容；Jullière假设简化；未提供现代阵列WER、保持、耐久、300 mm良率。',
    terms: ['四重各向异性：磁响应每旋转90°重复，常由晶体对称性主导。', 'Jullière模型：用两电极自旋极化近似TMR的简化模型。'],
    takeaway: classic.readingGuide.join(' ')
  }
];

const curated = read('curated-reading.json');
curated.items = curated.items.filter((x) => ![review.id, classic.id].includes(x.id)).concat([review, classic]);
curated.history = curated.history.filter((x) => x.date !== date).concat([{ date, reviewId: review.id, classicIds: [classic.id] }]);
write('curated-reading.json', curated);
write('curated-details.json', read('curated-details.json').filter((x) => !curatedDetails.some((d) => d.id === x.id)).concat(curatedDetails));
write('daily-reading.json', { date, review, classics: [classic] });

const insights = [
  {
    id: '2026-08-13-step-interface-noise', date, type: 'opportunity', typeZh: '研究机会', trackLabel: 'A/B · 原子台阶与自旋界面',
    title: '原子台阶—界面透明度—低温噪声三联因果实验', subtitle: '把形貌、动态自旋参数和隧穿缺陷放进同一片样品',
    summary: '借A类的台阶方向对照与B类的TR-MOKE模型，检验CoFeB/MgO/Ta中台阶密度是否共同控制SOT透明度和低温RTN。',
    status: '本站组合推断，待实验验证', relatedPaperIds: ['prb-114-055422', 'jap-139-063904'],
    question: '亚纳米台阶是否同时改变自旋透明度、局域陷阱和低温写入变异？',
    rationale: 'A证明0.31 nm台阶可造成>10³输运各向异性；B证明Ta厚度/热态可使透明度变化85%，但两者未在MTJ中联测。',
    workflow: ['制备低/中/高台阶密度基底', '同片沉积MgO/CoFeB/Ta并做方向性Hall条/MTJ', 'TR-MOKE/FMR提透明度', '4–300 K测RTN、TMR、RA与脉冲WER'],
    equipment: ['AFM/STM或截面TEM', 'TR-MOKE/FMR', '低温低噪声探针', '脉冲源和高速采集'],
    measurements: ['台阶密度/方向', 'Gmix/透明度/阻尼', 'TMR/RA', 'RTN与WER'],
    metrics: ['透明度3σ', 'RTN陷阱密度', 'TMR保留', 'WER长尾与方向相关'],
    evidenceBoundary: 'In/Si超导体与CoFeB/Ta是不同系统，联合因果关系只是本站假设。',
    firstSteps: ['先做不含MgO的Ta/CoFeB方向对照', '确认形貌与阻尼可重复', '再加入势垒和低温结输运'],
    researchConnection: '直连原子制造、MgO/CoFeB、低温输运和缺陷计量。',
    takeaway: '同一台阶变量必须同时通过结构、自旋和噪声三种读出。'
  },
  {
    id: '2026-08-13-in-situ-fib-loop', date, type: 'method', typeZh: '设备与测量平台', trackLabel: 'D/E · 生长—加工—测量闭环',
    title: 'UHV统一样品台—flip-stage FIB—低温输运闭环平台', subtitle: '每次加工都保留可追溯见证片与电阻基线',
    summary: '先在UHV边生长边监测，再用定向FIB制造微器件并量化损伤，最后回到低温测量，形成可回溯工艺链。',
    status: '由D/E实测组合的设备路线', relatedPaperIds: ['rsi-97-031301', 'rsi-97-023904'],
    question: '如何区分材料生长异常与FIB/接触引入的低温输运漂移？',
    rationale: 'D给出在生长电阻，E量化FIB损伤和接触窗口；二者串联可避免事后猜因。',
    workflow: ['UHV样品台记录成核/退火R□', '保留未加工见证区', 'FIB按剂量/终抛矩阵图形化', '室温与低温逐级复测并写入统一元数据'],
    equipment: ['UHV微蒸发/溅射与多针台', 'QCM/RHEED', 'FIB-SEM flip-stage', 'TEM-EELS与低温锁相'],
    measurements: ['在生长R□', '加工前后R/噪声', '损伤宽度/成分', '接触电阻与热漂移'],
    metrics: ['成核阈值', 'R变化百分比', 'Ga/氧扩散nm', '接触电阻3σ'],
    evidenceBoundary: '两个平台尚未在同一设备/同一MTJ上集成。',
    firstSteps: ['Au/Cr标准样校准UHV电阻', 'CoSi复现28.4 nm损伤量级', '再转入CoFeB/MgO见证片'],
    researchConnection: '升级设备自动化、工艺追溯、低温输运与失效分析。',
    takeaway: '生长后、FIB后、接触后各留一个电学检查点，才能定位损失。'
  },
  {
    id: '2026-08-13-edge-nucleation-process', date, type: 'atomic', typeZh: '原子与极端制造', trackLabel: 'C/E · 边缘与成核',
    title: 'FIB侧壁损伤—SOT角落成核联合版图DOE', subtitle: '把理论成核角转化为可制造性和WER指标',
    summary: '用受控圆角、缺口、束能和保护层改变边界，再比较理论预测的成核位置与真实器件WER。',
    status: '理论与方法组合路线，待器件实测', relatedPaperIds: ['jap-140-063903', 'rsi-97-023904'],
    question: '角落成核的不对称有多少来自理想SOT/DMI，有多少来自FIB侧壁与再沉积？',
    rationale: 'C预测角落与极性规则，E显示30 kV Ga可产生28.4 nm损伤；纳米器件中二者尺度可相当。',
    workflow: ['设计尖角/圆角/单缺口/对称缺口', '30/16/5 kV终抛与保护Pt矩阵', '成像首核位置', '统计正反极性Jc、延迟与WER'],
    equipment: ['电子束/FIB图形化', '时间分辨MOKE或XMCD-PEEM', 'TEM-EELS', '纳秒脉冲/高速示波'],
    measurements: ['边缘损伤宽度', '首核角概率', '畴壁速度', 'Jc/WER/TMR'],
    metrics: ['模型—实测位置一致率', 'WER 10⁻⁶预筛', 'TMR保留率', 'CD与圆角3σ'],
    evidenceBoundary: 'C为理论，E的28.4 nm来自CoSi；MTJ上的数值必须重新实测。',
    firstSteps: ['先用大尺寸Hall条验证极性规则', '再在同片改变终抛能量', '最后缩到MTJ并增加统计量'],
    researchConnection: '直连图形化损伤、侧壁封护、SOT-MRAM和制造容差。',
    takeaway: '成核角应成为与CD、TMR并列的工艺验收指标。'
  }
];

const archive = read('insight-archive.json');
archive.items = archive.items.filter((x) => !insights.some((y) => y.id === x.id)).concat(insights);
archive.history = archive.history.filter((x) => x.date !== date).concat([{
  date,
  opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id]
}]);
write('insight-archive.json', archive);

console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
