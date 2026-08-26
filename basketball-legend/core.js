const ATTRS=[
  ['three','三分'],['mid','中投'],['finish','终结'],['pass','传球'],['handle','控球'],['speed','速度'],['vertical','弹跳'],['strength','力量'],['rebound','篮板'],['steal','抢断'],['block','盖帽'],['perDef','外防'],['durability','耐久']
];

const POS={
 PG:{name:'控球后卫',code:'POINT GUARD',desc:'控球、组织、速度与外线投射',weights:{pass:.17,handle:.17,speed:.11,three:.10,mid:.08,finish:.08,steal:.08,perDef:.08,durability:.05,vertical:.02,strength:.02,rebound:.01,block:.03}},
 SG:{name:'得分后卫',code:'SHOOTING GUARD',desc:'外线得分、持球终结与外防',weights:{three:.15,mid:.13,finish:.13,handle:.10,speed:.09,perDef:.09,steal:.07,pass:.06,durability:.05,vertical:.05,strength:.03,rebound:.02,block:.03}},
 SF:{name:'小前锋',code:'SMALL FORWARD',desc:'持球、侧翼攻防与全面性',weights:{finish:.11,three:.10,mid:.09,handle:.08,pass:.08,speed:.09,vertical:.07,strength:.07,rebound:.07,steal:.06,block:.05,perDef:.08,durability:.05}},
 PF:{name:'大前锋',code:'POWER FORWARD',desc:'力量、终结、篮板、协防与空间',weights:{strength:.13,rebound:.13,block:.11,finish:.11,vertical:.09,perDef:.07,mid:.07,three:.07,durability:.07,speed:.05,pass:.04,handle:.02,steal:.04}},
 C:{name:'中锋',code:'CENTER',desc:'篮板、护框、力量与篮下终结',weights:{rebound:.17,block:.16,strength:.14,finish:.13,vertical:.09,durability:.08,perDef:.06,pass:.04,speed:.04,mid:.03,three:.02,handle:.01,steal:.03}}
};

const TEAMS=[
 ['ATL','Atlanta Hawks','1610612737'],['BOS','Boston Celtics','1610612738'],['BKN','Brooklyn Nets','1610612751'],['CHA','Charlotte Hornets','1610612766'],['CHI','Chicago Bulls','1610612741'],['CLE','Cleveland Cavaliers','1610612739'],['DAL','Dallas Mavericks','1610612742'],['DEN','Denver Nuggets','1610612743'],['DET','Detroit Pistons','1610612765'],['GSW','Golden State Warriors','1610612744'],['HOU','Houston Rockets','1610612745'],['IND','Indiana Pacers','1610612754'],['LAC','LA Clippers','1610612746'],['LAL','Los Angeles Lakers','1610612747'],['MEM','Memphis Grizzlies','1610612763'],['MIA','Miami Heat','1610612748'],['MIL','Milwaukee Bucks','1610612749'],['MIN','Minnesota Timberwolves','1610612750'],['NOP','New Orleans Pelicans','1610612740'],['NYK','New York Knicks','1610612752'],['OKC','Oklahoma City Thunder','1610612760'],['ORL','Orlando Magic','1610612753'],['PHI','Philadelphia 76ers','1610612755'],['PHX','Phoenix Suns','1610612756'],['POR','Portland Trail Blazers','1610612757'],['SAC','Sacramento Kings','1610612758'],['SAS','San Antonio Spurs','1610612759'],['TOR','Toronto Raptors','1610612761'],['UTA','Utah Jazz','1610612762'],['WAS','Washington Wizards','1610612764']
].map(([code,name,id])=>({code,name,id}));
const TEAM_MAP=Object.fromEntries(TEAMS.map(t=>[t.code,t]));

function teamLogo(team){const t=typeof team==='string'?TEAM_MAP[team]:team;return t?`https://cdn.nba.com/logos/nba/${t.id}/primary/L/logo.svg`:''}
function headshot(id){return id?`https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png`:''}

