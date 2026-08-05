import fs from 'node:fs';
const dir = new URL('../data/', import.meta.url);
const read = n => JSON.parse(fs.readFileSync(new URL(n, dir), 'utf8'));
const write = (n,v) => fs.writeFileSync(new URL(n, dir), JSON.stringify(v,null,2)+'\n');
const date='2026-08-05';

const papers=[
 {id:'s41467-025-68043-2',track:'A',secondaryTracks:['B','C'],title:'Two-dimensional magnetic tunnel p-n junctions for low-power electronics',titleZh:'二维磁性 p–n 隧道结：10 K 下 1100% TMR 与零偏压自旋电压',authors:'Wenkai Zhu, Ziao Wang, Tiangui Hu et al.',venue:'Nature Communications 17, 1283 (2026)',published:'2025-12-30',recommendedOn:date,timeTier:'近期正式论文',system:'FGT/p-GaSe/n-InSe/FGT 垂直范德华磁隧道结',conditions:'10 K；垂直磁场；1 nA偏置及零外加偏置；p-GaSe/n-InSe总厚约10 nm',methods:['低温磁输运','HRTEM','偏置/温度扫描','漂移扩散模型','DFT'],summary:'10 K、1 nA下器件A实测约1100% TMR；零偏压SVE约1930%，−1 nA时达15720%，磁滞可追踪到FGT约220 K居里温度。',relevance:'把势垒厚度、p–n内建场和界面洁净度同时纳入低温自旋隧穿DOE。',limitation:'器件数、晶圆均匀性、RA长尾、WER、保持和耐久原文公开页未给出；零偏压电压不等于无能耗发电。',industrialization:'处于手工堆叠二维器件物理验证，距大面积生长、接触良率和CMOS集成仍远。',whyRecommended:'先看图1的结构/HRTEM与10 K磁滞，再看图2温度依赖和图3偏置地图；35–50分钟。',score:9.8,priority:'S',arxiv:'',doi:'10.1038/s41467-025-68043-2',url:'https://www.nature.com/articles/s41467-025-68043-2',backupUrl:'https://doi.org/10.1038/s41467-025-68043-2',accessNote:'已核验Nature开放全文、发表日期、结构、温度、磁场与公开定量结果',featured:true},
 {id:'s41467-026-70802-8',track:'B',secondaryTracks:['A','E'],title:'Nanoscale exchange-bias magnetic tunnel junctions enabled memristive synapse and leaky-integrate-fire neuron for neuromorphic computing',titleZh:'约100 nm交换偏置MTJ同时实现多态突触与GHz级LIF神经元',authors:'Zanhong Chen, Dehang Zhu, Ao Du et al.',venue:'Nature Communications 17, 4362 (2026)',published:'2026-03-24',recommendedOn:date,timeTier:'近半年正式论文',system:'纳米尺度交换偏置磁隧道结（EB-MTJ），反铁磁层空间分布提供连续状态',conditions:'约100 nm器件；0.4 ns编程脉冲；片上突触/神经元协同演示',methods:['MTJ微纳加工','交换偏置调控','时间分辨脉冲','STDP','卷积SNN'],summary:'实测稳定连续多态与STDP；0.4 ns脉冲可渐进编程并形成GHz级LIF动力学，系统模拟/演示达到96%手势识别准确率。',relevance:'将通常被视为不均匀性的反铁磁分布转化为可编程状态变量，直接连接界面缺陷、交换偏置与类脑器件。',limitation:'公开页未给出阵列级TMR/RA分布、单状态保持、写能耗、误码和耐久长尾；96%包含算法协同，不能等同芯片量产指标。',industrialization:'已超过单一二态器件，但仍缺晶圆级反铁磁分布控制、阵列校准和温漂/老化验证。',whyRecommended:'先看器件结构和交换偏置来源，再看0.4 ns脉冲轨迹、STDP及96%识别流程；40–55分钟。',score:9.7,priority:'S',arxiv:'',doi:'10.1038/s41467-026-70802-8',url:'https://www.nature.com/articles/s41467-026-70802-8',backupUrl:'https://doi.org/10.1038/s41467-026-70802-8',accessNote:'已核验Nature开放全文、作者、日期、约100 nm、0.4 ns及96%结果',featured:true},
 {id:'prb-113-l060410',track:'C',secondaryTracks:['B'],title:'Tunnel-like transport and extremely large magnetoresistance in an all-metal junction incorporating the altermagnet KV2Se2O',titleZh:'全金属交变磁结的隧穿式输运与1.5×10^12%理论磁阻',authors:'Jing-Jing He, Ling-Xiao Liu, Yan-Dong Guo, Jia-Ren Yuan, Xiao-Hong Yan, Stefano Sanvito',venue:'Physical Review B 113, L060410 (2026)',published:'2026-02-24',recommendedOn:date,timeTier:'近半年正式理论论文',system:'KV₂Se₂O/BaTi₂Bi₂O/KV₂Se₂O 全金属结',conditions:'第一性原理电子结构与自旋输运；不同磁构型；温度、缺陷与有限偏压原文公开摘要未给出',methods:['DFT','第一性原理输运','动量分辨自旋选择','磁构型比较'],summary:'理论确认KV₂Se₂O的动量依赖自旋劈裂，并预测全金属结具有隧穿式输运和1.5×10^12%磁阻，机制为对称性驱动的自旋选择。',relevance:'提供“界面动量匹配”计算筛选轴，可先算界面终止、应变和无序，再决定是否生长。',limitation:'1.5×10^12%是理想结构理论预测，不是实测；有限温度、声子、界面粗糙、互扩散、接触和器件尺寸的影响原文摘要未公开。',industrialization:'处于材料/结构理论候选阶段，需先完成可生长性、薄膜稳定性和实结输运验证。',whyRecommended:'先看能带自旋劈裂，再看P/AP构型的动量分辨透射和磁阻定义；30–45分钟。',score:9.5,priority:'A',arxiv:'',doi:'10.1103/dltj-4cff',url:'https://journals.aps.org/prb/abstract/10.1103/dltj-4cff',backupUrl:'https://doi.org/10.1103/dltj-4cff',accessNote:'已核验APS页面、作者、日期、结构和理论磁阻；正文部分需机构权限',featured:true},
 {id:'rsi-97-024703',track:'D',secondaryTracks:['A'],title:'Multilayer cryogenic powder filters with low parasitic capacitance',titleZh:'兼顾GHz射频衰减与低寄生电容的多层低温粉末滤波器',authors:'Itishree Pradhan, Hao Li, Alina Rupp et al.',venue:'Review of Scientific Instruments 97, 024703 (2026)',published:'2026-02-04',recommendedOn:date,timeTier:'近半年正式论文',system:'多层低温金属粉末滤波器与传输线',conditions:'低温接线；GHz射频抑制；公开摘要未给出最低温度、完整衰减dB和电容数值',methods:['低温射频滤波','传输测量','寄生电容比较','热噪声控制'],summary:'实测/演示多层结构同时增强GHz射频衰减并降低对地寄生电容，用于阻止沿线RF加热而不过度牺牲测量带宽。',relevance:'低温MTJ、弱信号隧穿和误码测试都需把电子温度、RF泄漏和脉冲带宽共同校准。',limitation:'公开摘要没有完整dB–频率、寄生电容和最低电子温度数字；不能直接把量子器件滤波效果外推到纳秒MTJ写线。',industrialization:'适合作为低温平台模块；进入多通道量产测试还需热负载、通道串扰、连接器重复性和自动校准。',whyRecommended:'先看传统粉末滤波器的寄生电容问题，再看多层截面与S参数对比；25–40分钟。',score:9.4,priority:'A',arxiv:'',doi:'10.1063/5.0293088',url:'https://pubs.aip.org/aip/rsi/article/97/2/024703/3378556/Multilayer-cryogenic-powder-filters-with-low',backupUrl:'https://doi.org/10.1063/5.0293088',accessNote:'已核验AIP直接页面、作者、卷页、DOI和公开摘要',featured:true},
 {id:'2506.17474',track:'E',secondaryTracks:['D','A'],title:'Improving the lifetime of aluminum-based superconducting qubits through atomic layer etching and deposition',titleZh:'ALE去损伤后原位ALD封护使铝基量子器件损耗减半',authors:'Neha Mahuli, Joaquin Minguzzi, Jiansong Gao et al.',venue:'arXiv:2506.17474 v2',published:'2026-06-26',recommendedOn:date,timeTier:'近期修订预印本',system:'Si上铝薄膜谐振器与平面transmon；封装前ALE+原位ALD',conditions:'最终干法表面处理；ALE去除原生氧化物/残留后不破真空ALD封护；持续数月观察',methods:['原子层刻蚀','原位原子层沉积','低温谐振器损耗','transmon T1统计'],summary:'TLS相关损耗降低约2倍；紧凑电容transmon中位Q=(3.69±0.42)×10^6、T1=196±22 μs，改善维持数月。',relevance:'虽非MTJ，但直接示范“去除加工损伤—不破真空封护—低温器件验收”闭环，可迁移到MTJ侧壁封护DOE。',limitation:'这是预印本且器件为铝超导电路；原文摘要未公开MTJ适用性、300 mm均匀性、ALE选择比、完整厚度与吞吐量，不能直接宣称改善TMR。',industrialization:'接近封装前后处理模块验证；量产仍需颗粒、选择性、关键尺寸损失、批间稳定和长期封装可靠性。',whyRecommended:'先看工艺流程图，再看TLS损耗分离、Q/T1统计及多月保持；35–50分钟。',score:9.6,priority:'A',arxiv:'2506.17474',doi:'10.48550/arXiv.2506.17474',url:'https://arxiv.org/abs/2506.17474',backupUrl:'https://doi.org/10.48550/arXiv.2506.17474',accessNote:'已核验arXiv v2日期、作者、流程和公开定量结果；标记为预印本',featured:true}
];

