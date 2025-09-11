import{j as Ae}from"./jsx-runtime.3a2d0367.js";import{r as ft}from"./index.b2a7ed32.js";import{_ as fn}from"./ToolLoader.28be0cc0.js";import{L as Nf}from"./LoadingSpinner.d3c04f9a.js";import{u as Pf}from"./utils.b058de7b.js";import{a as Qt,g as Uf}from"./_commonjs-dynamic-modules.23156833.js";function jf(u,n){for(var c=0;c<n.length;c++){const _=n[c];if(typeof _!="string"&&!Array.isArray(_)){for(const y in _)if(y!=="default"&&!(y in u)){const $=Object.getOwnPropertyDescriptor(_,y);$&&Object.defineProperty(u,y,$.get?$:{enumerable:!0,get:()=>_[y]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var qf=Object.create,Gc=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,Wc=Object.getOwnPropertyNames,Vf=Object.getPrototypeOf,Gf=Object.prototype.hasOwnProperty,Sn=(u,n)=>function(){return n||(0,u[Wc(u)[0]])((n={exports:{}}).exports,n),n.exports},Wf=(u,n,c,_)=>{if(n&&typeof n=="object"||typeof n=="function")for(let y of Wc(n))!Gf.call(u,y)&&y!==c&&Gc(u,y,{get:()=>n[y],enumerable:!(_=Lf(n,y))||_.enumerable});return u},ka=(u,n,c)=>(c=u!=null?qf(Vf(u)):{},Wf(n||!u||!u.__esModule?Gc(c,"default",{value:u,enumerable:!0}):c,u)),Ff=Sn({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(u,n){function c(_){for(var y=new Array(_),$=0;$<_;++$)y[$]=$;return y}n.exports=c}}),Hf=Sn({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(u,n){n.exports=function(y){return y!=null&&(c(y)||_(y)||!!y._isBuffer)};function c(y){return!!y.constructor&&typeof y.constructor.isBuffer=="function"&&y.constructor.isBuffer(y)}function _(y){return typeof y.readFloatLE=="function"&&typeof y.slice=="function"&&c(y.slice(0,0))}}}),Sa=Sn({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(u,n){var c=Ff(),_=Hf(),y=typeof Float64Array<"u";function $(W,X){return W[0]-X[0]}function z(){var W=this.stride,X=new Array(W.length),q;for(q=0;q<X.length;++q)X[q]=[Math.abs(W[q]),q];X.sort($);var Te=new Array(X.length);for(q=0;q<Te.length;++q)Te[q]=X[q][1];return Te}function R(W,X){var q=["View",X,"d",W].join("");X<0&&(q="View_Nil"+W);var Te=W==="generic";if(X===-1){var re="function "+q+"(a){this.data=a;};var proto="+q+".prototype;proto.dtype='"+W+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+q+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+q+"(a){return new "+q+"(a);}",Ye=new Function(re);return Ye()}else if(X===0){var re="function "+q+"(a,d) {this.data = a;this.offset = d};var proto="+q+".prototype;proto.dtype='"+W+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+q+"_copy() {return new "+q+"(this.data,this.offset)};proto.pick=function "+q+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+q+"_get(){return "+(Te?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+q+"_set(v){return "+(Te?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+q+"(a,b,c,d){return new "+q+"(a,d)}",Ye=new Function("TrivialArray",re);return Ye(D[W][0])}var re=["'use strict'"],fe=c(X),Oe=fe.map(function(te){return"i"+te}),De="this.offset+"+fe.map(function(te){return"this.stride["+te+"]*i"+te}).join("+"),je=fe.map(function(te){return"b"+te}).join(","),Me=fe.map(function(te){return"c"+te}).join(",");re.push("function "+q+"(a,"+je+","+Me+",d){this.data=a","this.shape=["+je+"]","this.stride=["+Me+"]","this.offset=d|0}","var proto="+q+".prototype","proto.dtype='"+W+"'","proto.dimension="+X),re.push("Object.defineProperty(proto,'size',{get:function "+q+"_size(){return "+fe.map(function(te){return"this.shape["+te+"]"}).join("*"),"}})"),X===1?re.push("proto.order=[0]"):(re.push("Object.defineProperty(proto,'order',{get:"),X<4?(re.push("function "+q+"_order(){"),X===2?re.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):X===3&&re.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):re.push("ORDER})")),re.push("proto.set=function "+q+"_set("+Oe.join(",")+",v){"),Te?re.push("return this.data.set("+De+",v)}"):re.push("return this.data["+De+"]=v}"),re.push("proto.get=function "+q+"_get("+Oe.join(",")+"){"),Te?re.push("return this.data.get("+De+")}"):re.push("return this.data["+De+"]}"),re.push("proto.index=function "+q+"_index(",Oe.join(),"){return "+De+"}"),re.push("proto.hi=function "+q+"_hi("+Oe.join(",")+"){return new "+q+"(this.data,"+fe.map(function(te){return["(typeof i",te,"!=='number'||i",te,"<0)?this.shape[",te,"]:i",te,"|0"].join("")}).join(",")+","+fe.map(function(te){return"this.stride["+te+"]"}).join(",")+",this.offset)}");var _t=fe.map(function(te){return"a"+te+"=this.shape["+te+"]"}),Ne=fe.map(function(te){return"c"+te+"=this.stride["+te+"]"});re.push("proto.lo=function "+q+"_lo("+Oe.join(",")+"){var b=this.offset,d=0,"+_t.join(",")+","+Ne.join(","));for(var de=0;de<X;++de)re.push("if(typeof i"+de+"==='number'&&i"+de+">=0){d=i"+de+"|0;b+=c"+de+"*d;a"+de+"-=d}");re.push("return new "+q+"(this.data,"+fe.map(function(te){return"a"+te}).join(",")+","+fe.map(function(te){return"c"+te}).join(",")+",b)}"),re.push("proto.step=function "+q+"_step("+Oe.join(",")+"){var "+fe.map(function(te){return"a"+te+"=this.shape["+te+"]"}).join(",")+","+fe.map(function(te){return"b"+te+"=this.stride["+te+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var de=0;de<X;++de)re.push("if(typeof i"+de+"==='number'){d=i"+de+"|0;if(d<0){c+=b"+de+"*(a"+de+"-1);a"+de+"=ceil(-a"+de+"/d)}else{a"+de+"=ceil(a"+de+"/d)}b"+de+"*=d}");re.push("return new "+q+"(this.data,"+fe.map(function(te){return"a"+te}).join(",")+","+fe.map(function(te){return"b"+te}).join(",")+",c)}");for(var be=new Array(X),xe=new Array(X),de=0;de<X;++de)be[de]="a[i"+de+"]",xe[de]="b[i"+de+"]";re.push("proto.transpose=function "+q+"_transpose("+Oe+"){"+Oe.map(function(te,Ea){return te+"=("+te+"===undefined?"+Ea+":"+te+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+q+"(this.data,"+be.join(",")+","+xe.join(",")+",this.offset)}"),re.push("proto.pick=function "+q+"_pick("+Oe+"){var a=[],b=[],c=this.offset");for(var de=0;de<X;++de)re.push("if(typeof i"+de+"==='number'&&i"+de+">=0){c=(c+this.stride["+de+"]*i"+de+")|0}else{a.push(this.shape["+de+"]);b.push(this.stride["+de+"])}");re.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),re.push("return function construct_"+q+"(data,shape,stride,offset){return new "+q+"(data,"+fe.map(function(te){return"shape["+te+"]"}).join(",")+","+fe.map(function(te){return"stride["+te+"]"}).join(",")+",offset)}");var Ye=new Function("CTOR_LIST","ORDER",re.join(`
`));return Ye(D[W],z)}function E(W){if(_(W))return"buffer";if(y)switch(Object.prototype.toString.call(W)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(W)?"array":"generic"}var D={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function G(W,X,q,Te){if(W===void 0){var Me=D.array[0];return Me([])}else typeof W=="number"&&(W=[W]);X===void 0&&(X=[W.length]);var re=X.length;if(q===void 0){q=new Array(re);for(var fe=re-1,Oe=1;fe>=0;--fe)q[fe]=Oe,Oe*=X[fe]}if(Te===void 0){Te=0;for(var fe=0;fe<re;++fe)q[fe]<0&&(Te-=(X[fe]-1)*q[fe])}for(var De=E(W),je=D[De];je.length<=re+1;)je.push(R(De,je.length-1));var Me=je[re+1];return Me(W,X,q,Te)}n.exports=G}}),Zf=typeof global=="object"&&global&&global.Object===Object&&global,Kf=Zf,Qf=typeof self=="object"&&self&&self.Object===Object&&self,Xf=Kf||Qf||Function("return this")(),Tn=Xf,Yf=Tn.Symbol,ma=Yf,Fc=Object.prototype,Jf=Fc.hasOwnProperty,em=Fc.toString,br=ma?ma.toStringTag:void 0;function tm(u){var n=Jf.call(u,br),c=u[br];try{u[br]=void 0;var _=!0}catch{}var y=em.call(u);return _&&(n?u[br]=c:delete u[br]),y}var rm=tm,am=Object.prototype,im=am.toString;function nm(u){return im.call(u)}var sm=nm,om="[object Null]",um="[object Undefined]",Dc=ma?ma.toStringTag:void 0;function lm(u){return u==null?u===void 0?um:om:Dc&&Dc in Object(u)?rm(u):sm(u)}var dm=lm;function pm(u){var n=typeof u;return u!=null&&(n=="object"||n=="function")}var Hc=pm,cm="[object AsyncFunction]",hm="[object Function]",fm="[object GeneratorFunction]",mm="[object Proxy]";function gm(u){if(!Hc(u))return!1;var n=dm(u);return n==hm||n==fm||n==cm||n==mm}var _m=gm,ym=Tn["__core-js_shared__"],pn=ym,Mc=function(){var u=/[^.]+$/.exec(pn&&pn.keys&&pn.keys.IE_PROTO||"");return u?"Symbol(src)_1."+u:""}();function vm(u){return!!Mc&&Mc in u}var wm=vm,bm=Function.prototype,$m=bm.toString;function xm(u){if(u!=null){try{return $m.call(u)}catch{}try{return u+""}catch{}}return""}var km=xm,Sm=/[\\^$.*+?()[\]{}|]/g,Tm=/^\[object .+?Constructor\]$/,Im=Function.prototype,Em=Object.prototype,zm=Im.toString,Cm=Em.hasOwnProperty,Om=RegExp("^"+zm.call(Cm).replace(Sm,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Am(u){if(!Hc(u)||wm(u))return!1;var n=_m(u)?Om:Tm;return n.test(km(u))}var Rm=Am;function Bm(u,n){return u?.[n]}var Dm=Bm;function Mm(u,n){var c=Dm(u,n);return Rm(c)?c:void 0}var Zc=Mm,Nm=Zc(Object,"create"),Er=Nm;function Pm(){this.__data__=Er?Er(null):{},this.size=0}var Um=Pm;function jm(u){var n=this.has(u)&&delete this.__data__[u];return this.size-=n?1:0,n}var qm=jm,Lm="__lodash_hash_undefined__",Vm=Object.prototype,Gm=Vm.hasOwnProperty;function Wm(u){var n=this.__data__;if(Er){var c=n[u];return c===Lm?void 0:c}return Gm.call(n,u)?n[u]:void 0}var Fm=Wm,Hm=Object.prototype,Zm=Hm.hasOwnProperty;function Km(u){var n=this.__data__;return Er?n[u]!==void 0:Zm.call(n,u)}var Qm=Km,Xm="__lodash_hash_undefined__";function Ym(u,n){var c=this.__data__;return this.size+=this.has(u)?0:1,c[u]=Er&&n===void 0?Xm:n,this}var Jm=Ym;function ar(u){var n=-1,c=u==null?0:u.length;for(this.clear();++n<c;){var _=u[n];this.set(_[0],_[1])}}ar.prototype.clear=Um;ar.prototype.delete=qm;ar.prototype.get=Fm;ar.prototype.has=Qm;ar.prototype.set=Jm;var Nc=ar;function eg(){this.__data__=[],this.size=0}var tg=eg;function rg(u,n){return u===n||u!==u&&n!==n}var ag=rg;function ig(u,n){for(var c=u.length;c--;)if(ag(u[c][0],n))return c;return-1}var Ta=ig,ng=Array.prototype,sg=ng.splice;function og(u){var n=this.__data__,c=Ta(n,u);if(c<0)return!1;var _=n.length-1;return c==_?n.pop():sg.call(n,c,1),--this.size,!0}var ug=og;function lg(u){var n=this.__data__,c=Ta(n,u);return c<0?void 0:n[c][1]}var dg=lg;function pg(u){return Ta(this.__data__,u)>-1}var cg=pg;function hg(u,n){var c=this.__data__,_=Ta(c,u);return _<0?(++this.size,c.push([u,n])):c[_][1]=n,this}var fg=hg;function ir(u){var n=-1,c=u==null?0:u.length;for(this.clear();++n<c;){var _=u[n];this.set(_[0],_[1])}}ir.prototype.clear=tg;ir.prototype.delete=ug;ir.prototype.get=dg;ir.prototype.has=cg;ir.prototype.set=fg;var mg=ir,gg=Zc(Tn,"Map"),_g=gg;function yg(){this.size=0,this.__data__={hash:new Nc,map:new(_g||mg),string:new Nc}}var vg=yg;function wg(u){var n=typeof u;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?u!=="__proto__":u===null}var bg=wg;function $g(u,n){var c=u.__data__;return bg(n)?c[typeof n=="string"?"string":"hash"]:c.map}var Ia=$g;function xg(u){var n=Ia(this,u).delete(u);return this.size-=n?1:0,n}var kg=xg;function Sg(u){return Ia(this,u).get(u)}var Tg=Sg;function Ig(u){return Ia(this,u).has(u)}var Eg=Ig;function zg(u,n){var c=Ia(this,u),_=c.size;return c.set(u,n),this.size+=c.size==_?0:1,this}var Cg=zg;function nr(u){var n=-1,c=u==null?0:u.length;for(this.clear();++n<c;){var _=u[n];this.set(_[0],_[1])}}nr.prototype.clear=vg;nr.prototype.delete=kg;nr.prototype.get=Tg;nr.prototype.has=Eg;nr.prototype.set=Cg;var Kc=nr,Og="Expected a function";function In(u,n){if(typeof u!="function"||n!=null&&typeof n!="function")throw new TypeError(Og);var c=function(){var _=arguments,y=n?n.apply(this,_):_[0],$=c.cache;if($.has(y))return $.get(y);var z=u.apply(this,_);return c.cache=$.set(y,z)||$,z};return c.cache=new(In.Cache||Kc),c}In.Cache=Kc;var Ag=In,En=ka(Sa()),Qc=class mn{constructor(n,c){this.type="application/octet-stream",this.params={},this.type=n,this.params=c}toString(){const n=[];for(const c in this.params){const _=this.params[c];n.push(`${c}=${_}`)}return[this.type,...n].join(";")}static create(n,c){return new mn(n,c)}isIdentical(n){return this.type===n.type&&this.params===n.params}isEqual(n){return this.type===n.type}static fromString(n){const[c,..._]=n.split(";"),y={};for(const $ of _){const[z,R]=$.split("=");y[z.trim()]=R.trim()}return new mn(c,y)}},cn=ka(Sa());async function Rg(u){const n=Qc.fromString(u.type);switch(n.type){case"image/x-alpha8":{const c=parseInt(n.params.width),_=parseInt(n.params.height);return(0,cn.default)(new Uint8Array(await u.arrayBuffer()),[_,c,1])}case"image/x-rgba8":{const c=parseInt(n.params.width),_=parseInt(n.params.height);return(0,cn.default)(new Uint8Array(await u.arrayBuffer()),[_,c,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const c=await createImageBitmap(u),_=Ng(c);return(0,cn.default)(new Uint8Array(_.data),[_.height,_.width,4])}default:throw new Error(`Invalid format: ${n.type} with params: ${n.params}`)}}async function Bg(u,n=.8,c="image/png"){const[_,y,$]=u.shape;switch(c){case"image/x-alpha8":case"image/x-rgba8":{const E=Qc.create(c,{width:y.toString(),height:_.toString()});return new Blob([u.data],{type:E.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const E=new ImageData(new Uint8ClampedArray(u.data),y,_);var z=Xc(E.width,E.height),R=z.getContext("2d");return R.putImageData(E,0,0),z.convertToBlob({quality:n,type:c})}default:throw new Error(`Invalid format: ${c}`)}}function Dg(u){return new RegExp("^(?:[a-z+]+:)?//","i").test(u)}function Mg(u,n){return Dg(u)?u:new URL(u,n).href}function Ng(u){var n=Xc(u.width,u.height),c=n.getContext("2d");return c.drawImage(u,0,0),c.getImageData(0,0,n.width,n.height)}function Pg(u){if(typeof Uint8Array<"u")return new Uint8Array(u);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(u);if(typeof Uint16Array<"u")return new Uint16Array(u);if(typeof Uint32Array<"u")return new Uint32Array(u);if(typeof Float32Array<"u")return new Float32Array(u);if(typeof Float64Array<"u")return new Float64Array(u);throw new Error("TypedArray not supported")}function Pc(u,n,c,_=!1){const[y,$,z]=u.shape;let R=$/n,E=y/c;_&&(R=E=Math.max(R,E)>1?Math.max(R,E):Math.min(R,E));const D=(0,En.default)(Pg(z*n*c),[c,n,z]);for(let G=0;G<c;G++)for(let W=0;W<n;W++){const X=W*R,q=G*E,Te=Math.max(Math.floor(X),0),re=Math.min(Math.ceil(X),$-1),fe=Math.max(Math.floor(q),0),Oe=Math.min(Math.ceil(q),y-1),De=X-Te,je=q-fe;for(let Me=0;Me<z;Me++){const _t=u.get(fe,Te,Me),Ne=u.get(fe,re,Me),de=u.get(Oe,Te,Me),be=u.get(Oe,re,Me),xe=(1-De)*(1-je)*_t+De*(1-je)*Ne+(1-De)*je*de+De*je*be;D.set(G,W,Me,xe)}}return D}function Ug(u,n=[128,128,128],c=[256,256,256]){var _=u.data;const[y,$,z]=u.shape,R=y*$,E=new Float32Array(3*R);for(let D=0,G=0;D<_.length;D+=4,G+=1)E[G]=(_[D]-n[0])/c[0],E[G+R]=(_[D+1]-n[1])/c[1],E[G+R+R]=(_[D+2]-n[2])/c[2];return(0,En.default)(E,[1,3,y,$])}async function jg(u,n){return typeof u=="string"&&(u=Mg(u,n.publicPath),u=new URL(u)),u instanceof URL&&(u=await(await fetch(u,{})).blob()),(u instanceof ArrayBuffer||ArrayBuffer.isView(u))&&(u=new Blob([u])),u instanceof Blob&&(u=await Rg(u)),u}function qg(u){const n=new Uint8Array(u.data.length);for(let c=0;c<u.data.length;c++)n[c]=u.data[c]*255;return(0,En.default)(n,u.shape)}function Xc(u,n){let c;if(typeof OffscreenCanvas<"u"?c=new OffscreenCanvas(u,n):c=document.createElement("canvas"),!c)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return c}var Lg=ka(Sa()),Yc=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,Vg=()=>navigator.hardwareConcurrency??4;async function Uc(u,n){return URL.createObjectURL(await Jc(u,n))}async function Jc(u,n){const c=new URL("resources.json",n.publicPath),_=await fetch(c);if(!_.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const $=(await _.json())[u];if(!$)throw new Error(`Resource ${u} not found. Ensure that the config.publicPath is configured correctly.`);const z=$.chunks;let R=0;const E=z.map(async W=>{const X=W.offsets[1]-W.offsets[0],q=n.publicPath?new URL(W.name,n.publicPath).toString():W.name,re=await(await fetch(q,n.fetchArgs)).blob();if(X!==re.size)throw new Error(`Failed to fetch ${u} with size ${X} but got ${re.size}`);return n.progress&&(R+=X,n.progress(`fetch:${u}`,R,$.size)),re}),D=await Promise.all(E),G=new Blob(D,{type:$.mime});if(G.size!==$.size)throw new Error(`Failed to fetch ${u} with size ${$.size} but got ${G.size}`);return G}var $r=null,eh=async u=>($r!==null||(u?$r=(await fn(()=>import("./ort.webgpu.bundle.min.ccb8b8e4.js"),["_astro/ort.webgpu.bundle.min.ccb8b8e4.js","_astro/ToolLoader.28be0cc0.js","_astro/jsx-runtime.3a2d0367.js","_astro/index.b2a7ed32.js"])).default:$r=(await fn(()=>Promise.resolve().then(()=>ly),void 0)).default),$r);async function Gg(u,n){const c=n.device==="gpu"&&await Yc(),_=c&&n.proxyToWorker,y=[c?"webgpu":"wasm"],$=await eh(c);n.debug&&(console.debug("	Using WebGPU:",c),console.debug("	Proxy to Worker:",_),$.env.debug=!0,$.env.logLevel="verbose"),$.env.wasm.numThreads=Vg(),$.env.wasm.proxy=_;const z=c?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",R=await Uc(`${z}.wasm`,n),E=await Uc(`${z}.mjs`,n);$.env.wasm.wasmPaths={mjs:E,wasm:R},n.debug&&console.debug("ort.env.wasm:",$.env.wasm);const D={executionProviders:y,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await $.InferenceSession.create(u,D).catch(W=>{throw new Error(`Failed to create session: "${W}". Please check if the publicPath is set correctly.`)})}async function Wg(u,n,c,_){const y=_.device==="gpu"&&await Yc(),$=await eh(y),z={};for(const[D,G]of n)z[D]=new $.Tensor("float32",new Float32Array(G.data),G.shape);const R=await u.run(z,{}),E=[];for(const D of c){const G=R[D],W=G.dims,X=G.data,q=(0,Lg.default)(X,W);E.push(q)}return E}var we;(function(u){u.assertEqual=y=>y;function n(y){}u.assertIs=n;function c(y){throw new Error}u.assertNever=c,u.arrayToEnum=y=>{const $={};for(const z of y)$[z]=z;return $},u.getValidEnumValues=y=>{const $=u.objectKeys(y).filter(R=>typeof y[y[R]]!="number"),z={};for(const R of $)z[R]=y[R];return u.objectValues(z)},u.objectValues=y=>u.objectKeys(y).map(function($){return y[$]}),u.objectKeys=typeof Object.keys=="function"?y=>Object.keys(y):y=>{const $=[];for(const z in y)Object.prototype.hasOwnProperty.call(y,z)&&$.push(z);return $},u.find=(y,$)=>{for(const z of y)if($(z))return z},u.isInteger=typeof Number.isInteger=="function"?y=>Number.isInteger(y):y=>typeof y=="number"&&isFinite(y)&&Math.floor(y)===y;function _(y,$=" | "){return y.map(z=>typeof z=="string"?`'${z}'`:z).join($)}u.joinValues=_,u.jsonStringifyReplacer=(y,$)=>typeof $=="bigint"?$.toString():$})(we||(we={}));var gn;(function(u){u.mergeShapes=(n,c)=>({...n,...c})})(gn||(gn={}));var F=we.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),bt=u=>{switch(typeof u){case"undefined":return F.undefined;case"string":return F.string;case"number":return isNaN(u)?F.nan:F.number;case"boolean":return F.boolean;case"function":return F.function;case"bigint":return F.bigint;case"symbol":return F.symbol;case"object":return Array.isArray(u)?F.array:u===null?F.null:u.then&&typeof u.then=="function"&&u.catch&&typeof u.catch=="function"?F.promise:typeof Map<"u"&&u instanceof Map?F.map:typeof Set<"u"&&u instanceof Set?F.set:typeof Date<"u"&&u instanceof Date?F.date:F.object;default:return F.unknown}},P=we.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Fg=u=>JSON.stringify(u,null,2).replace(/"([^"]+)":/g,"$1:"),pt=class th extends Error{get errors(){return this.issues}constructor(n){super(),this.issues=[],this.addIssue=_=>{this.issues=[...this.issues,_]},this.addIssues=(_=[])=>{this.issues=[...this.issues,..._]};const c=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,c):this.__proto__=c,this.name="ZodError",this.issues=n}format(n){const c=n||function($){return $.message},_={_errors:[]},y=$=>{for(const z of $.issues)if(z.code==="invalid_union")z.unionErrors.map(y);else if(z.code==="invalid_return_type")y(z.returnTypeError);else if(z.code==="invalid_arguments")y(z.argumentsError);else if(z.path.length===0)_._errors.push(c(z));else{let R=_,E=0;for(;E<z.path.length;){const D=z.path[E];E===z.path.length-1?(R[D]=R[D]||{_errors:[]},R[D]._errors.push(c(z))):R[D]=R[D]||{_errors:[]},R=R[D],E++}}};return y(this),_}static assert(n){if(!(n instanceof th))throw new Error(`Not a ZodError: ${n}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,we.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(n=c=>c.message){const c={},_=[];for(const y of this.issues)y.path.length>0?(c[y.path[0]]=c[y.path[0]]||[],c[y.path[0]].push(n(y))):_.push(n(y));return{formErrors:_,fieldErrors:c}}get formErrors(){return this.flatten()}};pt.create=u=>new pt(u);var Jt=(u,n)=>{let c;switch(u.code){case P.invalid_type:u.received===F.undefined?c="Required":c=`Expected ${u.expected}, received ${u.received}`;break;case P.invalid_literal:c=`Invalid literal value, expected ${JSON.stringify(u.expected,we.jsonStringifyReplacer)}`;break;case P.unrecognized_keys:c=`Unrecognized key(s) in object: ${we.joinValues(u.keys,", ")}`;break;case P.invalid_union:c="Invalid input";break;case P.invalid_union_discriminator:c=`Invalid discriminator value. Expected ${we.joinValues(u.options)}`;break;case P.invalid_enum_value:c=`Invalid enum value. Expected ${we.joinValues(u.options)}, received '${u.received}'`;break;case P.invalid_arguments:c="Invalid function arguments";break;case P.invalid_return_type:c="Invalid function return type";break;case P.invalid_date:c="Invalid date";break;case P.invalid_string:typeof u.validation=="object"?"includes"in u.validation?(c=`Invalid input: must include "${u.validation.includes}"`,typeof u.validation.position=="number"&&(c=`${c} at one or more positions greater than or equal to ${u.validation.position}`)):"startsWith"in u.validation?c=`Invalid input: must start with "${u.validation.startsWith}"`:"endsWith"in u.validation?c=`Invalid input: must end with "${u.validation.endsWith}"`:we.assertNever(u.validation):u.validation!=="regex"?c=`Invalid ${u.validation}`:c="Invalid";break;case P.too_small:u.type==="array"?c=`Array must contain ${u.exact?"exactly":u.inclusive?"at least":"more than"} ${u.minimum} element(s)`:u.type==="string"?c=`String must contain ${u.exact?"exactly":u.inclusive?"at least":"over"} ${u.minimum} character(s)`:u.type==="number"?c=`Number must be ${u.exact?"exactly equal to ":u.inclusive?"greater than or equal to ":"greater than "}${u.minimum}`:u.type==="date"?c=`Date must be ${u.exact?"exactly equal to ":u.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(u.minimum))}`:c="Invalid input";break;case P.too_big:u.type==="array"?c=`Array must contain ${u.exact?"exactly":u.inclusive?"at most":"less than"} ${u.maximum} element(s)`:u.type==="string"?c=`String must contain ${u.exact?"exactly":u.inclusive?"at most":"under"} ${u.maximum} character(s)`:u.type==="number"?c=`Number must be ${u.exact?"exactly":u.inclusive?"less than or equal to":"less than"} ${u.maximum}`:u.type==="bigint"?c=`BigInt must be ${u.exact?"exactly":u.inclusive?"less than or equal to":"less than"} ${u.maximum}`:u.type==="date"?c=`Date must be ${u.exact?"exactly":u.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(u.maximum))}`:c="Invalid input";break;case P.custom:c="Invalid input";break;case P.invalid_intersection_types:c="Intersection results could not be merged";break;case P.not_multiple_of:c=`Number must be a multiple of ${u.multipleOf}`;break;case P.not_finite:c="Number must be finite";break;default:c=n.defaultError,we.assertNever(u)}return{message:c}},rh=Jt;function Hg(u){rh=u}function ga(){return rh}var _a=u=>{const{data:n,path:c,errorMaps:_,issueData:y}=u,$=[...c,...y.path||[]],z={...y,path:$};if(y.message!==void 0)return{...y,path:$,message:y.message};let R="";const E=_.filter(D=>!!D).slice().reverse();for(const D of E)R=D(z,{data:n,defaultError:R}).message;return{...y,path:$,message:R}},Zg=[];function L(u,n){const c=ga(),_=_a({issueData:n,data:u.data,path:u.path,errorMaps:[u.common.contextualErrorMap,u.schemaErrorMap,c,c===Jt?void 0:Jt].filter(y=>!!y)});u.common.issues.push(_)}var Ze=class ah{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(n,c){const _=[];for(const y of c){if(y.status==="aborted")return oe;y.status==="dirty"&&n.dirty(),_.push(y.value)}return{status:n.value,value:_}}static async mergeObjectAsync(n,c){const _=[];for(const y of c){const $=await y.key,z=await y.value;_.push({key:$,value:z})}return ah.mergeObjectSync(n,_)}static mergeObjectSync(n,c){const _={};for(const y of c){const{key:$,value:z}=y;if($.status==="aborted"||z.status==="aborted")return oe;$.status==="dirty"&&n.dirty(),z.status==="dirty"&&n.dirty(),$.value!=="__proto__"&&(typeof z.value<"u"||y.alwaysSet)&&(_[$.value]=z.value)}return{status:n.value,value:_}}},oe=Object.freeze({status:"aborted"}),Yt=u=>({status:"dirty",value:u}),He=u=>({status:"valid",value:u}),_n=u=>u.status==="aborted",yn=u=>u.status==="dirty",Lt=u=>u.status==="valid",zr=u=>typeof Promise<"u"&&u instanceof Promise;function ya(u,n,c,_){if(c==="a"&&!_)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?u!==n||!_:!n.has(u))throw new TypeError("Cannot read private member from an object whose class did not declare it");return c==="m"?_:c==="a"?_.call(u):_?_.value:n.get(u)}function ih(u,n,c,_,y){if(_==="m")throw new TypeError("Private method is not writable");if(_==="a"&&!y)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?u!==n||!y:!n.has(u))throw new TypeError("Cannot write private member to an object whose class did not declare it");return _==="a"?y.call(u,c):y?y.value=c:n.set(u,c),c}var J;(function(u){u.errToObj=n=>typeof n=="string"?{message:n}:n||{},u.toString=n=>typeof n=="string"?n:n?.message})(J||(J={}));var kr,Sr,gt=class{constructor(u,n,c,_){this._cachedPath=[],this.parent=u,this.data=n,this._path=c,this._key=_}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},jc=(u,n)=>{if(Lt(n))return{success:!0,data:n.value};if(!u.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const c=new pt(u.common.issues);return this._error=c,this._error}}};function ce(u){if(!u)return{};const{errorMap:n,invalid_type_error:c,required_error:_,description:y}=u;if(n&&(c||_))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return n?{errorMap:n,description:y}:{errorMap:(z,R)=>{var E,D;const{message:G}=u;return z.code==="invalid_enum_value"?{message:G??R.defaultError}:typeof R.data>"u"?{message:(E=G??_)!==null&&E!==void 0?E:R.defaultError}:z.code!=="invalid_type"?{message:R.defaultError}:{message:(D=G??c)!==null&&D!==void 0?D:R.defaultError}},description:y}}var he=class{get description(){return this._def.description}_getType(u){return bt(u.data)}_getOrReturnCtx(u,n){return n||{common:u.parent.common,data:u.data,parsedType:bt(u.data),schemaErrorMap:this._def.errorMap,path:u.path,parent:u.parent}}_processInputParams(u){return{status:new Ze,ctx:{common:u.parent.common,data:u.data,parsedType:bt(u.data),schemaErrorMap:this._def.errorMap,path:u.path,parent:u.parent}}}_parseSync(u){const n=this._parse(u);if(zr(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(u){const n=this._parse(u);return Promise.resolve(n)}parse(u,n){const c=this.safeParse(u,n);if(c.success)return c.data;throw c.error}safeParse(u,n){var c;const _={common:{issues:[],async:(c=n?.async)!==null&&c!==void 0?c:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:u,parsedType:bt(u)},y=this._parseSync({data:u,path:_.path,parent:_});return jc(_,y)}"~validate"(u){var n,c;const _={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:u,parsedType:bt(u)};if(!this["~standard"].async)try{const y=this._parseSync({data:u,path:[],parent:_});return Lt(y)?{value:y.value}:{issues:_.common.issues}}catch(y){!((c=(n=y?.message)===null||n===void 0?void 0:n.toLowerCase())===null||c===void 0)&&c.includes("encountered")&&(this["~standard"].async=!0),_.common={issues:[],async:!0}}return this._parseAsync({data:u,path:[],parent:_}).then(y=>Lt(y)?{value:y.value}:{issues:_.common.issues})}async parseAsync(u,n){const c=await this.safeParseAsync(u,n);if(c.success)return c.data;throw c.error}async safeParseAsync(u,n){const c={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:u,parsedType:bt(u)},_=this._parse({data:u,path:c.path,parent:c}),y=await(zr(_)?_:Promise.resolve(_));return jc(c,y)}refine(u,n){const c=_=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(_):n;return this._refinement((_,y)=>{const $=u(_),z=()=>y.addIssue({code:P.custom,...c(_)});return typeof Promise<"u"&&$ instanceof Promise?$.then(R=>R?!0:(z(),!1)):$?!0:(z(),!1)})}refinement(u,n){return this._refinement((c,_)=>u(c)?!0:(_.addIssue(typeof n=="function"?n(c,_):n),!1))}_refinement(u){return new ct({schema:this,typeName:ne.ZodEffects,effect:{type:"refinement",refinement:u}})}superRefine(u){return this._refinement(u)}constructor(u){this.spa=this.safeParseAsync,this._def=u,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:n=>this["~validate"](n)}}optional(){return mt.create(this,this._def)}nullable(){return Et.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Vt.create(this)}promise(){return rr.create(this,this._def)}or(u){return Mr.create([this,u],this._def)}and(u){return Nr.create(this,u,this._def)}transform(u){return new ct({...ce(this._def),schema:this,typeName:ne.ZodEffects,effect:{type:"transform",transform:u}})}default(u){const n=typeof u=="function"?u:()=>u;return new qr({...ce(this._def),innerType:this,defaultValue:n,typeName:ne.ZodDefault})}brand(){return new zn({typeName:ne.ZodBranded,type:this,...ce(this._def)})}catch(u){const n=typeof u=="function"?u:()=>u;return new Lr({...ce(this._def),innerType:this,catchValue:n,typeName:ne.ZodCatch})}describe(u){const n=this.constructor;return new n({...this._def,description:u})}pipe(u){return Cn.create(this,u)}readonly(){return Vr.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Kg=/^c[^\s-]{8,}$/i,Qg=/^[0-9a-z]+$/,Xg=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Yg=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Jg=/^[a-z0-9_-]{21}$/i,e_=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,t_=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,r_=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,a_="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",hn,i_=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,n_=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,s_=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,o_=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,u_=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,l_=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,nh="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",d_=new RegExp(`^${nh}$`);function sh(u){let n="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return u.precision?n=`${n}\\.\\d{${u.precision}}`:u.precision==null&&(n=`${n}(\\.\\d+)?`),n}function p_(u){return new RegExp(`^${sh(u)}$`)}function oh(u){let n=`${nh}T${sh(u)}`;const c=[];return c.push(u.local?"Z?":"Z"),u.offset&&c.push("([+-]\\d{2}:?\\d{2})"),n=`${n}(${c.join("|")})`,new RegExp(`^${n}$`)}function c_(u,n){return!!((n==="v4"||!n)&&i_.test(u)||(n==="v6"||!n)&&s_.test(u))}function h_(u,n){if(!e_.test(u))return!1;try{const[c]=u.split("."),_=c.replace(/-/g,"+").replace(/_/g,"/").padEnd(c.length+(4-c.length%4)%4,"="),y=JSON.parse(atob(_));return!(typeof y!="object"||y===null||!y.typ||!y.alg||n&&y.alg!==n)}catch{return!1}}function f_(u,n){return!!((n==="v4"||!n)&&n_.test(u)||(n==="v6"||!n)&&o_.test(u))}var er=class Tr extends he{_parse(n){if(this._def.coerce&&(n.data=String(n.data)),this._getType(n)!==F.string){const $=this._getOrReturnCtx(n);return L($,{code:P.invalid_type,expected:F.string,received:$.parsedType}),oe}const _=new Ze;let y;for(const $ of this._def.checks)if($.kind==="min")n.data.length<$.value&&(y=this._getOrReturnCtx(n,y),L(y,{code:P.too_small,minimum:$.value,type:"string",inclusive:!0,exact:!1,message:$.message}),_.dirty());else if($.kind==="max")n.data.length>$.value&&(y=this._getOrReturnCtx(n,y),L(y,{code:P.too_big,maximum:$.value,type:"string",inclusive:!0,exact:!1,message:$.message}),_.dirty());else if($.kind==="length"){const z=n.data.length>$.value,R=n.data.length<$.value;(z||R)&&(y=this._getOrReturnCtx(n,y),z?L(y,{code:P.too_big,maximum:$.value,type:"string",inclusive:!0,exact:!0,message:$.message}):R&&L(y,{code:P.too_small,minimum:$.value,type:"string",inclusive:!0,exact:!0,message:$.message}),_.dirty())}else if($.kind==="email")r_.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"email",code:P.invalid_string,message:$.message}),_.dirty());else if($.kind==="emoji")hn||(hn=new RegExp(a_,"u")),hn.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"emoji",code:P.invalid_string,message:$.message}),_.dirty());else if($.kind==="uuid")Yg.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"uuid",code:P.invalid_string,message:$.message}),_.dirty());else if($.kind==="nanoid")Jg.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"nanoid",code:P.invalid_string,message:$.message}),_.dirty());else if($.kind==="cuid")Kg.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"cuid",code:P.invalid_string,message:$.message}),_.dirty());else if($.kind==="cuid2")Qg.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"cuid2",code:P.invalid_string,message:$.message}),_.dirty());else if($.kind==="ulid")Xg.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"ulid",code:P.invalid_string,message:$.message}),_.dirty());else if($.kind==="url")try{new URL(n.data)}catch{y=this._getOrReturnCtx(n,y),L(y,{validation:"url",code:P.invalid_string,message:$.message}),_.dirty()}else $.kind==="regex"?($.regex.lastIndex=0,$.regex.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"regex",code:P.invalid_string,message:$.message}),_.dirty())):$.kind==="trim"?n.data=n.data.trim():$.kind==="includes"?n.data.includes($.value,$.position)||(y=this._getOrReturnCtx(n,y),L(y,{code:P.invalid_string,validation:{includes:$.value,position:$.position},message:$.message}),_.dirty()):$.kind==="toLowerCase"?n.data=n.data.toLowerCase():$.kind==="toUpperCase"?n.data=n.data.toUpperCase():$.kind==="startsWith"?n.data.startsWith($.value)||(y=this._getOrReturnCtx(n,y),L(y,{code:P.invalid_string,validation:{startsWith:$.value},message:$.message}),_.dirty()):$.kind==="endsWith"?n.data.endsWith($.value)||(y=this._getOrReturnCtx(n,y),L(y,{code:P.invalid_string,validation:{endsWith:$.value},message:$.message}),_.dirty()):$.kind==="datetime"?oh($).test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{code:P.invalid_string,validation:"datetime",message:$.message}),_.dirty()):$.kind==="date"?d_.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{code:P.invalid_string,validation:"date",message:$.message}),_.dirty()):$.kind==="time"?p_($).test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{code:P.invalid_string,validation:"time",message:$.message}),_.dirty()):$.kind==="duration"?t_.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"duration",code:P.invalid_string,message:$.message}),_.dirty()):$.kind==="ip"?c_(n.data,$.version)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"ip",code:P.invalid_string,message:$.message}),_.dirty()):$.kind==="jwt"?h_(n.data,$.alg)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"jwt",code:P.invalid_string,message:$.message}),_.dirty()):$.kind==="cidr"?f_(n.data,$.version)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"cidr",code:P.invalid_string,message:$.message}),_.dirty()):$.kind==="base64"?u_.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"base64",code:P.invalid_string,message:$.message}),_.dirty()):$.kind==="base64url"?l_.test(n.data)||(y=this._getOrReturnCtx(n,y),L(y,{validation:"base64url",code:P.invalid_string,message:$.message}),_.dirty()):we.assertNever($);return{status:_.value,value:n.data}}_regex(n,c,_){return this.refinement(y=>n.test(y),{validation:c,code:P.invalid_string,...J.errToObj(_)})}_addCheck(n){return new Tr({...this._def,checks:[...this._def.checks,n]})}email(n){return this._addCheck({kind:"email",...J.errToObj(n)})}url(n){return this._addCheck({kind:"url",...J.errToObj(n)})}emoji(n){return this._addCheck({kind:"emoji",...J.errToObj(n)})}uuid(n){return this._addCheck({kind:"uuid",...J.errToObj(n)})}nanoid(n){return this._addCheck({kind:"nanoid",...J.errToObj(n)})}cuid(n){return this._addCheck({kind:"cuid",...J.errToObj(n)})}cuid2(n){return this._addCheck({kind:"cuid2",...J.errToObj(n)})}ulid(n){return this._addCheck({kind:"ulid",...J.errToObj(n)})}base64(n){return this._addCheck({kind:"base64",...J.errToObj(n)})}base64url(n){return this._addCheck({kind:"base64url",...J.errToObj(n)})}jwt(n){return this._addCheck({kind:"jwt",...J.errToObj(n)})}ip(n){return this._addCheck({kind:"ip",...J.errToObj(n)})}cidr(n){return this._addCheck({kind:"cidr",...J.errToObj(n)})}datetime(n){var c,_;return typeof n=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:n}):this._addCheck({kind:"datetime",precision:typeof n?.precision>"u"?null:n?.precision,offset:(c=n?.offset)!==null&&c!==void 0?c:!1,local:(_=n?.local)!==null&&_!==void 0?_:!1,...J.errToObj(n?.message)})}date(n){return this._addCheck({kind:"date",message:n})}time(n){return typeof n=="string"?this._addCheck({kind:"time",precision:null,message:n}):this._addCheck({kind:"time",precision:typeof n?.precision>"u"?null:n?.precision,...J.errToObj(n?.message)})}duration(n){return this._addCheck({kind:"duration",...J.errToObj(n)})}regex(n,c){return this._addCheck({kind:"regex",regex:n,...J.errToObj(c)})}includes(n,c){return this._addCheck({kind:"includes",value:n,position:c?.position,...J.errToObj(c?.message)})}startsWith(n,c){return this._addCheck({kind:"startsWith",value:n,...J.errToObj(c)})}endsWith(n,c){return this._addCheck({kind:"endsWith",value:n,...J.errToObj(c)})}min(n,c){return this._addCheck({kind:"min",value:n,...J.errToObj(c)})}max(n,c){return this._addCheck({kind:"max",value:n,...J.errToObj(c)})}length(n,c){return this._addCheck({kind:"length",value:n,...J.errToObj(c)})}nonempty(n){return this.min(1,J.errToObj(n))}trim(){return new Tr({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Tr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Tr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(n=>n.kind==="datetime")}get isDate(){return!!this._def.checks.find(n=>n.kind==="date")}get isTime(){return!!this._def.checks.find(n=>n.kind==="time")}get isDuration(){return!!this._def.checks.find(n=>n.kind==="duration")}get isEmail(){return!!this._def.checks.find(n=>n.kind==="email")}get isURL(){return!!this._def.checks.find(n=>n.kind==="url")}get isEmoji(){return!!this._def.checks.find(n=>n.kind==="emoji")}get isUUID(){return!!this._def.checks.find(n=>n.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(n=>n.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(n=>n.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(n=>n.kind==="cuid2")}get isULID(){return!!this._def.checks.find(n=>n.kind==="ulid")}get isIP(){return!!this._def.checks.find(n=>n.kind==="ip")}get isCIDR(){return!!this._def.checks.find(n=>n.kind==="cidr")}get isBase64(){return!!this._def.checks.find(n=>n.kind==="base64")}get isBase64url(){return!!this._def.checks.find(n=>n.kind==="base64url")}get minLength(){let n=null;for(const c of this._def.checks)c.kind==="min"&&(n===null||c.value>n)&&(n=c.value);return n}get maxLength(){let n=null;for(const c of this._def.checks)c.kind==="max"&&(n===null||c.value<n)&&(n=c.value);return n}};er.create=u=>{var n;return new er({checks:[],typeName:ne.ZodString,coerce:(n=u?.coerce)!==null&&n!==void 0?n:!1,...ce(u)})};function m_(u,n){const c=(u.toString().split(".")[1]||"").length,_=(n.toString().split(".")[1]||"").length,y=c>_?c:_,$=parseInt(u.toFixed(y).replace(".","")),z=parseInt(n.toFixed(y).replace(".",""));return $%z/Math.pow(10,y)}var Cr=class vn extends he{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(n){if(this._def.coerce&&(n.data=Number(n.data)),this._getType(n)!==F.number){const $=this._getOrReturnCtx(n);return L($,{code:P.invalid_type,expected:F.number,received:$.parsedType}),oe}let _;const y=new Ze;for(const $ of this._def.checks)$.kind==="int"?we.isInteger(n.data)||(_=this._getOrReturnCtx(n,_),L(_,{code:P.invalid_type,expected:"integer",received:"float",message:$.message}),y.dirty()):$.kind==="min"?($.inclusive?n.data<$.value:n.data<=$.value)&&(_=this._getOrReturnCtx(n,_),L(_,{code:P.too_small,minimum:$.value,type:"number",inclusive:$.inclusive,exact:!1,message:$.message}),y.dirty()):$.kind==="max"?($.inclusive?n.data>$.value:n.data>=$.value)&&(_=this._getOrReturnCtx(n,_),L(_,{code:P.too_big,maximum:$.value,type:"number",inclusive:$.inclusive,exact:!1,message:$.message}),y.dirty()):$.kind==="multipleOf"?m_(n.data,$.value)!==0&&(_=this._getOrReturnCtx(n,_),L(_,{code:P.not_multiple_of,multipleOf:$.value,message:$.message}),y.dirty()):$.kind==="finite"?Number.isFinite(n.data)||(_=this._getOrReturnCtx(n,_),L(_,{code:P.not_finite,message:$.message}),y.dirty()):we.assertNever($);return{status:y.value,value:n.data}}gte(n,c){return this.setLimit("min",n,!0,J.toString(c))}gt(n,c){return this.setLimit("min",n,!1,J.toString(c))}lte(n,c){return this.setLimit("max",n,!0,J.toString(c))}lt(n,c){return this.setLimit("max",n,!1,J.toString(c))}setLimit(n,c,_,y){return new vn({...this._def,checks:[...this._def.checks,{kind:n,value:c,inclusive:_,message:J.toString(y)}]})}_addCheck(n){return new vn({...this._def,checks:[...this._def.checks,n]})}int(n){return this._addCheck({kind:"int",message:J.toString(n)})}positive(n){return this._addCheck({kind:"min",value:0,inclusive:!1,message:J.toString(n)})}negative(n){return this._addCheck({kind:"max",value:0,inclusive:!1,message:J.toString(n)})}nonpositive(n){return this._addCheck({kind:"max",value:0,inclusive:!0,message:J.toString(n)})}nonnegative(n){return this._addCheck({kind:"min",value:0,inclusive:!0,message:J.toString(n)})}multipleOf(n,c){return this._addCheck({kind:"multipleOf",value:n,message:J.toString(c)})}finite(n){return this._addCheck({kind:"finite",message:J.toString(n)})}safe(n){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:J.toString(n)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:J.toString(n)})}get minValue(){let n=null;for(const c of this._def.checks)c.kind==="min"&&(n===null||c.value>n)&&(n=c.value);return n}get maxValue(){let n=null;for(const c of this._def.checks)c.kind==="max"&&(n===null||c.value<n)&&(n=c.value);return n}get isInt(){return!!this._def.checks.find(n=>n.kind==="int"||n.kind==="multipleOf"&&we.isInteger(n.value))}get isFinite(){let n=null,c=null;for(const _ of this._def.checks){if(_.kind==="finite"||_.kind==="int"||_.kind==="multipleOf")return!0;_.kind==="min"?(c===null||_.value>c)&&(c=_.value):_.kind==="max"&&(n===null||_.value<n)&&(n=_.value)}return Number.isFinite(c)&&Number.isFinite(n)}};Cr.create=u=>new Cr({checks:[],typeName:ne.ZodNumber,coerce:u?.coerce||!1,...ce(u)});var Or=class wn extends he{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(n){if(this._def.coerce)try{n.data=BigInt(n.data)}catch{return this._getInvalidInput(n)}if(this._getType(n)!==F.bigint)return this._getInvalidInput(n);let _;const y=new Ze;for(const $ of this._def.checks)$.kind==="min"?($.inclusive?n.data<$.value:n.data<=$.value)&&(_=this._getOrReturnCtx(n,_),L(_,{code:P.too_small,type:"bigint",minimum:$.value,inclusive:$.inclusive,message:$.message}),y.dirty()):$.kind==="max"?($.inclusive?n.data>$.value:n.data>=$.value)&&(_=this._getOrReturnCtx(n,_),L(_,{code:P.too_big,type:"bigint",maximum:$.value,inclusive:$.inclusive,message:$.message}),y.dirty()):$.kind==="multipleOf"?n.data%$.value!==BigInt(0)&&(_=this._getOrReturnCtx(n,_),L(_,{code:P.not_multiple_of,multipleOf:$.value,message:$.message}),y.dirty()):we.assertNever($);return{status:y.value,value:n.data}}_getInvalidInput(n){const c=this._getOrReturnCtx(n);return L(c,{code:P.invalid_type,expected:F.bigint,received:c.parsedType}),oe}gte(n,c){return this.setLimit("min",n,!0,J.toString(c))}gt(n,c){return this.setLimit("min",n,!1,J.toString(c))}lte(n,c){return this.setLimit("max",n,!0,J.toString(c))}lt(n,c){return this.setLimit("max",n,!1,J.toString(c))}setLimit(n,c,_,y){return new wn({...this._def,checks:[...this._def.checks,{kind:n,value:c,inclusive:_,message:J.toString(y)}]})}_addCheck(n){return new wn({...this._def,checks:[...this._def.checks,n]})}positive(n){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:J.toString(n)})}negative(n){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:J.toString(n)})}nonpositive(n){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:J.toString(n)})}nonnegative(n){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:J.toString(n)})}multipleOf(n,c){return this._addCheck({kind:"multipleOf",value:n,message:J.toString(c)})}get minValue(){let n=null;for(const c of this._def.checks)c.kind==="min"&&(n===null||c.value>n)&&(n=c.value);return n}get maxValue(){let n=null;for(const c of this._def.checks)c.kind==="max"&&(n===null||c.value<n)&&(n=c.value);return n}};Or.create=u=>{var n;return new Or({checks:[],typeName:ne.ZodBigInt,coerce:(n=u?.coerce)!==null&&n!==void 0?n:!1,...ce(u)})};var Ar=class extends he{_parse(u){if(this._def.coerce&&(u.data=!!u.data),this._getType(u)!==F.boolean){const c=this._getOrReturnCtx(u);return L(c,{code:P.invalid_type,expected:F.boolean,received:c.parsedType}),oe}return He(u.data)}};Ar.create=u=>new Ar({typeName:ne.ZodBoolean,coerce:u?.coerce||!1,...ce(u)});var Rr=class uh extends he{_parse(n){if(this._def.coerce&&(n.data=new Date(n.data)),this._getType(n)!==F.date){const $=this._getOrReturnCtx(n);return L($,{code:P.invalid_type,expected:F.date,received:$.parsedType}),oe}if(isNaN(n.data.getTime())){const $=this._getOrReturnCtx(n);return L($,{code:P.invalid_date}),oe}const _=new Ze;let y;for(const $ of this._def.checks)$.kind==="min"?n.data.getTime()<$.value&&(y=this._getOrReturnCtx(n,y),L(y,{code:P.too_small,message:$.message,inclusive:!0,exact:!1,minimum:$.value,type:"date"}),_.dirty()):$.kind==="max"?n.data.getTime()>$.value&&(y=this._getOrReturnCtx(n,y),L(y,{code:P.too_big,message:$.message,inclusive:!0,exact:!1,maximum:$.value,type:"date"}),_.dirty()):we.assertNever($);return{status:_.value,value:new Date(n.data.getTime())}}_addCheck(n){return new uh({...this._def,checks:[...this._def.checks,n]})}min(n,c){return this._addCheck({kind:"min",value:n.getTime(),message:J.toString(c)})}max(n,c){return this._addCheck({kind:"max",value:n.getTime(),message:J.toString(c)})}get minDate(){let n=null;for(const c of this._def.checks)c.kind==="min"&&(n===null||c.value>n)&&(n=c.value);return n!=null?new Date(n):null}get maxDate(){let n=null;for(const c of this._def.checks)c.kind==="max"&&(n===null||c.value<n)&&(n=c.value);return n!=null?new Date(n):null}};Rr.create=u=>new Rr({checks:[],coerce:u?.coerce||!1,typeName:ne.ZodDate,...ce(u)});var va=class extends he{_parse(u){if(this._getType(u)!==F.symbol){const c=this._getOrReturnCtx(u);return L(c,{code:P.invalid_type,expected:F.symbol,received:c.parsedType}),oe}return He(u.data)}};va.create=u=>new va({typeName:ne.ZodSymbol,...ce(u)});var Br=class extends he{_parse(u){if(this._getType(u)!==F.undefined){const c=this._getOrReturnCtx(u);return L(c,{code:P.invalid_type,expected:F.undefined,received:c.parsedType}),oe}return He(u.data)}};Br.create=u=>new Br({typeName:ne.ZodUndefined,...ce(u)});var Dr=class extends he{_parse(u){if(this._getType(u)!==F.null){const c=this._getOrReturnCtx(u);return L(c,{code:P.invalid_type,expected:F.null,received:c.parsedType}),oe}return He(u.data)}};Dr.create=u=>new Dr({typeName:ne.ZodNull,...ce(u)});var tr=class extends he{constructor(){super(...arguments),this._any=!0}_parse(u){return He(u.data)}};tr.create=u=>new tr({typeName:ne.ZodAny,...ce(u)});var qt=class extends he{constructor(){super(...arguments),this._unknown=!0}_parse(u){return He(u.data)}};qt.create=u=>new qt({typeName:ne.ZodUnknown,...ce(u)});var $t=class extends he{_parse(u){const n=this._getOrReturnCtx(u);return L(n,{code:P.invalid_type,expected:F.never,received:n.parsedType}),oe}};$t.create=u=>new $t({typeName:ne.ZodNever,...ce(u)});var wa=class extends he{_parse(u){if(this._getType(u)!==F.undefined){const c=this._getOrReturnCtx(u);return L(c,{code:P.invalid_type,expected:F.void,received:c.parsedType}),oe}return He(u.data)}};wa.create=u=>new wa({typeName:ne.ZodVoid,...ce(u)});var Vt=class ca extends he{_parse(n){const{ctx:c,status:_}=this._processInputParams(n),y=this._def;if(c.parsedType!==F.array)return L(c,{code:P.invalid_type,expected:F.array,received:c.parsedType}),oe;if(y.exactLength!==null){const z=c.data.length>y.exactLength.value,R=c.data.length<y.exactLength.value;(z||R)&&(L(c,{code:z?P.too_big:P.too_small,minimum:R?y.exactLength.value:void 0,maximum:z?y.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:y.exactLength.message}),_.dirty())}if(y.minLength!==null&&c.data.length<y.minLength.value&&(L(c,{code:P.too_small,minimum:y.minLength.value,type:"array",inclusive:!0,exact:!1,message:y.minLength.message}),_.dirty()),y.maxLength!==null&&c.data.length>y.maxLength.value&&(L(c,{code:P.too_big,maximum:y.maxLength.value,type:"array",inclusive:!0,exact:!1,message:y.maxLength.message}),_.dirty()),c.common.async)return Promise.all([...c.data].map((z,R)=>y.type._parseAsync(new gt(c,z,c.path,R)))).then(z=>Ze.mergeArray(_,z));const $=[...c.data].map((z,R)=>y.type._parseSync(new gt(c,z,c.path,R)));return Ze.mergeArray(_,$)}get element(){return this._def.type}min(n,c){return new ca({...this._def,minLength:{value:n,message:J.toString(c)}})}max(n,c){return new ca({...this._def,maxLength:{value:n,message:J.toString(c)}})}length(n,c){return new ca({...this._def,exactLength:{value:n,message:J.toString(c)}})}nonempty(n){return this.min(1,n)}};Vt.create=(u,n)=>new Vt({type:u,minLength:null,maxLength:null,exactLength:null,typeName:ne.ZodArray,...ce(n)});function Xt(u){if(u instanceof tt){const n={};for(const c in u.shape){const _=u.shape[c];n[c]=mt.create(Xt(_))}return new tt({...u._def,shape:()=>n})}else return u instanceof Vt?new Vt({...u._def,type:Xt(u.element)}):u instanceof mt?mt.create(Xt(u.unwrap())):u instanceof Et?Et.create(Xt(u.unwrap())):u instanceof It?It.create(u.items.map(n=>Xt(n))):u}var tt=class dt extends he{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const n=this._def.shape(),c=we.objectKeys(n);return this._cached={shape:n,keys:c}}_parse(n){if(this._getType(n)!==F.object){const D=this._getOrReturnCtx(n);return L(D,{code:P.invalid_type,expected:F.object,received:D.parsedType}),oe}const{status:_,ctx:y}=this._processInputParams(n),{shape:$,keys:z}=this._getCached(),R=[];if(!(this._def.catchall instanceof $t&&this._def.unknownKeys==="strip"))for(const D in y.data)z.includes(D)||R.push(D);const E=[];for(const D of z){const G=$[D],W=y.data[D];E.push({key:{status:"valid",value:D},value:G._parse(new gt(y,W,y.path,D)),alwaysSet:D in y.data})}if(this._def.catchall instanceof $t){const D=this._def.unknownKeys;if(D==="passthrough")for(const G of R)E.push({key:{status:"valid",value:G},value:{status:"valid",value:y.data[G]}});else if(D==="strict")R.length>0&&(L(y,{code:P.unrecognized_keys,keys:R}),_.dirty());else if(D!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const D=this._def.catchall;for(const G of R){const W=y.data[G];E.push({key:{status:"valid",value:G},value:D._parse(new gt(y,W,y.path,G)),alwaysSet:G in y.data})}}return y.common.async?Promise.resolve().then(async()=>{const D=[];for(const G of E){const W=await G.key,X=await G.value;D.push({key:W,value:X,alwaysSet:G.alwaysSet})}return D}).then(D=>Ze.mergeObjectSync(_,D)):Ze.mergeObjectSync(_,E)}get shape(){return this._def.shape()}strict(n){return J.errToObj,new dt({...this._def,unknownKeys:"strict",...n!==void 0?{errorMap:(c,_)=>{var y,$,z,R;const E=(z=($=(y=this._def).errorMap)===null||$===void 0?void 0:$.call(y,c,_).message)!==null&&z!==void 0?z:_.defaultError;return c.code==="unrecognized_keys"?{message:(R=J.errToObj(n).message)!==null&&R!==void 0?R:E}:{message:E}}}:{}})}strip(){return new dt({...this._def,unknownKeys:"strip"})}passthrough(){return new dt({...this._def,unknownKeys:"passthrough"})}extend(n){return new dt({...this._def,shape:()=>({...this._def.shape(),...n})})}merge(n){return new dt({unknownKeys:n._def.unknownKeys,catchall:n._def.catchall,shape:()=>({...this._def.shape(),...n._def.shape()}),typeName:ne.ZodObject})}setKey(n,c){return this.augment({[n]:c})}catchall(n){return new dt({...this._def,catchall:n})}pick(n){const c={};return we.objectKeys(n).forEach(_=>{n[_]&&this.shape[_]&&(c[_]=this.shape[_])}),new dt({...this._def,shape:()=>c})}omit(n){const c={};return we.objectKeys(this.shape).forEach(_=>{n[_]||(c[_]=this.shape[_])}),new dt({...this._def,shape:()=>c})}deepPartial(){return Xt(this)}partial(n){const c={};return we.objectKeys(this.shape).forEach(_=>{const y=this.shape[_];n&&!n[_]?c[_]=y:c[_]=y.optional()}),new dt({...this._def,shape:()=>c})}required(n){const c={};return we.objectKeys(this.shape).forEach(_=>{if(n&&!n[_])c[_]=this.shape[_];else{let $=this.shape[_];for(;$ instanceof mt;)$=$._def.innerType;c[_]=$}}),new dt({...this._def,shape:()=>c})}keyof(){return fh(we.objectKeys(this.shape))}};tt.create=(u,n)=>new tt({shape:()=>u,unknownKeys:"strip",catchall:$t.create(),typeName:ne.ZodObject,...ce(n)});tt.strictCreate=(u,n)=>new tt({shape:()=>u,unknownKeys:"strict",catchall:$t.create(),typeName:ne.ZodObject,...ce(n)});tt.lazycreate=(u,n)=>new tt({shape:u,unknownKeys:"strip",catchall:$t.create(),typeName:ne.ZodObject,...ce(n)});var Mr=class extends he{_parse(u){const{ctx:n}=this._processInputParams(u),c=this._def.options;function _(y){for(const z of y)if(z.result.status==="valid")return z.result;for(const z of y)if(z.result.status==="dirty")return n.common.issues.push(...z.ctx.common.issues),z.result;const $=y.map(z=>new pt(z.ctx.common.issues));return L(n,{code:P.invalid_union,unionErrors:$}),oe}if(n.common.async)return Promise.all(c.map(async y=>{const $={...n,common:{...n.common,issues:[]},parent:null};return{result:await y._parseAsync({data:n.data,path:n.path,parent:$}),ctx:$}})).then(_);{let y;const $=[];for(const R of c){const E={...n,common:{...n.common,issues:[]},parent:null},D=R._parseSync({data:n.data,path:n.path,parent:E});if(D.status==="valid")return D;D.status==="dirty"&&!y&&(y={result:D,ctx:E}),E.common.issues.length&&$.push(E.common.issues)}if(y)return n.common.issues.push(...y.ctx.common.issues),y.result;const z=$.map(R=>new pt(R));return L(n,{code:P.invalid_union,unionErrors:z}),oe}}get options(){return this._def.options}};Mr.create=(u,n)=>new Mr({options:u,typeName:ne.ZodUnion,...ce(n)});var wt=u=>u instanceof Pr?wt(u.schema):u instanceof ct?wt(u.innerType()):u instanceof Ur?[u.value]:u instanceof Gr?u.options:u instanceof jr?we.objectValues(u.enum):u instanceof qr?wt(u._def.innerType):u instanceof Br?[void 0]:u instanceof Dr?[null]:u instanceof mt?[void 0,...wt(u.unwrap())]:u instanceof Et?[null,...wt(u.unwrap())]:u instanceof zn||u instanceof Vr?wt(u.unwrap()):u instanceof Lr?wt(u._def.innerType):[],lh=class dh extends he{_parse(n){const{ctx:c}=this._processInputParams(n);if(c.parsedType!==F.object)return L(c,{code:P.invalid_type,expected:F.object,received:c.parsedType}),oe;const _=this.discriminator,y=c.data[_],$=this.optionsMap.get(y);return $?c.common.async?$._parseAsync({data:c.data,path:c.path,parent:c}):$._parseSync({data:c.data,path:c.path,parent:c}):(L(c,{code:P.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[_]}),oe)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(n,c,_){const y=new Map;for(const $ of c){const z=wt($.shape[n]);if(!z.length)throw new Error(`A discriminator value for key \`${n}\` could not be extracted from all schema options`);for(const R of z){if(y.has(R))throw new Error(`Discriminator property ${String(n)} has duplicate value ${String(R)}`);y.set(R,$)}}return new dh({typeName:ne.ZodDiscriminatedUnion,discriminator:n,options:c,optionsMap:y,...ce(_)})}};function bn(u,n){const c=bt(u),_=bt(n);if(u===n)return{valid:!0,data:u};if(c===F.object&&_===F.object){const y=we.objectKeys(n),$=we.objectKeys(u).filter(R=>y.indexOf(R)!==-1),z={...u,...n};for(const R of $){const E=bn(u[R],n[R]);if(!E.valid)return{valid:!1};z[R]=E.data}return{valid:!0,data:z}}else if(c===F.array&&_===F.array){if(u.length!==n.length)return{valid:!1};const y=[];for(let $=0;$<u.length;$++){const z=u[$],R=n[$],E=bn(z,R);if(!E.valid)return{valid:!1};y.push(E.data)}return{valid:!0,data:y}}else return c===F.date&&_===F.date&&+u==+n?{valid:!0,data:u}:{valid:!1}}var Nr=class extends he{_parse(u){const{status:n,ctx:c}=this._processInputParams(u),_=(y,$)=>{if(_n(y)||_n($))return oe;const z=bn(y.value,$.value);return z.valid?((yn(y)||yn($))&&n.dirty(),{status:n.value,value:z.data}):(L(c,{code:P.invalid_intersection_types}),oe)};return c.common.async?Promise.all([this._def.left._parseAsync({data:c.data,path:c.path,parent:c}),this._def.right._parseAsync({data:c.data,path:c.path,parent:c})]).then(([y,$])=>_(y,$)):_(this._def.left._parseSync({data:c.data,path:c.path,parent:c}),this._def.right._parseSync({data:c.data,path:c.path,parent:c}))}};Nr.create=(u,n,c)=>new Nr({left:u,right:n,typeName:ne.ZodIntersection,...ce(c)});var It=class ph extends he{_parse(n){const{status:c,ctx:_}=this._processInputParams(n);if(_.parsedType!==F.array)return L(_,{code:P.invalid_type,expected:F.array,received:_.parsedType}),oe;if(_.data.length<this._def.items.length)return L(_,{code:P.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),oe;!this._def.rest&&_.data.length>this._def.items.length&&(L(_,{code:P.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),c.dirty());const $=[..._.data].map((z,R)=>{const E=this._def.items[R]||this._def.rest;return E?E._parse(new gt(_,z,_.path,R)):null}).filter(z=>!!z);return _.common.async?Promise.all($).then(z=>Ze.mergeArray(c,z)):Ze.mergeArray(c,$)}get items(){return this._def.items}rest(n){return new ph({...this._def,rest:n})}};It.create=(u,n)=>{if(!Array.isArray(u))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new It({items:u,typeName:ne.ZodTuple,rest:null,...ce(n)})};var ch=class $n extends he{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(n){const{status:c,ctx:_}=this._processInputParams(n);if(_.parsedType!==F.object)return L(_,{code:P.invalid_type,expected:F.object,received:_.parsedType}),oe;const y=[],$=this._def.keyType,z=this._def.valueType;for(const R in _.data)y.push({key:$._parse(new gt(_,R,_.path,R)),value:z._parse(new gt(_,_.data[R],_.path,R)),alwaysSet:R in _.data});return _.common.async?Ze.mergeObjectAsync(c,y):Ze.mergeObjectSync(c,y)}get element(){return this._def.valueType}static create(n,c,_){return c instanceof he?new $n({keyType:n,valueType:c,typeName:ne.ZodRecord,...ce(_)}):new $n({keyType:er.create(),valueType:n,typeName:ne.ZodRecord,...ce(c)})}},ba=class extends he{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(u){const{status:n,ctx:c}=this._processInputParams(u);if(c.parsedType!==F.map)return L(c,{code:P.invalid_type,expected:F.map,received:c.parsedType}),oe;const _=this._def.keyType,y=this._def.valueType,$=[...c.data.entries()].map(([z,R],E)=>({key:_._parse(new gt(c,z,c.path,[E,"key"])),value:y._parse(new gt(c,R,c.path,[E,"value"]))}));if(c.common.async){const z=new Map;return Promise.resolve().then(async()=>{for(const R of $){const E=await R.key,D=await R.value;if(E.status==="aborted"||D.status==="aborted")return oe;(E.status==="dirty"||D.status==="dirty")&&n.dirty(),z.set(E.value,D.value)}return{status:n.value,value:z}})}else{const z=new Map;for(const R of $){const E=R.key,D=R.value;if(E.status==="aborted"||D.status==="aborted")return oe;(E.status==="dirty"||D.status==="dirty")&&n.dirty(),z.set(E.value,D.value)}return{status:n.value,value:z}}}};ba.create=(u,n,c)=>new ba({valueType:n,keyType:u,typeName:ne.ZodMap,...ce(c)});var $a=class xn extends he{_parse(n){const{status:c,ctx:_}=this._processInputParams(n);if(_.parsedType!==F.set)return L(_,{code:P.invalid_type,expected:F.set,received:_.parsedType}),oe;const y=this._def;y.minSize!==null&&_.data.size<y.minSize.value&&(L(_,{code:P.too_small,minimum:y.minSize.value,type:"set",inclusive:!0,exact:!1,message:y.minSize.message}),c.dirty()),y.maxSize!==null&&_.data.size>y.maxSize.value&&(L(_,{code:P.too_big,maximum:y.maxSize.value,type:"set",inclusive:!0,exact:!1,message:y.maxSize.message}),c.dirty());const $=this._def.valueType;function z(E){const D=new Set;for(const G of E){if(G.status==="aborted")return oe;G.status==="dirty"&&c.dirty(),D.add(G.value)}return{status:c.value,value:D}}const R=[..._.data.values()].map((E,D)=>$._parse(new gt(_,E,_.path,D)));return _.common.async?Promise.all(R).then(E=>z(E)):z(R)}min(n,c){return new xn({...this._def,minSize:{value:n,message:J.toString(c)}})}max(n,c){return new xn({...this._def,maxSize:{value:n,message:J.toString(c)}})}size(n,c){return this.min(n,c).max(n,c)}nonempty(n){return this.min(1,n)}};$a.create=(u,n)=>new $a({valueType:u,minSize:null,maxSize:null,typeName:ne.ZodSet,...ce(n)});var hh=class ha extends he{constructor(){super(...arguments),this.validate=this.implement}_parse(n){const{ctx:c}=this._processInputParams(n);if(c.parsedType!==F.function)return L(c,{code:P.invalid_type,expected:F.function,received:c.parsedType}),oe;function _(R,E){return _a({data:R,path:c.path,errorMaps:[c.common.contextualErrorMap,c.schemaErrorMap,ga(),Jt].filter(D=>!!D),issueData:{code:P.invalid_arguments,argumentsError:E}})}function y(R,E){return _a({data:R,path:c.path,errorMaps:[c.common.contextualErrorMap,c.schemaErrorMap,ga(),Jt].filter(D=>!!D),issueData:{code:P.invalid_return_type,returnTypeError:E}})}const $={errorMap:c.common.contextualErrorMap},z=c.data;if(this._def.returns instanceof rr){const R=this;return He(async function(...E){const D=new pt([]),G=await R._def.args.parseAsync(E,$).catch(q=>{throw D.addIssue(_(E,q)),D}),W=await Reflect.apply(z,this,G);return await R._def.returns._def.type.parseAsync(W,$).catch(q=>{throw D.addIssue(y(W,q)),D})})}else{const R=this;return He(function(...E){const D=R._def.args.safeParse(E,$);if(!D.success)throw new pt([_(E,D.error)]);const G=Reflect.apply(z,this,D.data),W=R._def.returns.safeParse(G,$);if(!W.success)throw new pt([y(G,W.error)]);return W.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...n){return new ha({...this._def,args:It.create(n).rest(qt.create())})}returns(n){return new ha({...this._def,returns:n})}implement(n){return this.parse(n)}strictImplement(n){return this.parse(n)}static create(n,c,_){return new ha({args:n||It.create([]).rest(qt.create()),returns:c||qt.create(),typeName:ne.ZodFunction,...ce(_)})}},Pr=class extends he{get schema(){return this._def.getter()}_parse(u){const{ctx:n}=this._processInputParams(u);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}};Pr.create=(u,n)=>new Pr({getter:u,typeName:ne.ZodLazy,...ce(n)});var Ur=class extends he{_parse(u){if(u.data!==this._def.value){const n=this._getOrReturnCtx(u);return L(n,{received:n.data,code:P.invalid_literal,expected:this._def.value}),oe}return{status:"valid",value:u.data}}get value(){return this._def.value}};Ur.create=(u,n)=>new Ur({value:u,typeName:ne.ZodLiteral,...ce(n)});function fh(u,n){return new Gr({values:u,typeName:ne.ZodEnum,...ce(n)})}var Gr=class kn extends he{constructor(){super(...arguments),kr.set(this,void 0)}_parse(n){if(typeof n.data!="string"){const c=this._getOrReturnCtx(n),_=this._def.values;return L(c,{expected:we.joinValues(_),received:c.parsedType,code:P.invalid_type}),oe}if(ya(this,kr,"f")||ih(this,kr,new Set(this._def.values),"f"),!ya(this,kr,"f").has(n.data)){const c=this._getOrReturnCtx(n),_=this._def.values;return L(c,{received:c.data,code:P.invalid_enum_value,options:_}),oe}return He(n.data)}get options(){return this._def.values}get enum(){const n={};for(const c of this._def.values)n[c]=c;return n}get Values(){const n={};for(const c of this._def.values)n[c]=c;return n}get Enum(){const n={};for(const c of this._def.values)n[c]=c;return n}extract(n,c=this._def){return kn.create(n,{...this._def,...c})}exclude(n,c=this._def){return kn.create(this.options.filter(_=>!n.includes(_)),{...this._def,...c})}};kr=new WeakMap;Gr.create=fh;var jr=class extends he{constructor(){super(...arguments),Sr.set(this,void 0)}_parse(u){const n=we.getValidEnumValues(this._def.values),c=this._getOrReturnCtx(u);if(c.parsedType!==F.string&&c.parsedType!==F.number){const _=we.objectValues(n);return L(c,{expected:we.joinValues(_),received:c.parsedType,code:P.invalid_type}),oe}if(ya(this,Sr,"f")||ih(this,Sr,new Set(we.getValidEnumValues(this._def.values)),"f"),!ya(this,Sr,"f").has(u.data)){const _=we.objectValues(n);return L(c,{received:c.data,code:P.invalid_enum_value,options:_}),oe}return He(u.data)}get enum(){return this._def.values}};Sr=new WeakMap;jr.create=(u,n)=>new jr({values:u,typeName:ne.ZodNativeEnum,...ce(n)});var rr=class extends he{unwrap(){return this._def.type}_parse(u){const{ctx:n}=this._processInputParams(u);if(n.parsedType!==F.promise&&n.common.async===!1)return L(n,{code:P.invalid_type,expected:F.promise,received:n.parsedType}),oe;const c=n.parsedType===F.promise?n.data:Promise.resolve(n.data);return He(c.then(_=>this._def.type.parseAsync(_,{path:n.path,errorMap:n.common.contextualErrorMap})))}};rr.create=(u,n)=>new rr({type:u,typeName:ne.ZodPromise,...ce(n)});var ct=class extends he{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ne.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(u){const{status:n,ctx:c}=this._processInputParams(u),_=this._def.effect||null,y={addIssue:$=>{L(c,$),$.fatal?n.abort():n.dirty()},get path(){return c.path}};if(y.addIssue=y.addIssue.bind(y),_.type==="preprocess"){const $=_.transform(c.data,y);if(c.common.async)return Promise.resolve($).then(async z=>{if(n.value==="aborted")return oe;const R=await this._def.schema._parseAsync({data:z,path:c.path,parent:c});return R.status==="aborted"?oe:R.status==="dirty"||n.value==="dirty"?Yt(R.value):R});{if(n.value==="aborted")return oe;const z=this._def.schema._parseSync({data:$,path:c.path,parent:c});return z.status==="aborted"?oe:z.status==="dirty"||n.value==="dirty"?Yt(z.value):z}}if(_.type==="refinement"){const $=z=>{const R=_.refinement(z,y);if(c.common.async)return Promise.resolve(R);if(R instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return z};if(c.common.async===!1){const z=this._def.schema._parseSync({data:c.data,path:c.path,parent:c});return z.status==="aborted"?oe:(z.status==="dirty"&&n.dirty(),$(z.value),{status:n.value,value:z.value})}else return this._def.schema._parseAsync({data:c.data,path:c.path,parent:c}).then(z=>z.status==="aborted"?oe:(z.status==="dirty"&&n.dirty(),$(z.value).then(()=>({status:n.value,value:z.value}))))}if(_.type==="transform")if(c.common.async===!1){const $=this._def.schema._parseSync({data:c.data,path:c.path,parent:c});if(!Lt($))return $;const z=_.transform($.value,y);if(z instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:z}}else return this._def.schema._parseAsync({data:c.data,path:c.path,parent:c}).then($=>Lt($)?Promise.resolve(_.transform($.value,y)).then(z=>({status:n.value,value:z})):$);we.assertNever(_)}};ct.create=(u,n,c)=>new ct({schema:u,typeName:ne.ZodEffects,effect:n,...ce(c)});ct.createWithPreprocess=(u,n,c)=>new ct({schema:n,effect:{type:"preprocess",transform:u},typeName:ne.ZodEffects,...ce(c)});var mt=class extends he{_parse(u){return this._getType(u)===F.undefined?He(void 0):this._def.innerType._parse(u)}unwrap(){return this._def.innerType}};mt.create=(u,n)=>new mt({innerType:u,typeName:ne.ZodOptional,...ce(n)});var Et=class extends he{_parse(u){return this._getType(u)===F.null?He(null):this._def.innerType._parse(u)}unwrap(){return this._def.innerType}};Et.create=(u,n)=>new Et({innerType:u,typeName:ne.ZodNullable,...ce(n)});var qr=class extends he{_parse(u){const{ctx:n}=this._processInputParams(u);let c=n.data;return n.parsedType===F.undefined&&(c=this._def.defaultValue()),this._def.innerType._parse({data:c,path:n.path,parent:n})}removeDefault(){return this._def.innerType}};qr.create=(u,n)=>new qr({innerType:u,typeName:ne.ZodDefault,defaultValue:typeof n.default=="function"?n.default:()=>n.default,...ce(n)});var Lr=class extends he{_parse(u){const{ctx:n}=this._processInputParams(u),c={...n,common:{...n.common,issues:[]}},_=this._def.innerType._parse({data:c.data,path:c.path,parent:{...c}});return zr(_)?_.then(y=>({status:"valid",value:y.status==="valid"?y.value:this._def.catchValue({get error(){return new pt(c.common.issues)},input:c.data})})):{status:"valid",value:_.status==="valid"?_.value:this._def.catchValue({get error(){return new pt(c.common.issues)},input:c.data})}}removeCatch(){return this._def.innerType}};Lr.create=(u,n)=>new Lr({innerType:u,typeName:ne.ZodCatch,catchValue:typeof n.catch=="function"?n.catch:()=>n.catch,...ce(n)});var xa=class extends he{_parse(u){if(this._getType(u)!==F.nan){const c=this._getOrReturnCtx(u);return L(c,{code:P.invalid_type,expected:F.nan,received:c.parsedType}),oe}return{status:"valid",value:u.data}}};xa.create=u=>new xa({typeName:ne.ZodNaN,...ce(u)});var g_=Symbol("zod_brand"),zn=class extends he{_parse(u){const{ctx:n}=this._processInputParams(u),c=n.data;return this._def.type._parse({data:c,path:n.path,parent:n})}unwrap(){return this._def.type}},Cn=class mh extends he{_parse(n){const{status:c,ctx:_}=this._processInputParams(n);if(_.common.async)return(async()=>{const $=await this._def.in._parseAsync({data:_.data,path:_.path,parent:_});return $.status==="aborted"?oe:$.status==="dirty"?(c.dirty(),Yt($.value)):this._def.out._parseAsync({data:$.value,path:_.path,parent:_})})();{const y=this._def.in._parseSync({data:_.data,path:_.path,parent:_});return y.status==="aborted"?oe:y.status==="dirty"?(c.dirty(),{status:"dirty",value:y.value}):this._def.out._parseSync({data:y.value,path:_.path,parent:_})}}static create(n,c){return new mh({in:n,out:c,typeName:ne.ZodPipeline})}},Vr=class extends he{_parse(u){const n=this._def.innerType._parse(u),c=_=>(Lt(_)&&(_.value=Object.freeze(_.value)),_);return zr(n)?n.then(_=>c(_)):c(n)}unwrap(){return this._def.innerType}};Vr.create=(u,n)=>new Vr({innerType:u,typeName:ne.ZodReadonly,...ce(n)});function qc(u,n){const c=typeof u=="function"?u(n):typeof u=="string"?{message:u}:u;return typeof c=="string"?{message:c}:c}function gh(u,n={},c){return u?tr.create().superRefine((_,y)=>{var $,z;const R=u(_);if(R instanceof Promise)return R.then(E=>{var D,G;if(!E){const W=qc(n,_),X=(G=(D=W.fatal)!==null&&D!==void 0?D:c)!==null&&G!==void 0?G:!0;y.addIssue({code:"custom",...W,fatal:X})}});if(!R){const E=qc(n,_),D=(z=($=E.fatal)!==null&&$!==void 0?$:c)!==null&&z!==void 0?z:!0;y.addIssue({code:"custom",...E,fatal:D})}}):tr.create()}var __={object:tt.lazycreate},ne;(function(u){u.ZodString="ZodString",u.ZodNumber="ZodNumber",u.ZodNaN="ZodNaN",u.ZodBigInt="ZodBigInt",u.ZodBoolean="ZodBoolean",u.ZodDate="ZodDate",u.ZodSymbol="ZodSymbol",u.ZodUndefined="ZodUndefined",u.ZodNull="ZodNull",u.ZodAny="ZodAny",u.ZodUnknown="ZodUnknown",u.ZodNever="ZodNever",u.ZodVoid="ZodVoid",u.ZodArray="ZodArray",u.ZodObject="ZodObject",u.ZodUnion="ZodUnion",u.ZodDiscriminatedUnion="ZodDiscriminatedUnion",u.ZodIntersection="ZodIntersection",u.ZodTuple="ZodTuple",u.ZodRecord="ZodRecord",u.ZodMap="ZodMap",u.ZodSet="ZodSet",u.ZodFunction="ZodFunction",u.ZodLazy="ZodLazy",u.ZodLiteral="ZodLiteral",u.ZodEnum="ZodEnum",u.ZodEffects="ZodEffects",u.ZodNativeEnum="ZodNativeEnum",u.ZodOptional="ZodOptional",u.ZodNullable="ZodNullable",u.ZodDefault="ZodDefault",u.ZodCatch="ZodCatch",u.ZodPromise="ZodPromise",u.ZodBranded="ZodBranded",u.ZodPipeline="ZodPipeline",u.ZodReadonly="ZodReadonly"})(ne||(ne={}));var y_=(u,n={message:`Input not instance of ${u.name}`})=>gh(c=>c instanceof u,n),_h=er.create,yh=Cr.create,v_=xa.create,w_=Or.create,vh=Ar.create,b_=Rr.create,$_=va.create,x_=Br.create,k_=Dr.create,S_=tr.create,T_=qt.create,I_=$t.create,E_=wa.create,z_=Vt.create,C_=tt.create,O_=tt.strictCreate,A_=Mr.create,R_=lh.create,B_=Nr.create,D_=It.create,M_=ch.create,N_=ba.create,P_=$a.create,U_=hh.create,j_=Pr.create,q_=Ur.create,L_=Gr.create,V_=jr.create,G_=rr.create,Lc=ct.create,W_=mt.create,F_=Et.create,H_=ct.createWithPreprocess,Z_=Cn.create,K_=()=>_h().optional(),Q_=()=>yh().optional(),X_=()=>vh().optional(),Y_={string:u=>er.create({...u,coerce:!0}),number:u=>Cr.create({...u,coerce:!0}),boolean:u=>Ar.create({...u,coerce:!0}),bigint:u=>Or.create({...u,coerce:!0}),date:u=>Rr.create({...u,coerce:!0})},J_=oe,Ve=Object.freeze({__proto__:null,defaultErrorMap:Jt,setErrorMap:Hg,getErrorMap:ga,makeIssue:_a,EMPTY_PATH:Zg,addIssueToContext:L,ParseStatus:Ze,INVALID:oe,DIRTY:Yt,OK:He,isAborted:_n,isDirty:yn,isValid:Lt,isAsync:zr,get util(){return we},get objectUtil(){return gn},ZodParsedType:F,getParsedType:bt,ZodType:he,datetimeRegex:oh,ZodString:er,ZodNumber:Cr,ZodBigInt:Or,ZodBoolean:Ar,ZodDate:Rr,ZodSymbol:va,ZodUndefined:Br,ZodNull:Dr,ZodAny:tr,ZodUnknown:qt,ZodNever:$t,ZodVoid:wa,ZodArray:Vt,ZodObject:tt,ZodUnion:Mr,ZodDiscriminatedUnion:lh,ZodIntersection:Nr,ZodTuple:It,ZodRecord:ch,ZodMap:ba,ZodSet:$a,ZodFunction:hh,ZodLazy:Pr,ZodLiteral:Ur,ZodEnum:Gr,ZodNativeEnum:jr,ZodPromise:rr,ZodEffects:ct,ZodTransformer:ct,ZodOptional:mt,ZodNullable:Et,ZodDefault:qr,ZodCatch:Lr,ZodNaN:xa,BRAND:g_,ZodBranded:zn,ZodPipeline:Cn,ZodReadonly:Vr,custom:gh,Schema:he,ZodSchema:he,late:__,get ZodFirstPartyTypeKind(){return ne},coerce:Y_,any:S_,array:z_,bigint:w_,boolean:vh,date:b_,discriminatedUnion:R_,effect:Lc,enum:L_,function:U_,instanceof:y_,intersection:B_,lazy:j_,literal:q_,map:N_,nan:v_,nativeEnum:V_,never:I_,null:k_,nullable:F_,number:yh,object:C_,oboolean:X_,onumber:Q_,optional:W_,ostring:K_,pipeline:Z_,preprocess:H_,promise:G_,record:M_,set:P_,strictObject:O_,string:_h,symbol:$_,transformer:Lc,tuple:D_,undefined:x_,union:A_,unknown:T_,void:E_,NEVER:J_,ZodIssueCode:P,quotelessJson:Fg,ZodError:pt}),Vc={name:"@imgly/background-removal",version:"1.7.0",description:"Background Removal in the Browser",keywords:["background-removal","client-side","data-privacy","image-segmentation","image-matting","onnx"],repository:{type:"git",url:"git+https://github.com/imgly/background-removal-js.git"},license:"SEE LICENSE IN LICENSE.md",author:{name:"IMG.LY GmbH",email:"support@img.ly",url:"https://img.ly"},bugs:{email:"support@img.ly"},source:"./src/index.ts",main:"./dist/index.cjs",module:"./dist/index.mjs",types:"./dist/src/index.d.ts",exports:{".":{require:"./dist/index.cjs",import:"./dist/index.mjs",types:"./dist/src/index.d.ts"}},homepage:"https://img.ly/showcases/cesdk/web/background-removal",files:["LICENSE.md","README.md","CHANGELOG.md","ThirdPartyLicenses.json","dist/","bin/"],scripts:{start:"pnpm run watch",clean:"npx rimraf dist",test:"true",resources:"node ../../scripts/package-resources.mjs","changelog:create":"node ../../scripts/changelog/changelog-create.mjs","changelog:generate":"node ../../scripts/changelog/changelog-generate.mjs",build:"pnpm run clean && pnpm run types && pnpm run resources && pnpm run changelog:generate && node scripts/build.mjs",types:" npx tsc --declaration --emitDeclarationOnly --declarationDir dist --declarationMap",watch:"pnpm run clean && pnpm run resources && pnpm run changelog:generate && node scripts/watch.mjs","publish:latest":"pnpm publish --tag latest --access public","publish:next":"pnpm publish --tag next --access public","package:pack":"pnpm pack . --pack-destination ../../releases","check:all":"pnpm run check:pretty","check:pretty":"prettier --list-different './src/**/*.{ts,tsx}'",pretty:"prettier --write './src/**/*.{ts,tsx}'"},dependencies:{"lodash-es":"^4.17.21",ndarray:"~1.0.0",zod:"^3.23.8"},peerDependencies:{"onnxruntime-web":"1.21.0"},devDependencies:{"@types/lodash-es":"^4.17.12","@types/ndarray":"~1.0.14","@types/node":"~20.3.0",assert:"~2.0.0",esbuild:"~0.18.0",glob:"~10.3.0","npm-dts":"~1.3.0",process:"~0.11.0","ts-loader":"~9.4.0",tslib:"~2.5.0",typescript:"~5.1.0",util:"~0.12.0",webpack:"~5.85.0","webpack-cli":"~5.1.0"}},ey=Ve.object({publicPath:Ve.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(u=>u.replace("${PACKAGE_NAME}",Vc.name).replace("${PACKAGE_VERSION}",Vc.version)),debug:Ve.boolean().default(!1).describe("Whether to enable debug logging."),rescale:Ve.boolean().default(!0).describe("Whether to rescale the image."),device:Ve.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:Ve.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:Ve.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:Ve.function().args(Ve.string(),Ve.number(),Ve.number()).returns(Ve.void()).describe("Progress callback.").optional(),model:Ve.preprocess(u=>{switch(u){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return u}},Ve.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:Ve.object({format:Ve.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:Ve.number().default(.8)}).default({})}).default({}).transform(u=>(u.debug&&console.log("Config:",u),u.debug&&!u.progress&&(u.progress=u.progress??((n,c,_)=>{console.debug(`Downloading ${n}: ${c} of ${_}`)}),crossOriginIsolated||u.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),u));function ty(u){return ey.parse(u??{})}var ry=ka(Sa());async function ay(u){u.debug&&console.debug("Loading model...",u.model);const n=u.model,_=await(await Jc(`/models/${n}`,u)).arrayBuffer();return await Gg(_,u)}async function iy(u){u=ty(u);const n=await ay(u);return{config:u,session:{base:n}}}async function ny(u,n,c){const[y,$,z]=u.shape,R=!1;let E=Pc(u,1024,1024,R);const D=Ug(E);let G=await Wg(c.base,[["input",D]],["output"],n),W=(0,ry.default)(G[0].data,[1024,1024,1]),X=qg(W);return n.rescale?(X=Pc(X,$,y,R),[X,u]):[X,E]}var sy=Ag(iy,u=>JSON.stringify(u));async function oy(u,n){const{config:c,session:_}=await sy(n);c.progress&&c.progress("compute:decode",0,4);const y=await jg(u,c);c.progress?.("compute:inference",1,4);const[$,z]=await ny(y,c,_);c.progress?.("compute:mask",2,4);const R=z,[E,D]=R.shape,G=E*D;for(let X=0;X<G;X+=1)R.data[4*X+3]=$.data[X];c.progress?.("compute:encode",3,4);const W=await Bg(R,c.output.quality,c.output.format);return c.progress?.("compute:encode",4,4),W}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/var wh={exports:{}};(function(u,n){var c=(()=>{var _=Object.defineProperty,y=Object.getOwnPropertyDescriptor,$=Object.getOwnPropertyNames,z=Object.prototype.hasOwnProperty,R=(e=>typeof Qt<"u"?Qt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof Qt<"u"?Qt:t)[r]}):e)(function(e){if(typeof Qt<"u")return Qt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),E=(e,t)=>()=>(e&&(t=e(e=0)),t),D=(e,t)=>{for(var r in t)_(e,r,{get:t[r],enumerable:!0})},G=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of $(t))!z.call(e,i)&&i!==r&&_(e,i,{get:()=>t[i],enumerable:!(a=y(t,i))||a.enumerable});return e},W=e=>G(_({},"__esModule",{value:!0}),e),X,q,Te,re,fe,Oe=E(()=>{X=new Map,q=[],Te=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=X.get(e);if(a===void 0)X.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=q.indexOf(e);i!==-1&&q.splice(i,1);for(let o=0;o<q.length;o++)if(X.get(q[o]).priority<=r){q.splice(o,0,e);return}q.push(e)}return}throw new TypeError("not a valid backend")},re=async e=>{let t=X.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},fe=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),a=r.length===0?q:r,i,o=[],s=new Set;for(let d of a){let p=await re(d);typeof p=="string"?o.push({name:d,err:p}):(i||(i=p),i===p&&s.add(d))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of o)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[i,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),De=E(()=>{Oe()}),je,Me=E(()=>{je="1.21.0"}),_t,Ne,de=E(()=>{Me(),_t="warning",Ne={wasm:{},webgl:{},webgpu:{},versions:{common:je},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);_t=e}},get logLevel(){return _t}},Object.defineProperty(Ne,"logLevel",{enumerable:!0})}),be,xe=E(()=>{de(),be=Ne}),Ye,te,Ea=E(()=>{Ye=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let i,o;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[3]):(i=e.dims[3],o=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let h=o*i,f=0,m=h,g=h*2,v=-1;s==="RGBA"?(f=0,m=h,g=h*2,v=h*3):s==="RGB"?(f=0,m=h,g=h*2):s==="RBG"&&(f=0,g=h,m=h*2);for(let b=0;b<o;b++)for(let k=0;k<i;k++){let x=(e.data[f++]-p[0])*d[0],w=(e.data[m++]-p[1])*d[1],S=(e.data[g++]-p[2])*d[2],T=v===-1?255:(e.data[v++]-p[3])*d[3];a.fillStyle="rgba("+x+","+w+","+S+","+T+")",a.fillRect(k,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},te=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let i,o,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[1],s=e.dims[3]):(i=e.dims[3],o=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,p,h;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?h=[0,0,0,0]:typeof d.bias=="number"?h=[d.bias,d.bias,d.bias,d.bias]:(h=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(h[3]=d.bias[3]));let f=o*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,g=0,v=1,b=2,k=3,x=0,w=f,S=f*2,T=-1;l==="RGBA"?(x=0,w=f,S=f*2,T=f*3):l==="RGB"?(x=0,w=f,S=f*2):l==="RBG"&&(x=0,S=f,w=f*2),a=r.createImageData(i,o);for(let I=0;I<o*i;g+=m,v+=m,b+=m,k+=m,I++)a.data[g]=(e.data[x++]-h[0])*p[0],a.data[v]=(e.data[w++]-h[1])*p[1],a.data[b]=(e.data[S++]-h[2])*p[2],a.data[k]=T===-1?255:(e.data[T++]-h[3])*p[3]}else throw new Error("Can not access image data");return a}}),Wr,An,Rn,Bn,Dn,Mn,xh=E(()=>{Ca(),Wr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,i=t.norm??{mean:255,bias:0},o,s;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*a,h=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),f=4,m=0,g=1,v=2,b=3,k=0,x=p,w=p*2,S=-1;l==="RGB"&&(f=3,m=0,g=1,v=2,b=-1),d==="RGBA"?S=p*3:d==="RBG"?(k=0,w=p,x=p*2):d==="BGR"&&(w=0,x=p,k=p*2);for(let T=0;T<p;T++,m+=f,v+=f,g+=f,b+=f)h[k++]=(e[m]+s[0])/o[0],h[x++]=(e[g]+s[1])/o[1],h[w++]=(e[v]+s[2])/o[2],S!==-1&&b!==-1&&(h[S++]=(e[b]+s[3])/o[3]);return d==="RGBA"?new Ke("float32",h,[1,4,r,a]):new Ke("float32",h,[1,3,r,a])},An=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=d();h.width=e.width,h.height=e.height;let f=p(h);if(f!=null){let m=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=m,l.width=g}else l.tensorFormat="RGBA",l.height=m,l.width=g;f.drawImage(e,0,0),s=f.getImageData(0,0,g,m).data}else throw new Error("Can not access image data")}else if(a){let h,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,f=t.resizedWidth):(h=e.height,f=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=h,l.width=f,t!==void 0){let m=d();m.width=f,m.height=h;let g=p(m);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,f,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=d();h.width=e.width,h.height=e.height;let f=p(h);if(f!=null){let m=e.height,g=e.width;return f.drawImage(e,0,0,g,m),s=f.getImageData(0,0,g,m).data,l.height=m,l.width=g,Wr(s,l)}else throw new Error("Can not access image data")}else{if(o)return new Promise((h,f)=>{let m=d(),g=p(m);if(!e||!g)return f();let v=new Image;v.crossOrigin="Anonymous",v.src=e,v.onload=()=>{m.width=v.width,m.height=v.height,g.drawImage(v,0,0,m.width,m.height);let b=g.getImageData(0,0,m.width,m.height);l.height=m.height,l.width=m.width,h(Wr(b.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Wr(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},Rn=(e,t)=>{let{width:r,height:a,download:i,dispose:o}=t,s=[1,a,r,4];return new Ke({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:o})},Bn=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:o}=t;return new Ke({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:i,dispose:o})},Dn=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:o}=t;return new Ke({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:i,dispose:o})},Mn=(e,t,r)=>new Ke({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),zt,sr,za,Nn,kh=E(()=>{zt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),sr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),za=!1,Nn=()=>{if(!za){za=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(zt.set("int64",BigInt64Array),sr.set(BigInt64Array,"int64")),t&&(zt.set("uint64",BigUint64Array),sr.set(BigUint64Array,"uint64")),a?(zt.set("float16",r),sr.set(r,"float16")):zt.set("float16",Uint16Array)}}}),Pn,Un,Sh=E(()=>{Ca(),Pn=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},Un=(e,t)=>{switch(e.location){case"cpu":return new Ke(e.type,e.data,t);case"cpu-pinned":return new Ke({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ke({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ke({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ke({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ke,Ca=E(()=>{Ea(),xh(),kh(),Sh(),Ke=class{constructor(e,t,r){Nn();let a,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=zt.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(a=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=zt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")a="string",s=e;else if(d==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let d=sr.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");i=l,this.cpuData=s,this.dataLocation="cpu"}let o=Pn(i);if(this.cpuData&&o!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=i,this.size=o}static async fromImage(e,t){return An(e,t)}static fromTexture(e,t){return Rn(e,t)}static fromGpuBuffer(e,t){return Bn(e,t)}static fromMLTensor(e,t){return Dn(e,t)}static fromPinnedBuffer(e,t,r){return Mn(e,t,r)}toDataURL(e){return Ye(this,e)}toImageData(e){return te(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Un(this,e)}}}),rt,jn=E(()=>{Ca(),rt=Ke}),or,Oa,at,Je,qn=E(()=>{de(),or=(e,t)=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||console.timeStamp(`${e}::ORT::${t}`)},Oa=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(o+=`::${t}`),or("CPU",o);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},at=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||Oa("BEGIN",e)},Je=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||Oa("END",e)}}),Ln,Th=E(()=>{Oe(),jn(),qn(),Ln=class bh{constructor(t){this.handler=t}async run(t,r,a){at();let i={},o={};if(typeof t!="object"||t===null||t instanceof rt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof rt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);i[p]=null}if(typeof a=="object"&&a!==null)o=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(h.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof rt)&&(p=!0,s=!1,i[f]=m)}if(p){if(typeof a=="object"&&a!==null)o=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else o=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)i[p]=null;let l=await this.handler.run(t,i,o),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let h=l[p];h instanceof rt?d[p]=h:d[p]=new rt(h.type,h.data,h.dims)}return Je(),d}async release(){return this.handler.dispose()}static async create(t,r,a,i){at();let o,s={};if(typeof t=="string"){if(o=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,f=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(m=t.byteLength-f,typeof a=="number"){if(m=a,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||f+m>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-f}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(h,f,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await fe(s),p=await l.createInferenceSessionHandler(o,d);return Je(),new bh(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Aa,Ih=E(()=>{Th(),Aa=Ln}),Eh=E(()=>{}),zh=E(()=>{}),Ch=E(()=>{}),Oh=E(()=>{}),Vn={};D(Vn,{InferenceSession:()=>Aa,TRACE:()=>or,TRACE_FUNC_BEGIN:()=>at,TRACE_FUNC_END:()=>Je,Tensor:()=>rt,env:()=>be,registerBackend:()=>Te});var it=E(()=>{De(),xe(),Ih(),jn(),Eh(),zh(),qn(),Ch(),Oh()}),Ra=E(()=>{}),Gn={};D(Gn,{default:()=>Wn});var Ba,Da,Wn,Ah=E(()=>{wc(),Ct(),ja(),Ba="ort-wasm-proxy-worker",Da=globalThis.self?.name===Ba,Da&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Va(r.wasm).then(()=>{Yi(r).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})})},a=>{postMessage({type:t,err:a})});break;case"init-ep":{let{epName:a,env:i}=r;Ji(i,a).then(()=>{postMessage({type:t})},o=>{postMessage({type:t,err:o})});break}case"copy-from":{let{buffer:a}=r,i=la(a);postMessage({type:t,out:i});break}case"create":{let{model:a,options:i}=r;en(a,i).then(o=>{postMessage({type:t,out:o})},o=>{postMessage({type:t,err:o})});break}case"release":tn(r),postMessage({type:t});break;case"run":{let{sessionId:a,inputIndices:i,inputs:o,outputIndices:s,options:l}=r;an(a,i,o,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},sn([...o,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":nn(r),postMessage({type:t});break;default:}}catch(a){postMessage({type:t,err:a})}}),Wn=Da?null:e=>new Worker(e??Qe,{type:"classic",name:Ba})}),Fn,Hn,Qe,Ma,Fr,Zn,Kn,Na,Qn,Pa,Xn,Ua,Yn,ja=E(()=>{Ra(),Fn=typeof location>"u"?void 0:location.origin,Hn=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,Qe=Hn(),Ma=()=>{if(Qe&&!Qe.startsWith("blob:"))return Qe.substring(0,Qe.lastIndexOf("/")+1)},Fr=(e,t)=>{try{let r=t??Qe;return(r?new URL(e,r):new URL(e)).origin===Fn}catch{return!1}},Zn=(e,t)=>{let r=t??Qe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Kn=(e,t)=>`${t??"./"}${e}`,Na=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Qn=async e=>(await fn(()=>import(e),[])).default,Pa=(Ah(),W(Gn)).default,Xn=async()=>{if(!Qe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Fr(Qe))return[void 0,Pa()];let e=await Na(Qe);return[e,Pa(e)]},Ua=void 0,Yn=async(e,t,r)=>{if(!e&&!t&&Ua&&Qe&&Fr(Qe))return[void 0,Ua];{let a="ort-wasm-simd-threaded.jsep.mjs",i=e??Zn(a,t),o=r&&i&&!Fr(i,t),s=o?await Na(i):i??Kn(a,t);return[o?s:void 0,await Qn(s)]}}}),qa,Hr,ur,La,Jn,es,Va,Re,Ct=E(()=>{ja(),Hr=!1,ur=!1,La=!1,Jn=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},es=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Va=async e=>{if(Hr)return Promise.resolve();if(ur)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(La)throw new Error("previous call to 'initializeWebAssembly()' failed.");ur=!0;let t=e.initTimeout,r=e.numThreads;if(!es())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=Jn();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,o=typeof i=="string"?i:void 0,s=i?.mjs,l=s?.href??s,d=i?.wasm,p=d?.href??d,h=e.wasmBinary,[f,m]=await Yn(l,o,r>1),g=!1,v=[];if(t>0&&v.push(new Promise(b=>{setTimeout(()=>{g=!0,b()},t)})),v.push(new Promise((b,k)=>{let x={numThreads:r};if(h)x.wasmBinary=h;else if(p||o)x.locateFile=w=>p??o+w;else if(l&&l.indexOf("blob:")!==0)x.locateFile=w=>new URL(w,l).href;else if(f){let w=Ma();w&&(x.locateFile=S=>w+S)}m(x).then(w=>{ur=!1,Hr=!0,qa=w,b(),f&&URL.revokeObjectURL(f)},w=>{ur=!1,La=!0,k(w)})})),await Promise.race(v),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Re=()=>{if(Hr&&qa)return qa;throw new Error("WebAssembly is not initialized yet.")}}),qe,Zr,$e,Ga=E(()=>{Ct(),qe=(e,t)=>{let r=Re(),a=r.lengthBytesUTF8(e)+1,i=r._malloc(a);return r.stringToUTF8(e,i,a),t.push(i),i},Zr=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,o])=>{let s=t?t+i:i;if(typeof o=="object")Zr(o,s+".",r,a);else if(typeof o=="string"||typeof o=="number")a(s,o.toString());else if(typeof o=="boolean")a(s,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},$e=e=>{let t=Re(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetLastError(i,i+a);let o=Number(t.getValue(i,a===4?"i32":"i64")),s=t.getValue(i+a,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),ts,Rh=E(()=>{Ct(),Ga(),ts=e=>{let t=Re(),r=0,a=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let o=0;return e?.tag!==void 0&&(o=qe(e.tag,a)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),r===0&&$e("Can't create run options."),e?.extra!==void 0&&Zr(e.extra,"",new WeakSet,(s,l)=>{let d=qe(s,a),p=qe(l,a);t._OrtAddRunConfigEntry(r,d,p)!==0&&$e(`Can't set a run config entry: ${s} - ${l}.`)}),[r,a]}catch(o){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),o}}}),rs,as,is,ns,ss,Bh=E(()=>{Ct(),Ga(),rs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},as=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},is=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ns=(e,t,r)=>{for(let a of t){let i=typeof a=="string"?a:a.name;switch(i){case"webnn":if(i="WEBNN",typeof a!="string"){let s=a?.deviceType;if(s){let l=qe("deviceType",r),d=qe(s,r);Re()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(i="JS",typeof a!="string"){let s=a;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=qe("preferredLayout",r),d=qe(s.preferredLayout,r);Re()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let o=qe(i,r);Re()._OrtAppendExecutionProvider(e,o)!==0&&$e(`Can't append execution provider: ${i}.`)}},ss=e=>{let t=Re(),r=0,a=[],i=e||{};is(i);try{let o=rs(i.graphOptimizationLevel??"all"),s=as(i.executionMode??"sequential"),l=typeof i.logId=="string"?qe(i.logId,a):0,d=i.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=i.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let h=typeof i.optimizedModelFilePath=="string"?qe(i.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,l,d,p,h),r===0&&$e("Can't create session options."),i.executionProviders&&ns(r,i.executionProviders,a),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let f=qe("enableGraphCapture",a),m=qe(i.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,f,m)!==0&&$e(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[f,m]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let g=qe(f,a);t._OrtAddFreeDimensionOverride(r,g,m)!==0&&$e(`Can't set a free dimension override: ${f} - ${m}.`)}return i.extra!==void 0&&Zr(i.extra,"",new WeakSet,(f,m)=>{let g=qe(f,a),v=qe(m,a);t._OrtAddSessionConfigEntry(r,g,v)!==0&&$e(`Can't set a session config entry: ${f} - ${m}.`)}),[r,a]}catch(o){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&$e("Can't release session options."),a.forEach(s=>t._free(s)),o}}}),Gt,Ot,At,Wa,Kr,Fa,Ha,Za,ae=E(()=>{Gt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ot=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},At=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((i,o)=>i*o,1);return r>0?Math.ceil(a*r):void 0},Wa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Kr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ha=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Za=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ka,os=E(()=>{Ra(),Ka=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),o;try{o=new ArrayBuffer(a)}catch(l){if(l instanceof RangeError){let d=Math.ceil(a/65536);o=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await i.read();if(l)break;let p=d.byteLength;new Uint8Array(o,s,p).set(d),s+=p}return new Uint8Array(o,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),us,ls,ds,ps,Qa,cs,_e,yt=E(()=>{ae(),us=["V","I","W","E","F"],ls=(e,t)=>{console.log(`[${us[e]},${new Date().toISOString()}]${t}`)},Qa=(e,t)=>{ds=e,ps=t},cs=(e,t)=>{let r=Kr(e),a=Kr(ds);r>=a&&ls(r,typeof t=="function"?t():t)},_e=(...e)=>{ps&&cs(...e)}}),Xa,hs=E(()=>{ae(),Xa=(e,t)=>new(Wa(t))(e)}),Ya=E(()=>{}),Ja,Qr,Xr,fs,ms,ei,ti,gs,_s,Dh=E(()=>{yt(),Ya(),Ja=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Qr=[],Xr=e=>Math.ceil(Number(e)/16)*16,fs=e=>{for(let t=0;t<Qr.length;t++){let r=Qr[t];if(e<=r)return r}return Math.ceil(e/16)*16},ms=1,ei=()=>ms++,ti=async(e,t,r,a)=>{let i=Xr(r),o=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,o,0,i),e.flush(),await o.mapAsync(GPUMapMode.READ);let l=o.getMappedRange();if(a){let d=a();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{o.destroy()}},gs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ja)Qr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,i=t.byteLength,o=Xr(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,a,i)),l.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(l,0,s.gpuData.buffer,0,o),this.backend.device.queue.submit([p.finish()]),l.destroy(),_e("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Xr(r.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return _e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=ei();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),_e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),_e("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=fs(e),a,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||o){let l=(i?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?a=l.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:ei(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),_e("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return _e("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ti(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ja.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(_e("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},_s=(...e)=>new gs(...e)}),ys,ke,ze=E(()=>{ys=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ke=e=>new ys(e)}),vs,Wt,O,Yr,ws,bs,$s,ue=E(()=>{vs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Wt=class{static calcShape(e,t,r=!1){let a=e.length,i=t.length;if(a===0)return t;if(i===0)return e;let o=Math.max(e.length,t.length),s=new Array(o);if(r){if(a<2||i<2)return;let l=vs.calcMatMulShape([e[a-2],e[a-1]],[t[i-2],t[i-1]]);if(l===void 0)return;[s[o-2],s[o-1]]=l}for(let l=r?3:1;l<=o;l++){let d=a-l<0?1:e[a-l],p=i-l<0?1:t[i-l];if(d!==p&&d>1&&p>1)return;let h=Math.max(d,p);if(d&&p)s[o-l]=Math.max(d,p);else{if(h>1)return;s[o-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[a-i])return!1;return!0}},O=class fa{static size(t){return fa.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let i=new Array(a),o=a-1;for(;o>=0;){if(t[o]%r===0){i[o]=t[o]/r;break}if(r%t[o]!==0)throw new Error("cannot convert shape");i[o]=1,r/=t[o],o--}for(o--;o>=0;o--)i[o]=t[o];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return fa.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return fa.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let i=1;for(let o=r;o<a;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[o])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let i=r-3;i>=0;--i)a[i]=a[i+1]*t[i+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((i,o)=>i+r[o]+r[o+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,i)=>a===r[i])}},Yr=class Ir{static adjustPoolAttributes(t,r,a,i,o,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=a.length?a.push(r[l+2]):a[l]=r[l+2];for(let l=0;l<a.length;l++)if(l<i.length){if(i[l]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let l=0;l<a.length;l++)if(l<o.length){if(o[l]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let l=0;l<a.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<a.length;l++){if(a[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=a[l]||s[l+a.length]>=a[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,i,o,s,l){if(l){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Ir.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],a[d],i[d],o,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,a,i,o,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Ir.computeShapeHelper(t,r,d,a,i,o,s,l),d}static computeConvOutputShape(t,r,a,i,o,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Ir.computeShapeHelper(!1,t,d,a,i,o,s,l),d}static computeShapeHelper(t,r,a,i,o,s,l,d){if(t)for(let p=0;p<r.length-2;p++)a.push(1);else for(let p=0;p<r.length-2;p++)a.push(Ir.adjustPadAndReturnShape(r[p+2],i[p],o[p],s[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,a,i,o,s,l,d){let p=a*(i-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return o[s]=0,o[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+i-t;return o[s]=Math.floor(d==="SAME_LOWER"?(h+1)/2:h/2),o[l]=h-o[s],Math.floor((t+h-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[s]+o[l]-p)/r+1)}},ws=class{static getShapeOfGemmResult(e,t,r,a,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let o,s,l;t?(o=e[1],s=e[0]):(o=e[0],s=e[1]);let d=-1;if(a?(l=r[0],d=1):(l=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(o<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Wt.isValidBroadcast(i,[o,l]))throw new Error("gemm: invalid bias shape for broadcast");return[o,l,s]}},bs=-34028234663852886e22,$s=34028234663852886e22}),Ft,Jr,Be,Ge,Y,Ee,ri,Ht,xt,Q,lr,B,Z,xs,ai,ks,Ss,le=E(()=>{ae(),ue(),Ft=64,Jr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Be=(e,t=1)=>{let r=Jr(e,t);return typeof r=="string"?r:r[0]},Ge=(e,t=1)=>{let r=Jr(e,t);return typeof r=="string"?r:r[1]},Y=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Ee=e=>e%4===0?4:e%2===0?2:1,ri=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ht=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,xt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Q=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,lr=(e,t,r,a,i)=>{let o=typeof r=="number",s=o?r:r.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=Jr(t,i),h=typeof p=="string"?p:p[1],f=typeof p=="string"?p:p[0],m={indices:d,value:h,storage:f,tensor:t},g=N=>typeof N=="string"?N:`${N}u`,v={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=o?"uniforms.":"",k=`${b}${e}_shape`,x=`${b}${e}_strides`,w="";for(let N=0;N<s-1;N++)w+=`
    let dim${N} = current / ${Q(x,N,s)};
    let rest${N} = current % ${Q(x,N,s)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;w+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${w}
    return indices;
  }`,T=N=>(v.offsetToIndices=!0,s<2?N:`o2i_${e}(${N})`),I=[];if(s>=2)for(let N=s-1;N>=0;N--)I.push(`${Q(x,N,s)} * (indices[${N}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${I.join("+")};
  }`,C=N=>(v.indicesToOffset=!0,s<2?N:`i2o_${e}(${N})`),M=(...N)=>s===0?"0u":`${m.indices}(${N.map(g).join(",")})`,U=(N,V)=>s<2?`${N}`:`${Q(N,V,s)}`,H=(N,V,Se)=>s<2?`${N}=${Se};`:`${Q(N,V,s)}=${Se};`,ee={},se=(N,V)=>{v.broadcastedIndicesToOffset=!0;let Se=`${V.name}broadcastedIndicesTo${e}Offset`;if(Se in ee)return`${Se}(${N})`;let Ie=[];for(let Le=s-1;Le>=0;Le--){let Kt=V.indicesGet("outputIndices",Le+V.rank-s);Ie.push(`${U(x,Le)} * (${Kt} % ${U(k,Le)})`)}return ee[Se]=`fn ${Se}(outputIndices: ${V.type.indices}) -> u32 {
             return ${Ie.length>0?Ie.join("+"):"0u"};
           }`,`${Se}(${N})`},j=(N,V)=>(()=>{if(m.storage===m.value)return`${e}[${N}]=${V};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${V}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),pe=N=>(()=>{if(m.storage===m.value)return`${e}[${N}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${N}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${N}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),me=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${h} {
    return ${pe(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let N=l.map(Se=>`d${Se}: u32`).join(", "),V=l.map(Se=>`d${Se}`).join(", ");return`
  fn get_${e}(${N}) -> ${h} {
    return get_${e}ByIndices(${M(V)});
  }`})(),ye=(...N)=>{if(N.length!==s)throw new Error(`indices length must be ${s}`);let V=N.map(g).join(",");return s===0?pe("0u"):s===1?pe(V[0]):(v.get=!0,v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}(${V})`)},ge=N=>s<2?pe(N):(v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}ByIndices(${N})`),ie=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${h}) {
    ${j(`i2o_${e}(indices)`,"value")}
  }`,Ce=s<2?"":(()=>{let N=l.map(Se=>`d${Se}: u32`).join(", "),V=l.map(Se=>`d${Se}`).join(", ");return`
  fn set_${e}(${N}, value: ${h}) {
    set_${e}ByIndices(${M(V)}, value);
  }`})();return{impl:()=>{let N=[],V=!1;return v.offsetToIndices&&(N.push(S),V=!0),v.indicesToOffset&&(N.push(A),V=!0),v.broadcastedIndicesToOffset&&(Object.values(ee).forEach(Se=>N.push(Se)),V=!0),v.set&&(N.push(Ce),V=!0),v.setByIndices&&(N.push(ie),V=!0),v.get&&(N.push(K),V=!0),v.getByIndices&&(N.push(me),V=!0),!o&&V&&N.unshift(`const ${k} = ${m.indices}(${r.join(",")});`,`const ${x} = ${m.indices}(${O.computeStrides(r).join(",")});`),N.join(`
`)},type:m,offsetToIndices:T,indicesToOffset:C,broadcastedIndicesToOffset:se,indices:M,indicesGet:U,indicesSet:H,set:(...N)=>{if(N.length!==s+1)throw new Error(`indices length must be ${s}`);let V=N[s];if(typeof V!="string")throw new Error("value must be string");let Se=N.slice(0,s).map(g).join(",");return s===0?j("0u",V):s===1?j(Se[0],V):(v.set=!0,v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}(${Se}, ${V})`)},setByOffset:j,setByIndices:(N,V)=>s<2?j(N,V):(v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${V});`),get:ye,getByOffset:pe,getByIndices:ge,usage:a,name:e,strides:x,shape:k,rank:s}},B=(e,t,r,a=1)=>lr(e,t,r,"input",a),Z=(e,t,r,a=1)=>lr(e,t,r,"output",a),xs=(e,t,r)=>lr(e,t,r,"atomicOutput",1),ai=(e,t,r,a=1)=>lr(e,t,r,"internal",a),ks=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ft){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${o}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let i=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ss=(e,t)=>new ks(e,t)}),Ts,ii,Is,Es,zs,Cs,Xe,Os,As,kt=E(()=>{ae(),ue(),ze(),le(),Ts=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ii=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Is=(e,t)=>O.sortBasedOnPerm(e,ii(e.length,t)),Es=(e,t,r,a)=>{let i=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let o=0;o<t;++o)i+=`a[${e[o]}]=i[${o}];`;return i+="return a;}"},zs=(e,t)=>{let r=[],a=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&a.push(t[i]);return{newShape:r,newPerm:a}},Cs=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Xe=(e,t)=>{let r=e.dataType,a=e.dims.length,i=ii(a,t),o=Is(e.dims,i),s=e.dims,l=o,d=a<2||Cs(i,e.dims),p;if(d)return p=v=>{let b=B("input",r,s,4),k=Z("output",r,l,4);return`
  ${v.registerUniform("output_size","u32").declareVariables(b,k)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(v/4)}]}},getShaderSource:p};let{newShape:h,newPerm:f}=zs(e.dims,i),m=O.areEqual(f,[2,3,1]),g=O.areEqual(f,[3,1,2]);if(h.length===2||m||g){s=m?[h[0],h[1]*h[2]]:g?[h[0]*h[1],h[2]]:h,l=[s[1],s[0]];let v=16;return p=b=>{let k=B("a",r,s.length),x=Z("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(k,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${v+1}>, ${v}>;
  ${b.mainStart([v,v,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${v} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${v}u + local_id.x;
    let input_row = workgroup_id_x * ${v}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${v}u + local_id.x;
    let output_row = workgroup_id_y * ${v}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/v),y:Math.ceil(l[0]/v)},programUniforms:[{type:12,data:b},...Y(s,l)]}},getShaderSource:p}}return p=v=>{let b=B("a",r,s.length),k=Z("output",r,l.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(b,k)}

  ${Es(i,a,b,k)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let v=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...Y(s,l)]}},getShaderSource:p}},Os=(e,t)=>{Ts(e.inputs,t.perm),e.compute(Xe(e.inputs[0],t.perm))},As=e=>ke({perm:e.perm})}),Rs,Bs,Ds,Ms,Ns,Ps,Us,js,qs,Ls,nt,Vs,Gs,Ws,Fs,Hs,Zs,Ks,Qs,Xs,Ys,Mh=E(()=>{ae(),ue(),le(),si(),kt(),Rs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Bs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ds={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ms={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ns=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Ps=(e,t)=>{let r=[],a=e.length;for(let o=0;o<a;o++)t.indexOf(o)===-1&&r.push(e[o]);let i=t.map(o=>e[o]);return[r,i]},Us=(e,t)=>{let r=e.length+t.length,a=[],i=0;for(let o=0;o<r;o++)t.indexOf(o)===-1?a.push(e[i++]):a.push(1);return a},js=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},qs=(e,t)=>{let r=[];if(!js(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Ls=(e,t,r,a,i,o,s)=>{let l=r[0].dims,d=O.size(o),p=O.size(s),h=B("_A",r[0].dataType,l),f=Z("output",i,o),m=64;d===1&&(m=256);let g=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,v=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(h,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ds[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Rs[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Bs[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Ms[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},nt=(e,t,r,a)=>{let i=e.inputs.length===1?r:ni(e.inputs,r),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((g,v)=>v));let s=O.normalizeAxes(o,e.inputs[0].dims.length),l=s,d=e.inputs[0],p=qs(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(Xe(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=Ns(l.length,d.dims.length));let[h,f]=Ps(d.dims,l),m=h;i.keepDims&&(m=Us(h,s)),e.compute(Ls(t,i.cacheKey,[d],a,e.inputs[0].dataType,m,f),{inputs:[d]})},Vs=(e,t)=>{nt(e,"ReduceMeanShared",t,"mean")},Gs=(e,t)=>{nt(e,"ReduceL1Shared",t,"l1")},Ws=(e,t)=>{nt(e,"ReduceL2Shared",t,"l2")},Fs=(e,t)=>{nt(e,"ReduceLogSumExpShared",t,"logSumExp")},Hs=(e,t)=>{nt(e,"ReduceMaxShared",t,"max")},Zs=(e,t)=>{nt(e,"ReduceMinShared",t,"min")},Ks=(e,t)=>{nt(e,"ReduceProdShared",t,"prod")},Qs=(e,t)=>{nt(e,"ReduceSumShared",t,"sum")},Xs=(e,t)=>{nt(e,"ReduceSumSquareShared",t,"sumSquare")},Ys=(e,t)=>{nt(e,"ReduceLogSumShared",t,"logSum")}}),st,Js,ea,ni,ot,eo,to,ro,ao,io,no,so,oo,uo,lo,ut,po,co,ho,fo,mo,go,_o,yo,vo,wo,si=E(()=>{ae(),ue(),ze(),le(),Mh(),st=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Js=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ea=(e,t,r,a,i,o,s=!1,l=!1)=>{let d=[],p=r[0].dims,h=p.length,f=O.normalizeAxes(i,h),m=!l&&f.length===0;p.forEach((b,k)=>{m||f.indexOf(k)>=0?s&&d.push(1):d.push(b)});let g=d.length,v=O.size(d);return{name:e,shaderCache:t,getShaderSource:b=>{let k=[],x=B("_A",r[0].dataType,h),w=Z("output",o,g),S=a(x,w,f),T=S[2];for(let I=0,A=0;I<h;I++)m||f.indexOf(I)>=0?(s&&A++,T=`for(var j${I}: u32 = 0; j${I} < ${p[I]}; j${I}++) {
                  ${S[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${x.indicesSet("input_indices",I,`j${I}`)}
                  ${T}
                }`):(k.push(`${x.indicesSet("input_indices",I,w.indicesGet("output_indices",A))};`),A++);return`

        ${b.registerUniform("output_size","u32").declareVariables(x,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${T}
          ${S[3]}
          ${S.length===4?w.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...Y(p,d)]})}},ni=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),ke({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},ot=(e,t,r,a)=>{let i=e.inputs,o=i.length===1?r:ni(i,r);e.compute(ea(t,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?Js:a,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},eo=(e,t)=>{st(e.inputs),ot(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},to=(e,t)=>{st(e.inputs),ot(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ro=(e,t)=>{st(e.inputs),ot(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ao=(e,t)=>{st(e.inputs),ot(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},io=(e,t)=>{st(e.inputs),ot(e,"ReduceMax",t,(r,a,i)=>{let o=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&o.push(r.indicesSet("input_indices",s,0));return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},no=(e,t)=>{st(e.inputs),ot(e,"ReduceMean",t,(r,a,i)=>{let o=1;for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(o*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${o});`]})},so=(e,t)=>{st(e.inputs),ot(e,"ReduceMin",t,(r,a,i)=>{let o=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},oo=(e,t)=>{st(e.inputs),ot(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},uo=(e,t)=>{st(e.inputs),ot(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},lo=(e,t)=>{st(e.inputs),ot(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},ut=(e,t,r)=>{if(t.length===0)return r;let a=1,i=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?a*=e[o]:i*=e[o];return i<32&&a>1024},po=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):Vs(e,t)},co=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):Gs(e,t)},ho=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):Ws(e,t)},fo=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):Fs(e,t)},mo=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):Hs(e,t)},go=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Zs(e,t)},_o=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Ks(e,t)},yo=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Qs(e,t)},vo=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lo(e,t):Xs(e,t)},wo=(e,t)=>{ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):Ys(e,t)}}),oi,bo,$o,ui,Nh=E(()=>{ae(),ze(),si(),oi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},bo=(e,t)=>{oi(e.inputs);let r=(a,i,o)=>{let s=[];for(let l=0;l<a.rank;l++)(o.indexOf(l)>=0||o.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ea("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},$o=(e,t)=>{oi(e.inputs);let r=(a,i,o)=>{let s=[];for(let l=0;l<a.rank;l++)(o.indexOf(l)>=0||o.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ea("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ui=e=>ke(e)}),xo,ta,ko,So,To,dr,Io,Eo,li=E(()=>{ae(),ue(),Ya(),le(),xo=(e,t)=>{let r=e[0],a=e[1],i=e[2],o=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],h=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,m=f,g=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let v=p;if(f!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+m+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(m!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let k=v+b,x=-1,w=0;if(o)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:b,kvSequenceLength:v,totalSequenceLength:k,maxSequenceLength:x,inputHiddenSize:h,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ta=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ko=(e,t,r,a,i,o,s,l)=>{let d=Ee(s?1:o),p=64,h=o/d;h<p&&(p=32);let f=Math.ceil(o/d/p),m=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:h},{type:12,data:f}],g=Be(e.dataType,d),v=Ge(1,d),b=["type"];s&&b.push("type"),l&&b.push("type");let k=x=>{let w=Z("x",e.dataType,e.dims,d),S=[w],T=s?B("seq_lens",s.dataType,s.dims):void 0;T&&S.push(T);let I=l?B("total_sequence_length_input",l.dataType,l.dims):void 0;I&&S.push(I);let A=Ge(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${x.registerUniforms(C).declareVariables(...S)}
  ${x.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ta(T,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${v}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${v}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${v}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${v}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${v}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${g};${d}`,inputDependencies:b},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(o/p),y:i,z:t*r},programUniforms:m})}},So=(e,t,r,a,i,o,s,l,d)=>{let p=s+o.kvSequenceLength,h=[o.batchSize,o.numHeads,o.sequenceLength,p],f=e>1&&a,m=o.kvNumHeads?o.kvNumHeads:o.numHeads,g=f?[o.batchSize,m,p,o.headSize]:void 0,v=o.nReps?o.nReps:1,b=o.scale===0?1/Math.sqrt(o.headSize):o.scale,k=Ee(o.headSize),x=o.headSize/k,w=12,S={x:Math.ceil(p/w),y:Math.ceil(o.sequenceLength/w),z:o.batchSize*o.numHeads},T=[{type:12,data:o.sequenceLength},{type:12,data:x},{type:12,data:p},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:o.kvSequenceLength},{type:12,data:v}],I=f&&a&&O.size(a.dims)>0,A=["type","type"];I&&A.push("type"),i&&A.push("type"),l&&A.push("type"),d&&A.push("type");let C=[{dims:h,dataType:t.dataType,gpuDataType:0}];f&&C.push({dims:g,dataType:t.dataType,gpuDataType:0});let M=U=>{let H=B("q",t.dataType,t.dims,k),ee=B("key",r.dataType,r.dims,k),se=[H,ee];if(I){let ie=B("past_key",a.dataType,a.dims,k);se.push(ie)}i&&se.push(B("attention_bias",i.dataType,i.dims));let j=l?B("seq_lens",l.dataType,l.dims):void 0;j&&se.push(j);let pe=d?B("total_sequence_length_input",d.dataType,d.dims):void 0;pe&&se.push(pe);let me=Z("output",t.dataType,h),K=[me];f&&K.push(Z("present_key",t.dataType,g,k));let ye=Ge(1,k),ge=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${H.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${H.type.storage}, ${w*w}>;
  ${U.registerUniforms(ge).declareVariables(...se,...K)}
  ${U.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${v===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${v===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ta(j,pe,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ye}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ye}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${me.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${i!==void 0};${a!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:C,dispatchGroup:S,programUniforms:T}),getShaderSource:M}},To=(e,t,r,a,i,o,s=void 0,l=void 0)=>{let d=o+i.kvSequenceLength,p=i.nReps?i.nReps:1,h=i.vHiddenSize*p,f=e>1&&a,m=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=f?[i.batchSize,m,d,i.headSize]:void 0,v=[i.batchSize,i.sequenceLength,h],b=12,k={x:Math.ceil(i.vHeadSize/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},x=[{type:12,data:i.sequenceLength},{type:12,data:d},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:p}],w=f&&a&&O.size(a.dims)>0,S=["type","type"];w&&S.push("type"),s&&S.push("type"),l&&S.push("type");let T=[{dims:v,dataType:t.dataType,gpuDataType:0}];f&&T.push({dims:g,dataType:t.dataType,gpuDataType:0});let I=A=>{let C=B("probs",t.dataType,t.dims),M=B("v",r.dataType,r.dims),U=[C,M];w&&U.push(B("past_value",a.dataType,a.dims));let H=s?B("seq_lens",s.dataType,s.dims):void 0;s&&U.push(H);let ee=l?B("total_sequence_length_input",l.dataType,l.dims):void 0;l&&U.push(ee);let se=[Z("output",t.dataType,v)];f&&se.push(Z("present_value",t.dataType,g));let j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${C.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${C.type.value}, ${b*b}>;
  ${A.registerUniforms(j).declareVariables(...U,...se)}
  ${A.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ta(H,ee,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:T,dispatchGroup:k,programUniforms:x}),getShaderSource:I}},dr=(e,t,r,a,i,o,s,l,d,p,h=void 0,f=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),g=m>1?p.pastSequenceLength:0,v=g+p.kvSequenceLength,b=d&&O.size(d.dims)>0?d:void 0,k=[t,r];m>1&&s&&O.size(s.dims)>0&&k.push(s),b&&k.push(b),h&&k.push(h),f&&k.push(f);let x=e.compute(So(m,t,r,s,b,p,g,h,f),{inputs:k,outputs:m>1?[-1,1]:[-1]})[0];e.compute(ko(x,p.batchSize,p.numHeads,g,p.sequenceLength,v,h,f),{inputs:h&&f?[x,h,f]:[x],outputs:[]});let w=[x,a];m>1&&l&&O.size(l.dims)>0&&w.push(l),h&&w.push(h),f&&w.push(f),e.compute(To(m,x,a,l,p,g,h,f),{inputs:w,outputs:m>1?[0,2]:[0]})},Io=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,i=t.inputHiddenSize,o=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:a},{type:12,data:i},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=f=>{let m=Z("output_q",d[0].dataType,r),g=Z("output_k",d[0].dataType,r),v=Z("output_v",d[0].dataType,r),b=B("input",d[0].dataType,d[0].dims),k=B("weight",d[1].dataType,d[1].dims),x=B("bias",d[2].dataType,d[2].dims),w=b.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables(b,k,x,m,g,v)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:h},{inputs:d,outputs:[-1,-1,-1]})},Eo=(e,t)=>{let r=xo(e.inputs,t),[a,i,o]=Io(e,r);return dr(e,a,i,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),zo,Co,Oo,Ao,Ph=E(()=>{it(),ae(),ue(),ze(),le(),zo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,i,o)=>{let s=i.length;if(s!==a.length)throw new Error(`${o}: num dimensions != ${s}`);i.forEach((l,d)=>{if(l!==a[d])throw new Error(`${o}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Co=(e,t)=>{let{epsilon:r,spatial:a,format:i}=t,o=e[0].dims,s=a?Ee(o[o.length-1]):1,l=i==="NHWC"&&o.length>1?s:1,d=O.size(o)/s,p=a,h=p?o.length:o,f=B("x",e[0].dataType,e[0].dims,s),m=B("scale",e[1].dataType,e[1].dims,l),g=B("bias",e[2].dataType,e[2].dims,l),v=B("inputMean",e[3].dataType,e[3].dims,l),b=B("inputVar",e[4].dataType,e[4].dims,l),k=Z("y",e[0].dataType,h,s),x=()=>{let S="";if(a)S=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")S=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let T=1;T<m.rank;T++)S+=`cIndices[${T}] = outputIndices[${T}];`;S+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return S},w=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,m,g,v,b,k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${v.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...Y(o)]:[{type:12,data:d}]})}},Oo=e=>ke(e),Ao=(e,t)=>{let{inputs:r,outputCount:a}=e,i=Oo({...t,outputCount:a});if(be.webgpu.validateInputContent&&zo(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Co(r,i))}}),Ro,Bo,Do,Uh=E(()=>{ue(),le(),Ro=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Bo=e=>{let t=e[0].dims,r=e[0].dims[2],a=O.size(t)/4,i=e[0].dataType,o=B("input",i,t,4),s=B("bias",i,[r],4),l=B("residual",i,t,4),d=Z("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(o,s,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${o.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},Do=e=>{Ro(e.inputs),e.compute(Bo(e.inputs))}}),Mo,ve,No,Po,Uo,jo,qo,Lo,Vo,Go,Wo,Fo,Ho,Zo,Ko,Qo,pr,Xo,ra,Yo,Jo,eu,tu,ru,au,iu,nu,su,ou,uu,lu,du,pu,cu,hu,di,fu,pi,ci,mu,gu,_u,yu,vu,wu,hi=E(()=>{ae(),ue(),ze(),le(),Mo=(e,t,r,a,i,o,s)=>{let l=Math.ceil(t/4),d="";typeof i=="string"?d=`${i}(a)`:d=i("a");let p=B("inputData",r,[l],4),h=Z("outputData",a,[l],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(p,h)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",d)}
  }`},ve=(e,t,r,a,i,o=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:p=>Mo(p,O.size(e.dims),e.dataType,o,r,a,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(O.size(p[0].dims)/64/4)},programUniforms:d})}},No=e=>{e.compute(ve(e.inputs[0],"Abs","abs"))},Po=e=>{e.compute(ve(e.inputs[0],"Acos","acos"))},Uo=e=>{e.compute(ve(e.inputs[0],"Acosh","acosh"))},jo=e=>{e.compute(ve(e.inputs[0],"Asin","asin"))},qo=e=>{e.compute(ve(e.inputs[0],"Asinh","asinh"))},Lo=e=>{e.compute(ve(e.inputs[0],"Atan","atan"))},Vo=e=>{e.compute(ve(e.inputs[0],"Atanh","atanh"))},Go=e=>ke(e),Wo=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ve(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Fo=e=>{let t,r,a=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ke({min:t,max:r})},Ho=(e,t)=>{let r=t||Fo(e.inputs),a=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Zo=e=>{e.compute(ve(e.inputs[0],"Ceil","ceil"))},Ko=e=>{e.compute(ve(e.inputs[0],"Cos","cos"))},Qo=e=>{e.compute(ve(e.inputs[0],"Cosh","cosh"))},pr=e=>ke(e),Xo=(e,t)=>{let r=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ra=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Yo=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ra(t)))},Jo=e=>{e.compute(ve(e.inputs[0],"Exp","exp"))},eu=e=>{e.compute(ve(e.inputs[0],"Floor","floor"))},tu=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ra(t)))},ru=(e,t)=>{let r=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},au=e=>{e.compute(ve(e.inputs[0],"Not",t=>`!${t}`))},iu=e=>{e.compute(ve(e.inputs[0],"Neg",t=>`-${t}`))},nu=e=>{e.compute(ve(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},su=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},ou=e=>{e.compute(ve(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},uu=e=>ke(e),lu=(e,t)=>{let r=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},du=e=>{e.compute(ve(e.inputs[0],"Sin","sin"))},pu=e=>{e.compute(ve(e.inputs[0],"Sinh","sinh"))},cu=e=>{e.compute(ve(e.inputs[0],"Sqrt","sqrt"))},hu=e=>{e.compute(ve(e.inputs[0],"Tan","tan"))},di=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,fu=e=>{e.compute(ve(e.inputs[0],"Tanh",di))},pi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${di("v")};
}
`,ci=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,mu=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"FastGelu",ci,pi(t),void 0,e.inputs[0].dataType))},gu=(e,t)=>{let r=Ge(e.inputs[0].dataType);return e.compute(ve(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},_u=e=>{e.compute(ve(e.inputs[0],"Log","log"))},yu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,vu=e=>`quick_gelu_impl(${e})`,wu=(e,t)=>{let r=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"QuickGelu",vu,yu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),bu,$u,xu,jh=E(()=>{ue(),le(),hi(),bu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},$u=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),a=B("bias",e[0].dataType,[e[0].dims[2]],4),i=Z("output",e[0].dataType,t,4),o=O.size(t)/4,s=Be(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,a,i)}

  ${ra(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},xu=e=>{bu(e.inputs),e.compute($u(e.inputs))}}),ku,Su,lt,Tu,Iu,Eu,zu,Cu,Ou,Au,Ru,Bu,Du,qh=E(()=>{ae(),ue(),le(),ku=(e,t,r,a,i,o,s,l,d,p,h,f)=>{let m,g;typeof l=="string"?m=g=(w,S)=>`${l}((${w}),(${S}))`:typeof l=="function"?m=g=l:(m=l.scalar,g=l.vector);let v=Z("outputData",h,a.length,4),b=B("aData",d,t.length,4),k=B("bData",p,r.length,4),x;if(i)if(o){let w=O.size(t)===1,S=O.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;w||S?x=v.setByOffset("global_idx",g(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),S?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):x=`
            let outputIndices = ${v.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",v)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",v)};
            ${v.setByOffset("global_idx",g(s||T?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=v.setByOffset("global_idx",g(b.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(S,T,I="")=>{let A=`aData[indexA${T}][componentA${T}]`,C=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${v.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${b.broadcastedIndicesToOffset(`outputIndices${T}`,v)};
            let offsetB${T} = ${k.broadcastedIndicesToOffset(`outputIndices${T}`,v)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${S}[${T}] = ${I}(${m(A,C)});
          `};h===9?x=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,k,v)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Su=(e,t,r,a,i,o,s=r.dataType)=>{let l=r.dims.map(b=>Number(b)??1),d=a.dims.map(b=>Number(b)??1),p=!O.areEqual(l,d),h=l,f=O.size(l),m=!1,g=!1,v=[p];if(p){let b=Wt.calcShape(l,d,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");h=b.slice(),f=O.size(h);let k=O.size(l)===1,x=O.size(d)===1,w=l.length>0&&l[l.length-1]%4===0,S=d.length>0&&d[d.length-1]%4===0;v.push(k),v.push(x),v.push(w),v.push(S);let T=1;for(let I=1;I<h.length;I++){let A=l[l.length-I],C=d[d.length-I];if(A===C)T*=A;else break}T%4===0?(g=!0,m=!0):(k||x||w||S)&&(m=!0)}else m=!0;return v.push(m),{name:e,shaderCache:{hint:t+v.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>ku(b,l,d,h,m,p,g,i,r.dataType,a.dataType,s,o),getRunData:()=>({outputs:[{dims:h,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(h)/4)},...Y(l,d,h)]})}},lt=(e,t,r,a,i,o)=>{e.compute(Su(t,i??"",e.inputs[0],e.inputs[1],r,a,o))},Tu=e=>{lt(e,"Add",(t,r)=>`${t}+${r}`)},Iu=e=>{lt(e,"Div",(t,r)=>`${t}/${r}`)},Eu=e=>{lt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},zu=e=>{lt(e,"Mul",(t,r)=>`${t}*${r}`)},Cu=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;lt(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Ou=e=>{lt(e,"Sub",(t,r)=>`${t}-${r}`)},Au=e=>{lt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Ru=e=>{lt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Bu=e=>{lt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Du=e=>{lt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Mu,Nu,Pu,Uu,ju,qu,Lh=E(()=>{ae(),ue(),ze(),le(),Mu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],i=a.dataType,o=a.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==o)throw new Error("input tensors should have the same shape");s.dims.forEach((d,p)=>{if(p!==t&&d!==a.dims[p])throw new Error("non concat dimensions must match")})}})},Nu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Pu=(e,t)=>{let r=e.length,a=[];for(let i=0;i<r;++i){let o=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?a.push(o):i===0?a.push(`if (inputIndex == ${i}u) { ${o} }`):i===r-1?a.push(`else { ${o} }`):a.push(`else if (inputIndex == ${i}) { ${o} }`)}return a.join(`
`)},Uu=(e,t,r,a)=>{let i=O.size(r),o=new Array(e.length),s=new Array(e.length),l=0,d=[],p=[],h=[{type:12,data:i}];for(let b=0;b<e.length;++b)l+=e[b].dims[t],o[b]=l,p.push(e[b].dims.length),s[b]=B(`input${b}`,a,p[b]),d.push("rank"),h.push({type:12,data:o[b]});for(let b=0;b<e.length;++b)h.push(...Y(e[b].dims));h.push(...Y(r));let f=Z("output",a,r.length),m=f.indicesGet("indices",t),g=Array.from(Array(o.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),v=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)b.registerUniform(`sizeInConcatAxis${k}`,"u32");return b.declareVariables(...s,f)})()}

  ${Nu(o.length,g)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${g});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Pu(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:v}},ju=(e,t)=>{let r=e.inputs,a=r[0].dims,i=O.normalizeAxis(t.axis,a.length);Mu(r,i);let o=a.slice();o[i]=r.reduce((l,d)=>l+(d.dims.length>i?d.dims[i]:0),0);let s=r.filter(l=>O.size(l.dims)>0);e.compute(Uu(s,i,o,r[0].dataType),{inputs:s})},qu=e=>ke({axis:e.axis})}),Rt,Bt,Dt,fi,Mt=E(()=>{ae(),ue(),Rt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Bt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Dt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},fi=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,a]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=e?.activation_params||[bs,$s];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Pe,Lu,mi=E(()=>{Pe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Lu=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Vu,Vh=E(()=>{Vu=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),cr,gi,_i=E(()=>{ae(),ue(),le(),Mt(),cr=(e,t,r,a,i)=>{let o=a-r;return`
      ${Array.from({length:r}).map((s,l)=>`
      if (${Q(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,Q(i,l+o,a))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},gi=(e,t,r,a,i=!1,o)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],p=l[l.length-1],h=s[s.length-1],f=Ee(p),m=Ee(h),g=Ee(d),v=O.size(r)/f/g,b=e.length>2,k=a?a.slice(0,-2):r.slice(0,-2),x=[O.size(k),d,p],w=[{type:12,data:v},{type:12,data:d},{type:12,data:p},{type:12,data:h}];Bt(t,w),w.push(...Y(k,s,l)),b&&w.push(...Y(e[2].dims)),w.push(...Y(x));let S=T=>{let I=ai("batch_dims",e[0].dataType,k.length),A=B("a",e[0].dataType,s.length,m),C=B("b",e[1].dataType,l.length,f),M=Z("output",e[0].dataType,x.length,f),U=Be(M.type.tensor),H=Rt(t,M.type.value,U),ee=[A,C],se="";if(b){let me=i?f:1;ee.push(B("bias",e[2].dataType,e[2].dims.length,me)),se=`${i?`value += bias[col / ${me}];`:`value += ${M.type.value}(bias[row + i]);`}`}let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Dt(t,j);let pe=()=>{let me=`var a_data: ${A.type.value};`;for(let K=0;K<m;K++)me+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${f}];`;for(let K=0;K<g;K++){me+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${m}];`;for(let ye=0;ye<m;ye++)me+=`
            values[${K}] = fma(${C.type.value}(a_data${m===1?"":`[${ye}]`}), b_data${ye}, values[${K}]);
`}return me};return`
  ${T.registerUniforms(j).registerInternalVariables(I).declareVariables(...ee,M)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${cr("a_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${cr("b_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${M.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${pe()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${se}
      ${H}
      let cur_indices = ${M.type.indices}(batch, row + i, col);
      let offset = ${M.indicesToOffset("cur_indices")};
      ${M.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${m};${g};${i}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:S}}}),Gu,Wu,yi,vi,Fu,wi,Hu,aa,bi=E(()=>{ae(),ue(),le(),Mt(),_i(),mi(),Gu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Wu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,yi=(e,t,r="f32",a,i=!1,o=32,s=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],h=i?d:o,f=i?o:d,m=h/t[0],g=o/t[1];if(!((i&&m===4&&e[1]===4||!i&&(m===3||m===4))&&h%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${h/m}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Gu(i,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Wu(i,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},vi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Fu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",wi=(e,t,r="f32",a,i=!1,o=32,s=!1,l=32,d=!1)=>{let p=e[1]*t[1],h=e[0]*t[0],f=i?p:o,m=i?o:p;if(!(m%t[1]===0&&f%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let g=m/t[1],v=f/t[0],b=o/t[1],k=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${vi(i,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${v};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${v}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${vi(i,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Fu(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},Hu=(e,t,r,a,i=!1)=>{let[o,s,l,d]=a,p=Be(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Pe(e,p)} {
      var value = ${Pe(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${cr("aIndices",s,s.rank-2,o.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Pe(e,p)} {
      var value = ${Pe(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${cr("bIndices",l,l.rank-2,o.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Pe(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Pe(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},aa=(e,t,r,a,i=!1,o)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),p=l.slice(0,-2),h=a?a.slice(0,-2):r.slice(0,-2),f=O.size(h),m=s[s.length-2],g=s[s.length-1],v=l[l.length-1],b=g%4===0&&v%4===0,k=m<=8?[4,1,1]:[4,4,1],x=[8,8,1],w=[Math.ceil(v/x[0]/k[0]),Math.ceil(m/x[1]/k[1]),Math.ceil(f/x[2]/k[2])],S=b?4:1,T=[...d,m,g/S],I=T.length,A=[...p,g,v/S],C=A.length,M=[f,m,v/S],U=[{type:6,data:m},{type:6,data:v},{type:6,data:g}];Bt(t,U),U.push(...Y(h,T,A));let H=["rank","rank"],ee=e.length>2;ee&&(U.push(...Y(e[2].dims)),H.push("rank")),U.push(...Y(M));let se=j=>{let pe=h.length,me=ai("batchDims",e[0].dataType,pe,1),K=Be(e[0].dataType),ye=B("a",e[0].dataType,I,S),ge=B("b",e[1].dataType,C,S),ie=Z("result",e[0].dataType,M.length,S),Ce=[ye,ge];if(ee){let Le=i?S:1;Ce.push(B("bias",e[2].dataType,e[2].dims.length,Le))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Dt(t,N);let V=Be(ie.type.tensor),Se=Rt(t,ie.type.value,V),Ie=Hu(S,ee,Se,[me,ye,ge,ie],i);return`
  ${j.registerUniforms(N).registerInternalVariables(me).declareVariables(...Ce,ie)}
  ${Ie}
  ${b?yi(k,x,K,me):wi(k,x,K,me)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${b};${i}`,inputDependencies:H},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:U}),getShaderSource:se}}}),Zu,Ku,Gh=E(()=>{ae(),yt(),le(),Mt(),mi(),Vh(),bi(),Zu=(e,t,r,a,i=!1,o,s=4,l=4,d=4,p="f32")=>{let h=U=>{switch(U){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},f=U=>{switch(U){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,v=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",x=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Pe(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${v} && xCol >= 0 && xCol < ${b}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(s)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Pe(s,p)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Pe(s,p)}(0.0);`,T=e?a&&r?f(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(l)}
    }
    return ${Pe(l,p)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(l)}
    }
    return ${Pe(l,p)}(0.0);`,I=Pe(d,p),A=Pe(e?s:l,p),C=Pe(e?l:s,p),M=Rt(o,I,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?S:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Lu(i)}
      ${M}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ku=(e,t,r,a,i,o,s,l,d)=>{let p=t.format==="NHWC",h=p?e[0].dims[3]:e[0].dims[1],f=r[0],m=p?r[2]:r[3],g=p?r[1]:r[2],v=p?r[3]:r[1],b=p&&(h%4===0||h%3===0)&&v%4===0,k=p?v:m*g,x=p?m*g:v,w=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],T=[Math.ceil(k/w[0]/S[0]),Math.ceil(x/w[1]/S[1]),Math.ceil(f/w[2]/S[2])];_e("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let I=b?p&&h%4!==0?3:4:1,A=w[1]*S[1],C=w[0]*S[0],M=Math.max(w[0]*I,w[1]),U=a%A===0,H=i%C===0,ee=o%M===0,se=b?[I,4,4]:[1,1,1],j=[{type:6,data:a},{type:6,data:i},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Bt(t,j),j.push(...Y(e[0].dims,e[1].dims));let pe=["rank","rank"];s&&(j.push(...Y(e[2].dims)),pe.push("rank")),j.push(...Y(r));let me=K=>{let ye=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Dt(t,ye);let ge=b?4:1,ie=Be(e[0].dataType),Ce=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${ie}>`:ie}) {
        result[flatIndex] = ${b?`vec4<${ie}>`:ie}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${ie}>`:ie}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,N=B("x",e[0].dataType,e[0].dims.length,I===3?1:I),V=B("w",e[1].dataType,e[1].dims.length,ge),Se=[N,V],Ie=Z("result",e[0].dataType,r.length,ge);if(s){let Le=B("bias",e[2].dataType,e[2].dims.length,ge);Se.push(Le),Ce+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${ie}>`:ie} {
          return bias[coords.${p?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Vu("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(ye).declareVariables(...Se,Ie)}
        ${Ce}
        ${Zu(p,U,H,ee,s,t,se[0],se[1],se[2],ie)}
        ${b?yi(S,w,ie,void 0,!p,M):wi(S,w,ie,void 0,!p,M,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${b};${U};${H};${ee};${A};${C};${M}`,inputDependencies:pe},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:j}),getShaderSource:me}}}),Qu,$i,hr,Xu,xi,Yu,Ju,el,Wh=E(()=>{ae(),yt(),ue(),le(),Mt(),mi(),Qu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},$i=e=>typeof e=="number"?[e,e,e]:e,hr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Xu=(e,t,r,a=1)=>{let i=hr(t,a);return Math.floor((e[0]*(r-1)-r+i)/2)},xi=(e,t,r,a,i)=>{i==null&&(i=Xu(e,t[0],a[0]));let o=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(o[s]=Math.trunc((e[s]-t[s]+2*i)/a[s]+1));return o},Yu=(e,t,r,a,i,o,s,l,d,p)=>{let h,f,m,g;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let v=xi([t,r,a,1],[l,d,p],1,[i,o,s],e);f=v[0],m=v[1],g=v[2]}else if(Array.isArray(e)){if(!e.every((b,k,x)=>b===x[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let v=xi([t,r,a,1],[l,d,p],1,[i,o,s],e[0]);f=v[0],m=v[1],g=v[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),m=Math.ceil(r/o),g=Math.ceil(a/s);let v=(f-1)*i+l-t,b=(m-1)*o+d-r,k=(g-1)*s+p-a,x=Math.floor(v/2),w=v-x,S=Math.floor(b/2),T=b-S,I=Math.floor(k/2),A=k-I;h={top:S,bottom:T,left:I,right:A,front:x,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:f,outHeight:m,outWidth:g}},Ju=(e,t,r,a,i,o=!1,s="channelsLast")=>{let l,d,p,h,f;if(s==="channelsLast")[l,d,p,h,f]=e;else if(s==="channelsFirst")[l,f,d,p,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,g,v,b]=t,[k,x,w]=$i(r),[S,T,I]=$i(a),A=hr(g,S),C=hr(v,T),M=hr(b,I),{padInfo:U,outDepth:H,outHeight:ee,outWidth:se}=Yu(i,d,p,h,k,x,w,A,C,M),j=o?m*f:m,pe=[0,0,0,0,0];return s==="channelsFirst"?pe=[l,j,H,ee,se]:s==="channelsLast"&&(pe=[l,H,ee,se,j]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:p,inWidth:h,inChannels:f,outDepth:H,outHeight:ee,outWidth:se,outChannels:j,padInfo:U,strideDepth:k,strideHeight:x,strideWidth:w,filterDepth:g,filterHeight:v,filterWidth:b,effectiveFilterDepth:A,effectiveFilterHeight:C,effectiveFilterWidth:M,dilationDepth:S,dilationHeight:T,dilationWidth:I,inShape:e,outShape:pe,filterShape:t}},el=(e,t,r,a,i,o)=>{let s=o==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((k,x)=>x)},p=[Math.ceil(Qu(d.x.map(k=>r[k]))/l[0]),1,1];_e("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let h=1,f=O.size(r),m=[{type:12,data:f},{type:12,data:a},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Bt(t,m),m.push(...Y(e[0].dims,e[1].dims));let g=["rank","rank"],v=e.length===3;v&&(m.push(...Y(e[2].dims)),g.push("rank")),m.push(...Y(r));let b=k=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Dt(t,x);let w=1,S=Be(e[0].dataType),T=B("x",e[0].dataType,e[0].dims.length,h),I=B("W",e[1].dataType,e[1].dims.length,w),A=[T,I],C=Z("result",e[0].dataType,r.length,w),M="";if(v){let ee=B("bias",e[2].dataType,e[2].dims.length,w);A.push(ee),M+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?Q("coords",4,5):Q("coords",1,5)}];
        }`}let U=Pe(h,S),H=Rt(t,U,S);return`
            ${M}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${k.registerUniforms(x).declareVariables(...A,C)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${Q("coords",0,T.rank)};
              let d2 = ${s?Q("coords",T.rank-1,T.rank):Q("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?Q("coords",1,T.rank):Q("coords",2,T.rank)},
              ${s?Q("coords",2,T.rank):Q("coords",3,T.rank)},
              ${s?Q("coords",3,T.rank):Q("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Q("uniforms.x_shape",1,T.rank):Q("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?Q("uniforms.x_shape",2,T.rank):Q("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?Q("uniforms.x_shape",3,T.rank):Q("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?Q("uniforms.x_shape",4,T.rank):Q("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${v?"value = value + getBiasByOutputCoords(coords)":""};
              ${H}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${h};${v}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:m}),getShaderSource:b}}}),tl,rl,Fh=E(()=>{ae(),ue(),le(),Mt(),tl=(e,t,r,a)=>{let i=e.length>2,o=i?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],h=p/t.group,f=d&&h>=4?Ee(p):1,m=O.size(r)/f,g=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Bt(t,g),g.push(...Y(s,[l[0],l[1],l[2],l[3]/f]));let v=i?["rank","rank","rank"]:["rank","rank"];g.push(...Y([r[0],r[1],r[2],r[3]/f]));let b=k=>{let x=Z("output",e[0].dataType,r.length,f),w=Be(x.type.tensor),S=Rt(t,x.type.value,w),T=B("x",e[0].dataType,s.length),I=B("w",e[1].dataType,l.length,f),A=[T,I];i&&A.push(B("b",e[2].dataType,e[2].dims,f));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Dt(t,C);let M=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(C).declareVariables(...A,x)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${M}
    ${o}
    ${S}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:b}},rl=(e,t,r,a)=>{let i=e.length>2,o=Ee(r[3]),s=Ee(r[2]),l=O.size(r)/o/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],h=[r[0],r[1],r[2],r[3]/o],f=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Bt(t,f),f.push(...Y(d,p,h));let m=(s-1)*t.strides[1]+p[1],g=v=>{let b=Z("output",e[0].dataType,h.length,o),k=Be(b.type.tensor),x=Rt(t,b.type.value,k),w=B("x",e[0].dataType,d.length,o),S=B("w",e[1].dataType,p.length,o),T=[w,S];i&&T.push(B("b",e[2].dataType,e[2].dims,o));let I=i?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Dt(t,A),`
  ${v.registerUniforms(A).declareVariables(...T,b)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${m}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${x}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${s};${m};${p[0]};${p[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}}}),al,ia,il,na,ki,Si,nl,sl,Ti,Hh=E(()=>{ue(),Gh(),Wh(),bi(),Fh(),Mt(),_i(),kt(),al=(e,t,r,a,i,o)=>{let s=e[0],l=e.slice(o?1:2,o?3:4),d=l.length,p=t[0],h=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),f=l.map((m,g)=>m+a[g]+a[g+d]).map((m,g)=>Math.floor((m-h[g]+i[g])/i[g]));return f.splice(0,0,s),f.splice(o?3:1,0,p),f},ia=[2,3,1,0],il=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},na=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let o=2;o<t[1].dims.length;++o)r[o-2]===0&&(r[o-2]=t[1].dims[o]);let a=e.pads.slice();Yr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:a}),i},ki=e=>{let t=fi(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,o=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:a,format:r,dilations:i,group:o,kernelShape:s,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Si=(e,t,r,a)=>{let i=r.format==="NHWC",o=al(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let A=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(Xe(t[1],ia),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),A.push(C)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(rl(A,r,o,a),{inputs:A}):e.compute(tl(A,r,o,a),{inputs:A});return}let s=t.length===3,l=t[0].dims[i?1:2],d=t[0].dims[i?2:3],p=t[0].dims[i?3:1],h=t[1].dims[2],f=t[1].dims[3],m=o[i?1:2],g=o[i?2:3],v=o[i?3:1],b=i&&h===l&&f===d&&r.pads[0]===0&&r.pads[1]===0;if(b||h===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=o[0],C,M,U,H=[];if(i){let j=e.kernelCustomData.wT??e.compute(Xe(t[1],ia),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j),b){let pe=l*d*p;C=t[0].reshape([1,A,pe]),M=j.reshape([1,pe,v]),U=[1,A,v]}else C=t[0].reshape([A,l*d,p]),M=j.reshape([1,p,v]),U=[A,m*g,v];H.push(C),H.push(M)}else C=t[0].reshape([A,p,l*d]),M=t[1].reshape([1,v,p]),U=[A,v,m*g],H.push(M),H.push(C);s&&H.push(t[2]);let ee=U[2],se=H[0].dims[H[0].dims.length-1];ee<8&&se<8?e.compute(gi(H,r,o,U,i,a),{inputs:H}):e.compute(aa(H,r,o,U,i,a),{inputs:H});return}let k=!0,x=e.kernelCustomData.wT??e.compute(Xe(t[1],ia),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let w=[t[0],x];s&&w.push(t[2]);let S=i?m*g:v,T=i?v:m*g,I=h*f*p;e.compute(Ku(w,r,o,S,T,I,s,k,a),{inputs:w})},nl=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=na({...t,pads:i,strides:o,dilations:s,kernelShape:l},a);Si(e,a,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},sl=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",i=na(r,t),o=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Ju(t[0].dims,t[1].dims,r.strides,r.dilations,o,!1,a);e.compute(el(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},Ti=(e,t)=>{if(il(e.inputs,t),e.inputs[0].dims.length===3)nl(e,t);else if(e.inputs[0].dims.length===5)sl(e,e.inputs,t);else{let r=na(t,e.inputs);Si(e,e.inputs,r)}}}),ol,Zh=E(()=>{ae(),yt(),ue(),le(),ol=(e,t,r)=>{let a=e.length>2,i=t.outputShape,o=t.format==="NHWC",s=t.group,l=e[1].dims,d=l[2]/s,p=l[3],h=o?Ee(d):1,f=o?Ee(p):1,m=o?p===1?h:f:1,g=O.size(i)/f,v=[Math.ceil(g/64),1,1];_e("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let b=["rank","rank"],k=[t.strides[0],t.strides[1]],x=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],w=[t.dilations[0],t.dilations[1]],S=[x[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),x[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],T=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:g},{type:12,data:k},{type:12,data:x},{type:12,data:w},{type:12,data:S},{type:6,data:T},{type:12,data:d},{type:12,data:p},...Y(e[0].dims,e[1].dims)];a&&(I.push(...Y(e[2].dims)),b.push("rank")),I.push(...Y(i));let A=C=>{let M=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:k.length},{name:"filter_dims",type:"u32",length:x.length},{name:"dilations",type:"u32",length:x.length},{name:"effective_filter_dims",type:"u32",length:S.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],U=Be(e[0].dataType),H=o?1:2,ee=o?2:3,se=o?3:1,j=B("W",e[1].dataType,e[1].dims.length,m),pe=B("Dy",e[0].dataType,e[0].dims.length,h),me=[pe,j];a&&me.push(B("bias",e[2].dataType,[i[se]].length,f));let K=Z("result",e[0].dataType,i.length,f),ye=()=>{let ie="";if(h===1)ie+=`
        let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${j.getByOffset(`w_offset / ${m}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)ie+=`
          let wValue = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${m}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let Ce=0;Ce<h;Ce++)ie+=`
            let wValue${Ce} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Ce}, wOutChannel)`)} / ${m}`)};
            dotProd = dotProd + xValue[${Ce}] * wValue${Ce};`;return ie},ge=`
            let outputIndices = ${K.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${K.indicesGet("outputIndices",0)};
            let d1 = ${K.indicesGet("outputIndices",se)};
            let r = ${K.indicesGet("outputIndices",H)};
            let c = ${K.indicesGet("outputIndices",ee)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${K.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${U}(dyRCorner) + ${U}(wR)) / ${U}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${U}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${U}(dyCCorner) + ${U}(wC)) / ${U}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${U}(uniforms.Dy_shape[${ee}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${h}) {
                  let xValue = ${o?pe.getByOffset(`${pe.indicesToOffset(`${pe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):pe.get("batch","inputChannel","idyR","idyC")};
                  ${ye()}
                  inputChannel = inputChannel + ${h};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${f}]`:""};
            ${K.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(M).declareVariables(...me,K)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ge}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${m}${f}${p===1}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:A}}}),ul,ll,dl,Ii,pl,cl,Ei,hl,fl,Kh=E(()=>{Zh(),Mt(),kt(),ul=(e,t,r,a,i,o)=>(e-1)*t+r+(a-1)*i+1-o,ll=(e,t,r,a,i)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=o,r[i]=e-o):t==="SAME_LOWER"&&(r[a]=e-o,r[i]=o)},dl=(e,t,r,a,i,o,s,l,d,p)=>{let h=e.length-2,f=p.length===0;d.length<h&&d.push(...Array(h-d.length).fill(0));let m=e[0],g=t[l?3:1]*i;for(let v=0,b=e.length-h-(l?1:0);v<h;++v,++b){let k=e[b],x=f?k*s[v]:p[v],w=ul(k,s[v],o[v],t[b],r[v],x);ll(w,a,o,v,v+h),f&&p.push(s[v]*(k-1)+d[v]+(t[b]-1)*r[v]+1-o[v]-o[v+h])}p.splice(0,0,m),p.splice(l?3:1,0,g)},Ii=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,m)=>f*m,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let i=e.pads.slice(),o=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}let p=e.strides.slice();if(p.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;p=new Array(f).fill(1)}dl(l,r,d,e.autoPad,e.group,i,p,a,s,o);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:i,outputPadding:s,outputShape:o,dilations:d,strides:p}),h},pl=e=>{let t=fi(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,o=e.group,s=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),h=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:i,group:o,kernelShape:s,outputPadding:h,outputShape:f,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},cl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ei=(e,t,r,a)=>{let i=e.kernelCustomData.wT??e.compute(Xe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let o=[t[0],i];t.length===3&&o.push(t[2]),e.compute(ol(o,r,a),{inputs:o})},hl=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),o=[1].concat(o),i=[1].concat(i);let d=t.outputPadding;d=[0].concat(d);let p=Ii({...t,pads:l,strides:s,dilations:o,kernelShape:i,outputPadding:d},a);Ei(e,a,p,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},fl=(e,t)=>{if(cl(e.inputs,t),e.inputs[0].dims.length===3)hl(e,t);else{let r=Ii(t,e.inputs);Ei(e,e.inputs,r)}}}),ml,gl,_l,Qh=E(()=>{ae(),ue(),ze(),le(),ml=(e,t,r,a)=>{let i=O.size(t),o=t.length,s=B("input",e,o),l=Z("output",e,o),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=O.normalizeAxis(d,o),h=f=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=Q("uniforms.input_shape","uniforms.axis",o),v=a.reverse?m+(a.exclusive?" + 1":""):"0",b=a.reverse?g:m+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${v};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:p},...Y(t,t)]}),getShaderSource:h}},gl=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,i=e.inputs[1];e.compute(ml(a,r,i,t),{inputs:[0]})},_l=e=>{let t=e.exclusive===1,r=e.reverse===1;return ke({exclusive:t,reverse:r})}}),yl,vl,wl,bl,$l,Xh=E(()=>{ae(),ue(),ze(),le(),yl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},vl=(e,t,r,a)=>{let i=[];i.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let o=0;o<t;++o)i.push(r.indicesSet("a",e[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},wl=(e,t)=>{let r,a,i,o,s,l,d=t.format==="NHWC",p=t.blocksize,h=t.mode==="DCR";d?([r,a,i,o]=e.dims,s=h?[r,a,i,p,p,o/p**2]:[r,a,i,o/p**2,p,p],l=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,i,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[r,p,p,o/p**2,a,i]:[r,o/p**2,p,p,a,i],l=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),m=f.dims.length,g=e.dataType,v=B("a",g,m),b=Z("output",g,m),k=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(v,b)}

  ${vl(l,m,v,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let w=d?[r,a*p,i*p,o/p**2]:[r,o/p**2,a*p,i*p],S=O.size(w),T=f.dims,I=O.sortBasedOnPerm(T,l);return{outputs:[{dims:w,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...Y(T,I)]}},getShaderSource:k}},bl=(e,t)=>{yl(e.inputs),e.compute(wl(e.inputs[0],t))},$l=e=>ke({blocksize:e.blocksize,mode:e.mode,format:e.format})}),sa,fr,zi,xl,kl,Sl,Tl,Ci,Il,El,zl,Yh=E(()=>{ae(),ue(),ze(),le(),sa="[a-zA-Z]|\\.\\.\\.",fr="("+sa+")+",zi="^"+fr+"$",xl="("+fr+",)*"+fr,kl="^"+xl+"$",Sl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Tl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(kl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,o)=>{let s=e[o].dims.slice();if(!i.match(RegExp(zi)))throw new Error("Invalid LHS term");let l=this.processTerm(i,!0,s,o);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,o])=>o.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(fr)))throw new Error("Invalid RHS");a.match(RegExp(sa,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(i);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let i=r.length,o=!1,s=[],l=0;if(!e.match(RegExp(zi))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(sa,"g")),p=new Sl(a);return d?.forEach((h,f)=>{if(h==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let m=i-d.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let v=String.fromCharCode(48+g);p.addSymbol(v,f+g),this.addSymbol(v,r[l++],a)}}else p.addSymbol(h,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[l++],a)}),p}},Ci=e=>e+"_max",Il=(e,t,r,a)=>{let i=e.map(p=>p.length).map((p,h)=>B(`input${h}`,t,p)),o=O.size(a),s=Z("output",t,a.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let h=[],f="var prod = 1.0;",m="var sum = 0.0;",g="sum += prod;",v=[],b=[],k=[],x=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,I)=>{if(r.rhs.symbolToIndices.has(I)){let A=r.rhs.symbolToIndices.get(I)?.[0];A!==void 0&&r.lhs.forEach((C,M)=>{if(T.inputIndices.includes(M)){let U=C.symbolToIndices.get(I);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(H=>{h.push(`${i[M].indicesSet(`input${M}Indices`,H,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,C)=>{if(T.inputIndices.includes(C)){let M=A.symbolToIndices.get(I);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(U=>{v.push(`${i[C].indicesSet(`input${C}Indices`,U,`${I}`)}`)}),x.push(`prod *= ${i[C].getByIndices(`input${C}Indices`)};`)}}),b.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Ci(I)}; ${I}++) {`),k.push("}")});let S=w?[...h,`let sum = ${i.map((T,I)=>T.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,m,...b,...v,f,...x,g,...k];return`
            ${p.registerUniforms(l.map(T=>({name:`${Ci(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((T,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));p.push({type:12,data:o});let h=e.map((f,m)=>[...Y(f)]).reduce((f,m)=>f.concat(m),p);return h.push(...Y(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:h}},getShaderSource:d}},El=(e,t)=>{let r=new Tl(e.inputs,t.equation),a=r.outputDims,i=e.inputs.map((o,s)=>o.dims);e.compute(Il(i,e.inputs[0].dataType,r,a))},zl=e=>{let t=e.equation.replace(/\s+/g,"");return ke({equation:t})}}),Cl,Oi,Ol,Al,Rl,Jh=E(()=>{ae(),ue(),le(),Cl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;a<r.length&&i<t.length;++a,++i)if(r[a]!==t[i]&&r[a]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Oi=(e,t)=>{let r=e.length-t.length,a=[];for(let i=0;i<r;++i)a.push(e[i]);for(let i=0;i<t.length;++i)a.push(t[i]===1?e[i+r]:t[i]);return a},Ol=(e,t)=>e.length>t.length?Oi(e,t):Oi(t,e),Al=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=Ol(t,r),i=e[0].dataType,o=i===9||O.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,l=o||a.length>0&&a[a.length-1]%4===0?4:1,d=Math.ceil(O.size(a)/l),p=f=>{let m=B("input",i,t.length,s),g=Z("output",i,a.length,l),v;if(i===9){let b=(k,x,w="")=>`
          let outputIndices${x} = ${g.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${m.broadcastedIndicesToOffset(`outputIndices${x}`,g)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${k}[${x}] = ${w}(${m.getByOffset(`index${x}`)}[component${x}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else v=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(m,g)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${v}`},h=[{type:12,data:d},...Y(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h})}},Rl=e=>{Cl(e.inputs),e.compute(Al(e.inputs),{inputs:[0]})}}),Bl,Dl,ef=E(()=>{ae(),ue(),le(),hi(),Bl=e=>{let t=e[0].dataType,r=O.size(e[0].dims),a=O.size(e[1].dims),i=a%4===0,o=s=>{let l=B("x",t,[1],4),d=B("bias",t,[1],4),p=Z("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${d.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,m=i?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(l,d,p)}

    ${pi(Ge(t))}

    ${s.mainStart(Ft)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",ci("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Ft/4)}})}},Dl=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?mu(e):e.compute(Bl(e.inputs))}}),Ml,Nl,Pl,Ul,tf=E(()=>{ae(),ue(),ze(),le(),Ml=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Nl=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,o=O.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(o,1,...a);let l=r[o],d=e[0].dataType===9?4:1,p=Math.ceil(O.size(s)/d),h=[{type:12,data:p},{type:6,data:l},{type:12,data:o},...Y(e[0].dims,e[1].dims,s)],f=m=>{let g=B("data",e[0].dataType,e[0].dims.length,d),v=B("inputIndices",e[1].dataType,e[1].dims.length),b=Z("output",e[0].dataType,s.length,d),k=w=>{let S=a.length,T=`var indicesIndices${w}  = ${v.type.indices}(0);`;for(let I=0;I<S;I++)T+=`${S>1?`indicesIndices${w}[${I}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${I}]`:`outputIndices${w}`};`;T+=`
          var idx${w} = ${v.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${g.type.indices};
        `;for(let I=0,A=0;I<i;I++)I===o?(T+=`${i>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = u32(idx${w});`,A+=S):(T+=`${i>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${A}]`:`outputIndices${w}`};`,A++);return T},x;if(e[0].dataType===9){let w=(S,T,I="")=>`
          let outputIndices${T} = ${b.offsetToIndices(`outputOffset + ${T}u`)};
          ${k(T)};
          let offset${T} = ${g.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${S}[${T}] = ${I}(${g.getByOffset(`index${T}`)}[component${T}]);
        `;x=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${g.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,v,b)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:f}},Pl=e=>ke({axis:e.axis}),Ul=(e,t)=>{let r=e.inputs;Ml(r),e.compute(Nl(e.inputs,t))}}),jl,ql,Ll,rf=E(()=>{ae(),ue(),le(),jl=(e,t,r,a,i,o,s,l,d)=>{let p=[{type:12,data:o},{type:12,data:a},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:l},{type:12,data:d}],h=[o];p.push(...Y(t.dims,h));let f=m=>{let g=B("indices_data",t.dataType,t.dims.length),v=Z("input_slice_offsets_data",12,1,1),b=[g,v],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(k).declareVariables(...b)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},ql=(e,t)=>{let r=e.inputs,a=r[0].dims,i=r[0].dataType,o=r[1].dims,s=o[o.length-1],l=O.sizeToDimension(o,o.length-1),d=O.sizeFromDimension(a,t.batchDims+s),p=O.sizeToDimension(a,t.batchDims),h=O.sizeFromDimension(a,t.batchDims),f=l/p,m=new Array(s),g=d;for(let T=0;T<s;++T)m[s-1-T]=g,g*=a[t.batchDims+s-1-T];let v=jl(e,r[1],m,t.batchDims,a,l,f,h,s),b=t.batchDims+s;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=o.slice(0,-1).concat(a.slice(b)),x=O.size(k),w=[{type:12,data:x},{type:12,data:d},...Y(r[0].dims,v.dims,k)],S=T=>{let I=B("data",r[0].dataType,r[0].dims.length),A=B("slice_offsets",12,v.dims.length),C=Z("output",r[0].dataType,k.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,A,C)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:i}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:w}),getShaderSource:S},{inputs:[r[0],v]})},Ll=e=>({batchDims:e.batch_dims,cacheKey:""})}),Vl,Gl,Wl,Fl,af=E(()=>{ae(),ue(),ze(),le(),Vl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,i=e[0],o=e[2],s=e.length===4?e[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((l,d)=>d===r?Math.ceil(l/a)===o.dims[d]:l===o.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==o.dims.length||!s.dims.map((l,d)=>l===o.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Gl=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,o=O.normalizeAxis(t.gatherAxis,i),s=O.normalizeAxis(t.quantizeAxis,i),l=r.slice(0);l.splice(o,1,...a);let d=O.size(l),p=e[2].dataType,h=e[0].dataType===22,f=[{type:12,data:d},{type:12,data:s},{type:12,data:o},{type:12,data:t.blockSize},...Y(...e.map((g,v)=>g.dims),l)],m=g=>{let v=B("data",e[0].dataType,e[0].dims.length),b=B("inputIndices",e[1].dataType,e[1].dims.length),k=B("scales",e[2].dataType,e[2].dims.length),x=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=Z("output",p,l.length),S=[v,b,k];x&&S.push(x);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(T).declareVariables(...S,w)}
        ${g.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${v.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${v.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[o]};
        }
        ${v.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${v.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${v.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${v.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ge(p)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,v)=>v!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,v)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:m}},Wl=(e,t)=>{let r=e.inputs;Vl(r,t),e.compute(Gl(e.inputs,t))},Fl=e=>ke({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Hl,Zl,Kl,Ql,nf=E(()=>{ae(),ue(),ze(),le(),Hl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Zl=(e,t)=>{let r=e[0].dims,a=e[0].dataType,i=r.length,o=e[1].dims,s=e[1].dataType,l=O.normalizeAxis(t.axis,i),d=r[l],p=o.slice(0),h=O.size(p),f=B("input",a,i),m=B("indicesInput",s,o.length),g=Z("output",a,p.length),v=[{type:12,data:h},{type:6,data:d},{type:12,data:l}];return v.push(...Y(r,o,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,g)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},Kl=e=>ke({axis:e.axis}),Ql=(e,t)=>{let r=e.inputs;Hl(r),e.compute(Zl(e.inputs,t))}}),Xl,Yl,Jl,ed,sf=E(()=>{ae(),ue(),le(),Xl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Yl=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[i,o,s]=ws.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),l=[i,o];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(o/d),h=Math.ceil(i/d),f=!0,m=O.size(l),g=[{type:12,data:f?p:m},{type:12,data:i},{type:12,data:o},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],v=["type","type"];e.length===3&&(g.push(...Y(e[2].dims)),v.push("rank")),g.push(...Y(l));let b=x=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",T=B("a",e[0].dataType,e[0].dims),I=B("b",e[1].dataType,e[1].dims),A=T.type.value,C=null,M=[T,I];e.length===3&&(C=B("c",e[2].dataType,e[2].dims.length),M.push(C));let U=Z("output",e[0].dataType,l.length);M.push(U);let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(H).declareVariables(...M)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${S}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",U)}; value += ${A}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=x=>{let w=B("a",e[0].dataType,e[0].dims),S=B("b",e[1].dataType,e[1].dims),T=null,I=[w,S];e.length===3&&(T=B("c",e[2].dataType,e[2].dims.length),I.push(T));let A=Z("output",e[0].dataType,l.length);I.push(A);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],M="",U="";t.transA&&t.transB?(U=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(U=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(U=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(U=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let H=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(C).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${d}>, ${d}>;
  ${x.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${U}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${M}
      }
      workgroupBarrier();
    }

    ${H}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:p*h},programUniforms:g}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:b}},Jl=e=>{let t=e.transA,r=e.transB,a=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:a,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ed=(e,t)=>{Xl(e.inputs),e.compute(Yl(e.inputs,t))}}),ht,vt,Nt,Pt,td,rd,ad,id,nd,sd,od,ud,ld,dd,of=E(()=>{ae(),ue(),ze(),le(),[ht,vt,Nt,Pt]=[0,1,2,3],td=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},rd=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,ad=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,id=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,nd=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,sd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ht}] = batch;
     indices[${vt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Nt}] = u32(r);
            indices[${Pt}] = u32(c);
          }
        `;case"border":return`
          indices[${Nt}] = u32(clamp(r, 0, H - 1));
          indices[${Pt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Nt}] = gs_reflect(r, border[1], border[3]);
          indices[${Pt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,od=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ht}], indices[${vt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ht}], indices[${vt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ht}], indices[${vt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ht}], indices[${vt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ht}], indices[${vt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ht}], indices[${vt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ud=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=B("grid",e[1].dataType,a.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ht,vt,Nt,Pt]=[0,3,1,2]);let s=Z("output",e[0].dataType,o.length),l=r.type.value,d=O.size(o),p=[{type:12,data:d},...Y(e[0].dims,a,o)],h=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${rd}
  ${ad(l)}
  ${id(t)}
  ${nd(t)}
  ${sd(r,l,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Nt}]);
      let W_in = i32(uniforms.x_shape[${Pt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ht}], indices[${Nt}], indices[${Pt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${od(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let m=O.size(o);return{outputs:[{dims:o,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:p}},getShaderSource:h}},ld=(e,t)=>{td(e.inputs),e.compute(ud(e.inputs,t))},dd=e=>ke({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Fe,pd,cd,Ai,hd,mr,fd,md=E(()=>{ae(),ue(),ze(),Ya(),li(),le(),kt(),Fe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,pd=(e,t)=>{let r=e[0],a=Fe(e,1),i=Fe(e,2),o=Fe(e,3),s=Fe(e,4),l=Fe(e,5),d=Fe(e,6),p=Fe(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],f=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,v=0,b=0,k=Math.floor(m/t.numHeads);if(d&&p&&O.size(d.dims)&&O.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==h||p.dims[1]!==t.numHeads||p.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=d.dims[2],b=d.dims[2]}else if(d&&O.size(d.dims)||p&&O.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(a&&O.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,g=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,g=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,g=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(o&&O.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=v+g,S=0;if(s&&O.size(s.dims)>0){S=8;let C=s.dims;throw C.length===1?C[0]===h?S=1:C[0]===3*h+2&&(S=3):C.length===2&&C[0]===h&&C[1]===w&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,I=m;if(i&&O.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],T=!0}}let A=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[2]!==f||l.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:f,pastSequenceLength:v,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:m,vHiddenSize:I,headSize:k,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:A,passPastInKv:T,qkvFormat:x}},cd=e=>ke({...e}),Ai=ke({perm:[0,2,1,3]}),hd=(e,t,r,a,i,o,s)=>{let l=[a,i,o],d=O.size(l),p=[{type:12,data:d},{type:12,data:s},{type:12,data:o}],h=f=>{let m=Z("qkv_with_bias",t.dataType,l),g=B("qkv",t.dataType,l),v=B("bias",r.dataType,l),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(g,v,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},mr=(e,t,r,a,i,o,s,l)=>{let d=o;if(s&&O.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=hd(e,o,s,t,a,r*i,l),d=d.reshape([t,a,r,i]),r===1||a===1?d:e.compute(Xe(d,Ai.perm),{inputs:[d],outputs:[-1]})[0]}else return o.dims.length===3&&(d=o.reshape([t,a,r,i])),r===1||a===1?d:e.compute(Xe(d,Ai.perm),{inputs:[d],outputs:[-1]})[0]},fd=(e,t)=>{let r=pd(e.inputs,t),a=e.inputs[0],i=Fe(e.inputs,1),o=Fe(e.inputs,2),s=Fe(e.inputs,3),l=Fe(e.inputs,4),d=Fe(e.inputs,5),p=Fe(e.inputs,6),h=Fe(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let f=i&&o&&i.dims.length===4&&o.dims.length===4,m=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(f)return dr(e,m,i,o,l,void 0,p,h,d,r);if(!i||!o)throw new Error("key and value must be provided");let g=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),v=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,o,s,2*r.hiddenSize);dr(e,m,g,v,l,void 0,p,h,d,r)}}),gd,_d,yd,vd,Ri,wd,bd,$d=E(()=>{ae(),ue(),ze(),le(),gd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},_d=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),a=r.length),ke({numOutputs:a,axis:t.axis,splitSizes:r})},yd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Q("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,vd=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let i=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(i):a===0?r.push(`if (output_number == ${a}u) { ${i} }`):a===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${a}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ri=(e,t)=>{let r=e[0].dims,a=O.size(r),i=e[0].dataType,o=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=B("input",i,r.length),d=new Array(t.numOutputs),p=[],h=[],f=0,m=[{type:12,data:a}];for(let v=0;v<t.numOutputs;v++){f+=t.splitSizes[v],d[v]=f;let b=r.slice();b[o]=t.splitSizes[v],h.push(b),s[v]=Z(`output${v}`,i,b.length),p.push({dims:h[v],dataType:e[0].dataType})}m.push({type:12,data:d},...Y(r,...h));let g=v=>`
  ${v.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${yd(d.length)}
  ${vd(s)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Q("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:m})}},wd=(e,t)=>{gd(e.inputs);let r=e.inputs.length===1?t:_d(e.inputs,t);e.compute(Ri(e.inputs,r),{inputs:[0]})},bd=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ke({axis:t,numOutputs:a,splitSizes:r})}}),xd,kd,Bi,Sd,uf=E(()=>{ze(),li(),md(),$d(),kt(),xd=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],i=e[2],o=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],h=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=p,m=0,g=!a||a.dims.length===0,v=Math.floor(g?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);g&&(h=v*t.numHeads);let b=o&&o.dims.length!==0,k=s&&s.dims.length!==0;if(b&&o.dims.length===4&&o.dims[0]===d&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===v)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&k){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=o.dims[2]}else if(b||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let w=0,S=!1,T=t.kvNumHeads?v*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:v,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:x}},kd=ke({perm:[0,2,1,3]}),Bi=(e,t,r)=>{let a=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),a=e.compute(Xe(a,kd.perm),{inputs:[a],outputs:[-1]})[0]),a},Sd=(e,t)=>{let r=xd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ke({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[m,g,v]=!i&&!o?e.compute(Ri([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,i,o],b=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,m,void 0,0);dr(e,b,Bi(e,g,r),Bi(e,v,r),void 0,void 0,s,l,void 0,r,d,p)}}),Di,Td,Id,Ed,lf=E(()=>{ae(),ue(),kt(),le(),Di=(e,t,r,a,i,o,s,l)=>{let d=Ee(o),p=d===1?"f32":`vec${d}f`,h=d===1?"vec2f":`mat2x${d}f`,f=i*s,m=64;f===1&&(m=256);let g=[i,s,o/d],v=[i,s,2],b=["rank","type","type"],k=[];k.push(...Y(g,v));let x=w=>{let S=B("x",t.dataType,3,d),T=B("scale",r.dataType,r.dims),I=B("bias",a.dataType,a.dims),A=Z("output",1,3,2),C=[S,T,I,A];return`
  var<workgroup> workgroup_shared : array<${h}, ${m}>;
  const workgroup_size = ${m}u;
  ${w.declareVariables(...C)}
  ${w.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${xt("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${xt("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${m}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:v,dataType:1}],dispatchGroup:{x:f},programUniforms:k}),getShaderSource:x},{inputs:[t,r,a],outputs:[-1]})[0]},Td=(e,t,r)=>{let a=t[0].dims,i=a,o=2,s=a[0],l=a[1],d=O.sizeFromDimension(a,o),p=Ee(d),h=O.size(i)/p,f=Di(e,t[0],t[1],t[2],s,d,l,r.epsilon),m=[s,l,d/p],g=[s,l],v=["type","none"],b=k=>{let x=B("x",t[0].dataType,m.length,p),w=B("scale_shift",1,g.length,2),S=Z("output",t[0].dataType,m.length,p),T=[x,w,S];return`
  ${k.registerUniform("output_size","u32").declareVariables(...T)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...Y(m,g,m)]}),getShaderSource:b},{inputs:[t[0],f]})},Id=(e,t,r)=>{let a=t[0].dims,i=a,o=a[0],s=a[a.length-1],l=O.sizeFromDimension(a,1)/s,d=Ee(s),p=O.size(i)/d,h=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],f=["type","type"],m=!1,g=[0,a.length-1];for(let x=0;x<a.length-2;x++)m=m||a[x+1]!==1,g.push(x+1);m=m&&a[a.length-1]!==1;let v=m?e.compute(Xe(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(x,w)=>a[g[w]])),b=Di(e,v,t[1],t[2],o,l,s,r.epsilon),k=x=>{let w=Be(t[0].dataType),S=d===1?"vec2f":`mat${d}x2f`,T=C=>{let M=C===0?"x":"y",U=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${w}(${U}(scale.${M}))`;case 2:return`vec2<${w}>(${U}(scale[0].${M}, scale[1].${M}))`;case 4:return`vec4<${w}>(${U}(scale[0].${M}, scale[1].${M}, scale[2].${M}, scale[3].${M}))`;default:throw new Error(`Not supported compoents ${d}`)}},I=B("input",t[0].dataType,t[0].dims,d),A=Z("output",t[0].dataType,i,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:k},{inputs:[t[0],b]})},Ed=(e,t)=>{t.format==="NHWC"?Id(e,e.inputs,t):Td(e,e.inputs,t)}}),zd,Cd,Od,df=E(()=>{ae(),ue(),le(),zd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Cd=(e,t,r)=>{let a=t.simplified,i=e[0].dims,o=e[1],s=!a&&e[2],l=i,d=O.normalizeAxis(t.axis,i.length),p=O.sizeToDimension(i,d),h=O.sizeFromDimension(i,d),f=O.size(o.dims),m=s?O.size(s.dims):0;if(f!==h||s&&m!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${m}`);let g=[];for(let I=0;I<i.length;++I)I<d?g.push(i[I]):g.push(1);let v=Ee(h),b=["type","type"],k=[{type:12,data:p},{type:1,data:h},{type:12,data:Math.floor(h/v)},{type:1,data:t.epsilon}];s&&b.push("type");let x=r>1,w=r>2,S=I=>{let A=Be(e[0].dataType),C=[B("x",e[0].dataType,e[0].dims,v),B("scale",o.dataType,o.dims,v)];s&&C.push(B("bias",s.dataType,s.dims,v)),C.push(Z("output",e[0].dataType,l,v)),x&&C.push(Z("mean_data_output",1,g)),w&&C.push(Z("inv_std_output",1,g));let M=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(M).declareVariables(...C)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ri("f32",v)};
    var mean_square_vector = ${ri("f32",v)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ht(A,v,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${xt("mean_vector",v)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${xt("mean_square_vector",v)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ht(A,v,"x[j + offset]")};
      let f32scale = ${Ht(A,v,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Ht(A,v,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return x&&T.push({dims:g,dataType:1}),w&&T.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${v};${r};${a}`,inputDependencies:b},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:k}),getShaderSource:S}},Od=(e,t)=>{zd(e.inputs),e.compute(Cd(e.inputs,t,e.outputCount))}}),Ad,Rd,pf=E(()=>{ue(),_i(),bi(),Ad=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Rd=e=>{Ad(e.inputs);let t=Wt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(gi(e.inputs,{activation:""},t));else{let i=t[t.length-2],o=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&s===1){let l=e.inputs[0].reshape([1,o,a]),d=e.inputs[1].reshape([1,a,r]),p=[1,o,r],h=[l,d];e.compute(aa(h,{activation:""},t,p),{inputs:h})}else e.compute(aa(e.inputs,{activation:""},t))}}}),Bd,Dd,Md,Nd,Pd,cf=E(()=>{ae(),ue(),ze(),le(),Bd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(O.size(d)!==p)throw new Error("zeroPoints input size error.")}},Dd=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],o=t.k,s=t.n,l=r.slice(0,a-2),d=O.size(l),p=e[1].dims[2]/4,h=e[0].dataType,f=Ee(t.k),m=Ee(p),g=Ee(s),v=l.concat([i,s]),b=i>1&&s/g%2===0?2:1,k=O.size(v)/g/b,x=64,w=[],S=[d,i,o/f],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,p/m),w.push(...Y(S)),w.push(...Y(T)),w.push(...Y(e[2].dims)),e.length===4&&w.push(...Y(O.convertShape(e[3].dims)));let I=[d,i,s/g];w.push(...Y(I));let A=C=>{let M=S.length,U=B("a",e[0].dataType,M,f),H=B("b",12,T.length,m),ee=B("scales",e[2].dataType,e[2].dims.length),se=[U,H,ee],j=e.length===4?B("zero_points",12,e[3].dims.length):void 0;j&&se.push(j);let pe=I.length,me=Z("output",e[0].dataType,pe,g),K=Be(e[0].dataType),ye=(()=>{switch(f){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${f}-component is not supported.`)}})(),ge=()=>{let N=`
          // reuse a data
            var input_offset = ${U.indicesToOffset(`${U.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ye};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${U.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let V=0;V<g*b;V++)N+=`
            b_value = ${m===1?`b${V}_data`:`b${V}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ye}(${Array.from({length:4},(Se,Ie)=>`${K}(b_value_lower[${Ie}]), ${K}(b_value_upper[${Ie}])`).join(", ")});
            b_dequantized_values = ${f===1?`${ye}(${Array.from({length:8},(Se,Ie)=>`(b_quantized_values[${Ie}] - ${j?`zero_point${V}`:"zero_point"}) * scale${V}`).join(", ")});`:`(b_quantized_values - ${ye}(${Array(8).fill(`${j?`zero_point${V}`:"zero_point"}`).join(",")})) * scale${V};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(V/g)}]${g>1?`[${V%g}]`:""} += ${Array.from({length:8/f},(Se,Ie)=>`${f===1?`a_data[${Ie}] * b_dequantized_values[${Ie}]`:`dot(a_data[${Ie}], b_dequantized_values[${Ie}])`}`).join(" + ")};
          `;return N},ie=()=>{let N=`
            var col_index = col * ${g};
            ${j?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let V=0;V<g*b;V++)N+=`
            let scale${V} = ${ee.getByOffset("col_index * nBlocksPerCol + block")};
            ${j?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${j.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},Ce=()=>{let N=`col_index = col * ${g};`;for(let V=0;V<g*b;V++)N+=`
            let b${V}_data = ${H.getByIndices(`${H.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ye};
            var b_dequantized_values: ${ye};`,N};return`
        var<workgroup> workgroup_shared: array<${me.type.value}, ${b*x}>;
        ${C.declareVariables(...se,me)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${me.offsetToIndices(`(global_idx / ${x}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${ie()}
            for (var word: u32 = 0; word < ${p}; word += ${m}) {
              ${Ce()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${ge()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${me.type.value} = ${me.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${me.setByIndices(`${me.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${m};${g};${b};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:h}],dispatchGroup:{x:k},programUniforms:w}),getShaderSource:A}},Md=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],o=t.k,s=t.n,l=r.slice(0,a-2),d=O.size(l),p=e[1].dims[2]/4,h=e[0].dataType,f=Ee(t.k),m=Ee(p),g=l.concat([i,s]),v=128,b=s%8===0?8:s%4===0?4:1,k=v/b,x=k*m*8,w=x/f,S=x/t.blockSize,T=O.size(g)/b,I=[],A=[d,i,o/f],C=O.convertShape(e[1].dims).slice();C.splice(-1,1,p/m),I.push(...Y(A)),I.push(...Y(C)),I.push(...Y(e[2].dims)),e.length===4&&I.push(...Y(O.convertShape(e[3].dims)));let M=[d,i,s];I.push(...Y(M));let U=H=>{let ee=A.length,se=B("a",e[0].dataType,ee,f),j=B("b",12,C.length,m),pe=B("scales",e[2].dataType,e[2].dims.length),me=[se,j,pe],K=e.length===4?B("zero_points",12,e[3].dims.length):void 0;K&&me.push(K);let ye=M.length,ge=Z("output",e[0].dataType,ye),ie=Be(e[0].dataType),Ce=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${se.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${ge.type.value}, ${k}>, ${b}>;
        ${H.declareVariables(...me,ge)}
        ${H.mainStart([k,b,1])}
          let output_indices = ${ge.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${v})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${se.getByIndices(`${se.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${se.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${K?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ie}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ie}(8);`}
            let scale = ${pe.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${j.getByIndices(`${j.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${Ce()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${ie}>(${Array.from({length:4},(N,V)=>`${ie}(b_value_lower[${V}]), ${ie}(b_value_upper[${V}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${ie}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,V)=>`${`dot(a_data${V}, b_dequantized_values[${V}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${ge.type.value} = ${ge.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ge.setByIndices(`${ge.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${m};${k};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:T},programUniforms:I}),getShaderSource:U}},Nd=(e,t)=>{Bd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Md(e.inputs,t)):e.compute(Dd(e.inputs,t))},Pd=e=>ke(e)}),Ud,jd,qd,Ld,Vd,Gd,Wd,Fd,Hd,hf=E(()=>{ae(),ue(),le(),Ud=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},jd=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
            k = i32(${e.indicesGet("indices",i)}) - ${Q("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Q("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${Q("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},qd=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Q("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Q("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Q("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Q("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Ld=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Q("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Q("uniforms.x_shape",i,t)})) {
                  k = i32(${Q("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${Q("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Vd=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Q("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${Q("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${Q("uniforms.x_shape",i,t)})) {
                  k -= i32(${Q("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${Q("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Gd=(e,t,r)=>{switch(r.mode){case 0:return jd(e,t,r.pads.length);case 1:return qd(e,t,r.pads.length);case 2:return Ld(e,t,r.pads.length);case 3:return Vd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Wd=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,i=O.size(r),o=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&o.push({type:s?e[2].dataType:1,data:t.value}),o.push(...Y(e[0].dims,r));let l=["rank"],d=p=>{let h=Z("output",e[0].dataType,r.length),f=B("x",e[0].dataType,a.length),m=f.type.value,g=Gd(h,a.length,t),v=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&v.push({name:"constant_value",type:s?m:"f32"}),`
            ${p.registerUniforms(v).declareVariables(f,h)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:o}),getShaderSource:d}},Fd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,o=new Int32Array(2*i).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)o[Number(l[d])]=Number(r[d]),o[Number(l[d])+i]=Number(r[d+l.length])}else r.forEach((l,d)=>o[Number(d)]=Number(l));let s=[];return o.forEach(l=>s.push(l)),{mode:t.mode,value:a,pads:s}}else return t},Hd=(e,t)=>{Ud(e.inputs);let r=Fd(e.inputs,t);e.compute(Wd(e.inputs,r),{inputs:[0]})}}),gr,Mi,Ni,Pi,Ui,Zd,Kd,ji,qi,Qd,Xd,Li,Yd,Jd,Vi,ep,tp,rp,ap,ff=E(()=>{it(),ae(),ue(),le(),gr=e=>{if(be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Mi=(e,t,r)=>{let a=t.format==="NHWC",i=e.dims.slice();a&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=o?t.dilations.slice():[],p=t.pads.slice();Yr.adjustPoolAttributes(r,i,s,l,d,p);let h=Yr.computePoolOutputShape(r,i,l,d,s,p,t.autoPad),f=Object.assign({},t);o?Object.assign(f,{kernelShape:s,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:l,pads:p,cacheKey:t.cacheKey});let m=h.slice();return m.push(m.splice(1,1)[0]),[f,a?m:h]},Ni=(e,t)=>{let r=t.format==="NHWC",a=O.size(e),i=O.size(t.kernelShape),o=[{type:12,data:a},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],f=!!(p+h);o.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],v=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];m=!!(b+k),o.push({type:12,data:g},{type:12,data:v},{type:12,data:b},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,s,!0,f,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);o.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,h)=>p+h);return[o,s,!!d,!1,!1]}},Pi=(e,t,r,a,i,o,s,l,d,p,h,f)=>{let m=i.format==="NHWC",g=t.type.value,v=Z("output",t.type.tensor,a);if(i.kernelShape.length<=2){let b="",k="",x="",w=r-(m?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`,i.kernelShape.length===2){let S=r-(m?3:2);f?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var value = ${g}(${l});
              var pad = 0;
              ${k}
              ${b}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=i.kernelShape.length,k=i.pads.length,x="";return p?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${o}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${e.registerUniforms(d).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${g}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${Q("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${Q("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Q("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${Q("uniforms.pads","j - 2u",k)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ui=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Zd=e=>`${Ui(e)};${e.countIncludePad}`,Kd=e=>`${Ui(e)};${e.storageOrder};${e.dilations}`,ji=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),qi=(e,t,r,a)=>{let[i,o]=Mi(t,a,r),s=B("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",p="";i.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[h,f,m,g,v]=Ni(o,i);h.push(...Y(t.dims,o));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${m};${g};${v}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:h}),getShaderSource:k=>Pi(k,s,t.dims.length,o.length,i,d,p,0,f,m,g,v)}},Qd=e=>{let t=e.count_include_pad!==0,r=ji(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Zd(a)}},Xd=(e,t)=>{gr(e.inputs),e.compute(qi("AveragePool",e.inputs[0],!1,t))},Li={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Yd=e=>{let t=e.format;return{format:t,...Li,cacheKey:t}},Jd=(e,t)=>{gr(e.inputs),e.compute(qi("GlobalAveragePool",e.inputs[0],!0,t))},Vi=(e,t,r,a)=>{let[i,o]=Mi(t,a,r),s=`
      value = max(x_val, value);
    `,l="",d=B("x",t.dataType,t.dims.length),p=["rank"],[h,f,m,g,v]=Ni(o,i);return h.push(...Y(t.dims,o)),{name:e,shaderCache:{hint:`${a.cacheKey};${m};${g};${v}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:h}),getShaderSource:b=>Pi(b,d,t.dims.length,o.length,i,s,l,t.dataType===10?-65504:-1e5,f,m,g,v)}},ep=(e,t)=>{gr(e.inputs),e.compute(Vi("MaxPool",e.inputs[0],!1,t))},tp=e=>{let t=e.storage_order,r=e.dilations,a=ji(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...a,cacheKey:""};return{...i,cacheKey:Kd(i)}},rp=e=>{let t=e.format;return{format:t,...Li,cacheKey:t}},ap=(e,t)=>{gr(e.inputs),e.compute(Vi("GlobalMaxPool",e.inputs[0],!0,t))}}),ip,np,sp,op,mf=E(()=>{ae(),ue(),ze(),le(),ip=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,o)=>o===t.axis||i===e[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},np=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,i=a===3,o=e[0].dims,s=e[1].dataType,l=O.size(o),d=a===3||a===2,p=d?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,f=e.length>2?e[2]:void 0,m=f?d?[Math.ceil(O.size(f.dims)/4)]:f.dims:void 0,g=h.length===0||h.length===1&&h[0]===1,v=g===!1&&h.length===1,b=Ee(l),k=g&&(!d||b===4),x=k?b:1,w=k&&!d?b:1,S=B("input",d?12:a,p.length,w),T=B("scale",s,h.length),I=f?B("zero_point",d?12:a,m.length):void 0,A=Z("output",s,o.length,x),C=[S,T];I&&C.push(I);let M=[p,h];f&&M.push(m);let U=[{type:12,data:l/x},{type:12,data:r},{type:12,data:t.blockSize},...Y(...M,o)],H=ee=>{let se=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ee.registerUniforms(se).declareVariables(...C,A)}
      ${ee.mainStart()}
          ${ee.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${T.getByOffset("0")}`:v?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?g?d?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:v?d?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${d?i?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:H,getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:Math.ceil(l/x/64),y:1,z:1},programUniforms:U})}},sp=(e,t)=>{ip(e.inputs,t),e.compute(np(e.inputs,t))},op=e=>ke({axis:e.axis,blockSize:e.blockSize})}),up,lp,dp,gf=E(()=>{it(),ae(),le(),up=(e,t,r)=>{let a=e===t,i=e<t&&r<0,o=e>t&&r>0;if(a||i||o)throw new Error("Range these inputs' contents are invalid.")},lp=(e,t,r,a)=>{let i=Math.abs(Math.ceil((t-e)/r)),o=[i],s=i,l=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...Y(o)],d=p=>{let h=Z("output",a,o.length),f=h.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${p.registerUniforms(m).declareVariables(h)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},dp=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),be.webgpu.validateInputContent&&up(t,r,a),e.compute(lp(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),pp,cp,hp,fp,_f=E(()=>{ae(),ue(),ze(),le(),pp=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${i}bitcast<${a}>(oldValue) + (${r})${o}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${o}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${i}min(bitcast<${a}>(oldValue), (${r}))${o}`;case"mul":return`${i}(bitcast<${a}>(oldValue) * (${r}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},cp=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r,o=1,s=Math.ceil(O.size(a)/o),l=a[a.length-1],d=O.sizeFromDimension(r,l),p=[{type:12,data:s},{type:12,data:l},{type:12,data:d},...Y(e[1].dims,e[2].dims,i)],h=f=>{let m=B("indices",e[1].dataType,e[1].dims.length),g=B("updates",e[2].dataType,e[2].dims.length,o),v=t.reduction!=="none"&&t.reduction!==""?xs("output",e[0].dataType,i.length):Z("output",e[0].dataType,i.length,o);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,g,v)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${O.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${pp(t.reduction,"output[data_offset + i]","value",v.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:h}},hp=e=>ke({reduction:e.reduction}),fp=(e,t)=>{e.compute(cp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),mp,gp,_p,Gi,yp,vp,wp,bp,$p,xp,kp,Sp,Wi,Tp,Ip,Ep,zp,Cp,Op,Ap,yf=E(()=>{ae(),ue(),ze(),le(),mp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},gp=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((i,o)=>a[i]=e[o]),a},_p=(e,t,r,a,i,o)=>{let[s,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>o.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(h=>a.push(h)),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");mp(a,t),t.axes.length>0&&gp(a,t.axes,p).forEach((h,f)=>a[f]=h)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof i<"u"&&a.length>0&&i.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Gi=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,yp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Gi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Gi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",vp=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",wp=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?a:e.slice();return t.length>0?(t.forEach((o,s)=>{a[o]=i[s],a[s+r]=i[t.length+s]}),a):i},bp=(e,t,r,a)=>{let i=[];if(r.length>0)if(a.length>0){if(e.forEach(o=>i.push(o)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((o,s)=>i[o]=r[s])}else r.forEach(o=>i.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((o,s)=>Math.round(o*t[s]))}return i},$p=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(o=>t[o]=a),r.axes.forEach(o=>i[o]=Math.round(e[o]*t[o]))):(t.fill(a,0,t.length),i.forEach((o,s)=>i[s]=Math.round(o*t[s]))),i},xp=(e,t,r,a,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Q("uniforms.scales","i",a)};
        var roi_low = ${Q("uniforms.roi","i",i)};
        var roi_hi = ${Q("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Q("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,kp=(e,t,r,a,i,o,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Q("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Q("uniforms.roi","i",o)};
          var roi_hi = ${Q("uniforms.roi",`i + ${r.length}`,o)};
          var input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Sp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Q("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Wi=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Tp=(e,t,r,a,i)=>{let[o,s,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Wi(e,d,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${l}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${o}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ip=(e,t,r,a,i,o,s,l,d,p)=>{let h=r.length===2,[f,m]=h?[0,1]:[2,3],g=e.type.value,v=b=>{let k=b===f?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[b]},
        ${a[b]}, ${r[b]}, ${o[b]}, ${o[b]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${d};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${g} = originalIdx + ${g}(i);
          if (${k} < 0 || ${k} >= ${r[b]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${k} = max(0, min(${k}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${k})`)};
          data[i + 1] = ${b===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${v(f)};
    ${v(m)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Ep=(e,t,r,a,i)=>{let[o,s,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Wi(e,p,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${s}];
      var height:${h} = originalIndices[${l}];
      var width:${h} = originalIndices[${d}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},zp=(e,t,r,a,i,o)=>{let s=e.dims,l=wp(o,t.axes,s.length),d=bp(s,a,i,t.axes),p=a.slice();a.length===0&&(p=s.map((w,S)=>w===0?1:d[S]/w),t.keepAspectRatioPolicy!=="stretch"&&(d=$p(s,p,t)));let h=Z("output",e.dataType,d.length),f=B("input",e.dataType,s.length),m=O.size(d),g=s.length===d.length&&s.every((w,S)=>w===d[S]),v=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,k=f.type.value,x=w=>`
      ${g?"":`
      ${yp(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Sp(f,s)};
              ${vp(t.nearestMode,r,k)};
              ${kp(f,h,s,d,p.length,l.length,v)};
              `;case"linear":return`
              ${xp(h,s,d,p.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Tp(f,h,s,v,b)}`;if(s.length===3||s.length===5)return`${Ep(f,h,s,v,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Ip(f,h,s,d,p,l,t.cubicCoeffA,v,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(f,h)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${i.length>0?i:""}|${l.length>0?l:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:p},{type:1,data:l},...Y(s,d)]})}},Cp=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Op=(e,t)=>{let r=[],a=[],i=[],o=Cp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");_p(e.inputs,t,o,r,a,i),e.compute(zp(e.inputs[0],t,o,r,a,i),{inputs:[0]})},Ap=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,i=e.cubicCoeffA,o=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return ke({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:i,excludeOutside:o,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),Rp,Bp,Dp,vf=E(()=>{ae(),ue(),ze(),le(),Rp=(e,t)=>{let[r,a,i,o]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(a.dims,[])&&!O.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!O.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],h=i.dims[0],f=O.sizeFromDimension(r.dims,1)/p,m=l===0?i.dims[1]*2:f/s;if(l>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(d!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(p!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(m/2!==i.dims[1]&&l/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(p>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Bp=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:i,scale:o}=t,s=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,h=e[2].dims[1],f=i===0?h*2:p/a,m=new Array(s,d,p/f,f-h),g=O.computeStrides(m),v=[{type:1,data:o},{type:12,data:m},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[l,p,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,f,d*f,1]}):[],...Y(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=k=>{let x=B("input",e[0].dataType,e[0].dims.length),w=B("position_ids",e[1].dataType,e[1].dims.length),S=B("cos_cache",e[2].dataType,e[2].dims.length),T=B("sin_cache",e[3].dataType,e[3].dims.length),I=Z("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${k.declareVariables(x,w,S,T,I)}

        ${k.mainStart(Ft)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",Z("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ke({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(m)/Ft)},programUniforms:v})}},Dp=(e,t)=>{Rp(e.inputs,t),e.compute(Bp(e.inputs,t))}}),Mp,Np,Pp,wf=E(()=>{ae(),ue(),le(),Mp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Np=(e,t,r,a)=>{let i=t.simplified,o=e[0].dims,s=O.size(o),l=o,d=s,p=o.slice(-1)[0],h=a?o.slice(0,-1).concat(1):[],f=!i&&e.length>3,m=e.length>4,g=a&&r>1,v=a&&r>2,b=r>3,k=64,x=Ee(p),w=[{type:12,data:d},{type:12,data:x},{type:12,data:p},{type:1,data:t.epsilon}],S=I=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[B("x",e[0].dataType,e[0].dims,x),B("skip",e[1].dataType,e[1].dims,x),B("gamma",e[2].dataType,e[2].dims,x)];f&&C.push(B("beta",e[3].dataType,e[3].dims,x)),m&&C.push(B("bias",e[4].dataType,e[4].dims,x)),C.push(Z("output",e[0].dataType,l,x)),g&&C.push(Z("mean_output",1,h)),v&&C.push(Z("inv_std_output",1,h)),b&&C.push(Z("input_skip_bias_sum",e[0].dataType,l,x));let M=Be(e[0].dataType),U=Be(1,x);return`

      ${I.registerUniforms(A).declareVariables(...C)}
      var<workgroup> sum_shared : array<${U}, ${k}>;
      var<workgroup> sum_squared_shared : array<${U}, ${k}>;

      ${I.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":M+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ht(M,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${xt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${xt("square_sum",x)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${v?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${M}(mean)`}) *
            ${M}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return r>1&&T.push({dims:h,dataType:1}),r>2&&T.push({dims:h,dataType:1}),r>3&&T.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${g};${v};${b}`,inputDependencies:e.map((I,A)=>"type")},getShaderSource:S,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:w})}},Pp=(e,t)=>{Mp(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Np(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Up,_r,jp,Fi,qp,Lp,Vp,Gp,bf=E(()=>{ae(),ue(),ze(),le(),Up=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},_r=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},jp=(e,t)=>{if(e.length>1){let r=_r(e,1),a=_r(e,2),i=_r(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ke({starts:r,ends:a,axes:i})}else return t},Fi=(e,t,r,a,i)=>{let o=e;return e<0&&(o+=r[a[t]]),i[t]<0?Math.max(0,Math.min(o,r[a[t]]-1)):Math.max(0,Math.min(o,r[a[t]]))},qp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
            let steps_i = ${Q("uniforms.steps","i",r.length)};
            let signs_i = ${Q("uniforms.signs","i",r.length)};
            let starts_i = ${Q("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Lp=(e,t)=>{let r=e[0].dims,a=O.size(r),i=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],o=_r(e,4);o.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let s=t.starts.map((x,w)=>Fi(x,w,r,i,o)),l=t.ends.map((x,w)=>Fi(x,w,r,i,o));if(i.length!==s.length||i.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let x=0;x<r.length;++x)i.includes(x)||(s.splice(x,0,0),l.splice(x,0,r[x]),o.splice(x,0,1));let d=o.map(x=>Math.sign(x));o.forEach((x,w,S)=>{if(x<0){let T=(l[w]-s[w])/x,I=s[w],A=I+T*o[w];s[w]=A,l[w]=I,S[w]=-x}});let p=r.slice(0);i.forEach((x,w)=>{p[x]=Math.ceil((l[x]-s[x])/o[x])});let h={dims:p,dataType:e[0].dataType},f=Z("output",e[0].dataType,p.length),m=B("input",e[0].dataType,e[0].dims.length),g=O.size(p),v=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:o.length}],b=[{type:12,data:g},{type:12,data:s},{type:6,data:d},{type:12,data:o},...Y(e[0].dims,p)],k=x=>`
      ${x.registerUniforms(v).declareVariables(m,f)}
        ${qp(m,f,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},Vp=(e,t)=>{Up(e.inputs,t);let r=jp(e.inputs,t);e.compute(Lp(e.inputs,r),{inputs:[0]})},Gp=e=>{let t=e.starts,r=e.ends,a=e.axes;return ke({starts:t,ends:r,axes:a})}}),Wp,Fp,Hp,Zp,$f=E(()=>{ae(),ue(),ze(),kt(),le(),Wp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Fp=(e,t)=>{let r=e.inputs[0],a=r.dims,i=O.size(a),o=a.length,s=O.normalizeAxis(t.axis,o),l=s<a.length-1,d,p=[];l?(p=Array.from({length:o},(C,M)=>M),p[s]=o-1,p[o-1]=s,d=e.compute(Xe(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let h=d.dims,f=h[o-1],m=i/f,g=Ee(f),v=f/g,b=64;m===1&&(b=256);let k=(C,M)=>M===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:M===2?`max(${C}.x, ${C}.y)`:M===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=B("x",d.dataType,d.dims,g),w=Z("result",d.dataType,d.dims,g),S=x.type.value,T=Be(d.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,I=C=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(x,w)}
      ${C.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${k("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${xt("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${g};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:d.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:v}]}),getShaderSource:I},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(Xe(A,p),{inputs:[A]})},Hp=(e,t)=>{Wp(e.inputs),Fp(e,t)},Zp=e=>ke({axis:e.axis})}),Hi,Kp,Qp,Xp,Yp,xf=E(()=>{ae(),ue(),le(),Hi=e=>Array.from(e.getBigInt64Array(),Number),Kp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Hi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Qp=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Xp=(e,t)=>{let r=e[0].dims,a=t??Hi(e[1]),i=Qp(r,a),o=O.size(i),s=e[0].dataType,l=B("input",s,r.length),d=Z("output",s,i.length),p=h=>`
      const inputShape = ${l.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(l,d)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...Y(e[0].dims,i)]}),getShaderSource:p}},Yp=e=>{Kp(e.inputs),e.compute(Xp(e.inputs),{inputs:[0]})}}),Jp,ec,tc,kf=E(()=>{ae(),ue(),le(),Jp=(e,t,r,a,i)=>{let o=Z("output_data",i,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),l=B("b_data",t[2].dataType,t[2].dims.length,4),d=B("c_data",t[0].dataType,t[0].dims.length,4),p,h=(f,m,g)=>`select(${m}, ${f}, ${g})`;if(!a)p=o.setByOffset("global_idx",h(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let f=(m,g,v="")=>{let b=`a_data[index_a${g}][component_a${g}]`,k=`b_data[index_b${g}][component_b${g}]`,x=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${o.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,o)};
            let offset_b${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,o)};
            let offset_c${g} = ${d.broadcastedIndicesToOffset(`output_indices${g}`,o)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${m}[${g}] = ${v}(${h(b,k,x)});
          `};i===9?p=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},ec=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,i=e[1].dataType,o=!(O.areEqual(t,r)&&O.areEqual(r,a)),s=t,l=O.size(t);if(o){let p=Wt.calcShape(Wt.calcShape(t,r,!1),a,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,l=O.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Jp(p,e,s,o,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...Y(a,t,r,s)]})}},tc=e=>{e.compute(ec(e.inputs))}}),rc,Sf=E(()=>{Nh(),li(),Ph(),Uh(),jh(),qh(),Lh(),Hh(),Kh(),Qh(),Xh(),Yh(),Jh(),ef(),tf(),rf(),af(),nf(),sf(),of(),uf(),lf(),df(),pf(),cf(),md(),hf(),ff(),mf(),gf(),_f(),si(),yf(),vf(),wf(),bf(),$f(),$d(),xf(),kt(),hi(),kf(),rc=new Map([["Abs",[No]],["Acos",[Po]],["Acosh",[Uo]],["Add",[Tu]],["ArgMax",[$o,ui]],["ArgMin",[bo,ui]],["Asin",[jo]],["Asinh",[qo]],["Atan",[Lo]],["Atanh",[Vo]],["Attention",[Eo]],["AveragePool",[Xd,Qd]],["BatchNormalization",[Ao]],["BiasAdd",[Do]],["BiasSplitGelu",[xu]],["Cast",[Wo,Go]],["Ceil",[Zo]],["Clip",[Ho]],["Concat",[ju,qu]],["Conv",[Ti,ki]],["ConvTranspose",[fl,pl]],["Cos",[Ko]],["Cosh",[Qo]],["CumSum",[gl,_l]],["DepthToSpace",[bl,$l]],["DequantizeLinear",[sp,op]],["Div",[Iu]],["Einsum",[El,zl]],["Elu",[Xo,pr]],["Equal",[Eu]],["Erf",[Yo]],["Exp",[Jo]],["Expand",[Rl]],["FastGelu",[Dl]],["Floor",[eu]],["FusedConv",[Ti,ki]],["Gather",[Ul,Pl]],["GatherElements",[Ql,Kl]],["GatherBlockQuantized",[Wl,Fl]],["GatherND",[ql,Ll]],["Gelu",[tu]],["Gemm",[ed,Jl]],["GlobalAveragePool",[Jd,Yd]],["GlobalMaxPool",[ap,rp]],["Greater",[Au]],["GreaterOrEqual",[Bu]],["GridSample",[ld,dd]],["GroupQueryAttention",[Sd]],["HardSigmoid",[lu,uu]],["InstanceNormalization",[Ed]],["LayerNormalization",[Od]],["LeakyRelu",[ru,pr]],["Less",[Ru]],["LessOrEqual",[Du]],["Log",[_u]],["MatMul",[Rd]],["MatMulNBits",[Nd,Pd]],["MaxPool",[ep,tp]],["Mul",[zu]],["MultiHeadAttention",[fd,cd]],["Neg",[iu]],["Not",[au]],["Pad",[Hd]],["Pow",[Cu]],["QuickGelu",[wu,pr]],["Range",[dp]],["Reciprocal",[nu]],["ReduceMin",[go]],["ReduceMean",[po]],["ReduceMax",[mo]],["ReduceSum",[yo]],["ReduceProd",[_o]],["ReduceL1",[co]],["ReduceL2",[ho]],["ReduceLogSum",[wo]],["ReduceLogSumExp",[fo]],["ReduceSumSquare",[vo]],["Relu",[su]],["Resize",[Op,Ap]],["RotaryEmbedding",[Dp]],["ScatterND",[fp,hp]],["Sigmoid",[ou]],["Sin",[du]],["Sinh",[pu]],["Slice",[Vp,Gp]],["SkipLayerNormalization",[Pp]],["Split",[wd,bd]],["Sqrt",[cu]],["Softmax",[Hp,Zp]],["Sub",[Ou]],["Tan",[hu]],["Tanh",[fu]],["ThresholdedRelu",[gu,pr]],["Tile",[Yp]],["Transpose",[Os,As]],["Where",[tc]]])}),ac,Tf=E(()=>{it(),yt(),le(),ac=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,i){at(e.programInfo.name);let o=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});i&&l.push({binding:l.length,resource:i});let d=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Je(e.programInfo.name)}dispose(){}build(e,t){at(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&a.push(`enable ${p.extension};`)});let i=Ss(t,this.backend.device.limits),o=e.getShaderSource(i),s=`${a.join(`
`)}
${i.additionalImplementations}
${o}`,l=r.createShaderModule({code:s,label:e.name});_e("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Je(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&a<=i)return[t,r,a];let o=t*r*a,s=Math.ceil(Math.sqrt(o));if(s>i){if(s=Math.ceil(Math.cbrt(o)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),ic,nc,sc,oc,uc,If=E(()=>{it(),ae(),yt(),hs(),Dh(),Sf(),Tf(),ic=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let i=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let o=e[a].dims.length;r.push(`${i};${o}`);break}case"dims":{let o=e[a].dims.join(",");r.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},nc=(e,t,r)=>{let a=e.name;return e.shaderCache?.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${ic(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,a},sc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},oc=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},uc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups")&&i("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new oc(this.device),this.adapterInfo=new sc(t.info||await t.requestAdapterInfo()),this.gpuDataManager=_s(this),this.programManager=new ac(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qa(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;at(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],o=i.kernelId,s=this.kernels.get(o),l=s.kernelType,d=s.kernelName,p=i.programName,h=i.inputTensorViews,f=i.outputTensorViews,m=t[a*2],g=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let v=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(v)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(k=>({dims:k.dims,dataType:Ot(k.dataType)})),outputsMetadata:f.map(k=>({dims:k.dims,dataType:Ot(k.dataType)})),kernelId:o,kernelType:l,kernelName:d,programName:p,startTime:v,endTime:b});else{let k="";h.forEach((w,S)=>{k+=`input[${S}]: [${w.dims}] | ${Ot(w.dataType)}, `});let x="";f.forEach((w,S)=>{x+=`output[${S}]: [${w.dims}] | ${Ot(w.dataType)}, `}),console.log(`[profiling] kernel "${o}|${l}|${d}|${p}" ${k}${x}execution time: ${b-v} ns`)}or("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Je()}run(e,t,r,a,i,o){at(e.name);let s=[];for(let w=0;w<t.length;++w){let S=t[w].data;if(S===0)continue;let T=this.gpuDataManager.get(S);if(!T)throw new Error(`no GPU data for input: ${S}`);s.push(T)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),h=r.length===0?l.map((w,S)=>S):r;if(h.length!==l.length)throw new Error(`Output size ${h.length} must be equal to ${l.length}.`);let f=[],m=[];for(let w=0;w<l.length;++w){if(!Number.isInteger(h[w])||h[w]<-3||h[w]>=o)throw new Error(`Invalid output index: ${h[w]}`);if(h[w]===-3)continue;let S=h[w]===-1,T=h[w]===-2,I=S||T?i(l[w].dataType,l[w].dims):a(h[w],l[w].dataType,l[w].dims);if(f.push(I),I.data===0)continue;let A=this.gpuDataManager.get(I.data);if(!A)throw new Error(`no GPU data for output: ${I.data}`);if(S&&this.temporaryData.push(A),T){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(A)}m.push(A)}if(s.length!==t.length||m.length!==f.length){if(m.length===0)return Je(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(p){let w=0,S=[];p.forEach(C=>{let M=typeof C.data=="number"?[C.data]:C.data;if(M.length===0)return;let U=C.type===10?2:4,H,ee;C.type===10?(ee=M.length>4?16:M.length>2?8:M.length*U,H=M.length>4?16:U*M.length):(ee=M.length<=2?M.length*U:16,H=16),w=Math.ceil(w/ee)*ee,S.push(w);let se=C.type===10?8:4;w+=M.length>4?Math.ceil(M.length/se)*H:M.length*U});let T=16;w=Math.ceil(w/T)*T;let I=new ArrayBuffer(w);p.forEach((C,M)=>{let U=S[M],H=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(I,U,H.length).set(H);else if(C.type===12)new Uint32Array(I,U,H.length).set(H);else if(C.type===10)new Uint16Array(I,U,H.length).set(H);else if(C.type===1)new Float32Array(I,U,H.length).set(H);else throw new Error(`Unsupported uniform type: ${Ot(C.type)}`)});let A=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,I,0,w),this.gpuDataManager.release(A.id),g={offset:0,size:w,buffer:A.buffer}}let v=this.programManager.normalizeDispatchGroupSize(d),b=v[1]===1&&v[2]===1,k=nc(e,t,b),x=this.programManager.getArtifact(k);if(x||(x=this.programManager.build(e,v),this.programManager.setArtifact(k,x),_e("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),p&&x.uniformVariablesInfo){if(p.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${p.length} in program "${x.programInfo.name}".`);for(let w=0;w<p.length;w++){let S=p[w],T=S.type,I=typeof S.data=="number"?1:S.data.length,[A,C]=x.uniformVariablesInfo[w];if(T!==A||I!==C)throw new Error(`Uniform variable ${w} mismatch: expect type ${A} with size ${C}, got type ${T} with size ${I} in program "${x.programInfo.name}".`)}}if(_e("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${v[0]}x${v[1]}x${v[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(x,s,m,v,g),Je(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let i=rc.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:a,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let i=a.kernelType,o=a.kernelName,s=a.kernelEntry,l=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),_e("info",()=>`[WebGPU] Start to run kernel "[${i}] ${o}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${o}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${i}] ${o}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let o=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,o);return i.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await ti(this,e,t);return Xa(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){_e("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){_e("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){_e("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let i=this.getComputePassEncoder(),o=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(o.computePipeline),i.setBindGroup(0,o.bindGroup),i.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),lc,Zi,dc,Ki,Qi,Xi,pc,cc,Ef=E(()=>{yt(),lc=1,Zi=()=>lc++,dc=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ki=(e,t)=>{let r=dc.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,i)=>a*i)*r/8):0},Qi=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Ki(this.dataType,this.tensorShape)}destroy(){_e("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,i)=>a===r[i])}},Xi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==Ki(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else _e("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},pc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Zi();return this.tensorTrackersById.set(e,new Xi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,i){_e("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${i}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,r,a,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){_e("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let i=this.getMLContext(e),o=Zi(),s=new Qi({sessionId:e,context:i,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(o,new Xi(this,s)),this.externalTensors.add(s),o}async getCachedTensor(e,t,r,a,i,o){let s=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(s,t,r)){_e("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}_e("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await s.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:i,readable:o});return new Qi({sessionId:e,context:s,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},cc=(...e)=>new pc(...e)}),oa,hc,fc,zf=E(()=>{ae(),Ct(),hs(),Ef(),yt(),oa=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),hc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((i,o)=>i===a[o]&&e[i]===t[i])},fc=class{constructor(e){this.tensorManager=cc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Qa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){_e("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){_e("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)_e("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>hc(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(i=>i.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){_e("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,i){let o=oa.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,a,i)}async createTemporaryTensor(e,t,r){_e("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=oa.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,a,r,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Re().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");_e("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Xa(r,t)}}registerMLTensor(e,t,r,a){let i=oa.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.registerTensor(e,t,i,a);return _e("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${a}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,r,a,i,o){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let l=o.get(s);if(!l)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return _e("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),a.constant(i,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),mc={};D(mc,{init:()=>_c});var ua,gc,_c,Cf=E(()=>{ae(),If(),yt(),ue(),zf(),ua=class $h{constructor(t,r,a,i){this.module=t,this.dataType=r,this.data=a,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new $h(this.module,this.dataType,this.data,t)}},gc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,i=r/e.PTR_SIZE,o=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*i++,o));let s=Number(e.getValue(a*i++,o));this.outputCount=Number(e.getValue(a*i++,o)),this.customDataOffset=Number(e.getValue(a*i++,"*")),this.customDataSize=Number(e.getValue(a*i++,o));let l=[];for(let d=0;d<s;d++){let p=Number(e.getValue(a*i++,o)),h=Number(e.getValue(a*i++,"*")),f=Number(e.getValue(a*i++,o)),m=[];for(let g=0;g<f;g++)m.push(Number(e.getValue(a*i++,o)));l.push(new ua(e,p,h,m))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,a=t?.outputs??[],i=(s,l,d)=>new ua(this.module,l,this.output(s,d),d),o=(s,l)=>{let d=At(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new ua(this.module,s,p,l)};return this.backend.run(e,r,a,i,o,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,i=a===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*a);this.module.setValue(o,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(o+a*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},_c=async(e,t,r,a)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=new uc;await o.initialize(r,a),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,l,d,p=!1)=>{if(p)_e("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(l)}, size=${Number(d)}`),o.memcpy(Number(s),Number(l));else{_e("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(d));o.upload(Number(l),h)}},async(s,l,d)=>{_e("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(s,l,d)=>o.createKernel(s,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),s=>o.releaseKernel(s),(s,l,d,p)=>{_e("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let h=new gc(t,o,Number(l));return o.computeKernel(Number(s),h,p)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let o=new fc(r);i("webnn",[o,()=>o.reserveTensorId(),s=>o.releaseTensorId(s),async(s,l,d,p,h)=>o.ensureTensor(s,l,d,p,h),(s,l)=>{o.uploadTensor(s,l)},async(s,l)=>o.downloadTensor(s,l)])}}}),yc,Yi,Ji,St,vc,la,en,tn,rn,an,nn,sn,wc=E(()=>{Rh(),Bh(),ae(),Ct(),Ga(),os(),yc=(e,t)=>{Re()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},Yi=async e=>{yc(e.wasm.numThreads,Kr(e.logLevel))},Ji=async(e,t)=>{{let r=(Cf(),W(mc)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:o}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Re(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Re(),e)}}},St=new Map,vc=e=>{let t=Re(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,i,i+a)!==0&&$e("Can't get session input/output count.");let o=a===4?"i32":"i64";return[Number(t.getValue(i,o)),Number(t.getValue(i+a,o))]}finally{t.stackRestore(r)}},la=e=>{let t=Re(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},en=async(e,t)=>{let r,a,i=Re();Array.isArray(e)?[r,a]=e:e.buffer===i.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=la(e);let o=0,s=0,l=0,d=[],p=[],h=[];try{if([s,d]=ss(t),t?.externalData&&i.mountExternalData){let w=[];for(let S of t.externalData){let T=typeof S=="string"?S:S.path;w.push(Ka(typeof S=="string"?S:S.data).then(I=>{i.mountExternalData(T,I)}))}await Promise.all(w)}for(let w of t?.executionProviders??[])if((typeof w=="string"?w:w.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof w!="string"){let S=w,T=S?.context,I=S?.gpuDevice,A=S?.deviceType,C=S?.powerPreference;T?i.currentContext=T:I?i.currentContext=await i.jsepCreateMLContext(I):i.currentContext=await i.jsepCreateMLContext({deviceType:A,powerPreference:C})}else i.currentContext=await i.jsepCreateMLContext();break}o=await i._OrtCreateSession(r,a,s),o===0&&$e("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[f,m]=vc(o),g=!!t?.enableGraphCapture,v=[],b=[],k=[];for(let w=0;w<f;w++){let S=i._OrtGetInputName(o,w);S===0&&$e("Can't get an input name."),p.push(S),v.push(i.UTF8ToString(S))}for(let w=0;w<m;w++){let S=i._OrtGetOutputName(o,w);S===0&&$e("Can't get an output name."),h.push(S);let T=i.UTF8ToString(S);b.push(T);{if(g&&t?.preferredOutputLocation===void 0){k.push("gpu-buffer");continue}let I=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[T]??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer"&&I!=="ml-tensor")throw new Error(`Not supported preferred output location: ${I}.`);if(g&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(I)}}let x=null;return k.some(w=>w==="gpu-buffer"||w==="ml-tensor")&&(l=i._OrtCreateBinding(o),l===0&&$e("Can't create IO binding."),x={handle:l,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(w=>Za(w))}),St.set(o,[o,p,h,x,g,!1]),[o,v,b]}catch(f){throw p.forEach(m=>i._OrtFree(m)),h.forEach(m=>i._OrtFree(m)),l!==0&&i._OrtReleaseBinding(l)!==0&&$e("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&$e("Can't release session."),f}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&$e("Can't release session options."),d.forEach(f=>i._free(f)),i.unmountExternalData?.()}},tn=e=>{let t=Re(),r=St.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,i,o,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&$e("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&$e("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),i.forEach(d=>t._OrtFree(d)),o.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&$e("Can't release session."),St.delete(e)},rn=async(e,t,r,a,i,o=!1)=>{if(!e){t.push(0);return}let s=Re(),l=s.PTR_SIZE,d=e[0],p=e[1],h=e[3],f=h,m,g;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let k=e[2].gpuBuffer;g=At(Gt(d),p);let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(a,i,k,g)}else if(h==="ml-tensor"){let k=e[2].mlTensor;g=At(Gt(d),p);let x=s.jsepRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(a,k,Gt(d),p)}else{let k=e[2];if(Array.isArray(k)){g=l*k.length,m=s._malloc(g),r.push(m);for(let x=0;x<k.length;x++){if(typeof k[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(m+x*l,qe(k[x],r),"*")}}else{let x=s.jsepIsGraphInput;if(d!=="string"&&x){let w=s._OrtGetInputName(a,i),S=s.UTF8ToString(w);if(x(a,S)){let T=Gt(d);g=At(T,p),f="ml-tensor";let I=s.jsepCreateTemporaryTensor,A=s.jsepUploadTensor;if(!I||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let C=await I(a,T,p);A(C,new Uint8Array(k.buffer,k.byteOffset,k.byteLength)),m=C}else g=k.byteLength,m=s._malloc(g),r.push(m),s.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,g),m)}else g=k.byteLength,m=s._malloc(g),r.push(m),s.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,g),m)}}let v=s.stackSave(),b=s.stackAlloc(4*p.length);try{p.forEach((x,w)=>s.setValue(b+w*l,x,l===4?"i32":"i64"));let k=s._OrtCreateTensor(Gt(d),m,g,b,p.length,Za(f));k===0&&$e(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push(k)}finally{s.stackRestore(v)}},an=async(e,t,r,a,i,o)=>{let s=Re(),l=s.PTR_SIZE,d=St.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],h=d[1],f=d[2],m=d[3],g=d[4],v=d[5],b=t.length,k=a.length,x=0,w=[],S=[],T=[],I=[],A=s.stackSave(),C=s.stackAlloc(b*l),M=s.stackAlloc(b*l),U=s.stackAlloc(k*l),H=s.stackAlloc(k*l);try{[x,w]=ts(o);for(let j=0;j<b;j++)await rn(r[j],S,I,e,t[j],g);for(let j=0;j<k;j++)await rn(i[j],T,I,e,b+a[j],g);for(let j=0;j<b;j++)s.setValue(C+j*l,S[j],"*"),s.setValue(M+j*l,h[t[j]],"*");for(let j=0;j<k;j++)s.setValue(U+j*l,T[j],"*"),s.setValue(H+j*l,f[a[j]],"*");if(m&&!v){let{handle:j,outputPreferredLocations:pe,outputPreferredLocationsEncoded:me}=m;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);for(let K=0;K<b;K++){let ye=t[K];await s._OrtBindInput(j,h[ye],S[K])!==0&&$e(`Can't bind input[${K}] for session=${e}.`)}for(let K=0;K<k;K++){let ye=a[K];i[K]?.[3]?s._OrtBindOutput(j,f[ye],T[K],0)!==0&&$e(`Can't bind pre-allocated output[${K}] for session=${e}.`):s._OrtBindOutput(j,f[ye],0,me[ye])!==0&&$e(`Can't bind output[${K}] to ${pe[K]} for session=${e}.`)}St.set(e,[p,h,f,m,g,!0])}s.jsepOnRunStart?.(p);let ee;m?ee=await s._OrtRunWithBinding(p,m.handle,k,U,x):ee=await s._OrtRun(p,M,C,b,H,k,U,x),ee!==0&&$e("failed to call OrtRun().");let se=[];for(let j=0;j<k;j++){let pe=Number(s.getValue(U+j*l,"*"));if(pe===T[j]){se.push(i[j]);continue}let me=s.stackSave(),K=s.stackAlloc(4*l),ye=!1,ge,ie=0;try{s._OrtGetTensorData(pe,K,K+l,K+2*l,K+3*l)!==0&&$e(`Can't access output tensor data on index ${j}.`);let Ce=l===4?"i32":"i64",N=Number(s.getValue(K,Ce));ie=s.getValue(K+l,"*");let V=s.getValue(K+l*2,"*"),Se=Number(s.getValue(K+l*3,Ce)),Ie=[];for(let We=0;We<Se;We++)Ie.push(Number(s.getValue(V+We*l,Ce)));s._OrtFree(V)!==0&&$e("Can't free memory for tensor dims.");let Le=Ie.reduce((We,Ue)=>We*Ue,1);ge=Ot(N);let Kt=m?.outputPreferredLocations[a[j]];if(ge==="string"){if(Kt==="gpu-buffer"||Kt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let We=[];for(let Ue=0;Ue<Le;Ue++){let wr=s.getValue(ie+Ue*l,"*"),Df=s.getValue(ie+(Ue+1)*l,"*"),Mf=Ue===Le-1?void 0:Df-wr;We.push(s.UTF8ToString(wr,Mf))}se.push([ge,Ie,We,"cpu"])}else if(Kt==="gpu-buffer"&&Le>0){let We=s.jsepGetBuffer;if(!We)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ue=We(ie),wr=At(N,Le);if(wr===void 0||!Fa(ge))throw new Error(`Unsupported data type: ${ge}`);ye=!0,se.push([ge,Ie,{gpuBuffer:Ue,download:s.jsepCreateDownloader(Ue,wr,ge),dispose:()=>{s._OrtReleaseTensor(pe)!==0&&$e("Can't release tensor.")}},"gpu-buffer"])}else if(Kt==="ml-tensor"&&Le>0){let We=s.jsepEnsureTensor;if(!We)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(At(N,Le)===void 0||!Ha(ge))throw new Error(`Unsupported data type: ${ge}`);let Ue=await We(e,ie,N,Ie,!1);ye=!0,se.push([ge,Ie,{mlTensor:Ue,download:s.jsepCreateMLTensorDownloader(ie,ge),dispose:()=>{s.jsepReleaseTensorId(ie),s._OrtReleaseTensor(pe)}},"ml-tensor"])}else{let We=Wa(ge),Ue=new We(Le);new Uint8Array(Ue.buffer,Ue.byteOffset,Ue.byteLength).set(s.HEAPU8.subarray(ie,ie+Ue.byteLength)),se.push([ge,Ie,Ue,"cpu"])}}finally{s.stackRestore(me),ge==="string"&&ie&&s._free(ie),ye||s._OrtReleaseTensor(pe),s.jsepOnRunEnd?.(p)}}return m&&!g&&(s._OrtClearBoundOutputs(m.handle)!==0&&$e("Can't clear bound outputs."),St.set(e,[p,h,f,m,g,!1])),se}finally{s.stackRestore(A),S.forEach(ee=>s._OrtReleaseTensor(ee)),T.forEach(ee=>s._OrtReleaseTensor(ee)),I.forEach(ee=>s._free(ee)),x!==0&&s._OrtReleaseRunOptions(x),w.forEach(ee=>s._free(ee))}},nn=e=>{let t=Re(),r=St.get(e);if(!r)throw new Error("invalid session id");let a=r[0],i=t._OrtEndProfiling(a);i===0&&$e("Can't get an profile file name."),t._OrtFree(i)},sn=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),Tt,et,Zt,yr,vr,da,on,pa,Ut,jt,bc,$c,xc,kc,Sc,Tc,Ic,Ec,zc=E(()=>{it(),wc(),Ct(),ja(),Tt=()=>!!be.wasm.proxy&&typeof document<"u",Zt=!1,yr=!1,vr=!1,pa=new Map,Ut=(e,t)=>{let r=pa.get(e);r?r.push(t):pa.set(e,[t])},jt=()=>{if(Zt||!yr||vr||!et)throw new Error("worker not ready")},bc=e=>{switch(e.data.type){case"init-wasm":Zt=!1,e.data.err?(vr=!0,on[1](e.data.err)):(yr=!0,on[0]()),da&&(URL.revokeObjectURL(da),da=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=pa.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},$c=async()=>{if(!yr){if(Zt)throw new Error("multiple calls to 'initWasm()' detected.");if(vr)throw new Error("previous call to 'initWasm()' failed.");if(Zt=!0,Tt())return new Promise((e,t)=>{et?.terminate(),Xn().then(([r,a])=>{try{et=a,et.onerror=o=>t(o),et.onmessage=bc,on=[e,t];let i={type:"init-wasm",in:be};if(!i.in.wasm.wasmPaths&&r){let o=Ma();o&&(i.in.wasm.wasmPaths=o)}et.postMessage(i),da=r}catch(i){t(i)}},t)});try{await Va(be.wasm),await Yi(be),yr=!0}catch(e){throw vr=!0,e}finally{Zt=!1}}},xc=async e=>{if(Tt())return jt(),new Promise((t,r)=>{Ut("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:be}};et.postMessage(a)});await Ji(be,e)},kc=async e=>Tt()?(jt(),new Promise((t,r)=>{Ut("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};et.postMessage(a,[e.buffer])})):la(e),Sc=async(e,t)=>{if(Tt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return jt(),new Promise((r,a)=>{Ut("create",[r,a]);let i={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),et.postMessage(i,o)})}else return en(e,t)},Tc=async e=>{if(Tt())return jt(),new Promise((t,r)=>{Ut("release",[t,r]);let a={type:"release",in:e};et.postMessage(a)});tn(e)},Ic=async(e,t,r,a,i,o)=>{if(Tt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return jt(),new Promise((s,l)=>{Ut("run",[s,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:a,options:o}};et.postMessage(p,sn(d))})}else return an(e,t,r,a,i,o)},Ec=async e=>{if(Tt())return jt(),new Promise((t,r)=>{Ut("end-profiling",[t,r]);let a={type:"end-profiling",in:e};et.postMessage(a)});nn(e)}}),un,Cc,Oc,Of=E(()=>{it(),zc(),ae(),Ra(),os(),un=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Cc=e=>{switch(e[3]){case"cpu":return new rt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:i}=e[2];return rt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:i})}case"ml-tensor":{let t=e[0];if(!Ha(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:i}=e[2];return rt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Oc=class{async fetchModelAndCopyToWasmMemory(e){return kc(await Ka(e))}async loadModel(e,t){at();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Sc(r,t),Je()}async dispose(){return Tc(this.sessionId)}async run(e,t,r){at();let a=[],i=[];Object.entries(e).forEach(f=>{let m=f[0],g=f[1],v=this.inputNames.indexOf(m);if(v===-1)throw new Error(`invalid input '${m}'`);a.push(g),i.push(v)});let o=[],s=[];Object.entries(t).forEach(f=>{let m=f[0],g=f[1],v=this.outputNames.indexOf(m);if(v===-1)throw new Error(`invalid output '${m}'`);o.push(g),s.push(v)});let l=a.map((f,m)=>un(f,()=>`input "${this.inputNames[i[m]]}"`)),d=o.map((f,m)=>f?un(f,()=>`output "${this.outputNames[s[m]]}"`):null),p=await Ic(this.sessionId,i,l,s,d,r),h={};for(let f=0;f<p.length;f++)h[this.outputNames[s[f]]]=o[f]??Cc(p[f]);return Je(),h}startProfiling(){}endProfiling(){Ec(this.sessionId)}}}),Ac={};D(Ac,{OnnxruntimeWebAssemblyBackend:()=>dn,initializeFlags:()=>ln,wasmBackend:()=>Rc});var ln,dn,Rc,Af=E(()=>{it(),zc(),Of(),ln=()=>{if((typeof be.wasm.initTimeout!="number"||be.wasm.initTimeout<0)&&(be.wasm.initTimeout=0),be.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof be.wasm.proxy!="boolean"&&(be.wasm.proxy=!1),typeof be.wasm.trace!="boolean"&&(be.wasm.trace=!1),typeof be.wasm.numThreads!="number"||!Number.isInteger(be.wasm.numThreads)||be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)be.wasm.numThreads=1;else{let e=typeof navigator>"u"?R("node:os").cpus().length:navigator.hardwareConcurrency;be.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},dn=class{async init(e){ln(),await $c(),await xc(e)}async createInferenceSessionHandler(e,t){let r=new Oc;return await r.loadModel(e,t),Promise.resolve(r)}},Rc=new dn}),Bc={};D(Bc,{InferenceSession:()=>Aa,TRACE:()=>or,TRACE_FUNC_BEGIN:()=>at,TRACE_FUNC_END:()=>Je,Tensor:()=>rt,default:()=>Bf,env:()=>be,registerBackend:()=>Te}),it(),it(),it();var Rf="1.21.0",Bf=Vn;{let e=(Af(),W(Ac)).wasmBackend;Te("webgpu",e,5),Te("webnn",e,5),Te("cpu",e,10),Te("wasm",e,10)}return Object.defineProperty(be.versions,"web",{value:Rf,enumerable:!0}),W(Bc)})();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */u.exports=c})(wh);var On=wh.exports;const uy=Uf(On),ly=jf({__proto__:null,default:uy},[On]),xr=["Aguarde um momento, a mágica está acontecendo...","Estamos removendo o fundo, pixel por pixel!","Quase lá! Tomando um café enquanto processamos...","Não se preocupe, não vamos remover seu bom humor!","Contando os pixels... são muitos!","Processando sua imagem mais rápido que um raio (quase)!","Preparando a imagem para o seu próximo grande projeto.","Aguarde, estamos dando um trato na sua foto.","Seu fundo está prestes a desaparecer!","Estamos trabalhando duro para deixar sua imagem perfeita."],gy=({lang:u})=>{const n=Pf(u),[c,_]=ft.useState(null),[y,$]=ft.useState(null),[z,R]=ft.useState(null),[E,D]=ft.useState(!1),[G,W]=ft.useState(null),[X,q]=ft.useState(!1),[Te,re]=ft.useState(xr[0]),fe=ft.useRef(null);ft.useEffect(()=>{let xe;return E?xe=setInterval(()=>{re(xr[Math.floor(Math.random()*xr.length)])},3e3):re(xr[0]),()=>clearInterval(xe)},[E]);const Oe=ft.useCallback(async xe=>{if(!xe)return;D(!0),R(null),W(null),re(xr[0]);const Ye=new FileReader;Ye.onloadend=async()=>{$(Ye.result),On.env.wasm.wasmPath="/models/";try{const te=await oy(xe);te?R(URL.createObjectURL(te)):W(n("components.backgroundRemover.errorProcessing"))}catch(te){W(`Ocorreu um erro ao processar a imagem: ${te.message}`)}finally{D(!1)}},Ye.readAsDataURL(xe)},[n]),De=xe=>{xe&&xe.type.startsWith("image/")?(_(xe),Oe(xe)):(W(n("components.backgroundRemover.errorInvalidFile")),_(null),$(null),R(null))},je=xe=>{De(xe.target.files?.[0]||null)},Me=xe=>{xe.preventDefault(),xe.stopPropagation(),q(!1),De(xe.dataTransfer.files?.[0]||null)},_t=xe=>{xe.preventDefault(),xe.stopPropagation(),q(!0)},Ne=xe=>{xe.preventDefault(),xe.stopPropagation(),q(!1)},de=()=>c?`${c.name.substring(0,c.name.lastIndexOf("."))}-sem-fundo.png`:"imagem-sem-fundo.png",be=()=>{_(null),$(null),R(null),W(null)};return Ae.jsxs("div",{className:"relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800",children:[E&&Ae.jsx(Nf,{text:Te}),Ae.jsx("input",{type:"file",accept:"image/*",onChange:je,className:"hidden",ref:fe,disabled:E}),!c&&Ae.jsxs("div",{onDrop:Me,onDragOver:_t,onDragLeave:Ne,className:`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${X?"border-purple-600 bg-purple-50 dark:bg-gray-700":"border-gray-300 dark:border-gray-600"}`,children:[Ae.jsx("p",{className:"text-gray-500 dark:text-gray-400 mb-4",children:n("components.backgroundRemover.dragAndDrop")}),Ae.jsx("button",{onClick:()=>fe.current?.click(),disabled:E,className:"w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800",children:n("components.backgroundRemover.selectImage")})]}),G&&Ae.jsx("p",{className:"mt-4 text-center text-red-500",children:G}),c&&Ae.jsxs("div",{className:`mt-6 text-center ${E?"opacity-20":""}`,children:[Ae.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[Ae.jsxs("div",{children:[Ae.jsx("h3",{className:"text-lg font-semibold dark:text-gray-200",children:n("components.backgroundRemover.original")}),Ae.jsx("div",{className:"mt-2 flex items-center justify-center h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden",children:y&&Ae.jsx("img",{src:y,alt:"Original",className:"max-h-full max-w-full"})})]}),Ae.jsxs("div",{children:[Ae.jsx("h3",{className:"text-lg font-semibold dark:text-gray-200",children:n("components.backgroundRemover.result")}),Ae.jsx("div",{className:"mt-2 flex items-center justify-center h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Crect width='10' height='10' fill='%23eee'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23eee'/%3E%3C/svg%3E")`},children:z?Ae.jsx("img",{src:z,alt:"Fundo removido",className:"max-h-full max-w-full"}):Ae.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:n("components.backgroundRemover.resultHere")})}),z&&Ae.jsx("a",{href:z,download:de(),className:"mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors",children:n("components.backgroundRemover.download")})]})]}),Ae.jsx("button",{onClick:be,className:"w-full mt-4 text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400",children:n("components.backgroundRemover.selectAnother")})]})]})};export{gy as default};
