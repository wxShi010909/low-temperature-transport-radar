import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = (name) => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-09-02';
const updatedAt = '2026-09-02T09:00:00+08:00';

const papers = [
  {
    id:'apl-129-094001', track:'A', secondaryTracks:['D','E'], title:'Alternating-bias assisted annealing of micrometer-scale Josephson junctions', titleZh:'微米级约瑟夫森结的交变偏压辅助退火：把常态电阻后调变成可预测工艺',
    authors:'Qingyu Wang, Jie Zhao, Wenchang Yan, Wei Xin, Yang Yu', venue:'Applied Physics Letters 129, 094001 (2026)', published:'2026-08-31', recommendedOn:date, timeTier:'两日前正式发表',
    system:'微米级Josephson结；交变偏压辅助退火（ABAA）用于在制后调节常态电阻。出版社公开HTML未给电极/势垒材料、势垒厚度、结面积绝对值和光刻流程。',
    conditions:'系统扫描预退火加热时间、退火温度、偏压、氧化暴露量、线宽和长宽比。公开页面未给各变量数值、低温测量温度、临界电流与一致性统计，均标为原文公开页面未公开。',
    methods:['制备具有不同氧化暴露和几何参数的微米级JJ','记录初始常态电阻与预热历史','施加交变偏压并改变温度/时间','测退火前后电阻变化并建立效率—工艺—几何关系'],
    summary:'ABAA的电阻调节效率并非常数，而受热历史、温度、偏压、氧化暴露、线宽与长宽比共同控制；作者提出面向微米级JJ的预测性电阻后调框架。',
    relevance:'这是一种“制后小步校准”思路：可迁移到隧道结RA分档、测试片电阻trim和晶圆工艺反馈，但不能直接照搬到MgO/CoFeB，因为磁势垒的扩散与磁性退化窗口不同。',
    limitation:'公开来源只有摘要和变量清单，没有量值、堆栈、低温Ic、均匀性、循环稳定性与良率；因此不声称达成某个调节幅度或量产精度。',
    industrialization:'处于器件后调与校准方法阶段；还缺晶圆内/晶圆间分布、调节分辨率、长期漂移、噪声、临界电流、超导相干和自动化吞吐验证。',
    whyRecommended:'先看实验流程与参数矩阵，再看几何/氧化暴露对效率的图，最后检查是否给出预测误差；35–50分钟。', score:9.2, priority:'A', doi:'10.1063/5.0347836',
    url:'https://pubs.aip.org/aip/apl/article/129/9/094001/3403317/Alternating-bias-assisted-annealing-of-micrometer', backupUrl:'https://doi.org/10.1063/5.0347836', accessNote:'已打开AIP正式HTML，核验Research Article、题名、作者、2026-08-31、DOI、六类控制变量；量值未公开不补写。', featured:true
  },
  {
    id:'jos-26010048', track:'B', secondaryTracks:['E','D'], title:'Double CoFeB reference layers for optimized PMA and BEOL compatibility of SOT-MRAM', titleZh:'双CoFeB参考层：以CoFeB/W界面和扩散阻挡实现400 °C后137% TMR',
    authors:'Yuxuan Yao, Siyuan Cheng, Shiyang Lu, Danrong Xiong, Jianing Liang, Wenwen Wang, Xiantao Shang, Kaihua Cao, Daoqian Zhu, Hongxi Liu, Weisheng Zhao', venue:'Journal of Semiconductors, in press (2026)', published:'2026-05-21', recommendedOn:date, timeTier:'近期正式录用并在线',
    system:'用于top-pinned SOT-MRAM的PMA MTJ；比较单CoFeB参考层与双CoFeB参考层（DCFB），后者新增一层CoFeB及两个CoFeB/W界面，并与上方Pt/Co多层耦合。公开HTML未列完整底电极、MgO、自由层和帽层厚度。',
    conditions:'PMOKE、CIPT、R–H/TMR、TEM与EDS；比较350/400 °C退火。器件直径10 μm；示例下CoFeB厚1.1 nm，RA为50或150 Ω·μm²。',
    methods:['用PMOKE比较单/双CoFeB参考层PMA与RKKY交换场','用CIPT筛选RA与下CoFeB厚度','在350/400 °C后做TEM/EDS检查结晶与Pt–Fe互扩散','制备10 μm MTJ并测TMR/R–H/SOT开关'],
    summary:'1.1 nm下CoFeB、RA 50 Ω·μm²时交换场约120 mT；400 °C后降至约50 mT，但MTJ仍有137% TMR。作者归因于新增CoFeB/W界面增强PMA、促进Pt/Co结晶并抑制Pt–Fe互扩散。',
    relevance:'本日最高优先级：把原子层界面数、B/Pt/Fe扩散、400 °C热预算、RA、TMR与器件开关放在同一条可制造链路中。',
    limitation:'10 μm器件不是先进节点；公开HTML图注未给Jc数值、脉宽、WER、保持、耐久、晶圆尺寸、片内3σ、良率和多批次统计。137% TMR不能等价为阵列量产。',
    industrialization:'最接近BEOL兼容的堆栈模块；已有400 °C与器件级TMR，但仍缺≤50 nm缩放、300 mm均匀性、WER尾部、10年保持、>10¹²次耐久、图形化损伤和CMOS阵列验证。',
    whyRecommended:'先看图1/2的SCFB—DCFB堆栈与PMA，再看图3的RA/120 mT，重点看图4/5的TEM-EDS和400 °C后137% TMR；55–75分钟。', score:10, priority:'S', doi:'10.1088/1674-4926/26010048',
    url:'https://www.jos.ac.cn/en/article/doi/10.1088/1674-4926/26010048?viewType=HTML', backupUrl:'https://doi.org/10.1088/1674-4926/26010048', accessNote:'已打开期刊正式HTML，核验作者、在线日期、10 μm、50/150 Ω·μm²、1.1 nm、120/50 mT、350/400 °C、137% TMR及TEM/EDS。', featured:true
  },
  {
    id:'jap-132-213904', track:'C', secondaryTracks:['B','E'], title:'Effect of interfacial nitrogen defects on tunnel magnetoresistance in an Fe/MgO/Fe magnetic tunnel junction', titleZh:'MgO/Fe界面氮缺陷的第一性原理输运：反平行态寄生通道如何拉低TMR',
    authors:'Yutaro Ogawa, Masaaki Araidai, Tetsuo Endoh, Kenji Shiraishi', venue:'Journal of Applied Physics 132, 213904 (2022)', published:'2022-12-02', recommendedOn:date, timeTier:'近四年高相关正式理论论文',
    system:'外延Fe/MgO/Fe MTJ的理想界面与含N缺陷界面模型；N被假设来自抗氧化SiN覆盖层。出版社公开摘要未给MgO层数、横向超胞、缺陷浓度和k点网格。',
    conditions:'第一性原理电子结构结合量子输运，比较平行/反平行磁化电导与TMR；无实验温度、器件尺寸、RA、WER或可靠性数据。',
    methods:['构建无缺陷Fe/MgO/Fe基线','在MgO/Fe界面引入额外N原子','计算自旋分辨透射与P/AP电导','比较寄生通道与TMR变化'],
    summary:'界面N显著恶化TMR；在MgO/Fe界面增加N时，反平行磁化构型出现额外导电通道。作者据此强调制造中必须阻止来自SiN覆盖/钝化的氮污染。',
    relevance:'直接把侧墙钝化、刻蚀后封装和界面化学与读窗连接；非常适合指导“SiN工艺前后—截面成分—RA/TMR/噪声”联合DOE。',
    limitation:'结论为理想Fe/MgO/Fe模型的理论预测；公开摘要无缺陷浓度和TMR数值，且现代器件是CoFeB/MgO、多晶、含B/O空位和边缘损伤，不能直接外推绝对降幅。',
    industrialization:'处于污染物筛选与机理模型环节；尚缺真实CoFeB/MgO侧壁、SIMS/EELS定量、全片污染图、尺寸缩放、TMR/RA/噪声/WER统计及钝化替代方案。',
    whyRecommended:'先看缺陷位置模型，再看P/AP透射谱和反平行寄生通道；最后列出SiN钝化污染DOE；35–50分钟。', score:9.7, priority:'S', doi:'10.1063/5.0126570',
    url:'https://pubs.aip.org/aip/jap/article/132/21/213904/2837823/Effect-of-interfacial-nitrogen-defects-on-tunnel', backupUrl:'https://doi.org/10.1063/5.0126570', accessNote:'已打开AIP正式页，核验作者、日期、DOI、第一性原理量子输运、SiN来源假设和AP寄生通道结论；无公开TMR数值。', featured:true
  },
  {
    id:'rsi-97-093902', track:'D', secondaryTracks:['A','E'], title:'Development of an integrated cryogenic diamond anvil cell for photoluminescence of CrSBr', titleZh:'集成低温金刚石压砧光谱平台：液氮/液氦、红宝石标压与CrSBr高压发光',
    authors:'Luther J. Langston, Jacob Hause, Carla Boix-Constant, Samuel Mañas-Valero, Eugenio Coronado, Janice L. Musfeldt', venue:'Review of Scientific Instruments 97, 093902 (2026)', published:'2026-09-01', recommendedOn:date, timeTier:'昨日正式发表',
    system:'用常见低温硬件构造可装载DAC的低温适配器，保留光学通道；以CrSBr光致发光验证并用红宝石荧光标压。',
    conditions:'支持液氮或液氦低温运行，单次典型耗液4–5 L；CrSBr在接近7.6 GPa压力诱导转变时发光强烈淬灭。公开摘要未给最低样品温度、温稳、最高压力、光斑、冷却时间和振动。',
    methods:['机械/热设计低温DAC适配器','以液氮或液氦冷却并稳定样品','红宝石荧光原位标压','采集压缩/卸压CrSBr宽发光带并检验可逆性'],
    summary:'平台用通用部件实现低温—高压—光谱联合；CrSBr在约7.6 GPa附近发光淬灭，压缩/卸压出现可逆红/蓝移；作者解释压缩削弱激子—声子耦合。',
    relevance:'可迁移为极端条件器件平台的“机械热接口—原位标定—样品信号”模板；对MTJ更现实的用途是压力/应力—磁光/电输运关联，而非直接照搬CrSBr物理。',
    limitation:'演示是光致发光而非低噪声电输运；公开来源没有温度下限/稳定度、压力精度、振动、电引线、磁场兼容和自动化数据。',
    industrialization:'属于研发平台原型；还缺FAT/SAT、温度/压力GR&R、24–72 h漂移、引线热漏、电噪声、磁场兼容、安全联锁、样品更换节拍与多实验室复现。',
    whyRecommended:'先看适配器剖面与热锚，再看红宝石标压，最后看7.6 GPa附近PL与可逆回线；30–45分钟。', score:8.9, priority:'A', doi:'10.1063/5.0337421',
    url:'https://pubs.aip.org/aip/rsi/article/97/9/093902/3403415/Development-of-an-integrated-cryogenic-diamond', backupUrl:'https://doi.org/10.1063/5.0337421', accessNote:'已打开RSI正式页，核验Research Article、作者、2026-09-01、DOI、液氮/液氦、红宝石标压、7.6 GPa与4–5 L/run。', featured:true
  },
  {
    id:'jva-44-053207', track:'E', secondaryTracks:['A','B'], title:'Temperature-dependent reaction pathways of fluorination and nitridation in native Nb oxide under NF3/H-radical exposure', titleZh:'Nb原生氧化层的25–250 °C温控氟化—氮化：超导表面的反应窗口与失选边界',
    authors:'Daisuke Ohori, Yamato Aoyama, Yuichi Fujita, Yoshiro Urade, Go Fujii, Kunihiro Inomata, Kazuhiko Endo', venue:'Journal of Vacuum Science & Technology A 44, 053207 (2026)', published:'2026-07-30', recommendedOn:date, timeTier:'近两月正式发表·Editor’s Pick',
    system:'空气暴露Nb表面的Nb2O5/NbOx原生氧化层；暴露于NF3与H自由基并用XPS分辨Nb–O/F/N化学态。',
    conditions:'25–250 °C温度扫描。25 °C形成NbF5和类NH4F物种；100–150 °C稳定NbO2F并发生F介导氮化；200 °C转为直接Nb–O氮化；250 °C氮化深入Nb金属。公开页面未给流量、压力、时间、去除速率和面内均匀性。',
    methods:['让Nb形成可重复原生氧化层','在25/100–150/200/250 °C暴露NF3/H自由基','XPS拟合Nb/O/F/N化学态','按温度划分氟化、F介导氮化和直接氮化路径'],
    summary:'发现三个反应区间；250 °C时形成厚NbON并失去对氧化层的选择性。作者把该窗口与超导量子电路中会引入双能级系统的Nb亚氧化物控制联系起来。',
    relevance:'原子制造价值很高：用温度把表面化学从“选择性改性”推到“侵入基底”，可作为ALE/ALE-like配方开发的机制模板，也提示真空互联中必须控制空气暴露。',
    limitation:'XPS化学态不等于已证明表面TLS降低或量子比特寿命提升；未公开EPC、粗糙度、损伤深度、均匀性、器件电学和低温相干数据。',
    industrialization:'处于表面反应窗口与失选边界；还缺自限饱和曲线、300 mm均匀性、颗粒/腔体记忆、吞吐、原位端点、粗糙度、超导Tc/RRR/TLS/Q和器件良率。',
    whyRecommended:'先看XPS分峰和温度相图，重点比较100–150与200/250 °C机制切换，最后看对TLS的证据边界；45–60分钟。', score:9.8, priority:'S', doi:'10.1116/6.0005517',
    url:'https://pubs.aip.org/avs/jva/article/44/5/053207/3399677/Temperature-dependent-reaction-pathways-of', backupUrl:'https://doi.org/10.1116/6.0005517', accessNote:'已打开JVST A正式HTML/PDF入口，核验Editor’s Pick、作者、日期、DOI、25–250 °C四段化学态与250 °C失选。', featured:true
  }
];

