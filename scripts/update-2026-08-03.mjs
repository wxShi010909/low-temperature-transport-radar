import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const writeJson = (file, value) => fs.writeFileSync(path.join(root, file), `${JSON.stringify(value, null, 2)}\n`);
const upsert = (items, item) => {
  const index = items.findIndex((entry) => entry.id === item.id);
  if (index >= 0) items[index] = item;
  else items.push(item);
};

const date = "2026-08-03";
const updatedAt = "2026-08-03T13:25:00+08:00";

const papers = [
  {
    id: "s41467-026-70239-z",
    track: "A",
    secondaryTracks: ["B", "C", "E"],
    title: "Twisted atomic magnetic tunnel junctions with multiple nonvolatile states",
    titleZh: "扭转原子级磁隧道结实现多种非易失电阻态",
    authors: "Yuliang Chen, Kartik Samanta, Alexander J. Healey, Chi Fang, Haojie Zhang, Naafis A. Shahed, David A. Broadway, Arthur Ernst, Evgeny Y. Tsymbal, Stuart S. P. Parkin",
    venue: "Nature Communications 17, 2439 (2026)",
    published: "2026-03-12",
    recommendedOn: date,
    timeTier: "近期正式发表",
    system: "单层/双层CrSBr扭转二维磁隧道结与全反铁磁多界面结构",
    conditions: "2 K、零磁场与面内磁场扫描；石墨电极；输运实验结合第一性原理和量子输运计算",
    methods: ["二维材料堆叠", "扭转界面", "低温磁输运", "TMR", "DFT", "量子输运"],
    summary: "单层/双层CrSBr扭转MTJ在2 K零磁场下呈现两种非易失态，最高TMR约700%；加入第二个扭转界面后可访问四种非易失态，全反铁磁多层结构同样出现多态行为。",
    relevance: "它把原子层数量、扭转界面、低温输运和多态存储连接到同一器件，可作为原子制造与低温多场状态识别的前沿标杆。",
    limitation: "结果主要依赖2 K和磁场路径；手工堆叠、室温保持、电写入、循环耐久、晶圆级扭角控制、封装及阵列良率尚未证明。",
    industrialization: "目前属于低温原理验证。要成为多值MRAM，需要室温稳定、电流或电场写入、晶圆级扭角/层数控制和长尾误码数据。",
    whyRecommended: "本期以它作为A类起点，因为它直接展示原子级界面自由度如何转化为低温可读出的多个非易失状态。",
    score: 9.7,
    priority: "A",
    arxiv: "",
    doi: "10.1038/s41467-026-70239-z",
    url: "https://www.nature.com/articles/s41467-026-70239-z",
    backupUrl: "https://doi.org/10.1038/s41467-026-70239-z",
    accessNote: "已核验Nature Communications开放全文的题录、2 K多态输运、最高TMR和计算方法",
    featured: true
  },
  {
    id: "s41598-025-20842-9",
    track: "B",
    secondaryTracks: ["A", "E"],
    title: "Magnetic tunnel junction made of abundant materials for memory and dynamic applications",
    titleZh: "用常见元素构建无Pt/Pd垂直MTJ并验证纳秒写入",
    authors: "Mariusz Cierpiał, Dawid Maślanka, Kacper Gubała, Jakub Mojsiejuk, Krzysztof Grochot, Jerzy Wrona, Jürgen Langer, Tianxiang Nan, Witold Skowroński",
    venue: "Scientific Reports 15, 35227 (2025)",
    published: "2025-10-09",
    recommendedOn: date,
    timeTier: "近2年精选",
    system: "Co/Ni超晶格合成反铁磁参考层与FeCoB/W/FeCoB自由层pMTJ",
    conditions: "无Pt/Pd堆栈；80 nm纳米柱；1 ms至5 ns电压脉冲；自动探针台R-H和脉冲测量",
    methods: ["磁控溅射", "Co/Ni超晶格", "pMTJ", "纳米柱", "脉冲写入", "热稳定性"],
    summary: "作者用Co/Ni超晶格和Ru间隔层替代含Pt/Pd的SAF；80 nm器件获得超过130%的TMR、Δ>50、约0.35 V平均写入电压和2.6 MA/cm²临界电流密度，并完成5 ns脉冲写入。",
    relevance: "它把材料可获得性、完整堆栈、纳米图形化和写入指标放在同一实验中，适合评估原子级材料替换是否真正转化为器件性能。",
    limitation: "常见元素不等于低成本量产；论文尚未给出大阵列WER、全片/批次分布、耐久、回流焊、BEOL兼容和供应链生命周期评价。",
    industrialization: "结构已进入80 nm完整器件和纳秒写入阶段，产业距离主要在晶圆级均匀性、长尾误码、热预算与规模良率。",
    whyRecommended: "本期B类用它回答一个很实际的问题：去掉稀缺Pt/Pd后，参考层稳定性、TMR和纳秒写入能否同时保住。",
    score: 9.5,
    priority: "A",
    arxiv: "",
    doi: "10.1038/s41598-025-20842-9",
    url: "https://www.nature.com/articles/s41598-025-20842-9",
    backupUrl: "https://doi.org/10.1038/s41598-025-20842-9",
    accessNote: "已核验Scientific Reports开放全文的堆栈、80 nm器件、TMR、Δ、写入电压和脉冲范围",
    featured: true
  },
  {
    id: "cpl-42-100701",
    track: "C",
    secondaryTracks: ["B", "A"],
    title: "Tunneling Magnetoresistance Effect in Altermagnetic Tunnel Junctions with g-Wave Splitting",
    titleZh: "g波自旋劈裂交变磁CrSb隧道结的第一性原理TMR预测",
    authors: "Xinlu Li, Meng Zhu, Jianting Dong, Kun Wu, Fanxing Zheng, Jia Zhang",
    venue: "Chinese Physics Letters 42, 100701 (2025)",
    published: "2025-10-01",
    recommendedOn: date,
    timeTier: "近2年理论精选",
    system: "CrSb/β-InSe/CrSb全反铁磁隧道结，三单层β-InSe势垒",
    conditions: "基于CrSb自旋极化费米面与不同Néel矢量夹角的第一性原理自旋输运计算",
    methods: ["第一性原理", "量子输运", "交变磁", "费米面", "Néel矢量", "TMR"],
    summary: "计算预测三单层β-InSe势垒的CrSb全反铁磁结TMR约290%；改变费米能级时可超过850%，并呈现随两侧Néel矢量夹角变化的角度依赖。",
    relevance: "它给出从材料自旋劈裂、势垒厚度到可测角度依赖TMR的完整理论链，可直接转化为DFT-NEGF复现和实验判据。",
    limitation: "全部关键指标来自理想结构计算；界面终止、缺陷、畴结构、有限温度、接触电阻、材料生长和真实写入尚未实验验证。",
    industrialization: "高Néel温度与无净磁矩有潜力，但在稳定薄膜、界面控制、Néel矢量写入和室温器件读出被证明前，仍是候选材料路线。",
    whyRecommended: "本期C类把二维多态和常规pMTJ之外的下一代材料自由度纳入比较，并明确区分理论上限与实验可实现值。",
    score: 9.4,
    priority: "A",
    arxiv: "",
    doi: "10.1088/0256-307X/42/10/100701",
    url: "https://cpl.iphy.ac.cn/article/doi/10.1088/0256-307X/42/10/100701",
    backupUrl: "https://doi.org/10.1088/0256-307X/42/10/100701",
    accessNote: "已核验Chinese Physics Letters官方全文页的作者、结构、290%与超过850%的计算结果和证据性质",
    featured: true
  },
  {
    id: "rsi-96-053909",
    track: "D",
    secondaryTracks: ["A", "C"],
    title: "Simultaneous measurements of magnetic susceptibility and electrical transport at extreme conditions",
    titleZh: "0.04 K与30 T下同步测磁化率和电输运的极端条件平台",
    authors: "Yunong Wang, Ziming Wu, Gang Li, Zhenzhong Shi",
    venue: "Review of Scientific Instruments 96, 053909 (2025)",
    published: "2025-05-29",
    recommendedOn: date,
    timeTier: "近2年设备精选",
    system: "隧道二极管振荡器磁化率与四端电输运同步测量插件",
    conditions: "Oxford TeslatronPT 14 T系统与30 T极端条件装置；最低0.04 K；以层状Ising超导体演示",
    methods: ["隧道二极管振荡器", "电输运", "稀释制冷", "30 T磁场", "同步测量", "量子振荡"],
    summary: "作者把TDO磁化率和电输运集成到同一低温高场测量中，在14 T与30 T平台验证，并在最低0.04 K、最高30 T下同步测量(LaSe)1.14(NbSe2)2。",
    relevance: "同一样品、同一温度与磁场轨迹的两种信号能减少跨批次和跨升降场误差，适合升级低温输运平台并建立磁性—电阻联合判据。",
    limitation: "论文演示对象是量子材料而非MTJ；TDO线圈耦合、绝对磁化率标定、脉冲写入兼容、闭循环微振动和多通道串扰需重新验证。",
    industrialization: "最接近科研级极端条件平台模块。若用于器件开发，需要样品吞吐、自动换线、校准溯源、重复性和安全联锁指标。",
    whyRecommended: "本期D类提供可落地的设备升级方向：不要只测R-H或R-T，而要让磁响应与输运在同一时间轴上互相验证。",
    score: 9.6,
    priority: "A",
    arxiv: "",
    doi: "10.1063/5.0260173",
    url: "https://pubs.aip.org/aip/rsi/article/96/5/053909/3347870/Simultaneous-measurements-of-magnetic",
    backupUrl: "https://doi.org/10.1063/5.0260173",
    accessNote: "已核验AIP官方页面的系统结构、14 T/30 T集成、0.04 K演示和DOI",
    featured: true
  },
  {
    id: "s41699-025-00624-7",
    track: "E",
    secondaryTracks: ["A", "B", "D"],
    title: "Unpinning the magnetic interface between 2D materials and NiFe for ultra-low coercivity spin valves",
    titleZh: "不中断接触沉积消除NiFe/石墨烯界面氧化钉扎",
    authors: "Ting-Chun Huang, Yu-Xin Chen, Chun-Yi Lin, Chi-Feng Pai, Chiashain Chuang, Ya-Ping Hsieh, Mario Hofmann et al.",
    venue: "npj 2D Materials and Applications 9, 104 (2025)",
    published: "2025-11-27",
    recommendedOn: date,
    timeTier: "近2年精选",
    system: "悬空石墨烯两侧NiFe垂直自旋阀及远端NiO钉扎对照",
    conditions: "高真空电子束蒸发中双面连续沉积；300 K MOKE与10 K磁输运/Hanle测量",
    methods: ["不中断接触沉积", "悬空石墨烯", "电子束蒸发", "MOKE", "Hanle", "低温磁输运"],
    summary: "连续真空沉积避免界面暴露后，NiFe/石墨烯器件矫顽力降低约25倍并接近NiFe本征极限；室温MOKE低于6 G，10 K输运确认低钉扎，远端NiO对照显示交换偏置会重新主导各向异性。",
    relevance: "它把‘真空是否中断’从工艺描述变成可量化的矫顽力和输运差异，直接对应原子级界面制造、真空互联与污染控制。",
    limitation: "器件表现为欧姆型CPP-GMR而非MgO型TMR；双面悬空结构、NiFe厚度和手工转移不能直接代表现代pMTJ量产流程。",
    industrialization: "核心价值是界面洁净度方法论。迁移到MTJ产线仍需真空互联吞吐、颗粒控制、晶圆级封装、TMR/RA和可靠性验证。",
    whyRecommended: "本期E类用它说明：原子级制造的关键不只是层厚，而是界面在形成过程中有没有被空气、残胶和氧化物重新定义。",
    score: 9.6,
    priority: "A",
    arxiv: "",
    doi: "10.1038/s41699-025-00624-7",
    url: "https://www.nature.com/articles/s41699-025-00624-7",
    backupUrl: "https://doi.org/10.1038/s41699-025-00624-7",
    accessNote: "已核验npj开放全文的UCD流程、25倍矫顽力降低、MOKE/10 K输运、MR类型和NiO对照",
    featured: true
  }
];

