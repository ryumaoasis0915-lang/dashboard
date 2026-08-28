
// ===== 実データ：職業中分類（求職, 求人, 倍率）＝岡山労働局 令和8年5月・常用・原数値 =====
const fine=[
 ["管理的職業従事者","管理的職業",85,97,1.14],
 ["製造技術者（開発）","専門的・技術的",98,323,3.30],
 ["製造技術者（開発を除く）","専門的・技術的",365,177,0.48],
 ["建築・土木・測量技術者","専門的・技術的",190,912,4.80],
 ["情報処理・通信技術者","専門的・技術的",387,294,0.76],
 ["その他の技術者","専門的・技術的",25,39,1.56],
 ["医師，歯科医師，獣医師，薬剤師","専門的・技術的",85,313,3.68],
 ["保健師，助産師，看護師","専門的・技術的",944,1934,2.05],
 ["医療技術者","専門的・技術的",291,787,2.70],
 ["その他の保健医療従事者","専門的・技術的",198,243,1.23],
 ["社会福祉専門職業従事者","専門的・技術的",930,1935,2.08],
 ["美術家，デザイナー，写真家，映像撮影者","専門的・技術的",268,72,0.27],
 ["その他の専門的職業従事者","専門的・技術的",596,382,0.64],
 ["一般事務従事者","事務",6874,1865,0.27],
 ["会計事務従事者","事務",347,256,0.74],
 ["生産関連事務従事者","事務",216,298,1.38],
 ["営業・販売事務従事者","事務",239,270,1.13],
 ["外勤事務従事者","事務",4,8,2.00],
 ["運輸・郵便事務従事者","事務",46,109,2.37],
 ["事務用機器操作員","事務",255,53,0.21],
 ["商品販売従事者","販売",1356,2556,1.88],
 ["販売類似職業従事者","販売",27,81,3.00],
 ["営業職業従事者","販売",602,1195,1.99],
 ["家庭生活支援サービス職業従事者","サービス",3,28,9.33],
 ["介護サービス職業従事者","サービス",1027,3637,3.54],
 ["保健医療サービス職業従事者","サービス",163,374,2.29],
 ["生活衛生サービス職業従事者","サービス",183,372,2.03],
 ["飲食物調理従事者","サービス",921,1515,1.64],
 ["接客・給仕職業従事者","サービス",513,860,1.68],
 ["居住施設・ビル等管理人","サービス",164,55,0.34],
 ["その他のサービス職業従事者","サービス",303,448,1.48],
 ["保安職業従事者","保安",266,633,2.38],
 ["農林漁業従事者","農林漁業",325,286,0.88],
 ["生産設備制御・監視従事者（金属製品）","生産工程",204,103,0.50],
 ["生産設備制御・監視従事者（金属製品を除く）","生産工程",192,183,0.95],
 ["機械組立設備制御・監視従事者","生産工程",58,54,0.93],
 ["製品製造・加工処理従事者（金属製品）","生産工程",381,950,2.49],
 ["製品製造・加工処理従事者（金属製品を除く）","生産工程",878,1282,1.46],
 ["機械組立従事者","生産工程",267,319,1.19],
 ["機械整備・修理従事者","生産工程",241,1015,4.21],
 ["製品検査従事者（金属製品）","生産工程",46,84,1.83],
 ["製品検査従事者（金属製品を除く）","生産工程",77,154,2.00],
 ["機械検査従事者","生産工程",29,75,2.59],
 ["生産関連・生産類似作業従事者","生産工程",285,249,0.87],
 ["鉄道運転従事者","輸送・機械運転",5,1,0.20],
 ["自動車運転従事者","輸送・機械運転",886,2261,2.55],
 ["船舶・航空機運転従事者","輸送・機械運転",8,0,0.00],
 ["その他の輸送従事者","輸送・機械運転",187,133,0.71],
 ["定置・建設機械運転従事者","輸送・機械運転",138,237,1.72],
 ["建設躯体工事従事者","建設・採掘",17,282,16.59],
 ["建設従事者（建設躯体工事従事者を除く）","建設・採掘",184,590,3.21],
 ["電気工事従事者","建設・採掘",134,391,2.92],
 ["土木作業従事者","建設・採掘",133,841,6.32],
 ["採掘従事者","建設・採掘",2,13,6.50],
 ["運搬・清掃・包装等従事者","運搬・清掃・包装",7354,2741,0.37],
 ["分類不能の職業","分類不能",2225,0,0.00],
].map(a=>({name:a[0],major:a[1],kyushoku:a[2],kyujin:a[3],ratio:a[4]}));

