import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const write = (f, v, pretty = true) => fs.writeFileSync(path.join(root, f), `${JSON.stringify(v, null, pretty ? 2 : 0)}\n`);
const add = (a, x) => { if (a.some((e) => e.id === x.id)) throw new Error(`duplicate id: ${x.id}`); a.push(x); };
const date = "2026-10-09";
const ids = {
  A: "a-superconducting-spin-heat-engine-49052-z",
  B: "b-saf-free-sot-iedm-10873509",
  C: "c-dmft-tmr-physrevb-035133",
  D: "d-cryogenic-vsm-platform",
  E: "e-cofeb-insertion-pma-4c11029",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B", "C"],
    title: "Superconducting spintronic heat engine", titleZh: "超导自旋热机｜25–800 mK隧穿热电、磁态翻转热电压符号",
    authors: "Clodoaldo I. L. de Araujo et al.", venue: "Nature Communications 15, 4823 (2024)", published: "2024-06-06", timeTier: "近2年高质量/亚开尔文隧穿",
    system: "EuS/Al/AlOₓ/Co隧道结：EuS通过交换作用使Al超导态自旋分裂，AlOₓ为绝缘势垒，Co作为铁磁对电极；平行/反平行磁态构成热电自旋阀。",
    conditions: "浴温25–800 mK；四线隧穿谱与负载测量；代表热机测试采用Co加热电流40 μA、负载150 kΩ，磁态比较包括约+10 mT平行、零场剩磁和约−10 mT反平行。原文还给出Al能隙约200 μeV。",
    methods: ["亚开尔文四线输运", "隧穿谱", "热电压/负载功率", "磁滞态控制", "热模型"],
    summary: "【实测】25–800 mK量化热机效率；【实测】热电压约10 μV、Seebeck系数数百μV/K量级；【实测】平行/反平行磁态可反转热电压符号；【实测】低功率效率约5×10⁻⁸；【模型】电子—声子耦合是高温效率主要限制。",
    relevance: "不是CoFeB/MgO存储单元，但其‘磁态—隧穿谱—热梯度—读出符号’闭环可迁移到低温MTJ自热、热电寄生和状态识别；也给出低温器件热预算与接线泄漏的严谨范式。",
    limitation: "工作温区低于1 K、材料为EuS/Al/AlOₓ/Co且效率极低；热电存储只是概念性功能，未给晶圆制造、写入能耗、保持、耐久、WER和CMOS读出。",
    industrialization: "最接近亚开尔文传感/能量采集和低温存储概念验证；距离可制造器件仍缺更高工作温度、低结阻、热隔离、阵列复用、封装热阻和寿命统计。",
    whyRecommended: "先看图1隧穿谱与P/AP态，再看图3负载功率和效率，最后看电子—声子热模型；45–60分钟。",
    score: 8.9, priority: "A", doi: "10.1038/s41467-024-49052-z", arxiv: "2310.18132",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11156981/", backupUrl: "https://doi.org/10.1038/s41467-024-49052-z",
    accessNote: "本轮已打开PMC全文，核验材料堆栈、25–800 mK范围、约10 μV、负载、效率及理论边界。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["C", "E"],
    title: "Achieving 1ppm write-error rate in SOT-MRAM with synthetic antiferromagnetic free layer", titleZh: "300 mm SAF自由层SOT-MRAM｜WER达1 ppm且耐受400 °C",
    authors: "Van Dai Nguyen et al.", venue: "2024 IEEE International Electron Devices Meeting (IEDM)", published: "2024-12-07", timeTier: "正式会议论文/300 mm器件",
    system: "垂直SOT-MRAM，在MTJ柱内使用合成反铁磁（SAF）自由层；用微磁模拟选择关键材料参数，再在300 mm晶圆器件上验证低误码写入。",
    conditions: "公开摘要明确给出最低WER 10⁻⁶、400 °C热预算和300 mm制造；完整膜层、结尺寸、SOT通道、脉宽/电流密度、样本量、场辅助条件、TMR/RA、保持和耐久数值未公开，因此不补写。",
    methods: ["300 mm集成", "SAF自由层", "SOT脉冲写入", "微磁模拟", "WER统计"],
    summary: "【实测】垂直SOT-MRAM最低WER达到10⁻⁶；【实测】器件经过400 °C热预算；【实测】在300 mm晶圆制造；【模拟+实测】微磁参数筛选指导真实器件；【边界】摘要未给完整尾部样本量和保持/耐久。",
    relevance: "同时命中用户最关键的器件指标：低WER、BEOL热预算、300 mm和模型—实验闭环；比单纯材料力矩更接近制造决策。",
    limitation: "1 ppm需要明确脉冲条件、温度、循环数和置信区间才能比较；公开入口缺晶圆内/晶圆间均匀性、良率、TMR/RA、10年保持、耐久、TDDB和阵列半选数据。",
    industrialization: "最接近300 mm SOT-MRAM器件模块和低WER验证；仍缺公开的全流程良率、阵列外围、ECC、IR-drop、跨批统计与成本/吞吐。",
    whyRecommended: "先看SAF自由层结构和模拟参数，再看1 ppm WER条件，最后核对400 °C与300 mm证据；40–55分钟。",
    score: 9.8, priority: "S", doi: "10.1109/IEDM50854.2024.10873509", arxiv: "",
    url: "https://imec-publications.be/entities/publication/3e6f5365-3bef-4932-81ad-edc4223be434", backupUrl: "https://doi.org/10.1109/IEDM50854.2024.10873509",
    accessNote: "本轮已打开imec正式题录，核验论文类型、作者、300 mm、400 °C和10⁻⁶ WER。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["A", "B"],
    title: "Effect of dynamical electron correlations on the tunnelling magnetoresistance of Fe/MgO/Fe(001) junctions", titleZh: "Fe/MgO/Fe动态关联输运｜DMFT修正有限偏压TMR塌缩",
    authors: "Declan Nell, Stefano Sanvito, Ivan Rungger, and Andrea Droghetti", venue: "Physical Review B 111, 035133 (2025)", published: "2025-01-15", timeTier: "近期正式发表/多体量子输运",
    system: "理想Fe/MgO/Fe(001)磁性隧道结，将密度泛函理论（DFT）、动力学平均场理论（DMFT）与非平衡格林函数（NEGF）结合，计算平行/反平行态的零偏和有限偏压输运。",
    conditions: "采用刚性位移近似处理有限偏压，输出电子结构、P/AP态I–V与TMR(V)。公开摘要未给MgO层数、k点、U/J参数、数值TMR或塌缩阈值，须回全文核对。",
    methods: ["DFT+DMFT", "NEGF量子输运", "有限偏压I–V", "P/AP态比较", "Fe 3d动态自能"],
    summary: "【理论】动态关联降低Fe 3d z²态自旋劈裂并引入有限寿命；【理论】P态高偏压前仍以多数自旋相干Δ₁输运为主；【理论】AP态随偏压增强出现非弹性电子—电子散射；【理论】DMFT较DFT更早预测TMR受抑，改善与实验的一致性。",
    relevance: "为偏压TMR、读写电压窗口和界面失效诊断提供比静态DFT更可信的理论基线；可与氧空位、B扩散和实测TMR(V,T)联合标定。",
    limitation: "理想Fe/MgO/Fe不等同非晶CoFeB退火器件；模型仍不含真实缺陷、粗糙、声子、局域升温和统计分布，且零偏DFT/DMFT都高估实验TMR。",
    industrialization: "最接近紧凑模型和偏压窗口筛选；距离工艺放行需缺陷模型、实际堆栈参数、温变I–V/TMR和晶圆统计校准。",
    whyRecommended: "先看方法框图，再看P/AP态I–V差异和TMR(V)，最后核对零偏高估与缺陷边界；40–55分钟。",
    score: 9.2, priority: "S", doi: "10.1103/PhysRevB.111.035133", arxiv: "",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.035133", backupUrl: "https://doi.org/10.1103/PhysRevB.111.035133",
    accessNote: "本轮已打开APS出版社页面，核验DFT+DMFT+NEGF、P/AP态、有限偏压和TMR结论。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A", "B"],
    title: "Cryogenic Limited Vibrating Sample Magnetometer", titleZh: "Cryogenic Ltd VSM｜1.6–400 K、10 s积分噪声底10⁻⁶与持续/扫场模式",
    authors: "Cryogenic Limited", venue: "厂商正式产品页与规格资料", published: "2026-01-01", timeTier: "厂商技术资料/不作为科研证明",
    system: "无液氦超导磁体/VTI中的振动样品磁强计；样品振动引起拾取线圈磁通变化，锁相检测磁矩，可与电阻、Hall、热输运及³He插件构成多物性平台。",
    conditions: "厂商标称标准温区1.6–400 K，可选加热器延伸至1000 K；10 s积分时噪声底灵敏度10⁻⁶（网页未在该句明确单位）；磁体可扫场或持续模式；自动气路、样品居中与校准。",
    methods: ["VSM磁矩", "锁相检测", "VTI温控", "持续/扫场磁体", "自动居中校准"],
    summary: "【厂商标称】1.6–400 K、可选至1000 K；【厂商标称】10 s积分噪声底10⁻⁶；【平台】拾取线圈位于VTI内靠近样品；【平台】自动气路、居中和校准；【兼容】可配300 mK ³He与旋转探杆。",
    relevance: "可把CoFeB/MgO退火、SAF耦合、PMA和低温输运前筛查放在同一磁场/温度基础设施上，并用标准样做跨机台GR&R。",
    limitation: "全部为厂商资料，不证明用户样品端灵敏度；网页未在噪声句明确单位，也未公开振动背景谱、扫场速率依赖、绝对精度、薄膜夹具空白、跨机台GR&R和维护成本。",
    industrialization: "最接近材料/薄膜研发计量和失效分析，不是量产在线测试；仍缺300 mm全片映射、自动上下料、MES、节拍、校准追溯和MTJ脉冲电测。",
    whyRecommended: "先看拾取结构与噪声定义，再看温区和持续场，最后制定Ni标准样/空夹具/薄膜片GR&R；25–35分钟。",
    score: 8.8, priority: "A", doi: "", arxiv: "",
    url: "https://www.cryogenic.co.uk/products/vibrating-sample-magnetometer-vsm", backupUrl: "https://www.cryogenic.co.uk/about-us",
    accessNote: "本轮已打开Cryogenic Ltd官方VSM页面，核验温区、噪声底、积分时间、气路、居中及磁体模式；均标注为厂商声明。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B", "D"],
    title: "Optimizing Perpendicular Magnetic Anisotropy in MgO/CoFeB Structures Through Ultrathin CoFeB-Enhanced Ta Capping Layers", titleZh: "0.43 nm CoFeB界面插层｜400 °C后Ki达3.8 erg/cm²",
    authors: "Yu-Shen Yen, Chun-Liang Yang, and Yung-Ling Chang", venue: "ACS Omega 10, 18510–18516 (2025)", published: "2025-05-01", timeTier: "近期正式发表/原子层界面",
    system: "Si/200 nm热氧化层上磁控溅射Co₂₀Fe₆₀B₂₀/MgO复合自由层；比较Ta或Mo顶帽，并在MgO与顶帽之间加入不同厚度超薄CoFeB，400 °C退火后以磁测、HRTEM和XPS深度剖析。",
    conditions: "基压2×10⁻⁸ Torr；MgO用RF溅射、其余层DC溅射；最佳CoFeB插层0.43 nm。400 °C退火后Ki=3.8 erg/cm²、Keff=4.06 Merg/cm³；TEM中有/无插层的顶层MgO约1.12/0.88 nm，界面Ta原子浓度约19.5%/21%。",
    methods: ["磁控溅射", "亚纳米插层", "400 °C退火", "HRTEM", "XPS深度剖析"],
    summary: "【实测】0.43 nm CoFeB插层显著增强PMA；【实测】400 °C后Ki=3.8 erg/cm²、Keff=4.06 Merg/cm³；【实测】插层保留更厚的顶层MgO并降低界面Ta；【作者解释】抑制Ta扩散、优化Fe–O杂化和氧化程度共同起作用。",
    relevance: "给出可直接搬到溅射/RTA的原子层变量，并把厚度、扩散、氧化态和PMA连成证据链；与SAF自由层的400 °C要求形成当天最强工艺闭环。",
    limitation: "主要是薄膜堆栈而非完整MTJ产品；未报告TMR/RA、纳米柱WER、保持、耐久、TDDB、晶圆尺寸/均匀性和跨批良率。0.43 nm的连续性和计量不确定度需设备标定。",
    industrialization: "最接近自由层/顶帽界面和BEOL热稳定材料模块；距可制造器件仍需300 mm厚度控制、完整MTJ、图形化损伤与可靠性统计。",
    whyRecommended: "先看堆栈1–5，再看0.43 nm厚度窗口和400 °C磁性，最后看TEM/XPS扩散证据；45–60分钟。",
    score: 9.6, priority: "S", doi: "10.1021/acsomega.4c11029", arxiv: "",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12079193/", backupUrl: "https://doi.org/10.1021/acsomega.4c11029",
    accessNote: "本轮已打开PMC全文，核验堆栈、基压、沉积方法、0.43 nm、400 °C、Ki/Keff及TEM/XPS数据。", recommendedOn: date, featured: true,
  },
];