const paperDetails = [
  {
    id: "s41598-025-20842-9",
    oneSentence: "作者用Co/Ni超晶格替代Pt/Pd参考层，并在80 nm完整pMTJ中同时保住高TMR、热稳定性和5 ns写入。",
    background: "pMTJ参考层通常依赖Pt、Pd等较稀缺材料来提供垂直各向异性和稳定的合成反铁磁耦合。真正有价值的材料替换不能只在毯膜上证明，还必须经受图形化、纳秒写入和热稳定性检验。",
    question: "不使用Pt/Pd，能否仍构造出足够稳定的参考层，并在纳米级完整MTJ中维持可用的TMR、保持与写入性能？",
    workflow: [
      "以Co/Ni超晶格和Ru间隔层构造无Pt/Pd的合成反铁磁参考结构。",
      "用FeCoB/W/FeCoB合成自由层兼顾垂直各向异性、阻尼和热稳定性。",
      "把完整堆栈图形化为直径最低80 nm的MTJ纳米柱。",
      "在自动探针台测R-H、热稳定性、准静态开关，并用2–10 ns脉冲源验证快速写入。"
    ],
    findings: [
      "参考层开关场高于250 mT，说明无Pt/Pd的SAF仍具有较强稳定性。",
      "80 nm器件TMR超过130%，部分结构达到约140%–145%。",
      "目标自由层结构热稳定因子Δ大于50。",
      "平均写入电压约0.35 V，对应临界电流密度约2.6 MA/cm²，并实现最低5 ns脉冲写入。"
    ],
    explanation: "Co/Ni多层本身可提供界面垂直各向异性，Ru把两组磁层反铁磁耦合，形成磁矩相互抵消但参考方向稳定的SAF。自由层中的W插层则帮助调节交换、阻尼和有效各向异性。材料替换的成功取决于整套耦合关系，而不是某一层单独性能。",
    whyItMatters: ["展示稀缺元素替换可以走到完整纳米器件。", "同时报告TMR、Δ和纳秒写入，避免单指标最优。", "为可持续材料与MRAM工艺联动提供可量化样例。"],
    researchConnection: "可直接借鉴其‘毯膜磁性—完整堆栈—纳米柱—脉冲写入’四级验收链。对你的原子制造平台而言，任何新电极、插层或扩散阻挡层都应沿同样链条验证，而不能只看XRD或单层磁滞。",
    limitationsDetailed: "论文没有给出晶圆级片内/批次分布、亚ppm WER、超过10¹²次耐久、回流焊后保持和全生命周期供应链评价。常见元素结构也可能带来更多层数、沉积时间和过程复杂度，不能仅凭‘无Pt/Pd’认定更低成本。",
    terms: [
      { name: "SAF", meaning: "合成反铁磁结构，用间隔层把两组磁层反向耦合，以降低杂散场并固定参考方向。" },
      { name: "热稳定因子Δ", meaning: "磁化翻转能垒与热能kBT之比；数值越大，状态保持通常越稳定。" },
      { name: "临界电流密度", meaning: "触发自旋转移矩翻转所需的电流除以器件有效面积。" },
      { name: "Co/Ni超晶格", meaning: "交替重复沉积Co和Ni超薄层，利用多界面产生垂直各向异性。" }
    ],
    takeaway: "材料可持续性只有通过完整器件的TMR、保持、写入和良率联合验收，才会成为真正的制造优势。"
  },
  {
    id: "cpl-42-100701",
    oneSentence: "计算表明CrSb交变磁电极配合三层β-InSe势垒可产生约290% TMR，并可由费米能级和Néel矢量夹角进一步调控。",
    background: "传统铁磁MTJ依赖净磁矩，容易产生杂散场并限制高密度缩放。交变磁材料宏观净磁矩接近零，却在动量空间保留强自旋劈裂，有机会同时获得反铁磁的抗扰动性和铁磁体式的自旋选择输运。",
    question: "具有g波自旋劈裂的高Néel温度CrSb，能否作为全反铁磁隧道结电极产生足够大的、可由Néel矢量调控的TMR？",
    workflow: [
      "计算CrSb能带和自旋极化费米面，确认不同动量区域的自旋选择性。",
      "构建CrSb/真空/CrSb和CrSb/β-InSe/CrSb全反铁磁结。",
      "比较两侧Néel矢量不同相对取向下的自旋分辨透射。",
      "扫描费米能级和三层β-InSe势垒，评估TMR大小与角度依赖。"
    ],
    findings: [
      "CrSb被建模为Néel温度约710 K且具有显著非相对论自旋劈裂的交变磁金属。",
      "三单层β-InSe势垒结构的计算TMR约290%。",
      "当费米能级发生合适偏移时，计算TMR可超过850%。",
      "改变两侧Néel矢量夹角可连续调节TMR。"
    ],
    explanation: "TMR来源不是宏观净磁矩，而是CrSb不同动量位置上相反的自旋极化。β-InSe势垒对动量和自旋通道进行选择；当两侧Néel矢量匹配时可通过的通道更多，不匹配时透射被压制。费米能级移动会改变参与输运的通道，因此TMR可大幅变化。",
    whyItMatters: ["给出高温交变磁材料进入隧道器件的明确候选。", "把Néel矢量角度变成可计算、可测的器件自由度。", "提供DFT-NEGF复现的清晰基准结构。"],
    researchConnection: "适合建立一条理论复现训练线：先复现CrSb能带与费米面，再做不同势垒层数、界面终止和缺陷的输运计算，最后把角度依赖TMR转成低温/室温磁输运实验判据。",
    limitationsDetailed: "290%和850%以上均为理想模型的计算结果，不是已制得器件数据。真实CrSb薄膜的畴、表面终止、界面反应、β-InSe缺陷、温度展宽和电极接触都可能降低TMR；此外如何无场写入并读出Néel矢量仍未解决。",
    terms: [
      { name: "交变磁", meaning: "净磁矩近零但能带存在由晶体对称性产生的动量依赖自旋劈裂的磁序。" },
      { name: "Néel矢量", meaning: "反铁磁两个子晶格磁矩之差的方向，用来描述反铁磁序取向。" },
      { name: "g波自旋劈裂", meaning: "自旋劈裂随动量方向呈更高阶角度对称性的分布。" },
      { name: "DFT-NEGF", meaning: "密度泛函理论与非平衡格林函数结合，用于从原子结构计算量子输运。" }
    ],
    takeaway: "理论给出的巨大TMR不是产品指标，而是告诉实验应优先控制费米能级、界面终止和Néel矢量。"
  },
  {
    id: "rsi-96-053909",
    oneSentence: "同一插件在最低0.04 K、最高30 T下同步获得磁化率与电输运，避免两套实验之间的温度、磁场和样品状态偏差。",
    background: "量子材料的电阻异常可能来自磁相变、超导、结构变化或载流子重构。若磁化率和输运分开测，不同样品、不同升降场和不同温度稳定性会使对应关系变得含糊。",
    question: "能否在稀释制冷和30 T强磁场中，用紧凑装置同时测磁化率与四端电输运，并保留足够的灵敏度和可移植性？",
    workflow: [
      "以隧道二极管振荡器驱动线圈，用共振频率变化读取样品交流磁化率。",
      "在同一探头上布置电输运引线，使磁性和电阻共享温度、磁场与时间轴。",
      "先集成到Oxford TeslatronPT 14 T系统，再迁移到30 T极端条件平台。",
      "用层状Ising超导体(LaSe)1.14(NbSe2)2在0.04 K至高场下进行同步验证。"
    ],
    findings: [
      "平台可在最低0.04 K工作。",
      "同步测量在14 T和30 T两套极端条件系统中得到验证。",
      "磁化率与电输运在同一场扫中提供互补相变信息。",
      "模块化结构说明该方法可迁移到其他量子材料与强磁场设施。"
    ],
    explanation: "TDO把样品磁响应转成高灵敏的频率偏移，四端法同时记录散射与载流子输运。两种信号若在同一时刻出现或分离，就能更可靠地区分磁相变、电阻接触伪影和不同物理过程。",
    whyItMatters: ["减少跨样品和跨扫场比较误差。", "把磁性证据直接加入输运相图。", "给出0.04 K与30 T可移植设备方案。"],
    researchConnection: "你的低温自动化平台可借鉴其同轴时间轴思路：把R-H/R-T与交流磁化率、FMR或噪声同步触发，统一记录温稳、磁场方向、扫速和仪器状态，从而让AI分析基于多证据而不是单张热图。",
    limitationsDetailed: "论文没有在MTJ纳米器件、高速写入或闭循环低温系统中验证。TDO信号通常是相对量，绝对磁化率、线圈背景、样品位置和温度漂移都需标定；30 T设施的布线、安全和可用时间也与常规实验室不同。",
    terms: [
      { name: "TDO", meaning: "隧道二极管振荡器，用高稳定射频振荡频率的变化读取微弱磁响应。" },
      { name: "交流磁化率", meaning: "材料对小交流磁场的响应，可指示磁相变、屏蔽和磁动力学。" },
      { name: "同步测量", meaning: "两种信号共享同一温度、磁场轨迹和时间戳，而非事后拼接。" },
      { name: "极端条件", meaning: "本工作指最低0.04 K和最高30 T的低温强磁场环境。" }
    ],
    takeaway: "真正可靠的输运相图，最好让磁性证据与电阻在同一温度、磁场和时间轴上相互校验。"
  },
  {
    id: "s41699-025-00624-7",
    oneSentence: "在真空中连续形成NiFe/石墨烯双面接触，可把矫顽力压低约25倍；加入远端NiO后钉扎重新出现，直接证明界面氧化物的作用。",
    background: "二维材料表面理论上平整、惰性、低缺陷，理应形成低钉扎磁界面，但很多实测器件的矫顽力仍然很高。可能原因不是二维材料本身，而是转移残留、空气暴露和界面氧化。",
    question: "如果在不暴露空气的条件下形成近本征NiFe/石墨烯界面，器件矫顽力能否接近NiFe本征极限；氧化物交换偏置是否才是传统高钉扎的主因？",
    workflow: [
      "在Si3N4膜上制孔并转移CVD石墨烯，使其跨孔悬空。",
      "把样品装入带旋转机构的高真空电子束蒸发腔，在石墨烯两侧连续沉积NiFe，避免界面接触空气。",
      "用Raman和SEM确认悬空石墨烯及沉积后完整性。",
      "制备远端21 nm NiO钉扎对照，并用300 K MOKE、10 K I-V、MR与Hanle测量比较。"
    ],
    findings: [
      "近洁净界面器件矫顽力相对传统结构降低约25倍。",
      "室温MOKE中洁净器件矫顽力低于6 G，而NiO钉扎对照约94 G。",
      "10 K磁输运同样显示洁净器件低钉扎，NiO对照存在约152.4 G偏移。",
      "I-V为线性欧姆接触，MR约1.3%–2.3%，表明主导机制是CPP-GMR而不是TMR。"
    ],
    explanation: "空气暴露或残留氧化物可在NiFe附近形成反铁磁NiO，进而通过交换偏置把磁矩钉住。UCD让两侧金属在同一真空过程中接触石墨烯，减少氧化与污染，因此恢复软磁NiFe接近本征的低矫顽力。远端NiO对照则把‘氧化物—交换偏置—钉扎’因果链单独验证出来。",
    whyItMatters: ["把真空连续性变成可量化器件性能。", "用有意加入NiO的对照建立因果证据。", "提醒二维界面输运需先判定GMR还是TMR。"],
    researchConnection: "对MTJ沉积、刻蚀后封护和真空互联都很直接：需要记录从最后一次清洗到界面封闭的暴露时间，并用XPS/EELS、矫顽力、MR和噪声做同批对照。它也适合转化为‘真空中断一次’与‘全程不中断’的单变量DOE。",
    limitationsDetailed: "这是厚NiFe/石墨烯CPP-GMR自旋阀，不是CoFeB/MgO pMTJ；悬空膜和双面电子束蒸发难直接扩展到300 mm晶圆。1.3%–2.3% MR也不能与MgO TMR直接比较。论文证明的是界面污染/氧化的影响和UCD方法价值，而不是已成熟的MRAM工艺。",
    terms: [
      { name: "UCD", meaning: "不中断接触沉积，在同一真空流程中形成界面，避免空气暴露。" },
      { name: "交换偏置", meaning: "反铁磁/铁磁界面耦合造成磁滞回线偏移和磁矩钉扎。" },
      { name: "CPP-GMR", meaning: "电流垂直层面通过金属多层时产生的巨磁阻，不要求绝缘隧穿势垒。" },
      { name: "Hanle效应", meaning: "自旋在垂直磁场中进动和退相干形成的电学响应，可用于识别自旋输运。" }
    ],
    takeaway: "界面是否暴露空气，可能比名义层厚更早决定器件的磁钉扎和输运机制。"
  }
];