const trend=[{m:"2025-07",ok:1.33},{m:"2025-08",ok:1.33},{m:"2025-09",ok:1.34},{m:"2025-10",ok:1.31},{m:"2025-11",ok:1.35},{m:"2025-12",ok:1.45},{m:"2026-01",ok:1.45},{m:"2026-02",ok:1.41},{m:"2026-03",ok:1.32},{m:"2026-04",ok:1.22},{m:"2026-05",ok:1.19},{m:"2026-06",ok:1.23}];
const hw=[{name:"岡山",ratio:1.32,conf:true},{name:"倉敷中央",ratio:1.12,conf:true},{name:"津山",ratio:1.20,conf:false},{name:"笠岡",ratio:1.45,conf:false},{name:"高梁",ratio:1.29,conf:false},{name:"和気",ratio:0.98,conf:false},{name:"玉野",ratio:0.83,conf:false}];

// ===== ダミー：大学 × 職種 県内就職者数 ＋ 県内定着率 =====
const occCols=["専門的・技術的","事務","販売","サービス","生産工程","建設・採掘","その他"];
const uni=[
 {name:"岡山大学",ret:33.5,byOcc:[180,210,90,70,40,20,60]},
 {name:"岡山県立大学",ret:52.0,byOcc:[150,90,50,60,70,25,30]},
 {name:"岡山理科大学",ret:45.8,byOcc:[130,110,80,70,160,90,50]},
 {name:"ノートルダム清心女子大学",ret:41.2,byOcc:[90,160,70,120,10,5,40]},
 {name:"岡山商科大学",ret:58.5,byOcc:[50,200,180,90,40,30,60]},
 {name:"中国学園大学",ret:66.0,byOcc:[70,120,60,90,10,5,30]},
 {name:"環太平洋大学",ret:49.0,byOcc:[60,100,80,150,30,25,70]},
 {name:"津山工業高専",ret:38.0,byOcc:[120,20,10,10,180,70,15]},
];

// ===== 実データ：業種別スキル供給プロファイル（job tag 日本版O-NET・0-100正規化） =====
const jobtagSupply={
 "介護・福祉":{occ:"施設介護員",skills:[["傾聴力",88],["他者の反応の理解",71],["対人援助サービス",71],["説明力",66],["文章力",64],["読解力",62],["指導",61],["説得",60]]},
 "医療・看護":{occ:"看護師",skills:[["傾聴力",97],["他者の反応の理解",82],["説明力",80],["文章力",76],["対人援助サービス",75],["読解力",73],["指導",73],["他者との調整",72]]},
 "情報通信":{occ:"システムエンジニア（受託開発）",skills:[["読解力",87],["プログラミング",87],["傾聴力",85],["文章力",84],["説明力",82],["要件分析（仕様作成）",82],["指導",74],["他者との調整",73]]},
 "建設・土木":{occ:"建設・土木作業員",skills:[["説明力",54],["道具、機器、設備の選択",54],["読解力",51],["傾聴力",51],["他者との調整",48],["指導",48],["故障等の原因特定",45],["他者の反応の理解",44]]},
 "製造・生産工程":{occ:"生産用機械組立",skills:[["傾聴力",68],["読解力",64],["道具、機器、設備の選択",60],["クオリティチェック",59],["説明力",58],["文章力",57],["指導",57],["他者との調整",55]]},
 "事務":{occ:"一般事務",skills:[["傾聴力",63],["文章力",61],["説明力",59],["読解力",58],["指導",41],["他者との調整",40],["時間管理",39],["他者の反応の理解",38]]},
};
const actionMap={
 "建設躯体工事従事者":{cur:"施工管理・BIM/CIM 連携科目",skill:"躯体施工・BIM",ev:"建設×理科大/高専 逆求人"},
 "土木作業従事者":{cur:"土木DX・測量科目",skill:"測量・ドローン・施工",ev:"土木×高専 現場見学採用会"},
 "介護サービス職業従事者":{cur:"介護×AX 文理横断カリキュラム",skill:"見守りセンサー分析・記録AI",ev:"介護×清心/県立大 合同PBL"},
 "医師，歯科医師，獣医師，薬剤師":{cur:"医療×DX 連携科目",skill:"デジタルヘルス",ev:"医療職 地域定着フォーラム"},
 "自動車運転従事者":{cur:"物流DX・安全運転科目",skill:"配送最適化",ev:"運輸業 業界研究会"},
 "機械整備・修理従事者":{cur:"保全・ロボティクス科目",skill:"機械保全・IoT",ev:"製造×高専 採用見学会"},
 "建築・土木・測量技術者":{cur:"BIM/CIM 実践PBL",skill:"BIM・構造設計",ev:"建設技術職×理科大 スカウト"},
 "医療技術者":{cur:"医療技術×DX 科目",skill:"検査DX・データ分析",ev:"医療技術職 説明会"},
};
const ratioColor=r=>r>=1?'rgba(255,107,111,.85)':'rgba(79,157,255,.85)';
const majors=[...new Set(fine.map(f=>f.major))];
const mf=document.getElementById('majorFilter');majors.forEach(m=>mf.insertAdjacentHTML('beforeend',`<option>${m}</option>`));
const skillInd=document.getElementById('skillIndustry');Object.keys(jobtagSupply).forEach(s=>skillInd.insertAdjacentHTML('beforeend',`<option>${s}</option>`));
const uniSel=document.getElementById('uniSel');uni.forEach(u=>uniSel.insertAdjacentHTML('beforeend',`<option>${u.name}</option>`));
const searchBox=document.getElementById('searchBox');
const searchField=document.getElementById('searchField');
const searchClear=document.getElementById('searchClear');

