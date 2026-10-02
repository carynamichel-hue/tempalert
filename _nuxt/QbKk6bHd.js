import{C as e,Dt as t,K as n,O as r,Q as i,R as a,W as o,Y as s,Z as c,a as l,b as u,ct as d,g as f,k as p,kt as m,rt as h,w as g,x as _}from"./VNomApzi.js";import{c as v,d as y,l as b,o as x,r as S,t as C,u as w}from"#entry";import{t as ee}from"./B6OMdntb.js";import{_ as te,a as ne,b as re,c as T,d as E,f as D,g as ie,h as O,i as ae,l as oe,m as se,n as ce,p as le,r as ue,s as de,t as fe,u as pe,v as me,x as k,y as he}from"./CSHKZ91r.js";import{t as ge}from"./BDNMzG2s.js";var _e=Object.create,ve=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertyNames,A=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty,j=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),M=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=be(t),a=0,o=i.length,s;a<o;a++)s=i[a],!xe.call(e,s)&&s!==n&&ve(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=ye(t,s))||r.enumerable});return e},N=(e,t,n)=>(n=e==null?{}:_e(A(e)),M(t||!e||!e.__esModule||!xe.call(e,`default`)?ve(n,`default`,{value:e,enumerable:!0}):n,e)),Se={class:`stn-score stack`,"data-score":``},P={class:`row`},F=[`disabled`],Ce={class:`muted`},I=[`aria-label`],we={class:`small`},Te=[`onClick`],Ee={key:1,class:`notice notice-alert`,style:{margin:`0`}},L={key:2,class:`scroll`},R={class:`sc`},De={class:`vs`},z=[`data-station`],B={class:`name`},V={class:`muted`},Oe={class:`warn`},ke={class:`warn`},Ae=[`disabled`,`onClick`],je={class:`muted`},Me={class:`nw`},Ne={class:`nw`},H={class:`nw`},U={key:1,class:`warn`},W={class:`muted`},Pe={class:`nw`},Fe={key:3,class:`small`},Ie={class:`steps-list`},G=36e5,Le=ge({__name:`StationScore`,props:{picked:{type:Object,required:!0},truths:{type:Array,default:()=>[]},has:{type:Function,required:!0}},emits:[`add`,`scored`],setup(i,{emit:a}){let c=i,l=a,{t:p,history:v}=C(),y=h(!1),b=h(``),x=h(null),S=h(c.truths[0]?.id||`model`),w=h(null),ee=h(``);s(()=>c.picked,()=>{x.value=null,w.value=null});let ne=u(()=>{let e=new Set,t=[];for(let n of c.picked.nws||[]){let r=D(n);e.has(r)||(e.add(r),t.push({source:`nws`,id:n.id,name:n.name,miles:n.miles,hsid:r}))}for(let n of c.picked.newa||[]){let r=D(n);e.has(r)||(e.add(r),t.push({source:`newa`,id:n.sid,name:n.name,miles:n.miles,hsid:r}))}return t});async function re(e,t){let n=O(t-168*G).slice(0,8)+`00`;for(let r of[1,2]){let i=await fetch(ue,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({sid:e,sdate:n,edate:O(t-r*G)})});if(i.status!==400||r!==1){if(!i.ok)throw Error(String(i.status));return await i.text()}}}async function ie(e){ee.value=``,w.value=null;try{if(S.value===`model`){let t=await fetch(ce(c.picked.lat,c.picked.lon));if(!t.ok)throw Error(String(t.status));w.value=te(le(await t.json(),e))}else{let e=await v(S.value,7);w.value=te((e.points||[]).map(e=>({at:e[0],temp:e[1]})))}}catch(e){ee.value=p(`scTruthFail`)+(e?.message?` (`+e.message+`)`:``)}}async function ae(){y.value=!0,b.value=``;let e=Date.now();try{let[,t]=await Promise.all([ie(e),Promise.all(ne.value.map(async t=>{try{let n=await re(t.hsid,e),r=E(n);return{...t,points:r,health:pe(r,{now:e,dead:oe(n)})}}catch{return{...t,points:[],health:null,error:!0}}}))]);x.value=t,l(`scored`,t.filter(e=>e.health).map(e=>({source:e.source,id:e.id,score:e.health.score,word:e.health.word})))}catch(e){b.value=e.message}finally{y.value=!1}}s(S,async()=>{x.value&&(y.value=!0,await ie(Date.now()),y.value=!1)});let se=u(()=>(x.value||[]).map(e=>({...e,lows:e.points.length&&w.value?T(te(e.points),w.value):null})).sort((e,t)=>(t.health?.score??-1)-(e.health?.score??-1)||(e.lows?.miss??99)-(t.lows?.miss??99))),de=u(()=>S.value===`model`?p(`scModel`):c.truths.find(e=>e.id===S.value)?.name||``),fe=e=>(e>0?`+`:e<0?`−`:`±`)+Math.abs(e).toFixed(1);return(a,s)=>(o(),g(`div`,Se,[_(`div`,P,[_(`button`,{class:`btn btn-primary`,disabled:y.value||!ne.value.length,"data-compare":``,onClick:ae},`📊 `+m(y.value?d(p)(`scBusy`):x.value?d(p)(`scAgain`):d(p)(`scCompare`)),9,F),_(`small`,Ce,m(d(p)(`scWhat`)),1)]),x.value?(o(),g(`div`,{key:0,class:`row truth`,role:`group`,"aria-label":d(p)(`scVs`)},[_(`span`,we,m(d(p)(`scVs`)),1),(o(!0),g(f,null,n(i.truths,e=>(o(),g(`button`,{key:e.id,class:t([`chip`,{on:S.value===e.id}]),onClick:t=>S.value=e.id},`🔌 `+m(e.name),11,Te))),128)),_(`button`,{class:t([`chip`,{on:S.value===`model`}]),onClick:s[0]||=e=>S.value=`model`},`🌐 `+m(d(p)(`scModel`)),3)],8,I)):e(``,!0),b.value||ee.value?(o(),g(`p`,Ee,m(b.value||ee.value),1)):e(``,!0),x.value?(o(),g(`div`,L,[_(`table`,R,[_(`thead`,null,[_(`tr`,null,[_(`th`,null,m(d(p)(`scStation`)),1),_(`th`,null,m(d(p)(`scReliable`)),1),_(`th`,null,[r(m(d(p)(`scLows`))+` `,1),_(`span`,De,m(de.value),1)])])]),_(`tbody`,null,[(o(!0),g(f,null,n(se.value,n=>(o(),g(`tr`,{key:n.source+n.id,"data-station":n.id},[_(`td`,B,[_(`b`,null,m(n.name),1),s[3]||=_(`br`,null,null,-1),_(`small`,V,m(n.source===`nws`?n.id:`NEWA`)+` · `+m(n.miles)+` `+m(d(p)(`miles`)),1),n.health?.dead?.length?(o(),g(f,{key:0},[s[1]||=_(`br`,null,null,-1),_(`small`,Oe,`⚠ `+m(d(p)(`scDead`))+` `+m(n.health.dead.map(e=>d(p)(`el_`+e)).join(`, `)),1)],64)):e(``,!0),n.health?.jumps?(o(),g(f,{key:1},[s[2]||=_(`br`,null,null,-1),_(`small`,ke,`⚠ `+m(n.health.jumps)+` `+m(d(p)(`scJumps`)),1)],64)):e(``,!0),s[4]||=_(`br`,null,null,-1),_(`button`,{class:`btn btn-sm`,disabled:i.has(n.source,n.id),onClick:e=>l(`add`,n.source,n.id,n.name)},m(i.has(n.source,n.id)?d(p)(`added`):d(p)(`add`)),9,Ae)]),_(`td`,null,[n.health?(o(),g(f,{key:0},[_(`b`,{class:t([`sbadge`,`is-`+n.health.word])},m(n.health.score),3),s[7]||=r(),_(`small`,null,m(d(p)(`sc_`+n.health.word)),1),s[8]||=_(`br`,null,null,-1),_(`small`,je,[_(`span`,Me,m(n.health.pct)+` % `+m(d(p)(`scArrived`)),1),n.health.gapH>1?(o(),g(f,{key:0},[s[5]||=r(` · `,-1),_(`span`,Ne,m(d(p)(`scGap`))+` `+m(n.health.gapH)+` h`,1)],64)):e(``,!0),n.health.lateH==null?e(``,!0):(o(),g(f,{key:1},[s[6]||=r(` · `,-1),_(`span`,H,m(n.health.lateH)+` h `+m(d(p)(`scLate`)),1)],64))])],64)):(o(),g(`small`,U,m(d(p)(`scNoData`)),1))]),_(`td`,null,[n.lows?(o(),g(f,{key:0},[_(`b`,null,`±`+m(n.lows.miss.toFixed(1))+`°`,1),s[9]||=_(`br`,null,null,-1),_(`small`,W,[r(m(fe(n.lows.bias))+`° · `,1),_(`span`,Pe,m(n.lows.n)+` `+m(d(p)(`scNights`)),1)])],64)):(o(),g(f,{key:1},[r(`—`)],64))])],8,z))),128))])])])):e(``,!0),x.value?(o(),g(`details`,Fe,[_(`summary`,null,m(d(p)(`scHow`)),1),_(`ul`,Ie,[_(`li`,null,m(d(p)(`scHow1`)),1),_(`li`,null,m(d(p)(`scHow2`)),1),_(`li`,null,m(d(p)(`scHow3`)),1),_(`li`,null,[_(`b`,null,m(d(p)(`scHow4`)),1)])])])):e(``,!0)]))}},[[`__scopeId`,`data-v-16687b25`]]),K=j(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),q=j((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),J=j((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),Re=j(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),Y=j(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),ze=j((e=>{var t=q().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),Be=j((e=>{var t=q().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),Ve=j((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),He=j((e=>{var t=J(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),X=j((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),Ue=j((e=>{var t=X();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),We=j(((e,t)=>{var n=Ue();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),Z=j((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),Ge=j((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),Q=j((e=>{var t=Z(),n=Ge();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),Ke=j((e=>{var t=q(),n=He(),r=J(),i=Q(),a=Z(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),qe=j((e=>{var t=q(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),Je=j(((e,t)=>{var n=Q();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),$=j(((e,t)=>{var n=Q(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),Ye=j(((e,t)=>{var n=Q();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),Xe=j(((e,t)=>{var n=Q(),r=q();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),Ze=j(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),Qe=j((e=>{var t=Q(),n=Je(),r=$(),i=Ye(),a=Xe(),o=Ge(),s=q(),c=Ze();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),$e=j((e=>{var t=q(),n=J(),r=Re(),i=Y(),a=ze(),o=Be(),s=Ve(),c=He(),l=We(),u=Ke(),d=qe(),f=Q(),p=Qe();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),et=j((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),tt=j((e=>{var t=et();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),nt=j((e=>{var t=et();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),rt=N(j((e=>{var t=K(),n=$e(),r=tt(),i=nt();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))()),it=`/**
 * Temp Alert — the Google Apps Script that watches your temperature sensors
 * and emails people when one goes too cold or too hot.
 *
 * WHAT IT DOES
 *   · Every 15 minutes it reads the latest temperature from each sensor on
 *     the "Alerts" tab — a LI-COR sensor (with your LI-COR Cloud token), a
 *     NEWA weather station, or a National Weather Service station.
 *   · Each sensor can have its own alerts: "at or below 32 °F → email these
 *     people", "at or above 95 °F → email those people".
 *   · It emails ONCE when a reading crosses the line, and once more when it
 *     is back to normal (a couple of degrees past the line, so a reading
 *     hovering right at 32 does not send twenty emails).
 *   · If a sensor stops reporting, it says so — a dead sensor must never
 *     look like a quiet night. (NEWA stations post each hour late, so they
 *     count as "not reporting" only after 4 hours.)
 *   · A reading that jumps more than 15 °F in an hour is held back until a
 *     later reading agrees — a station sending one bad number does not
 *     email anyone. Held jumps are written on the "Alert log" tab.
 *   · A sensor can have a BACKUP (another station or sensor). While the main
 *     one is not reporting, its alerts run on the backup's readings — one
 *     email says so when it switches, one more when the main one is back.
 *   · It keeps a 7-day tally of how often each sensor answered on time — the
 *     reliability shown on the app's Readings card.
 *   · Every email it sends is written on the "Alert log" tab.
 *
 * WHAT IT CAN REACH (the permissions are set in appsscript.json, which the
 * app's Setup page gives you too):
 *   · "spreadsheets.currentonly" — THIS spreadsheet only.
 *   · "script.external_request" — to read the weather stations and LI-COR.
 *   · "script.send_mail" — to send the alert emails, from your address.
 *   · "script.scriptapp" — to run itself every 15 minutes while you sleep.
 *   It never reads your email, your Drive or any other sheet.
 *
 * HOW TO INSTALL (once — the app's Setup page walks through it)
 *   1. In a new Google Sheet: Extensions → Apps Script. Delete what is there,
 *      paste this whole file, click Save.
 *   2. Project Settings (gear) → tick "Show appsscript.json manifest file in
 *      editor". Back in the Editor, open appsscript.json, replace everything
 *      in it with the app's appsscript.json, click Save.
 *   3. Deploy → New deployment → type "Web app". Execute as: Me. Who has
 *      access: Anyone. Click Deploy and allow the permissions. Google warns
 *      "This app hasn't been verified" — normal for a script in your own
 *      sheet: Advanced → Go to (project) (unsafe) → Allow.
 *      Copy the "Web app URL" (it ends in /exec) into the app's Setup page.
 *   "Anyone" lets the app (and your crew's phones) read the latest readings
 *   without a Google sign-in. The email addresses and the LI-COR token are
 *   never sent to anyone without the setup password.
 *
 * SETUP PASSWORD: the first time the app saves, the password typed there
 * becomes the setup password. To reset it: Project Settings (gear) → Script
 * properties → delete SETUP_KEY.
 *
 * WITHOUT THE APP: pick "startChecking" in the function list at the top of
 * the editor and click Run — that turns on the 15-minute check. "stopChecking"
 * turns it off; "sendTestEmail" sends a test to everyone on the Alerts tab.
 *
 * After editing this code, publish the change with Deploy → Manage
 * deployments → edit (pencil) → Version: New version → Deploy.
 */

var ALERTS = 'Alerts';
var SETTINGS_TAB = 'Settings';
var LOG = 'Alert log';
var CHECK_EVERY_MIN = 15;
var SUBJECT_TAG = '[Temp Alert]';
var JUMP_F = 15;            // °F in an hour — more than that is held until a later reading agrees
var NEWA_STALE_MIN = 240;   // NEWA stations count as "not reporting" only after 4 hours

// the last three columns are optional: a backup read only while this sensor is not reporting
var ALERT_HEADERS = ['Sensor', 'Source', 'Station / sensor ID', 'Alert when', 'Temperature (°F)', 'Email to', 'On',
  'Backup name', 'Backup source', 'Backup station / sensor ID'];
var REL_DAYS = 7;           // the reliability tally on the Readings card covers the last 7 days
var LOG_HEADERS = ['Sent', 'Sensor', 'What happened', 'Reading (°F)', 'Reading time', 'Alert at (°F)', 'Emailed to'];
// [key, label on the Settings tab, default]
var SETTINGS = [
  ['title', 'Title', ''],
  ['staleMinutes', 'Not reporting after (minutes)', 120],
  ['margin', 'Back to normal margin (°F)', 2],
  ['sendClear', 'Send back-to-normal emails', true],
  ['appUrl', 'Status page', ''],
];
var SOURCES = { licor: 'LI-COR', newa: 'NEWA station', nws: 'Weather Service station' };
var SOURCE_FROM_LABEL = { 'li-cor': 'licor', 'licor': 'licor', 'newa station': 'newa', 'newa': 'newa',
  'weather service station': 'nws', 'nws': 'nws', 'national weather service': 'nws' };

/* ── web app entry points ─────────────────────────────────────────────── */

function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.action === 'ping') return json_({ ok: true });
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    return json_(publicView_(ss));
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    lock.waitLock(25000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var check = checkKey_(body.key);
    if (body.action === 'checkKey') return json_(check);
    if (!check.ok) return json_(check);
    // A sheet with no password yet takes the first one it is given — the
    // owner sets it in the app's Setup right after deploying.
    if (check.first) setProp_('SETUP_KEY', String(body.key));
    if (body.action === 'setup') { writeConfig_(ss, body.config || {}); return json_(ownerView_(ss)); }
    if (body.action === 'load') return json_(ownerView_(ss));
    if (body.action === 'licor') return json_(licorAction_(body));
    if (body.action === 'checking') { setChecking_(!!body.on); return json_(ownerView_(ss)); }
    if (body.action === 'checkNow') { runCheck_(ss, Date.now()); return json_(ownerView_(ss)); }
    if (body.action === 'test') return json_(sendTest_(ss, body.to));
    if (body.action === 'history') return json_(historyAction_(body, Date.now()));
    return json_({ ok: false, error: 'Unknown action.' });
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  } finally {
    try { lock.releaseLock(); } catch (ignore) { /* never acquired */ }
  }
}

// What anyone with the link may see: readings and alert states, never the
// email addresses (a forwarded link must not hand out the crew's addresses).
function publicView_(ss) {
  var cfg = readConfig_(ss);
  var props = PropertiesService.getScriptProperties().getProperties();
  return {
    ok: true, sheetName: ss.getName(), title: cfg.title,
    status: statusOf_(cfg, readState_(cfg, props), props), checking: isChecking_(),
    lastCheck: Number(props.LAST_CHECK || 0) || null,
    hasKey: !!props.SETUP_KEY, hasLicor: !!props.LICOR_TOKEN,
  };
}
function ownerView_(ss) {
  var v = publicView_(ss);
  v.config = readConfig_(ss);
  v.quota = mailQuota_();
  return v;
}

/* ── the check (every 15 minutes) ─────────────────────────────────────── */

// The trigger's entry point. Skips quietly if a check is already running.
function checkAll() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try { runCheck_(SpreadsheetApp.getActiveSpreadsheet(), Date.now()); } finally { lock.releaseLock(); }
}

// Run from the editor to turn checking on without the app (and to give the
// permissions the first time).
function startChecking() { setChecking_(true); runCheck_(SpreadsheetApp.getActiveSpreadsheet(), Date.now()); }
function stopChecking() { setChecking_(false); }
function sendTestEmail() { return sendTest_(SpreadsheetApp.getActiveSpreadsheet(), null); }

function runCheck_(ss, now) {
  var cfg = readConfig_(ss);
  var props = PropertiesService.getScriptProperties().getProperties();
  var state = readState_(cfg, props);
  var save = {};
  var token = props.LICOR_TOKEN || '';
  var tz = tz_(ss);
  var sent = [];
  var day = localDay_(now, tzOffsetMin_(tz, now));
  cfg.sensors.forEach(function (s) {
    var key = sensorKey(s);
    var pick = readWithBackup_(s, token, tz, now, cfg);
    var out = evaluate(s, pick.reading, state[key] || null, cfg, now);
    out.state.error = String(pick.error || '').slice(0, 300);
    // one small property per sensor: Google caps each at 9 kB, and one
    // shared blob of 30 sensors with error texts would pass that
    save['ST ' + key] = JSON.stringify(out.state);
    out.events.forEach(function (ev) { sent.push(deliver_(ss, cfg, s, ev, tz)); });
    save['REL ' + key] = JSON.stringify(tally(parse_(props['REL ' + key], []), day,
      { onTime: pick.mainOk, held: !!out.state.held && !(state[key] || {}).held, backup: out.state.from === 'backup' }));
  });
  save.LAST_CHECK = String(now);
  PropertiesService.getScriptProperties().setProperties(save);
  if (props.STATE != null) delProp_('STATE');   // the old one-blob state, moved
  return sent;
}

// The main sensor's newest reading — or, while it is not reporting and a
// backup is set, the backup's. mainOk = the main one answered on time.
function readWithBackup_(s, token, tz, now, cfg) {
  var main = null, error = '';
  try { main = readSensor_(s, token, tz, now); } catch (err) { error = String((err && err.message) || err); }
  var mainOk = !!(main && isFinite(main.temp) && now - main.at <= staleMs_(s.source, cfg));
  var out = { reading: main ? { temp: main.temp, at: main.at, from: 'main' } : null, error: error, mainOk: mainOk };
  if (!mainOk && s.backup) {
    try {
      var b = readSensor_(s.backup, token, tz, now);
      if (b && isFinite(b.temp) && now - b.at <= staleMs_(s.backup.source, cfg)) out.reading = { temp: b.temp, at: b.at, from: 'backup' };
    } catch (err) { out.error = (error ? error + ' · ' : '') + 'Backup: ' + String((err && err.message) || err); }
  }
  return out;
}

// how old a reading may be before its source counts as "not reporting"
function staleMs_(source, cfg) {
  var ms = Math.max(15, Number(cfg.staleMinutes) || 120) * 60000;
  // NEWA posts each hour late — its newest reading is often 2–3 hours old
  return source === 'newa' ? Math.max(ms, NEWA_STALE_MIN * 60000) : ms;
}

/**
 * Pure: the 7-day reliability tally. days = [[day, checks, onTime, held, backup], …]
 * (day = days since 1970 on the sheet's clock), one row per day, oldest dropped.
 */
function tally(days, day, c) {
  var out = (Array.isArray(days) ? days : []).filter(function (d) { return Array.isArray(d) && d[0] > day - REL_DAYS && d[0] <= day; });
  var row = out.filter(function (d) { return d[0] === day; })[0];
  if (!row) { row = [day, 0, 0, 0, 0]; out.push(row); }
  row[1]++;
  if (c.onTime) row[2]++;
  if (c.held) row[3]++;
  if (c.backup) row[4]++;
  return out;
}
/** Pure: the tally → { pct, checks, held, backup, days } for the Readings card */
function reliability(days) {
  var r = { checks: 0, onTime: 0, held: 0, backup: 0, days: 0 };
  (days || []).forEach(function (d) { r.days++; r.checks += d[1]; r.onTime += d[2]; r.held += d[3]; r.backup += d[4]; });
  return r.checks ? { pct: Math.round(100 * r.onTime / r.checks), checks: r.checks, held: r.held, backup: r.backup, days: r.days } : null;
}
function localDay_(ms, offsetMin) { return Math.floor((ms + offsetMin * 60000) / 86400000); }
function parse_(text, dflt) { try { var v = JSON.parse(text || 'null'); return v == null ? dflt : v; } catch (e) { return dflt; } }

/**
 * Pure: one sensor, its newest reading (or null when it could not be read),
 * what we knew last time → the new state and the emails to send.
 *   state = { temp, at, checked, stale, rules: { "below:32": "ok" | "alert" } }
 * A reading counts only while it is younger than staleMinutes; a sensor whose
 * newest reading is older than that (or that never answered) is "not
 * reporting", and its alerts hold their last state until it is back.
 */
function evaluate(sensor, reading, prev, cfg, now) {
  prev = prev || { rules: {}, stale: false };
  var margin = Math.max(0, Number(cfg.margin) || 0);
  var events = [];
  var everyone = recipients_(sensor);

  // A jump bigger than real weather makes (more than JUMP_F an hour) is held
  // back until a LATER reading agrees with it — a station serving a junk 32
  // for one hour, then the real 74 again, must not send two emails (10-01).
  var held = null;
  if (reading && isFinite(reading.temp) && prev.at && isFinite(prev.temp)) {
    var hours = Math.max(1, Math.abs(reading.at - prev.at) / 3600000);
    if (Math.abs(reading.temp - prev.temp) > JUMP_F * hours) {
      var confirmed = prev.held && reading.at > prev.held.at && Math.abs(reading.temp - prev.held.temp) <= JUMP_F;
      if (!confirmed) {
        held = { temp: reading.temp, at: reading.at };
        if (!prev.held) events.push({ type: 'held', to: [], temp: reading.temp, at: reading.at, was: prev.temp });
        reading = null;
      }
    }
  }

  // from = 'main' or 'backup': which one this reading came from
  var prevFrom = prev.from || 'main';
  var last = reading && isFinite(reading.temp) ? reading : (prev.at ? { temp: prev.temp, at: prev.at, from: prevFrom } : null);
  var from = last ? last.from || 'main' : 'main';
  var state = { temp: last ? last.temp : null, at: last ? last.at : null, checked: now, stale: false, rules: {}, held: held, from: from };
  for (var k in prev.rules) state.rules[k] = prev.rules[k];
  var src = from === 'backup' && sensor.backup ? sensor.backup.source : sensor.source;

  if (!last || now - last.at > staleMs_(src, cfg)) {
    state.stale = true;
    if (!prev.stale && everyone.length) events.push({ type: 'stale', to: everyone, temp: state.temp, at: state.at, from: from });
    return { state: state, events: events };
  }
  if (prev.stale && everyone.length) events.push({ type: 'back', to: everyone, temp: last.temp, at: last.at, from: from });
  // the main one stopped and the backup took over (or the main one is back):
  // one email each way, so people know whose readings the alerts now follow
  else if (from !== prevFrom && everyone.length) events.push({ type: from === 'backup' ? 'toBackup' : 'toMain', to: everyone, temp: last.temp, at: last.at, from: from });

  state.rules = {};
  (sensor.alerts || []).forEach(function (a) {
    if (!validAlert_(a)) return;
    var k = ruleKey(a);
    var was = prev.rules[k] || 'ok';
    var t = Number(a.temp), v = last.temp;
    var hit = a.when === 'below' ? v <= t : v >= t;
    var clear = a.when === 'below' ? v >= t + margin : v <= t - margin;
    var now_ = was;
    if (a.on === false) now_ = 'ok';
    else if (was === 'ok' && hit) {
      now_ = 'alert';
      if (a.emails.length) events.push({ type: 'alert', to: a.emails.slice(), alert: a, temp: v, at: last.at, from: from });
    } else if (was === 'alert' && clear) {
      now_ = 'ok';
      // coming back from silence, the "reporting again" email already gives
      // the reading — a second "back to normal" one would just be noise
      if (cfg.sendClear !== false && !prev.stale && a.emails.length) events.push({ type: 'clear', to: a.emails.slice(), alert: a, temp: v, at: last.at, from: from });
    }
    state.rules[k] = now_;
  });
  return { state: state, events: events };
}

function ruleKey(a) { return a.when + ':' + Number(a.temp); }
function sensorKey(s) { return s.source + ':' + s.id; }
function validAlert_(a) { return a && (a.when === 'below' || a.when === 'above') && a.temp !== '' && a.temp != null && isFinite(Number(a.temp)); }
function recipients_(s) {
  var all = [];
  (s.alerts || []).forEach(function (a) { if (a.on !== false) (a.emails || []).forEach(function (m) { if (all.indexOf(m) < 0) all.push(m); }); });
  return all;
}

/* ── emails ───────────────────────────────────────────────────────────── */

// Pure: the subject and text of one email.
function message(sensor, ev, cfg, fmt) {
  var name = sensor.name || sensor.id;
  var f = function (v) { return v == null || !isFinite(v) ? '—' : (Math.round(v * 10) / 10) + '°F'; };
  var when = ev.at ? fmt(ev.at) : 'no reading yet';
  var a = ev.alert || {};
  var bk = sensor.backup ? { name: sensor.backup.name || sensor.backup.id, source: sensor.backup.source, id: sensor.backup.id } : null;
  var viaBackup = !!(bk && ev.from === 'backup');
  var by = viaBackup ? ' (by its backup, ' + bk.name + ')' : '';
  var subject, lead;
  if (ev.type === 'alert' && a.when === 'below') { subject = '🥶 ' + name + ' is ' + f(ev.temp) + ' (at or below ' + f(a.temp) + ')'; lead = name + ' has dropped to ' + f(ev.temp) + by + '.'; }
  else if (ev.type === 'alert') { subject = '🔥 ' + name + ' is ' + f(ev.temp) + ' (at or above ' + f(a.temp) + ')'; lead = name + ' has reached ' + f(ev.temp) + by + '.'; }
  else if (ev.type === 'clear') { subject = '✅ ' + name + ' is back to ' + f(ev.temp); lead = name + ' is back to ' + f(ev.temp) + ' — past the ' + f(a.temp) + ' alert by the margin.'; }
  else if (ev.type === 'stale') {
    subject = '⚠️ ' + name + ' has stopped reporting';
    lead = 'No new reading from ' + name + (bk ? ' or its backup, ' + bk.name + ',' : '') + ' for over ' + Math.round(staleMs_(sensor.source, cfg) / 60000) + ' minutes. Its alerts cannot fire until it reports again — check it.';
  }
  else if (ev.type === 'back') { subject = '✅ ' + name + ' is reporting again (' + f(ev.temp) + ')'; lead = (viaBackup ? bk.name + ', the backup for ' + name + ',' : name) + ' is reporting again.'; }
  else if (ev.type === 'toBackup') { subject = '🔁 ' + name + ' stopped reporting — now watching ' + bk.name; lead = name + ' is not reporting, so its alerts now follow its backup, ' + bk.name + ' (' + f(ev.temp) + '). You will get one more email when ' + name + ' is back.'; }
  else if (ev.type === 'toMain') { subject = '✅ ' + name + ' is reporting again (' + f(ev.temp) + ')'; lead = name + ' is reporting again — its alerts follow it again, not the backup.'; }
  else { subject = 'Test alert'; lead = 'This is a test.'; }
  var lines = [lead, '', 'Reading: ' + f(ev.temp) + ' at ' + when, 'Sensor: ' + name + ' (' + (SOURCES[sensor.source] || sensor.source) + ' ' + sensor.id + ')'];
  if (viaBackup) lines.push('Reading from the backup: ' + bk.name + ' (' + (SOURCES[bk.source] || bk.source) + ' ' + bk.id + ') — ' + name + ' is not reporting');
  if (ev.alert) lines.push('Alert: ' + (a.when === 'below' ? 'at or below ' : 'at or above ') + f(a.temp));
  if (cfg.appUrl) lines.push('', 'Live readings: ' + cfg.appUrl);
  lines.push('', '— Temp Alert' + (cfg.title ? ' · ' + cfg.title : ''));
  return { subject: SUBJECT_TAG + ' ' + subject, body: lines.join('\\n') };
}

function deliver_(ss, cfg, sensor, ev, tz) {
  var fmt = function (ms) { return Utilities.formatDate(new Date(ms), tz, 'EEE MMM d, h:mm a'); };
  if (ev.type === 'held') {   // written down, never emailed
    log_(ss, [new Date(), sensor.name || sensor.id, 'Ignored a jump from ' + num_(ev.was) + ' — waiting for the next reading to agree',
      num_(ev.temp), ev.at ? new Date(ev.at) : '', '', '']);
    return { type: 'held', to: [], subject: '', sent: false };
  }
  var m = message(sensor, ev, cfg, fmt);
  var what = { alert: 'ALERT', clear: 'Back to normal', stale: 'Not reporting', back: 'Reporting again',
    toBackup: 'Switched to the backup' + (sensor.backup ? ' (' + (sensor.backup.name || sensor.backup.id) + ')' : ''), toMain: 'Back on the main sensor' }[ev.type] || ev.type;
  if (ev.from === 'backup' && sensor.backup && ev.type !== 'toBackup') what += ' — via backup ' + (sensor.backup.name || sensor.backup.id);
  var note = '';
  try {
    if (MailApp.getRemainingDailyQuota() < ev.to.length) throw new Error('Google’s daily email limit is used up — not sent');
    MailApp.sendEmail({ to: ev.to.join(','), subject: m.subject, body: m.body, name: 'Temp Alert' });
  } catch (err) { note = ' — NOT SENT: ' + String((err && err.message) || err); }
  log_(ss, [new Date(), sensor.name || sensor.id, what + note, num_(ev.temp), ev.at ? new Date(ev.at) : '',
    ev.alert ? (ev.alert.when === 'below' ? '≤ ' : '≥ ') + ev.alert.temp : '', ev.to.join(', ')]);
  return { type: ev.type, to: ev.to, subject: m.subject, sent: !note };
}

function sendTest_(ss, to) {
  var cfg = readConfig_(ss);
  var list = [];
  if (to && to.length) list = cleanEmails(to);
  else cfg.sensors.forEach(function (s) { recipients_(s).forEach(function (m) { if (list.indexOf(m) < 0) list.push(m); }); });
  if (!list.length) return { ok: false, error: 'No email addresses yet — add people to an alert first.' };
  if (MailApp.getRemainingDailyQuota() < list.length) return { ok: false, error: 'Google’s daily email limit is used up — try tomorrow.' };
  var body = [
    'This is a TEST from Temp Alert' + (cfg.title ? ' (' + cfg.title + ')' : '') + '. Nothing is wrong.',
    '',
    'Real alerts look like this one: the subject starts with ' + SUBJECT_TAG + ', and they come from this same address.',
    'Did your phone buzz or ring for this email? If not, set it up now so a frost alert at 3 am wakes you —',
    'the steps are on the app’s Setup page, step 6' + (cfg.appUrl ? ': ' + cfg.appUrl.replace(/\\/?(\\?.*)?$/, '/setup') : '') + '.',
    '',
    'Sensors watched: ' + cfg.sensors.map(function (s) { return s.name || s.id; }).join(', '),
  ].join('\\n');
  MailApp.sendEmail({ to: list.join(','), subject: SUBJECT_TAG + ' 🧪 Test alert — please check your phone rang', body: body, name: 'Temp Alert' });
  log_(ss, [new Date(), '(test)', 'Test email', '', '', '', list.join(', ')]);
  return { ok: true, sent: list, quota: mailQuota_() };
}

function mailQuota_() { try { return MailApp.getRemainingDailyQuota(); } catch (e) { return null; } }

/* ── reading the sensors ─────────────────────────────────────────────── */

// → { temp (°F), at (ms) } for the newest reading, or throws a readable error.
function readSensor_(s, token, tz, now) {
  if (s.source === 'licor') return readLicor_(s, token, now);
  if (s.source === 'newa') return readNewa_(s, tz, now);
  if (s.source === 'nws') return readNws_(s);
  throw new Error('Unknown source: ' + s.source);
}

// LI-COR Cloud. The id is "loggerSerial|sensorSerial". The query is BlightCast's,
// the form verified live against LI-COR (08-10): deviceSerialNumber +
// sensorSerialNumber + startTime/endTime in ms. (loggers= / sensors= /
// start_date_time= is answered 400 — found on the first real test, 10-01.)
function readLicor_(s, token, now) {
  if (!token) throw new Error('No LI-COR token saved');
  var parts = String(s.id).split('|');
  var q = 'deviceSerialNumber=' + encodeURIComponent(parts[0]) + '&sensorSerialNumber=' + encodeURIComponent(parts[1] || '') +
    '&startTime=' + Math.floor(now - 3 * 3600000) + '&endTime=' + Math.floor(now);
  var r = fetch_('https://api.licor.cloud/v2/data?' + q, { headers: { Authorization: 'Bearer ' + token } });
  if (r.code === 401 || r.code === 403) throw new Error('LI-COR refused the token');
  if (r.code !== 200) throw new Error('LI-COR answered ' + r.code + why_(r.text));
  return licorLatest(JSON.parse(r.text), parts[1] || '');
}
// Pure: /v2/data reply → the newest temperature of one sensor, in °F.
function licorLatest(reply, serial) {
  var best = null;
  var base = String(serial).split('-')[0];
  ((reply && reply.sensors) || []).forEach(function (sn) {
    var full = String(sn.sensorSerialNumber || '');
    if (full !== serial && full.split('-')[0] !== base) return;
    (sn.data || []).forEach(function (m) {
      if (!/^temperature$/i.test(String(m.measurementType || ''))) return;
      var isC = /c/i.test(m.units || '') && !/f/i.test(m.units || '');
      (m.records || []).forEach(function (rec) {
        // a blank is NOT 0 — Number('') is 0, and 0 °C would read as a frost
        if (!rec || rec[1] == null || rec[1] === '' || !isFinite(Number(rec[1]))) return;
        var t = Number(rec[0]);
        if (!best || t > best.at) best = { at: t, temp: isC ? Number(rec[1]) * 9 / 5 + 32 : Number(rec[1]) };
      });
    });
  });
  if (!best) throw new Error('No temperature from this LI-COR sensor in the last 3 hours');
  return best;
}

// A LI-COR sensor's last few days as hourly lows — the app's station
// scorecard compares each station's night lows with your own sensor's. The
// token stays here; only temperatures go back.
function historyAction_(body, now) {
  var token = getProp_('LICOR_TOKEN');
  if (!token) return { ok: false, error: 'No LI-COR token saved.' };
  var parts = String(body.id || '').split('|');
  var days = Math.min(14, Math.max(1, Number(body.days) || 7));
  var q = 'deviceSerialNumber=' + encodeURIComponent(parts[0]) + '&sensorSerialNumber=' + encodeURIComponent(parts[1] || '') +
    '&startTime=' + Math.floor(now - days * 86400000) + '&endTime=' + Math.floor(now);
  var r = fetch_('https://api.licor.cloud/v2/data?' + q, { headers: { Authorization: 'Bearer ' + token } });
  if (r.code !== 200) return { ok: false, error: 'LI-COR answered ' + r.code + why_(r.text) };
  return { ok: true, points: licorHourlyLows(JSON.parse(r.text), parts[1] || '') };
}
// Pure: /v2/data reply → [[hourStartMs, lowest °F in that hour], …] oldest first.
function licorHourlyLows(reply, serial) {
  var byHour = {};
  var base = String(serial).split('-')[0];
  ((reply && reply.sensors) || []).forEach(function (sn) {
    var full = String(sn.sensorSerialNumber || '');
    if (full !== serial && full.split('-')[0] !== base) return;
    (sn.data || []).forEach(function (m) {
      if (!/^temperature$/i.test(String(m.measurementType || ''))) return;
      var isC = /c/i.test(m.units || '') && !/f/i.test(m.units || '');
      (m.records || []).forEach(function (rec) {
        if (!rec || rec[1] == null || rec[1] === '' || !isFinite(Number(rec[1]))) return;
        var h = Math.floor(Number(rec[0]) / 3600000) * 3600000;
        var v = isC ? Number(rec[1]) * 9 / 5 + 32 : Number(rec[1]);
        if (!(h in byHour) || v < byHour[h]) byHour[h] = v;
      });
    });
  });
  return Object.keys(byHour).map(Number).sort(function (a, b) { return a - b; }).map(function (h) { return [h, Math.round(byHour[h] * 10) / 10]; });
}

// Every temperature sensor on the LI-COR account, for the app's picker.
function licorAction_(body) {
  if (body.clear) { delProp_('LICOR_TOKEN'); return { ok: true, hasLicor: false, sensors: [] }; }
  var token = String(body.token || '').trim() || getProp_('LICOR_TOKEN');
  if (!token) return { ok: false, error: 'Paste your LI-COR Cloud token first.' };
  var r = fetch_('https://api.licor.cloud/v2/devices', { headers: { Authorization: 'Bearer ' + token } });
  if (r.code === 401 || r.code === 403) return { ok: false, error: 'LI-COR refused that token — copy it again from LI-COR Cloud (Account → API tokens).' };
  if (r.code !== 200) return { ok: false, error: 'LI-COR answered ' + r.code + ' — try again in a minute.' };
  var sensors = licorSensors(JSON.parse(r.text));
  if (String(body.token || '').trim()) setProp_('LICOR_TOKEN', token);   // only a token that worked is kept
  return { ok: true, hasLicor: true, sensors: sensors };
}
// Pure: /v2/devices → [{ id: "logger|sensor", logger, loggerName, serial, units }]
function licorSensors(reply) {
  var out = [];
  ((reply && reply.devices) || []).forEach(function (d) {
    (d.sensors || []).forEach(function (sn) {
      var full = String(sn.sensorSerialNumber || '');
      if (!full || !/^temperature$/i.test(String(sn.measurementType || ''))) return;
      out.push({ id: String(d.deviceSerialNumber) + '|' + full, logger: String(d.deviceSerialNumber || ''),
        loggerName: String(d.deviceName || ''), serial: full, label: String(sn.label || sn.name || ''), units: String(sn.units || '') });
    });
  });
  return out;
}

// NEWA (Cornell). The id is the station id with its network, e.g. "ude njwx".
// stnHrly wants the station's clock: from yesterday 00 to the current hour —
// an hour in its future is refused, so on a 400 it asks again an hour earlier.
function readNewa_(s, tz, now) {
  for (var back = 0; back < 2; back++) {
    var end = new Date(now - back * 3600000);
    var payload = { sid: String(s.id), sdate: Utilities.formatDate(new Date(now - 86400000), tz, 'yyyyMMdd') + '00', edate: Utilities.formatDate(end, tz, 'yyyyMMddHH') };
    var r = fetch_('https://hrly.nrcc.cornell.edu/stnHrly', { method: 'post', contentType: 'application/json', payload: JSON.stringify(payload) });
    if (r.code === 400 && back === 0) continue;
    if (r.code !== 200) throw new Error('NEWA answered ' + r.code);
    return newaLatest(JSON.parse(r.text), tzOffsetMin_(tz, now));
  }
  throw new Error('NEWA refused the time window');
}
// Pure: stnHrly reply → the newest temperature (°F). Its hours are the
// station's local clock; offsetMin turns them into real time.
function newaLatest(reply, offsetMin) {
  var rows = (reply && (reply.hrlyData || reply.data)) || [];
  var f = (reply && (reply.hrlyFields || reply.fields)) || ['date', 'flags', 'prcp', 'temp'];
  var iTemp = f.indexOf('temp');
  var best = null;
  rows.forEach(function (row) {
    if (!row || iTemp < 0) return;
    var v = String(row[iTemp] == null ? '' : row[iTemp]).trim();
    if (!v || !isFinite(Number(v)) || /^(m|nan|na|null|-)$/i.test(v)) return;
    var d = String(row[0]), m = d.match(/^(\\d{4})-?(\\d{2})-?(\\d{2})[T ]?(\\d{2})/);
    if (!m) return;
    var at = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4]) - (offsetMin || 0) * 60000;
    if (!best || at > best.at) best = { at: at, temp: Number(v) };
  });
  if (!best) throw new Error('No temperature from this NEWA station in the last day');
  return best;
}

// National Weather Service (api.weather.gov). The id is the station, e.g. "KMIV".
function readNws_(s) {
  var r = fetch_('https://api.weather.gov/stations/' + encodeURIComponent(s.id) + '/observations?limit=6',
    { headers: { Accept: 'application/geo+json', 'User-Agent': 'TempAlert (nursery temperature alerts)' } });
  if (r.code !== 200) throw new Error('Weather Service answered ' + r.code);
  return nwsLatest(JSON.parse(r.text));
}
// Pure: /observations → the newest reading that HAS a temperature (°F).
// The newest observation often has none yet, so it looks back a few.
function nwsLatest(reply) {
  var best = null;
  ((reply && reply.features) || []).forEach(function (ft) {
    var p = ft && ft.properties;
    if (!p || !p.timestamp || !p.temperature || p.temperature.value == null) return;
    var at = new Date(p.timestamp).getTime();
    if (!isFinite(at)) return;
    var c = Number(p.temperature.value);
    var t = /degF/.test(p.temperature.unitCode || '') ? c : c * 9 / 5 + 32;
    if (!best || at > best.at) best = { at: at, temp: t };
  });
  if (!best) throw new Error('No temperature from this Weather Service station lately');
  return best;
}

function fetch_(url, opt) {
  var o = { muteHttpExceptions: true, followRedirects: true };
  for (var k in opt) o[k] = opt[k];
  var r = UrlFetchApp.fetch(url, o);
  return { code: r.getResponseCode(), text: r.getContentText() };
}

/* ── the Alerts and Settings tabs ─────────────────────────────────────── */

function readConfig_(ss) {
  var cfg = settingsFromValues(valuesOf_(ss, SETTINGS_TAB, 2));
  cfg.sensors = alertsFromValues(valuesOf_(ss, ALERTS, ALERT_HEADERS.length));
  return cfg;
}
function writeConfig_(ss, cfg) {
  var a = alertsToValues(cfg.sensors || []);
  var sh = ensureSheet_(ss, ALERTS);
  sh.clear();
  sh.getRange(1, 1, a.length, ALERT_HEADERS.length).setValues(a);
  sh.setFrozenRows(1);
  var s = settingsToValues(cfg);
  var st = ensureSheet_(ss, SETTINGS_TAB);
  st.clear();
  st.getRange(1, 1, s.length, 2).setValues(s);
  st.setFrozenRows(1);
}
function valuesOf_(ss, name, width) {
  var sh = ss.getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(1, 1, sh.getLastRow(), width).getValues();
}

// Pure: the Alerts tab → sensors, each with its alerts. One row = one alert;
// rows with the same Source + ID are one sensor. A row with no "Alert when"
// is a sensor being watched with no alert yet.
function alertsFromValues(values) {
  var out = [], ix = {};
  var col = function (row, i) { return String(row[i] == null ? '' : row[i]).trim(); };
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    var source = SOURCE_FROM_LABEL[col(row, 1).toLowerCase()] || col(row, 1).toLowerCase();
    var id = col(row, 2);
    if (!id || !SOURCES[source]) continue;
    var key = source + ':' + id;
    if (!(key in ix)) { ix[key] = out.length; out.push({ name: col(row, 0) || id, source: source, id: id, alerts: [], backup: null }); }
    var s = out[ix[key]];
    // the backup may be written on any of the sensor's rows — the first one counts
    var bSource = SOURCE_FROM_LABEL[col(row, 8).toLowerCase()] || col(row, 8).toLowerCase(), bId = col(row, 9);
    if (!s.backup && bId && SOURCES[bSource] && !(bSource === source && bId === id)) s.backup = { name: col(row, 7) || bId, source: bSource, id: bId };
    var when = col(row, 3).toLowerCase();
    when = /below|under|≤|<|cold|frost/.test(when) ? 'below' : (/above|over|≥|>|hot|heat/.test(when) ? 'above' : '');
    var temp = col(row, 4);
    if (!when || temp === '' || !isFinite(Number(temp))) continue;
    s.alerts.push({ when: when, temp: Number(temp), emails: cleanEmails(col(row, 5)), on: !/^(no|false|off|0)$/i.test(col(row, 6)) });
  }
  return out;
}

// Pure: sensors → the Alerts tab (header row first).
function alertsToValues(sensors) {
  var out = [ALERT_HEADERS.slice()];
  (sensors || []).forEach(function (s) {
    if (!s || !s.id || !SOURCES[s.source]) return;
    var base = [safe_(s.name || s.id), SOURCES[s.source], safe_(String(s.id))];
    var b = s.backup && s.backup.id && SOURCES[s.backup.source] && !(s.backup.source === s.source && String(s.backup.id) === String(s.id)) ? s.backup : null;
    var backup = b ? [safe_(b.name || b.id), SOURCES[b.source], safe_(String(b.id))] : ['', '', ''];
    var alerts = (s.alerts || []).filter(validAlert_);
    if (!alerts.length) out.push(base.concat(['', '', '', ''], backup));
    alerts.forEach(function (a) {
      out.push(base.concat([a.when === 'below' ? 'At or below' : 'At or above', Number(a.temp),
        safe_(cleanEmails(a.emails).join(', ')), a.on === false ? 'No' : 'Yes'], backup));
    });
  });
  return out;
}

function settingsFromValues(values) {
  var cfg = {};
  SETTINGS.forEach(function (s) { cfg[s[0]] = s[2]; });
  for (var r = 1; r < values.length; r++) {
    var label = String(values[r][0] == null ? '' : values[r][0]).trim().toLowerCase(), v = values[r][1];
    SETTINGS.forEach(function (s) {
      if (label !== s[1].toLowerCase()) return;
      if (typeof s[2] === 'number') { var n = Number(v); if (v !== '' && isFinite(n)) cfg[s[0]] = n; }
      else if (typeof s[2] === 'boolean') cfg[s[0]] = !/^(no|false|off|0)$/i.test(String(v).trim());
      else cfg[s[0]] = String(v == null ? '' : v).trim();
    });
  }
  return cfg;
}
function settingsToValues(cfg) {
  var out = [['Setting', 'Value']];
  SETTINGS.forEach(function (s) {
    var v = cfg[s[0]] == null ? s[2] : cfg[s[0]];
    if (typeof s[2] === 'boolean') v = v === false ? 'No' : 'Yes';
    else if (typeof s[2] === 'number') v = isFinite(Number(v)) ? Number(v) : s[2];
    else v = safe_(v);
    out.push([s[1], v]);
  });
  return out;
}

// Pure: "a@x.com, b@y.org; c@z" (or a list) → the valid addresses, once each.
function cleanEmails(v) {
  var parts = Array.isArray(v) ? v : String(v || '').split(/[\\s,;]+/);
  var out = [];
  parts.forEach(function (p) {
    var m = String(p || '').trim().toLowerCase();
    if (/^[^\\s@<>()]+@[^\\s@<>()]+\\.[a-z]{2,}$/.test(m) && out.indexOf(m) < 0) out.push(m);
  });
  return out;
}

// Readings + alert states for the app (no addresses — counts only).
function statusOf_(cfg, state, props) {
  return cfg.sensors.map(function (s) {
    var st = state[sensorKey(s)] || {};
    return {
      key: sensorKey(s), name: s.name, source: s.source, id: s.id,
      temp: st.temp == null ? null : Math.round(st.temp * 10) / 10, at: st.at || null, checked: st.checked || null,
      stale: !!st.stale, error: st.error || '',
      backup: s.backup ? { name: s.backup.name, source: s.backup.source, id: s.backup.id } : null,
      onBackup: st.from === 'backup' && !!s.backup,
      reliability: reliability(parse_((props || {})['REL ' + sensorKey(s)], [])),
      alerts: (s.alerts || []).map(function (a) {
        return { when: a.when, temp: a.temp, on: a.on !== false, people: a.emails.length, state: (st.rules || {})[ruleKey(a)] || 'ok' };
      }),
    };
  });
}

/* ── the 15-minute trigger ───────────────────────────────────────────── */

function isChecking_() {
  return ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'checkAll'; });
}
function setChecking_(on) {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'checkAll') ScriptApp.deleteTrigger(t); });
  if (on) ScriptApp.newTrigger('checkAll').timeBased().everyMinutes(CHECK_EVERY_MIN).create();
}

/* ── small helpers ────────────────────────────────────────────────────── */

function log_(ss, row) {
  var sh = ensureSheet_(ss, LOG, LOG_HEADERS);
  sh.getRange(sh.getLastRow() + 1, 1, 1, LOG_HEADERS.length).setValues([row.map(function (v) { return typeof v === 'string' ? safe_(v) : v; })]);
}
function ensureSheet_(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers) { sheet.getRange(1, 1, 1, headers.length).setValues([headers]); sheet.setFrozenRows(1); }
  }
  return sheet;
}
// each sensor's state from its own property ("ST <key>"); a sheet set up
// before 10-02 kept them all in one STATE property — read that as a fallback
function readState_(cfg, props) {
  props = props || PropertiesService.getScriptProperties().getProperties();
  var legacy = parse_(props.STATE, {});
  var out = {};
  cfg.sensors.forEach(function (s) {
    var k = sensorKey(s);
    var v = parse_(props['ST ' + k], null) || legacy[k] || null;
    if (v) out[k] = v;
  });
  return out;
}
function tz_(ss) { return (ss.getSpreadsheetTimeZone && ss.getSpreadsheetTimeZone()) || Session.getScriptTimeZone() || 'America/New_York'; }
// minutes east of UTC on that clock, e.g. -240 for EDT
function tzOffsetMin_(tz, now) {
  var z = Utilities.formatDate(new Date(now), tz, 'Z');
  var m = String(z).match(/^([+-])(\\d{2})(\\d{2})$/);
  return m ? (m[1] === '-' ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3])) : 0;
}
// the service's own words on an error, briefly — so a failure says WHY
function why_(text) { var s = String(text || '').replace(/\\s+/g, ' ').trim().slice(0, 160); return s ? ': ' + s : ''; }
function checkKey_(key) {
  key = String(key || '');
  if (key.length < 4) return { ok: false, error: 'The setup password needs at least 4 characters.' };
  var stored = getKey_();
  if (stored && stored !== key) return { ok: false, error: 'That is not the setup password for this sheet.' };
  return { ok: true, first: !stored };
}
// Anything typed that starts like a formula is written as text, never run.
function safe_(v) {
  var s = v == null ? '' : String(v).slice(0, 2000);
  return /^[=+\\-@]/.test(s) ? "'" + s : s;
}
function num_(v) { var n = Number(v); return (v === '' || v == null || isNaN(n)) ? '' : Math.round(n * 10) / 10; }
function getProp_(k) { return PropertiesService.getScriptProperties().getProperty(k); }
function setProp_(k, v) { PropertiesService.getScriptProperties().setProperty(k, v); }
function delProp_(k) { PropertiesService.getScriptProperties().deleteProperty(k); }
function getKey_() { return getProp_('SETUP_KEY') || ''; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
`,at=`{
  "timeZone": "America/New_York",
  "runtimeVersion": "V8",
  "exceptionLogging": "STACKDRIVER",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.currentonly",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/script.send_mail",
    "https://www.googleapis.com/auth/script.scriptapp"
  ],
  "webapp": {
    "executeAs": "USER_DEPLOYING",
    "access": "ANYONE_ANONYMOUS"
  }
}
`,ot={class:`stack setup`},st={key:0,class:`notice`},ct={class:`panel stack`},lt={class:`steps-list`,type:`a`},ut={class:`row`},dt={class:`script-box`},ft={class:`script-box`},pt={class:`warn-box`},mt={class:`steps-list`},ht={class:`panel stack`},gt={class:`field`},_t=[`placeholder`,`onKeydown`],vt={class:`row`},yt=[`disabled`],bt={key:0,class:`small`},xt={key:0,class:`notice notice-alert`,style:{margin:`0`}},St={class:`panel stack`},Ct={class:`field`},wt=[`onKeydown`],Tt={class:`muted`},Et={class:`row`},Dt=[`disabled`],Ot={key:0,class:`small`},kt={key:0,class:`muted small`,style:{margin:`0`}},At={key:1,class:`notice notice-alert`,style:{margin:`0`}},jt={class:`panel stack`,"data-step":`sensors`},Mt={key:0,class:`muted small`,style:{margin:`0`}},Nt={class:`field`},Pt=[`placeholder`],Ft=[`open`],It={class:`small muted`},Lt={key:0,class:`small`},Rt={class:`field`},zt=[`disabled`],Bt={key:1,class:`notice notice-alert`,style:{margin:`0`}},Vt={key:2,class:`muted small`},Ht={key:3,class:`pick-list`},Ut={class:`muted`},Wt=[`disabled`,`onClick`],Gt=[`open`],Kt={class:`row`},qt=[`placeholder`,`aria-label`,`onKeydown`],Jt=[`disabled`],Yt={key:0,class:`muted small`,style:{margin:`0`}},Xt={key:1,class:`pick-list`},Zt=[`onClick`],Qt={class:`small`,style:{margin:`.4rem 0 0`}},$t={class:`pick-list`,"data-list":`newa`},en={class:`muted`},tn=[`disabled`,`onClick`],nn={class:`pick-list`,"data-list":`nws`},rn={class:`muted`},an=[`disabled`,`onClick`],on=[`data-sensor`],sn={class:`row`,style:{"align-items":`flex-end`}},cn={class:`field`,style:{flex:`1`,"min-width":`12rem`}},ln=[`onUpdate:modelValue`],un=[`onClick`],dn={class:`muted`},fn={class:`row backup-line`,"data-backup-line":``},pn={key:0,class:`small`},mn={class:`muted`},hn={key:1,class:`small muted`},gn=[`onClick`],_n=[`onClick`],vn={key:0,class:`notice notice-supply backup-done`,"data-backup-done":``},yn={key:1,class:`backup-pick stack`,"data-backup-pick":``},bn={class:`small`,style:{margin:`0`}},xn={key:0,class:`pick-list`},Sn=[`data-choice`],Cn={class:`muted`},wn=[`onClick`],Tn={key:1,class:`small muted`,style:{margin:`0`}},En={class:`row`},Dn=[`placeholder`,`aria-label`,`onKeydown`],On=[`disabled`],kn={key:2,class:`pick-list`},An=[`onClick`],jn={class:`small muted`,style:{margin:`0`}},Mn={class:`row`},Nn={class:`seg`,role:`group`},Pn=[`onClick`],Fn=[`onClick`],In={class:`temp-in`},Ln=[`onUpdate:modelValue`],Rn={class:`check-chip`},zn=[`onUpdate:modelValue`],Bn=[`onClick`],Vn={class:`field`},Hn=[`onUpdate:modelValue`,`placeholder`],Un=[`onClick`],Wn={class:`add-box`},Gn={class:`field`},Kn={class:`muted`},qn={class:`field`},Jn={class:`muted`},Yn={class:`check-chip`},Xn={class:`row save-row`},Zn=[`disabled`],Qn={key:0,class:`small`},$n={key:1,class:`small muted`},er={key:0,class:`notice notice-alert`,style:{margin:`0`}},tr={class:`panel stack`},nr={class:`small muted`,style:{margin:`0`}},rr={style:{margin:`0`}},ir={class:`row`},ar=[`disabled`],or=[`disabled`],sr=[`disabled`],cr={key:0,class:`muted small`,style:{margin:`0`}},lr={key:1,class:`notice notice-alert`,style:{margin:`0`}},ur={class:`panel stack`,id:`notify`},dr={style:{margin:`0`}},fr={class:`row`},pr=[`disabled`],mr={class:`row`},hr=[`disabled`],gr={key:0,class:`small muted`,style:{margin:`0`}},_r={key:1,class:`notice notice-supply`,style:{margin:`0`}},vr={key:2,class:`notice notice-alert`,style:{margin:`0`}},yr={style:{margin:`.6rem 0 0`}},br={key:1,class:`panel stack`},xr={class:`small muted`,style:{margin:`0`}},Sr=[`src`],Cr={class:`share-url`},wr={class:`row`},Tr=[`href`],Er=ge({__name:`setup`,setup(te){let{t:T,conn:E,view:D,owner:O,demo:oe,connect:ce,disconnect:le,unlock:ue,save:pe,setChecking:ge,checkNow:_e,licor:ve,test:ye,setDemo:be}=C(),A=h(``);async function xe(e,t){try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),t.remove()}A.value=t,setTimeout(()=>{A.value===t&&(A.value=``)},2500)}let j=h(``),M=h(``),N=h(``);s(E,e=>{e&&!j.value&&(j.value=e.url)},{immediate:!0});async function Se(){M.value=``,N.value=`connect`;try{await ce(j.value)}catch(e){M.value=e.message}finally{N.value=``}}let P=h(``),F=h(``);async function Ce(){F.value=``,N.value=`unlock`;try{await ue(P.value)}catch(e){F.value=e.message}finally{N.value=``}}let I=h(null),we=h(!1),Te=e=>({title:e.title||``,staleMinutes:e.staleMinutes??120,margin:e.margin??2,sendClear:e.sendClear!==!1,sensors:(e.sensors||[]).map(e=>({...e,alerts:(e.alerts||[]).map(e=>({when:e.when,temp:e.temp,on:e.on!==!1,emailsText:(e.emails||[]).join(`, `)}))}))}),Ee=h(!0);s(()=>O.value?.config,(e,t)=>{e&&(t||(Ee.value=!(e.sensors||[]).length),I.value=Te(e),we.value=!1)},{immediate:!0}),s(I,(e,t)=>{t&&e===t&&(we.value=!0)},{deep:!0});let L=(e,t)=>!!I.value?.sensors.some(n=>n.source===e&&n.id===t);function R(e,t,n){I.value&&!L(e,t)&&I.value.sensors.push({name:n,source:e,id:t,alerts:[{when:`below`,temp:32,on:!0,emailsText:``}]})}let De=e=>{z.value===I.value.sensors[e]&&(z.value=null),I.value.sensors.splice(e,1)},z=h(null),B=h(null),V=h({});function Oe(e){z.value=z.value===e?null:e,B.value=null,z.value&&a(()=>document.querySelector(`[data-backup-pick]`)?.scrollIntoView({behavior:`smooth`,block:`start`}))}function ke(e,t){!e||e.source===t.source&&e.id===t.id||(e.backup={source:t.source,id:t.id,name:t.name},z.value=null,B.value=e)}function Ae(e){let t={...V.value};for(let n of e)t[n.source+`:`+n.id]=n;V.value=t}function je(e){let t=[],n=new Set([e.source+`:`+e.id]),r=e=>{let r=e.source+`:`+e.id;n.has(r)||(n.add(r),t.push({...e,key:r,...V.value[r]?{score:V.value[r].score,word:V.value[r].word}:{}}))};for(let e of I.value?.sensors||[])r({source:e.source,id:e.id,name:e.name||k(e),where:T(`onSheet`)});for(let e of U.value||[])r({source:`licor`,id:e.id,name:Ie(e),where:`LI-COR`});for(let e of q.value?.nws||[])r({source:`nws`,id:e.id,name:e.name,where:e.id,miles:e.miles});for(let e of q.value?.newa||[])r({source:`newa`,id:e.sid,name:e.name,where:`NEWA`,miles:e.miles});return t.sort((e,t)=>(t.score??-1)-(e.score??-1)||(e.miles??0)-(t.miles??0))}let Me=u(()=>(I.value?.sensors||[]).filter(e=>e.source===`licor`).map(e=>({id:e.id,name:e.name||k(e)}))),Ne=e=>e.alerts.push({when:e.alerts.some(e=>e.when===`below`)?`above`:`below`,temp:e.alerts.some(e=>e.when===`below`)?95:32,on:!0,emailsText:``}),H=h(``),U=h(null),W=h(``);async function Pe(){W.value=``,N.value=`licor`;try{let e=await ve(H.value.trim());U.value=e.sensors,H.value=``,D.value&&={...D.value,hasLicor:!0}}catch(e){W.value=e.message}finally{N.value=``}}async function Fe(){N.value=`licor`;try{await ve(``,!0),U.value=null,D.value&&={...D.value,hasLicor:!1}}catch(e){W.value=e.message}finally{N.value=``}}let Ie=e=>[e.loggerName,e.label].filter(Boolean).join(` · `)||e.serial,G=h(``),K=h(null),q=h(null),J=h(``),Re=null;async function Y(){J.value=``,q.value=null,N.value=`town`;try{let e=await fetch(fe(G.value.trim())).then(e=>e.json());K.value=re(e),K.value.length?K.value.length===1&&await ze(K.value[0]):J.value=T(`noPlaces`)}catch{J.value=T(`noPlaces`)}finally{N.value=``}}async function ze(e){N.value=`town`,J.value=``;let[t,n]=await Promise.all([(async()=>{try{return Re||=ie(await fetch(ae).then(e=>e.json())),se(Re,e.lat,e.lon,6)}catch{return[]}})(),(async()=>{try{let t=(await fetch(ne(e.lat,e.lon)).then(e=>e.json()))?.properties?.observationStations;return t?se(me(await fetch(t).then(e=>e.json())),e.lat,e.lon,6):[]}catch{return[]}})()]);q.value={...e,newa:t,nws:n},K.value=null,N.value=``}let Be=h(``),Ve=h(!1),He=l().app.baseURL||`/`,X=u(()=>E.value?location.origin+He+`?`+S(E.value):``),Ue=u(()=>{let e=[];for(let t of I.value?.sensors||[])for(let n of t.alerts)for(let r of de(n.emailsText))e.push(t.name+`: `+r);return e});async function We(){Be.value=``,Ve.value=!1,N.value=`save`;let e=I.value,t={title:e.title.trim(),staleMinutes:Number(e.staleMinutes)||120,margin:Number(e.margin)||0,sendClear:e.sendClear,appUrl:X.value,sensors:e.sensors.map(e=>({name:(e.name||``).trim()||k(e),source:e.source,id:e.id,backup:e.backup&&e.backup.id?{source:e.backup.source,id:e.backup.id,name:e.backup.name||e.backup.id}:null,alerts:e.alerts.filter(e=>e.temp!==``&&e.temp!=null&&isFinite(+e.temp)).map(e=>({when:e.when,temp:+e.temp,on:e.on,emails:he(e.emailsText)}))}))};try{await pe(t),Ve.value=!0,B.value=null,setTimeout(()=>{Ve.value=!1},4e3)}catch(e){Be.value=e.message}finally{N.value=``}}let Z=h(``);async function Ge(e,t){Z.value=``,N.value=t;try{await e()}catch(e){Z.value=e.message}finally{N.value=``}}let Q=h(``),Ke=h(``),qe=h(``);async function Je(e){Ke.value=``,qe.value=``,N.value=`test`;try{let t=await ye(e?he(Q.value):null);Ke.value=T(`testSent`)+` `+t.sent.join(`, `)}catch(e){qe.value=e.message}finally{N.value=``}}let $=h(``);s(X,async e=>{$.value=e?await rt.toDataURL(e,{margin:2,width:480,errorCorrectionLevel:`M`}):``},{immediate:!0});let Ye=h(!1);async function Xe(){try{await navigator.clipboard.writeText(X.value),Ye.value=!0,setTimeout(()=>{Ye.value=!1},2500)}catch{}}let Ze=!!navigator.share,Qe=()=>navigator.share({title:T(`app`),url:X.value}).catch(()=>{});return(a,s)=>{let l=Le,u=x,h=ee;return o(),g(`div`,ot,[_(`h1`,null,m(d(T)(`setupTitle`)),1),d(oe)?(o(),g(`p`,st,[r(m(d(T)(`demoOn`))+` `,1),_(`button`,{class:`linkish`,onClick:s[0]||=e=>d(be)(!1)},m(d(T)(`demoOff`)),1)])):e(``,!0),_(`section`,ct,[_(`h2`,null,m(d(T)(`s1`)),1),_(`ol`,lt,[_(`li`,null,m(d(T)(`s1a`)),1),_(`li`,null,m(d(T)(`s1b`)),1),_(`li`,null,m(d(T)(`s1c`)),1),_(`li`,null,m(d(T)(`s1d`)),1),_(`li`,null,m(d(T)(`s1e`)),1),_(`li`,null,m(d(T)(`s1f`)),1)]),_(`div`,ut,[_(`button`,{class:`btn btn-primary`,"data-copy":`script`,onClick:s[1]||=e=>xe(d(`/**
 * Temp Alert — the Google Apps Script that watches your temperature sensors
 * and emails people when one goes too cold or too hot.
 *
 * WHAT IT DOES
 *   · Every 15 minutes it reads the latest temperature from each sensor on
 *     the "Alerts" tab — a LI-COR sensor (with your LI-COR Cloud token), a
 *     NEWA weather station, or a National Weather Service station.
 *   · Each sensor can have its own alerts: "at or below 32 °F → email these
 *     people", "at or above 95 °F → email those people".
 *   · It emails ONCE when a reading crosses the line, and once more when it
 *     is back to normal (a couple of degrees past the line, so a reading
 *     hovering right at 32 does not send twenty emails).
 *   · If a sensor stops reporting, it says so — a dead sensor must never
 *     look like a quiet night. (NEWA stations post each hour late, so they
 *     count as "not reporting" only after 4 hours.)
 *   · A reading that jumps more than 15 °F in an hour is held back until a
 *     later reading agrees — a station sending one bad number does not
 *     email anyone. Held jumps are written on the "Alert log" tab.
 *   · A sensor can have a BACKUP (another station or sensor). While the main
 *     one is not reporting, its alerts run on the backup's readings — one
 *     email says so when it switches, one more when the main one is back.
 *   · It keeps a 7-day tally of how often each sensor answered on time — the
 *     reliability shown on the app's Readings card.
 *   · Every email it sends is written on the "Alert log" tab.
 *
 * WHAT IT CAN REACH (the permissions are set in appsscript.json, which the
 * app's Setup page gives you too):
 *   · "spreadsheets.currentonly" — THIS spreadsheet only.
 *   · "script.external_request" — to read the weather stations and LI-COR.
 *   · "script.send_mail" — to send the alert emails, from your address.
 *   · "script.scriptapp" — to run itself every 15 minutes while you sleep.
 *   It never reads your email, your Drive or any other sheet.
 *
 * HOW TO INSTALL (once — the app's Setup page walks through it)
 *   1. In a new Google Sheet: Extensions → Apps Script. Delete what is there,
 *      paste this whole file, click Save.
 *   2. Project Settings (gear) → tick "Show appsscript.json manifest file in
 *      editor". Back in the Editor, open appsscript.json, replace everything
 *      in it with the app's appsscript.json, click Save.
 *   3. Deploy → New deployment → type "Web app". Execute as: Me. Who has
 *      access: Anyone. Click Deploy and allow the permissions. Google warns
 *      "This app hasn't been verified" — normal for a script in your own
 *      sheet: Advanced → Go to (project) (unsafe) → Allow.
 *      Copy the "Web app URL" (it ends in /exec) into the app's Setup page.
 *   "Anyone" lets the app (and your crew's phones) read the latest readings
 *   without a Google sign-in. The email addresses and the LI-COR token are
 *   never sent to anyone without the setup password.
 *
 * SETUP PASSWORD: the first time the app saves, the password typed there
 * becomes the setup password. To reset it: Project Settings (gear) → Script
 * properties → delete SETUP_KEY.
 *
 * WITHOUT THE APP: pick "startChecking" in the function list at the top of
 * the editor and click Run — that turns on the 15-minute check. "stopChecking"
 * turns it off; "sendTestEmail" sends a test to everyone on the Alerts tab.
 *
 * After editing this code, publish the change with Deploy → Manage
 * deployments → edit (pencil) → Version: New version → Deploy.
 */

var ALERTS = 'Alerts';
var SETTINGS_TAB = 'Settings';
var LOG = 'Alert log';
var CHECK_EVERY_MIN = 15;
var SUBJECT_TAG = '[Temp Alert]';
var JUMP_F = 15;            // °F in an hour — more than that is held until a later reading agrees
var NEWA_STALE_MIN = 240;   // NEWA stations count as "not reporting" only after 4 hours

// the last three columns are optional: a backup read only while this sensor is not reporting
var ALERT_HEADERS = ['Sensor', 'Source', 'Station / sensor ID', 'Alert when', 'Temperature (°F)', 'Email to', 'On',
  'Backup name', 'Backup source', 'Backup station / sensor ID'];
var REL_DAYS = 7;           // the reliability tally on the Readings card covers the last 7 days
var LOG_HEADERS = ['Sent', 'Sensor', 'What happened', 'Reading (°F)', 'Reading time', 'Alert at (°F)', 'Emailed to'];
// [key, label on the Settings tab, default]
var SETTINGS = [
  ['title', 'Title', ''],
  ['staleMinutes', 'Not reporting after (minutes)', 120],
  ['margin', 'Back to normal margin (°F)', 2],
  ['sendClear', 'Send back-to-normal emails', true],
  ['appUrl', 'Status page', ''],
];
var SOURCES = { licor: 'LI-COR', newa: 'NEWA station', nws: 'Weather Service station' };
var SOURCE_FROM_LABEL = { 'li-cor': 'licor', 'licor': 'licor', 'newa station': 'newa', 'newa': 'newa',
  'weather service station': 'nws', 'nws': 'nws', 'national weather service': 'nws' };

/* ── web app entry points ─────────────────────────────────────────────── */

function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.action === 'ping') return json_({ ok: true });
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    return json_(publicView_(ss));
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    lock.waitLock(25000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var check = checkKey_(body.key);
    if (body.action === 'checkKey') return json_(check);
    if (!check.ok) return json_(check);
    // A sheet with no password yet takes the first one it is given — the
    // owner sets it in the app's Setup right after deploying.
    if (check.first) setProp_('SETUP_KEY', String(body.key));
    if (body.action === 'setup') { writeConfig_(ss, body.config || {}); return json_(ownerView_(ss)); }
    if (body.action === 'load') return json_(ownerView_(ss));
    if (body.action === 'licor') return json_(licorAction_(body));
    if (body.action === 'checking') { setChecking_(!!body.on); return json_(ownerView_(ss)); }
    if (body.action === 'checkNow') { runCheck_(ss, Date.now()); return json_(ownerView_(ss)); }
    if (body.action === 'test') return json_(sendTest_(ss, body.to));
    if (body.action === 'history') return json_(historyAction_(body, Date.now()));
    return json_({ ok: false, error: 'Unknown action.' });
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  } finally {
    try { lock.releaseLock(); } catch (ignore) { /* never acquired */ }
  }
}

// What anyone with the link may see: readings and alert states, never the
// email addresses (a forwarded link must not hand out the crew's addresses).
function publicView_(ss) {
  var cfg = readConfig_(ss);
  var props = PropertiesService.getScriptProperties().getProperties();
  return {
    ok: true, sheetName: ss.getName(), title: cfg.title,
    status: statusOf_(cfg, readState_(cfg, props), props), checking: isChecking_(),
    lastCheck: Number(props.LAST_CHECK || 0) || null,
    hasKey: !!props.SETUP_KEY, hasLicor: !!props.LICOR_TOKEN,
  };
}
function ownerView_(ss) {
  var v = publicView_(ss);
  v.config = readConfig_(ss);
  v.quota = mailQuota_();
  return v;
}

/* ── the check (every 15 minutes) ─────────────────────────────────────── */

// The trigger's entry point. Skips quietly if a check is already running.
function checkAll() {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try { runCheck_(SpreadsheetApp.getActiveSpreadsheet(), Date.now()); } finally { lock.releaseLock(); }
}

// Run from the editor to turn checking on without the app (and to give the
// permissions the first time).
function startChecking() { setChecking_(true); runCheck_(SpreadsheetApp.getActiveSpreadsheet(), Date.now()); }
function stopChecking() { setChecking_(false); }
function sendTestEmail() { return sendTest_(SpreadsheetApp.getActiveSpreadsheet(), null); }

function runCheck_(ss, now) {
  var cfg = readConfig_(ss);
  var props = PropertiesService.getScriptProperties().getProperties();
  var state = readState_(cfg, props);
  var save = {};
  var token = props.LICOR_TOKEN || '';
  var tz = tz_(ss);
  var sent = [];
  var day = localDay_(now, tzOffsetMin_(tz, now));
  cfg.sensors.forEach(function (s) {
    var key = sensorKey(s);
    var pick = readWithBackup_(s, token, tz, now, cfg);
    var out = evaluate(s, pick.reading, state[key] || null, cfg, now);
    out.state.error = String(pick.error || '').slice(0, 300);
    // one small property per sensor: Google caps each at 9 kB, and one
    // shared blob of 30 sensors with error texts would pass that
    save['ST ' + key] = JSON.stringify(out.state);
    out.events.forEach(function (ev) { sent.push(deliver_(ss, cfg, s, ev, tz)); });
    save['REL ' + key] = JSON.stringify(tally(parse_(props['REL ' + key], []), day,
      { onTime: pick.mainOk, held: !!out.state.held && !(state[key] || {}).held, backup: out.state.from === 'backup' }));
  });
  save.LAST_CHECK = String(now);
  PropertiesService.getScriptProperties().setProperties(save);
  if (props.STATE != null) delProp_('STATE');   // the old one-blob state, moved
  return sent;
}

// The main sensor's newest reading — or, while it is not reporting and a
// backup is set, the backup's. mainOk = the main one answered on time.
function readWithBackup_(s, token, tz, now, cfg) {
  var main = null, error = '';
  try { main = readSensor_(s, token, tz, now); } catch (err) { error = String((err && err.message) || err); }
  var mainOk = !!(main && isFinite(main.temp) && now - main.at <= staleMs_(s.source, cfg));
  var out = { reading: main ? { temp: main.temp, at: main.at, from: 'main' } : null, error: error, mainOk: mainOk };
  if (!mainOk && s.backup) {
    try {
      var b = readSensor_(s.backup, token, tz, now);
      if (b && isFinite(b.temp) && now - b.at <= staleMs_(s.backup.source, cfg)) out.reading = { temp: b.temp, at: b.at, from: 'backup' };
    } catch (err) { out.error = (error ? error + ' · ' : '') + 'Backup: ' + String((err && err.message) || err); }
  }
  return out;
}

// how old a reading may be before its source counts as "not reporting"
function staleMs_(source, cfg) {
  var ms = Math.max(15, Number(cfg.staleMinutes) || 120) * 60000;
  // NEWA posts each hour late — its newest reading is often 2–3 hours old
  return source === 'newa' ? Math.max(ms, NEWA_STALE_MIN * 60000) : ms;
}

/**
 * Pure: the 7-day reliability tally. days = [[day, checks, onTime, held, backup], …]
 * (day = days since 1970 on the sheet's clock), one row per day, oldest dropped.
 */
function tally(days, day, c) {
  var out = (Array.isArray(days) ? days : []).filter(function (d) { return Array.isArray(d) && d[0] > day - REL_DAYS && d[0] <= day; });
  var row = out.filter(function (d) { return d[0] === day; })[0];
  if (!row) { row = [day, 0, 0, 0, 0]; out.push(row); }
  row[1]++;
  if (c.onTime) row[2]++;
  if (c.held) row[3]++;
  if (c.backup) row[4]++;
  return out;
}
/** Pure: the tally → { pct, checks, held, backup, days } for the Readings card */
function reliability(days) {
  var r = { checks: 0, onTime: 0, held: 0, backup: 0, days: 0 };
  (days || []).forEach(function (d) { r.days++; r.checks += d[1]; r.onTime += d[2]; r.held += d[3]; r.backup += d[4]; });
  return r.checks ? { pct: Math.round(100 * r.onTime / r.checks), checks: r.checks, held: r.held, backup: r.backup, days: r.days } : null;
}
function localDay_(ms, offsetMin) { return Math.floor((ms + offsetMin * 60000) / 86400000); }
function parse_(text, dflt) { try { var v = JSON.parse(text || 'null'); return v == null ? dflt : v; } catch (e) { return dflt; } }

/**
 * Pure: one sensor, its newest reading (or null when it could not be read),
 * what we knew last time → the new state and the emails to send.
 *   state = { temp, at, checked, stale, rules: { "below:32": "ok" | "alert" } }
 * A reading counts only while it is younger than staleMinutes; a sensor whose
 * newest reading is older than that (or that never answered) is "not
 * reporting", and its alerts hold their last state until it is back.
 */
function evaluate(sensor, reading, prev, cfg, now) {
  prev = prev || { rules: {}, stale: false };
  var margin = Math.max(0, Number(cfg.margin) || 0);
  var events = [];
  var everyone = recipients_(sensor);

  // A jump bigger than real weather makes (more than JUMP_F an hour) is held
  // back until a LATER reading agrees with it — a station serving a junk 32
  // for one hour, then the real 74 again, must not send two emails (10-01).
  var held = null;
  if (reading && isFinite(reading.temp) && prev.at && isFinite(prev.temp)) {
    var hours = Math.max(1, Math.abs(reading.at - prev.at) / 3600000);
    if (Math.abs(reading.temp - prev.temp) > JUMP_F * hours) {
      var confirmed = prev.held && reading.at > prev.held.at && Math.abs(reading.temp - prev.held.temp) <= JUMP_F;
      if (!confirmed) {
        held = { temp: reading.temp, at: reading.at };
        if (!prev.held) events.push({ type: 'held', to: [], temp: reading.temp, at: reading.at, was: prev.temp });
        reading = null;
      }
    }
  }

  // from = 'main' or 'backup': which one this reading came from
  var prevFrom = prev.from || 'main';
  var last = reading && isFinite(reading.temp) ? reading : (prev.at ? { temp: prev.temp, at: prev.at, from: prevFrom } : null);
  var from = last ? last.from || 'main' : 'main';
  var state = { temp: last ? last.temp : null, at: last ? last.at : null, checked: now, stale: false, rules: {}, held: held, from: from };
  for (var k in prev.rules) state.rules[k] = prev.rules[k];
  var src = from === 'backup' && sensor.backup ? sensor.backup.source : sensor.source;

  if (!last || now - last.at > staleMs_(src, cfg)) {
    state.stale = true;
    if (!prev.stale && everyone.length) events.push({ type: 'stale', to: everyone, temp: state.temp, at: state.at, from: from });
    return { state: state, events: events };
  }
  if (prev.stale && everyone.length) events.push({ type: 'back', to: everyone, temp: last.temp, at: last.at, from: from });
  // the main one stopped and the backup took over (or the main one is back):
  // one email each way, so people know whose readings the alerts now follow
  else if (from !== prevFrom && everyone.length) events.push({ type: from === 'backup' ? 'toBackup' : 'toMain', to: everyone, temp: last.temp, at: last.at, from: from });

  state.rules = {};
  (sensor.alerts || []).forEach(function (a) {
    if (!validAlert_(a)) return;
    var k = ruleKey(a);
    var was = prev.rules[k] || 'ok';
    var t = Number(a.temp), v = last.temp;
    var hit = a.when === 'below' ? v <= t : v >= t;
    var clear = a.when === 'below' ? v >= t + margin : v <= t - margin;
    var now_ = was;
    if (a.on === false) now_ = 'ok';
    else if (was === 'ok' && hit) {
      now_ = 'alert';
      if (a.emails.length) events.push({ type: 'alert', to: a.emails.slice(), alert: a, temp: v, at: last.at, from: from });
    } else if (was === 'alert' && clear) {
      now_ = 'ok';
      // coming back from silence, the "reporting again" email already gives
      // the reading — a second "back to normal" one would just be noise
      if (cfg.sendClear !== false && !prev.stale && a.emails.length) events.push({ type: 'clear', to: a.emails.slice(), alert: a, temp: v, at: last.at, from: from });
    }
    state.rules[k] = now_;
  });
  return { state: state, events: events };
}

function ruleKey(a) { return a.when + ':' + Number(a.temp); }
function sensorKey(s) { return s.source + ':' + s.id; }
function validAlert_(a) { return a && (a.when === 'below' || a.when === 'above') && a.temp !== '' && a.temp != null && isFinite(Number(a.temp)); }
function recipients_(s) {
  var all = [];
  (s.alerts || []).forEach(function (a) { if (a.on !== false) (a.emails || []).forEach(function (m) { if (all.indexOf(m) < 0) all.push(m); }); });
  return all;
}

/* ── emails ───────────────────────────────────────────────────────────── */

// Pure: the subject and text of one email.
function message(sensor, ev, cfg, fmt) {
  var name = sensor.name || sensor.id;
  var f = function (v) { return v == null || !isFinite(v) ? '—' : (Math.round(v * 10) / 10) + '°F'; };
  var when = ev.at ? fmt(ev.at) : 'no reading yet';
  var a = ev.alert || {};
  var bk = sensor.backup ? { name: sensor.backup.name || sensor.backup.id, source: sensor.backup.source, id: sensor.backup.id } : null;
  var viaBackup = !!(bk && ev.from === 'backup');
  var by = viaBackup ? ' (by its backup, ' + bk.name + ')' : '';
  var subject, lead;
  if (ev.type === 'alert' && a.when === 'below') { subject = '🥶 ' + name + ' is ' + f(ev.temp) + ' (at or below ' + f(a.temp) + ')'; lead = name + ' has dropped to ' + f(ev.temp) + by + '.'; }
  else if (ev.type === 'alert') { subject = '🔥 ' + name + ' is ' + f(ev.temp) + ' (at or above ' + f(a.temp) + ')'; lead = name + ' has reached ' + f(ev.temp) + by + '.'; }
  else if (ev.type === 'clear') { subject = '✅ ' + name + ' is back to ' + f(ev.temp); lead = name + ' is back to ' + f(ev.temp) + ' — past the ' + f(a.temp) + ' alert by the margin.'; }
  else if (ev.type === 'stale') {
    subject = '⚠️ ' + name + ' has stopped reporting';
    lead = 'No new reading from ' + name + (bk ? ' or its backup, ' + bk.name + ',' : '') + ' for over ' + Math.round(staleMs_(sensor.source, cfg) / 60000) + ' minutes. Its alerts cannot fire until it reports again — check it.';
  }
  else if (ev.type === 'back') { subject = '✅ ' + name + ' is reporting again (' + f(ev.temp) + ')'; lead = (viaBackup ? bk.name + ', the backup for ' + name + ',' : name) + ' is reporting again.'; }
  else if (ev.type === 'toBackup') { subject = '🔁 ' + name + ' stopped reporting — now watching ' + bk.name; lead = name + ' is not reporting, so its alerts now follow its backup, ' + bk.name + ' (' + f(ev.temp) + '). You will get one more email when ' + name + ' is back.'; }
  else if (ev.type === 'toMain') { subject = '✅ ' + name + ' is reporting again (' + f(ev.temp) + ')'; lead = name + ' is reporting again — its alerts follow it again, not the backup.'; }
  else { subject = 'Test alert'; lead = 'This is a test.'; }
  var lines = [lead, '', 'Reading: ' + f(ev.temp) + ' at ' + when, 'Sensor: ' + name + ' (' + (SOURCES[sensor.source] || sensor.source) + ' ' + sensor.id + ')'];
  if (viaBackup) lines.push('Reading from the backup: ' + bk.name + ' (' + (SOURCES[bk.source] || bk.source) + ' ' + bk.id + ') — ' + name + ' is not reporting');
  if (ev.alert) lines.push('Alert: ' + (a.when === 'below' ? 'at or below ' : 'at or above ') + f(a.temp));
  if (cfg.appUrl) lines.push('', 'Live readings: ' + cfg.appUrl);
  lines.push('', '— Temp Alert' + (cfg.title ? ' · ' + cfg.title : ''));
  return { subject: SUBJECT_TAG + ' ' + subject, body: lines.join('\\n') };
}

function deliver_(ss, cfg, sensor, ev, tz) {
  var fmt = function (ms) { return Utilities.formatDate(new Date(ms), tz, 'EEE MMM d, h:mm a'); };
  if (ev.type === 'held') {   // written down, never emailed
    log_(ss, [new Date(), sensor.name || sensor.id, 'Ignored a jump from ' + num_(ev.was) + ' — waiting for the next reading to agree',
      num_(ev.temp), ev.at ? new Date(ev.at) : '', '', '']);
    return { type: 'held', to: [], subject: '', sent: false };
  }
  var m = message(sensor, ev, cfg, fmt);
  var what = { alert: 'ALERT', clear: 'Back to normal', stale: 'Not reporting', back: 'Reporting again',
    toBackup: 'Switched to the backup' + (sensor.backup ? ' (' + (sensor.backup.name || sensor.backup.id) + ')' : ''), toMain: 'Back on the main sensor' }[ev.type] || ev.type;
  if (ev.from === 'backup' && sensor.backup && ev.type !== 'toBackup') what += ' — via backup ' + (sensor.backup.name || sensor.backup.id);
  var note = '';
  try {
    if (MailApp.getRemainingDailyQuota() < ev.to.length) throw new Error('Google’s daily email limit is used up — not sent');
    MailApp.sendEmail({ to: ev.to.join(','), subject: m.subject, body: m.body, name: 'Temp Alert' });
  } catch (err) { note = ' — NOT SENT: ' + String((err && err.message) || err); }
  log_(ss, [new Date(), sensor.name || sensor.id, what + note, num_(ev.temp), ev.at ? new Date(ev.at) : '',
    ev.alert ? (ev.alert.when === 'below' ? '≤ ' : '≥ ') + ev.alert.temp : '', ev.to.join(', ')]);
  return { type: ev.type, to: ev.to, subject: m.subject, sent: !note };
}

function sendTest_(ss, to) {
  var cfg = readConfig_(ss);
  var list = [];
  if (to && to.length) list = cleanEmails(to);
  else cfg.sensors.forEach(function (s) { recipients_(s).forEach(function (m) { if (list.indexOf(m) < 0) list.push(m); }); });
  if (!list.length) return { ok: false, error: 'No email addresses yet — add people to an alert first.' };
  if (MailApp.getRemainingDailyQuota() < list.length) return { ok: false, error: 'Google’s daily email limit is used up — try tomorrow.' };
  var body = [
    'This is a TEST from Temp Alert' + (cfg.title ? ' (' + cfg.title + ')' : '') + '. Nothing is wrong.',
    '',
    'Real alerts look like this one: the subject starts with ' + SUBJECT_TAG + ', and they come from this same address.',
    'Did your phone buzz or ring for this email? If not, set it up now so a frost alert at 3 am wakes you —',
    'the steps are on the app’s Setup page, step 6' + (cfg.appUrl ? ': ' + cfg.appUrl.replace(/\\/?(\\?.*)?$/, '/setup') : '') + '.',
    '',
    'Sensors watched: ' + cfg.sensors.map(function (s) { return s.name || s.id; }).join(', '),
  ].join('\\n');
  MailApp.sendEmail({ to: list.join(','), subject: SUBJECT_TAG + ' 🧪 Test alert — please check your phone rang', body: body, name: 'Temp Alert' });
  log_(ss, [new Date(), '(test)', 'Test email', '', '', '', list.join(', ')]);
  return { ok: true, sent: list, quota: mailQuota_() };
}

function mailQuota_() { try { return MailApp.getRemainingDailyQuota(); } catch (e) { return null; } }

/* ── reading the sensors ─────────────────────────────────────────────── */

// → { temp (°F), at (ms) } for the newest reading, or throws a readable error.
function readSensor_(s, token, tz, now) {
  if (s.source === 'licor') return readLicor_(s, token, now);
  if (s.source === 'newa') return readNewa_(s, tz, now);
  if (s.source === 'nws') return readNws_(s);
  throw new Error('Unknown source: ' + s.source);
}

// LI-COR Cloud. The id is "loggerSerial|sensorSerial". The query is BlightCast's,
// the form verified live against LI-COR (08-10): deviceSerialNumber +
// sensorSerialNumber + startTime/endTime in ms. (loggers= / sensors= /
// start_date_time= is answered 400 — found on the first real test, 10-01.)
function readLicor_(s, token, now) {
  if (!token) throw new Error('No LI-COR token saved');
  var parts = String(s.id).split('|');
  var q = 'deviceSerialNumber=' + encodeURIComponent(parts[0]) + '&sensorSerialNumber=' + encodeURIComponent(parts[1] || '') +
    '&startTime=' + Math.floor(now - 3 * 3600000) + '&endTime=' + Math.floor(now);
  var r = fetch_('https://api.licor.cloud/v2/data?' + q, { headers: { Authorization: 'Bearer ' + token } });
  if (r.code === 401 || r.code === 403) throw new Error('LI-COR refused the token');
  if (r.code !== 200) throw new Error('LI-COR answered ' + r.code + why_(r.text));
  return licorLatest(JSON.parse(r.text), parts[1] || '');
}
// Pure: /v2/data reply → the newest temperature of one sensor, in °F.
function licorLatest(reply, serial) {
  var best = null;
  var base = String(serial).split('-')[0];
  ((reply && reply.sensors) || []).forEach(function (sn) {
    var full = String(sn.sensorSerialNumber || '');
    if (full !== serial && full.split('-')[0] !== base) return;
    (sn.data || []).forEach(function (m) {
      if (!/^temperature$/i.test(String(m.measurementType || ''))) return;
      var isC = /c/i.test(m.units || '') && !/f/i.test(m.units || '');
      (m.records || []).forEach(function (rec) {
        // a blank is NOT 0 — Number('') is 0, and 0 °C would read as a frost
        if (!rec || rec[1] == null || rec[1] === '' || !isFinite(Number(rec[1]))) return;
        var t = Number(rec[0]);
        if (!best || t > best.at) best = { at: t, temp: isC ? Number(rec[1]) * 9 / 5 + 32 : Number(rec[1]) };
      });
    });
  });
  if (!best) throw new Error('No temperature from this LI-COR sensor in the last 3 hours');
  return best;
}

// A LI-COR sensor's last few days as hourly lows — the app's station
// scorecard compares each station's night lows with your own sensor's. The
// token stays here; only temperatures go back.
function historyAction_(body, now) {
  var token = getProp_('LICOR_TOKEN');
  if (!token) return { ok: false, error: 'No LI-COR token saved.' };
  var parts = String(body.id || '').split('|');
  var days = Math.min(14, Math.max(1, Number(body.days) || 7));
  var q = 'deviceSerialNumber=' + encodeURIComponent(parts[0]) + '&sensorSerialNumber=' + encodeURIComponent(parts[1] || '') +
    '&startTime=' + Math.floor(now - days * 86400000) + '&endTime=' + Math.floor(now);
  var r = fetch_('https://api.licor.cloud/v2/data?' + q, { headers: { Authorization: 'Bearer ' + token } });
  if (r.code !== 200) return { ok: false, error: 'LI-COR answered ' + r.code + why_(r.text) };
  return { ok: true, points: licorHourlyLows(JSON.parse(r.text), parts[1] || '') };
}
// Pure: /v2/data reply → [[hourStartMs, lowest °F in that hour], …] oldest first.
function licorHourlyLows(reply, serial) {
  var byHour = {};
  var base = String(serial).split('-')[0];
  ((reply && reply.sensors) || []).forEach(function (sn) {
    var full = String(sn.sensorSerialNumber || '');
    if (full !== serial && full.split('-')[0] !== base) return;
    (sn.data || []).forEach(function (m) {
      if (!/^temperature$/i.test(String(m.measurementType || ''))) return;
      var isC = /c/i.test(m.units || '') && !/f/i.test(m.units || '');
      (m.records || []).forEach(function (rec) {
        if (!rec || rec[1] == null || rec[1] === '' || !isFinite(Number(rec[1]))) return;
        var h = Math.floor(Number(rec[0]) / 3600000) * 3600000;
        var v = isC ? Number(rec[1]) * 9 / 5 + 32 : Number(rec[1]);
        if (!(h in byHour) || v < byHour[h]) byHour[h] = v;
      });
    });
  });
  return Object.keys(byHour).map(Number).sort(function (a, b) { return a - b; }).map(function (h) { return [h, Math.round(byHour[h] * 10) / 10]; });
}

// Every temperature sensor on the LI-COR account, for the app's picker.
function licorAction_(body) {
  if (body.clear) { delProp_('LICOR_TOKEN'); return { ok: true, hasLicor: false, sensors: [] }; }
  var token = String(body.token || '').trim() || getProp_('LICOR_TOKEN');
  if (!token) return { ok: false, error: 'Paste your LI-COR Cloud token first.' };
  var r = fetch_('https://api.licor.cloud/v2/devices', { headers: { Authorization: 'Bearer ' + token } });
  if (r.code === 401 || r.code === 403) return { ok: false, error: 'LI-COR refused that token — copy it again from LI-COR Cloud (Account → API tokens).' };
  if (r.code !== 200) return { ok: false, error: 'LI-COR answered ' + r.code + ' — try again in a minute.' };
  var sensors = licorSensors(JSON.parse(r.text));
  if (String(body.token || '').trim()) setProp_('LICOR_TOKEN', token);   // only a token that worked is kept
  return { ok: true, hasLicor: true, sensors: sensors };
}
// Pure: /v2/devices → [{ id: "logger|sensor", logger, loggerName, serial, units }]
function licorSensors(reply) {
  var out = [];
  ((reply && reply.devices) || []).forEach(function (d) {
    (d.sensors || []).forEach(function (sn) {
      var full = String(sn.sensorSerialNumber || '');
      if (!full || !/^temperature$/i.test(String(sn.measurementType || ''))) return;
      out.push({ id: String(d.deviceSerialNumber) + '|' + full, logger: String(d.deviceSerialNumber || ''),
        loggerName: String(d.deviceName || ''), serial: full, label: String(sn.label || sn.name || ''), units: String(sn.units || '') });
    });
  });
  return out;
}

// NEWA (Cornell). The id is the station id with its network, e.g. "ude njwx".
// stnHrly wants the station's clock: from yesterday 00 to the current hour —
// an hour in its future is refused, so on a 400 it asks again an hour earlier.
function readNewa_(s, tz, now) {
  for (var back = 0; back < 2; back++) {
    var end = new Date(now - back * 3600000);
    var payload = { sid: String(s.id), sdate: Utilities.formatDate(new Date(now - 86400000), tz, 'yyyyMMdd') + '00', edate: Utilities.formatDate(end, tz, 'yyyyMMddHH') };
    var r = fetch_('https://hrly.nrcc.cornell.edu/stnHrly', { method: 'post', contentType: 'application/json', payload: JSON.stringify(payload) });
    if (r.code === 400 && back === 0) continue;
    if (r.code !== 200) throw new Error('NEWA answered ' + r.code);
    return newaLatest(JSON.parse(r.text), tzOffsetMin_(tz, now));
  }
  throw new Error('NEWA refused the time window');
}
// Pure: stnHrly reply → the newest temperature (°F). Its hours are the
// station's local clock; offsetMin turns them into real time.
function newaLatest(reply, offsetMin) {
  var rows = (reply && (reply.hrlyData || reply.data)) || [];
  var f = (reply && (reply.hrlyFields || reply.fields)) || ['date', 'flags', 'prcp', 'temp'];
  var iTemp = f.indexOf('temp');
  var best = null;
  rows.forEach(function (row) {
    if (!row || iTemp < 0) return;
    var v = String(row[iTemp] == null ? '' : row[iTemp]).trim();
    if (!v || !isFinite(Number(v)) || /^(m|nan|na|null|-)$/i.test(v)) return;
    var d = String(row[0]), m = d.match(/^(\\d{4})-?(\\d{2})-?(\\d{2})[T ]?(\\d{2})/);
    if (!m) return;
    var at = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4]) - (offsetMin || 0) * 60000;
    if (!best || at > best.at) best = { at: at, temp: Number(v) };
  });
  if (!best) throw new Error('No temperature from this NEWA station in the last day');
  return best;
}

// National Weather Service (api.weather.gov). The id is the station, e.g. "KMIV".
function readNws_(s) {
  var r = fetch_('https://api.weather.gov/stations/' + encodeURIComponent(s.id) + '/observations?limit=6',
    { headers: { Accept: 'application/geo+json', 'User-Agent': 'TempAlert (nursery temperature alerts)' } });
  if (r.code !== 200) throw new Error('Weather Service answered ' + r.code);
  return nwsLatest(JSON.parse(r.text));
}
// Pure: /observations → the newest reading that HAS a temperature (°F).
// The newest observation often has none yet, so it looks back a few.
function nwsLatest(reply) {
  var best = null;
  ((reply && reply.features) || []).forEach(function (ft) {
    var p = ft && ft.properties;
    if (!p || !p.timestamp || !p.temperature || p.temperature.value == null) return;
    var at = new Date(p.timestamp).getTime();
    if (!isFinite(at)) return;
    var c = Number(p.temperature.value);
    var t = /degF/.test(p.temperature.unitCode || '') ? c : c * 9 / 5 + 32;
    if (!best || at > best.at) best = { at: at, temp: t };
  });
  if (!best) throw new Error('No temperature from this Weather Service station lately');
  return best;
}

function fetch_(url, opt) {
  var o = { muteHttpExceptions: true, followRedirects: true };
  for (var k in opt) o[k] = opt[k];
  var r = UrlFetchApp.fetch(url, o);
  return { code: r.getResponseCode(), text: r.getContentText() };
}

/* ── the Alerts and Settings tabs ─────────────────────────────────────── */

function readConfig_(ss) {
  var cfg = settingsFromValues(valuesOf_(ss, SETTINGS_TAB, 2));
  cfg.sensors = alertsFromValues(valuesOf_(ss, ALERTS, ALERT_HEADERS.length));
  return cfg;
}
function writeConfig_(ss, cfg) {
  var a = alertsToValues(cfg.sensors || []);
  var sh = ensureSheet_(ss, ALERTS);
  sh.clear();
  sh.getRange(1, 1, a.length, ALERT_HEADERS.length).setValues(a);
  sh.setFrozenRows(1);
  var s = settingsToValues(cfg);
  var st = ensureSheet_(ss, SETTINGS_TAB);
  st.clear();
  st.getRange(1, 1, s.length, 2).setValues(s);
  st.setFrozenRows(1);
}
function valuesOf_(ss, name, width) {
  var sh = ss.getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(1, 1, sh.getLastRow(), width).getValues();
}

// Pure: the Alerts tab → sensors, each with its alerts. One row = one alert;
// rows with the same Source + ID are one sensor. A row with no "Alert when"
// is a sensor being watched with no alert yet.
function alertsFromValues(values) {
  var out = [], ix = {};
  var col = function (row, i) { return String(row[i] == null ? '' : row[i]).trim(); };
  for (var r = 1; r < values.length; r++) {
    var row = values[r];
    var source = SOURCE_FROM_LABEL[col(row, 1).toLowerCase()] || col(row, 1).toLowerCase();
    var id = col(row, 2);
    if (!id || !SOURCES[source]) continue;
    var key = source + ':' + id;
    if (!(key in ix)) { ix[key] = out.length; out.push({ name: col(row, 0) || id, source: source, id: id, alerts: [], backup: null }); }
    var s = out[ix[key]];
    // the backup may be written on any of the sensor's rows — the first one counts
    var bSource = SOURCE_FROM_LABEL[col(row, 8).toLowerCase()] || col(row, 8).toLowerCase(), bId = col(row, 9);
    if (!s.backup && bId && SOURCES[bSource] && !(bSource === source && bId === id)) s.backup = { name: col(row, 7) || bId, source: bSource, id: bId };
    var when = col(row, 3).toLowerCase();
    when = /below|under|≤|<|cold|frost/.test(when) ? 'below' : (/above|over|≥|>|hot|heat/.test(when) ? 'above' : '');
    var temp = col(row, 4);
    if (!when || temp === '' || !isFinite(Number(temp))) continue;
    s.alerts.push({ when: when, temp: Number(temp), emails: cleanEmails(col(row, 5)), on: !/^(no|false|off|0)$/i.test(col(row, 6)) });
  }
  return out;
}

// Pure: sensors → the Alerts tab (header row first).
function alertsToValues(sensors) {
  var out = [ALERT_HEADERS.slice()];
  (sensors || []).forEach(function (s) {
    if (!s || !s.id || !SOURCES[s.source]) return;
    var base = [safe_(s.name || s.id), SOURCES[s.source], safe_(String(s.id))];
    var b = s.backup && s.backup.id && SOURCES[s.backup.source] && !(s.backup.source === s.source && String(s.backup.id) === String(s.id)) ? s.backup : null;
    var backup = b ? [safe_(b.name || b.id), SOURCES[b.source], safe_(String(b.id))] : ['', '', ''];
    var alerts = (s.alerts || []).filter(validAlert_);
    if (!alerts.length) out.push(base.concat(['', '', '', ''], backup));
    alerts.forEach(function (a) {
      out.push(base.concat([a.when === 'below' ? 'At or below' : 'At or above', Number(a.temp),
        safe_(cleanEmails(a.emails).join(', ')), a.on === false ? 'No' : 'Yes'], backup));
    });
  });
  return out;
}

function settingsFromValues(values) {
  var cfg = {};
  SETTINGS.forEach(function (s) { cfg[s[0]] = s[2]; });
  for (var r = 1; r < values.length; r++) {
    var label = String(values[r][0] == null ? '' : values[r][0]).trim().toLowerCase(), v = values[r][1];
    SETTINGS.forEach(function (s) {
      if (label !== s[1].toLowerCase()) return;
      if (typeof s[2] === 'number') { var n = Number(v); if (v !== '' && isFinite(n)) cfg[s[0]] = n; }
      else if (typeof s[2] === 'boolean') cfg[s[0]] = !/^(no|false|off|0)$/i.test(String(v).trim());
      else cfg[s[0]] = String(v == null ? '' : v).trim();
    });
  }
  return cfg;
}
function settingsToValues(cfg) {
  var out = [['Setting', 'Value']];
  SETTINGS.forEach(function (s) {
    var v = cfg[s[0]] == null ? s[2] : cfg[s[0]];
    if (typeof s[2] === 'boolean') v = v === false ? 'No' : 'Yes';
    else if (typeof s[2] === 'number') v = isFinite(Number(v)) ? Number(v) : s[2];
    else v = safe_(v);
    out.push([s[1], v]);
  });
  return out;
}

// Pure: "a@x.com, b@y.org; c@z" (or a list) → the valid addresses, once each.
function cleanEmails(v) {
  var parts = Array.isArray(v) ? v : String(v || '').split(/[\\s,;]+/);
  var out = [];
  parts.forEach(function (p) {
    var m = String(p || '').trim().toLowerCase();
    if (/^[^\\s@<>()]+@[^\\s@<>()]+\\.[a-z]{2,}$/.test(m) && out.indexOf(m) < 0) out.push(m);
  });
  return out;
}

// Readings + alert states for the app (no addresses — counts only).
function statusOf_(cfg, state, props) {
  return cfg.sensors.map(function (s) {
    var st = state[sensorKey(s)] || {};
    return {
      key: sensorKey(s), name: s.name, source: s.source, id: s.id,
      temp: st.temp == null ? null : Math.round(st.temp * 10) / 10, at: st.at || null, checked: st.checked || null,
      stale: !!st.stale, error: st.error || '',
      backup: s.backup ? { name: s.backup.name, source: s.backup.source, id: s.backup.id } : null,
      onBackup: st.from === 'backup' && !!s.backup,
      reliability: reliability(parse_((props || {})['REL ' + sensorKey(s)], [])),
      alerts: (s.alerts || []).map(function (a) {
        return { when: a.when, temp: a.temp, on: a.on !== false, people: a.emails.length, state: (st.rules || {})[ruleKey(a)] || 'ok' };
      }),
    };
  });
}

/* ── the 15-minute trigger ───────────────────────────────────────────── */

function isChecking_() {
  return ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'checkAll'; });
}
function setChecking_(on) {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'checkAll') ScriptApp.deleteTrigger(t); });
  if (on) ScriptApp.newTrigger('checkAll').timeBased().everyMinutes(CHECK_EVERY_MIN).create();
}

/* ── small helpers ────────────────────────────────────────────────────── */

function log_(ss, row) {
  var sh = ensureSheet_(ss, LOG, LOG_HEADERS);
  sh.getRange(sh.getLastRow() + 1, 1, 1, LOG_HEADERS.length).setValues([row.map(function (v) { return typeof v === 'string' ? safe_(v) : v; })]);
}
function ensureSheet_(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers) { sheet.getRange(1, 1, 1, headers.length).setValues([headers]); sheet.setFrozenRows(1); }
  }
  return sheet;
}
// each sensor's state from its own property ("ST <key>"); a sheet set up
// before 10-02 kept them all in one STATE property — read that as a fallback
function readState_(cfg, props) {
  props = props || PropertiesService.getScriptProperties().getProperties();
  var legacy = parse_(props.STATE, {});
  var out = {};
  cfg.sensors.forEach(function (s) {
    var k = sensorKey(s);
    var v = parse_(props['ST ' + k], null) || legacy[k] || null;
    if (v) out[k] = v;
  });
  return out;
}
function tz_(ss) { return (ss.getSpreadsheetTimeZone && ss.getSpreadsheetTimeZone()) || Session.getScriptTimeZone() || 'America/New_York'; }
// minutes east of UTC on that clock, e.g. -240 for EDT
function tzOffsetMin_(tz, now) {
  var z = Utilities.formatDate(new Date(now), tz, 'Z');
  var m = String(z).match(/^([+-])(\\d{2})(\\d{2})$/);
  return m ? (m[1] === '-' ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3])) : 0;
}
// the service's own words on an error, briefly — so a failure says WHY
function why_(text) { var s = String(text || '').replace(/\\s+/g, ' ').trim().slice(0, 160); return s ? ': ' + s : ''; }
function checkKey_(key) {
  key = String(key || '');
  if (key.length < 4) return { ok: false, error: 'The setup password needs at least 4 characters.' };
  var stored = getKey_();
  if (stored && stored !== key) return { ok: false, error: 'That is not the setup password for this sheet.' };
  return { ok: true, first: !stored };
}
// Anything typed that starts like a formula is written as text, never run.
function safe_(v) {
  var s = v == null ? '' : String(v).slice(0, 2000);
  return /^[=+\\-@]/.test(s) ? "'" + s : s;
}
function num_(v) { var n = Number(v); return (v === '' || v == null || isNaN(n)) ? '' : Math.round(n * 10) / 10; }
function getProp_(k) { return PropertiesService.getScriptProperties().getProperty(k); }
function setProp_(k, v) { PropertiesService.getScriptProperties().setProperty(k, v); }
function delProp_(k) { PropertiesService.getScriptProperties().deleteProperty(k); }
function getKey_() { return getProp_('SETUP_KEY') || ''; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
`),`script`)},m(A.value===`script`?d(T)(`copied`):`1 · `+d(T)(`copyScript`)),1),_(`button`,{class:`btn btn-primary`,"data-copy":`manifest`,onClick:s[2]||=e=>xe(d(`{
  "timeZone": "America/New_York",
  "runtimeVersion": "V8",
  "exceptionLogging": "STACKDRIVER",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.currentonly",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/script.send_mail",
    "https://www.googleapis.com/auth/script.scriptapp"
  ],
  "webapp": {
    "executeAs": "USER_DEPLOYING",
    "access": "ANYONE_ANONYMOUS"
  }
}
`),`manifest`)},m(A.value===`manifest`?d(T)(`copied`):`2 · `+d(T)(`copyManifest`)),1),s[19]||=_(`a`,{class:`btn`,href:`https://sheets.new`,target:`_blank`,rel:`noopener`},`sheets.new ↗`,-1)]),_(`details`,dt,[_(`summary`,null,m(d(T)(`showScript`)),1),_(`pre`,null,m(d(it)),1)]),_(`details`,ft,[_(`summary`,null,m(d(T)(`showManifest`)),1),_(`pre`,null,m(d(at)),1)]),_(`div`,pt,[_(`h3`,null,m(d(T)(`warnTitle`)),1),_(`ul`,mt,[_(`li`,null,m(d(T)(`warn1`)),1),_(`li`,null,m(d(T)(`warn2`)),1),_(`li`,null,m(d(T)(`warn3`)),1),_(`li`,null,m(d(T)(`warn4`)),1)])])]),_(`section`,ht,[_(`h2`,null,m(d(T)(`s2`)),1),_(`label`,gt,[_(`span`,null,m(d(T)(`webAppUrl`)),1),i(_(`input`,{"onUpdate:modelValue":s[3]||=e=>j.value=e,type:`url`,placeholder:d(T)(`urlPh`),autocomplete:`off`,onKeydown:w(y(Se,[`prevent`]),[`enter`])},null,40,_t),[[b,j.value]])]),_(`div`,vt,[_(`button`,{class:`btn btn-primary`,disabled:N.value===`connect`||!j.value.trim(),onClick:Se},m(N.value===`connect`?`…`:d(T)(`connect`)),9,yt),d(E)&&d(D)?.sheetName?(o(),g(`span`,bt,[r(`✓ `+m(d(T)(`connectedOk`))+` `,1),_(`b`,null,m(d(D).sheetName),1)])):e(``,!0)]),M.value?(o(),g(`p`,xt,m(M.value),1)):e(``,!0),d(E)?(o(),g(`button`,{key:1,class:`linkish small`,style:{"align-self":`flex-start`},onClick:s[4]||=e=>{d(le)(),j.value=``}},m(d(T)(`disconnect`)),1)):e(``,!0)]),_(`section`,St,[_(`h2`,null,m(d(T)(`s3`)),1),_(`label`,Ct,[_(`span`,null,m(d(T)(`password`)),1),i(_(`input`,{"onUpdate:modelValue":s[5]||=e=>P.value=e,type:`password`,autocomplete:`current-password`,onKeydown:w(y(Ce,[`prevent`]),[`enter`])},null,40,wt),[[b,P.value]]),_(`small`,Tt,m(d(T)(`passwordHelp`)),1)]),_(`div`,Et,[_(`button`,{class:`btn btn-primary`,disabled:!d(E)||N.value===`unlock`||P.value.length<4,onClick:Ce},m(N.value===`unlock`?`…`:d(T)(`unlock`)),9,Dt),d(O)?(o(),g(`span`,Ot,`🔓 `+m(d(T)(`unlocked`)),1)):e(``,!0)]),d(E)?e(``,!0):(o(),g(`p`,kt,m(d(T)(`needConnect`)),1)),F.value?(o(),g(`p`,At,m(F.value),1)):e(``,!0)]),_(`section`,jt,[_(`h2`,null,m(d(T)(`s4`)),1),I.value?(o(),g(f,{key:1},[_(`label`,Nt,[_(`span`,null,m(d(T)(`title`)),1),i(_(`input`,{"onUpdate:modelValue":s[6]||=e=>I.value.title=e,type:`text`,placeholder:d(T)(`titlePh`)},null,8,Pt),[[b,I.value.title]])]),_(`details`,{class:`add-box`,"data-add":`licor`,open:Ee.value},[_(`summary`,null,`🔌 `+m(d(T)(`addLicor`)),1),_(`p`,It,m(d(T)(`licorHelp`)),1),d(D)?.hasLicor?(o(),g(`p`,Lt,[r(`✓ `+m(d(T)(`licorSaved`))+` `,1),_(`button`,{class:`linkish`,onClick:Fe},m(d(T)(`licorForget`)),1)])):e(``,!0),_(`label`,Rt,[_(`span`,null,m(d(T)(`licorToken`)),1),i(_(`input`,{"onUpdate:modelValue":s[7]||=e=>H.value=e,type:`password`,autocomplete:`off`},null,512),[[b,H.value]])]),_(`button`,{class:`btn btn-primary`,disabled:N.value===`licor`||!H.value.trim()&&!d(D)?.hasLicor,style:{"align-self":`flex-start`},onClick:Pe},m(N.value===`licor`?`…`:d(T)(`licorFind`)),9,zt),W.value?(o(),g(`p`,Bt,m(W.value),1)):e(``,!0),U.value&&!U.value.length?(o(),g(`p`,Vt,m(d(T)(`licorNone`)),1)):e(``,!0),U.value?.length?(o(),g(`ul`,Ht,[(o(!0),g(f,null,n(U.value,e=>(o(),g(`li`,{key:e.id},[_(`span`,null,[_(`b`,null,m(Ie(e)),1),s[20]||=_(`br`,null,null,-1),_(`small`,Ut,m(e.serial),1)]),_(`button`,{class:`btn btn-sm`,disabled:L(`licor`,e.id),onClick:t=>R(`licor`,e.id,Ie(e))},m(L(`licor`,e.id)?d(T)(`added`):d(T)(`add`)),9,Wt)]))),128))])):e(``,!0)],8,Ft),_(`details`,{class:`add-box`,"data-add":`station`,open:Ee.value},[_(`summary`,null,`🛰 `+m(d(T)(`addStation`)),1),_(`div`,Kt,[i(_(`input`,{"onUpdate:modelValue":s[8]||=e=>G.value=e,type:`search`,placeholder:d(T)(`townPh`),"aria-label":d(T)(`town`),style:{flex:`1`,"min-width":`12rem`},onKeydown:w(y(Y,[`prevent`]),[`enter`])},null,40,qt),[[b,G.value]]),_(`button`,{class:`btn btn-primary`,disabled:N.value===`town`||!G.value.trim(),onClick:Y},m(N.value===`town`?`…`:d(T)(`search`)),9,Jt)]),J.value?(o(),g(`p`,Yt,m(J.value),1)):e(``,!0),K.value?.length>1?(o(),g(`ul`,Xt,[(o(!0),g(f,null,n(K.value,e=>(o(),g(`li`,{key:e.lat+`,`+e.lon},[_(`span`,null,m(e.label),1),_(`button`,{class:`btn btn-sm`,onClick:t=>ze(e)},`→`,8,Zt)]))),128))])):e(``,!0),q.value?(o(),g(f,{key:2},[_(`p`,Qt,[_(`b`,null,m(q.value.label),1)]),_(`h4`,null,m(d(T)(`newaList`)),1),_(`ul`,$t,[(o(!0),g(f,null,n(q.value.newa,e=>(o(),g(`li`,{key:e.sid},[_(`span`,null,[r(m(e.name),1),_(`small`,en,` · `+m(e.state)+` · `+m(e.miles)+` `+m(d(T)(`miles`)),1)]),_(`button`,{class:`btn btn-sm`,disabled:L(`newa`,e.sid),onClick:t=>R(`newa`,e.sid,e.name)},m(L(`newa`,e.sid)?d(T)(`added`):d(T)(`add`)),9,tn)]))),128))]),_(`h4`,null,m(d(T)(`nwsList`)),1),_(`ul`,nn,[(o(!0),g(f,null,n(q.value.nws,e=>(o(),g(`li`,{key:e.id},[_(`span`,null,[r(m(e.name),1),_(`small`,rn,` · `+m(e.id)+` · `+m(e.miles)+` `+m(d(T)(`miles`)),1)]),_(`button`,{class:`btn btn-sm`,disabled:L(`nws`,e.id),onClick:t=>R(`nws`,e.id,e.name)},m(L(`nws`,e.id)?d(T)(`added`):d(T)(`add`)),9,an)]))),128))]),_(`h4`,null,`📊 `+m(d(T)(`scTitle`)),1),p(l,{picked:q.value,truths:Me.value,has:L,onAdd:R,onScored:Ae},null,8,[`picked`,`truths`])],64)):e(``,!0)],8,Gt),(o(!0),g(f,null,n(I.value.sensors,(a,c)=>(o(),g(`article`,{key:a.source+a.id,class:`sensor-edit`,"data-sensor":a.id},[_(`div`,sn,[_(`label`,cn,[_(`span`,null,m(d(T)(`sensorName`)),1),i(_(`input`,{"onUpdate:modelValue":e=>a.name=e,type:`text`},null,8,ln),[[b,a.name]])]),_(`button`,{class:`linkish small`,onClick:e=>De(c)},m(d(T)(`removeSensor`)),9,un)]),_(`small`,dn,m(d(k)(a)),1),_(`div`,fn,[a.backup?.id?(o(),g(`span`,pn,[r(`🔁 `+m(d(T)(`backupIs`))+` `,1),_(`b`,null,m(a.backup.name||a.backup.id),1),s[21]||=r(),_(`small`,mn,`· `+m(d(k)(a.backup)),1)])):(o(),g(`span`,hn,`🔁 `+m(d(T)(`noBackup`)),1)),_(`button`,{class:t([`btn btn-sm`,{"btn-primary":z.value!==a}]),"data-choose-backup":``,onClick:e=>Oe(a)},m(z.value===a?d(T)(`cancel`):a.backup?.id?d(T)(`changeBackup`):d(T)(`chooseBackup`)),11,gn),a.backup?.id&&z.value!==a?(o(),g(`button`,{key:2,class:`linkish small`,onClick:e=>{a.backup=null,B.value=null}},m(d(T)(`removeBackup`)),9,_n)):e(``,!0)]),B.value===a&&a.backup?.id?(o(),g(`p`,vn,[r(`✓ `+m(d(T)(`backupSetTo`))+` `,1),_(`b`,null,m(a.backup.name),1),r(`. `+m(d(T)(`backupSaveHint`)),1)])):e(``,!0),z.value===a?(o(),g(`div`,yn,[_(`p`,bn,[_(`b`,null,m(d(T)(`pickBackupFor`))+` `+m(a.name),1),r(` — `+m(d(T)(`pickBackupWhy`)),1)]),je(a).length?(o(),g(`ul`,xn,[(o(!0),g(f,null,n(je(a),t=>(o(),g(`li`,{key:t.key,"data-choice":t.id},[_(`span`,null,[_(`b`,null,m(t.name),1),s[22]||=_(`br`,null,null,-1),_(`small`,Cn,[r(m(t.where),1),t.miles==null?e(``,!0):(o(),g(f,{key:0},[r(` · `+m(t.miles)+` `+m(d(T)(`miles`)),1)],64)),t.score==null?e(``,!0):(o(),g(f,{key:1},[r(` · 📊 `+m(t.score)+` `+m(d(T)(`sc_`+t.word)),1)],64))])]),_(`button`,{class:`btn btn-sm btn-primary`,onClick:e=>ke(a,t)},m(d(T)(`useThis`)),9,wn)],8,Sn))),128))])):e(``,!0),je(a).length?e(``,!0):(o(),g(`p`,Tn,m(d(T)(`noChoicesYet`)),1)),_(`div`,En,[i(_(`input`,{"onUpdate:modelValue":s[9]||=e=>G.value=e,type:`search`,placeholder:d(T)(`townPh`),"aria-label":d(T)(`town`),style:{flex:`1`,"min-width":`10rem`},onKeydown:w(y(Y,[`prevent`]),[`enter`])},null,40,Dn),[[b,G.value]]),_(`button`,{class:`btn`,disabled:N.value===`town`||!G.value.trim(),onClick:Y},m(N.value===`town`?`…`:d(T)(`searchStations`)),9,On)]),K.value?.length>1?(o(),g(`ul`,kn,[(o(!0),g(f,null,n(K.value,e=>(o(),g(`li`,{key:e.lat+`,`+e.lon},[_(`span`,null,m(e.label),1),_(`button`,{class:`btn btn-sm`,onClick:t=>ze(e)},`→`,8,An)]))),128))])):e(``,!0),_(`p`,jn,m(d(T)(`pickScoreHint`)),1)])):e(``,!0),(o(!0),g(f,null,n(a.alerts,(e,n)=>(o(),g(`div`,{key:n,class:`alert-edit`},[_(`div`,Mn,[_(`div`,Nn,[_(`button`,{type:`button`,class:t({on:e.when===`below`}),onClick:t=>e.when=`below`},`🥶 `+m(d(T)(`atOrBelow`)),11,Pn),_(`button`,{type:`button`,class:t({on:e.when===`above`}),onClick:t=>e.when=`above`},`🔥 `+m(d(T)(`atOrAbove`)),11,Fn)]),_(`label`,In,[i(_(`input`,{"onUpdate:modelValue":t=>e.temp=t,type:`number`,inputmode:`decimal`,step:`0.5`},null,8,Ln),[[b,e.temp,void 0,{number:!0}]]),s[23]||=r(` °F`,-1)]),_(`label`,Rn,[i(_(`input`,{"onUpdate:modelValue":t=>e.on=t,type:`checkbox`},null,8,zn),[[v,e.on]]),r(` `+m(d(T)(`alertOn`)),1)]),_(`button`,{class:`linkish small`,style:{"margin-left":`auto`},onClick:e=>a.alerts.splice(n,1)},m(d(T)(`removeAlert`)),9,Bn)]),_(`label`,Vn,[_(`span`,null,m(d(T)(`emailTo`)),1),i(_(`textarea`,{"onUpdate:modelValue":t=>e.emailsText=t,rows:`2`,placeholder:d(T)(`emailPh`),autocapitalize:`off`,spellcheck:`false`},null,8,Hn),[[b,e.emailsText]])])]))),128)),_(`button`,{class:`linkish small`,style:{"align-self":`flex-start`},onClick:e=>Ne(a)},m(d(T)(`addAlert`)),9,Un)],8,on))),128)),_(`details`,Wn,[_(`summary`,null,`⚙ `+m(d(T)(`staleMin`))+` · `+m(d(T)(`margin`)),1),_(`label`,Gn,[_(`span`,null,m(d(T)(`staleMin`)),1),i(_(`input`,{"onUpdate:modelValue":s[10]||=e=>I.value.staleMinutes=e,type:`number`,min:`15`,step:`15`},null,512),[[b,I.value.staleMinutes,void 0,{number:!0}]]),_(`small`,Kn,m(d(T)(`staleHelp`)),1)]),_(`label`,qn,[_(`span`,null,m(d(T)(`margin`)),1),i(_(`input`,{"onUpdate:modelValue":s[11]||=e=>I.value.margin=e,type:`number`,min:`0`,step:`0.5`},null,512),[[b,I.value.margin,void 0,{number:!0}]]),_(`small`,Jn,m(d(T)(`marginHelp`)),1)]),_(`label`,Yn,[i(_(`input`,{"onUpdate:modelValue":s[12]||=e=>I.value.sendClear=e,type:`checkbox`},null,512),[[v,I.value.sendClear]]),r(` `+m(d(T)(`sendClear`)),1)])]),(o(!0),g(f,null,n(Ue.value,e=>(o(),g(`p`,{key:e,class:`notice notice-alert`,style:{margin:`0`}},m(d(T)(`badEmail`))+` `+m(e),1))),128)),_(`div`,Xn,[_(`button`,{class:`btn btn-primary`,disabled:N.value===`save`,onClick:We},m(N.value===`save`?`…`:d(T)(`saveAll`)),9,Zn),Ve.value?(o(),g(`span`,Qn,`✓ `+m(d(T)(`saved`)),1)):we.value?(o(),g(`span`,$n,m(d(T)(`unsaved`)),1)):e(``,!0)]),Be.value?(o(),g(`p`,er,m(Be.value),1)):e(``,!0)],64)):(o(),g(`p`,Mt,m(d(T)(`needUnlock`)),1))]),_(`section`,tr,[_(`h2`,null,m(d(T)(`s5`)),1),_(`p`,nr,m(d(T)(`checkHelp`)),1),_(`p`,rr,[r(m(d(T)(`checkingIs`))+` `,1),_(`b`,{class:t(d(D)?.checking?`is-on-text`:`is-off-text`)},m(d(D)?.checking?d(T)(`on`):d(T)(`off`)),3)]),_(`div`,ir,[d(D)?.checking?(o(),g(`button`,{key:1,class:`btn`,disabled:!d(O)||!!N.value,onClick:s[14]||=e=>Ge(()=>d(ge)(!1),`checking`)},m(d(T)(`turnOff`)),9,or)):(o(),g(`button`,{key:0,class:`btn btn-primary`,disabled:!d(O)||!!N.value,onClick:s[13]||=e=>Ge(()=>d(ge)(!0),`checking`)},m(d(T)(`turnOn`)),9,ar)),_(`button`,{class:`btn`,disabled:!d(O)||!!N.value,onClick:s[15]||=e=>Ge(d(_e),`check`)},m(N.value===`check`?`…`:d(T)(`checkNow`)),9,sr),p(u,{to:`/`,class:`btn`},{default:c(()=>[r(m(d(T)(`navStatus`))+` →`,1)]),_:1})]),d(O)?e(``,!0):(o(),g(`p`,cr,m(d(T)(`needUnlock`)),1)),Z.value?(o(),g(`p`,lr,m(Z.value),1)):e(``,!0)]),_(`section`,ur,[_(`h2`,null,m(d(T)(`s6`)),1),_(`h3`,dr,`🧪 `+m(d(T)(`testTitle`)),1),_(`div`,fr,[_(`button`,{class:`btn btn-primary`,disabled:!d(O)||N.value===`test`,onClick:s[16]||=e=>Je(!1)},m(d(T)(`testAll`)),9,pr)]),_(`div`,mr,[i(_(`input`,{"onUpdate:modelValue":s[17]||=e=>Q.value=e,type:`text`,inputmode:`email`,autocapitalize:`off`,placeholder:`name@example.com`,style:{flex:`1`,"min-width":`12rem`}},null,512),[[b,Q.value]]),_(`button`,{class:`btn`,disabled:!d(O)||N.value===`test`||!d(he)(Q.value).length,onClick:s[18]||=e=>Je(!0)},m(d(T)(`testOne`)),9,hr)]),d(O)?.quota==null?e(``,!0):(o(),g(`p`,gr,m(d(T)(`quotaLeft`))+`: `+m(d(O).quota),1)),Ke.value?(o(),g(`p`,_r,`✓ `+m(Ke.value),1)):e(``,!0),qe.value?(o(),g(`p`,vr,m(qe.value),1)):e(``,!0),_(`h3`,yr,`📱 `+m(d(T)(`nTitle`)),1),p(h)]),d(E)?(o(),g(`section`,br,[_(`h2`,null,m(d(T)(`s7`)),1),_(`p`,xr,m(d(T)(`shareHelp`)),1),$.value?(o(),g(`img`,{key:0,src:$.value,alt:`QR code`,class:`qr`},null,8,Sr)):e(``,!0),_(`code`,Cr,m(X.value),1),_(`div`,wr,[_(`button`,{class:`btn btn-primary`,onClick:Xe},m(Ye.value?d(T)(`copied`):d(T)(`copyLink`)),1),d(Ze)?(o(),g(`button`,{key:0,class:`btn`,onClick:Qe},m(d(T)(`shareBtn`)),1)):e(``,!0),$.value?(o(),g(`a`,{key:1,class:`btn`,href:$.value,download:`temp-alert-qr.png`},`⬇ QR`,8,Tr)):e(``,!0)])])):e(``,!0)])}}},[[`__scopeId`,`data-v-44c84df8`]]);export{Er as default};