const meta = [
  ["超导隧穿态在亚开尔文区同时受能隙、自旋过滤和热梯度控制，可把磁态转换为热电符号。", "能否在低于1 K让磁性隧道结输出可控功率并形成双态读出？", ["【实测】25–800 mK量化效率。", "【实测】约10 μV热电压。", "【实测】P/AP翻转输出符号。", "【模型】电子—声子耦合限制效率。"], "EuS交换场使Al准粒子态自旋分裂，Co提供自旋选择；磁构型改变粒子—空穴不对称的有效权重。", "变量：浴温、加热电流、负载、磁态；对照：P/AP/零场；指标：Vth、Seebeck、输出功率、噪声和热漂移。"],
  ["SAF自由层以反平行耦合降低净矩和杂散场，同时可保持局部磁矩与稳定能垒。", "SAF自由层能否在300 mm、400 °C条件下把SOT写误码压到1 ppm？", ["【实测】WER=10⁻⁶。", "【实测】400 °C热预算。", "【实测】300 mm制造。", "【模拟+实测】参数筛选闭环。"], "SAF耦合调节翻转轨迹和有效能垒，微磁模拟帮助避免单层自由层的随机尾部。", "变量：SAF层厚/耦合、退火、脉冲；对照：单自由层；指标：WER、TMR/RA、Δ、耐久、晶圆分布。"],
  ["静态DFT难以描述Fe 3d电子的有限寿命和偏压诱导非弹性散射。", "引入DMFT后，Fe/MgO/Fe的有限偏压TMR是否更接近实验？", ["【理论】3d z²自旋劈裂减小。", "【理论】P态仍由相干多数自旋主导。", "【理论】AP态出现偏压非弹性散射。", "【理论】TMR更早随偏压塌缩。"], "DMFT自能同时改变能级位置与寿命，AP通道对关联散射更敏感。", "变量：偏压、磁态、U/J、势垒厚度；对照：DFT/DMFT；指标：I–V、TMR(V)、谱函数与实验残差。"],
  ["MTJ材料放行需要低温磁矩、PMA和SAF耦合的可追溯测量，而非只看室温回线。", "Cryogenic VSM的标称能力如何变成薄膜和MTJ研发SOP？", ["【厂商标称】1.6–400 K。", "【厂商标称】10 s噪声底10⁻⁶。", "【平台】扫场/持续场。", "【平台】自动居中校准。"], "样品振动在拾取线圈产生交流磁通信号，锁相提取磁矩；真实噪声由振动、夹具和温漂共同决定。", "变量：积分时间、振幅、温度、场模式；对照：Ni标准/空杆；指标：噪声PSD、漂移、线性、GR&R和换样复现。"],
  ["CoFeB/MgO界面的Fe–O杂化决定PMA，但Ta扩散和过/欠氧会在退火中破坏它。", "亚纳米CoFeB插层能否在400 °C后同时抑制扩散并优化氧化态？", ["【实测】最佳插层0.43 nm。", "【实测】Ki=3.8 erg/cm²。", "【实测】Keff=4.06 Merg/cm³。", "【实测】顶层MgO更厚、界面Ta更低。"], "插层缓冲Ta—MgO氧化还原和互扩散，保留MgO并把Fe–O杂化推到更优区间。", "变量：插层厚度、Ta/Mo、氧剂量、退火；对照：无插层；指标：XPS/TEM、PMA、TMR/RA、TDDB和晶圆均匀性。"],
];
const details = papers.map((p, i) => ({ id: p.id, oneSentence: p.summary, background: meta[i][0], question: meta[i][1], workflow: p.methods, findings: meta[i][2], explanation: meta[i][3], whyItMatters: [p.relevance, p.industrialization], researchConnection: meta[i][4], limitationsDetailed: p.limitation, terms: ["实测、理论/仿真、作者解释、厂商标称与本站推断分别标注。", "原文公开来源未披露的数据明确留空。"], takeaway: p.whyRecommended }));