const details=papers.map((p,i)=>({
 id:p.id, oneSentence:p.summary,
 background:[
  '磁隧道结利用磁性电极相对状态改变隧穿电阻；TMR是高、低阻态的相对差。对二维结，范德华界面可减少悬挂键；对交变磁，净磁矩可为零但能带仍呈动量依赖自旋劈裂。',
  '交换偏置来自铁磁/反铁磁界面并会移动磁滞回线；粉末滤波器用趋肤效应耗散高频噪声；ALE/ALD分别以自限反应逐层去除和沉积材料。'
 ][i<3?0:1],
 question:[
  '能否在极低偏置下利用二维p–n内建场与原子级界面获得巨大自旋隧穿信号？',
  '能否把交换偏置的空间分布转化为稳定模拟权重，并让同一MTJ完成突触和LIF神经元功能？',
  '无净磁化的交变磁材料能否借助晶体对称性在全金属结中产生超大磁阻？',
  '怎样同时强烈衰减GHz射频并避免传统粉末滤波器的对地寄生电容压缩带宽？',
  '能否在器件完成后用ALE去掉原生氧化物/残留，再原位ALD封护，以长期减少界面TLS损耗？'
 ][i],
 workflow:[
  ['堆叠FGT/p-GaSe/n-InSe/FGT并以HRTEM确认界面。','在10 K及变温下扫垂直磁场，比较1 nA与零外加偏置。','改变势垒厚度和偏置，加入单层间隔对照。','用漂移扩散与DFT解释内建场和自旋选择。'],
  ['制备约100 nm EB-MTJ并表征反铁磁空间分布。','以电流脉冲渐进调节多电阻态并测STDP。','用0.4 ns脉冲进行时间分辨LIF测试。','把器件模型接入卷积SNN评估手势识别。'],
  ['计算KV₂Se₂O能带并确认交变磁自旋劈裂。','构造KV₂Se₂O/BaTi₂Bi₂O/KV₂Se₂O全金属结。','比较不同磁构型的动量分辨透射。','由电导比计算磁阻并归因于对称性选择。'],
  ['制作传统与多层粉末滤波结构。','测量传输衰减与对地寄生电容。','比较GHz抑制和有效带宽。','评估RF入侵导致的样品加热抑制。'],
  ['在Si上完成铝谐振器/transmon。','封装前ALE共形去除原生氧化物和残留。','不破真空ALD介质封护。','低温测Q、T1和TLS损耗并跨月复测。']
 ][i],
 findings:[
  ['【直接实测】10 K、1 nA下器件A TMR约1100%，器件B约10%，器件C消失。','【直接实测】零偏压SVE在器件A约1930%；−1 nA时达15720%。','【直接实测】磁滞信号延续到FGT约220 K居里温度。','【对照实测】5 nm单层p-GaSe或n-InSe没有零偏压SVE，1 nA TMR约85%和41%。','【作者解释】p–n内建场与布里渊区过滤共同增强自旋选择。'],
  ['【直接实测】约100 nm EB-MTJ呈稳定连续多态并具有STDP。','【直接实测】0.4 ns脉冲可渐进编程LIF动力学，工作带宽达GHz量级。','【系统结果】卷积SNN手势识别准确率96%。','【作者解释】反铁磁空间分布及其电流调制形成连续状态。','【本站推断】需把“有益分布”与晶圆不可控离散分开验收。'],
  ['【理论计算】预测磁阻1.5×10^12%。','【理论计算】输运虽然全金属，却呈隧穿式强抑制/选择。','【理论计算】KV₂Se₂O具有动量依赖自旋劈裂。','【作者解释】对称性驱动的自旋选择造成构型间巨大电导差。','【本站推断】真实界面无序很可能显著降低理想比值。'],
  ['【直接测量】多层滤波结构在GHz范围提供高衰减。','【直接测量】相较传统结构降低对地寄生电容。','【作者解释】分层几何保留粉末趋肤耗散同时削弱电容耦合。','【工程意义】减少RF沿线加热且不明显牺牲测量带宽。','【公开限制】具体最低温度、dB曲线和电容数字未在公开摘要给出。'],
  ['【直接实测】TLS相关损耗降低约2倍。','【直接实测】紧凑transmon中位Q=(3.69±0.42)×10^6。','【直接实测】中位T1=196±22 μs。','【直接实测】改善维持数月。','【作者解释】ALE/ALD降低电容表面TLS缺陷密度。']
 ][i],
 explanation:p.limitation+' 直接结果、作者解释与本站推断已在上列逐项标注；不以理论峰值或算法准确率替代实器件可靠性。',
 whyItMatters:[p.relevance,p.industrialization,'共同目标是把界面/噪声/缺陷从背景因素变成可记录、可对照的工程变量。'],
 researchConnection:['立即执行：',
  i===0?'做势垒厚度×温度×偏置矩阵，并同时记录RA、TMR、SVE、漏电和接触电阻；单层间隔与反转p–n为对照。':
  i===1?'做反铁磁厚度/退火×器件尺寸×脉冲宽度矩阵；测多态分离度、漂移、保持、能耗、WER和耐久。':
  i===2?'先算三种界面终止、±2%应变和粗糙/混层超胞；输出动量透射、偏压依赖和温度展宽后再决定生长。':
  i===3?'制作直通/传统粉末/多层三组；测4 K与基温S参数、寄生电容、电子温度、脉冲上升沿和串扰。':
  '在MTJ测试片上做无处理/仅ALE/仅ALD/ALE+ALD四组；测侧壁CD、漏电、TMR/RA、低频噪声、热循环和保持。'
 ].join(' '),
 limitationsDetailed:p.limitation+' 原文未公开的数字不补写；跨材料迁移必须重新做材料选择性和热预算验证。',
 terms:[{term:'TMR',explanation:'平行与反平行磁态电阻差的相对比例。'},{term:'RA',explanation:'结电阻与面积乘积，用于比较不同尺寸隧道结。'},{term:'证据分层',explanation:'实测/计算、作者机制解释和本站工程推断分别陈述。'}],
 takeaway:p.whyRecommended
}));

