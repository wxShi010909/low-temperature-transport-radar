import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const write = (file, value) => fs.writeFileSync(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
const addUnique = (arr, item) => {
  if (arr.some((entry) => entry.id === item.id)) throw new Error(`duplicate id: ${item.id}`);
  arr.push(item);
};

const date = "2026-09-29";
const ids = {
  A: "a-cryo-pmtj-thermal-034088",
  B: "b-mixed-etch-oxidation-mram-0217921",
  C: "c-mgo-gb-defects-125002",
  D: "d-qd-ppms-migration-2026",
  E: "e-cofeb-ale-damping-170052",
};

const papers = [
  {
    id: ids.A, track: "A", secondaryTracks: ["B"],
    title: "Thermal Effects in Spin-Torque Switching of Perpendicular Magnetic Tunnel Junctions at Cryogenic Temperatures",
    titleZh: "4 K pMTJ百万次开关统计｜75 K以下自热饱和与低温随机性",
    authors: "L. Rehm et al.", venue: "Physical Review Applied 15, 034088 (2021)", published: "2021-03-30",
    timeTier: "高质量正式发表/低温可靠性",
    system: "直径40–60 nm的先进垂直磁隧道结纳米柱；从室温降至4 K研究STT脉冲开关概率。",
    conditions: "温度覆盖约4–300 K，每个条件最多采样100万次开关事件；用热辅助STT模型反演脉冲期间结温，并用纳米柱热流模型解释自热。公开摘要未给完整膜层、RA和退火参数，本期不补写。",
    methods: ["4–300 K脉冲WER", "百万次事件统计", "热辅助STT模型", "纳米柱热流模型", "40–60 nm pMTJ"],
    summary: "【实测+模型】开关仍高度随机直至4 K；在开关电压下，反演结温在浴温低于约75 K后趋于饱和，表明低温自热不可忽略；作者将其归因于金属层热导率和热容随降温降低。",
    relevance: "直接服务低温MRAM：低温台温不等于写脉冲期间的器件温度，必须同步做WER尾部统计和自热校准。",
    limitation: "结温来自模型反演而非纳米结原位温度计；摘要未公开完整堆栈、RA、每个脉宽电压和失效尾部置信区间。",
    industrialization: "最接近低温MRAM写入窗口与可靠性验证；仍缺阵列级功耗、器件间离散、长期保持、封装热阻和晶圆级统计。",
    whyRecommended: "先看开关概率—电压曲线和75 K结温饱和，再看热流模型；35–50分钟。",
    score: 9.7, priority: "S", doi: "10.1103/PhysRevApplied.15.034088", arxiv: "2009.01743",
    url: "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.15.034088",
    backupUrl: "https://arxiv.org/abs/2009.01743",
    accessNote: "本轮已打开APS直接页面和arXiv摘要，核验40–60 nm、4 K、最多100万事件及约75 K自热饱和。", recommendedOn: date, featured: true,
  },
  {
    id: ids.B, track: "B", secondaryTracks: ["E"],
    title: "Mixed etching-oxidation process to enhance the performance of spin-transfer torque MRAM for high-performance computing",
    titleZh: "四步混合刻蚀STT-MRAM｜RIE—IBE—氧化—离子修边抑制侧壁短路",
    authors: "Kuan-Ming Chen et al.", venue: "Applied Physics Letters 125, 012403 (2024)", published: "2024-07-03",
    timeTier: "近2年正式发表/器件图形化",
    system: "柱状STT-MRAM MTJ与传统停在MgO处的step-MTJ对照；目标是消除侧壁再沉积和不可预测旁路。",
    conditions: "四步流程依次为反应离子刻蚀、离子束刻蚀、氧暴露和离子修边，并交叉调节柱形与侧壁清洁。可公开页面未给各步能量、剂量、柱径和完整层栈。",
    methods: ["RIE", "IBE", "受控氧化", "ion trimming", "pillar/step-MTJ对照"],
    summary: "【实测】四步流程可交叉调节柱形、减少侧壁再沉积并去除旁路；柱状MTJ在TMR、矫顽力和开关效率上优于step-MTJ；公开摘要未披露这些指标的绝对值和样本统计。",
    relevance: "把图形化损伤从单一IBE能量问题扩展为刻蚀—氧化—修边协同窗口，适合接入截面TEM、侧壁成分和电性DOE。",
    limitation: "公开摘要只有相对性能结论，缺具体TMR、Jc、RA、良率、尺寸分布及长期耐久；氧暴露也可能氧化自由层，必须独立验证。",
    industrialization: "最接近MRAM柱刻蚀模块；仍缺300 mm片内/片间均匀性、颗粒、端点检测、BEOL污染控制和大样本良率。",
    whyRecommended: "先看四步流程图和pillar/step对照，再追TMR、矫顽力与开关效率；30–45分钟。",
    score: 9.5, priority: "S", doi: "10.1063/5.0217921", arxiv: "",
    url: "https://pubs.aip.org/aip/apl/article/125/1/012403/3302083/Mixed-etching-oxidation-process-to-enhance-the",
    backupUrl: "https://doi.org/10.1063/5.0217921",
    accessNote: "本轮已打开AIP直接页面，核验四步流程、pillar/step对照与相对性能结论；未公开数值明确留空。", recommendedOn: date, featured: true,
  },
  {
    id: ids.C, track: "C", secondaryTracks: ["B", "E"],
    title: "Stability of point defects near MgO grain boundaries in FeCoB/MgO/FeCoB magnetic tunnel junctions",
    titleZh: "MgO晶界B与氧空位偏聚｜1.8/4.5 eV与带隙内缺陷态",
    authors: "Jonathan J. Bean and Keith P. McKenna", venue: "Physical Review Materials 2, 125002 (2018)", published: "2018-12-14",
    timeTier: "关键高质量理论/界面缺陷",
    system: "FeCoB/MgO/FeCoB中实验观测的Σ5(210)[001]对称晶界和(100)/(110)[001]非对称晶界；研究氧空位与B间隙。",
    conditions: "VASP/PBE用于结构与偏聚能，HSE06用于电子态；四层超胞304原子与532原子，平面波截断350 eV；考察16/75个氧空位位点和24/51个B间隙候选位点。",
    methods: ["DFT-PBE", "HSE06 PDOS", "晶界超胞", "缺陷偏聚能", "模拟XPS"],
    summary: "【理论预测】氧空位在Σ5和非对称晶界分别约稳定0.6和1.8 eV；B间隙偏聚能分别达4.2和4.5 eV；B使非对称晶界带隙缩小约1 eV，并在价带上方约3 eV引入未占据缺陷态。",
    relevance: "把退火中的B扩散、MgO晶界类型和电子旁路连成可计算/可表征链，可指导Ta/W吸B层与MgO织构DOE。",
    limitation: "理想周期超胞和孤立缺陷不能代表真实浓度、有限温扩散动力学、非晶界面及完整量子输运；数值不应直接当成器件TMR下降量。",
    industrialization: "最接近退火扩散与势垒缺陷根因筛选；尚缺真实堆栈STEM-EELS/XPS定量、跨晶圆晶界统计和RA/TMR/TDDB关联。",
    whyRecommended: "先看图3偏聚能、图6 HSE06/XPS，再看Ta/W吸B层讨论；45–60分钟。",
    score: 9.6, priority: "S", doi: "10.1103/PhysRevMaterials.2.125002", arxiv: "",
    url: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.2.125002",
    backupUrl: "https://www.repository.cam.ac.uk/items/3a6cf5b9-08e8-49d0-b78e-3de1d47801b6",
    accessNote: "本轮已打开APS题录及Cambridge 16页全文，核验超胞、位点数、偏聚能、1 eV带隙变化和约3 eV缺陷态。", recommendedOn: date, featured: true,
  },
  {
    id: ids.D, track: "D", secondaryTracks: ["A"],
    title: "Physical Property Measurement System (PPMS) obsolescence notice and DynaCool migration path",
    titleZh: "PPMS停产迁移路线｜现有探杆、选件与DynaCool兼容性清单",
    authors: "Quantum Design North America", venue: "厂商正式产品与迁移说明", published: "2026-09-29核验",
    timeTier: "厂商正式技术资料/不作为科研证明",
    system: "传统PPMS存量平台向DynaCool无液氦平台迁移；重点是既有探杆、工具和附件的直接转移或升级。",
    conditions: "厂商页面明确：许多PPMS工具、探杆和附件可直接迁移到DynaCool，更多选件可升级；具体兼容性需由服务/商务团队逐项确认。页面未公开统一兼容矩阵、费用和交付周期。",
    methods: ["资产盘点", "接口兼容性", "探杆迁移", "控制器升级", "验收回归"],
    summary: "【厂商声明】许多PPMS工具、探杆和附件可直接移植到DynaCool，更多可通过升级继续使用；具体选件必须逐项确认，不能从系列名称推断即插即用；公开页面未给兼容率、价格和停机时间。",
    relevance: "对现有低温输运平台最实用：先做资产/接口/校准数据库，再决定整机替换、选件升级或第三方仪器保留。",
    limitation: "厂商迁移说明不是独立性能证明；没有底噪、温稳、磁场扫速、旧探杆校准漂移和软件API回归数据。",
    industrialization: "最接近实验平台生命周期管理与停机风险控制；缺正式BOM、序列号级兼容报告、IQ/OQ/PQ和迁移后GR&R。",
    whyRecommended: "先盘点探杆/控制器/线缆/软件许可，再向厂商索要序列号级迁移矩阵；15–25分钟。",
    score: 8.8, priority: "A", doi: "", arxiv: "",
    url: "https://qdusa.com/products/ppms.html", backupUrl: "https://qdusa.com/products/dynacool.html",
    accessNote: "本轮已打开Quantum Design官方页面，核验直接迁移、可升级与逐项咨询三层表述；明确标注厂商资料。", recommendedOn: date, featured: true,
  },
  {
    id: ids.E, track: "E", secondaryTracks: ["B"],
    title: "Effects of atomic layer etching on magnetic properties of CoFeB films: Reduction of Gilbert damping",
    titleZh: "CoFeB原子层刻蚀｜阻尼降低11–35%且表面保持0.34 nm",
    authors: "Mahsa Konh et al.", venue: "Journal of Magnetism and Magnetic Materials 564, 170052 (2022)", published: "2022-12-15",
    timeTier: "高质量原子级加工/磁性保持",
    system: "技术相关CoFeB薄膜，经热ALE处理并与传统Ar离子铣削对照；用AFM、XPS和FMR追踪表面、成分和磁动力学。",
    conditions: "文章比较ALE前后及离子铣削样品；相关同团队CoFeB热ALE流程为Cl₂表面改性/Hacac热脱附，综述汇总167 ℃、约0.15 nm/cycle并对MgO近无限选择比。需注意该工艺数字来自配套选择性研究。",
    methods: ["热ALE", "Ar离子铣削对照", "AFM", "XPS", "FMR阻尼"],
    summary: "【实测】ALE后CoFeB Gilbert阻尼降低11–35%，饱和磁化变化很小；ALE后表面粗糙度约0.34 nm，而离子铣削约0.50 nm；作者把阻尼下降归因于表面散射中心减少、两磁子散射受抑。",
    relevance: "直接对应MTJ图形化损伤：不仅测刻蚀速率和侧壁，还应把Ms、PMA、FMR阻尼和表面化学纳入工艺验收。",
    limitation: "薄膜级结果不等于完整纳米MTJ侧壁无损；阻尼改善机制是作者解释，缺大样本器件TMR、WER、保持、耐久和残留物数据。",
    industrialization: "最接近低损伤磁性层修边/回蚀；仍缺各向异性侧壁、通量、前驱体残留、腔体颗粒、300 mm均匀性和BEOL污染资格。",
    whyRecommended: "先看AFM/XPS与FMR对照，再核对11–35%阻尼变化和离子铣削基线；35–45分钟。",
    score: 9.7, priority: "S", doi: "10.1016/j.jmmm.2022.170052", arxiv: "",
    url: "https://www.sciencedirect.com/science/article/pii/S0304885322009374",
    backupUrl: "https://doi.org/10.1016/j.jmmm.2022.170052",
    accessNote: "本轮已打开出版社摘要和作者公开摘要，核验11–35%阻尼降低、0.34/0.50 nm粗糙度及机制；工艺EPC由2026正式综述交叉核验。", recommendedOn: date, featured: true,
  },
];

const detailFrom = (paper, background, question, findings, explanation, connection) => ({
  id: paper.id,
  oneSentence: paper.summary,
  background,
  question,
  workflow: paper.methods,
  findings,
  explanation,
  whyItMatters: [paper.relevance, paper.industrialization],
  researchConnection: connection,
  limitationsDetailed: paper.limitation,
  terms: ["实测、理论预测、厂商声明和本站推断分别标注。", "原始来源未公开的数据不补写。"],
  takeaway: paper.whyRecommended,
});

const details = [
  detailFrom(papers[0], "低温会减小热涨落，但写脉冲自身会加热纳米柱，因此浴温不能直接代表开关瞬间温度。", "pMTJ降到4 K后，STT开关是否变成确定性过程，自热怎样改变WER？", ["【实测】40–60 nm pMTJ覆盖4–300 K。", "【实测】每个条件最多统计100万次开关。", "【模型反演】浴温低于约75 K后开关结温趋于饱和。", "【实测】随机开关延续到4 K。"], "金属热导率和热容在低温下降，使纳米柱脉冲热难以及时扩散；这解释了低温仍然随机，而不是证明所有低温pMTJ都有相同结温。", "变量：浴温、脉宽、占空比、柱径；对照：低占空与脉冲串；指标：WER、电压、结温反演、保持和热阻。"),
  detailFrom(papers[1], "MTJ刻蚀的核心风险是侧壁再沉积形成金属旁路；只停在MgO处虽能避开部分损伤，却牺牲缩放和结构对称性。", "能否用分段RIE/IBE/氧化/修边在保持完整柱形的同时清掉侧壁旁路？", ["【实测】提出RIE—IBE—氧暴露—离子修边四步流程。", "【实测】各步可交叉调节柱形并降低再沉积。", "【实测】pillar-MTJ在TMR、矫顽力、开关效率上优于step-MTJ。", "【未公开】公开页面未给绝对值、误差条和良率。"], "氧暴露将难去除的金属残留转为更易隔离/修整的氧化物，后续离子修边清理旁路；但过量氧也可能侵入磁层。", "变量：RIE终点、IBE能量/角度、氧剂量、trim剂量；对照：step-MTJ/纯IBE；指标：侧壁成分、RA/TMR、Jc、短路率、良率。"),
  detailFrom(papers[2], "CoFeB退火结晶需要B外扩散；若B或氧空位被MgO晶界捕获，会在势垒中形成缺陷态并改变RA/TMR。", "不同MgO晶界对氧空位和B间隙的俘获强度、电子态影响有多大？", ["【理论】氧空位在Σ5/非对称晶界偏聚约0.6/1.8 eV。", "【理论】B间隙偏聚能约4.2/4.5 eV。", "【理论】B使非对称晶界带隙缩小约1 eV。", "【理论】未占据缺陷态约位于价带顶上方3 eV。", "【方法】304/532原子超胞、PBE结构和HSE06电子态。"], "低配位晶界降低缺陷形成代价；B在大空隙中形成三配位结构并引入局域态。数值是理想晶界的静态能量，不等于扩散速率。", "变量：Ta/W底层、退火温时、MgO织构；对照：不同晶界密度；指标：STEM-EELS/XPS、RA/TMR、RTN、TDDB。"),
  detailFrom(papers[3], "存量PPMS的价值不仅是主机，还包括多年积累的探杆、选件、线缆和脚本；迁移失败通常发生在接口、固件和校准链。", "PPMS升级到DynaCool时，哪些资产可直接复用，哪些需要升级或重新验收？", ["【厂商声明】许多工具、探杆和附件可直接迁移。", "【厂商声明】更多选件可升级后继续使用。", "【厂商声明】具体兼容性需逐项咨询。", "【未公开】无统一兼容率、价格、周期和性能回归数据。"], "迁移判断必须落到序列号、接口、控制器、固件、校准证书和软件驱动，而不是只看产品系列。", "变量：旧/新主机、原探杆/升级探杆；对照：标准电阻/Hall片/磁标样；指标：底噪、温稳、场误差、GR&R、脚本兼容率。"),
  detailFrom(papers[4], "传统离子铣削能形成各向异性轮廓，但会带来粗糙化、再沉积和磁动力学损伤；ALE以自限反应拆开改性与去除。", "CoFeB经ALE后能否保持成分和表面，并避免阻尼恶化？", ["【实测】Gilbert阻尼降低11–35%。", "【实测】饱和磁化变化很小。", "【实测】ALE后粗糙度约0.34 nm，离子铣削约0.50 nm。", "【作者解释】表面散射中心减少使两磁子散射受抑。", "【配套工艺】167 ℃、约0.15 nm/cycle且对MgO高选择性。"], "化学吸附/脱附可能清理散射中心并保持平滑，但低阻尼并不能单独证明无残留、无侧壁损伤或器件可靠性提升。", "变量：ALE循环数/温度与IBE能量；对照：未刻蚀/IBE；指标：XPS、AFM、Ms、PMA、FMR α、RA/TMR、WER。"),
];

const review = {
  id: "review-peale-next-gen-70663", kind: "正式综述", track: "E", secondaryTracks: ["B", "D"],
  title: "Recent Advances in Plasma-Enhanced Atomic Layer Etching for Next-Generation Nanofabrication",
  titleZh: "2026 PEALE正式综述｜磁性金属、低损伤各向异性与ALD—ALE集成",
  authors: "Shih-Nan Hsiao", venue: "Advanced Materials Interfaces, Early View e70663 (2026)", published: "2026-09-11", recommendedOn: date,
  doi: "10.1002/admi.70663", url: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admi.70663", backupUrl: "https://doi.org/10.1002/admi.70663",
  assistantSummary: "正式Review系统梳理2020年以来等向/各向异性PEALE、硬件、粗糙度演化和RIE+ALE/ALD+ALE集成；对磁性材料汇总CoFeB 167 ℃、0.15 nm/cycle及对MgO近无限选择比。",
  whySelected: "它把今天的CoFeB ALE单篇结果放回设备、反应自限、方向性、选择比和吞吐量的完整制造坐标。",
  readingGuide: ["先看ALE窗口与四步循环", "再看磁性金属表14", "重点看RIE+ALE和ALD+ALE", "最后看吞吐/残留/晶圆均匀性；55–75分钟"], notNew: false,
};

const classic = {
  id: "classic-julliere-1975", kind: "经典文章", track: "A", secondaryTracks: ["B", "C"],
  title: "Tunneling between ferromagnetic films", titleZh: "Jullière 1975经典｜4.2 K约14% TMR与双自旋通道模型",
  authors: "M. Jullière", venue: "Physics Letters A 54, 225–226 (1975)", published: "1975-09-08", recommendedOn: date,
  doi: "10.1016/0375-9601(75)90174-7", url: "https://www.sciencedirect.com/science/article/pii/0375960175901747", backupUrl: "https://doi.org/10.1016/0375-9601(75)90174-7",
  assistantSummary: "Fe/Ge-O/Co结在4.2 K、零偏附近观察到约14%电导变化，并用两电极自旋极化乘积解释TMR；高偏压下效应衰减。",
  whySelected: "今天的低温WER、MgO缺陷、侧壁旁路和ALE都可视为对Jullière理想双通道图景的材料、热与工艺修正。",
  readingGuide: ["先看4.2 K原始曲线", "理解P/AP双通道", "核对偏压衰减", "再比较MgO相干隧穿与缺陷；20–30分钟"], notNew: true,
};

const curatedDetails = [
  {
    id: review.id, oneSentence: review.assistantSummary, background: review.titleZh,
    question: "PEALE如何兼顾原子级精度、方向性、低损伤、选择比和制造吞吐？", workflow: review.readingGuide,
    findings: ["【综述】ALE至少一个半反应必须自限。", "【综述】CoFeB热ALE约167 ℃、0.15 nm/cycle。", "【综述】对MgO可实现近无限选择比。", "【综述】低离子能各向异性需要偏压/等离子源协同。", "【边界】跨论文数字不是同一晶圆或同一设备的联合实测。"],
    explanation: review.whySelected, whyItMatters: [review.whySelected], researchConnection: "用同一片CoFeB/MgO见证片比较RIE、IBE、ALE和RIE+ALE，联测EPC、残留、粗糙度和FMR。",
    limitationsDetailed: "综述覆盖材料跨度大，工艺窗口、腔体和计量不可直接移植；吞吐、颗粒与300 mm均匀性仍是量产缺口。", terms: ["综述汇总与原始实测分开", "厂商/工艺推断不替代器件验证"], takeaway: review.readingGuide.join("；"),
  },
  {
    id: classic.id, oneSentence: classic.assistantSummary, background: classic.titleZh,
    question: "两铁磁电极的自旋极化怎样决定平行/反平行构型的隧穿电导？", workflow: classic.readingGuide,
    findings: ["【实测】Fe/Ge-O/Co在4.2 K零偏附近约14%变化。", "【实测】TMR随偏压增加而减弱。", "【模型】双电流通道由两电极有效自旋极化乘积决定。", "【边界】模型不含MgO对称性过滤、缺陷散射和自热。"],
    explanation: classic.whySelected, whyItMatters: [classic.whySelected], researchConnection: "把实测TMR反演的有效极化与温度、偏压、晶界密度及侧壁损伤关联。",
    limitationsDetailed: "早期大面积Ge-O势垒、4.2 K结果不能直接代表现代CoFeB/MgO纳米pMTJ。", terms: ["Jullière模型是基线而非完整量子输运", "14%为历史器件实测"], takeaway: classic.readingGuide.join("；"),
  },
];

const insights = [
  {
    id: "2026-09-29-cryo-self-heating-wer", type: "research", typeZh: "研究机会", trackLabel: "A/B · 自热—WER闭环",
    title: "浴温—结温—WER三变量分离", subtitle: "用脉冲占空比和热模型把低温自热从本征随机性中剥离。", summary: "在4–100 K建立pMTJ动态结温与写错误联合标定。", status: "优先DOE",
    relatedPaperIds: [ids.A, ids.C, classic.id], question: "低温WER尾部中，自热、热涨落与工艺缺陷各占多少？", rationale: "浴温低于75 K后结温饱和说明只记录台温会误判写入物理。",
    workflow: ["4–100 K浴温", "脉宽/占空比矩阵", "百万次WER", "热阻反演", "缺陷分组"], equipment: ["CFMS/He-3", "高速脉冲源", "低噪声读出", "自动化统计"], measurements: ["WER", "写电压", "瞬态电阻", "热恢复时间", "保持"], metrics: ["结温", "热阻", "尾部置信区间", "能耗", "器件间CV"], evidenceBoundary: "75 K饱和来自特定40–60 nm器件和模型，需在现有堆栈重新标定。", firstSteps: ["先低占空基线", "再脉冲串", "最后按晶圆位置分组"], researchConnection: "连接低温输运、写入可靠性和热管理。", takeaway: "把低温台温从唯一横轴升级为浴温与动态结温双横轴。",
  },
  {
    id: "2026-09-29-ppms-migration-iqoqpq", type: "method", typeZh: "设备与方法路线", trackLabel: "D/A · PPMS迁移验收",
    title: "PPMS—DynaCool序列号级兼容与IQ/OQ/PQ", subtitle: "先证明探杆、线缆、控制器和脚本可回归，再决定采购。", summary: "把厂商兼容性表述转成可签字的资产与性能验收矩阵。", status: "平台治理",
    relatedPaperIds: [ids.D, ids.A], question: "现有选件在新主机上能否达到原底噪、温稳和自动化能力？", rationale: "系列级兼容不代表序列号、固件、接线和校准均兼容。",
    workflow: ["资产/BOM盘点", "序列号兼容确认", "IQ安装", "OQ标准件", "PQ真实MTJ"], equipment: ["PPMS", "DynaCool", "标准电阻", "Hall片", "磁标样"], measurements: ["底噪", "温稳", "场误差", "相位", "脚本回归"], metrics: ["GR&R", "漂移", "兼容率", "停机时间", "校准偏差"], evidenceBoundary: "厂商页面只证明存在迁移/升级路径，不证明任何具体实验室配置可无损迁移。", firstSteps: ["导出资产清单", "锁定固件/API", "要求书面兼容矩阵"], researchConnection: "保护低温自动化平台的可复现性与连续性。", takeaway: "采购决策以序列号级证据和回归数据为准。",
  },
  {
    id: "2026-09-29-cofeb-ale-sidewall", type: "atomic", typeZh: "原子与极端制造", trackLabel: "E/B · 低损伤MTJ图形化",
    title: "RIE粗刻—CoFeB ALE修边—MgO止刻路线", subtitle: "利用ALE对MgO高选择比保护势垒，同时用FMR监控磁性损伤。", summary: "把侧壁形貌、残留、磁阻与阻尼放进同一工艺闭环。", status: "原子制造路线",
    relatedPaperIds: [ids.B, ids.E, review.id], question: "ALE能否在保持各向异性轮廓的同时降低侧壁再沉积和磁性损伤？", rationale: "热ALE低损伤但偏等向；RIE/IBE有方向性但损伤大，需要混合流程。",
    workflow: ["RIE粗刻", "低能IBE整形", "Cl₂/Hacac ALE", "MgO止刻", "原位封护"], equipment: ["RIE", "IBE", "ALE模块", "XPS/AFM", "FMR/CIPT"], measurements: ["EPC", "侧壁角", "残留", "粗糙度", "α/RA/TMR"], metrics: ["0.15 nm/cycle基线", "选择比", "11–35%阻尼变化", "短路率", "晶圆CV"], evidenceBoundary: "薄膜ALE与pillar-MTJ四步刻蚀来自不同研究；本站提出的混合路线是待验证推断。", firstSteps: ["先平面见证片", "再线/孔图形", "最后完整MTJ"], researchConnection: "直接连接ALE、IBE、MTJ图形化和器件可靠性。", takeaway: "先在平面样上证明化学与磁性无损，再进入纳米柱。",
  },
];

const reports = read("data/reports.json");
reports.updatedAt = `${date}T12:00:00+08:00`;
reports.reportDate = date;
reports.history.push({date, label: "详细日报：4 K pMTJ自热—混合刻蚀—晶界缺陷—PPMS迁移—CoFeB ALE", total: 5, counts: {A:1,B:1,C:1,D:1,E:1}, paperIds: Object.values(ids)});
for (const paper of papers) addUnique(reports.papers, paper);
write("data/reports.json", reports);

const paperDetails = read("data/paper-details.json");
for (const item of details) addUnique(paperDetails, item);
write("data/paper-details.json", paperDetails);

const curated = read("data/curated-reading.json");
curated.history.push({date, reviewId: review.id, classicIds: [classic.id]});
addUnique(curated.items, review); addUnique(curated.items, classic);
write("data/curated-reading.json", curated);

const curatedDetailData = read("data/curated-details.json");
for (const item of curatedDetails) addUnique(curatedDetailData, item);
write("data/curated-details.json", curatedDetailData);

write("data/daily-reading.json", {date, review, classics: [classic]});

const insightData = read("data/insight-archive.json");
insightData.history.push({date, opportunityIds: [insights[0].id], methodIds: [insights[1].id], atomicIds: [insights[2].id]});
for (const item of insights) addUnique(insightData.items, item);
write("data/insight-archive.json", insightData);

console.log(`Added detailed radar for ${date}`);
