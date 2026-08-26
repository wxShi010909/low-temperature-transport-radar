(() => {
  const V='V6';
  const $id=id=>document.getElementById(id);
  const pick=a=>a?.length?a[Math.floor(Math.random()*a.length)]:null;
  const R=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
  const C=(v,a,b)=>Math.max(a,Math.min(b,v));
  const fmt=v=>typeof money==='function'?money(v):`$${Number(v||0).toFixed(1)}M`;
  const logo=ab=>{
    const ids={ATL:'1610612737',BOS:'1610612738',BKN:'1610612751',CHA:'1610612766',CHI:'1610612741',CLE:'1610612739',DAL:'1610612742',DEN:'1610612743',DET:'1610612765',GSW:'1610612744',HOU:'1610612745',IND:'1610612754',LAC:'1610612746',LAL:'1610612747',MEM:'1610612763',MIA:'1610612748',MIL:'1610612749',MIN:'1610612750',NOP:'1610612740',NYK:'1610612752',OKC:'1610612760',ORL:'1610612753',PHI:'1610612755',PHX:'1610612756',POR:'1610612757',SAC:'1610612758',SAS:'1610612759',TOR:'1610612761',UTA:'1610612762',WAS:'1610612764'};
    return ids[ab]?`https://cdn.nba.com/logos/nba/${ids[ab]}/primary/L/logo.svg`:'';
  };
  const teamName=ab=>DATA?.teams?.[ab]?.name||ab;
  const roster=ab=>DATA?.teams?.[ab]?.players||[];
  const starOf=ab=>roster(ab).slice().sort((a,b)=>(b.salary||0)-(a.salary||0))[0]||pick(roster(ab));
  const teammate=()=>{const ps=roster(state.team).filter(p=>p.name!==state.name);return pick(ps)};
  const outlet=()=>pick(['LEAGUE WIRE','COURTSIDE TONIGHT','HOOPS INSIDER','LOCKER ROOM REPORT','MARKET WATCH','NATIONAL DESK']);
  const nowTag=()=>`${seasonLabel(state.seasonYear)} · G${Math.max(1,state.gameIndex||0)}`;

  function ensureV6(){
    if(!state||!state.name)return;
    state.media=state.media||{news:[],heat:12,reputation:55};
    state.relations=state.relations||{teamChemistry:70,coach:65,frontOffice:60,teammates:{},rivals:{},nemesisTeams:{},friends:{}};
    state.contractPrefs=state.contractPrefs||'BALANCED';
    state.contractMarket=state.contractMarket||null;
    state.extensionOffer=state.extensionOffer||null;
    state.tradeRequest=state.tradeRequest||null;
    state.transactionHistory=state.transactionHistory||[];
    state.v6Flags=state.v6Flags||{lastNewsGame:0,lastLockerGame:0};
    if(state.contract){
      if(!state.contract.option && /Rookie/i.test(state.contract.type||'') && (state.contract.years||0)>=4)state.contract.option={type:'TO',year:4};
      else state.contract.option=state.contract.option||null;
      state.contract.source=state.contract.source||'existing';
    }
  }

  function pushNews(type,title,text,meta={}){
    ensureV6();
    const item={id:`${Date.now()}_${Math.random()}`,type,outlet:outlet(),title,text,time:nowTag(),team:meta.team||null,player:meta.player||null,impact:meta.impact||0};
    state.media.news.unshift(item);
    state.media.news=state.media.news.slice(0,120);
    if(meta.impact)state.media.heat=C(state.media.heat+meta.impact,0,100);
  }

  function setRel(bucket,key,delta){
    ensureV6();
    const m=state.relations[bucket]||(state.relations[bucket]={});
    m[key]=C((m[key]??50)+delta,0,100);
    return m[key];
  }

  function rivalryLabel(v){return v>=90?'死敌':v>=75?'宿敌':v>=60?'强对手':v>=45?'有火药味':'普通对手'}
  function teamThreatLabel(v){return v>=85?'天敌':v>=68?'苦主':v>=52?'难缠对手':'普通对手'}

  function generateLeaguePulse(force=false){
    ensureV6();
    if(!force && (state.gameIndex||0)-state.v6Flags.lastNewsGame<4)return;
    state.v6Flags.lastNewsGame=state.gameIndex||0;
    const teams=TEAM_KEYS.filter(x=>x!==state.team);
    const a=pick(teams),b=pick(teams.filter(x=>x!==a));
    const p=starOf(a),q=starOf(b);
    const stories=[
      ()=>pushNews('TRADE','交易流言升温',`${teamName(a)} 被曝正在评估阵容调整，多支球队已经询价 ${p?.name||'球队核心'}。`,{team:a,player:p?.name}),
      ()=>pushNews('FORM','状态火热',`${p?.name||teamName(a)} 最近一周手感滚烫，媒体开始讨论其全明星与最佳阵容前景。`,{team:a,player:p?.name}),
      ()=>pushNews('LOCKER','角色讨论',`${teamName(a)} 更衣室近期围绕球权和轮换展开内部沟通，教练组强调“赢球优先”。`,{team:a}),
      ()=>pushNews('SOCIAL','场外动态',`${p?.name||'一名球星'} 与 ${q?.name||'另一名球员'} 一同出席品牌活动，社媒互动引发球迷讨论。`,{team:a,player:p?.name}),
      ()=>pushNews('RIVALRY','焦点对决预热',`${teamName(a)} 与 ${teamName(b)} 的下一次交手被媒体列为本周焦点，双方近期比赛火药味持续升温。`,{team:a}),
      ()=>pushNews('COMMUNITY','公益活动',`${p?.name||teamName(a)} 参加当地青少年篮球公益活动，并宣布追加社区项目投入。`,{team:a,player:p?.name}),
      ()=>pushNews('MEDIA','播客热议',`${p?.name||'联盟球星'} 在播客中谈到季后赛竞争：“真正的较量从四月才开始。”`,{team:a,player:p?.name})
    ];
    pick(stories)();
    if(Math.random()<.28)pick(stories)();
  }

  function lockerRoomPulse(){
    ensureV6();
    if((state.gameIndex||0)-state.v6Flags.lastLockerGame<6 || Math.random()>.38)return;
    state.v6Flags.lastLockerGame=state.gameIndex||0;
    const mate=teammate();if(!mate)return;
    const events=[
      {d:-12,t:'训练场争执',x:`训练中你与 ${mate.name} 因一次防守沟通发生激烈争论，队友随后将双方拉开。`},
      {d:-8,t:'球权分歧',x:`赛后更衣室里，${mate.name} 对近期进攻角色表达不满，媒体捕捉到了微妙气氛。`},
      {d:10,t:'核心搭档',x:`你和 ${mate.name} 赛后加练到很晚，教练组称赞两人的默契正在快速提升。`},
      {d:7,t:'场外社交',x:`你和 ${mate.name} 一同参加球队晚宴，社媒照片让“核心搭档”话题升温。`},
      {d:6,t:'队内力挺',x:`${mate.name} 在采访中公开力挺你：“他是我们最信任的人之一。”`}
    ];
    const e=pick(events),v=setRel('teammates',mate.name,e.d);
    state.relations.teamChemistry=C(state.relations.teamChemistry+Math.round(e.d/3),0,100);
    pushNews('LOCKER',e.t,`${e.x} 当前关系：${v}/100。`,{team:state.team,player:mate.name,impact:e.d<0?4:1});
  }

  function postGameRelations(before){
    ensureV6();
    const g=state.phase==='playoffs'?state.playoffs?.history?.[0]:state.gameLog?.[0];
    if(!g || before===g)return;
    const opp=g.opp,star=starOf(opp),line=g.line;
    let add=0;
    if(line?.pts>=35)add+=6;if(line?.pts>=45)add+=8;if(Math.abs(g.us-g.them)<=5)add+=5;if(state.phase==='playoffs')add+=7;
    if(add){
      const key=star?.name||teamName(opp),v=setRel('rivals',key,add);
      if(v>=60 && Math.random()<.45)pushNews('RIVALRY','火药味升级',`${state.name} 与 ${key} 在焦点战中多次正面对位，赛后双方都没有回避竞争话题。媒体将两人的关系形容为“${rivalryLabel(v)}”。`,{team:opp,player:key,impact:3});
    }
    const tv=setRel('nemesisTeams',opp,g.win?-3:7);
    if(tv>=68 && !g.win && Math.random()<.35)pushNews('NEMESIS',`${teamName(opp)} 又成苦主`,`${teamName(opp)} 再次击败 ${state.name} 所在球队，双方历史对位正在形成明显心理优势。当前“天敌指数” ${tv}/100。`,{team:opp,impact:2});
    if(g.win)state.relations.teamChemistry=C(state.relations.teamChemistry+1,0,100);else state.relations.teamChemistry=C(state.relations.teamChemistry-1,0,100);
    generateLeaguePulse();lockerRoomPulse();
  }

  function capMaxPct(){const exp=Math.max(1,state.seasonNo||1);return exp<=6?.25:exp<=9?.30:.35}
  function marketSalary(){
    const cap=capForYear(state.seasonYear+1),max=cap*capMaxPct(),a=state.career?.at(-1)?.avg||currentAverages();
    let v=3+(state.ovr-70)*1.15+(a.pts||0)*.38+state.fame*.11;
    if((state.allAwards||[]).some(x=>x.includes('MVP')))v+=7;
    if((state.allAwards||[]).some(x=>x.includes('All-NBA')))v+=4;
    return C(v,2.2,max);
  }
  function contender(ab){const p=typeof teamPower==='function'?teamPower(ab):76;return C(Math.round((p-68)*3.5),15,98)}
  function marketSize(ab){return ({LAL:99,NYK:99,GSW:95,MIA:88,BOS:86,CHI:84,LAC:83,BKN:82,DAL:80,HOU:78,PHI:77,PHX:76}[ab]||R(52,75))}
  function roleScore(ab){const stars=roster(ab).filter(p=>(p.salary||0)>=30).length;return C(92-stars*13+Math.round((state.ovr-85)*1.2),35,99)}
  function createDeal(ab,type='Free Agent Contract',salary=null,years=null){
    const base=salary??marketSalary(),yrs=years??(state.age>=36?R(1,2):R(2,5));
    const annual=Array.from({length:yrs},(_,i)=>+(base*Math.pow(1.08,i)).toFixed(1));
    let option=null;if(yrs>=3&&Math.random()<.52)option={type:Math.random()<.62?'PO':'TO',year:yrs};
    return{team:ab,type,years:yrs,year:0,annual,total:+annual.reduce((a,b)=>a+b,0).toFixed(1),option,source:'V6'};
  }
  function offerScore(o){
    const moneyScore=o.annual[0]/Math.max(1,marketSalary())*100,cont=contender(o.team),role=roleScore(o.team),market=marketSize(o.team);
    const pref=state.contractPrefs;
    return pref==='MAX'?moneyScore*.62+role*.15+cont*.13+market*.1:pref==='CONTENDER'?cont*.5+moneyScore*.25+role*.15+market*.1:pref==='ROLE'?role*.5+moneyScore*.25+cont*.15+market*.1:pref==='MARKET'?market*.45+moneyScore*.3+cont*.15+role*.1:moneyScore*.35+cont*.27+role*.23+market*.15;
  }
  function buildFreeAgency(reason='合同到期'){
    ensureV6();const base=marketSalary();
    let candidates=TEAM_KEYS.filter(x=>x!==state.team).sort(()=>Math.random()-.5).slice(0,7);
    candidates.unshift(state.team);
    let offers=candidates.map((ab,i)=>{
      const c=contender(ab);let mult=.84+Math.random()*.24;
      if(state.contractPrefs==='CONTENDER'&&c>80)mult-=.05;
      if(state.contractPrefs==='MAX'&&i===0)mult+=.04;
      if(i===0)mult*=C(.88+(state.relations.frontOffice||60)/500,.90,1.10);
      const salary=C(base*mult,2.2,capForYear(state.seasonYear+1)*capMaxPct());
      return createDeal(ab,i===0?'Bird Rights Offer':'Free Agent Offer',+salary.toFixed(1));
    });
    offers=offers.sort((a,b)=>offerScore(b)-offerScore(a)).slice(0,7);
    state.contractMarket={reason,offers,stage:'FA'};
    pushNews('FREE_AGENCY','进入自由球员市场',`${state.name} 正式进入自由球员市场。联盟消息人士称，多支球队已经递交报价。`,{team:state.team,player:state.name,impact:6});
  }
  function maybeExtension(){
    if(!state.contract||state.contractMarket||state.extensionOffer)return;
    const remain=state.contract.years-state.contract.year;
    if(remain<=2 && remain>=1 && state.age<38 && Math.random()<.58){
      const sal=marketSalary()*(.94+Math.random()*.08),yrs=state.age>=34?R(2,3):R(3,5);
      state.extensionOffer=createDeal(state.team,'提前续约',+sal.toFixed(1),yrs);
      pushNews('CONTRACT','母队开启续约谈判',`${teamName(state.team)} 已向 ${state.name} 提交提前续约报价，双方将在休赛期决定是否继续合作。`,{team:state.team,player:state.name,impact:3});
    }
  }
  function maybeWaive(){
    if(!state.contract||state.contractMarket)return false;
    const expensive=currentSalary()>28,poor=state.ovr<76,fo=state.relations.frontOffice<32,inj=state.injury?.games>20;
    const risk=(poor&&expensive?.14:0)+(fo?.10:0)+(inj&&state.age>33?.07:0);
    if(Math.random()<risk){
      pushNews('WAIVE','球队宣布裁掉球员',`${teamName(state.team)} 宣布裁掉 ${state.name}。球队表示这是阵容与薪资结构综合考虑后的决定。`,{team:state.team,player:state.name,impact:10});
      state.transactionHistory.unshift(`${seasonLabel(state.seasonYear)} · 被 ${teamName(state.team)} 裁掉`);
      buildFreeAgency('被裁后重新就业');return true;
    }return false;
  }
  function optionDecision(){
    if(!state.contract?.option)return false;
    const op=state.contract.option,entering=state.contract.year===op.year-1;
    if(!entering)return false;
    if(op.type==='PO'){
      state.contractMarket={stage:'PO',reason:'球员选项',offers:[]};
      pushNews('OPTION','球员选项待决定',`${state.name} 手握下赛季球员选项，可以执行合同，也可以跳出合同试水自由市场。`,{team:state.team,player:state.name,impact:4});return true;
    }
    if(op.type==='TO'){
      const exercise=state.ovr>=78 || currentSalary()<marketSalary()*.8;
      if(exercise){pushNews('OPTION','球队执行选项',`${teamName(state.team)} 正式执行 ${state.name} 的球队选项。`,{team:state.team,player:state.name});return false;}
      pushNews('OPTION','球队拒绝执行选项',`${teamName(state.team)} 放弃 ${state.name} 的球队选项，球员将进入自由市场。`,{team:state.team,player:state.name,impact:7});buildFreeAgency('球队拒绝执行选项');return true;
    }
    return false;
  }
  function prepareContractPhase(){
    ensureV6();
    if(state.contractMarket)return;
    if(maybeWaive())return;
    if(optionDecision())return;
    if(state.contract && state.contract.year>=state.contract.years){buildFreeAgency('合同到期');return;}
    maybeExtension();
  }

  window.setContractPref=p=>{ensureV6();state.contractPrefs=p;if(state.contractMarket?.stage==='FA')buildFreeAgency(state.contractMarket.reason);renderV6();save()};
  window.acceptExtension=()=>{if(!state.extensionOffer)return;state.contract={...state.extensionOffer};state.extensionOffer=null;state.transactionHistory.unshift(`${seasonLabel(state.seasonYear)} · 与 ${teamName(state.team)} 提前续约 ${state.contract.years}年 ${fmt(state.contract.total)}`);pushNews('CONTRACT','续约达成',`${state.name} 与 ${teamName(state.team)} 完成提前续约，总价值 ${fmt(state.contract.total)}。`,{team:state.team,player:state.name,impact:4});renderV6();save()};
  window.declineExtension=()=>{if(!state.extensionOffer)return;pushNews('CONTRACT','续约谈判暂告一段落',`${state.name} 暂时拒绝母队提前续约，计划继续评估未来选择。`,{team:state.team,player:state.name,impact:3});state.extensionOffer=null;renderV6();save()};
  window.exercisePO=()=>{if(state.contractMarket?.stage!=='PO')return;state.contractMarket=null;pushNews('OPTION','执行球员选项',`${state.name} 选择执行球员选项，继续留在 ${teamName(state.team)}。`,{team:state.team,player:state.name});renderV6();save()};
  window.declinePO=()=>{if(state.contractMarket?.stage!=='PO')return;buildFreeAgency('跳出球员选项');renderV6();save()};
  window.acceptFA=i=>{const o=state.contractMarket?.offers?.[i];if(!o)return;const old=state.team;state.team=o.team;state.contract={...o};state.contractMarket=null;state.extensionOffer=null;state.transactionHistory.unshift(`${seasonLabel(state.seasonYear)} · ${old===state.team?'续约':'加盟 '+teamName(state.team)} · ${o.years}年 ${fmt(o.total)}`);pushNews('SIGNING','重磅签约',`${state.name} 与 ${teamName(state.team)} 达成 ${o.years} 年 ${fmt(o.total)} 合同。${old!==state.team?`正式告别 ${teamName(old)}。`:''}`,{team:state.team,player:state.name,impact:9});state.relations.frontOffice=65;state.relations.teamChemistry=62;renderCareer();save()};
  window.requestTrade=()=>{ensureV6();if(state.offseason)return alert('休赛期请直接通过自由市场/合同选择更换球队。');if(state.contract?.year<=0)return;state.tradeRequest={type:'ANY_CONTENDER',time:seasonLabel(state.seasonYear)};state.relations.frontOffice=C(state.relations.frontOffice-18,0,100);pushNews('TRADE','球员提出交易申请',`${state.name} 已通过经纪团队向管理层表达换队意愿，倾向加盟具备季后赛竞争力的球队。`,{team:state.team,player:state.name,impact:12});renderV6();save()};
  window.resolveTradeRequest=()=>{if(!state.tradeRequest)return;const pool=TEAM_KEYS.filter(x=>x!==state.team).sort((a,b)=>contender(b)-contender(a)).slice(0,8);const dest=pick(pool.slice(0,4));const old=state.team;state.team=dest;state.contract.team=dest;state.tradeRequest=null;state.transactionHistory.unshift(`${seasonLabel(state.seasonYear)} · 交易：${teamName(old)} → ${teamName(dest)}`);pushNews('TRADE','交易达成',`${teamName(old)} 将 ${state.name} 交易至 ${teamName(dest)}。新东家被视为更具竞争力的环境。`,{team:dest,player:state.name,impact:10});state.relations.teamChemistry=58;renderCareer();save()};

  function contractCard(o,i){const cont=contender(o.team),role=roleScore(o.team),market=marketSize(o.team),option=o.option?`${o.option.type} · 第${o.option.year}年`:'无选项';return `<div class="v6-offer"><div class="v6-team"><img src="${logo(o.team)}" onerror="this.style.display='none'"><div><b>${teamName(o.team)}</b><span>${o.type}</span></div></div><div class="v6-money">${o.years}年 ${fmt(o.total)}<small>首年 ${fmt(o.annual[0])} · ${option}</small></div><div class="v6-meters"><span>争冠 ${cont}</span><span>角色 ${role}</span><span>市场 ${market}</span></div><button class="btn primary" onclick="acceptFA(${i})">接受报价</button></div>`}
  function renderContractCenter(){
    ensureV6();const box=$id('v6ContractCenter');if(!box)return;
    const c=state.contract,remain=c?Math.max(0,c.years-c.year):0;
    let html=`<div class="v6-contract-top"><div><span>当前合同</span><b>${c?`${c.type} · ${c.year}/${c.years}年`:'自由球员'}</b><small>${c?`${fmt(currentSalary())}/年 · 剩余${remain}年${c.option?` · ${c.option.type}选项`:''}`:'暂无合同'}</small></div><button class="btn" onclick="requestTrade()" ${state.offseason||!c?'disabled':''}>申请交易</button></div>`;
    html+=`<div class="v6-pref"><span>经纪人策略</span>${[['BALANCED','综合'],['MAX','寻求顶薪'],['CONTENDER','优先争冠'],['ROLE','核心地位'],['MARKET','大市场']].map(([k,n])=>`<button class="btn ${state.contractPrefs===k?'primary':''}" onclick="setContractPref('${k}')">${n}</button>`).join('')}</div>`;
    if(state.tradeRequest)html+=`<div class="decision"><h4>交易申请已提交</h4><p>管理层关系已受到影响。为了让当前版本可玩，可以由系统模拟一次争冠球队交易谈判。</p><button class="btn blue" onclick="resolveTradeRequest()">模拟管理层完成交易</button></div>`;
    if(state.extensionOffer)html+=`<div class="decision"><h4>提前续约报价</h4><p>${teamName(state.team)}：${state.extensionOffer.years}年 ${fmt(state.extensionOffer.total)}，首年 ${fmt(state.extensionOffer.annual[0])}</p><div class="actions"><button class="btn primary" onclick="acceptExtension()">接受续约</button><button class="btn" onclick="declineExtension()">拒绝，继续观望</button></div></div>`;
    if(state.contractMarket?.stage==='PO')html+=`<div class="decision"><h4>球员选项 PLAYER OPTION</h4><p>你可以执行最后一年合同，也可以跳出合同进入自由市场。</p><div class="actions"><button class="btn" onclick="exercisePO()">执行球员选项</button><button class="btn primary" onclick="declinePO()">跳出合同</button></div></div>`;
    if(state.contractMarket?.stage==='FA')html+=`<div class="v6-market-head"><b>自由球员市场</b><span>${state.contractMarket.reason} · ${state.contractMarket.offers.length}份报价</span></div><div class="v6-offers">${state.contractMarket.offers.map(contractCard).join('')}</div>`;
    if(state.transactionHistory?.length)html+=`<div class="statgroup-title">TRANSACTION HISTORY</div><div class="feed">${state.transactionHistory.slice(0,10).map(x=>`<div class="feeditem">${x}</div>`).join('')}</div>`;
    box.innerHTML=html;
  }

  function renderMedia(){
    ensureV6();const box=$id('v6Media');if(!box)return;
    const news=state.media.news||[];
    box.innerHTML=`<div class="v6-media-head"><div><span>生涯模拟媒体</span><b>联盟热度 ${Math.round(state.media.heat)}/100</b></div><small>以下均为游戏内虚构剧情，不代表现实新闻。</small></div><div class="v6-news">${news.length?news.slice(0,40).map(n=>`<article class="v6-story"><div class="v6-storytop"><span>${n.outlet} · ${n.type}</span><small>${n.time}</small></div><h4>${n.title}</h4><p>${n.text}</p>${n.team?`<div class="v6-storyteam"><img src="${logo(n.team)}" onerror="this.style.display='none'">${teamName(n.team)}</div>`:''}</article>`).join(''):'<p class="muted">随着比赛推进，联盟新闻会不断出现。</p>'}</div>`;
  }
  function renderRelations(){
    ensureV6();const box=$id('v6Relations');if(!box)return;
    const top=(o,n=8)=>Object.entries(o||{}).sort((a,b)=>b[1]-a[1]).slice(0,n);
    const rivals=top(state.relations.rivals),nems=top(state.relations.nemesisTeams),mates=top(state.relations.teammates);
    box.innerHTML=`<div class="careerhero"><div class="mini"><span>球队化学反应</span><b>${state.relations.teamChemistry}</b></div><div class="mini"><span>教练信任</span><b>${state.relations.coach}</b></div><div class="mini"><span>管理层关系</span><b>${state.relations.frontOffice}</b></div><div class="mini"><span>媒体热度</span><b>${Math.round(state.media.heat)}</b></div></div><div class="v6-relgrid"><section><h4>宿敌 / 死对头</h4>${rivals.length?rivals.map(([k,v])=>`<div class="v6-rel"><span>${k}<small>${rivalryLabel(v)}</small></span><b>${v}</b></div>`).join(''):'<p class="muted">还没有形成明确宿敌。</p>'}</section><section><h4>苦主 / 天敌球队</h4>${nems.length?nems.map(([k,v])=>`<div class="v6-rel"><span>${teamName(k)}<small>${teamThreatLabel(v)}</small></span><b>${v}</b></div>`).join(''):'<p class="muted">暂时没有明显天敌。</p>'}</section><section><h4>队友关系</h4>${mates.length?mates.map(([k,v])=>`<div class="v6-rel"><span>${k}<small>${v>=75?'核心搭档':v<=35?'关系紧张':'正常队友'}</small></span><b>${v}</b></div>`).join(''):'<p class="muted">随着赛季推进会形成队友关系网。</p>'}</section></div>`;
  }
  function renderV6(){renderContractCenter();renderMedia();renderRelations()}

  document.title='NBA Career Lab V6';const brand=document.querySelector('.brand small');if(brand)brand.textContent='V6 · NBA UNIVERSE SIMULATOR';
  const st=document.createElement('style');st.textContent=`
  .v6-contract-top,.v6-media-head,.v6-team,.v6-storytop,.v6-storyteam{display:flex;align-items:center;justify-content:space-between;gap:10px}.v6-contract-top>div,.v6-media-head>div{display:grid;gap:4px}.v6-contract-top span,.v6-contract-top small,.v6-media-head span,.v6-media-head small,.v6-market-head span{font-size:10px;color:var(--muted)}.v6-contract-top b,.v6-media-head b{font-size:18px}.v6-pref{display:flex;gap:6px;align-items:center;overflow:auto;margin:14px 0}.v6-pref>span{font-size:10px;color:var(--muted);white-space:nowrap}.v6-pref .btn{padding:8px 10px;font-size:10px;white-space:nowrap}.v6-offers{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.v6-offer{border:1px solid #283649;background:#0a111a;border-radius:15px;padding:13px}.v6-team{justify-content:flex-start}.v6-team img{width:38px;height:38px;object-fit:contain}.v6-team div{display:grid}.v6-team span{font-size:9px;color:var(--muted)}.v6-money{font-size:19px;font-weight:950;margin:12px 0}.v6-money small{display:block;color:var(--muted);font-size:10px;font-weight:500;margin-top:3px}.v6-meters{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px}.v6-meters span{font-size:9px;border:1px solid #2a3748;border-radius:99px;padding:5px 7px;color:#bfc9d6}.v6-offer .btn{width:100%}.v6-market-head{margin:16px 0 8px;display:grid}.v6-news{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin-top:12px}.v6-story{border:1px solid #253346;border-radius:14px;padding:12px;background:#0a1119}.v6-storytop span{font-size:9px;color:var(--accent);font-weight:900}.v6-storytop small{font-size:9px;color:var(--muted)}.v6-story h4{margin:8px 0 5px}.v6-story p{margin:0;color:#b9c3d1;font-size:11px;line-height:1.65}.v6-storyteam{justify-content:flex-start;margin-top:8px;font-size:10px;color:var(--muted)}.v6-storyteam img{width:22px;height:22px;object-fit:contain}.v6-relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.v6-relgrid section{border:1px solid #253346;border-radius:14px;padding:12px;background:#0a1119}.v6-relgrid h4{margin:0 0 10px}.v6-rel{display:flex;justify-content:space-between;gap:8px;padding:8px 0;border-bottom:1px solid #1e2937}.v6-rel:last-child{border:0}.v6-rel span{font-size:11px}.v6-rel small{display:block;color:var(--muted);font-size:9px;margin-top:2px}.v6-rel b{font-size:17px}.decision .actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}@media(max-width:720px){.v6-offers,.v6-news,.v6-relgrid{grid-template-columns:1fr}.v6-contract-top{align-items:flex-start}.v6-pref{padding-bottom:3px}}
  `;document.head.appendChild(st);
  const tabs=document.querySelector('.tabs');
  if(tabs&&!document.querySelector('[data-tab="contract"]')){
    tabs.insertAdjacentHTML('beforeend','<button class="btn tab" data-tab="contract">合同 / 转会</button><button class="btn tab" data-tab="media">联盟动态</button><button class="btn tab" data-tab="relations">关系 / 宿敌</button>');
    const lastPane=document.querySelector('#tab-careerlog')||document.querySelector('.tabpane:last-of-type');
    lastPane?.insertAdjacentHTML('afterend','<div class="tabpane" id="tab-contract"><div class="panel gamebox"><div class="statgroup-title">CONTRACT · FREE AGENCY · TRANSACTIONS</div><div id="v6ContractCenter"></div></div></div><div class="tabpane" id="tab-media"><div class="panel gamebox"><div class="statgroup-title">LEAGUE MEDIA · SIMULATED STORIES</div><div id="v6Media"></div></div></div><div class="tabpane" id="tab-relations"><div class="panel gamebox"><div class="statgroup-title">LOCKER ROOM · RIVALS · NEMESIS</div><div id="v6Relations"></div></div></div>');
  }
  document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tabpane').forEach(x=>x.classList.remove('active'));b.classList.add('active');$id('tab-'+b.dataset.tab)?.classList.add('active');renderV6()});

  const preV6TeamPower=teamPower;
  teamPower=function(ab){const base=preV6TeamPower(ab);if(state?.name&&ab===state.team){ensureV6();return base+(state.relations.teamChemistry-70)/14;}return base};
  const preV6Line=simulatePlayerLine;
  simulatePlayerLine=function(mult=1){ensureV6();const chem=C(.95+(state.relations.teamChemistry-50)/1000,.94,1.03);return preV6Line(mult*chem)};

  const oldRegular=simulateRegularGame;
  simulateRegularGame=function(mode='normal'){ensureV6();const before=state.gameLog?.[0];const oldIndex=state.gameIndex;oldRegular(mode);if(state.gameIndex!==oldIndex)postGameRelations(before);renderV6();save()};
  const oldPOGame=simulatePlayoffGame;
  simulatePlayoffGame=function(mode='normal'){ensureV6();const before=state.playoffs?.history?.[0];const oldLen=state.playoffs?.history?.length||0;oldPOGame(mode);if((state.playoffs?.history?.length||0)!==oldLen)postGameRelations(before);renderV6();save()};
  const oldStart=startOffseason;
  startOffseason=function(){oldStart();ensureV6();prepareContractPhase();generateLeaguePulse(true);renderV6();save()};
  const oldFinish=finishOffseason;
  finishOffseason=function(){ensureV6();if(state.contractMarket)return alert('先在「合同 / 转会」页面处理合同、选项或自由市场。');if(state.extensionOffer)return alert('母队还有一份提前续约报价，请先接受或拒绝。');oldFinish();ensureV6();renderV6();save()};
  const oldRender=renderCareer;
  renderCareer=function(){ensureV6();oldRender();ensureV6();renderV6()};
  const oldCreate=createState;
  createState=function(){const s=oldCreate();s.media={news:[],heat:12,reputation:55};s.relations={teamChemistry:70,coach:65,frontOffice:60,teammates:{},rivals:{},nemesisTeams:{},friends:{}};s.contractPrefs='BALANCED';s.contractMarket=null;s.extensionOffer=null;s.tradeRequest=null;s.transactionHistory=[];s.v6Flags={lastNewsGame:0,lastLockerGame:0};return s};

  if(state?.name){ensureV6();if(!(state.media.news||[]).length){pushNews('WELCOME','生涯媒体中心上线',`${state.name} 的职业生涯已经进入联盟媒体聚光灯。比赛、合同、交易、队友关系和宿敌故事都会在这里留下记录。`,{team:state.team,player:state.name});generateLeaguePulse(true)}renderV6()}
  console.info('[NBA Career Lab] V6 universe + contract system loaded');
})();