const detailBase = {
  'apl-129-094001':{
    background:'Josephson结以超薄势垒连接两个超导体；常态电阻Rn决定临界电流的设计值。ABAA是给结施加正负交替偏压并加热，让势垒微观状态受控调整，而不是重新流片。', question:'微米结的ABAA效率能否由热历史、氧化与几何参数预测，而不是靠逐只试错？',
    findings:['【直接实测】作者系统改变预热时间、退火温度和偏压。','【直接实测】氧化暴露、线宽和长宽比也会改变电阻调节效率。','【作者解释】微米结需要把热史、势垒初态与电流/热分布共同纳入模型。','【证据边界】公开HTML未给调节幅度、误差和低温Ic数据。','【本站推断】方法可启发MTJ RA后调，但不能直接跨材料照搬。'],
    researchConnection:'变量：预热时间×温度×偏压×氧化暴露×线宽/长宽比；对照：无偏压热退火、单极性偏压、相同面积不同周长；指标：ΔRn/Rn、调节步长、漂移、IcRn、低频噪声、片内3σ。设备：探针台、温控台、双极性源表、低温Ic测试。', terms:['ABAA：正负交替偏压参与的辅助退火。','Rn：结处于常态时的电阻，常用于估计临界电流。']
  },
  'jos-26010048':{
    background:'SOT-MRAM通常用top-pinned pMTJ；参考层需有强PMA和稳定交换耦合。400 °C BEOL退火会诱发Pt–Fe互扩散、PMA退化和读窗损失。RKKY交换场衡量隔离层两侧磁层的间接耦合。', question:'能否只通过增加一层CoFeB和CoFeB/W界面，同时提高PMA、阻挡互扩散并保住400 °C后的TMR？',
    findings:['【直接实测】10 μm器件；CIPT比较RA 50与150 Ω·μm²。','【直接实测】下CoFeB 1.1 nm、RA 50 Ω·μm²时交换场约120 mT。','【直接实测】400 °C后交换场约50 mT，MTJ TMR仍为137%。','【直接表征】350/400 °C TEM/EDS比较结晶与Pt–Fe互扩散。','【作者解释】两额外CoFeB/W界面增强PMA、促进Pt/Co结晶并形成扩散阻挡。'],
    researchConnection:'变量：单/双CoFeB、上下CoFeB厚度、W厚度、350/400 °C时间；对照：SCFB、DCFB、不同扩散阻挡；指标：PMA/Bex、TMR/RA、SIMS/TEM-EDS扩散、Jc—脉宽、WER、Δ、耐久。设备：溅射、场退火、PMOKE/VSM、CIPT、脉冲台、TEM/EDS。', terms:['PMA：磁化易轴垂直薄膜，利于缩放与保持。','RKKY：经非磁层介导的磁层间交换耦合。']
  },
  'jap-132-213904':{
    background:'理想MgO(001)通过Δ1对称态过滤产生高TMR；反平行磁化时透射应很低。界面杂质若引入新电子态，就可能打开AP寄生通道并压缩读窗。', question:'来自SiN覆盖层的N若进入MgO/Fe界面，会怎样改变P/AP量子输运与TMR？',
    findings:['【理论预测】界面N显著降低Fe/MgO/Fe TMR。','【理论预测】MgO/Fe界面额外N会在AP磁化构型产生导电通道。','【作者解释】该寄生通道抬高AP电导，从而降低TMR。','【作者工艺判断】制造中需防止SiN覆盖带来的N污染。','【证据边界】公开摘要没有缺陷浓度、绝对电导或TMR降幅。'],
    researchConnection:'变量：SiN沉积温度/等离子体、阻挡层、清洗和侧壁暴露；对照：无SiN、SiO2/Al2O3钝化、不同N剂量；指标：ToF-SIMS/TEM-EELS N深度、XPS、TMR/RA、1/f噪声、击穿、WER。计算端加入CoFeB、B/O空位和边缘模型。', terms:['AP：两磁电极磁化反平行的高阻态。','Δ1过滤：MgO对特定对称电子态的选择性隧穿。']
  },
  'rsi-97-093902':{
    background:'DAC用两颗金刚石在微区产生高压；红宝石荧光峰位可作为压力计。低温DAC还需解决热锚、光路、压力漂移和低温耗液。', question:'能否用通用低温硬件快速实现可标压、可光谱、热稳定的低温DAC平台？',
    findings:['【平台实测】适配器支持液氮或液氦低温运行并保持光学访问。','【平台实测】红宝石荧光用于精确标压。','【直接实测】CrSBr接近7.6 GPa转变时PL强烈淬灭。','【直接实测】压缩/卸压宽发光带出现可逆红/蓝移。','【作者解释】压缩抑制CrSBr激子—声子耦合；典型耗液4–5 L/run。'],
    researchConnection:'变量：冷媒、压力、扫压方向、光功率和热锚；对照：室温DAC、空适配器、标准红宝石；指标：T/P稳定度、标压误差、PL漂移、振动、耗液、跨日GR&R。迁移MTJ时增加四线电测、应力有限元和磁场兼容。', terms:['DAC：金刚石压砧，高压样品腔。','PL：光致发光，用于跟踪能带和激发态变化。']
  },
  'jva-44-053207':{
    background:'Nb表面空气暴露后形成Nb2O5与亚氧化物；这些非理想层可能贡献超导电路的双能级系统（TLS）。NF3/H自由基可让表面氟化或氮化，温度决定反应是否只停留在氧化层。', question:'25–250 °C内，Nb原生氧化层从氟化到氮化的路径何时切换，什么时候开始侵入Nb金属而失去选择性？',
    findings:['【XPS实测】25 °C生成NbF5与类NH4F物种。','【XPS实测】100–150 °C稳定NbO2F并发生F介导氮化。','【XPS实测】200 °C转为Nb–O键直接氮化并形成NbON。','【XPS实测】250 °C深氮化进入Nb金属、NbON变厚且失去选择性。','【作者动机】控制亚氧化物可能有利于超导电路；【证据边界】本文未实测TLS或相干时间。'],
    researchConnection:'变量：25/100/150/200/250 °C、NF3/H剂量与脉冲顺序；对照：仅NF3、仅H、无处理、真空互联无空气暴露；指标：XPS化学态/深度、ARXPS/TEM-EELS、粗糙、Nb损失、Tc/RRR、谐振器Q/TLS、全片均匀。设备：自由基源、温控真空腔、原位/准原位XPS。', terms:['TLS：无定形/缺陷界面的双能级涨落，可损耗超导谐振器。','选择性：只改性目标氧化层而不过度侵入Nb基底。']
  }
};