// KPI + インサイト
(function(){const valid=fine.filter(f=>f.kyujin>0);const top=valid.reduce((a,b)=>b.ratio>a.ratio?b:a);const low=valid.reduce((a,b)=>b.ratio<a.ratio?b:a);const latest=trend[trend.length-1];const first=trend[0];
 const cut=s=>s.length>8?s.slice(0,8)+'…':s;
 const delta=(latest.ok-first.ok);
 const k=[
  {l:"岡山県 有効求人倍率(2026年6月)",v:latest.ok.toFixed(2),d:(delta>=0?'+':'')+delta.toFixed(2)+'（12か月前比）',cls:delta>=0?'up':'down'},
  {l:"最も不足の職種(中分類)",v:cut(top.name),d:top.ratio+"倍"},
  {l:"最も余剰の職種(中分類)",v:cut(low.name),d:low.ratio+"倍"},
  {l:"大卒 県内就職率",v:"40.8%",d:"目標 +5pt(R10)"},
  {l:"公表 職種数(中分類)",v:fine.length+"職種",d:"すべて実データ"}];
 document.getElementById('kpis').innerHTML=k.map(x=>`<div class="kpi"><div class="l">${x.l}</div><div class="v">${x.v}</div><div class="d${x.cls?(' '+x.cls):''}">${x.d}</div></div>`).join('');

 const dir=delta>=0?'上昇':'低下';
 const dirColor=delta>=0?'var(--short)':'var(--over)';
 document.getElementById('insightBox').innerHTML=`💡 岡山県の有効求人倍率は直近12か月で <b>${first.ok.toFixed(2)}倍 → ${latest.ok.toFixed(2)}倍</b>（<span style="color:${dirColor};font-weight:700">${dir}傾向</span>）。中分類では「${top.name}」が${top.ratio}倍と最も逼迫、「${low.name}」は${low.ratio}倍と余剰。① で内訳、⑤ で打ち手候補を確認できます。`;

 const stats=[
  {l:"倍率1.0以上（不足）",v:valid.filter(f=>f.ratio>=1&&f.name!=='分類不能の職業').length+' 職種'},
  {l:"倍率1.0未満（余剰）",v:valid.filter(f=>f.ratio<1).length+' 職種'},
  {l:"大分類の数",v:majors.length+' 分類'},
  {l:"HW（要確認含む）",v:hw.length+' 拠点'},
 ];
 document.getElementById('sideStats').innerHTML=stats.map(s=>`<div class="sidebar-stat"><span>${s.l}</span><b>${s.v}</b></div>`).join('');
})();