const review = {
  id: "review-apr-12-031330",
  kind: "每日综述",
  track: "B",
  secondaryTracks: ["A", "C", "E"],
  title: "All two-dimensional van der Waals magnetic tunneling junctions",
  titleZh: "全二维范德华磁隧道结：材料、构型与调控综述",
  authors: "Zijing Zhao, Lin Ma, Meijiao Men, Wei Li, Xiaolei Wang",
  venue: "Applied Physics Reviews 12, 031330 (2025)",
  published: "2025-09-11",
  recommendedOn: date,
  doi: "10.1063/5.0279573",
  url: "https://pubs.aip.org/aip/apr/article/12/3/031330/3362835/All-two-dimensional-van-der-Waals-magnetic",
  backupUrl: "https://doi.org/10.1063/5.0279573",
  assistantSummary: "正式Review按自旋阀与自旋过滤构型系统梳理全二维vdW磁隧道结，并比较磁性材料类别、偏压/电流、势垒厚度和自旋夹角等调控手段。",
  whySelected: "今天的核心文章同时出现扭转CrSBr、CrSb理论结和石墨烯/NiFe界面；这篇综述提供统一分类框架，避免把GMR自旋阀、spin-filter和真正隧穿MTJ混为一谈。",
  readingGuide: ["先看spin-valve与spin-filter两类构型。", "再看二维磁体类别和典型TMR证据。", "最后看偏压、厚度、夹角调控及制造障碍；约70–90分钟。"],
  notNew: true
};