const details = papers.map(p => ({id:p.id, oneSentence:p.summary, background:detailBase[p.id].background, question:detailBase[p.id].question, workflow:p.methods, findings:detailBase[p.id].findings,
  explanation:'“直接实测/理论预测—作者解释—本站推断”已逐条标注；机制外推不冒充论文结论，公开来源没有的数据写明未公开。', whyItMatters:[p.relevance,p.industrialization], researchConnection:detailBase[p.id].researchConnection,
  limitationsDetailed:p.limitation, terms:detailBase[p.id].terms, takeaway:p.whyRecommended}));

const review = {id:'review-apr-2d-mtj-2021',kind:'每日综述',track:'B',secondaryTracks:['C','E'],title:'Recent progress and challenges in magnetic tunnel junctions with 2D materials for spintronic applications',titleZh:'二维材料MTJ正式综述：电极、势垒、界面与可制造挑战的比较框架',authors:'Lishu Zhang, Jun Zhou, Hui Li, Lei Shen, Yuan Ping Feng',venue:'Applied Physics Reviews 8, 021308 (2021)',published:'2021-04-15',recommendedOn:date,doi:'10.1063/5.0032538',url:'https://pubs.aip.org/aip/apr/article/8/2/021308/933321/Recent-progress-and-challenges-in-magnetic-tunnel',backupUrl:'https://doi.org/10.1063/5.0032538',assistantSummary:'AIP正式Review Article梳理石墨烯、h-BN、MoS2、CrI3、Fe3GeTe2等作为MTJ电极或势垒的实验/理论进展，并讨论自旋极化、界面、温度与器件挑战。',whySelected:'不把二维材料作为默认中心，而把它用作“原子级界面与隧穿通道”的比较工具；阅读重点是哪些界面控制方法可迁移到MgO/CoFeB，而非追逐纯二维物性。',readingGuide:['先看材料角色分类图。','重点读界面质量、温度与器件尺寸限制。','把理论TMR与实测/室温条件分开。','最后只摘录可迁移的原子层界面与缺陷方法；60–75分钟。'],notNew:true};
const classic = {id:'classic-jap-117-043913',kind:'经典文章',track:'B',secondaryTracks:['E'],title:'Influence of boron diffusion on the perpendicular magnetic anisotropy in Ta|CoFeB|MgO ultrathin films',titleZh:'B扩散控制CoFeB/MgO垂直各向异性的经典证据：0.2 nm Ta、2 nm阈值与20%下降',authors:'Jaivardhan Sinha, Maria Gruber, Masaya Kodzuka, Tadakatsu Ohkubo, Seiji Mitani, Kazuhiro Hono, Masamitsu Hayashi',venue:'Journal of Applied Physics 117, 043913 (2015)',published:'2015-01-29',recommendedOn:date,doi:'10.1063/1.4906096',url:'https://pubs.aip.org/aip/jap/article/117/4/043913/140132/Influence-of-boron-diffusion-on-the-perpendicular',backupUrl:'https://doi.org/10.1063/1.4906096',assistantSummary:'截面TEM/EELS/VSM显示300 °C后CoFeB出现约5 nm纳米晶，但仅结晶不足以产生PMA；约0.2 nm Ta已可吸收B并诱导PMA，CoFeB厚度超过约2 nm后B扩散受限，Ms和Ki同步下降约20%。',whySelected:'它为今日DCFB结果提供原子层级基线：热预算下PMA不只由结晶决定，还取决于B是否有合适的吸收/扩散路径。',readingGuide:['先看TEM/EELS的B分布。','再看Ta厚度与PMA。','重点比较0.2 nm、2 nm和约20%三个阈值。','最后与DCFB的W界面/400 °C数据做DOE；35–50分钟。'],notNew:true};
const curatedDetails = [
 {id:review.id,oneSentence:review.assistantSummary,background:'二维MTJ可让单层或少层材料承担电极、势垒或散射区；理论上界面原子排列清晰，实验上却受污染、接触、面积、温度与磁稳定性限制。',question:'二维材料给MTJ带来的真正机会与尚未解决的器件障碍分别是什么？',workflow:['按电极/势垒角色分类','比较理论与实验TMR','梳理自旋极化和界面机制','评估温度、接触与集成挑战'],findings:['【综述归纳】2D材料可分别作为电极、势垒或中心散射层。','【综述归纳】石墨烯、h-BN、MoS2、CrI3、Fe3GeTe2等证据层级不同。','【证据边界】理论高TMR常依赖理想界面和低温，不能等同室温器件。','【本站判断】对当前工作最有价值的是界面终止、缺陷和接触方法，不是纯二维物性。'],explanation:'这是正式综述的跨文献归纳；每个定量指标仍需回到原始论文。',whyItMatters:[review.whySelected],researchConnection:'建立统一比较表：势垒厚度、界面终止、缺陷、T、H、TMR、RA、面积、接触、保持与循环；再标记哪些方法可迁移MgO/CoFeB。',limitationsDetailed:'综述发表于2021，不能覆盖其后全部进展；二维材料的晶圆规模、封装与良率资料有限。',terms:['范德华界面：层间主要由范德华力结合，悬挂键较少。','自旋过滤：势垒对不同自旋态给出不同透射率。'],takeaway:review.readingGuide.join(' ')},
 {id:classic.id,oneSentence:classic.assistantSummary,background:'CoFeB沉积时多为非晶；退火后在MgO模板上结晶。B必须从CoFeB排出，但它进入Ta、MgO或界面的去向会决定PMA和磁死层。',question:'PMA来自结晶本身，还是需要B向Ta扩散；其关键厚度阈值是什么？',workflow:['制备Ta|CoFeB|MgO厚度系列','300 °C退火','截面TEM观察晶化','EELS定位B','VSM提取Ms与界面各向异性'],findings:['【直接实测】300 °C后出现约5 nm CoFeB纳米晶。','【作者结论】仅有这些纳米晶不足以产生PMA。','【直接实测】约0.2 nm Ta已足以吸收B并诱导PMA。','【直接实测】CoFeB超过约2 nm后B扩散受限。','【直接实测】该阈值处Ms和Ki下降约20%。'],explanation:'厚度、TEM/EELS和磁性为直接实测；B去向控制PMA是作者解释；用于现代DCFB/W堆栈是本站推断。',whyItMatters:[classic.whySelected],researchConnection:'变量：Ta/W厚度、CoFeB厚度、B含量、300–400 °C退火；对照：无吸B层、不同阻挡层；指标：EELS/SIMS B剖面、PMA/Ms/Ki、TMR/RA、噪声和WER。',limitationsDetailed:'薄膜级PMA研究，不含完整MTJ TMR、纳米器件、WER、保持、耐久、晶圆均匀性或BEOL集成。',terms:['Ki：界面磁各向异性能。','磁死层：界面附近磁矩显著降低的有效厚度。'],takeaway:classic.readingGuide.join(' ')}
];

