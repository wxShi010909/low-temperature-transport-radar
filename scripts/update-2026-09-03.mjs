import fs from 'node:fs';

const dir = new URL('../data/', import.meta.url);
const read = name => JSON.parse(fs.readFileSync(new URL(name, dir), 'utf8'));
const write = (name, value) => fs.writeFileSync(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`);
const date = '2026-09-03';
const updatedAt = '2026-09-03T09:00:00+08:00';

const papers = [
  {
    id:'prb-114-154402', track:'A', secondaryTracks:['B','C'],
    title:'Intrinsic intralayer antiferromagnetism in the near-stoichiometric two-dimensional van der Waals magnet Fe3GeTe2',
    titleZh:'约20 nm Fe₃GeTe₂低温异常霍尔阶跃：把多磁子层切换从输运信号中分离出来',
    authors:'Neesha Yadav, Shivani Kumawat, Sandeep Soni, Brajesh Kumar Mani, Pintu Das',
    venue:'Physical Review B 114, 154402 (2026)', published:'2026-09-02', recommendedOn:date, timeTier:'昨日正式发表',
    system:'机械剥离的近化学计量Fe₃GeTe₂纳米片器件，厚度约20 nm；以异常霍尔电阻Rxy追踪磁化翻转，并用第一性原理比较不同Fe价态之间的交换。公开摘要未给衬底、接触金属、器件宽度和封装方式。',
    conditions:'在低于反铁磁耦合起始温度的温区扫外磁场H，测Rxy(H)磁滞；公开页未给最低温度、最大磁场、偏置电流、纵向电阻和噪声谱，均明确记为原文公开页面未公开。',
    methods:['剥离并图形化约20 nm Fe₃GeTe₂薄片器件','随温度和外磁场测异常霍尔磁滞回线','识别两个尖锐阶跃并区分不同磁性组分','用第一性原理计算Fe³⁺/Fe²⁺交换符号支持实验解释'],
    summary:'约20 nm器件在低温Rxy(H)中出现两个尖锐阶跃；作者将其解释为单层内不同Fe离子的分步磁化切换，并由计算支持Fe³⁺–Fe³⁺反铁磁、Fe³⁺–Fe²⁺铁磁耦合共存。',
    relevance:'重点不在二维材料本身，而在“用低温霍尔阶跃反演层/组分相关磁切换”的方法；可迁移到合成反铁磁参考层、多自由层MTJ和交换偏置堆栈的失配诊断。',
    limitation:'摘要只给约20 nm和阶跃现象，未给起始温度、阶跃场、样本数、器件间离散、接触电阻或长期稳定性；不能直接把Fe₃GeTe₂结论外推到CoFeB/MgO。',
    industrialization:'处于单器件机理识别；还缺晶圆级材料、可控化学计量、封装稳定、室温磁序、阵列统计和CMOS集成。产业价值主要是诊断方法而非候选材料成熟度。',
    whyRecommended:'先看器件与温度序列，再看双阶跃Rxy(H)，最后核对计算的Fe价态交换；35–50分钟。',
    score:8.9, priority:'A', doi:'10.1103/1fpk-fgkj',
    url:'https://journals.aps.org/prb/abstract/10.1103/1fpk-fgkj', backupUrl:'https://doi.org/10.1103/1fpk-fgkj',
    accessNote:'已打开APS正式页，核验题名、作者、2026-09-02、PRB 114 154402、DOI、约20 nm、低温双阶跃异常霍尔与第一性原理结论。', featured:true
  },
  {
    id:'sciadv-aef6328', track:'B', secondaryTracks:['E','C'],
    title:'Breaking voltage-controlled magnetic anisotropy–magnetoresistance trade-off for ultralow-energy switching in magnetic tunnel junctions',
    titleZh:'远程Ir原子级掺杂打破VCMA–TMR权衡：400 °C后160% TMR与3.5 fJ写入',
    authors:'Yu Zhang, Meng Xu, Bowei Zhou, Carter Eckel, Supriya Ghosh, Hwanhui Yun, Ali Habiboglu, Deyuan Lyu, Daniel B. Gopman, Jian-Ping Wang, K. Andre Mkhoyan, Weigang Wang',
    venue:'Science Advances 12(33), eaef6328 (2026)', published:'2026-08-14', recommendedOn:date, timeTier:'近三周正式发表',
    system:'MgO/CoFeB自由层附近采用“远程Ir掺杂”：超薄Ir不直接放在隧穿界面，而由退火扩散把Ir浓度调到界面附近；器件为纳米MTJ。公开摘要未列完整底电极/参考层/帽层厚度、结直径分布和RA。',
    conditions:'经400 °C后退火，在亚纳秒电压脉冲下进行电压驱动切换；报告单次写入能量3.5 fJ、TMR最高160%。公开摘要未给WER、保持、耐久、脉宽具体下限、写电压和样本统计。',
    methods:['在CoFeB自由层远离MgO处插入原子级Ir薄层','退火驱动受控Ir扩散并改变MgO/CoFeB附近浓度','结构/成分表征确认界面工程','测TMR与电压脉冲切换并估算能量'],
    summary:'远程Ir掺杂把增强VCMA所需的重元素与相干隧穿界面部分解耦；纳米MTJ在400 °C退火后保持最高160% TMR，并实现亚纳秒、3.5 fJ/bit电压驱动切换。',
    relevance:'本日最高优先级：它把原子层成分分布、热扩散、MgO/CoFeB界面、BEOL热预算、TMR和写能量放在同一可制造链路。',
    limitation:'3.5 fJ与160%是器件演示，不等于阵列能耗与良率；公开摘要缺RA、WER尾部、保持、耐久、片内3σ、跨批次与读扰。Ir浓度窗口需回到全文图表。',
    industrialization:'最接近低功耗VCMA-MRAM器件模块；已有纳米器件和400 °C兼容证据，但缺300 mm均匀性、原子级掺杂剂量Cpk、阵列外围功耗、ppm WER、10年保持和封装可靠性。',
    whyRecommended:'先看远程Ir位置与退火后浓度剖面，再看VCMA/TMR对掺杂量，最后看亚纳秒3.5 fJ切换图；60–80分钟。',
    score:10, priority:'S', doi:'10.1126/sciadv.aef6328',
    url:'https://www.science.org/doi/10.1126/sciadv.aef6328', backupUrl:'https://doi.org/10.1126/sciadv.aef6328',
    accessNote:'已打开Science Advances题名页及PubMed/机构元数据，核验正式发表日期、作者、DOI、远程Ir掺杂、400 °C、最高160% TMR、亚纳秒与3.5 fJ；全文直接页对自动访问有限，未补写摘要外数值。', featured:true
  },
  {
    id:'pra-26-014108', track:'C', secondaryTracks:['B','D'],
    title:'Efficient modeling algorithm and design-space exploration for double-free-layer magnetic tunnel junctions',
    titleZh:'双自由层MTJ的NEGF–磁动力学耦合优化：117.1倍加速与0.846 ns最优切换',
    authors:'Zifeng Wang, Hongwei Zhou, Suteng Zhao, Weisheng Zhao, Lang Zeng',
    venue:'Physical Review Applied 26, 014108 (2026)', published:'2026-07-31', recommendedOn:date, timeTier:'近五周正式发表',
    system:'双自由层MTJ器件模型；量子输运用非平衡格林函数（NEGF），两自由层磁化用可变步长1(2)阶Runge–Kutta求解，并把耦合强度与热稳定性等作为设计变量。公开摘要未给实际材料堆栈和校准器件尺寸。',
    conditions:'混合能量采样处理尖峰积分，复平面积分绕开能量分辨奇点；随后做单目标和贝叶斯优化。报告验证加速117.1倍、最短切换时间0.846 ns。',
    methods:['建立双自由层NEGF输运方程','用混合采样与复积分加速能量积分','耦合两自由层磁动力学','以实验/高精度基线验证速度与精度','执行单目标和贝叶斯设计空间搜索'],
    summary:'耦合模型相对基线加速117.1倍，使交换耦合、热稳定性等多变量优化可行；搜索得到0.846 ns最短切换配置。',
    relevance:'可作为MTJ DOE的数字前置筛选器：先在模型端缩小自由层厚度、耦合、阻尼、RA与热稳定因子范围，再把有限晶圆资源用于最有信息量的组合。',
    limitation:'属于模型与算法结果；0.846 ns是优化预测，不是阵列实测。公开摘要未给能耗、WER、温度、自热、工艺散布、边缘损伤或模型误差分布。',
    industrialization:'处于器件TCAD/设计空间筛选；距PDK级工具仍缺真实CoFeB/MgO标定、多尺寸多温度数据、蒙特卡洛散布、WER尾部、自热、老化与电路协同验证。',
    whyRecommended:'先看耦合框图，再看两种积分加速与117.1倍验证，最后看贝叶斯优化得到0.846 ns的参数边界；45–60分钟。',
    score:9.5, priority:'S', doi:'10.1103/xlfp-z2hf',
    url:'https://journals.aps.org/prapplied/abstract/10.1103/xlfp-z2hf', backupUrl:'https://doi.org/10.1103/xlfp-z2hf',
    accessNote:'已打开APS正式页，核验题名、作者、2026-07-31、DOI、NEGF、混合采样/复积分、可变步长RK、117.1倍与0.846 ns。', featured:true
  },
  {
    id:'vendor-cryogenic-cfms-18t', track:'D', secondaryTracks:['A','B'],
    title:'High Field Cryogen Free Measurement System (9–18 Tesla) with Resistivity and Hall Effect options',
    titleZh:'Cryogenic Ltd高场CFMS：1.6–400 K、±18 T与可扩展至50 mK的输运验收框架',
    authors:'Cryogenic Limited', venue:'厂商正式技术资料（CFMS产品页与输运模块页）', published:'原文未公开', recommendedOn:date, timeTier:'已核验厂商技术资料',
    system:'无液氦超导磁体、集成VTI和顶装模块；标准1.6–400 K、最高±18 T，可选³He至300 mK或稀释制冷输运至50 mK。输运模块覆盖μΩ–MΩ、双样品六触点、Keithley 2182纳伏表与2450源表。',
    conditions:'支持电阻率、Hall、VSM、AC磁化率、热容和热输运；可选单双轴旋转、最多五样品扫描与软件端电流/电压端切换。页面未给温稳、场均匀度、噪声谱、冷却时间和售价。',
    methods:['确定温度/磁场/角度/阻值范围','按样品数量和接线选择输运探杆','用标准电阻、Hall片和磁矩标准样做FAT/SAT','量化温漂、场回差、噪声与通道串扰','再导入MTJ低频噪声和角度输运流程'],
    summary:'厂商宣称标准1.6–400 K、最高±18 T；扩展可到300 mK或50 mK。电阻/Hall模块以Keithley 2182+2450为标准配置，并支持双样、五样或自动换线。',
    relevance:'对MTJ最有价值的不是标称最低温，而是角度输运、多样品对照、自动换线和标准电子学能否形成可复现的TMR/RA/Hall/噪声测试链。',
    limitation:'这是厂商技术资料，不是科研证明；标称能力必须通过FAT/SAT和用户样片验证。未公开电子温度、1/f噪声底、热电势、线路滤波、脉冲写入带宽和长期漂移。',
    industrialization:'属于可采购设备平台；还需明确MTJ探杆、同轴/三同轴布线、屏蔽接地、脉冲带宽、自动化API、备件、服务响应、GR&R和与现有真空/探针台兼容性。',
    whyRecommended:'先看系统规格，再看电阻/Hall探杆的双样与换线结构，最后把未公开项写成招标验收条款；25–40分钟。',
    score:9.1, priority:'A', doi:'',
    url:'https://www.cryogenic.co.uk/products/high-field-cfms-9-18-tesla', backupUrl:'https://www.cryogenic.co.uk/products/resistivity-and-hall-effect',
    accessNote:'已打开Cryogenic Ltd两份正式产品页，核验±18 T、1.6–400 K、300 mK/50 mK扩展、μΩ–MΩ、双样六触点、2182/2450和多样品选项；明确仅为厂商技术资料。', featured:true
  },
  {
    id:'jva-44-053204', track:'E', secondaryTracks:['B','D'],
    title:'hν-MacEtch of Al-rich AlGaN: Enabling plasma-free processing in the ultra-wide-bandgap regime',
    titleZh:'Al₀.₆Ga₀.₄N无等离子体光辅助MacEtch：接触均匀性由>15%降至<5%',
    authors:'Xihang Wu, Yuyao Wang, Gavin Latham, Aadil Waseem, Xiuling Li',
    venue:'Journal of Vacuum Science & Technology A 44, 053204 (2026)', published:'2026-07-22', recommendedOn:date, timeTier:'近六周正式发表',
    system:'Al0.6Ga0.4N/GaN异质结构；使用改进HF/(NH4)2S2O8溶液与光子驱动金属辅助化学刻蚀（hν-MacEtch），避免ICP-RIE离子轰击。随后形成欧姆接触比较接触电阻及均匀性。',
    conditions:'同一化学体系兼容高Al组分AlGaN和GaN；公开摘要报告接触电阻率相当、均匀性<5%，对照ICP-RIE为>15%。公开摘要未给刻蚀速率、粗糙度、金属催化层、光强、温度、片径和样本数。',
    methods:['在Al0.6Ga0.4N/GaN上定义金属辅助区域','用HF/(NH4)2S2O8与光照驱动无等离子体刻蚀','清洗并形成欧姆接触','与ICP-RIE样品比较接触电阻和空间均匀性'],
    summary:'作者首次展示高Al AlGaN的无等离子体hν-MacEtch；接触电阻率与ICP-RIE相当，但接触均匀性由>15%改善至<5%，并可用一套流程覆盖AlGaN/GaN。',
    relevance:'虽非MTJ材料，但它提供“去掉离子轰击—保持接触性能—显著收窄离散”的强方法学证据，可迁移检验MTJ侧墙低损伤刻蚀/后清洗。',
    limitation:'材料和湿化学与CoFeB/MgO不同；<5%并未说明是1σ、极差还是其他定义，片径与样本数未公开，不能直接宣称晶圆量产。',
    industrialization:'处于接触工艺验证；尚缺大面积片内图、图形尺寸依赖、刻蚀各向异性、残留/颗粒、催化金属污染、线宽偏差、批次Cpk、可靠性和工具吞吐。',
    whyRecommended:'先看反应与图形流程，再看接触电阻分布图，重点核对<5%与>15%的统计定义；40–55分钟。',
    score:9.4, priority:'S', doi:'10.1116/6.0005575',
    url:'https://pubs.aip.org/avs/jva/article/44/5/053204/3399122/h-MacEtch-of-Al-rich-AlGaN-Enabling-plasma-free', backupUrl:'https://doi.org/10.1116/6.0005575',
    accessNote:'已打开JVST A正式HTML，核验Research Article、作者、2026-07-22、DOI、Al0.6Ga0.4N、HF/(NH4)2S2O8、接触电阻相当及<5%对>15%均匀性。', featured:true
  }
];

const detailData = {
  'prb-114-154402':{
    background:'异常霍尔效应可把垂直磁化投影转成横向电阻；若磁性组分分步翻转，Rxy(H)会出现多阶跃。近化学计量Fe3GeTe2含不同价态Fe，层内交换并非必然全铁磁。',
    question:'低温异常霍尔的双阶跃究竟是外来第二相，还是同一层内不同Fe离子的本征反铁磁/铁磁耦合共存？',
    findings:['【直接实测】约20 nm剥离器件在低于反铁磁耦合起始温度时出现两个尖锐Rxy阶跃。','【直接实测】阶跃随外磁场扫描形成分步磁滞。','【理论支持】第一性原理得到Fe³⁺–Fe³⁺层内反铁磁、Fe³⁺–Fe²⁺铁磁耦合共存。','【作者解释】两个阶跃来自单层内不同Fe离子的磁化切换。','【本站推断】同样的“阶跃分解”可用于合成反铁磁/多自由层MTJ，但材料结论不可迁移。'],
    terms:['异常霍尔电阻：由磁化和Berry曲率等引起的横向电阻。','层内反铁磁：同一原子层中相邻磁矩趋向反平行。'],
    connection:'变量：温度×扫场方向×角度×偏置；对照：单磁层、已知合成反铁磁堆栈、厚度系列；指标：阶跃场、回差、Rxy/Rxx、噪声、训练效应、循环漂移。设备：低温矢量磁场、Hall桥、低噪声电流源/锁相。'
  },
  'sciadv-aef6328':{
    background:'VCMA用电场临时降低MgO/CoFeB界面磁各向异性，理论上写入能量很低；但把重元素直接放在界面常破坏Δ1相干隧穿并降低TMR。远程掺杂先把Ir放远，再借退火扩散调界面附近浓度。',
    question:'能否让Ir增强VCMA却不直接污染隧穿界面，从而同时保住高TMR、400 °C热预算和亚纳秒低能写入？',
    findings:['【直接实测】纳米MTJ经400 °C后退火仍有最高160% TMR。','【直接实测】电压驱动切换进入亚纳秒范围。','【直接实测/估算】单次切换能量为3.5 fJ/bit。','【作者解释】远程Ir在退火中形成受控浓度分布，使VCMA增强与相干隧穿损伤解耦。','【证据边界】公开摘要未给RA、WER、保持、耐久与全片统计。'],
    terms:['VCMA：电压控制磁各向异性。','远程掺杂：掺杂源不直接置于功能界面，而由扩散建立目标浓度。'],
    connection:'变量：Ir名义厚度/距离×退火温度/时间×CoFeB/MgO厚度；对照：无Ir、界面直接Ir、不同重金属；指标：STEM-EELS/SIMS浓度、VCMA系数、TMR/RA、3.5 fJ复现、WER—脉宽、Δ、耐久。设备：原子级溅射、400 °C场退火、截面STEM、脉冲概率测试。'
  },
  'pra-26-014108':{
    background:'双自由层可通过耦合提高热稳定，但引入更多厚度、交换和阻尼变量。NEGF计算量子输运，LLG类方程描述磁化；直接耦合计算通常太慢，难以做贝叶斯搜索。',
    question:'怎样在保留量子输运尖峰和两层磁动力学的前提下，把计算加速到可做系统设计空间搜索？',
    findings:['【理论/算法】混合能量采样处理尖峰积分。','【理论/算法】复积分绕过能量分辨奇点。','【验证结果】耦合模型实现117.1倍加速。','【理论预测】优化参数下最短切换时间0.846 ns。','【证据边界】0.846 ns不是器件或阵列实测，公开摘要无WER/自热/散布。'],
    terms:['NEGF：非平衡格林函数，计算纳米器件偏压下量子输运。','贝叶斯优化：用代理模型选择最有价值的下一组参数。'],
    connection:'变量：两自由层厚度、耦合、阻尼、Ms、PMA、RA、温度；对照：单自由层、全精度积分、固定步长求解；指标：误差、运行时间、切换时间/能耗、WER、Δ。先用用户实测R-H/TMR/Jc标定，再做蒙特卡洛工艺散布。'
  },
  'vendor-cryogenic-cfms-18t':{
    background:'VTI把样品温度与超导磁体组合；真正的低温输运上限往往由线缆热电势、滤波、接地、场扫感应和样品热化决定，而非标称基温。FAT是出厂验收，SAT是现场验收。',
    question:'这套CFMS的标称温场和模块化能力，怎样转成MTJ可复现测试的验收条款？',
    findings:['【厂商标称】标准温区1.6–400 K，磁场最高±18 T。','【厂商标称】可选³He到300 mK、稀释制冷输运到50 mK。','【厂商标称】电阻/Hall范围μΩ–MΩ，标准电子学为Keithley 2182和2450。','【厂商标称】双样六触点、最多五样扫描和软件换线可选。','【证据边界】温稳、噪声、电子温度、脉冲带宽与价格未公开，必须验收。'],
    terms:['VTI：变温插入件/变温样品空间。','FAT/SAT：出厂/现场验收测试。'],
    connection:'变量：温度、场、角度、扫速、电流、积分时间；标准件：10 Ω/1 kΩ低温电阻、Hall片、短路/开路、磁矩标准样；指标：温稳、场回差、μΩ分辨、nV/√Hz、热电势、串扰、GR&R。MTJ需另验脉冲线和1/f噪声。'
  },
  'jva-44-053204':{
    background:'ICP-RIE靠离子轰击和化学反应实现方向性，但会产生晶格缺陷、表面非化学计量和侧墙损伤。光辅助金属催化化学刻蚀用光生载流子驱动局部氧化/溶解，可在无等离子体下加工。',
    question:'高Al组分AlGaN能否用同一套无等离子体湿法兼容GaN，并在不牺牲接触电阻的前提下降低离散？',
    findings:['【直接实测】实现Al0.6Ga0.4N的hν-MacEtch。','【直接实测】改进HF/(NH4)2S2O8体系同时兼容AlGaN与GaN。','【直接实测】欧姆接触电阻率与ICP-RIE对照相当。','【直接实测】接触均匀性<5%，ICP-RIE对照>15%。','【本站推断】低损伤思路可用于MTJ侧墙对照，但化学体系不能直接迁移。'],
    terms:['MacEtch：金属辅助化学刻蚀。','UWBG：超宽禁带半导体，Al-rich AlGaN属于此类。'],
    connection:'变量：光强、HF/氧化剂比例、温度、时间、催化金属；对照：ICP-RIE、暗反应、无金属；指标：刻蚀速率/均匀性、CD、粗糙度、残留、接触ρc、器件漏电与可靠性。迁移MTJ时改为低能IBE/反应离子束/湿法后处理三组。'
  }
};

const details = papers.map(p => ({
  id:p.id, oneSentence:p.summary, background:detailData[p.id].background, question:detailData[p.id].question,
  workflow:p.methods, findings:detailData[p.id].findings,
  explanation:'以上逐条区分直接实测、理论/算法、作者解释、厂商标称与本站推断；原文公开来源未给的数字均未补写。',
  whyItMatters:[p.relevance,p.industrialization], researchConnection:detailData[p.id].connection,
  limitationsDetailed:p.limitation, terms:detailData[p.id].terms, takeaway:p.whyRecommended
}));

const review = {
  id:'review-molecules-28104151', kind:'每日综述', track:'B', secondaryTracks:['A','D'],
  title:'Electromagnetic Radiation Effects on MgO-Based Magnetic Tunnel Junctions: A Review',
  titleZh:'MgO基MTJ电磁辐照效应正式综述：从材料容限到原位可靠性缺口',
  authors:'Dereje Seifu, Qing Peng, Kit Sze, Jie Hou, Fei Gao, Yucheng Lan',
  venue:'Molecules 28, 4151 (2023)', published:'2023-05-17', recommendedOn:date,
  doi:'10.3390/molecules28104151', url:'https://www.mdpi.com/1420-3049/28/10/4151', backupUrl:'https://doi.org/10.3390/molecules28104151',
  assistantSummary:'正式Review汇总宇宙辐射、γ射线、X射线、UV–vis、红外、微波与射频对MgO势垒、磁层和界面的影响，指出很多“耐辐照”结论来自辐照后测量，而非原位动态测试。',
  whySelected:'把今天3.5 fJ VCMA器件从性能点推进到可靠性验证：辐照、偏压、温度与热循环应分离设计，并区分辐照中与辐照后状态。',
  readingGuide:['先看辐射类型与能量耦合路径图。','重点读γ射线结果及相互矛盾报告。','标记原位与辐照后证据。','最后生成MTJ辐照×温度×偏压DOE；55–75分钟。'], notNew:true
};

const classic = {
  id:'classic-nmat3172', kind:'经典文章', track:'B', secondaryTracks:['C'],
  title:'Induction of coherent magnetization switching in a few atomic layers of FeCo using voltage pulses',
  titleZh:'电压脉冲驱动数原子层FeCo相干翻转：VCMA双稳态切换的经典起点',
  authors:'Yoichi Shiota, Takayuki Nozaki, Frédéric Bonell, Shinichi Murakami, Teruya Shinjo, Yoshishige Suzuki',
  venue:'Nature Materials 11, 39–43 (2012)', published:'2011-11-13', recommendedOn:date,
  doi:'10.1038/nmat3172', url:'https://www.nature.com/articles/nmat3172', backupUrl:'https://doi.org/10.1038/nmat3172',
  assistantSummary:'FeCo(001)/MgO(001)/Fe(001)纳米结用电压脉冲改变界面各向异性，演示相干进动与双稳态toggle切换；理想等效电路估算单次能耗约10^4 kBT、约为自旋电流写入的1/500。',
  whySelected:'与2026年远程Ir/3.5 fJ工作成对阅读：经典文给VCMA相干进动原理，新文回答如何在400 °C后同时保住TMR。',
  readingGuide:['先看图1的FeCo/MgO结构和电压各向异性。','再看图2宏自旋相图。','重点看图3/4脉冲时长—场—切换概率。','最后比较3.5 fJ与经典理想估算的定义；35–50分钟。'], notNew:true
};

const curatedDetails = [
  {id:review.id,oneSentence:review.assistantSummary,background:'辐射可在MgO、磁电极、界面与外围CMOS中产生电离、位移损伤和充电；不同能量、剂量率、偏压与测量时点会给出不同结论。',question:'MgO MTJ在不同电磁辐照下究竟有哪些实证容限，现有“耐辐照”说法缺什么？',workflow:['按辐射源分类','比较势垒/磁层/界面响应','区分原位与辐照后测试','汇总相互矛盾结果与机制'],findings:['【综述归纳】覆盖宇宙、γ、X射线、UV–vis、红外、微波与射频。','【综述归纳】多数MgO MTJ报告较高γ容限。','【关键边界】很多实验只做辐照后测量，不能证明辐照中状态等同。','【作者建议】需要更多原位、实时和条件统一的实验。','【本站推断】必须把MTJ与外围CMOS失效分开。'],explanation:'综述结论不替代单篇原始数据；剂量、能量和偏置需回查原文。',whyItMatters:[review.whySelected],researchConnection:'变量：γ/X射线剂量×剂量率×温度×P/AP状态×偏压；对照：无辐照、无偏压、CMOS空阵列；指标：TMR/RA、Hc、WER、保持、1/f噪声、击穿和退火恢复。',limitationsDetailed:'2023年综述对最新器件覆盖有限，不提供统一阵列级寿命模型。',terms:['总电离剂量：累积电离能量沉积。','原位辐照：在辐射进行时同步测量。'],takeaway:review.readingGuide.join(' ')},
  {id:classic.id,oneSentence:classic.assistantSummary,background:'MgO/FeCo界面各向异性可被电场瞬时改变；若脉冲时长匹配磁化进动相位，可在不依赖大电流的情况下toggle翻转。',question:'电压能否在数原子层金属磁体中实现相干且双稳态的纳米存储翻转？',workflow:['制备FeCo/MgO/Fe外延纳米结','测TMR与电压各向异性','宏自旋模拟脉冲窗口','测脉宽—磁场—切换概率'],findings:['【直接实测】实现电压脉冲诱导相干进动。','【直接实测】实现双稳态toggle切换。','【结构】自由磁层为数个原子层FeCo(001)，邻接MgO。','【理论估算】理想等效电路能耗约10^4 kBT。','【作者比较】约为自旋电流切换能耗的1/500。'],explanation:'切换为实测；能耗是理想等效电路估算，不是含驱动外围的系统能耗。',whyItMatters:[classic.whySelected],researchConnection:'变量：脉宽、幅度、外场、温度、界面掺杂；指标：Psw、WER、TMR/RA、能量定义、相位容差。用新文远程Ir样与无Ir样比较脉宽窗口和温度漂移。',limitationsDetailed:'需要外场/精确脉宽窗口，材料与现代CoFeB pMTJ不同；无阵列、ppm WER、保持和400 °C证据。',terms:['相干进动：磁矩近似整体按确定相位旋转。','toggle切换：相同脉冲每次把状态翻到另一稳定态。'],takeaway:classic.readingGuide.join(' ')}
];

const insights = [
  {id:'2026-09-03-ir-diffusion-vcma-doe',date,type:'opportunity',typeZh:'研究机会',trackLabel:'B/E · VCMA与原子扩散',title:'远程Ir“位置—扩散—界面—读写”四联DOE',subtitle:'把3.5 fJ与160% TMR从单点拆成可制造工艺窗。',summary:'Ir名义厚度和距MgO距离，与退火热剂量共同决定界面浓度、VCMA、TMR和WER。',status:'本站组合推断，待实验',relatedPaperIds:['sciadv-aef6328','pra-26-014108','classic-nmat3172'],question:'增强VCMA所需的Ir浓度窗有多宽，400 °C后能否保持ppm级WER和10年保持？',rationale:'新文给器件性能，模型文给快速搜索，经典文给相干进动窗口。',workflow:['无Ir/界面Ir/远程Ir厚度与距离矩阵','350/400 °C时间分级','STEM-EELS/SIMS定量Ir/B/O','TMR/RA/VCMA/脉宽—WER联合测量','把实测散布反馈给贝叶斯模型'],equipment:['多靶原子级溅射','场退火','STEM-EELS/ToF-SIMS','高速脉冲与概率测试'],measurements:['Ir/B/O深度','TMR/RA','VCMA系数','WER—脉宽','Δ与耐久'],metrics:['片内3σ/Cpk','3.5 fJ复现率','160% TMR保持率','ppm WER尾部'],evidenceBoundary:'3.5 fJ、160%、400 °C为论文器件结果；阵列和300 mm尚未公开。',firstSteps:['先做见证片浓度标定','再做无Ir/直接Ir/远程Ir三组','最后进入纳米器件'],researchConnection:'直接服务MgO/CoFeB原子级界面与低功耗存储。',takeaway:'不以掺杂名义厚度替代退火后的真实界面浓度。'},
  {id:'2026-09-03-cfms-mtj-fat',date,type:'method',typeZh:'设备与测量平台',trackLabel:'A/D · CFMS验收',title:'±18 T CFMS到MTJ低噪声输运的FAT/SAT路线',subtitle:'用标准件把温度、磁场、换线、角度与噪声逐项验收。',summary:'厂商标称只有转成量化验收结果，才能支撑MTJ机制判断。',status:'基于厂商资料的本站验收方案',relatedPaperIds:['vendor-cryogenic-cfms-18t','prb-114-154402'],question:'双阶跃或小Hall信号是真磁相还是换线、热电势和场扫伪影？',rationale:'FGT论文显示低温磁输运阶跃敏感，CFMS页面提供多样/换线/角度硬件。',workflow:['开短路和标准电阻噪声基线','Hall标准片场线性与回差','双样/五样串扰和换线测试','角度回零与温漂','MTJ R-H/TMR/1/f噪声脚本化'],equipment:['CFMS','2182纳伏表','2450源表','标准电阻/Hall片','低噪声前放/锁相'],measurements:['T/H稳定度','热电势','μΩ分辨','串扰','角度误差','重复装样GR&R'],metrics:['nV/√Hz','ppm/K','场回差','跨日CV','脚本恢复率'],evidenceBoundary:'系统规格为厂商标称；电子温度和噪声底必须现场测。',firstSteps:['写FAT/SAT表','准备三类标准件','先验1.6–300 K再考虑mK扩展'],researchConnection:'支撑低温MTJ、Hall和可靠性自动化平台。',takeaway:'最低温不是第一验收指标，噪声、热化和复现性才是。'},
  {id:'2026-09-03-low-damage-patterning',date,type:'atomic',typeZh:'原子与极端制造',trackLabel:'E/B · 低损伤图形化',title:'用“无等离子体对照”量化MTJ侧墙离子损伤',subtitle:'借AlGaN均匀性结果设计低能IBE/RIBE/后处理对照。',summary:'把刻蚀性能拆成CD、残留、成分、接触与器件离散，而非只看去除速率。',status:'跨材料方法迁移，待MTJ验证',relatedPaperIds:['jva-44-053204','sciadv-aef6328'],question:'MTJ图形化离散中，有多少来自离子损伤而非堆栈本征散布？',rationale:'hν-MacEtch在保持接触电阻时把均匀性从>15%降至<5%，给出强对照思路。',workflow:['常规IBE、低能IBE、反应离子束/温和后处理分组','相同硬掩膜与CD','截面EELS/XPS侧墙成分','TMR/RA/噪声/击穿/循环统计'],equipment:['IBE/RIBE','截面TEM-EELS','XPS/ToF-SIMS','自动探针台'],measurements:['侧墙损伤深度','CD/粗糙','TMR/RA','1/f噪声','击穿与WER'],metrics:['器件CV','边缘损伤nm','良率/Cpk','可靠性尾部'],evidenceBoundary:'<5%与>15%来自AlGaN接触，不是MTJ直接证据。',firstSteps:['先在非磁见证结构标定损伤','再用大尺寸MTJ筛选','最后进入50 nm以下'],researchConnection:'直接连接图形化损伤、接触和量产离散。',takeaway:'先建立低损伤对照，才能把器件离散归因给界面或刻蚀。'}
];

const report = read('reports.json');
report.reportDate=date; report.updatedAt=updatedAt;
report.papers=report.papers.filter(x=>!papers.some(p=>p.id===x.id)).concat(papers);
report.history=report.history.filter(x=>x.date!==date).concat([{date,label:'详细日报：低温磁输运阶跃—远程Ir VCMA—双自由层建模—CFMS验收—低损伤刻蚀',total:5,counts:{A:1,B:1,C:1,D:1,E:1},paperIds:papers.map(x=>x.id)}]);
write('reports.json',report);
write('paper-details.json',read('paper-details.json').filter(x=>!details.some(d=>d.id===x.id)).concat(details));
const curated=read('curated-reading.json');
curated.items=curated.items.filter(x=>![review.id,classic.id].includes(x.id)).concat([review,classic]);
curated.history=curated.history.filter(x=>x.date!==date).concat([{date,reviewId:review.id,classicIds:[classic.id]}]);
write('curated-reading.json',curated);
write('curated-details.json',read('curated-details.json').filter(x=>!curatedDetails.some(d=>d.id===x.id)).concat(curatedDetails));
write('daily-reading.json',{date,review,classics:[classic]});
const archive=read('insight-archive.json');
archive.items=archive.items.filter(x=>!insights.some(y=>y.id===x.id)).concat(insights);
archive.history=archive.history.filter(x=>x.date!==date).concat([{date,opportunityIds:[insights[0].id],methodIds:[insights[1].id],atomicIds:[insights[2].id]}]);
write('insight-archive.json',archive);
console.log(`Updated ${date}: 5 papers, review, classic, 3 routes.`);