const classic = {
  id: "classic-pla-54-225",
  kind: "经典文章",
  track: "C",
  secondaryTracks: ["A", "B"],
  title: "Tunneling between ferromagnetic films",
  titleZh: "Jullière模型的起点：铁磁薄膜之间的自旋极化隧穿",
  authors: "Michel Jullière",
  venue: "Physics Letters A 54, 225–226 (1975)",
  published: "1975-09-08",
  recommendedOn: date,
  doi: "10.1016/0375-9601(75)90174-7",
  url: "https://www.sciencedirect.com/science/article/pii/0375960175901747",
  backupUrl: "https://doi.org/10.1016/0375-9601(75)90174-7",
  assistantSummary: "Jullière用Fe/Ge/Co结比较平行和反平行磁化下的电导，把磁阻与两侧电极的自旋极化联系起来，奠定最常用的MTJ直观模型。",
  whySelected: "本期跨越二维多态、交变磁理论和常规pMTJ；回到Jullière模型可以分清哪些结论来自简单自旋极化，哪些必须由MgO对称性过滤、动量选择或界面耦合解释。",
  readingGuide: ["先看Fe/Ge/Co结和平行/反平行电导定义。", "再推导TMR与两电极自旋极化的关系。", "最后明确模型不包含相干隧穿与界面缺陷；约15–25分钟。"],
  notNew: true
};