const review = {
  id: "review-ald-ale-nbe-d4na00784k", kind: "正式综述", track: "E", secondaryTracks: ["B", "D"],
  title: "Advances in core technologies for semiconductor manufacturing: applications and challenges of atomic layer etching, neutral beam etching and atomic layer deposition", titleZh: "2025正式综述｜ALD、ALE与中性束刻蚀的原子级制造路线",
  authors: "Tzu-Yi Lee et al.", venue: "Nanoscale Advances 7, 2796–2817 (2025)", published: "2025-04-11", recommendedOn: date,
  doi: "10.1039/d4na00784k", url: "https://scholar.nycu.edu.tw/en/publications/advances-in-core-technologies-for-semiconductor-manufacturing-app/", backupUrl: "https://doi.org/10.1039/d4na00784k",
  assistantSummary: "正式同行评议综述比较ALD的共形沉积、ALE的逐层去除与中性束刻蚀的低损伤优势，覆盖均匀性、几何效应、缺陷、可靠性和先进器件制造；它不提供新的MTJ实测。",
  whySelected: "用户当前第一优先级是原子级制造。该综述可把今日0.43 nm插层、300 mm/400 °C器件和VSM计量放到‘原子层成膜—低损伤去除—设备验收—可靠性’统一流程中。",
  readingGuide: ["先看ALD/ALE/NBE差异", "再看均匀性与高深宽比", "对照缺陷/损伤和可靠性", "最后映射MTJ沉积刻蚀；55–70分钟"], notNew: false,
};
const classic = {
  id: "classic-anneal-tmr-prb81-144406", kind: "经典文章", track: "B", secondaryTracks: ["A", "E"],
  title: "Understanding tunneling magnetoresistance during thermal annealing in MgO-based junctions with CoFeB electrodes", titleZh: "2010经典｜CoFeB/MgO退火中晶化—扩散竞争与三阶段TMR演化",
  authors: "W. G. Wang et al.", venue: "Physical Review B 81, 144406 (2010)", published: "2010-04-07", recommendedOn: date,
  doi: "10.1103/PhysRevB.81.144406", url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.81.144406", backupUrl: "https://doi.org/10.1103/PhysRevB.81.144406",
  assistantSummary: "经典实验系统研究CoFeB/MgO MTJ退火时界面晶化与元素扩散的竞争，发现TMR/平行态电导呈三个演化区间，并用Landauer隧穿图景建立经验模型和不同温度下的最佳退火时间。",
  whySelected: "它为今日0.43 nm插层的400 °C结果提供历史机理基线：退火并非越强越好，晶化带来的Δ₁相干隧穿与扩散破坏必须同时控制。",
  readingGuide: ["先看退火时间—TMR曲线", "再看平行态电导三阶段", "对照晶化/扩散证据", "最后建立RTA窗口；35–50分钟"], notNew: true,
};
const curatedDetails = [
  { id: review.id, oneSentence: review.assistantSummary, background: "器件尺寸接近原子尺度后，传统连续沉积/刻蚀难以同时保证厚度、共形性和低损伤。", question: "ALD、ALE和NBE分别解决哪些制造瓶颈，如何进入可重复量产？", workflow: review.readingGuide, findings: ["【综述】ALD强调自限共形成膜。", "【综述】ALE强调逐层自限去除。", "【综述】NBE降低带电粒子损伤。", "【综述】均匀性、几何和可靠性仍是量产门槛。"], explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "把饱和窗口、每循环厚度/刻蚀量、片内均匀性和器件损伤列为共同KPI。", limitationsDetailed: "综述案例以光电、GaN和先进半导体为主，迁移到MTJ必须重新验证磁性层污染、侧壁再沉积、TMR/RA和磁损伤。", terms: ["ALD：自限原子层沉积", "ALE：循环自限原子层刻蚀", "NBE：中性束低损伤刻蚀"], takeaway: review.readingGuide.join("；") },
  { id: classic.id, oneSentence: classic.assistantSummary, background: "CoFeB沉积时近非晶，退火促使其被MgO(001)模板晶化并形成Δ₁过滤，但同时可能诱发扩散。", question: "怎样从TMR和电导演化区分有益晶化与有害扩散？", workflow: classic.readingGuide, findings: ["【实测】TMR演化存在三个区间。", "【实测】不同温度存在最佳退火时间。", "【实测解释】平行态电导呈独特变化。", "【模型】Landauer图景连接晶化与扩散。"], explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "变量：退火温时；对照：沉积态/不同顶帽；指标：TMR/RA、P态电导、XRD/TEM/XPS、B/Ta扩散。", limitationsDetailed: "经典样品与现代pMTJ/SAF堆栈不同；摘要未给可直接复制的所有退火数值，必须结合自家堆栈重新标定。", terms: ["Δ₁：MgO相干隧穿关键对称性", "Landauer：以透射概率描述电导"], takeaway: classic.readingGuide.join("；") },
];