// 推移チャート（e-Stat 実データ・これまで未活用だった trend を可視化）
new Chart(document.getElementById('trendChart'),{type:'line',
 data:{labels:trend.map(t=>t.m.slice(2)),datasets:[{label:'有効求人倍率',data:trend.map(t=>t.ok),borderColor:'#3ea6ff',backgroundColor:'rgba(62,166,255,.15)',fill:true,tension:.35,pointRadius:3,pointBackgroundColor:'#3ea6ff'}]},
 options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw+' 倍'}}},
  scales:{x:{ticks:{color:'#8fa3b5',font:{size:11}},grid:{display:false}},y:{ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'},suggestedMin:1.0}}}});

// ① 中分類バー
let indChart;
function renderInd(){const mv=mf.value,sv=document.getElementById('sortSel').value,q=(searchBox.value||'').trim();
 let data=fine.filter(f=>f.name!=="分類不能の職業"&&f.kyujin>0);
 if(mv!=='all')data=data.filter(f=>f.major===mv);
 if(q)data=data.filter(f=>f.name.includes(q)||f.major.includes(q));
 data=data.slice().sort((a,b)=>sv==='desc'?b.ratio-a.ratio:a.ratio-b.ratio);
 document.getElementById('barCount').textContent=`（${data.length}職種）`;
 const wrap=document.getElementById('indBarWrap');
 const emptyEl=document.getElementById('indEmpty');
 if(data.length===0){wrap.classList.add('hide');emptyEl.classList.remove('hide');return;}
 wrap.classList.remove('hide');emptyEl.classList.add('hide');
 wrap.style.height=(data.length*24+70)+'px';wrap.innerHTML='<canvas id="indBar"></canvas>';
 indChart=new Chart(document.getElementById('indBar'),{type:'bar',data:{labels:data.map(d=>d.name),datasets:[{label:'有効求人倍率',data:data.map(d=>d.ratio),backgroundColor:data.map(d=>ratioColor(d.ratio))}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw+' 倍（求人'+data[c.dataIndex].kyujin.toLocaleString()+'／求職'+data[c.dataIndex].kyushoku.toLocaleString()+'）'}}},
   scales:{x:{grid:{color:'#1e2c39'},ticks:{color:'#8fa3b5'},title:{display:true,text:'有効求人倍率（1.0＝均衡）',color:'#8fa3b5'}},y:{grid:{display:false},ticks:{color:'#eef3f8',font:{size:11}}}},
   onClick:(e,el)=>{if(el.length){const o=data[el[0].index];const g=o.kyujin-o.kyushoku;const st=o.ratio>=1?'<span class="badge b-short">人手不足</span>':'<span class="badge b-over">余剰</span>';const d=document.getElementById('indDrill');d.classList.remove('hide');d.innerHTML=`<h3 style="margin:0 0 8px">${o.name} <span style="font-size:12px;color:#8fa3b5">［${o.major}］</span> ${st}</h3><table style="max-width:520px"><tr><td>有効求人倍率</td><td><b>${o.ratio} 倍</b></td></tr><tr><td>有効求人</td><td>${o.kyujin.toLocaleString()} 人</td></tr><tr><td>有効求職</td><td>${o.kyushoku.toLocaleString()} 人</td></tr><tr><td>需給ギャップ(求人−求職)</td><td style="color:${g>=0?'#ff6b6f':'#4f9dff'};font-weight:700">${g>=0?'+':''}${g.toLocaleString()} 人</td></tr></table>`;}}}});}
function renderTop(){const valid=fine.filter(f=>f.name!=="分類不能の職業"&&f.kyujin>0);const short=valid.slice().sort((a,b)=>b.ratio-a.ratio).slice(0,5);const over=valid.slice().sort((a,b)=>a.ratio-b.ratio).slice(0,5);
 const row=o=>`<div class="li"><span>${o.name}<span style="color:#8fa3b5;font-size:11px">［${o.major}］</span></span><b style="color:${o.ratio>=1?'#ff6b6f':'#4f9dff'}">${o.ratio}</b></div>`;
 document.getElementById('topShort').innerHTML=short.map(row).join('');document.getElementById('topOver').innerHTML=over.map(row).join('');}
renderTop();renderInd();
mf.addEventListener('change',renderInd);
document.getElementById('sortSel').addEventListener('change',renderInd);
searchBox.addEventListener('input',()=>{searchField.classList.toggle('has-val',!!searchBox.value);renderInd();});
searchClear.addEventListener('click',()=>{searchBox.value='';searchField.classList.remove('has-val');renderInd();searchBox.focus();});

// ② 大学別（ダミー）
(function(){let max=0;uni.forEach(u=>u.byOcc.forEach(v=>max=Math.max(max,v)));
 let h='<table class="heat"><thead><tr><th style="background:var(--panel)">大学＼職種</th>'+occCols.map(c=>`<th style="background:var(--panel)">${c}</th>`).join('')+'<th style="background:var(--panel)">計</th></tr></thead><tbody>';
 uni.forEach(u=>{const tot=u.byOcc.reduce((a,b)=>a+b,0);h+=`<tr><td style="text-align:left;color:#eef3f8;background:var(--panel2);border:1px solid var(--bg)">${u.name}</td>`;u.byOcc.forEach(v=>{const al=0.12+0.85*(v/max);h+=`<td style="background:rgba(51,200,139,${al.toFixed(2)})">${v}</td>`;});h+=`<td style="background:var(--panel2);color:#eef3f8">${tot}</td></tr>`;});
 document.getElementById('heatmap').innerHTML=h+'</tbody></table>';})();