const curatedDetails = [
  {
    id: review.id,
    oneSentence: "这篇综述把全二维MTJ按自旋阀与自旋过滤两种物理构型重新组织，并把材料、偏压、势垒厚度和自旋夹角放进同一调控框架。",
    background: "二维范德华材料表面原子级平整、层间混合弱，理论上可避开传统薄膜MTJ的晶格匹配和界面扩散问题，但不同论文使用的‘MTJ’可能对应金属自旋阀、半导体势垒或磁性自旋过滤器，指标不能直接横向比较。",
    question: "全二维磁隧道结有哪些可重复的构型、材料路线和性能调控方法，当前最关键的实验与制造障碍是什么？",
    workflow: ["先区分spin-valve和spin-filter构型。", "按二维磁性材料类型整理代表性器件。", "比较偏压/电流、势垒厚度和自旋夹角调控。", "总结界面、稳定性、温度、可制造性和集成挑战。"],
    findings: ["全二维vdW界面可降低互扩散和晶格匹配约束。", "不同磁性材料和构型对应完全不同的输运机制。", "偏压、势垒厚度和磁矩夹角是反复出现的调控轴。", "工作温度、环境稳定、规模制备与电写入仍是共性障碍。"],
    explanation: "二维材料并不会自动带来高TMR。真正决定结果的是电极有没有自旋极化、势垒对哪些动量/自旋通道透明、界面有没有污染，以及磁矩是否能被可靠写入。综述的价值是把这些变量从材料名字中拆出来。",
    whyItMatters: ["统一二维MTJ术语与构型。", "提供多篇实验和理论工作的比较坐标。", "能直接指导选材料、选势垒和设计对照实验。"],
    researchConnection: "可将站内二维器件按‘是否真正隧穿—是否低温—是否电写入—是否可规模制造’重新标注，并把扭角、层数、界面真空暴露和势垒厚度作为独立DOE变量。",
    limitationsDetailed: "这是综述而非新的器件验证；不同原文的温度、面积、TMR定义和接触结构差异较大。综述总结的潜力不能替代室温、循环、误码、晶圆级均匀性和封装数据。",
    terms: [
      { name: "spin-valve构型", meaning: "两磁层相对取向改变电阻，间隔层可为金属或弱势垒。" },
      { name: "spin-filter构型", meaning: "磁性势垒本身对不同自旋电子具有不同透射率。" },
      { name: "范德华界面", meaning: "层间主要由弱范德华力结合，通常减少晶格匹配要求。" },
      { name: "动量选择", meaning: "势垒只让特定晶体动量和对称性的电子态高效通过。" }
    ],
    takeaway: "读二维MTJ论文时，先问它到底是哪种输运构型，再比较TMR数字。"
  },
  {
    id: classic.id,
    oneSentence: "Jullière把平行与反平行磁化下的隧穿电导差异写成两侧电极自旋极化的组合，建立了MTJ最基础的直观模型。",
    background: "1975年前后，自旋极化隧穿已有零散证据，但还缺少一个能把两侧铁磁电极的自旋极化与结电阻直接关联的简单模型。",
    question: "Fe/Ge/Co结在两电极磁化平行和反平行时为什么电导不同，这种差异能否用电极自旋极化定量描述？",
    workflow: ["制备Fe/Ge/Co铁磁隧道结。", "改变两铁磁薄膜平均磁化的相对方向。", "测量平行与反平行状态下的电导随偏压变化。", "用独立自旋通道模型把电导差异联系到两电极自旋极化。"],
    findings: ["平行与反平行磁化对应不同隧穿电导。", "电导差异可用两侧自旋极化乘积描述。", "该关系成为后来估算TMR和电极极化的常用起点。"],
    explanation: "可以把电流想成自旋向上和向下两条并行通道。平行时，多数自旋在两侧都容易找到可用态；反平行时，一侧多数自旋对应另一侧少数态，整体透射降低，电阻升高。",
    whyItMatters: ["建立MTJ最常用的第一层直觉。", "给出从TMR反推自旋极化的简单关系。", "成为比较复杂相干隧穿理论的基准。"],
    researchConnection: "在分析新MTJ时可先用Jullière模型判断趋势，再用偏压、温度、对称性过滤和界面缺陷解释偏离。对扭转二维结和交变磁结尤其要避免把所有大TMR都简单归因于两个常数极化率。",
    limitationsDetailed: "原始模型基于Fe/Ge/Co和简化独立通道假设，不包含MgO相干隧穿、波函数对称性、动量选择、界面共振、非弹性散射、偏压和温度依赖。因此它适合建立直觉，不足以精确预测现代pMTJ或二维MTJ。",
    terms: [
      { name: "自旋极化", meaning: "费米能附近两种自旋态的占比或输运贡献不相等。" },
      { name: "平行/反平行态", meaning: "两铁磁电极磁化方向相同或相反的两种构型。" },
      { name: "两电流模型", meaning: "把自旋向上和向下视为近似独立的输运通道。" },
      { name: "Jullière模型", meaning: "用两电极自旋极化乘积估算隧穿磁阻的简化模型。" }
    ],
    takeaway: "Jullière模型告诉你TMR为何存在，但现代高TMR器件为何这么大，还必须看势垒对称性和真实界面。"
  }
];

