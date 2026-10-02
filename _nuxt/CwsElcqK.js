import{C as e,Dt as t,K as n,O as r,Q as i,W as a,Y as o,Z as s,a as c,b as l,ct as u,g as d,k as f,kt as p,rt as m,w as h,x as g}from"./-aD-WF9S.js";import{c as _,d as v,l as y,o as b,r as x,t as S,u as C}from"#entry";import{t as ee}from"./CkbTGez5.js";import{a as te,c as ne,d as re,l as ie,n as ae,o as oe,r as se,s as ce,t as le,u as ue}from"./DgmR6ysd.js";var de=Object.create,w=Object.defineProperty,T=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,D=Object.getPrototypeOf,fe=Object.prototype.hasOwnProperty,O=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),pe=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=E(t),a=0,o=i.length,s;a<o;a++)s=i[a],!fe.call(e,s)&&s!==n&&w(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=T(t,s))||r.enumerable});return e},me=(e,t,n)=>(n=e==null?{}:de(D(e)),pe(t||!e||!e.__esModule||!fe.call(e,`default`)?w(n,`default`,{value:e,enumerable:!0}):n,e)),he=O(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),k=O((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),A=O((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),ge=O(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),_e=O(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),ve=O((e=>{var t=k().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),j=O((e=>{var t=k().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),ye=O((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),M=O((e=>{var t=A(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),N=O((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),P=O((e=>{var t=N();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),be=O(((e,t)=>{var n=P();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),F=O((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),I=O((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),L=O((e=>{var t=F(),n=I();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),R=O((e=>{var t=k(),n=M(),r=A(),i=L(),a=F(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),z=O((e=>{var t=k(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),xe=O(((e,t)=>{var n=L();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),B=O(((e,t)=>{var n=L(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),V=O(((e,t)=>{var n=L();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),H=O(((e,t)=>{var n=L(),r=k();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),Se=O(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),Ce=O((e=>{var t=L(),n=xe(),r=B(),i=V(),a=H(),o=I(),s=k(),c=Se();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),U=O((e=>{var t=k(),n=A(),r=ge(),i=_e(),a=ve(),o=j(),s=ye(),c=M(),l=be(),u=R(),d=z(),f=L(),p=Ce();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),W=O((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),G=O((e=>{var t=W();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),we=O((e=>{var t=W();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),Te=me(O((e=>{var t=he(),n=U(),r=G(),i=we();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))()),Ee=`/**
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

var ALERT_HEADERS = ['Sensor', 'Source', 'Station / sensor ID', 'Alert when', 'Temperature (°F)', 'Email to', 'On'];
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
  return {
    ok: true, sheetName: ss.getName(), title: cfg.title,
    status: statusOf_(cfg, readState_()), checking: isChecking_(),
    lastCheck: Number(getProp_('LAST_CHECK') || 0) || null,
    hasKey: !!getKey_(), hasLicor: !!getProp_('LICOR_TOKEN'),
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
  var state = readState_();
  var next = {};
  var token = getProp_('LICOR_TOKEN');
  var tz = tz_(ss);
  var sent = [];
  cfg.sensors.forEach(function (s) {
    var key = sensorKey(s);
    var reading = null, error = '';
    try { reading = readSensor_(s, token, tz, now); } catch (err) { error = String((err && err.message) || err); }
    var out = evaluate(s, reading, state[key] || null, cfg, now);
    out.state.error = error;
    next[key] = out.state;
    out.events.forEach(function (ev) { sent.push(deliver_(ss, cfg, s, ev, tz)); });
  });
  setProp_('STATE', JSON.stringify(next));
  setProp_('LAST_CHECK', String(now));
  return sent;
}

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
  var staleMs = Math.max(15, Number(cfg.staleMinutes) || 120) * 60000;
  // NEWA posts each hour late — its newest reading is often 2–3 hours old
  if (sensor.source === 'newa') staleMs = Math.max(staleMs, NEWA_STALE_MIN * 60000);
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

  var last = reading && isFinite(reading.temp) ? reading : (prev.at ? { temp: prev.temp, at: prev.at } : null);
  var state = { temp: last ? last.temp : null, at: last ? last.at : null, checked: now, stale: false, rules: {}, held: held };
  for (var k in prev.rules) state.rules[k] = prev.rules[k];

  if (!last || now - last.at > staleMs) {
    state.stale = true;
    if (!prev.stale && everyone.length) events.push({ type: 'stale', to: everyone, temp: state.temp, at: state.at });
    return { state: state, events: events };
  }
  if (prev.stale && everyone.length) events.push({ type: 'back', to: everyone, temp: last.temp, at: last.at });

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
      if (a.emails.length) events.push({ type: 'alert', to: a.emails.slice(), alert: a, temp: v, at: last.at });
    } else if (was === 'alert' && clear) {
      now_ = 'ok';
      // coming back from silence, the "reporting again" email already gives
      // the reading — a second "back to normal" one would just be noise
      if (cfg.sendClear !== false && !prev.stale && a.emails.length) events.push({ type: 'clear', to: a.emails.slice(), alert: a, temp: v, at: last.at });
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
  var subject, lead;
  if (ev.type === 'alert' && a.when === 'below') { subject = '🥶 ' + name + ' is ' + f(ev.temp) + ' (at or below ' + f(a.temp) + ')'; lead = name + ' has dropped to ' + f(ev.temp) + '.'; }
  else if (ev.type === 'alert') { subject = '🔥 ' + name + ' is ' + f(ev.temp) + ' (at or above ' + f(a.temp) + ')'; lead = name + ' has reached ' + f(ev.temp) + '.'; }
  else if (ev.type === 'clear') { subject = '✅ ' + name + ' is back to ' + f(ev.temp); lead = name + ' is back to ' + f(ev.temp) + ' — past the ' + f(a.temp) + ' alert by the margin.'; }
  else if (ev.type === 'stale') { subject = '⚠️ ' + name + ' has stopped reporting'; lead = 'No new reading from ' + name + ' for over ' + (Number(cfg.staleMinutes) || 120) + ' minutes. Its alerts cannot fire until it reports again — check it.'; }
  else if (ev.type === 'back') { subject = '✅ ' + name + ' is reporting again (' + f(ev.temp) + ')'; lead = name + ' is reporting again.'; }
  else { subject = 'Test alert'; lead = 'This is a test.'; }
  var lines = [lead, '', 'Reading: ' + f(ev.temp) + ' at ' + when, 'Sensor: ' + name + ' (' + (SOURCES[sensor.source] || sensor.source) + ' ' + sensor.id + ')'];
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
  var what = { alert: 'ALERT', clear: 'Back to normal', stale: 'Not reporting', back: 'Reporting again' }[ev.type] || ev.type;
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
        if (!rec || rec[1] == null || !isFinite(Number(rec[1]))) return;
        var t = Number(rec[0]);
        if (!best || t > best.at) best = { at: t, temp: isC ? Number(rec[1]) * 9 / 5 + 32 : Number(rec[1]) };
      });
    });
  });
  if (!best) throw new Error('No temperature from this LI-COR sensor in the last 3 hours');
  return best;
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
    if (!(key in ix)) { ix[key] = out.length; out.push({ name: col(row, 0) || id, source: source, id: id, alerts: [] }); }
    var s = out[ix[key]];
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
    var alerts = (s.alerts || []).filter(validAlert_);
    if (!alerts.length) out.push(base.concat(['', '', '', '']));
    alerts.forEach(function (a) {
      out.push(base.concat([a.when === 'below' ? 'At or below' : 'At or above', Number(a.temp),
        safe_(cleanEmails(a.emails).join(', ')), a.on === false ? 'No' : 'Yes']));
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
function statusOf_(cfg, state) {
  return cfg.sensors.map(function (s) {
    var st = state[sensorKey(s)] || {};
    return {
      key: sensorKey(s), name: s.name, source: s.source, id: s.id,
      temp: st.temp == null ? null : Math.round(st.temp * 10) / 10, at: st.at || null, checked: st.checked || null,
      stale: !!st.stale, error: st.error || '',
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
function readState_() { try { return JSON.parse(getProp_('STATE') || '{}') || {}; } catch (e) { return {}; } }
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
`,De=`{
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
`,Oe={class:`stack setup`},ke={key:0,class:`notice`},Ae={class:`panel stack`},je={class:`steps-list`,type:`a`},Me={class:`row`},Ne={class:`script-box`},Pe={class:`script-box`},Fe={class:`warn-box`},Ie={class:`steps-list`},Le={class:`panel stack`},Re={class:`field`},ze=[`placeholder`,`onKeydown`],Be={class:`row`},Ve=[`disabled`],He={key:0,class:`small`},Ue={key:0,class:`notice notice-alert`,style:{margin:`0`}},We={class:`panel stack`},Ge={class:`field`},Ke=[`onKeydown`],qe={class:`muted`},Je={class:`row`},Ye=[`disabled`],Xe={key:0,class:`small`},Ze={key:0,class:`muted small`,style:{margin:`0`}},Qe={key:1,class:`notice notice-alert`,style:{margin:`0`}},$e={class:`panel stack`,"data-step":`sensors`},et={key:0,class:`muted small`,style:{margin:`0`}},tt={class:`field`},nt=[`placeholder`],rt=[`open`],it={class:`small muted`},at={key:0,class:`small`},ot={class:`field`},st=[`disabled`],ct={key:1,class:`notice notice-alert`,style:{margin:`0`}},lt={key:2,class:`muted small`},ut={key:3,class:`pick-list`},dt={class:`muted`},ft=[`disabled`,`onClick`],pt=[`open`],mt={class:`row`},ht=[`placeholder`,`aria-label`,`onKeydown`],gt=[`disabled`],_t={key:0,class:`muted small`,style:{margin:`0`}},vt={key:1,class:`pick-list`},yt=[`onClick`],bt={class:`small`,style:{margin:`.4rem 0 0`}},xt={class:`pick-list`,"data-list":`newa`},St={class:`muted`},Ct=[`disabled`,`onClick`],wt={class:`pick-list`,"data-list":`nws`},Tt={class:`muted`},Et=[`disabled`,`onClick`],Dt=[`data-sensor`],Ot={class:`row`,style:{"align-items":`flex-end`}},kt={class:`field`,style:{flex:`1`,"min-width":`12rem`}},At=[`onUpdate:modelValue`],jt=[`onClick`],Mt={class:`muted`},Nt={class:`row`},Pt={class:`seg`,role:`group`},Ft=[`onClick`],It=[`onClick`],Lt={class:`temp-in`},Rt=[`onUpdate:modelValue`],zt={class:`check-chip`},Bt=[`onUpdate:modelValue`],Vt=[`onClick`],Ht={class:`field`},Ut=[`onUpdate:modelValue`,`placeholder`],Wt=[`onClick`],Gt={class:`add-box`},Kt={class:`field`},qt={class:`muted`},Jt={class:`field`},Yt={class:`muted`},Xt={class:`check-chip`},Zt={class:`row save-row`},Qt=[`disabled`],$t={key:0,class:`small`},en={key:1,class:`small muted`},tn={key:0,class:`notice notice-alert`,style:{margin:`0`}},nn={class:`panel stack`},rn={class:`small muted`,style:{margin:`0`}},an={style:{margin:`0`}},on={class:`row`},sn=[`disabled`],cn=[`disabled`],ln=[`disabled`],un={key:0,class:`muted small`,style:{margin:`0`}},dn={key:1,class:`notice notice-alert`,style:{margin:`0`}},fn={class:`panel stack`,id:`notify`},pn={style:{margin:`0`}},mn={class:`row`},hn=[`disabled`],gn={class:`row`},_n=[`disabled`],vn={key:0,class:`small muted`,style:{margin:`0`}},yn={key:1,class:`notice notice-supply`,style:{margin:`0`}},bn={key:2,class:`notice notice-alert`,style:{margin:`0`}},xn={style:{margin:`.6rem 0 0`}},Sn={key:1,class:`panel stack`},Cn={class:`small muted`,style:{margin:`0`}},wn=[`src`],Tn={class:`share-url`},En={class:`row`},Dn=[`href`],On={__name:`setup`,setup(de){let{t:w,conn:T,view:E,owner:D,demo:fe,connect:O,disconnect:pe,unlock:me,save:he,setChecking:k,checkNow:A,licor:ge,test:_e,setDemo:ve}=S(),j=m(``);async function ye(e,t){try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),t.remove()}j.value=t,setTimeout(()=>{j.value===t&&(j.value=``)},2500)}let M=m(``),N=m(``),P=m(``);o(T,e=>{e&&!M.value&&(M.value=e.url)},{immediate:!0});async function be(){N.value=``,P.value=`connect`;try{await O(M.value)}catch(e){N.value=e.message}finally{P.value=``}}let F=m(``),I=m(``);async function L(){I.value=``,P.value=`unlock`;try{await me(F.value)}catch(e){I.value=e.message}finally{P.value=``}}let R=m(null),z=m(!1),xe=e=>({title:e.title||``,staleMinutes:e.staleMinutes??120,margin:e.margin??2,sendClear:e.sendClear!==!1,sensors:(e.sensors||[]).map(e=>({...e,alerts:(e.alerts||[]).map(e=>({when:e.when,temp:e.temp,on:e.on!==!1,emailsText:(e.emails||[]).join(`, `)}))}))}),B=m(!0);o(()=>D.value?.config,(e,t)=>{e&&(t||(B.value=!(e.sensors||[]).length),R.value=xe(e),z.value=!1)},{immediate:!0}),o(R,(e,t)=>{t&&e===t&&(z.value=!0)},{deep:!0});let V=(e,t)=>!!R.value?.sensors.some(n=>n.source===e&&n.id===t);function H(e,t,n){R.value&&!V(e,t)&&R.value.sensors.push({name:n,source:e,id:t,alerts:[{when:`below`,temp:32,on:!0,emailsText:``}]})}let Se=e=>R.value.sensors.splice(e,1),Ce=e=>e.alerts.push({when:e.alerts.some(e=>e.when===`below`)?`above`:`below`,temp:e.alerts.some(e=>e.when===`below`)?95:32,on:!0,emailsText:``}),U=m(``),W=m(null),G=m(``);async function we(){G.value=``,P.value=`licor`;try{let e=await ge(U.value.trim());W.value=e.sensors,U.value=``,E.value&&={...E.value,hasLicor:!0}}catch(e){G.value=e.message}finally{P.value=``}}async function On(){P.value=`licor`;try{await ge(``,!0),W.value=null,E.value&&={...E.value,hasLicor:!1}}catch(e){G.value=e.message}finally{P.value=``}}let kn=e=>[e.loggerName,e.label].filter(Boolean).join(` · `)||e.serial,K=m(``),q=m(null),J=m(null),Y=m(``),An=null;async function jn(){Y.value=``,J.value=null,P.value=`town`;try{let e=await fetch(le(K.value.trim())).then(e=>e.json());q.value=ue(e),q.value.length?q.value.length===1&&await Mn(q.value[0]):Y.value=w(`noPlaces`)}catch{Y.value=w(`noPlaces`)}finally{P.value=``}}async function Mn(e){P.value=`town`,Y.value=``;let[t,n]=await Promise.all([(async()=>{try{return An||=ce(await fetch(ae).then(e=>e.json())),oe(An,e.lat,e.lon,6)}catch{return[]}})(),(async()=>{try{let t=(await fetch(se(e.lat,e.lon)).then(e=>e.json()))?.properties?.observationStations;return t?oe(ne(await fetch(t).then(e=>e.json())),e.lat,e.lon,6):[]}catch{return[]}})()]);J.value={...e,newa:t,nws:n},q.value=null,P.value=``}let X=m(``),Z=m(!1),Nn=c().app.baseURL||`/`,Q=l(()=>T.value?location.origin+Nn+`?`+x(T.value):``),Pn=l(()=>{let e=[];for(let t of R.value?.sensors||[])for(let n of t.alerts)for(let r of te(n.emailsText))e.push(t.name+`: `+r);return e});async function Fn(){X.value=``,Z.value=!1,P.value=`save`;let e=R.value,t={title:e.title.trim(),staleMinutes:Number(e.staleMinutes)||120,margin:Number(e.margin)||0,sendClear:e.sendClear,appUrl:Q.value,sensors:e.sensors.map(e=>({name:(e.name||``).trim()||re(e),source:e.source,id:e.id,alerts:e.alerts.filter(e=>e.temp!==``&&e.temp!=null&&isFinite(+e.temp)).map(e=>({when:e.when,temp:+e.temp,on:e.on,emails:ie(e.emailsText)}))}))};try{await he(t),Z.value=!0,setTimeout(()=>{Z.value=!1},4e3)}catch(e){X.value=e.message}finally{P.value=``}}let In=m(``);async function Ln(e,t){In.value=``,P.value=t;try{await e()}catch(e){In.value=e.message}finally{P.value=``}}let Rn=m(``),zn=m(``),Bn=m(``);async function Vn(e){zn.value=``,Bn.value=``,P.value=`test`;try{let t=await _e(e?ie(Rn.value):null);zn.value=w(`testSent`)+` `+t.sent.join(`, `)}catch(e){Bn.value=e.message}finally{P.value=``}}let $=m(``);o(Q,async e=>{$.value=e?await Te.toDataURL(e,{margin:2,width:480,errorCorrectionLevel:`M`}):``},{immediate:!0});let Hn=m(!1);async function Un(){try{await navigator.clipboard.writeText(Q.value),Hn.value=!0,setTimeout(()=>{Hn.value=!1},2500)}catch{}}let Wn=!!navigator.share,Gn=()=>navigator.share({title:w(`app`),url:Q.value}).catch(()=>{});return(o,c)=>{let l=b,m=ee;return a(),h(`div`,Oe,[g(`h1`,null,p(u(w)(`setupTitle`)),1),u(fe)?(a(),h(`p`,ke,[r(p(u(w)(`demoOn`))+` `,1),g(`button`,{class:`linkish`,onClick:c[0]||=e=>u(ve)(!1)},p(u(w)(`demoOff`)),1)])):e(``,!0),g(`section`,Ae,[g(`h2`,null,p(u(w)(`s1`)),1),g(`ol`,je,[g(`li`,null,p(u(w)(`s1a`)),1),g(`li`,null,p(u(w)(`s1b`)),1),g(`li`,null,p(u(w)(`s1c`)),1),g(`li`,null,p(u(w)(`s1d`)),1),g(`li`,null,p(u(w)(`s1e`)),1),g(`li`,null,p(u(w)(`s1f`)),1)]),g(`div`,Me,[g(`button`,{class:`btn btn-primary`,"data-copy":`script`,onClick:c[1]||=e=>ye(u(`/**
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

var ALERT_HEADERS = ['Sensor', 'Source', 'Station / sensor ID', 'Alert when', 'Temperature (°F)', 'Email to', 'On'];
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
  return {
    ok: true, sheetName: ss.getName(), title: cfg.title,
    status: statusOf_(cfg, readState_()), checking: isChecking_(),
    lastCheck: Number(getProp_('LAST_CHECK') || 0) || null,
    hasKey: !!getKey_(), hasLicor: !!getProp_('LICOR_TOKEN'),
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
  var state = readState_();
  var next = {};
  var token = getProp_('LICOR_TOKEN');
  var tz = tz_(ss);
  var sent = [];
  cfg.sensors.forEach(function (s) {
    var key = sensorKey(s);
    var reading = null, error = '';
    try { reading = readSensor_(s, token, tz, now); } catch (err) { error = String((err && err.message) || err); }
    var out = evaluate(s, reading, state[key] || null, cfg, now);
    out.state.error = error;
    next[key] = out.state;
    out.events.forEach(function (ev) { sent.push(deliver_(ss, cfg, s, ev, tz)); });
  });
  setProp_('STATE', JSON.stringify(next));
  setProp_('LAST_CHECK', String(now));
  return sent;
}

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
  var staleMs = Math.max(15, Number(cfg.staleMinutes) || 120) * 60000;
  // NEWA posts each hour late — its newest reading is often 2–3 hours old
  if (sensor.source === 'newa') staleMs = Math.max(staleMs, NEWA_STALE_MIN * 60000);
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

  var last = reading && isFinite(reading.temp) ? reading : (prev.at ? { temp: prev.temp, at: prev.at } : null);
  var state = { temp: last ? last.temp : null, at: last ? last.at : null, checked: now, stale: false, rules: {}, held: held };
  for (var k in prev.rules) state.rules[k] = prev.rules[k];

  if (!last || now - last.at > staleMs) {
    state.stale = true;
    if (!prev.stale && everyone.length) events.push({ type: 'stale', to: everyone, temp: state.temp, at: state.at });
    return { state: state, events: events };
  }
  if (prev.stale && everyone.length) events.push({ type: 'back', to: everyone, temp: last.temp, at: last.at });

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
      if (a.emails.length) events.push({ type: 'alert', to: a.emails.slice(), alert: a, temp: v, at: last.at });
    } else if (was === 'alert' && clear) {
      now_ = 'ok';
      // coming back from silence, the "reporting again" email already gives
      // the reading — a second "back to normal" one would just be noise
      if (cfg.sendClear !== false && !prev.stale && a.emails.length) events.push({ type: 'clear', to: a.emails.slice(), alert: a, temp: v, at: last.at });
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
  var subject, lead;
  if (ev.type === 'alert' && a.when === 'below') { subject = '🥶 ' + name + ' is ' + f(ev.temp) + ' (at or below ' + f(a.temp) + ')'; lead = name + ' has dropped to ' + f(ev.temp) + '.'; }
  else if (ev.type === 'alert') { subject = '🔥 ' + name + ' is ' + f(ev.temp) + ' (at or above ' + f(a.temp) + ')'; lead = name + ' has reached ' + f(ev.temp) + '.'; }
  else if (ev.type === 'clear') { subject = '✅ ' + name + ' is back to ' + f(ev.temp); lead = name + ' is back to ' + f(ev.temp) + ' — past the ' + f(a.temp) + ' alert by the margin.'; }
  else if (ev.type === 'stale') { subject = '⚠️ ' + name + ' has stopped reporting'; lead = 'No new reading from ' + name + ' for over ' + (Number(cfg.staleMinutes) || 120) + ' minutes. Its alerts cannot fire until it reports again — check it.'; }
  else if (ev.type === 'back') { subject = '✅ ' + name + ' is reporting again (' + f(ev.temp) + ')'; lead = name + ' is reporting again.'; }
  else { subject = 'Test alert'; lead = 'This is a test.'; }
  var lines = [lead, '', 'Reading: ' + f(ev.temp) + ' at ' + when, 'Sensor: ' + name + ' (' + (SOURCES[sensor.source] || sensor.source) + ' ' + sensor.id + ')'];
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
  var what = { alert: 'ALERT', clear: 'Back to normal', stale: 'Not reporting', back: 'Reporting again' }[ev.type] || ev.type;
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
        if (!rec || rec[1] == null || !isFinite(Number(rec[1]))) return;
        var t = Number(rec[0]);
        if (!best || t > best.at) best = { at: t, temp: isC ? Number(rec[1]) * 9 / 5 + 32 : Number(rec[1]) };
      });
    });
  });
  if (!best) throw new Error('No temperature from this LI-COR sensor in the last 3 hours');
  return best;
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
    if (!(key in ix)) { ix[key] = out.length; out.push({ name: col(row, 0) || id, source: source, id: id, alerts: [] }); }
    var s = out[ix[key]];
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
    var alerts = (s.alerts || []).filter(validAlert_);
    if (!alerts.length) out.push(base.concat(['', '', '', '']));
    alerts.forEach(function (a) {
      out.push(base.concat([a.when === 'below' ? 'At or below' : 'At or above', Number(a.temp),
        safe_(cleanEmails(a.emails).join(', ')), a.on === false ? 'No' : 'Yes']));
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
function statusOf_(cfg, state) {
  return cfg.sensors.map(function (s) {
    var st = state[sensorKey(s)] || {};
    return {
      key: sensorKey(s), name: s.name, source: s.source, id: s.id,
      temp: st.temp == null ? null : Math.round(st.temp * 10) / 10, at: st.at || null, checked: st.checked || null,
      stale: !!st.stale, error: st.error || '',
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
function readState_() { try { return JSON.parse(getProp_('STATE') || '{}') || {}; } catch (e) { return {}; } }
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
`),`script`)},p(j.value===`script`?u(w)(`copied`):`1 · `+u(w)(`copyScript`)),1),g(`button`,{class:`btn btn-primary`,"data-copy":`manifest`,onClick:c[2]||=e=>ye(u(`{
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
`),`manifest`)},p(j.value===`manifest`?u(w)(`copied`):`2 · `+u(w)(`copyManifest`)),1),c[18]||=g(`a`,{class:`btn`,href:`https://sheets.new`,target:`_blank`,rel:`noopener`},`sheets.new ↗`,-1)]),g(`details`,Ne,[g(`summary`,null,p(u(w)(`showScript`)),1),g(`pre`,null,p(u(Ee)),1)]),g(`details`,Pe,[g(`summary`,null,p(u(w)(`showManifest`)),1),g(`pre`,null,p(u(De)),1)]),g(`div`,Fe,[g(`h3`,null,p(u(w)(`warnTitle`)),1),g(`ul`,Ie,[g(`li`,null,p(u(w)(`warn1`)),1),g(`li`,null,p(u(w)(`warn2`)),1),g(`li`,null,p(u(w)(`warn3`)),1),g(`li`,null,p(u(w)(`warn4`)),1)])])]),g(`section`,Le,[g(`h2`,null,p(u(w)(`s2`)),1),g(`label`,Re,[g(`span`,null,p(u(w)(`webAppUrl`)),1),i(g(`input`,{"onUpdate:modelValue":c[3]||=e=>M.value=e,type:`url`,placeholder:u(w)(`urlPh`),autocomplete:`off`,onKeydown:C(v(be,[`prevent`]),[`enter`])},null,40,ze),[[y,M.value]])]),g(`div`,Be,[g(`button`,{class:`btn btn-primary`,disabled:P.value===`connect`||!M.value.trim(),onClick:be},p(P.value===`connect`?`…`:u(w)(`connect`)),9,Ve),u(T)&&u(E)?.sheetName?(a(),h(`span`,He,[r(`✓ `+p(u(w)(`connectedOk`))+` `,1),g(`b`,null,p(u(E).sheetName),1)])):e(``,!0)]),N.value?(a(),h(`p`,Ue,p(N.value),1)):e(``,!0),u(T)?(a(),h(`button`,{key:1,class:`linkish small`,style:{"align-self":`flex-start`},onClick:c[4]||=e=>{u(pe)(),M.value=``}},p(u(w)(`disconnect`)),1)):e(``,!0)]),g(`section`,We,[g(`h2`,null,p(u(w)(`s3`)),1),g(`label`,Ge,[g(`span`,null,p(u(w)(`password`)),1),i(g(`input`,{"onUpdate:modelValue":c[5]||=e=>F.value=e,type:`password`,autocomplete:`current-password`,onKeydown:C(v(L,[`prevent`]),[`enter`])},null,40,Ke),[[y,F.value]]),g(`small`,qe,p(u(w)(`passwordHelp`)),1)]),g(`div`,Je,[g(`button`,{class:`btn btn-primary`,disabled:!u(T)||P.value===`unlock`||F.value.length<4,onClick:L},p(P.value===`unlock`?`…`:u(w)(`unlock`)),9,Ye),u(D)?(a(),h(`span`,Xe,`🔓 `+p(u(w)(`unlocked`)),1)):e(``,!0)]),u(T)?e(``,!0):(a(),h(`p`,Ze,p(u(w)(`needConnect`)),1)),I.value?(a(),h(`p`,Qe,p(I.value),1)):e(``,!0)]),g(`section`,$e,[g(`h2`,null,p(u(w)(`s4`)),1),R.value?(a(),h(d,{key:1},[g(`label`,tt,[g(`span`,null,p(u(w)(`title`)),1),i(g(`input`,{"onUpdate:modelValue":c[6]||=e=>R.value.title=e,type:`text`,placeholder:u(w)(`titlePh`)},null,8,nt),[[y,R.value.title]])]),g(`details`,{class:`add-box`,"data-add":`licor`,open:B.value},[g(`summary`,null,`🔌 `+p(u(w)(`addLicor`)),1),g(`p`,it,p(u(w)(`licorHelp`)),1),u(E)?.hasLicor?(a(),h(`p`,at,[r(`✓ `+p(u(w)(`licorSaved`))+` `,1),g(`button`,{class:`linkish`,onClick:On},p(u(w)(`licorForget`)),1)])):e(``,!0),g(`label`,ot,[g(`span`,null,p(u(w)(`licorToken`)),1),i(g(`input`,{"onUpdate:modelValue":c[7]||=e=>U.value=e,type:`password`,autocomplete:`off`},null,512),[[y,U.value]])]),g(`button`,{class:`btn btn-primary`,disabled:P.value===`licor`||!U.value.trim()&&!u(E)?.hasLicor,style:{"align-self":`flex-start`},onClick:we},p(P.value===`licor`?`…`:u(w)(`licorFind`)),9,st),G.value?(a(),h(`p`,ct,p(G.value),1)):e(``,!0),W.value&&!W.value.length?(a(),h(`p`,lt,p(u(w)(`licorNone`)),1)):e(``,!0),W.value?.length?(a(),h(`ul`,ut,[(a(!0),h(d,null,n(W.value,e=>(a(),h(`li`,{key:e.id},[g(`span`,null,[g(`b`,null,p(kn(e)),1),c[19]||=g(`br`,null,null,-1),g(`small`,dt,p(e.serial),1)]),g(`button`,{class:`btn btn-sm`,disabled:V(`licor`,e.id),onClick:t=>H(`licor`,e.id,kn(e))},p(V(`licor`,e.id)?u(w)(`added`):u(w)(`add`)),9,ft)]))),128))])):e(``,!0)],8,rt),g(`details`,{class:`add-box`,"data-add":`station`,open:B.value},[g(`summary`,null,`🛰 `+p(u(w)(`addStation`)),1),g(`div`,mt,[i(g(`input`,{"onUpdate:modelValue":c[8]||=e=>K.value=e,type:`search`,placeholder:u(w)(`townPh`),"aria-label":u(w)(`town`),style:{flex:`1`,"min-width":`12rem`},onKeydown:C(v(jn,[`prevent`]),[`enter`])},null,40,ht),[[y,K.value]]),g(`button`,{class:`btn btn-primary`,disabled:P.value===`town`||!K.value.trim(),onClick:jn},p(P.value===`town`?`…`:u(w)(`search`)),9,gt)]),Y.value?(a(),h(`p`,_t,p(Y.value),1)):e(``,!0),q.value?.length>1?(a(),h(`ul`,vt,[(a(!0),h(d,null,n(q.value,e=>(a(),h(`li`,{key:e.lat+`,`+e.lon},[g(`span`,null,p(e.label),1),g(`button`,{class:`btn btn-sm`,onClick:t=>Mn(e)},`→`,8,yt)]))),128))])):e(``,!0),J.value?(a(),h(d,{key:2},[g(`p`,bt,[g(`b`,null,p(J.value.label),1)]),g(`h4`,null,p(u(w)(`newaList`)),1),g(`ul`,xt,[(a(!0),h(d,null,n(J.value.newa,e=>(a(),h(`li`,{key:e.sid},[g(`span`,null,[r(p(e.name),1),g(`small`,St,` · `+p(e.state)+` · `+p(e.miles)+` `+p(u(w)(`miles`)),1)]),g(`button`,{class:`btn btn-sm`,disabled:V(`newa`,e.sid),onClick:t=>H(`newa`,e.sid,e.name)},p(V(`newa`,e.sid)?u(w)(`added`):u(w)(`add`)),9,Ct)]))),128))]),g(`h4`,null,p(u(w)(`nwsList`)),1),g(`ul`,wt,[(a(!0),h(d,null,n(J.value.nws,e=>(a(),h(`li`,{key:e.id},[g(`span`,null,[r(p(e.name),1),g(`small`,Tt,` · `+p(e.id)+` · `+p(e.miles)+` `+p(u(w)(`miles`)),1)]),g(`button`,{class:`btn btn-sm`,disabled:V(`nws`,e.id),onClick:t=>H(`nws`,e.id,e.name)},p(V(`nws`,e.id)?u(w)(`added`):u(w)(`add`)),9,Et)]))),128))])],64)):e(``,!0)],8,pt),(a(!0),h(d,null,n(R.value.sensors,(e,o)=>(a(),h(`article`,{key:e.source+e.id,class:`sensor-edit`,"data-sensor":e.id},[g(`div`,Ot,[g(`label`,kt,[g(`span`,null,p(u(w)(`sensorName`)),1),i(g(`input`,{"onUpdate:modelValue":t=>e.name=t,type:`text`},null,8,At),[[y,e.name]])]),g(`button`,{class:`linkish small`,onClick:e=>Se(o)},p(u(w)(`removeSensor`)),9,jt)]),g(`small`,Mt,p(u(re)(e)),1),(a(!0),h(d,null,n(e.alerts,(n,o)=>(a(),h(`div`,{key:o,class:`alert-edit`},[g(`div`,Nt,[g(`div`,Pt,[g(`button`,{type:`button`,class:t({on:n.when===`below`}),onClick:e=>n.when=`below`},`🥶 `+p(u(w)(`atOrBelow`)),11,Ft),g(`button`,{type:`button`,class:t({on:n.when===`above`}),onClick:e=>n.when=`above`},`🔥 `+p(u(w)(`atOrAbove`)),11,It)]),g(`label`,Lt,[i(g(`input`,{"onUpdate:modelValue":e=>n.temp=e,type:`number`,inputmode:`decimal`,step:`0.5`},null,8,Rt),[[y,n.temp,void 0,{number:!0}]]),c[20]||=r(` °F`,-1)]),g(`label`,zt,[i(g(`input`,{"onUpdate:modelValue":e=>n.on=e,type:`checkbox`},null,8,Bt),[[_,n.on]]),r(` `+p(u(w)(`alertOn`)),1)]),g(`button`,{class:`linkish small`,style:{"margin-left":`auto`},onClick:t=>e.alerts.splice(o,1)},p(u(w)(`removeAlert`)),9,Vt)]),g(`label`,Ht,[g(`span`,null,p(u(w)(`emailTo`)),1),i(g(`textarea`,{"onUpdate:modelValue":e=>n.emailsText=e,rows:`2`,placeholder:u(w)(`emailPh`),autocapitalize:`off`,spellcheck:`false`},null,8,Ut),[[y,n.emailsText]])])]))),128)),g(`button`,{class:`linkish small`,style:{"align-self":`flex-start`},onClick:t=>Ce(e)},p(u(w)(`addAlert`)),9,Wt)],8,Dt))),128)),g(`details`,Gt,[g(`summary`,null,`⚙ `+p(u(w)(`staleMin`))+` · `+p(u(w)(`margin`)),1),g(`label`,Kt,[g(`span`,null,p(u(w)(`staleMin`)),1),i(g(`input`,{"onUpdate:modelValue":c[9]||=e=>R.value.staleMinutes=e,type:`number`,min:`15`,step:`15`},null,512),[[y,R.value.staleMinutes,void 0,{number:!0}]]),g(`small`,qt,p(u(w)(`staleHelp`)),1)]),g(`label`,Jt,[g(`span`,null,p(u(w)(`margin`)),1),i(g(`input`,{"onUpdate:modelValue":c[10]||=e=>R.value.margin=e,type:`number`,min:`0`,step:`0.5`},null,512),[[y,R.value.margin,void 0,{number:!0}]]),g(`small`,Yt,p(u(w)(`marginHelp`)),1)]),g(`label`,Xt,[i(g(`input`,{"onUpdate:modelValue":c[11]||=e=>R.value.sendClear=e,type:`checkbox`},null,512),[[_,R.value.sendClear]]),r(` `+p(u(w)(`sendClear`)),1)])]),(a(!0),h(d,null,n(Pn.value,e=>(a(),h(`p`,{key:e,class:`notice notice-alert`,style:{margin:`0`}},p(u(w)(`badEmail`))+` `+p(e),1))),128)),g(`div`,Zt,[g(`button`,{class:`btn btn-primary`,disabled:P.value===`save`,onClick:Fn},p(P.value===`save`?`…`:u(w)(`saveAll`)),9,Qt),Z.value?(a(),h(`span`,$t,`✓ `+p(u(w)(`saved`)),1)):z.value?(a(),h(`span`,en,p(u(w)(`unsaved`)),1)):e(``,!0)]),X.value?(a(),h(`p`,tn,p(X.value),1)):e(``,!0)],64)):(a(),h(`p`,et,p(u(w)(`needUnlock`)),1))]),g(`section`,nn,[g(`h2`,null,p(u(w)(`s5`)),1),g(`p`,rn,p(u(w)(`checkHelp`)),1),g(`p`,an,[r(p(u(w)(`checkingIs`))+` `,1),g(`b`,{class:t(u(E)?.checking?`is-on-text`:`is-off-text`)},p(u(E)?.checking?u(w)(`on`):u(w)(`off`)),3)]),g(`div`,on,[u(E)?.checking?(a(),h(`button`,{key:1,class:`btn`,disabled:!u(D)||!!P.value,onClick:c[13]||=e=>Ln(()=>u(k)(!1),`checking`)},p(u(w)(`turnOff`)),9,cn)):(a(),h(`button`,{key:0,class:`btn btn-primary`,disabled:!u(D)||!!P.value,onClick:c[12]||=e=>Ln(()=>u(k)(!0),`checking`)},p(u(w)(`turnOn`)),9,sn)),g(`button`,{class:`btn`,disabled:!u(D)||!!P.value,onClick:c[14]||=e=>Ln(u(A),`check`)},p(P.value===`check`?`…`:u(w)(`checkNow`)),9,ln),f(l,{to:`/`,class:`btn`},{default:s(()=>[r(p(u(w)(`navStatus`))+` →`,1)]),_:1})]),u(D)?e(``,!0):(a(),h(`p`,un,p(u(w)(`needUnlock`)),1)),In.value?(a(),h(`p`,dn,p(In.value),1)):e(``,!0)]),g(`section`,fn,[g(`h2`,null,p(u(w)(`s6`)),1),g(`h3`,pn,`🧪 `+p(u(w)(`testTitle`)),1),g(`div`,mn,[g(`button`,{class:`btn btn-primary`,disabled:!u(D)||P.value===`test`,onClick:c[15]||=e=>Vn(!1)},p(u(w)(`testAll`)),9,hn)]),g(`div`,gn,[i(g(`input`,{"onUpdate:modelValue":c[16]||=e=>Rn.value=e,type:`text`,inputmode:`email`,autocapitalize:`off`,placeholder:`name@example.com`,style:{flex:`1`,"min-width":`12rem`}},null,512),[[y,Rn.value]]),g(`button`,{class:`btn`,disabled:!u(D)||P.value===`test`||!u(ie)(Rn.value).length,onClick:c[17]||=e=>Vn(!0)},p(u(w)(`testOne`)),9,_n)]),u(D)?.quota==null?e(``,!0):(a(),h(`p`,vn,p(u(w)(`quotaLeft`))+`: `+p(u(D).quota),1)),zn.value?(a(),h(`p`,yn,`✓ `+p(zn.value),1)):e(``,!0),Bn.value?(a(),h(`p`,bn,p(Bn.value),1)):e(``,!0),g(`h3`,xn,`📱 `+p(u(w)(`nTitle`)),1),f(m)]),u(T)?(a(),h(`section`,Sn,[g(`h2`,null,p(u(w)(`s7`)),1),g(`p`,Cn,p(u(w)(`shareHelp`)),1),$.value?(a(),h(`img`,{key:0,src:$.value,alt:`QR code`,class:`qr`},null,8,wn)):e(``,!0),g(`code`,Tn,p(Q.value),1),g(`div`,En,[g(`button`,{class:`btn btn-primary`,onClick:Un},p(Hn.value?u(w)(`copied`):u(w)(`copyLink`)),1),u(Wn)?(a(),h(`button`,{key:0,class:`btn`,onClick:Gn},p(u(w)(`shareBtn`)),1)):e(``,!0),$.value?(a(),h(`a`,{key:1,class:`btn`,href:$.value,download:`temp-alert-qr.png`},`⬇ QR`,8,Dn)):e(``,!0)])])):e(``,!0)])}}};export{On as default};