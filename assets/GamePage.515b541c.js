import{d as b,c as u,j as a,a as h,e as P,i as k,B as N,F as f,f as x,r as g,g as y,h as T,k as G,l as L,m as I,s as R,G as V,n as $,o as w,P as W,p as z}from"./index.773ac3c9.js";const F="_gamePlayer_12sff_2",j="_observer_12sff_7",A="_gamePlayerImg_12sff_7",M="_showResult_12sff_24",X="_active_12sff_24",E="_gamePlayerPhoto_12sff_53",O="_gamePlayerWrapper_12sff_67",H="_gamePlayerName_12sff_102",l={gamePlayer:F,observer:j,gamePlayerImg:A,showResult:M,active:X,gamePlayerPhoto:E,gamePlayerWrapper:O,gamePlayerName:H},C=({user:s})=>{const{showResult:e}=b(),c=u(l.gamePlayer,s.observer?l.observer:"",s.card?l.active:"",e?l.showResult:"");return a("div",{className:c,children:h("div",{className:l.gamePlayerWrapper,children:[h("div",{className:l.gamePlayerImg,children:[s.photo?a("img",{className:l.gamePlayerPhoto,src:s.photo,alt:"photo"}):"",e&&s.card?a("span",{children:s.card}):""]}),a("div",{className:l.gamePlayerName,children:s.username})]})})},q=()=>{const{id:s}=P(),{showResult:e}=b(),c=()=>{x(s)};return k()&&!e?a(N,{text:"Reveal cards",onClick:c}):e?a(N,{text:"Start new voting",onClick:c}):a(f,{children:"Pick your cards!"})},D="_gameTable_rmbz6_1",J="_gameTableSide_rmbz6_25",K="_gameTableTop_rmbz6_32",Q="_gameTableLeft_rmbz6_45",Y="_gameTableCenter_rmbz6_56",Z="_gameTableRight_rmbz6_80",U="_gameTableBottom_rmbz6_90",m={gameTable:D,gameTableSide:J,gameTableTop:K,gameTableLeft:Q,gameTableCenter:Y,gameTableRight:Z,gameTableBottom:U},aa=()=>{const{users:s=[]}=b(),e=(s==null?void 0:s.filter(i=>i.active))||[],c=0,r=Math.ceil((e==null?void 0:e.length)*.3),d=r,n=r+r,S=n,t=Math.ceil(((e==null?void 0:e.length)-(n+1))/2)+n,_=t,p=(e==null?void 0:e.length)-t+t;return h("div",{className:m.gameTable,children:[a("div",{}),a("div",{className:u(m.gameTableTop,m.gameTableSide),children:e.slice(d,n).map(i=>a(C,{user:i},i.userId))}),a("div",{}),a("div",{className:u(m.gameTableLeft,m.gameTableSide),children:e.slice(S,t).map(i=>a(C,{user:i},i.userId))}),a("div",{className:u(m.gameTableCenter,m.gameTableSide),children:a(q,{})}),a("div",{className:u(m.gameTableRight,m.gameTableSide),children:e.slice(_,p).map(i=>a(C,{user:i},i.userId))}),a("div",{}),a("div",{className:u(m.gameTableBottom,m.gameTableSide),children:e.slice(c,r).map(i=>a(C,{user:i},i.userId))}),a("div",{})]})},ea=g.exports.memo(aa),ta="_gameStatistic_1k3ub_1",sa="_gameStatisticList_1k3ub_10",ca="_gameStatisticItem_1k3ub_19",ia="_gameStatisticBarContainer_1k3ub_25",ra="_gameStatisticBar_1k3ub_25",ma="_gameStatisticBarFill_1k3ub_40",oa="_gameStatisticCardContainer_1k3ub_49",na="_gameStatisticCardSpacer_1k3ub_56",la="_gameStatisticValue_1k3ub_60",ga="_gameStatisticCardSpacerXL_1k3ub_74",da="_gameStatisticVotes_1k3ub_78",_a="_mostVoted_1k3ub_83",o={gameStatistic:ta,gameStatisticList:sa,gameStatisticItem:ca,gameStatisticBarContainer:ia,gameStatisticBar:ra,gameStatisticBarFill:ma,gameStatisticCardContainer:oa,gameStatisticCardSpacer:na,gameStatisticValue:la,gameStatisticCardSpacerXl:ga,gameStatisticVotes:da,mostVoted:_a},ua=()=>{var S;const{users:s=[]}=b(),e=(S=s==null?void 0:s.map(t=>t.card))==null?void 0:S.filter(t=>Number(t)),c=(e==null?void 0:e.reduce((t,_)=>(t[_]=(t[_]||0)+1,t),{}))||{},r=Math.max(...Object.values(c))||0,d=Object.keys(c),n=t=>c[t]*100/r;return a("div",{className:o.gameStatistic,children:a("ul",{className:o.gameStatisticList,children:d.map(t=>a("li",{className:n(t)===100?o.mostVoted:"",children:h("div",{className:o.gameStatisticItem,children:[a("div",{className:o.gameStatisticBarContainer,children:a("div",{className:o.gameStatisticBar,children:a("div",{className:o.gameStatisticBarFill,style:{height:`${n(t)}%`}})})}),h("div",{className:o.gameStatisticCardContainer,children:[a("div",{className:o.gameStatisticCardSpacer}),a("div",{className:o.gameStatisticValue,children:t}),h("div",{className:o.gameStatisticVotes,children:[c[t]," ",c[t]<2?"Vote":"Votes"]})]})]})},t))})})},ha=g.exports.memo(ua),Sa="_gameCardsList_1uc87_1",ba="_active_1uc87_14",pa="_gameCardsButton_1uc87_14",Ca="_gameCardsCard_1uc87_22",v={gameCardsList:Sa,active:ba,gameCardsButton:pa,gameCardsCard:Ca},va=()=>{const{id:s}=P(),[e]=y(T.auth),{users:c=[],userData:r}=b(),d=["1","2","3","5","8","13","21","34","55","89","?"],n=t=>{G(s,t,e==null?void 0:e.uid)},S=t=>{var p;return(((p=c.find(i=>i.userId===(e==null?void 0:e.uid)))==null?void 0:p.card)||"")===t?v.active:""};return a("div",{className:v.gameCardsList,children:r!=null&&r.observer?null:d.map((t,_)=>a("div",{className:v.gameCardsCard,onClick:()=>n(t),children:a("button",{className:u(v.gameCardsButton,S(t)),children:a("span",{children:t})})},_))})},Ta=g.exports.memo(va),Pa=()=>{const{showResult:s}=b();return a(f,{children:s?a(ha,{}):a(Ta,{})})},fa=g.exports.memo(Pa),ya="_gamePage_znvlx_1",Na="_gamePageTableWrapper_znvlx_7",B={gamePage:ya,gamePageTableWrapper:Na},Ba=()=>{const{id:s}=P(),[e]=y(T.auth),c=async()=>{const r=new V,{user:d}=await $(T.auth,r);d&&w()};return g.exports.useEffect(()=>{e?L(s,e):(I(s),R({variant:"success",title:"Please first login to play",canClose:!1,maxWidth:740,onConfirm:c,confirmBtnText:"Login By Google"}))},[e]),h(f,{children:[a("div",{className:B.gamePageTableWrapper,children:a(ea,{})}),a(fa,{})]})},ka=g.exports.memo(Ba),xa=()=>{const[,s]=y(T.auth);return g.exports.useEffect(()=>()=>{console.log("Disconnected"),z("leave")},[]),s?a(W,{}):a("div",{className:B.gamePage,children:a(ka,{})})},La=g.exports.memo(xa);export{La as default};