const insights = [
  {
    id: "2026-10-09-saf-interface-window", date, type: "research", typeZh: "研究机会", trackLabel: "B/C/E · SAF—界面—WER闭环",
    title: "SAF自由层×0.43 nm插层×有限偏压TMR联合DOE", subtitle: "把1 ppm写入、400 °C界面与读出窗口放进同一片。", summary: "从材料参数到WER尾部的跨尺度验证。", status: "优先DOE",
    relatedPaperIds: [ids.B, ids.C, ids.E], question: "SAF耦合和顶帽插层怎样共同影响400 °C后的PMA、偏压TMR和WER尾部？", rationale: "B给器件目标，C给有限偏压理论，E给原子界面变量。",
    workflow: ["插层厚度矩阵", "SAF耦合矩阵", "400 °C退火", "TMR(V,T)/FMR", "WER尾部统计"], equipment: ["磁控溅射/真空互联", "RTA", "VSM/FMR", "脉冲源表", "低温探针台"], measurements: ["XPS/TEM", "PMA/阻尼", "TMR/RA", "SAF耦合", "WER/保持"], metrics: ["工艺窗口", "片内均匀性", "1 ppm置信区间", "半选扰动", "模型残差"], evidenceBoundary: "三篇工作未在同一堆栈共同验证；联合DOE是本站提出的可检验路线。", firstSteps: ["平面膜", "单结", "阵列"], researchConnection: "直连原子界面、MTJ器件和产业验证。", takeaway: "用同一热预算连接界面与误码。",
  },
  {
    id: "2026-10-09-cryogenic-vsm-grr", date, type: "method", typeZh: "设备与方法路线", trackLabel: "D/B · 低温磁性计量",
    title: "Cryogenic VSM薄膜/SAF低温GR&R验收", subtitle: "将厂商灵敏度变成样品端可追溯能力。", summary: "标准样—空杆—薄膜—完整堆栈四级验收。", status: "平台SOP",
    relatedPaperIds: [ids.D, ids.B, ids.E], question: "1.6–400 K下能否稳定分离超薄CoFeB、SAF耦合和夹具背景？", rationale: "厂商规格必须通过标准样与真实堆栈复现后才能用于工艺放行。",
    workflow: ["Ni标准与空杆", "振幅/积分时间矩阵", "温变回线", "扫场/持续场对照", "换样GR&R"], equipment: ["Cryogenic VSM", "标准磁矩样", "薄膜夹具", "温标", "自动脚本"], measurements: ["磁矩噪声PSD", "背景", "PMA/Hc", "SAF平台场", "温漂"], metrics: ["线性", "重复性", "再现性", "检出限", "丢点率"], evidenceBoundary: "10⁻⁶为厂商页面标称且单位需规格书确认，不能直接视作薄膜检出限。", firstSteps: ["标准样", "薄膜片", "完整堆栈"], researchConnection: "服务退火、PMA与SAF工艺反馈。", takeaway: "先证明计量，再解释材料。",
  },
  {
    id: "2026-10-09-atomic-cap-beol", date, type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B · 亚纳米插层—BEOL闭环",
    title: "0–0.8 nm CoFeB插层的原子层工艺窗口", subtitle: "厚度、连续性、扩散与400 °C可靠性共同放行。", summary: "把0.43 nm冠军点扩展为晶圆级工艺窗口。", status: "原子制造路线",
    relatedPaperIds: [ids.E, ids.B, review.id], question: "0.43 nm插层是否有可制造的饱和窗口，而不是单点偶然最优？", rationale: "E给出单点结构证据，B给出BEOL/WER目标，综述给出原子层均匀性方法。",
    workflow: ["0–0.8 nm楔形", "原位XPS/椭偏", "400 °C分段退火", "TEM/EELS抽检", "PMA/TMR/TDDB"], equipment: ["真空互联溅射", "ALD/QCM可选", "原位XPS", "RTA", "CIPT/电测"], measurements: ["厚度/连续性", "Ta/O/B深度", "PMA", "RA/TMR", "TDDB/保持"], metrics: ["Å级重复性", "片内3σ", "扩散长度", "窗口宽度", "失效率"], evidenceBoundary: "原文未证明300 mm均匀性或完整器件可靠性；本站路线必须用多片多批验证。", firstSteps: ["楔形片", "完整MTJ", "晶圆统计"], researchConnection: "对应原子层成分控制与BEOL兼容。", takeaway: "从最佳厚度升级到可制造窗口。",
  },
];