new Chart(document.getElementById('uniRetain'),{type:'bar',data:{labels:uni.map(u=>u.name),datasets:[{label:'県内定着率(%)',data:uni.map(u=>u.ret),backgroundColor:uni.map(u=>u.ret>=40.8?'rgba(51,200,139,.8)':'rgba(255,107,111,.8)')}]},
 options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw+'%（県平均40.8%）'}}},scales:{x:{ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'}},y:{ticks:{color:'#eef3f8',font:{size:11}}}}}});
let uniChart;
function renderUni(name){const u=uni.find(x=>x.name===name);if(uniChart)uniChart.destroy();
 uniChart=new Chart(document.getElementById('uniBreak'),{type:'bar',data:{labels:occCols,datasets:[{label:name+' 県内就職(人)',data:u.byOcc,backgroundColor:'rgba(62,166,255,.8)'}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'}},y:{ticks:{color:'#eef3f8',font:{size:11}}}}}});}
renderUni(uni[0].name);uniSel.value=uni[0].name;uniSel.addEventListener('change',e=>renderUni(e.target.value));

// ③ HW
new Chart(document.getElementById('hwBar'),{type:'bar',data:{labels:hw.map(h=>h.name+(h.conf?'':'*')),datasets:[{label:'有効求人倍率',data:hw.map(h=>h.ratio),backgroundColor:hw.map(h=>h.conf?'rgba(51,200,139,.85)':ratioColor(h.ratio))}]},
 options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw+' 倍'+(hw[c.dataIndex].conf?'（検算一致）':'（要確認）')}}},scales:{x:{ticks:{color:'#eef3f8'}},y:{ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'},suggestedMin:0.6,suggestedMax:1.6}}}});

// ④ スキル供給（job tag実データ）
let skillChart;
function renderSkill(cat){const d=jobtagSupply[cat];if(skillChart)skillChart.destroy();
 document.getElementById('skillOcc').textContent='代表職業：'+d.occ+'（出典：job tag 日本版O-NET／JILPT・厚労省。値は0-100正規化）';
 skillChart=new Chart(document.getElementById('skillBar'),{type:'bar',
  data:{labels:d.skills.map(s=>s[0]),datasets:[{label:'スキル供給レベル(0-100)',data:d.skills.map(s=>s[1]),backgroundColor:'rgba(79,157,255,.8)'}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>'供給レベル '+c.raw+'（需要はアンケートで取得後に重ね合わせ）'}}},
   scales:{x:{min:0,max:100,ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'},title:{display:true,text:'スキル供給レベル（0-100）',color:'#8fa3b5'}},y:{ticks:{color:'#eef3f8',font:{size:11}}}}}});}
renderSkill("介護・福祉");skillInd.value="介護・福祉";skillInd.addEventListener('change',e=>renderSkill(e.target.value));

// ⑤ 打ち手
(function(){const top=fine.filter(f=>f.kyujin>0).sort((a,b)=>b.ratio-a.ratio).slice(0,8);
 document.getElementById('actCards').innerHTML=top.map(o=>`<div class="icard" data-occ="${o.name}"><div class="name" style="font-size:12px">${o.name}</div><div class="rate" style="color:${o.ratio>=3?'#ff6b6f':'#ffb020'}">${o.ratio}<span style="font-size:12px;color:#8fa3b5">倍</span></div><div style="font-size:11px;color:#8fa3b5">求人${o.kyujin.toLocaleString()}／求職${o.kyushoku.toLocaleString()}</div></div>`).join('');
 document.querySelectorAll('.icard').forEach(c=>c.addEventListener('click',()=>{
  document.querySelectorAll('.icard').forEach(x=>x.classList.remove('selected'));c.classList.add('selected');
  const a=actionMap[c.dataset.occ]||{cur:"（この職種の打ち手は設計中）",skill:"—",ev:"—"};const d=document.getElementById('actDrill');d.classList.remove('hide');d.innerHTML=`<h3 style="margin:0 0 4px">${c.dataset.occ} への推奨アクション</h3><div class="actions"><div class="act"><h4>🎓 カリキュラム</h4><p>${a.cur}</p></div><div class="act"><h4>🛠 スキル</h4><p>${a.skill}</p></div><div class="act"><h4>📅 イベント</h4><p>${a.ev}</p></div></div>`;}));})();

// ⑥ 戦略17分野（国の重点投資分野 × 関連職種の実求人倍率プロキシ）
const strategy17=[
 {field:"AI・半導体",rel:"○",occ:"製造技術者（開発）",ratio:3.30,note:"半導体設計・製造。水島の製造基盤"},
 {field:"デジタル・サイバーセキュリティ",rel:"◎",occ:"情報処理・通信技術者",ratio:0.76,note:"県のサイバーセキュリティWG"},
 {field:"情報通信",rel:"○",occ:"情報処理・通信技術者",ratio:0.76,note:"通信基盤・6G等"},
 {field:"量子",rel:"△",occ:"その他の技術者",ratio:1.56,note:"研究開発段階。大学基礎研究"},
 {field:"防衛産業",rel:"△",occ:"製品製造・加工処理従事者（金属製品）",ratio:2.49,note:"デュアルユース製造"},
 {field:"航空・宇宙",rel:"△",occ:"製造技術者（開発）",ratio:3.30,note:"部品・素材のSC"},
 {field:"海洋",rel:"△",occ:"その他の技術者",ratio:1.56,note:"海洋ドローン等"},
 {field:"造船",rel:"○",occ:"機械整備・修理従事者",ratio:4.21,note:"玉野等の造船・次世代船舶"},
 {field:"マテリアル（重要鉱物・部素材）",rel:"◎",occ:"製造技術者（開発）",ratio:3.30,note:"水島の素材・化学"},
 {field:"創薬・先端医療",rel:"◎",occ:"医療技術者",ratio:2.70,note:"医療・福祉系大学が集積"},
 {field:"合成生物学・バイオ",rel:"○",occ:"その他の技術者",ratio:1.56,note:"バイオものづくり"},
 {field:"資源・エネルギー安全保障・GX",rel:"◎",occ:"建築・土木・測量技術者",ratio:4.80,note:"水島の脱炭素・プラント"},
 {field:"フュージョンエネルギー",rel:"△",occ:"その他の技術者",ratio:1.56,note:"研究段階"},
 {field:"防災・国土強靱化",rel:"◎",occ:"土木作業従事者",ratio:6.32,note:"建設・土木の深刻な不足"},
 {field:"港湾ロジスティクス",rel:"○",occ:"自動車運転従事者",ratio:2.55,note:"水島港の物流"},
 {field:"フードテック",rel:"◎",occ:"製品製造・加工処理従事者（金属製品を除く）",ratio:1.46,note:"県のフードテックWG・農業"},
 {field:"コンテンツ",rel:"○",occ:"美術家，デザイナー，写真家，映像撮影者",ratio:0.27,note:"県のコンテンツWG"},
];
(function(){
 const ord={"◎":0,"○":1,"△":2};
 const s17=strategy17.slice().sort((a,b)=>ord[a.rel]-ord[b.rel]||b.ratio-a.ratio);
 new Chart(document.getElementById('stratBar'),{type:'bar',
  data:{labels:s17.map(s=>s.rel+' '+s.field),datasets:[{label:'関連職種の有効求人倍率',data:s17.map(s=>s.ratio),backgroundColor:s17.map(s=>ratioColor(s.ratio))}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>s17[c.dataIndex].occ+' '+c.raw+'倍'}}},scales:{x:{ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'},title:{display:true,text:'関連職種の有効求人倍率（実データ）',color:'#8fa3b5'}},y:{ticks:{color:'#eef3f8',font:{size:11}}}}}});
 const sig=r=>r>=2?'<span class="badge b-short">強い不足</span>':r>=1?'<span class="badge b-warn">不足</span>':'<span class="badge b-over">緩やか</span>';
 document.querySelector('#stratTable tbody').innerHTML=s17.map(s=>`<tr style="border-left:3px solid ${s.rel==='◎'?'#33c88b':s.rel==='○'?'#3ea6ff':'#28394a'}"><td>${s.field}</td><td style="text-align:center;font-weight:700;color:${s.rel==='◎'?'#33c88b':s.rel==='○'?'#3ea6ff':'#8fa3b5'}">${s.rel}</td><td style="text-align:left">${s.occ}</td><td>${s.ratio}</td><td>${sig(s.ratio)}</td><td style="text-align:left;font-size:12px;color:#8fa3b5">${s.note}</td></tr>`).join('');
})();

// ⑦ 企業マップ（ダミー）
const fieldOrder=strategy17.map(s=>s.field);
const fieldShort=["AI半導体","サイバー","情報通信","量子","防衛","航空宇宙","海洋","造船","素材","創薬医療","バイオ","エネGX","核融合","防災","港湾","フードテック","コンテンツ"];
const relOf={};strategy17.forEach(s=>relOf[s.field]=s.rel);
const companies=[
 {f:"マテリアル（重要鉱物・部素材）",e:2800},{f:"マテリアル（重要鉱物・部素材）",e:1500},{f:"マテリアル（重要鉱物・部素材）",e:600},{f:"マテリアル（重要鉱物・部素材）",e:300},
 {f:"AI・半導体",e:1200},{f:"AI・半導体",e:400},
 {f:"資源・エネルギー安全保障・GX",e:2200},{f:"資源・エネルギー安全保障・GX",e:900},{f:"資源・エネルギー安全保障・GX",e:350},
 {f:"創薬・先端医療",e:1800},{f:"創薬・先端医療",e:700},{f:"創薬・先端医療",e:300},
 {f:"フードテック",e:1400},{f:"フードテック",e:500},{f:"フードテック",e:250},{f:"フードテック",e:150},
 {f:"造船",e:2000},{f:"造船",e:600},
 {f:"防災・国土強靱化",e:1100},{f:"防災・国土強靱化",e:500},{f:"防災・国土強靱化",e:200},
 {f:"港湾ロジスティクス",e:800},{f:"港湾ロジスティクス",e:300},
 {f:"情報通信",e:600},{f:"情報通信",e:200},
 {f:"デジタル・サイバーセキュリティ",e:300},
 {f:"コンテンツ",e:150},
 {f:"航空・宇宙",e:400},{f:"防衛産業",e:500},{f:"合成生物学・バイオ",e:250},
 {f:"海洋",e:180},{f:"量子",e:120},{f:"フュージョンエネルギー",e:110},
];
(function(){
 const relColor=r=>r==='◎'?'rgba(51,200,139,.75)':r==='○'?'rgba(62,166,255,.7)':'rgba(143,163,181,.6)';
 const pts=companies.map(c=>({x:fieldOrder.indexOf(c.f)+1,y:c.e,r:Math.max(6,Math.sqrt(c.e)/4),f:c.f}));
 new Chart(document.getElementById('firmBubble'),{type:'bubble',
  data:{datasets:[{label:'企業',data:pts,backgroundColor:companies.map(c=>relColor(relOf[c.f]))}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw.f+'：従業員 約'+c.raw.y.toLocaleString()+'人'}}},scales:{x:{min:0,max:18,ticks:{color:'#8fa3b5',stepSize:1,callback:v=>fieldShort[v-1]||'',maxRotation:90,minRotation:60},grid:{color:'#1e2c39'}},y:{title:{display:true,text:'従業員数（人）',color:'#8fa3b5'},ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'}}}}});
 const cnt=fieldOrder.map(f=>companies.filter(c=>c.f===f).length);
 new Chart(document.getElementById('firmCount'),{type:'bar',
  data:{labels:fieldShort,datasets:[{label:'企業数',data:cnt,backgroundColor:fieldOrder.map(f=>relColor(relOf[f]))}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'}},y:{ticks:{color:'#eef3f8'}}}}});
})();

// ⑧ 2040年 定員シミュレーション（社人研 令和5年推計ベース）
// 18歳人口推計＝15-19歳人口(5歳階級)÷5。出典：社人研「日本の地域別将来推計人口（令和5(2023)年推計）」
const pop18=[
 {y:2020,v:17686,real:true},
 {y:2025,v:16946,real:false},
 {y:2030,v:16171,real:false},
 {y:2035,v:14395,real:false},
 {y:2040,v:12510,real:false},
 {y:2045,v:12137,real:false},
 {y:2050,v:11937,real:false},
];
// 大学別 入学定員(概算)。real=trueは公式開示ページで確認済みの実数値、それ以外は収容定員÷標準修業年限による概算（要検証）
const univCapacity=[
 {name:"岡山大学",cap:2335,real:false,src:"公知の実数値（要検証）"},
 {name:"岡山県立大学",cap:505,real:false,src:"概算（要検証）"},
 {name:"新見公立大学",cap:165,real:false,src:"概算（要検証）"},
 {name:"岡山医療専門職大学",cap:80,real:false,src:"理学療法40＋作業療法40（概算）"},
 {name:"岡山学院大学",cap:40,real:false,src:"収容定員160÷4"},
 {name:"岡山商科大学",cap:485,real:false,src:"収容定員1,940÷4"},
 {name:"岡山理科大学",cap:1815,real:true,src:"公式開示ページ確認済み"},
 {name:"川崎医科大学",cap:142,real:false,src:"収容定員850÷6（医学科）"},
 {name:"川崎医療福祉大学",cap:1186,real:true,src:"公式・学部別内訳確認済み"},
 {name:"環太平洋大学",cap:862,real:false,src:"収容定員3,449÷4"},
 {name:"吉備国際大学",cap:574,real:false,src:"収容定員2,295÷4"},
 {name:"倉敷芸術科学大学",cap:364,real:false,src:"収容定員1,456÷4"},
 {name:"くらしき作陽大学",cap:382,real:false,src:"収容定員1,528÷4"},
 {name:"山陽学園大学",cap:228,real:false,src:"収容定員912÷4"},
 {name:"就実大学",cap:721,real:false,src:"収容定員2,884÷4（薬学部6年制含み要注意）"},
 {name:"中国学園大学",cap:212,real:false,src:"収容定員848÷4"},
 {name:"ノートルダム清心女子大学",cap:647,real:false,src:"収容定員2,589÷4"},
 {name:"美作大学",cap:220,real:false,src:"収容定員878÷4"},
];
(function(){
 const capTotal=univCapacity.reduce((a,b)=>a+b.cap,0);
 const enroll2020=9566; // 実データ：岡山県人口ビジョン改訂版(R3.3)、文科省 学校基本調査ベース
 const pop2020=pop18.find(p=>p.y===2020).v;
 const attract=enroll2020/pop2020; // 進学吸引力
 const pop2040=pop18.find(p=>p.y===2040).v;
 const pop2025=pop18.find(p=>p.y===2025).v;
 const proj2040=attract*pop2040;
 const fillRate=proj2040/capTotal;
 const shortfall=capTotal-proj2040;
 const declineRate=(pop2040-pop2025)/pop2025;

 const k=[
  {l:"2025年 18歳人口(推計)",v:pop2025.toLocaleString()+"人",d:"社人研 令和5年推計"},
  {l:"2040年 18歳人口(推計)",v:pop2040.toLocaleString()+"人",d:(declineRate*100).toFixed(1)+"%（2025年比）",cls:'up'},
  {l:"県内18大学 入学定員 合計",v:capTotal.toLocaleString()+"人",d:"公式・概算の合算"},
  {l:"2040年 推定入学者数",v:Math.round(proj2040).toLocaleString()+"人",d:"進学吸引力54.1%を維持と仮定"},
  {l:"2040年 推定充足率／定員割れ",v:(fillRate*100).toFixed(1)+"%",d:"定員割れ 約"+Math.round(shortfall).toLocaleString()+"人",cls:'up'},
 ];
 document.getElementById('simKpis').innerHTML=k.map(x=>`<div class="kpi"><div class="l">${x.l}</div><div class="v">${x.v}</div><div class="d${x.cls?(' '+x.cls):''}">${x.d}</div></div>`).join('');

 new Chart(document.getElementById('pop18Chart'),{type:'line',
  data:{labels:pop18.map(p=>p.y+(p.real?'(実績)':'')),datasets:[{label:'18歳人口(推計)',data:pop18.map(p=>p.v),borderColor:'#b48cff',backgroundColor:'rgba(168,120,255,.15)',fill:true,tension:.3,pointRadius:4,pointBackgroundColor:pop18.map(p=>p.real?'#33c88b':'#b48cff')}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw.toLocaleString()+' 人'}}},
   scales:{x:{ticks:{color:'#8fa3b5'},grid:{display:false}},y:{ticks:{color:'#8fa3b5',callback:v=>v.toLocaleString()},grid:{color:'#1e2c39'}}}}});

 new Chart(document.getElementById('simGapChart'),{type:'bar',
  data:{labels:['現在の入学定員 合計','2040年 推定入学者数'],datasets:[{data:[capTotal,Math.round(proj2040)],backgroundColor:['rgba(79,157,255,.8)','rgba(255,107,111,.85)']}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw.toLocaleString()+' 人'}}},
   scales:{x:{ticks:{color:'#eef3f8'}},y:{ticks:{color:'#8fa3b5',callback:v=>v.toLocaleString()},grid:{color:'#1e2c39'}}}}});

 const uc=univCapacity.slice().sort((a,b)=>b.cap-a.cap);
 new Chart(document.getElementById('univCapChart'),{type:'bar',
  data:{labels:uc.map(u=>u.name),datasets:[
   {label:'現在の入学定員',data:uc.map(u=>u.cap),backgroundColor:uc.map(u=>u.real?'rgba(51,200,139,.8)':'rgba(180,140,255,.7)')},
   {label:'2040年目安(充足率適用)',data:uc.map(u=>Math.round(u.cap*fillRate)),backgroundColor:'rgba(255,107,111,.65)'},
  ]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{color:'#8fa3b5',font:{size:11}}},tooltip:{callbacks:{label:c=>c.dataset.label+'：'+c.raw.toLocaleString()+' 人'}}},
   scales:{x:{ticks:{color:'#8fa3b5'},grid:{color:'#1e2c39'}},y:{ticks:{color:'#eef3f8',font:{size:10.5}},grid:{display:false}}}}});

 document.querySelector('#univCapTable tbody').innerHTML=uc.map(u=>{
  const proj=Math.round(u.cap*fillRate);
  const tag=u.real?'<span class="tag tag-real">実データ</span>':'<span class="tag tag-est">概算</span>';
  return `<tr><td>${u.name}</td><td>${u.cap.toLocaleString()}人</td><td style="color:var(--short)">${proj.toLocaleString()}人</td><td>${tag}</td><td style="text-align:left;font-size:11.5px;color:var(--muted)">${u.src}</td></tr>`;
 }).join('')+`<tr style="font-weight:700"><td>合計</td><td>${capTotal.toLocaleString()}人</td><td style="color:var(--short)">${Math.round(proj2040).toLocaleString()}人</td><td colspan="2"></td></tr>`;
})();

// タブ
const tabMap={ind:'tab-ind',uni:'tab-uni',reg:'tab-reg',skill:'tab-skill',act:'tab-act',strat:'tab-strat',firm:'tab-firm',sim:'tab-sim'};
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
 document.querySelectorAll('.tab').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false');});
 t.classList.add('active');t.setAttribute('aria-selected','true');
 Object.values(tabMap).forEach(id=>document.getElementById(id).classList.add('hide'));
 document.getElementById(tabMap[t.dataset.tab]).classList.remove('hide');
 if(t.dataset.tab==='ind')renderInd();
 document.getElementById('side').classList.remove('open');
}));

// モバイル：サイドバー開閉
document.getElementById('mobileToggle').addEventListener('click',()=>document.getElementById('side').classList.toggle('open'));

// トップへ戻るボタン
const stBtn=document.getElementById('scrollTop');
window.addEventListener('scroll',()=>stBtn.classList.toggle('show',window.scrollY>400));
stBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