const TEMPLATES={
 sniper:{three:97,mid:91,finish:79,pass:86,handle:94,speed:88,vertical:70,strength:65,rebound:60,steal:79,block:45,perDef:75,durability:86},
 creator:{three:87,mid:92,finish:91,pass:96,handle:96,speed:84,vertical:70,strength:78,rebound:72,steal:73,block:50,perDef:72,durability:88},
 scoringGuard:{three:91,mid:94,finish:91,pass:83,handle:91,speed:89,vertical:84,strength:74,rebound:62,steal:76,block:50,perDef:78,durability:86},
 speedGuard:{three:88,mid:89,finish:91,pass:88,handle:92,speed:96,vertical:84,strength:68,rebound:56,steal:77,block:44,perDef:75,durability:88},
 slashingGuard:{three:80,mid:88,finish:96,pass:88,handle:94,speed:96,vertical:95,strength:78,rebound:62,steal:78,block:56,perDef:76,durability:83},
 twoWayWing:{three:87,mid:88,finish:90,pass:78,handle:84,speed:84,vertical:84,strength:86,rebound:72,steal:91,block:70,perDef:96,durability:88},
 scoringWing:{three:91,mid:96,finish:93,pass:84,handle:89,speed:84,vertical:82,strength:80,rebound:72,steal:77,block:66,perDef:81,durability:86},
 allAround:{three:86,mid:88,finish:91,pass:88,handle:87,speed:85,vertical:84,strength:83,rebound:81,steal:84,block:70,perDef:88,durability:90},
 jumboCreator:{three:84,mid:90,finish:95,pass:96,handle:91,speed:83,vertical:84,strength:94,rebound:84,steal:78,block:67,perDef:82,durability:92},
 playBig:{three:82,mid:94,finish:95,pass:98,handle:84,speed:70,vertical:72,strength:92,rebound:96,steal:74,block:72,perDef:76,durability:94},
 stretchBig:{three:92,mid:91,finish:90,pass:80,handle:72,speed:73,vertical:77,strength:88,rebound:94,steal:66,block:81,perDef:74,durability:86},
 stretchRim:{three:87,mid:88,finish:94,pass:79,handle:75,speed:79,vertical:91,strength:85,rebound:95,steal:72,block:99,perDef:85,durability:85},
 scoringBig:{three:82,mid:95,finish:97,pass:80,handle:78,speed:71,vertical:82,strength:97,rebound:94,steal:67,block:93,perDef:79,durability:78},
 twoWayBig:{three:76,mid:84,finish:94,pass:80,handle:72,speed:79,vertical:91,strength:92,rebound:92,steal:80,block:94,perDef:86,durability:89},
 rimBig:{three:63,mid:75,finish:95,pass:70,handle:58,speed:73,vertical:94,strength:93,rebound:96,steal:67,block:96,perDef:75,durability:90},
 slashingBig:{three:72,mid:80,finish:99,pass:87,handle:86,speed:91,vertical:97,strength:99,rebound:94,steal:83,block:88,perDef:88,durability:91}
};