const reports = read("data/reports.json"); reports.updatedAt = `${date}T12:00:00+08:00`; reports.reportDate = date;
reports.history.push({ date, label: "详细日报：亚开尔文自旋热机—300 mm SAF-SOT—DMFT偏压TMR—Cryogenic VSM—0.43 nm界面插层", total: 5, counts: { A: 1, B: 1, C: 1, D: 1, E: 1 }, paperIds: Object.values(ids) });
for (const p of papers) add(reports.papers, p); write("data/reports.json", reports);
const paperDetails = read("data/paper-details.json"); for (const d of details) add(paperDetails, d); write("data/paper-details.json", paperDetails, false);
const curated = read("data/curated-reading.json"); curated.history.push({ date, reviewId: review.id, classicIds: [classic.id] }); add(curated.items, review); add(curated.items, classic); write("data/curated-reading.json", curated);
const curatedDetailData = read("data/curated-details.json"); for (const d of curatedDetails) add(curatedDetailData, d); write("data/curated-details.json", curatedDetailData);
write("data/daily-reading.json", { date, review, classics: [classic] });
const insightData = read("data/insight-archive.json"); insightData.history.push({ date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id] }); for (const x of insights) add(insightData.items, x); write("data/insight-archive.json", insightData);
console.log(`Added detailed radar for ${date}`);
