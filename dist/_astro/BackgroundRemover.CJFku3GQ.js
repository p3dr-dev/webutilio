import{j as Ne}from"./jsx-runtime.D3GSbgeI.js";import{r as yt}from"./index.yGrMsBkE.js";import{_ as Fu}from"./ToolLoader.BbEpct9d.js";import{L as o0}from"./LoadingSpinner.Dvz2bPl4.js";import{u as u0}from"./utils.BtV3MdL8.js";import"./index.yBjzXJbu.js";var l0=Object.create,Rp=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,Np=Object.getOwnPropertyNames,c0=Object.getPrototypeOf,p0=Object.prototype.hasOwnProperty,rs=(e,t)=>function(){return t||(0,e[Np(e)[0]])((t={exports:{}}).exports,t),t.exports},h0=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Np(t))!p0.call(e,i)&&i!==r&&Rp(e,i,{get:()=>t[i],enumerable:!(a=d0(t,i))||a.enumerable});return e},si=(e,t,r)=>(r=e!=null?l0(c0(e)):{},h0(!e||!e.__esModule?Rp(r,"default",{value:e,enumerable:!0}):r,e)),f0=rs({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(e,t){function r(a){for(var i=new Array(a),n=0;n<a;++n)i[n]=n;return i}t.exports=r}}),m0=rs({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(e,t){t.exports=function(i){return i!=null&&(r(i)||a(i)||!!i._isBuffer)};function r(i){return!!i.constructor&&typeof i.constructor.isBuffer=="function"&&i.constructor.isBuffer(i)}function a(i){return typeof i.readFloatLE=="function"&&typeof i.slice=="function"&&r(i.slice(0,0))}}}),oi=rs({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(e,t){var r=f0(),a=m0(),i=typeof Float64Array<"u";function n(m,g){return m[0]-g[0]}function s(){var m=this.stride,g=new Array(m.length),_;for(_=0;_<g.length;++_)g[_]=[Math.abs(m[_]),_];g.sort(n);var v=new Array(g.length);for(_=0;_<v.length;++_)v[_]=g[_][1];return v}function u(m,g){var _=["View",g,"d",m].join("");g<0&&(_="View_Nil"+m);var v=m==="generic";if(g===-1){var w="function "+_+"(a){this.data=a;};var proto="+_+".prototype;proto.dtype='"+m+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+_+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+_+"(a){return new "+_+"(a);}",F=new Function(w);return F()}else if(g===0){var w="function "+_+"(a,d) {this.data = a;this.offset = d};var proto="+_+".prototype;proto.dtype='"+m+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+_+"_copy() {return new "+_+"(this.data,this.offset)};proto.pick=function "+_+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+_+"_get(){return "+(v?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+_+"_set(v){return "+(v?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+_+"(a,b,c,d){return new "+_+"(a,d)}",F=new Function("TrivialArray",w);return F(c[m][0])}var w=["'use strict'"],x=r(g),$=x.map(function(P){return"i"+P}),b="this.offset+"+x.map(function(P){return"this.stride["+P+"]*i"+P}).join("+"),S=x.map(function(P){return"b"+P}).join(","),T=x.map(function(P){return"c"+P}).join(",");w.push("function "+_+"(a,"+S+","+T+",d){this.data=a","this.shape=["+S+"]","this.stride=["+T+"]","this.offset=d|0}","var proto="+_+".prototype","proto.dtype='"+m+"'","proto.dimension="+g),w.push("Object.defineProperty(proto,'size',{get:function "+_+"_size(){return "+x.map(function(P){return"this.shape["+P+"]"}).join("*"),"}})"),g===1?w.push("proto.order=[0]"):(w.push("Object.defineProperty(proto,'order',{get:"),g<4?(w.push("function "+_+"_order(){"),g===2?w.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):g===3&&w.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):w.push("ORDER})")),w.push("proto.set=function "+_+"_set("+$.join(",")+",v){"),v?w.push("return this.data.set("+b+",v)}"):w.push("return this.data["+b+"]=v}"),w.push("proto.get=function "+_+"_get("+$.join(",")+"){"),v?w.push("return this.data.get("+b+")}"):w.push("return this.data["+b+"]}"),w.push("proto.index=function "+_+"_index(",$.join(),"){return "+b+"}"),w.push("proto.hi=function "+_+"_hi("+$.join(",")+"){return new "+_+"(this.data,"+x.map(function(P){return["(typeof i",P,"!=='number'||i",P,"<0)?this.shape[",P,"]:i",P,"|0"].join("")}).join(",")+","+x.map(function(P){return"this.stride["+P+"]"}).join(",")+",this.offset)}");var I=x.map(function(P){return"a"+P+"=this.shape["+P+"]"}),A=x.map(function(P){return"c"+P+"=this.stride["+P+"]"});w.push("proto.lo=function "+_+"_lo("+$.join(",")+"){var b=this.offset,d=0,"+I.join(",")+","+A.join(","));for(var E=0;E<g;++E)w.push("if(typeof i"+E+"==='number'&&i"+E+">=0){d=i"+E+"|0;b+=c"+E+"*d;a"+E+"-=d}");w.push("return new "+_+"(this.data,"+x.map(function(P){return"a"+P}).join(",")+","+x.map(function(P){return"c"+P}).join(",")+",b)}"),w.push("proto.step=function "+_+"_step("+$.join(",")+"){var "+x.map(function(P){return"a"+P+"=this.shape["+P+"]"}).join(",")+","+x.map(function(P){return"b"+P+"=this.stride["+P+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var E=0;E<g;++E)w.push("if(typeof i"+E+"==='number'){d=i"+E+"|0;if(d<0){c+=b"+E+"*(a"+E+"-1);a"+E+"=ceil(-a"+E+"/d)}else{a"+E+"=ceil(a"+E+"/d)}b"+E+"*=d}");w.push("return new "+_+"(this.data,"+x.map(function(P){return"a"+P}).join(",")+","+x.map(function(P){return"b"+P}).join(",")+",c)}");for(var D=new Array(g),M=new Array(g),E=0;E<g;++E)D[E]="a[i"+E+"]",M[E]="b[i"+E+"]";w.push("proto.transpose=function "+_+"_transpose("+$+"){"+$.map(function(P,ie){return P+"=("+P+"===undefined?"+ie+":"+P+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+_+"(this.data,"+D.join(",")+","+M.join(",")+",this.offset)}"),w.push("proto.pick=function "+_+"_pick("+$+"){var a=[],b=[],c=this.offset");for(var E=0;E<g;++E)w.push("if(typeof i"+E+"==='number'&&i"+E+">=0){c=(c+this.stride["+E+"]*i"+E+")|0}else{a.push(this.shape["+E+"]);b.push(this.stride["+E+"])}");w.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),w.push("return function construct_"+_+"(data,shape,stride,offset){return new "+_+"(data,"+x.map(function(P){return"shape["+P+"]"}).join(",")+","+x.map(function(P){return"stride["+P+"]"}).join(",")+",offset)}");var F=new Function("CTOR_LIST","ORDER",w.join(`
`));return F(c[m],s)}function d(m){if(a(m))return"buffer";if(i)switch(Object.prototype.toString.call(m)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(m)?"array":"generic"}var c={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function f(m,g,_,v){if(m===void 0){var T=c.array[0];return T([])}else typeof m=="number"&&(m=[m]);g===void 0&&(g=[m.length]);var w=g.length;if(_===void 0){_=new Array(w);for(var x=w-1,$=1;x>=0;--x)_[x]=$,$*=g[x]}if(v===void 0){v=0;for(var x=0;x<w;++x)_[x]<0&&(v-=(g[x]-1)*_[x])}for(var b=d(m),S=c[b];S.length<=w+1;)S.push(u(b,S.length-1));var T=S[w+1];return T(m,g,_,v)}t.exports=f}}),g0=typeof global=="object"&&global&&global.Object===Object&&global,y0=g0,_0=typeof self=="object"&&self&&self.Object===Object&&self,v0=y0||_0||Function("return this")(),as=v0,w0=as.Symbol,qa=w0,Bp=Object.prototype,b0=Bp.hasOwnProperty,$0=Bp.toString,Ir=qa?qa.toStringTag:void 0;function x0(e){var t=b0.call(e,Ir),r=e[Ir];try{e[Ir]=void 0;var a=!0}catch{}var i=$0.call(e);return a&&(t?e[Ir]=r:delete e[Ir]),i}var k0=x0,S0=Object.prototype,T0=S0.toString;function C0(e){return T0.call(e)}var I0=C0,E0="[object Null]",z0="[object Undefined]",Gu=qa?qa.toStringTag:void 0;function A0(e){return e==null?e===void 0?z0:E0:Gu&&Gu in Object(e)?k0(e):I0(e)}var O0=A0;function R0(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Mp=R0,N0="[object AsyncFunction]",B0="[object Function]",M0="[object GeneratorFunction]",D0="[object Proxy]";function P0(e){if(!Mp(e))return!1;var t=O0(e);return t==B0||t==M0||t==N0||t==D0}var U0=P0,j0=as["__core-js_shared__"],Ri=j0,Hu=(function(){var e=/[^.]+$/.exec(Ri&&Ri.keys&&Ri.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function W0(e){return!!Hu&&Hu in e}var V0=W0,L0=Function.prototype,q0=L0.toString;function F0(e){if(e!=null){try{return q0.call(e)}catch{}try{return e+""}catch{}}return""}var G0=F0,H0=/[\\^$.*+?()[\]{}|]/g,Z0=/^\[object .+?Constructor\]$/,K0=Function.prototype,Q0=Object.prototype,J0=K0.toString,X0=Q0.hasOwnProperty,Y0=RegExp("^"+J0.call(X0).replace(H0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ev(e){if(!Mp(e)||V0(e))return!1;var t=U0(e)?Y0:Z0;return t.test(G0(e))}var tv=ev;function rv(e,t){return e?.[t]}var av=rv;function iv(e,t){var r=av(e,t);return tv(r)?r:void 0}var Dp=iv,nv=Dp(Object,"create"),Zr=nv;function sv(){this.__data__=Zr?Zr(null):{},this.size=0}var ov=sv;function uv(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var lv=uv,dv="__lodash_hash_undefined__",cv=Object.prototype,pv=cv.hasOwnProperty;function hv(e){var t=this.__data__;if(Zr){var r=t[e];return r===dv?void 0:r}return pv.call(t,e)?t[e]:void 0}var fv=hv,mv=Object.prototype,gv=mv.hasOwnProperty;function yv(e){var t=this.__data__;return Zr?t[e]!==void 0:gv.call(t,e)}var _v=yv,vv="__lodash_hash_undefined__";function wv(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Zr&&t===void 0?vv:t,this}var bv=wv;function yr(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}yr.prototype.clear=ov;yr.prototype.delete=lv;yr.prototype.get=fv;yr.prototype.has=_v;yr.prototype.set=bv;var Zu=yr;function $v(){this.__data__=[],this.size=0}var xv=$v;function kv(e,t){return e===t||e!==e&&t!==t}var Sv=kv;function Tv(e,t){for(var r=e.length;r--;)if(Sv(e[r][0],t))return r;return-1}var ui=Tv,Cv=Array.prototype,Iv=Cv.splice;function Ev(e){var t=this.__data__,r=ui(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():Iv.call(t,r,1),--this.size,!0}var zv=Ev;function Av(e){var t=this.__data__,r=ui(t,e);return r<0?void 0:t[r][1]}var Ov=Av;function Rv(e){return ui(this.__data__,e)>-1}var Nv=Rv;function Bv(e,t){var r=this.__data__,a=ui(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var Mv=Bv;function _r(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}_r.prototype.clear=xv;_r.prototype.delete=zv;_r.prototype.get=Ov;_r.prototype.has=Nv;_r.prototype.set=Mv;var Dv=_r,Pv=Dp(as,"Map"),Uv=Pv;function jv(){this.size=0,this.__data__={hash:new Zu,map:new(Uv||Dv),string:new Zu}}var Wv=jv;function Vv(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Lv=Vv;function qv(e,t){var r=e.__data__;return Lv(t)?r[typeof t=="string"?"string":"hash"]:r.map}var li=qv;function Fv(e){var t=li(this,e).delete(e);return this.size-=t?1:0,t}var Gv=Fv;function Hv(e){return li(this,e).get(e)}var Zv=Hv;function Kv(e){return li(this,e).has(e)}var Qv=Kv;function Jv(e,t){var r=li(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var Xv=Jv;function vr(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}vr.prototype.clear=Wv;vr.prototype.delete=Gv;vr.prototype.get=Zv;vr.prototype.has=Qv;vr.prototype.set=Xv;var Pp=vr,Yv="Expected a function";function is(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Yv);var r=function(){var a=arguments,i=t?t.apply(this,a):a[0],n=r.cache;if(n.has(i))return n.get(i);var s=e.apply(this,a);return r.cache=n.set(i,s)||n,s};return r.cache=new(is.Cache||Pp),r}is.Cache=Pp;var ew=is,ns=si(oi()),Up=class On{constructor(t,r){this.type="application/octet-stream",this.params={},this.type=t,this.params=r}toString(){const t=[];for(const r in this.params){const a=this.params[r];t.push(`${r}=${a}`)}return[this.type,...t].join(";")}static create(t,r){return new On(t,r)}isIdentical(t){return this.type===t.type&&this.params===t.params}isEqual(t){return this.type===t.type}static fromString(t){const[r,...a]=t.split(";"),i={};for(const n of a){const[s,u]=n.split("=");i[s.trim()]=u.trim()}return new On(r,i)}},Ni=si(oi());async function tw(e){const t=Up.fromString(e.type);switch(t.type){case"image/x-alpha8":{const r=parseInt(t.params.width),a=parseInt(t.params.height);return(0,Ni.default)(new Uint8Array(await e.arrayBuffer()),[a,r,1])}case"image/x-rgba8":{const r=parseInt(t.params.width),a=parseInt(t.params.height);return(0,Ni.default)(new Uint8Array(await e.arrayBuffer()),[a,r,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const r=await createImageBitmap(e),a=nw(r);return(0,Ni.default)(new Uint8Array(a.data),[a.height,a.width,4])}default:throw new Error(`Invalid format: ${t.type} with params: ${t.params}`)}}async function rw(e,t=.8,r="image/png"){const[a,i,n]=e.shape;switch(r){case"image/x-alpha8":case"image/x-rgba8":{const d=Up.create(r,{width:i.toString(),height:a.toString()});return new Blob([e.data],{type:d.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const d=new ImageData(new Uint8ClampedArray(e.data),i,a);var s=jp(d.width,d.height),u=s.getContext("2d");return u.putImageData(d,0,0),s.convertToBlob({quality:t,type:r})}default:throw new Error(`Invalid format: ${r}`)}}function aw(e){return new RegExp("^(?:[a-z+]+:)?//","i").test(e)}function iw(e,t){return aw(e)?e:new URL(e,t).href}function nw(e){var t=jp(e.width,e.height),r=t.getContext("2d");return r.drawImage(e,0,0),r.getImageData(0,0,t.width,t.height)}function sw(e){if(typeof Uint8Array<"u")return new Uint8Array(e);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(e);if(typeof Uint16Array<"u")return new Uint16Array(e);if(typeof Uint32Array<"u")return new Uint32Array(e);if(typeof Float32Array<"u")return new Float32Array(e);if(typeof Float64Array<"u")return new Float64Array(e);throw new Error("TypedArray not supported")}function Ku(e,t,r,a=!1){const[i,n,s]=e.shape;let u=n/t,d=i/r;a&&(u=d=Math.max(u,d)>1?Math.max(u,d):Math.min(u,d));const c=(0,ns.default)(sw(s*t*r),[r,t,s]);for(let f=0;f<r;f++)for(let m=0;m<t;m++){const g=m*u,_=f*d,v=Math.max(Math.floor(g),0),w=Math.min(Math.ceil(g),n-1),x=Math.max(Math.floor(_),0),$=Math.min(Math.ceil(_),i-1),b=g-v,S=_-x;for(let T=0;T<s;T++){const I=e.get(x,v,T),A=e.get(x,w,T),E=e.get($,v,T),D=e.get($,w,T),M=(1-b)*(1-S)*I+b*(1-S)*A+(1-b)*S*E+b*S*D;c.set(f,m,T,M)}}return c}function ow(e,t=[128,128,128],r=[256,256,256]){var a=e.data;const[i,n,s]=e.shape,u=i*n,d=new Float32Array(3*u);for(let c=0,f=0;c<a.length;c+=4,f+=1)d[f]=(a[c]-t[0])/r[0],d[f+u]=(a[c+1]-t[1])/r[1],d[f+u+u]=(a[c+2]-t[2])/r[2];return(0,ns.default)(d,[1,3,i,n])}async function uw(e,t){return typeof e=="string"&&(e=iw(e,t.publicPath),e=new URL(e)),e instanceof URL&&(e=await(await fetch(e,{})).blob()),(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e=new Blob([e])),e instanceof Blob&&(e=await tw(e)),e}function lw(e){const t=new Uint8Array(e.data.length);for(let r=0;r<e.data.length;r++)t[r]=e.data[r]*255;return(0,ns.default)(t,e.shape)}function jp(e,t){let r;if(typeof OffscreenCanvas<"u"?r=new OffscreenCanvas(e,t):r=document.createElement("canvas"),!r)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return r}var dw=si(oi()),Wp=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,cw=()=>navigator.hardwareConcurrency??4;async function Qu(e,t){return URL.createObjectURL(await Vp(e,t))}async function Vp(e,t){const r=new URL("resources.json",t.publicPath),a=await fetch(r);if(!a.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const n=(await a.json())[e];if(!n)throw new Error(`Resource ${e} not found. Ensure that the config.publicPath is configured correctly.`);const s=n.chunks;let u=0;const d=s.map(async m=>{const g=m.offsets[1]-m.offsets[0],_=t.publicPath?new URL(m.name,t.publicPath).toString():m.name,w=await(await fetch(_,t.fetchArgs)).blob();if(g!==w.size)throw new Error(`Failed to fetch ${e} with size ${g} but got ${w.size}`);return t.progress&&(u+=g,t.progress(`fetch:${e}`,u,n.size)),w}),c=await Promise.all(d),f=new Blob(c,{type:n.mime});if(f.size!==n.size)throw new Error(`Failed to fetch ${e} with size ${n.size} but got ${f.size}`);return f}var Er=null,Lp=async e=>(Er!==null||(e?Er=(await Fu(async()=>{const{default:t}=await import("./ort.webgpu.bundle.min.BLCT94Cc.js");return{default:t}},[])).default:Er=(await Fu(async()=>{const{default:t}=await Promise.resolve().then(()=>J$);return{default:t}},void 0)).default),Er);async function pw(e,t){const r=t.device==="gpu"&&await Wp(),a=r&&t.proxyToWorker,i=[r?"webgpu":"wasm"],n=await Lp(r);t.debug&&(console.debug("	Using WebGPU:",r),console.debug("	Proxy to Worker:",a),n.env.debug=!0,n.env.logLevel="verbose"),n.env.wasm.numThreads=cw(),n.env.wasm.proxy=a;const s=r?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",u=await Qu(`${s}.wasm`,t),d=await Qu(`${s}.mjs`,t);n.env.wasm.wasmPaths={mjs:d,wasm:u},t.debug&&console.debug("ort.env.wasm:",n.env.wasm);const c={executionProviders:i,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await n.InferenceSession.create(e,c).catch(m=>{throw new Error(`Failed to create session: "${m}". Please check if the publicPath is set correctly.`)})}async function hw(e,t,r,a){const i=a.device==="gpu"&&await Wp(),n=await Lp(i),s={};for(const[c,f]of t)s[c]=new n.Tensor("float32",new Float32Array(f.data),f.shape);const u=await e.run(s,{}),d=[];for(const c of r){const f=u[c],m=f.dims,g=f.data,_=(0,dw.default)(g,m);d.push(_)}return d}var xe;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function r(i){throw new Error}e.assertNever=r,e.arrayToEnum=i=>{const n={};for(const s of i)n[s]=s;return n},e.getValidEnumValues=i=>{const n=e.objectKeys(i).filter(u=>typeof i[i[u]]!="number"),s={};for(const u of n)s[u]=i[u];return e.objectValues(s)},e.objectValues=i=>e.objectKeys(i).map(function(n){return i[n]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const n=[];for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&n.push(s);return n},e.find=(i,n)=>{for(const s of i)if(n(s))return s},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function a(i,n=" | "){return i.map(s=>typeof s=="string"?`'${s}'`:s).join(n)}e.joinValues=a,e.jsonStringifyReplacer=(i,n)=>typeof n=="bigint"?n.toString():n})(xe||(xe={}));var Rn;(function(e){e.mergeShapes=(t,r)=>({...t,...r})})(Rn||(Rn={}));var Q=xe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Tt=e=>{switch(typeof e){case"undefined":return Q.undefined;case"string":return Q.string;case"number":return isNaN(e)?Q.nan:Q.number;case"boolean":return Q.boolean;case"function":return Q.function;case"bigint":return Q.bigint;case"symbol":return Q.symbol;case"object":return Array.isArray(e)?Q.array:e===null?Q.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?Q.promise:typeof Map<"u"&&e instanceof Map?Q.map:typeof Set<"u"&&e instanceof Set?Q.set:typeof Date<"u"&&e instanceof Date?Q.date:Q.object;default:return Q.unknown}},q=xe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),fw=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),dt=class qp extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=a=>{this.issues=[...this.issues,a]},this.addIssues=(a=[])=>{this.issues=[...this.issues,...a]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}format(t){const r=t||function(n){return n.message},a={_errors:[]},i=n=>{for(const s of n.issues)if(s.code==="invalid_union")s.unionErrors.map(i);else if(s.code==="invalid_return_type")i(s.returnTypeError);else if(s.code==="invalid_arguments")i(s.argumentsError);else if(s.path.length===0)a._errors.push(r(s));else{let u=a,d=0;for(;d<s.path.length;){const c=s.path[d];d===s.path.length-1?(u[c]=u[c]||{_errors:[]},u[c]._errors.push(r(s))):u[c]=u[c]||{_errors:[]},u=u[c],d++}}};return i(this),a}static assert(t){if(!(t instanceof qp))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,xe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=r=>r.message){const r={},a=[];for(const i of this.issues)i.path.length>0?(r[i.path[0]]=r[i.path[0]]||[],r[i.path[0]].push(t(i))):a.push(t(i));return{formErrors:a,fieldErrors:r}}get formErrors(){return this.flatten()}};dt.create=e=>new dt(e);var cr=(e,t)=>{let r;switch(e.code){case q.invalid_type:e.received===Q.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case q.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,xe.jsonStringifyReplacer)}`;break;case q.unrecognized_keys:r=`Unrecognized key(s) in object: ${xe.joinValues(e.keys,", ")}`;break;case q.invalid_union:r="Invalid input";break;case q.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${xe.joinValues(e.options)}`;break;case q.invalid_enum_value:r=`Invalid enum value. Expected ${xe.joinValues(e.options)}, received '${e.received}'`;break;case q.invalid_arguments:r="Invalid function arguments";break;case q.invalid_return_type:r="Invalid function return type";break;case q.invalid_date:r="Invalid date";break;case q.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:xe.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case q.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:r="Invalid input";break;case q.too_big:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?r=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:r="Invalid input";break;case q.custom:r="Invalid input";break;case q.invalid_intersection_types:r="Intersection results could not be merged";break;case q.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case q.not_finite:r="Number must be finite";break;default:r=t.defaultError,xe.assertNever(e)}return{message:r}},Fp=cr;function mw(e){Fp=e}function Fa(){return Fp}var Ga=e=>{const{data:t,path:r,errorMaps:a,issueData:i}=e,n=[...r,...i.path||[]],s={...i,path:n};if(i.message!==void 0)return{...i,path:n,message:i.message};let u="";const d=a.filter(c=>!!c).slice().reverse();for(const c of d)u=c(s,{data:t,defaultError:u}).message;return{...i,path:n,message:u}},gw=[];function Z(e,t){const r=Fa(),a=Ga({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===cr?void 0:cr].filter(i=>!!i)});e.common.issues.push(a)}var Fe=class Gp{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,r){const a=[];for(const i of r){if(i.status==="aborted")return le;i.status==="dirty"&&t.dirty(),a.push(i.value)}return{status:t.value,value:a}}static async mergeObjectAsync(t,r){const a=[];for(const i of r){const n=await i.key,s=await i.value;a.push({key:n,value:s})}return Gp.mergeObjectSync(t,a)}static mergeObjectSync(t,r){const a={};for(const i of r){const{key:n,value:s}=i;if(n.status==="aborted"||s.status==="aborted")return le;n.status==="dirty"&&t.dirty(),s.status==="dirty"&&t.dirty(),n.value!=="__proto__"&&(typeof s.value<"u"||i.alwaysSet)&&(a[n.value]=s.value)}return{status:t.value,value:a}}},le=Object.freeze({status:"aborted"}),lr=e=>({status:"dirty",value:e}),qe=e=>({status:"valid",value:e}),Nn=e=>e.status==="aborted",Bn=e=>e.status==="dirty",Jt=e=>e.status==="valid",Kr=e=>typeof Promise<"u"&&e instanceof Promise;function Ha(e,t,r,a){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function Hp(e,t,r,a,i){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,r),r}var te;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(te||(te={}));var jr,Wr,wt=class{constructor(e,t,r,a){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=a}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Ju=(e,t)=>{if(Jt(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new dt(e.common.issues);return this._error=r,this._error}}};function ge(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:a,description:i}=e;if(t&&(r||a))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(s,u)=>{var d,c;const{message:f}=e;return s.code==="invalid_enum_value"?{message:f??u.defaultError}:typeof u.data>"u"?{message:(d=f??a)!==null&&d!==void 0?d:u.defaultError}:s.code!=="invalid_type"?{message:u.defaultError}:{message:(c=f??r)!==null&&c!==void 0?c:u.defaultError}},description:i}}var ve=class{get description(){return this._def.description}_getType(e){return Tt(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Tt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Fe,ctx:{common:e.parent.common,data:e.data,parsedType:Tt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Kr(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const a={common:{issues:[],async:(r=t?.async)!==null&&r!==void 0?r:!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Tt(e)},i=this._parseSync({data:e,path:a.path,parent:a});return Ju(a,i)}"~validate"(e){var t,r;const a={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Tt(e)};if(!this["~standard"].async)try{const i=this._parseSync({data:e,path:[],parent:a});return Jt(i)?{value:i.value}:{issues:a.common.issues}}catch(i){!((r=(t=i?.message)===null||t===void 0?void 0:t.toLowerCase())===null||r===void 0)&&r.includes("encountered")&&(this["~standard"].async=!0),a.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:a}).then(i=>Jt(i)?{value:i.value}:{issues:a.common.issues})}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Tt(e)},a=this._parse({data:e,path:r.path,parent:r}),i=await(Kr(a)?a:Promise.resolve(a));return Ju(r,i)}refine(e,t){const r=a=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(a):t;return this._refinement((a,i)=>{const n=e(a),s=()=>i.addIssue({code:q.custom,...r(a)});return typeof Promise<"u"&&n instanceof Promise?n.then(u=>u?!0:(s(),!1)):n?!0:(s(),!1)})}refinement(e,t){return this._refinement((r,a)=>e(r)?!0:(a.addIssue(typeof t=="function"?t(r,a):t),!1))}_refinement(e){return new ct({schema:this,typeName:oe.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return vt.create(this,this._def)}nullable(){return Pt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Xt.create(this)}promise(){return fr.create(this,this._def)}or(e){return ra.create([this,e],this._def)}and(e){return aa.create(this,e,this._def)}transform(e){return new ct({...ge(this._def),schema:this,typeName:oe.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new oa({...ge(this._def),innerType:this,defaultValue:t,typeName:oe.ZodDefault})}brand(){return new ss({typeName:oe.ZodBranded,type:this,...ge(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new ua({...ge(this._def),innerType:this,catchValue:t,typeName:oe.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return os.create(this,e)}readonly(){return la.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},yw=/^c[^\s-]{8,}$/i,_w=/^[0-9a-z]+$/,vw=/^[0-9A-HJKMNP-TV-Z]{26}$/i,ww=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,bw=/^[a-z0-9_-]{21}$/i,$w=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,xw=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,kw=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Sw="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Bi,Tw=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Cw=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Iw=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Ew=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,zw=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Aw=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Zp="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Ow=new RegExp(`^${Zp}$`);function Kp(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`),t}function Rw(e){return new RegExp(`^${Kp(e)}$`)}function Qp(e){let t=`${Zp}T${Kp(e)}`;const r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,new RegExp(`^${t}$`)}function Nw(e,t){return!!((t==="v4"||!t)&&Tw.test(e)||(t==="v6"||!t)&&Iw.test(e))}function Bw(e,t){if(!$w.test(e))return!1;try{const[r]=e.split("."),a=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),i=JSON.parse(atob(a));return!(typeof i!="object"||i===null||!i.typ||!i.alg||t&&i.alg!==t)}catch{return!1}}function Mw(e,t){return!!((t==="v4"||!t)&&Cw.test(e)||(t==="v6"||!t)&&Ew.test(e))}var pr=class Vr extends ve{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==Q.string){const n=this._getOrReturnCtx(t);return Z(n,{code:q.invalid_type,expected:Q.string,received:n.parsedType}),le}const a=new Fe;let i;for(const n of this._def.checks)if(n.kind==="min")t.data.length<n.value&&(i=this._getOrReturnCtx(t,i),Z(i,{code:q.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),a.dirty());else if(n.kind==="max")t.data.length>n.value&&(i=this._getOrReturnCtx(t,i),Z(i,{code:q.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),a.dirty());else if(n.kind==="length"){const s=t.data.length>n.value,u=t.data.length<n.value;(s||u)&&(i=this._getOrReturnCtx(t,i),s?Z(i,{code:q.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}):u&&Z(i,{code:q.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}),a.dirty())}else if(n.kind==="email")kw.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"email",code:q.invalid_string,message:n.message}),a.dirty());else if(n.kind==="emoji")Bi||(Bi=new RegExp(Sw,"u")),Bi.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"emoji",code:q.invalid_string,message:n.message}),a.dirty());else if(n.kind==="uuid")ww.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"uuid",code:q.invalid_string,message:n.message}),a.dirty());else if(n.kind==="nanoid")bw.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"nanoid",code:q.invalid_string,message:n.message}),a.dirty());else if(n.kind==="cuid")yw.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"cuid",code:q.invalid_string,message:n.message}),a.dirty());else if(n.kind==="cuid2")_w.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"cuid2",code:q.invalid_string,message:n.message}),a.dirty());else if(n.kind==="ulid")vw.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"ulid",code:q.invalid_string,message:n.message}),a.dirty());else if(n.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),Z(i,{validation:"url",code:q.invalid_string,message:n.message}),a.dirty()}else n.kind==="regex"?(n.regex.lastIndex=0,n.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"regex",code:q.invalid_string,message:n.message}),a.dirty())):n.kind==="trim"?t.data=t.data.trim():n.kind==="includes"?t.data.includes(n.value,n.position)||(i=this._getOrReturnCtx(t,i),Z(i,{code:q.invalid_string,validation:{includes:n.value,position:n.position},message:n.message}),a.dirty()):n.kind==="toLowerCase"?t.data=t.data.toLowerCase():n.kind==="toUpperCase"?t.data=t.data.toUpperCase():n.kind==="startsWith"?t.data.startsWith(n.value)||(i=this._getOrReturnCtx(t,i),Z(i,{code:q.invalid_string,validation:{startsWith:n.value},message:n.message}),a.dirty()):n.kind==="endsWith"?t.data.endsWith(n.value)||(i=this._getOrReturnCtx(t,i),Z(i,{code:q.invalid_string,validation:{endsWith:n.value},message:n.message}),a.dirty()):n.kind==="datetime"?Qp(n).test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{code:q.invalid_string,validation:"datetime",message:n.message}),a.dirty()):n.kind==="date"?Ow.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{code:q.invalid_string,validation:"date",message:n.message}),a.dirty()):n.kind==="time"?Rw(n).test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{code:q.invalid_string,validation:"time",message:n.message}),a.dirty()):n.kind==="duration"?xw.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"duration",code:q.invalid_string,message:n.message}),a.dirty()):n.kind==="ip"?Nw(t.data,n.version)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"ip",code:q.invalid_string,message:n.message}),a.dirty()):n.kind==="jwt"?Bw(t.data,n.alg)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"jwt",code:q.invalid_string,message:n.message}),a.dirty()):n.kind==="cidr"?Mw(t.data,n.version)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"cidr",code:q.invalid_string,message:n.message}),a.dirty()):n.kind==="base64"?zw.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"base64",code:q.invalid_string,message:n.message}),a.dirty()):n.kind==="base64url"?Aw.test(t.data)||(i=this._getOrReturnCtx(t,i),Z(i,{validation:"base64url",code:q.invalid_string,message:n.message}),a.dirty()):xe.assertNever(n);return{status:a.value,value:t.data}}_regex(t,r,a){return this.refinement(i=>t.test(i),{validation:r,code:q.invalid_string,...te.errToObj(a)})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...te.errToObj(t)})}url(t){return this._addCheck({kind:"url",...te.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...te.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...te.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...te.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...te.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...te.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...te.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...te.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...te.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...te.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...te.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...te.errToObj(t)})}datetime(t){var r,a;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(r=t?.offset)!==null&&r!==void 0?r:!1,local:(a=t?.local)!==null&&a!==void 0?a:!1,...te.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...te.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...te.errToObj(t)})}regex(t,r){return this._addCheck({kind:"regex",regex:t,...te.errToObj(r)})}includes(t,r){return this._addCheck({kind:"includes",value:t,position:r?.position,...te.errToObj(r?.message)})}startsWith(t,r){return this._addCheck({kind:"startsWith",value:t,...te.errToObj(r)})}endsWith(t,r){return this._addCheck({kind:"endsWith",value:t,...te.errToObj(r)})}min(t,r){return this._addCheck({kind:"min",value:t,...te.errToObj(r)})}max(t,r){return this._addCheck({kind:"max",value:t,...te.errToObj(r)})}length(t,r){return this._addCheck({kind:"length",value:t,...te.errToObj(r)})}nonempty(t){return this.min(1,te.errToObj(t))}trim(){return new Vr({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Vr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Vr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxLength(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}};pr.create=e=>{var t;return new pr({checks:[],typeName:oe.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...ge(e)})};function Dw(e,t){const r=(e.toString().split(".")[1]||"").length,a=(t.toString().split(".")[1]||"").length,i=r>a?r:a,n=parseInt(e.toFixed(i).replace(".","")),s=parseInt(t.toFixed(i).replace(".",""));return n%s/Math.pow(10,i)}var Qr=class Mn extends ve{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==Q.number){const n=this._getOrReturnCtx(t);return Z(n,{code:q.invalid_type,expected:Q.number,received:n.parsedType}),le}let a;const i=new Fe;for(const n of this._def.checks)n.kind==="int"?xe.isInteger(t.data)||(a=this._getOrReturnCtx(t,a),Z(a,{code:q.invalid_type,expected:"integer",received:"float",message:n.message}),i.dirty()):n.kind==="min"?(n.inclusive?t.data<n.value:t.data<=n.value)&&(a=this._getOrReturnCtx(t,a),Z(a,{code:q.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),i.dirty()):n.kind==="max"?(n.inclusive?t.data>n.value:t.data>=n.value)&&(a=this._getOrReturnCtx(t,a),Z(a,{code:q.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),i.dirty()):n.kind==="multipleOf"?Dw(t.data,n.value)!==0&&(a=this._getOrReturnCtx(t,a),Z(a,{code:q.not_multiple_of,multipleOf:n.value,message:n.message}),i.dirty()):n.kind==="finite"?Number.isFinite(t.data)||(a=this._getOrReturnCtx(t,a),Z(a,{code:q.not_finite,message:n.message}),i.dirty()):xe.assertNever(n);return{status:i.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,te.toString(r))}gt(t,r){return this.setLimit("min",t,!1,te.toString(r))}lte(t,r){return this.setLimit("max",t,!0,te.toString(r))}lt(t,r){return this.setLimit("max",t,!1,te.toString(r))}setLimit(t,r,a,i){return new Mn({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:a,message:te.toString(i)}]})}_addCheck(t){return new Mn({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:te.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:te.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:te.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:te.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:te.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:te.toString(r)})}finite(t){return this._addCheck({kind:"finite",message:te.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:te.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:te.toString(t)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&xe.isInteger(t.value))}get isFinite(){let t=null,r=null;for(const a of this._def.checks){if(a.kind==="finite"||a.kind==="int"||a.kind==="multipleOf")return!0;a.kind==="min"?(r===null||a.value>r)&&(r=a.value):a.kind==="max"&&(t===null||a.value<t)&&(t=a.value)}return Number.isFinite(r)&&Number.isFinite(t)}};Qr.create=e=>new Qr({checks:[],typeName:oe.ZodNumber,coerce:e?.coerce||!1,...ge(e)});var Jr=class Dn extends ve{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==Q.bigint)return this._getInvalidInput(t);let a;const i=new Fe;for(const n of this._def.checks)n.kind==="min"?(n.inclusive?t.data<n.value:t.data<=n.value)&&(a=this._getOrReturnCtx(t,a),Z(a,{code:q.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),i.dirty()):n.kind==="max"?(n.inclusive?t.data>n.value:t.data>=n.value)&&(a=this._getOrReturnCtx(t,a),Z(a,{code:q.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),i.dirty()):n.kind==="multipleOf"?t.data%n.value!==BigInt(0)&&(a=this._getOrReturnCtx(t,a),Z(a,{code:q.not_multiple_of,multipleOf:n.value,message:n.message}),i.dirty()):xe.assertNever(n);return{status:i.value,value:t.data}}_getInvalidInput(t){const r=this._getOrReturnCtx(t);return Z(r,{code:q.invalid_type,expected:Q.bigint,received:r.parsedType}),le}gte(t,r){return this.setLimit("min",t,!0,te.toString(r))}gt(t,r){return this.setLimit("min",t,!1,te.toString(r))}lte(t,r){return this.setLimit("max",t,!0,te.toString(r))}lt(t,r){return this.setLimit("max",t,!1,te.toString(r))}setLimit(t,r,a,i){return new Dn({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:a,message:te.toString(i)}]})}_addCheck(t){return new Dn({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:te.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:te.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:te.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:te.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:te.toString(r)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}};Jr.create=e=>{var t;return new Jr({checks:[],typeName:oe.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...ge(e)})};var Xr=class extends ve{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Q.boolean){const r=this._getOrReturnCtx(e);return Z(r,{code:q.invalid_type,expected:Q.boolean,received:r.parsedType}),le}return qe(e.data)}};Xr.create=e=>new Xr({typeName:oe.ZodBoolean,coerce:e?.coerce||!1,...ge(e)});var Yr=class Jp extends ve{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==Q.date){const n=this._getOrReturnCtx(t);return Z(n,{code:q.invalid_type,expected:Q.date,received:n.parsedType}),le}if(isNaN(t.data.getTime())){const n=this._getOrReturnCtx(t);return Z(n,{code:q.invalid_date}),le}const a=new Fe;let i;for(const n of this._def.checks)n.kind==="min"?t.data.getTime()<n.value&&(i=this._getOrReturnCtx(t,i),Z(i,{code:q.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),a.dirty()):n.kind==="max"?t.data.getTime()>n.value&&(i=this._getOrReturnCtx(t,i),Z(i,{code:q.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),a.dirty()):xe.assertNever(n);return{status:a.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Jp({...this._def,checks:[...this._def.checks,t]})}min(t,r){return this._addCheck({kind:"min",value:t.getTime(),message:te.toString(r)})}max(t,r){return this._addCheck({kind:"max",value:t.getTime(),message:te.toString(r)})}get minDate(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t!=null?new Date(t):null}};Yr.create=e=>new Yr({checks:[],coerce:e?.coerce||!1,typeName:oe.ZodDate,...ge(e)});var Za=class extends ve{_parse(e){if(this._getType(e)!==Q.symbol){const r=this._getOrReturnCtx(e);return Z(r,{code:q.invalid_type,expected:Q.symbol,received:r.parsedType}),le}return qe(e.data)}};Za.create=e=>new Za({typeName:oe.ZodSymbol,...ge(e)});var ea=class extends ve{_parse(e){if(this._getType(e)!==Q.undefined){const r=this._getOrReturnCtx(e);return Z(r,{code:q.invalid_type,expected:Q.undefined,received:r.parsedType}),le}return qe(e.data)}};ea.create=e=>new ea({typeName:oe.ZodUndefined,...ge(e)});var ta=class extends ve{_parse(e){if(this._getType(e)!==Q.null){const r=this._getOrReturnCtx(e);return Z(r,{code:q.invalid_type,expected:Q.null,received:r.parsedType}),le}return qe(e.data)}};ta.create=e=>new ta({typeName:oe.ZodNull,...ge(e)});var hr=class extends ve{constructor(){super(...arguments),this._any=!0}_parse(e){return qe(e.data)}};hr.create=e=>new hr({typeName:oe.ZodAny,...ge(e)});var Qt=class extends ve{constructor(){super(...arguments),this._unknown=!0}_parse(e){return qe(e.data)}};Qt.create=e=>new Qt({typeName:oe.ZodUnknown,...ge(e)});var Ct=class extends ve{_parse(e){const t=this._getOrReturnCtx(e);return Z(t,{code:q.invalid_type,expected:Q.never,received:t.parsedType}),le}};Ct.create=e=>new Ct({typeName:oe.ZodNever,...ge(e)});var Ka=class extends ve{_parse(e){if(this._getType(e)!==Q.undefined){const r=this._getOrReturnCtx(e);return Z(r,{code:q.invalid_type,expected:Q.void,received:r.parsedType}),le}return qe(e.data)}};Ka.create=e=>new Ka({typeName:oe.ZodVoid,...ge(e)});var Xt=class ja extends ve{_parse(t){const{ctx:r,status:a}=this._processInputParams(t),i=this._def;if(r.parsedType!==Q.array)return Z(r,{code:q.invalid_type,expected:Q.array,received:r.parsedType}),le;if(i.exactLength!==null){const s=r.data.length>i.exactLength.value,u=r.data.length<i.exactLength.value;(s||u)&&(Z(r,{code:s?q.too_big:q.too_small,minimum:u?i.exactLength.value:void 0,maximum:s?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),a.dirty())}if(i.minLength!==null&&r.data.length<i.minLength.value&&(Z(r,{code:q.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),a.dirty()),i.maxLength!==null&&r.data.length>i.maxLength.value&&(Z(r,{code:q.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),a.dirty()),r.common.async)return Promise.all([...r.data].map((s,u)=>i.type._parseAsync(new wt(r,s,r.path,u)))).then(s=>Fe.mergeArray(a,s));const n=[...r.data].map((s,u)=>i.type._parseSync(new wt(r,s,r.path,u)));return Fe.mergeArray(a,n)}get element(){return this._def.type}min(t,r){return new ja({...this._def,minLength:{value:t,message:te.toString(r)}})}max(t,r){return new ja({...this._def,maxLength:{value:t,message:te.toString(r)}})}length(t,r){return new ja({...this._def,exactLength:{value:t,message:te.toString(r)}})}nonempty(t){return this.min(1,t)}};Xt.create=(e,t)=>new Xt({type:e,minLength:null,maxLength:null,exactLength:null,typeName:oe.ZodArray,...ge(t)});function or(e){if(e instanceof rt){const t={};for(const r in e.shape){const a=e.shape[r];t[r]=vt.create(or(a))}return new rt({...e._def,shape:()=>t})}else return e instanceof Xt?new Xt({...e._def,type:or(e.element)}):e instanceof vt?vt.create(or(e.unwrap())):e instanceof Pt?Pt.create(or(e.unwrap())):e instanceof Dt?Dt.create(e.items.map(t=>or(t))):e}var rt=class ut extends ve{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),r=xe.objectKeys(t);return this._cached={shape:t,keys:r}}_parse(t){if(this._getType(t)!==Q.object){const c=this._getOrReturnCtx(t);return Z(c,{code:q.invalid_type,expected:Q.object,received:c.parsedType}),le}const{status:a,ctx:i}=this._processInputParams(t),{shape:n,keys:s}=this._getCached(),u=[];if(!(this._def.catchall instanceof Ct&&this._def.unknownKeys==="strip"))for(const c in i.data)s.includes(c)||u.push(c);const d=[];for(const c of s){const f=n[c],m=i.data[c];d.push({key:{status:"valid",value:c},value:f._parse(new wt(i,m,i.path,c)),alwaysSet:c in i.data})}if(this._def.catchall instanceof Ct){const c=this._def.unknownKeys;if(c==="passthrough")for(const f of u)d.push({key:{status:"valid",value:f},value:{status:"valid",value:i.data[f]}});else if(c==="strict")u.length>0&&(Z(i,{code:q.unrecognized_keys,keys:u}),a.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const f of u){const m=i.data[f];d.push({key:{status:"valid",value:f},value:c._parse(new wt(i,m,i.path,f)),alwaysSet:f in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const c=[];for(const f of d){const m=await f.key,g=await f.value;c.push({key:m,value:g,alwaysSet:f.alwaysSet})}return c}).then(c=>Fe.mergeObjectSync(a,c)):Fe.mergeObjectSync(a,d)}get shape(){return this._def.shape()}strict(t){return te.errToObj,new ut({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(r,a)=>{var i,n,s,u;const d=(s=(n=(i=this._def).errorMap)===null||n===void 0?void 0:n.call(i,r,a).message)!==null&&s!==void 0?s:a.defaultError;return r.code==="unrecognized_keys"?{message:(u=te.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ut({...this._def,unknownKeys:"strip"})}passthrough(){return new ut({...this._def,unknownKeys:"passthrough"})}extend(t){return new ut({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ut({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:oe.ZodObject})}setKey(t,r){return this.augment({[t]:r})}catchall(t){return new ut({...this._def,catchall:t})}pick(t){const r={};return xe.objectKeys(t).forEach(a=>{t[a]&&this.shape[a]&&(r[a]=this.shape[a])}),new ut({...this._def,shape:()=>r})}omit(t){const r={};return xe.objectKeys(this.shape).forEach(a=>{t[a]||(r[a]=this.shape[a])}),new ut({...this._def,shape:()=>r})}deepPartial(){return or(this)}partial(t){const r={};return xe.objectKeys(this.shape).forEach(a=>{const i=this.shape[a];t&&!t[a]?r[a]=i:r[a]=i.optional()}),new ut({...this._def,shape:()=>r})}required(t){const r={};return xe.objectKeys(this.shape).forEach(a=>{if(t&&!t[a])r[a]=this.shape[a];else{let n=this.shape[a];for(;n instanceof vt;)n=n._def.innerType;r[a]=n}}),new ut({...this._def,shape:()=>r})}keyof(){return ah(xe.objectKeys(this.shape))}};rt.create=(e,t)=>new rt({shape:()=>e,unknownKeys:"strip",catchall:Ct.create(),typeName:oe.ZodObject,...ge(t)});rt.strictCreate=(e,t)=>new rt({shape:()=>e,unknownKeys:"strict",catchall:Ct.create(),typeName:oe.ZodObject,...ge(t)});rt.lazycreate=(e,t)=>new rt({shape:e,unknownKeys:"strip",catchall:Ct.create(),typeName:oe.ZodObject,...ge(t)});var ra=class extends ve{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function a(i){for(const s of i)if(s.result.status==="valid")return s.result;for(const s of i)if(s.result.status==="dirty")return t.common.issues.push(...s.ctx.common.issues),s.result;const n=i.map(s=>new dt(s.ctx.common.issues));return Z(t,{code:q.invalid_union,unionErrors:n}),le}if(t.common.async)return Promise.all(r.map(async i=>{const n={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(a);{let i;const n=[];for(const u of r){const d={...t,common:{...t.common,issues:[]},parent:null},c=u._parseSync({data:t.data,path:t.path,parent:d});if(c.status==="valid")return c;c.status==="dirty"&&!i&&(i={result:c,ctx:d}),d.common.issues.length&&n.push(d.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const s=n.map(u=>new dt(u));return Z(t,{code:q.invalid_union,unionErrors:s}),le}}get options(){return this._def.options}};ra.create=(e,t)=>new ra({options:e,typeName:oe.ZodUnion,...ge(t)});var St=e=>e instanceof ia?St(e.schema):e instanceof ct?St(e.innerType()):e instanceof na?[e.value]:e instanceof pa?e.options:e instanceof sa?xe.objectValues(e.enum):e instanceof oa?St(e._def.innerType):e instanceof ea?[void 0]:e instanceof ta?[null]:e instanceof vt?[void 0,...St(e.unwrap())]:e instanceof Pt?[null,...St(e.unwrap())]:e instanceof ss||e instanceof la?St(e.unwrap()):e instanceof ua?St(e._def.innerType):[],Xp=class Yp extends ve{_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==Q.object)return Z(r,{code:q.invalid_type,expected:Q.object,received:r.parsedType}),le;const a=this.discriminator,i=r.data[a],n=this.optionsMap.get(i);return n?r.common.async?n._parseAsync({data:r.data,path:r.path,parent:r}):n._parseSync({data:r.data,path:r.path,parent:r}):(Z(r,{code:q.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[a]}),le)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,r,a){const i=new Map;for(const n of r){const s=St(n.shape[t]);if(!s.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of s){if(i.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);i.set(u,n)}}return new Yp({typeName:oe.ZodDiscriminatedUnion,discriminator:t,options:r,optionsMap:i,...ge(a)})}};function Pn(e,t){const r=Tt(e),a=Tt(t);if(e===t)return{valid:!0,data:e};if(r===Q.object&&a===Q.object){const i=xe.objectKeys(t),n=xe.objectKeys(e).filter(u=>i.indexOf(u)!==-1),s={...e,...t};for(const u of n){const d=Pn(e[u],t[u]);if(!d.valid)return{valid:!1};s[u]=d.data}return{valid:!0,data:s}}else if(r===Q.array&&a===Q.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let n=0;n<e.length;n++){const s=e[n],u=t[n],d=Pn(s,u);if(!d.valid)return{valid:!1};i.push(d.data)}return{valid:!0,data:i}}else return r===Q.date&&a===Q.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}var aa=class extends ve{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),a=(i,n)=>{if(Nn(i)||Nn(n))return le;const s=Pn(i.value,n.value);return s.valid?((Bn(i)||Bn(n))&&t.dirty(),{status:t.value,value:s.data}):(Z(r,{code:q.invalid_intersection_types}),le)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,n])=>a(i,n)):a(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};aa.create=(e,t,r)=>new aa({left:e,right:t,typeName:oe.ZodIntersection,...ge(r)});var Dt=class eh extends ve{_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.parsedType!==Q.array)return Z(a,{code:q.invalid_type,expected:Q.array,received:a.parsedType}),le;if(a.data.length<this._def.items.length)return Z(a,{code:q.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),le;!this._def.rest&&a.data.length>this._def.items.length&&(Z(a,{code:q.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const n=[...a.data].map((s,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new wt(a,s,a.path,u)):null}).filter(s=>!!s);return a.common.async?Promise.all(n).then(s=>Fe.mergeArray(r,s)):Fe.mergeArray(r,n)}get items(){return this._def.items}rest(t){return new eh({...this._def,rest:t})}};Dt.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Dt({items:e,typeName:oe.ZodTuple,rest:null,...ge(t)})};var th=class Un extends ve{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.parsedType!==Q.object)return Z(a,{code:q.invalid_type,expected:Q.object,received:a.parsedType}),le;const i=[],n=this._def.keyType,s=this._def.valueType;for(const u in a.data)i.push({key:n._parse(new wt(a,u,a.path,u)),value:s._parse(new wt(a,a.data[u],a.path,u)),alwaysSet:u in a.data});return a.common.async?Fe.mergeObjectAsync(r,i):Fe.mergeObjectSync(r,i)}get element(){return this._def.valueType}static create(t,r,a){return r instanceof ve?new Un({keyType:t,valueType:r,typeName:oe.ZodRecord,...ge(a)}):new Un({keyType:pr.create(),valueType:t,typeName:oe.ZodRecord,...ge(r)})}},Qa=class extends ve{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==Q.map)return Z(r,{code:q.invalid_type,expected:Q.map,received:r.parsedType}),le;const a=this._def.keyType,i=this._def.valueType,n=[...r.data.entries()].map(([s,u],d)=>({key:a._parse(new wt(r,s,r.path,[d,"key"])),value:i._parse(new wt(r,u,r.path,[d,"value"]))}));if(r.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const u of n){const d=await u.key,c=await u.value;if(d.status==="aborted"||c.status==="aborted")return le;(d.status==="dirty"||c.status==="dirty")&&t.dirty(),s.set(d.value,c.value)}return{status:t.value,value:s}})}else{const s=new Map;for(const u of n){const d=u.key,c=u.value;if(d.status==="aborted"||c.status==="aborted")return le;(d.status==="dirty"||c.status==="dirty")&&t.dirty(),s.set(d.value,c.value)}return{status:t.value,value:s}}}};Qa.create=(e,t,r)=>new Qa({valueType:t,keyType:e,typeName:oe.ZodMap,...ge(r)});var Ja=class jn extends ve{_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.parsedType!==Q.set)return Z(a,{code:q.invalid_type,expected:Q.set,received:a.parsedType}),le;const i=this._def;i.minSize!==null&&a.data.size<i.minSize.value&&(Z(a,{code:q.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),r.dirty()),i.maxSize!==null&&a.data.size>i.maxSize.value&&(Z(a,{code:q.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),r.dirty());const n=this._def.valueType;function s(d){const c=new Set;for(const f of d){if(f.status==="aborted")return le;f.status==="dirty"&&r.dirty(),c.add(f.value)}return{status:r.value,value:c}}const u=[...a.data.values()].map((d,c)=>n._parse(new wt(a,d,a.path,c)));return a.common.async?Promise.all(u).then(d=>s(d)):s(u)}min(t,r){return new jn({...this._def,minSize:{value:t,message:te.toString(r)}})}max(t,r){return new jn({...this._def,maxSize:{value:t,message:te.toString(r)}})}size(t,r){return this.min(t,r).max(t,r)}nonempty(t){return this.min(1,t)}};Ja.create=(e,t)=>new Ja({valueType:e,minSize:null,maxSize:null,typeName:oe.ZodSet,...ge(t)});var rh=class Wa extends ve{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==Q.function)return Z(r,{code:q.invalid_type,expected:Q.function,received:r.parsedType}),le;function a(u,d){return Ga({data:u,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Fa(),cr].filter(c=>!!c),issueData:{code:q.invalid_arguments,argumentsError:d}})}function i(u,d){return Ga({data:u,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Fa(),cr].filter(c=>!!c),issueData:{code:q.invalid_return_type,returnTypeError:d}})}const n={errorMap:r.common.contextualErrorMap},s=r.data;if(this._def.returns instanceof fr){const u=this;return qe(async function(...d){const c=new dt([]),f=await u._def.args.parseAsync(d,n).catch(_=>{throw c.addIssue(a(d,_)),c}),m=await Reflect.apply(s,this,f);return await u._def.returns._def.type.parseAsync(m,n).catch(_=>{throw c.addIssue(i(m,_)),c})})}else{const u=this;return qe(function(...d){const c=u._def.args.safeParse(d,n);if(!c.success)throw new dt([a(d,c.error)]);const f=Reflect.apply(s,this,c.data),m=u._def.returns.safeParse(f,n);if(!m.success)throw new dt([i(f,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Wa({...this._def,args:Dt.create(t).rest(Qt.create())})}returns(t){return new Wa({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,r,a){return new Wa({args:t||Dt.create([]).rest(Qt.create()),returns:r||Qt.create(),typeName:oe.ZodFunction,...ge(a)})}},ia=class extends ve{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};ia.create=(e,t)=>new ia({getter:e,typeName:oe.ZodLazy,...ge(t)});var na=class extends ve{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return Z(t,{received:t.data,code:q.invalid_literal,expected:this._def.value}),le}return{status:"valid",value:e.data}}get value(){return this._def.value}};na.create=(e,t)=>new na({value:e,typeName:oe.ZodLiteral,...ge(t)});function ah(e,t){return new pa({values:e,typeName:oe.ZodEnum,...ge(t)})}var pa=class Wn extends ve{constructor(){super(...arguments),jr.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const r=this._getOrReturnCtx(t),a=this._def.values;return Z(r,{expected:xe.joinValues(a),received:r.parsedType,code:q.invalid_type}),le}if(Ha(this,jr)||Hp(this,jr,new Set(this._def.values)),!Ha(this,jr).has(t.data)){const r=this._getOrReturnCtx(t),a=this._def.values;return Z(r,{received:r.data,code:q.invalid_enum_value,options:a}),le}return qe(t.data)}get options(){return this._def.values}get enum(){const t={};for(const r of this._def.values)t[r]=r;return t}get Values(){const t={};for(const r of this._def.values)t[r]=r;return t}get Enum(){const t={};for(const r of this._def.values)t[r]=r;return t}extract(t,r=this._def){return Wn.create(t,{...this._def,...r})}exclude(t,r=this._def){return Wn.create(this.options.filter(a=>!t.includes(a)),{...this._def,...r})}};jr=new WeakMap;pa.create=ah;var sa=class extends ve{constructor(){super(...arguments),Wr.set(this,void 0)}_parse(e){const t=xe.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==Q.string&&r.parsedType!==Q.number){const a=xe.objectValues(t);return Z(r,{expected:xe.joinValues(a),received:r.parsedType,code:q.invalid_type}),le}if(Ha(this,Wr)||Hp(this,Wr,new Set(xe.getValidEnumValues(this._def.values))),!Ha(this,Wr).has(e.data)){const a=xe.objectValues(t);return Z(r,{received:r.data,code:q.invalid_enum_value,options:a}),le}return qe(e.data)}get enum(){return this._def.values}};Wr=new WeakMap;sa.create=(e,t)=>new sa({values:e,typeName:oe.ZodNativeEnum,...ge(t)});var fr=class extends ve{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Q.promise&&t.common.async===!1)return Z(t,{code:q.invalid_type,expected:Q.promise,received:t.parsedType}),le;const r=t.parsedType===Q.promise?t.data:Promise.resolve(t.data);return qe(r.then(a=>this._def.type.parseAsync(a,{path:t.path,errorMap:t.common.contextualErrorMap})))}};fr.create=(e,t)=>new fr({type:e,typeName:oe.ZodPromise,...ge(t)});var ct=class extends ve{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===oe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),a=this._def.effect||null,i={addIssue:n=>{Z(r,n),n.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),a.type==="preprocess"){const n=a.transform(r.data,i);if(r.common.async)return Promise.resolve(n).then(async s=>{if(t.value==="aborted")return le;const u=await this._def.schema._parseAsync({data:s,path:r.path,parent:r});return u.status==="aborted"?le:u.status==="dirty"||t.value==="dirty"?lr(u.value):u});{if(t.value==="aborted")return le;const s=this._def.schema._parseSync({data:n,path:r.path,parent:r});return s.status==="aborted"?le:s.status==="dirty"||t.value==="dirty"?lr(s.value):s}}if(a.type==="refinement"){const n=s=>{const u=a.refinement(s,i);if(r.common.async)return Promise.resolve(u);if(u instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?le:(s.status==="dirty"&&t.dirty(),n(s.value),{status:t.value,value:s.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>s.status==="aborted"?le:(s.status==="dirty"&&t.dirty(),n(s.value).then(()=>({status:t.value,value:s.value}))))}if(a.type==="transform")if(r.common.async===!1){const n=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Jt(n))return n;const s=a.transform(n.value,i);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:s}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(n=>Jt(n)?Promise.resolve(a.transform(n.value,i)).then(s=>({status:t.value,value:s})):n);xe.assertNever(a)}};ct.create=(e,t,r)=>new ct({schema:e,typeName:oe.ZodEffects,effect:t,...ge(r)});ct.createWithPreprocess=(e,t,r)=>new ct({schema:t,effect:{type:"preprocess",transform:e},typeName:oe.ZodEffects,...ge(r)});var vt=class extends ve{_parse(e){return this._getType(e)===Q.undefined?qe(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};vt.create=(e,t)=>new vt({innerType:e,typeName:oe.ZodOptional,...ge(t)});var Pt=class extends ve{_parse(e){return this._getType(e)===Q.null?qe(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Pt.create=(e,t)=>new Pt({innerType:e,typeName:oe.ZodNullable,...ge(t)});var oa=class extends ve{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===Q.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};oa.create=(e,t)=>new oa({innerType:e,typeName:oe.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...ge(t)});var ua=class extends ve{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},a=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Kr(a)?a.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new dt(r.common.issues)},input:r.data})})):{status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new dt(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};ua.create=(e,t)=>new ua({innerType:e,typeName:oe.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...ge(t)});var Xa=class extends ve{_parse(e){if(this._getType(e)!==Q.nan){const r=this._getOrReturnCtx(e);return Z(r,{code:q.invalid_type,expected:Q.nan,received:r.parsedType}),le}return{status:"valid",value:e.data}}};Xa.create=e=>new Xa({typeName:oe.ZodNaN,...ge(e)});var Pw=Symbol("zod_brand"),ss=class extends ve{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}},os=class ih extends ve{_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.common.async)return(async()=>{const n=await this._def.in._parseAsync({data:a.data,path:a.path,parent:a});return n.status==="aborted"?le:n.status==="dirty"?(r.dirty(),lr(n.value)):this._def.out._parseAsync({data:n.value,path:a.path,parent:a})})();{const i=this._def.in._parseSync({data:a.data,path:a.path,parent:a});return i.status==="aborted"?le:i.status==="dirty"?(r.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:a.path,parent:a})}}static create(t,r){return new ih({in:t,out:r,typeName:oe.ZodPipeline})}},la=class extends ve{_parse(e){const t=this._def.innerType._parse(e),r=a=>(Jt(a)&&(a.value=Object.freeze(a.value)),a);return Kr(t)?t.then(a=>r(a)):r(t)}unwrap(){return this._def.innerType}};la.create=(e,t)=>new la({innerType:e,typeName:oe.ZodReadonly,...ge(t)});function Xu(e,t){const r=typeof e=="function"?e(t):typeof e=="string"?{message:e}:e;return typeof r=="string"?{message:r}:r}function nh(e,t={},r){return e?hr.create().superRefine((a,i)=>{var n,s;const u=e(a);if(u instanceof Promise)return u.then(d=>{var c,f;if(!d){const m=Xu(t,a),g=(f=(c=m.fatal)!==null&&c!==void 0?c:r)!==null&&f!==void 0?f:!0;i.addIssue({code:"custom",...m,fatal:g})}});if(!u){const d=Xu(t,a),c=(s=(n=d.fatal)!==null&&n!==void 0?n:r)!==null&&s!==void 0?s:!0;i.addIssue({code:"custom",...d,fatal:c})}}):hr.create()}var Uw={object:rt.lazycreate},oe;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(oe||(oe={}));var jw=(e,t={message:`Input not instance of ${e.name}`})=>nh(r=>r instanceof e,t),sh=pr.create,oh=Qr.create,Ww=Xa.create,Vw=Jr.create,uh=Xr.create,Lw=Yr.create,qw=Za.create,Fw=ea.create,Gw=ta.create,Hw=hr.create,Zw=Qt.create,Kw=Ct.create,Qw=Ka.create,Jw=Xt.create,Xw=rt.create,Yw=rt.strictCreate,eb=ra.create,tb=Xp.create,rb=aa.create,ab=Dt.create,ib=th.create,nb=Qa.create,sb=Ja.create,ob=rh.create,ub=ia.create,lb=na.create,db=pa.create,cb=sa.create,pb=fr.create,Yu=ct.create,hb=vt.create,fb=Pt.create,mb=ct.createWithPreprocess,gb=os.create,yb=()=>sh().optional(),_b=()=>oh().optional(),vb=()=>uh().optional(),wb={string:e=>pr.create({...e,coerce:!0}),number:e=>Qr.create({...e,coerce:!0}),boolean:e=>Xr.create({...e,coerce:!0}),bigint:e=>Jr.create({...e,coerce:!0}),date:e=>Yr.create({...e,coerce:!0})},bb=le,je=Object.freeze({__proto__:null,defaultErrorMap:cr,setErrorMap:mw,getErrorMap:Fa,makeIssue:Ga,EMPTY_PATH:gw,addIssueToContext:Z,ParseStatus:Fe,INVALID:le,DIRTY:lr,OK:qe,isAborted:Nn,isDirty:Bn,isValid:Jt,isAsync:Kr,get util(){return xe},get objectUtil(){return Rn},ZodParsedType:Q,getParsedType:Tt,ZodType:ve,datetimeRegex:Qp,ZodString:pr,ZodNumber:Qr,ZodBigInt:Jr,ZodBoolean:Xr,ZodDate:Yr,ZodSymbol:Za,ZodUndefined:ea,ZodNull:ta,ZodAny:hr,ZodUnknown:Qt,ZodNever:Ct,ZodVoid:Ka,ZodArray:Xt,ZodObject:rt,ZodUnion:ra,ZodDiscriminatedUnion:Xp,ZodIntersection:aa,ZodTuple:Dt,ZodRecord:th,ZodMap:Qa,ZodSet:Ja,ZodFunction:rh,ZodLazy:ia,ZodLiteral:na,ZodEnum:pa,ZodNativeEnum:sa,ZodPromise:fr,ZodEffects:ct,ZodTransformer:ct,ZodOptional:vt,ZodNullable:Pt,ZodDefault:oa,ZodCatch:ua,ZodNaN:Xa,BRAND:Pw,ZodBranded:ss,ZodPipeline:os,ZodReadonly:la,custom:nh,Schema:ve,ZodSchema:ve,late:Uw,get ZodFirstPartyTypeKind(){return oe},coerce:wb,any:Hw,array:Jw,bigint:Vw,boolean:uh,date:Lw,discriminatedUnion:tb,effect:Yu,enum:db,function:ob,instanceof:jw,intersection:rb,lazy:ub,literal:lb,map:nb,nan:Ww,nativeEnum:cb,never:Kw,null:Gw,nullable:fb,number:oh,object:Xw,oboolean:vb,onumber:_b,optional:hb,ostring:yb,pipeline:gb,preprocess:mb,promise:pb,record:ib,set:sb,strictObject:Yw,string:sh,symbol:qw,transformer:Yu,tuple:ab,undefined:Fw,union:eb,unknown:Zw,void:Qw,NEVER:bb,ZodIssueCode:q,quotelessJson:fw,ZodError:dt}),el={name:"@imgly/background-removal",version:"1.7.0"},$b=je.object({publicPath:je.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(e=>e.replace("${PACKAGE_NAME}",el.name).replace("${PACKAGE_VERSION}",el.version)),debug:je.boolean().default(!1).describe("Whether to enable debug logging."),rescale:je.boolean().default(!0).describe("Whether to rescale the image."),device:je.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:je.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:je.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:je.function().args(je.string(),je.number(),je.number()).returns(je.void()).describe("Progress callback.").optional(),model:je.preprocess(e=>{switch(e){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return e}},je.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:je.object({format:je.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:je.number().default(.8)}).default({})}).default({}).transform(e=>(e.debug&&console.log("Config:",e),e.debug&&!e.progress&&(e.progress=e.progress??((t,r,a)=>{console.debug(`Downloading ${t}: ${r} of ${a}`)}),crossOriginIsolated||e.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),e));function xb(e){return $b.parse(e??{})}var kb=si(oi());async function Sb(e){e.debug&&console.debug("Loading model...",e.model);const t=e.model,a=await(await Vp(`/models/${t}`,e)).arrayBuffer();return await pw(a,e)}async function Tb(e){e=xb(e);const t=await Sb(e);return{config:e,session:{base:t}}}async function Cb(e,t,r){const[i,n,s]=e.shape,u=!1;let d=Ku(e,1024,1024,u);const c=ow(d);let f=await hw(r.base,[["input",c]],["output"],t),m=(0,kb.default)(f[0].data,[1024,1024,1]),g=lw(m);return t.rescale?(g=Ku(g,n,i,u),[g,e]):[g,d]}var Ib=ew(Tb,e=>JSON.stringify(e));async function Eb(e,t){const{config:r,session:a}=await Ib(t);r.progress&&r.progress("compute:decode",0,4);const i=await uw(e,r);r.progress?.("compute:inference",1,4);const[n,s]=await Cb(i,r,a);r.progress?.("compute:mask",2,4);const u=s,[d,c]=u.shape,f=d*c;for(let g=0;g<f;g+=1)u.data[4*g+3]=n.data[g];r.progress?.("compute:encode",3,4);const m=await rw(u,r.output.quality,r.output.format);return r.progress?.("compute:encode",4,4),m}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*//*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var us=Object.defineProperty,zb=Object.getOwnPropertyDescriptor,Ab=Object.getOwnPropertyNames,Ob=Object.prototype.hasOwnProperty,Rb=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),ha=(e,t)=>{for(var r in t)us(e,r,{get:t[r],enumerable:!0})},Nb=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ab(t))!Ob.call(e,i)&&i!==r&&us(e,i,{get:()=>t[i],enumerable:!(a=zb(t,i))||a.enumerable});return e},Ya=e=>Nb(us({},"__esModule",{value:!0}),e),zr,Nt,Kt,tl,lh,dh=L(()=>{zr=new Map,Nt=[],Kt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=zr.get(e);if(a===void 0)zr.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Nt.indexOf(e);i!==-1&&Nt.splice(i,1);for(let n=0;n<Nt.length;n++)if(zr.get(Nt[n]).priority<=r){Nt.splice(n,0,e);return}Nt.push(e)}return}throw new TypeError("not a valid backend")},tl=async e=>{let t=zr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},lh=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),a=r.length===0?Nt:r,i,n=[],s=new Set;for(let d of a){let c=await tl(d);typeof c=="string"?n.push({name:d,err:c}):(i||(i=c),i===c&&s.add(d))}if(!i)throw new Error(`no available backend found. ERR: ${n.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:c}of n)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${c}`);let u=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[i,new Proxy(e,{get:(d,c)=>c==="executionProviders"?u:Reflect.get(d,c)})]}}),Bb=L(()=>{dh()}),ch,Mb=L(()=>{ch="1.21.0"}),Mi,et,ph=L(()=>{Mb(),Mi="warning",et={wasm:{},webgl:{},webgpu:{},versions:{common:ch},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Mi=e}},get logLevel(){return Mi}},Object.defineProperty(et,"logLevel",{enumerable:!0})}),Ce,Db=L(()=>{ph(),Ce=et}),hh,fh,Pb=L(()=>{hh=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let i,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],n=e.dims[3]):(i=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,d,c;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let f=n*i,m=0,g=f,_=f*2,v=-1;s==="RGBA"?(m=0,g=f,_=f*2,v=f*3):s==="RGB"?(m=0,g=f,_=f*2):s==="RBG"&&(m=0,_=f,g=f*2);for(let w=0;w<n;w++)for(let x=0;x<i;x++){let $=(e.data[m++]-c[0])*d[0],b=(e.data[g++]-c[1])*d[1],S=(e.data[_++]-c[2])*d[2],T=v===-1?255:(e.data[v++]-c[3])*d[3];a.fillStyle="rgba("+$+","+b+","+S+","+T+")",a.fillRect(x,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},fh=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let i,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],n=e.dims[1],s=e.dims[3]):(i=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,c,f;d===void 0||d.mean===void 0?c=[255,255,255,255]:typeof d.mean=="number"?c=[d.mean,d.mean,d.mean,d.mean]:(c=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(c[3]=d.mean[3])),d===void 0||d.bias===void 0?f=[0,0,0,0]:typeof d.bias=="number"?f=[d.bias,d.bias,d.bias,d.bias]:(f=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(f[3]=d.bias[3]));let m=n*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,v=1,w=2,x=3,$=0,b=m,S=m*2,T=-1;u==="RGBA"?($=0,b=m,S=m*2,T=m*3):u==="RGB"?($=0,b=m,S=m*2):u==="RBG"&&($=0,S=m,b=m*2),a=r.createImageData(i,n);for(let I=0;I<n*i;_+=g,v+=g,w+=g,x+=g,I++)a.data[_]=(e.data[$++]-f[0])*c[0],a.data[v]=(e.data[b++]-f[1])*c[1],a.data[w]=(e.data[S++]-f[2])*c[2],a.data[x]=T===-1?255:(e.data[T++]-f[3])*c[3]}else throw new Error("Can not access image data");return a}}),Ta,mh,gh,yh,_h,vh,Ub=L(()=>{ls(),Ta=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,i=t.norm??{mean:255,bias:0},n,s;typeof i.mean=="number"?n=[i.mean,i.mean,i.mean,i.mean]:n=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=r*a,f=d==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),m=4,g=0,_=1,v=2,w=3,x=0,$=c,b=c*2,S=-1;u==="RGB"&&(m=3,g=0,_=1,v=2,w=-1),d==="RGBA"?S=c*3:d==="RBG"?(x=0,b=c,$=c*2):d==="BGR"&&(b=0,$=c,x=c*2);for(let T=0;T<c;T++,g+=m,v+=m,_+=m,w+=m)f[x++]=(e[g]+s[0])/n[0],f[$++]=(e[_]+s[1])/n[1],f[b++]=(e[v]+s[2])/n[2],S!==-1&&w!==-1&&(f[S++]=(e[w]+s[3])/n[3]);return d==="RGBA"?new Ke("float32",f,[1,4,r,a]):new Ke("float32",f,[1,3,r,a])},mh=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=d();f.width=e.width,f.height=e.height;let m=c(f);if(m!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=_}else u.tensorFormat="RGBA",u.height=g,u.width=_;m.drawImage(e,0,0),s=m.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(a){let f,m;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,m=t.resizedWidth):(f=e.height,m=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=f,u.width=m,t!==void 0){let g=d();g.width=m,g.height=f;let _=c(g);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,m,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=d();f.width=e.width,f.height=e.height;let m=c(f);if(m!=null){let g=e.height,_=e.width;return m.drawImage(e,0,0,_,g),s=m.getImageData(0,0,_,g).data,u.height=g,u.width=_,Ta(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((f,m)=>{let g=d(),_=c(g);if(!e||!_)return m();let v=new Image;v.crossOrigin="Anonymous",v.src=e,v.onload=()=>{g.width=v.width,g.height=v.height,_.drawImage(v,0,0,g.width,g.height);let w=_.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,f(Ta(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Ta(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},gh=(e,t)=>{let{width:r,height:a,download:i,dispose:n}=t,s=[1,a,r,4];return new Ke({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:n})},yh=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:n}=t;return new Ke({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:i,dispose:n})},_h=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:n}=t;return new Ke({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:i,dispose:n})},vh=(e,t,r)=>new Ke({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Gt,Lr,Di,wh,jb=L(()=>{Gt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Lr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Di=!1,wh=()=>{if(!Di){Di=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(Gt.set("int64",BigInt64Array),Lr.set(BigInt64Array,"int64")),t&&(Gt.set("uint64",BigUint64Array),Lr.set(BigUint64Array,"uint64")),a?(Gt.set("float16",r),Lr.set(r,"float16")):Gt.set("float16",Uint16Array)}}}),bh,$h,Wb=L(()=>{ls(),bh=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},$h=(e,t)=>{switch(e.location){case"cpu":return new Ke(e.type,e.data,t);case"cpu-pinned":return new Ke({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ke({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ke({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ke({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ke,ls=L(()=>{Pb(),Ub(),jb(),Wb(),Ke=class{constructor(e,t,r){wh();let a,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=Gt.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(a=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=Gt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${d}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")a="string",s=e;else if(d==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let d=Lr.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=d,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");i=u,this.cpuData=s,this.dataLocation="cpu"}let n=bh(i);if(this.cpuData&&n!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=i,this.size=n}static async fromImage(e,t){return mh(e,t)}static fromTexture(e,t){return gh(e,t)}static fromGpuBuffer(e,t){return yh(e,t)}static fromMLTensor(e,t){return _h(e,t)}static fromPinnedBuffer(e,t,r){return vh(e,t,r)}toDataURL(e){return hh(this,e)}toImageData(e){return fh(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return $h(this,e)}}}),lt,xh=L(()=>{ls(),lt=Ke}),da,Pi,pt,tt,kh=L(()=>{ph(),da=(e,t)=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||console.timeStamp(`${e}::ORT::${t}`)},Pi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(n+=`::${t}`),da("CPU",n);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},pt=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Pi("BEGIN",e)},tt=e=>{(typeof et.trace>"u"?!et.wasm.trace:!et.trace)||Pi("END",e)}}),Sh,Vb=L(()=>{dh(),xh(),kh(),Sh=class Th{constructor(t){this.handler=t}async run(t,r,a){pt();let i={},n={};if(typeof t!="object"||t===null||t instanceof lt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof lt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let c of r){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);i[c]=null}if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,f=Object.getOwnPropertyNames(r);for(let m of this.outputNames)if(f.indexOf(m)!==-1){let g=r[m];(g===null||g instanceof lt)&&(c=!0,s=!1,i[m]=g)}if(c){if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(s)for(let c of this.outputNames)i[c]=null;let u=await this.handler.run(t,i,n),d={};for(let c in u)if(Object.hasOwnProperty.call(u,c)){let f=u[c];f instanceof lt?d[c]=f:d[c]=new lt(f.type,f.data,f.dims)}return tt(),d}async release(){return this.handler.dispose()}static async create(t,r,a,i){pt();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,m=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(m=r,!Number.isSafeInteger(m))throw new RangeError("'byteOffset' must be an integer.");if(m<0||m>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-m,typeof a=="number"){if(g=a,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||m+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-m}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(f,m,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,d]=await lh(s),c=await u.createInferenceSessionHandler(n,d);return tt(),new Th(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),ds,Lb=L(()=>{Vb(),ds=Sh}),qb=L(()=>{}),Fb=L(()=>{}),Gb=L(()=>{}),Hb=L(()=>{}),Ch={};ha(Ch,{InferenceSession:()=>ds,TRACE:()=>da,TRACE_FUNC_BEGIN:()=>pt,TRACE_FUNC_END:()=>tt,Tensor:()=>lt,env:()=>Ce,registerBackend:()=>Kt});var ht=L(()=>{Bb(),Db(),Lb(),xh(),qb(),Fb(),kh(),Gb(),Hb()}),cs=L(()=>{}),Ih={};ha(Ih,{default:()=>Eh});var Ui,ji,Eh,Zb=L(()=>{Rg(),rr(),ps(),Ui="ort-wasm-proxy-worker",ji=globalThis.self?.name===Ui,ji&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":hs(r.wasm).then(()=>{As(r).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})})},a=>{postMessage({type:t,err:a})});break;case"init-ep":{let{epName:a,env:i}=r;Os(i,a).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:a}=r,i=ni(a);postMessage({type:t,out:i});break}case"create":{let{model:a,options:i}=r;Rs(a,i).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ns(r),postMessage({type:t});break;case"run":{let{sessionId:a,inputIndices:i,inputs:n,outputIndices:s,options:u}=r;Bs(a,i,n,s,new Array(s.length).fill(null),u).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},Ds([...n,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":Ms(r),postMessage({type:t});break;default:}}catch(a){postMessage({type:t,err:a})}}),Eh=ji?null:e=>new Worker(e??Ze,{type:"module",name:Ui})}),zh={};ha(zh,{default:()=>Ah});var Wi,Vi,Ah,rl,Kb=L(()=>{Vi=(Wi=import.meta.url,async function(e={}){var t,r,a=e,i=new Promise((o,l)=>{t=o,r=l}),n=typeof window=="object",s=typeof WorkerGlobalScope<"u",u=s&&self.name?.startsWith("em-pthread");a.mountExternalData=(o,l)=>{o.startsWith("./")&&(o=o.substring(2)),(a.Bd||(a.Bd=new Map)).set(o,l)},a.unmountExternalData=()=>{delete a.Bd};var d=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let c=()=>{let o=(p,h,y)=>(...k)=>{let C=mt,z=h?.();k=p(...k);let R=h?.();return z!==R&&(p=R,y(z),h=y=null),mt!=C?new Promise((W,H)=>{Si={resolve:W,reject:H}}):k},l=p=>async(...h)=>{try{if(a.Cd)throw Error("Session already started");let y=a.Cd={be:h[0],errors:[]},k=await p(...h);if(a.Cd!==y)throw Error("Session mismatch");a.Dd?.flush();let C=y.errors;if(0<C.length){let z=await Promise.all(C);if(z=z.filter(R=>R),0<z.length)throw Error(z.join(`
`))}return k}finally{a.Cd=null}};a._OrtCreateSession=o(a._OrtCreateSession,()=>a._OrtCreateSession,p=>a._OrtCreateSession=p),a._OrtRun=l(o(a._OrtRun,()=>a._OrtRun,p=>a._OrtRun=p)),a._OrtRunWithBinding=l(o(a._OrtRunWithBinding,()=>a._OrtRunWithBinding,p=>a._OrtRunWithBinding=p)),a._OrtBindInput=o(a._OrtBindInput,()=>a._OrtBindInput,p=>a._OrtBindInput=p),c=void 0};a.jsepInit=(o,l)=>{if(c?.(),o==="webgpu"){[a.Dd,a.Rd,a.Vd,a.Hd,a.Ud,a.hc,a.Wd,a.Zd,a.Sd,a.Td,a.Xd]=l;let p=a.Dd;a.jsepRegisterBuffer=(h,y,k,C)=>p.registerBuffer(h,y,k,C),a.jsepGetBuffer=h=>p.getBuffer(h),a.jsepCreateDownloader=(h,y,k)=>p.createDownloader(h,y,k),a.jsepOnCreateSession=h=>{p.onCreateSession(h)},a.jsepOnReleaseSession=h=>{p.onReleaseSession(h)},a.jsepOnRunStart=h=>p.onRunStart(h),a.$d=(h,y)=>{p.upload(h,y)}}else if(o==="webnn"){[a.Dd,a.Yd,a.Id,a.jsepEnsureTensor,a.Jd,a.jsepDownloadTensor]=l,a.jsepReleaseTensorId=a.Id,a.jsepUploadTensor=a.Jd;let p=a.Dd;a.jsepOnRunStart=h=>p.onRunStart(h),a.jsepOnRunEnd=p.onRunEnd.bind(p),a.jsepRegisterMLContext=(h,y)=>{p.registerMLContext(h,y)},a.jsepOnReleaseSession=h=>{p.onReleaseSession(h)},a.jsepCreateMLTensorDownloader=(h,y)=>p.createMLTensorDownloader(h,y),a.jsepRegisterMLTensor=(h,y,k,C)=>p.registerMLTensor(h,y,k,C),a.jsepCreateMLContext=h=>p.createMLContext(h),a.jsepRegisterMLConstant=(h,y,k,C,z)=>p.registerMLConstant(h,y,k,C,z,a.Bd),a.jsepRegisterGraphInput=p.registerGraphInput.bind(p),a.jsepIsGraphInput=p.isGraphInput.bind(p),a.jsepCreateTemporaryTensor=p.createTemporaryTensor.bind(p)}};var f,m,g=Object.assign({},a),_=(o,l)=>{throw l},v="";(n||s)&&(s?v=self.location.href:typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),Wi&&(v=Wi),v=v.startsWith("blob:")?"":v.slice(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(m=o=>{var l=new XMLHttpRequest;return l.open("GET",o,!1),l.responseType="arraybuffer",l.send(null),new Uint8Array(l.response)}),f=async o=>{if(_e(o))return new Promise((p,h)=>{var y=new XMLHttpRequest;y.open("GET",o,!0),y.responseType="arraybuffer",y.onload=()=>{y.status==200||y.status==0&&y.response?p(y.response):h(y.status)},y.onerror=h,y.send(null)});var l=await fetch(o,{credentials:"same-origin"});if(l.ok)return l.arrayBuffer();throw Error(l.status+" : "+l.url)});var w=console.log.bind(console),x=console.error.bind(console),$=w,b=x;Object.assign(a,g),g=null;var S,T,I,A,E,D,M,F,P,ie,V,he,ye,K=a.wasmBinary,me=!1,_e=o=>o.startsWith("file://");function J(){return S.buffer!=A.buffer&&Pe(),A}function we(){return S.buffer!=A.buffer&&Pe(),E}function j(){return S.buffer!=A.buffer&&Pe(),D}function G(){return S.buffer!=A.buffer&&Pe(),M}function N(){return S.buffer!=A.buffer&&Pe(),F}function ae(){return S.buffer!=A.buffer&&Pe(),P}function Ae(){return S.buffer!=A.buffer&&Pe(),ie}function Ge(){return S.buffer!=A.buffer&&Pe(),ye}if(u){let o=function(l){try{var p=l.data,h=p.yd;if(h==="load"){let y=[];self.onmessage=k=>y.push(k),self.startWorker=()=>{postMessage({yd:"loaded"});for(let k of y)o(k);self.onmessage=o};for(let k of p.Od)a[k]&&!a[k].proxy||(a[k]=(...C)=>{postMessage({yd:"callHandler",Nd:k,args:C})},k=="print"&&($=a[k]),k=="printErr"&&(b=a[k]));S=p.he,Pe(),Be(p.ie)}else if(h==="run"){Hg(p.xd),Ei(p.xd,0,0,1,0,0),Fs(),xi(p.xd),Oe||(jo(),Oe=!0);try{Zg(p.de,p.Fd)}catch(y){if(y!="unwind")throw y}}else p.target!=="setimmediate"&&(h==="checkMailbox"?Oe&&ga():h&&(b(`worker: received unknown command ${h}`),b(p)))}catch(y){throw Wo(),y}};var Be,Oe=!1;b=function(...l){l=l.join(" "),console.error(l)},self.alert=function(...l){postMessage({yd:"alert",text:l.join(" "),fe:ka()})},self.onunhandledrejection=l=>{throw l.reason||l},self.onmessage=o}function Pe(){var o=S.buffer;a.HEAP8=A=new Int8Array(o),a.HEAP16=D=new Int16Array(o),a.HEAPU8=E=new Uint8Array(o),a.HEAPU16=M=new Uint16Array(o),a.HEAP32=F=new Int32Array(o),a.HEAPU32=P=new Uint32Array(o),a.HEAPF32=ie=new Float32Array(o),a.HEAPF64=ye=new Float64Array(o),a.HEAP64=V=new BigInt64Array(o),a.HEAPU64=he=new BigUint64Array(o)}function fa(){u?startWorker(a):U.Bb()}u||(S=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Pe());var wr,br=0,$r=null;function Ps(){if(--br==0&&$r){var o=$r;$r=null,o()}}function bt(o){throw b(o="Aborted("+o+")"),me=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),r(o),o}function Us(){return{a:{Ta:Gg,Va:Fg,W:Kg,la:Qg,b:Xg,u:Yg,R:ey,Za:ty,d:ry,pb:Ks,g:Jg,T:Xs,Ga:Ys,lb:to,nb:ro,Ha:ao,Ea:io,wb:no,Da:so,pa:oo,mb:uo,jb:lo,Fa:co,kb:po,Ma:ay,za:iy,eb:ny,cb:oy,ya:ly,V:dy,N:cy,db:py,ma:vy,fb:wy,zb:by,hb:$y,qb:xy,ab:ky,Aa:Sy,yb:xi,Ja:Ty,S:Cy,Wa:Iy,$:Ay,G:Oy,E:Ny,m:wi,H:By,B:Py,X:Uy,J:jy,v:Wy,O:Vy,D:Ly,t:qy,A:Fy,z:Gy,w:Hy,r:Zy,tb:Ky,ub:Qy,vb:Jy,rb:To,sb:Co,bb:Io,Oa:Yy,La:t_,y:r_,ja:a_,Ba:i_,Ka:e_,qa:n_,Ia:s_,ib:o_,U:Xy,fa:u_,Sa:l_,gb:d_,Qa:c_,Pa:p_,Ab:Oo,Ca:Ro,ob:fi,aa:No,oa:Bo,xb:Mo,na:Do,$a:U_,ia:X_,sa:a0,ga:D_,da:F_,ua:t0,p:B_,e:v_,c:y_,ea:L_,f:w_,n:$_,k:A_,Y:k_,ka:O_,j:M_,wa:V_,Ra:s0,ca:Q_,Ua:n0,P:q_,K:T_,_:K_,Q:P_,Z:Y_,x:S_,l:__,va:Z_,i:g_,h:x_,ra:i0,ta:r0,o:b_,q:C_,s:E_,I:z_,C:N_,L:R_,xa:W_,_a:j_,F:J_,Ya:G_,ba:e0,M:I_,Xa:H_,ha:f_,a:S,Na:hi}}}var di={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(o,l,p,h,y)=>{if(a===void 0||!a.Bd)return 1;if((o=Re(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=a.Bd.get(o)))return 2;if(l=Number(l>>>0),p=Number(p>>>0),h=Number(h>>>0),l+p>o.byteLength)return 3;try{let k=o.subarray(l,l+p);switch(y){case 0:we().set(k,h>>>0);break;case 1:a.$d(h,k);break;default:return 4}return 0}catch{return 4}},1320198:(o,l,p)=>{a.Jd(o,we().subarray(l>>>0,l+p>>>0))},1320261:()=>a.Yd(),1320302:o=>{a.Id(o)},1320338:()=>{a.Sd()},1320369:()=>{a.Td()},1320398:()=>{a.Xd()},1320423:o=>a.Rd(o),1320456:o=>a.Vd(o),1320488:(o,l,p)=>{a.Hd(Number(o),Number(l),Number(p),!0)},1320551:(o,l,p)=>{a.Hd(Number(o),Number(l),Number(p))},1320608:o=>{a.hc("Abs",o,void 0)},1320659:o=>{a.hc("Neg",o,void 0)},1320710:o=>{a.hc("Floor",o,void 0)},1320763:o=>{a.hc("Ceil",o,void 0)},1320815:o=>{a.hc("Reciprocal",o,void 0)},1320873:o=>{a.hc("Sqrt",o,void 0)},1320925:o=>{a.hc("Exp",o,void 0)},1320976:o=>{a.hc("Erf",o,void 0)},1321027:o=>{a.hc("Sigmoid",o,void 0)},1321082:(o,l,p)=>{a.hc("HardSigmoid",o,{alpha:l,beta:p})},1321161:o=>{a.hc("Log",o,void 0)},1321212:o=>{a.hc("Sin",o,void 0)},1321263:o=>{a.hc("Cos",o,void 0)},1321314:o=>{a.hc("Tan",o,void 0)},1321365:o=>{a.hc("Asin",o,void 0)},1321417:o=>{a.hc("Acos",o,void 0)},1321469:o=>{a.hc("Atan",o,void 0)},1321521:o=>{a.hc("Sinh",o,void 0)},1321573:o=>{a.hc("Cosh",o,void 0)},1321625:o=>{a.hc("Asinh",o,void 0)},1321678:o=>{a.hc("Acosh",o,void 0)},1321731:o=>{a.hc("Atanh",o,void 0)},1321784:o=>{a.hc("Tanh",o,void 0)},1321836:o=>{a.hc("Not",o,void 0)},1321887:(o,l,p)=>{a.hc("Clip",o,{min:l,max:p})},1321956:o=>{a.hc("Clip",o,void 0)},1322008:(o,l)=>{a.hc("Elu",o,{alpha:l})},1322066:o=>{a.hc("Gelu",o,void 0)},1322118:o=>{a.hc("Relu",o,void 0)},1322170:(o,l)=>{a.hc("LeakyRelu",o,{alpha:l})},1322234:(o,l)=>{a.hc("ThresholdedRelu",o,{alpha:l})},1322304:(o,l)=>{a.hc("Cast",o,{to:l})},1322362:o=>{a.hc("Add",o,void 0)},1322413:o=>{a.hc("Sub",o,void 0)},1322464:o=>{a.hc("Mul",o,void 0)},1322515:o=>{a.hc("Div",o,void 0)},1322566:o=>{a.hc("Pow",o,void 0)},1322617:o=>{a.hc("Equal",o,void 0)},1322670:o=>{a.hc("Greater",o,void 0)},1322725:o=>{a.hc("GreaterOrEqual",o,void 0)},1322787:o=>{a.hc("Less",o,void 0)},1322839:o=>{a.hc("LessOrEqual",o,void 0)},1322898:(o,l,p,h,y)=>{a.hc("ReduceMean",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323073:(o,l,p,h,y)=>{a.hc("ReduceMax",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323247:(o,l,p,h,y)=>{a.hc("ReduceMin",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323421:(o,l,p,h,y)=>{a.hc("ReduceProd",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323596:(o,l,p,h,y)=>{a.hc("ReduceSum",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323770:(o,l,p,h,y)=>{a.hc("ReduceL1",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323943:(o,l,p,h,y)=>{a.hc("ReduceL2",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324116:(o,l,p,h,y)=>{a.hc("ReduceLogSum",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324293:(o,l,p,h,y)=>{a.hc("ReduceSumSquare",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324473:(o,l,p,h,y)=>{a.hc("ReduceLogSumExp",o,{keepDims:!!l,noopWithEmptyAxes:!!p,axes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324653:o=>{a.hc("Where",o,void 0)},1324706:(o,l,p)=>{a.hc("Transpose",o,{perm:l?Array.from(N().subarray(Number(l)>>>0,Number(p)>>>0)):[]})},1324830:(o,l,p,h)=>{a.hc("DepthToSpace",o,{blocksize:l,mode:Re(p),format:h?"NHWC":"NCHW"})},1324963:(o,l,p,h)=>{a.hc("DepthToSpace",o,{blocksize:l,mode:Re(p),format:h?"NHWC":"NCHW"})},1325096:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te,Xe)=>{a.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:l,dilations:[p],group:h,kernelShape:[y],pads:[k,C],strides:[z],wIsConst:()=>!!J()[W>>>0],outputPadding:H?Array.from(N().subarray(Number(H)>>>0,Number(re)>>>0)):[],outputShape:ce?Array.from(N().subarray(Number(ce)>>>0,Number(Te)>>>0)):[],activation:Re(Xe)})},1325529:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)=>{a.hc("ConvTranspose",o,{format:z?"NHWC":"NCHW",autoPad:l,dilations:Array.from(N().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:h,kernelShape:Array.from(N().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(N().subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(N().subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),wIsConst:()=>!!J()[R>>>0],outputPadding:W?Array.from(N().subarray(Number(W)>>>0,Number(H)>>>0)):[],outputShape:re?Array.from(N().subarray(Number(re)>>>0,Number(ce)>>>0)):[],activation:Re(Te)})},1326190:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te,Xe)=>{a.hc("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:l,dilations:[p],group:h,kernelShape:[y],pads:[k,C],strides:[z],wIsConst:()=>!!J()[W>>>0],outputPadding:H?Array.from(N().subarray(Number(H)>>>0,Number(re)>>>0)):[],outputShape:ce?Array.from(N().subarray(Number(ce)>>>0,Number(Te)>>>0)):[],activation:Re(Xe)})},1326623:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)=>{a.hc("ConvTranspose",o,{format:z?"NHWC":"NCHW",autoPad:l,dilations:Array.from(N().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:h,kernelShape:Array.from(N().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(N().subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(N().subarray(Number(C)>>>0,2+(Number(C)>>>0)>>>0)),wIsConst:()=>!!J()[R>>>0],outputPadding:W?Array.from(N().subarray(Number(W)>>>0,Number(H)>>>0)):[],outputShape:re?Array.from(N().subarray(Number(re)>>>0,Number(ce)>>>0)):[],activation:Re(Te)})},1327284:(o,l)=>{a.hc("GlobalAveragePool",o,{format:l?"NHWC":"NCHW"})},1327375:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)=>{a.hc("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:l,ceil_mode:p,count_include_pad:h,storage_order:y,dilations:k?Array.from(N().subarray(Number(k)>>>0,Number(C)>>>0)):[],kernel_shape:z?Array.from(N().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(N().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:re?Array.from(N().subarray(Number(re)>>>0,Number(ce)>>>0)):[]})},1327854:(o,l)=>{a.hc("GlobalAveragePool",o,{format:l?"NHWC":"NCHW"})},1327945:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)=>{a.hc("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:l,ceil_mode:p,count_include_pad:h,storage_order:y,dilations:k?Array.from(N().subarray(Number(k)>>>0,Number(C)>>>0)):[],kernel_shape:z?Array.from(N().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(N().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:re?Array.from(N().subarray(Number(re)>>>0,Number(ce)>>>0)):[]})},1328424:(o,l)=>{a.hc("GlobalMaxPool",o,{format:l?"NHWC":"NCHW"})},1328511:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)=>{a.hc("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:l,ceil_mode:p,count_include_pad:h,storage_order:y,dilations:k?Array.from(N().subarray(Number(k)>>>0,Number(C)>>>0)):[],kernel_shape:z?Array.from(N().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(N().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:re?Array.from(N().subarray(Number(re)>>>0,Number(ce)>>>0)):[]})},1328986:(o,l)=>{a.hc("GlobalMaxPool",o,{format:l?"NHWC":"NCHW"})},1329073:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)=>{a.hc("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:l,ceil_mode:p,count_include_pad:h,storage_order:y,dilations:k?Array.from(N().subarray(Number(k)>>>0,Number(C)>>>0)):[],kernel_shape:z?Array.from(N().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(N().subarray(Number(W)>>>0,Number(H)>>>0)):[],strides:re?Array.from(N().subarray(Number(re)>>>0,Number(ce)>>>0)):[]})},1329548:(o,l,p,h,y)=>{a.hc("Gemm",o,{alpha:l,beta:p,transA:h,transB:y})},1329652:o=>{a.hc("MatMul",o,void 0)},1329706:(o,l,p,h)=>{a.hc("ArgMax",o,{keepDims:!!l,selectLastIndex:!!p,axis:h})},1329814:(o,l,p,h)=>{a.hc("ArgMin",o,{keepDims:!!l,selectLastIndex:!!p,axis:h})},1329922:(o,l)=>{a.hc("Softmax",o,{axis:l})},1329985:(o,l)=>{a.hc("Concat",o,{axis:l})},1330045:(o,l,p,h,y)=>{a.hc("Split",o,{axis:l,numOutputs:p,splitSizes:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1330201:o=>{a.hc("Expand",o,void 0)},1330255:(o,l)=>{a.hc("Gather",o,{axis:Number(l)})},1330326:(o,l)=>{a.hc("GatherElements",o,{axis:Number(l)})},1330405:(o,l)=>{a.hc("GatherND",o,{batch_dims:Number(l)})},1330484:(o,l,p,h,y,k,C,z,R,W,H)=>{a.hc("Resize",o,{antialias:l,axes:p?Array.from(N().subarray(Number(p)>>>0,Number(h)>>>0)):[],coordinateTransformMode:Re(y),cubicCoeffA:k,excludeOutside:C,extrapolationValue:z,keepAspectRatioPolicy:Re(R),mode:Re(W),nearestMode:Re(H)})},1330846:(o,l,p,h,y,k,C)=>{a.hc("Slice",o,{starts:l?Array.from(N().subarray(Number(l)>>>0,Number(p)>>>0)):[],ends:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[],axes:k?Array.from(N().subarray(Number(k)>>>0,Number(C)>>>0)):[]})},1331110:o=>{a.hc("Tile",o,void 0)},1331162:(o,l,p)=>{a.hc("InstanceNormalization",o,{epsilon:l,format:p?"NHWC":"NCHW"})},1331276:(o,l,p)=>{a.hc("InstanceNormalization",o,{epsilon:l,format:p?"NHWC":"NCHW"})},1331390:o=>{a.hc("Range",o,void 0)},1331443:(o,l)=>{a.hc("Einsum",o,{equation:Re(l)})},1331524:(o,l,p,h,y)=>{a.hc("Pad",o,{mode:l,value:p,pads:h?Array.from(N().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1331667:(o,l,p,h,y,k)=>{a.hc("BatchNormalization",o,{epsilon:l,momentum:p,spatial:!!y,trainingMode:!!h,format:k?"NHWC":"NCHW"})},1331836:(o,l,p,h,y,k)=>{a.hc("BatchNormalization",o,{epsilon:l,momentum:p,spatial:!!y,trainingMode:!!h,format:k?"NHWC":"NCHW"})},1332005:(o,l,p)=>{a.hc("CumSum",o,{exclusive:Number(l),reverse:Number(p)})},1332102:(o,l,p)=>{a.hc("DequantizeLinear",o,{axis:l,blockSize:p})},1332192:(o,l,p,h,y)=>{a.hc("GridSample",o,{align_corners:l,mode:Re(p),padding_mode:Re(h),format:y?"NHWC":"NCHW"})},1332362:(o,l,p,h,y)=>{a.hc("GridSample",o,{align_corners:l,mode:Re(p),padding_mode:Re(h),format:y?"NHWC":"NCHW"})},1332532:(o,l)=>{a.hc("ScatterND",o,{reduction:Re(l)})},1332617:(o,l,p,h,y,k,C,z,R)=>{a.hc("Attention",o,{numHeads:l,isUnidirectional:p,maskFilterValue:h,scale:y,doRotary:k,qkvHiddenSizes:C?Array.from(N().subarray(Number(z)>>>0,Number(z)+C>>>0)):[],pastPresentShareBuffer:!!R})},1332889:o=>{a.hc("BiasAdd",o,void 0)},1332944:o=>{a.hc("BiasSplitGelu",o,void 0)},1333005:o=>{a.hc("FastGelu",o,void 0)},1333061:(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te,Xe,Cr)=>{a.hc("Conv",o,{format:re?"NHWC":"NCHW",auto_pad:l,dilations:p?Array.from(N().subarray(Number(p)>>>0,Number(h)>>>0)):[],group:y,kernel_shape:k?Array.from(N().subarray(Number(k)>>>0,Number(C)>>>0)):[],pads:z?Array.from(N().subarray(Number(z)>>>0,Number(R)>>>0)):[],strides:W?Array.from(N().subarray(Number(W)>>>0,Number(H)>>>0)):[],w_is_const:()=>!!J()[Number(ce)>>>0],activation:Re(Te),activation_params:Xe?Array.from(Ae().subarray(Number(Xe)>>>0,Number(Cr)>>>0)):[]})},1333645:o=>{a.hc("Gelu",o,void 0)},1333697:(o,l,p,h,y,k,C,z,R)=>{a.hc("GroupQueryAttention",o,{numHeads:l,kvNumHeads:p,scale:h,softcap:y,doRotary:k,rotaryInterleaved:C,smoothSoftmax:z,localWindowSize:R})},1333914:(o,l,p,h)=>{a.hc("LayerNormalization",o,{axis:l,epsilon:p,simplified:!!h})},1334025:(o,l,p,h)=>{a.hc("LayerNormalization",o,{axis:l,epsilon:p,simplified:!!h})},1334136:(o,l,p,h,y,k)=>{a.hc("MatMulNBits",o,{k:l,n:p,accuracyLevel:h,bits:y,blockSize:k})},1334263:(o,l,p,h,y,k)=>{a.hc("MultiHeadAttention",o,{numHeads:l,isUnidirectional:p,maskFilterValue:h,scale:y,doRotary:k})},1334422:(o,l)=>{a.hc("QuickGelu",o,{alpha:l})},1334486:(o,l,p,h,y)=>{a.hc("RotaryEmbedding",o,{interleaved:!!l,numHeads:p,rotaryEmbeddingDim:h,scale:y})},1334625:(o,l,p)=>{a.hc("SkipLayerNormalization",o,{epsilon:l,simplified:!!p})},1334727:(o,l,p)=>{a.hc("SkipLayerNormalization",o,{epsilon:l,simplified:!!p})},1334829:(o,l,p,h)=>{a.hc("GatherBlockQuantized",o,{gatherAxis:l,quantizeAxis:p,blockSize:h})},1334950:o=>{a.Wd(o)},1334984:(o,l)=>a.Zd(Number(o),Number(l),a.Cd.be,a.Cd.errors)};function Fg(o,l,p){return wo(async()=>{await a.Ud(Number(o),Number(l),Number(p))})}function Gg(){return typeof wasmOffsetConverter<"u"}class ci{name="ExitStatus";constructor(l){this.message=`Program terminated with exit(${l})`,this.status=l}}var js=o=>{o.terminate(),o.onmessage=()=>{}},pi=[],Ws=o=>{zt.length==0&&(Hs(),Gs(zt[0]));var l=zt.pop();if(!l)return 6;xr.push(l),Wt[o.xd]=l,l.xd=o.xd;var p={yd:"run",de:o.ce,Fd:o.Fd,xd:o.xd};return l.postMessage(p,o.Ld),0},Et=0,Ie=(o,l,...p)=>{for(var h=2*p.length,y=ue(),k=Ai(8*h),C=k>>>3,z=0;z<p.length;z++){var R=p[z];typeof R=="bigint"?(V[C+2*z]=1n,V[C+2*z+1]=R):(V[C+2*z]=0n,Ge()[C+2*z+1>>>0]=R)}return o=Vo(o,0,h,k,l),se(y),o};function hi(o){if(u)return Ie(0,1,o);if(I=o,!(0<Et)){for(var l of xr)js(l);for(l of zt)js(l);zt=[],xr=[],Wt={},me=!0}_(0,new ci(o))}function Vs(o){if(u)return Ie(1,0,o);fi(o)}var fi=o=>{if(I=o,u)throw Vs(o),"unwind";hi(o)},zt=[],xr=[],Ls=[],Wt={},qs=o=>{var l=o.xd;delete Wt[l],zt.push(o),xr.splice(xr.indexOf(o),1),o.xd=0,Lo(l)};function Fs(){Ls.forEach(o=>o())}var Gs=o=>new Promise(l=>{o.onmessage=y=>{var k=(y=y.data).yd;if(y.Ed&&y.Ed!=ka()){var C=Wt[y.Ed];C?C.postMessage(y,y.Ld):b(`Internal error! Worker sent a message "${k}" to target pthread ${y.Ed}, but that thread no longer exists!`)}else k==="checkMailbox"?ga():k==="spawnThread"?Ws(y):k==="cleanupThread"?qs(Wt[y.ee]):k==="loaded"?(o.loaded=!0,l(o)):k==="alert"?alert(`Thread ${y.fe}: ${y.text}`):y.target==="setimmediate"?o.postMessage(y):k==="callHandler"?a[y.Nd](...y.args):k&&b(`worker sent an unknown command ${k}`)},o.onerror=y=>{throw b(`worker sent an error! ${y.filename}:${y.lineno}: ${y.message}`),y};var p,h=[];for(p of[])a.propertyIsEnumerable(p)&&h.push(p);o.postMessage({yd:"load",Od:h,he:S,ie:T})});function Hs(){var o=new Worker(import.meta.url.startsWith("file:")?new URL("/_astro/ort.bundle.min.OfoG_cy9.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});zt.push(o)}var Hg=o=>{Pe();var l=ae()[o+52>>>2>>>0];o=ae()[o+56>>>2>>>0],Go(l,l-o),se(l)},Zg=(o,l)=>{Et=0,o=Oi(o,l),0<Et?I=o:zi(o)},ma=[];function Kg(o){var l=new mi(o>>>=0);if(J()[l.wd+12>>>0]==0){var p=1;J()[l.wd+12>>>0]=p}return p=0,J()[l.wd+13>>>0]=p,ma.push(l),Zo(o),Qo(o)}var ir=0,Qg=()=>{de(0,0);var o=ma.pop();Ho(o.Gd),ir=0};class mi{constructor(l){this.Gd=l,this.wd=l-24}}function Jg(o){throw ir||=o>>>0,ir}var gi=o=>{var l=ir;if(!l)return Tr(0),0;var p=new mi(l);ae()[p.wd+16>>>2>>>0]=l;var h=ae()[p.wd+4>>>2>>>0];if(!h)return Tr(0),l;for(var y of o){if(y===0||y===h)break;if(Ko(y,h,p.wd+16))return Tr(y),l}return Tr(h),l};function Xg(){return gi([])}function Yg(o){return gi([o>>>0])}function ey(o,l){return gi([o>>>0,l>>>0])}var ty=()=>{var o=ma.pop();o||bt("no exception to throw");var l=o.Gd;if(J()[o.wd+13>>>0]==0){ma.push(o);var p=1;J()[o.wd+13>>>0]=p,p=0,J()[o.wd+12>>>0]=p}throw ir=l};function ry(o,l,p){var h=new mi(o>>>=0);throw l>>>=0,p>>>=0,ae()[h.wd+16>>>2>>>0]=0,ae()[h.wd+4>>>2>>>0]=l,ae()[h.wd+8>>>2>>>0]=p,ir=o}function Zs(o,l,p,h){return u?Ie(2,1,o,l,p,h):Ks(o,l,p,h)}function Ks(o,l,p,h){if(o>>>=0,p>>>=0,h>>>=0,d===void 0)return 6;var y=[];return u&&y.length===0?Zs(o,l>>>=0,p,h):(o={ce:p,xd:o,Fd:h,Ld:y},u?(o.yd="spawnThread",postMessage(o,y),0):Ws(o))}var Qs=typeof TextDecoder<"u"?new TextDecoder:void 0,Js=(o,l=0,p=NaN)=>{var h=(l>>>=0)+p;for(p=l;o[p]&&!(p>=h);)++p;if(16<p-l&&o.buffer&&Qs)return Qs.decode(o.buffer instanceof ArrayBuffer?o.subarray(l,p):o.slice(l,p));for(h="";l<p;){var y=o[l++];if(128&y){var k=63&o[l++];if((224&y)==192)h+=String.fromCharCode((31&y)<<6|k);else{var C=63&o[l++];65536>(y=(240&y)==224?(15&y)<<12|k<<6|C:(7&y)<<18|k<<12|C<<6|63&o[l++])?h+=String.fromCharCode(y):(y-=65536,h+=String.fromCharCode(55296|y>>10,56320|1023&y))}}else h+=String.fromCharCode(y)}return h},Re=(o,l)=>(o>>>=0)?Js(we(),o,l):"";function Xs(o,l,p){return u?Ie(3,1,o,l,p):0}function Ys(o,l){if(u)return Ie(4,1,o,l)}var eo=o=>{for(var l=0,p=0;p<o.length;++p){var h=o.charCodeAt(p);127>=h?l++:2047>=h?l+=2:55296<=h&&57343>=h?(l+=4,++p):l+=3}return l},nr=(o,l,p)=>{var h=we();if(l>>>=0,0<p){var y=l;p=l+p-1;for(var k=0;k<o.length;++k){var C=o.charCodeAt(k);if(55296<=C&&57343>=C&&(C=65536+((1023&C)<<10)|1023&o.charCodeAt(++k)),127>=C){if(l>=p)break;h[l++>>>0]=C}else{if(2047>=C){if(l+1>=p)break;h[l++>>>0]=192|C>>6}else{if(65535>=C){if(l+2>=p)break;h[l++>>>0]=224|C>>12}else{if(l+3>=p)break;h[l++>>>0]=240|C>>18,h[l++>>>0]=128|C>>12&63}h[l++>>>0]=128|C>>6&63}h[l++>>>0]=128|63&C}}h[l>>>0]=0,o=l-y}else o=0;return o};function to(o,l){if(u)return Ie(5,1,o,l)}function ro(o,l,p){if(u)return Ie(6,1,o,l,p)}function ao(o,l,p){return u?Ie(7,1,o,l,p):0}function io(o,l){if(u)return Ie(8,1,o,l)}function no(o,l,p){if(u)return Ie(9,1,o,l,p)}function so(o,l,p,h){if(u)return Ie(10,1,o,l,p,h)}function oo(o,l,p,h){if(u)return Ie(11,1,o,l,p,h)}function uo(o,l,p,h){if(u)return Ie(12,1,o,l,p,h)}function lo(o){if(u)return Ie(13,1,o)}function co(o,l){if(u)return Ie(14,1,o,l)}function po(o,l,p){if(u)return Ie(15,1,o,l,p)}var ho,At,ay=()=>bt(""),ft=o=>{for(var l="";we()[o>>>0];)l+=ho[we()[o++>>>0]];return l},yi={},_i={};function $t(o,l,p={}){return(function(h,y,k={}){var C=y.name;if(!h)throw new At(`type "${C}" must have a positive integer typeid pointer`);if(_i.hasOwnProperty(h)){if(k.Pd)return;throw new At(`Cannot register type '${C}' twice`)}_i[h]=y,yi.hasOwnProperty(h)&&(y=yi[h],delete yi[h],y.forEach(z=>z()))})(o,l,p)}var fo=(o,l,p)=>{switch(l){case 1:return p?h=>J()[h>>>0]:h=>we()[h>>>0];case 2:return p?h=>j()[h>>>1>>>0]:h=>G()[h>>>1>>>0];case 4:return p?h=>N()[h>>>2>>>0]:h=>ae()[h>>>2>>>0];case 8:return p?h=>V[h>>>3]:h=>he[h>>>3];default:throw new TypeError(`invalid integer width (${l}): ${o}`)}};function iy(o,l,p){p>>>=0,$t(o>>>=0,{name:l=ft(l>>>0),fromWireType:h=>h,toWireType:function(h,y){if(typeof y!="bigint"&&typeof y!="number")throw y=y===null?"null":(h=typeof y)=="object"||h==="array"||h==="function"?y.toString():""+y,new TypeError(`Cannot convert "${y}" to ${this.name}`);return typeof y=="number"&&(y=BigInt(y)),y},zd:Ot,readValueFromPointer:fo(l,p,l.indexOf("u")==-1),Ad:null})}var Ot=8;function ny(o,l,p,h){$t(o>>>=0,{name:l=ft(l>>>0),fromWireType:function(y){return!!y},toWireType:function(y,k){return k?p:h},zd:Ot,readValueFromPointer:function(y){return this.fromWireType(we()[y>>>0])},Ad:null})}var vi=[],xt=[];function wi(o){9<(o>>>=0)&&--xt[o+1]==0&&(xt[o]=void 0,vi.push(o))}var He=o=>{if(!o)throw new At("Cannot use deleted val. handle = "+o);return xt[o]},Je=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let l=vi.pop()||xt.length;return xt[l]=o,xt[l+1]=1,l}};function bi(o){return this.fromWireType(ae()[o>>>2>>>0])}var sy={name:"emscripten::val",fromWireType:o=>{var l=He(o);return wi(o),l},toWireType:(o,l)=>Je(l),zd:Ot,readValueFromPointer:bi,Ad:null};function oy(o){return $t(o>>>0,sy)}var uy=(o,l)=>{switch(l){case 4:return function(p){return this.fromWireType(Ae()[p>>>2>>>0])};case 8:return function(p){return this.fromWireType(Ge()[p>>>3>>>0])};default:throw new TypeError(`invalid float width (${l}): ${o}`)}};function ly(o,l,p){p>>>=0,$t(o>>>=0,{name:l=ft(l>>>0),fromWireType:h=>h,toWireType:(h,y)=>y,zd:Ot,readValueFromPointer:uy(l,p),Ad:null})}function dy(o,l,p,h,y){if(o>>>=0,p>>>=0,l=ft(l>>>0),y===-1&&(y=4294967295),y=z=>z,h===0){var k=32-8*p;y=z=>z<<k>>>k}var C=l.includes("unsigned")?function(z,R){return R>>>0}:function(z,R){return R};$t(o,{name:l,fromWireType:y,toWireType:C,zd:Ot,readValueFromPointer:fo(l,p,h!==0),Ad:null})}function cy(o,l,p){function h(k){var C=ae()[k>>>2>>>0];return k=ae()[k+4>>>2>>>0],new y(J().buffer,k,C)}var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][l];$t(o>>>=0,{name:p=ft(p>>>0),fromWireType:h,zd:Ot,readValueFromPointer:h},{Pd:!0})}function py(o,l){$t(o>>>=0,{name:l=ft(l>>>0),fromWireType:function(p){for(var h,y=ae()[p>>>2>>>0],k=p+4,C=k,z=0;z<=y;++z){var R=k+z;z!=y&&we()[R>>>0]!=0||(C=Re(C,R-C),h===void 0?h=C:(h+="\0",h+=C),C=R+1)}return gt(p),h},toWireType:function(p,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var y=typeof h=="string";if(!(y||h instanceof Uint8Array||h instanceof Uint8ClampedArray||h instanceof Int8Array))throw new At("Cannot pass non-string to std::string");var k=y?eo(h):h.length,C=Sa(4+k+1),z=C+4;if(ae()[C>>>2>>>0]=k,y)nr(h,z,k+1);else if(y)for(y=0;y<k;++y){var R=h.charCodeAt(y);if(255<R)throw gt(C),new At("String has UTF-16 code units that do not fit in 8 bits");we()[z+y>>>0]=R}else for(y=0;y<k;++y)we()[z+y>>>0]=h[y];return p!==null&&p.push(gt,C),C},zd:Ot,readValueFromPointer:bi,Ad(p){gt(p)}})}var mo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,hy=(o,l)=>{for(var p=o>>1,h=p+l/2;!(p>=h)&&G()[p>>>0];)++p;if(32<(p<<=1)-o&&mo)return mo.decode(we().slice(o,p));for(p="",h=0;!(h>=l/2);++h){var y=j()[o+2*h>>>1>>>0];if(y==0)break;p+=String.fromCharCode(y)}return p},fy=(o,l,p)=>{if(p??=2147483647,2>p)return 0;var h=l;p=(p-=2)<2*o.length?p/2:o.length;for(var y=0;y<p;++y){var k=o.charCodeAt(y);j()[l>>>1>>>0]=k,l+=2}return j()[l>>>1>>>0]=0,l-h},my=o=>2*o.length,gy=(o,l)=>{for(var p=0,h="";!(p>=l/4);){var y=N()[o+4*p>>>2>>>0];if(y==0)break;++p,65536<=y?(y-=65536,h+=String.fromCharCode(55296|y>>10,56320|1023&y)):h+=String.fromCharCode(y)}return h},yy=(o,l,p)=>{if(l>>>=0,p??=2147483647,4>p)return 0;var h=l;p=h+p-4;for(var y=0;y<o.length;++y){var k=o.charCodeAt(y);if(55296<=k&&57343>=k&&(k=65536+((1023&k)<<10)|1023&o.charCodeAt(++y)),N()[l>>>2>>>0]=k,(l+=4)+4>p)break}return N()[l>>>2>>>0]=0,l-h},_y=o=>{for(var l=0,p=0;p<o.length;++p){var h=o.charCodeAt(p);55296<=h&&57343>=h&&++p,l+=4}return l};function vy(o,l,p){if(o>>>=0,l>>>=0,p=ft(p>>>=0),l===2)var h=hy,y=fy,k=my,C=z=>G()[z>>>1>>>0];else l===4&&(h=gy,y=yy,k=_y,C=z=>ae()[z>>>2>>>0]);$t(o,{name:p,fromWireType:z=>{for(var R,W=ae()[z>>>2>>>0],H=z+4,re=0;re<=W;++re){var ce=z+4+re*l;re!=W&&C(ce)!=0||(H=h(H,ce-H),R===void 0?R=H:(R+="\0",R+=H),H=ce+l)}return gt(z),R},toWireType:(z,R)=>{if(typeof R!="string")throw new At(`Cannot pass non-string to C++ string type ${p}`);var W=k(R),H=Sa(4+W+l);return ae()[H>>>2>>>0]=W/l,y(R,H+4,W+l),z!==null&&z.push(gt,H),H},zd:Ot,readValueFromPointer:bi,Ad(z){gt(z)}})}function wy(o,l){$t(o>>>=0,{Qd:!0,name:l=ft(l>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function by(o){Ei(o>>>0,!s,1,!n,131072,!1),Fs()}var $i=o=>{if(!me)try{if(o(),!(0<Et))try{u?zi(I):fi(I)}catch(l){l instanceof ci||l=="unwind"||_(0,l)}}catch(l){l instanceof ci||l=="unwind"||_(0,l)}};function xi(o){o>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(N(),o>>>2,o).value.then(ga),o+=128,Atomics.store(N(),o>>>2,1))}var ga=()=>{var o=ka();o&&(xi(o),$i(Fo))};function $y(o,l){(o>>>=0)==l>>>0?setTimeout(ga):u?postMessage({Ed:o,yd:"checkMailbox"}):(o=Wt[o])&&o.postMessage({yd:"checkMailbox"})}var ki=[];function xy(o,l,p,h,y){for(l>>>=0,h/=2,ki.length=h,p=y>>>0>>>3,y=0;y<h;y++)ki[y]=V[p+2*y]?V[p+2*y+1]:Ge()[p+2*y+1>>>0];return(l?di[l]:m_[o])(...ki)}var ky=()=>{Et=0};function Sy(o){o>>>=0,u?postMessage({yd:"cleanupThread",ee:o}):qs(Wt[o])}function Ty(o){}var ya=(o,l)=>{var p=_i[o];if(p===void 0)throw o=Uo(o),p=ft(o),gt(o),new At(`${l} has unknown type ${p}`);return p},go=(o,l,p)=>{var h=[];return o=o.toWireType(h,p),h.length&&(ae()[l>>>2>>>0]=Je(h)),o};function Cy(o,l,p){return l>>>=0,p>>>=0,o=He(o>>>0),l=ya(l,"emval::as"),go(l,p,o)}function Iy(o,l){return l>>>=0,o=He(o>>>0),(l=ya(l,"emval::as")).toWireType(null,o)}var _a=o=>{try{o()}catch(l){bt(l)}},Rt=0,mt=null,yo=0,va=[],_o={},vo={},Ey=0,Si=null,zy=[];function wo(o){return(function(l){if(!me){if(Rt===0){var p=!1,h=!1;l((y=0)=>{if(!me&&(yo=y,p=!0,h)){Rt=2,_a(()=>Lu(mt)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),y=!1;try{var k=(function(){var R=N()[mt+8>>>2>>>0];return R=U[vo[R]],--Et,R()})()}catch(R){k=R,y=!0}var C=!1;if(!mt){var z=Si;z&&(Si=null,(y?z.reject:z.resolve)(k),C=!0)}if(y&&!C)throw k}}),h=!0,p||(Rt=1,mt=(function(){var y=Sa(65548),k=y+12;ae()[y>>>2>>>0]=k,ae()[y+4>>>2>>>0]=k+65536,k=va[0];var C=_o[k];return C===void 0&&(C=Ey++,_o[k]=C,vo[C]=k),k=C,N()[y+8>>>2>>>0]=k,y})(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),_a(()=>Wu(mt)))}else Rt===2?(Rt=0,_a(qu),gt(mt),mt=null,zy.forEach($i)):bt(`invalid state: ${Rt}`);return yo}})(l=>{o().then(l)})}function Ay(o){return o>>>=0,wo(async()=>{var l=await He(o);return Je(l)})}var wa=[];function Oy(o,l,p,h){return p>>>=0,h>>>=0,(o=wa[o>>>0])(null,l=He(l>>>0),p,h)}var Ry={},ba=o=>{var l=Ry[o];return l===void 0?ft(o):l};function Ny(o,l,p,h,y){return p>>>=0,h>>>=0,y>>>=0,(o=wa[o>>>0])(l=He(l>>>0),l[p=ba(p)],h,y)}var bo=()=>typeof globalThis=="object"?globalThis:Function("return this")();function By(o){return(o>>>=0)==0?Je(bo()):(o=ba(o),Je(bo()[o]))}var My=o=>{var l=wa.length;return wa.push(o),l},Dy=(o,l)=>{for(var p=Array(o),h=0;h<o;++h)p[h]=ya(ae()[l+4*h>>>2>>>0],"parameter "+h);return p},$o=(o,l)=>Object.defineProperty(l,"name",{value:o});function Py(o,l,p){var h=(l=Dy(o,l>>>0)).shift();o--;var y=`return function (obj, func, destructorsRef, args) {
`,k=0,C=[];p===0&&C.push("obj");for(var z=["retType"],R=[h],W=0;W<o;++W)C.push("arg"+W),z.push("argType"+W),R.push(l[W]),y+=`  var arg${W} = argType${W}.readValueFromPointer(args${k?"+"+k:""});
`,k+=l[W].zd;return y+=`  var rv = ${p===1?"new func":"func.call"}(${C.join(", ")});
`,h.Qd||(z.push("emval_returnValue"),R.push(go),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),z.push(y+`};
`),o=(function(H){var re=Function;if(!(re instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof re} which is not a function`);var ce=$o(re.name||"unknownFunctionName",function(){});return ce.prototype=re.prototype,ce=new ce,(H=re.apply(ce,H))instanceof Object?H:ce})(z)(...R),p=`methodCaller<(${l.map(H=>H.name).join(", ")}) => ${h.name}>`,My($o(p,o))}function Uy(o){return o=ba(o>>>0),Je(a[o])}function jy(o,l){return l>>>=0,o=He(o>>>0),l=He(l),Je(o[l])}function Wy(o){9<(o>>>=0)&&(xt[o+1]+=1)}function Vy(){return Je([])}function Ly(o){o=He(o>>>0);for(var l=Array(o.length),p=0;p<o.length;p++)l[p]=o[p];return Je(l)}function qy(o){return Je(ba(o>>>0))}function Fy(){return Je({})}function Gy(o){for(var l=He(o>>>=0);l.length;){var p=l.pop();l.pop()(p)}wi(o)}function Hy(o,l,p){l>>>=0,p>>>=0,o=He(o>>>0),l=He(l),p=He(p),o[l]=p}function Zy(o,l){return l>>>=0,o=(o=ya(o>>>0,"_emval_take_value")).readValueFromPointer(l),Je(o)}function Ky(o,l){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),l>>>=0,o=new Date(1e3*o),N()[l>>>2>>>0]=o.getUTCSeconds(),N()[l+4>>>2>>>0]=o.getUTCMinutes(),N()[l+8>>>2>>>0]=o.getUTCHours(),N()[l+12>>>2>>>0]=o.getUTCDate(),N()[l+16>>>2>>>0]=o.getUTCMonth(),N()[l+20>>>2>>>0]=o.getUTCFullYear()-1900,N()[l+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,N()[l+28>>>2>>>0]=o}var xo=o=>o%4==0&&(o%100!=0||o%400==0),ko=[0,31,60,91,121,152,182,213,244,274,305,335],So=[0,31,59,90,120,151,181,212,243,273,304,334];function Qy(o,l){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),l>>>=0,o=new Date(1e3*o),N()[l>>>2>>>0]=o.getSeconds(),N()[l+4>>>2>>>0]=o.getMinutes(),N()[l+8>>>2>>>0]=o.getHours(),N()[l+12>>>2>>>0]=o.getDate(),N()[l+16>>>2>>>0]=o.getMonth(),N()[l+20>>>2>>>0]=o.getFullYear()-1900,N()[l+24>>>2>>>0]=o.getDay();var p=(xo(o.getFullYear())?ko:So)[o.getMonth()]+o.getDate()-1|0;N()[l+28>>>2>>>0]=p,N()[l+36>>>2>>>0]=-60*o.getTimezoneOffset(),p=new Date(o.getFullYear(),6,1).getTimezoneOffset();var h=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(p!=h&&o.getTimezoneOffset()==Math.min(h,p)),N()[l+32>>>2>>>0]=o}function Jy(o){o>>>=0;var l=new Date(N()[o+20>>>2>>>0]+1900,N()[o+16>>>2>>>0],N()[o+12>>>2>>>0],N()[o+8>>>2>>>0],N()[o+4>>>2>>>0],N()[o>>>2>>>0],0),p=N()[o+32>>>2>>>0],h=l.getTimezoneOffset(),y=new Date(l.getFullYear(),6,1).getTimezoneOffset(),k=new Date(l.getFullYear(),0,1).getTimezoneOffset(),C=Math.min(k,y);return 0>p?N()[o+32>>>2>>>0]=+(y!=k&&C==h):0<p!=(C==h)&&(y=Math.max(k,y),l.setTime(l.getTime()+6e4*((0<p?C:y)-h))),N()[o+24>>>2>>>0]=l.getDay(),p=(xo(l.getFullYear())?ko:So)[l.getMonth()]+l.getDate()-1|0,N()[o+28>>>2>>>0]=p,N()[o>>>2>>>0]=l.getSeconds(),N()[o+4>>>2>>>0]=l.getMinutes(),N()[o+8>>>2>>>0]=l.getHours(),N()[o+12>>>2>>>0]=l.getDate(),N()[o+16>>>2>>>0]=l.getMonth(),N()[o+20>>>2>>>0]=l.getYear(),o=l.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function To(o,l,p,h,y,k,C){return u?Ie(16,1,o,l,p,h,y,k,C):-52}function Co(o,l,p,h,y,k){if(u)return Ie(17,1,o,l,p,h,y,k)}var kr={},Xy=()=>performance.timeOrigin+performance.now();function Io(o,l){if(u)return Ie(18,1,o,l);if(kr[o]&&(clearTimeout(kr[o].id),delete kr[o]),!l)return 0;var p=setTimeout(()=>{delete kr[o],$i(()=>qo(o,performance.timeOrigin+performance.now()))},l);return kr[o]={id:p,ke:l},0}function Yy(o,l,p,h){o>>>=0,l>>>=0,p>>>=0,h>>>=0;var y=new Date().getFullYear(),k=new Date(y,0,1).getTimezoneOffset();y=new Date(y,6,1).getTimezoneOffset();var C=Math.max(k,y);ae()[o>>>2>>>0]=60*C,N()[l>>>2>>>0]=+(k!=y),o=(l=z=>{var R=Math.abs(z);return`UTC${0<=z?"-":"+"}${String(Math.floor(R/60)).padStart(2,"0")}${String(R%60).padStart(2,"0")}`})(k),l=l(y),y<k?(nr(o,p,17),nr(l,h,17)):(nr(o,h,17),nr(l,p,17))}var e_=()=>Date.now();function t_(o,l,p){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),V[p>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var Ti=[],Eo=(o,l)=>{Ti.length=0;for(var p;p=we()[o++>>>0];){var h=p!=105;l+=(h&=p!=112)&&l%8?4:0,Ti.push(p==112?ae()[l>>>2>>>0]:p==106?V[l>>>3]:p==105?N()[l>>>2>>>0]:Ge()[l>>>3>>>0]),l+=h?8:4}return Ti};function r_(o,l,p){return o>>>=0,l=Eo(l>>>0,p>>>0),di[o](...l)}function a_(o,l,p){return o>>>=0,l=Eo(l>>>0,p>>>0),di[o](...l)}var i_=()=>{};function n_(o,l){return b(Re(o>>>0,l>>>0))}var s_=()=>{throw Et+=1,"unwind"};function o_(){return 4294901760}var u_=()=>navigator.hardwareConcurrency;function l_(){return bt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function d_(o){o>>>=0;var l=we().length;if(o<=l||4294901760<o)return!1;for(var p=1;4>=p;p*=2){var h=l*(1+.2/p);h=Math.min(h,o+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(o,h)/65536))-S.buffer.byteLength+65535)/65536|0;try{S.grow(h),Pe();var y=1;break e}catch{}y=void 0}if(y)return!0}return!1}var $a=()=>(bt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Sr={},zo=o=>{o.forEach(l=>{$a()})};function c_(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),zo(o),Sr.Kd=$a(),Sr.ae=o,Sr.Kd}function p_(o,l,p){if(o>>>=0,l>>>=0,Sr.Kd==o)var h=Sr.ae;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),zo(h);for(var y=3;h[y]&&$a()!=o;)++y;for(o=0;o<p&&h[o+y];++o)N()[l+4*o>>>2>>>0]=$a();return o}var Ci,Ii={},Ao=()=>{if(!Ci){var o,l={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Ii)Ii[o]===void 0?delete l[o]:l[o]=Ii[o];var p=[];for(o in l)p.push(`${o}=${l[o]}`);Ci=p}return Ci};function Oo(o,l){if(u)return Ie(19,1,o,l);o>>>=0,l>>>=0;var p=0;return Ao().forEach((h,y)=>{var k=l+p;for(y=ae()[o+4*y>>>2>>>0]=k,k=0;k<h.length;++k)J()[y++>>>0]=h.charCodeAt(k);J()[y>>>0]=0,p+=h.length+1}),0}function Ro(o,l){if(u)return Ie(20,1,o,l);o>>>=0,l>>>=0;var p=Ao();ae()[o>>>2>>>0]=p.length;var h=0;return p.forEach(y=>h+=y.length+1),ae()[l>>>2>>>0]=h,0}function No(o){return u?Ie(21,1,o):52}function Bo(o,l,p,h){return u?Ie(22,1,o,l,p,h):52}function Mo(o,l,p,h){return u?Ie(23,1,o,l,p,h):70}var h_=[null,[],[]];function Do(o,l,p,h){if(u)return Ie(24,1,o,l,p,h);l>>>=0,p>>>=0,h>>>=0;for(var y=0,k=0;k<p;k++){var C=ae()[l>>>2>>>0],z=ae()[l+4>>>2>>>0];l+=8;for(var R=0;R<z;R++){var W=we()[C+R>>>0],H=h_[o];W===0||W===10?((o===1?$:b)(Js(H)),H.length=0):H.push(W)}y+=z}return ae()[h>>>2>>>0]=y,0}function f_(o){return o>>>0}u||(function(){for(var o=a.numThreads-1;o--;)Hs();pi.unshift(()=>{br++,(function(l){u?l():Promise.all(zt.map(Gs)).then(l)})(()=>Ps())})})();for(var Po=Array(256),xa=0;256>xa;++xa)Po[xa]=String.fromCharCode(xa);ho=Po,At=a.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},a.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},xt.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=()=>xt.length/2-5-vi.length;var U,m_=[hi,Vs,Zs,Xs,Ys,to,ro,ao,io,no,so,oo,uo,lo,co,po,To,Co,Io,Oo,Ro,No,Bo,Mo,Do];(async function(){function o(h,y){return U=h.exports,U=(function(){var k=U,C={};for(let[z,R]of Object.entries(k))C[z]=typeof R=="function"?(...W)=>{va.push(z);try{return R(...W)}finally{me||(va.pop(),mt&&Rt===1&&va.length===0&&(Rt=0,Et+=1,_a(Vu),typeof Fibers<"u"&&Fibers.le()))}}:R;return C})(),U=(function(){var k=U,C=R=>W=>R(W)>>>0,z=R=>()=>R()>>>0;return(k=Object.assign({},k)).Cb=C(k.Cb),k.fc=z(k.fc),k.ic=C(k.ic),k.vc=C(k.vc),k.wc=z(k.wc),k.Ac=C(k.Ac),k})(),Ls.push(U.jc),T=y,Ps(),U}br++;var l=Us();if(a.instantiateWasm)return new Promise(h=>{a.instantiateWasm(l,(y,k)=>{o(y,k),h(y.exports)})});if(u)return new Promise(h=>{Be=y=>{var k=new WebAssembly.Instance(y,Us());h(o(k,y))}});wr??=a.locateFile?a.locateFile?a.locateFile("ort-wasm-simd-threaded.jsep.wasm",v):v+"ort-wasm-simd-threaded.jsep.wasm":new URL("/_astro/ort-wasm-simd-threaded.jsep.D5Jk56-t.wasm",import.meta.url).href;try{var p=await(async function(h){var y=wr;if(!K&&typeof WebAssembly.instantiateStreaming=="function"&&!_e(y))try{var k=fetch(y,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,h)}catch(C){b(`wasm streaming compile failed: ${C}`),b("falling back to ArrayBuffer instantiation")}return(async function(C,z){try{var R=await(async function(W){if(!K)try{var H=await f(W);return new Uint8Array(H)}catch{}if(W==wr&&K)W=new Uint8Array(K);else{if(!m)throw"both async and sync fetching of the wasm failed";W=m(W)}return W})(C);return await WebAssembly.instantiate(R,z)}catch(W){b(`failed to asynchronously prepare wasm: ${W}`),bt(W)}})(y,h)})(l);return o(p.instance,p.module)}catch(h){return r(h),Promise.reject(h)}})();var Uo=o=>(Uo=U.Cb)(o),jo=()=>(jo=U.Db)();a._OrtInit=(o,l)=>(a._OrtInit=U.Eb)(o,l),a._OrtGetLastError=(o,l)=>(a._OrtGetLastError=U.Fb)(o,l),a._OrtCreateSessionOptions=(o,l,p,h,y,k,C,z,R,W)=>(a._OrtCreateSessionOptions=U.Gb)(o,l,p,h,y,k,C,z,R,W),a._OrtAppendExecutionProvider=(o,l)=>(a._OrtAppendExecutionProvider=U.Hb)(o,l),a._OrtAddFreeDimensionOverride=(o,l,p)=>(a._OrtAddFreeDimensionOverride=U.Ib)(o,l,p),a._OrtAddSessionConfigEntry=(o,l,p)=>(a._OrtAddSessionConfigEntry=U.Jb)(o,l,p),a._OrtReleaseSessionOptions=o=>(a._OrtReleaseSessionOptions=U.Kb)(o),a._OrtCreateSession=(o,l,p)=>(a._OrtCreateSession=U.Lb)(o,l,p),a._OrtReleaseSession=o=>(a._OrtReleaseSession=U.Mb)(o),a._OrtGetInputOutputCount=(o,l,p)=>(a._OrtGetInputOutputCount=U.Nb)(o,l,p),a._OrtGetInputName=(o,l)=>(a._OrtGetInputName=U.Ob)(o,l),a._OrtGetOutputName=(o,l)=>(a._OrtGetOutputName=U.Pb)(o,l),a._OrtFree=o=>(a._OrtFree=U.Qb)(o),a._OrtCreateTensor=(o,l,p,h,y,k)=>(a._OrtCreateTensor=U.Rb)(o,l,p,h,y,k),a._OrtGetTensorData=(o,l,p,h,y)=>(a._OrtGetTensorData=U.Sb)(o,l,p,h,y),a._OrtReleaseTensor=o=>(a._OrtReleaseTensor=U.Tb)(o),a._OrtCreateRunOptions=(o,l,p,h)=>(a._OrtCreateRunOptions=U.Ub)(o,l,p,h),a._OrtAddRunConfigEntry=(o,l,p)=>(a._OrtAddRunConfigEntry=U.Vb)(o,l,p),a._OrtReleaseRunOptions=o=>(a._OrtReleaseRunOptions=U.Wb)(o),a._OrtCreateBinding=o=>(a._OrtCreateBinding=U.Xb)(o),a._OrtBindInput=(o,l,p)=>(a._OrtBindInput=U.Yb)(o,l,p),a._OrtBindOutput=(o,l,p,h)=>(a._OrtBindOutput=U.Zb)(o,l,p,h),a._OrtClearBoundOutputs=o=>(a._OrtClearBoundOutputs=U._b)(o),a._OrtReleaseBinding=o=>(a._OrtReleaseBinding=U.$b)(o),a._OrtRunWithBinding=(o,l,p,h,y)=>(a._OrtRunWithBinding=U.ac)(o,l,p,h,y),a._OrtRun=(o,l,p,h,y,k,C,z)=>(a._OrtRun=U.bc)(o,l,p,h,y,k,C,z),a._OrtEndProfiling=o=>(a._OrtEndProfiling=U.cc)(o),a._JsepOutput=(o,l,p)=>(a._JsepOutput=U.dc)(o,l,p),a._JsepGetNodeName=o=>(a._JsepGetNodeName=U.ec)(o);var ka=()=>(ka=U.fc)(),gt=a._free=o=>(gt=a._free=U.gc)(o),Sa=a._malloc=o=>(Sa=a._malloc=U.ic)(o),Ei=(o,l,p,h,y,k)=>(Ei=U.kc)(o,l,p,h,y,k),Wo=()=>(Wo=U.lc)(),Vo=(o,l,p,h,y)=>(Vo=U.mc)(o,l,p,h,y),Lo=o=>(Lo=U.nc)(o),zi=o=>(zi=U.oc)(o),qo=(o,l)=>(qo=U.pc)(o,l),Fo=()=>(Fo=U.qc)(),de=(o,l)=>(de=U.rc)(o,l),Tr=o=>(Tr=U.sc)(o),Go=(o,l)=>(Go=U.tc)(o,l),se=o=>(se=U.uc)(o),Ai=o=>(Ai=U.vc)(o),ue=()=>(ue=U.wc)(),Ho=o=>(Ho=U.xc)(o),Zo=o=>(Zo=U.yc)(o),Ko=(o,l,p)=>(Ko=U.zc)(o,l,p),Qo=o=>(Qo=U.Ac)(o),Jo=a.dynCall_iii=(o,l,p)=>(Jo=a.dynCall_iii=U.Bc)(o,l,p),Xo=a.dynCall_vi=(o,l)=>(Xo=a.dynCall_vi=U.Cc)(o,l),Oi=a.dynCall_ii=(o,l)=>(Oi=a.dynCall_ii=U.Dc)(o,l),Yo=a.dynCall_vii=(o,l,p)=>(Yo=a.dynCall_vii=U.Ec)(o,l,p),eu=a.dynCall_iiii=(o,l,p,h)=>(eu=a.dynCall_iiii=U.Fc)(o,l,p,h),tu=a.dynCall_viii=(o,l,p,h)=>(tu=a.dynCall_viii=U.Gc)(o,l,p,h),ru=a.dynCall_iiiii=(o,l,p,h,y)=>(ru=a.dynCall_iiiii=U.Hc)(o,l,p,h,y),au=a.dynCall_viiii=(o,l,p,h,y)=>(au=a.dynCall_viiii=U.Ic)(o,l,p,h,y),iu=a.dynCall_viiiiii=(o,l,p,h,y,k,C)=>(iu=a.dynCall_viiiiii=U.Jc)(o,l,p,h,y,k,C),nu=a.dynCall_viiiiiii=(o,l,p,h,y,k,C,z)=>(nu=a.dynCall_viiiiiii=U.Kc)(o,l,p,h,y,k,C,z),su=a.dynCall_ji=(o,l)=>(su=a.dynCall_ji=U.Lc)(o,l),ou=a.dynCall_v=o=>(ou=a.dynCall_v=U.Mc)(o),uu=a.dynCall_viiiii=(o,l,p,h,y,k)=>(uu=a.dynCall_viiiii=U.Nc)(o,l,p,h,y,k),lu=a.dynCall_i=o=>(lu=a.dynCall_i=U.Oc)(o),du=a.dynCall_fii=(o,l,p)=>(du=a.dynCall_fii=U.Pc)(o,l,p),cu=a.dynCall_viiiiiiii=(o,l,p,h,y,k,C,z,R)=>(cu=a.dynCall_viiiiiiii=U.Qc)(o,l,p,h,y,k,C,z,R),pu=a.dynCall_viiiiiiiiii=(o,l,p,h,y,k,C,z,R,W,H)=>(pu=a.dynCall_viiiiiiiiii=U.Rc)(o,l,p,h,y,k,C,z,R,W,H),hu=a.dynCall_jiii=(o,l,p,h)=>(hu=a.dynCall_jiii=U.Sc)(o,l,p,h),fu=a.dynCall_dii=(o,l,p)=>(fu=a.dynCall_dii=U.Tc)(o,l,p),mu=a.dynCall_viiiiiiiii=(o,l,p,h,y,k,C,z,R,W)=>(mu=a.dynCall_viiiiiiiii=U.Uc)(o,l,p,h,y,k,C,z,R,W),gu=a.dynCall_viiiiiiiiiii=(o,l,p,h,y,k,C,z,R,W,H,re)=>(gu=a.dynCall_viiiiiiiiiii=U.Vc)(o,l,p,h,y,k,C,z,R,W,H,re),yu=a.dynCall_iiiiii=(o,l,p,h,y,k)=>(yu=a.dynCall_iiiiii=U.Wc)(o,l,p,h,y,k),_u=a.dynCall_iij=(o,l,p)=>(_u=a.dynCall_iij=U.Xc)(o,l,p),vu=a.dynCall_iiiiiiiiii=(o,l,p,h,y,k,C,z,R,W)=>(vu=a.dynCall_iiiiiiiiii=U.Yc)(o,l,p,h,y,k,C,z,R,W),wu=a.dynCall_iiiiiiiiiii=(o,l,p,h,y,k,C,z,R,W,H)=>(wu=a.dynCall_iiiiiiiiiii=U.Zc)(o,l,p,h,y,k,C,z,R,W,H),bu=a.dynCall_vij=(o,l,p)=>(bu=a.dynCall_vij=U._c)(o,l,p),$u=a.dynCall_iiif=(o,l,p,h)=>($u=a.dynCall_iiif=U.$c)(o,l,p,h),xu=a.dynCall_iiij=(o,l,p,h)=>(xu=a.dynCall_iiij=U.ad)(o,l,p,h),ku=a.dynCall_fiii=(o,l,p,h)=>(ku=a.dynCall_fiii=U.bd)(o,l,p,h),Su=a.dynCall_viiiiiiiiiiiii=(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)=>(Su=a.dynCall_viiiiiiiiiiiii=U.cd)(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te),Tu=a.dynCall_vjiii=(o,l,p,h,y)=>(Tu=a.dynCall_vjiii=U.dd)(o,l,p,h,y),Cu=a.dynCall_vif=(o,l,p)=>(Cu=a.dynCall_vif=U.ed)(o,l,p),Iu=a.dynCall_iiiiiii=(o,l,p,h,y,k,C)=>(Iu=a.dynCall_iiiiiii=U.fd)(o,l,p,h,y,k,C),Eu=a.dynCall_iiiij=(o,l,p,h,y)=>(Eu=a.dynCall_iiiij=U.gd)(o,l,p,h,y),zu=a.dynCall_iiiiiiii=(o,l,p,h,y,k,C,z)=>(zu=a.dynCall_iiiiiiii=U.hd)(o,l,p,h,y,k,C,z),Au=a.dynCall_viiiiiiiiiiii=(o,l,p,h,y,k,C,z,R,W,H,re,ce)=>(Au=a.dynCall_viiiiiiiiiiii=U.id)(o,l,p,h,y,k,C,z,R,W,H,re,ce),Ou=a.dynCall_diii=(o,l,p,h)=>(Ou=a.dynCall_diii=U.jd)(o,l,p,h),Ru=a.dynCall_jiiii=(o,l,p,h,y)=>(Ru=a.dynCall_jiiii=U.kd)(o,l,p,h,y),Nu=a.dynCall_viiij=(o,l,p,h,y)=>(Nu=a.dynCall_viiij=U.ld)(o,l,p,h,y),Bu=a.dynCall_fiiii=(o,l,p,h,y)=>(Bu=a.dynCall_fiiii=U.md)(o,l,p,h,y),Mu=a.dynCall_viiif=(o,l,p,h,y)=>(Mu=a.dynCall_viiif=U.nd)(o,l,p,h,y),Du=a.dynCall_diiii=(o,l,p,h,y)=>(Du=a.dynCall_diiii=U.od)(o,l,p,h,y),Pu=a.dynCall_viiid=(o,l,p,h,y)=>(Pu=a.dynCall_viiid=U.pd)(o,l,p,h,y),Uu=a.dynCall_iiiijii=(o,l,p,h,y,k,C)=>(Uu=a.dynCall_iiiijii=U.qd)(o,l,p,h,y,k,C),ju=a.dynCall_iiiiiij=(o,l,p,h,y,k,C)=>(ju=a.dynCall_iiiiiij=U.rd)(o,l,p,h,y,k,C),Wu=o=>(Wu=U.sd)(o),Vu=()=>(Vu=U.td)(),Lu=o=>(Lu=U.ud)(o),qu=()=>(qu=U.vd)();function g_(o,l,p){var h=ue();try{Yo(o,l,p)}catch(y){if(se(h),y!==y+0)throw y;de(1,0)}}function y_(o,l,p){var h=ue();try{return Jo(o,l,p)}catch(y){if(se(h),y!==y+0)throw y;de(1,0)}}function __(o,l){var p=ue();try{Xo(o,l)}catch(h){if(se(p),h!==h+0)throw h;de(1,0)}}function v_(o,l){var p=ue();try{return Oi(o,l)}catch(h){if(se(p),h!==h+0)throw h;de(1,0)}}function w_(o,l,p,h){var y=ue();try{return eu(o,l,p,h)}catch(k){if(se(y),k!==k+0)throw k;de(1,0)}}function b_(o,l,p,h,y){var k=ue();try{au(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function $_(o,l,p,h,y){var k=ue();try{return ru(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function x_(o,l,p,h){var y=ue();try{tu(o,l,p,h)}catch(k){if(se(y),k!==k+0)throw k;de(1,0)}}function k_(o,l,p,h,y,k,C){var z=ue();try{return Iu(o,l,p,h,y,k,C)}catch(R){if(se(z),R!==R+0)throw R;de(1,0)}}function S_(o){var l=ue();try{ou(o)}catch(p){if(se(l),p!==p+0)throw p;de(1,0)}}function T_(o,l,p){var h=ue();try{return _u(o,l,p)}catch(y){if(se(h),y!==y+0)throw y;de(1,0)}}function C_(o,l,p,h,y,k){var C=ue();try{uu(o,l,p,h,y,k)}catch(z){if(se(C),z!==z+0)throw z;de(1,0)}}function I_(o,l,p){var h=ue();try{bu(o,l,p)}catch(y){if(se(h),y!==y+0)throw y;de(1,0)}}function E_(o,l,p,h,y,k,C){var z=ue();try{iu(o,l,p,h,y,k,C)}catch(R){if(se(z),R!==R+0)throw R;de(1,0)}}function z_(o,l,p,h,y,k,C,z){var R=ue();try{nu(o,l,p,h,y,k,C,z)}catch(W){if(se(R),W!==W+0)throw W;de(1,0)}}function A_(o,l,p,h,y,k){var C=ue();try{return yu(o,l,p,h,y,k)}catch(z){if(se(C),z!==z+0)throw z;de(1,0)}}function O_(o,l,p,h,y,k,C,z){var R=ue();try{return zu(o,l,p,h,y,k,C,z)}catch(W){if(se(R),W!==W+0)throw W;de(1,0)}}function R_(o,l,p,h,y,k,C,z,R,W){var H=ue();try{mu(o,l,p,h,y,k,C,z,R,W)}catch(re){if(se(H),re!==re+0)throw re;de(1,0)}}function N_(o,l,p,h,y,k,C,z,R){var W=ue();try{cu(o,l,p,h,y,k,C,z,R)}catch(H){if(se(W),H!==H+0)throw H;de(1,0)}}function B_(o){var l=ue();try{return lu(o)}catch(p){if(se(l),p!==p+0)throw p;de(1,0)}}function M_(o,l,p,h,y,k,C,z,R,W){var H=ue();try{return vu(o,l,p,h,y,k,C,z,R,W)}catch(re){if(se(H),re!==re+0)throw re;de(1,0)}}function D_(o,l,p){var h=ue();try{return du(o,l,p)}catch(y){if(se(h),y!==y+0)throw y;de(1,0)}}function P_(o,l,p,h){var y=ue();try{return hu(o,l,p,h)}catch(k){if(se(y),k!==k+0)throw k;return de(1,0),0n}}function U_(o,l,p){var h=ue();try{return fu(o,l,p)}catch(y){if(se(h),y!==y+0)throw y;de(1,0)}}function j_(o,l,p,h,y,k,C,z,R,W,H,re){var ce=ue();try{gu(o,l,p,h,y,k,C,z,R,W,H,re)}catch(Te){if(se(ce),Te!==Te+0)throw Te;de(1,0)}}function W_(o,l,p,h,y,k,C,z,R,W,H){var re=ue();try{pu(o,l,p,h,y,k,C,z,R,W,H)}catch(ce){if(se(re),ce!==ce+0)throw ce;de(1,0)}}function V_(o,l,p,h,y,k,C,z,R,W,H){var re=ue();try{return wu(o,l,p,h,y,k,C,z,R,W,H)}catch(ce){if(se(re),ce!==ce+0)throw ce;de(1,0)}}function L_(o,l,p,h){var y=ue();try{return $u(o,l,p,h)}catch(k){if(se(y),k!==k+0)throw k;de(1,0)}}function q_(o,l,p,h){var y=ue();try{return xu(o,l,p,h)}catch(k){if(se(y),k!==k+0)throw k;de(1,0)}}function F_(o,l,p,h){var y=ue();try{return ku(o,l,p,h)}catch(k){if(se(y),k!==k+0)throw k;de(1,0)}}function G_(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te){var Xe=ue();try{Su(o,l,p,h,y,k,C,z,R,W,H,re,ce,Te)}catch(Cr){if(se(Xe),Cr!==Cr+0)throw Cr;de(1,0)}}function H_(o,l,p,h,y){var k=ue();try{Tu(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function Z_(o,l,p){var h=ue();try{Cu(o,l,p)}catch(y){if(se(h),y!==y+0)throw y;de(1,0)}}function K_(o,l){var p=ue();try{return su(o,l)}catch(h){if(se(p),h!==h+0)throw h;return de(1,0),0n}}function Q_(o,l,p,h,y){var k=ue();try{return Eu(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function J_(o,l,p,h,y,k,C,z,R,W,H,re,ce){var Te=ue();try{Au(o,l,p,h,y,k,C,z,R,W,H,re,ce)}catch(Xe){if(se(Te),Xe!==Xe+0)throw Xe;de(1,0)}}function X_(o,l,p,h){var y=ue();try{return Ou(o,l,p,h)}catch(k){if(se(y),k!==k+0)throw k;de(1,0)}}function Y_(o,l,p,h,y){var k=ue();try{return Ru(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;return de(1,0),0n}}function e0(o,l,p,h,y){var k=ue();try{Nu(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function t0(o,l,p,h,y){var k=ue();try{return Bu(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function r0(o,l,p,h,y){var k=ue();try{Mu(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function a0(o,l,p,h,y){var k=ue();try{return Du(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function i0(o,l,p,h,y){var k=ue();try{Pu(o,l,p,h,y)}catch(C){if(se(k),C!==C+0)throw C;de(1,0)}}function n0(o,l,p,h,y,k,C){var z=ue();try{return Uu(o,l,p,h,y,k,C)}catch(R){if(se(z),R!==R+0)throw R;de(1,0)}}function s0(o,l,p,h,y,k,C){var z=ue();try{return ju(o,l,p,h,y,k,C)}catch(R){if(se(z),R!==R+0)throw R;de(1,0)}}return a.stackSave=()=>ue(),a.stackRestore=o=>se(o),a.stackAlloc=o=>Ai(o),a.setValue=function(o,l,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":J()[o>>>0]=l;break;case"i16":j()[o>>>1>>>0]=l;break;case"i32":N()[o>>>2>>>0]=l;break;case"i64":V[o>>>3]=BigInt(l);break;case"float":Ae()[o>>>2>>>0]=l;break;case"double":Ge()[o>>>3>>>0]=l;break;case"*":ae()[o>>>2>>>0]=l;break;default:bt(`invalid type for setValue: ${p}`)}},a.getValue=function(o,l="i8"){switch(l.endsWith("*")&&(l="*"),l){case"i1":case"i8":return J()[o>>>0];case"i16":return j()[o>>>1>>>0];case"i32":return N()[o>>>2>>>0];case"i64":return V[o>>>3];case"float":return Ae()[o>>>2>>>0];case"double":return Ge()[o>>>3>>>0];case"*":return ae()[o>>>2>>>0];default:bt(`invalid type for getValue: ${l}`)}},a.UTF8ToString=Re,a.stringToUTF8=nr,a.lengthBytesUTF8=eo,(function o(){if(0<br)$r=o;else if(u)t(a),fa();else{for(;0<pi.length;)pi.shift()(a);0<br?$r=o:(a.calledRun=!0,me||(fa(),t(a)))}})(),a.PTR_SIZE=4,i}),Ah=Vi,rl=globalThis.self?.name?.startsWith("em-pthread"),rl&&Vi()}),Li,al,Ze,Oh,Ca,il,nl,qi,sl,Fi,Rh,Gi,Nh,ps=L(()=>{cs(),Li=typeof location>"u"?void 0:location.origin,al=()=>import.meta.url?.startsWith("file:")?new URL(new URL("/_astro/ort.bundle.min.OfoG_cy9.mjs",import.meta.url).href,Li).href:import.meta.url,Ze=al(),Oh=()=>{if(Ze&&!Ze.startsWith("blob:"))return Ze.substring(0,Ze.lastIndexOf("/")+1)},Ca=(e,t)=>{try{let r=t??Ze;return(r?new URL(e,r):new URL(e)).origin===Li}catch{return!1}},il=(e,t)=>{let r=t??Ze;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},nl=(e,t)=>`${t??"./"}${e}`,qi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},sl=async e=>(await import(e)).default,Fi=(Zb(),Ya(Ih)).default,Rh=async()=>{if(!Ze)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ca(Ze))return[void 0,Fi()];let e=await qi(Ze);return[e,Fi(e)]},Gi=(Kb(),Ya(zh)).default,Nh=async(e,t,r)=>{if(!e&&!t&&Gi&&Ze&&Ca(Ze))return[void 0,Gi];{let a="ort-wasm-simd-threaded.jsep.mjs",i=e??il(a,t),n=r&&i&&!Ca(i,t),s=n?await qi(i):i??nl(a,t);return[n?s:void 0,await sl(s)]}}}),Hi,Ia,Ar,Zi,ol,ul,hs,Me,rr=L(()=>{ps(),Ia=!1,Ar=!1,Zi=!1,ol=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ul=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},hs=async e=>{if(Ia)return Promise.resolve();if(Ar)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Zi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ar=!0;let t=e.initTimeout,r=e.numThreads;if(!ul())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=ol();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,n=typeof i=="string"?i:void 0,s=i?.mjs,u=s?.href??s,d=i?.wasm,c=d?.href??d,f=e.wasmBinary,[m,g]=await Nh(u,n,r>1),_=!1,v=[];if(t>0&&v.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),v.push(new Promise((w,x)=>{let $={numThreads:r};if(f)$.wasmBinary=f;else if(c||n)$.locateFile=b=>c??n+b;else if(u&&u.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,u).href;else if(m){let b=Oh();b&&($.locateFile=S=>b+S)}g($).then(b=>{Ar=!1,Ia=!0,Hi=b,w(),m&&URL.revokeObjectURL(m)},b=>{Ar=!1,Zi=!0,x(b)})})),await Promise.race(v),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Me=()=>{if(Ia&&Hi)return Hi;throw new Error("WebAssembly is not initialized yet.")}}),We,ei,ke,fs=L(()=>{rr(),We=(e,t)=>{let r=Me(),a=r.lengthBytesUTF8(e)+1,i=r._malloc(a);return r.stringToUTF8(e,i,a),t.push(i),i},ei=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,n])=>{let s=t?t+i:i;if(typeof n=="object")ei(n,s+".",r,a);else if(typeof n=="string"||typeof n=="number")a(s,n.toString());else if(typeof n=="boolean")a(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},ke=e=>{let t=Me(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetLastError(i,i+a);let n=Number(t.getValue(i,a===4?"i32":"i64")),s=t.getValue(i+a,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Bh,Qb=L(()=>{rr(),fs(),Bh=e=>{let t=Me(),r=0,a=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let n=0;return e?.tag!==void 0&&(n=We(e.tag,a)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,n),r===0&&ke("Can't create run options."),e?.extra!==void 0&&ei(e.extra,"",new WeakSet,(s,u)=>{let d=We(s,a),c=We(u,a);t._OrtAddRunConfigEntry(r,d,c)!==0&&ke(`Can't set a run config entry: ${s} - ${u}.`)}),[r,a]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),n}}}),ll,dl,cl,pl,Mh,Jb=L(()=>{rr(),fs(),ll=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},dl=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},cl=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},pl=(e,t,r)=>{for(let a of t){let i=typeof a=="string"?a:a.name;switch(i){case"webnn":if(i="WEBNN",typeof a!="string"){let s=a?.deviceType;if(s){let u=We("deviceType",r),d=We(s,r);Me()._OrtAddSessionConfigEntry(e,u,d)!==0&&ke(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(i="JS",typeof a!="string"){let s=a;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let u=We("preferredLayout",r),d=We(s.preferredLayout,r);Me()._OrtAddSessionConfigEntry(e,u,d)!==0&&ke(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let n=We(i,r);Me()._OrtAppendExecutionProvider(e,n)!==0&&ke(`Can't append execution provider: ${i}.`)}},Mh=e=>{let t=Me(),r=0,a=[],i=e||{};cl(i);try{let n=ll(i.graphOptimizationLevel??"all"),s=dl(i.executionMode??"sequential"),u=typeof i.logId=="string"?We(i.logId,a):0,d=i.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let f=typeof i.optimizedModelFilePath=="string"?We(i.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(n,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,u,d,c,f),r===0&&ke("Can't create session options."),i.executionProviders&&pl(r,i.executionProviders,a),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let m=We("enableGraphCapture",a),g=We(i.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,m,g)!==0&&ke(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[m,g]of Object.entries(i.freeDimensionOverrides)){if(typeof m!="string")throw new Error(`free dimension override name must be a string: ${m}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=We(m,a);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&ke(`Can't set a free dimension override: ${m} - ${g}.`)}return i.extra!==void 0&&ei(i.extra,"",new WeakSet,(m,g)=>{let _=We(m,a),v=We(g,a);t._OrtAddSessionConfigEntry(r,_,v)!==0&&ke(`Can't set a session config entry: ${m} - ${g}.`)}),[r,a]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ke("Can't release session options."),a.forEach(s=>t._free(s)),n}}}),ur,Ht,Zt,ms,ti,gs,ys,Vn,ne=L(()=>{ur=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ht=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Zt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((i,n)=>i*n,1);return r>0?Math.ceil(a*r):void 0},ms=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ti=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},gs=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ys=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Vn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),_s,Dh=L(()=>{cs(),_s=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),n;try{n=new ArrayBuffer(a)}catch(u){if(u instanceof RangeError){let d=Math.ceil(a/65536);n=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw u}let s=0;for(;;){let{done:u,value:d}=await i.read();if(u)break;let c=d.byteLength;new Uint8Array(n,s,c).set(d),s+=c}return new Uint8Array(n,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),hl,fl,ml,gl,vs,yl,be,It=L(()=>{ne(),hl=["V","I","W","E","F"],fl=(e,t)=>{console.log(`[${hl[e]},${new Date().toISOString()}]${t}`)},vs=(e,t)=>{ml=e,gl=t},yl=(e,t)=>{let r=ti(e),a=ti(ml);r>=a&&fl(r,typeof t=="function"?t():t)},be=(...e)=>{gl&&yl(...e)}}),ws,Ph=L(()=>{ne(),ws=(e,t)=>new(ms(t))(e)}),bs=L(()=>{}),Ki,Ea,za,_l,vl,Qi,Ln,wl,Uh,Xb=L(()=>{It(),bs(),Ki=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ea=[],za=e=>Math.ceil(Number(e)/16)*16,_l=e=>{for(let t=0;t<Ea.length;t++){let r=Ea[t];if(e<=r)return r}return Math.ceil(e/16)*16},vl=1,Qi=()=>vl++,Ln=async(e,t,r,a)=>{let i=za(r),n=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,i),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(a){let d=a();return d.set(new Uint8Array(u,0,r)),d}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},wl=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ki)Ea.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,i=t.byteLength,n=za(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=u.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,a,i)),u.unmap();let c=this.backend.device.createCommandEncoder();c.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([c.finish()]),u.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=za(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Qi();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=_l(e),a,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||n){let u=(i?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?a=u.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:Qi(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ln(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ki.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Uh=(...e)=>new wl(...e)}),bl,Se,ze=L(()=>{bl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Se=e=>new bl(e)}),$l,mr,O,ri,jh,Wh,Vh,pe=L(()=>{$l=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},mr=class{static calcShape(e,t,r=!1){let a=e.length,i=t.length;if(a===0)return t;if(i===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(a<2||i<2)return;let u=$l.calcMatMulShape([e[a-2],e[a-1]],[t[i-2],t[i-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let d=a-u<0?1:e[a-u],c=i-u<0?1:t[i-u];if(d!==c&&d>1&&c>1)return;let f=Math.max(d,c);if(d&&c)s[n-u]=Math.max(d,c);else{if(f>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[a-i])return!1;return!0}},O=class Va{static size(t){return Va.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let i=new Array(a),n=a-1;for(;n>=0;){if(t[n]%r===0){i[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");i[n]=1,r/=t[n],n--}for(n--;n>=0;n--)i[n]=t[n];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Va.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Va.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let i=1;for(let n=r;n<a;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[n])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let i=r-3;i>=0;--i)a[i]=a[i+1]*t[i+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((i,n)=>i+r[n]+r[n+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,i)=>a===r[i])}},ri=class qr{static adjustPoolAttributes(t,r,a,i,n,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=a.length?a.push(r[u+2]):a[u]=r[u+2];for(let u=0;u<a.length;u++)if(u<i.length){if(i[u]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let u=0;u<a.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<a.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<a.length;u++){if(a[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=a[u]||s[u+a.length]>=a[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,i,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)qr.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],a[d],i[d],n,d,d+t.length-2,u)}}static computePoolOutputShape(t,r,a,i,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return qr.computeShapeHelper(t,r,d,a,i,n,s,u),d}static computeConvOutputShape(t,r,a,i,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return qr.computeShapeHelper(!1,t,d,a,i,n,s,u),d}static computeShapeHelper(t,r,a,i,n,s,u,d){if(t)for(let c=0;c<r.length-2;c++)a.push(1);else for(let c=0;c<r.length-2;c++)a.push(qr.adjustPadAndReturnShape(r[c+2],i[c],n[c],s[c],u,c,c+r.length-2,d))}static adjustPadAndReturnShape(t,r,a,i,n,s,u,d){let c=a*(i-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-c)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+i-t;return n[s]=Math.floor(d==="SAME_LOWER"?(f+1)/2:f/2),n[u]=f-n[s],Math.floor((t+f-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-c)/r+1)}},jh=class{static getShapeOfGemmResult(e,t,r,a,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let d=-1;if(a?(u=r[0],d=1):(u=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(i&&!mr.isValidBroadcast(i,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},Wh=-34028234663852886e22,Vh=34028234663852886e22}),gr,Aa,De,Ve,ee,Ee,qn,dr,Ut,Y,Or,B,X,Lh,$s,xl,qh,fe=L(()=>{ne(),pe(),gr=64,Aa=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},De=(e,t=1)=>{let r=Aa(e,t);return typeof r=="string"?r:r[0]},Ve=(e,t=1)=>{let r=Aa(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Ee=e=>e%4===0?4:e%2===0?2:1,qn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,dr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Ut=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Or=(e,t,r,a,i)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,c=Aa(t,i),f=typeof c=="string"?c:c[1],m=typeof c=="string"?c:c[0],g={indices:d,value:f,storage:m,tensor:t},_=j=>typeof j=="string"?j:`${j}u`,v={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=n?"uniforms.":"",x=`${w}${e}_shape`,$=`${w}${e}_strides`,b="";for(let j=0;j<s-1;j++)b+=`
    let dim${j} = current / ${Y($,j,s)};
    let rest${j} = current % ${Y($,j,s)};
    indices[${j}] = dim${j};
    current = rest${j};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=j=>(v.offsetToIndices=!0,s<2?j:`o2i_${e}(${j})`),I=[];if(s>=2)for(let j=s-1;j>=0;j--)I.push(`${Y($,j,s)} * (indices[${j}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${I.join("+")};
  }`,E=j=>(v.indicesToOffset=!0,s<2?j:`i2o_${e}(${j})`),D=(...j)=>s===0?"0u":`${g.indices}(${j.map(_).join(",")})`,M=(j,G)=>s<2?`${j}`:`${Y(j,G,s)}`,F=(j,G,N)=>s<2?`${j}=${N};`:`${Y(j,G,s)}=${N};`,P={},ie=(j,G)=>{v.broadcastedIndicesToOffset=!0;let N=`${G.name}broadcastedIndicesTo${e}Offset`;if(N in P)return`${N}(${j})`;let ae=[];for(let Ae=s-1;Ae>=0;Ae--){let Ge=G.indicesGet("outputIndices",Ae+G.rank-s);ae.push(`${M($,Ae)} * (${Ge} % ${M(x,Ae)})`)}return P[N]=`fn ${N}(outputIndices: ${G.type.indices}) -> u32 {
             return ${ae.length>0?ae.join("+"):"0u"};
           }`,`${N}(${j})`},V=(j,G)=>(()=>{if(g.storage===g.value)return`${e}[${j}]=${G};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${j}]=vec2<u32>(u32(${G}), select(0u, 0xFFFFFFFFu, ${G} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${j}]=vec2<u32>(u32(${G}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${j}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${G}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),he=j=>(()=>{if(g.storage===g.value)return`${e}[${j}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${j}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${j}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${j}] & 0xFFu), bool(${e}[${j}] & 0xFF00u), bool(${e}[${j}] & 0xFF0000u), bool(${e}[${j}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),ye=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${he(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let j=u.map(N=>`d${N}: u32`).join(", "),G=u.map(N=>`d${N}`).join(", ");return`
  fn get_${e}(${j}) -> ${f} {
    return get_${e}ByIndices(${D(G)});
  }`})(),me=(...j)=>{if(j.length!==s)throw new Error(`indices length must be ${s}`);let G=j.map(_).join(",");return s===0?he("0u"):s===1?he(G[0]):(v.get=!0,v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}(${G})`)},_e=j=>s<2?he(j):(v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}ByIndices(${j})`),J=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,we=s<2?"":(()=>{let j=u.map(N=>`d${N}: u32`).join(", "),G=u.map(N=>`d${N}`).join(", ");return`
  fn set_${e}(${j}, value: ${f}) {
    set_${e}ByIndices(${D(G)}, value);
  }`})();return{impl:()=>{let j=[],G=!1;return v.offsetToIndices&&(j.push(S),G=!0),v.indicesToOffset&&(j.push(A),G=!0),v.broadcastedIndicesToOffset&&(Object.values(P).forEach(N=>j.push(N)),G=!0),v.set&&(j.push(we),G=!0),v.setByIndices&&(j.push(J),G=!0),v.get&&(j.push(K),G=!0),v.getByIndices&&(j.push(ye),G=!0),!n&&G&&j.unshift(`const ${x} = ${g.indices}(${r.join(",")});`,`const ${$} = ${g.indices}(${O.computeStrides(r).join(",")});`),j.join(`
`)},type:g,offsetToIndices:T,indicesToOffset:E,broadcastedIndicesToOffset:ie,indices:D,indicesGet:M,indicesSet:F,set:(...j)=>{if(j.length!==s+1)throw new Error(`indices length must be ${s}`);let G=j[s];if(typeof G!="string")throw new Error("value must be string");let N=j.slice(0,s).map(_).join(",");return s===0?V("0u",G):s===1?V(N[0],G):(v.set=!0,v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}(${N}, ${G})`)},setByOffset:V,setByIndices:(j,G)=>s<2?V(j,G):(v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}ByIndices(${j}, ${G});`),get:me,getByOffset:he,getByIndices:_e,usage:a,name:e,strides:$,shape:x,rank:s}},B=(e,t,r,a=1)=>Or(e,t,r,"input",a),X=(e,t,r,a=1)=>Or(e,t,r,"output",a),Lh=(e,t,r)=>Or(e,t,r,"atomicOutput",1),$s=(e,t,r,a=1)=>Or(e,t,r,"internal",a),xl=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=gr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let i=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},qh=(e,t)=>new xl(e,t)}),kl,Ji,Sl,Tl,Cl,Il,Qe,Fh,Gh,jt=L(()=>{ne(),pe(),ze(),fe(),kl=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ji=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Sl=(e,t)=>O.sortBasedOnPerm(e,Ji(e.length,t)),Tl=(e,t,r,a)=>{let i=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+="return a;}"},Cl=(e,t)=>{let r=[],a=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&a.push(t[i]);return{newShape:r,newPerm:a}},Il=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Qe=(e,t)=>{let r=e.dataType,a=e.dims.length,i=Ji(a,t),n=Sl(e.dims,i),s=e.dims,u=n,d=a<2||Il(i,e.dims),c;if(d)return c=v=>{let w=B("input",r,s,4),x=X("output",r,u,4);return`
  ${v.registerUniform("output_size","u32").declareVariables(w,x)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(v/4)}]}},getShaderSource:c};let{newShape:f,newPerm:m}=Cl(e.dims,i),g=O.areEqual(m,[2,3,1]),_=O.areEqual(m,[3,1,2]);if(f.length===2||g||_){s=g?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,u=[s[1],s[0]];let v=16;return c=w=>{let x=B("a",r,s.length),$=X("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(x,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${v+1}>, ${v}>;
  ${w.mainStart([v,v,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${v} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${v}u + local_id.x;
    let input_row = workgroup_id_x * ${v}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${v}u + local_id.x;
    let output_row = workgroup_id_y * ${v}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/v),y:Math.ceil(u[0]/v)},programUniforms:[{type:12,data:w},...ee(s,u)]}},getShaderSource:c}}return c=v=>{let w=B("a",r,s.length),x=X("output",r,u.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(w,x)}

  ${Tl(i,a,w,x)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let v=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...ee(s,u)]}},getShaderSource:c}},Fh=(e,t)=>{kl(e.inputs,t.perm),e.compute(Qe(e.inputs[0],t.perm))},Gh=e=>Se({perm:e.perm})}),El,zl,Al,Ol,Rl,Nl,Bl,Ml,Dl,Pl,at,Hh,Zh,Kh,Qh,Jh,Xh,Yh,ef,tf,rf,Yb=L(()=>{ne(),pe(),fe(),xs(),jt(),El={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},zl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Al={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ol={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Rl=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Nl=(e,t)=>{let r=[],a=e.length;for(let n=0;n<a;n++)t.indexOf(n)===-1&&r.push(e[n]);let i=t.map(n=>e[n]);return[r,i]},Bl=(e,t)=>{let r=e.length+t.length,a=[],i=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?a.push(e[i++]):a.push(1);return a},Ml=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Dl=(e,t)=>{let r=[];if(!Ml(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Pl=(e,t,r,a,i,n,s)=>{let u=r[0].dims,d=O.size(n),c=O.size(s),f=B("_A",r[0].dataType,u),m=X("output",i,n),g=64;d===1&&(g=256);let _=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,v=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(f,m)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Al[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${El[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${zl[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${m.setByOffset("outputIndex",`${a==="mean"?`${m.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${m.type.storage}(${Ol[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:d},programUniforms:[{type:12,data:c}]})}},at=(e,t,r,a)=>{let i=e.inputs.length===1?r:Fn(e.inputs,r),n=i.axes;n.length===0&&!i.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((_,v)=>v));let s=O.normalizeAxes(n,e.inputs[0].dims.length),u=s,d=e.inputs[0],c=Dl(u,e.inputs[0].dims.length);c.length>0&&(d=e.compute(Qe(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],u=Rl(u.length,d.dims.length));let[f,m]=Nl(d.dims,u),g=f;i.keepDims&&(g=Bl(f,s)),e.compute(Pl(t,i.cacheKey,[d],a,e.inputs[0].dataType,g,m),{inputs:[d]})},Hh=(e,t)=>{at(e,"ReduceMeanShared",t,"mean")},Zh=(e,t)=>{at(e,"ReduceL1Shared",t,"l1")},Kh=(e,t)=>{at(e,"ReduceL2Shared",t,"l2")},Qh=(e,t)=>{at(e,"ReduceLogSumExpShared",t,"logSumExp")},Jh=(e,t)=>{at(e,"ReduceMaxShared",t,"max")},Xh=(e,t)=>{at(e,"ReduceMinShared",t,"min")},Yh=(e,t)=>{at(e,"ReduceProdShared",t,"prod")},ef=(e,t)=>{at(e,"ReduceSumShared",t,"sum")},tf=(e,t)=>{at(e,"ReduceSumSquareShared",t,"sumSquare")},rf=(e,t)=>{at(e,"ReduceLogSumShared",t,"logSum")}}),it,Ul,ai,Fn,nt,jl,Wl,Vl,Ll,ql,Fl,Gl,Hl,Zl,Kl,st,af,nf,sf,of,uf,lf,df,cf,pf,hf,xs=L(()=>{ne(),pe(),ze(),fe(),Yb(),it=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ul=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ai=(e,t,r,a,i,n,s=!1,u=!1)=>{let d=[],c=r[0].dims,f=c.length,m=O.normalizeAxes(i,f),g=!u&&m.length===0;c.forEach((w,x)=>{g||m.indexOf(x)>=0?s&&d.push(1):d.push(w)});let _=d.length,v=O.size(d);return{name:e,shaderCache:t,getShaderSource:w=>{let x=[],$=B("_A",r[0].dataType,f),b=X("output",n,_),S=a($,b,m),T=S[2];for(let I=0,A=0;I<f;I++)g||m.indexOf(I)>=0?(s&&A++,T=`for(var j${I}: u32 = 0; j${I} < ${c[I]}; j${I}++) {
                  ${S[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${$.indicesSet("input_indices",I,`j${I}`)}
                  ${T}
                }`):(x.push(`${$.indicesSet("input_indices",I,b.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${T}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...ee(c,d)]})}},Fn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),Se({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},nt=(e,t,r,a)=>{let i=e.inputs,n=i.length===1?r:Fn(i,r);e.compute(ai(t,{hint:n.cacheKey,inputDependencies:["rank"]},[i[0]],n.noopWithEmptyAxes&&n.axes.length===0?Ul:a,n.axes,i[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},jl=(e,t)=>{it(e.inputs),nt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Wl=(e,t)=>{it(e.inputs),nt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Vl=(e,t)=>{it(e.inputs),nt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ll=(e,t)=>{it(e.inputs),nt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ql=(e,t)=>{it(e.inputs),nt(e,"ReduceMax",t,(r,a,i)=>{let n=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Fl=(e,t)=>{it(e.inputs),nt(e,"ReduceMean",t,(r,a,i)=>{let n=1;for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${n});`]})},Gl=(e,t)=>{it(e.inputs),nt(e,"ReduceMin",t,(r,a,i)=>{let n=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Hl=(e,t)=>{it(e.inputs),nt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Zl=(e,t)=>{it(e.inputs),nt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Kl=(e,t)=>{it(e.inputs),nt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},st=(e,t,r)=>{if(t.length===0)return r;let a=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?a*=e[n]:i*=e[n];return i<32&&a>1024},af=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fl(e,t):Hh(e,t)},nf=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wl(e,t):Zh(e,t)},sf=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vl(e,t):Kh(e,t)},of=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ll(e,t):Qh(e,t)},uf=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ql(e,t):Jh(e,t)},lf=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gl(e,t):Xh(e,t)},df=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hl(e,t):Yh(e,t)},cf=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zl(e,t):ef(e,t)},pf=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Kl(e,t):tf(e,t)},hf=(e,t)=>{st(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jl(e,t):rf(e,t)}}),Xi,ff,mf,Gn,e$=L(()=>{ne(),ze(),xs(),Xi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ff=(e,t)=>{Xi(e.inputs);let r=(a,i,n)=>{let s=[];for(let u=0;u<a.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ai("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},mf=(e,t)=>{Xi(e.inputs);let r=(a,i,n)=>{let s=[];for(let u=0;u<a.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ai("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Gn=e=>Se(e)}),Ql,Oa,Jl,Xl,Yl,ca,ed,gf,ks=L(()=>{ne(),pe(),bs(),fe(),Ql=(e,t)=>{let r=e[0],a=e[1],i=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],c=r.dims[1],f=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let m=i.dims[0]/3,g=m,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");m=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let v=c;if(m!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==m+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let x=v+w,$=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[2]!==c||u.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:w,kvSequenceLength:v,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:f,hiddenSize:m,vHiddenSize:_,headSize:Math.floor(m/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Oa=(e,t,r)=>t&&e?`
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
    `,Jl=(e,t,r,a,i,n,s,u)=>{let d=Ee(s?1:n),c=64,f=n/d;f<c&&(c=32);let m=Math.ceil(n/d/c),g=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:f},{type:12,data:m}],_=De(e.dataType,d),v=Ve(1,d),w=["type"];s&&w.push("type"),u&&w.push("type");let x=$=>{let b=X("x",e.dataType,e.dims,d),S=[b],T=s?B("seq_lens",s.dataType,s.dims):void 0;T&&S.push(T);let I=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;I&&S.push(I);let A=Ve(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${c}>;
  var<workgroup> thread_sum: array<f32, ${c}>;
  ${$.registerUniforms(E).declareVariables(...S)}
  ${$.mainStart([c,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Oa(T,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${c}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${v}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${v}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${c}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${v}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${v}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${c}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${v}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${c};${_};${d}`,inputDependencies:w},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(n/c),y:i,z:t*r},programUniforms:g})}},Xl=(e,t,r,a,i,n,s,u,d)=>{let c=s+n.kvSequenceLength,f=[n.batchSize,n.numHeads,n.sequenceLength,c],m=e>1&&a,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=m?[n.batchSize,g,c,n.headSize]:void 0,v=n.nReps?n.nReps:1,w=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=Ee(n.headSize),$=n.headSize/x,b=12,S={x:Math.ceil(c/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},T=[{type:12,data:n.sequenceLength},{type:12,data:$},{type:12,data:c},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:v}],I=m&&a&&O.size(a.dims)>0,A=["type","type"];I&&A.push("type"),i&&A.push("type"),u&&A.push("type"),d&&A.push("type");let E=[{dims:f,dataType:t.dataType,gpuDataType:0}];m&&E.push({dims:_,dataType:t.dataType,gpuDataType:0});let D=M=>{let F=B("q",t.dataType,t.dims,x),P=B("key",r.dataType,r.dims,x),ie=[F,P];if(I){let J=B("past_key",a.dataType,a.dims,x);ie.push(J)}i&&ie.push(B("attention_bias",i.dataType,i.dims));let V=u?B("seq_lens",u.dataType,u.dims):void 0;V&&ie.push(V);let he=d?B("total_sequence_length_input",d.dataType,d.dims):void 0;he&&ie.push(he);let ye=X("output",t.dataType,f),K=[ye];m&&K.push(X("present_key",t.dataType,_,x));let me=Ve(1,x),_e=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${F.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${F.type.storage}, ${b*b}>;
  ${M.registerUniforms(_e).declareVariables(...ie,...K)}
  ${M.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${v===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${v===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Oa(V,he,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&m?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${m?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${me}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&m?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${m?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${me}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${ye.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${i!==void 0};${a!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:E,dispatchGroup:S,programUniforms:T}),getShaderSource:D}},Yl=(e,t,r,a,i,n,s=void 0,u=void 0)=>{let d=n+i.kvSequenceLength,c=i.nReps?i.nReps:1,f=i.vHiddenSize*c,m=e>1&&a,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=m?[i.batchSize,g,d,i.headSize]:void 0,v=[i.batchSize,i.sequenceLength,f],w=12,x={x:Math.ceil(i.vHeadSize/w),y:Math.ceil(i.sequenceLength/w),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:d},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:f},{type:12,data:n},{type:12,data:i.kvSequenceLength},{type:12,data:c}],b=m&&a&&O.size(a.dims)>0,S=["type","type"];b&&S.push("type"),s&&S.push("type"),u&&S.push("type");let T=[{dims:v,dataType:t.dataType,gpuDataType:0}];m&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=A=>{let E=B("probs",t.dataType,t.dims),D=B("v",r.dataType,r.dims),M=[E,D];b&&M.push(B("past_value",a.dataType,a.dims));let F=s?B("seq_lens",s.dataType,s.dims):void 0;s&&M.push(F);let P=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;u&&M.push(P);let ie=[X("output",t.dataType,v)];m&&ie.push(X("present_value",t.dataType,_));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${E.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${E.type.value}, ${w*w}>;
  ${A.registerUniforms(V).declareVariables(...M,...ie)}
  ${A.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${c===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${c===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Oa(F,P,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&m?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${m?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&m?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${m?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:T,dispatchGroup:x,programUniforms:$}),getShaderSource:I}},ca=(e,t,r,a,i,n,s,u,d,c,f=void 0,m=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),_=g>1?c.pastSequenceLength:0,v=_+c.kvSequenceLength,w=d&&O.size(d.dims)>0?d:void 0,x=[t,r];g>1&&s&&O.size(s.dims)>0&&x.push(s),w&&x.push(w),f&&x.push(f),m&&x.push(m);let $=e.compute(Xl(g,t,r,s,w,c,_,f,m),{inputs:x,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Jl($,c.batchSize,c.numHeads,_,c.sequenceLength,v,f,m),{inputs:f&&m?[$,f,m]:[$],outputs:[]});let b=[$,a];g>1&&u&&O.size(u.dims)>0&&b.push(u),f&&b.push(f),m&&b.push(m),e.compute(Yl(g,$,a,u,c,_,f,m),{inputs:b,outputs:g>1?[0,2]:[0]})},ed=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,i=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=m=>{let g=X("output_q",d[0].dataType,r),_=X("output_k",d[0].dataType,r),v=X("output_v",d[0].dataType,r),w=B("input",d[0].dataType,d[0].dims),x=B("weight",d[1].dataType,d[1].dims),$=B("bias",d[2].dataType,d[2].dims),b=w.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${m.registerUniforms(S).declareVariables(w,x,$,g,_,v)}
  ${m.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:c}),getShaderSource:f},{inputs:d,outputs:[-1,-1,-1]})},gf=(e,t)=>{let r=Ql(e.inputs,t),[a,i,n]=ed(e,r);return ca(e,a,i,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),td,rd,ad,yf,t$=L(()=>{ht(),ne(),pe(),ze(),fe(),td=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,i,n)=>{let s=i.length;if(s!==a.length)throw new Error(`${n}: num dimensions != ${s}`);i.forEach((u,d)=>{if(u!==a[d])throw new Error(`${n}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},rd=(e,t)=>{let{epsilon:r,spatial:a,format:i}=t,n=e[0].dims,s=a?Ee(n[n.length-1]):1,u=i==="NHWC"&&n.length>1?s:1,d=O.size(n)/s,c=a,f=c?n.length:n,m=B("x",e[0].dataType,e[0].dims,s),g=B("scale",e[1].dataType,e[1].dims,u),_=B("bias",e[2].dataType,e[2].dims,u),v=B("inputMean",e[3].dataType,e[3].dims,u),w=B("inputVar",e[4].dataType,e[4].dims,u),x=X("y",e[0].dataType,f,s),$=()=>{let S="";if(a)S=`let cOffset = ${n.length===1?"0u":i==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let T=1;T<g.rank;T++)S+=`cIndices[${T}] = outputIndices[${T}];`;S+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(m,g,_,v,w,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${v.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${m.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c?[{type:12,data:d},...ee(n)]:[{type:12,data:d}]})}},ad=e=>Se(e),yf=(e,t)=>{let{inputs:r,outputCount:a}=e,i=ad({...t,outputCount:a});if(Ce.webgpu.validateInputContent&&td(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(rd(r,i))}}),id,nd,_f,r$=L(()=>{pe(),fe(),id=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},nd=e=>{let t=e[0].dims,r=e[0].dims[2],a=O.size(t)/4,i=e[0].dataType,n=B("input",i,t,4),s=B("bias",i,[r],4),u=B("residual",i,t,4),d=X("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:c=>`
  const channels = ${r}u / 4;
  ${c.declareVariables(n,s,u,d)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},_f=e=>{id(e.inputs),e.compute(nd(e.inputs))}}),sd,$e,vf,wf,bf,$f,xf,kf,Sf,Tf,Cf,od,If,Ef,zf,Af,Fr,Of,La,Rf,Nf,Bf,Mf,Df,Pf,Uf,jf,Wf,Vf,Lf,qf,Ff,Gf,Hf,Zf,Yi,Kf,Hn,Zn,Qf,Jf,Xf,ud,ld,Yf,Ss=L(()=>{ne(),pe(),ze(),fe(),sd=(e,t,r,a,i,n,s)=>{let u=Math.ceil(t/4),d="";typeof i=="string"?d=`${i}(a)`:d=i("a");let c=B("inputData",r,[u],4),f=X("outputData",a,[u],4),m=[{name:"vec_size",type:"u32"}];return s&&m.push(...s),`
      ${e.registerUniforms(m).declareVariables(c,f)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",d)}
  }`},$e=(e,t,r,a,i,n=e.dataType,s,u)=>{let d=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:c=>sd(c,O.size(e.dims),e.dataType,n,r,a,u),getRunData:c=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(O.size(c[0].dims)/64/4)},programUniforms:d})}},vf=e=>{e.compute($e(e.inputs[0],"Abs","abs"))},wf=e=>{e.compute($e(e.inputs[0],"Acos","acos"))},bf=e=>{e.compute($e(e.inputs[0],"Acosh","acosh"))},$f=e=>{e.compute($e(e.inputs[0],"Asin","asin"))},xf=e=>{e.compute($e(e.inputs[0],"Asinh","asinh"))},kf=e=>{e.compute($e(e.inputs[0],"Atan","atan"))},Sf=e=>{e.compute($e(e.inputs[0],"Atanh","atanh"))},Tf=e=>Se(e),Cf=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute($e(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},od=e=>{let t,r,a=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Se({min:t,max:r})},If=(e,t)=>{let r=t||od(e.inputs),a=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Ef=e=>{e.compute($e(e.inputs[0],"Ceil","ceil"))},zf=e=>{e.compute($e(e.inputs[0],"Cos","cos"))},Af=e=>{e.compute($e(e.inputs[0],"Cosh","cosh"))},Fr=e=>Se(e),Of=(e,t)=>{let r=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},La=(e="f32")=>`
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
}`,Rf=e=>{let t=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,La(t)))},Nf=e=>{e.compute($e(e.inputs[0],"Exp","exp"))},Bf=e=>{e.compute($e(e.inputs[0],"Floor","floor"))},Mf=e=>{let t=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,La(t)))},Df=(e,t)=>{let r=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Pf=e=>{e.compute($e(e.inputs[0],"Not",t=>`!${t}`))},Uf=e=>{e.compute($e(e.inputs[0],"Neg",t=>`-${t}`))},jf=e=>{e.compute($e(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Wf=e=>{let t=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Vf=e=>{e.compute($e(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Lf=e=>Se(e),qf=(e,t)=>{let r=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Ff=e=>{e.compute($e(e.inputs[0],"Sin","sin"))},Gf=e=>{e.compute($e(e.inputs[0],"Sinh","sinh"))},Hf=e=>{e.compute($e(e.inputs[0],"Sqrt","sqrt"))},Zf=e=>{e.compute($e(e.inputs[0],"Tan","tan"))},Yi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Kf=e=>{e.compute($e(e.inputs[0],"Tanh",Yi))},Hn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Yi("v")};
}
`,Zn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Qf=e=>{let t=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"FastGelu",Zn,Hn(t),void 0,e.inputs[0].dataType))},Jf=(e,t)=>{let r=Ve(e.inputs[0].dataType);return e.compute($e(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Xf=e=>{e.compute($e(e.inputs[0],"Log","log"))},ud=(e,t)=>`
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
`,ld=e=>`quick_gelu_impl(${e})`,Yf=(e,t)=>{let r=Ve(e.inputs[0].dataType);e.compute($e(e.inputs[0],"QuickGelu",ld,ud(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),dd,cd,em,a$=L(()=>{pe(),fe(),Ss(),dd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},cd=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),a=B("bias",e[0].dataType,[e[0].dims[2]],4),i=X("output",e[0].dataType,t,4),n=O.size(t)/4,s=De(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,a,i)}

  ${La(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},em=e=>{dd(e.inputs),e.compute(cd(e.inputs))}}),pd,hd,ot,tm,rm,am,im,nm,sm,om,um,lm,dm,i$=L(()=>{ne(),pe(),fe(),pd=(e,t,r,a,i,n,s,u,d,c,f,m)=>{let g,_;typeof u=="string"?g=_=(b,S)=>`${u}((${b}),(${S}))`:typeof u=="function"?g=_=u:(g=u.scalar,_=u.vector);let v=X("outputData",f,a.length,4),w=B("aData",d,t.length,4),x=B("bData",c,r.length,4),$;if(i)if(n){let b=O.size(t)===1,S=O.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;b||S?$=v.setByOffset("global_idx",_(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):$=`
            let outputIndices = ${v.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",v)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",v)};
            ${v.setByOffset("global_idx",_(s||T?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=v.setByOffset("global_idx",_(w.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,T,I="")=>{let A=`aData[indexA${T}][componentA${T}]`,E=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${v.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${w.broadcastedIndicesToOffset(`outputIndices${T}`,v)};
            let offsetB${T} = ${x.broadcastedIndicesToOffset(`outputIndices${T}`,v)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${S}[${T}] = ${I}(${g(A,E)});
          `};f===9?$=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,x,v)}

        ${m??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},hd=(e,t,r,a,i,n,s=r.dataType)=>{let u=r.dims.map(w=>Number(w)??1),d=a.dims.map(w=>Number(w)??1),c=!O.areEqual(u,d),f=u,m=O.size(u),g=!1,_=!1,v=[c];if(c){let w=mr.calcShape(u,d,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");f=w.slice(),m=O.size(f);let x=O.size(u)===1,$=O.size(d)===1,b=u.length>0&&u[u.length-1]%4===0,S=d.length>0&&d[d.length-1]%4===0;v.push(x),v.push($),v.push(b),v.push(S);let T=1;for(let I=1;I<f.length;I++){let A=u[u.length-I],E=d[d.length-I];if(A===E)T*=A;else break}T%4===0?(_=!0,g=!0):(x||$||b||S)&&(g=!0)}else g=!0;return v.push(g),{name:e,shaderCache:{hint:t+v.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>pd(w,u,d,f,g,c,_,i,r.dataType,a.dataType,s,n),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(f)/4)},...ee(u,d,f)]})}},ot=(e,t,r,a,i,n)=>{e.compute(hd(t,i??"",e.inputs[0],e.inputs[1],r,a,n))},tm=e=>{ot(e,"Add",(t,r)=>`${t}+${r}`)},rm=e=>{ot(e,"Div",(t,r)=>`${t}/${r}`)},am=e=>{ot(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},im=e=>{ot(e,"Mul",(t,r)=>`${t}*${r}`)},nm=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;ot(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
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
      `)},sm=e=>{ot(e,"Sub",(t,r)=>`${t}-${r}`)},om=e=>{ot(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},um=e=>{ot(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},lm=e=>{ot(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},dm=e=>{ot(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),fd,md,gd,yd,cm,pm,n$=L(()=>{ne(),pe(),ze(),fe(),fd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],i=a.dataType,n=a.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((d,c)=>{if(c!==t&&d!==a.dims[c])throw new Error("non concat dimensions must match")})}})},md=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,gd=(e,t)=>{let r=e.length,a=[];for(let i=0;i<r;++i){let n=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?a.push(n):i===0?a.push(`if (inputIndex == ${i}u) { ${n} }`):i===r-1?a.push(`else { ${n} }`):a.push(`else if (inputIndex == ${i}) { ${n} }`)}return a.join(`
`)},yd=(e,t,r,a)=>{let i=O.size(r),n=new Array(e.length),s=new Array(e.length),u=0,d=[],c=[],f=[{type:12,data:i}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],n[w]=u,c.push(e[w].dims.length),s[w]=B(`input${w}`,a,c[w]),d.push("rank"),f.push({type:12,data:n[w]});for(let w=0;w<e.length;++w)f.push(...ee(e[w].dims));f.push(...ee(r));let m=X("output",a,r.length),g=m.indicesGet("indices",t),_=Array.from(Array(n.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),v=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)w.registerUniform(`sizeInConcatAxis${x}`,"u32");return w.declareVariables(...s,m)})()}

  ${md(n.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${m.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${gd(s,m)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}),getShaderSource:v}},cm=(e,t)=>{let r=e.inputs,a=r[0].dims,i=O.normalizeAxis(t.axis,a.length);fd(r,i);let n=a.slice();n[i]=r.reduce((u,d)=>u+(d.dims.length>i?d.dims[i]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(yd(s,i,n,r[0].dataType),{inputs:s})},pm=e=>Se({axis:e.axis})}),Yt,er,tr,Ts,ar=L(()=>{ne(),pe(),Yt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},er=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},tr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ts=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,a]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=e?.activation_params||[Wh,Vh];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ue,hm,Cs=L(()=>{Ue=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},hm=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),fm,s$=L(()=>{fm=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Hr,Is,Es=L(()=>{ne(),pe(),fe(),ar(),Hr=(e,t,r,a,i)=>{let n=a-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${Y(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,Y(i,u+n,a))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Is=(e,t,r,a,i=!1,n)=>{let s=e[0].dims,u=e[1].dims,d=s[s.length-2],c=u[u.length-1],f=s[s.length-1],m=Ee(c),g=Ee(f),_=Ee(d),v=O.size(r)/m/_,w=e.length>2,x=a?a.slice(0,-2):r.slice(0,-2),$=[O.size(x),d,c],b=[{type:12,data:v},{type:12,data:d},{type:12,data:c},{type:12,data:f}];er(t,b),b.push(...ee(x,s,u)),w&&b.push(...ee(e[2].dims)),b.push(...ee($));let S=T=>{let I=$s("batch_dims",e[0].dataType,x.length),A=B("a",e[0].dataType,s.length,g),E=B("b",e[1].dataType,u.length,m),D=X("output",e[0].dataType,$.length,m),M=De(D.type.tensor),F=Yt(t,D.type.value,M),P=[A,E],ie="";if(w){let ye=i?m:1;P.push(B("bias",e[2].dataType,e[2].dims.length,ye)),ie=`${i?`value += bias[col / ${ye}];`:`value += ${D.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];tr(t,V);let he=()=>{let ye=`var a_data: ${A.type.value};`;for(let K=0;K<g;K++)ye+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${m}];`;for(let K=0;K<_;K++){ye+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${g}];`;for(let me=0;me<g;me++)ye+=`
            values[${K}] = fma(${E.type.value}(a_data${g===1?"":`[${me}]`}), b_data${me}, values[${K}]);
`}return ye};return`
  ${T.registerUniforms(V).registerInternalVariables(I).declareVariables(...P,D)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${m})) * ${m};
    var index1 = global_idx / (uniforms.N / ${m});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${Hr("a_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${Hr("b_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${D.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${he()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ie}
      ${F}
      let cur_indices = ${D.type.indices}(batch, row + i, col);
      let offset = ${D.indicesToOffset("cur_indices")};
      ${D.setByOffset(`offset / ${m}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${m};${g};${_};${i}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:S}}}),_d,vd,Kn,en,wd,Qn,bd,ii,zs=L(()=>{ne(),pe(),fe(),ar(),Es(),Cs(),_d=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,vd=(e,t)=>e?`
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
        }`,Kn=(e,t,r="f32",a,i=!1,n=32,s=!1,u=32)=>{let d=t[1]*e[1],c=t[0]*e[0],f=i?d:n,m=i?n:d,g=f/t[0],_=n/t[1];if(!((i&&g===4&&e[1]===4||!i&&(g===3||g===4))&&f%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${f/g}>, ${m}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${c/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${n};

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

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${_d(i,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
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
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${vd(i,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},en=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,wd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Qn=(e,t,r="f32",a,i=!1,n=32,s=!1,u=32,d=!1)=>{let c=e[1]*t[1],f=e[0]*t[0],m=i?c:n,g=i?n:c;if(!(g%t[1]===0&&m%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],v=m/t[0],w=n/t[1],x=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          ${en(i,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
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
let globalRowStart = i32(workgroupId.y) * ${c};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${v};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${v}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${en(i,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
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
      ${wd(i)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${m}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},bd=(e,t,r,a,i=!1)=>{let[n,s,u,d]=a,c=De(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ue(e,c)} {
      var value = ${Ue(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Hr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ue(e,c)} {
      var value = ${Ue(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${Hr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ue(e,c)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ue(e,c)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ii=(e,t,r,a,i=!1,n)=>{let s=e[0].dims,u=e[1].dims,d=s.slice(0,-2),c=u.slice(0,-2),f=a?a.slice(0,-2):r.slice(0,-2),m=O.size(f),g=s[s.length-2],_=s[s.length-1],v=u[u.length-1],w=_%4===0&&v%4===0,x=g<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(v/$[0]/x[0]),Math.ceil(g/$[1]/x[1]),Math.ceil(m/$[2]/x[2])],S=w?4:1,T=[...d,g,_/S],I=T.length,A=[...c,_,v/S],E=A.length,D=[m,g,v/S],M=[{type:6,data:g},{type:6,data:v},{type:6,data:_}];er(t,M),M.push(...ee(f,T,A));let F=["rank","rank"],P=e.length>2;P&&(M.push(...ee(e[2].dims)),F.push("rank")),M.push(...ee(D));let ie=V=>{let he=f.length,ye=$s("batchDims",e[0].dataType,he,1),K=De(e[0].dataType),me=B("a",e[0].dataType,I,S),_e=B("b",e[1].dataType,E,S),J=X("result",e[0].dataType,D.length,S),we=[me,_e];if(P){let Ae=i?S:1;we.push(B("bias",e[2].dataType,e[2].dims.length,Ae))}let j=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];tr(t,j);let G=De(J.type.tensor),N=Yt(t,J.type.value,G),ae=bd(S,P,N,[ye,me,_e,J],i);return`
  ${V.registerUniforms(j).registerInternalVariables(ye).declareVariables(...we,J)}
  ${ae}
  ${w?Kn(x,$,K,ye):Qn(x,$,K,ye)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${w};${i}`,inputDependencies:F},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:M}),getShaderSource:ie}}}),$d,mm,o$=L(()=>{ne(),It(),fe(),ar(),Cs(),s$(),zs(),$d=(e,t,r,a,i=!1,n,s=4,u=4,d=4,c="f32")=>{let f=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},m=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
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
    `,v=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Ue(s,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${v} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ue(s,c)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ue(s,c)}(0.0);`,T=e?a&&r?m(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m(u)}
    }
    return ${Ue(u,c)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${m(u)}
    }
    return ${Ue(u,c)}(0.0);`,I=Ue(d,c),A=Ue(e?s:u,c),E=Ue(e?u:s,c),D=Yt(n,I,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?S:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?T:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${hm(i)}
      ${D}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},mm=(e,t,r,a,i,n,s,u,d)=>{let c=t.format==="NHWC",f=c?e[0].dims[3]:e[0].dims[1],m=r[0],g=c?r[2]:r[3],_=c?r[1]:r[2],v=c?r[3]:r[1],w=c&&(f%4===0||f%3===0)&&v%4===0,x=c?v:g*_,$=c?g*_:v,b=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],T=[Math.ceil(x/b[0]/S[0]),Math.ceil($/b[1]/S[1]),Math.ceil(m/b[2]/S[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let I=w?c&&f%4!==0?3:4:1,A=b[1]*S[1],E=b[0]*S[0],D=Math.max(b[0]*I,b[1]),M=a%A===0,F=i%E===0,P=n%D===0,ie=w?[I,4,4]:[1,1,1],V=[{type:6,data:a},{type:6,data:i},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];er(t,V),V.push(...ee(e[0].dims,e[1].dims));let he=["rank","rank"];s&&(V.push(...ee(e[2].dims)),he.push("rank")),V.push(...ee(r));let ye=K=>{let me=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];tr(t,me);let _e=w?4:1,J=De(e[0].dataType),we=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${J}>`:J}) {
        result[flatIndex] = ${w?`vec4<${J}>`:J}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${J}>`:J}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,j=B("x",e[0].dataType,e[0].dims.length,I===3?1:I),G=B("w",e[1].dataType,e[1].dims.length,_e),N=[j,G],ae=X("result",e[0].dataType,r.length,_e);if(s){let Ae=B("bias",e[2].dataType,e[2].dims.length,_e);N.push(Ae),we+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${J}>`:J} {
          return bias[coords.${c?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${fm("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(me).declareVariables(...N,ae)}
        ${we}
        ${$d(c,M,F,P,s,t,ie[0],ie[1],ie[2],J)}
        ${w?Kn(S,b,J,void 0,!c,D):Qn(S,b,J,void 0,!c,D,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${w};${M};${F};${P};${A};${E};${D}`,inputDependencies:he},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:V}),getShaderSource:ye}}}),xd,tn,Rr,kd,rn,Sd,gm,ym,u$=L(()=>{ne(),It(),pe(),fe(),ar(),Cs(),xd=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},tn=e=>typeof e=="number"?[e,e,e]:e,Rr=(e,t)=>t<=1?e:e+(e-1)*(t-1),kd=(e,t,r,a=1)=>{let i=Rr(t,a);return Math.floor((e[0]*(r-1)-r+i)/2)},rn=(e,t,r,a,i)=>{i==null&&(i=kd(e,t[0],a[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*i)/a[s]+1));return n},Sd=(e,t,r,a,i,n,s,u,d,c)=>{let f,m,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let v=rn([t,r,a,1],[u,d,c],1,[i,n,s],e);m=v[0],g=v[1],_=v[2]}else if(Array.isArray(e)){if(!e.every((w,x,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let v=rn([t,r,a,1],[u,d,c],1,[i,n,s],e[0]);m=v[0],g=v[1],_=v[2]}else if(e==="SAME_UPPER"){m=Math.ceil(t/i),g=Math.ceil(r/n),_=Math.ceil(a/s);let v=(m-1)*i+u-t,w=(g-1)*n+d-r,x=(_-1)*s+c-a,$=Math.floor(v/2),b=v-$,S=Math.floor(w/2),T=w-S,I=Math.floor(x/2),A=x-I;f={top:S,bottom:T,left:I,right:A,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:m,outHeight:g,outWidth:_}},gm=(e,t,r,a,i,n=!1,s="channelsLast")=>{let u,d,c,f,m;if(s==="channelsLast")[u,d,c,f,m]=e;else if(s==="channelsFirst")[u,m,d,c,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,_,v,w]=t,[x,$,b]=tn(r),[S,T,I]=tn(a),A=Rr(_,S),E=Rr(v,T),D=Rr(w,I),{padInfo:M,outDepth:F,outHeight:P,outWidth:ie}=Sd(i,d,c,f,x,$,b,A,E,D),V=n?g*m:g,he=[0,0,0,0,0];return s==="channelsFirst"?he=[u,V,F,P,ie]:s==="channelsLast"&&(he=[u,F,P,ie,V]),{batchSize:u,dataFormat:s,inDepth:d,inHeight:c,inWidth:f,inChannels:m,outDepth:F,outHeight:P,outWidth:ie,outChannels:V,padInfo:M,strideDepth:x,strideHeight:$,strideWidth:b,filterDepth:_,filterHeight:v,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:E,effectiveFilterWidth:D,dilationDepth:S,dilationHeight:T,dilationWidth:I,inShape:e,outShape:he,filterShape:t}},ym=(e,t,r,a,i,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],d={x:r.map((x,$)=>$)},c=[Math.ceil(xd(d.x.map(x=>r[x]))/u[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let f=1,m=O.size(r),g=[{type:12,data:m},{type:12,data:a},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];er(t,g),g.push(...ee(e[0].dims,e[1].dims));let _=["rank","rank"],v=e.length===3;v&&(g.push(...ee(e[2].dims)),_.push("rank")),g.push(...ee(r));let w=x=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];tr(t,$);let b=1,S=De(e[0].dataType),T=B("x",e[0].dataType,e[0].dims.length,f),I=B("W",e[1].dataType,e[1].dims.length,b),A=[T,I],E=X("result",e[0].dataType,r.length,b),D="";if(v){let P=B("bias",e[2].dataType,e[2].dims.length,b);A.push(P),D+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?Y("coords",4,5):Y("coords",1,5)}];
        }`}let M=Ue(f,S),F=Yt(t,M,S);return`
            ${D}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${x.registerUniforms($).declareVariables(...A,E)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${Y("coords",0,T.rank)};
              let d2 = ${s?Y("coords",T.rank-1,T.rank):Y("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?Y("coords",1,T.rank):Y("coords",2,T.rank)},
              ${s?Y("coords",2,T.rank):Y("coords",3,T.rank)},
              ${s?Y("coords",3,T.rank):Y("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Y("uniforms.x_shape",1,T.rank):Y("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?Y("uniforms.x_shape",2,T.rank):Y("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?Y("uniforms.x_shape",3,T.rank):Y("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?Y("uniforms.x_shape",4,T.rank):Y("uniforms.x_shape",1,T.rank)};
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
              ${F}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${v}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:g}),getShaderSource:w}}}),_m,vm,l$=L(()=>{ne(),pe(),fe(),ar(),_m=(e,t,r,a)=>{let i=e.length>2,n=i?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,d=t.format==="NHWC",c=d?r[3]:r[1],f=c/t.group,m=d&&f>=4?Ee(c):1,g=O.size(r)/m,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];er(t,_),_.push(...ee(s,[u[0],u[1],u[2],u[3]/m]));let v=i?["rank","rank","rank"]:["rank","rank"];_.push(...ee([r[0],r[1],r[2],r[3]/m]));let w=x=>{let $=X("output",e[0].dataType,r.length,m),b=De($.type.tensor),S=Yt(t,$.type.value,b),T=B("x",e[0].dataType,s.length),I=B("w",e[1].dataType,u.length,m),A=[T,I];i&&A.push(B("b",e[2].dataType,e[2].dims,m));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];tr(t,E);let D=d?`
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
  ${x.registerUniforms(E).declareVariables(...A,$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${m} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${D}
    ${n}
    ${S}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${m}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},vm=(e,t,r,a)=>{let i=e.length>2,n=Ee(r[3]),s=Ee(r[2]),u=O.size(r)/n/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],f=[r[0],r[1],r[2],r[3]/n],m=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];er(t,m),m.push(...ee(d,c,f));let g=(s-1)*t.strides[1]+c[1],_=v=>{let w=X("output",e[0].dataType,f.length,n),x=De(w.type.tensor),$=Yt(t,w.type.value,x),b=B("x",e[0].dataType,d.length,n),S=B("w",e[1].dataType,c.length,n),T=[b,S];i&&T.push(B("b",e[2].dataType,e[2].dims,n));let I=i?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return tr(t,A),`
  ${v.registerUniforms(A).declareVariables(...T,w)}
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

    var x_vals: array<${b.type.value}, ${g}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${c[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${c[1]}; w_width++) {
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
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${g};${c[0]};${c[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:_}}}),Td,Ra,Cd,Na,Jn,an,Id,Ed,Xn,d$=L(()=>{pe(),o$(),u$(),zs(),l$(),ar(),Es(),jt(),Td=(e,t,r,a,i,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),d=u.length,c=t[0],f=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),m=u.map((g,_)=>g+a[_]+a[_+d]).map((g,_)=>Math.floor((g-f[_]+i[_])/i[_]));return m.splice(0,0,s),m.splice(n?3:1,0,c),m},Ra=[2,3,1,0],Cd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Na=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let a=e.pads.slice();ri.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:a}),i},Jn=e=>{let t=Ts(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,d=e.strides,c=e.w_is_const();return{autoPad:a,format:r,dilations:i,group:n,kernelShape:s,pads:u,strides:d,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},an=(e,t,r,a)=>{let i=r.format==="NHWC",n=Td(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let A=[t[0]];if(i){let E=e.kernelCustomData.wT??e.compute(Qe(t[1],Ra),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),A.push(E)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(vm(A,r,n,a),{inputs:A}):e.compute(_m(A,r,n,a),{inputs:A});return}let s=t.length===3,u=t[0].dims[i?1:2],d=t[0].dims[i?2:3],c=t[0].dims[i?3:1],f=t[1].dims[2],m=t[1].dims[3],g=n[i?1:2],_=n[i?2:3],v=n[i?3:1],w=i&&f===u&&m===d&&r.pads[0]===0&&r.pads[1]===0;if(w||f===1&&m===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=n[0],E,D,M,F=[];if(i){let V=e.kernelCustomData.wT??e.compute(Qe(t[1],Ra),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),w){let he=u*d*c;E=t[0].reshape([1,A,he]),D=V.reshape([1,he,v]),M=[1,A,v]}else E=t[0].reshape([A,u*d,c]),D=V.reshape([1,c,v]),M=[A,g*_,v];F.push(E),F.push(D)}else E=t[0].reshape([A,c,u*d]),D=t[1].reshape([1,v,c]),M=[A,v,g*_],F.push(D),F.push(E);s&&F.push(t[2]);let P=M[2],ie=F[0].dims[F[0].dims.length-1];P<8&&ie<8?e.compute(Is(F,r,n,M,i,a),{inputs:F}):e.compute(ii(F,r,n,M,i,a),{inputs:F});return}let x=!0,$=e.kernelCustomData.wT??e.compute(Qe(t[1],Ra),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];s&&b.push(t[2]);let S=i?g*_:v,T=i?v:g*_,I=f*m*c;e.compute(mm(b,r,n,S,T,I,s,x,a),{inputs:b})},Id=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),d=Na({...t,pads:i,strides:n,dilations:s,kernelShape:u},a);an(e,a,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Ed=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Na(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=gm(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,a);e.compute(ym(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},Xn=(e,t)=>{if(Cd(e.inputs,t),e.inputs[0].dims.length===3)Id(e,t);else if(e.inputs[0].dims.length===5)Ed(e,e.inputs,t);else{let r=Na(t,e.inputs);an(e,e.inputs,r)}}}),wm,c$=L(()=>{ne(),It(),pe(),fe(),wm=(e,t,r)=>{let a=e.length>2,i=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,d=u[2]/s,c=u[3],f=n?Ee(d):1,m=n?Ee(c):1,g=n?c===1?f:m:1,_=O.size(i)/m,v=[Math.ceil(_/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],x=[t.strides[0],t.strides[1]],$=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],b=[t.dilations[0],t.dilations[1]],S=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],T=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:_},{type:12,data:x},{type:12,data:$},{type:12,data:b},{type:12,data:S},{type:6,data:T},{type:12,data:d},{type:12,data:c},...ee(e[0].dims,e[1].dims)];a&&(I.push(...ee(e[2].dims)),w.push("rank")),I.push(...ee(i));let A=E=>{let D=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:S.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],M=De(e[0].dataType),F=n?1:2,P=n?2:3,ie=n?3:1,V=B("W",e[1].dataType,e[1].dims.length,g),he=B("Dy",e[0].dataType,e[0].dims.length,f),ye=[he,V];a&&ye.push(B("bias",e[2].dataType,[i[ie]].length,m));let K=X("result",e[0].dataType,i.length,m),me=()=>{let J="";if(f===1)J+=`
        let w_offset = ${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${V.getByOffset(`w_offset / ${g}`)};
        dotProd = dotProd + xValue * wValue;`;else if(c===1)J+=`
          let wValue = ${V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${g}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let we=0;we<f;we++)J+=`
            let wValue${we} = ${V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${we}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${we}] * wValue${we};`;return J},_e=`
            let outputIndices = ${K.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${K.indicesGet("outputIndices",0)};
            let d1 = ${K.indicesGet("outputIndices",ie)};
            let r = ${K.indicesGet("outputIndices",F)};
            let c = ${K.indicesGet("outputIndices",P)};
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
              let dyR = (${M}(dyRCorner) + ${M}(wR)) / ${M}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${M}(uniforms.Dy_shape[${F}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${M}(dyCCorner) + ${M}(wC)) / ${M}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${M}(uniforms.Dy_shape[${P}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${f}) {
                  let xValue = ${n?he.getByOffset(`${he.indicesToOffset(`${he.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):he.get("batch","inputChannel","idyR","idyC")};
                  ${me()}
                  inputChannel = inputChannel + ${f};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${m}]`:""};
            ${K.setByOffset("global_idx","value")};
          `;return`
    ${E.registerUniforms(D).declareVariables(...ye,K)}
      ${E.mainStart()}
      ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${_e}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${g}${m}${c===1}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:A}}}),zd,Ad,Od,nn,bm,Rd,sn,Nd,$m,p$=L(()=>{c$(),ar(),jt(),zd=(e,t,r,a,i,n)=>(e-1)*t+r+(a-1)*i+1-n,Ad=(e,t,r,a,i)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=n,r[i]=e-n):t==="SAME_LOWER"&&(r[a]=e-n,r[i]=n)},Od=(e,t,r,a,i,n,s,u,d,c)=>{let f=e.length-2,m=c.length===0;d.length<f&&d.push(...Array(f-d.length).fill(0));let g=e[0],_=t[u?3:1]*i;for(let v=0,w=e.length-f-(u?1:0);v<f;++v,++w){let x=e[w],$=m?x*s[v]:c[v],b=zd(x,s[v],n[v],t[w],r[v],$);Ad(b,a,n,v,v+f),m&&c.push(s[v]*(x-1)+d[v]+(t[w]-1)*r[v]+1-n[v]-n[v+f])}c.splice(0,0,g),c.splice(u?3:1,0,_)},nn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((m,g)=>m*g,1)===0){r.length=0;for(let m=2;m<t[1].dims.length;++m)r.push(t[1].dims[m])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let i=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,d=e.dilations.slice();if(d.reduce((m,g)=>m+g,0)===0){let m=t[0].dims.length-2;d=new Array(m).fill(1)}let c=e.strides.slice();if(c.reduce((m,g)=>m+g,0)===0){let m=t[0].dims.length-2;c=new Array(m).fill(1)}Od(u,r,d,e.autoPad,e.group,i,c,a,s,n);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:i,outputPadding:s,outputShape:n,dilations:d,strides:c}),f},bm=e=>{let t=Ts(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,n=e.group,s=e.kernelShape,u=e.pads,d=e.strides,c=e.wIsConst(),f=e.outputPadding,m=e.outputShape;return{autoPad:a,format:r,dilations:i,group:n,kernelShape:s,outputPadding:f,outputShape:m,pads:u,strides:d,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Rd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},sn=(e,t,r,a)=>{let i=e.kernelCustomData.wT??e.compute(Qe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let n=[t[0],i];t.length===3&&n.push(t[2]),e.compute(wm(n,r,a),{inputs:n})},Nd=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),i=[1].concat(i);let d=t.outputPadding;d=[0].concat(d);let c=nn({...t,pads:u,strides:s,dilations:n,kernelShape:i,outputPadding:d},a);sn(e,a,c,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},$m=(e,t)=>{if(Rd(e.inputs,t),e.inputs[0].dims.length===3)Nd(e,t);else{let r=nn(t,e.inputs);sn(e,e.inputs,r)}}}),Bd,xm,km,h$=L(()=>{ne(),pe(),ze(),fe(),Bd=(e,t,r,a)=>{let i=O.size(t),n=t.length,s=B("input",e,n),u=X("output",e,n),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),c=O.normalizeAxis(d,n),f=m=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=Y("uniforms.input_shape","uniforms.axis",n),v=a.reverse?g+(a.exclusive?" + 1":""):"0",w=a.reverse?_:g+(a.exclusive?"":" + 1");return`
                ${m.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${m.mainStart()}
                  ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${v};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:c},...ee(t,t)]}),getShaderSource:f}},xm=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,i=e.inputs[1];e.compute(Bd(a,r,i,t),{inputs:[0]})},km=e=>{let t=e.exclusive===1,r=e.reverse===1;return Se({exclusive:t,reverse:r})}}),Md,Dd,Pd,Sm,Tm,f$=L(()=>{ne(),pe(),ze(),fe(),Md=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Dd=(e,t,r,a)=>{let i=[];i.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)i.push(r.indicesSet("a",e[n],`i[${n}]`));return i.push("return a;}"),i.join(`
`)},Pd=(e,t)=>{let r,a,i,n,s,u,d=t.format==="NHWC",c=t.blocksize,f=t.mode==="DCR";d?([r,a,i,n]=e.dims,s=f?[r,a,i,c,c,n/c**2]:[r,a,i,n/c**2,c,c],u=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,i,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,c,c,n/c**2,a,i]:[r,n/c**2,c,c,a,i],u=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let m=e.reshape(s),g=m.dims.length,_=e.dataType,v=B("a",_,g),w=X("output",_,g),x=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(v,w)}

  ${Dd(u,g,v,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=d?[r,a*c,i*c,n/c**2]:[r,n/c**2,a*c,i*c],S=O.size(b),T=m.dims,I=O.sortBasedOnPerm(T,u);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...ee(T,I)]}},getShaderSource:x}},Sm=(e,t)=>{Md(e.inputs),e.compute(Pd(e.inputs[0],t))},Tm=e=>Se({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ba,Nr,on,Ud,jd,Wd,Vd,un,Ld,Cm,Im,m$=L(()=>{ne(),pe(),ze(),fe(),Ba="[a-zA-Z]|\\.\\.\\.",Nr="("+Ba+")+",on="^"+Nr+"$",Ud="("+Nr+",)*"+Nr,jd="^"+Ud+"$",Wd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Vd=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(jd)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,n)=>{let s=e[n].dims.slice();if(!i.match(RegExp(on)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,s,n);this.lhs.push(u)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,n])=>n.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(Nr)))throw new Error("Invalid RHS");a.match(RegExp(Ba,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(i);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let i=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(on))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(Ba,"g")),c=new Wd(a);return d?.forEach((f,m)=>{if(f==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let g=i-d.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let v=String.fromCharCode(48+_);c.addSymbol(v,m+_),this.addSymbol(v,r[u++],a)}}else c.addSymbol(f,m+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[u++],a)}),c}},un=e=>e+"_max",Ld=(e,t,r,a)=>{let i=e.map(c=>c.length).map((c,f)=>B(`input${f}`,t,c)),n=O.size(a),s=X("output",t,a.length),u=[...r.symbolToInfo.keys()].filter(c=>!r.rhs.symbolToIndices.has(c)),d=c=>{let f=[],m="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",v=[],w=[],x=[],$=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,I)=>{if(r.rhs.symbolToIndices.has(I)){let A=r.rhs.symbolToIndices.get(I)?.[0];A!==void 0&&r.lhs.forEach((E,D)=>{if(T.inputIndices.includes(D)){let M=E.symbolToIndices.get(I);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(F=>{f.push(`${i[D].indicesSet(`input${D}Indices`,F,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,E)=>{if(T.inputIndices.includes(E)){let D=A.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(M=>{v.push(`${i[E].indicesSet(`input${E}Indices`,M,`${I}`)}`)}),$.push(`prod *= ${i[E].getByIndices(`input${E}Indices`)};`)}}),w.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${un(I)}; ${I}++) {`),x.push("}")});let S=b?[...f,`let sum = ${i.map((T,I)=>T.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...f,g,...w,...v,m,...$,_,...x];return`
            ${c.registerUniforms(u.map(T=>({name:`${un(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((T,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let c=u.filter(m=>r.symbolToInfo.has(m)).map(m=>({type:12,data:r.symbolToInfo.get(m)?.dimValue||0}));c.push({type:12,data:n});let f=e.map((m,g)=>[...ee(m)]).reduce((m,g)=>m.concat(g),c);return f.push(...ee(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}},getShaderSource:d}},Cm=(e,t)=>{let r=new Vd(e.inputs,t.equation),a=r.outputDims,i=e.inputs.map((n,s)=>n.dims);e.compute(Ld(i,e.inputs[0].dataType,r,a))},Im=e=>{let t=e.equation.replace(/\s+/g,"");return Se({equation:t})}}),qd,ln,Fd,Gd,Em,g$=L(()=>{ne(),pe(),fe(),qd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;a<r.length&&i<t.length;++a,++i)if(r[a]!==t[i]&&r[a]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ln=(e,t)=>{let r=e.length-t.length,a=[];for(let i=0;i<r;++i)a.push(e[i]);for(let i=0;i<t.length;++i)a.push(t[i]===1?e[i+r]:t[i]);return a},Fd=(e,t)=>e.length>t.length?ln(e,t):ln(t,e),Gd=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=Fd(t,r),i=e[0].dataType,n=i===9||O.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||a.length>0&&a[a.length-1]%4===0?4:1,d=Math.ceil(O.size(a)/u),c=m=>{let g=B("input",i,t.length,s),_=X("output",i,a.length,u),v;if(i===9){let w=(x,$,b="")=>`
          let outputIndices${$} = ${_.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${g.broadcastedIndicesToOffset(`outputIndices${$}`,_)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${x}[${$}] = ${b}(${g.getByOffset(`index${$}`)}[component${$}]);
        `;v=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else v=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${m.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${v}`},f=[{type:12,data:d},...ee(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f})}},Em=e=>{qd(e.inputs),e.compute(Gd(e.inputs),{inputs:[0]})}}),Hd,zm,y$=L(()=>{ne(),pe(),fe(),Ss(),Hd=e=>{let t=e[0].dataType,r=O.size(e[0].dims),a=O.size(e[1].dims),i=a%4===0,n=s=>{let u=B("x",t,[1],4),d=B("bias",t,[1],4),c=X("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],m=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${d.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=i?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${m(0)}${m(1)}${m(2)}${m(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(u,d,c)}

    ${Hn(Ve(t))}

    ${s.mainStart(gr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",Zn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/gr/4)}})}},zm=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Qf(e):e.compute(Hd(e.inputs))}}),Zd,Kd,Am,Om,_$=L(()=>{ne(),pe(),ze(),fe(),Zd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Kd=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,n=O.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(n,1,...a);let u=r[n],d=e[0].dataType===9?4:1,c=Math.ceil(O.size(s)/d),f=[{type:12,data:c},{type:6,data:u},{type:12,data:n},...ee(e[0].dims,e[1].dims,s)],m=g=>{let _=B("data",e[0].dataType,e[0].dims.length,d),v=B("inputIndices",e[1].dataType,e[1].dims.length),w=X("output",e[0].dataType,s.length,d),x=b=>{let S=a.length,T=`var indicesIndices${b}  = ${v.type.indices}(0);`;for(let I=0;I<S;I++)T+=`${S>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;T+=`
          var idx${b} = ${v.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let I=0,A=0;I<i;I++)I===n?(T+=`${i>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,A+=S):(T+=`${i>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${A}]`:`outputIndices${b}`};`,A++);return T},$;if(e[0].dataType===9){let b=(S,T,I="")=>`
          let outputIndices${T} = ${w.offsetToIndices(`outputOffset + ${T}u`)};
          ${x(T)};
          let offset${T} = ${_.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${S}[${T}] = ${I}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;$=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,v,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:m}},Am=e=>Se({axis:e.axis}),Om=(e,t)=>{let r=e.inputs;Zd(r),e.compute(Kd(e.inputs,t))}}),Qd,Rm,Nm,v$=L(()=>{ne(),pe(),fe(),Qd=(e,t,r,a,i,n,s,u,d)=>{let c=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:d}],f=[n];c.push(...ee(t.dims,f));let m=g=>{let _=B("indices_data",t.dataType,t.dims.length),v=X("input_slice_offsets_data",12,1,1),w=[_,v],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(x).declareVariables(...w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:m},{inputs:[t],outputs:[-1]})[0]},Rm=(e,t)=>{let r=e.inputs,a=r[0].dims,i=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=O.sizeToDimension(n,n.length-1),d=O.sizeFromDimension(a,t.batchDims+s),c=O.sizeToDimension(a,t.batchDims),f=O.sizeFromDimension(a,t.batchDims),m=u/c,g=new Array(s),_=d;for(let T=0;T<s;++T)g[s-1-T]=_,_*=a[t.batchDims+s-1-T];let v=Qd(e,r[1],g,t.batchDims,a,u,m,f,s),w=t.batchDims+s;if(w>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(a.slice(w)),$=O.size(x),b=[{type:12,data:$},{type:12,data:d},...ee(r[0].dims,v.dims,x)],S=T=>{let I=B("data",r[0].dataType,r[0].dims.length),A=B("slice_offsets",12,v.dims.length),E=X("output",r[0].dataType,x.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,A,E)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:S},{inputs:[r[0],v]})},Nm=e=>({batchDims:e.batch_dims,cacheKey:""})}),Jd,Xd,Bm,Mm,w$=L(()=>{ne(),pe(),ze(),fe(),Jd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,i=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==i.dims.length||!i.dims.map((u,d)=>d===r?Math.ceil(u/a)===n.dims[d]:u===n.dims[d]).reduce((u,d)=>u&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,d)=>u===n.dims[d]).reduce((u,d)=>u&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Xd=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,n=O.normalizeAxis(t.gatherAxis,i),s=O.normalizeAxis(t.quantizeAxis,i),u=r.slice(0);u.splice(n,1,...a);let d=O.size(u),c=e[2].dataType,f=e[0].dataType===22,m=[{type:12,data:d},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...ee(...e.map((_,v)=>_.dims),u)],g=_=>{let v=B("data",e[0].dataType,e[0].dims.length),w=B("inputIndices",e[1].dataType,e[1].dims.length),x=B("scales",e[2].dataType,e[2].dims.length),$=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=X("output",c,u.length),S=[v,w,x];$&&S.push($);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(T).declareVariables(...S,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${v.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${v.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${v.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${v.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${v.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${v.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ve(c)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,v)=>v!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,v)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:c}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:g}},Bm=(e,t)=>{let r=e.inputs;Jd(r,t),e.compute(Xd(e.inputs,t))},Mm=e=>Se({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Yd,ec,Dm,Pm,b$=L(()=>{ne(),pe(),ze(),fe(),Yd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ec=(e,t)=>{let r=e[0].dims,a=e[0].dataType,i=r.length,n=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,i),d=r[u],c=n.slice(0),f=O.size(c),m=B("input",a,i),g=B("indicesInput",s,n.length),_=X("output",a,c.length),v=[{type:12,data:f},{type:6,data:d},{type:12,data:u}];return v.push(...ee(r,n,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:v}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${m.type.indices}(outputIndices);
      ${m.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${m.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Dm=e=>Se({axis:e.axis}),Pm=(e,t)=>{let r=e.inputs;Yd(r),e.compute(ec(e.inputs,t))}}),tc,rc,Um,jm,$$=L(()=>{ne(),pe(),fe(),tc=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},rc=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[i,n,s]=jh.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),u=[i,n];if(!u)throw new Error("Can't use gemm on the given tensors");let d=16,c=Math.ceil(n/d),f=Math.ceil(i/d),m=!0,g=O.size(u),_=[{type:12,data:m?c:g},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],v=["type","type"];e.length===3&&(_.push(...ee(e[2].dims)),v.push("rank")),_.push(...ee(u));let w=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",T=B("a",e[0].dataType,e[0].dims),I=B("b",e[1].dataType,e[1].dims),A=T.type.value,E=null,D=[T,I];e.length===3&&(E=B("c",e[2].dataType,e[2].dims.length),D.push(E));let M=X("output",e[0].dataType,u.length);D.push(M);let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(F).declareVariables(...D)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${A}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=$=>{let b=B("a",e[0].dataType,e[0].dims),S=B("b",e[1].dataType,e[1].dims),T=null,I=[b,S];e.length===3&&(T=B("c",e[2].dataType,e[2].dims.length),I.push(T));let A=X("output",e[0].dataType,u.length);I.push(A);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],D="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let F=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(E).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${d}>, ${d}>;
  ${$.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${D}
      }
      workgroupBarrier();
    }

    ${F}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return m?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:c*f},programUniforms:_}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:w}},Um=e=>{let t=e.transA,r=e.transB,a=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:a,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},jm=(e,t)=>{tc(e.inputs),e.compute(rc(e.inputs,t))}}),_t,kt,Vt,Lt,ac,ic,nc,sc,oc,uc,lc,dc,Wm,Vm,x$=L(()=>{ne(),pe(),ze(),fe(),[_t,kt,Vt,Lt]=[0,1,2,3],ac=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},ic=`
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
`,nc=e=>`
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
`,sc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,oc=e=>`
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
`,uc=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${_t}] = batch;
     indices[${kt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Vt}] = u32(r);
            indices[${Lt}] = u32(c);
          }
        `;case"border":return`
          indices[${Vt}] = u32(clamp(r, 0, H - 1));
          indices[${Lt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Vt}] = gs_reflect(r, border[1], border[3]);
          indices[${Lt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,lc=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${_t}], indices[${kt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${_t}], indices[${kt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${_t}], indices[${kt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${_t}], indices[${kt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${_t}], indices[${kt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${_t}], indices[${kt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,dc=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=B("grid",e[1].dataType,a.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[_t,kt,Vt,Lt]=[0,3,1,2]);let s=X("output",e[0].dataType,n.length),u=r.type.value,d=O.size(n),c=[{type:12,data:d},...ee(e[0].dims,a,n)],f=m=>`
  ${m.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${ic}
  ${nc(u)}
  ${sc(t)}
  ${oc(t)}
  ${uc(r,u,t)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Vt}]);
      let W_in = i32(uniforms.x_shape[${Lt}]);

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
      var grid_indices = vec3<u32>(indices[${_t}], indices[${Vt}], indices[${Lt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${lc(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:m=>{let g=O.size(n);return{outputs:[{dims:n,dataType:m[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:c}},getShaderSource:f}},Wm=(e,t)=>{ac(e.inputs),e.compute(dc(e.inputs,t))},Vm=e=>Se({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Le,cc,Lm,dn,pc,Gr,qm,Fm=L(()=>{ne(),pe(),ze(),bs(),ks(),fe(),jt(),Le=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,cc=(e,t)=>{let r=e[0],a=Le(e,1),i=Le(e,2),n=Le(e,3),s=Le(e,4),u=Le(e,5),d=Le(e,6),c=Le(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],m=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=m,v=0,w=0,x=Math.floor(g/t.numHeads);if(d&&c&&O.size(d.dims)&&O.size(c.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==f||c.dims[1]!==t.numHeads||c.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=d.dims[2],w=d.dims[2]}else if(d&&O.size(d.dims)||c&&O.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(a&&O.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,_=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,_=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,_=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(n&&O.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=v+_,S=0;if(s&&O.size(s.dims)>0){S=8;let E=s.dims;throw E.length===1?E[0]===f?S=1:E[0]===3*f+2&&(S=3):E.length===2&&E[0]===f&&E[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,I=g;if(i&&O.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(_!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(_!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],T=!0}}let A=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[2]!==m||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:m,pastSequenceLength:v,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:I,headSize:x,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:A,passPastInKv:T,qkvFormat:$}},Lm=e=>Se({...e}),dn=Se({perm:[0,2,1,3]}),pc=(e,t,r,a,i,n,s)=>{let u=[a,i,n],d=O.size(u),c=[{type:12,data:d},{type:12,data:s},{type:12,data:n}],f=m=>{let g=X("qkv_with_bias",t.dataType,u),_=B("qkv",t.dataType,u),v=B("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${m.registerUniforms(w).declareVariables(_,v,g)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Gr=(e,t,r,a,i,n,s,u)=>{let d=n;if(s&&O.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=pc(e,n,s,t,a,r*i,u),d=d.reshape([t,a,r,i]),r===1||a===1?d:e.compute(Qe(d,dn.perm),{inputs:[d],outputs:[-1]})[0]}else return n.dims.length===3&&(d=n.reshape([t,a,r,i])),r===1||a===1?d:e.compute(Qe(d,dn.perm),{inputs:[d],outputs:[-1]})[0]},qm=(e,t)=>{let r=cc(e.inputs,t),a=e.inputs[0],i=Le(e.inputs,1),n=Le(e.inputs,2),s=Le(e.inputs,3),u=Le(e.inputs,4),d=Le(e.inputs,5),c=Le(e.inputs,6),f=Le(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let m=i&&n&&i.dims.length===4&&n.dims.length===4,g=Gr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(m)return ca(e,g,i,n,u,void 0,c,f,d,r);if(!i||!n)throw new Error("key and value must be provided");let _=Gr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),v=Gr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);ca(e,g,_,v,u,void 0,c,f,d,r)}}),hc,fc,mc,gc,Yn,Gm,Hm,Zm=L(()=>{ne(),pe(),ze(),fe(),hc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},fc=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),a=r.length),Se({numOutputs:a,axis:t.axis,splitSizes:r})},mc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,gc=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let i=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(i):a===0?r.push(`if (output_number == ${a}u) { ${i} }`):a===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${a}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Yn=(e,t)=>{let r=e[0].dims,a=O.size(r),i=e[0].dataType,n=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=B("input",i,r.length),d=new Array(t.numOutputs),c=[],f=[],m=0,g=[{type:12,data:a}];for(let v=0;v<t.numOutputs;v++){m+=t.splitSizes[v],d[v]=m;let w=r.slice();w[n]=t.splitSizes[v],f.push(w),s[v]=X(`output${v}`,i,w.length),c.push({dims:f[v],dataType:e[0].dataType})}g.push({type:12,data:d},...ee(r,...f));let _=v=>`
  ${v.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(u,...s)}
  ${mc(d.length)}
  ${gc(s)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g})}},Gm=(e,t)=>{hc(e.inputs);let r=e.inputs.length===1?t:fc(e.inputs,t);e.compute(Yn(e.inputs,r),{inputs:[0]})},Hm=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Se({axis:t,numOutputs:a,splitSizes:r})}}),yc,_c,cn,Km,k$=L(()=>{ze(),ks(),Fm(),Zm(),jt(),yc=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],i=e[2],n=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,d=r.dims[0],c=r.dims[1],f=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],m=c,g=0,_=!a||a.dims.length===0,v=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=v*t.numHeads);let w=n&&n.dims.length!==0,x=s&&s.dims.length!==0;if(w&&n.dims.length===4&&n.dims[0]===d&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===v)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=n.dims[2]}else if(w||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');m=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');m=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');m=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,S=!1,T=t.kvNumHeads?v*t.kvNumHeads:f;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:T,headSize:v,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:$}},_c=Se({perm:[0,2,1,3]}),cn=(e,t,r)=>{let a=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),a=e.compute(Qe(a,_c.perm),{inputs:[a],outputs:[-1]})[0]),a},Km=(e,t)=>{let r=yc(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,c=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,m=Se({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,_,v]=!i&&!n?e.compute(Yn([a],m),{inputs:[a],outputs:[-1,-1,-1]}):[a,i,n],w=Gr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,g,void 0,0);ca(e,w,cn(e,_,r),cn(e,v,r),void 0,void 0,s,u,void 0,r,d,c)}}),pn,vc,wc,Qm,S$=L(()=>{ne(),pe(),jt(),fe(),pn=(e,t,r,a,i,n,s,u)=>{let d=Ee(n),c=d===1?"f32":`vec${d}f`,f=d===1?"vec2f":`mat2x${d}f`,m=i*s,g=64;m===1&&(g=256);let _=[i,s,n/d],v=[i,s,2],w=["rank","type","type"],x=[];x.push(...ee(_,v));let $=b=>{let S=B("x",t.dataType,3,d),T=B("scale",r.dataType,r.dims),I=B("bias",a.dataType,a.dims),A=X("output",1,3,2),E=[S,T,I,A];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${b.declareVariables(...E)}
  ${b.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${c}(0);
    var squared_sum = ${c}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${c}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ut("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${Ut("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${u};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:v,dataType:1}],dispatchGroup:{x:m},programUniforms:x}),getShaderSource:$},{inputs:[t,r,a],outputs:[-1]})[0]},vc=(e,t,r)=>{let a=t[0].dims,i=a,n=2,s=a[0],u=a[1],d=O.sizeFromDimension(a,n),c=Ee(d),f=O.size(i)/c,m=pn(e,t[0],t[1],t[2],s,d,u,r.epsilon),g=[s,u,d/c],_=[s,u],v=["type","none"],w=x=>{let $=B("x",t[0].dataType,g.length,c),b=B("scale_shift",1,_.length,2),S=X("output",t[0].dataType,g.length,c),T=[$,b,S];return`
  ${x.registerUniform("output_size","u32").declareVariables(...T)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ee(g,_,g)]}),getShaderSource:w},{inputs:[t[0],m]})},wc=(e,t,r)=>{let a=t[0].dims,i=a,n=a[0],s=a[a.length-1],u=O.sizeFromDimension(a,1)/s,d=Ee(s),c=O.size(i)/d,f=[{type:12,data:u},{type:12,data:Math.floor(s/d)}],m=["type","type"],g=!1,_=[0,a.length-1];for(let $=0;$<a.length-2;$++)g=g||a[$+1]!==1,_.push($+1);g=g&&a[a.length-1]!==1;let v=g?e.compute(Qe(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},($,b)=>a[_[b]])),w=pn(e,v,t[1],t[2],n,u,s,r.epsilon),x=$=>{let b=De(t[0].dataType),S=d===1?"vec2f":`mat${d}x2f`,T=E=>{let D=E===0?"x":"y",M=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${b}(${M}(scale.${D}))`;case 2:return`vec2<${b}>(${M}(scale[0].${D}, scale[1].${D}))`;case 4:return`vec4<${b}>(${M}(scale[0].${D}, scale[1].${D}, scale[2].${D}, scale[3].${D}))`;default:throw new Error(`Not supported compoents ${d}`)}},I=B("input",t[0].dataType,t[0].dims,d),A=X("output",t[0].dataType,i,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:x},{inputs:[t[0],w]})},Qm=(e,t)=>{t.format==="NHWC"?wc(e,e.inputs,t):vc(e,e.inputs,t)}}),bc,$c,Jm,T$=L(()=>{ne(),pe(),fe(),bc=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},$c=(e,t,r)=>{let a=t.simplified,i=e[0].dims,n=e[1],s=!a&&e[2],u=i,d=O.normalizeAxis(t.axis,i.length),c=O.sizeToDimension(i,d),f=O.sizeFromDimension(i,d),m=O.size(n.dims),g=s?O.size(s.dims):0;if(m!==f||s&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${m} and bias size of ${g}`);let _=[];for(let I=0;I<i.length;++I)I<d?_.push(i[I]):_.push(1);let v=Ee(f),w=["type","type"],x=[{type:12,data:c},{type:1,data:f},{type:12,data:Math.floor(f/v)},{type:1,data:t.epsilon}];s&&w.push("type");let $=r>1,b=r>2,S=I=>{let A=De(e[0].dataType),E=[B("x",e[0].dataType,e[0].dims,v),B("scale",n.dataType,n.dims,v)];s&&E.push(B("bias",s.dataType,s.dims,v)),E.push(X("output",e[0].dataType,u,v)),$&&E.push(X("mean_data_output",1,_)),b&&E.push(X("inv_std_output",1,_));let D=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(D).declareVariables(...E)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${qn("f32",v)};
    var mean_square_vector = ${qn("f32",v)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${dr(A,v,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ut("mean_vector",v)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ut("mean_square_vector",v)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${dr(A,v,"x[j + offset]")};
      let f32scale = ${dr(A,v,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${dr(A,v,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:u,dataType:e[0].dataType}];return $&&T.push({dims:_,dataType:1}),b&&T.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${v};${r};${a}`,inputDependencies:w},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:x}),getShaderSource:S}},Jm=(e,t)=>{bc(e.inputs),e.compute($c(e.inputs,t,e.outputCount))}}),xc,Xm,C$=L(()=>{pe(),Es(),zs(),xc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Xm=e=>{xc(e.inputs);let t=mr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Is(e.inputs,{activation:""},t));else{let i=t[t.length-2],n=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&i===1&&s===1){let u=e.inputs[0].reshape([1,n,a]),d=e.inputs[1].reshape([1,a,r]),c=[1,n,r],f=[u,d];e.compute(ii(f,{activation:""},t,c),{inputs:f})}else e.compute(ii(e.inputs,{activation:""},t))}}}),kc,Sc,Tc,Ym,eg,I$=L(()=>{ne(),pe(),ze(),fe(),kc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,i,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,c=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(O.size(d)!==c)throw new Error("zeroPoints input size error.")}},Sc=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],n=t.k,s=t.n,u=r.slice(0,a-2),d=O.size(u),c=e[1].dims[2]/4,f=e[0].dataType,m=Ee(t.k),g=Ee(c),_=Ee(s),v=u.concat([i,s]),w=i>1&&s/_%2===0?2:1,x=O.size(v)/_/w,$=64,b=[],S=[d,i,n/m],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,c/g),b.push(...ee(S)),b.push(...ee(T)),b.push(...ee(e[2].dims)),e.length===4&&b.push(...ee(O.convertShape(e[3].dims)));let I=[d,i,s/_];b.push(...ee(I));let A=E=>{let D=S.length,M=B("a",e[0].dataType,D,m),F=B("b",12,T.length,g),P=B("scales",e[2].dataType,e[2].dims.length),ie=[M,F,P],V=e.length===4?B("zero_points",12,e[3].dims.length):void 0;V&&ie.push(V);let he=I.length,ye=X("output",e[0].dataType,he,_),K=De(e[0].dataType),me=(()=>{switch(m){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${m}-component is not supported.`)}})(),_e=()=>{let j=`
          // reuse a data
            var input_offset = ${M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`)};
            var a_data: ${me};
            for (var j: u32 = 0; j < ${8/m}; j++) {
              a_data[j] = ${M.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let G=0;G<_*w;G++)j+=`
            b_value = ${g===1?`b${G}_data`:`b${G}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${me}(${Array.from({length:4},(N,ae)=>`${K}(b_value_lower[${ae}]), ${K}(b_value_upper[${ae}])`).join(", ")});
            b_dequantized_values = ${m===1?`${me}(${Array.from({length:8},(N,ae)=>`(b_quantized_values[${ae}] - ${V?`zero_point${G}`:"zero_point"}) * scale${G}`).join(", ")});`:`(b_quantized_values - ${me}(${Array(8).fill(`${V?`zero_point${G}`:"zero_point"}`).join(",")})) * scale${G};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(G/_)}]${_>1?`[${G%_}]`:""} += ${Array.from({length:8/m},(N,ae)=>`${m===1?`a_data[${ae}] * b_dequantized_values[${ae}]`:`dot(a_data[${ae}], b_dequantized_values[${ae}])`}`).join(" + ")};
          `;return j},J=()=>{let j=`
            var col_index = col * ${_};
            ${V?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let G=0;G<_*w;G++)j+=`
            let scale${G} = ${P.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return j},we=()=>{let j=`col_index = col * ${_};`;for(let G=0;G<_*w;G++)j+=`
            let b${G}_data = ${F.getByIndices(`${F.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${me};
            var b_dequantized_values: ${me};`,j};return`
        var<workgroup> workgroup_shared: array<${ye.type.value}, ${w*$}>;
        ${E.declareVariables(...ie,ye)}
        ${E.mainStart([$,1,1])}
          let output_indices = ${ye.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/m};
            ${J()}
            for (var word: u32 = 0; word < ${c}; word += ${g}) {
              ${we()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${_e()}
                word_offset += ${8/m};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${ye.type.value} = ${ye.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${ye.setByIndices(`${ye.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${m};${g};${_};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:f}],dispatchGroup:{x},programUniforms:b}),getShaderSource:A}},Tc=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],n=t.k,s=t.n,u=r.slice(0,a-2),d=O.size(u),c=e[1].dims[2]/4,f=e[0].dataType,m=Ee(t.k),g=Ee(c),_=u.concat([i,s]),v=128,w=s%8===0?8:s%4===0?4:1,x=v/w,$=x*g*8,b=$/m,S=$/t.blockSize,T=O.size(_)/w,I=[],A=[d,i,n/m],E=O.convertShape(e[1].dims).slice();E.splice(-1,1,c/g),I.push(...ee(A)),I.push(...ee(E)),I.push(...ee(e[2].dims)),e.length===4&&I.push(...ee(O.convertShape(e[3].dims)));let D=[d,i,s];I.push(...ee(D));let M=F=>{let P=A.length,ie=B("a",e[0].dataType,P,m),V=B("b",12,E.length,g),he=B("scales",e[2].dataType,e[2].dims.length),ye=[ie,V,he],K=e.length===4?B("zero_points",12,e[3].dims.length):void 0;K&&ye.push(K);let me=D.length,_e=X("output",e[0].dataType,me),J=De(e[0].dataType),we=()=>{switch(m){case 1:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${m}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ie.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${_e.type.value}, ${x}>, ${w}>;
        ${F.declareVariables(...ye,_e)}
        ${F.mainStart([x,w,1])}
          let output_indices = ${_e.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${v})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ie.getByIndices(`${ie.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ie.type.value}(0);
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
            let zero_point = ${J}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${J}(8);`}
            let scale = ${he.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${V.getByIndices(`${V.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/m};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${we()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${J}>(${Array.from({length:4},(j,G)=>`${J}(b_value_lower[${G}]), ${J}(b_value_upper[${G}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${J}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(j,G)=>`${`dot(a_data${G}, b_dequantized_values[${G}])`}`).join(" + ")};
              word_offset += ${8/m};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${_e.type.value} = ${_e.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${_e.setByIndices(`${_e.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${m};${g};${x};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:T},programUniforms:I}),getShaderSource:M}},Ym=(e,t)=>{kc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Tc(e.inputs,t)):e.compute(Sc(e.inputs,t))},eg=e=>Se(e)}),Cc,Ic,Ec,zc,Ac,Oc,Rc,Nc,tg,E$=L(()=>{ne(),pe(),fe(),Cc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ic=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
            k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${Y("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Ec=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},zc=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y("uniforms.x_shape",i,t)})) {
                  k = i32(${Y("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${Y("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Ac=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${Y("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${Y("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${Y("uniforms.x_shape",i,t)})) {
                  k -= i32(${Y("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${Y("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Oc=(e,t,r)=>{switch(r.mode){case 0:return Ic(e,t,r.pads.length);case 1:return Ec(e,t,r.pads.length);case 2:return zc(e,t,r.pads.length);case 3:return Ac(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Rc=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,i=O.size(r),n=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...ee(e[0].dims,r));let u=["rank"],d=c=>{let f=X("output",e[0].dataType,r.length),m=B("x",e[0].dataType,a.length),g=m.type.value,_=Oc(f,a.length,t),v=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&v.push({name:"constant_value",type:s?g:"f32"}),`
            ${c.registerUniforms(v).declareVariables(m,f)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:n}),getShaderSource:d}},Nc=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,n=new Int32Array(2*i).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let d=0;d<u.length;d++)n[Number(u[d])]=Number(r[d]),n[Number(u[d])+i]=Number(r[d+u.length])}else r.forEach((u,d)=>n[Number(d)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:a,pads:s}}else return t},tg=(e,t)=>{Cc(e.inputs);let r=Nc(e.inputs,t);e.compute(Rc(e.inputs,r),{inputs:[0]})}}),Br,hn,fn,mn,gn,Bc,Mc,yn,_n,rg,ag,vn,ig,ng,wn,sg,og,ug,lg,z$=L(()=>{ht(),ne(),pe(),fe(),Br=e=>{if(Ce.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},hn=(e,t,r)=>{let a=t.format==="NHWC",i=e.dims.slice();a&&i.splice(1,0,i.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),d=n?t.dilations.slice():[],c=t.pads.slice();ri.adjustPoolAttributes(r,i,s,u,d,c);let f=ri.computePoolOutputShape(r,i,u,d,s,c,t.autoPad),m=Object.assign({},t);n?Object.assign(m,{kernelShape:s,strides:u,pads:c,dilations:d,cacheKey:t.cacheKey}):Object.assign(m,{kernelShape:s,strides:u,pads:c,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[m,a?g:f]},fn=(e,t)=>{let r=t.format==="NHWC",a=O.size(e),i=O.size(t.kernelShape),n=[{type:12,data:a},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],m=!!(c+f);n.push({type:12,data:u},{type:12,data:d},{type:12,data:c},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],v=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];g=!!(w+x),n.push({type:12,data:_},{type:12,data:v},{type:12,data:w},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,m,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((c,f)=>c+f);return[n,s,!!d,!1,!1]}},mn=(e,t,r,a,i,n,s,u,d,c,f,m)=>{let g=i.format==="NHWC",_=t.type.value,v=X("output",t.type.tensor,a);if(i.kernelShape.length<=2){let w="",x="",$="",b=r-(g?2:1);if(f?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,i.kernelShape.length===2){let S=r-(g?3:2);m?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var value = ${_}(${u});
              var pad = 0;
              ${x}
              ${w}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=i.kernelShape.length,x=i.pads.length,$="";return c?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(d).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${Y("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${Y("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Y("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${Y("uniforms.pads","j - 2u",x)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},gn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Bc=e=>`${gn(e)};${e.countIncludePad}`,Mc=e=>`${gn(e)};${e.storageOrder};${e.dilations}`,yn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),_n=(e,t,r,a)=>{let[i,n]=hn(t,a,r),s=B("x",t.dataType,t.dims.length),u=s.type.value,d="value += x_val;",c="";i.countIncludePad?c+=`value /= ${u}(uniforms.kernelSize);`:c+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[f,m,g,_,v]=fn(n,i);f.push(...ee(t.dims,n));let w=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${g};${_};${v}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:f}),getShaderSource:x=>mn(x,s,t.dims.length,n.length,i,d,c,0,m,g,_,v)}},rg=e=>{let t=e.count_include_pad!==0,r=yn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Bc(a)}},ag=(e,t)=>{Br(e.inputs),e.compute(_n("AveragePool",e.inputs[0],!1,t))},vn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ig=e=>{let t=e.format;return{format:t,...vn,cacheKey:t}},ng=(e,t)=>{Br(e.inputs),e.compute(_n("GlobalAveragePool",e.inputs[0],!0,t))},wn=(e,t,r,a)=>{let[i,n]=hn(t,a,r),s=`
      value = max(x_val, value);
    `,u="",d=B("x",t.dataType,t.dims.length),c=["rank"],[f,m,g,_,v]=fn(n,i);return f.push(...ee(t.dims,n)),{name:e,shaderCache:{hint:`${a.cacheKey};${g};${_};${v}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:f}),getShaderSource:w=>mn(w,d,t.dims.length,n.length,i,s,u,t.dataType===10?-65504:-1e5,m,g,_,v)}},sg=(e,t)=>{Br(e.inputs),e.compute(wn("MaxPool",e.inputs[0],!1,t))},og=e=>{let t=e.storage_order,r=e.dilations,a=yn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...a,cacheKey:""};return{...i,cacheKey:Mc(i)}},ug=e=>{let t=e.format;return{format:t,...vn,cacheKey:t}},lg=(e,t)=>{Br(e.inputs),e.compute(wn("GlobalMaxPool",e.inputs[0],!0,t))}}),Dc,Pc,dg,cg,A$=L(()=>{ne(),pe(),ze(),fe(),Dc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,n)=>n===t.axis||i===e[0].dims[n]).reduce((i,n)=>i&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Pc=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,i=a===3,n=e[0].dims,s=e[1].dataType,u=O.size(n),d=a===3||a===2,c=d?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,m=e.length>2?e[2]:void 0,g=m?d?[Math.ceil(O.size(m.dims)/4)]:m.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,v=_===!1&&f.length===1,w=Ee(u),x=_&&(!d||w===4),$=x?w:1,b=x&&!d?w:1,S=B("input",d?12:a,c.length,b),T=B("scale",s,f.length),I=m?B("zero_point",d?12:a,g.length):void 0,A=X("output",s,n.length,$),E=[S,T];I&&E.push(I);let D=[c,f];m&&D.push(g);let M=[{type:12,data:u/$},{type:12,data:r},{type:12,data:t.blockSize},...ee(...D,n)],F=P=>{let ie=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${P.registerUniforms(ie).declareVariables(...E,A)}
      ${P.mainStart()}
          ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${T.getByOffset("0")}`:v?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?_?d?`
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:F,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/$/64),y:1,z:1},programUniforms:M})}},dg=(e,t)=>{Dc(e.inputs,t),e.compute(Pc(e.inputs,t))},cg=e=>Se({axis:e.axis,blockSize:e.blockSize})}),Uc,jc,pg,O$=L(()=>{ht(),ne(),fe(),Uc=(e,t,r)=>{let a=e===t,i=e<t&&r<0,n=e>t&&r>0;if(a||i||n)throw new Error("Range these inputs' contents are invalid.")},jc=(e,t,r,a)=>{let i=Math.abs(Math.ceil((t-e)/r)),n=[i],s=i,u=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...ee(n)],d=c=>{let f=X("output",a,n.length),m=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:m},{name:"delta",type:m}];return`
        ${c.registerUniforms(g).declareVariables(f)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${m}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},pg=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),Ce.webgpu.validateInputContent&&Uc(t,r,a),e.compute(jc(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Wc,Vc,hg,fg,R$=L(()=>{ne(),pe(),ze(),fe(),Wc=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${i}bitcast<${a}>(oldValue) + (${r})${n}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${i}min(bitcast<${a}>(oldValue), (${r}))${n}`;case"mul":return`${i}(bitcast<${a}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Vc=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r,n=1,s=Math.ceil(O.size(a)/n),u=a[a.length-1],d=O.sizeFromDimension(r,u),c=[{type:12,data:s},{type:12,data:u},{type:12,data:d},...ee(e[1].dims,e[2].dims,i)],f=m=>{let g=B("indices",e[1].dataType,e[1].dims.length),_=B("updates",e[2].dataType,e[2].dims.length,n),v=t.reduction!=="none"&&t.reduction!==""?Lh("output",e[0].dataType,i.length):X("output",e[0].dataType,i.length,n);return`
      ${m.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,v)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${Wc(t.reduction,"output[data_offset + i]","value",v.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},hg=e=>Se({reduction:e.reduction}),fg=(e,t)=>{e.compute(Vc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Lc,qc,Fc,bn,Gc,Hc,Zc,Kc,Qc,Jc,Xc,Yc,$n,ep,tp,rp,ap,ip,mg,gg,N$=L(()=>{ne(),pe(),ze(),fe(),Lc=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},qc=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((i,n)=>a[i]=e[n]),a},Fc=(e,t,r,a,i,n)=>{let[s,u,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>n.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(f=>a.push(f)),a.length!==0&&a.length!==c&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Lc(a,t),t.axes.length>0&&qc(a,t.axes,c).forEach((f,m)=>a[m]=f)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(f=>i.push(Number(f))),i.length!==0&&i.length!==c&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof i<"u"&&a.length>0&&i.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},bn=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,Gc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${bn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${bn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Hc=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Zc=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?a:e.slice();return t.length>0?(t.forEach((n,s)=>{a[n]=i[s],a[s+r]=i[t.length+s]}),a):i},Kc=(e,t,r,a)=>{let i=[];if(r.length>0)if(a.length>0){if(e.forEach(n=>i.push(n)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((n,s)=>i[n]=r[s])}else r.forEach(n=>i.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((n,s)=>Math.round(n*t[s]))}return i},Qc=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=a),r.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(a,0,t.length),i.forEach((n,s)=>i[s]=Math.round(n*t[s]))),i},Jc=(e,t,r,a,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Y("uniforms.scales","i",a)};
        var roi_low = ${Y("uniforms.roi","i",i)};
        var roi_hi = ${Y("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Xc=(e,t,r,a,i,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Y("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y("uniforms.roi","i",n)};
          var roi_hi = ${Y("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",a.length)};
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
    }`,Yc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Y("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,$n=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",ep=(e,t,r,a,i)=>{let[n,s,u,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${$n(e,d,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${c} = originalIndices[${s}];
      var col:${c} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${c} = getInputValue(batch, channel, row1, col1);
      var x12: ${c} = getInputValue(batch, channel, row1, col2);
      var x21: ${c} = getInputValue(batch, channel, row2, col1);
      var x22: ${c} = getInputValue(batch, channel, row2, col2);
      var dx1: ${c} = abs(row - ${c}(row1));
      var dx2: ${c} = abs(${c}(row2) - row);
      var dy1: ${c} = abs(col - ${c}(col1));
      var dy2: ${c} = abs(${c}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},tp=(e,t,r,a,i,n,s,u,d,c)=>{let f=r.length===2,[m,g]=f?[0,1]:[2,3],_=e.type.value,v=w=>{let x=w===m?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[w]},
        ${a[w]}, ${r[w]}, ${n[w]}, ${n[w]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${d};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${_} = originalIdx + ${_}(i);
          if (${x} < 0 || ${x} >= ${r[w]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${d};`:`${x} = max(0, min(${x}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${x})`)};
          data[i + 1] = ${w===m?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${v(m)};
    ${v(g)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},rp=(e,t,r,a,i)=>{let[n,s,u,d,c]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${$n(e,c,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${u}];
      var width:${f} = originalIndices[${d}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${c}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
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
    }`},ap=(e,t,r,a,i,n)=>{let s=e.dims,u=Zc(n,t.axes,s.length),d=Kc(s,a,i,t.axes),c=a.slice();a.length===0&&(c=s.map((b,S)=>b===0?1:d[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(d=Qc(s,c,t)));let f=X("output",e.dataType,d.length),m=B("input",e.dataType,s.length),g=O.size(d),_=s.length===d.length&&s.every((b,S)=>b===d[S]),v=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,x=m.type.value,$=b=>`
      ${_?"":`
      ${Gc(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Yc(m,s)};
              ${Hc(t.nearestMode,r,x)};
              ${Xc(m,f,s,d,c.length,u.length,v)};
              `;case"linear":return`
              ${Jc(f,s,d,c.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${ep(m,f,s,v,w)}`;if(s.length===3||s.length===5)return`${rp(m,f,s,v,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${tp(m,f,s,d,c,u,t.cubicCoeffA,v,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",u.length).declareVariables(m,f)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${m.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${m.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${c.length>0?t.mode==="cubic"?c:c.length:""}|${i.length>0?i:""}|${u.length>0?u:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:c},{type:1,data:u},...ee(s,d)]})}},ip=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},mg=(e,t)=>{let r=[],a=[],i=[],n=ip(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Fc(e.inputs,t,n,r,a,i),e.compute(ap(e.inputs[0],t,n,r,a,i),{inputs:[0]})},gg=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,i=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,d=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return Se({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:i,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:d,nearestMode:c})}}),np,sp,yg,B$=L(()=>{ne(),pe(),ze(),fe(),np=(e,t)=>{let[r,a,i,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(a.dims,[])&&!O.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!O.areEqual(i.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],c=r.dims[r.dims.length-2],f=i.dims[0],m=O.sizeFromDimension(r.dims,1)/c,g=u===0?i.dims[1]*2:m/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(d!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(c!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(g/2!==i.dims[1]&&u/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(c>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},sp=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:i,scale:n}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],c=u/d,f=e[2].dims[1],m=i===0?f*2:c/a,g=new Array(s,d,c/m,m-f),_=O.computeStrides(g),v=[{type:1,data:n},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[u,c,m,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,m,d*m,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=x=>{let $=B("input",e[0].dataType,e[0].dims.length),b=B("position_ids",e[1].dataType,e[1].dims.length),S=B("cos_cache",e[2].dataType,e[2].dims.length),T=B("sin_cache",e[3].dataType,e[3].dims.length),I=X("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${x.declareVariables($,b,S,T,I)}

        ${x.mainStart(gr)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",X("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Se({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/gr)},programUniforms:v})}},yg=(e,t)=>{np(e.inputs,t),e.compute(sp(e.inputs,t))}}),op,up,_g,M$=L(()=>{ne(),pe(),fe(),op=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},up=(e,t,r,a)=>{let i=t.simplified,n=e[0].dims,s=O.size(n),u=n,d=s,c=n.slice(-1)[0],f=a?n.slice(0,-1).concat(1):[],m=!i&&e.length>3,g=e.length>4,_=a&&r>1,v=a&&r>2,w=r>3,x=64,$=Ee(c),b=[{type:12,data:d},{type:12,data:$},{type:12,data:c},{type:1,data:t.epsilon}],S=I=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[B("x",e[0].dataType,e[0].dims,$),B("skip",e[1].dataType,e[1].dims,$),B("gamma",e[2].dataType,e[2].dims,$)];m&&E.push(B("beta",e[3].dataType,e[3].dims,$)),g&&E.push(B("bias",e[4].dataType,e[4].dims,$)),E.push(X("output",e[0].dataType,u,$)),_&&E.push(X("mean_output",1,f)),v&&E.push(X("inv_std_output",1,f)),w&&E.push(X("input_skip_bias_sum",e[0].dataType,u,$));let D=De(e[0].dataType),M=De(1,$);return`

      ${I.registerUniforms(A).declareVariables(...E)}
      var<workgroup> sum_shared : array<${M}, ${x}>;
      var<workgroup> sum_squared_shared : array<${M}, ${x}>;

      ${I.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":D+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${dr(D,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
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
        let mean = ${Ut("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ut("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${v?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${D}(mean)`}) *
            ${D}(inv_std_dev) * gamma[offset1d + i]
            ${m?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:u,dataType:e[0].dataType}];return r>1&&T.push({dims:f,dataType:1}),r>2&&T.push({dims:f,dataType:1}),r>3&&T.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${_};${v};${w}`,inputDependencies:e.map((I,A)=>"type")},getShaderSource:S,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/c)},programUniforms:b})}},_g=(e,t)=>{op(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(up(e.inputs,t,e.outputCount,!1),{outputs:r})}}),lp,Mr,dp,xn,cp,pp,vg,wg,D$=L(()=>{ne(),pe(),ze(),fe(),lp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},Mr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},dp=(e,t)=>{if(e.length>1){let r=Mr(e,1),a=Mr(e,2),i=Mr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Se({starts:r,ends:a,axes:i})}else return t},xn=(e,t,r,a,i)=>{let n=e;return e<0&&(n+=r[a[t]]),i[t]<0?Math.max(0,Math.min(n,r[a[t]]-1)):Math.max(0,Math.min(n,r[a[t]]))},cp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
            let steps_i = ${Y("uniforms.steps","i",r.length)};
            let signs_i = ${Y("uniforms.signs","i",r.length)};
            let starts_i = ${Y("uniforms.starts","i",r.length)};
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
      }`,pp=(e,t)=>{let r=e[0].dims,a=O.size(r),i=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Mr(e,4);n.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(i.length).fill(1));let s=t.starts.map(($,b)=>xn($,b,r,i,n)),u=t.ends.map(($,b)=>xn($,b,r,i,n));if(i.length!==s.length||i.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let $=0;$<r.length;++$)i.includes($)||(s.splice($,0,0),u.splice($,0,r[$]),n.splice($,0,1));let d=n.map($=>Math.sign($));n.forEach(($,b,S)=>{if($<0){let T=(u[b]-s[b])/$,I=s[b],A=I+T*n[b];s[b]=A,u[b]=I,S[b]=-$}});let c=r.slice(0);i.forEach(($,b)=>{c[$]=Math.ceil((u[$]-s[$])/n[$])});let f={dims:c,dataType:e[0].dataType},m=X("output",e[0].dataType,c.length),g=B("input",e[0].dataType,e[0].dims.length),_=O.size(c),v=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:n.length}],w=[{type:12,data:_},{type:12,data:s},{type:6,data:d},{type:12,data:n},...ee(e[0].dims,c)],x=$=>`
      ${$.registerUniforms(v).declareVariables(g,m)}
        ${cp(g,m,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${m.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${m.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:w})}},vg=(e,t)=>{lp(e.inputs,t);let r=dp(e.inputs,t);e.compute(pp(e.inputs,r),{inputs:[0]})},wg=e=>{let t=e.starts,r=e.ends,a=e.axes;return Se({starts:t,ends:r,axes:a})}}),hp,fp,bg,$g,P$=L(()=>{ne(),pe(),ze(),jt(),fe(),hp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},fp=(e,t)=>{let r=e.inputs[0],a=r.dims,i=O.size(a),n=a.length,s=O.normalizeAxis(t.axis,n),u=s<a.length-1,d,c=[];u?(c=Array.from({length:n},(E,D)=>D),c[s]=n-1,c[n-1]=s,d=e.compute(Qe(r,c),{inputs:[r],outputs:[-1]})[0]):d=r;let f=d.dims,m=f[n-1],g=i/m,_=Ee(m),v=m/_,w=64;g===1&&(w=256);let x=(E,D)=>D===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:D===2?`max(${E}.x, ${E}.y)`:D===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,$=B("x",d.dataType,d.dims,_),b=X("result",d.dataType,d.dims,_),S=$.type.value,T=De(d.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,I=E=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${E.registerUniform("packedCols","i32").declareVariables($,b)}
      ${E.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
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
          rowMaxShared = ${S}(${x("threadShared[0]",_)});
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
          rowSumShared = ${S}(${Ut("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:d.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:v}]}),getShaderSource:I},{inputs:[d],outputs:[u?-1:0]})[0];u&&e.compute(Qe(A,c),{inputs:[A]})},bg=(e,t)=>{hp(e.inputs),fp(e,t)},$g=e=>Se({axis:e.axis})}),kn,mp,gp,yp,xg,U$=L(()=>{ne(),pe(),fe(),kn=e=>Array.from(e.getBigInt64Array(),Number),mp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(kn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},gp=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},yp=(e,t)=>{let r=e[0].dims,a=t??kn(e[1]),i=gp(r,a),n=O.size(i),s=e[0].dataType,u=B("input",s,r.length),d=X("output",s,i.length),c=f=>`
      const inputShape = ${u.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(u,d)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...ee(e[0].dims,i)]}),getShaderSource:c}},xg=e=>{mp(e.inputs),e.compute(yp(e.inputs),{inputs:[0]})}}),_p,vp,kg,j$=L(()=>{ne(),pe(),fe(),_p=(e,t,r,a,i)=>{let n=X("output_data",i,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),u=B("b_data",t[2].dataType,t[2].dims.length,4),d=B("c_data",t[0].dataType,t[0].dims.length,4),c,f=(m,g,_)=>`select(${g}, ${m}, ${_})`;if(!a)c=n.setByOffset("global_idx",f(s.getByOffset("global_idx"),u.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let m=(g,_,v="")=>{let w=`a_data[index_a${_}][component_a${_}]`,x=`b_data[index_b${_}][component_b${_}]`,$=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${n.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_b${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_c${_} = ${d.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${g}[${_}] = ${v}(${f(w,x,$)});
          `};i===9?c=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:c=`
            ${m("output_data[global_idx]",0)}
            ${m("output_data[global_idx]",1)}
            ${m("output_data[global_idx]",2)}
            ${m("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${c}
      }`},vp=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,i=e[1].dataType,n=!(O.areEqual(t,r)&&O.areEqual(r,a)),s=t,u=O.size(t);if(n){let c=mr.calcShape(mr.calcShape(t,r,!1),a,!1);if(!c)throw new Error("Can't perform where op on the given tensors");s=c,u=O.size(s)}let d=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>_p(c,e,s,n,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:d},...ee(a,t,r,s)]})}},kg=e=>{e.compute(vp(e.inputs))}}),Sg,W$=L(()=>{e$(),ks(),t$(),r$(),a$(),i$(),n$(),d$(),p$(),h$(),f$(),m$(),g$(),y$(),_$(),v$(),w$(),b$(),$$(),x$(),k$(),S$(),T$(),C$(),I$(),Fm(),E$(),z$(),A$(),O$(),R$(),xs(),N$(),B$(),M$(),D$(),P$(),Zm(),U$(),jt(),Ss(),j$(),Sg=new Map([["Abs",[vf]],["Acos",[wf]],["Acosh",[bf]],["Add",[tm]],["ArgMax",[mf,Gn]],["ArgMin",[ff,Gn]],["Asin",[$f]],["Asinh",[xf]],["Atan",[kf]],["Atanh",[Sf]],["Attention",[gf]],["AveragePool",[ag,rg]],["BatchNormalization",[yf]],["BiasAdd",[_f]],["BiasSplitGelu",[em]],["Cast",[Cf,Tf]],["Ceil",[Ef]],["Clip",[If]],["Concat",[cm,pm]],["Conv",[Xn,Jn]],["ConvTranspose",[$m,bm]],["Cos",[zf]],["Cosh",[Af]],["CumSum",[xm,km]],["DepthToSpace",[Sm,Tm]],["DequantizeLinear",[dg,cg]],["Div",[rm]],["Einsum",[Cm,Im]],["Elu",[Of,Fr]],["Equal",[am]],["Erf",[Rf]],["Exp",[Nf]],["Expand",[Em]],["FastGelu",[zm]],["Floor",[Bf]],["FusedConv",[Xn,Jn]],["Gather",[Om,Am]],["GatherElements",[Pm,Dm]],["GatherBlockQuantized",[Bm,Mm]],["GatherND",[Rm,Nm]],["Gelu",[Mf]],["Gemm",[jm,Um]],["GlobalAveragePool",[ng,ig]],["GlobalMaxPool",[lg,ug]],["Greater",[om]],["GreaterOrEqual",[lm]],["GridSample",[Wm,Vm]],["GroupQueryAttention",[Km]],["HardSigmoid",[qf,Lf]],["InstanceNormalization",[Qm]],["LayerNormalization",[Jm]],["LeakyRelu",[Df,Fr]],["Less",[um]],["LessOrEqual",[dm]],["Log",[Xf]],["MatMul",[Xm]],["MatMulNBits",[Ym,eg]],["MaxPool",[sg,og]],["Mul",[im]],["MultiHeadAttention",[qm,Lm]],["Neg",[Uf]],["Not",[Pf]],["Pad",[tg]],["Pow",[nm]],["QuickGelu",[Yf,Fr]],["Range",[pg]],["Reciprocal",[jf]],["ReduceMin",[lf]],["ReduceMean",[af]],["ReduceMax",[uf]],["ReduceSum",[cf]],["ReduceProd",[df]],["ReduceL1",[nf]],["ReduceL2",[sf]],["ReduceLogSum",[hf]],["ReduceLogSumExp",[of]],["ReduceSumSquare",[pf]],["Relu",[Wf]],["Resize",[mg,gg]],["RotaryEmbedding",[yg]],["ScatterND",[fg,hg]],["Sigmoid",[Vf]],["Sin",[Ff]],["Sinh",[Gf]],["Slice",[vg,wg]],["SkipLayerNormalization",[_g]],["Split",[Gm,Hm]],["Sqrt",[Hf]],["Softmax",[bg,$g]],["Sub",[sm]],["Tan",[Zf]],["Tanh",[Kf]],["ThresholdedRelu",[Jf,Fr]],["Tile",[xg]],["Transpose",[Fh,Gh]],["Where",[kg]]])}),Tg,V$=L(()=>{ht(),It(),fe(),Tg=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,i){pt(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let c of t)u.push({binding:u.length,resource:{buffer:c.buffer}});for(let c of r)u.push({binding:u.length,resource:{buffer:c.buffer}});i&&u.push({binding:u.length,resource:i});let d=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),tt(e.programInfo.name)}dispose(){}build(e,t){pt(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(c=>{r.features.has(c.feature)&&a.push(`enable ${c.extension};`)});let i=qh(t,this.backend.device.limits),n=e.getShaderSource(i),s=`${a.join(`
`)}
${i.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});be("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return tt(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&a<=i)return[t,r,a];let n=t*r*a,s=Math.ceil(Math.sqrt(n));if(s>i){if(s=Math.ceil(Math.cbrt(n)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),wp,bp,$p,xp,Cg,L$=L(()=>{ht(),ne(),It(),Ph(),Xb(),W$(),V$(),wp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let i=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let n=e[a].dims.length;r.push(`${i};${n}`);break}case"dims":{let n=e[a].dims.join(",");r.push(`${i};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},bp=(e,t,r)=>{let a=e.name;return e.shaderCache?.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${wp(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,a},$p=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},xp=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},Cg=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=n=>t.features.has(n)&&r.push(n)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups")&&i("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new xp(this.device),this.adapterInfo=new $p(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Uh(this),this.programManager=new Tg(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,vs(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;pt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],n=i.kernelId,s=this.kernels.get(n),u=s.kernelType,d=s.kernelName,c=i.programName,f=i.inputTensorViews,m=i.outputTensorViews,g=t[a*2],_=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let v=Number(g-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(v)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(x=>({dims:x.dims,dataType:Ht(x.dataType)})),outputsMetadata:m.map(x=>({dims:x.dims,dataType:Ht(x.dataType)})),kernelId:n,kernelType:u,kernelName:d,programName:c,startTime:v,endTime:w});else{let x="";f.forEach((b,S)=>{x+=`input[${S}]: [${b.dims}] | ${Ht(b.dataType)}, `});let $="";m.forEach((b,S)=>{$+=`output[${S}]: [${b.dims}] | ${Ht(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${d}|${c}" ${x}${$}execution time: ${w-v} ns`)}da("GPU",`${c}::${g}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),tt()}run(e,t,r,a,i,n){pt(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let T=this.gpuDataManager.get(S);if(!T)throw new Error(`no GPU data for input: ${S}`);s.push(T)}let{outputs:u,dispatchGroup:d,programUniforms:c}=e.getRunData(t),f=r.length===0?u.map((b,S)=>S):r;if(f.length!==u.length)throw new Error(`Output size ${f.length} must be equal to ${u.length}.`);let m=[],g=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(f[b])||f[b]<-3||f[b]>=n)throw new Error(`Invalid output index: ${f[b]}`);if(f[b]===-3)continue;let S=f[b]===-1,T=f[b]===-2,I=S||T?i(u[b].dataType,u[b].dims):a(f[b],u[b].dataType,u[b].dims);if(m.push(I),I.data===0)continue;let A=this.gpuDataManager.get(I.data);if(!A)throw new Error(`no GPU data for output: ${I.data}`);if(S&&this.temporaryData.push(A),T){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(A)}g.push(A)}if(s.length!==t.length||g.length!==m.length){if(g.length===0)return tt(e.name),m;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(c){let b=0,S=[];c.forEach(E=>{let D=typeof E.data=="number"?[E.data]:E.data;if(D.length===0)return;let M=E.type===10?2:4,F,P;E.type===10?(P=D.length>4?16:D.length>2?8:D.length*M,F=D.length>4?16:M*D.length):(P=D.length<=2?D.length*M:16,F=16),b=Math.ceil(b/P)*P,S.push(b);let ie=E.type===10?8:4;b+=D.length>4?Math.ceil(D.length/ie)*F:D.length*M});let T=16;b=Math.ceil(b/T)*T;let I=new ArrayBuffer(b);c.forEach((E,D)=>{let M=S[D],F=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(I,M,F.length).set(F);else if(E.type===12)new Uint32Array(I,M,F.length).set(F);else if(E.type===10)new Uint16Array(I,M,F.length).set(F);else if(E.type===1)new Float32Array(I,M,F.length).set(F);else throw new Error(`Unsupported uniform type: ${Ht(E.type)}`)});let A=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,I,0,b),this.gpuDataManager.release(A.id),_={offset:0,size:b,buffer:A.buffer}}let v=this.programManager.normalizeDispatchGroupSize(d),w=v[1]===1&&v[2]===1,x=bp(e,t,w),$=this.programManager.getArtifact(x);if($||($=this.programManager.build(e,v),this.programManager.setArtifact(x,$),be("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),c&&$.uniformVariablesInfo){if(c.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${c.length} in program "${$.programInfo.name}".`);for(let b=0;b<c.length;b++){let S=c[b],T=S.type,I=typeof S.data=="number"?1:S.data.length,[A,E]=$.uniformVariablesInfo[b];if(T!==A||I!==E)throw new Error(`Uniform variable ${b} mismatch: expect type ${A} with size ${E}, got type ${T} with size ${I} in program "${$.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${v[0]}x${v[1]}x${v[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:m};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,s,g,v,_),tt(e.name),m}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let i=Sg.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:a,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let i=a.kernelType,n=a.kernelName,s=a.kernelEntry,u=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${i}] ${n}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(c){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${n}" failed. ${c}`)),1}finally{d&&r.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${i}] ${n}": ${c.message}`:null));for(let c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let n=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,n);return i.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await Ln(this,e,t);return ws(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let i=this.getComputePassEncoder(),n=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(n.computePipeline),i.setBindGroup(0,n.bindGroup),i.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),kp,Sn,Sp,Tn,Cn,In,Tp,Ig,q$=L(()=>{It(),kp=1,Sn=()=>kp++,Sp=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Tn=(e,t)=>{let r=Sp.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,i)=>a*i)*r/8):0},Cn=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Tn(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,i)=>a===r[i])}},In=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==Tn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let n=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,n,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Tp=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Sn();return this.tensorTrackersById.set(e,new In(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,i){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${i}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,a,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let i=this.getMLContext(e),n=Sn(),s=new Cn({sessionId:e,context:i,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(n,new In(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,a,i,n){let s=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,r)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let u=await s.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:i,readable:n});return new Cn({sessionId:e,context:s,tensor:u,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ig=(...e)=>new Tp(...e)}),Ma,Cp,Eg,F$=L(()=>{ne(),rr(),Ph(),q$(),It(),Ma=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Cp=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((i,n)=>i===a[n]&&e[i]===t[i])},Eg=class{constructor(e){this.tensorManager=Ig(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,vs(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Cp(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(i=>i.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,i){let n=Ma.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,a,i)}async createTemporaryTensor(e,t,r){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Ma.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,a,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Me().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return ws(r,t)}}registerMLTensor(e,t,r,a){let i=Ma.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,i,a);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${a}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,a,i,n){if(!n)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=n.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),a.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),zg={};ha(zg,{init:()=>Ag});var Da,Ip,Ag,G$=L(()=>{ne(),L$(),It(),pe(),F$(),Da=class Og{constructor(t,r,a,i){this.module=t,this.dataType=r,this.data=a,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Og(this.module,this.dataType,this.data,t)}},Ip=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,i=r/e.PTR_SIZE,n=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*i++,n));let s=Number(e.getValue(a*i++,n));this.outputCount=Number(e.getValue(a*i++,n)),this.customDataOffset=Number(e.getValue(a*i++,"*")),this.customDataSize=Number(e.getValue(a*i++,n));let u=[];for(let d=0;d<s;d++){let c=Number(e.getValue(a*i++,n)),f=Number(e.getValue(a*i++,"*")),m=Number(e.getValue(a*i++,n)),g=[];for(let _=0;_<m;_++)g.push(Number(e.getValue(a*i++,n)));u.push(new Da(e,c,f,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,a=t?.outputs??[],i=(s,u,d)=>new Da(this.module,u,this.output(s,d),d),n=(s,u)=>{let d=Zt(s,u);if(!d)throw new Error(`Unsupported data type: ${s}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Da(this.module,s,c,u)};return this.backend.run(e,r,a,i,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,i=a===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*a);this.module.setValue(n,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(n+a*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},Ag=async(e,t,r,a)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=new Cg;await n.initialize(r,a),i("webgpu",[n,s=>n.alloc(Number(s)),s=>n.free(s),(s,u,d,c=!1)=>{if(c)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(d)}`),n.memcpy(Number(s),Number(u));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(d));n.upload(Number(u),f)}},async(s,u,d)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${d}`),await n.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(s,u,d)=>n.createKernel(s,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>n.releaseKernel(s),(s,u,d,c)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${u}`);let f=new Ip(t,n,Number(u));return n.computeKernel(Number(s),f,c)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let n=new Eg(r);i("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,d,c,f)=>n.ensureTensor(s,u,d,c,f),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u)])}}}),Ep,As,Os,Bt,zp,ni,Rs,Ns,En,Bs,Ms,Ds,Rg=L(()=>{Qb(),Jb(),ne(),rr(),fs(),Dh(),Ep=(e,t)=>{Me()._OrtInit(e,t)!==0&&ke("Can't initialize onnxruntime.")},As=async e=>{Ep(e.wasm.numThreads,ti(e.logLevel))},Os=async(e,t)=>{{let r=(G$(),Ya(zg)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Me(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Me(),e)}}},Bt=new Map,zp=e=>{let t=Me(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,i,i+a)!==0&&ke("Can't get session input/output count.");let n=a===4?"i32":"i64";return[Number(t.getValue(i,n)),Number(t.getValue(i+a,n))]}finally{t.stackRestore(r)}},ni=e=>{let t=Me(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Rs=async(e,t)=>{let r,a,i=Me();Array.isArray(e)?[r,a]=e:e.buffer===i.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=ni(e);let n=0,s=0,u=0,d=[],c=[],f=[];try{if([s,d]=Mh(t),t?.externalData&&i.mountExternalData){let b=[];for(let S of t.externalData){let T=typeof S=="string"?S:S.path;b.push(_s(typeof S=="string"?S:S.data).then(I=>{i.mountExternalData(T,I)}))}await Promise.all(b)}for(let b of t?.executionProviders??[])if((typeof b=="string"?b:b.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof b!="string"){let S=b,T=S?.context,I=S?.gpuDevice,A=S?.deviceType,E=S?.powerPreference;T?i.currentContext=T:I?i.currentContext=await i.jsepCreateMLContext(I):i.currentContext=await i.jsepCreateMLContext({deviceType:A,powerPreference:E})}else i.currentContext=await i.jsepCreateMLContext();break}n=await i._OrtCreateSession(r,a,s),n===0&&ke("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(n,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[m,g]=zp(n),_=!!t?.enableGraphCapture,v=[],w=[],x=[];for(let b=0;b<m;b++){let S=i._OrtGetInputName(n,b);S===0&&ke("Can't get an input name."),c.push(S),v.push(i.UTF8ToString(S))}for(let b=0;b<g;b++){let S=i._OrtGetOutputName(n,b);S===0&&ke("Can't get an output name."),f.push(S);let T=i.UTF8ToString(S);w.push(T);{if(_&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let I=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[T]??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer"&&I!=="ml-tensor")throw new Error(`Not supported preferred output location: ${I}.`);if(_&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(I)}}let $=null;return x.some(b=>b==="gpu-buffer"||b==="ml-tensor")&&(u=i._OrtCreateBinding(n),u===0&&ke("Can't create IO binding."),$={handle:u,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(b=>Vn(b))}),Bt.set(n,[n,c,f,$,_,!1]),[n,v,w]}catch(m){throw c.forEach(g=>i._OrtFree(g)),f.forEach(g=>i._OrtFree(g)),u!==0&&i._OrtReleaseBinding(u)!==0&&ke("Can't release IO binding."),n!==0&&i._OrtReleaseSession(n)!==0&&ke("Can't release session."),m}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&ke("Can't release session options."),d.forEach(m=>i._free(m)),i.unmountExternalData?.()}},Ns=e=>{let t=Me(),r=Bt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,i,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&ke("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ke("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),i.forEach(d=>t._OrtFree(d)),n.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&ke("Can't release session."),Bt.delete(e)},En=async(e,t,r,a,i,n=!1)=>{if(!e){t.push(0);return}let s=Me(),u=s.PTR_SIZE,d=e[0],c=e[1],f=e[3],m=f,g,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let x=e[2].gpuBuffer;_=Zt(ur(d),c);let $=s.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=$(a,i,x,_)}else if(f==="ml-tensor"){let x=e[2].mlTensor;_=Zt(ur(d),c);let $=s.jsepRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=$(a,x,ur(d),c)}else{let x=e[2];if(Array.isArray(x)){_=u*x.length,g=s._malloc(_),r.push(g);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);s.setValue(g+$*u,We(x[$],r),"*")}}else{let $=s.jsepIsGraphInput;if(d!=="string"&&$){let b=s._OrtGetInputName(a,i),S=s.UTF8ToString(b);if($(a,S)){let T=ur(d);_=Zt(T,c),m="ml-tensor";let I=s.jsepCreateTemporaryTensor,A=s.jsepUploadTensor;if(!I||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let E=await I(a,T,c);A(E,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),g=E}else _=x.byteLength,g=s._malloc(_),r.push(g),s.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),g)}else _=x.byteLength,g=s._malloc(_),r.push(g),s.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),g)}}let v=s.stackSave(),w=s.stackAlloc(4*c.length);try{c.forEach(($,b)=>s.setValue(w+b*u,$,u===4?"i32":"i64"));let x=s._OrtCreateTensor(ur(d),g,_,w,c.length,Vn(m));x===0&&ke(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push(x)}finally{s.stackRestore(v)}},Bs=async(e,t,r,a,i,n)=>{let s=Me(),u=s.PTR_SIZE,d=Bt.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=d[0],f=d[1],m=d[2],g=d[3],_=d[4],v=d[5],w=t.length,x=a.length,$=0,b=[],S=[],T=[],I=[],A=s.stackSave(),E=s.stackAlloc(w*u),D=s.stackAlloc(w*u),M=s.stackAlloc(x*u),F=s.stackAlloc(x*u);try{[$,b]=Bh(n);for(let V=0;V<w;V++)await En(r[V],S,I,e,t[V],_);for(let V=0;V<x;V++)await En(i[V],T,I,e,w+a[V],_);for(let V=0;V<w;V++)s.setValue(E+V*u,S[V],"*"),s.setValue(D+V*u,f[t[V]],"*");for(let V=0;V<x;V++)s.setValue(M+V*u,T[V],"*"),s.setValue(F+V*u,m[a[V]],"*");if(g&&!v){let{handle:V,outputPreferredLocations:he,outputPreferredLocationsEncoded:ye}=g;if(f.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${f.length}).`);for(let K=0;K<w;K++){let me=t[K];await s._OrtBindInput(V,f[me],S[K])!==0&&ke(`Can't bind input[${K}] for session=${e}.`)}for(let K=0;K<x;K++){let me=a[K];i[K]?.[3]?s._OrtBindOutput(V,m[me],T[K],0)!==0&&ke(`Can't bind pre-allocated output[${K}] for session=${e}.`):s._OrtBindOutput(V,m[me],0,ye[me])!==0&&ke(`Can't bind output[${K}] to ${he[K]} for session=${e}.`)}Bt.set(e,[c,f,m,g,_,!0])}s.jsepOnRunStart?.(c);let P;g?P=await s._OrtRunWithBinding(c,g.handle,x,M,$):P=await s._OrtRun(c,D,E,w,F,x,M,$),P!==0&&ke("failed to call OrtRun().");let ie=[];for(let V=0;V<x;V++){let he=Number(s.getValue(M+V*u,"*"));if(he===T[V]){ie.push(i[V]);continue}let ye=s.stackSave(),K=s.stackAlloc(4*u),me=!1,_e,J=0;try{s._OrtGetTensorData(he,K,K+u,K+2*u,K+3*u)!==0&&ke(`Can't access output tensor data on index ${V}.`);let we=u===4?"i32":"i64",j=Number(s.getValue(K,we));J=s.getValue(K+u,"*");let G=s.getValue(K+u*2,"*"),N=Number(s.getValue(K+u*3,we)),ae=[];for(let Be=0;Be<N;Be++)ae.push(Number(s.getValue(G+Be*u,we)));s._OrtFree(G)!==0&&ke("Can't free memory for tensor dims.");let Ae=ae.reduce((Be,Oe)=>Be*Oe,1);_e=Ht(j);let Ge=g?.outputPreferredLocations[a[V]];if(_e==="string"){if(Ge==="gpu-buffer"||Ge==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Be=[];for(let Oe=0;Oe<Ae;Oe++){let Pe=s.getValue(J+Oe*u,"*"),fa=s.getValue(J+(Oe+1)*u,"*"),wr=Oe===Ae-1?void 0:fa-Pe;Be.push(s.UTF8ToString(Pe,wr))}ie.push([_e,ae,Be,"cpu"])}else if(Ge==="gpu-buffer"&&Ae>0){let Be=s.jsepGetBuffer;if(!Be)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Oe=Be(J),Pe=Zt(j,Ae);if(Pe===void 0||!gs(_e))throw new Error(`Unsupported data type: ${_e}`);me=!0,ie.push([_e,ae,{gpuBuffer:Oe,download:s.jsepCreateDownloader(Oe,Pe,_e),dispose:()=>{s._OrtReleaseTensor(he)!==0&&ke("Can't release tensor.")}},"gpu-buffer"])}else if(Ge==="ml-tensor"&&Ae>0){let Be=s.jsepEnsureTensor;if(!Be)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Zt(j,Ae)===void 0||!ys(_e))throw new Error(`Unsupported data type: ${_e}`);let Oe=await Be(e,J,j,ae,!1);me=!0,ie.push([_e,ae,{mlTensor:Oe,download:s.jsepCreateMLTensorDownloader(J,_e),dispose:()=>{s.jsepReleaseTensorId(J),s._OrtReleaseTensor(he)}},"ml-tensor"])}else{let Be=ms(_e),Oe=new Be(Ae);new Uint8Array(Oe.buffer,Oe.byteOffset,Oe.byteLength).set(s.HEAPU8.subarray(J,J+Oe.byteLength)),ie.push([_e,ae,Oe,"cpu"])}}finally{s.stackRestore(ye),_e==="string"&&J&&s._free(J),me||s._OrtReleaseTensor(he),s.jsepOnRunEnd?.(c)}}return g&&!_&&(s._OrtClearBoundOutputs(g.handle)!==0&&ke("Can't clear bound outputs."),Bt.set(e,[c,f,m,g,_,!1])),ie}finally{s.stackRestore(A),S.forEach(P=>s._OrtReleaseTensor(P)),T.forEach(P=>s._OrtReleaseTensor(P)),I.forEach(P=>s._free(P)),$!==0&&s._OrtReleaseRunOptions($),b.forEach(P=>s._free(P))}},Ms=e=>{let t=Me(),r=Bt.get(e);if(!r)throw new Error("invalid session id");let a=r[0],i=t._OrtEndProfiling(a);i===0&&ke("Can't get an profile file name."),t._OrtFree(i)},Ds=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),Mt,Ye,sr,Dr,Pr,Pa,zn,Ua,qt,Ft,Ap,Ng,Bg,Mg,Dg,Pg,Ug,jg,Wg=L(()=>{ht(),Rg(),rr(),ps(),Mt=()=>!!Ce.wasm.proxy&&typeof document<"u",sr=!1,Dr=!1,Pr=!1,Ua=new Map,qt=(e,t)=>{let r=Ua.get(e);r?r.push(t):Ua.set(e,[t])},Ft=()=>{if(sr||!Dr||Pr||!Ye)throw new Error("worker not ready")},Ap=e=>{switch(e.data.type){case"init-wasm":sr=!1,e.data.err?(Pr=!0,zn[1](e.data.err)):(Dr=!0,zn[0]()),Pa&&(URL.revokeObjectURL(Pa),Pa=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ua.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ng=async()=>{if(!Dr){if(sr)throw new Error("multiple calls to 'initWasm()' detected.");if(Pr)throw new Error("previous call to 'initWasm()' failed.");if(sr=!0,Mt())return new Promise((e,t)=>{Ye?.terminate(),Rh().then(([r,a])=>{try{Ye=a,Ye.onerror=n=>t(n),Ye.onmessage=Ap,zn=[e,t];let i={type:"init-wasm",in:Ce};!i.in.wasm.wasmPaths&&(r||import.meta.url?.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL("/_astro/ort-wasm-simd-threaded.jsep.D5Jk56-t.wasm",import.meta.url).href}),Ye.postMessage(i),Pa=r}catch(i){t(i)}},t)});try{await hs(Ce.wasm),await As(Ce),Dr=!0}catch(e){throw Pr=!0,e}finally{sr=!1}}},Bg=async e=>{if(Mt())return Ft(),new Promise((t,r)=>{qt("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:Ce}};Ye.postMessage(a)});await Os(Ce,e)},Mg=async e=>Mt()?(Ft(),new Promise((t,r)=>{qt("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Ye.postMessage(a,[e.buffer])})):ni(e),Dg=async(e,t)=>{if(Mt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ft(),new Promise((r,a)=>{qt("create",[r,a]);let i={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ye.postMessage(i,n)})}else return Rs(e,t)},Pg=async e=>{if(Mt())return Ft(),new Promise((t,r)=>{qt("release",[t,r]);let a={type:"release",in:e};Ye.postMessage(a)});Ns(e)},Ug=async(e,t,r,a,i,n)=>{if(Mt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ft(),new Promise((s,u)=>{qt("run",[s,u]);let d=r,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:a,options:n}};Ye.postMessage(c,Ds(d))})}else return Bs(e,t,r,a,i,n)},jg=async e=>{if(Mt())return Ft(),new Promise((t,r)=>{qt("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Ye.postMessage(a)});Ms(e)}}),An,Op,Vg,H$=L(()=>{ht(),Wg(),ne(),cs(),Dh(),An=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Op=e=>{switch(e[3]){case"cpu":return new lt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!gs(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:i}=e[2];return lt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:i})}case"ml-tensor":{let t=e[0];if(!ys(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:i}=e[2];return lt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Vg=class{async fetchModelAndCopyToWasmMemory(e){return Mg(await _s(e))}async loadModel(e,t){pt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Dg(r,t),tt()}async dispose(){return Pg(this.sessionId)}async run(e,t,r){pt();let a=[],i=[];Object.entries(e).forEach(m=>{let g=m[0],_=m[1],v=this.inputNames.indexOf(g);if(v===-1)throw new Error(`invalid input '${g}'`);a.push(_),i.push(v)});let n=[],s=[];Object.entries(t).forEach(m=>{let g=m[0],_=m[1],v=this.outputNames.indexOf(g);if(v===-1)throw new Error(`invalid output '${g}'`);n.push(_),s.push(v)});let u=a.map((m,g)=>An(m,()=>`input "${this.inputNames[i[g]]}"`)),d=n.map((m,g)=>m?An(m,()=>`output "${this.outputNames[s[g]]}"`):null),c=await Ug(this.sessionId,i,u,s,d,r),f={};for(let m=0;m<c.length;m++)f[this.outputNames[s[m]]]=n[m]??Op(c[m]);return tt(),f}startProfiling(){}endProfiling(){jg(this.sessionId)}}}),Lg={};ha(Lg,{OnnxruntimeWebAssemblyBackend:()=>ts,initializeFlags:()=>es,wasmBackend:()=>qg});var es,ts,qg,Z$=L(()=>{ht(),Wg(),H$(),es=()=>{if((typeof Ce.wasm.initTimeout!="number"||Ce.wasm.initTimeout<0)&&(Ce.wasm.initTimeout=0),Ce.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Ce.wasm.proxy!="boolean"&&(Ce.wasm.proxy=!1),typeof Ce.wasm.trace!="boolean"&&(Ce.wasm.trace=!1),typeof Ce.wasm.numThreads!="number"||!Number.isInteger(Ce.wasm.numThreads)||Ce.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ce.wasm.numThreads=1;else{let e=typeof navigator>"u"?Rb("node:os").cpus().length:navigator.hardwareConcurrency;Ce.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},ts=class{async init(e){es(),await Ng(),await Bg(e)}async createInferenceSessionHandler(e,t){let r=new Vg;return await r.loadModel(e,t),Promise.resolve(r)}},qg=new ts});ht();ht();ht();var K$="1.21.0",Q$=Ch;{let e=(Z$(),Ya(Lg)).wasmBackend;Kt("webgpu",e,5),Kt("webnn",e,5),Kt("cpu",e,10),Kt("wasm",e,10)}Object.defineProperty(Ce.versions,"web",{value:K$,enumerable:!0});/**
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
 */const J$=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return ds},get TRACE(){return da},get TRACE_FUNC_BEGIN(){return pt},get TRACE_FUNC_END(){return tt},get Tensor(){return lt},default:Q$,get env(){return Ce},get registerBackend(){return Kt}},Symbol.toStringTag,{value:"Module"})),Ur=["Aguarde um momento, a mágica está acontecendo...","Estamos removendo o fundo, pixel por pixel!","Quase lá! Tomando um café enquanto processamos...","Não se preocupe, não vamos remover seu bom humor!","Contando os pixels... são muitos!","Processando sua imagem mais rápido que um raio (quase)!","Preparando a imagem para o seu próximo grande projeto.","Aguarde, estamos dando um trato na sua foto.","Seu fundo está prestes a desaparecer!","Estamos trabalhando duro para deixar sua imagem perfeita."],i1=({lang:e})=>{const t=u0(e),[r,a]=yt.useState(null),[i,n]=yt.useState(null),[s,u]=yt.useState(null),[d,c]=yt.useState(!1),[f,m]=yt.useState(null),[g,_]=yt.useState(!1),[v,w]=yt.useState(Ur[0]),x=yt.useRef(null);yt.useEffect(()=>{let M;return d?M=setInterval(()=>{w(Ur[Math.floor(Math.random()*Ur.length)])},3e3):w(Ur[0]),()=>clearInterval(M)},[d]);const $=yt.useCallback(async M=>{if(!M)return;c(!0),u(null),m(null),w(Ur[0]);const F=new FileReader;F.onloadend=async()=>{n(F.result),Ce.wasm.wasmPath="/models/";try{const P=await Eb(M);P?u(URL.createObjectURL(P)):m(t("components.backgroundRemover.errorProcessing"))}catch(P){m(`Ocorreu um erro ao processar a imagem: ${P.message}`)}finally{c(!1)}},F.readAsDataURL(M)},[t]),b=M=>{M&&M.type.startsWith("image/")?(a(M),$(M)):(m(t("components.backgroundRemover.errorInvalidFile")),a(null),n(null),u(null))},S=M=>{b(M.target.files?.[0]||null)},T=M=>{M.preventDefault(),M.stopPropagation(),_(!1),b(M.dataTransfer.files?.[0]||null)},I=M=>{M.preventDefault(),M.stopPropagation(),_(!0)},A=M=>{M.preventDefault(),M.stopPropagation(),_(!1)},E=()=>r?`${r.name.substring(0,r.name.lastIndexOf("."))}-sem-fundo.png`:"imagem-sem-fundo.png",D=()=>{a(null),n(null),u(null),m(null)};return Ne.jsxs("div",{className:"relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800",children:[d&&Ne.jsx(o0,{text:v}),Ne.jsx("input",{type:"file",accept:"image/*",onChange:S,className:"hidden",ref:x,disabled:d}),!r&&Ne.jsxs("div",{onDrop:T,onDragOver:I,onDragLeave:A,className:`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${g?"border-purple-600 bg-purple-50 dark:bg-gray-700":"border-gray-300 dark:border-gray-600"}`,children:[Ne.jsx("p",{className:"text-gray-500 dark:text-gray-400 mb-4",children:t("components.backgroundRemover.dragAndDrop")}),Ne.jsx("button",{onClick:()=>x.current?.click(),disabled:d,className:"w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800",children:t("components.backgroundRemover.selectImage")})]}),f&&Ne.jsx("p",{className:"mt-4 text-center text-red-500",children:f}),r&&Ne.jsxs("div",{className:`mt-6 text-center ${d?"opacity-20":""}`,children:[Ne.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[Ne.jsxs("div",{children:[Ne.jsx("h3",{className:"text-lg font-semibold dark:text-gray-200",children:t("components.backgroundRemover.original")}),Ne.jsx("div",{className:"mt-2 flex items-center justify-center h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden",children:i&&Ne.jsx("img",{src:i,alt:"Original",className:"max-h-full max-w-full"})})]}),Ne.jsxs("div",{children:[Ne.jsx("h3",{className:"text-lg font-semibold dark:text-gray-200",children:t("components.backgroundRemover.result")}),Ne.jsx("div",{className:"mt-2 flex items-center justify-center h-80 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Crect width='10' height='10' fill='%23eee'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23eee'/%3E%3C/svg%3E")`},children:s?Ne.jsx("img",{src:s,alt:"Fundo removido",className:"max-h-full max-w-full"}):Ne.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:t("components.backgroundRemover.resultHere")})}),s&&Ne.jsx("a",{href:s,download:E(),className:"mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors",children:t("components.backgroundRemover.download")})]})]}),Ne.jsx("button",{onClick:D,className:"w-full mt-4 text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400",children:t("components.backgroundRemover.selectAnother")})]})]})};export{i1 as default};