const REAL_PLAYERS=[
 ['Stephen Curry','201939','PG','GSW','sniper',95,{three:99,handle:97}],
 ['Jimmy Butler III','202710','SF','GSW','twoWayWing',89,{finish:94,mid:91}],
 ['Kristaps Porziņģis','204001','C','GSW','stretchRim',89,{three:90,block:94}],
 ['Luka Dončić','1629029','PG','LAL','creator',97,{pass:98,handle:98,rebound:86}],
 ['Austin Reaves','1630559','SG','LAL','scoringGuard',87,{pass:87}],
 ['Nikola Jokić','203999','C','DEN','playBig',98,{pass:99,rebound:98,finish:97}],
 ['Jamal Murray','1627750','PG','DEN','scoringGuard',92,{mid:96,handle:94}],
 ['Shai Gilgeous-Alexander','1628983','PG','OKC','creator',97,{finish:98,mid:97,steal:86}],
 ['Jalen Williams','1631114','SF','OKC','allAround',93,{finish:94,perDef:91}],
 ['Chet Holmgren','1631096','C','OKC','stretchRim',92,{block:97,three:88}],
 ['Victor Wembanyama','1641705','C','SAS','stretchRim',98,{block:99,vertical:96,three:89}],
 ["De'Aaron Fox",'1628368','PG','SAS','slashingGuard',92,{speed:99,finish:95}],
 ['Anthony Edwards','1630162','SG','MIN','slashingGuard',95,{finish:97,vertical:98,three:88}],
 ['LaMelo Ball','1630163','PG','MIN','creator',91,{pass:95,handle:96,three:90}],
 ['Jayson Tatum','1628369','SF','BOS','allAround',95,{three:91,finish:94,durability:94}],
 ['Jaylen Brown','1627759','SF','BOS','twoWayWing',93,{finish:95,strength:90}],
 ['Jalen Brunson','1628973','PG','NYK','creator',95,{mid:97,handle:97,finish:92}],
 ['Karl-Anthony Towns','1626157','C','NYK','stretchBig',92,{three:94,rebound:96}],
 ['OG Anunoby','1628384','SF','NYK','twoWayWing',89,{perDef:98,steal:93}],
 ['Mikal Bridges','1628969','SF','NYK','twoWayWing',89,{durability:98,three:89}],
 ['LeBron James','2544','SF','PHI','jumboCreator',93,{pass:97,strength:96,finish:96}],
 ['Tyrese Maxey','1630178','PG','PHI','speedGuard',93,{speed:98,three:91}],
 ['Joel Embiid','203954','C','PHI','scoringBig',94,{mid:97,finish:98,strength:98}],
 ['Giannis Antetokounmpo','203507','PF','MIA','slashingBig',97,{finish:99,strength:99,vertical:98}],
 ['Bam Adebayo','1628389','C','MIA','twoWayBig',91,{perDef:91,pass:84}],
 ['Donovan Mitchell','1628378','SG','CLE','scoringGuard',94,{three:93,finish:95,vertical:91}],
 ['Evan Mobley','1630596','PF','CLE','twoWayBig',92,{block:96,perDef:91}],
 ['James Harden','201935','PG','CLE','creator',91,{pass:97,three:90,handle:96}],
 ['Cade Cunningham','1630595','PG','DET','creator',93,{mid:94,pass:95,strength:84}],
 ['Jalen Duren','1631105','C','DET','rimBig',88,{rebound:96,vertical:96}],
 ['Scottie Barnes','1630567','SF','TOR','allAround',91,{pass:90,rebound:87,perDef:91}],
 ['Brandon Ingram','1627742','SF','TOR','scoringWing',89,{mid:95,finish:91}],
 ['Paolo Banchero','1631094','PF','ORL','jumboCreator',93,{strength:92,finish:95}],
 ['Desmond Bane','1630217','SG','ORL','scoringGuard',89,{three:95,strength:84}],
 ['Kevin Durant','201142','SF','HOU','scoringWing',94,{mid:99,three:94,finish:95}],
 ['Alperen Şengün','1630578','C','HOU','playBig',92,{pass:94,finish:95,rebound:94}],
 ['Devin Booker','1626164','SG','PHX','scoringGuard',94,{mid:98,three:93}],
 ['Ja Morant','1629630','PG','MEM','slashingGuard',92,{speed:98,vertical:99,finish:96}],
 ['Jaren Jackson Jr.','1628991','PF','MEM','twoWayBig',91,{block:97,three:86}],
 ['Zion Williamson','1629627','PF','NOP','slashingBig',90,{finish:99,strength:99,vertical:98,durability:68}],
 ['Trae Young','1629027','PG','ATL','creator',92,{pass:98,three:94,handle:97,perDef:61}],
 ['Jalen Johnson','1630552','PF','ATL','allAround',91,{finish:94,rebound:91,pass:89}],
 ['Deni Avdija','1630166','SF','POR','allAround',91,{finish:92,rebound:88,pass:89}],
 ['Pascal Siakam','1627783','PF','IND','allAround',91,{finish:93,mid:91}],
 ['Tyrese Haliburton','1630169','PG','IND','creator',91,{pass:99,three:91}],
 ['Kawhi Leonard','202695','SF','LAC','twoWayWing',93,{mid:98,perDef:97,steal:94}],
 ['Bradley Beal','203078','SG','LAC','scoringGuard',86,{mid:92}],
 ['Domantas Sabonis','1627734','C','SAC','playBig',91,{rebound:97,pass:92}],
 ['Devin Vassell','1630170','SG','SAS','scoringGuard',88,{three:92}],
 ['Franz Wagner','1630532','SF','ORL','allAround',91,{finish:93,pass:87}]
].map(([name,id,pos,team,template,tier,overrides])=>({name,id,pos,team,template,tier,overrides:overrides||{},fictional:false}));