const insights=[
 {id:'2026-09-02-dcfb-diffusion-doe',date,type:'opportunity',typeZh:'研究机会',trackLabel:'B/E · 400 °C界面扩散',title:'把DCFB的PMA优势拆成“界面数—B去向—Pt/Fe扩散—读写窗”四联DOE',subtitle:'用SCFB/DCFB、W厚度、CoFeB厚度和350/400 °C热史建立可制造相图。',summary:'从137%单点TMR推进到可解释、可缩放、可统计的BEOL工艺窗。',status:'本站组合推断，待实验',relatedPaperIds:['jos-26010048','classic-jap-117-043913','jap-132-213904'],question:'400 °C后读窗由B排出不足、Pt–Fe互扩散还是钝化N污染先失效？',rationale:'新MTJ论文给DCFB器件数据，经典文给B扩散阈值，理论文给N缺陷AP寄生通道。',workflow:['SCFB/DCFB×CoFeB/W厚度矩阵','350/400 °C等热剂量退火','SIMS/EELS/EDS联测B/N/Pt/Fe','TMR/RA/PMA/Jc/WER联合建模'],equipment:['多靶磁控溅射','场退火','CIPT/PMOKE/VSM','SIMS/TEM-EELS/EDS','脉冲WER平台'],measurements:['B/N/Pt/Fe深度','PMA/Bex','TMR/RA','Jc—脉宽/WER'],metrics:['片内3σ/Cpk','400 °C后TMR保持率','ppm WER尾部','跨批次GR&R'],evidenceBoundary:'137%、120/50 mT来自10 μm器件；纳米pMTJ和用户堆栈必须重新验证。',firstSteps:['先复现SCFB/DCFB薄膜基线','用见证片做B/N深度标定','再进入50 nm以下器件'],researchConnection:'直接服务CoFeB/MgO、扩散、BEOL和量产统计。',takeaway:'把每个高TMR点还原成界面元素去向和统计工艺窗。'},
 {id:'2026-09-02-cryo-dac-fat',date,type:'method',typeZh:'设备与测量平台',trackLabel:'A/D · 极端条件平台',title:'低温DAC平台的FAT/SAT与MTJ应力—输运迁移路线',subtitle:'从红宝石标压、温稳和耗液开始，再加入四线电测、磁场和自动化。',summary:'把论文原型转成可复现实验设备验收矩阵。',status:'基于同行评议设备文的本站方案',relatedPaperIds:['rsi-97-093902','apl-129-094001'],question:'低温—高压—电输运联合测量的真实误差由压力漂移、热梯度还是引线噪声主导？',rationale:'RSI论文给通用硬件与标压方法，JJ论文提示器件电阻对热史和几何敏感。',workflow:['红宝石压力/温度同步标定','空载与满载热漂移','标准电阻四线噪声测试','MTJ/JJ压力循环与卸载回线'],equipment:['低温DAC适配器','红宝石光谱','低噪声源表/锁相','温度计与磁体可选'],measurements:['T/P稳定度','R噪声谱','压力回差','耗液和跨日复现'],metrics:['标压误差','nV/√Hz','GR&R','4–5 L/run基准偏差'],evidenceBoundary:'4–5 L/run和7.6 GPa来自论文平台；最低温度和电噪声原文未公开。',firstSteps:['定义标准样片和验收阈值','做24 h热漂移','再加入MTJ封装件'],researchConnection:'支持低温输运、应力失效和设备平台建设。',takeaway:'先验收温度、压力与噪声，再解释材料物理。'},
 {id:'2026-09-02-nb-surface-window',date,type:'atomic',typeZh:'原子与极端制造',trackLabel:'E/A · Nb表面化学',title:'25–250 °C Nb氧化层自由基处理窗口与低温器件闭环',subtitle:'把XPS化学态、自限性、Nb损失与Tc/RRR/TLS/Q连接起来。',summary:'验证“选择性表面改性”是否真正改善超导界面，而不是只改变XPS峰。',status:'本站组合推断，需器件验证',relatedPaperIds:['jva-44-053207','apl-129-094001'],question:'100–150 °C的F介导氮化能否减少有害亚氧化物而不侵入Nb？',rationale:'论文给清楚温区和250 °C失选边界，但尚未连接低温相干。',workflow:['NF3/H脉冲与温度饱和矩阵','原位XPS/ARXPS','AFM/TEM-EELS测损伤','Nb线/谐振器Tc、RRR、Q和TLS验证'],equipment:['自由基源与真空互联','原位XPS','AFM/TEM','低温四线与微波谐振'],measurements:['Nb/O/F/N化学态','Nb损失/粗糙','Tc/RRR','Q/TLS噪声'],metrics:['片内均匀性','自限窗口','Q提升置信度','颗粒/循环腔体漂移'],evidenceBoundary:'XPS三段机制为实测；改善TLS/Q只是待验证假设。',firstSteps:['先做25/100/150/200/250 °C见证片','加入仅NF3/仅H对照','禁止直接以250 °C作为器件配方'],researchConnection:'连接原子级表面、真空互联、超导低温输运与可靠性。',takeaway:'化学态优化只有经过低温器件指标验证才成立。'}
];