const report=read('reports.json');
report.reportDate=date; report.updatedAt='2026-08-05T09:02:02+08:00';
report.papers=report.papers.filter(x=>!papers.some(p=>p.id===x.id)).concat(papers);
report.history=report.history.filter(x=>x.date!==date).concat([{date,label:'详细日报：二维低偏置隧穿、交换偏置多态、交变磁对称性、低温滤波与ALE/ALD修复',total:5,counts:{A:1,B:1,C:1,D:1,E:1},paperIds:papers.map(x=>x.id)}]);
write('reports.json',report);
const pd=read('paper-details.json').filter(x=>!details.some(d=>d.id===x.id)).concat(details); write('paper-details.json',pd);

const review={id:'review-s44306-024-00014-7',kind:'每日综述',track:'C',secondaryTracks:['B','A'],title:'Antiferromagnetic tunnel junctions for spintronics',titleZh:'反铁磁隧道结自旋电子学综述',authors:'Ding-Fu Shao, Evgeny Y. Tsymbal',venue:'npj Spintronics 2, 13 (2024)',published:'2024-05-08',recommendedOn:date,doi:'10.1038/s44306-024-00014-7',url:'https://www.nature.com/articles/s44306-024-00014-7',backupUrl:'https://doi.org/10.1038/s44306-024-00014-7',assistantSummary:'正式综述系统解释共线/非共线AFMTJ中的动量依赖自旋极化、Néel自旋流、TMR和可驱动Néel矢量翻转的自旋力矩。',whySelected:'为今天C类1.5×10^12%理论预测提供判断框架，也把A/B类的低温实测与交换偏置器件放回反铁磁写读体系。',readingGuide:['先读图1与传统MTJ/AFMTJ差异。','再读动量依赖自旋极化和Néel自旋流。','最后看自旋力矩、材料/界面条件及未决实验；60–80分钟。'],notNew:true};
const classic={id:'classic-pr-102-1413',kind:'经典文章',track:'B',secondaryTracks:['C'],title:'New Magnetic Anisotropy',titleZh:'交换偏置的经典起点：新型磁各向异性',authors:'W. H. Meiklejohn, C. P. Bean',venue:'Physical Review 102, 1413 (1956)',published:'1956-06-01',recommendedOn:date,doi:'10.1103/PhysRev.102.1413',url:'https://journals.aps.org/pr/abstract/10.1103/PhysRev.102.1413',backupUrl:'https://doi.org/10.1103/PhysRev.102.1413',assistantSummary:'在铁磁/反铁磁耦合体系中建立交换偏置现象的经典实验基础，为今天EB-MTJ利用磁滞偏移和反铁磁界面提供源头。',whySelected:'今天B类把交换偏置从二态钉扎扩展为连续多态；回读原文可区分界面交换、矫顽力变化和器件电流调制。',readingGuide:['先看磁滞回线偏移的实验事实。','再看铁磁/反铁磁界面耦合解释。','最后列出与纳米EB-MTJ相比缺失的尺度、脉冲和可靠性变量；20–30分钟。'],notNew:true};
const cr=read('curated-reading.json'); cr.items=cr.items.filter(x=>![review.id,classic.id].includes(x.id)).concat([review,classic]); cr.history=cr.history.filter(x=>x.date!==date).concat([{date,reviewId:review.id,classicIds:[classic.id]}]); write('curated-reading.json',cr);
const cdetails=[review,classic].map((x,j)=>({id:x.id,oneSentence:x.assistantSummary,background:j===0?'反铁磁体净磁矩可接近零，但Néel矢量、动量依赖自旋极化和超快动力学仍能编码信息。综述用于建立从能带到器件的术语框架。':'交换偏置是铁磁/反铁磁界面耦合导致磁滞回线沿磁场轴偏移的现象，是固定层与EB-MTJ的重要物理基础。',question:j===0?'AFMTJ怎样电读出和电写入Néel矢量，哪些对称性与界面条件才能获得大TMR？':'铁磁/反铁磁接触后为何出现单向各向异性和磁滞偏移？',workflow:j===0?['梳理共线与非共线AFMTJ。','比较动量依赖自旋极化与Néel自旋流。','讨论TMR和自旋力矩。','汇总材料、界面和器件障碍。']:['制备铁磁/反铁磁耦合体系。','冷却/设定界面磁序。','测磁滞回线偏移。','用界面交换解释单向各向异性。'],findings:j===0?['AFMTJ可用Néel矢量作状态变量。','大TMR依赖动量选择和晶体对称性。','Néel自旋流可产生切换力矩。','潜在速度和密度优势仍需器件实证。']:['建立交换偏置的经典实验事实。','指出界面耦合产生单向各向异性。','为固定层和EB-MTJ奠基。','原始工作不包含纳米脉冲和阵列统计。'],explanation:'这是框架/经典证据，不是今天器件指标的直接证明；现代TMR、RA、WER、保持与耐久需独立测量。',whyItMatters:[x.whySelected,'帮助区分材料对称性、界面交换与器件统计。'],researchConnection:j===0?'用综述建立“材料—界面终止—动量透射—TMR—写入力矩”表，再为候选交变磁结排计算与生长优先级。':'对EB-MTJ做场冷方向、反铁磁厚度、退火温度与脉冲四维DOE，同时记录偏置场、矫顽力、多态数和漂移。',limitationsDetailed:'综述为二次文献，经典论文年代早；两者均不能替代现代纳米器件的晶圆级、阵列级和可靠性验证。',terms:[{term:'Néel矢量',explanation:'描述反铁磁两个子晶格相对方向的序参量。'},{term:'交换偏置',explanation:'铁磁/反铁磁界面耦合导致的磁滞回线偏移。'}],takeaway:x.readingGuide.join(' ')}));
const cd=read('curated-details.json').filter(x=>!cdetails.some(d=>d.id===x.id)).concat(cdetails); write('curated-details.json',cd);
write('daily-reading.json',{date,review,classics:[classic]});