const FUTURE_FIRST=['Marcus','Noah','Jaylen','Darius','Malik','Ethan','Jordan','Cameron','Adrian','Miles','Andre','Kendrick','Isaiah','Julian','Caleb','Tyrese','Jace','Roman','Nolan','Mason','Luka','Niko','Matteo','Milan','Theo','Sandro','Elias','Damien','Xavier','Khalil'];
const FUTURE_LAST=['Reed','Bennett','Crawford','Holloway','Wallace','Brooks','Petrovic','Ricci','Vasilev','Thompson','Mercer','Hayes','Monroe','Coleman','Lawson','Bishop','Maddox','Santos','Novak','Moretti','Foster','Murray','Ellison','Blackwell','Dawson','Keller','Valentine','Grant','Porter','Serrano'];

const SAVE='basketball_legend_v3_nba';
let state={screen:'home',playerName:'',position:null,attrs:{},sources:{},locked:0,rerolls:4,currentCandidates:[],ovr:0,team:null,pick:null,age:19,season:1,games:0,wins:0,losses:0,seasonStats:{pts:0,reb:0,ast:0,stl:0,blk:0},history:[],awards:[],growth:62,health:92,morale:78,legacy:0,potential:88,contract:null,contractOffers:[],futureLeague:[]};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem(SAVE,JSON.stringify(state))}
function load(){try{const x=JSON.parse(localStorage.getItem(SAVE));if(x){state=x;ensureState()}}catch(e){}}
function show(id){$$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');state.screen=id;save();window.scrollTo({top:0,behavior:'smooth'})}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1800)}
function rnd(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function clamp(x,a,b){return Math.max(a,Math.min(b,x))}
function money(v){return `$${Number(v||0).toFixed(1)}M`}
function currentLeagueYear(){return 2026+(state.season||1)-1}
function seasonLabel(){const y=currentLeagueYear();return `${y}-${String((y+1)%100).padStart(2,'0')}`}
function randomFutureName(){return `${FUTURE_FIRST[rnd(0,FUTURE_FIRST.length-1)]} ${FUTURE_LAST[rnd(0,FUTURE_LAST.length-1)]}`}
function uniqueFutureName(){let name=randomFutureName(),n=0;const used=new Set((state.futureLeague||[]).map(p=>p.name));while(used.has(name)&&n++<30)name=randomFutureName();return name}
function ensureFutureProspects(year=currentLeagueYear()){
  state.futureLeague=state.futureLeague||[];
  for(let y=2027;y<=year;y++){
    if(state.futureLeague.some(p=>p.entryYear===y))continue;
    const count=6+rnd(0,3);
    for(let i=0;i<count;i++){
      const pos=Object.keys(POS)[rnd(0,4)];
      const template=pos==='PG'?['creator','speedGuard','slashingGuard'][rnd(0,2)]:pos==='SG'?['scoringGuard','twoWayWing'][rnd(0,1)]:pos==='SF'?['allAround','scoringWing','twoWayWing'][rnd(0,2)]:pos==='PF'?['allAround','slashingBig','twoWayBig'][rnd(0,2)]:['rimBig','stretchRim','playBig'][rnd(0,2)];
      state.futureLeague.push({name:uniqueFutureName(),id:null,pos,team:TEAMS[rnd(0,TEAMS.length-1)].code,template,tier:rnd(80,94),overrides:{},fictional:true,entryYear:y});
    }
  }
}
function leaguePlayers(){ensureFutureProspects();return [...REAL_PLAYERS,...state.futureLeague.filter(p=>p.entryYear<=currentLeagueYear())]}
function ratingsForPlayer(p){const base={...TEMPLATES[p.template]};const delta=(p.tier-90)*.45;for(const k in base)base[k]=clamp(Math.round(base[k]+delta),45,99);for(const [k,v] of Object.entries(p.overrides||{}))base[k]=clamp(v,45,99);return base}
function playerPhoto(p){return p.fictional?'':headshot(p.id)}
function teamOf(code){return TEAM_MAP[code]||TEAMS[0]}

function rookieBaseSalary(pick){if(pick===1)return 13.6;if(pick<=3)return 11.8;if(pick<=5)return 9.7;if(pick<=10)return 7.2;if(pick<=20)return 4.5;return 2.8}
function buildContract(team,type,startSalary,length,year=1){const annual=[];for(let i=0;i<length;i++)annual.push(Number((startSalary*Math.pow(1.05,i)).toFixed(1)));return{team,type,length,year,annual,total:Number(annual.reduce((a,b)=>a+b,0).toFixed(1))}}
function makeRookieContract(){const base=rookieBaseSalary(state.pick||30);return buildContract(state.team?.name||'Unknown','新秀合同',base,4,1)}
function currentSalary(){if(!state.contract)return 0;return state.contract.annual[Math.max(0,Math.min(state.contract.year-1,state.contract.annual.length-1))]||0}
function ensureState(){state.history=state.history||[];state.awards=state.awards||[];state.lastGames=state.lastGames||[];state.futureLeague=state.futureLeague||[];state.seasonStats=state.seasonStats||{pts:0,reb:0,ast:0,stl:0,blk:0};if(state.team&&Array.isArray(state.team)){const legacy=TEAMS.find(t=>t.name===state.team[0]);state.team=legacy||TEAMS[0]}if(state.team&&!state.contract){if((state.season||1)<=4){state.contract=makeRookieContract();state.contract.year=Math.max(1,Math.min(state.season||1,4))}else{state.contract=buildContract(state.team.name,'老将合同',Math.max(8,(state.ovr-70)*1.15),3,1)}}if(!state.playerName)state.playerName=randomFutureName()}
function salaryMarketValue(){const last=state.history[state.history.length-1];const pts=last?.avg?.pts||baseAverages().pts;const awardBoost=(last?.awards||[]).reduce((n,a)=>n+(a==='MVP'?7:a==='总冠军'?4:a==='FMVP'?5:a.includes('最佳阵容')?3:a==='全明星'?1.5:0),0);const agePenalty=state.age>=33?(state.age-32)*2.0:0;return clamp(2.5+(state.ovr-68)*1.28+pts*.28+state.legacy*.08+awardBoost-agePenalty,2.5,62)}
function generateContractOffers(){const market=salaryMarketValue();const current=state.team.name;const pool=TEAMS.filter(t=>t.name!==current).sort(()=>Math.random()-.5);const teams=[state.team,pool[0],pool[1]];return teams.map((t,i)=>{const maxYears=state.age>=34?2:state.age>=31?3:5;const years=i===0?clamp(rnd(2,maxYears),1,5):rnd(1,maxYears);const mult=i===0?(0.94+Math.random()*.08):(0.88+Math.random()*.20);const salary=clamp(Number((market*mult).toFixed(1)),2.2,65);return{team:t,type:state.age<=28?'顶薪竞争合同':'自由球员合同',length:years,year:1,annual:Array.from({length:years},(_,y)=>Number((salary*Math.pow(1.05,y)).toFixed(1)))} }).map(o=>({...o,total:Number(o.annual.reduce((a,b)=>a+b,0).toFixed(1))}))}
function grade(v){return v>=95?'超级巨星':v>=90?'联盟巨星':v>=85?'全明星':v>=80?'优质首发':v>=74?'首发级':v>=68?'轮换级':'潜力新秀'}
function calcOvr(attrs=state.attrs){if(!state.position)return 0;let sum=0,w=0;const weights=POS[state.position].weights;for(const [k] of ATTRS){if(attrs[k]!=null){sum+=attrs[k]*(weights[k]||.05);w+=(weights[k]||.05)}}return w?Math.round(sum/w):0}

function createPositionCards(){const g=$('#positionGrid');g.innerHTML='';Object.entries(POS).forEach(([k,p])=>{const b=document.createElement('button');b.className='pos-card';b.innerHTML=`<div class="pos-index">${k}</div><div class="pos-code">${p.code}</div><div class="pos-name">${p.name}</div><div class="pos-desc">${p.desc}</div>`;b.onclick=()=>{$$('.pos-card').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.position=k;$('#confirmPosition').disabled=false;save()};g.appendChild(b)})}
function initBuild(){const n=$('#playerNameInput').value.trim();state.playerName=n||randomFutureName();state.attrs={};state.sources={};state.locked=0;state.rerolls=4;state.currentCandidates=[];state.ovr=0;renderBuild();newRound();show('build')}
function generatePlayer(attrKey){const candidates=REAL_PLAYERS;const p=candidates[rnd(0,candidates.length-1)];const attrs=ratingsForPlayer(p);return{...p,attrs,value:attrs[attrKey],raw:attrs[attrKey]}}
function currentAttr(){return ATTRS[state.locked]}
function newRound(){if(state.locked>=ATTRS.length)return reveal();const [key]=currentAttr();let picked=[];let guard=0;while(picked.length<3&&guard++<30){const p=generatePlayer(key);if(!picked.some(x=>x.name===p.name))picked.push(p)}state.currentCandidates=picked;renderCandidates();save()}
function renderBuild(){if(!state.position)return;$('#buildPos').textContent=`${state.playerName} · ${state.position}`;$('#lockedText').textContent=`${state.locked} / ${ATTRS.length}`;$('#buildProgress').style.width=`${state.locked/ATTRS.length*100}%`;const o=calcOvr();$('#liveOvr').textContent=state.locked?o:'--';$('#ovrRing').style.setProperty('--ovr',state.locked?o:0);$('#rerolls').textContent=state.rerolls;$('#rerollBtn').disabled=state.rerolls<=0;const list=$('#attrList');list.innerHTML='';ATTRS.forEach(([k,n],i)=>{const v=state.attrs[k];const row=document.createElement('div');row.className='attr-row '+(v==null?'pending':'');row.innerHTML=`<div><div class="name">${String(i+1).padStart(2,'0')} · ${n}</div><div class="source">${v!=null?state.sources[k].name+' · '+state.sources[k].pos:'等待锁定'}</div></div><strong>${v??'--'}</strong>`;list.appendChild(row)});if(state.locked<ATTRS.length){const [,n]=currentAttr();$('#attrTitle').textContent=`本轮目标：${n}`}}
function candidatePortrait(p){const photo=playerPhoto(p);if(photo)return `<div class="photo-wrap"><img src="${photo}" alt="${p.name}" loading="eager" onerror="this.parentElement.classList.add('photo-failed');this.remove()"><div class="photo-fallback">${p.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div></div>`;return `<div class="photo-wrap fictional"><div class="photo-fallback">${p.name.split(' ').map(x=>x[0]).join('').slice(0,2)}<small>PROSPECT</small></div></div>`}
function renderCandidates(){const [key,name]=currentAttr();$('#attrTitle').textContent=`本轮目标：${name}`;const g=$('#candidateGrid');g.innerHTML='';const max=Math.max(...state.currentCandidates.map(x=>x.value));state.currentCandidates.forEach((p,idx)=>{const c=document.createElement('article');c.className='candidate';const related=ATTRS.map(([k,n])=>[k,n,p.attrs[k]]).sort((a,b)=>b[2]-a[2]).slice(0,4);const team=teamOf(p.team);c.innerHTML=`${candidatePortrait(p)}<div class="candidate-overlay"><div class="player-meta"><span>${p.pos}</span><span>${team.code}</span></div><h4>${p.name}</h4><div class="source-team"><img src="${teamLogo(team)}" alt="">${team.name}</div><div class="cand-stats">${related.map(x=>`<div class="cand-stat"><span>${x[1]}</span><b>${x[2]}</b></div>`).join('')}</div><button class="pick ${p.value===max?'best':''}"><span>锁定 ${name}</span><strong>${p.value}</strong></button></div>`;c.querySelector('.pick').onclick=()=>lockCandidate(idx,key);g.appendChild(c)})}
function lockCandidate(idx,key){const p=state.currentCandidates[idx];state.attrs[key]=p.value;state.sources[key]={name:p.name,pos:p.pos,team:p.team,id:p.id};state.locked++;state.ovr=calcOvr();renderBuild();toast(`${ATTRS.find(x=>x[0]===key)[1]}：${p.name} · ${p.value}`);setTimeout(newRound,180)}
function reveal(){state.ovr=calcOvr();state.potential=clamp(state.ovr+rnd(4,12),80,99);renderReveal();show('reveal')}
function archetype(){const a=state.attrs,p=state.position;const top=[['三分射手',a.three],['持球核心',a.pass+a.handle-80],['攻框机器',a.finish+a.speed-80],['外线大闸',a.perDef+a.steal-80],['护框核心',a.block+a.rebound-80],['全能锋线',(a.finish+a.three+a.perDef+a.rebound)/2]];top.sort((x,y)=>y[1]-x[1]);return `${POS[p].name} · ${top[0][0]}`}
function renderReveal(){const o=state.ovr;$('#createdName').textContent=state.playerName;$('#finalOvr').textContent=o;$('#finalGrade').textContent=grade(o).toUpperCase();$('#archetype').textContent=archetype();const best=ATTRS.map(([k,n])=>[n,state.attrs[k]]).sort((a,b)=>b[1]-a[1]).slice(0,7);$('#attributeCloud').innerHTML=best.map(x=>`<span class="pill">${x[0]} <b>${x[1]}</b></span>`).join('');$('#revealSummary').innerHTML=`<div class="summary-box"><b>${state.position}</b><span>位置</span></div><div class="summary-box"><b>${state.potential}</b><span>潜力</span></div><div class="summary-box"><b>${Math.round((state.attrs.durability||75)/10)}</b><span>耐久等级</span></div><div class="summary-box"><b>${state.rerolls}</b><span>剩余重抽</span></div>`}
function draft(){let base=state.ovr>=93?1:state.ovr>=89?rnd(1,4):state.ovr>=85?rnd(2,9):state.ovr>=80?rnd(6,18):rnd(12,30);state.pick=base;state.team=TEAMS[(base*7+rnd(0,TEAMS.length-1))%TEAMS.length];renderDraft();show('draft')}
function renderDraft(){const team=state.team;$('#teamBadge').innerHTML=`<img src="${teamLogo(team)}" alt="${team.name}">`;$('#draftPick').innerHTML=`#${state.pick} <span>OVERALL PICK</span>`;$('#draftTeam').textContent=team.name;$('#draftReason').textContent=state.pick<=3?`${state.playerName} 以 ${state.ovr} OVR 和 ${state.potential} 潜力进入联盟，球队直接把你视为核心资产。`:`球队看重你的 ${archetype().split('·')[1]} 模板与成长空间。`;const fits=[['位置需求',rnd(72,98)],['战术契合',rnd(70,96)],['即战能力',clamp(state.ovr,60,99)],['长期潜力',state.potential]];const rookie=makeRookieContract();$('#fitMeters').innerHTML=fits.map(x=>`<div class="meter"><div class="meter-head"><span>${x[0]}</span><b>${x[1]}</b></div><div class="meter-line"><i style="width:${x[1]}%"></i></div></div>`).join('')+`<div class="contract-card" style="margin-top:16px"><div class="contract-kicker">ROOKIE CONTRACT</div><div class="contract-main"><b>${money(rookie.annual[0])}</b><span>新秀年第1年年薪<br>${rookie.length}年总额 ${money(rookie.total)}</span></div><div class="contract-note">合同逐年执行，到期后进入自由市场，报价由表现、年龄和荣誉决定。</div></div>`}