const report=read('reports.json'); report.reportDate=date; report.updatedAt=updatedAt; report.papers=report.papers.filter(x=>!papers.some(p=>p.id===x.id)).concat(papers); report.history=report.history.filter(x=>x.date!==date).concat([{date,label:'详细日报：JJ后调—双CoFeB 400 °C—界面N缺陷—低温DAC—Nb原子表面反应窗',total:5,counts:{A:1,B:1,C:1,D:1,E:1},paperIds:papers.map(x=>x.id)}]); write('reports.json',report);
write('paper-details.json',read('paper-details.json').filter(x=>!details.some(d=>d.id===x.id)).concat(details));
const curated=read('curated-reading.json'); curated.items=curated.items.filter(x=>![review.id,classic.id].includes(x.id)).concat([review,classic]); curated.history=curated.history.filter(x=>x.date!==date).concat([{date,reviewId:review.id,classicIds:[classic.id]}]); write('curated-reading.json',curated);
write('curated-details.json',read('curated-details.json').filter(x=>!curatedDetails.some(d=>d.id===x.id)).concat(curatedDetails)); write('daily-reading.json',{date,review,classics:[classic]});
const archive=read('insight-archive.json'); archive.items=archive.items.filter(x=>!insights.some(y=>y.id===x.id)).concat(insights); archive.history=archive.history.filter(x=>x.date!==date).concat([{date,opportunityIds:[insights[0].id],methodIds:[insights[1].id],atomicIds:[insights[2].id]}]); write('insight-archive.json',archive);
console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