const insights=[
 {id:'2026-08-05-interface-selection-matrix',date,type:'opportunity',typeZh:'研究机会',trackLabel:'A/B/C · 界面选择',title:'从二维p–n到交变磁结的界面选择矩阵',subtitle:'用同一组可比较指标筛掉不可制造的理论峰值',summary:'本站方案：把势垒厚度、界面终止、温度和偏置统一映射到RA、TMR、SVE和噪声，连接实测与第一性原理。',status:'由当日A/C论文组合提出的待验证路线',relatedPaperIds:['s41467-025-68043-2','prb-113-l060410'],question:'理想对称性选择在真实界面无序下还能保留多少？',rationale:'二维结提供实测对照，交变磁结提供理论上限。',workflow:['DFT筛三种终止和±2%应变。','制作厚度梯度与单层间隔对照。','2–220 K、偏置与磁场联合扫描。','统一拟合动量选择、RA和噪声。'],equipment:['DFT/NEGF','低温磁输运','HRTEM/EELS','低噪声源表'],measurements:['RA/TMR/SVE','I-V非线性','1/f噪声','界面成分'],metrics:['理论—实测折减比','片内3σ','温度稳定范围','漏电长尾'],evidenceBoundary:'组合路线为本站推断，不能把两种不同材料的峰值直接比较。',firstSteps:['先做2个厚度和3个温度。','保留单层间隔对照。','每个器件记录接触电阻。'],researchConnection:'直接服务原子界面筛选与低温验收。',takeaway:'先比较可制造的稳健窗口，再追逐峰值。'},
 {id:'2026-08-05-filter-pulse-calibration',date,type:'method',typeZh:'设备与测量平台',trackLabel:'D/A · 低温带宽',title:'滤波—电子温度—纳秒脉冲三联校准',subtitle:'避免把安静与高速误当成同一个目标',summary:'本站方案：以直通、传统粉末、多层粉末三条线路同时测S参数、电子温度和脉冲保真度。',status:'由当日D类论文启发的设备路线',relatedPaperIds:['rsi-97-024703','s41467-026-70802-8'],question:'GHz噪声抑制与0.4 ns级脉冲传输之间的最优折中在哪里？',rationale:'低温滤波降低加热，但寄生电容会损失写脉冲边沿。',workflow:['室温VNA基线。','4 K与基温复测S参数。','噪声温度计标定电子温度。','输入0.4–10 ns脉冲测过冲/延迟。'],equipment:['VNA','低温衰减器/粉末滤波器','高速示波器','电子温度计'],measurements:['S21/S11','寄生电容','电子温度','脉冲上升沿'],metrics:['GHz衰减','带宽','基温升高','脉冲失真'],evidenceBoundary:'滤波器论文公开摘要未给出完整数值，具体指标须在本平台重测。',firstSteps:['先校准空线。','逐级加入滤波。','记录泵/磁体开关状态。'],researchConnection:'支撑低温MTJ噪声与高速WER可信测量。',takeaway:'用同一套实验同时验收安静和快速。'},
 {id:'2026-08-05-ale-ald-mtj-sidewall',date,type:'atomic',typeZh:'原子与极端制造',trackLabel:'E/B · 侧壁修复',title:'MTJ侧壁ALE去损伤—原位ALD封护四组DOE',subtitle:'把量子器件表面修复迁移成MTJ可靠性实验',summary:'本站方案：无处理、仅ALE、仅ALD、ALE+ALD四组，分离去损伤与封护贡献。',status:'跨器件迁移的待验证原子制造路线',relatedPaperIds:['2506.17474','s41467-026-70802-8'],question:'能否在不损失CD和MgO完整性的前提下降低侧壁缺陷、漏电和低频噪声？',rationale:'ALE/ALD在铝量子器件中把TLS损耗减半，但MTJ材料选择性未知。',workflow:['用MTJ测试片标定ALE循环数。','四组处理并保持真空互联。','TEM/EELS/XPS核验侧壁化学。','测TMR/RA、漏电、噪声、热循环和保持。'],equipment:['ALE/ALD真空互联','TEM/EELS','XPS','晶圆级MTJ测试'],measurements:['侧壁CD','元素分布','TMR/RA','1/f噪声','保持/耐久'],metrics:['CD损失','漏电尾部','TMR/RA 3σ','热循环漂移'],evidenceBoundary:'超导铝器件结果不能直接证明MTJ收益；先做选择性和MgO损伤验证。',firstSteps:['2/5/10个ALE循环。','ALD厚度1/2/3 nm。','加入仅真空等待对照。'],researchConnection:'直接覆盖图形化损伤、原位封护、可靠性与BEOL兼容。',takeaway:'必须用四组对照分开“去除”和“封护”。'}
];
const ia=read('insight-archive.json'); ia.items=ia.items.filter(x=>!insights.some(y=>y.id===x.id)).concat(insights); ia.history=ia.history.filter(x=>x.date!==date).concat([{date,opportunityIds:[insights[0].id],methodIds:[insights[1].id],atomicIds:[insights[2].id]}]); write('insight-archive.json',ia);
console.log(`Updated ${date}: ${papers.length} papers, review, classic, ${insights.length} insights.`);