const insights = [
  {
    id: "2026-08-03-interface-state-manufacturability-map",
    date,
    type: "research-opportunity",
    typeZh: "研究机会",
    trackLabel: "A/B/C · 多态与可制造性",
    title: "原子界面自由度—多态数—写入代价—保持稳定联合图",
    subtitle: "把前沿多态演示拉回可量产指标",
    summary: "本站方案：统一比较扭转CrSBr多态、常规无Pt/Pd pMTJ和交变磁理论结，用状态数、写入方式、温度、Δ、TMR、WER和制造自由度构建分层评价图。",
    status: "由当日论文启发的待验证方案",
    relatedPaperIds: ["s41467-026-70239-z", "s41598-025-20842-9", "cpl-42-100701"],
    question: "增加原子界面自由度获得更多状态后，写入能耗、保持、误码和制造容差会付出多大代价？",
    rationale: "三篇工作分别给出多态实验、完整器件实验和交变磁理论上限，但尚无统一可制造性坐标。",
    workflow: ["统一TMR、状态数、温度和写入方式定义。", "建立状态可分辨度与保持时间指标。", "加入层数/扭角/势垒/界面终止容差。", "用常规pMTJ作为制造基准做分层比较。"],
    equipment: ["低温多轴磁输运", "高速脉冲与WER平台", "DFT-NEGF", "界面结构与成分表征"],
    measurements: ["多态电阻间距", "温度依赖保持", "写入路径/能耗", "结构容差与重复性"],
    metrics: ["各状态6σ可分辨", "保持与循环稳定", "模型对缺陷敏感度", "晶圆/器件重复性"],
    evidenceBoundary: "论文没有把三种路线在同一指标体系下比较；联合图是本站分析框架。",
    firstSteps: ["先用公开数据建立无量纲表。", "把缺失WER/保持项目显式留空。", "再选择一条可在现有平台复现的基准。"],
    researchConnection: "直接连接低温输运、多态状态识别、理论计算和MTJ产业化判断。",
    takeaway: "多一个状态只有在能稳定写入、读出和制造时才是器件收益。"
  },
  {
    id: "2026-08-03-tdo-transport-platform",
    date,
    type: "method",
    typeZh: "方法与设备",
    trackLabel: "A/D · 同步极端条件计量",
    title: "低温磁化率—电输运—脉冲状态同步测量插件",
    subtitle: "让磁性与电阻共用一条时间轴",
    summary: "本站方案：在现有低温强磁场平台上加入小型TDO线圈和统一触发，把磁化率、R-H/R-T与写入后电阻状态同步记录。",
    status: "待平台验证",
    relatedPaperIds: ["rsi-96-053909", "s41467-026-70239-z"],
    question: "MTJ或二维磁结的中间电阻态究竟对应真实磁构型，还是接触、温漂和陷阱伪影？",
    rationale: "同步磁化率与输运已在0.04 K/30 T验证；迁移到多态磁结可为状态归属增加独立磁性证据。",
    workflow: ["设计低热负载TDO线圈与样品座。", "标定空线圈、标准样品和温漂。", "统一触发场扫、输运和脉冲序列。", "比较磁性转变与电阻态的时间/磁场对应。"],
    equipment: ["TDO射频电路", "低温磁体/稀释制冷", "锁相与源表", "高速脉冲与时间戳系统"],
    measurements: ["共振频率/品质因数", "R-H/R-T", "写入后状态", "温度与磁场稳定度"],
    metrics: ["磁性/输运同步误差", "频率漂移底噪", "多态识别准确率", "重复升降场一致性"],
    evidenceBoundary: "原文未验证MTJ、二维磁结和高速脉冲兼容；这些是本站提出的设备扩展。",
    firstSteps: ["先在现有14 T以下平台做室温和77 K空载标定。", "选标准磁性样品验证相变位置。", "最后接入单个MTJ/二维器件。"],
    researchConnection: "可把既有LabVIEW/Python自动化升级为多物理量证据链。",
    takeaway: "把磁响应与电阻同步测，才能给复杂中间态一个更可信的物理归属。"
  },
  {
    id: "2026-08-03-uninterrupted-interface-doe",
    date,
    type: "atomic",
    typeZh: "原子与极端制造",
    trackLabel: "B/E · 真空界面",
    title: "真空不中断—空气暴露—远端氧化层三组界面DOE",
    subtitle: "把界面洁净度转成矫顽力、MR与可靠性指标",
    summary: "本站方案：设置全程真空、定时空气暴露和可控远端氧化层三组样品，联合XPS/EELS、MOKE、10 K输运和噪声建立氧化钉扎因果链。",
    status: "由当日论文启发的待验证方案",
    relatedPaperIds: ["s41699-025-00624-7", "s41598-025-20842-9"],
    question: "界面暴露多长时间开始显著推高矫顽力、交换偏置和器件分布长尾？",
    rationale: "UCD论文用NiO对照证明钉扎作用；常规pMTJ论文提供可制造器件基准，二者可组合成真空互联验收方法。",
    workflow: ["固定堆栈，仅改变真空中断时间。", "增加远端氧化层正对照。", "冻结关键样品做XPS/STEM-EELS。", "关联MOKE、低温MR、噪声和脉冲写入。"],
    equipment: ["真空互联沉积", "可控暴露/残气分析", "MOKE与低温输运", "XPS/STEM-EELS"],
    measurements: ["O/Ni/Fe界面分布", "矫顽力与交换偏置", "MR/TMR/RA", "噪声、WER与保持"],
    metrics: ["允许暴露时间窗口", "氧含量—矫顽力斜率", "异常器件检出率", "工艺前后良率变化"],
    evidenceBoundary: "25倍降低来自NiFe/石墨烯GMR结构；迁移到CoFeB/MgO必须重新建立定量关系。",
    firstSteps: ["先做0、10、60 min三档暴露。", "每档保留结构牺牲样品。", "先用MOKE和XPS筛选，再进入纳米器件。"],
    researchConnection: "直接覆盖沉积、真空互联、界面表征和MTJ器件反馈。",
    takeaway: "真空连续性应成为有数值控制限的工艺变量，而不是一句设备描述。"
  }
];

const reports = readJson("data/reports.json");
reports.updatedAt = updatedAt;
reports.reportDate = date;
for (const paper of papers) upsert(reports.papers, paper);
const reportHistory = {
  date,
  label: "完整日报：原子级多态、无Pt/Pd pMTJ、交变磁理论、极端条件计量与真空界面",
  total: 5,
  counts: { A: 1, B: 1, C: 1, D: 1, E: 1 },
  paperIds: papers.map((paper) => paper.id)
};
const reportHistoryIndex = reports.history.findIndex((entry) => entry.date === date);
if (reportHistoryIndex >= 0) reports.history[reportHistoryIndex] = reportHistory;
else reports.history.push(reportHistory);
writeJson("data/reports.json", reports);

const details = readJson("data/paper-details.json");
const normalizedDetails = details.map((item) => ({
  ...item,
  terms: item.terms?.map((term) => ({ name: term.name ?? term.term, meaning: term.meaning })) ?? []
}));
for (const detail of paperDetails) upsert(normalizedDetails, detail);
writeJson("data/paper-details.json", normalizedDetails);

const curated = readJson("data/curated-reading.json");
upsert(curated.items, review);
upsert(curated.items, classic);
const curatedHistory = { date, reviewId: review.id, classicIds: [classic.id] };
const curatedHistoryIndex = curated.history.findIndex((entry) => entry.date === date);
if (curatedHistoryIndex >= 0) curated.history[curatedHistoryIndex] = curatedHistory;
else curated.history.push(curatedHistory);
writeJson("data/curated-reading.json", curated);

const cDetails = readJson("data/curated-details.json").map((item) => ({
  ...item,
  terms: item.terms?.map((term) => ({ name: term.name ?? term.term, meaning: term.meaning })) ?? []
}));
for (const detail of curatedDetails) upsert(cDetails, detail);
writeJson("data/curated-details.json", cDetails);

const dailyReading = { date, review, classics: [classic] };
writeJson("data/daily-reading.json", dailyReading);

const insightArchive = readJson("data/insight-archive.json");
for (const item of insights) upsert(insightArchive.items, item);
const insightHistory = {
  date,
  opportunityIds: [insights[0].id],
  methodIds: [insights[1].id],
  atomicIds: [insights[2].id]
};
const insightHistoryIndex = insightArchive.history.findIndex((entry) => entry.date === date);
if (insightHistoryIndex >= 0) insightArchive.history[insightHistoryIndex] = insightHistory;
else insightArchive.history.push(insightHistory);
writeJson("data/insight-archive.json", insightArchive);

console.log(`Updated ${date}: ${papers.length} core papers, 1 review, 1 classic, ${insights.length} insight routes.`);
