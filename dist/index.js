var THREE = (function () {
	'use strict';

	/**
	 * @license
	 * Copyright 2010-2023 Three.js Authors
	 * SPDX-License-Identifier: MIT
	 */
	const t="160",e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i=0,r=1,s=2,a=3,o=0,l=1,c=2,h=3,u=0,d=1,p=2,m=2,f=0,g=1,_=2,v=3,x=4,y=5,M=100,S=101,b=102,E=103,T=104,w=200,A=201,R=202,C=203,P=204,L=205,I=206,U=207,N=208,D=209,O=210,F=211,B=212,z=213,H=214,V=0,k=1,G=2,W=3,X=4,j=5,q=6,Y=7,Z=0,J=1,K=2,$=0,Q=1,tt=2,et=3,nt=4,it=5,rt=6,st="attached",at="detached",ot=300,lt=301,ct=302,ht=303,ut=304,dt=306,pt=1e3,mt=1001,ft=1002,gt=1003,_t=1004,vt=1004,xt=1005,yt=1005,Mt=1006,St=1007,bt=1007,Et=1008,Tt=1008,wt=1009,At=1010,Rt=1011,Ct=1012,Pt=1013,Lt=1014,It=1015,Ut=1016,Nt=1017,Dt=1018,Ot=1020,Ft=1021,Bt=1023,zt=1024,Ht=1025,Vt=1026,kt=1027,Gt=1028,Wt=1029,Xt=1030,jt=1031,qt=1033,Yt=33776,Zt=33777,Jt=33778,Kt=33779,$t=35840,Qt=35841,te=35842,ee=35843,ne=36196,ie=37492,re=37496,se=37808,ae=37809,oe=37810,le=37811,ce=37812,he=37813,ue=37814,de=37815,pe=37816,me=37817,fe=37818,ge=37819,_e=37820,ve=37821,xe=36492,ye=36494,Me=36495,Se=36283,be=36284,Ee=36285,Te=36286,we=2200,Ae=2201,Re=2202,Ce=2300,Pe=2301,Le=2302,Ie=2400,Ue=2401,Ne=2402,De=2500,Oe=2501,Fe=0,Be=1,ze=2,He=3e3,Ve=3001,ke=3200,Ge=3201,We=0,Xe=1,je="",qe="srgb",Ye="srgb-linear",Ze="display-p3",Je="display-p3-linear",Ke="linear",$e="srgb",Qe="rec709",tn="p3",en=0,nn=7680,rn=7681,sn=7682,an=7683,on=34055,ln=34056,cn=5386,hn=512,un=513,dn=514,pn=515,mn=516,fn=517,gn=518,_n=519,vn=512,xn=513,yn=514,Mn=515,Sn=516,bn=517,En=518,Tn=519,wn=35044,An=35048,Rn=35040,Cn=35045,Pn=35049,Ln=35041,In=35046,Un=35050,Nn=35042,Dn="100",On="300 es",Fn=1035,Bn=2e3,zn=2001;class Hn{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e);}hasEventListener(t,e){if(void 0===this._listeners)return !1;const n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return;const n=this._listeners[t];if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1);}}dispatchEvent(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const n=e.slice(0);for(let e=0,i=n.length;e<i;e++)n[e].call(this,t);t.target=null;}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kn=1234567;const Gn=Math.PI/180,Wn=180/Math.PI;function Xn(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return (Vn[255&t]+Vn[t>>8&255]+Vn[t>>16&255]+Vn[t>>24&255]+"-"+Vn[255&e]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[63&n|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[255&i]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function jn(t,e,n){return Math.max(e,Math.min(n,t))}function qn(t,e){return (t%e+e)%e}function Yn(t,e,n){return (1-n)*t+n*e}function Zn(t){return 0==(t&t-1)&&0!==t}function Jn(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw new Error("Invalid component type.")}}const Qn={DEG2RAD:Gn,RAD2DEG:Wn,generateUUID:Xn,clamp:jn,euclideanModulo:qn,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:Yn,damp:function(t,e,n,i){return Yn(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(qn(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){void 0!==t&&(kn=t);let e=kn+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*Gn},radToDeg:function(t){return t*Wn},isPowerOfTwo:Zn,ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:Jn,setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*m,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*m,o*c);break;case"ZYZ":t.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r);}},normalize:$n,denormalize:Kn};class ti{constructor(t=0,e=0){ti.prototype.isVector2=!0,this.x=t,this.y=e;}get width(){return this.x}set width(t){this.x=t;}get height(){return this.y}set height(t){this.y=t;}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y;}}class ei{constructor(t,e,n,i,r,s,a,o,l){ei.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==t&&this.set(t,e,n,i,r,s,a,o,l);}set(t,e,n,i,r,s,a,o,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],p=n[8],m=i[0],f=i[3],g=i[6],_=i[1],v=i[4],x=i[7],y=i[2],M=i[5],S=i[8];return r[0]=s*m+a*_+o*y,r[3]=s*f+a*v+o*M,r[6]=s*g+a*x+o*S,r[1]=l*m+c*_+h*y,r[4]=l*f+c*v+h*M,r[7]=l*g+c*x+h*S,r[2]=u*m+d*_+p*y,r[5]=u*f+d*v+p*M,r[8]=u*g+d*x+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,p=e*h+n*u+i*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(i*l-c*n)*m,t[2]=(a*n-i*s)*m,t[3]=u*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ni.makeScale(t,e)),this}rotate(t){return this.premultiply(ni.makeRotation(-t)),this}translate(t,e){return this.premultiply(ni.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<9;t++)if(e[t]!==n[t])return !1;return !0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return (new this.constructor).fromArray(this.elements)}}const ni=new ei;function ii(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return !0;return !1}const ri={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function si(t,e){return new ri[t](e)}function ai(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oi(){const t=ai("canvas");return t.style.display="block",t}const li={};function ci(t){t in li||(li[t]=!0,console.warn(t));}const hi=(new ei).set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ui=(new ei).set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),di={[Ye]:{transfer:Ke,primaries:Qe,toReference:t=>t,fromReference:t=>t},[qe]:{transfer:$e,primaries:Qe,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Je]:{transfer:Ke,primaries:tn,toReference:t=>t.applyMatrix3(ui),fromReference:t=>t.applyMatrix3(hi)},[Ze]:{transfer:$e,primaries:tn,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ui),fromReference:t=>t.applyMatrix3(hi).convertLinearToSRGB()}},pi=new Set([Ye,Je]),mi={enabled:!0,_workingColorSpace:Ye,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!pi.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t;},convert:function(t,e,n){if(!1===this.enabled||e===n||!e||!n)return t;const i=di[e].toReference;return (0, di[n].fromReference)(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return di[t].primaries},getTransfer:function(t){return t===je?Ke:di[t].transfer}};function fi(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function gi(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}let _i;class vi{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else {void 0===_i&&(_i=ai("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i;}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=ai("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let t=0;t<r.length;t++)r[t]=255*fi(r[t]/255);return n.putImageData(i,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*fi(e[t]/255)):e[t]=fi(e[t]);return {data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xi=0;class yi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xi++}),this.uuid=Xn(),this.data=t,this.version=0;}set needsUpdate(t){!0===t&&this.version++;}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(null!==i){let t;if(Array.isArray(i)){t=[];for(let e=0,n=i.length;e<n;e++)i[e].isDataTexture?t.push(Mi(i[e].image)):t.push(Mi(i[e]));}else t=Mi(i);n.url=t;}return e||(t.images[this.uuid]=n),n}}function Mi(t){return "undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?vi.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Si=0;class bi extends Hn{constructor(t=bi.DEFAULT_IMAGE,e=bi.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=bi.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Si++}),this.uuid=Xn(),this.name="",this.source=new yi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new ti(0,0),this.repeat=new ti(1,1),this.center=new ti(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ei,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,"string"==typeof c?this.colorSpace=c:(ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ve?qe:je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1;}get image(){return this.source.data}set image(t=null){this.source.data=t;}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);}clone(){return (new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"});}transformUv(t){if(this.mapping!==ot)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pt:t.x=t.x-Math.floor(t.x);break;case mt:t.x=t.x<0?0:1;break;case ft:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);}if(t.y<0||t.y>1)switch(this.wrapT){case pt:t.y=t.y-Math.floor(t.y);break;case mt:t.y=t.y<0?0:1;break;case ft:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0);}get encoding(){return ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Ve:He}set encoding(t){ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ve?qe:je;}}bi.DEFAULT_IMAGE=null,bi.DEFAULT_MAPPING=ot,bi.DEFAULT_ANISOTROPY=1;class Ei{constructor(t=0,e=0,n=0,i=1){Ei.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i;}get width(){return this.z}set width(t){this.z=t;}get height(){return this.w}set height(t){this.w=t;}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const s=.01,a=.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],p=o[9],m=o[2],f=o[6],g=o[10];if(Math.abs(c-u)<s&&Math.abs(h-m)<s&&Math.abs(p-f)<s){if(Math.abs(c+u)<a&&Math.abs(h+m)<a&&Math.abs(p+f)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;e=Math.PI;const t=(l+1)/2,o=(d+1)/2,_=(g+1)/2,v=(c+u)/4,x=(h+m)/4,y=(p+f)/4;return t>o&&t>_?t<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(t),i=v/n,r=x/n):o>_?o<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(o),n=v/i,r=y/i):_<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=x/r,i=y/r),this.set(n,i,r,e),this}let _=Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(f-p)/_,this.y=(h-m)/_,this.z=(u-c)/_,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w;}}class Ti extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ei(0,0,t,e),this.scissorTest=!1,this.viewport=new Ei(0,0,t,e);const i={width:t,height:e,depth:1};void 0!==n.encoding&&(ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ve?qe:je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bi(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples;}setSize(t,e,n=1){this.width===t&&this.height===e&&this.depth===n||(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e);}clone(){return (new this.constructor).copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"});}}class wi extends Ti{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0;}}class Ai extends bi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1;}}class Ri extends wi{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ai(null,t,e,n),this.texture.isRenderTargetTexture=!0;}}class Ci extends bi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1;}}class Pi extends wi{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ci(null,t,e,n),this.texture.isRenderTargetTexture=!0;}}class Li extends wi{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let t=0;t<n;t++)this.texture[t]=r.clone(),this.texture[t].isRenderTargetTexture=!0;}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose();}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e);}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}}class Ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i;}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3];if(0===a)return t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(1===a)return t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=m);if(h!==m||o!==u||l!==d||c!==p){let t=1-a;const e=o*u+l*d+c*p+h*m,n=e>=0?1:-1,i=1-e*e;if(i>Number.EPSILON){const r=Math.sqrt(i),s=Math.atan2(r,e*n);t=Math.sin(t*s)/r,a=Math.sin(a*s)/r;}const r=a*n;if(o=o*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-a){const t=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=t,l*=t,c*=t,h*=t;}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h;}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return t[e]=a*p+c*h+o*d-l*u,t[e+1]=o*p+c*u+l*h-a*d,t[e+2]=l*p+c*d+a*u-o*h,t[e+3]=c*p-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback();}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback();}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback();}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback();}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(r/2),u=o(n/2),d=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s);}return !0===e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=n+a+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-o)*t,this._y=(r-l)*t,this._z=(s-i)*t;}else if(n>a&&n>h){const t=2*Math.sqrt(1+n-a-h);this._w=(c-o)/t,this._x=.25*t,this._y=(i+s)/t,this._z=(r+l)/t;}else if(a>h){const t=2*Math.sqrt(1+a-n-h);this._w=(r-l)/t,this._x=(i+s)/t,this._y=.25*t,this._z=(o+c)/t;}else {const t=2*Math.sqrt(1+h-n-a);this._w=(s-i)/t,this._x=(r+l)/t,this._y=(o+c)/t,this._z=.25*t;}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(0===n)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const t=1-e;return this._w=t*s+e*this._w,this._x=t*n+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w;}}class Ui{constructor(t=0,e=0,n=0){Ui.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n;}set(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Di.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Di.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*n),c=2*(a*e-r*i),h=2*(r*n-s*e);return this.x=e+o*l+s*h-a*c,this.y=n+o*c+a*l-r*h,this.z=i+o*h+r*c-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ni.copy(this).projectOnVector(t),this.sub(Ni)}reflect(t){return this.sub(Ni.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z;}}const Ni=new Ui,Di=new Ii;class Oi{constructor(t=new Ui(1/0,1/0,1/0),e=new Ui(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e;}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return (new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(void 0!==n){const i=n.getAttribute("position");if(!0===e&&void 0!==i&&!0!==t.isInstancedMesh)for(let e=0,n=i.count;e<n;e++)!0===t.isMesh?t.getVertexPosition(e,Bi):Bi.fromBufferAttribute(i,e),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else void 0!==t.boundingBox?(null===t.boundingBox&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(null===n.boundingBox&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi);}const i=t.children;for(let t=0,n=i.length;t<n;t++)this.expandByObject(i[t],e);return this}containsPoint(t){return !(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return !(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return !1;this.getCenter(ji),qi.subVectors(this.max,ji),Hi.subVectors(t.a,ji),Vi.subVectors(t.b,ji),ki.subVectors(t.c,ji),Gi.subVectors(Vi,Hi),Wi.subVectors(ki,Vi),Xi.subVectors(Hi,ki);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0];return !!Ji(e,Hi,Vi,ki,qi)&&(e=[1,0,0,0,1,0,0,0,1],!!Ji(e,Hi,Vi,ki,qi)&&(Yi.crossVectors(Gi,Wi),e=[Yi.x,Yi.y,Yi.z],Ji(e,Hi,Vi,ki,qi)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(Bi).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new Ui,new Ui,new Ui,new Ui,new Ui,new Ui,new Ui,new Ui],Bi=new Ui,zi=new Oi,Hi=new Ui,Vi=new Ui,ki=new Ui,Gi=new Ui,Wi=new Ui,Xi=new Ui,ji=new Ui,qi=new Ui,Yi=new Ui,Zi=new Ui;function Ji(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),o=e.dot(Zi),l=n.dot(Zi),c=i.dot(Zi);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return !1}return !0}const Ki=new Oi,$i=new Ui,Qi=new Ui;class tr{constructor(t=new Ui,e=-1){this.isSphere=!0,this.center=t,this.radius=e;}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;void 0!==e?n.copy(e):Ki.setFromPoints(t).getCenter(n);let i=0;for(let e=0,r=t.length;e<r;e++)i=Math.max(i,n.distanceToSquared(t[e]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),n=.5*(t-this.radius);this.center.addScaledVector($i,n/t),this.radius+=n;}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(!0===this.center.equals(t.center)?this.radius=Math.max(this.radius,t.radius):(Qi.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Qi)),this.expandByPoint($i.copy(t.center).sub(Qi))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return (new this.constructor).copy(this)}}const er=new Ui,nr=new Ui,ir=new Ui,rr=new Ui,sr=new Ui,ar=new Ui,or=new Ui;class lr{constructor(t=new Ui,e=new Ui(0,0,-1)){this.origin=t,this.direction=e;}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,er)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=er.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(er.copy(this.origin).addScaledVector(this.direction,e),er.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nr.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),rr.copy(this.origin).sub(nr);const r=.5*t.distanceTo(e),s=-this.direction.dot(ir),a=rr.dot(this.direction),o=-rr.dot(ir),l=rr.lengthSq(),c=Math.abs(1-s*s);let h,u,d,p;if(c>0)if(h=s*o-a,u=s*a-o,p=r*c,h>=0)if(u>=-p)if(u<=p){const t=1/c;h*=t,u*=t,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l;}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(nr).addScaledVector(ir,u),d}intersectSphere(t,e){er.subVectors(t.center,this.origin);const n=er.dot(this.direction),i=er.dot(er)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return null===n?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);if(0===e)return !0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c>=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return null!==this.intersectBox(t,er)}intersectTriangle(t,e,n,i,r){sr.subVectors(e,t),ar.subVectors(n,t),or.crossVectors(sr,ar);let s,a=this.direction.dot(or);if(a>0){if(i)return null;s=1;}else {if(!(a<0))return null;s=-1,a=-a;}rr.subVectors(this.origin,t);const o=s*this.direction.dot(ar.crossVectors(rr,ar));if(o<0)return null;const l=s*this.direction.dot(sr.cross(rr));if(l<0)return null;if(o+l>a)return null;const c=-s*rr.dot(or);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return (new this.constructor).copy(this)}}class cr{constructor(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){cr.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==t&&this.set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f);}set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return (new cr).fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hr.setFromMatrixColumn(t,0).length(),r=1/hr.setFromMatrixColumn(t,1).length(),s=1/hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if("XYZ"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=n+i*l,e[5]=t-r*l,e[9]=-a*o,e[2]=r-t*l,e[6]=i+n*l,e[10]=s*o;}else if("YXZ"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t+r*a,e[4]=i*a-n,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=n*a-i,e[6]=r+t*a,e[10]=s*o;}else if("ZXY"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t-r*a,e[4]=-s*h,e[8]=i+n*a,e[1]=n+i*a,e[5]=s*c,e[9]=r-t*a,e[2]=-s*l,e[6]=a,e[10]=s*o;}else if("ZYX"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=i*l-n,e[8]=t*l+r,e[1]=o*h,e[5]=r*l+t,e[9]=n*l-i,e[2]=-l,e[6]=a*o,e[10]=s*o;}else if("YZX"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=r-t*h,e[8]=i*h+n,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=n*h+i,e[10]=t-r*h;}else if("XZY"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=n*h-i,e[2]=i*h-n,e[6]=a*c,e[10]=r*h+t;}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dr,t,pr)}lookAt(t,e,n){const i=this.elements;return gr.subVectors(t,e),0===gr.lengthSq()&&(gr.z=1),gr.normalize(),mr.crossVectors(n,gr),0===mr.lengthSq()&&(1===Math.abs(n.z)?gr.x+=1e-4:gr.z+=1e-4,gr.normalize(),mr.crossVectors(n,gr)),mr.normalize(),fr.crossVectors(gr,mr),i[0]=mr.x,i[4]=fr.x,i[8]=gr.x,i[1]=mr.y,i[5]=fr.y,i[9]=gr.y,i[2]=mr.z,i[6]=fr.z,i[10]=gr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],p=n[2],m=n[6],f=n[10],g=n[14],_=n[3],v=n[7],x=n[11],y=n[15],M=i[0],S=i[4],b=i[8],E=i[12],T=i[1],w=i[5],A=i[9],R=i[13],C=i[2],P=i[6],L=i[10],I=i[14],U=i[3],N=i[7],D=i[11],O=i[15];return r[0]=s*M+a*T+o*C+l*U,r[4]=s*S+a*w+o*P+l*N,r[8]=s*b+a*A+o*L+l*D,r[12]=s*E+a*R+o*I+l*O,r[1]=c*M+h*T+u*C+d*U,r[5]=c*S+h*w+u*P+d*N,r[9]=c*b+h*A+u*L+d*D,r[13]=c*E+h*R+u*I+d*O,r[2]=p*M+m*T+f*C+g*U,r[6]=p*S+m*w+f*P+g*N,r[10]=p*b+m*A+f*L+g*D,r[14]=p*E+m*R+f*I+g*O,r[3]=_*M+v*T+x*C+y*U,r[7]=_*S+v*w+x*P+y*N,r[11]=_*b+v*A+x*L+y*D,r[15]=_*E+v*R+x*I+y*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+r*o*h-i*l*h-r*a*u+n*l*u+i*a*d-n*o*d)+t[7]*(+e*o*d-e*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+n*s*d+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*u+i*s*h-n*s*u+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],m=t[13],f=t[14],g=t[15],_=h*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,v=p*u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,x=c*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,y=p*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,M=e*_+n*v+i*x+r*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=_*S,t[1]=(m*u*r-h*f*r-m*i*d+n*f*d+h*i*g-n*u*g)*S,t[2]=(a*f*r-m*o*r+m*i*l-n*f*l-a*i*g+n*o*g)*S,t[3]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*d-n*o*d)*S,t[4]=v*S,t[5]=(c*f*r-p*u*r+p*i*d-e*f*d-c*i*g+e*u*g)*S,t[6]=(p*o*r-s*f*r-p*i*l+e*f*l+s*i*g-e*o*g)*S,t[7]=(s*u*r-c*o*r+c*i*l-e*u*l-s*i*d+e*o*d)*S,t[8]=x*S,t[9]=(p*h*r-c*m*r-p*n*d+e*m*d+c*n*g-e*h*g)*S,t[10]=(s*m*r-p*a*r+p*n*l-e*m*l-s*n*g+e*a*g)*S,t[11]=(c*a*r-s*h*r-c*n*l+e*h*l+s*n*d-e*a*d)*S,t[12]=y*S,t[13]=(c*m*i-p*h*i+p*n*u-e*m*u-c*n*f+e*h*f)*S,t[14]=(p*a*i-s*m*i-p*n*o+e*m*o+s*n*f-e*a*f)*S,t[15]=(s*h*i-c*a*i+c*n*o-e*h*o-s*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=a*h,_=o*l,v=o*c,x=o*h,y=n.x,M=n.y,S=n.z;return i[0]=(1-(m+g))*y,i[1]=(d+x)*y,i[2]=(p-v)*y,i[3]=0,i[4]=(d-x)*M,i[5]=(1-(u+g))*M,i[6]=(f+_)*M,i[7]=0,i[8]=(p+v)*S,i[9]=(f-_)*S,i[10]=(1-(u+m))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=hr.set(i[0],i[1],i[2]).length();const s=hr.set(i[4],i[5],i[6]).length(),a=hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ur.copy(this);const o=1/r,l=1/s,c=1/a;return ur.elements[0]*=o,ur.elements[1]*=o,ur.elements[2]*=o,ur.elements[4]*=l,ur.elements[5]*=l,ur.elements[6]*=l,ur.elements[8]*=c,ur.elements[9]*=c,ur.elements[10]*=c,e.setFromRotationMatrix(ur),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=2e3){const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let d,p;if(a===Bn)d=-(s+r)/(s-r),p=-2*s*r/(s-r);else {if(a!==zn)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);d=-s/(s-r),p=-s*r/(s-r);}return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=2e3){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(s-r),u=(e+t)*l,d=(n+i)*c;let p,m;if(a===Bn)p=(s+r)*h,m=-2*h;else {if(a!==zn)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);p=r*h,m=-1*h;}return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=m,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<16;t++)if(e[t]!==n[t])return !1;return !0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hr=new Ui,ur=new cr,dr=new Ui(0,0,0),pr=new Ui(1,1,1),mr=new Ui,fr=new Ui,gr=new Ui,_r=new cr,vr=new Ii;class xr{constructor(t=0,e=0,n=0,i=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i;}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback();}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback();}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback();}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback();}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(jn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-jn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e);}return this._order=e,!0===n&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _r.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_r,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vr.setFromEuler(this),this.setFromQuaternion(vr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order;}}xr.DEFAULT_ORDER="XYZ";class yr{constructor(){this.mask=1;}set(t){this.mask=(1<<t|0)>>>0;}enable(t){this.mask|=1<<t|0;}enableAll(){this.mask=-1;}toggle(t){this.mask^=1<<t|0;}disable(t){this.mask&=~(1<<t|0);}disableAll(){this.mask=0;}test(t){return 0!=(this.mask&t.mask)}isEnabled(t){return 0!=(this.mask&(1<<t|0))}}let Mr=0;const Sr=new Ui,br=new Ii,Er=new cr,Tr=new Ui,wr=new Ui,Ar=new Ui,Rr=new Ii,Cr=new Ui(1,0,0),Pr=new Ui(0,1,0),Lr=new Ui(0,0,1),Ir={type:"added"},Ur={type:"removed"};class Nr extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nr.DEFAULT_UP.clone();const t=new Ui,e=new xr,n=new Ii,i=new Ui(1,1,1);e._onChange((function(){n.setFromEuler(e,!1);})),n._onChange((function(){e.setFromQuaternion(n,void 0,!1);})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new cr},normalMatrix:{value:new ei}}),this.matrix=new cr,this.matrixWorld=new cr,this.matrixAutoUpdate=Nr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={};}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale);}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e);}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0);}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t);}setRotationFromQuaternion(t){this.quaternion.copy(t);}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Cr,t)}rotateY(t){return this.rotateOnAxis(Pr,t)}rotateZ(t){return this.rotateOnAxis(Lr,t)}translateOnAxis(t,e){return Sr.copy(t).applyQuaternion(this.quaternion),this.position.add(Sr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cr,t)}translateY(t){return this.translateOnAxis(Pr,t)}translateZ(t){return this.translateOnAxis(Lr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(wr,Tr,this.up):Er.lookAt(Tr,wr,this.up),this.quaternion.setFromRotationMatrix(Er),i&&(Er.extractRotation(i.matrixWorld),br.setFromRotationMatrix(Er),this.quaternion.premultiply(br.invert()));}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ir)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return -1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ur)),this}removeFromParent(){const t=this.parent;return null!==t&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),Er.multiply(t.parent.matrixWorld)),t.applyMatrix4(Er),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const i=this.children[n].getObjectByProperty(t,e);if(void 0!==i)return i}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Ar),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Rr,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t);}traverseVisible(t){if(!1===this.visible)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t);}traverseAncestors(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t));}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0;}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const i=e[n];!0!==i.matrixWorldAutoUpdate&&!0!==t||i.updateMatrixWorld(t);}}updateWorldMatrix(t,e){const n=this.parent;if(!0===t&&null!==n&&!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children;for(let e=0,n=t.length;e<n;e++){const n=t[e];!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!1,!0);}}}toJSON(t){const e=void 0===t||"string"==typeof t,n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};function r(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((t=>({boxInitialized:t.boxInitialized,boxMin:t.box.min.toArray(),boxMax:t.box.max.toArray(),sphereInitialized:t.sphereInitialized,sphereRadius:t.sphere.radius,sphereCenter:t.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),null!==this.boundingSphere&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),null!==this.boundingBox&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const n=e.shapes;if(Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const i=n[e];r(t.shapes,i);}else r(t.shapes,n);}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let n=0,i=this.material.length;n<i;n++)e.push(r(t.materials,this.material[n]));i.material=e;}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let e=0;e<this.children.length;e++)i.children.push(this.children[e].toJSON(t).object);}if(this.animations.length>0){i.animations=[];for(let e=0;e<this.animations.length;e++){const n=this.animations[e];i.animations.push(r(t.animations,n));}}if(e){const e=s(t.geometries),i=s(t.materials),r=s(t.textures),a=s(t.images),o=s(t.shapes),l=s(t.skeletons),c=s(t.animations),h=s(t.nodes);e.length>0&&(n.geometries=e),i.length>0&&(n.materials=i),r.length>0&&(n.textures=r),a.length>0&&(n.images=a),o.length>0&&(n.shapes=o),l.length>0&&(n.skeletons=l),c.length>0&&(n.animations=c),h.length>0&&(n.nodes=h);}return n.object=i,n;function s(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i);}return e}}clone(t){return (new this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const n=t.children[e];this.add(n.clone());}return this}}Nr.DEFAULT_UP=new Ui(0,1,0),Nr.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dr=new Ui,Or=new Ui,Fr=new Ui,Br=new Ui,zr=new Ui,Hr=new Ui,Vr=new Ui,kr=new Ui,Gr=new Ui,Wr=new Ui;let Xr=!1;class jr{constructor(t=new Ui,e=new Ui,n=new Ui){this.a=t,this.b=e,this.c=n;}static getNormal(t,e,n,i){i.subVectors(n,e),Dr.subVectors(t,e),i.cross(Dr);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Dr.subVectors(i,e),Or.subVectors(n,e),Fr.subVectors(t,e);const s=Dr.dot(Dr),a=Dr.dot(Or),o=Dr.dot(Fr),l=Or.dot(Or),c=Or.dot(Fr),h=s*l-a*a;if(0===h)return r.set(0,0,0),null;const u=1/h,d=(l*o-a*c)*u,p=(s*c-a*o)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return null!==this.getBarycoord(t,e,n,i,Br)&&(Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1)}static getUV(t,e,n,i,r,s,a,o){return !1===Xr&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(t,e,n,i,r,s,a,o)}static getInterpolation(t,e,n,i,r,s,a,o){return null===this.getBarycoord(t,e,n,i,Br)?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Br.x),o.addScaledVector(s,Br.y),o.addScaledVector(a,Br.z),o)}static isFrontFacing(t,e,n,i){return Dr.subVectors(n,e),Or.subVectors(t,e),Dr.cross(Or).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dr.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),.5*Dr.cross(Or).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return jr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return jr.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return !1===Xr&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),jr.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return jr.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return jr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return jr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;zr.subVectors(i,n),Hr.subVectors(r,n),kr.subVectors(t,n);const o=zr.dot(kr),l=Hr.dot(kr);if(o<=0&&l<=0)return e.copy(n);Gr.subVectors(t,i);const c=zr.dot(Gr),h=Hr.dot(Gr);if(c>=0&&h<=c)return e.copy(i);const u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(n).addScaledVector(zr,s);Wr.subVectors(t,r);const d=zr.dot(Wr),p=Hr.dot(Wr);if(p>=0&&d<=p)return e.copy(r);const m=d*l-o*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Hr,a);const f=c*p-d*h;if(f<=0&&h-c>=0&&d-p>=0)return Vr.subVectors(r,i),a=(h-c)/(h-c+(d-p)),e.copy(i).addScaledVector(Vr,a);const g=1/(f+m+u);return s=m*g,a=u*g,e.copy(n).addScaledVector(zr,s).addScaledVector(Hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Jr(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}class Kr{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(void 0===e&&void 0===n){const e=t;e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e);}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,mi.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=mi.workingColorSpace){return this.r=t,this.g=e,this.b=n,mi.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=mi.workingColorSpace){if(t=qn(t,1),e=jn(e,0,1),n=jn(n,0,1),0===e)this.r=this.g=this.b=n;else {const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Jr(r,i,t+1/3),this.g=Jr(r,i,t),this.b=Jr(r,i,t-1/3);}return mi.toWorkingColorSpace(this,i),this}setStyle(t,e=qe){function n(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.");}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t);}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const n=i[1],r=n.length;if(3===r)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(6===r)return this.setHex(parseInt(n,16),e);console.warn("THREE.Color: Invalid hex color "+t);}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=qr[t.toLowerCase()];return void 0!==n?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return mi.fromWorkingColorSpace($r.copy(this),t),65536*Math.round(jn(255*$r.r,0,255))+256*Math.round(jn(255*$r.g,0,255))+Math.round(jn(255*$r.b,0,255))}getHexString(t=qe){return ("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=mi.workingColorSpace){mi.fromWorkingColorSpace($r.copy(this),e);const n=$r.r,i=$r.g,r=$r.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else {const t=s-a;switch(l=c<=.5?t/(s+a):t/(2-s-a),s){case n:o=(i-r)/t+(i<r?6:0);break;case i:o=(r-n)/t+2;break;case r:o=(n-i)/t+4;}o/=6;}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=mi.workingColorSpace){return mi.fromWorkingColorSpace($r.copy(this),e),t.r=$r.r,t.g=$r.g,t.b=$r.b,t}getStyle(t=qe){mi.fromWorkingColorSpace($r.copy(this),t);const e=$r.r,n=$r.g,i=$r.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(Yr),this.setHSL(Yr.h+t,Yr.s+e,Yr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yr),t.getHSL(Zr);const n=Yn(Yr.h,Zr.h,e),i=Yn(Yr.s,Zr.s,e),r=Yn(Yr.l,Zr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b;}}const $r=new Kr;Kr.NAMES=qr;let Qr=0;class ts extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qr++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=1,this.side=u,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=P,this.blendDst=L,this.blendEquation=M,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nn,this.stencilZFail=nn,this.stencilZPass=nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0;}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t;}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const n=t[e];if(void 0===n){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);}}toJSON(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i);}return e}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),void 0!==this.sheen&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearcoat&&(n.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(n.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(n.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),void 0!==this.anisotropy&&(n.anisotropy=this.anisotropy),void 0!==this.anisotropyRotation&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(n.combine=this.combine)),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(n.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(n.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(n.size=this.size),null!==this.shadowSide&&(n.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(n.blending=this.blending),this.side!==u&&(n.side=this.side),!0===this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=!0),this.blendSrc!==P&&(n.blendSrc=this.blendSrc),this.blendDst!==L&&(n.blendDst=this.blendDst),this.blendEquation!==M&&(n.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(n.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(n.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(n.blendAlpha=this.blendAlpha),3!==this.depthFunc&&(n.depthFunc=this.depthFunc),!1===this.depthTest&&(n.depthTest=this.depthTest),!1===this.depthWrite&&(n.depthWrite=this.depthWrite),!1===this.colorWrite&&(n.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(n.stencilWriteMask=this.stencilWriteMask),519!==this.stencilFunc&&(n.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(n.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nn&&(n.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(n.stencilWrite=this.stencilWrite),void 0!==this.rotation&&0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaHash&&(n.alphaHash=!0),!0===this.alphaToCoverage&&(n.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=!0),!0===this.forceSinglePass&&(n.forceSinglePass=!0),!0===this.wireframe&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=!0),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),!1===this.fog&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){const e=i(t.textures),r=i(t.images);e.length>0&&(n.textures=e),r.length>0&&(n.images=r);}return n}clone(){return (new this.constructor).copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(null!==e){const t=e.length;n=new Array(t);for(let i=0;i!==t;++i)n[i]=e[i].clone();}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"});}set needsUpdate(t){!0===t&&this.version++;}}class es extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Z,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ns=is();function is(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(i[t]=0,i[256|t]=32768,r[t]=24,r[256|t]=24):e<-14?(i[t]=1024>>-e-14,i[256|t]=1024>>-e-14|32768,r[t]=-e-1,r[256|t]=-e-1):e<=15?(i[t]=e+15<<10,i[256|t]=e+15<<10|32768,r[t]=13,r[256|t]=13):e<128?(i[t]=31744,i[256|t]=64512,r[t]=24,r[256|t]=24):(i[t]=31744,i[256|t]=64512,r[t]=13,r[256|t]=13);}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,n=0;for(;0==(8388608&e);)e<<=1,n-=8388608;e&=-8388609,n+=947912704,s[t]=e|n;}for(let t=1024;t<2048;++t)s[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)a[t]=t<<23;a[31]=1199570944,a[32]=2147483648;for(let t=33;t<63;++t)a[t]=2147483648+(t-32<<23);a[63]=3347054592;for(let t=1;t<64;++t)32!==t&&(o[t]=1024);return {floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function rs(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=jn(t,-65504,65504),ns.floatView[0]=t;const e=ns.uint32View[0],n=e>>23&511;return ns.baseTable[n]+((8388607&e)>>ns.shiftTable[n])}function ss(t){const e=t>>10;return ns.uint32View[0]=ns.mantissaTable[ns.offsetTable[e]+(1023&t)]+ns.exponentTable[e],ns.floatView[0]}const as={toHalfFloat:rs,fromHalfFloat:ss},os=new Ui,ls=new ti;class cs{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=n,this.usage=wn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=It,this.version=0;}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++;}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e});}clearUpdateRanges(){this.updateRanges.length=0;}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(2===this.itemSize)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(3===this.itemSize)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXYZ(e,os.x,os.y,os.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix4(t),this.setXYZ(e,os.x,os.y,os.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyNormalMatrix(t),this.setXYZ(e,os.x,os.y,os.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.transformDirection(t),this.setXYZ(e,os.x,os.y,os.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return ""!==this.name&&(t.name=this.name),this.usage!==wn&&(t.usage=this.usage),t}}class hs extends cs{constructor(t,e,n){super(new Int8Array(t),e,n);}}class us extends cs{constructor(t,e,n){super(new Uint8Array(t),e,n);}}class ds extends cs{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n);}}class ps extends cs{constructor(t,e,n){super(new Int16Array(t),e,n);}}class ms extends cs{constructor(t,e,n){super(new Uint16Array(t),e,n);}}class fs extends cs{constructor(t,e,n){super(new Int32Array(t),e,n);}}class gs extends cs{constructor(t,e,n){super(new Uint32Array(t),e,n);}}class _s extends cs{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0;}getX(t){let e=ss(this.array[t*this.itemSize]);return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize]=rs(e),this}getY(t){let e=ss(this.array[t*this.itemSize+1]);return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+1]=rs(e),this}getZ(t){let e=ss(this.array[t*this.itemSize+2]);return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+2]=rs(e),this}getW(t){let e=ss(this.array[t*this.itemSize+3]);return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+3]=rs(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array)),this.array[t+0]=rs(e),this.array[t+1]=rs(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array)),this.array[t+0]=rs(e),this.array[t+1]=rs(n),this.array[t+2]=rs(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.array[t+0]=rs(e),this.array[t+1]=rs(n),this.array[t+2]=rs(i),this.array[t+3]=rs(r),this}}class vs extends cs{constructor(t,e,n){super(new Float32Array(t),e,n);}}class xs extends cs{constructor(t,e,n){super(new Float64Array(t),e,n);}}let ys=0;const Ms=new cr,Ss=new Nr,bs=new Ui,Es=new Oi,Ts=new Oi,ws=new Ui;class As extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ys++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={};}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ii(t)?gs:ms)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n});}clearGroups(){this.groups=[];}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e;}applyMatrix4(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(void 0!==n){const e=(new ei).getNormalMatrix(t);n.applyNormalMatrix(e),n.needsUpdate=!0;}const i=this.attributes.tangent;return void 0!==i&&(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ms.makeRotationFromQuaternion(t),this.applyMatrix4(Ms),this}rotateX(t){return Ms.makeRotationX(t),this.applyMatrix4(Ms),this}rotateY(t){return Ms.makeRotationY(t),this.applyMatrix4(Ms),this}rotateZ(t){return Ms.makeRotationZ(t),this.applyMatrix4(Ms),this}translate(t,e,n){return Ms.makeTranslation(t,e,n),this.applyMatrix4(Ms),this}scale(t,e,n){return Ms.makeScale(t,e,n),this.applyMatrix4(Ms),this}lookAt(t){return Ss.lookAt(t),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];e.push(i.x,i.y,i.z||0);}return this.setAttribute("position",new vs(e,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new Ui(-1/0,-1/0,-1/0),new Ui(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Es.setFromBufferAttribute(n),this.morphTargetsRelative?(ws.addVectors(this.boundingBox.min,Es.min),this.boundingBox.expandByPoint(ws),ws.addVectors(this.boundingBox.max,Es.max),this.boundingBox.expandByPoint(ws)):(this.boundingBox.expandByPoint(Es.min),this.boundingBox.expandByPoint(Es.max));}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new Ui,1/0);if(t){const n=this.boundingSphere.center;if(Es.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Ts.setFromBufferAttribute(n),this.morphTargetsRelative?(ws.addVectors(Es.min,Ts.min),Es.expandByPoint(ws),ws.addVectors(Es.max,Ts.max),Es.expandByPoint(ws)):(Es.expandByPoint(Ts.min),Es.expandByPoint(Ts.max));}Es.getCenter(n);let i=0;for(let e=0,r=t.count;e<r;e++)ws.fromBufferAttribute(t,e),i=Math.max(i,n.distanceToSquared(ws));if(e)for(let r=0,s=e.length;r<s;r++){const s=e[r],a=this.morphTargetsRelative;for(let e=0,r=s.count;e<r;e++)ws.fromBufferAttribute(s,e),a&&(bs.fromBufferAttribute(t,e),ws.add(bs)),i=Math.max(i,n.distanceToSquared(ws));}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}}computeTangents(){const t=this.index,e=this.attributes;if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new cs(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let t=0;t<a;t++)l[t]=new Ui,c[t]=new Ui;const h=new Ui,u=new Ui,d=new Ui,p=new ti,m=new ti,f=new ti,g=new Ui,_=new Ui;function v(t,e,n){h.fromArray(i,3*t),u.fromArray(i,3*e),d.fromArray(i,3*n),p.fromArray(s,2*t),m.fromArray(s,2*e),f.fromArray(s,2*n),u.sub(h),d.sub(h),m.sub(p),f.sub(p);const r=1/(m.x*f.y-f.x*m.y);isFinite(r)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(r),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(r),l[t].add(g),l[e].add(g),l[n].add(g),c[t].add(_),c[e].add(_),c[n].add(_));}let x=this.groups;0===x.length&&(x=[{start:0,count:n.length}]);for(let t=0,e=x.length;t<e;++t){const e=x[t],i=e.start;for(let t=i,r=i+e.count;t<r;t+=3)v(n[t+0],n[t+1],n[t+2]);}const y=new Ui,M=new Ui,S=new Ui,b=new Ui;function E(t){S.fromArray(r,3*t),b.copy(S);const e=l[t];y.copy(e),y.sub(S.multiplyScalar(S.dot(e))).normalize(),M.crossVectors(b,e);const n=M.dot(c[t])<0?-1:1;o[4*t]=y.x,o[4*t+1]=y.y,o[4*t+2]=y.z,o[4*t+3]=n;}for(let t=0,e=x.length;t<e;++t){const e=x[t],i=e.start;for(let t=i,r=i+e.count;t<r;t+=3)E(n[t+0]),E(n[t+1]),E(n[t+2]);}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(void 0!==e){let n=this.getAttribute("normal");if(void 0===n)n=new cs(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let t=0,e=n.count;t<e;t++)n.setXYZ(t,0,0,0);const i=new Ui,r=new Ui,s=new Ui,a=new Ui,o=new Ui,l=new Ui,c=new Ui,h=new Ui;if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(n,d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(c),o.add(c),l.add(c),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z);}else for(let t=0,a=e.count;t<a;t+=3)i.fromBufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(t+0,c.x,c.y,c.z),n.setXYZ(t+1,c.x,c.y,c.z),n.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0;}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ws.fromBufferAttribute(t,e),ws.normalize(),t.setXYZ(e,ws.x,ws.y,ws.z);}toNonIndexed(){function t(t,e){const n=t.array,i=t.itemSize,r=t.normalized,s=new n.constructor(e.length*i);let a=0,o=0;for(let r=0,l=e.length;r<l;r++){a=t.isInterleavedBufferAttribute?e[r]*t.data.stride+t.offset:e[r]*i;for(let t=0;t<i;t++)s[o++]=n[a++];}return new cs(s,i,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new As,n=this.index.array,i=this.attributes;for(const r in i){const s=t(i[r],n);e.setAttribute(r,s);}const r=this.morphAttributes;for(const i in r){const s=[],a=r[i];for(let e=0,i=a.length;e<i;e++){const i=t(a[e],n);s.push(i);}e.morphAttributes[i]=s;}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let t=0,n=s.length;t<n;t++){const n=s[t];e.addGroup(n.start,n.count,n.materialIndex);}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const e in n){const i=n[e];t.data.attributes[e]=i.toJSON(t.data);}const i={};let r=!1;for(const e in this.morphAttributes){const n=this.morphAttributes[e],s=[];for(let e=0,i=n.length;e<i;e++){const i=n[e];s.push(i.toJSON(t.data));}s.length>0&&(i[e]=s,r=!0);}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return null!==a&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return (new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;null!==n&&this.setIndex(n.clone(e));const i=t.attributes;for(const t in i){const n=i[t];this.setAttribute(t,n.clone(e));}const r=t.morphAttributes;for(const t in r){const n=[],i=r[t];for(let t=0,r=i.length;t<r;t++)n.push(i[t].clone(e));this.morphAttributes[t]=n;}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let t=0,e=s.length;t<e;t++){const e=s[t];this.addGroup(e.start,e.count,e.materialIndex);}const a=t.boundingBox;null!==a&&(this.boundingBox=a.clone());const o=t.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"});}}const Rs=new cr,Cs=new lr,Ps=new tr,Ls=new Ui,Is=new Ui,Us=new Ui,Ns=new Ui,Ds=new Ui,Os=new Ui,Fs=new ti,Bs=new ti,zs=new ti,Hs=new Ui,Vs=new Ui,ks=new Ui,Gs=new Ui,Ws=new Ui;class Xs extends Nr{constructor(t=new As,e=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets();}copy(t,e){return super.copy(t,e),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t;}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Os.set(0,0,0);for(let n=0,i=r.length;n<i;n++){const i=a[n],o=r[n];0!==i&&(Ds.fromBufferAttribute(o,t),s?Os.addScaledVector(Ds,i):Os.addScaledVector(Ds.sub(e),i));}e.add(Os);}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(void 0!==i){if(null===n.boundingSphere&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Cs.copy(t.ray).recast(t.near),!1===Ps.containsPoint(Cs.origin)){if(null===Cs.intersectSphere(Ps,Ls))return;if(Cs.origin.distanceToSquared(Ls)>(t.far-t.near)**2)return}Rs.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(Rs),null!==n.boundingBox&&!1===Cs.intersectsBox(n.boundingBox)||this._computeIntersections(t,e,Cs);}}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(null!==a)if(Array.isArray(s))for(let r=0,o=u.length;r<o;r++){const o=u[r],p=s[o.materialIndex];for(let r=Math.max(o.start,d.start),s=Math.min(a.count,Math.min(o.start+o.count,d.start+d.count));r<s;r+=3){i=js(this,p,t,n,l,c,h,a.getX(r),a.getX(r+1),a.getX(r+2)),i&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=o.materialIndex,e.push(i));}}else {for(let r=Math.max(0,d.start),o=Math.min(a.count,d.start+d.count);r<o;r+=3){i=js(this,s,t,n,l,c,h,a.getX(r),a.getX(r+1),a.getX(r+2)),i&&(i.faceIndex=Math.floor(r/3),e.push(i));}}else if(void 0!==o)if(Array.isArray(s))for(let r=0,a=u.length;r<a;r++){const a=u[r],p=s[a.materialIndex];for(let r=Math.max(a.start,d.start),s=Math.min(o.count,Math.min(a.start+a.count,d.start+d.count));r<s;r+=3){i=js(this,p,t,n,l,c,h,r,r+1,r+2),i&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=a.materialIndex,e.push(i));}}else {for(let r=Math.max(0,d.start),a=Math.min(o.count,d.start+d.count);r<a;r+=3){i=js(this,s,t,n,l,c,h,r,r+1,r+2),i&&(i.faceIndex=Math.floor(r/3),e.push(i));}}}}function js(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Is),t.getVertexPosition(l,Us),t.getVertexPosition(c,Ns);const h=function(t,e,n,i,r,s,a,o){let l;if(l=e.side===d?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,e.side===u,o),null===l)return null;Ws.copy(o),Ws.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ws);return c<n.near||c>n.far?null:{distance:c,point:Ws.clone(),object:t}}(t,e,n,i,Is,Us,Ns,Gs);if(h){r&&(Fs.fromBufferAttribute(r,o),Bs.fromBufferAttribute(r,l),zs.fromBufferAttribute(r,c),h.uv=jr.getInterpolation(Gs,Is,Us,Ns,Fs,Bs,zs,new ti)),s&&(Fs.fromBufferAttribute(s,o),Bs.fromBufferAttribute(s,l),zs.fromBufferAttribute(s,c),h.uv1=jr.getInterpolation(Gs,Is,Us,Ns,Fs,Bs,zs,new ti),h.uv2=h.uv1),a&&(Hs.fromBufferAttribute(a,o),Vs.fromBufferAttribute(a,l),ks.fromBufferAttribute(a,c),h.normal=jr.getInterpolation(Gs,Is,Us,Ns,Hs,Vs,ks,new Ui),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const t={a:o,b:l,c:c,normal:new Ui,materialIndex:0};jr.getNormal(Is,Us,Ns,t.normal),h.face=t;}return h}class qs extends As{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],h=[];let u=0,d=0;function p(t,e,n,i,r,s,p,m,f,g,_){const v=s/f,x=p/g,y=s/2,M=p/2,S=m/2,b=f+1,E=g+1;let T=0,w=0;const A=new Ui;for(let s=0;s<E;s++){const a=s*x-M;for(let o=0;o<b;o++){const u=o*v-y;A[t]=u*i,A[e]=a*r,A[n]=S,l.push(A.x,A.y,A.z),A[t]=0,A[e]=0,A[n]=m>0?1:-1,c.push(A.x,A.y,A.z),h.push(o/f),h.push(1-s/g),T+=1;}}for(let t=0;t<g;t++)for(let e=0;e<f;e++){const n=u+e+b*t,i=u+e+b*(t+1),r=u+(e+1)+b*(t+1),s=u+(e+1)+b*t;o.push(n,i,s),o.push(i,r,s),w+=6;}a.addGroup(d,w,_),d+=w,u+=T;}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new vs(l,3)),this.setAttribute("normal",new vs(c,3)),this.setAttribute("uv",new vs(h,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r;}}return e}function Zs(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const t in i)e[t]=i[t];}return e}function Js(t){return null===t.getRenderTarget()?t.outputColorSpace:mi.workingColorSpace}const Ks={clone:Ys,merge:Zs};class $s extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&this.setValues(t);}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=function(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const i=this.uniforms[n].value;i&&i.isTexture?e.uniforms[n]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[n]={type:"m4",value:i.toArray()}:e.uniforms[n]={value:i};}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const t in this.extensions)!0===this.extensions[t]&&(n[t]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qs extends Nr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cr,this.projectionMatrix=new cr,this.projectionMatrixInverse=new cr,this.coordinateSystem=Bn;}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert();}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert();}clone(){return (new this.constructor).copy(this)}}class ta extends Qs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix();}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*Wn*Math.atan(e),this.updateProjectionMatrix();}getFocalLength(){const t=Math.tan(.5*Gn*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Wn*Math.atan(Math.tan(.5*Gn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix();}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix();}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*Gn*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(null!==this.view&&this.view.enabled){const t=s.fullWidth,a=s.fullHeight;r+=s.offsetX*i/t,e-=s.offsetY*n/a,i*=s.width/t,n*=s.height/a;}const a=this.filmOffset;0!==a&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ea=-90;class na extends Nr{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ta(ea,1,t,e);i.layers=this.layers,this.add(i);const r=new ta(ea,1,t,e);r.layers=this.layers,this.add(r);const s=new ta(ea,1,t,e);s.layers=this.layers,this.add(s);const a=new ta(ea,1,t,e);a.layers=this.layers,this.add(a);const o=new ta(ea,1,t,e);o.layers=this.layers,this.add(o);const l=new ta(ea,1,t,e);l.layers=this.layers,this.add(l);}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const t of e)this.remove(t);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else {if(t!==zn)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);}for(const t of e)this.add(t),t.updateMatrixWorld();}update(t,e){null===this.parent&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(h,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0;}}class ia extends bi{constructor(t,e,n,i,r,s,a,o,l,c){super(t=void 0!==t?t:[],e=void 0!==e?e:lt,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1;}get images(){return this.image}set images(t){this.image=t;}}class ra extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];void 0!==e.encoding&&(ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ve?qe:je),this.texture=new ia(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:Mt;}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:"\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"},i=new qs(5,5,5),r=new $s({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:d,blending:0});r.uniforms.tEquirect.value=e;const s=new Xs(i,r),a=e.minFilter;e.minFilter===Et&&(e.minFilter=Mt);return new na(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(r);}}const sa=new Ui,aa=new Ui,oa=new ei;class la{constructor(t=new Ui(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e;}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sa.subVectors(n,e).cross(aa.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),i=this.normal.dot(n);if(0===i)return 0===this.distanceToPoint(t.start)?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oa.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return (new this.constructor).copy(this)}}const ca=new tr,ha=new Ui;class ua{constructor(t=new la,e=new la,n=new la,i=new la,r=new la,s=new la){this.planes=[t,e,n,i,r,s];}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],p=i[9],m=i[10],f=i[11],g=i[12],_=i[13],v=i[14],x=i[15];if(n[0].setComponents(o-r,u-l,f-d,x-g).normalize(),n[1].setComponents(o+r,u+l,f+d,x+g).normalize(),n[2].setComponents(o+s,u+c,f+p,x+_).normalize(),n[3].setComponents(o-s,u-c,f-p,x-_).normalize(),n[4].setComponents(o-a,u-h,f-m,x-v).normalize(),e===Bn)n[5].setComponents(o+a,u+h,f+m,x+v).normalize();else {if(e!==zn)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);n[5].setComponents(a,h,m,v).normalize();}return this}intersectsObject(t){if(void 0!==t.boundingSphere)null===t.boundingSphere&&t.computeBoundingSphere(),ca.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else {const e=t.geometry;null===e.boundingSphere&&e.computeBoundingSphere(),ca.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);}return this.intersectsSphere(ca)}intersectsSprite(t){return ca.center.set(0,0,0),ca.radius=.7071067811865476,ca.applyMatrix4(t.matrixWorld),this.intersectsSphere(ca)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let t=0;t<6;t++){if(e[t].distanceToPoint(n)<i)return !1}return !0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ha.x=i.normal.x>0?t.max.x:t.min.x,ha.y=i.normal.y>0?t.max.y:t.min.y,ha.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ha)<0)return !1}return !0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return !1;return !0}clone(){return (new this.constructor).copy(this)}}function da(){let t=null,e=!1,n=null,i=null;function r(e,s){n(e,s),i=t.requestAnimationFrame(r);}return {start:function(){!0!==e&&null!==n&&(i=t.requestAnimationFrame(r),e=!0);},stop:function(){t.cancelAnimationFrame(i),e=!1;},setAnimationLoop:function(t){n=t;},setContext:function(e){t=e;}}}function pa(t,e){const n=e.isWebGL2,i=new WeakMap;return {get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const n=i.get(e);n&&(t.deleteBuffer(n.buffer),i.delete(e));},update:function(e,r){if(e.isGLBufferAttribute){const t=i.get(e);return void((!t||t.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const s=i.get(e);if(void 0===s)i.set(e,function(e,i){const r=e.array,s=e.usage,a=r.byteLength,o=t.createBuffer();let l;if(t.bindBuffer(i,o),t.bufferData(i,r,s),e.onUploadCallback(),r instanceof Float32Array)l=t.FLOAT;else if(r instanceof Uint16Array)if(e.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");l=t.HALF_FLOAT;}else l=t.UNSIGNED_SHORT;else if(r instanceof Int16Array)l=t.SHORT;else if(r instanceof Uint32Array)l=t.UNSIGNED_INT;else if(r instanceof Int32Array)l=t.INT;else if(r instanceof Int8Array)l=t.BYTE;else if(r instanceof Uint8Array)l=t.UNSIGNED_BYTE;else {if(!(r instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r);l=t.UNSIGNED_BYTE;}return {buffer:o,type:l,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version,size:a}}(e,r));else if(s.version<e.version){if(s.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");!function(e,i,r){const s=i.array,a=i._updateRange,o=i.updateRanges;if(t.bindBuffer(r,e),-1===a.count&&0===o.length&&t.bufferSubData(r,0,s),0!==o.length){for(let e=0,i=o.length;e<i;e++){const i=o[e];n?t.bufferSubData(r,i.start*s.BYTES_PER_ELEMENT,s,i.start,i.count):t.bufferSubData(r,i.start*s.BYTES_PER_ELEMENT,s.subarray(i.start,i.start+i.count));}i.clearUpdateRanges();}-1!==a.count&&(n?t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1),i.onUploadCallback();}(s.buffer,e,r),s.version=e.version;}}}}class ma extends As{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,u=e/o,d=[],p=[],m=[],f=[];for(let t=0;t<c;t++){const e=t*u-s;for(let n=0;n<l;n++){const i=n*h-r;p.push(i,-e,0),m.push(0,0,1),f.push(n/a),f.push(1-t/o);}}for(let t=0;t<o;t++)for(let e=0;e<a;e++){const n=e+l*t,i=e+l*(t+1),r=e+1+l*(t+1),s=e+1+l*t;d.push(n,i,s),d.push(i,r,s);}this.setIndex(d),this.setAttribute("position",new vs(p,3)),this.setAttribute("normal",new vs(m,3)),this.setAttribute("uv",new vs(f,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.width,t.height,t.widthSegments,t.heightSegments)}}const fa={alphahash_fragment:"#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",alphahash_pars_fragment:"#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",alphatest_pars_fragment:"#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",batching_pars_vertex:"#ifdef USE_BATCHING\n\tattribute float batchId;\n\tuniform highp sampler2D batchingTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",batching_vertex:"#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif",begin_vertex:"vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",iridescence_fragment:"#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:"\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_fragment:"LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",lights_lambert_pars_fragment:"varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphcolor_vertex:"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",normal_fragment_begin:"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",normal_fragment_maps:"#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",normal_pars_fragment:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_pars_vertex:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_vertex:"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",iridescence_pars_fragment:"#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",opaque_fragment:"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor *= toneMappingExposure;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\treturn color;\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmission_fragment:"#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",transmission_pars_fragment:"#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",uv_pars_fragment:"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",uv_pars_vertex:"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",uv_vertex:"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",background_frag:"uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",backgroundCube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",backgroundCube_frag:"#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",depth_vert:"#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",meshbasic_vert:"#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshnormal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",meshnormal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",shadow_vert:"#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}"},ga={common:{diffuse:{value:new Kr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ei},alphaMap:{value:null},alphaMapTransform:{value:new ei},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ei}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ei}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ei}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ei},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ei},normalScale:{value:new ti(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ei},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ei}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ei}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ei}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ei},alphaTest:{value:0},uvTransform:{value:new ei}},sprite:{diffuse:{value:new Kr(16777215)},opacity:{value:1},center:{value:new ti(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ei},alphaMap:{value:null},alphaMapTransform:{value:new ei},alphaTest:{value:0}}},_a={basic:{uniforms:Zs([ga.common,ga.specularmap,ga.envmap,ga.aomap,ga.lightmap,ga.fog]),vertexShader:fa.meshbasic_vert,fragmentShader:fa.meshbasic_frag},lambert:{uniforms:Zs([ga.common,ga.specularmap,ga.envmap,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.fog,ga.lights,{emissive:{value:new Kr(0)}}]),vertexShader:fa.meshlambert_vert,fragmentShader:fa.meshlambert_frag},phong:{uniforms:Zs([ga.common,ga.specularmap,ga.envmap,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.fog,ga.lights,{emissive:{value:new Kr(0)},specular:{value:new Kr(1118481)},shininess:{value:30}}]),vertexShader:fa.meshphong_vert,fragmentShader:fa.meshphong_frag},standard:{uniforms:Zs([ga.common,ga.envmap,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.roughnessmap,ga.metalnessmap,ga.fog,ga.lights,{emissive:{value:new Kr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fa.meshphysical_vert,fragmentShader:fa.meshphysical_frag},toon:{uniforms:Zs([ga.common,ga.aomap,ga.lightmap,ga.emissivemap,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.gradientmap,ga.fog,ga.lights,{emissive:{value:new Kr(0)}}]),vertexShader:fa.meshtoon_vert,fragmentShader:fa.meshtoon_frag},matcap:{uniforms:Zs([ga.common,ga.bumpmap,ga.normalmap,ga.displacementmap,ga.fog,{matcap:{value:null}}]),vertexShader:fa.meshmatcap_vert,fragmentShader:fa.meshmatcap_frag},points:{uniforms:Zs([ga.points,ga.fog]),vertexShader:fa.points_vert,fragmentShader:fa.points_frag},dashed:{uniforms:Zs([ga.common,ga.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fa.linedashed_vert,fragmentShader:fa.linedashed_frag},depth:{uniforms:Zs([ga.common,ga.displacementmap]),vertexShader:fa.depth_vert,fragmentShader:fa.depth_frag},normal:{uniforms:Zs([ga.common,ga.bumpmap,ga.normalmap,ga.displacementmap,{opacity:{value:1}}]),vertexShader:fa.meshnormal_vert,fragmentShader:fa.meshnormal_frag},sprite:{uniforms:Zs([ga.sprite,ga.fog]),vertexShader:fa.sprite_vert,fragmentShader:fa.sprite_frag},background:{uniforms:{uvTransform:{value:new ei},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fa.background_vert,fragmentShader:fa.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:fa.backgroundCube_vert,fragmentShader:fa.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fa.cube_vert,fragmentShader:fa.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fa.equirect_vert,fragmentShader:fa.equirect_frag},distanceRGBA:{uniforms:Zs([ga.common,ga.displacementmap,{referencePosition:{value:new Ui},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fa.distanceRGBA_vert,fragmentShader:fa.distanceRGBA_frag},shadow:{uniforms:Zs([ga.lights,ga.fog,{color:{value:new Kr(0)},opacity:{value:1}}]),vertexShader:fa.shadow_vert,fragmentShader:fa.shadow_frag}};_a.physical={uniforms:Zs([_a.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ei},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ei},clearcoatNormalScale:{value:new ti(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ei},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ei},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ei},sheen:{value:0},sheenColor:{value:new Kr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ei},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ei},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ei},transmissionSamplerSize:{value:new ti},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ei},attenuationDistance:{value:0},attenuationColor:{value:new Kr(0)},specularColor:{value:new Kr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ei},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ei},anisotropyVector:{value:new ti},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ei}}]),vertexShader:fa.meshphysical_vert,fragmentShader:fa.meshphysical_frag};const va={r:0,b:0,g:0};function xa(t,e,n,i,r,s,a){const o=new Kr(0);let l,c,h=!0===s?0:1,p=null,m=0,f=null;function g(e,n){e.getRGB(va,Js(t)),i.buffers.color.setClear(va.r,va.g,va.b,n,a);}return {getClearColor:function(){return o},setClearColor:function(t,e=1){o.set(t),h=e,g(o,h);},getClearAlpha:function(){return h},setClearAlpha:function(t){h=t,g(o,h);},render:function(s,_){let v=!1,x=!0===_.isScene?_.background:null;if(x&&x.isTexture){x=(_.backgroundBlurriness>0?n:e).get(x);}null===x?g(o,h):x&&x.isColor&&(g(x,1),v=!0);const y=t.xr.getEnvironmentBlendMode();"additive"===y?i.buffers.color.setClear(0,0,0,1,a):"alpha-blend"===y&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===dt)?(void 0===c&&(c=new Xs(new qs(1,1,1),new $s({name:"BackgroundCubeMaterial",uniforms:Ys(_a.backgroundCube.uniforms),vertexShader:_a.backgroundCube.vertexShader,fragmentShader:_a.backgroundCube.fragmentShader,side:d,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld);},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&!1===x.isRenderTargetTexture?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=mi.getTransfer(x.colorSpace)!==$e,p===x&&m===x.version&&f===t.toneMapping||(c.material.needsUpdate=!0,p=x,m=x.version,f=t.toneMapping),c.layers.enableAll(),s.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(void 0===l&&(l=new Xs(new ma(2,2),new $s({name:"BackgroundMaterial",uniforms:Ys(_a.background.uniforms),vertexShader:_a.background.vertexShader,fragmentShader:_a.background.fragmentShader,side:u,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=mi.getTransfer(x.colorSpace)!==$e,!0===x.matrixAutoUpdate&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),p===x&&m===x.version&&f===t.toneMapping||(l.material.needsUpdate=!0,p=x,m=x.version,f=t.toneMapping),l.layers.enableAll(),s.unshift(l,l.geometry,l.material,0,0,null));}}}function ya(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||null!==s,o={},l=p(null);let c=l,h=!1;function u(e){return i.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function d(e){return i.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function p(t){const e=[],n=[],i=[];for(let t=0;t<r;t++)e[t]=0,n[t]=0,i[t]=0;return {geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,attributeDivisors:i,object:t,attributes:{},index:null}}function m(){const t=c.newAttributes;for(let e=0,n=t.length;e<n;e++)t[e]=0;}function f(t){g(t,0);}function g(n,r){const s=c.newAttributes,a=c.enabledAttributes,o=c.attributeDivisors;if(s[n]=1,0===a[n]&&(t.enableVertexAttribArray(n),a[n]=1),o[n]!==r){(i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,r),o[n]=r;}}function _(){const e=c.newAttributes,n=c.enabledAttributes;for(let i=0,r=n.length;i<r;i++)n[i]!==e[i]&&(t.disableVertexAttribArray(i),n[i]=0);}function v(e,n,i,r,s,a,o){!0===o?t.vertexAttribIPointer(e,n,i,s,a):t.vertexAttribPointer(e,n,i,r,s,a);}function x(){y(),h=!0,c!==l&&(c=l,u(c.object));}function y(){l.geometry=null,l.program=null,l.wireframe=!1;}return {setup:function(r,l,d,x,y){let M=!1;if(a){const e=function(e,n,r){const a=!0===r.wireframe;let l=o[e.id];void 0===l&&(l={},o[e.id]=l);let c=l[n.id];void 0===c&&(c={},l[n.id]=c);let h=c[a];void 0===h&&(h=p(i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),c[a]=h);return h}(x,d,l);c!==e&&(c=e,u(c.object)),M=function(t,e,n,i){const r=c.attributes,s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){const n=r[e];let i=s[e];if(void 0===i&&("instanceMatrix"===e&&t.instanceMatrix&&(i=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(i=t.instanceColor)),void 0===n)return !0;if(n.attribute!==i)return !0;if(i&&n.data!==i.data)return !0;a++;}}return c.attributesNum!==a||c.index!==i}(r,x,d,y),M&&function(t,e,n,i){const r={},s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){let n=s[e];void 0===n&&("instanceMatrix"===e&&t.instanceMatrix&&(n=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(n=t.instanceColor));const i={};i.attribute=n,n&&n.data&&(i.data=n.data),r[e]=i,a++;}}c.attributes=r,c.attributesNum=a,c.index=i;}(r,x,d,y);}else {const t=!0===l.wireframe;c.geometry===x.id&&c.program===d.id&&c.wireframe===t||(c.geometry=x.id,c.program=d.id,c.wireframe=t,M=!0);}null!==y&&n.update(y,t.ELEMENT_ARRAY_BUFFER),(M||h)&&(h=!1,function(r,s,a,o){if(!1===i.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return;m();const l=o.attributes,c=a.getAttributes(),h=s.defaultAttributeValues;for(const e in c){const s=c[e];if(s.location>=0){let a=l[e];if(void 0===a&&("instanceMatrix"===e&&r.instanceMatrix&&(a=r.instanceMatrix),"instanceColor"===e&&r.instanceColor&&(a=r.instanceColor)),void 0!==a){const e=a.normalized,l=a.itemSize,c=n.get(a);if(void 0===c)continue;const h=c.buffer,u=c.type,d=c.bytesPerElement,p=!0===i.isWebGL2&&(u===t.INT||u===t.UNSIGNED_INT||a.gpuType===Pt);if(a.isInterleavedBufferAttribute){const n=a.data,i=n.stride,c=a.offset;if(n.isInstancedInterleavedBuffer){for(let t=0;t<s.locationSize;t++)g(s.location+t,n.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=n.meshPerAttribute*n.count);}else for(let t=0;t<s.locationSize;t++)f(s.location+t);t.bindBuffer(t.ARRAY_BUFFER,h);for(let t=0;t<s.locationSize;t++)v(s.location+t,l/s.locationSize,u,e,i*d,(c+l/s.locationSize*t)*d,p);}else {if(a.isInstancedBufferAttribute){for(let t=0;t<s.locationSize;t++)g(s.location+t,a.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=a.meshPerAttribute*a.count);}else for(let t=0;t<s.locationSize;t++)f(s.location+t);t.bindBuffer(t.ARRAY_BUFFER,h);for(let t=0;t<s.locationSize;t++)v(s.location+t,l/s.locationSize,u,e,l*d,l/s.locationSize*t*d,p);}}else if(void 0!==h){const n=h[e];if(void 0!==n)switch(n.length){case 2:t.vertexAttrib2fv(s.location,n);break;case 3:t.vertexAttrib3fv(s.location,n);break;case 4:t.vertexAttrib4fv(s.location,n);break;default:t.vertexAttrib1fv(s.location,n);}}}}_();}(r,l,d,x),null!==y&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(y).buffer));},reset:x,resetDefaultState:y,dispose:function(){x();for(const t in o){const e=o[t];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t];}delete o[t];}},releaseStatesOfGeometry:function(t){if(void 0===o[t.id])return;const e=o[t.id];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t];}delete o[t.id];},releaseStatesOfProgram:function(t){for(const e in o){const n=o[e];if(void 0===n[t.id])continue;const i=n[t.id];for(const t in i)d(i[t].object),delete i[t];delete n[t.id];}},initAttributes:m,enableAttribute:f,disableUnusedAttributes:_}}function Ma(t,e,n,i){const r=i.isWebGL2;let s;this.setMode=function(t){s=t;},this.render=function(e,i){t.drawArrays(s,e,i),n.update(i,s,1);},this.renderInstances=function(i,a,o){if(0===o)return;let l,c;if(r)l=t,c="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[c](s,i,a,o),n.update(a,s,o);},this.renderMultiDraw=function(t,i,r){if(0===r)return;const a=e.get("WEBGL_multi_draw");if(null===a)for(let e=0;e<r;e++)this.render(t[e],i[e]);else {a.multiDrawArraysWEBGL(s,t,0,i,0,r);let e=0;for(let t=0;t<r;t++)e+=i[t];n.update(e,s,1);}};}function Sa(t,e,n){let i;function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return "highp";e="mediump";}return "mediump"===e&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s="undefined"!=typeof WebGL2RenderingContext&&"WebGL2RenderingContext"===t.constructor.name;let a=void 0!==n.precision?n.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=!0===n.logarithmicDepthBuffer,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,x=s||e.has("OES_texture_float");return {isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==i)return i;if(!0===e.has("EXT_texture_filter_anisotropic")){const n=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:v&&x,maxSamples:s?t.getParameter(t.MAX_SAMPLES):0}}function ba(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new la,o=new ei,l={value:null,needsUpdate:!1};function c(t,n,i,r){const s=null!==t?t.length:0;let c=null;if(0!==s){if(c=l.value,!0!==r||null===c){const e=i+4*s,r=n.matrixWorldInverse;o.getNormalMatrix(r),(null===c||c.length<e)&&(c=new Float32Array(e));for(let e=0,n=i;e!==s;++e,n+=4)a.copy(t[e]).applyMatrix4(r,o),a.normal.toArray(c,n),c[n+3]=a.constant;}l.value=c,l.needsUpdate=!0;}return e.numPlanes=s,e.numIntersection=0,c}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e){const n=0!==t.length||e||0!==i||r;return r=e,i=t.length,n},this.beginShadows=function(){s=!0,c(null);},this.endShadows=function(){s=!1;},this.setGlobalState=function(t,e){n=c(t,e,0);},this.setState=function(a,o,h){const u=a.clippingPlanes,d=a.clipIntersection,p=a.clipShadows,m=t.get(a);if(!r||null===u||0===u.length||s&&!p)s?c(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0);e.numPlanes=i,e.numIntersection=0;}();else {const t=s?0:i,e=4*t;let r=m.clippingState||null;l.value=r,r=c(u,o,e,h);for(let t=0;t!==e;++t)r[t]=n[t];m.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=t;}};}function Ea(t){let e=new WeakMap;function n(t,e){return e===ht?t.mapping=lt:e===ut&&(t.mapping=ct),t}function i(t){const n=t.target;n.removeEventListener("dispose",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose());}return {get:function(r){if(r&&r.isTexture){const s=r.mapping;if(s===ht||s===ut){if(e.has(r)){return n(e.get(r).texture,r.mapping)}{const s=r.image;if(s&&s.height>0){const a=new ra(s.height/2);return a.fromEquirectangularTexture(t,r),e.set(r,a),r.addEventListener("dispose",i),n(a.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap;}}}class Ta extends Qs{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix();}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix();}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix();}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,s=r+t*this.view.width,a-=e*this.view.offsetY,o=a-e*this.view.height;}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}const wa=[.125,.215,.35,.446,.526,.582],Aa=20,Ra=new Ta,Ca=new Kr;let Pa=null,La=0,Ia=0;const Ua=(1+Math.sqrt(5))/2,Na=1/Ua,Da=[new Ui(1,1,1),new Ui(-1,1,1),new Ui(1,1,-1),new Ui(-1,1,-1),new Ui(0,Ua,Na),new Ui(0,Ua,-Na),new Ui(Na,0,Ua),new Ui(-Na,0,Ua),new Ui(Ua,Na,0),new Ui(-Ua,Na,0)];class Oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial);}fromScene(t,e=0,n=.1,i=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial));}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=za(),this._compileMaterial(this._equirectMaterial));}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose();}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax);}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose();}_cleanup(t){this._renderer.setRenderTarget(Pa,La,Ia),t.scissorTest=!1,Ba(t,0,0,t.width,t.height);}_fromTexture(t,e){t.mapping===lt||t.mapping===ct?this._setSize(0===t.image.length?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:Ut,format:Bt,colorSpace:Ye,depthBuffer:!1},i=Fa(t,e,n);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=Fa(t,e,n);const{_lodMax:i}=this;(({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(t){const e=[],n=[],i=[];let r=t;const s=t-4+1+wa.length;for(let a=0;a<s;a++){const s=Math.pow(2,r);n.push(s);let o=1/s;a>t-4?o=wa[a-t+4-1]:0===a&&(o=0),i.push(o);const l=1/(s-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,p=6,m=3,f=2,g=1,_=new Float32Array(m*p*d),v=new Float32Array(f*p*d),x=new Float32Array(g*p*d);for(let t=0;t<d;t++){const e=t%3*2/3-1,n=t>2?0:-1,i=[e,n,0,e+2/3,n,0,e+2/3,n+1,0,e,n,0,e+2/3,n+1,0,e,n+1,0];_.set(i,m*p*t),v.set(u,f*p*t);const r=[t,t,t,t,t,t];x.set(r,g*p*t);}const y=new As;y.setAttribute("position",new cs(_,m)),y.setAttribute("uv",new cs(v,f)),y.setAttribute("faceIndex",new cs(x,g)),e.push(y),r>4&&r--;}return {lodPlanes:e,sizeLods:n,sigmas:i}}(i))),this._blurMaterial=function(t,e,n){const i=new Float32Array(Aa),r=new Ui(0,1,0),s=new $s({name:"SphericalGaussianBlur",defines:{n:Aa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1});return s}(i,t,e);}return i}_compileMaterial(t){const e=new Xs(this._lodPlanes[0],t);this._renderer.compile(e,Ra);}_sceneToCubeUV(t,e,n,i){const r=new ta(90,1,e,n),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,c=o.toneMapping;o.getClearColor(Ca),o.toneMapping=$,o.autoClear=!1;const h=new es({name:"PMREM.Background",side:d,depthWrite:!1,depthTest:!1}),u=new Xs(new qs,h);let p=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,p=!0):(h.color.copy(Ca),p=!0);for(let e=0;e<6;e++){const n=e%3;0===n?(r.up.set(0,s[e],0),r.lookAt(a[e],0,0)):1===n?(r.up.set(0,0,s[e]),r.lookAt(0,a[e],0)):(r.up.set(0,s[e],0),r.lookAt(0,0,a[e]));const l=this._cubeSize;Ba(i,n*l,e>2?l:0,l,l),o.setRenderTarget(i),p&&o.render(u,r),o.render(t,r);}u.geometry.dispose(),u.material.dispose(),o.toneMapping=c,o.autoClear=l,t.background=m;}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===lt||t.mapping===ct;i?(null===this._cubemapMaterial&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===t.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=za());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Xs(this._lodPlanes[0],r);r.uniforms.envMap.value=t;const a=this._cubeSize;Ba(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(s,Ra);}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const n=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),i=Da[(e-1)%Da.length];this._blur(t,e-1,e,n,i);}e.autoClear=n;}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r);}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new Xs(this._lodPlanes[i],l),h=l.uniforms,u=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,p=r/d,m=isFinite(r)?1+Math.floor(3*p):Aa;m>Aa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const f=[];let g=0;for(let t=0;t<Aa;++t){const e=t/p,n=Math.exp(-e*e/2);f.push(n),0===t?g+=n:t<m&&(g+=2*n);}for(let t=0;t<f.length;t++)f[t]=f[t]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value="latitudinal"===s,a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=d,h.mipInt.value=_-n;const v=this._sizeLods[i];Ba(e,3*v*(i>_-4?i-_+4:0),4*(this._cubeSize-v),3*v,2*v),o.setRenderTarget(e),o.render(c,Ra);}}function Fa(t,e,n){const i=new wi(t,e,n);return i.texture.mapping=dt,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r);}function za(){return new $s({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function Ha(){return new $s({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function Va(){return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"}function ka(t){let e=new WeakMap,n=null;function i(t){const n=t.target;n.removeEventListener("dispose",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose());}return {get:function(r){if(r&&r.isTexture){const s=r.mapping,a=s===ht||s===ut,o=s===lt||s===ct;if(a||o){if(r.isRenderTargetTexture&&!0===r.needsPMREMUpdate){r.needsPMREMUpdate=!1;let i=e.get(r);return null===n&&(n=new Oa(t)),i=a?n.fromEquirectangular(r,i):n.fromCubemap(r,i),e.set(r,i),i.texture}if(e.has(r))return e.get(r).texture;{const s=r.image;if(a&&s&&s.height>0||o&&s&&function(t){let e=0;const n=6;for(let i=0;i<n;i++)void 0!==t[i]&&e++;return e===n}(s)){null===n&&(n=new Oa(t));const s=a?n.fromEquirectangular(r):n.fromCubemap(r);return e.set(r,s),r.addEventListener("dispose",i),s.texture}return null}}}return r},dispose:function(){e=new WeakMap,null!==n&&(n.dispose(),n=null);}}}function Ga(t){const e={};function n(n){if(void 0!==e[n])return e[n];let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n);}return e[n]=i,i}return {has:function(t){return null!==n(t)},init:function(t){t.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture");},get:function(t){const e=n(t);return null===e&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function Wa(t,e,n,i){const r={},s=new WeakMap;function a(t){const o=t.target;null!==o.index&&e.remove(o.index);for(const t in o.attributes)e.remove(o.attributes[t]);for(const t in o.morphAttributes){const n=o.morphAttributes[t];for(let t=0,i=n.length;t<i;t++)e.remove(n[t]);}o.removeEventListener("dispose",a),delete r[o.id];const l=s.get(o);l&&(e.remove(l),s.delete(o)),i.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,n.memory.geometries--;}function o(t){const n=[],i=t.index,r=t.attributes.position;let a=0;if(null!==i){const t=i.array;a=i.version;for(let e=0,i=t.length;e<i;e+=3){const i=t[e+0],r=t[e+1],s=t[e+2];n.push(i,r,r,s,s,i);}}else {if(void 0===r)return;{const t=r.array;a=r.version;for(let e=0,i=t.length/3-1;e<i;e+=3){const t=e+0,i=e+1,r=e+2;n.push(t,i,i,r,r,t);}}}const o=new(ii(n)?gs:ms)(n,1);o.version=a;const l=s.get(t);l&&e.remove(l),s.set(t,o);}return {get:function(t,e){return !0===r[e.id]||(e.addEventListener("dispose",a),r[e.id]=!0,n.memory.geometries++),e},update:function(n){const i=n.attributes;for(const n in i)e.update(i[n],t.ARRAY_BUFFER);const r=n.morphAttributes;for(const n in r){const i=r[n];for(let n=0,r=i.length;n<r;n++)e.update(i[n],t.ARRAY_BUFFER);}},getWireframeAttribute:function(t){const e=s.get(t);if(e){const n=t.index;null!==n&&e.version<n.version&&o(t);}else o(t);return s.get(t)}}}function Xa(t,e,n,i){const r=i.isWebGL2;let s,a,o;this.setMode=function(t){s=t;},this.setIndex=function(t){a=t.type,o=t.bytesPerElement;},this.render=function(e,i){t.drawElements(s,i,a,e*o),n.update(i,s,1);},this.renderInstances=function(i,l,c){if(0===c)return;let h,u;if(r)h=t,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===h)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](s,l,a,i*o,c),n.update(l,s,c);},this.renderMultiDraw=function(t,i,r){if(0===r)return;const l=e.get("WEBGL_multi_draw");if(null===l)for(let e=0;e<r;e++)this.render(t[e]/o,i[e]);else {l.multiDrawElementsWEBGL(s,i,0,a,t,0,r);let e=0;for(let t=0;t<r;t++)e+=i[t];n.update(e,s,1);}};}function ja(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return {memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0;},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);}}}}function qa(t,e){return t[0]-e[0]}function Ya(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Za(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ei,o=[];for(let t=0;t<8;t++)o[t]=[t,0];return {update:function(l,c,h){const u=l.morphTargetInfluences;if(!0===e.isWebGL2){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=void 0!==d?d.length:0;let m=s.get(c);if(void 0===m||m.count!==p){void 0!==m&&m.texture.dispose();const _=void 0!==c.morphAttributes.position,v=void 0!==c.morphAttributes.normal,x=void 0!==c.morphAttributes.color,y=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let b=0;!0===_&&(b=1),!0===v&&(b=2),!0===x&&(b=3);let E=c.attributes.position.count*b,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*T*4*p),A=new Ai(w,E,T,p);A.type=It,A.needsUpdate=!0;const R=4*b;for(let P=0;P<p;P++){const L=y[P],I=M[P],U=S[P],N=E*T*4*P;for(let D=0;D<L.count;D++){const O=D*R;!0===_&&(a.fromBufferAttribute(L,D),w[N+O+0]=a.x,w[N+O+1]=a.y,w[N+O+2]=a.z,w[N+O+3]=0),!0===v&&(a.fromBufferAttribute(I,D),w[N+O+4]=a.x,w[N+O+5]=a.y,w[N+O+6]=a.z,w[N+O+7]=0),!0===x&&(a.fromBufferAttribute(U,D),w[N+O+8]=a.x,w[N+O+9]=a.y,w[N+O+10]=a.z,w[N+O+11]=4===U.itemSize?a.w:1);}}function C(){A.dispose(),s.delete(c),c.removeEventListener("dispose",C);}m={count:p,texture:A,size:new ti(E,T)},s.set(c,m),c.addEventListener("dispose",C);}let f=0;for(let F=0;F<u.length;F++)f+=u[F];const g=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",u),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size);}else {const B=void 0===u?0:u.length;let z=i[c.id];if(void 0===z||z.length!==B){z=[];for(let W=0;W<B;W++)z[W]=[W,0];i[c.id]=z;}for(let X=0;X<B;X++){const j=z[X];j[0]=X,j[1]=u[X];}z.sort(Ya);for(let q=0;q<8;q++)q<B&&z[q][1]?(o[q][0]=z[q][0],o[q][1]=z[q][1]):(o[q][0]=Number.MAX_SAFE_INTEGER,o[q][1]=0);o.sort(qa);const H=c.morphAttributes.position,V=c.morphAttributes.normal;let k=0;for(let Y=0;Y<8;Y++){const Z=o[Y],J=Z[0],K=Z[1];J!==Number.MAX_SAFE_INTEGER&&K?(H&&c.getAttribute("morphTarget"+Y)!==H[J]&&c.setAttribute("morphTarget"+Y,H[J]),V&&c.getAttribute("morphNormal"+Y)!==V[J]&&c.setAttribute("morphNormal"+Y,V[J]),r[Y]=K,k+=K):(H&&!0===c.hasAttribute("morphTarget"+Y)&&c.deleteAttribute("morphTarget"+Y),V&&!0===c.hasAttribute("morphNormal"+Y)&&c.deleteAttribute("morphNormal"+Y),r[Y]=0);}const G=c.morphTargetsRelative?1:1-k;h.getUniforms().setValue(t,"morphTargetBaseInfluence",G),h.getUniforms().setValue(t,"morphTargetInfluences",r);}}}}function Ja(t,e,n,i){let r=new WeakMap;function s(t){const e=t.target;e.removeEventListener("dispose",s),n.remove(e.instanceMatrix),null!==e.instanceColor&&n.remove(e.instanceColor);}return {update:function(a){const o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(!1===a.hasEventListener("dispose",s)&&a.addEventListener("dispose",s),r.get(a)!==o&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),null!==a.instanceColor&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){const t=a.skeleton;r.get(t)!==o&&(t.update(),r.set(t,o));}return c},dispose:function(){r=new WeakMap;}}}class Ka extends bi{constructor(t,e,n,i,r,s,a,o,l,c){if((c=void 0!==c?c:Vt)!==Vt&&c!==kt)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&c===Vt&&(n=Lt),void 0===n&&c===kt&&(n=Ot),super(null,i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=void 0!==a?a:gt,this.minFilter=void 0!==o?o:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null;}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return null!==this.compareFunction&&(e.compareFunction=this.compareFunction),e}}const $a=new bi,Qa=new Ka(1,1);Qa.compareFunction=515;const to=new Ai,eo=new Ci,no=new ia,io=[],ro=[],so=new Float32Array(16),ao=new Float32Array(9),oo=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=io[r];if(void 0===s&&(s=new Float32Array(r),io[r]=s),0!==e){i.toArray(s,0);for(let i=1,r=0;i!==e;++i)r+=n,t[i].toArray(s,r);}return s}function co(t,e){if(t.length!==e.length)return !1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return !1;return !0}function ho(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n];}function uo(t,e){let n=ro[e];void 0===n&&(n=new Int32Array(e),ro[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function po(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e);}function mo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else {if(co(n,e))return;t.uniform2fv(this.addr,e),ho(n,e);}}function fo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else {if(co(n,e))return;t.uniform3fv(this.addr,e),ho(n,e);}}function go(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else {if(co(n,e))return;t.uniform4fv(this.addr,e),ho(n,e);}}function _o(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(co(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ho(n,e);}else {if(co(n,i))return;oo.set(i),t.uniformMatrix2fv(this.addr,!1,oo),ho(n,i);}}function vo(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(co(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ho(n,e);}else {if(co(n,i))return;ao.set(i),t.uniformMatrix3fv(this.addr,!1,ao),ho(n,i);}}function xo(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(co(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ho(n,e);}else {if(co(n,i))return;so.set(i),t.uniformMatrix4fv(this.addr,!1,so),ho(n,i);}}function yo(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e);}function Mo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else {if(co(n,e))return;t.uniform2iv(this.addr,e),ho(n,e);}}function So(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else {if(co(n,e))return;t.uniform3iv(this.addr,e),ho(n,e);}}function bo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else {if(co(n,e))return;t.uniform4iv(this.addr,e),ho(n,e);}}function Eo(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e);}function To(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else {if(co(n,e))return;t.uniform2uiv(this.addr,e),ho(n,e);}}function wo(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else {if(co(n,e))return;t.uniform3uiv(this.addr,e),ho(n,e);}}function Ao(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else {if(co(n,e))return;t.uniform4uiv(this.addr,e),ho(n,e);}}function Ro(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Qa:$a;n.setTexture2D(e||s,r);}function Co(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||eo,r);}function Po(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||no,r);}function Lo(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||to,r);}function Io(t,e){t.uniform1fv(this.addr,e);}function Uo(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n);}function No(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n);}function Do(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n);}function Oo(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n);}function Fo(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n);}function Bo(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n);}function zo(t,e){t.uniform1iv(this.addr,e);}function Ho(t,e){t.uniform2iv(this.addr,e);}function Vo(t,e){t.uniform3iv(this.addr,e);}function ko(t,e){t.uniform4iv(this.addr,e);}function Go(t,e){t.uniform1uiv(this.addr,e);}function Wo(t,e){t.uniform2uiv(this.addr,e);}function Xo(t,e){t.uniform3uiv(this.addr,e);}function jo(t,e){t.uniform4uiv(this.addr,e);}function qo(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);co(i,s)||(t.uniform1iv(this.addr,s),ho(i,s));for(let t=0;t!==r;++t)n.setTexture2D(e[t]||$a,s[t]);}function Yo(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);co(i,s)||(t.uniform1iv(this.addr,s),ho(i,s));for(let t=0;t!==r;++t)n.setTexture3D(e[t]||eo,s[t]);}function Zo(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);co(i,s)||(t.uniform1iv(this.addr,s),ho(i,s));for(let t=0;t!==r;++t)n.setTextureCube(e[t]||no,s[t]);}function Jo(t,e,n){const i=this.cache,r=e.length,s=uo(n,r);co(i,s)||(t.uniform1iv(this.addr,s),ho(i,s));for(let t=0;t!==r;++t)n.setTexture2DArray(e[t]||to,s[t]);}class Ko{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(t){switch(t){case 5126:return po;case 35664:return mo;case 35665:return fo;case 35666:return go;case 35674:return _o;case 35675:return vo;case 35676:return xo;case 5124:case 35670:return yo;case 35667:case 35671:return Mo;case 35668:case 35672:return So;case 35669:case 35673:return bo;case 5125:return Eo;case 36294:return To;case 36295:return wo;case 36296:return Ao;case 35678:case 36198:case 36298:case 36306:case 35682:return Ro;case 35679:case 36299:case 36307:return Co;case 35680:case 36300:case 36308:case 36293:return Po;case 36289:case 36303:case 36311:case 36292:return Lo}}(e.type);}}class $o{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(t){switch(t){case 5126:return Io;case 35664:return Uo;case 35665:return No;case 35666:return Do;case 35674:return Oo;case 35675:return Fo;case 35676:return Bo;case 5124:case 35670:return zo;case 35667:case 35671:return Ho;case 35668:case 35672:return Vo;case 35669:case 35673:return ko;case 5125:return Go;case 36294:return Wo;case 36295:return Xo;case 36296:return jo;case 35678:case 36198:case 36298:case 36306:case 35682:return qo;case 35679:case 36299:case 36307:return Yo;case 35680:case 36300:case 36308:case 36293:return Zo;case 36289:case 36303:case 36311:case 36292:return Jo}}(e.type);}}class Qo{constructor(t){this.id=t,this.seq=[],this.map={};}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const s=i[r];s.setValue(t,e[s.id],n);}}}const tl=/(\w+)(\])?(\[|\.)?/g;function el(t,e){t.seq.push(e),t.map[e.id]=e;}function nl(t,e,n){const i=t.name,r=i.length;for(tl.lastIndex=0;;){const s=tl.exec(i),a=tl.lastIndex;let o=s[1];const l="]"===s[2],c=s[3];if(l&&(o|=0),void 0===c||"["===c&&a+2===r){el(n,void 0===c?new Ko(o,t,e):new $o(o,t,e));break}{let t=n.map[o];void 0===t&&(t=new Qo(o),el(n,t)),n=t;}}}class il{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const n=t.getActiveUniform(e,i);nl(n,t.getUniformLocation(e,n.name),this);}}setValue(t,e,n,i){const r=this.map[e];void 0!==r&&r.setValue(t,n,i);}setOptional(t,e,n){const i=e[n];void 0!==i&&this.setValue(t,n,i);}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const s=e[r],a=n[s.id];!1!==a.needsUpdate&&s.setValue(t,a.value,i);}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const r=t[i];r.id in e&&n.push(r);}return n}}function rl(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sl=37297;let al=0;function ol(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&""===r)return "";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const i=parseInt(s[1]);return n.toUpperCase()+"\n\n"+r+"\n\n"+function(t,e){const n=t.split("\n"),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let t=r;t<s;t++){const r=t+1;i.push(`${r===e?">":" "} ${r}: ${n[t]}`);}return i.join("\n")}(t.getShaderSource(e),i)}return r}function ll(t,e){const n=function(t){const e=mi.getPrimaries(mi.workingColorSpace),n=mi.getPrimaries(t);let i;switch(e===n?i="":e===tn&&n===Qe?i="LinearDisplayP3ToLinearSRGB":e===Qe&&n===tn&&(i="LinearSRGBToLinearDisplayP3"),t){case Ye:case Je:return [i,"LinearTransferOETF"];case qe:case Ze:return [i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}(e);return `vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cl(t,e){let n;switch(e){case Q:n="Linear";break;case tt:n="Reinhard";break;case et:n="OptimizedCineon";break;case nt:n="ACESFilmic";break;case rt:n="AgX";break;case it:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear";}return "vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hl(t){return ""!==t}function ul(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pl=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(t){return t.replace(pl,gl)}const fl=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gl(t,e){let n=fa[e];if(void 0===n){const t=fl.get(e);if(void 0===t)throw new Error("Can not resolve #include <"+e+">");n=fa[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,t);}return ml(n)}const _l=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(t){return t.replace(_l,xl)}function xl(t,e,n,i){let r="";for(let t=parseInt(e);t<parseInt(n);t++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+t+" ]").replace(/UNROLLED_LOOP_INDEX/g,t);return r}function yl(t){let e="precision "+t.precision+" float;\nprecision "+t.precision+" int;";return "highp"===t.precision?e+="\n#define HIGH_PRECISION":"mediump"===t.precision?e+="\n#define MEDIUM_PRECISION":"lowp"===t.precision&&(e+="\n#define LOW_PRECISION"),e}function Ml(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const u=function(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===l?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===c?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===h&&(e="SHADOWMAP_TYPE_VSM"),e}(n),d=function(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lt:case ct:e="ENVMAP_TYPE_CUBE";break;case dt:e="ENVMAP_TYPE_CUBE_UV";}return e}(n),p=function(t){let e="ENVMAP_MODE_REFLECTION";t.envMap&&t.envMapMode===ct&&(e="ENVMAP_MODE_REFRACTION");return e}(n),m=function(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Z:e="ENVMAP_BLENDING_MULTIPLY";break;case J:e="ENVMAP_BLENDING_MIX";break;case K:e="ENVMAP_BLENDING_ADD";}return e}(n),f=function(t){const e=t.envMapCubeUVHeight;if(null===e)return null;const n=Math.log2(e)-2,i=1/e;return {texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}(n),g=n.isWebGL2?"":function(t){return [t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hl).join("\n")}(n),_=function(t){return [t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hl).join("\n")}(n),v=function(t){const e=[];for(const n in t){const i=t[n];!1!==i&&e.push("#define "+n+" "+i);}return e.join("\n")}(s),x=r.createProgram();let y,M,S=n.glslVersion?"#version "+n.glslVersion+"\n":"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(hl).join("\n"),y.length>0&&(y+="\n"),M=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(hl).join("\n"),M.length>0&&(M+="\n")):(y=[yl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(hl).join("\n"),M=[g,yl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$?"#define TONE_MAPPING":"",n.toneMapping!==$?fa.tonemapping_pars_fragment:"",n.toneMapping!==$?cl("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fa.colorspace_pars_fragment,ll("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(hl).join("\n")),a=ml(a),a=ul(a,n),a=dl(a,n),o=ml(o),o=ul(o,n),o=dl(o,n),a=vl(a),o=vl(o),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(S="#version 300 es\n",y=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+y,M=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===On?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===On?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+M);const b=S+y+a,E=S+M+o,T=rl(r,r.VERTEX_SHADER,b),w=rl(r,r.FRAGMENT_SHADER,E);function A(e){if(t.debug.checkShaderErrors){const n=r.getProgramInfoLog(x).trim(),i=r.getShaderInfoLog(T).trim(),s=r.getShaderInfoLog(w).trim();let a=!0,o=!0;if(!1===r.getProgramParameter(x,r.LINK_STATUS))if(a=!1,"function"==typeof t.debug.onShaderError)t.debug.onShaderError(r,x,T,w);else {const t=ol(r,T,"vertex"),e=ol(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+"\n\nProgram Info Log: "+n+"\n"+t+"\n"+e);}else ""!==n?console.warn("THREE.WebGLProgram: Program Info Log:",n):""!==i&&""!==s||(o=!1);o&&(e.diagnostics={runnable:a,programLog:n,vertexShader:{log:i,prefix:y},fragmentShader:{log:s,prefix:M}});}r.deleteShader(T),r.deleteShader(w),R=new il(r,x),C=function(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const i=t.getActiveAttrib(e,r),s=i.name;let a=1;i.type===t.FLOAT_MAT2&&(a=2),i.type===t.FLOAT_MAT3&&(a=3),i.type===t.FLOAT_MAT4&&(a=4),n[s]={type:i.type,location:t.getAttribLocation(e,s),locationSize:a};}return n}(r,x);}let R,C;r.attachShader(x,T),r.attachShader(x,w),void 0!==n.index0AttributeName?r.bindAttribLocation(x,0,n.index0AttributeName):!0===n.morphTargets&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),this.getUniforms=function(){return void 0===R&&A(this),R},this.getAttributes=function(){return void 0===C&&A(this),C};let P=!1===n.rendererExtensionParallelShaderCompile;return this.isReady=function(){return !1===P&&(P=r.getProgramParameter(x,sl)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0;},this.type=n.shaderType,this.name=n.shaderName,this.id=al++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let Sl=0;class bl{constructor(){this.shaderCache=new Map,this.materialCache=new Map;}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return !1===s.has(i)&&(s.add(i),i.usedTimes++),!1===s.has(r)&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const t of e)t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear();}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return void 0===n&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return void 0===n&&(n=new El(t),e.set(t,n)),n}}class El{constructor(t){this.id=Sl++,this.code=t,this.usedTimes=0;}}function Tl(t,e,n,i,r,s,a){const o=new yr,l=new bl,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(t){return 0===t?"uv":`uv${t}`}return {getParameters:function(s,o,c,_,v){const x=_.fog,y=v.geometry,M=s.isMeshStandardMaterial?_.environment:null,S=(s.isMeshStandardMaterial?n:e).get(s.envMap||M),b=S&&S.mapping===dt?S.image.height:null,E=f[s.type];null!==s.precision&&(m=r.getMaxPrecision(s.precision),m!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",m,"instead."));const T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,w=void 0!==T?T.length:0;let A,R,C,P,L=0;if(void 0!==y.morphAttributes.position&&(L=1),void 0!==y.morphAttributes.normal&&(L=2),void 0!==y.morphAttributes.color&&(L=3),E){const t=_a[E];A=t.vertexShader,R=t.fragmentShader;}else A=s.vertexShader,R=s.fragmentShader,l.update(s),C=l.getVertexShaderID(s),P=l.getFragmentShaderID(s);const I=t.getRenderTarget(),U=!0===v.isInstancedMesh,N=!0===v.isBatchedMesh,D=!!s.map,O=!!s.matcap,F=!!S,B=!!s.aoMap,z=!!s.lightMap,H=!!s.bumpMap,V=!!s.normalMap,k=!!s.displacementMap,G=!!s.emissiveMap,W=!!s.metalnessMap,X=!!s.roughnessMap,j=s.anisotropy>0,q=s.clearcoat>0,Y=s.iridescence>0,Z=s.sheen>0,J=s.transmission>0,K=j&&!!s.anisotropyMap,Q=q&&!!s.clearcoatMap,tt=q&&!!s.clearcoatNormalMap,et=q&&!!s.clearcoatRoughnessMap,nt=Y&&!!s.iridescenceMap,it=Y&&!!s.iridescenceThicknessMap,rt=Z&&!!s.sheenColorMap,st=Z&&!!s.sheenRoughnessMap,at=!!s.specularMap,ot=!!s.specularColorMap,lt=!!s.specularIntensityMap,ct=J&&!!s.transmissionMap,ht=J&&!!s.thicknessMap,ut=!!s.gradientMap,pt=!!s.alphaMap,mt=s.alphaTest>0,ft=!!s.alphaHash,gt=!!s.extensions,_t=!!y.attributes.uv1,vt=!!y.attributes.uv2,xt=!!y.attributes.uv3;let yt=$;return s.toneMapped&&(null!==I&&!0!==I.isXRRenderTarget||(yt=t.toneMapping)),{isWebGL2:h,shaderID:E,shaderType:s.type,shaderName:s.name,vertexShader:A,fragmentShader:R,defines:s.defines,customVertexShaderID:C,customFragmentShaderID:P,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:m,batching:N,instancing:U,instancingColor:U&&null!==v.instanceColor,supportsVertexTextures:p,outputColorSpace:null===I?t.outputColorSpace:!0===I.isXRRenderTarget?I.texture.colorSpace:Ye,map:D,matcap:O,envMap:F,envMapMode:F&&S.mapping,envMapCubeUVHeight:b,aoMap:B,lightMap:z,bumpMap:H,normalMap:V,displacementMap:p&&k,emissiveMap:G,normalMapObjectSpace:V&&1===s.normalMapType,normalMapTangentSpace:V&&0===s.normalMapType,metalnessMap:W,roughnessMap:X,anisotropy:j,anisotropyMap:K,clearcoat:q,clearcoatMap:Q,clearcoatNormalMap:tt,clearcoatRoughnessMap:et,iridescence:Y,iridescenceMap:nt,iridescenceThicknessMap:it,sheen:Z,sheenColorMap:rt,sheenRoughnessMap:st,specularMap:at,specularColorMap:ot,specularIntensityMap:lt,transmission:J,transmissionMap:ct,thicknessMap:ht,gradientMap:ut,opaque:!1===s.transparent&&1===s.blending,alphaMap:pt,alphaTest:mt,alphaHash:ft,combine:s.combine,mapUv:D&&g(s.map.channel),aoMapUv:B&&g(s.aoMap.channel),lightMapUv:z&&g(s.lightMap.channel),bumpMapUv:H&&g(s.bumpMap.channel),normalMapUv:V&&g(s.normalMap.channel),displacementMapUv:k&&g(s.displacementMap.channel),emissiveMapUv:G&&g(s.emissiveMap.channel),metalnessMapUv:W&&g(s.metalnessMap.channel),roughnessMapUv:X&&g(s.roughnessMap.channel),anisotropyMapUv:K&&g(s.anisotropyMap.channel),clearcoatMapUv:Q&&g(s.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(s.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(s.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(s.iridescenceMap.channel),iridescenceThicknessMapUv:it&&g(s.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(s.sheenColorMap.channel),sheenRoughnessMapUv:st&&g(s.sheenRoughnessMap.channel),specularMapUv:at&&g(s.specularMap.channel),specularColorMapUv:ot&&g(s.specularColorMap.channel),specularIntensityMapUv:lt&&g(s.specularIntensityMap.channel),transmissionMapUv:ct&&g(s.transmissionMap.channel),thicknessMapUv:ht&&g(s.thicknessMap.channel),alphaMapUv:pt&&g(s.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(V||j),vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!y.attributes.color&&4===y.attributes.color.itemSize,vertexUv1s:_t,vertexUv2s:vt,vertexUv3s:xt,pointsUvs:!0===v.isPoints&&!!y.attributes.uv&&(D||pt),fog:!!x,useFog:!0===s.fog,fogExp2:x&&x.isFogExp2,flatShading:!0===s.flatShading,sizeAttenuation:!0===s.sizeAttenuation,logarithmicDepthBuffer:u,skinning:!0===v.isSkinnedMesh,morphTargets:void 0!==y.morphAttributes.position,morphNormals:void 0!==y.morphAttributes.normal,morphColors:void 0!==y.morphAttributes.color,morphTargetsCount:w,morphTextureStride:L,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:s.dithering,shadowMapEnabled:t.shadowMap.enabled&&c.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:D&&!0===s.map.isVideoTexture&&mi.getTransfer(s.map.colorSpace)===$e,premultipliedAlpha:s.premultipliedAlpha,doubleSided:2===s.side,flipSided:s.side===d,useDepthPacking:s.depthPacking>=0,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionDerivatives:gt&&!0===s.extensions.derivatives,extensionFragDepth:gt&&!0===s.extensions.fragDepth,extensionDrawBuffers:gt&&!0===s.extensions.drawBuffers,extensionShaderTextureLOD:gt&&!0===s.extensions.shaderTextureLOD,extensionClipCullDistance:gt&&s.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:s.customProgramCacheKey()}},getProgramCacheKey:function(e){const n=[];if(e.shaderID?n.push(e.shaderID):(n.push(e.customVertexShaderID),n.push(e.customFragmentShaderID)),void 0!==e.defines)for(const t in e.defines)n.push(t),n.push(e.defines[t]);return !1===e.isRawShaderMaterial&&(!function(t,e){t.push(e.precision),t.push(e.outputColorSpace),t.push(e.envMapMode),t.push(e.envMapCubeUVHeight),t.push(e.mapUv),t.push(e.alphaMapUv),t.push(e.lightMapUv),t.push(e.aoMapUv),t.push(e.bumpMapUv),t.push(e.normalMapUv),t.push(e.displacementMapUv),t.push(e.emissiveMapUv),t.push(e.metalnessMapUv),t.push(e.roughnessMapUv),t.push(e.anisotropyMapUv),t.push(e.clearcoatMapUv),t.push(e.clearcoatNormalMapUv),t.push(e.clearcoatRoughnessMapUv),t.push(e.iridescenceMapUv),t.push(e.iridescenceThicknessMapUv),t.push(e.sheenColorMapUv),t.push(e.sheenRoughnessMapUv),t.push(e.specularMapUv),t.push(e.specularColorMapUv),t.push(e.specularIntensityMapUv),t.push(e.transmissionMapUv),t.push(e.thicknessMapUv),t.push(e.combine),t.push(e.fogExp2),t.push(e.sizeAttenuation),t.push(e.morphTargetsCount),t.push(e.morphAttributeCount),t.push(e.numDirLights),t.push(e.numPointLights),t.push(e.numSpotLights),t.push(e.numSpotLightMaps),t.push(e.numHemiLights),t.push(e.numRectAreaLights),t.push(e.numDirLightShadows),t.push(e.numPointLightShadows),t.push(e.numSpotLightShadows),t.push(e.numSpotLightShadowsWithMaps),t.push(e.numLightProbes),t.push(e.shadowMapType),t.push(e.toneMapping),t.push(e.numClippingPlanes),t.push(e.numClipIntersection),t.push(e.depthPacking);}(n,e),function(t,e){o.disableAll(),e.isWebGL2&&o.enable(0);e.supportsVertexTextures&&o.enable(1);e.instancing&&o.enable(2);e.instancingColor&&o.enable(3);e.matcap&&o.enable(4);e.envMap&&o.enable(5);e.normalMapObjectSpace&&o.enable(6);e.normalMapTangentSpace&&o.enable(7);e.clearcoat&&o.enable(8);e.iridescence&&o.enable(9);e.alphaTest&&o.enable(10);e.vertexColors&&o.enable(11);e.vertexAlphas&&o.enable(12);e.vertexUv1s&&o.enable(13);e.vertexUv2s&&o.enable(14);e.vertexUv3s&&o.enable(15);e.vertexTangents&&o.enable(16);e.anisotropy&&o.enable(17);e.alphaHash&&o.enable(18);e.batching&&o.enable(19);t.push(o.mask),o.disableAll(),e.fog&&o.enable(0);e.useFog&&o.enable(1);e.flatShading&&o.enable(2);e.logarithmicDepthBuffer&&o.enable(3);e.skinning&&o.enable(4);e.morphTargets&&o.enable(5);e.morphNormals&&o.enable(6);e.morphColors&&o.enable(7);e.premultipliedAlpha&&o.enable(8);e.shadowMapEnabled&&o.enable(9);e.useLegacyLights&&o.enable(10);e.doubleSided&&o.enable(11);e.flipSided&&o.enable(12);e.useDepthPacking&&o.enable(13);e.dithering&&o.enable(14);e.transmission&&o.enable(15);e.sheen&&o.enable(16);e.opaque&&o.enable(17);e.pointsUvs&&o.enable(18);e.decodeVideoTexture&&o.enable(19);t.push(o.mask);}(n,e),n.push(t.outputColorSpace)),n.push(e.customProgramCacheKey),n.join()},getUniforms:function(t){const e=f[t.type];let n;if(e){const t=_a[e];n=Ks.clone(t.uniforms);}else n=t.uniforms;return n},acquireProgram:function(e,n){let i;for(let t=0,e=c.length;t<e;t++){const e=c[t];if(e.cacheKey===n){i=e,++i.usedTimes;break}}return void 0===i&&(i=new Ml(t,n,e,s),c.push(i)),i},releaseProgram:function(t){if(0==--t.usedTimes){const e=c.indexOf(t);c[e]=c[c.length-1],c.pop(),t.destroy();}},releaseShaderCache:function(t){l.remove(t);},programs:c,dispose:function(){l.dispose();}}}function wl(){let t=new WeakMap;return {get:function(e){let n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e);},update:function(e,n,i){t.get(e)[n]=i;},dispose:function(){t=new WeakMap;}}}function Al(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rl(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cl(){const t=[];let e=0;const n=[],i=[],r=[];function s(n,i,r,s,a,o){let l=t[e];return void 0===l?(l={id:n.id,object:n,geometry:i,material:r,groupOrder:s,renderOrder:n.renderOrder,z:a,group:o},t[e]=l):(l.id=n.id,l.object=n,l.geometry=i,l.material=r,l.groupOrder=s,l.renderOrder=n.renderOrder,l.z=a,l.group=o),e++,l}return {opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0;},push:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?i.push(h):!0===a.transparent?r.push(h):n.push(h);},unshift:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?i.unshift(h):!0===a.transparent?r.unshift(h):n.unshift(h);},finish:function(){for(let n=e,i=t.length;n<i;n++){const e=t[n];if(null===e.id)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null;}},sort:function(t,e){n.length>1&&n.sort(t||Al),i.length>1&&i.sort(e||Rl),r.length>1&&r.sort(e||Rl);}}}function Pl(){let t=new WeakMap;return {get:function(e,n){const i=t.get(e);let r;return void 0===i?(r=new Cl,t.set(e,[r])):n>=i.length?(r=new Cl,i.push(r)):r=i[n],r},dispose:function(){t=new WeakMap;}}}function Ll(){const t={};return {get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Ui,color:new Kr};break;case"SpotLight":n={position:new Ui,direction:new Ui,color:new Kr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Ui,color:new Kr,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Ui,skyColor:new Kr,groundColor:new Kr};break;case"RectAreaLight":n={color:new Kr,position:new Ui,halfWidth:new Ui,halfHeight:new Ui};}return t[e.id]=n,n}}}let Il=0;function Ul(t,e){return (e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Nl(t,e){const n=new Ll,i=function(){const t={};return {get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ti};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ti,shadowCameraNear:1,shadowCameraFar:1e3};}return t[e.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let t=0;t<9;t++)r.probe.push(new Ui);const s=new Ui,a=new cr,o=new cr;return {setup:function(s,a){let o=0,l=0,c=0;for(let t=0;t<9;t++)r.probe[t].set(0,0,0);let h=0,u=0,d=0,p=0,m=0,f=0,g=0,_=0,v=0,x=0,y=0;s.sort(Ul);const M=!0===a?Math.PI:1;for(let t=0,e=s.length;t<e;t++){const e=s[t],a=e.color,S=e.intensity,b=e.distance,E=e.shadow&&e.shadow.map?e.shadow.map.texture:null;if(e.isAmbientLight)o+=a.r*S*M,l+=a.g*S*M,c+=a.b*S*M;else if(e.isLightProbe){for(let t=0;t<9;t++)r.probe[t].addScaledVector(e.sh.coefficients[t],S);y++;}else if(e.isDirectionalLight){const t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*M),e.castShadow){const t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,r.directionalShadow[h]=n,r.directionalShadowMap[h]=E,r.directionalShadowMatrix[h]=e.shadow.matrix,f++;}r.directional[h]=t,h++;}else if(e.isSpotLight){const t=n.get(e);t.position.setFromMatrixPosition(e.matrixWorld),t.color.copy(a).multiplyScalar(S*M),t.distance=b,t.coneCos=Math.cos(e.angle),t.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),t.decay=e.decay,r.spot[d]=t;const s=e.shadow;if(e.map&&(r.spotLightMap[v]=e.map,v++,s.updateMatrices(e),e.castShadow&&x++),r.spotLightMatrix[d]=s.matrix,e.castShadow){const t=i.get(e);t.shadowBias=s.bias,t.shadowNormalBias=s.normalBias,t.shadowRadius=s.radius,t.shadowMapSize=s.mapSize,r.spotShadow[d]=t,r.spotShadowMap[d]=E,_++;}d++;}else if(e.isRectAreaLight){const t=n.get(e);t.color.copy(a).multiplyScalar(S),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),r.rectArea[p]=t,p++;}else if(e.isPointLight){const t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*M),t.distance=e.distance,t.decay=e.decay,e.castShadow){const t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,n.shadowCameraNear=t.camera.near,n.shadowCameraFar=t.camera.far,r.pointShadow[u]=n,r.pointShadowMap[u]=E,r.pointShadowMatrix[u]=e.shadow.matrix,g++;}r.point[u]=t,u++;}else if(e.isHemisphereLight){const t=n.get(e);t.skyColor.copy(e.color).multiplyScalar(S*M),t.groundColor.copy(e.groundColor).multiplyScalar(S*M),r.hemi[m]=t,m++;}}p>0&&(e.isWebGL2?!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=ga.LTC_FLOAT_1,r.rectAreaLTC2=ga.LTC_FLOAT_2):(r.rectAreaLTC1=ga.LTC_HALF_1,r.rectAreaLTC2=ga.LTC_HALF_2):!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=ga.LTC_FLOAT_1,r.rectAreaLTC2=ga.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=ga.LTC_HALF_1,r.rectAreaLTC2=ga.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=o,r.ambient[1]=l,r.ambient[2]=c;const S=r.hash;S.directionalLength===h&&S.pointLength===u&&S.spotLength===d&&S.rectAreaLength===p&&S.hemiLength===m&&S.numDirectionalShadows===f&&S.numPointShadows===g&&S.numSpotShadows===_&&S.numSpotMaps===v&&S.numLightProbes===y||(r.directional.length=h,r.spot.length=d,r.rectArea.length=p,r.point.length=u,r.hemi.length=m,r.directionalShadow.length=f,r.directionalShadowMap.length=f,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=f,r.pointShadowMatrix.length=g,r.spotLightMatrix.length=_+v-x,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=x,r.numLightProbes=y,S.directionalLength=h,S.pointLength=u,S.spotLength=d,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=f,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=y,r.version=Il++);},setupView:function(t,e){let n=0,i=0,l=0,c=0,h=0;const u=e.matrixWorldInverse;for(let e=0,d=t.length;e<d;e++){const d=t[e];if(d.isDirectionalLight){const t=r.directional[n];t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),n++;}else if(d.isSpotLight){const t=r.spot[l];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),l++;}else if(d.isRectAreaLight){const t=r.rectArea[c];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),o.identity(),a.copy(d.matrixWorld),a.premultiply(u),o.extractRotation(a),t.halfWidth.set(.5*d.width,0,0),t.halfHeight.set(0,.5*d.height,0),t.halfWidth.applyMatrix4(o),t.halfHeight.applyMatrix4(o),c++;}else if(d.isPointLight){const t=r.point[i];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),i++;}else if(d.isHemisphereLight){const t=r.hemi[h];t.direction.setFromMatrixPosition(d.matrixWorld),t.direction.transformDirection(u),h++;}}},state:r}}function Dl(t,e){const n=new Nl(t,e),i=[],r=[];return {init:function(){i.length=0,r.length=0;},state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:function(t){n.setup(i,t);},setupLightsView:function(t){n.setupView(i,t);},pushLight:function(t){i.push(t);},pushShadow:function(t){r.push(t);}}}function Ol(t,e){let n=new WeakMap;return {get:function(i,r=0){const s=n.get(i);let a;return void 0===s?(a=new Dl(t,e),n.set(i,[a])):r>=s.length?(a=new Dl(t,e),s.push(a)):a=s[r],a},dispose:function(){n=new WeakMap;}}}class Fl extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t);}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bl extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t);}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function zl(t,e,n){let i=new ua;const r=new ti,s=new ti,a=new Ei,o=new Fl({depthPacking:3201}),c=new Bl,p={},m=n.maxTextureSize,f={[u]:d,[d]:u,2:2},g=new $s({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ti},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const v=new As;v.setAttribute("position",new cs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xs(v,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l;let M=this.type;function S(n,i){const s=e.update(x);g.defines.VSM_SAMPLES!==n.blurSamples&&(g.defines.VSM_SAMPLES=n.blurSamples,_.defines.VSM_SAMPLES=n.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),null===n.mapPass&&(n.mapPass=new wi(r.x,r.y)),g.uniforms.shadow_pass.value=n.map.texture,g.uniforms.resolution.value=n.mapSize,g.uniforms.radius.value=n.radius,t.setRenderTarget(n.mapPass),t.clear(),t.renderBufferDirect(i,null,s,g,x,null),_.uniforms.shadow_pass.value=n.mapPass.texture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,null,s,_,x,null);}function b(e,n,i,r){let s=null;const a=!0===i.isPointLight?e.customDistanceMaterial:e.customDepthMaterial;if(void 0!==a)s=a;else if(s=!0===i.isPointLight?c:o,t.localClippingEnabled&&!0===n.clipShadows&&Array.isArray(n.clippingPlanes)&&0!==n.clippingPlanes.length||n.displacementMap&&0!==n.displacementScale||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){const t=s.uuid,e=n.uuid;let i=p[t];void 0===i&&(i={},p[t]=i);let r=i[e];void 0===r&&(r=s.clone(),i[e]=r,n.addEventListener("dispose",T)),s=r;}if(s.visible=n.visible,s.wireframe=n.wireframe,s.side=r===h?null!==n.shadowSide?n.shadowSide:n.side:null!==n.shadowSide?n.shadowSide:f[n.side],s.alphaMap=n.alphaMap,s.alphaTest=n.alphaTest,s.map=n.map,s.clipShadows=n.clipShadows,s.clippingPlanes=n.clippingPlanes,s.clipIntersection=n.clipIntersection,s.displacementMap=n.displacementMap,s.displacementScale=n.displacementScale,s.displacementBias=n.displacementBias,s.wireframeLinewidth=n.wireframeLinewidth,s.linewidth=n.linewidth,!0===i.isPointLight&&!0===s.isMeshDistanceMaterial){t.properties.get(s).light=i;}return s}function E(n,r,s,a,o){if(!1===n.visible)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&o===h)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,n.matrixWorld);const i=e.update(n),l=n.material;if(Array.isArray(l)){const e=i.groups;for(let c=0,h=e.length;c<h;c++){const h=e[c],u=l[h.materialIndex];if(u&&u.visible){const e=b(n,u,a,o);n.onBeforeShadow(t,n,r,s,i,e,h),t.renderBufferDirect(s,null,i,e,n,h),n.onAfterShadow(t,n,r,s,i,e,h);}}}else if(l.visible){const e=b(n,l,a,o);n.onBeforeShadow(t,n,r,s,i,e,null),t.renderBufferDirect(s,null,i,e,n,null),n.onAfterShadow(t,n,r,s,i,e,null);}}const l=n.children;for(let t=0,e=l.length;t<e;t++)E(l[t],r,s,a,o);}function T(t){t.target.removeEventListener("dispose",T);for(const e in p){const n=p[e],i=t.target.uuid;if(i in n){n[i].dispose(),delete n[i];}}}this.render=function(e,n,o){if(!1===y.enabled)return;if(!1===y.autoUpdate&&!1===y.needsUpdate)return;if(0===e.length)return;const l=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),d=t.state;d.setBlending(0),d.buffers.color.setClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1);const p=M!==h&&this.type===h,f=M===h&&this.type!==h;for(let l=0,c=e.length;l<c;l++){const c=e[l],u=c.shadow;if(void 0===u){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(!1===u.autoUpdate&&!1===u.needsUpdate)continue;r.copy(u.mapSize);const g=u.getFrameExtents();if(r.multiply(g),s.copy(u.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/g.x),r.x=s.x*g.x,u.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/g.y),r.y=s.y*g.y,u.mapSize.y=s.y)),null===u.map||!0===p||!0===f){const t=this.type!==h?{minFilter:gt,magFilter:gt}:{};null!==u.map&&u.map.dispose(),u.map=new wi(r.x,r.y,t),u.map.texture.name=c.name+".shadowMap",u.camera.updateProjectionMatrix();}t.setRenderTarget(u.map),t.clear();const _=u.getViewportCount();for(let t=0;t<_;t++){const e=u.getViewport(t);a.set(s.x*e.x,s.y*e.y,s.x*e.z,s.y*e.w),d.viewport(a),u.updateMatrices(c,t),i=u.getFrustum(),E(n,o,u.camera,c,this.type);}!0!==u.isPointLightShadow&&this.type===h&&S(u,o),u.needsUpdate=!1;}M=this.type,y.needsUpdate=!1,t.setRenderTarget(l,c,u);};}function Hl(t,e,n){const i=n.isWebGL2;const r=new function(){let e=!1;const n=new Ei;let i=null;const r=new Ei(0,0,0,0);return {setMask:function(n){i===n||e||(t.colorMask(n,n,n,n),i=n);},setLocked:function(t){e=t;},setClear:function(e,i,s,a,o){!0===o&&(e*=a,i*=a,s*=a),n.set(e,i,s,a),!1===r.equals(n)&&(t.clearColor(e,i,s,a),r.copy(n));},reset:function(){e=!1,i=null,r.set(-1,0,0,0);}}},s=new function(){let e=!1,n=null,i=null,r=null;return {setTest:function(e){e?j(t.DEPTH_TEST):q(t.DEPTH_TEST);},setMask:function(i){n===i||e||(t.depthMask(i),n=i);},setFunc:function(e){if(i!==e){switch(e){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:default:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);}i=e;}},setLocked:function(t){e=t;},setClear:function(e){r!==e&&(t.clearDepth(e),r=e);},reset:function(){e=!1,n=null,i=null,r=null;}}},a=new function(){let e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null;return {setTest:function(n){e||(n?j(t.STENCIL_TEST):q(t.STENCIL_TEST));},setMask:function(i){n===i||e||(t.stencilMask(i),n=i);},setFunc:function(e,n,a){i===e&&r===n&&s===a||(t.stencilFunc(e,n,a),i=e,r=n,s=a);},setOp:function(e,n,i){a===e&&o===n&&l===i||(t.stencilOp(e,n,i),a=e,o=n,l=i);},setLocked:function(t){e=t;},setClear:function(e){c!==e&&(t.clearStencil(e),c=e);},reset:function(){e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null;}}},o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,p=[],m=null,f=!1,g=null,_=null,v=null,x=null,y=null,S=null,b=null,E=new Kr(0,0,0),T=0,w=!1,A=null,R=null,C=null,I=null,U=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const F=t.getParameter(t.VERSION);-1!==F.indexOf("WebGL")?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=O>=1):-1!==F.indexOf("OpenGL ES")&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=O>=2);let B=null,z={};const H=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),k=(new Ei).fromArray(H),G=(new Ei).fromArray(V);function W(e,n,r,s){const a=new Uint8Array(4),o=t.createTexture();t.bindTexture(e,o),t.texParameteri(e,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(e,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let o=0;o<r;o++)!i||e!==t.TEXTURE_3D&&e!==t.TEXTURE_2D_ARRAY?t.texImage2D(n+o,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,a):t.texImage3D(n,0,t.RGBA,1,1,s,0,t.RGBA,t.UNSIGNED_BYTE,a);return o}const X={};function j(e){!0!==c[e]&&(t.enable(e),c[e]=!0);}function q(e){!1!==c[e]&&(t.disable(e),c[e]=!1);}X[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(X[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(t.DEPTH_TEST),s.setFunc(3),K(!1),$(1),j(t.CULL_FACE),J(0);const Y={[M]:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};if(i)Y[103]=t.MIN,Y[104]=t.MAX;else {const t=e.get("EXT_blend_minmax");null!==t&&(Y[103]=t.MIN_EXT,Y[104]=t.MAX_EXT);}const Z={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,[P]:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,[L]:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function J(e,n,i,r,s,a,o,l,c,h){if(0!==e){if(!1===f&&(j(t.BLEND),f=!0),5===e)s=s||n,a=a||i,o=o||r,n===_&&s===y||(t.blendEquationSeparate(Y[n],Y[s]),_=n,y=s),i===v&&r===x&&a===S&&o===b||(t.blendFuncSeparate(Z[i],Z[r],Z[a],Z[o]),v=i,x=r,S=a,b=o),!1!==l.equals(E)&&c===T||(t.blendColor(l.r,l.g,l.b,c),E.copy(l),T=c),g=e,w=!1;else if(e!==g||h!==w){if(_===M&&y===M||(t.blendEquation(t.FUNC_ADD),_=M,y=M),h)switch(e){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);}else switch(e){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",e);}v=null,x=null,S=null,b=null,E.set(0,0,0),T=0,g=e,w=h;}}else !0===f&&(q(t.BLEND),f=!1);}function K(e){A!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),A=e);}function $(e){0!==e?(j(t.CULL_FACE),e!==R&&(1===e?t.cullFace(t.BACK):2===e?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):q(t.CULL_FACE),R=e;}function Q(e,n,i){e?(j(t.POLYGON_OFFSET_FILL),I===n&&U===i||(t.polygonOffset(n,i),I=n,U=i)):q(t.POLYGON_OFFSET_FILL);}return {buffers:{color:r,depth:s,stencil:a},enable:j,disable:q,bindFramebuffer:function(e,n){return h[e]!==n&&(t.bindFramebuffer(e,n),h[e]=n,i&&(e===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=n),e===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=n)),!0)},drawBuffers:function(i,r){let s=p,a=!1;if(i)if(s=u.get(r),void 0===s&&(s=[],u.set(r,s)),i.isWebGLMultipleRenderTargets){const e=i.texture;if(s.length!==e.length||s[0]!==t.COLOR_ATTACHMENT0){for(let n=0,i=e.length;n<i;n++)s[n]=t.COLOR_ATTACHMENT0+n;s.length=e.length,a=!0;}}else s[0]!==t.COLOR_ATTACHMENT0&&(s[0]=t.COLOR_ATTACHMENT0,a=!0);else s[0]!==t.BACK&&(s[0]=t.BACK,a=!0);a&&(n.isWebGL2?t.drawBuffers(s):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));},useProgram:function(e){return m!==e&&(t.useProgram(e),m=e,!0)},setBlending:J,setMaterial:function(e,n){2===e.side?q(t.CULL_FACE):j(t.CULL_FACE);let i=e.side===d;n&&(i=!i),K(i),1===e.blending&&!1===e.transparent?J(0):J(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.blendColor,e.blendAlpha,e.premultipliedAlpha),s.setFunc(e.depthFunc),s.setTest(e.depthTest),s.setMask(e.depthWrite),r.setMask(e.colorWrite);const o=e.stencilWrite;a.setTest(o),o&&(a.setMask(e.stencilWriteMask),a.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),a.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),Q(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?j(t.SAMPLE_ALPHA_TO_COVERAGE):q(t.SAMPLE_ALPHA_TO_COVERAGE);},setFlipSided:K,setCullFace:$,setLineWidth:function(e){e!==C&&(D&&t.lineWidth(e),C=e);},setPolygonOffset:Q,setScissorTest:function(e){e?j(t.SCISSOR_TEST):q(t.SCISSOR_TEST);},activeTexture:function(e){void 0===e&&(e=t.TEXTURE0+N-1),B!==e&&(t.activeTexture(e),B=e);},bindTexture:function(e,n,i){void 0===i&&(i=null===B?t.TEXTURE0+N-1:B);let r=z[i];void 0===r&&(r={type:void 0,texture:void 0},z[i]=r),r.type===e&&r.texture===n||(B!==i&&(t.activeTexture(i),B=i),t.bindTexture(e,n||X[e]),r.type=e,r.texture=n);},unbindTexture:function(){const e=z[B];void 0!==e&&void 0!==e.type&&(t.bindTexture(e.type,null),e.type=void 0,e.texture=void 0);},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},compressedTexImage3D:function(){try{t.compressedTexImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texImage2D:function(){try{t.texImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texImage3D:function(){try{t.texImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},updateUBOMapping:function(e,n){let i=l.get(n);void 0===i&&(i=new WeakMap,l.set(n,i));let r=i.get(e);void 0===r&&(r=t.getUniformBlockIndex(n,e.name),i.set(e,r));},uniformBlockBinding:function(e,n){const i=l.get(n).get(e);o.get(n)!==i&&(t.uniformBlockBinding(n,i,e.__bindingPointIndex),o.set(n,i));},texStorage2D:function(){try{t.texStorage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texStorage3D:function(){try{t.texStorage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texSubImage2D:function(){try{t.texSubImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},texSubImage3D:function(){try{t.texSubImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D.apply(t,arguments);}catch(t){console.error("THREE.WebGLState:",t);}},scissor:function(e){!1===k.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),k.copy(e));},viewport:function(e){!1===G.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),G.copy(e));},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),!0===i&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},B=null,z={},h={},u=new WeakMap,p=[],m=null,f=!1,g=null,_=null,v=null,x=null,y=null,S=null,b=null,E=new Kr(0,0,0),T=0,w=!1,A=null,R=null,C=null,I=null,U=null,k.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset();}}}function Vl(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d");}catch(t){}function m(t,e){return p?new OffscreenCanvas(t,e):ai("canvas")}function f(t,e,n,i){let r=1;if((t.width>i||t.height>i)&&(r=i/Math.max(t.width,t.height)),r<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const i=e?Jn:Math.floor,s=i(r*t.width),a=i(r*t.height);void 0===u&&(u=m(s,a));const o=n?m(s,a):u;o.width=s,o.height=a;return o.getContext("2d").drawImage(t,0,0,s,a),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+s+"x"+a+")."),o}return "data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}function g(t){return Zn(t.width)&&Zn(t.height)}function _(t,e){return t.generateMipmaps&&e&&t.minFilter!==gt&&t.minFilter!==Mt}function v(e){t.generateMipmap(e);}function x(n,i,r,s,a=!1){if(!1===o)return i;if(null!==n){if(void 0!==t[n])return t[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'");}let l=i;if(i===t.RED&&(r===t.FLOAT&&(l=t.R32F),r===t.HALF_FLOAT&&(l=t.R16F),r===t.UNSIGNED_BYTE&&(l=t.R8)),i===t.RED_INTEGER&&(r===t.UNSIGNED_BYTE&&(l=t.R8UI),r===t.UNSIGNED_SHORT&&(l=t.R16UI),r===t.UNSIGNED_INT&&(l=t.R32UI),r===t.BYTE&&(l=t.R8I),r===t.SHORT&&(l=t.R16I),r===t.INT&&(l=t.R32I)),i===t.RG&&(r===t.FLOAT&&(l=t.RG32F),r===t.HALF_FLOAT&&(l=t.RG16F),r===t.UNSIGNED_BYTE&&(l=t.RG8)),i===t.RGBA){const e=a?Ke:mi.getTransfer(s);r===t.FLOAT&&(l=t.RGBA32F),r===t.HALF_FLOAT&&(l=t.RGBA16F),r===t.UNSIGNED_BYTE&&(l=e===$e?t.SRGB8_ALPHA8:t.RGBA8),r===t.UNSIGNED_SHORT_4_4_4_4&&(l=t.RGBA4),r===t.UNSIGNED_SHORT_5_5_5_1&&(l=t.RGB5_A1);}return l!==t.R16F&&l!==t.R32F&&l!==t.RG16F&&l!==t.RG32F&&l!==t.RGBA16F&&l!==t.RGBA32F||e.get("EXT_color_buffer_float"),l}function y(t,e,n){return !0===_(t,n)||t.isFramebufferTexture&&t.minFilter!==gt&&t.minFilter!==Mt?Math.log2(Math.max(e.width,e.height))+1:void 0!==t.mipmaps&&t.mipmaps.length>0?t.mipmaps.length:t.isCompressedTexture&&Array.isArray(t.image)?e.mipmaps.length:1}function M(e){return e===gt||e===_t||e===xt?t.NEAREST:t.LINEAR}function S(t){const e=t.target;e.removeEventListener("dispose",S),function(t){const e=i.get(t);if(void 0===e.__webglInit)return;const n=t.source,r=d.get(n);if(r){const i=r[e.__cacheKey];i.usedTimes--,0===i.usedTimes&&E(t),0===Object.keys(r).length&&d.delete(n);}i.remove(t);}(e),e.isVideoTexture&&h.delete(e);}function b(e){const n=e.target;n.removeEventListener("dispose",b),function(e){const n=e.texture,r=i.get(e),s=i.get(n);void 0!==s.__webglTexture&&(t.deleteTexture(s.__webglTexture),a.memory.textures--);e.depthTexture&&e.depthTexture.dispose();if(e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(r.__webglFramebuffer[e]))for(let n=0;n<r.__webglFramebuffer[e].length;n++)t.deleteFramebuffer(r.__webglFramebuffer[e][n]);else t.deleteFramebuffer(r.__webglFramebuffer[e]);r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer[e]);}else {if(Array.isArray(r.__webglFramebuffer))for(let e=0;e<r.__webglFramebuffer.length;e++)t.deleteFramebuffer(r.__webglFramebuffer[e]);else t.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&t.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let e=0;e<r.__webglColorRenderbuffer.length;e++)r.__webglColorRenderbuffer[e]&&t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);r.__webglDepthRenderbuffer&&t.deleteRenderbuffer(r.__webglDepthRenderbuffer);}if(e.isWebGLMultipleRenderTargets)for(let e=0,r=n.length;e<r;e++){const r=i.get(n[e]);r.__webglTexture&&(t.deleteTexture(r.__webglTexture),a.memory.textures--),i.remove(n[e]);}i.remove(n),i.remove(e);}(n);}function E(e){const n=i.get(e);t.deleteTexture(n.__webglTexture);const r=e.source;delete d.get(r)[n.__cacheKey],a.memory.textures--;}let T=0;function w(e,r){const s=i.get(e);if(e.isVideoTexture&&function(t){const e=a.render.frame;h.get(t)!==e&&(h.set(t,e),t.update());}(e),!1===e.isRenderTargetTexture&&e.version>0&&s.__version!==e.version){const t=e.image;if(null===t)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else {if(!1!==t.complete)return void I(s,e,r);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");}}n.bindTexture(t.TEXTURE_2D,s.__webglTexture,t.TEXTURE0+r);}const A={[pt]:t.REPEAT,[mt]:t.CLAMP_TO_EDGE,[ft]:t.MIRRORED_REPEAT},R={[gt]:t.NEAREST,[_t]:t.NEAREST_MIPMAP_NEAREST,[xt]:t.NEAREST_MIPMAP_LINEAR,[Mt]:t.LINEAR,[St]:t.LINEAR_MIPMAP_NEAREST,[Et]:t.LINEAR_MIPMAP_LINEAR},C={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function P(n,s,a){if(a?(t.texParameteri(n,t.TEXTURE_WRAP_S,A[s.wrapS]),t.texParameteri(n,t.TEXTURE_WRAP_T,A[s.wrapT]),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,A[s.wrapR]),t.texParameteri(n,t.TEXTURE_MAG_FILTER,R[s.magFilter]),t.texParameteri(n,t.TEXTURE_MIN_FILTER,R[s.minFilter])):(t.texParameteri(n,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(n,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),s.wrapS===mt&&s.wrapT===mt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(n,t.TEXTURE_MAG_FILTER,M(s.magFilter)),t.texParameteri(n,t.TEXTURE_MIN_FILTER,M(s.minFilter)),s.minFilter!==gt&&s.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),s.compareFunction&&(t.texParameteri(n,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(n,t.TEXTURE_COMPARE_FUNC,C[s.compareFunction])),!0===e.has("EXT_texture_filter_anisotropic")){const a=e.get("EXT_texture_filter_anisotropic");if(s.magFilter===gt)return;if(s.minFilter!==xt&&s.minFilter!==Et)return;if(s.type===It&&!1===e.has("OES_texture_float_linear"))return;if(!1===o&&s.type===Ut&&!1===e.has("OES_texture_half_float_linear"))return;(s.anisotropy>1||i.get(s).__currentAnisotropy)&&(t.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy);}}function L(e,n){let i=!1;void 0===e.__webglInit&&(e.__webglInit=!0,n.addEventListener("dispose",S));const r=n.source;let s=d.get(r);void 0===s&&(s={},d.set(r,s));const o=function(t){const e=[];return e.push(t.wrapS),e.push(t.wrapT),e.push(t.wrapR||0),e.push(t.magFilter),e.push(t.minFilter),e.push(t.anisotropy),e.push(t.internalFormat),e.push(t.format),e.push(t.type),e.push(t.generateMipmaps),e.push(t.premultiplyAlpha),e.push(t.flipY),e.push(t.unpackAlignment),e.push(t.colorSpace),e.join()}(n);if(o!==e.__cacheKey){void 0===s[o]&&(s[o]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,i=!0),s[o].usedTimes++;const r=s[e.__cacheKey];void 0!==r&&(s[e.__cacheKey].usedTimes--,0===r.usedTimes&&E(n)),e.__cacheKey=o,e.__webglTexture=s[o].texture;}return i}function I(e,a,l){let c=t.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(c=t.TEXTURE_2D_ARRAY),a.isData3DTexture&&(c=t.TEXTURE_3D);const h=L(e,a),u=a.source;n.bindTexture(c,e.__webglTexture,t.TEXTURE0+l);const d=i.get(u);if(u.version!==d.__version||!0===h){n.activeTexture(t.TEXTURE0+l);const e=mi.getPrimaries(mi.workingColorSpace),i=a.colorSpace===je?null:mi.getPrimaries(a.colorSpace),p=a.colorSpace===je||e===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,a.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);const m=function(t){return !o&&(t.wrapS!==mt||t.wrapT!==mt||t.minFilter!==gt&&t.minFilter!==Mt)}(a)&&!1===g(a.image);let M=f(a.image,m,!1,r.maxTextureSize);M=B(a,M);const S=g(M)||o,b=s.convert(a.format,a.colorSpace);let E,T=s.convert(a.type),w=x(a.internalFormat,b,T,a.colorSpace,a.isVideoTexture);P(c,a,S);const A=a.mipmaps,R=o&&!0!==a.isVideoTexture&&w!==ne,C=void 0===d.__version||!0===h,L=y(a,M,S);if(a.isDepthTexture)w=t.DEPTH_COMPONENT,o?w=a.type===It?t.DEPTH_COMPONENT32F:a.type===Lt?t.DEPTH_COMPONENT24:a.type===Ot?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT16:a.type===It&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),a.format===Vt&&w===t.DEPTH_COMPONENT&&a.type!==Ct&&a.type!==Lt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),a.type=Lt,T=s.convert(a.type)),a.format===kt&&w===t.DEPTH_COMPONENT&&(w=t.DEPTH_STENCIL,a.type!==Ot&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),a.type=Ot,T=s.convert(a.type))),C&&(R?n.texStorage2D(t.TEXTURE_2D,1,w,M.width,M.height):n.texImage2D(t.TEXTURE_2D,0,w,M.width,M.height,0,b,T,null));else if(a.isDataTexture)if(A.length>0&&S){R&&C&&n.texStorage2D(t.TEXTURE_2D,L,w,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)E=A[e],R?n.texSubImage2D(t.TEXTURE_2D,e,0,0,E.width,E.height,b,T,E.data):n.texImage2D(t.TEXTURE_2D,e,w,E.width,E.height,0,b,T,E.data);a.generateMipmaps=!1;}else R?(C&&n.texStorage2D(t.TEXTURE_2D,L,w,M.width,M.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,b,T,M.data)):n.texImage2D(t.TEXTURE_2D,0,w,M.width,M.height,0,b,T,M.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){R&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,w,A[0].width,A[0].height,M.depth);for(let e=0,i=A.length;e<i;e++)E=A[e],a.format!==Bt?null!==b?R?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,e,0,0,0,E.width,E.height,M.depth,b,E.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,e,w,E.width,E.height,M.depth,0,E.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?n.texSubImage3D(t.TEXTURE_2D_ARRAY,e,0,0,0,E.width,E.height,M.depth,b,T,E.data):n.texImage3D(t.TEXTURE_2D_ARRAY,e,w,E.width,E.height,M.depth,0,b,T,E.data);}else {R&&C&&n.texStorage2D(t.TEXTURE_2D,L,w,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)E=A[e],a.format!==Bt?null!==b?R?n.compressedTexSubImage2D(t.TEXTURE_2D,e,0,0,E.width,E.height,b,E.data):n.compressedTexImage2D(t.TEXTURE_2D,e,w,E.width,E.height,0,E.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?n.texSubImage2D(t.TEXTURE_2D,e,0,0,E.width,E.height,b,T,E.data):n.texImage2D(t.TEXTURE_2D,e,w,E.width,E.height,0,b,T,E.data);}else if(a.isDataArrayTexture)R?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,L,w,M.width,M.height,M.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,b,T,M.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,w,M.width,M.height,M.depth,0,b,T,M.data);else if(a.isData3DTexture)R?(C&&n.texStorage3D(t.TEXTURE_3D,L,w,M.width,M.height,M.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,b,T,M.data)):n.texImage3D(t.TEXTURE_3D,0,w,M.width,M.height,M.depth,0,b,T,M.data);else if(a.isFramebufferTexture){if(C)if(R)n.texStorage2D(t.TEXTURE_2D,L,w,M.width,M.height);else {let e=M.width,i=M.height;for(let r=0;r<L;r++)n.texImage2D(t.TEXTURE_2D,r,w,e,i,0,b,T,null),e>>=1,i>>=1;}}else if(A.length>0&&S){R&&C&&n.texStorage2D(t.TEXTURE_2D,L,w,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)E=A[e],R?n.texSubImage2D(t.TEXTURE_2D,e,0,0,b,T,E):n.texImage2D(t.TEXTURE_2D,e,w,b,T,E);a.generateMipmaps=!1;}else R?(C&&n.texStorage2D(t.TEXTURE_2D,L,w,M.width,M.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,b,T,M)):n.texImage2D(t.TEXTURE_2D,0,w,b,T,M);_(a,S)&&v(c),d.__version=u.version,a.onUpdate&&a.onUpdate(a);}e.__version=a.version;}function U(e,r,a,o,c,h){const u=s.convert(a.format,a.colorSpace),d=s.convert(a.type),p=x(a.internalFormat,u,d,a.colorSpace);if(!i.get(r).__hasExternalTextures){const e=Math.max(1,r.width>>h),i=Math.max(1,r.height>>h);c===t.TEXTURE_3D||c===t.TEXTURE_2D_ARRAY?n.texImage3D(c,h,p,e,i,r.depth,0,u,d,null):n.texImage2D(c,h,p,e,i,0,u,d,null);}n.bindFramebuffer(t.FRAMEBUFFER,e),F(r)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,o,c,i.get(a).__webglTexture,0,O(r)):(c===t.TEXTURE_2D||c>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,o,c,i.get(a).__webglTexture,h),n.bindFramebuffer(t.FRAMEBUFFER,null);}function N(e,n,i){if(t.bindRenderbuffer(t.RENDERBUFFER,e),n.depthBuffer&&!n.stencilBuffer){let r=!0===o?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(i||F(n)){const e=n.depthTexture;e&&e.isDepthTexture&&(e.type===It?r=t.DEPTH_COMPONENT32F:e.type===Lt&&(r=t.DEPTH_COMPONENT24));const i=O(n);F(n)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,i,r,n.width,n.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,i,r,n.width,n.height);}else t.renderbufferStorage(t.RENDERBUFFER,r,n.width,n.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e);}else if(n.depthBuffer&&n.stencilBuffer){const r=O(n);i&&!1===F(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):F(n)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,e);}else {const e=!0===n.isWebGLMultipleRenderTargets?n.texture:[n.texture];for(let r=0;r<e.length;r++){const a=e[r],o=s.convert(a.format,a.colorSpace),c=s.convert(a.type),h=x(a.internalFormat,o,c,a.colorSpace),u=O(n);i&&!1===F(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,u,h,n.width,n.height):F(n)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,u,h,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,h,n.width,n.height);}}t.bindRenderbuffer(t.RENDERBUFFER,null);}function D(e){const r=i.get(e),s=!0===e.isWebGLCubeRenderTarget;if(e.depthTexture&&!r.__autoAllocateDepthBuffer){if(s)throw new Error("target.depthTexture not supported in Cube render targets");!function(e,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,e),!r.depthTexture||!r.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),w(r.depthTexture,0);const s=i.get(r.depthTexture).__webglTexture,a=O(r);if(r.depthTexture.format===Vt)F(r)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0);else {if(r.depthTexture.format!==kt)throw new Error("Unknown depthTexture format");F(r)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0);}}(r.__webglFramebuffer,e);}else if(s){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]=t.createRenderbuffer(),N(r.__webglDepthbuffer[i],e,!1);}else n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),N(r.__webglDepthbuffer,e,!1);n.bindFramebuffer(t.FRAMEBUFFER,null);}function O(t){return Math.min(r.maxSamples,t.samples)}function F(t){const n=i.get(t);return o&&t.samples>0&&!0===e.has("WEBGL_multisampled_render_to_texture")&&!1!==n.__useRenderToTexture}function B(t,n){const i=t.colorSpace,r=t.format,s=t.type;return !0===t.isCompressedTexture||!0===t.isVideoTexture||t.format===Fn||i!==Ye&&i!==je&&(mi.getTransfer(i)===$e?!1===o?!0===e.has("EXT_sRGB")&&r===Bt?(t.format=Fn,t.minFilter=Mt,t.generateMipmaps=!1):n=vi.sRGBToLinear(n):r===Bt&&s===wt||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",i)),n}this.allocateTextureUnit=function(){const t=T;return t>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+r.maxTextures),T+=1,t},this.resetTextureUnits=function(){T=0;},this.setTexture2D=w,this.setTexture2DArray=function(e,r){const s=i.get(e);e.version>0&&s.__version!==e.version?I(s,e,r):n.bindTexture(t.TEXTURE_2D_ARRAY,s.__webglTexture,t.TEXTURE0+r);},this.setTexture3D=function(e,r){const s=i.get(e);e.version>0&&s.__version!==e.version?I(s,e,r):n.bindTexture(t.TEXTURE_3D,s.__webglTexture,t.TEXTURE0+r);},this.setTextureCube=function(e,a){const l=i.get(e);e.version>0&&l.__version!==e.version?function(e,a,l){if(6!==a.image.length)return;const c=L(e,a),h=a.source;n.bindTexture(t.TEXTURE_CUBE_MAP,e.__webglTexture,t.TEXTURE0+l);const u=i.get(h);if(h.version!==u.__version||!0===c){n.activeTexture(t.TEXTURE0+l);const e=mi.getPrimaries(mi.workingColorSpace),i=a.colorSpace===je?null:mi.getPrimaries(a.colorSpace),d=a.colorSpace===je||e===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,a.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);const p=a.isCompressedTexture||a.image[0].isCompressedTexture,m=a.image[0]&&a.image[0].isDataTexture,M=[];for(let t=0;t<6;t++)M[t]=p||m?m?a.image[t].image:a.image[t]:f(a.image[t],!1,!0,r.maxCubemapSize),M[t]=B(a,M[t]);const S=M[0],b=g(S)||o,E=s.convert(a.format,a.colorSpace),T=s.convert(a.type),w=x(a.internalFormat,E,T,a.colorSpace),A=o&&!0!==a.isVideoTexture,R=void 0===u.__version||!0===c;let C,L=y(a,S,b);if(P(t.TEXTURE_CUBE_MAP,a,b),p){A&&R&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,w,S.width,S.height);for(let e=0;e<6;e++){C=M[e].mipmaps;for(let i=0;i<C.length;i++){const r=C[i];a.format!==Bt?null!==E?A?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,r.width,r.height,E,r.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,w,r.width,r.height,0,r.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,r.width,r.height,E,T,r.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,w,r.width,r.height,0,E,T,r.data);}}}else {C=a.mipmaps,A&&R&&(C.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,w,M[0].width,M[0].height));for(let e=0;e<6;e++)if(m){A?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,M[e].width,M[e].height,E,T,M[e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,w,M[e].width,M[e].height,0,E,T,M[e].data);for(let i=0;i<C.length;i++){const r=C[i].image[e].image;A?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,r.width,r.height,E,T,r.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,w,r.width,r.height,0,E,T,r.data);}}else {A?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,E,T,M[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,w,E,T,M[e]);for(let i=0;i<C.length;i++){const r=C[i];A?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,E,T,r.image[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,w,E,T,r.image[e]);}}}_(a,b)&&v(t.TEXTURE_CUBE_MAP),u.__version=h.version,a.onUpdate&&a.onUpdate(a);}e.__version=a.version;}(l,e,a):n.bindTexture(t.TEXTURE_CUBE_MAP,l.__webglTexture,t.TEXTURE0+a);},this.rebindTextures=function(e,n,r){const s=i.get(e);void 0!==n&&U(s.__webglFramebuffer,e,e.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),void 0!==r&&D(e);},this.setupRenderTarget=function(e){const l=e.texture,c=i.get(e),h=i.get(l);e.addEventListener("dispose",b),!0!==e.isWebGLMultipleRenderTargets&&(void 0===h.__webglTexture&&(h.__webglTexture=t.createTexture()),h.__version=l.version,a.memory.textures++);const u=!0===e.isWebGLCubeRenderTarget,d=!0===e.isWebGLMultipleRenderTargets,p=g(e)||o;if(u){c.__webglFramebuffer=[];for(let e=0;e<6;e++)if(o&&l.mipmaps&&l.mipmaps.length>0){c.__webglFramebuffer[e]=[];for(let n=0;n<l.mipmaps.length;n++)c.__webglFramebuffer[e][n]=t.createFramebuffer();}else c.__webglFramebuffer[e]=t.createFramebuffer();}else {if(o&&l.mipmaps&&l.mipmaps.length>0){c.__webglFramebuffer=[];for(let e=0;e<l.mipmaps.length;e++)c.__webglFramebuffer[e]=t.createFramebuffer();}else c.__webglFramebuffer=t.createFramebuffer();if(d)if(r.drawBuffers){const n=e.texture;for(let e=0,r=n.length;e<r;e++){const r=i.get(n[e]);void 0===r.__webglTexture&&(r.__webglTexture=t.createTexture(),a.memory.textures++);}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&e.samples>0&&!1===F(e)){const i=d?l:[l];c.__webglMultisampledFramebuffer=t.createFramebuffer(),c.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,c.__webglMultisampledFramebuffer);for(let n=0;n<i.length;n++){const r=i[n];c.__webglColorRenderbuffer[n]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,c.__webglColorRenderbuffer[n]);const a=s.convert(r.format,r.colorSpace),o=s.convert(r.type),l=x(r.internalFormat,a,o,r.colorSpace,!0===e.isXRRenderTarget),h=O(e);t.renderbufferStorageMultisample(t.RENDERBUFFER,h,l,e.width,e.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.RENDERBUFFER,c.__webglColorRenderbuffer[n]);}t.bindRenderbuffer(t.RENDERBUFFER,null),e.depthBuffer&&(c.__webglDepthRenderbuffer=t.createRenderbuffer(),N(c.__webglDepthRenderbuffer,e,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null);}}if(u){n.bindTexture(t.TEXTURE_CUBE_MAP,h.__webglTexture),P(t.TEXTURE_CUBE_MAP,l,p);for(let n=0;n<6;n++)if(o&&l.mipmaps&&l.mipmaps.length>0)for(let i=0;i<l.mipmaps.length;i++)U(c.__webglFramebuffer[n][i],e,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+n,i);else U(c.__webglFramebuffer[n],e,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(l,p)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture();}else if(d){const r=e.texture;for(let s=0,a=r.length;s<a;s++){const a=r[s],o=i.get(a);n.bindTexture(t.TEXTURE_2D,o.__webglTexture),P(t.TEXTURE_2D,a,p),U(c.__webglFramebuffer,e,a,t.COLOR_ATTACHMENT0+s,t.TEXTURE_2D,0),_(a,p)&&v(t.TEXTURE_2D);}n.unbindTexture();}else {let i=t.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o?i=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(i,h.__webglTexture),P(i,l,p),o&&l.mipmaps&&l.mipmaps.length>0)for(let n=0;n<l.mipmaps.length;n++)U(c.__webglFramebuffer[n],e,l,t.COLOR_ATTACHMENT0,i,n);else U(c.__webglFramebuffer,e,l,t.COLOR_ATTACHMENT0,i,0);_(l,p)&&v(i),n.unbindTexture();}e.depthBuffer&&D(e);},this.updateRenderTargetMipmap=function(e){const r=g(e)||o,s=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture];for(let a=0,o=s.length;a<o;a++){const o=s[a];if(_(o,r)){const r=e.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,s=i.get(o).__webglTexture;n.bindTexture(r,s),v(r),n.unbindTexture();}}},this.updateMultisampleRenderTarget=function(e){if(o&&e.samples>0&&!1===F(e)){const r=e.isWebGLMultipleRenderTargets?e.texture:[e.texture],s=e.width,a=e.height;let o=t.COLOR_BUFFER_BIT;const l=[],h=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,u=i.get(e),d=!0===e.isWebGLMultipleRenderTargets;if(d)for(let e=0;e<r.length;e++)n.bindFramebuffer(t.FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<r.length;n++){l.push(t.COLOR_ATTACHMENT0+n),e.depthBuffer&&l.push(h);const p=void 0!==u.__ignoreDepthValues&&u.__ignoreDepthValues;if(!1===p&&(e.depthBuffer&&(o|=t.DEPTH_BUFFER_BIT),e.stencilBuffer&&(o|=t.STENCIL_BUFFER_BIT)),d&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,u.__webglColorRenderbuffer[n]),!0===p&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[h]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[h])),d){const e=i.get(r[n]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0);}t.blitFramebuffer(0,0,s,a,0,0,s,a,o,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,l);}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),d)for(let e=0;e<r.length;e++){n.bindFramebuffer(t.FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,u.__webglColorRenderbuffer[e]);const s=i.get(r[e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,s,0);}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer);}},this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=U,this.useMultisampledRTT=F;}function kl(t,e,n){const i=n.isWebGL2;return {convert:function(n,r=""){let s;const a=mi.getTransfer(r);if(n===wt)return t.UNSIGNED_BYTE;if(n===Nt)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Dt)return t.UNSIGNED_SHORT_5_5_5_1;if(1010===n)return t.BYTE;if(1011===n)return t.SHORT;if(n===Ct)return t.UNSIGNED_SHORT;if(n===Pt)return t.INT;if(n===Lt)return t.UNSIGNED_INT;if(n===It)return t.FLOAT;if(n===Ut)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),null!==s?s.HALF_FLOAT_OES:null);if(1021===n)return t.ALPHA;if(n===Bt)return t.RGBA;if(1024===n)return t.LUMINANCE;if(1025===n)return t.LUMINANCE_ALPHA;if(n===Vt)return t.DEPTH_COMPONENT;if(n===kt)return t.DEPTH_STENCIL;if(n===Fn)return s=e.get("EXT_sRGB"),null!==s?s.SRGB_ALPHA_EXT:null;if(1028===n)return t.RED;if(n===Wt)return t.RED_INTEGER;if(1030===n)return t.RG;if(n===jt)return t.RG_INTEGER;if(n===qt)return t.RGBA_INTEGER;if(n===Yt||n===Zt||n===Jt||n===Kt)if(a===$e){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),null===s)return null;if(n===Yt)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zt)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jt)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kt)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else {if(s=e.get("WEBGL_compressed_texture_s3tc"),null===s)return null;if(n===Yt)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zt)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jt)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kt)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===$t||n===Qt||n===te||n===ee){if(s=e.get("WEBGL_compressed_texture_pvrtc"),null===s)return null;if(n===$t)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qt)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===te)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ee)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===ne)return s=e.get("WEBGL_compressed_texture_etc1"),null!==s?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ie||n===re){if(s=e.get("WEBGL_compressed_texture_etc"),null===s)return null;if(n===ie)return a===$e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===re)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(n===se||n===ae||n===oe||n===le||n===ce||n===he||n===ue||n===de||n===pe||n===me||n===fe||n===ge||n===_e||n===ve){if(s=e.get("WEBGL_compressed_texture_astc"),null===s)return null;if(n===se)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ae)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oe)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===le)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ce)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===he)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ue)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===de)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pe)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===me)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fe)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ge)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_e)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ve)return a===$e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===xe||n===ye||n===Me){if(s=e.get("EXT_texture_compression_bptc"),null===s)return null;if(n===xe)return a===$e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ye)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Me)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(36283===n||n===be||n===Ee||n===Te){if(s=e.get("EXT_texture_compression_rgtc"),null===s)return null;if(n===xe)return s.COMPRESSED_RED_RGTC1_EXT;if(n===be)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ee)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Te)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Ot?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),null!==s?s.UNSIGNED_INT_24_8_WEBGL:null):void 0!==t[n]?t[n]:null}}}class Gl extends ta{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t;}}class Wl extends Nr{constructor(){super(),this.isGroup=!0,this.type="Group";}}const Xl={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null;}getHandSpace(){return null===this._hand&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Ui,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Ui),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Ui,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Ui),this._grip}dispatchEvent(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n);}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&"visible-blurred"!==e.session.visibilityState){if(l&&t.hand){s=!0;for(const i of t.hand.values()){const t=e.getJointPose(i,n),r=this._getHandJoint(l,i);null!==t&&(r.matrix.fromArray(t.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=t.radius),r.visible=null!==t;}const i=l.joints["index-finger-tip"],r=l.joints["thumb-tip"],a=i.position.distanceTo(r.position),o=.02,c=.005;l.inputState.pinching&&a>o+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&a<=o-c&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}));}else null!==o&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),null!==r&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));null!==a&&(i=e.getPose(t.targetRaySpace,n),null===i&&null!==r&&(i=r),null!==i&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xl)));}return null!==a&&(a.visible=null!==i),null!==o&&(o.visible=null!==r),null!==l&&(l.visible=null!==s),this}_getHandJoint(t,e){if(void 0===t.joints[e.jointName]){const n=new Wl;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n);}return t.joints[e.jointName]}}class ql extends Hn{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,p=null;const m=e.getContextAttributes();let f=null,g=null;const _=[],v=[],x=new ti;let y=null;const M=new ta;M.layers.enable(1),M.viewport=new Ei;const S=new ta;S.layers.enable(2),S.viewport=new Ei;const b=[M,S],E=new Gl;E.layers.enable(1),E.layers.enable(2);let T=null,w=null;function A(t){const e=v.indexOf(t.inputSource);if(-1===e)return;const n=_[e];void 0!==n&&(n.update(t.inputSource,t.frame,l||s),n.dispatchEvent({type:t.type,data:t.inputSource}));}function R(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",C);for(let t=0;t<_.length;t++){const e=v[t];null!==e&&(v[t]=null,_[t].disconnect(e));}T=null,w=null,t.setRenderTarget(f),d=null,u=null,h=null,i=null,g=null,N.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"});}function C(t){for(let e=0;e<t.removed.length;e++){const n=t.removed[e],i=v.indexOf(n);i>=0&&(v[i]=null,_[i].disconnect(n));}for(let e=0;e<t.added.length;e++){const n=t.added[e];let i=v.indexOf(n);if(-1===i){for(let t=0;t<_.length;t++){if(t>=v.length){v.push(n),i=t;break}if(null===v[t]){v[t]=n,i=t;break}}if(-1===i)break}const r=_[i];r&&r.connect(n);}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(t){let e=_[t];return void 0===e&&(e=new jl,_[t]=e),e.getTargetRaySpace()},this.getControllerGrip=function(t){let e=_[t];return void 0===e&&(e=new jl,_[t]=e),e.getGripSpace()},this.getHand=function(t){let e=_[t];return void 0===e&&(e=new jl,_[t]=e),e.getHandSpace()},this.setFramebufferScaleFactor=function(t){r=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");},this.setReferenceSpaceType=function(t){a=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(t){l=t;},this.getBaseLayer=function(){return null!==u?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(c){if(i=c,null!==i){if(f=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",R),i.addEventListener("inputsourceschange",C),!0!==m.xrCompatible&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),void 0===i.renderState.layers||!1===t.capabilities.isWebGL2){const n={antialias:void 0!==i.renderState.layers||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,n),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new wi(d.framebufferWidth,d.framebufferHeight,{format:Bt,type:wt,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil});}else {let n=null,s=null,a=null;m.depth&&(a=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,n=m.stencil?kt:Vt,s=m.stencil?Ot:Lt);const o={colorFormat:e.RGBA8,depthFormat:a,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(o),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),g=new wi(u.textureWidth,u.textureHeight,{format:Bt,type:wt,depthTexture:new Ka(u.textureWidth,u.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});t.properties.get(g).__ignoreDepthValues=u.ignoreDepthValues;}g.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"});}},this.getEnvironmentBlendMode=function(){if(null!==i)return i.environmentBlendMode};const P=new Ui,L=new Ui;function I(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.copy(t.matrixWorld).invert();}this.updateCamera=function(t){if(null===i)return;E.near=S.near=M.near=t.near,E.far=S.far=M.far=t.far,T===E.near&&w===E.far||(i.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,w=E.far);const e=t.parent,n=E.cameras;I(E,e);for(let t=0;t<n.length;t++)I(n[t],e);2===n.length?function(t,e,n){P.setFromMatrixPosition(e.matrixWorld),L.setFromMatrixPosition(n.matrixWorld);const i=P.distanceTo(L),r=e.projectionMatrix.elements,s=n.projectionMatrix.elements,a=r[14]/(r[10]-1),o=r[14]/(r[10]+1),l=(r[9]+1)/r[5],c=(r[9]-1)/r[5],h=(r[8]-1)/r[0],u=(s[8]+1)/s[0],d=a*h,p=a*u,m=i/(-h+u),f=m*-h;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(f),t.translateZ(m),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.copy(t.matrixWorld).invert();const g=a+m,_=o+m,v=d-f,x=p+(i-f),y=l*o/_*g,M=c*o/_*g;t.projectionMatrix.makePerspective(v,x,y,M,g,_),t.projectionMatrixInverse.copy(t.projectionMatrix).invert();}(E,M,S):E.projectionMatrix.copy(M.projectionMatrix),function(t,e,n){null===n?t.matrix.copy(e.matrixWorld):(t.matrix.copy(n.matrixWorld),t.matrix.invert(),t.matrix.multiply(e.matrixWorld));t.matrix.decompose(t.position,t.quaternion,t.scale),t.updateMatrixWorld(!0),t.projectionMatrix.copy(e.projectionMatrix),t.projectionMatrixInverse.copy(e.projectionMatrixInverse),t.isPerspectiveCamera&&(t.fov=2*Wn*Math.atan(1/t.projectionMatrix.elements[5]),t.zoom=1);}(t,E,e);},this.getCamera=function(){return E},this.getFoveation=function(){if(null!==u||null!==d)return o},this.setFoveation=function(t){o=t,null!==u&&(u.fixedFoveation=t),null!==d&&void 0!==d.fixedFoveation&&(d.fixedFoveation=t);};let U=null;const N=new da;N.setAnimationLoop((function(e,i){if(c=i.getViewerPose(l||s),p=i,null!==c){const e=c.views;null!==d&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let n=!1;e.length!==E.cameras.length&&(E.cameras.length=0,n=!0);for(let i=0;i<e.length;i++){const r=e[i];let s=null;if(null!==d)s=d.getViewport(r);else {const e=h.getViewSubImage(u,r);s=e.viewport,0===i&&(t.setRenderTargetTextures(g,e.colorTexture,u.ignoreDepthValues?void 0:e.depthStencilTexture),t.setRenderTarget(g));}let a=b[i];void 0===a&&(a=new ta,a.layers.enable(i),a.viewport=new Ei,b[i]=a),a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.projectionMatrix.fromArray(r.projectionMatrix),a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),a.viewport.set(s.x,s.y,s.width,s.height),0===i&&(E.matrix.copy(a.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),!0===n&&E.cameras.push(a);}}for(let t=0;t<_.length;t++){const e=v[t],n=_[t];null!==e&&void 0!==n&&n.update(e,i,l||s);}U&&U(e,i),i.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:i}),p=null;})),this.setAnimationLoop=function(t){U=t;},this.dispose=function(){};}}function Yl(t,e){function n(t,e){!0===t.matrixAutoUpdate&&t.updateMatrix(),e.value.copy(t.matrix);}function i(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,n(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,n(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,n(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===d&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,n(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===d&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,n(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,n(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);const s=e.get(r).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&!1===s.isRenderTargetTexture?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap){i.lightMap.value=r.lightMap;const e=!0===t._useLegacyLights?Math.PI:1;i.lightMapIntensity.value=r.lightMapIntensity*e,n(r.lightMap,i.lightMapTransform);}r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,i.aoMapTransform));}return {refreshFogUniforms:function(e,n){n.color.getRGB(e.fogColor.value,Js(t)),n.isFog?(e.fogNear.value=n.near,e.fogFar.value=n.far):n.isFogExp2&&(e.fogDensity.value=n.density);},refreshMaterialUniforms:function(t,r,s,a,o){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(t,r):r.isMeshToonMaterial?(i(t,r),function(t,e){e.gradientMap&&(t.gradientMap.value=e.gradientMap);}(t,r)):r.isMeshPhongMaterial?(i(t,r),function(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4);}(t,r)):r.isMeshStandardMaterial?(i(t,r),function(t,i){t.metalness.value=i.metalness,i.metalnessMap&&(t.metalnessMap.value=i.metalnessMap,n(i.metalnessMap,t.metalnessMapTransform));t.roughness.value=i.roughness,i.roughnessMap&&(t.roughnessMap.value=i.roughnessMap,n(i.roughnessMap,t.roughnessMapTransform));const r=e.get(i).envMap;r&&(t.envMapIntensity.value=i.envMapIntensity);}(t,r),r.isMeshPhysicalMaterial&&function(t,e,i){t.ior.value=e.ior,e.sheen>0&&(t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),t.sheenRoughness.value=e.sheenRoughness,e.sheenColorMap&&(t.sheenColorMap.value=e.sheenColorMap,n(e.sheenColorMap,t.sheenColorMapTransform)),e.sheenRoughnessMap&&(t.sheenRoughnessMap.value=e.sheenRoughnessMap,n(e.sheenRoughnessMap,t.sheenRoughnessMapTransform)));e.clearcoat>0&&(t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.clearcoatMap&&(t.clearcoatMap.value=e.clearcoatMap,n(e.clearcoatMap,t.clearcoatMapTransform)),e.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap,n(e.clearcoatRoughnessMap,t.clearcoatRoughnessMapTransform)),e.clearcoatNormalMap&&(t.clearcoatNormalMap.value=e.clearcoatNormalMap,n(e.clearcoatNormalMap,t.clearcoatNormalMapTransform),t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),e.side===d&&t.clearcoatNormalScale.value.negate()));e.iridescence>0&&(t.iridescence.value=e.iridescence,t.iridescenceIOR.value=e.iridescenceIOR,t.iridescenceThicknessMinimum.value=e.iridescenceThicknessRange[0],t.iridescenceThicknessMaximum.value=e.iridescenceThicknessRange[1],e.iridescenceMap&&(t.iridescenceMap.value=e.iridescenceMap,n(e.iridescenceMap,t.iridescenceMapTransform)),e.iridescenceThicknessMap&&(t.iridescenceThicknessMap.value=e.iridescenceThicknessMap,n(e.iridescenceThicknessMap,t.iridescenceThicknessMapTransform)));e.transmission>0&&(t.transmission.value=e.transmission,t.transmissionSamplerMap.value=i.texture,t.transmissionSamplerSize.value.set(i.width,i.height),e.transmissionMap&&(t.transmissionMap.value=e.transmissionMap,n(e.transmissionMap,t.transmissionMapTransform)),t.thickness.value=e.thickness,e.thicknessMap&&(t.thicknessMap.value=e.thicknessMap,n(e.thicknessMap,t.thicknessMapTransform)),t.attenuationDistance.value=e.attenuationDistance,t.attenuationColor.value.copy(e.attenuationColor));e.anisotropy>0&&(t.anisotropyVector.value.set(e.anisotropy*Math.cos(e.anisotropyRotation),e.anisotropy*Math.sin(e.anisotropyRotation)),e.anisotropyMap&&(t.anisotropyMap.value=e.anisotropyMap,n(e.anisotropyMap,t.anisotropyMapTransform)));t.specularIntensity.value=e.specularIntensity,t.specularColor.value.copy(e.specularColor),e.specularColorMap&&(t.specularColorMap.value=e.specularColorMap,n(e.specularColorMap,t.specularColorMapTransform));e.specularIntensityMap&&(t.specularIntensityMap.value=e.specularIntensityMap,n(e.specularIntensityMap,t.specularIntensityMapTransform));}(t,r,o)):r.isMeshMatcapMaterial?(i(t,r),function(t,e){e.matcap&&(t.matcap.value=e.matcap);}(t,r)):r.isMeshDepthMaterial?i(t,r):r.isMeshDistanceMaterial?(i(t,r),function(t,n){const i=e.get(n).light;t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),t.nearDistance.value=i.shadow.camera.near,t.farDistance.value=i.shadow.camera.far;}(t,r)):r.isMeshNormalMaterial?i(t,r):r.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,e.map&&(t.map.value=e.map,n(e.map,t.mapTransform));}(t,r),r.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale;}(t,r)):r.isPointsMaterial?function(t,e,i,r){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*i,t.scale.value=.5*r,e.map&&(t.map.value=e.map,n(e.map,t.uvTransform));e.alphaMap&&(t.alphaMap.value=e.alphaMap,n(e.alphaMap,t.alphaMapTransform));e.alphaTest>0&&(t.alphaTest.value=e.alphaTest);}(t,r,s,a):r.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,e.map&&(t.map.value=e.map,n(e.map,t.mapTransform));e.alphaMap&&(t.alphaMap.value=e.alphaMap,n(e.alphaMap,t.alphaMapTransform));e.alphaTest>0&&(t.alphaTest.value=e.alphaTest);}(t,r):r.isShadowMaterial?(t.color.value.copy(r.color),t.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1);}}}function Zl(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(t,e,n,i){const r=t.value,s=e+"_"+n;if(void 0===i[s])return i[s]="number"==typeof r||"boolean"==typeof r?r:r.clone(),!0;{const t=i[s];if("number"==typeof r||"boolean"==typeof r){if(t!==r)return i[s]=r,!0}else if(!1===t.equals(r))return t.copy(r),!0}return !1}function c(t){const e={boundary:0,storage:0};return "number"==typeof t||"boolean"==typeof t?(e.boundary=4,e.storage=4):t.isVector2?(e.boundary=8,e.storage=8):t.isVector3||t.isColor?(e.boundary=16,e.storage=12):t.isVector4?(e.boundary=16,e.storage=16):t.isMatrix3?(e.boundary=48,e.storage=48):t.isMatrix4?(e.boundary=64,e.storage=64):t.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",t),e}function h(e){const n=e.target;n.removeEventListener("dispose",h);const i=a.indexOf(n.__bindingPointIndex);a.splice(i,1),t.deleteBuffer(r[n.id]),delete r[n.id],delete s[n.id];}return {bind:function(t,e){const n=e.program;i.uniformBlockBinding(t,n);},update:function(n,u){let d=r[n.id];void 0===d&&(!function(t){const e=t.uniforms;let n=0;const i=16;for(let t=0,r=e.length;t<r;t++){const r=Array.isArray(e[t])?e[t]:[e[t]];for(let t=0,e=r.length;t<e;t++){const e=r[t],s=Array.isArray(e.value)?e.value:[e.value];for(let t=0,r=s.length;t<r;t++){const r=c(s[t]),a=n%i;0!==a&&i-a<r.boundary&&(n+=i-a),e.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),e.__offset=n,n+=r.storage;}}}const r=n%i;r>0&&(n+=i-r);t.__size=n,t.__cache={};}(n),d=function(e){const n=function(){for(let t=0;t<o;t++)if(-1===a.indexOf(t))return a.push(t),t;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();e.__bindingPointIndex=n;const i=t.createBuffer(),r=e.__size,s=e.usage;return t.bindBuffer(t.UNIFORM_BUFFER,i),t.bufferData(t.UNIFORM_BUFFER,r,s),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,n,i),i}(n),r[n.id]=d,n.addEventListener("dispose",h));const p=u.program;i.updateUBOMapping(n,p);const m=e.render.frame;s[n.id]!==m&&(!function(e){const n=r[e.id],i=e.uniforms,s=e.__cache;t.bindBuffer(t.UNIFORM_BUFFER,n);for(let e=0,n=i.length;e<n;e++){const n=Array.isArray(i[e])?i[e]:[i[e]];for(let i=0,r=n.length;i<r;i++){const r=n[i];if(!0===l(r,e,i,s)){const e=r.__offset,n=Array.isArray(r.value)?r.value:[r.value];let i=0;for(let s=0;s<n.length;s++){const a=n[s],o=c(a);"number"==typeof a||"boolean"==typeof a?(r.__data[0]=a,t.bufferSubData(t.UNIFORM_BUFFER,e+i,r.__data)):a.isMatrix3?(r.__data[0]=a.elements[0],r.__data[1]=a.elements[1],r.__data[2]=a.elements[2],r.__data[3]=0,r.__data[4]=a.elements[3],r.__data[5]=a.elements[4],r.__data[6]=a.elements[5],r.__data[7]=0,r.__data[8]=a.elements[6],r.__data[9]=a.elements[7],r.__data[10]=a.elements[8],r.__data[11]=0):(a.toArray(r.__data,i),i+=o.storage/Float32Array.BYTES_PER_ELEMENT);}t.bufferSubData(t.UNIFORM_BUFFER,e,r.__data);}}}t.bindBuffer(t.UNIFORM_BUFFER,null);}(n),s[n.id]=m);},dispose:function(){for(const e in r)t.deleteBuffer(r[e]);a=[],r={},s={};}}}class Jl{constructor(e={}){const{canvas:n=oi(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;let m;this.isWebGLRenderer=!0,m=null!==i?i.getContextAttributes().alpha:a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,v=null;const x=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=$,this.toneMappingExposure=1;const M=this;let S=!1,b=0,E=0,T=null,w=-1,A=null;const R=new Ei,C=new Ei;let P=null;const L=new Kr(0);let I=0,U=n.width,N=n.height,D=1,O=null,F=null;const B=new Ei(0,0,U,N),z=new Ei(0,0,U,N);let H=!1;const V=new ua;let k=!1,G=!1,W=null;const X=new cr,j=new ti,q=new Ui,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return null===T?D:1}let J,K,Q,tt,et,nt,it,rt,st,at,ot,lt,ct,ht,ut,dt,pt,mt,ft,gt,_t,vt,xt,yt,Mt=i;function St(t,e){for(let i=0;i<t.length;i++){const r=t[i],s=n.getContext(r,e);if(null!==s)return s}return null}try{const e={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${t}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",Pt,!1),null===Mt){const t=["webgl2","webgl","experimental-webgl"];if(!0===M.isWebGL1Renderer&&t.shift(),Mt=St(t,e),null===Mt)throw St(t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}"undefined"!=typeof WebGLRenderingContext&&Mt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),void 0===Mt.getShaderPrecisionFormat&&(Mt.getShaderPrecisionFormat=function(){return {rangeMin:1,rangeMax:1,precision:1}});}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function bt(){J=new Ga(Mt),K=new Sa(Mt,J,e),J.init(K),vt=new kl(Mt,J,K),Q=new Hl(Mt,J,K),tt=new ja(Mt),et=new wl,nt=new Vl(Mt,J,Q,et,K,vt,tt),it=new Ea(M),rt=new ka(M),st=new pa(Mt,K),xt=new ya(Mt,J,st,K),at=new Wa(Mt,st,tt,xt),ot=new Ja(Mt,at,st,tt),ft=new Za(Mt,K,nt),dt=new ba(et),lt=new Tl(M,it,rt,J,K,xt,dt),ct=new Yl(M,et),ht=new Pl,ut=new Ol(J,K),mt=new xa(M,it,rt,Q,ot,m,l),pt=new zl(M,ot,K),yt=new Zl(Mt,tt,K,Q),gt=new Ma(Mt,J,tt,K),_t=new Xa(Mt,J,tt,K),tt.programs=lt.programs,M.capabilities=K,M.extensions=J,M.properties=et,M.renderLists=ht,M.shadowMap=pt,M.state=Q,M.info=tt;}bt();const Tt=new ql(M,Mt);function At(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0;}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const t=tt.autoReset,e=pt.enabled,n=pt.autoUpdate,i=pt.needsUpdate,r=pt.type;bt(),tt.autoReset=t,pt.enabled=e,pt.autoUpdate=n,pt.needsUpdate=i,pt.type=r;}function Pt(t){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",t.statusMessage);}function Ft(t){const e=t.target;e.removeEventListener("dispose",Ft),function(t){((function(t){const e=et.get(t).programs;void 0!==e&&(e.forEach((function(t){lt.releaseProgram(t);})),t.isShaderMaterial&&lt.releaseShaderCache(t));}))(t),et.remove(t);}(e);}function zt(t,e,n){!0===t.transparent&&2===t.side&&!1===t.forceSinglePass?(t.side=d,t.needsUpdate=!0,Kt(t,e,n),t.side=u,t.needsUpdate=!0,Kt(t,e,n),t.side=2):Kt(t,e,n);}this.xr=Tt,this.getContext=function(){return Mt},this.getContextAttributes=function(){return Mt.getContextAttributes()},this.forceContextLoss=function(){const t=J.get("WEBGL_lose_context");t&&t.loseContext();},this.forceContextRestore=function(){const t=J.get("WEBGL_lose_context");t&&t.restoreContext();},this.getPixelRatio=function(){return D},this.setPixelRatio=function(t){void 0!==t&&(D=t,this.setSize(U,N,!1));},this.getSize=function(t){return t.set(U,N)},this.setSize=function(t,e,i=!0){Tt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(U=t,N=e,n.width=Math.floor(t*D),n.height=Math.floor(e*D),!0===i&&(n.style.width=t+"px",n.style.height=e+"px"),this.setViewport(0,0,t,e));},this.getDrawingBufferSize=function(t){return t.set(U*D,N*D).floor()},this.setDrawingBufferSize=function(t,e,i){U=t,N=e,D=i,n.width=Math.floor(t*i),n.height=Math.floor(e*i),this.setViewport(0,0,t,e);},this.getCurrentViewport=function(t){return t.copy(R)},this.getViewport=function(t){return t.copy(B)},this.setViewport=function(t,e,n,i){t.isVector4?B.set(t.x,t.y,t.z,t.w):B.set(t,e,n,i),Q.viewport(R.copy(B).multiplyScalar(D).floor());},this.getScissor=function(t){return t.copy(z)},this.setScissor=function(t,e,n,i){t.isVector4?z.set(t.x,t.y,t.z,t.w):z.set(t,e,n,i),Q.scissor(C.copy(z).multiplyScalar(D).floor());},this.getScissorTest=function(){return H},this.setScissorTest=function(t){Q.setScissorTest(H=t);},this.setOpaqueSort=function(t){O=t;},this.setTransparentSort=function(t){F=t;},this.getClearColor=function(t){return t.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments);},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments);},this.clear=function(t=!0,e=!0,n=!0){let i=0;if(t){let t=!1;if(null!==T){const e=T.texture.format;t=e===qt||e===jt||e===Wt;}if(t){const t=T.texture.type,e=t===wt||t===Lt||t===Ct||t===Ot||t===Nt||t===Dt,n=mt.getClearColor(),i=mt.getClearAlpha(),r=n.r,s=n.g,a=n.b;e?(f[0]=r,f[1]=s,f[2]=a,f[3]=i,Mt.clearBufferuiv(Mt.COLOR,0,f)):(g[0]=r,g[1]=s,g[2]=a,g[3]=i,Mt.clearBufferiv(Mt.COLOR,0,g));}else i|=Mt.COLOR_BUFFER_BIT;}e&&(i|=Mt.DEPTH_BUFFER_BIT),n&&(i|=Mt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Mt.clear(i);},this.clearColor=function(){this.clear(!0,!1,!1);},this.clearDepth=function(){this.clear(!1,!0,!1);},this.clearStencil=function(){this.clear(!1,!1,!0);},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",Pt,!1),ht.dispose(),ut.dispose(),et.dispose(),it.dispose(),rt.dispose(),ot.dispose(),xt.dispose(),yt.dispose(),lt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Vt),Tt.removeEventListener("sessionend",kt),W&&(W.dispose(),W=null),Gt.stop();},this.renderBufferDirect=function(t,e,n,i,r,s){null===e&&(e=Y);const a=r.isMesh&&r.matrixWorld.determinant()<0,o=function(t,e,n,i,r){!0!==e.isScene&&(e=Y);nt.resetTextureUnits();const s=e.fog,a=i.isMeshStandardMaterial?e.environment:null,o=null===T?M.outputColorSpace:!0===T.isXRRenderTarget?T.texture.colorSpace:Ye,l=(i.isMeshStandardMaterial?rt:it).get(i.envMap||a),c=!0===i.vertexColors&&!!n.attributes.color&&4===n.attributes.color.itemSize,h=!!n.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),u=!!n.morphAttributes.position,d=!!n.morphAttributes.normal,p=!!n.morphAttributes.color;let m=$;i.toneMapped&&(null!==T&&!0!==T.isXRRenderTarget||(m=M.toneMapping));const f=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=void 0!==f?f.length:0,_=et.get(i),x=v.state.lights;if(!0===k&&(!0===G||t!==A)){const e=t===A&&i.id===w;dt.setState(i,t,e);}let y=!1;i.version===_.__version?_.needsLights&&_.lightsStateVersion!==x.state.version||_.outputColorSpace!==o||r.isBatchedMesh&&!1===_.batching?y=!0:r.isBatchedMesh||!0!==_.batching?r.isInstancedMesh&&!1===_.instancing?y=!0:r.isInstancedMesh||!0!==_.instancing?r.isSkinnedMesh&&!1===_.skinning?y=!0:r.isSkinnedMesh||!0!==_.skinning?r.isInstancedMesh&&!0===_.instancingColor&&null===r.instanceColor||r.isInstancedMesh&&!1===_.instancingColor&&null!==r.instanceColor||_.envMap!==l||!0===i.fog&&_.fog!==s?y=!0:void 0===_.numClippingPlanes||_.numClippingPlanes===dt.numPlanes&&_.numIntersection===dt.numIntersection?(_.vertexAlphas!==c||_.vertexTangents!==h||_.morphTargets!==u||_.morphNormals!==d||_.morphColors!==p||_.toneMapping!==m||!0===K.isWebGL2&&_.morphTargetsCount!==g)&&(y=!0):y=!0:y=!0:y=!0:y=!0:(y=!0,_.__version=i.version);let S=_.currentProgram;!0===y&&(S=Kt(i,e,r));let b=!1,E=!1,R=!1;const C=S.getUniforms(),P=_.uniforms;Q.useProgram(S.program)&&(b=!0,E=!0,R=!0);i.id!==w&&(w=i.id,E=!0);if(b||A!==t){C.setValue(Mt,"projectionMatrix",t.projectionMatrix),C.setValue(Mt,"viewMatrix",t.matrixWorldInverse);const e=C.map.cameraPosition;void 0!==e&&e.setValue(Mt,q.setFromMatrixPosition(t.matrixWorld)),K.logarithmicDepthBuffer&&C.setValue(Mt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&C.setValue(Mt,"isOrthographic",!0===t.isOrthographicCamera),A!==t&&(A=t,E=!0,R=!0);}if(r.isSkinnedMesh){C.setOptional(Mt,r,"bindMatrix"),C.setOptional(Mt,r,"bindMatrixInverse");const t=r.skeleton;t&&(K.floatVertexTextures?(null===t.boneTexture&&t.computeBoneTexture(),C.setValue(Mt,"boneTexture",t.boneTexture,nt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));}r.isBatchedMesh&&(C.setOptional(Mt,r,"batchingTexture"),C.setValue(Mt,"batchingTexture",r._matricesTexture,nt));const L=n.morphAttributes;(void 0!==L.position||void 0!==L.normal||void 0!==L.color&&!0===K.isWebGL2)&&ft.update(r,n,S);(E||_.receiveShadow!==r.receiveShadow)&&(_.receiveShadow=r.receiveShadow,C.setValue(Mt,"receiveShadow",r.receiveShadow));i.isMeshGouraudMaterial&&null!==i.envMap&&(P.envMap.value=l,P.flipEnvMap.value=l.isCubeTexture&&!1===l.isRenderTargetTexture?-1:1);E&&(C.setValue(Mt,"toneMappingExposure",M.toneMappingExposure),_.needsLights&&(U=R,(I=P).ambientLightColor.needsUpdate=U,I.lightProbe.needsUpdate=U,I.directionalLights.needsUpdate=U,I.directionalLightShadows.needsUpdate=U,I.pointLights.needsUpdate=U,I.pointLightShadows.needsUpdate=U,I.spotLights.needsUpdate=U,I.spotLightShadows.needsUpdate=U,I.rectAreaLights.needsUpdate=U,I.hemisphereLights.needsUpdate=U),s&&!0===i.fog&&ct.refreshFogUniforms(P,s),ct.refreshMaterialUniforms(P,i,D,N,W),il.upload(Mt,$t(_),P,nt));var I,U;i.isShaderMaterial&&!0===i.uniformsNeedUpdate&&(il.upload(Mt,$t(_),P,nt),i.uniformsNeedUpdate=!1);i.isSpriteMaterial&&C.setValue(Mt,"center",r.center);if(C.setValue(Mt,"modelViewMatrix",r.modelViewMatrix),C.setValue(Mt,"normalMatrix",r.normalMatrix),C.setValue(Mt,"modelMatrix",r.matrixWorld),i.isShaderMaterial||i.isRawShaderMaterial){const t=i.uniformsGroups;for(let e=0,n=t.length;e<n;e++)if(K.isWebGL2){const n=t[e];yt.update(n,S),yt.bind(n,S);}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");}return S}(t,e,n,i,r);Q.setMaterial(i,a);let l=n.index,c=1;if(!0===i.wireframe){if(l=at.getWireframeAttribute(n),void 0===l)return;c=2;}const h=n.drawRange,u=n.attributes.position;let d=h.start*c,p=(h.start+h.count)*c;null!==s&&(d=Math.max(d,s.start*c),p=Math.min(p,(s.start+s.count)*c)),null!==l?(d=Math.max(d,0),p=Math.min(p,l.count)):null!=u&&(d=Math.max(d,0),p=Math.min(p,u.count));const m=p-d;if(m<0||m===1/0)return;let f;xt.setup(r,i,o,n,l);let g=gt;if(null!==l&&(f=st.get(l),g=_t,g.setIndex(f)),r.isMesh)!0===i.wireframe?(Q.setLineWidth(i.wireframeLinewidth*Z()),g.setMode(Mt.LINES)):g.setMode(Mt.TRIANGLES);else if(r.isLine){let t=i.linewidth;void 0===t&&(t=1),Q.setLineWidth(t*Z()),r.isLineSegments?g.setMode(Mt.LINES):r.isLineLoop?g.setMode(Mt.LINE_LOOP):g.setMode(Mt.LINE_STRIP);}else r.isPoints?g.setMode(Mt.POINTS):r.isSprite&&g.setMode(Mt.TRIANGLES);if(r.isBatchedMesh)g.renderMultiDraw(r._multiDrawStarts,r._multiDrawCounts,r._multiDrawCount);else if(r.isInstancedMesh)g.renderInstances(d,m,r.count);else if(n.isInstancedBufferGeometry){const t=void 0!==n._maxInstanceCount?n._maxInstanceCount:1/0,e=Math.min(n.instanceCount,t);g.renderInstances(d,m,e);}else g.render(d,m);},this.compile=function(t,e,n=null){null===n&&(n=t),v=ut.get(n),v.init(),y.push(v),n.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(v.pushLight(t),t.castShadow&&v.pushShadow(t));})),t!==n&&t.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(v.pushLight(t),t.castShadow&&v.pushShadow(t));})),v.setupLights(M._useLegacyLights);const i=new Set;return t.traverse((function(t){const e=t.material;if(e)if(Array.isArray(e))for(let r=0;r<e.length;r++){const s=e[r];zt(s,n,t),i.add(s);}else zt(e,n,t),i.add(e);})),y.pop(),v=null,i},this.compileAsync=function(t,e,n=null){const i=this.compile(t,e,n);return new Promise((e=>{function n(){i.forEach((function(t){et.get(t).currentProgram.isReady()&&i.delete(t);})),0!==i.size?setTimeout(n,10):e(t);}null!==J.get("KHR_parallel_shader_compile")?n():setTimeout(n,10);}))};let Ht=null;function Vt(){Gt.stop();}function kt(){Gt.start();}const Gt=new da;function Xt(t,e,n,i){if(!1===t.visible)return;if(t.layers.test(e.layers))if(t.isGroup)n=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(e);else if(t.isLight)v.pushLight(t),t.castShadow&&v.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||V.intersectsSprite(t)){i&&q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(X);const e=ot.update(t),r=t.material;r.visible&&_.push(t,e,r,n,q.z,null);}}else if((t.isMesh||t.isLine||t.isPoints)&&(!t.frustumCulled||V.intersectsObject(t))){const e=ot.update(t),r=t.material;if(i&&(void 0!==t.boundingSphere?(null===t.boundingSphere&&t.computeBoundingSphere(),q.copy(t.boundingSphere.center)):(null===e.boundingSphere&&e.computeBoundingSphere(),q.copy(e.boundingSphere.center)),q.applyMatrix4(t.matrixWorld).applyMatrix4(X)),Array.isArray(r)){const i=e.groups;for(let s=0,a=i.length;s<a;s++){const a=i[s],o=r[a.materialIndex];o&&o.visible&&_.push(t,e,o,n,q.z,a);}}else r.visible&&_.push(t,e,r,n,q.z,null);}const r=t.children;for(let t=0,s=r.length;t<s;t++)Xt(r[t],e,n,i);}function Yt(t,e,n,i){const r=t.opaque,s=t.transmissive,a=t.transparent;v.setupLightsView(n),!0===k&&dt.setGlobalState(M.clippingPlanes,n),s.length>0&&function(t,e,n,i){const r=!0===n.isScene?n.overrideMaterial:null;if(null!==r)return;const s=K.isWebGL2;null===W&&(W=new wi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ut:wt,minFilter:Et,samples:s?4:0}));M.getDrawingBufferSize(j),s?W.setSize(j.x,j.y):W.setSize(Jn(j.x),Jn(j.y));const a=M.getRenderTarget();M.setRenderTarget(W),M.getClearColor(L),I=M.getClearAlpha(),I<1&&M.setClearColor(16777215,.5);M.clear();const o=M.toneMapping;M.toneMapping=$,Zt(t,n,i),nt.updateMultisampleRenderTarget(W),nt.updateRenderTargetMipmap(W);let l=!1;for(let t=0,r=e.length;t<r;t++){const r=e[t],s=r.object,a=r.geometry,o=r.material,c=r.group;if(2===o.side&&s.layers.test(i.layers)){const t=o.side;o.side=d,o.needsUpdate=!0,Jt(s,n,i,a,o,c),o.side=t,o.needsUpdate=!0,l=!0;}}!0===l&&(nt.updateMultisampleRenderTarget(W),nt.updateRenderTargetMipmap(W));M.setRenderTarget(a),M.setClearColor(L,I),M.toneMapping=o;}(r,s,e,n),i&&Q.viewport(R.copy(i)),r.length>0&&Zt(r,e,n),s.length>0&&Zt(s,e,n),a.length>0&&Zt(a,e,n),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1);}function Zt(t,e,n){const i=!0===e.isScene?e.overrideMaterial:null;for(let r=0,s=t.length;r<s;r++){const s=t[r],a=s.object,o=s.geometry,l=null===i?s.material:i,c=s.group;a.layers.test(n.layers)&&Jt(a,e,n,o,l,c);}}function Jt(t,e,n,i,r,s){t.onBeforeRender(M,e,n,i,r,s),t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),r.onBeforeRender(M,e,n,i,t,s),!0===r.transparent&&2===r.side&&!1===r.forceSinglePass?(r.side=d,r.needsUpdate=!0,M.renderBufferDirect(n,e,i,r,t,s),r.side=u,r.needsUpdate=!0,M.renderBufferDirect(n,e,i,r,t,s),r.side=2):M.renderBufferDirect(n,e,i,r,t,s),t.onAfterRender(M,e,n,i,r,s);}function Kt(t,e,n){!0!==e.isScene&&(e=Y);const i=et.get(t),r=v.state.lights,s=v.state.shadowsArray,a=r.state.version,o=lt.getParameters(t,r.state,s,e,n),l=lt.getProgramCacheKey(o);let c=i.programs;i.environment=t.isMeshStandardMaterial?e.environment:null,i.fog=e.fog,i.envMap=(t.isMeshStandardMaterial?rt:it).get(t.envMap||i.environment),void 0===c&&(t.addEventListener("dispose",Ft),c=new Map,i.programs=c);let h=c.get(l);if(void 0!==h){if(i.currentProgram===h&&i.lightsStateVersion===a)return Qt(t,o),h}else o.uniforms=lt.getUniforms(t),t.onBuild(n,o,M),t.onBeforeCompile(o,M),h=lt.acquireProgram(o,l),c.set(l,h),i.uniforms=o.uniforms;const u=i.uniforms;return (t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(u.clippingPlanes=dt.uniform),Qt(t,o),i.needsLights=function(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&!0===t.lights}(t),i.lightsStateVersion=a,i.needsLights&&(u.ambientLightColor.value=r.state.ambient,u.lightProbe.value=r.state.probe,u.directionalLights.value=r.state.directional,u.directionalLightShadows.value=r.state.directionalShadow,u.spotLights.value=r.state.spot,u.spotLightShadows.value=r.state.spotShadow,u.rectAreaLights.value=r.state.rectArea,u.ltc_1.value=r.state.rectAreaLTC1,u.ltc_2.value=r.state.rectAreaLTC2,u.pointLights.value=r.state.point,u.pointLightShadows.value=r.state.pointShadow,u.hemisphereLights.value=r.state.hemi,u.directionalShadowMap.value=r.state.directionalShadowMap,u.directionalShadowMatrix.value=r.state.directionalShadowMatrix,u.spotShadowMap.value=r.state.spotShadowMap,u.spotLightMatrix.value=r.state.spotLightMatrix,u.spotLightMap.value=r.state.spotLightMap,u.pointShadowMap.value=r.state.pointShadowMap,u.pointShadowMatrix.value=r.state.pointShadowMatrix),i.currentProgram=h,i.uniformsList=null,h}function $t(t){if(null===t.uniformsList){const e=t.currentProgram.getUniforms();t.uniformsList=il.seqWithValue(e.seq,t.uniforms);}return t.uniformsList}function Qt(t,e){const n=et.get(t);n.outputColorSpace=e.outputColorSpace,n.batching=e.batching,n.instancing=e.instancing,n.instancingColor=e.instancingColor,n.skinning=e.skinning,n.morphTargets=e.morphTargets,n.morphNormals=e.morphNormals,n.morphColors=e.morphColors,n.morphTargetsCount=e.morphTargetsCount,n.numClippingPlanes=e.numClippingPlanes,n.numIntersection=e.numClipIntersection,n.vertexAlphas=e.vertexAlphas,n.vertexTangents=e.vertexTangents,n.toneMapping=e.toneMapping;}Gt.setAnimationLoop((function(t){Ht&&Ht(t);})),"undefined"!=typeof self&&Gt.setContext(self),this.setAnimationLoop=function(t){Ht=t,Tt.setAnimationLoop(t),null===t?Gt.stop():Gt.start();},Tt.addEventListener("sessionstart",Vt),Tt.addEventListener("sessionend",kt),this.render=function(t,e){if(void 0!==e&&!0!==e.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===S)return;!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),null===e.parent&&!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),!0===Tt.enabled&&!0===Tt.isPresenting&&(!0===Tt.cameraAutoUpdate&&Tt.updateCamera(e),e=Tt.getCamera()),!0===t.isScene&&t.onBeforeRender(M,t,e,T),v=ut.get(t,y.length),v.init(),y.push(v),X.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),V.setFromProjectionMatrix(X),G=this.localClippingEnabled,k=dt.init(this.clippingPlanes,G),_=ht.get(t,x.length),_.init(),x.push(_),Xt(t,e,0,M.sortObjects),_.finish(),!0===M.sortObjects&&_.sort(O,F),this.info.render.frame++,!0===k&&dt.beginShadows();const n=v.state.shadowsArray;if(pt.render(n,t,e),!0===k&&dt.endShadows(),!0===this.info.autoReset&&this.info.reset(),mt.render(_,t),v.setupLights(M._useLegacyLights),e.isArrayCamera){const n=e.cameras;for(let e=0,i=n.length;e<i;e++){const i=n[e];Yt(_,t,i,i.viewport);}}else Yt(_,t,e);null!==T&&(nt.updateMultisampleRenderTarget(T),nt.updateRenderTargetMipmap(T)),!0===t.isScene&&t.onAfterRender(M,t,e),xt.resetDefaultState(),w=-1,A=null,y.pop(),v=y.length>0?y[y.length-1]:null,x.pop(),_=x.length>0?x[x.length-1]:null;},this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(t,e,n){et.get(t.texture).__webglTexture=e,et.get(t.depthTexture).__webglTexture=n;const i=et.get(t);i.__hasExternalTextures=!0,i.__hasExternalTextures&&(i.__autoAllocateDepthBuffer=void 0===n,i.__autoAllocateDepthBuffer||!0===J.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),i.__useRenderToTexture=!1));},this.setRenderTargetFramebuffer=function(t,e){const n=et.get(t);n.__webglFramebuffer=e,n.__useDefaultFramebuffer=void 0===e;},this.setRenderTarget=function(t,e=0,n=0){T=t,b=e,E=n;let i=!0,r=null,s=!1,a=!1;if(t){const o=et.get(t);void 0!==o.__useDefaultFramebuffer?(Q.bindFramebuffer(Mt.FRAMEBUFFER,null),i=!1):void 0===o.__webglFramebuffer?nt.setupRenderTarget(t):o.__hasExternalTextures&&nt.rebindTextures(t,et.get(t.texture).__webglTexture,et.get(t.depthTexture).__webglTexture);const l=t.texture;(l.isData3DTexture||l.isDataArrayTexture||l.isCompressedArrayTexture)&&(a=!0);const c=et.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(r=Array.isArray(c[e])?c[e][n]:c[e],s=!0):r=K.isWebGL2&&t.samples>0&&!1===nt.useMultisampledRTT(t)?et.get(t).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,R.copy(t.viewport),C.copy(t.scissor),P=t.scissorTest;}else R.copy(B).multiplyScalar(D).floor(),C.copy(z).multiplyScalar(D).floor(),P=H;if(Q.bindFramebuffer(Mt.FRAMEBUFFER,r)&&K.drawBuffers&&i&&Q.drawBuffers(t,r),Q.viewport(R),Q.scissor(C),Q.setScissorTest(P),s){const i=et.get(t.texture);Mt.framebufferTexture2D(Mt.FRAMEBUFFER,Mt.COLOR_ATTACHMENT0,Mt.TEXTURE_CUBE_MAP_POSITIVE_X+e,i.__webglTexture,n);}else if(a){const i=et.get(t.texture),r=e||0;Mt.framebufferTextureLayer(Mt.FRAMEBUFFER,Mt.COLOR_ATTACHMENT0,i.__webglTexture,n||0,r);}w=-1;},this.readRenderTargetPixels=function(t,e,n,i,r,s,a){if(!t||!t.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let o=et.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&void 0!==a&&(o=o[a]),o){Q.bindFramebuffer(Mt.FRAMEBUFFER,o);try{const a=t.texture,o=a.format,l=a.type;if(o!==Bt&&vt.convert(o)!==Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const c=l===Ut&&(J.has("EXT_color_buffer_half_float")||K.isWebGL2&&J.has("EXT_color_buffer_float"));if(!(l===wt||vt.convert(l)===Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_TYPE)||l===It&&(K.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float"))||c))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");e>=0&&e<=t.width-i&&n>=0&&n<=t.height-r&&Mt.readPixels(e,n,i,r,vt.convert(o),vt.convert(l),s);}finally{const t=null!==T?et.get(T).__webglFramebuffer:null;Q.bindFramebuffer(Mt.FRAMEBUFFER,t);}}},this.copyFramebufferToTexture=function(t,e,n=0){const i=Math.pow(2,-n),r=Math.floor(e.image.width*i),s=Math.floor(e.image.height*i);nt.setTexture2D(e,0),Mt.copyTexSubImage2D(Mt.TEXTURE_2D,n,0,0,t.x,t.y,r,s),Q.unbindTexture();},this.copyTextureToTexture=function(t,e,n,i=0){const r=e.image.width,s=e.image.height,a=vt.convert(n.format),o=vt.convert(n.type);nt.setTexture2D(n,0),Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL,n.flipY),Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),Mt.pixelStorei(Mt.UNPACK_ALIGNMENT,n.unpackAlignment),e.isDataTexture?Mt.texSubImage2D(Mt.TEXTURE_2D,i,t.x,t.y,r,s,a,o,e.image.data):e.isCompressedTexture?Mt.compressedTexSubImage2D(Mt.TEXTURE_2D,i,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,a,e.mipmaps[0].data):Mt.texSubImage2D(Mt.TEXTURE_2D,i,t.x,t.y,a,o,e.image),0===i&&n.generateMipmaps&&Mt.generateMipmap(Mt.TEXTURE_2D),Q.unbindTexture();},this.copyTextureToTexture3D=function(t,e,n,i,r=0){if(M.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const s=t.max.x-t.min.x+1,a=t.max.y-t.min.y+1,o=t.max.z-t.min.z+1,l=vt.convert(i.format),c=vt.convert(i.type);let h;if(i.isData3DTexture)nt.setTexture3D(i,0),h=Mt.TEXTURE_3D;else {if(!i.isDataArrayTexture&&!i.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");nt.setTexture2DArray(i,0),h=Mt.TEXTURE_2D_ARRAY;}Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL,i.flipY),Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),Mt.pixelStorei(Mt.UNPACK_ALIGNMENT,i.unpackAlignment);const u=Mt.getParameter(Mt.UNPACK_ROW_LENGTH),d=Mt.getParameter(Mt.UNPACK_IMAGE_HEIGHT),p=Mt.getParameter(Mt.UNPACK_SKIP_PIXELS),m=Mt.getParameter(Mt.UNPACK_SKIP_ROWS),f=Mt.getParameter(Mt.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[r]:n.image;Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH,g.width),Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT,g.height),Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS,t.min.x),Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS,t.min.y),Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES,t.min.z),n.isDataTexture||n.isData3DTexture?Mt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,g.data):n.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Mt.compressedTexSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,g.data)):Mt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,g),Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH,u),Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT,d),Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS,p),Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS,m),Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES,f),0===r&&i.generateMipmaps&&Mt.generateMipmap(h),Q.unbindTexture();},this.initTexture=function(t){t.isCubeTexture?nt.setTextureCube(t,0):t.isData3DTexture?nt.setTexture3D(t,0):t.isDataArrayTexture||t.isCompressedArrayTexture?nt.setTexture2DArray(t,0):nt.setTexture2D(t,0),Q.unbindTexture();},this.resetState=function(){b=0,E=0,T=null,Q.reset(),xt.reset();},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ze?"display-p3":"srgb",e.unpackColorSpace=mi.workingColorSpace===Je?"display-p3":"srgb";}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Ve:He}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ve?qe:Ye;}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t;}}class Kl extends Jl{}Kl.prototype.isWebGL1Renderer=!0;class $l{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kr(t),this.density=e;}clone(){return new $l(this.color,this.density)}toJSON(){return {type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ql{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kr(t),this.near=e,this.far=n;}clone(){return new Ql(this.color,this.near,this.far)}toJSON(){return {type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tc extends Nr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return null!==this.fog&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ec{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=wn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xn();}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++;}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e});}clearUpdateRanges(){this.updateRanges.length=0;}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Xn()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Xn()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nc=new Ui;class ic{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i;}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t;}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nc.fromBufferAttribute(this,e),nc.applyMatrix4(t),this.setXYZ(e,nc.x,nc.y,nc.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nc.fromBufferAttribute(this,e),nc.applyNormalMatrix(t),this.setXYZ(e,nc.x,nc.y,nc.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nc.fromBufferAttribute(this,e),nc.transformDirection(t),this.setXYZ(e,nc.x,nc.y,nc.z);return this}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array),r=$n(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e]);}return new cs(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ic(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e]);}return {itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rc extends ts{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kr(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let sc;const ac=new Ui,oc=new Ui,lc=new Ui,cc=new ti,hc=new ti,uc=new cr,dc=new Ui,pc=new Ui,mc=new Ui,fc=new ti,gc=new ti,_c=new ti;class vc extends Nr{constructor(t=new rc){if(super(),this.isSprite=!0,this.type="Sprite",void 0===sc){sc=new As;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new ec(t,5);sc.setIndex([0,1,2,0,2,3]),sc.setAttribute("position",new ic(e,3,0,!1)),sc.setAttribute("uv",new ic(e,2,3,!1));}this.geometry=sc,this.material=t,this.center=new ti(.5,.5);}raycast(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oc.setFromMatrixScale(this.matrixWorld),uc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lc.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&oc.multiplyScalar(-lc.z);const n=this.material.rotation;let i,r;0!==n&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;xc(dc.set(-.5,-.5,0),lc,s,oc,i,r),xc(pc.set(.5,-.5,0),lc,s,oc,i,r),xc(mc.set(.5,.5,0),lc,s,oc,i,r),fc.set(0,0),gc.set(1,0),_c.set(1,1);let a=t.ray.intersectTriangle(dc,pc,mc,!1,ac);if(null===a&&(xc(pc.set(-.5,.5,0),lc,s,oc,i,r),gc.set(0,1),a=t.ray.intersectTriangle(dc,mc,pc,!1,ac),null===a))return;const o=t.ray.origin.distanceTo(ac);o<t.near||o>t.far||e.push({distance:o,point:ac.clone(),uv:jr.getInterpolation(ac,dc,pc,mc,fc,gc,_c,new ti),face:null,object:this});}copy(t,e){return super.copy(t,e),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}}function xc(t,e,n,i,r,s){cc.subVectors(t,n).addScalar(.5).multiply(i),void 0!==r?(hc.x=s*cc.x-r*cc.y,hc.y=r*cc.x+s*cc.y):hc.copy(cc),t.copy(e),t.x+=hc.x,t.y+=hc.y,t.applyMatrix4(uc);}const yc=new Ui,Mc=new Ui;class Sc extends Nr{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0;}copy(t){super.copy(t,!1);const e=t.levels;for(let t=0,n=e.length;t<n;t++){const n=e[t];this.addLevel(n.object.clone(),n.distance,n.hysteresis);}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let i=e[n].distance;if(e[n].object.visible&&(i-=i*e[n].hysteresis),t<i)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){yc.setFromMatrixPosition(this.matrixWorld);const n=t.ray.origin.distanceTo(yc);this.getObjectForDistance(n).raycast(t,e);}}update(t){const e=this.levels;if(e.length>1){yc.setFromMatrixPosition(t.matrixWorld),Mc.setFromMatrixPosition(this.matrixWorld);const n=yc.distanceTo(Mc)/t.zoom;let i,r;for(e[0].object.visible=!0,i=1,r=e.length;i<r;i++){let t=e[i].distance;if(e[i].object.visible&&(t-=t*e[i].hysteresis),!(n>=t))break;e[i-1].object.visible=!1,e[i].object.visible=!0;}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1;}}toJSON(t){const e=super.toJSON(t);!1===this.autoUpdate&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let t=0,i=n.length;t<i;t++){const i=n[t];e.object.levels.push({object:i.object.uuid,distance:i.distance,hysteresis:i.hysteresis});}return e}}const bc=new Ui,Ec=new Ei,Tc=new Ei,wc=new Ui,Ac=new cr,Rc=new Ui,Cc=new tr,Pc=new cr,Lc=new lr;class Ic extends Xs{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=st,this.bindMatrix=new cr,this.bindMatrixInverse=new cr,this.boundingBox=null,this.boundingSphere=null;}computeBoundingBox(){const t=this.geometry;null===this.boundingBox&&(this.boundingBox=new Oi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,Rc),this.boundingBox.expandByPoint(Rc);}computeBoundingSphere(){const t=this.geometry;null===this.boundingSphere&&(this.boundingSphere=new tr),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,Rc),this.boundingSphere.expandByPoint(Rc);}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;void 0!==n&&(null===this.boundingSphere&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(i),!1!==t.ray.intersectsSphere(Cc)&&(Pc.copy(i).invert(),Lc.copy(t.ray).applyMatrix4(Pc),null!==this.boundingBox&&!1===Lc.intersectsBox(this.boundingBox)||this._computeIntersections(t,e,Lc)));}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert();}pose(){this.skeleton.pose();}normalizeSkinWeights(){const t=new Ei,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const i=1/t.manhattanLength();i!==1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w);}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===st?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===at?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode);}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Ec.fromBufferAttribute(i.attributes.skinIndex,t),Tc.fromBufferAttribute(i.attributes.skinWeight,t),bc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let t=0;t<4;t++){const i=Tc.getComponent(t);if(0!==i){const r=Ec.getComponent(t);Ac.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(wc.copy(bc).applyMatrix4(Ac),i);}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class Uc extends Nr{constructor(){super(),this.isBone=!0,this.type="Bone";}}class Nc extends bi{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,c=1003,h,u){super(null,s,a,o,l,c,i,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1;}}const Dc=new cr,Oc=new cr;class Fc{constructor(t=[],e=[]){this.uuid=Xn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init();}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),0===e.length)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++)this.boneInverses.push(new cr);}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const e=new cr;this.bones[t]&&e.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(e);}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&e.matrixWorld.copy(this.boneInverses[t]).invert();}for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale));}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let i=0,r=t.length;i<r;i++){const r=t[i]?t[i].matrixWorld:Oc;Dc.multiplyMatrices(r,e[i]),Dc.toArray(n,16*i);}null!==i&&(i.needsUpdate=!0);}clone(){return new Fc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Nc(e,t,t,Bt,It);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null);}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const i=t.bones[n];let r=e[i];void 0===r&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),r=new Uc),this.bones.push(r),this.boneInverses.push((new cr).fromArray(t.boneInverses[n]));}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const r=e[i];t.bones.push(r.uuid);const s=n[i];t.boneInverses.push(s.toArray());}return t}}class Bc extends cs{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i;}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zc=new cr,Hc=new cr,Vc=[],kc=new Oi,Gc=new cr,Wc=new Xs,Xc=new tr;class jc extends Xs{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bc(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let t=0;t<n;t++)this.setMatrixAt(t,Gc);}computeBoundingBox(){const t=this.geometry,e=this.count;null===this.boundingBox&&(this.boundingBox=new Oi),null===t.boundingBox&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zc),kc.copy(t.boundingBox).applyMatrix4(zc),this.boundingBox.union(kc);}computeBoundingSphere(){const t=this.geometry,e=this.count;null===this.boundingSphere&&(this.boundingSphere=new tr),null===t.boundingSphere&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zc),Xc.copy(t.boundingSphere).applyMatrix4(zc),this.boundingSphere.union(Xc);}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t);}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t);}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Wc.geometry=this.geometry,Wc.material=this.material,void 0!==Wc.material&&(null===this.boundingSphere&&this.computeBoundingSphere(),Xc.copy(this.boundingSphere),Xc.applyMatrix4(n),!1!==t.ray.intersectsSphere(Xc)))for(let r=0;r<i;r++){this.getMatrixAt(r,zc),Hc.multiplyMatrices(n,zc),Wc.matrixWorld=Hc,Wc.raycast(t,Vc);for(let t=0,n=Vc.length;t<n;t++){const n=Vc[t];n.instanceId=r,n.object=this,e.push(n);}Vc.length=0;}}setColorAt(t,e){null===this.instanceColor&&(this.instanceColor=new Bc(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t);}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t);}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"});}}function qc(t,e){return t.z-e.z}function Yc(t,e){return e.z-t.z}class Zc{constructor(){this.index=0,this.pool=[],this.list=[];}push(t,e){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=t.start,r.count=t.count,r.z=e;}reset(){this.list.length=0,this.index=0;}}const Jc="batchId",Kc=new cr,$c=new cr,Qc=new cr,th=new cr,eh=new ua,nh=new Oi,ih=new tr,rh=new Ui,sh=new Zc,ah=new Xs,oh=[];function lh(t,e,n=0){const i=e.itemSize;if(t.isInterleavedBufferAttribute||t.array.constructor!==e.array.constructor){const r=t.count;for(let s=0;s<r;s++)for(let r=0;r<i;r++)e.setComponent(s+n,r,t.getComponent(s,r));}else e.array.set(t.array,n*i);e.needsUpdate=!0;}class ch extends Xs{get maxGeometryCount(){return this._maxGeometryCount}constructor(t,e,n=2*e,i){super(new As,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture();}_initMatricesTexture(){let t=Math.sqrt(4*this._maxGeometryCount);t=4*Math.ceil(t/4),t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Nc(e,t,t,Bt,It);this._matricesTexture=n;}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(!1===this._geometryInitialized){for(const i in t.attributes){const r=t.getAttribute(i),{array:s,itemSize:a,normalized:o}=r,l=new s.constructor(n*a),c=new r.constructor(l,a,o);c.setUsage(r.usage),e.setAttribute(i,c);}if(null!==t.getIndex()){const t=n>65536?new Uint32Array(r):new Uint16Array(r);e.setIndex(new cs(t,1));}const s=i>65536?new Uint32Array(n):new Uint16Array(n);e.setAttribute(Jc,new cs(s,1)),this._geometryInitialized=!0;}}_validateGeometry(t){if(t.getAttribute(Jc))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Jc}"`);const e=this.geometry;if(Boolean(t.getIndex())!==Boolean(e.getIndex()))throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(n===Jc)continue;if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Oi);const t=this._geometryCount,e=this.boundingBox,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)!1!==n[i]&&(this.getMatrixAt(i,Kc),this.getBoundingBoxAt(i,nh).applyMatrix4(Kc),e.union(nh));}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new tr);const t=this._geometryCount,e=this.boundingSphere,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)!1!==n[i]&&(this.getMatrixAt(i,Kc),this.getBoundingSphereAt(i,ih).applyMatrix4(Kc),e.union(ih));}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const s=this._reservedRanges,a=this._drawRanges,o=this._bounds;0!==this._geometryCount&&(r=s[s.length-1]),i.vertexCount=-1===e?t.getAttribute("position").count:e,i.vertexStart=null===r?0:r.vertexStart+r.vertexCount;const l=t.getIndex(),c=null!==l;if(c&&(i.indexCount=-1===n?l.count:n,i.indexStart=null===r?0:r.indexStart+r.indexCount),-1!==i.indexStart&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,u=this._active,d=this._matricesTexture,p=this._matricesTexture.image.data;h.push(!0),u.push(!0);const m=this._geometryCount;this._geometryCount++,Qc.toArray(p,16*m),d.needsUpdate=!0,s.push(i),a.push({start:c?i.indexStart:i.vertexStart,count:-1}),o.push({boxInitialized:!1,box:new Oi,sphereInitialized:!1,sphere:new tr});const f=this.geometry.getAttribute(Jc);for(let t=0;t<i.vertexCount;t++)f.setX(i.vertexStart+t,m);return f.needsUpdate=!0,this.setGeometryAt(m,t),m}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=null!==n.getIndex(),r=n.getIndex(),s=e.getIndex(),a=this._reservedRanges[t];if(i&&s.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const o=a.vertexStart,l=a.vertexCount;for(const t in n.attributes){if(t===Jc)continue;const i=e.getAttribute(t),r=n.getAttribute(t);lh(i,r,o);const s=i.itemSize;for(let t=i.count,e=l;t<e;t++){const e=o+t;for(let t=0;t<s;t++)r.setComponent(e,t,0);}r.needsUpdate=!0;}if(i){const t=a.indexStart;for(let e=0;e<s.count;e++)r.setX(t+e,o+s.getX(e));for(let e=s.count,n=a.indexCount;e<n;e++)r.setX(t+e,o);r.needsUpdate=!0;}const c=this._bounds[t];null!==e.boundingBox?(c.box.copy(e.boundingBox),c.boxInitialized=!0):c.boxInitialized=!1,null!==e.boundingSphere?(c.sphere.copy(e.boundingSphere),c.sphereInitialized=!0):c.sphereInitialized=!1;const h=this._drawRanges[t],u=e.getAttribute("position");return h.count=i?s.count:u.count,this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._active;return t>=e.length||!1===e[t]||(e[t]=!1,this._visibilityChanged=!0),this}getBoundingBoxAt(t,e){if(!1===this._active[t])return this;const n=this._bounds[t],i=n.box,r=this.geometry;if(!1===n.boxInitialized){i.makeEmpty();const e=r.index,s=r.attributes.position,a=this._drawRanges[t];for(let t=a.start,n=a.start+a.count;t<n;t++){let n=t;e&&(n=e.getX(n)),i.expandByPoint(rh.fromBufferAttribute(s,n));}n.boxInitialized=!0;}return e.copy(i),e}getBoundingSphereAt(t,e){if(!1===this._active[t])return this;const n=this._bounds[t],i=n.sphere,r=this.geometry;if(!1===n.sphereInitialized){i.makeEmpty(),this.getBoundingBoxAt(t,nh),nh.getCenter(i.center);const e=r.index,s=r.attributes.position,a=this._drawRanges[t];let o=0;for(let t=a.start,n=a.start+a.count;t<n;t++){let n=t;e&&(n=e.getX(n)),rh.fromBufferAttribute(s,n),o=Math.max(o,i.center.distanceToSquared(rh));}i.radius=Math.sqrt(o),n.sphereInitialized=!0;}return e.copy(i),e}setMatrixAt(t,e){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=this._geometryCount||!1===n[t]||(e.toArray(r,16*t),i.needsUpdate=!0),this}getMatrixAt(t,e){const n=this._active,i=this._matricesTexture.image.data;return t>=this._geometryCount||!1===n[t]?null:e.fromArray(i,16*t)}setVisibleAt(t,e){const n=this._visibility,i=this._active;return t>=this._geometryCount||!1===i[t]||n[t]===e||(n[t]=e,this._visibilityChanged=!0),this}getVisibleAt(t){const e=this._visibility,n=this._active;return !(t>=this._geometryCount||!1===n[t])&&e[t]}raycast(t,e){const n=this._visibility,i=this._active,r=this._drawRanges,s=this._geometryCount,a=this.matrixWorld,o=this.geometry;ah.material=this.material,ah.geometry.index=o.index,ah.geometry.attributes=o.attributes,null===ah.geometry.boundingBox&&(ah.geometry.boundingBox=new Oi),null===ah.geometry.boundingSphere&&(ah.geometry.boundingSphere=new tr);for(let o=0;o<s;o++){if(!n[o]||!i[o])continue;const s=r[o];ah.geometry.setDrawRange(s.start,s.count),this.getMatrixAt(o,ah.matrixWorld).premultiply(a),this.getBoundingBoxAt(o,ah.geometry.boundingBox),this.getBoundingSphereAt(o,ah.geometry.boundingSphere),ah.raycast(t,oh);for(let t=0,n=oh.length;t<n;t++){const n=oh[t];n.object=this,n.batchId=o,e.push(n);}oh.length=0;}ah.material=null,ah.geometry.index=null,ah.geometry.attributes={},ah.geometry.setDrawRange(0,1/0);}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=null!==t.boundingBox?t.boundingBox.clone():null,this.boundingSphere=null!==t.boundingSphere?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map((t=>({...t}))),this._reservedRanges=t._reservedRanges.map((t=>({...t}))),this._visibility=t._visibility.slice(),this._active=t._active.slice(),this._bounds=t._bounds.map((t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()}))),this._maxGeometryCount=t._maxGeometryCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=i.getIndex(),a=null===s?1:s.array.BYTES_PER_ELEMENT,o=this._visibility,l=this._multiDrawStarts,c=this._multiDrawCounts,h=this._drawRanges,u=this.perObjectFrustumCulled;u&&(th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),eh.setFromProjectionMatrix(th,t.isWebGPURenderer?zn:Bn));let d=0;if(this.sortObjects){$c.copy(this.matrixWorld).invert(),rh.setFromMatrixPosition(n.matrixWorld).applyMatrix4($c);for(let t=0,e=o.length;t<e;t++)if(o[t]){this.getMatrixAt(t,Kc),this.getBoundingSphereAt(t,ih).applyMatrix4(Kc);let e=!1;if(u&&(e=!eh.intersectsSphere(ih)),!e){const e=rh.distanceTo(ih.center);sh.push(h[t],e);}}const t=sh.list,e=this.customSort;null===e?t.sort(r.transparent?Yc:qc):e.call(this,t,n);for(let e=0,n=t.length;e<n;e++){const n=t[e];l[d]=n.start*a,c[d]=n.count,d++;}sh.reset();}else for(let t=0,e=o.length;t<e;t++)if(o[t]){let e=!1;if(u&&(this.getMatrixAt(t,Kc),this.getBoundingSphereAt(t,ih).applyMatrix4(Kc),e=!eh.intersectsSphere(ih)),!e){const e=h[t];l[d]=e.start*a,c[d]=e.count,d++;}}this._multiDrawCount=d,this._visibilityChanged=!1;}onBeforeShadow(t,e,n,i,r,s){this.onBeforeRender(t,null,i,r,s);}}class hh extends ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kr(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uh=new Ui,dh=new Ui,ph=new cr,mh=new lr,fh=new tr;class gh extends Nr{constructor(t=new As,e=new hh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets();}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,n=[0];for(let t=1,i=e.count;t<i;t++)uh.fromBufferAttribute(e,t-1),dh.fromBufferAttribute(e,t),n[t]=n[t-1],n[t]+=uh.distanceTo(dh);t.setAttribute("lineDistance",new vs(n,1));}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(null===n.boundingSphere&&n.computeBoundingSphere(),fh.copy(n.boundingSphere),fh.applyMatrix4(i),fh.radius+=r,!1===t.ray.intersectsSphere(fh))return;ph.copy(i).invert(),mh.copy(t.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new Ui,c=new Ui,h=new Ui,u=new Ui,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(null!==p){for(let n=Math.max(0,s.start),i=Math.min(p.count,s.start+s.count)-1;n<i;n+=d){const i=p.getX(n),r=p.getX(n+1);l.fromBufferAttribute(m,i),c.fromBufferAttribute(m,r);if(mh.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const s=t.ray.origin.distanceTo(u);s<t.near||s>t.far||e.push({distance:s,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this});}}else {for(let n=Math.max(0,s.start),i=Math.min(m.count,s.start+s.count)-1;n<i;n+=d){l.fromBufferAttribute(m,n),c.fromBufferAttribute(m,n+1);if(mh.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const i=t.ray.origin.distanceTo(u);i<t.near||i>t.far||e.push({distance:i,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this});}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t;}}}}}const _h=new Ui,vh=new Ui;class xh extends gh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments";}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,n=[];for(let t=0,i=e.count;t<i;t+=2)_h.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,t+1),n[t]=0===t?0:n[t-1],n[t+1]=n[t]+_h.distanceTo(vh);t.setAttribute("lineDistance",new vs(n,1));}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yh extends gh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop";}}class Mh extends ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kr(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sh=new cr,bh=new lr,Eh=new tr,Th=new Ui;class wh extends Nr{constructor(t=new As,e=new Mh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets();}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(null===n.boundingSphere&&n.computeBoundingSphere(),Eh.copy(n.boundingSphere),Eh.applyMatrix4(i),Eh.radius+=r,!1===t.ray.intersectsSphere(Eh))return;Sh.copy(i).invert(),bh.copy(t.ray).applyMatrix4(Sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(null!==l){for(let n=Math.max(0,s.start),r=Math.min(l.count,s.start+s.count);n<r;n++){const r=l.getX(n);Th.fromBufferAttribute(c,r),Ah(Th,r,o,i,t,e,this);}}else {for(let n=Math.max(0,s.start),r=Math.min(c.count,s.start+s.count);n<r;n++)Th.fromBufferAttribute(c,n),Ah(Th,n,o,i,t,e,this);}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t;}}}}}function Ah(t,e,n,i,r,s,a){const o=bh.distanceSqToPoint(t);if(o<n){const n=new Ui;bh.closestPointToPoint(t,n),n.applyMatrix4(i);const l=r.ray.origin.distanceTo(n);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:n,index:e,face:null,object:a});}}class Rh extends bi{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isVideoTexture=!0,this.minFilter=void 0!==s?s:Mt,this.magFilter=void 0!==r?r:Mt,this.generateMipmaps=!1;const c=this;"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback((function e(){c.needsUpdate=!0,t.requestVideoFrameCallback(e);}));}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;!1==="requestVideoFrameCallback"in t&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0);}}class Ch extends bi{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=gt,this.minFilter=gt,this.generateMipmaps=!1,this.needsUpdate=!0;}}class Ph extends bi{constructor(t,e,n,i,r,s,a,o,l,c,h,u){super(null,s,a,o,l,c,i,r,h,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1;}}class Lh extends Ph{constructor(t,e,n,i,r,s){super(t,e,n,r,s),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=mt;}}class Ih extends Ph{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,lt),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t;}}class Uh extends bi{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0;}}class Nh{constructor(){this.type="Curve",this.arcLengthDivisions=200;}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths();}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;s=e||t*n[r-1];let a,o=0,l=r-1;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a<0)o=i+1;else {if(!(a>0)){l=i;break}l=i-1;}if(i=l,n[i]===s)return i/(r-1);const c=n[i];return (i+(s-c)/(n[i+1]-c))/(r-1)}getTangent(t,e){const n=1e-4;let i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new ti:new Ui);return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new Ui,i=[],r=[],s=[],a=new Ui,o=new cr;for(let e=0;e<=t;e++){const n=e/t;i[e]=this.getTangentAt(n,new Ui);}r[0]=new Ui,s[0]=new Ui;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let e=1;e<=t;e++){if(r[e]=r[e-1].clone(),s[e]=s[e-1].clone(),a.crossVectors(i[e-1],i[e]),a.length()>Number.EPSILON){a.normalize();const t=Math.acos(jn(i[e-1].dot(i[e]),-1,1));r[e].applyMatrix4(o.makeRotationAxis(a,t));}s[e].crossVectors(i[e],r[e]);}if(!0===e){let e=Math.acos(jn(r[0].dot(r[t]),-1,1));e/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(e=-e);for(let n=1;n<=t;n++)r[n].applyMatrix4(o.makeRotationAxis(i[n],e*n)),s[n].crossVectors(i[n],r[n]);}return {tangents:i,normals:r,binormals:s}}clone(){return (new this.constructor).copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dh extends Nh{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o;}getPoint(t,e){const n=e||new ti,i=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),!0!==this.aClockwise||s||(r===i?r=-i:r-=i);const a=this.aStartAngle+t*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(0!==this.aRotation){const t=Math.cos(this.aRotation),e=Math.sin(this.aRotation),n=o-this.aX,i=l-this.aY;o=n*t-i*e+this.aX,l=n*e+i*t+this.aY;}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Oh extends Dh{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve";}}function Fh(){let t=0,e=0,n=0,i=0;function r(r,s,a,o){t=r,e=a,n=-3*r+3*s-2*a-o,i=2*r-2*s+a+o;}return {initCatmullRom:function(t,e,n,i,s){r(e,n,s*(n-t),s*(i-e));},initNonuniformCatmullRom:function(t,e,n,i,s,a,o){let l=(e-t)/s-(n-t)/(s+a)+(n-e)/a,c=(n-e)/a-(i-e)/(a+o)+(i-n)/o;l*=a,c*=a,r(e,n,l,c);},calc:function(r){const s=r*r;return t+e*r+n*s+i*(s*r)}}}const Bh=new Ui,zh=new Fh,Hh=new Fh,Vh=new Fh;class kh extends Nh{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i;}getPoint(t,e=new Ui){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let a,o,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:0===c&&l===r-1&&(l=r-2,c=1),this.closed||l>0?a=i[(l-1)%r]:(Bh.subVectors(i[0],i[1]).add(i[0]),a=Bh);const h=i[l%r],u=i[(l+1)%r];if(this.closed||l+2<r?o=i[(l+2)%r]:(Bh.subVectors(i[r-1],i[r-2]).add(i[r-1]),o=Bh),"centripetal"===this.curveType||"chordal"===this.curveType){const t="chordal"===this.curveType?.5:.25;let e=Math.pow(a.distanceToSquared(h),t),n=Math.pow(h.distanceToSquared(u),t),i=Math.pow(u.distanceToSquared(o),t);n<1e-4&&(n=1),e<1e-4&&(e=n),i<1e-4&&(i=n),zh.initNonuniformCatmullRom(a.x,h.x,u.x,o.x,e,n,i),Hh.initNonuniformCatmullRom(a.y,h.y,u.y,o.y,e,n,i),Vh.initNonuniformCatmullRom(a.z,h.z,u.z,o.z,e,n,i);}else "catmullrom"===this.curveType&&(zh.initCatmullRom(a.x,h.x,u.x,o.x,this.tension),Hh.initCatmullRom(a.y,h.y,u.y,o.y,this.tension),Vh.initCatmullRom(a.z,h.z,u.z,o.z,this.tension));return n.set(zh.calc(c),Hh.calc(c),Vh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push(n.clone());}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e];t.points.push(n.toArray());}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push((new Ui).fromArray(n));}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gh(t,e,n,i,r){const s=.5*(i-e),a=.5*(r-n),o=t*t;return (2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t+n}function Wh(t,e,n,i){return function(t,e){const n=1-t;return n*n*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,n)+function(t,e){return t*t*e}(t,i)}function Xh(t,e,n,i,r){return function(t,e){const n=1-t;return n*n*n*e}(t,e)+function(t,e){const n=1-t;return 3*n*n*t*e}(t,n)+function(t,e){return 3*(1-t)*t*t*e}(t,i)+function(t,e){return t*t*t*e}(t,r)}class jh extends Nh{constructor(t=new ti,e=new ti,n=new ti,i=new ti){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i;}getPoint(t,e=new ti){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Xh(t,i.x,r.x,s.x,a.x),Xh(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends Nh{constructor(t=new Ui,e=new Ui,n=new Ui,i=new Ui){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i;}getPoint(t,e=new Ui){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Xh(t,i.x,r.x,s.x,a.x),Xh(t,i.y,r.y,s.y,a.y),Xh(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yh extends Nh{constructor(t=new ti,e=new ti){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e;}getPoint(t,e=new ti){const n=e;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ti){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Nh{constructor(t=new Ui,e=new Ui){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e;}getPoint(t,e=new Ui){const n=e;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ui){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Nh{constructor(t=new ti,e=new ti,n=new ti){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n;}getPoint(t,e=new ti){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Wh(t,i.x,r.x,s.x),Wh(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends Nh{constructor(t=new Ui,e=new Ui,n=new Ui){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n;}getPoint(t,e=new Ui){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Wh(t,i.x,r.x,s.x),Wh(t,i.y,r.y,s.y),Wh(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Nh{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t;}getPoint(t,e=new ti){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,o=i[0===s?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Gh(a,o.x,l.x,c.x,h.x),Gh(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push(n.clone());}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e];t.points.push(n.toArray());}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push((new ti).fromArray(n));}return this}}var Qh=Object.freeze({__proto__:null,ArcCurve:Oh,CatmullRomCurve3:kh,CubicBezierCurve:jh,CubicBezierCurve3:qh,EllipseCurve:Dh,LineCurve:Yh,LineCurve3:Zh,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:Kh,SplineCurve:$h});class tu extends Nh{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1;}add(t){this.curves.push(t);}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=!0===t.isVector2?"LineCurve":"LineCurve3";this.curves.push(new Qh[n](e,t));}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const t=i[r]-n,s=this.curves[r],a=s.getLength(),o=0===a?0:1-t/a;return s.getPointAt(o,e)}r++;}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths();}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let t=0;t<o.length;t++){const i=o[t];n&&n.equals(i)||(e.push(i),n=i);}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e];this.curves.push(n.clone());}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const n=this.curves[e];t.curves.push(n.toJSON());}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e];this.curves.push((new Qh[n.type]).fromJSON(n));}return this}}class eu extends tu{constructor(t){super(),this.type="Path",this.currentPoint=new ti,t&&this.setFromPoints(t);}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yh(this.currentPoint.clone(),new ti(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Jh(this.currentPoint.clone(),new ti(t,e),new ti(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){const a=new jh(this.currentPoint.clone(),new ti(t,e),new ti(n,i),new ti(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $h(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,r,s,a,o),this}absellipse(t,e,n,i,r,s,a,o){const l=new Dh(t,e,n,i,r,s,a,o);if(this.curves.length>0){const t=l.getPoint(0);t.equals(this.currentPoint)||this.lineTo(t.x,t.y);}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nu extends As{constructor(t=[new ti(0,-.5),new ti(.5,0),new ti(0,.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=jn(i,0,2*Math.PI);const r=[],s=[],a=[],o=[],l=[],c=1/e,h=new Ui,u=new ti,d=new Ui,p=new Ui,m=new Ui;let f=0,g=0;for(let e=0;e<=t.length-1;e++)switch(e){case 0:f=t[e+1].x-t[e].x,g=t[e+1].y-t[e].y,d.x=1*g,d.y=-f,d.z=0*g,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case t.length-1:o.push(m.x,m.y,m.z);break;default:f=t[e+1].x-t[e].x,g=t[e+1].y-t[e].y,d.x=1*g,d.y=-f,d.z=0*g,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(p);}for(let r=0;r<=e;r++){const d=n+r*c*i,p=Math.sin(d),m=Math.cos(d);for(let n=0;n<=t.length-1;n++){h.x=t[n].x*p,h.y=t[n].y,h.z=t[n].x*m,s.push(h.x,h.y,h.z),u.x=r/e,u.y=n/(t.length-1),a.push(u.x,u.y);const i=o[3*n+0]*p,c=o[3*n+1],d=o[3*n+0]*m;l.push(i,c,d);}}for(let n=0;n<e;n++)for(let e=0;e<t.length-1;e++){const i=e+n*t.length,s=i,a=i+t.length,o=i+t.length+1,l=i+1;r.push(s,a,l),r.push(o,l,a);}this.setIndex(r),this.setAttribute("position",new vs(s,3)),this.setAttribute("uv",new vs(a,2)),this.setAttribute("normal",new vs(l,3));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nu(t.points,t.segments,t.phiStart,t.phiLength)}}class iu extends nu{constructor(t=1,e=1,n=4,i=8){const r=new eu;r.absarc(0,-e/2,t,1.5*Math.PI,0),r.absarc(0,e/2,t,0,.5*Math.PI),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i};}static fromJSON(t){return new iu(t.radius,t.length,t.capSegments,t.radialSegments)}}class ru extends As{constructor(t=1,e=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],s=[],a=[],o=[],l=new Ui,c=new ti;s.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let r=0,h=3;r<=e;r++,h+=3){const u=n+r/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(s[h]/t+1)/2,c.y=(s[h+1]/t+1)/2,o.push(c.x,c.y);}for(let t=1;t<=e;t++)r.push(t,t+1,0);this.setIndex(r),this.setAttribute("position",new vs(s,3)),this.setAttribute("normal",new vs(a,3)),this.setAttribute("uv",new vs(o,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class su extends As{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};const l=this;i=Math.floor(i),r=Math.floor(r);const c=[],h=[],u=[],d=[];let p=0;const m=[],f=n/2;let g=0;function _(n){const r=p,s=new ti,m=new Ui;let _=0;const v=!0===n?t:e,x=!0===n?1:-1;for(let t=1;t<=i;t++)h.push(0,f*x,0),u.push(0,x,0),d.push(.5,.5),p++;const y=p;for(let t=0;t<=i;t++){const e=t/i*o+a,n=Math.cos(e),r=Math.sin(e);m.x=v*r,m.y=f*x,m.z=v*n,h.push(m.x,m.y,m.z),u.push(0,x,0),s.x=.5*n+.5,s.y=.5*r*x+.5,d.push(s.x,s.y),p++;}for(let t=0;t<i;t++){const e=r+t,i=y+t;!0===n?c.push(i,i+1,e):c.push(i+1,i,e),_+=3;}l.addGroup(g,_,!0===n?1:2),g+=_;}!function(){const s=new Ui,_=new Ui;let v=0;const x=(e-t)/n;for(let l=0;l<=r;l++){const c=[],g=l/r,v=g*(e-t)+t;for(let t=0;t<=i;t++){const e=t/i,r=e*o+a,l=Math.sin(r),m=Math.cos(r);_.x=v*l,_.y=-g*n+f,_.z=v*m,h.push(_.x,_.y,_.z),s.set(l,x,m).normalize(),u.push(s.x,s.y,s.z),d.push(e,1-g),c.push(p++);}m.push(c);}for(let t=0;t<i;t++)for(let e=0;e<r;e++){const n=m[e][t],i=m[e+1][t],r=m[e+1][t+1],s=m[e][t+1];c.push(n,i,s),c.push(i,r,s),v+=6;}l.addGroup(g,v,0),g+=v;}(),!1===s&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new vs(h,3)),this.setAttribute("normal",new vs(u,3)),this.setAttribute("uv",new vs(d,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class au extends su{constructor(t=1,e=1,n=32,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a};}static fromJSON(t){return new au(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends As{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],s=[];function a(t,e,n,i){const r=i+1,s=[];for(let i=0;i<=r;i++){s[i]=[];const a=t.clone().lerp(n,i/r),o=e.clone().lerp(n,i/r),l=r-i;for(let t=0;t<=l;t++)s[i][t]=0===t&&i===r?a:a.clone().lerp(o,t/l);}for(let t=0;t<r;t++)for(let e=0;e<2*(r-t)-1;e++){const n=Math.floor(e/2);e%2==0?(o(s[t][n+1]),o(s[t+1][n]),o(s[t][n])):(o(s[t][n+1]),o(s[t+1][n+1]),o(s[t+1][n]));}}function o(t){r.push(t.x,t.y,t.z);}function l(e,n){const i=3*e;n.x=t[i+0],n.y=t[i+1],n.z=t[i+2];}function c(t,e,n,i){i<0&&1===t.x&&(s[e]=t.x-1),0===n.x&&0===n.z&&(s[e]=i/2/Math.PI+.5);}function h(t){return Math.atan2(t.z,-t.x)}!function(t){const n=new Ui,i=new Ui,r=new Ui;for(let s=0;s<e.length;s+=3)l(e[s+0],n),l(e[s+1],i),l(e[s+2],r),a(n,i,r,t);}(i),function(t){const e=new Ui;for(let n=0;n<r.length;n+=3)e.x=r[n+0],e.y=r[n+1],e.z=r[n+2],e.normalize().multiplyScalar(t),r[n+0]=e.x,r[n+1]=e.y,r[n+2]=e.z;}(n),function(){const t=new Ui;for(let n=0;n<r.length;n+=3){t.x=r[n+0],t.y=r[n+1],t.z=r[n+2];const i=h(t)/2/Math.PI+.5,a=(e=t,Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5);s.push(i,1-a);}var e;((function(){const t=new Ui,e=new Ui,n=new Ui,i=new Ui,a=new ti,o=new ti,l=new ti;for(let u=0,d=0;u<r.length;u+=9,d+=6){t.set(r[u+0],r[u+1],r[u+2]),e.set(r[u+3],r[u+4],r[u+5]),n.set(r[u+6],r[u+7],r[u+8]),a.set(s[d+0],s[d+1]),o.set(s[d+2],s[d+3]),l.set(s[d+4],s[d+5]),i.copy(t).add(e).add(n).divideScalar(3);const p=h(i);c(a,d+0,t,p),c(o,d+2,e,p),c(l,d+4,n,p);}}))(),function(){for(let t=0;t<s.length;t+=6){const e=s[t+0],n=s[t+2],i=s[t+4],r=Math.max(e,n,i),a=Math.min(e,n,i);r>.9&&a<.1&&(e<.2&&(s[t+0]+=1),n<.2&&(s[t+2]+=1),i<.2&&(s[t+4]+=1));}}();}(),this.setAttribute("position",new vs(r,3)),this.setAttribute("normal",new vs(r.slice(),3)),this.setAttribute("uv",new vs(s,2)),0===i?this.computeVertexNormals():this.normalizeNormals();}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.vertices,t.indices,t.radius,t.details)}}class lu extends ou{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e};}static fromJSON(t){return new lu(t.radius,t.detail)}}const cu=new Ui,hu=new Ui,uu=new Ui,du=new jr;class pu extends As{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},null!==t){const n=4,i=Math.pow(10,n),r=Math.cos(Gn*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),u={},d=[];for(let t=0;t<o;t+=3){s?(l[0]=s.getX(t),l[1]=s.getX(t+1),l[2]=s.getX(t+2)):(l[0]=t,l[1]=t+1,l[2]=t+2);const{a:e,b:n,c:o}=du;if(e.fromBufferAttribute(a,l[0]),n.fromBufferAttribute(a,l[1]),o.fromBufferAttribute(a,l[2]),du.getNormal(uu),h[0]=`${Math.round(e.x*i)},${Math.round(e.y*i)},${Math.round(e.z*i)}`,h[1]=`${Math.round(n.x*i)},${Math.round(n.y*i)},${Math.round(n.z*i)}`,h[2]=`${Math.round(o.x*i)},${Math.round(o.y*i)},${Math.round(o.z*i)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let t=0;t<3;t++){const e=(t+1)%3,n=h[t],i=h[e],s=du[c[t]],a=du[c[e]],o=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(uu.dot(u[p].normal)<=r&&(d.push(s.x,s.y,s.z),d.push(a.x,a.y,a.z)),u[p]=null):o in u||(u[o]={index0:l[t],index1:l[e],normal:uu.clone()});}}for(const t in u)if(u[t]){const{index0:e,index1:n}=u[t];cu.fromBufferAttribute(a,e),hu.fromBufferAttribute(a,n),d.push(cu.x,cu.y,cu.z),d.push(hu.x,hu.y,hu.z);}this.setAttribute("position",new vs(d,3));}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class mu extends eu{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[];}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return {shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e];this.holes.push(n.clone());}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const n=this.holes[e];t.holes.push(n.toJSON());}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e];this.holes.push((new eu).fromJSON(n));}return this}}const fu=function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=gu(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=function(t,e,n,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:t.length,c=gu(t,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Au(c));for(r.sort(bu),s=0;s<r.length;s++)n=Eu(r[s],n);return n}(t,e,s,n)),t.length>80*n){o=c=t[0],l=h=t[1];for(let e=n;e<r;e+=n)u=t[e],d=t[e+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=0!==p?32767/p:0;}return vu(s,a,n,o,l,p,0),a};function gu(t,e,n,i,r){let s,a;if(r===function(t,e,n,i){let r=0;for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}(t,e,n,i)>0)for(s=e;s<n;s+=i)a=Fu(s,t[s],t[s+1],a);else for(s=n-i;s>=e;s-=i)a=Fu(s,t[s],t[s+1],a);return a&&Lu(a,a.next)&&(Bu(a),a=a.next),a}function _u(t,e){if(!t)return t;e||(e=t);let n,i=t;do{if(n=!1,i.steiner||!Lu(i,i.next)&&0!==Pu(i.prev,i,i.next))i=i.next;else {if(Bu(i),i=e=i.prev,i===i.next)break;n=!0;}}while(n||i!==e);return e}function vu(t,e,n,i,r,s,a){if(!t)return;!a&&s&&function(t,e,n,i){let r=t;do{0===r.z&&(r.z=wu(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){let e,n,i,r,s,a,o,l,c=1;do{for(n=t,t=null,s=null,a=0;n;){for(a++,i=n,o=0,e=0;e<c&&(o++,i=i.nextZ,i);e++);for(l=c;o>0||l>0&&i;)0!==o&&(0===l||!i||n.z<=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i;}s.nextZ=null,c*=2;}while(a>1)}(r);}(t,i,r,s);let o,l,c=t;for(;t.prev!==t.next;)if(o=t.prev,l=t.next,s?yu(t,i,r,s):xu(t))e.push(o.i/n|0),e.push(t.i/n|0),e.push(l.i/n|0),Bu(t),t=l.next,c=l.next;else if((t=l)===c){a?1===a?vu(t=Mu(_u(t),e,n),e,n,i,r,s,2):2===a&&Su(t,e,n,i,r,s):vu(_u(t),e,n,i,r,s,1);break}}function xu(t){const e=t.prev,n=t,i=t.next;if(Pu(e,n,i)>=0)return !1;const r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Ru(r,o,s,l,a,c,m.x,m.y)&&Pu(m.prev,m,m.next)>=0)return !1;m=m.next;}return !0}function yu(t,e,n,i){const r=t.prev,s=t,a=t.next;if(Pu(r,s,a)>=0)return !1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,f=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,_=wu(p,m,e,n,i),v=wu(f,g,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=_&&y&&y.z<=v;){if(x.x>=p&&x.x<=f&&x.y>=m&&x.y<=g&&x!==r&&x!==a&&Ru(o,h,l,u,c,d,x.x,x.y)&&Pu(x.prev,x,x.next)>=0)return !1;if(x=x.prevZ,y.x>=p&&y.x<=f&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Ru(o,h,l,u,c,d,y.x,y.y)&&Pu(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=f&&x.y>=m&&x.y<=g&&x!==r&&x!==a&&Ru(o,h,l,u,c,d,x.x,x.y)&&Pu(x.prev,x,x.next)>=0)return !1;x=x.prevZ;}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=f&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Ru(o,h,l,u,c,d,y.x,y.y)&&Pu(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}return !0}function Mu(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Lu(r,s)&&Iu(r,i,i.next,s)&&Du(r,s)&&Du(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Bu(i),Bu(i.next),i=t=s),i=i.next;}while(i!==t);return _u(i)}function Su(t,e,n,i,r,s){let a=t;do{let t=a.next.next;for(;t!==a.prev;){if(a.i!==t.i&&Cu(a,t)){let o=Ou(a,t);return a=_u(a,a.next),o=_u(o,o.next),vu(a,e,n,i,r,s,0),void vu(o,e,n,i,r,s,0)}t=t.next;}a=a.next;}while(a!==t)}function bu(t,e){return t.x-e.x}function Eu(t,e){const n=function(t,e){let n,i=e,r=-1/0;const s=t.x,a=t.y;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){const t=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(t<=s&&t>r&&(r=t,n=i.x<i.next.x?i:i.next,t===s))return n}i=i.next;}while(i!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h,u=1/0;i=n;do{s>=i.x&&i.x>=l&&s!==i.x&&Ru(a<c?s:r,a,l,c,a<c?r:s,a,i.x,i.y)&&(h=Math.abs(a-i.y)/(s-i.x),Du(i,t)&&(h<u||h===u&&(i.x>n.x||i.x===n.x&&Tu(n,i)))&&(n=i,u=h)),i=i.next;}while(i!==o);return n}(t,e);if(!n)return e;const i=Ou(n,t);return _u(i,i.next),_u(n,n.next)}function Tu(t,e){return Pu(t.prev,t,e.prev)<0&&Pu(e.next,t,t.next)<0}function wu(t,e,n,i,r){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Au(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;}while(e!==t);return n}function Ru(t,e,n,i,r,s,a,o){return (r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function Cu(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Iu(n,n.next,t,e))return !0;n=n.next;}while(n!==t);return !1}(t,e)&&(Du(t,e)&&Du(e,t)&&function(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;}while(n!==t);return i}(t,e)&&(Pu(t.prev,t,e.prev)||Pu(t,e.prev,e))||Lu(t,e)&&Pu(t.prev,t,t.next)>0&&Pu(e.prev,e,e.next)>0)}function Pu(t,e,n){return (e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Lu(t,e){return t.x===e.x&&t.y===e.y}function Iu(t,e,n,i){const r=Nu(Pu(t,e,n)),s=Nu(Pu(t,e,i)),a=Nu(Pu(n,i,t)),o=Nu(Pu(n,i,e));return r!==s&&a!==o||(!(0!==r||!Uu(t,n,e))||(!(0!==s||!Uu(t,i,e))||(!(0!==a||!Uu(n,t,i))||!(0!==o||!Uu(n,e,i)))))}function Uu(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Nu(t){return t>0?1:t<0?-1:0}function Du(t,e){return Pu(t.prev,t,t.next)<0?Pu(t,e,t.next)>=0&&Pu(t,t.prev,e)>=0:Pu(t,e,t.prev)<0||Pu(t,t.next,e)<0}function Ou(t,e){const n=new zu(t.i,t.x,t.y),i=new zu(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Fu(t,e,n,i){const r=new zu(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Bu(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function zu(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1;}class Hu{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return .5*n}static isClockWise(t){return Hu.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Vu(t),ku(n,t);let s=t.length;e.forEach(Vu);for(let t=0;t<e.length;t++)i.push(s),s+=e[t].length,ku(n,e[t]);const a=fu(n,i);for(let t=0;t<a.length;t+=3)r.push(a.slice(t,t+3));return r}}function Vu(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop();}function ku(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y);}class Gu extends As{constructor(t=new mu([new ti(.5,.5),new ti(-.5,.5),new ti(-.5,-.5),new ti(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let e=0,n=t.length;e<n;e++){s(t[e]);}function s(t){const s=[],a=void 0!==e.curveSegments?e.curveSegments:12,o=void 0!==e.steps?e.steps:1,l=void 0!==e.depth?e.depth:1;let c=void 0===e.bevelEnabled||e.bevelEnabled,h=void 0!==e.bevelThickness?e.bevelThickness:.2,u=void 0!==e.bevelSize?e.bevelSize:h-.1,d=void 0!==e.bevelOffset?e.bevelOffset:0,p=void 0!==e.bevelSegments?e.bevelSegments:3;const m=e.extrudePath,f=void 0!==e.UVGenerator?e.UVGenerator:Wu;let g,_,v,x,y,M=!1;m&&(g=m.getSpacedPoints(o),M=!0,c=!1,_=m.computeFrenetFrames(o,!1),v=new Ui,x=new Ui,y=new Ui),c||(p=0,h=0,u=0,d=0);const S=t.extractPoints(a);let b=S.shape;const E=S.holes;if(!Hu.isClockWise(b)){b=b.reverse();for(let t=0,e=E.length;t<e;t++){const e=E[t];Hu.isClockWise(e)&&(E[t]=e.reverse());}}const T=Hu.triangulateShape(b,E),w=b;for(let t=0,e=E.length;t<e;t++){const e=E[t];b=b.concat(e);}function A(t,e,n){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),t.clone().addScaledVector(e,n)}const R=b.length,C=T.length;function P(t,e,n){let i,r,s;const a=t.x-e.x,o=t.y-e.y,l=n.x-t.x,c=n.y-t.y,h=a*a+o*o,u=a*c-o*l;if(Math.abs(u)>Number.EPSILON){const u=Math.sqrt(h),d=Math.sqrt(l*l+c*c),p=e.x-o/u,m=e.y+a/u,f=((n.x-c/d-p)*c-(n.y+l/d-m)*l)/(a*c-o*l);i=p+a*f-t.x,r=m+o*f-t.y;const g=i*i+r*r;if(g<=2)return new ti(i,r);s=Math.sqrt(g/2);}else {let t=!1;a>Number.EPSILON?l>Number.EPSILON&&(t=!0):a<-Number.EPSILON?l<-Number.EPSILON&&(t=!0):Math.sign(o)===Math.sign(c)&&(t=!0),t?(i=-o,r=a,s=Math.sqrt(h)):(i=a,r=o,s=Math.sqrt(h/2));}return new ti(i/s,r/s)}const L=[];for(let t=0,e=w.length,n=e-1,i=t+1;t<e;t++,n++,i++)n===e&&(n=0),i===e&&(i=0),L[t]=P(w[t],w[n],w[i]);const I=[];let U,N=L.concat();for(let t=0,e=E.length;t<e;t++){const e=E[t];U=[];for(let t=0,n=e.length,i=n-1,r=t+1;t<n;t++,i++,r++)i===n&&(i=0),r===n&&(r=0),U[t]=P(e[t],e[i],e[r]);I.push(U),N=N.concat(U);}for(let t=0;t<p;t++){const e=t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=w.length;t<e;t++){const e=A(w[t],L[t],i);F(e.x,e.y,-n);}for(let t=0,e=E.length;t<e;t++){const e=E[t];U=I[t];for(let t=0,r=e.length;t<r;t++){const r=A(e[t],U[t],i);F(r.x,r.y,-n);}}}const D=u+d;for(let t=0;t<R;t++){const e=c?A(b[t],N[t],D):b[t];M?(x.copy(_.normals[0]).multiplyScalar(e.x),v.copy(_.binormals[0]).multiplyScalar(e.y),y.copy(g[0]).add(x).add(v),F(y.x,y.y,y.z)):F(e.x,e.y,0);}for(let t=1;t<=o;t++)for(let e=0;e<R;e++){const n=c?A(b[e],N[e],D):b[e];M?(x.copy(_.normals[t]).multiplyScalar(n.x),v.copy(_.binormals[t]).multiplyScalar(n.y),y.copy(g[t]).add(x).add(v),F(y.x,y.y,y.z)):F(n.x,n.y,l/o*t);}for(let t=p-1;t>=0;t--){const e=t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=w.length;t<e;t++){const e=A(w[t],L[t],i);F(e.x,e.y,l+n);}for(let t=0,e=E.length;t<e;t++){const e=E[t];U=I[t];for(let t=0,r=e.length;t<r;t++){const r=A(e[t],U[t],i);M?F(r.x,r.y+g[o-1].y,g[o-1].x+n):F(r.x,r.y,l+n);}}}function O(t,e){let n=t.length;for(;--n>=0;){const i=n;let r=n-1;r<0&&(r=t.length-1);for(let t=0,n=o+2*p;t<n;t++){const n=R*t,s=R*(t+1);z(e+i+n,e+r+n,e+r+s,e+i+s);}}}function F(t,e,n){s.push(t),s.push(e),s.push(n);}function B(t,e,r){H(t),H(e),H(r);const s=i.length/3,a=f.generateTopUV(n,i,s-3,s-2,s-1);V(a[0]),V(a[1]),V(a[2]);}function z(t,e,r,s){H(t),H(e),H(s),H(e),H(r),H(s);const a=i.length/3,o=f.generateSideWallUV(n,i,a-6,a-3,a-2,a-1);V(o[0]),V(o[1]),V(o[3]),V(o[1]),V(o[2]),V(o[3]);}function H(t){i.push(s[3*t+0]),i.push(s[3*t+1]),i.push(s[3*t+2]);}function V(t){r.push(t.x),r.push(t.y);}!function(){const t=i.length/3;if(c){let t=0,e=R*t;for(let t=0;t<C;t++){const n=T[t];B(n[2]+e,n[1]+e,n[0]+e);}t=o+2*p,e=R*t;for(let t=0;t<C;t++){const n=T[t];B(n[0]+e,n[1]+e,n[2]+e);}}else {for(let t=0;t<C;t++){const e=T[t];B(e[2],e[1],e[0]);}for(let t=0;t<C;t++){const e=T[t];B(e[0]+R*o,e[1]+R*o,e[2]+R*o);}}n.addGroup(t,i.length/3-t,0);}(),function(){const t=i.length/3;let e=0;O(w,e),e+=w.length;for(let t=0,n=E.length;t<n;t++){const n=E[t];O(n,e),e+=n.length;}n.addGroup(t,i.length/3-t,1);}();}this.setAttribute("position",new vs(i,3)),this.setAttribute("uv",new vs(r,2)),this.computeVertexNormals();}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return function(t,e,n){if(n.shapes=[],Array.isArray(t))for(let e=0,i=t.length;e<i;e++){const i=t[e];n.shapes.push(i.uuid);}else n.shapes.push(t.uuid);n.options=Object.assign({},e),void 0!==e.extrudePath&&(n.options.extrudePath=e.extrudePath.toJSON());return n}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const r=e[t.shapes[i]];n.push(r);}const i=t.options.extrudePath;return void 0!==i&&(t.options.extrudePath=(new Qh[i.type]).fromJSON(i)),new Gu(n,t.options)}}const Wu={generateTopUV:function(t,e,n,i,r){const s=e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return [new ti(s,a),new ti(o,l),new ti(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const a=e[3*n],o=e[3*n+1],l=e[3*n+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],g=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ti(a,1-l),new ti(c,1-u),new ti(d,1-m),new ti(f,1-_)]:[new ti(o,1-l),new ti(h,1-u),new ti(p,1-m),new ti(g,1-_)]}};class Xu extends ou{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e};}static fromJSON(t){return new Xu(t.radius,t.detail)}}class ju extends ou{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e};}static fromJSON(t){return new ju(t.radius,t.detail)}}class qu extends As{constructor(t=.5,e=1,n=32,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n);const a=[],o=[],l=[],c=[];let h=t;const u=(e-t)/(i=Math.max(1,i)),d=new Ui,p=new ti;for(let t=0;t<=i;t++){for(let t=0;t<=n;t++){const i=r+t/n*s;d.x=h*Math.cos(i),d.y=h*Math.sin(i),o.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,c.push(p.x,p.y);}h+=u;}for(let t=0;t<i;t++){const e=t*(n+1);for(let t=0;t<n;t++){const i=t+e,r=i,s=i+n+1,o=i+n+2,l=i+1;a.push(r,s,l),a.push(s,o,l);}}this.setIndex(a),this.setAttribute("position",new vs(o,3)),this.setAttribute("normal",new vs(l,3)),this.setAttribute("uv",new vs(c,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yu extends As{constructor(t=new mu([new ti(0,.5),new ti(-.5,-.5),new ti(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],s=[];let a=0,o=0;if(!1===Array.isArray(t))l(t);else for(let e=0;e<t.length;e++)l(t[e]),this.addGroup(a,o,e),a+=o,o=0;function l(t){const a=i.length/3,l=t.extractPoints(e);let c=l.shape;const h=l.holes;!1===Hu.isClockWise(c)&&(c=c.reverse());for(let t=0,e=h.length;t<e;t++){const e=h[t];!0===Hu.isClockWise(e)&&(h[t]=e.reverse());}const u=Hu.triangulateShape(c,h);for(let t=0,e=h.length;t<e;t++){const e=h[t];c=c.concat(e);}for(let t=0,e=c.length;t<e;t++){const e=c[t];i.push(e.x,e.y,0),r.push(0,0,1),s.push(e.x,e.y);}for(let t=0,e=u.length;t<e;t++){const e=u[t],i=e[0]+a,r=e[1]+a,s=e[2]+a;n.push(i,r,s),o+=3;}}this.setIndex(n),this.setAttribute("position",new vs(i,3)),this.setAttribute("normal",new vs(r,3)),this.setAttribute("uv",new vs(s,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return function(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const i=t[n];e.shapes.push(i.uuid);}else e.shapes.push(t.uuid);return e}(this.parameters.shapes,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const r=e[t.shapes[i]];n.push(r);}return new Yu(n,t.curveSegments)}}class Zu extends As{constructor(t=1,e=32,n=16,i=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(s+a,Math.PI);let l=0;const c=[],h=new Ui,u=new Ui,d=[],p=[],m=[],f=[];for(let d=0;d<=n;d++){const g=[],_=d/n;let v=0;0===d&&0===s?v=.5/e:d===n&&o===Math.PI&&(v=-.5/e);for(let n=0;n<=e;n++){const o=n/e;h.x=-t*Math.cos(i+o*r)*Math.sin(s+_*a),h.y=t*Math.cos(s+_*a),h.z=t*Math.sin(i+o*r)*Math.sin(s+_*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),f.push(o+v,1-_),g.push(l++);}c.push(g);}for(let t=0;t<n;t++)for(let i=0;i<e;i++){const e=c[t][i+1],r=c[t][i],a=c[t+1][i],l=c[t+1][i+1];(0!==t||s>0)&&d.push(e,r,l),(t!==n-1||o<Math.PI)&&d.push(r,a,l);}this.setIndex(d),this.setAttribute("position",new vs(p,3)),this.setAttribute("normal",new vs(m,3)),this.setAttribute("uv",new vs(f,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ju extends ou{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e};}static fromJSON(t){return new Ju(t.radius,t.detail)}}class Ku extends As{constructor(t=1,e=.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const s=[],a=[],o=[],l=[],c=new Ui,h=new Ui,u=new Ui;for(let s=0;s<=n;s++)for(let d=0;d<=i;d++){const p=d/i*r,m=s/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(p),h.y=(t+e*Math.cos(m))*Math.sin(p),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(p),c.y=t*Math.sin(p),u.subVectors(h,c).normalize(),o.push(u.x,u.y,u.z),l.push(d/i),l.push(s/n);}for(let t=1;t<=n;t++)for(let e=1;e<=i;e++){const n=(i+1)*t+e-1,r=(i+1)*(t-1)+e-1,a=(i+1)*(t-1)+e,o=(i+1)*t+e;s.push(n,r,o),s.push(r,a,o);}this.setIndex(s),this.setAttribute("position",new vs(a,3)),this.setAttribute("normal",new vs(o,3)),this.setAttribute("uv",new vs(l,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $u extends As{constructor(t=1,e=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new Ui,u=new Ui,d=new Ui,p=new Ui,m=new Ui,f=new Ui,g=new Ui;for(let a=0;a<=n;++a){const v=a/n*r*Math.PI*2;_(v,r,s,t,d),_(v+.01,r,s,t,p),f.subVectors(p,d),g.addVectors(p,d),m.crossVectors(f,g),g.crossVectors(m,f),m.normalize(),g.normalize();for(let t=0;t<=i;++t){const r=t/i*Math.PI*2,s=-e*Math.cos(r),p=e*Math.sin(r);h.x=d.x+(s*g.x+p*m.x),h.y=d.y+(s*g.y+p*m.y),h.z=d.z+(s*g.z+p*m.z),o.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(a/n),c.push(t/i);}}for(let t=1;t<=n;t++)for(let e=1;e<=i;e++){const n=(i+1)*(t-1)+(e-1),r=(i+1)*t+(e-1),s=(i+1)*t+e,o=(i+1)*(t-1)+e;a.push(n,r,o),a.push(r,s,o);}function _(t,e,n,i,r){const s=Math.cos(t),a=Math.sin(t),o=n/e*t,l=Math.cos(o);r.x=i*(2+l)*.5*s,r.y=i*(2+l)*a*.5,r.z=i*Math.sin(o)*.5;}this.setIndex(a),this.setAttribute("position",new vs(o,3)),this.setAttribute("normal",new vs(l,3)),this.setAttribute("uv",new vs(c,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $u(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Qu extends As{constructor(t=new Kh(new Ui(-1,-1,0),new Ui(-1,1,0),new Ui(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new Ui,o=new Ui,l=new ti;let c=new Ui;const h=[],u=[],d=[],p=[];function m(r){c=t.getPointAt(r/e,c);const l=s.normals[r],d=s.binormals[r];for(let t=0;t<=i;t++){const e=t/i*Math.PI*2,r=Math.sin(e),s=-Math.cos(e);o.x=s*l.x+r*d.x,o.y=s*l.y+r*d.y,o.z=s*l.z+r*d.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z);}}!function(){for(let t=0;t<e;t++)m(t);m(!1===r?e:0),function(){for(let t=0;t<=e;t++)for(let n=0;n<=i;n++)l.x=t/e,l.y=n/i,d.push(l.x,l.y);}(),function(){for(let t=1;t<=e;t++)for(let e=1;e<=i;e++){const n=(i+1)*(t-1)+(e-1),r=(i+1)*t+(e-1),s=(i+1)*t+e,a=(i+1)*(t-1)+e;p.push(n,r,a),p.push(r,s,a);}}();}(),this.setIndex(p),this.setAttribute("position",new vs(h,3)),this.setAttribute("normal",new vs(u,3)),this.setAttribute("uv",new vs(d,2));}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qu((new Qh[t.path.type]).fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class td extends As{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},null!==t){const e=[],n=new Set,i=new Ui,r=new Ui;if(null!==t.index){const s=t.attributes.position,a=t.index;let o=t.groups;0===o.length&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let t=0,l=o.length;t<l;++t){const l=o[t],c=l.start;for(let t=c,o=c+l.count;t<o;t+=3)for(let o=0;o<3;o++){const l=a.getX(t+o),c=a.getX(t+(o+1)%3);i.fromBufferAttribute(s,l),r.fromBufferAttribute(s,c),!0===ed(i,r,n)&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z));}}}else {const s=t.attributes.position;for(let t=0,a=s.count/3;t<a;t++)for(let a=0;a<3;a++){const o=3*t+a,l=3*t+(a+1)%3;i.fromBufferAttribute(s,o),r.fromBufferAttribute(s,l),!0===ed(i,r,n)&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z));}}this.setAttribute("position",new vs(e,3));}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ed(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return !0!==n.has(i)&&!0!==n.has(r)&&(n.add(i),n.add(r),!0)}var nd=Object.freeze({__proto__:null,BoxGeometry:qs,CapsuleGeometry:iu,CircleGeometry:ru,ConeGeometry:au,CylinderGeometry:su,DodecahedronGeometry:lu,EdgesGeometry:pu,ExtrudeGeometry:Gu,IcosahedronGeometry:Xu,LatheGeometry:nu,OctahedronGeometry:ju,PlaneGeometry:ma,PolyhedronGeometry:ou,RingGeometry:qu,ShapeGeometry:Yu,SphereGeometry:Zu,TetrahedronGeometry:Ju,TorusGeometry:Ku,TorusKnotGeometry:$u,TubeGeometry:Qu,WireframeGeometry:td});class id extends ts{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Kr(0),this.transparent=!0,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class rd extends $s{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial";}}class sd extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kr(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ti(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ad extends sd{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ti(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t);}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kr(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kr(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kr(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t);}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t;}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t;}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t;}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t;}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t;}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class od extends ts{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Kr(16777215),this.specular=new Kr(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ti(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Z,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ld extends ts{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Kr(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ti(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class cd extends ts{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ti(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t);}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class hd extends ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ti(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Z,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ud extends ts{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Kr(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ti(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t);}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dd extends hh{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t);}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function pd(t,e,n){return !t||!n&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)}function md(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function fd(t){const e=t.length,n=new Array(e);for(let t=0;t!==e;++t)n[t]=t;return n.sort((function(e,n){return t[e]-t[n]})),n}function gd(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){const i=n[s]*e;for(let n=0;n!==e;++n)r[a++]=t[i+n];}return r}function _d(t,e,n,i){let r=1,s=t[0];for(;void 0!==s&&void 0===s[i];)s=t[r++];if(void 0===s)return;let a=s[i];if(void 0!==a)if(Array.isArray(a))do{a=s[i],void 0!==a&&(e.push(s.time),n.push.apply(n,a)),s=t[r++];}while(void 0!==s);else if(void 0!==a.toArray)do{a=s[i],void 0!==a&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];}while(void 0!==s);else do{a=s[i],void 0!==a&&(e.push(s.time),n.push(a)),s=t[r++];}while(void 0!==s)}const vd={convertArray:pd,isTypedArray:md,getKeyframeOrder:fd,sortedArray:gd,flattenJSON:_d,subclip:function(t,e,n,i,r=30){const s=t.clone();s.name=e;const a=[];for(let t=0;t<s.tracks.length;++t){const e=s.tracks[t],o=e.getValueSize(),l=[],c=[];for(let t=0;t<e.times.length;++t){const s=e.times[t]*r;if(!(s<n||s>=i)){l.push(e.times[t]);for(let n=0;n<o;++n)c.push(e.values[t*o+n]);}}0!==l.length&&(e.times=pd(l,e.times.constructor),e.values=pd(c,e.values.constructor),a.push(e));}s.tracks=a;let o=1/0;for(let t=0;t<s.tracks.length;++t)o>s.tracks[t].times[0]&&(o=s.tracks[t].times[0]);for(let t=0;t<s.tracks.length;++t)s.tracks[t].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);const r=n.tracks.length,s=e/i;for(let e=0;e<r;++e){const i=n.tracks[e],r=i.ValueTypeName;if("bool"===r||"string"===r)continue;const a=t.tracks.find((function(t){return t.name===i.name&&t.ValueTypeName===r}));if(void 0===a)continue;let o=0;const l=i.getValueSize();i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(o=l/3);let c=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=h/3);const u=i.times.length-1;let d;if(s<=i.times[0]){const t=o,e=l-o;d=i.values.slice(t,e);}else if(s>=i.times[u]){const t=u*l+o,e=t+l-o;d=i.values.slice(t,e);}else {const t=i.createInterpolant(),e=o,n=l-o;t.evaluate(s),d=t.resultBuffer.slice(e,n);}if("quaternion"===r){(new Ii).fromArray(d).normalize().conjugate().toArray(d);}const p=a.times.length;for(let t=0;t<p;++t){const e=t*h+c;if("quaternion"===r)Ii.multiplyQuaternionsFlat(a.values,e,d,0,a.values,e);else {const t=h-2*c;for(let n=0;n<t;++n)a.values[e+n]-=d[n];}}}return t.blendMode=Oe,t}};class xd{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={};}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let s=n+2;;){if(void 0===i){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===s)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(t>=r)break t;{const a=e[1];t<a&&(n=2,r=a);for(let s=n-2;;){if(void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(n===s)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;}}for(;n<s;){const i=n+s>>>1;t<e[i]?s=i:n=i+1;}if(i=e[n],r=e[n-1],void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===i)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i);}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let t=0;t!==i;++t)e[t]=n[r+t];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yd extends xd{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie};}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(void 0===a)switch(this.getSettings_().endingStart){case Ue:r=t,a=2*e-n;break;case Ne:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n;}if(void 0===o)switch(this.getSettings_().endingEnd){case Ue:s=t,o=2*n-e;break;case Ne:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e;}const l=.5*(n-e),c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c;}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),m=p*p,f=m*p,g=-u*f+2*u*m-u*p,_=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,v=(-1-d)*f+(1.5+d)*m+.5*p,x=d*f-d*m;for(let t=0;t!==a;++t)r[t]=g*s[c+t]+_*s[l+t]+v*s[o+t]+x*s[h+t];return r}}class Md extends xd{constructor(t,e,n,i){super(t,e,n,i);}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let t=0;t!==a;++t)r[t]=s[l+t]*h+s[o+t]*c;return r}}class Sd extends xd{constructor(t,e,n,i){super(t,e,n,i);}interpolate_(t){return this.copySampleValue_(t-1)}}class bd{constructor(t,e,n,i){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pd(e,this.TimeBufferType),this.values=pd(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation);}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else {n={name:t.name,times:pd(t.times,Array),values:pd(t.values,Array)};const e=t.getInterpolation();e!==t.DefaultInterpolation&&(n.interpolation=e);}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ce:e=this.InterpolantFactoryMethodDiscrete;break;case Pe:e=this.InterpolantFactoryMethodLinear;break;case Le:e=this.InterpolantFactoryMethodSmooth;}if(void 0===e){const e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(e);this.setInterpolation(this.DefaultInterpolation);}return console.warn("THREE.KeyframeTrack:",e),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ce;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Le}}getValueSize(){return this.values.length/this.times.length}shift(t){if(0!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;}return this}scale(t){if(1!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;-1!==s&&n[s]>e;)--s;if(++s,0!==r||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const t=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*t,s*t);}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let e=0;e!==r;e++){const i=n[e];if("number"==typeof i&&isNaN(i)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,e,i),t=!1;break}if(null!==s&&s>i){console.error("THREE.KeyframeTrack: Out of order keys.",this,e,i,s),t=!1;break}s=i;}if(void 0!==i&&md(i))for(let e=0,n=i.length;e!==n;++e){const n=i[e];if(isNaN(n)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,e,n),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Le,r=t.length-1;let s=1;for(let a=1;a<r;++a){let r=!1;const o=t[a];if(o!==t[a+1]&&(1!==a||o!==t[0]))if(i)r=!0;else {const t=a*n,i=t-n,s=t+n;for(let a=0;a!==n;++a){const n=e[t+a];if(n!==e[i+a]||n!==e[s+a]){r=!0;break}}}if(r){if(a!==s){t[s]=t[a];const i=a*n,r=s*n;for(let t=0;t!==n;++t)e[r+t]=e[i+t];}++s;}}if(r>0){t[s]=t[r];for(let t=r*n,i=s*n,a=0;a!==n;++a)e[i+a]=e[t+a];++s;}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=new(this.constructor)(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}bd.prototype.TimeBufferType=Float32Array,bd.prototype.ValueBufferType=Float32Array,bd.prototype.DefaultInterpolation=Pe;class Ed extends bd{}Ed.prototype.ValueTypeName="bool",Ed.prototype.ValueBufferType=Array,Ed.prototype.DefaultInterpolation=Ce,Ed.prototype.InterpolantFactoryMethodLinear=void 0,Ed.prototype.InterpolantFactoryMethodSmooth=void 0;class Td extends bd{}Td.prototype.ValueTypeName="color";class wd extends bd{}wd.prototype.ValueTypeName="number";class Ad extends xd{constructor(t,e,n,i){super(t,e,n,i);}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let t=l+a;l!==t;l+=4)Ii.slerpFlat(r,0,s,l-a,s,l,o);return r}}class Rd extends bd{InterpolantFactoryMethodLinear(t){return new Ad(this.times,this.values,this.getValueSize(),t)}}Rd.prototype.ValueTypeName="quaternion",Rd.prototype.DefaultInterpolation=Pe,Rd.prototype.InterpolantFactoryMethodSmooth=void 0;class Cd extends bd{}Cd.prototype.ValueTypeName="string",Cd.prototype.ValueBufferType=Array,Cd.prototype.DefaultInterpolation=Ce,Cd.prototype.InterpolantFactoryMethodLinear=void 0,Cd.prototype.InterpolantFactoryMethodSmooth=void 0;class Pd extends bd{}Pd.prototype.ValueTypeName="vector";class Ld{constructor(t,e=-1,n,i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration();}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let t=0,r=n.length;t!==r;++t)e.push(Id(n[t]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let t=0,i=n.length;t!==i;++t)e.push(bd.toJSON(n[t]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,s=[];for(let t=0;t<r;t++){let a=[],o=[];a.push((t+r-1)%r,t,(t+1)%r),o.push(0,1,0);const l=fd(a);a=gd(a,1,l),o=gd(o,1,l),i||0!==a[0]||(a.push(r),o.push(o[0])),s.push(new wd(".morphTargetInfluences["+e[t].name+"]",a,o).scale(1/n));}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const e=t;n=e.geometry&&e.geometry.animations||e.animations;}for(let t=0;t<n.length;t++)if(n[t].name===e)return n[t];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let e=0,n=t.length;e<n;e++){const n=t[e],s=n.name.match(r);if(s&&s.length>1){const t=s[1];let e=i[t];e||(i[t]=e=[]),e.push(n);}}const s=[];for(const t in i)s.push(this.CreateFromMorphTargetSequence(t,i[t],e,n));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(t,e,n,i,r){if(0!==n.length){const s=[],a=[];_d(n,s,a,i),0!==s.length&&r.push(new t(e,s,a));}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let o=t.length||-1;const l=t.hierarchy||[];for(let t=0;t<l.length;t++){const r=l[t].keys;if(r&&0!==r.length)if(r[0].morphTargets){const t={};let e;for(e=0;e<r.length;e++)if(r[e].morphTargets)for(let n=0;n<r[e].morphTargets.length;n++)t[r[e].morphTargets[n]]=-1;for(const n in t){const t=[],s=[];for(let i=0;i!==r[e].morphTargets.length;++i){const i=r[e];t.push(i.time),s.push(i.morphTarget===n?1:0);}i.push(new wd(".morphTargetInfluence["+n+"]",t,s));}o=t.length*s;}else {const s=".bones["+e[t].name+"]";n(Pd,s+".position",r,"pos",i),n(Rd,s+".quaternion",r,"rot",i),n(Pd,s+".scale",r,"scl",i);}}if(0===i.length)return null;return new this(r,o,i,a)}resetDuration(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){const n=this.tracks[e];t=Math.max(t,n.times[n.times.length-1]);}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Id(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wd;case"vector":case"vector2":case"vector3":case"vector4":return Pd;case"color":return Td;case"quaternion":return Rd;case"bool":case"boolean":return Ed;case"string":return Cd}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type);if(void 0===t.times){const e=[],n=[];_d(t.keys,e,n,"value"),t.times=e,t.values=n;}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const Ud={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e);},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t];},clear:function(){this.files={};}};class Nd{constructor(t,e,n){const i=this;let r,s=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){o++,!1===s&&void 0!==i.onStart&&i.onStart(t,a,o),s=!0;},this.itemEnd=function(t){a++,void 0!==i.onProgress&&i.onProgress(t,a,o),a===o&&(s=!1,void 0!==i.onLoad&&i.onLoad());},this.itemError=function(t){void 0!==i.onError&&i.onError(t);},this.resolveURL=function(t){return r?r(t):t},this.setURLModifier=function(t){return r=t,this},this.addHandler=function(t,e){return l.push(t,e),this},this.removeHandler=function(t){const e=l.indexOf(t);return -1!==e&&l.splice(e,2),this},this.getHandler=function(t){for(let e=0,n=l.length;e<n;e+=2){const n=l[e],i=l[e+1];if(n.global&&(n.lastIndex=0),n.test(t))return i}return null};}}const Dd=new Nd;class Od{constructor(t){this.manager=void 0!==t?t:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={};}load(){}loadAsync(t,e){const n=this;return new Promise((function(i,r){n.load(t,i,e,r);}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Od.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fd={};class Bd extends Error{constructor(t,e){super(t),this.response=e;}}class zd extends Od{constructor(t){super(t);}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ud.get(t);if(void 0!==r)return this.manager.itemStart(t),setTimeout((()=>{e&&e(r),this.manager.itemEnd(t);}),0),r;if(void 0!==Fd[t])return void Fd[t].push({onLoad:e,onProgress:n,onError:i});Fd[t]=[],Fd[t].push({onLoad:e,onProgress:n,onError:i});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType;fetch(s).then((e=>{if(200===e.status||0===e.status){if(0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===e.body||void 0===e.body.getReader)return e;const n=Fd[t],i=e.body.getReader(),r=e.headers.get("Content-Length")||e.headers.get("X-File-Size"),s=r?parseInt(r):0,a=0!==s;let o=0;const l=new ReadableStream({start(t){!function e(){i.read().then((({done:i,value:r})=>{if(i)t.close();else {o+=r.byteLength;const i=new ProgressEvent("progress",{lengthComputable:a,loaded:o,total:s});for(let t=0,e=n.length;t<e;t++){const e=n[t];e.onProgress&&e.onProgress(i);}t.enqueue(r),e();}}));}();}});return new Response(l)}throw new Bd(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)})).then((t=>{switch(o){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"document":return t.text().then((t=>(new DOMParser).parseFromString(t,a)));case"json":return t.json();default:if(void 0===a)return t.text();{const e=/charset="?([^;"\s]*)"?/i.exec(a),n=e&&e[1]?e[1].toLowerCase():void 0,i=new TextDecoder(n);return t.arrayBuffer().then((t=>i.decode(t)))}}})).then((e=>{Ud.add(t,e);const n=Fd[t];delete Fd[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onLoad&&i.onLoad(e);}})).catch((e=>{const n=Fd[t];if(void 0===n)throw this.manager.itemError(t),e;delete Fd[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onError&&i.onError(e);}this.manager.itemError(t);})).finally((()=>{this.manager.itemEnd(t);})),this.manager.itemStart(t);}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Hd extends Od{constructor(t){super(t);}load(t,e,n,i){const r=this,s=new zd(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)));}catch(e){i?i(e):console.error(e),r.manager.itemError(t);}}),n,i);}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Ld.parse(t[n]);e.push(i);}return e}}class Vd extends Od{constructor(t){super(t);}load(t,e,n,i){const r=this,s=[],a=new Ph,o=new zd(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(c){o.load(t[c],(function(t){const n=r.parse(t,!0);s[c]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},l+=1,6===l&&(1===n.mipmapCount&&(a.minFilter=Mt),a.image=s,a.format=n.format,a.needsUpdate=!0,e&&e(a));}),n,i);}if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)c(e);else o.load(t,(function(t){const n=r.parse(t,!0);if(n.isCubemap){const t=n.mipmaps.length/n.mipmapCount;for(let e=0;e<t;e++){s[e]={mipmaps:[]};for(let t=0;t<n.mipmapCount;t++)s[e].mipmaps.push(n.mipmaps[e*n.mipmapCount+t]),s[e].format=n.format,s[e].width=n.width,s[e].height=n.height;}a.image=s;}else a.image.width=n.width,a.image.height=n.height,a.mipmaps=n.mipmaps;1===n.mipmapCount&&(a.minFilter=Mt),a.format=n.format,a.needsUpdate=!0,e&&e(a);}),n,i);return a}}class kd extends Od{constructor(t){super(t);}load(t,e,n,i){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Ud.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t);}),0),s;const a=ai("img");function o(){c(),Ud.add(t,this),e&&e(this),r.manager.itemEnd(t);}function l(e){c(),i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t);}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1);}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Gd extends Od{constructor(t){super(t);}load(t,e,n,i){const r=new ia;r.colorSpace=qe;const s=new kd(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(n){s.load(t[n],(function(t){r.images[n]=t,a++,6===a&&(r.needsUpdate=!0,e&&e(r));}),void 0,i);}for(let e=0;e<t.length;++e)o(e);return r}}class Wd extends Od{constructor(t){super(t);}load(t,e,n,i){const r=this,s=new Nc,a=new zd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,(function(t){let n;try{n=r.parse(t);}catch(t){if(void 0===i)return void console.error(t);i(t);}void 0!==n.image?s.image=n.image:void 0!==n.data&&(s.image.width=n.width,s.image.height=n.height,s.image.data=n.data),s.wrapS=void 0!==n.wrapS?n.wrapS:mt,s.wrapT=void 0!==n.wrapT?n.wrapT:mt,s.magFilter=void 0!==n.magFilter?n.magFilter:Mt,s.minFilter=void 0!==n.minFilter?n.minFilter:Mt,s.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.colorSpace?s.colorSpace=n.colorSpace:void 0!==n.encoding&&(s.encoding=n.encoding),void 0!==n.flipY&&(s.flipY=n.flipY),void 0!==n.format&&(s.format=n.format),void 0!==n.type&&(s.type=n.type),void 0!==n.mipmaps&&(s.mipmaps=n.mipmaps,s.minFilter=Et),1===n.mipmapCount&&(s.minFilter=Mt),void 0!==n.generateMipmaps&&(s.generateMipmaps=n.generateMipmaps),s.needsUpdate=!0,e&&e(s,n);}),n,i),s}}class Xd extends Od{constructor(t){super(t);}load(t,e,n,i){const r=new bi,s=new kd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,(function(t){r.image=t,r.needsUpdate=!0,void 0!==e&&e(r);}),n,i),r}}class jd extends Nr{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kr(t),this.intensity=e;}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}class qd extends jd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kr(e);}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yd=new cr,Zd=new Ui,Jd=new Ui;class Kd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ti(512,512),this.map=null,this.mapPass=null,this.matrix=new cr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new ti(1,1),this._viewportCount=1,this._viewports=[new Ei(0,0,1,1)];}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zd),Jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jd),e.updateMatrixWorld(),Yd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yd);}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose();}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return (new this.constructor).copy(this)}toJSON(){const t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $d extends Kd{constructor(){super(new ta(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1;}updateMatrices(t){const e=this.camera,n=2*Wn*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t);}copy(t){return super.copy(t),this.focus=t.focus,this}}class Qd extends jd{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nr.DEFAULT_UP),this.updateMatrix(),this.target=new Nr,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new $d;}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI;}dispose(){this.shadow.dispose();}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const tp=new cr,ep=new Ui,np=new Ui;class ip extends Kd{constructor(){super(new ta(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ti(4,2),this._viewportCount=6,this._viewports=[new Ei(2,1,1,1),new Ei(0,1,1,1),new Ei(3,1,1,1),new Ei(1,1,1,1),new Ei(3,0,1,1),new Ei(1,0,1,1)],this._cubeDirections=[new Ui(1,0,0),new Ui(-1,0,0),new Ui(0,0,1),new Ui(0,0,-1),new Ui(0,1,0),new Ui(0,-1,0)],this._cubeUps=[new Ui(0,1,0),new Ui(0,1,0),new Ui(0,1,0),new Ui(0,1,0),new Ui(0,0,1),new Ui(0,0,-1)];}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ep.setFromMatrixPosition(t.matrixWorld),n.position.copy(ep),np.copy(n.position),np.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(np),n.updateMatrixWorld(),i.makeTranslation(-ep.x,-ep.y,-ep.z),tp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tp);}}class rp extends jd{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ip;}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI);}dispose(){this.shadow.dispose();}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sp extends Kd{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0;}}class ap extends jd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nr.DEFAULT_UP),this.updateMatrix(),this.target=new Nr,this.shadow=new sp;}dispose(){this.shadow.dispose();}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class op extends jd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight";}}class lp extends jd{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i;}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI);}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class cp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new Ui);}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.282095),e.addScaledVector(s[1],.488603*i),e.addScaledVector(s[2],.488603*r),e.addScaledVector(s[3],.488603*n),e.addScaledVector(s[4],n*i*1.092548),e.addScaledVector(s[5],i*r*1.092548),e.addScaledVector(s[6],.315392*(3*r*r-1)),e.addScaledVector(s[7],n*r*1.092548),e.addScaledVector(s[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.886227),e.addScaledVector(s[1],1.023328*i),e.addScaledVector(s[2],1.023328*r),e.addScaledVector(s[3],1.023328*n),e.addScaledVector(s[4],.858086*n*i),e.addScaledVector(s[5],.858086*i*r),e.addScaledVector(s[6],.743125*r*r-.247708),e.addScaledVector(s[7],.858086*n*r),e.addScaledVector(s[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return !1;return !0}copy(t){return this.set(t.coefficients)}clone(){return (new this.constructor).copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+3*i);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+3*i);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i);}}class hp extends jd{constructor(t=new cp,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t;}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class up extends Od{constructor(t){super(t),this.textures={};}load(t,e,n,i){const r=this,s=new zd(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)));}catch(e){i?i(e):console.error(e),r.manager.itemError(t);}}),n,i);}parse(t){const e=this.textures;function n(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}const i=up.createMaterialFromType(t.type);if(void 0!==t.uuid&&(i.uuid=t.uuid),void 0!==t.name&&(i.name=t.name),void 0!==t.color&&void 0!==i.color&&i.color.setHex(t.color),void 0!==t.roughness&&(i.roughness=t.roughness),void 0!==t.metalness&&(i.metalness=t.metalness),void 0!==t.sheen&&(i.sheen=t.sheen),void 0!==t.sheenColor&&(i.sheenColor=(new Kr).setHex(t.sheenColor)),void 0!==t.sheenRoughness&&(i.sheenRoughness=t.sheenRoughness),void 0!==t.emissive&&void 0!==i.emissive&&i.emissive.setHex(t.emissive),void 0!==t.specular&&void 0!==i.specular&&i.specular.setHex(t.specular),void 0!==t.specularIntensity&&(i.specularIntensity=t.specularIntensity),void 0!==t.specularColor&&void 0!==i.specularColor&&i.specularColor.setHex(t.specularColor),void 0!==t.shininess&&(i.shininess=t.shininess),void 0!==t.clearcoat&&(i.clearcoat=t.clearcoat),void 0!==t.clearcoatRoughness&&(i.clearcoatRoughness=t.clearcoatRoughness),void 0!==t.iridescence&&(i.iridescence=t.iridescence),void 0!==t.iridescenceIOR&&(i.iridescenceIOR=t.iridescenceIOR),void 0!==t.iridescenceThicknessRange&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),void 0!==t.transmission&&(i.transmission=t.transmission),void 0!==t.thickness&&(i.thickness=t.thickness),void 0!==t.attenuationDistance&&(i.attenuationDistance=t.attenuationDistance),void 0!==t.attenuationColor&&void 0!==i.attenuationColor&&i.attenuationColor.setHex(t.attenuationColor),void 0!==t.anisotropy&&(i.anisotropy=t.anisotropy),void 0!==t.anisotropyRotation&&(i.anisotropyRotation=t.anisotropyRotation),void 0!==t.fog&&(i.fog=t.fog),void 0!==t.flatShading&&(i.flatShading=t.flatShading),void 0!==t.blending&&(i.blending=t.blending),void 0!==t.combine&&(i.combine=t.combine),void 0!==t.side&&(i.side=t.side),void 0!==t.shadowSide&&(i.shadowSide=t.shadowSide),void 0!==t.opacity&&(i.opacity=t.opacity),void 0!==t.transparent&&(i.transparent=t.transparent),void 0!==t.alphaTest&&(i.alphaTest=t.alphaTest),void 0!==t.alphaHash&&(i.alphaHash=t.alphaHash),void 0!==t.depthFunc&&(i.depthFunc=t.depthFunc),void 0!==t.depthTest&&(i.depthTest=t.depthTest),void 0!==t.depthWrite&&(i.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(i.colorWrite=t.colorWrite),void 0!==t.blendSrc&&(i.blendSrc=t.blendSrc),void 0!==t.blendDst&&(i.blendDst=t.blendDst),void 0!==t.blendEquation&&(i.blendEquation=t.blendEquation),void 0!==t.blendSrcAlpha&&(i.blendSrcAlpha=t.blendSrcAlpha),void 0!==t.blendDstAlpha&&(i.blendDstAlpha=t.blendDstAlpha),void 0!==t.blendEquationAlpha&&(i.blendEquationAlpha=t.blendEquationAlpha),void 0!==t.blendColor&&void 0!==i.blendColor&&i.blendColor.setHex(t.blendColor),void 0!==t.blendAlpha&&(i.blendAlpha=t.blendAlpha),void 0!==t.stencilWriteMask&&(i.stencilWriteMask=t.stencilWriteMask),void 0!==t.stencilFunc&&(i.stencilFunc=t.stencilFunc),void 0!==t.stencilRef&&(i.stencilRef=t.stencilRef),void 0!==t.stencilFuncMask&&(i.stencilFuncMask=t.stencilFuncMask),void 0!==t.stencilFail&&(i.stencilFail=t.stencilFail),void 0!==t.stencilZFail&&(i.stencilZFail=t.stencilZFail),void 0!==t.stencilZPass&&(i.stencilZPass=t.stencilZPass),void 0!==t.stencilWrite&&(i.stencilWrite=t.stencilWrite),void 0!==t.wireframe&&(i.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(i.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(i.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(i.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(i.rotation=t.rotation),void 0!==t.linewidth&&(i.linewidth=t.linewidth),void 0!==t.dashSize&&(i.dashSize=t.dashSize),void 0!==t.gapSize&&(i.gapSize=t.gapSize),void 0!==t.scale&&(i.scale=t.scale),void 0!==t.polygonOffset&&(i.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(i.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(i.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.dithering&&(i.dithering=t.dithering),void 0!==t.alphaToCoverage&&(i.alphaToCoverage=t.alphaToCoverage),void 0!==t.premultipliedAlpha&&(i.premultipliedAlpha=t.premultipliedAlpha),void 0!==t.forceSinglePass&&(i.forceSinglePass=t.forceSinglePass),void 0!==t.visible&&(i.visible=t.visible),void 0!==t.toneMapped&&(i.toneMapped=t.toneMapped),void 0!==t.userData&&(i.userData=t.userData),void 0!==t.vertexColors&&("number"==typeof t.vertexColors?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),void 0!==t.uniforms)for(const e in t.uniforms){const r=t.uniforms[e];switch(i.uniforms[e]={},r.type){case"t":i.uniforms[e].value=n(r.value);break;case"c":i.uniforms[e].value=(new Kr).setHex(r.value);break;case"v2":i.uniforms[e].value=(new ti).fromArray(r.value);break;case"v3":i.uniforms[e].value=(new Ui).fromArray(r.value);break;case"v4":i.uniforms[e].value=(new Ei).fromArray(r.value);break;case"m3":i.uniforms[e].value=(new ei).fromArray(r.value);break;case"m4":i.uniforms[e].value=(new cr).fromArray(r.value);break;default:i.uniforms[e].value=r.value;}}if(void 0!==t.defines&&(i.defines=t.defines),void 0!==t.vertexShader&&(i.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(i.fragmentShader=t.fragmentShader),void 0!==t.glslVersion&&(i.glslVersion=t.glslVersion),void 0!==t.extensions)for(const e in t.extensions)i.extensions[e]=t.extensions[e];if(void 0!==t.lights&&(i.lights=t.lights),void 0!==t.clipping&&(i.clipping=t.clipping),void 0!==t.size&&(i.size=t.size),void 0!==t.sizeAttenuation&&(i.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(i.map=n(t.map)),void 0!==t.matcap&&(i.matcap=n(t.matcap)),void 0!==t.alphaMap&&(i.alphaMap=n(t.alphaMap)),void 0!==t.bumpMap&&(i.bumpMap=n(t.bumpMap)),void 0!==t.bumpScale&&(i.bumpScale=t.bumpScale),void 0!==t.normalMap&&(i.normalMap=n(t.normalMap)),void 0!==t.normalMapType&&(i.normalMapType=t.normalMapType),void 0!==t.normalScale){let e=t.normalScale;!1===Array.isArray(e)&&(e=[e,e]),i.normalScale=(new ti).fromArray(e);}return void 0!==t.displacementMap&&(i.displacementMap=n(t.displacementMap)),void 0!==t.displacementScale&&(i.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(i.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(i.roughnessMap=n(t.roughnessMap)),void 0!==t.metalnessMap&&(i.metalnessMap=n(t.metalnessMap)),void 0!==t.emissiveMap&&(i.emissiveMap=n(t.emissiveMap)),void 0!==t.emissiveIntensity&&(i.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(i.specularMap=n(t.specularMap)),void 0!==t.specularIntensityMap&&(i.specularIntensityMap=n(t.specularIntensityMap)),void 0!==t.specularColorMap&&(i.specularColorMap=n(t.specularColorMap)),void 0!==t.envMap&&(i.envMap=n(t.envMap)),void 0!==t.envMapIntensity&&(i.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(i.reflectivity=t.reflectivity),void 0!==t.refractionRatio&&(i.refractionRatio=t.refractionRatio),void 0!==t.lightMap&&(i.lightMap=n(t.lightMap)),void 0!==t.lightMapIntensity&&(i.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(i.aoMap=n(t.aoMap)),void 0!==t.aoMapIntensity&&(i.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(i.gradientMap=n(t.gradientMap)),void 0!==t.clearcoatMap&&(i.clearcoatMap=n(t.clearcoatMap)),void 0!==t.clearcoatRoughnessMap&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),void 0!==t.clearcoatNormalMap&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),void 0!==t.clearcoatNormalScale&&(i.clearcoatNormalScale=(new ti).fromArray(t.clearcoatNormalScale)),void 0!==t.iridescenceMap&&(i.iridescenceMap=n(t.iridescenceMap)),void 0!==t.iridescenceThicknessMap&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),void 0!==t.transmissionMap&&(i.transmissionMap=n(t.transmissionMap)),void 0!==t.thicknessMap&&(i.thicknessMap=n(t.thicknessMap)),void 0!==t.anisotropyMap&&(i.anisotropyMap=n(t.anisotropyMap)),void 0!==t.sheenColorMap&&(i.sheenColorMap=n(t.sheenColorMap)),void 0!==t.sheenRoughnessMap&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){return new{ShadowMaterial:id,SpriteMaterial:rc,RawShaderMaterial:rd,ShaderMaterial:$s,PointsMaterial:Mh,MeshPhysicalMaterial:ad,MeshStandardMaterial:sd,MeshPhongMaterial:od,MeshToonMaterial:ld,MeshNormalMaterial:cd,MeshLambertMaterial:hd,MeshDepthMaterial:Fl,MeshDistanceMaterial:Bl,MeshBasicMaterial:es,MeshMatcapMaterial:ud,LineDashedMaterial:dd,LineBasicMaterial:hh,Material:ts}[t]}}class dp{static decodeText(t){if("undefined"!=typeof TextDecoder)return (new TextDecoder).decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(t){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return -1===e?"./":t.slice(0,e+1)}static resolveURL(t,e){return "string"!=typeof t||""===t?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class pp extends As{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0;}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class mp extends Od{constructor(t){super(t);}load(t,e,n,i){const r=this,s=new zd(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)));}catch(e){i?i(e):console.error(e),r.manager.itemError(t);}}),n,i);}parse(t){const e={},n={};function i(t,i){if(void 0!==e[i])return e[i];const r=t.interleavedBuffers[i],s=function(t,e){if(void 0!==n[e])return n[e];const i=t.arrayBuffers,r=i[e],s=new Uint32Array(r).buffer;return n[e]=s,s}(t,r.buffer),a=si(r.type,s),o=new ec(a,r.stride);return o.uuid=r.uuid,e[i]=o,o}const r=t.isInstancedBufferGeometry?new pp:new As,s=t.data.index;if(void 0!==s){const t=si(s.type,s.array);r.setIndex(new cs(t,1));}const a=t.data.attributes;for(const e in a){const n=a[e];let s;if(n.isInterleavedBufferAttribute){const e=i(t.data,n.data);s=new ic(e,n.itemSize,n.offset,n.normalized);}else {const t=si(n.type,n.array);s=new(n.isInstancedBufferAttribute?Bc:cs)(t,n.itemSize,n.normalized);}void 0!==n.name&&(s.name=n.name),void 0!==n.usage&&s.setUsage(n.usage),r.setAttribute(e,s);}const o=t.data.morphAttributes;if(o)for(const e in o){const n=o[e],s=[];for(let e=0,r=n.length;e<r;e++){const r=n[e];let a;if(r.isInterleavedBufferAttribute){const e=i(t.data,r.data);a=new ic(e,r.itemSize,r.offset,r.normalized);}else {const t=si(r.type,r.array);a=new cs(t,r.itemSize,r.normalized);}void 0!==r.name&&(a.name=r.name),s.push(a);}r.morphAttributes[e]=s;}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const l=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==l)for(let t=0,e=l.length;t!==e;++t){const e=l[t];r.addGroup(e.start,e.count,e.materialIndex);}const c=t.data.boundingSphere;if(void 0!==c){const t=new Ui;void 0!==c.center&&t.fromArray(c.center),r.boundingSphere=new tr(t,c.radius);}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}}class fp extends Od{constructor(t){super(t);}load(t,e,n,i){const r=this,s=""===this.path?dp.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||s;const a=new zd(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,(function(n){let s=null;try{s=JSON.parse(n);}catch(e){return void 0!==i&&i(e),void console.error("THREE:ObjectLoader: Can't parse "+t+".",e.message)}const a=s.metadata;if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())return void 0!==i&&i(new Error("THREE.ObjectLoader: Can't load "+t)),void console.error("THREE.ObjectLoader: Can't load "+t);r.parse(s,e);}),n,i);}async loadAsync(t,e){const n=""===this.path?dp.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||n;const i=new zd(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);const r=await i.loadAsync(t,e),s=JSON.parse(r),a=s.metadata;if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())throw new Error("THREE.ObjectLoader: Can't load "+t);return await this.parseAsync(s)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),s=this.parseImages(t.images,(function(){void 0!==e&&e(l);})),a=this.parseTextures(t.textures,s),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,o,a,n),c=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,c),void 0!==e){let t=!1;for(const e in s)if(s[e].data instanceof HTMLImageElement){t=!0;break}!1===t&&e(l);}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),s=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,s),o=this.parseObject(t.object,i,a,s,e),l=this.parseSkeletons(t.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(t){const e={};if(void 0!==t)for(let n=0,i=t.length;n<i;n++){const i=(new mu).fromJSON(t[n]);e[i.uuid]=i;}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse((function(t){t.isBone&&(i[t.uuid]=t);})),void 0!==t)for(let e=0,r=t.length;e<r;e++){const r=(new Fc).fromJSON(t[e],i);n[r.uuid]=r;}return n}parseGeometries(t,e){const n={};if(void 0!==t){const i=new mp;for(let r=0,s=t.length;r<s;r++){let s;const a=t[r];switch(a.type){case"BufferGeometry":case"InstancedBufferGeometry":s=i.parse(a);break;default:a.type in nd?s=nd[a.type].fromJSON(a,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);}s.uuid=a.uuid,void 0!==a.name&&(s.name=a.name),void 0!==a.userData&&(s.userData=a.userData),n[a.uuid]=s;}}return n}parseMaterials(t,e){const n={},i={};if(void 0!==t){const r=new up;r.setTextures(e);for(let e=0,s=t.length;e<s;e++){const s=t[e];void 0===n[s.uuid]&&(n[s.uuid]=r.parse(s)),i[s.uuid]=n[s.uuid];}}return i}parseAnimations(t){const e={};if(void 0!==t)for(let n=0;n<t.length;n++){const i=t[n],r=Ld.parse(i);e[r.uuid]=r;}return e}parseImages(t,e){const n=this,i={};let r;function s(t){if("string"==typeof t){const e=t;return function(t){return n.manager.itemStart(t),r.load(t,(function(){n.manager.itemEnd(t);}),void 0,(function(){n.manager.itemError(t),n.manager.itemEnd(t);}))}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e:n.resourcePath+e)}return t.data?{data:si(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){const n=new Nd(e);r=new kd(n),r.setCrossOrigin(this.crossOrigin);for(let e=0,n=t.length;e<n;e++){const n=t[e],r=n.url;if(Array.isArray(r)){const t=[];for(let e=0,n=r.length;e<n;e++){const n=s(r[e]);null!==n&&(n instanceof HTMLImageElement?t.push(n):t.push(new Nc(n.data,n.width,n.height)));}i[n.uuid]=new yi(t);}else {const t=s(n.url);i[n.uuid]=new yi(t);}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(t){if("string"==typeof t){const n=t,r=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)?n:e.resourcePath+n;return await i.loadAsync(r)}return t.data?{data:si(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){i=new kd(this.manager),i.setCrossOrigin(this.crossOrigin);for(let e=0,i=t.length;e<i;e++){const i=t[e],s=i.url;if(Array.isArray(s)){const t=[];for(let e=0,n=s.length;e<n;e++){const n=s[e],i=await r(n);null!==i&&(i instanceof HTMLImageElement?t.push(i):t.push(new Nc(i.data,i.width,i.height)));}n[i.uuid]=new yi(t);}else {const t=await r(i.url);n[i.uuid]=new yi(t);}}}return n}parseTextures(t,e){function n(t,e){return "number"==typeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",t),e[t])}const i={};if(void 0!==t)for(let r=0,s=t.length;r<s;r++){const s=t[r];void 0===s.image&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),void 0===e[s.image]&&console.warn("THREE.ObjectLoader: Undefined image",s.image);const a=e[s.image],o=a.data;let l;Array.isArray(o)?(l=new ia,6===o.length&&(l.needsUpdate=!0)):(l=o&&o.data?new Nc:new bi,o&&(l.needsUpdate=!0)),l.source=a,l.uuid=s.uuid,void 0!==s.name&&(l.name=s.name),void 0!==s.mapping&&(l.mapping=n(s.mapping,gp)),void 0!==s.channel&&(l.channel=s.channel),void 0!==s.offset&&l.offset.fromArray(s.offset),void 0!==s.repeat&&l.repeat.fromArray(s.repeat),void 0!==s.center&&l.center.fromArray(s.center),void 0!==s.rotation&&(l.rotation=s.rotation),void 0!==s.wrap&&(l.wrapS=n(s.wrap[0],_p),l.wrapT=n(s.wrap[1],_p)),void 0!==s.format&&(l.format=s.format),void 0!==s.internalFormat&&(l.internalFormat=s.internalFormat),void 0!==s.type&&(l.type=s.type),void 0!==s.colorSpace&&(l.colorSpace=s.colorSpace),void 0!==s.encoding&&(l.encoding=s.encoding),void 0!==s.minFilter&&(l.minFilter=n(s.minFilter,vp)),void 0!==s.magFilter&&(l.magFilter=n(s.magFilter,vp)),void 0!==s.anisotropy&&(l.anisotropy=s.anisotropy),void 0!==s.flipY&&(l.flipY=s.flipY),void 0!==s.generateMipmaps&&(l.generateMipmaps=s.generateMipmaps),void 0!==s.premultiplyAlpha&&(l.premultiplyAlpha=s.premultiplyAlpha),void 0!==s.unpackAlignment&&(l.unpackAlignment=s.unpackAlignment),void 0!==s.compareFunction&&(l.compareFunction=s.compareFunction),void 0!==s.userData&&(l.userData=s.userData),i[s.uuid]=l;}return i}parseObject(t,e,n,i,r){let s,a,o;function l(t){return void 0===e[t]&&console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function c(t){if(void 0!==t){if(Array.isArray(t)){const e=[];for(let i=0,r=t.length;i<r;i++){const r=t[i];void 0===n[r]&&console.warn("THREE.ObjectLoader: Undefined material",r),e.push(n[r]);}return e}return void 0===n[t]&&console.warn("THREE.ObjectLoader: Undefined material",t),n[t]}}function h(t){return void 0===i[t]&&console.warn("THREE.ObjectLoader: Undefined texture",t),i[t]}switch(t.type){case"Scene":s=new tc,void 0!==t.background&&(Number.isInteger(t.background)?s.background=new Kr(t.background):s.background=h(t.background)),void 0!==t.environment&&(s.environment=h(t.environment)),void 0!==t.fog&&("Fog"===t.fog.type?s.fog=new Ql(t.fog.color,t.fog.near,t.fog.far):"FogExp2"===t.fog.type&&(s.fog=new $l(t.fog.color,t.fog.density)),""!==t.fog.name&&(s.fog.name=t.fog.name)),void 0!==t.backgroundBlurriness&&(s.backgroundBlurriness=t.backgroundBlurriness),void 0!==t.backgroundIntensity&&(s.backgroundIntensity=t.backgroundIntensity);break;case"PerspectiveCamera":s=new ta(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(s.focus=t.focus),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.filmGauge&&(s.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(s.filmOffset=t.filmOffset),void 0!==t.view&&(s.view=Object.assign({},t.view));break;case"OrthographicCamera":s=new Ta(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.view&&(s.view=Object.assign({},t.view));break;case"AmbientLight":s=new op(t.color,t.intensity);break;case"DirectionalLight":s=new ap(t.color,t.intensity);break;case"PointLight":s=new rp(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":s=new lp(t.color,t.intensity,t.width,t.height);break;case"SpotLight":s=new Qd(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":s=new qd(t.color,t.groundColor,t.intensity);break;case"LightProbe":s=(new hp).fromJSON(t);break;case"SkinnedMesh":a=l(t.geometry),o=c(t.material),s=new Ic(a,o),void 0!==t.bindMode&&(s.bindMode=t.bindMode),void 0!==t.bindMatrix&&s.bindMatrix.fromArray(t.bindMatrix),void 0!==t.skeleton&&(s.skeleton=t.skeleton);break;case"Mesh":a=l(t.geometry),o=c(t.material),s=new Xs(a,o);break;case"InstancedMesh":a=l(t.geometry),o=c(t.material);const e=t.count,n=t.instanceMatrix,i=t.instanceColor;s=new jc(a,o,e),s.instanceMatrix=new Bc(new Float32Array(n.array),16),void 0!==i&&(s.instanceColor=new Bc(new Float32Array(i.array),i.itemSize));break;case"BatchedMesh":a=l(t.geometry),o=c(t.material),s=new ch(t.maxGeometryCount,t.maxVertexCount,t.maxIndexCount,o),s.geometry=a,s.perObjectFrustumCulled=t.perObjectFrustumCulled,s.sortObjects=t.sortObjects,s._drawRanges=t.drawRanges,s._reservedRanges=t.reservedRanges,s._visibility=t.visibility,s._active=t.active,s._bounds=t.bounds.map((t=>{const e=new Oi;e.min.fromArray(t.boxMin),e.max.fromArray(t.boxMax);const n=new tr;return n.radius=t.sphereRadius,n.center.fromArray(t.sphereCenter),{boxInitialized:t.boxInitialized,box:e,sphereInitialized:t.sphereInitialized,sphere:n}})),s._maxGeometryCount=t.maxGeometryCount,s._maxVertexCount=t.maxVertexCount,s._maxIndexCount=t.maxIndexCount,s._geometryInitialized=t.geometryInitialized,s._geometryCount=t.geometryCount,s._matricesTexture=h(t.matricesTexture.uuid);break;case"LOD":s=new Sc;break;case"Line":s=new gh(l(t.geometry),c(t.material));break;case"LineLoop":s=new yh(l(t.geometry),c(t.material));break;case"LineSegments":s=new xh(l(t.geometry),c(t.material));break;case"PointCloud":case"Points":s=new wh(l(t.geometry),c(t.material));break;case"Sprite":s=new vc(c(t.material));break;case"Group":s=new Wl;break;case"Bone":s=new Uc;break;default:s=new Nr;}if(s.uuid=t.uuid,void 0!==t.name&&(s.name=t.name),void 0!==t.matrix?(s.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(s.matrixAutoUpdate=t.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(void 0!==t.position&&s.position.fromArray(t.position),void 0!==t.rotation&&s.rotation.fromArray(t.rotation),void 0!==t.quaternion&&s.quaternion.fromArray(t.quaternion),void 0!==t.scale&&s.scale.fromArray(t.scale)),void 0!==t.up&&s.up.fromArray(t.up),void 0!==t.castShadow&&(s.castShadow=t.castShadow),void 0!==t.receiveShadow&&(s.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(s.shadow.bias=t.shadow.bias),void 0!==t.shadow.normalBias&&(s.shadow.normalBias=t.shadow.normalBias),void 0!==t.shadow.radius&&(s.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&s.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(s.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(s.visible=t.visible),void 0!==t.frustumCulled&&(s.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(s.renderOrder=t.renderOrder),void 0!==t.userData&&(s.userData=t.userData),void 0!==t.layers&&(s.layers.mask=t.layers),void 0!==t.children){const a=t.children;for(let t=0;t<a.length;t++)s.add(this.parseObject(a[t],e,n,i,r));}if(void 0!==t.animations){const e=t.animations;for(let t=0;t<e.length;t++){const n=e[t];s.animations.push(r[n]);}}if("LOD"===t.type){void 0!==t.autoUpdate&&(s.autoUpdate=t.autoUpdate);const e=t.levels;for(let t=0;t<e.length;t++){const n=e[t],i=s.getObjectByProperty("uuid",n.object);void 0!==i&&s.addLevel(i,n.distance,n.hysteresis);}}return s}bindSkeletons(t,e){0!==Object.keys(e).length&&t.traverse((function(t){if(!0===t.isSkinnedMesh&&void 0!==t.skeleton){const n=e[t.skeleton];void 0===n?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix);}}));}}const gp={UVMapping:ot,CubeReflectionMapping:lt,CubeRefractionMapping:ct,EquirectangularReflectionMapping:ht,EquirectangularRefractionMapping:ut,CubeUVReflectionMapping:dt},_p={RepeatWrapping:pt,ClampToEdgeWrapping:mt,MirroredRepeatWrapping:ft},vp={NearestFilter:gt,NearestMipmapNearestFilter:_t,NearestMipmapLinearFilter:xt,LinearFilter:Mt,LinearMipmapNearestFilter:St,LinearMipmapLinearFilter:Et};class xp extends Od{constructor(t){super(t),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"};}setOptions(t){return this.options=t,this}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Ud.get(t);if(void 0!==s)return r.manager.itemStart(t),s.then?void s.then((n=>{e&&e(n),r.manager.itemEnd(t);})).catch((t=>{i&&i(t);})):(setTimeout((function(){e&&e(s),r.manager.itemEnd(t);}),0),s);const a={};a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader;const o=fetch(t,a).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,Object.assign(r.options,{colorSpaceConversion:"none"}))})).then((function(n){return Ud.add(t,n),e&&e(n),r.manager.itemEnd(t),n})).catch((function(e){i&&i(e),Ud.remove(t),r.manager.itemError(t),r.manager.itemEnd(t);}));Ud.add(t,o),r.manager.itemStart(t);}}let yp;class Mp{static getContext(){return void 0===yp&&(yp=new(window.AudioContext||window.webkitAudioContext)),yp}static setContext(t){yp=t;}}class Sp extends Od{constructor(t){super(t);}load(t,e,n,i){const r=this,s=new zd(this.manager);function a(e){i?i(e):console.error(e),r.manager.itemError(t);}s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(t){try{const n=t.slice(0);Mp.getContext().decodeAudioData(n,(function(t){e(t);})).catch(a);}catch(t){a(t);}}),n,i);}}const bp=new cr,Ep=new cr,Tp=new cr;class wp{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ta,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ta,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null};}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Tp.copy(t.projectionMatrix);const n=e.eyeSep/2,i=n*e.near/e.focus,r=e.near*Math.tan(Gn*e.fov*.5)/e.zoom;let s,a;Ep.elements[12]=-n,bp.elements[12]=n,s=-r*e.aspect+i,a=r*e.aspect+i,Tp.elements[0]=2*e.near/(a-s),Tp.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(Tp),s=-r*e.aspect-i,a=r*e.aspect-i,Tp.elements[0]=2*e.near/(a-s),Tp.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(Tp);}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Ep),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(bp);}}class Ap{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1;}start(){this.startTime=Rp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0;}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1;}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t;}return t}}function Rp(){return ("undefined"==typeof performance?Date:performance).now()}const Cp=new Ui,Pp=new Ii,Lp=new Ui,Ip=new Ui;class Up extends Nr{constructor(){super(),this.type="AudioListener",this.context=Mp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ap;}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Cp,Pp,Lp),Ip.set(0,0,-1).applyQuaternion(Pp),e.positionX){const t=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Cp.x,t),e.positionY.linearRampToValueAtTime(Cp.y,t),e.positionZ.linearRampToValueAtTime(Cp.z,t),e.forwardX.linearRampToValueAtTime(Ip.x,t),e.forwardY.linearRampToValueAtTime(Ip.y,t),e.forwardZ.linearRampToValueAtTime(Ip.z,t),e.upX.linearRampToValueAtTime(n.x,t),e.upY.linearRampToValueAtTime(n.y,t),e.upZ.linearRampToValueAtTime(n.z,t);}else e.setPosition(Cp.x,Cp.y,Cp.z),e.setOrientation(Ip.x,Ip.y,Ip.z,n.x,n.y,n.z);}}class Np extends Nr{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[];}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(!0===this.isPlaying)return void console.warn("THREE.Audio: Audio is already playing.");if(!1===this.hasPlaybackControl)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return !0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.");}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,null!==this.source&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.");}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput());}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(!1!==this._connected){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput());}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),!0===this._connected?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,void 0!==this.source.detune)return !0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.");}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1;}getLoop(){return !1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.");}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Dp=new Ui,Op=new Ii,Fp=new Ui,Bp=new Ui;class zp extends Np{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain);}connect(){super.connect(),this.panner.connect(this.gain);}disconnect(){super.disconnect(),this.panner.disconnect(this.gain);}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),!0===this.hasPlaybackControl&&!1===this.isPlaying)return;this.matrixWorld.decompose(Dp,Op,Fp),Bp.set(0,0,1).applyQuaternion(Op);const e=this.panner;if(e.positionX){const t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Dp.x,t),e.positionY.linearRampToValueAtTime(Dp.y,t),e.positionZ.linearRampToValueAtTime(Dp.z,t),e.orientationX.linearRampToValueAtTime(Bp.x,t),e.orientationY.linearRampToValueAtTime(Bp.y,t),e.orientationZ.linearRampToValueAtTime(Bp.z,t);}else e.setPosition(Dp.x,Dp.y,Dp.z),e.setOrientation(Bp.x,Bp.y,Bp.z);}}class Hp{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser);}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Vp{constructor(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n);}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0;}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(0===s){for(let t=0;t!==i;++t)n[r+t]=n[t];s=e;}else {s+=e;const t=e/s;this._mixBufferRegion(n,r,0,t,i);}this.cumulativeWeight=s;}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t;}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const t=e*this._origIndex;this._mixBufferRegion(n,i,t,1-r,e);}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let t=e,r=e+e;t!==r;++t)if(n[t]!==n[t+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let t=n,r=i;t!==r;++t)e[t]=e[i+t%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0;}restoreOriginalState(){const t=3*this.valueSize;this.binding.setValue(this.buffer,t);}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0;}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1;}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n];}_select(t,e,n,i,r){if(i>=.5)for(let i=0;i!==r;++i)t[e+i]=t[n+i];}_slerp(t,e,n,i){Ii.slerpFlat(t,e,t,e,t,n,i);}_slerpAdditive(t,e,n,i,r){const s=this._workIndex*r;Ii.multiplyQuaternionsFlat(t,s,t,e,t,n),Ii.slerpFlat(t,e,t,e,t,s,i);}_lerp(t,e,n,i,r){const s=1-i;for(let a=0;a!==r;++a){const r=e+a;t[r]=t[r]*s+t[n+a]*i;}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){const r=e+s;t[r]=t[r]+t[n+s]*i;}}}const kp="\\[\\]\\.:\\/",Gp=new RegExp("["+kp+"]","g"),Wp="[^"+kp+"]",Xp="[^"+kp.replace("\\.","")+"]",jp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Wp)+/(WCOD+)?/.source.replace("WCOD",Xp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wp)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wp)+"$"),qp=["material","materials","bones","map"];class Yp{constructor(t,e,n){this.path=e,this.parsedPath=n||Yp.parseTrackName(e),this.node=Yp.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound;}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Yp.Composite(t,e,n):new Yp(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(t){const e=jp.exec(t);if(null===e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(void 0!==i&&-1!==i){const t=n.nodeName.substring(i+1);-1!==qp.indexOf(t)&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=t);}if(null===n.propertyName||0===n.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(void 0===e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(void 0!==n)return n}if(t.children){const n=function(t){for(let i=0;i<t.length;i++){const r=t[i];if(r.name===e||r.uuid===e)return r;const s=n(r.children);if(s)return s}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName];}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i];}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex];}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e);}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e];}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0;}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0;}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0;}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0;}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e];}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0;}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0;}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e);}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0;}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0;}_getValue_unbound(t,e){this.bind(),this.getValue(t,e);}_setValue_unbound(t,e){this.bind(),this.setValue(t,e);}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Yp.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let i=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let e=0;e<t.length;e++)if(t[e].name===i){i=e;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(void 0===t[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n];}if(void 0!==i){if(void 0===t[i])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[i];}}const s=t[i];if(void 0===s){const n=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+n+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?a=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==r){if("morphTargetInfluences"===i){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==t.morphTargetDictionary[r]&&(r=t.morphTargetDictionary[r]);}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r;}else void 0!==s.fromArray&&void 0!==s.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a];}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound;}}Yp.Composite=class{constructor(t,e,n){const i=n||Yp.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i);}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];void 0!==i&&i.getValue(t,e);}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e);}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind();}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind();}},Yp.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yp.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yp.prototype.GetterByBindingType=[Yp.prototype._getValue_direct,Yp.prototype._getValue_array,Yp.prototype._getValue_arrayElement,Yp.prototype._getValue_toArray],Yp.prototype.SetterByBindingTypeAndVersioning=[[Yp.prototype._setValue_direct,Yp.prototype._setValue_direct_setNeedsUpdate,Yp.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yp.prototype._setValue_array,Yp.prototype._setValue_array_setNeedsUpdate,Yp.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yp.prototype._setValue_arrayElement,Yp.prototype._setValue_arrayElement_setNeedsUpdate,Yp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yp.prototype._setValue_fromArray,Yp.prototype._setValue_fromArray_setNeedsUpdate,Yp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zp{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Xn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let e=0,n=arguments.length;e!==n;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}};}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let a,o=t.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){const h=arguments[c],u=h.uuid;let d=e[u];if(void 0===d){d=o++,e[u]=d,t.push(h);for(let t=0,e=s;t!==e;++t)r[t].push(new Yp(h,n[t],i[t]));}else if(d<l){a=t[d];const o=--l,c=t[o];e[c.uuid]=d,t[d]=c,e[u]=o,t[o]=h;for(let t=0,e=s;t!==e;++t){const e=r[t],s=e[o];let a=e[d];e[d]=s,void 0===a&&(a=new Yp(h,n[t],i[t])),e[o]=a;}}else t[d]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");}this.nCachedObjects_=l;}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const a=arguments[s],o=a.uuid,l=e[o];if(void 0!==l&&l>=r){const s=r++,c=t[s];e[c.uuid]=l,t[l]=c,e[o]=s,t[s]=a;for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[s],r=e[l];e[l]=i,e[s]=r;}}}this.nCachedObjects_=r;}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let a=0,o=arguments.length;a!==o;++a){const o=arguments[a].uuid,l=e[o];if(void 0!==l)if(delete e[o],l<r){const a=--r,o=t[a],c=--s,h=t[c];e[o.uuid]=l,t[l]=o,e[h.uuid]=a,t[a]=h,t.pop();for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[a],r=e[c];e[l]=i,e[a]=r,e.pop();}}else {const r=--s,a=t[r];r>0&&(e[a.uuid]=l),t[l]=a,t.pop();for(let t=0,e=i;t!==e;++t){const e=n[t];e[l]=e[r],e.pop();}}}this.nCachedObjects_=r;}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(void 0!==i)return r[i];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);i=r.length,n[t]=i,s.push(t),a.push(e),r.push(h);for(let n=c,i=o.length;n!==i;++n){const i=o[n];h[n]=new Yp(i,t,e);}return h}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(void 0!==n){const i=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[t[a]]=n,s[n]=o,s.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop();}}}class Jp{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,s=r.length,a=new Array(s),o={endingStart:Ie,endingEnd:Ie};for(let t=0;t!==s;++t){const e=r[t].createInterpolant(null);a[t]=e,e.settings=o;}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0;}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const n=this._clip.duration,i=t._clip.duration,r=i/n,s=n/i;t.warp(1,r,e),this.warp(s,1,e);}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,s=this.timeScale;let a=this._timeScaleInterpolant;null===a&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){const t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t);const r=this._startTime;if(null!==r){const i=(t-r)*n;i<0||0===n?e=0:(this._startTime=null,e=n*i);}e*=this._updateTimeScale(t);const s=this._updateTime(e),a=this._updateWeight(t);if(a>0){const t=this._interpolants,e=this._propertyBindings;if(this.blendMode===Oe)for(let n=0,i=t.length;n!==i;++n)t[n].evaluate(s),e[n].accumulateAdditive(a);else for(let n=0,r=t.length;n!==r;++n)t[n].evaluate(s),e[n].accumulate(i,a);}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(null!==n){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),0===i&&(this.enabled=!1));}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(null!==n){e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e);}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const s=2202===n;if(0===t)return -1===r?i:s&&1==(1&r)?e-i:i;if(2200===n){-1===r&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else {if(!(i<0)){this.time=i;break t}i=0;}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1});}}else {if(-1===r&&(t>=0?(r=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),i>=e||i<0){const n=Math.floor(i/e);i-=e*n,r+=Math.abs(n);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else {if(1===a){const e=t<0;this._setEndings(e,!e,s);}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:n});}}else this.time=i;if(s&&1==(1&r))return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Ue,i.endingEnd=Ue):(i.endingStart=t?this.zeroSlopeAtStart?Ue:Ie:Ne,i.endingEnd=e?this.zeroSlopeAtEnd?Ue:Ie:Ne);}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;null===s&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,o=s.sampleValues;return a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}const Kp=new Float32Array(1);class $p extends Hn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1;}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName;let c=l[o];void 0===c&&(c={},l[o]=c);for(let t=0;t!==r;++t){const r=i[t],l=r.name;let h=c[l];if(void 0!==h)++h.referenceCount,s[t]=h;else {if(h=s[t],void 0!==h){null===h._cacheIndex&&(++h.referenceCount,this._addInactiveBinding(h,o,l));continue}const i=e&&e._propertyBindings[t].binding.parsedPath;h=new Vp(Yp.create(n,l,i),r.ValueTypeName,r.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,o,l),s[t]=h;}a[t].resultBuffer=h.buffer;}}_activateAction(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){const e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n];this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,n,e);}const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==n.useCount++&&(this._lendBinding(n),n.saveOriginalState());}this._lendAction(t);}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==--n.useCount&&(n.restoreOriginalState(),this._takeBackBinding(n));}this._takeBackAction(t);}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}};}_isActiveAction(t){const e=t._cacheIndex;return null!==e&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(void 0===s)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else {const e=s.knownActions;t._byClipCacheIndex=e.length,e.push(t);}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t;}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=t._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),t._byClipCacheIndex=null;delete a.actionByRoot[(t._localRoot||this._root).uuid],0===o.length&&delete s[r],this._removeInactiveBindingsForAction(t);}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==--n.referenceCount&&this._removeInactiveBinding(n);}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];void 0===s&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t);}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=t._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],0===Object.keys(a).length&&delete s[i];}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r;}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return void 0===n&&(n=new Md(new Float32Array(2),new Float32Array(2),1,Kp),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r;}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let s="string"==typeof t?Ld.findByName(i,t):t;const a=null!==s?s.uuid:t,o=this._actionsByClip[a];let l=null;if(void 0===n&&(n=null!==s?s.blendMode:De),void 0!==o){const t=o.actionByRoot[r];if(void 0!==t&&t.blendMode===n)return t;l=o.knownActions[0],null===s&&(s=l._clip);}if(null===s)return null;const c=new Jp(this,s,e,n);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(t,e){const n=e||this._root,i=n.uuid,r="string"==typeof t?Ld.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return void 0!==a&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let a=0;a!==n;++a){e[a]._update(i,t,r,s);}const a=this._bindings,o=this._nActiveBindings;for(let t=0;t!==o;++t)a[t].apply(s);return this}setTime(t){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(void 0!==r){const t=r.knownActions;for(let n=0,i=t.length;n!==i;++n){const i=t[n];this._deactivateAction(i);const r=i._cacheIndex,s=e[e.length-1];i._cacheIndex=null,i._byClipCacheIndex=null,s._cacheIndex=r,e[r]=s,e.pop(),this._removeInactiveBindingsForAction(i);}delete i[n];}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const t in n){const i=n[t].actionByRoot[e];void 0!==i&&(this._deactivateAction(i),this._removeInactiveAction(i));}const i=this._bindingsByRootAndName[e];if(void 0!==i)for(const t in i){const e=i[t];e.restoreOriginalState(),this._removeInactiveBinding(e);}}uncacheAction(t,e){const n=this.existingAction(t,e);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n));}}class Qp{constructor(t){this.value=t;}clone(){return new Qp(void 0===this.value.clone?this.value:this.value.clone())}}let tm=0;class em extends Hn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.usage=wn,this.uniforms=[];}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return -1!==e&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let t=0,n=e.length;t<n;t++){const n=Array.isArray(e[t])?e[t]:[e[t]];for(let t=0;t<n.length;t++)this.uniforms.push(n[t].clone());}return this}clone(){return (new this.constructor).copy(this)}}class nm extends ec{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n;}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class im{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0;}set needsUpdate(t){!0===t&&this.version++;}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}class rm{constructor(t,e,n=0,i=1/0){this.ray=new lr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}};}set(t,e){this.ray.set(t,e);}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type);}intersectObject(t,e=!0,n=[]){return am(t,this,n,e),n.sort(sm),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)am(t[i],this,n,e);return n.sort(sm),n}}function sm(t,e){return t.distance-e.distance}function am(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),!0===i){const i=t.children;for(let t=0,r=i.length;t<r;t++)am(i[t],e,n,!0);}}class om{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){const t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jn(e/this.radius,-1,1))),this}clone(){return (new this.constructor).copy(this)}}class lm{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return (new this.constructor).copy(this)}}const cm=new ti;class hm{constructor(t=new ti(1/0,1/0),e=new ti(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e;}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cm.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return (new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return !(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return !(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cm).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const um=new Ui,dm=new Ui;class pm{constructor(t=new Ui,e=new Ui){this.start=t,this.end=e;}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){um.subVectors(t,this.start),dm.subVectors(this.end,this.start);const n=dm.dot(dm);let i=dm.dot(um)/n;return e&&(i=jn(i,0,1)),i}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return (new this.constructor).copy(this)}}const mm=new Ui;class fm extends Nr{constructor(t,e){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new As,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let t=0,e=1,n=32;t<n;t++,e++){const r=t/n*Math.PI*2,s=e/n*Math.PI*2;i.push(Math.cos(r),Math.sin(r),1,Math.cos(s),Math.sin(s),1);}n.setAttribute("position",new vs(i,3));const r=new hh({fog:!1,toneMapped:!1});this.cone=new xh(n,r),this.add(this.cone),this.update();}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose();}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),mm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(mm),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color);}}const gm=new Ui,_m=new cr,vm=new cr;class xm extends xh{constructor(t){const e=ym(t),n=new As,i=[],r=[],s=new Kr(0,0,1),a=new Kr(0,1,0);for(let t=0;t<e.length;t++){const n=e[t];n.parent&&n.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b));}n.setAttribute("position",new vs(i,3)),n.setAttribute("color",new vs(r,3));super(n,new hh({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");vm.copy(this.root.matrixWorld).invert();for(let t=0,n=0;t<e.length;t++){const r=e[t];r.parent&&r.parent.isBone&&(_m.multiplyMatrices(vm,r.matrixWorld),gm.setFromMatrixPosition(_m),i.setXYZ(n,gm.x,gm.y,gm.z),_m.multiplyMatrices(vm,r.parent.matrixWorld),gm.setFromMatrixPosition(_m),i.setXYZ(n+1,gm.x,gm.y,gm.z),n+=2);}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t);}dispose(){this.geometry.dispose(),this.material.dispose();}}function ym(t){const e=[];!0===t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,ym(t.children[n]));return e}class Mm extends Xs{constructor(t,e,n){super(new Zu(e,4,2),new es({wireframe:!0,fog:!1,toneMapped:!1})),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update();}dispose(){this.geometry.dispose(),this.material.dispose();}update(){this.light.updateWorldMatrix(!0,!1),void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color);}}const Sm=new Ui,bm=new Kr,Em=new Kr;class Tm extends Nr{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ju(e);i.rotateY(.5*Math.PI),this.material=new es({wireframe:!0,fog:!1,toneMapped:!1}),void 0===this.color&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),s=new Float32Array(3*r.count);i.setAttribute("color",new cs(s,3)),this.add(new Xs(i,this.material)),this.update();}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose();}update(){const t=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else {const e=t.geometry.getAttribute("color");bm.copy(this.light.color),Em.copy(this.light.groundColor);for(let t=0,n=e.count;t<n;t++){const i=t<n/2?bm:Em;e.setXYZ(t,i.r,i.g,i.b);}e.needsUpdate=!0;}this.light.updateWorldMatrix(!0,!1),t.lookAt(Sm.setFromMatrixPosition(this.light.matrixWorld).negate());}}class wm extends xh{constructor(t=10,e=10,n=4473924,i=8947848){n=new Kr(n),i=new Kr(i);const r=e/2,s=t/e,a=t/2,o=[],l=[];for(let t=0,c=0,h=-a;t<=e;t++,h+=s){o.push(-a,0,h,a,0,h),o.push(h,0,-a,h,0,a);const e=t===r?n:i;e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3;}const c=new As;c.setAttribute("position",new vs(o,3)),c.setAttribute("color",new vs(l,3));super(c,new hh({vertexColors:!0,toneMapped:!1})),this.type="GridHelper";}dispose(){this.geometry.dispose(),this.material.dispose();}}class Am extends xh{constructor(t=10,e=16,n=8,i=64,r=4473924,s=8947848){r=new Kr(r),s=new Kr(s);const a=[],o=[];if(e>1)for(let n=0;n<e;n++){const i=n/e*(2*Math.PI),l=Math.sin(i)*t,c=Math.cos(i)*t;a.push(0,0,0),a.push(l,0,c);const h=1&n?r:s;o.push(h.r,h.g,h.b),o.push(h.r,h.g,h.b);}for(let e=0;e<n;e++){const l=1&e?r:s,c=t-t/n*e;for(let t=0;t<i;t++){let e=t/i*(2*Math.PI),n=Math.sin(e)*c,r=Math.cos(e)*c;a.push(n,0,r),o.push(l.r,l.g,l.b),e=(t+1)/i*(2*Math.PI),n=Math.sin(e)*c,r=Math.cos(e)*c,a.push(n,0,r),o.push(l.r,l.g,l.b);}}const l=new As;l.setAttribute("position",new vs(a,3)),l.setAttribute("color",new vs(o,3));super(l,new hh({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper";}dispose(){this.geometry.dispose(),this.material.dispose();}}const Rm=new Ui,Cm=new Ui,Pm=new Ui;class Lm extends Nr{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",void 0===e&&(e=1);let i=new As;i.setAttribute("position",new vs([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new hh({fog:!1,toneMapped:!1});this.lightPlane=new gh(i,r),this.add(this.lightPlane),i=new As,i.setAttribute("position",new vs([0,0,0,0,0,1],3)),this.targetLine=new gh(i,r),this.add(this.targetLine),this.update();}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose();}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Rm.setFromMatrixPosition(this.light.matrixWorld),Cm.setFromMatrixPosition(this.light.target.matrixWorld),Pm.subVectors(Cm,Rm),this.lightPlane.lookAt(Cm),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Cm),this.targetLine.scale.z=Pm.length();}}const Im=new Ui,Um=new Qs;class Nm extends xh{constructor(t){const e=new As,n=new hh({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={};function a(t,e){o(t),o(e);}function o(t){i.push(0,0,0),r.push(0,0,0),void 0===s[t]&&(s[t]=[]),s[t].push(i.length/3-1);}a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4"),e.setAttribute("position",new vs(i,3)),e.setAttribute("color",new vs(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new Kr(16755200),c=new Kr(16711680),h=new Kr(43775),u=new Kr(16777215),d=new Kr(3355443);this.setColors(l,c,h,u,d);}setColors(t,e,n,i,r){const s=this.geometry.getAttribute("color");s.setXYZ(0,t.r,t.g,t.b),s.setXYZ(1,t.r,t.g,t.b),s.setXYZ(2,t.r,t.g,t.b),s.setXYZ(3,t.r,t.g,t.b),s.setXYZ(4,t.r,t.g,t.b),s.setXYZ(5,t.r,t.g,t.b),s.setXYZ(6,t.r,t.g,t.b),s.setXYZ(7,t.r,t.g,t.b),s.setXYZ(8,t.r,t.g,t.b),s.setXYZ(9,t.r,t.g,t.b),s.setXYZ(10,t.r,t.g,t.b),s.setXYZ(11,t.r,t.g,t.b),s.setXYZ(12,t.r,t.g,t.b),s.setXYZ(13,t.r,t.g,t.b),s.setXYZ(14,t.r,t.g,t.b),s.setXYZ(15,t.r,t.g,t.b),s.setXYZ(16,t.r,t.g,t.b),s.setXYZ(17,t.r,t.g,t.b),s.setXYZ(18,t.r,t.g,t.b),s.setXYZ(19,t.r,t.g,t.b),s.setXYZ(20,t.r,t.g,t.b),s.setXYZ(21,t.r,t.g,t.b),s.setXYZ(22,t.r,t.g,t.b),s.setXYZ(23,t.r,t.g,t.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,n.r,n.g,n.b),s.setXYZ(33,n.r,n.g,n.b),s.setXYZ(34,n.r,n.g,n.b),s.setXYZ(35,n.r,n.g,n.b),s.setXYZ(36,n.r,n.g,n.b),s.setXYZ(37,n.r,n.g,n.b),s.setXYZ(38,i.r,i.g,i.b),s.setXYZ(39,i.r,i.g,i.b),s.setXYZ(40,r.r,r.g,r.b),s.setXYZ(41,r.r,r.g,r.b),s.setXYZ(42,r.r,r.g,r.b),s.setXYZ(43,r.r,r.g,r.b),s.setXYZ(44,r.r,r.g,r.b),s.setXYZ(45,r.r,r.g,r.b),s.setXYZ(46,r.r,r.g,r.b),s.setXYZ(47,r.r,r.g,r.b),s.setXYZ(48,r.r,r.g,r.b),s.setXYZ(49,r.r,r.g,r.b),s.needsUpdate=!0;}update(){const t=this.geometry,e=this.pointMap;Um.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Dm("c",e,t,Um,0,0,-1),Dm("t",e,t,Um,0,0,1),Dm("n1",e,t,Um,-1,-1,-1),Dm("n2",e,t,Um,1,-1,-1),Dm("n3",e,t,Um,-1,1,-1),Dm("n4",e,t,Um,1,1,-1),Dm("f1",e,t,Um,-1,-1,1),Dm("f2",e,t,Um,1,-1,1),Dm("f3",e,t,Um,-1,1,1),Dm("f4",e,t,Um,1,1,1),Dm("u1",e,t,Um,.7,1.1,-1),Dm("u2",e,t,Um,-.7,1.1,-1),Dm("u3",e,t,Um,0,2,-1),Dm("cf1",e,t,Um,-1,0,1),Dm("cf2",e,t,Um,1,0,1),Dm("cf3",e,t,Um,0,-1,1),Dm("cf4",e,t,Um,0,1,1),Dm("cn1",e,t,Um,-1,0,-1),Dm("cn2",e,t,Um,1,0,-1),Dm("cn3",e,t,Um,0,-1,-1),Dm("cn4",e,t,Um,0,1,-1),t.getAttribute("position").needsUpdate=!0;}dispose(){this.geometry.dispose(),this.material.dispose();}}function Dm(t,e,n,i,r,s,a){Im.set(r,s,a).unproject(i);const o=e[t];if(void 0!==o){const t=n.getAttribute("position");for(let e=0,n=o.length;e<n;e++)t.setXYZ(o[e],Im.x,Im.y,Im.z);}}const Om=new Oi;class Fm extends xh{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new As;r.setIndex(new cs(n,1)),r.setAttribute("position",new cs(i,3)),super(r,new hh({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update();}update(t){if(void 0!==t&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&Om.setFromObject(this.object),Om.isEmpty())return;const e=Om.min,n=Om.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere();}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose();}}class Bm extends xh{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new As;i.setIndex(new cs(n,1)),i.setAttribute("position",new vs([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(i,new hh({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere();}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t));}dispose(){this.geometry.dispose(),this.material.dispose();}}class zm extends gh{constructor(t,e=1,n=16776960){const i=n,r=new As;r.setAttribute("position",new vs([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),r.computeBoundingSphere(),super(r,new hh({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const s=new As;s.setAttribute("position",new vs([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computeBoundingSphere(),this.add(new Xs(s,new es({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})));}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t);}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose();}}const Hm=new Ui;let Vm,km;class Gm extends Nr{constructor(t=new Ui(0,0,1),e=new Ui(0,0,0),n=1,i=16776960,r=.2*n,s=.2*r){super(),this.type="ArrowHelper",void 0===Vm&&(Vm=new As,Vm.setAttribute("position",new vs([0,0,0,0,1,0],3)),km=new su(0,.5,1,5,1),km.translate(0,-.5,0)),this.position.copy(e),this.line=new gh(Vm,new hh({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Xs(km,new es({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,s);}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else {Hm.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Hm,e);}}setLength(t,e=.2*t,n=.2*e){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix();}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t);}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose();}}class Wm extends xh{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=new As;n.setAttribute("position",new vs(e,3)),n.setAttribute("color",new vs([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));super(n,new hh({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper";}setColors(t,e,n){const i=new Kr,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose();}}class Xm{constructor(){this.type="ShapePath",this.color=new Kr,this.subPaths=[],this.currentPath=null;}moveTo(t,e){return this.currentPath=new eu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(t,e){const n=e.length;let i=!1;for(let r=n-1,s=0;s<n;r=s++){let n=e[r],a=e[s],o=a.x-n.x,l=a.y-n.y;if(Math.abs(l)>Number.EPSILON){if(l<0&&(n=e[s],o=-o,a=e[r],l=-l),t.y<n.y||t.y>a.y)continue;if(t.y===n.y){if(t.x===n.x)return !0}else {const e=l*(t.x-n.x)-o*(t.y-n.y);if(0===e)return !0;if(e<0)continue;i=!i;}}else {if(t.y!==n.y)continue;if(a.x<=t.x&&t.x<=n.x||n.x<=t.x&&t.x<=a.x)return !0}}return i}const n=Hu.isClockWise,i=this.subPaths;if(0===i.length)return [];let r,s,a;const o=[];if(1===i.length)return s=i[0],a=new mu,a.curves=s.curves,o.push(a),o;let l=!n(i[0].getPoints());l=t?!l:l;const c=[],h=[];let u,d,p=[],m=0;h[m]=void 0,p[m]=[];for(let e=0,a=i.length;e<a;e++)s=i[e],u=s.getPoints(),r=n(u),r=t?!r:r,r?(!l&&h[m]&&m++,h[m]={s:new mu,p:u},h[m].s.curves=s.curves,l&&m++,p[m]=[]):p[m].push({h:s,p:u[0]});if(!h[0])return function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n],r=new mu;r.curves=i.curves,e.push(r);}return e}(i);if(h.length>1){let t=!1,n=0;for(let t=0,e=h.length;t<e;t++)c[t]=[];for(let i=0,r=h.length;i<r;i++){const r=p[i];for(let s=0;s<r.length;s++){const a=r[s];let o=!0;for(let r=0;r<h.length;r++)e(a.p,h[r].p)&&(i!==r&&n++,o?(o=!1,c[r].push(a)):t=!0);o&&c[i].push(a);}}n>0&&!1===t&&(p=c);}for(let t=0,e=h.length;t<e;t++){a=h[t].s,o.push(a),d=p[t];for(let t=0,e=d.length;t<e;t++)a.holes.push(d[t].h);}return o}}"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:t}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=t);

	var THREE = /*#__PURE__*/Object.freeze({
		__proto__: null,
		ACESFilmicToneMapping: nt,
		AddEquation: M,
		AddOperation: K,
		AdditiveAnimationBlendMode: Oe,
		AdditiveBlending: _,
		AgXToneMapping: rt,
		AlphaFormat: Ft,
		AlwaysCompare: Tn,
		AlwaysDepth: k,
		AlwaysStencilFunc: _n,
		AmbientLight: op,
		AnimationAction: Jp,
		AnimationClip: Ld,
		AnimationLoader: Hd,
		AnimationMixer: $p,
		AnimationObjectGroup: Zp,
		AnimationUtils: vd,
		ArcCurve: Oh,
		ArrayCamera: Gl,
		ArrowHelper: Gm,
		AttachedBindMode: st,
		Audio: Np,
		AudioAnalyser: Hp,
		AudioContext: Mp,
		AudioListener: Up,
		AudioLoader: Sp,
		AxesHelper: Wm,
		BackSide: d,
		BasicDepthPacking: ke,
		BasicShadowMap: o,
		BatchedMesh: ch,
		Bone: Uc,
		BooleanKeyframeTrack: Ed,
		Box2: hm,
		Box3: Oi,
		Box3Helper: Bm,
		BoxGeometry: qs,
		BoxHelper: Fm,
		BufferAttribute: cs,
		BufferGeometry: As,
		BufferGeometryLoader: mp,
		ByteType: At,
		Cache: Ud,
		Camera: Qs,
		CameraHelper: Nm,
		CanvasTexture: Uh,
		CapsuleGeometry: iu,
		CatmullRomCurve3: kh,
		CineonToneMapping: et,
		CircleGeometry: ru,
		ClampToEdgeWrapping: mt,
		Clock: Ap,
		Color: Kr,
		ColorKeyframeTrack: Td,
		ColorManagement: mi,
		CompressedArrayTexture: Lh,
		CompressedCubeTexture: Ih,
		CompressedTexture: Ph,
		CompressedTextureLoader: Vd,
		ConeGeometry: au,
		ConstantAlphaFactor: z,
		ConstantColorFactor: F,
		CubeCamera: na,
		CubeReflectionMapping: lt,
		CubeRefractionMapping: ct,
		CubeTexture: ia,
		CubeTextureLoader: Gd,
		CubeUVReflectionMapping: dt,
		CubicBezierCurve: jh,
		CubicBezierCurve3: qh,
		CubicInterpolant: yd,
		CullFaceBack: r,
		CullFaceFront: s,
		CullFaceFrontBack: a,
		CullFaceNone: i,
		Curve: Nh,
		CurvePath: tu,
		CustomBlending: y,
		CustomToneMapping: it,
		CylinderGeometry: su,
		Cylindrical: lm,
		Data3DTexture: Ci,
		DataArrayTexture: Ai,
		DataTexture: Nc,
		DataTextureLoader: Wd,
		DataUtils: as,
		DecrementStencilOp: an,
		DecrementWrapStencilOp: ln,
		DefaultLoadingManager: Dd,
		DepthFormat: Vt,
		DepthStencilFormat: kt,
		DepthTexture: Ka,
		DetachedBindMode: at,
		DirectionalLight: ap,
		DirectionalLightHelper: Lm,
		DiscreteInterpolant: Sd,
		DisplayP3ColorSpace: Ze,
		DodecahedronGeometry: lu,
		DoubleSide: p,
		DstAlphaFactor: I,
		DstColorFactor: N,
		DynamicCopyUsage: Un,
		DynamicDrawUsage: An,
		DynamicReadUsage: Pn,
		EdgesGeometry: pu,
		EllipseCurve: Dh,
		EqualCompare: yn,
		EqualDepth: X,
		EqualStencilFunc: dn,
		EquirectangularReflectionMapping: ht,
		EquirectangularRefractionMapping: ut,
		Euler: xr,
		EventDispatcher: Hn,
		ExtrudeGeometry: Gu,
		FileLoader: zd,
		Float16BufferAttribute: _s,
		Float32BufferAttribute: vs,
		Float64BufferAttribute: xs,
		FloatType: It,
		Fog: Ql,
		FogExp2: $l,
		FramebufferTexture: Ch,
		FrontSide: u,
		Frustum: ua,
		GLBufferAttribute: im,
		GLSL1: Dn,
		GLSL3: On,
		GreaterCompare: Sn,
		GreaterDepth: q,
		GreaterEqualCompare: En,
		GreaterEqualDepth: j,
		GreaterEqualStencilFunc: gn,
		GreaterStencilFunc: mn,
		GridHelper: wm,
		Group: Wl,
		HalfFloatType: Ut,
		HemisphereLight: qd,
		HemisphereLightHelper: Tm,
		IcosahedronGeometry: Xu,
		ImageBitmapLoader: xp,
		ImageLoader: kd,
		ImageUtils: vi,
		IncrementStencilOp: sn,
		IncrementWrapStencilOp: on,
		InstancedBufferAttribute: Bc,
		InstancedBufferGeometry: pp,
		InstancedInterleavedBuffer: nm,
		InstancedMesh: jc,
		Int16BufferAttribute: ps,
		Int32BufferAttribute: fs,
		Int8BufferAttribute: hs,
		IntType: Pt,
		InterleavedBuffer: ec,
		InterleavedBufferAttribute: ic,
		Interpolant: xd,
		InterpolateDiscrete: Ce,
		InterpolateLinear: Pe,
		InterpolateSmooth: Le,
		InvertStencilOp: cn,
		KeepStencilOp: nn,
		KeyframeTrack: bd,
		LOD: Sc,
		LatheGeometry: nu,
		Layers: yr,
		LessCompare: xn,
		LessDepth: G,
		LessEqualCompare: Mn,
		LessEqualDepth: W,
		LessEqualStencilFunc: pn,
		LessStencilFunc: un,
		Light: jd,
		LightProbe: hp,
		Line: gh,
		Line3: pm,
		LineBasicMaterial: hh,
		LineCurve: Yh,
		LineCurve3: Zh,
		LineDashedMaterial: dd,
		LineLoop: yh,
		LineSegments: xh,
		LinearDisplayP3ColorSpace: Je,
		LinearEncoding: He,
		LinearFilter: Mt,
		LinearInterpolant: Md,
		LinearMipMapLinearFilter: Tt,
		LinearMipMapNearestFilter: bt,
		LinearMipmapLinearFilter: Et,
		LinearMipmapNearestFilter: St,
		LinearSRGBColorSpace: Ye,
		LinearToneMapping: Q,
		LinearTransfer: Ke,
		Loader: Od,
		LoaderUtils: dp,
		LoadingManager: Nd,
		LoopOnce: we,
		LoopPingPong: Re,
		LoopRepeat: Ae,
		LuminanceAlphaFormat: Ht,
		LuminanceFormat: zt,
		MOUSE: e,
		Material: ts,
		MaterialLoader: up,
		MathUtils: Qn,
		Matrix3: ei,
		Matrix4: cr,
		MaxEquation: T,
		Mesh: Xs,
		MeshBasicMaterial: es,
		MeshDepthMaterial: Fl,
		MeshDistanceMaterial: Bl,
		MeshLambertMaterial: hd,
		MeshMatcapMaterial: ud,
		MeshNormalMaterial: cd,
		MeshPhongMaterial: od,
		MeshPhysicalMaterial: ad,
		MeshStandardMaterial: sd,
		MeshToonMaterial: ld,
		MinEquation: E,
		MirroredRepeatWrapping: ft,
		MixOperation: J,
		MultiplyBlending: x,
		MultiplyOperation: Z,
		NearestFilter: gt,
		NearestMipMapLinearFilter: yt,
		NearestMipMapNearestFilter: vt,
		NearestMipmapLinearFilter: xt,
		NearestMipmapNearestFilter: _t,
		NeverCompare: vn,
		NeverDepth: V,
		NeverStencilFunc: hn,
		NoBlending: f,
		NoColorSpace: je,
		NoToneMapping: $,
		NormalAnimationBlendMode: De,
		NormalBlending: g,
		NotEqualCompare: bn,
		NotEqualDepth: Y,
		NotEqualStencilFunc: fn,
		NumberKeyframeTrack: wd,
		Object3D: Nr,
		ObjectLoader: fp,
		ObjectSpaceNormalMap: Xe,
		OctahedronGeometry: ju,
		OneFactor: A,
		OneMinusConstantAlphaFactor: H,
		OneMinusConstantColorFactor: B,
		OneMinusDstAlphaFactor: U,
		OneMinusDstColorFactor: D,
		OneMinusSrcAlphaFactor: L,
		OneMinusSrcColorFactor: C,
		OrthographicCamera: Ta,
		P3Primaries: tn,
		PCFShadowMap: l,
		PCFSoftShadowMap: c,
		PMREMGenerator: Oa,
		Path: eu,
		PerspectiveCamera: ta,
		Plane: la,
		PlaneGeometry: ma,
		PlaneHelper: zm,
		PointLight: rp,
		PointLightHelper: Mm,
		Points: wh,
		PointsMaterial: Mh,
		PolarGridHelper: Am,
		PolyhedronGeometry: ou,
		PositionalAudio: zp,
		PropertyBinding: Yp,
		PropertyMixer: Vp,
		QuadraticBezierCurve: Jh,
		QuadraticBezierCurve3: Kh,
		Quaternion: Ii,
		QuaternionKeyframeTrack: Rd,
		QuaternionLinearInterpolant: Ad,
		RED_GREEN_RGTC2_Format: Ee,
		RED_RGTC1_Format: Se,
		REVISION: t,
		RGBADepthPacking: Ge,
		RGBAFormat: Bt,
		RGBAIntegerFormat: qt,
		RGBA_ASTC_10x10_Format: ge,
		RGBA_ASTC_10x5_Format: pe,
		RGBA_ASTC_10x6_Format: me,
		RGBA_ASTC_10x8_Format: fe,
		RGBA_ASTC_12x10_Format: _e,
		RGBA_ASTC_12x12_Format: ve,
		RGBA_ASTC_4x4_Format: se,
		RGBA_ASTC_5x4_Format: ae,
		RGBA_ASTC_5x5_Format: oe,
		RGBA_ASTC_6x5_Format: le,
		RGBA_ASTC_6x6_Format: ce,
		RGBA_ASTC_8x5_Format: he,
		RGBA_ASTC_8x6_Format: ue,
		RGBA_ASTC_8x8_Format: de,
		RGBA_BPTC_Format: xe,
		RGBA_ETC2_EAC_Format: re,
		RGBA_PVRTC_2BPPV1_Format: ee,
		RGBA_PVRTC_4BPPV1_Format: te,
		RGBA_S3TC_DXT1_Format: Zt,
		RGBA_S3TC_DXT3_Format: Jt,
		RGBA_S3TC_DXT5_Format: Kt,
		RGB_BPTC_SIGNED_Format: ye,
		RGB_BPTC_UNSIGNED_Format: Me,
		RGB_ETC1_Format: ne,
		RGB_ETC2_Format: ie,
		RGB_PVRTC_2BPPV1_Format: Qt,
		RGB_PVRTC_4BPPV1_Format: $t,
		RGB_S3TC_DXT1_Format: Yt,
		RGFormat: Xt,
		RGIntegerFormat: jt,
		RawShaderMaterial: rd,
		Ray: lr,
		Raycaster: rm,
		Rec709Primaries: Qe,
		RectAreaLight: lp,
		RedFormat: Gt,
		RedIntegerFormat: Wt,
		ReinhardToneMapping: tt,
		RenderTarget: Ti,
		RepeatWrapping: pt,
		ReplaceStencilOp: rn,
		ReverseSubtractEquation: b,
		RingGeometry: qu,
		SIGNED_RED_GREEN_RGTC2_Format: Te,
		SIGNED_RED_RGTC1_Format: be,
		SRGBColorSpace: qe,
		SRGBTransfer: $e,
		Scene: tc,
		ShaderChunk: fa,
		ShaderLib: _a,
		ShaderMaterial: $s,
		ShadowMaterial: id,
		Shape: mu,
		ShapeGeometry: Yu,
		ShapePath: Xm,
		ShapeUtils: Hu,
		ShortType: Rt,
		Skeleton: Fc,
		SkeletonHelper: xm,
		SkinnedMesh: Ic,
		Source: yi,
		Sphere: tr,
		SphereGeometry: Zu,
		Spherical: om,
		SphericalHarmonics3: cp,
		SplineCurve: $h,
		SpotLight: Qd,
		SpotLightHelper: fm,
		Sprite: vc,
		SpriteMaterial: rc,
		SrcAlphaFactor: P,
		SrcAlphaSaturateFactor: O,
		SrcColorFactor: R,
		StaticCopyUsage: In,
		StaticDrawUsage: wn,
		StaticReadUsage: Cn,
		StereoCamera: wp,
		StreamCopyUsage: Nn,
		StreamDrawUsage: Rn,
		StreamReadUsage: Ln,
		StringKeyframeTrack: Cd,
		SubtractEquation: S,
		SubtractiveBlending: v,
		TOUCH: n,
		TangentSpaceNormalMap: We,
		TetrahedronGeometry: Ju,
		Texture: bi,
		TextureLoader: Xd,
		TorusGeometry: Ku,
		TorusKnotGeometry: $u,
		Triangle: jr,
		TriangleFanDrawMode: ze,
		TriangleStripDrawMode: Be,
		TrianglesDrawMode: Fe,
		TubeGeometry: Qu,
		TwoPassDoubleSide: m,
		UVMapping: ot,
		Uint16BufferAttribute: ms,
		Uint32BufferAttribute: gs,
		Uint8BufferAttribute: us,
		Uint8ClampedBufferAttribute: ds,
		Uniform: Qp,
		UniformsGroup: em,
		UniformsLib: ga,
		UniformsUtils: Ks,
		UnsignedByteType: wt,
		UnsignedInt248Type: Ot,
		UnsignedIntType: Lt,
		UnsignedShort4444Type: Nt,
		UnsignedShort5551Type: Dt,
		UnsignedShortType: Ct,
		VSMShadowMap: h,
		Vector2: ti,
		Vector3: Ui,
		Vector4: Ei,
		VectorKeyframeTrack: Pd,
		VideoTexture: Rh,
		WebGL1Renderer: Kl,
		WebGL3DRenderTarget: Pi,
		WebGLArrayRenderTarget: Ri,
		WebGLCoordinateSystem: Bn,
		WebGLCubeRenderTarget: ra,
		WebGLMultipleRenderTargets: Li,
		WebGLRenderTarget: wi,
		WebGLRenderer: Jl,
		WebGLUtils: kl,
		WebGPUCoordinateSystem: zn,
		WireframeGeometry: td,
		WrapAroundEnding: Ne,
		ZeroCurvatureEnding: Ie,
		ZeroFactor: w,
		ZeroSlopeEnding: Ue,
		ZeroStencilOp: en,
		_SRGBAFormat: Fn,
		createCanvasElement: oi,
		sRGBEncoding: Ve
	});

	// Generated by LiveScript 1.6.0

	return THREE;

})();
var SVGLoader = (function (three_module_min_js) {
	'use strict';

	const COLOR_SPACE_SVG = three_module_min_js.SRGBColorSpace;

	class SVGLoader extends three_module_min_js.Loader {

		constructor( manager ) {

			super( manager );

			// Default dots per inch
			this.defaultDPI = 90;

			// Accepted units: 'mm', 'cm', 'in', 'pt', 'pc', 'px'
			this.defaultUnit = 'px';

		}

		load( url, onLoad, onProgress, onError ) {

			const scope = this;

			const loader = new three_module_min_js.FileLoader( scope.manager );
			loader.setPath( scope.path );
			loader.setRequestHeader( scope.requestHeader );
			loader.setWithCredentials( scope.withCredentials );
			loader.load( url, function ( text ) {

				try {

					onLoad( scope.parse( text ) );

				} catch ( e ) {

					if ( onError ) {

						onError( e );

					} else {

						console.error( e );

					}

					scope.manager.itemError( url );

				}

			}, onProgress, onError );

		}

		parse( text ) {

			const scope = this;

			function parseNode( node, style ) {

				if ( node.nodeType !== 1 ) return;

				const transform = getNodeTransform( node );

				let isDefsNode = false;

				let path = null;

				switch ( node.nodeName ) {

					case 'svg':
						style = parseStyle( node, style );
						break;

					case 'style':
						parseCSSStylesheet( node );
						break;

					case 'g':
						style = parseStyle( node, style );
						break;

					case 'path':
						style = parseStyle( node, style );
						if ( node.hasAttribute( 'd' ) ) path = parsePathNode( node );
						break;

					case 'rect':
						style = parseStyle( node, style );
						path = parseRectNode( node );
						break;

					case 'polygon':
						style = parseStyle( node, style );
						path = parsePolygonNode( node );
						break;

					case 'polyline':
						style = parseStyle( node, style );
						path = parsePolylineNode( node );
						break;

					case 'circle':
						style = parseStyle( node, style );
						path = parseCircleNode( node );
						break;

					case 'ellipse':
						style = parseStyle( node, style );
						path = parseEllipseNode( node );
						break;

					case 'line':
						style = parseStyle( node, style );
						path = parseLineNode( node );
						break;

					case 'defs':
						isDefsNode = true;
						break;

					case 'use':
						style = parseStyle( node, style );

						const href = node.getAttributeNS( 'http://www.w3.org/1999/xlink', 'href' ) || '';
						const usedNodeId = href.substring( 1 );
						const usedNode = node.viewportElement.getElementById( usedNodeId );
						if ( usedNode ) {

							parseNode( usedNode, style );

						} else {

							console.warn( 'SVGLoader: \'use node\' references non-existent node id: ' + usedNodeId );

						}

						break;
						// console.log( node );

				}

				if ( path ) {

					if ( style.fill !== undefined && style.fill !== 'none' ) {

						path.color.setStyle( style.fill, COLOR_SPACE_SVG );

					}

					transformPath( path, currentTransform );

					paths.push( path );

					path.userData = { node: node, style: style };

				}

				const childNodes = node.childNodes;

				for ( let i = 0; i < childNodes.length; i ++ ) {

					const node = childNodes[ i ];

					if ( isDefsNode && node.nodeName !== 'style' && node.nodeName !== 'defs' ) {

						// Ignore everything in defs except CSS style definitions
						// and nested defs, because it is OK by the standard to have
						// <style/> there.
						continue;

					}

					parseNode( node, style );

				}


				if ( transform ) {

					transformStack.pop();

					if ( transformStack.length > 0 ) {

						currentTransform.copy( transformStack[ transformStack.length - 1 ] );

					} else {

						currentTransform.identity();

					}

				}

			}

			function parsePathNode( node ) {

				const path = new three_module_min_js.ShapePath();

				const point = new three_module_min_js.Vector2();
				const control = new three_module_min_js.Vector2();

				const firstPoint = new three_module_min_js.Vector2();
				let isFirstPoint = true;
				let doSetFirstPoint = false;

				const d = node.getAttribute( 'd' );

				if ( d === '' || d === 'none' ) return null;

				// console.log( d );

				const commands = d.match( /[a-df-z][^a-df-z]*/ig );

				for ( let i = 0, l = commands.length; i < l; i ++ ) {

					const command = commands[ i ];

					const type = command.charAt( 0 );
					const data = command.slice( 1 ).trim();

					if ( isFirstPoint === true ) {

						doSetFirstPoint = true;
						isFirstPoint = false;

					}

					let numbers;

					switch ( type ) {

						case 'M':
							numbers = parseFloats( data );
							for ( let j = 0, jl = numbers.length; j < jl; j += 2 ) {

								point.x = numbers[ j + 0 ];
								point.y = numbers[ j + 1 ];
								control.x = point.x;
								control.y = point.y;

								if ( j === 0 ) {

									path.moveTo( point.x, point.y );

								} else {

									path.lineTo( point.x, point.y );

								}

								if ( j === 0 ) firstPoint.copy( point );

							}

							break;

						case 'H':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j ++ ) {

								point.x = numbers[ j ];
								control.x = point.x;
								control.y = point.y;
								path.lineTo( point.x, point.y );

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'V':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j ++ ) {

								point.y = numbers[ j ];
								control.x = point.x;
								control.y = point.y;
								path.lineTo( point.x, point.y );

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'L':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 2 ) {

								point.x = numbers[ j + 0 ];
								point.y = numbers[ j + 1 ];
								control.x = point.x;
								control.y = point.y;
								path.lineTo( point.x, point.y );

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'C':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 6 ) {

								path.bezierCurveTo(
									numbers[ j + 0 ],
									numbers[ j + 1 ],
									numbers[ j + 2 ],
									numbers[ j + 3 ],
									numbers[ j + 4 ],
									numbers[ j + 5 ]
								);
								control.x = numbers[ j + 2 ];
								control.y = numbers[ j + 3 ];
								point.x = numbers[ j + 4 ];
								point.y = numbers[ j + 5 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'S':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 4 ) {

								path.bezierCurveTo(
									getReflection( point.x, control.x ),
									getReflection( point.y, control.y ),
									numbers[ j + 0 ],
									numbers[ j + 1 ],
									numbers[ j + 2 ],
									numbers[ j + 3 ]
								);
								control.x = numbers[ j + 0 ];
								control.y = numbers[ j + 1 ];
								point.x = numbers[ j + 2 ];
								point.y = numbers[ j + 3 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'Q':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 4 ) {

								path.quadraticCurveTo(
									numbers[ j + 0 ],
									numbers[ j + 1 ],
									numbers[ j + 2 ],
									numbers[ j + 3 ]
								);
								control.x = numbers[ j + 0 ];
								control.y = numbers[ j + 1 ];
								point.x = numbers[ j + 2 ];
								point.y = numbers[ j + 3 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'T':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 2 ) {

								const rx = getReflection( point.x, control.x );
								const ry = getReflection( point.y, control.y );
								path.quadraticCurveTo(
									rx,
									ry,
									numbers[ j + 0 ],
									numbers[ j + 1 ]
								);
								control.x = rx;
								control.y = ry;
								point.x = numbers[ j + 0 ];
								point.y = numbers[ j + 1 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'A':
							numbers = parseFloats( data, [ 3, 4 ], 7 );

							for ( let j = 0, jl = numbers.length; j < jl; j += 7 ) {

								// skip command if start point == end point
								if ( numbers[ j + 5 ] == point.x && numbers[ j + 6 ] == point.y ) continue;

								const start = point.clone();
								point.x = numbers[ j + 5 ];
								point.y = numbers[ j + 6 ];
								control.x = point.x;
								control.y = point.y;
								parseArcCommand(
									path, numbers[ j ], numbers[ j + 1 ], numbers[ j + 2 ], numbers[ j + 3 ], numbers[ j + 4 ], start, point
								);

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'm':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 2 ) {

								point.x += numbers[ j + 0 ];
								point.y += numbers[ j + 1 ];
								control.x = point.x;
								control.y = point.y;

								if ( j === 0 ) {

									path.moveTo( point.x, point.y );

								} else {

									path.lineTo( point.x, point.y );

								}

								if ( j === 0 ) firstPoint.copy( point );

							}

							break;

						case 'h':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j ++ ) {

								point.x += numbers[ j ];
								control.x = point.x;
								control.y = point.y;
								path.lineTo( point.x, point.y );

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'v':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j ++ ) {

								point.y += numbers[ j ];
								control.x = point.x;
								control.y = point.y;
								path.lineTo( point.x, point.y );

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'l':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 2 ) {

								point.x += numbers[ j + 0 ];
								point.y += numbers[ j + 1 ];
								control.x = point.x;
								control.y = point.y;
								path.lineTo( point.x, point.y );

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'c':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 6 ) {

								path.bezierCurveTo(
									point.x + numbers[ j + 0 ],
									point.y + numbers[ j + 1 ],
									point.x + numbers[ j + 2 ],
									point.y + numbers[ j + 3 ],
									point.x + numbers[ j + 4 ],
									point.y + numbers[ j + 5 ]
								);
								control.x = point.x + numbers[ j + 2 ];
								control.y = point.y + numbers[ j + 3 ];
								point.x += numbers[ j + 4 ];
								point.y += numbers[ j + 5 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 's':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 4 ) {

								path.bezierCurveTo(
									getReflection( point.x, control.x ),
									getReflection( point.y, control.y ),
									point.x + numbers[ j + 0 ],
									point.y + numbers[ j + 1 ],
									point.x + numbers[ j + 2 ],
									point.y + numbers[ j + 3 ]
								);
								control.x = point.x + numbers[ j + 0 ];
								control.y = point.y + numbers[ j + 1 ];
								point.x += numbers[ j + 2 ];
								point.y += numbers[ j + 3 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'q':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 4 ) {

								path.quadraticCurveTo(
									point.x + numbers[ j + 0 ],
									point.y + numbers[ j + 1 ],
									point.x + numbers[ j + 2 ],
									point.y + numbers[ j + 3 ]
								);
								control.x = point.x + numbers[ j + 0 ];
								control.y = point.y + numbers[ j + 1 ];
								point.x += numbers[ j + 2 ];
								point.y += numbers[ j + 3 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 't':
							numbers = parseFloats( data );

							for ( let j = 0, jl = numbers.length; j < jl; j += 2 ) {

								const rx = getReflection( point.x, control.x );
								const ry = getReflection( point.y, control.y );
								path.quadraticCurveTo(
									rx,
									ry,
									point.x + numbers[ j + 0 ],
									point.y + numbers[ j + 1 ]
								);
								control.x = rx;
								control.y = ry;
								point.x = point.x + numbers[ j + 0 ];
								point.y = point.y + numbers[ j + 1 ];

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'a':
							numbers = parseFloats( data, [ 3, 4 ], 7 );

							for ( let j = 0, jl = numbers.length; j < jl; j += 7 ) {

								// skip command if no displacement
								if ( numbers[ j + 5 ] == 0 && numbers[ j + 6 ] == 0 ) continue;

								const start = point.clone();
								point.x += numbers[ j + 5 ];
								point.y += numbers[ j + 6 ];
								control.x = point.x;
								control.y = point.y;
								parseArcCommand(
									path, numbers[ j ], numbers[ j + 1 ], numbers[ j + 2 ], numbers[ j + 3 ], numbers[ j + 4 ], start, point
								);

								if ( j === 0 && doSetFirstPoint === true ) firstPoint.copy( point );

							}

							break;

						case 'Z':
						case 'z':
							path.currentPath.autoClose = true;

							if ( path.currentPath.curves.length > 0 ) {

								// Reset point to beginning of Path
								point.copy( firstPoint );
								path.currentPath.currentPoint.copy( point );
								isFirstPoint = true;

							}

							break;

						default:
							console.warn( command );

					}

					// console.log( type, parseFloats( data ), parseFloats( data ).length  )

					doSetFirstPoint = false;

				}

				return path;

			}

			function parseCSSStylesheet( node ) {

				if ( ! node.sheet || ! node.sheet.cssRules || ! node.sheet.cssRules.length ) return;

				for ( let i = 0; i < node.sheet.cssRules.length; i ++ ) {

					const stylesheet = node.sheet.cssRules[ i ];

					if ( stylesheet.type !== 1 ) continue;

					const selectorList = stylesheet.selectorText
						.split( /,/gm )
						.filter( Boolean )
						.map( i => i.trim() );

					for ( let j = 0; j < selectorList.length; j ++ ) {

						// Remove empty rules
						const definitions = Object.fromEntries(
							Object.entries( stylesheet.style ).filter( ( [ , v ] ) => v !== '' )
						);

						stylesheets[ selectorList[ j ] ] = Object.assign(
							stylesheets[ selectorList[ j ] ] || {},
							definitions
						);

					}

				}

			}

			/**
			 * https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
			 * https://mortoray.com/2017/02/16/rendering-an-svg-elliptical-arc-as-bezier-curves/ Appendix: Endpoint to center arc conversion
			 * From
			 * rx ry x-axis-rotation large-arc-flag sweep-flag x y
			 * To
			 * aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation
			 */

			function parseArcCommand( path, rx, ry, x_axis_rotation, large_arc_flag, sweep_flag, start, end ) {

				if ( rx == 0 || ry == 0 ) {

					// draw a line if either of the radii == 0
					path.lineTo( end.x, end.y );
					return;

				}

				x_axis_rotation = x_axis_rotation * Math.PI / 180;

				// Ensure radii are positive
				rx = Math.abs( rx );
				ry = Math.abs( ry );

				// Compute (x1', y1')
				const dx2 = ( start.x - end.x ) / 2.0;
				const dy2 = ( start.y - end.y ) / 2.0;
				const x1p = Math.cos( x_axis_rotation ) * dx2 + Math.sin( x_axis_rotation ) * dy2;
				const y1p = - Math.sin( x_axis_rotation ) * dx2 + Math.cos( x_axis_rotation ) * dy2;

				// Compute (cx', cy')
				let rxs = rx * rx;
				let rys = ry * ry;
				const x1ps = x1p * x1p;
				const y1ps = y1p * y1p;

				// Ensure radii are large enough
				const cr = x1ps / rxs + y1ps / rys;

				if ( cr > 1 ) {

					// scale up rx,ry equally so cr == 1
					const s = Math.sqrt( cr );
					rx = s * rx;
					ry = s * ry;
					rxs = rx * rx;
					rys = ry * ry;

				}

				const dq = ( rxs * y1ps + rys * x1ps );
				const pq = ( rxs * rys - dq ) / dq;
				let q = Math.sqrt( Math.max( 0, pq ) );
				if ( large_arc_flag === sweep_flag ) q = - q;
				const cxp = q * rx * y1p / ry;
				const cyp = - q * ry * x1p / rx;

				// Step 3: Compute (cx, cy) from (cx', cy')
				const cx = Math.cos( x_axis_rotation ) * cxp - Math.sin( x_axis_rotation ) * cyp + ( start.x + end.x ) / 2;
				const cy = Math.sin( x_axis_rotation ) * cxp + Math.cos( x_axis_rotation ) * cyp + ( start.y + end.y ) / 2;

				// Step 4: Compute θ1 and Δθ
				const theta = svgAngle( 1, 0, ( x1p - cxp ) / rx, ( y1p - cyp ) / ry );
				const delta = svgAngle( ( x1p - cxp ) / rx, ( y1p - cyp ) / ry, ( - x1p - cxp ) / rx, ( - y1p - cyp ) / ry ) % ( Math.PI * 2 );

				path.currentPath.absellipse( cx, cy, rx, ry, theta, theta + delta, sweep_flag === 0, x_axis_rotation );

			}

			function svgAngle( ux, uy, vx, vy ) {

				const dot = ux * vx + uy * vy;
				const len = Math.sqrt( ux * ux + uy * uy ) * Math.sqrt( vx * vx + vy * vy );
				let ang = Math.acos( Math.max( - 1, Math.min( 1, dot / len ) ) ); // floating point precision, slightly over values appear
				if ( ( ux * vy - uy * vx ) < 0 ) ang = - ang;
				return ang;

			}

			/*
			* According to https://www.w3.org/TR/SVG/shapes.html#RectElementRXAttribute
			* rounded corner should be rendered to elliptical arc, but bezier curve does the job well enough
			*/
			function parseRectNode( node ) {

				const x = parseFloatWithUnits( node.getAttribute( 'x' ) || 0 );
				const y = parseFloatWithUnits( node.getAttribute( 'y' ) || 0 );
				const rx = parseFloatWithUnits( node.getAttribute( 'rx' ) || node.getAttribute( 'ry' ) || 0 );
				const ry = parseFloatWithUnits( node.getAttribute( 'ry' ) || node.getAttribute( 'rx' ) || 0 );
				const w = parseFloatWithUnits( node.getAttribute( 'width' ) );
				const h = parseFloatWithUnits( node.getAttribute( 'height' ) );

				// Ellipse arc to Bezier approximation Coefficient (Inversed). See:
				// https://spencermortensen.com/articles/bezier-circle/
				const bci = 1 - 0.551915024494;

				const path = new three_module_min_js.ShapePath();

				// top left
				path.moveTo( x + rx, y );

				// top right
				path.lineTo( x + w - rx, y );
				if ( rx !== 0 || ry !== 0 ) {

					path.bezierCurveTo(
						x + w - rx * bci,
						y,
						x + w,
						y + ry * bci,
						x + w,
						y + ry
					);

				}

				// bottom right
				path.lineTo( x + w, y + h - ry );
				if ( rx !== 0 || ry !== 0 ) {

					path.bezierCurveTo(
						x + w,
						y + h - ry * bci,
						x + w - rx * bci,
						y + h,
						x + w - rx,
						y + h
					);

				}

				// bottom left
				path.lineTo( x + rx, y + h );
				if ( rx !== 0 || ry !== 0 ) {

					path.bezierCurveTo(
						x + rx * bci,
						y + h,
						x,
						y + h - ry * bci,
						x,
						y + h - ry
					);

				}

				// back to top left
				path.lineTo( x, y + ry );
				if ( rx !== 0 || ry !== 0 ) {

					path.bezierCurveTo( x, y + ry * bci, x + rx * bci, y, x + rx, y );

				}

				return path;

			}

			function parsePolygonNode( node ) {

				function iterator( match, a, b ) {

					const x = parseFloatWithUnits( a );
					const y = parseFloatWithUnits( b );

					if ( index === 0 ) {

						path.moveTo( x, y );

					} else {

						path.lineTo( x, y );

					}

					index ++;

				}

				const regex = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g;

				const path = new three_module_min_js.ShapePath();

				let index = 0;

				node.getAttribute( 'points' ).replace( regex, iterator );

				path.currentPath.autoClose = true;

				return path;

			}

			function parsePolylineNode( node ) {

				function iterator( match, a, b ) {

					const x = parseFloatWithUnits( a );
					const y = parseFloatWithUnits( b );

					if ( index === 0 ) {

						path.moveTo( x, y );

					} else {

						path.lineTo( x, y );

					}

					index ++;

				}

				const regex = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g;

				const path = new three_module_min_js.ShapePath();

				let index = 0;

				node.getAttribute( 'points' ).replace( regex, iterator );

				path.currentPath.autoClose = false;

				return path;

			}

			function parseCircleNode( node ) {

				const x = parseFloatWithUnits( node.getAttribute( 'cx' ) || 0 );
				const y = parseFloatWithUnits( node.getAttribute( 'cy' ) || 0 );
				const r = parseFloatWithUnits( node.getAttribute( 'r' ) || 0 );

				const subpath = new three_module_min_js.Path();
				subpath.absarc( x, y, r, 0, Math.PI * 2 );

				const path = new three_module_min_js.ShapePath();
				path.subPaths.push( subpath );

				return path;

			}

			function parseEllipseNode( node ) {

				const x = parseFloatWithUnits( node.getAttribute( 'cx' ) || 0 );
				const y = parseFloatWithUnits( node.getAttribute( 'cy' ) || 0 );
				const rx = parseFloatWithUnits( node.getAttribute( 'rx' ) || 0 );
				const ry = parseFloatWithUnits( node.getAttribute( 'ry' ) || 0 );

				const subpath = new three_module_min_js.Path();
				subpath.absellipse( x, y, rx, ry, 0, Math.PI * 2 );

				const path = new three_module_min_js.ShapePath();
				path.subPaths.push( subpath );

				return path;

			}

			function parseLineNode( node ) {

				const x1 = parseFloatWithUnits( node.getAttribute( 'x1' ) || 0 );
				const y1 = parseFloatWithUnits( node.getAttribute( 'y1' ) || 0 );
				const x2 = parseFloatWithUnits( node.getAttribute( 'x2' ) || 0 );
				const y2 = parseFloatWithUnits( node.getAttribute( 'y2' ) || 0 );

				const path = new three_module_min_js.ShapePath();
				path.moveTo( x1, y1 );
				path.lineTo( x2, y2 );
				path.currentPath.autoClose = false;

				return path;

			}

			//

			function parseStyle( node, style ) {

				style = Object.assign( {}, style ); // clone style

				let stylesheetStyles = {};

				if ( node.hasAttribute( 'class' ) ) {

					const classSelectors = node.getAttribute( 'class' )
						.split( /\s/ )
						.filter( Boolean )
						.map( i => i.trim() );

					for ( let i = 0; i < classSelectors.length; i ++ ) {

						stylesheetStyles = Object.assign( stylesheetStyles, stylesheets[ '.' + classSelectors[ i ] ] );

					}

				}

				if ( node.hasAttribute( 'id' ) ) {

					stylesheetStyles = Object.assign( stylesheetStyles, stylesheets[ '#' + node.getAttribute( 'id' ) ] );

				}

				function addStyle( svgName, jsName, adjustFunction ) {

					if ( adjustFunction === undefined ) adjustFunction = function copy( v ) {

						if ( v.startsWith( 'url' ) ) console.warn( 'SVGLoader: url access in attributes is not implemented.' );

						return v;

					};

					if ( node.hasAttribute( svgName ) ) style[ jsName ] = adjustFunction( node.getAttribute( svgName ) );
					if ( stylesheetStyles[ svgName ] ) style[ jsName ] = adjustFunction( stylesheetStyles[ svgName ] );
					if ( node.style && node.style[ svgName ] !== '' ) style[ jsName ] = adjustFunction( node.style[ svgName ] );

				}

				function clamp( v ) {

					return Math.max( 0, Math.min( 1, parseFloatWithUnits( v ) ) );

				}

				function positive( v ) {

					return Math.max( 0, parseFloatWithUnits( v ) );

				}

				addStyle( 'fill', 'fill' );
				addStyle( 'fill-opacity', 'fillOpacity', clamp );
				addStyle( 'fill-rule', 'fillRule' );
				addStyle( 'opacity', 'opacity', clamp );
				addStyle( 'stroke', 'stroke' );
				addStyle( 'stroke-opacity', 'strokeOpacity', clamp );
				addStyle( 'stroke-width', 'strokeWidth', positive );
				addStyle( 'stroke-linejoin', 'strokeLineJoin' );
				addStyle( 'stroke-linecap', 'strokeLineCap' );
				addStyle( 'stroke-miterlimit', 'strokeMiterLimit', positive );
				addStyle( 'visibility', 'visibility' );

				return style;

			}

			// http://www.w3.org/TR/SVG11/implnote.html#PathElementImplementationNotes

			function getReflection( a, b ) {

				return a - ( b - a );

			}

			// from https://github.com/ppvg/svg-numbers (MIT License)

			function parseFloats( input, flags, stride ) {

				if ( typeof input !== 'string' ) {

					throw new TypeError( 'Invalid input: ' + typeof input );

				}

				// Character groups
				const RE = {
					SEPARATOR: /[ \t\r\n\,.\-+]/,
					WHITESPACE: /[ \t\r\n]/,
					DIGIT: /[\d]/,
					SIGN: /[-+]/,
					POINT: /\./,
					COMMA: /,/,
					EXP: /e/i,
					FLAGS: /[01]/
				};

				// States
				const SEP = 0;
				const INT = 1;
				const FLOAT = 2;
				const EXP = 3;

				let state = SEP;
				let seenComma = true;
				let number = '', exponent = '';
				const result = [];

				function throwSyntaxError( current, i, partial ) {

					const error = new SyntaxError( 'Unexpected character "' + current + '" at index ' + i + '.' );
					error.partial = partial;
					throw error;

				}

				function newNumber() {

					if ( number !== '' ) {

						if ( exponent === '' ) result.push( Number( number ) );
						else result.push( Number( number ) * Math.pow( 10, Number( exponent ) ) );

					}

					number = '';
					exponent = '';

				}

				let current;
				const length = input.length;

				for ( let i = 0; i < length; i ++ ) {

					current = input[ i ];

					// check for flags
					if ( Array.isArray( flags ) && flags.includes( result.length % stride ) && RE.FLAGS.test( current ) ) {

						state = INT;
						number = current;
						newNumber();
						continue;

					}

					// parse until next number
					if ( state === SEP ) {

						// eat whitespace
						if ( RE.WHITESPACE.test( current ) ) {

							continue;

						}

						// start new number
						if ( RE.DIGIT.test( current ) || RE.SIGN.test( current ) ) {

							state = INT;
							number = current;
							continue;

						}

						if ( RE.POINT.test( current ) ) {

							state = FLOAT;
							number = current;
							continue;

						}

						// throw on double commas (e.g. "1, , 2")
						if ( RE.COMMA.test( current ) ) {

							if ( seenComma ) {

								throwSyntaxError( current, i, result );

							}

							seenComma = true;

						}

					}

					// parse integer part
					if ( state === INT ) {

						if ( RE.DIGIT.test( current ) ) {

							number += current;
							continue;

						}

						if ( RE.POINT.test( current ) ) {

							number += current;
							state = FLOAT;
							continue;

						}

						if ( RE.EXP.test( current ) ) {

							state = EXP;
							continue;

						}

						// throw on double signs ("-+1"), but not on sign as separator ("-1-2")
						if ( RE.SIGN.test( current )
								&& number.length === 1
								&& RE.SIGN.test( number[ 0 ] ) ) {

							throwSyntaxError( current, i, result );

						}

					}

					// parse decimal part
					if ( state === FLOAT ) {

						if ( RE.DIGIT.test( current ) ) {

							number += current;
							continue;

						}

						if ( RE.EXP.test( current ) ) {

							state = EXP;
							continue;

						}

						// throw on double decimal points (e.g. "1..2")
						if ( RE.POINT.test( current ) && number[ number.length - 1 ] === '.' ) {

							throwSyntaxError( current, i, result );

						}

					}

					// parse exponent part
					if ( state === EXP ) {

						if ( RE.DIGIT.test( current ) ) {

							exponent += current;
							continue;

						}

						if ( RE.SIGN.test( current ) ) {

							if ( exponent === '' ) {

								exponent += current;
								continue;

							}

							if ( exponent.length === 1 && RE.SIGN.test( exponent ) ) {

								throwSyntaxError( current, i, result );

							}

						}

					}


					// end of number
					if ( RE.WHITESPACE.test( current ) ) {

						newNumber();
						state = SEP;
						seenComma = false;

					} else if ( RE.COMMA.test( current ) ) {

						newNumber();
						state = SEP;
						seenComma = true;

					} else if ( RE.SIGN.test( current ) ) {

						newNumber();
						state = INT;
						number = current;

					} else if ( RE.POINT.test( current ) ) {

						newNumber();
						state = FLOAT;
						number = current;

					} else {

						throwSyntaxError( current, i, result );

					}

				}

				// add the last number found (if any)
				newNumber();

				return result;

			}

			// Units

			const units = [ 'mm', 'cm', 'in', 'pt', 'pc', 'px' ];

			// Conversion: [ fromUnit ][ toUnit ] (-1 means dpi dependent)
			const unitConversion = {

				'mm': {
					'mm': 1,
					'cm': 0.1,
					'in': 1 / 25.4,
					'pt': 72 / 25.4,
					'pc': 6 / 25.4,
					'px': - 1
				},
				'cm': {
					'mm': 10,
					'cm': 1,
					'in': 1 / 2.54,
					'pt': 72 / 2.54,
					'pc': 6 / 2.54,
					'px': - 1
				},
				'in': {
					'mm': 25.4,
					'cm': 2.54,
					'in': 1,
					'pt': 72,
					'pc': 6,
					'px': - 1
				},
				'pt': {
					'mm': 25.4 / 72,
					'cm': 2.54 / 72,
					'in': 1 / 72,
					'pt': 1,
					'pc': 6 / 72,
					'px': - 1
				},
				'pc': {
					'mm': 25.4 / 6,
					'cm': 2.54 / 6,
					'in': 1 / 6,
					'pt': 72 / 6,
					'pc': 1,
					'px': - 1
				},
				'px': {
					'px': 1
				}

			};

			function parseFloatWithUnits( string ) {

				let theUnit = 'px';

				if ( typeof string === 'string' || string instanceof String ) {

					for ( let i = 0, n = units.length; i < n; i ++ ) {

						const u = units[ i ];

						if ( string.endsWith( u ) ) {

							theUnit = u;
							string = string.substring( 0, string.length - u.length );
							break;

						}

					}

				}

				let scale = undefined;

				if ( theUnit === 'px' && scope.defaultUnit !== 'px' ) {

					// Conversion scale from  pixels to inches, then to default units

					scale = unitConversion[ 'in' ][ scope.defaultUnit ] / scope.defaultDPI;

				} else {

					scale = unitConversion[ theUnit ][ scope.defaultUnit ];

					if ( scale < 0 ) {

						// Conversion scale to pixels

						scale = unitConversion[ theUnit ][ 'in' ] * scope.defaultDPI;

					}

				}

				return scale * parseFloat( string );

			}

			// Transforms

			function getNodeTransform( node ) {

				if ( ! ( node.hasAttribute( 'transform' ) || ( node.nodeName === 'use' && ( node.hasAttribute( 'x' ) || node.hasAttribute( 'y' ) ) ) ) ) {

					return null;

				}

				const transform = parseNodeTransform( node );

				if ( transformStack.length > 0 ) {

					transform.premultiply( transformStack[ transformStack.length - 1 ] );

				}

				currentTransform.copy( transform );
				transformStack.push( transform );

				return transform;

			}

			function parseNodeTransform( node ) {

				const transform = new three_module_min_js.Matrix3();
				const currentTransform = tempTransform0;

				if ( node.nodeName === 'use' && ( node.hasAttribute( 'x' ) || node.hasAttribute( 'y' ) ) ) {

					const tx = parseFloatWithUnits( node.getAttribute( 'x' ) );
					const ty = parseFloatWithUnits( node.getAttribute( 'y' ) );

					transform.translate( tx, ty );

				}

				if ( node.hasAttribute( 'transform' ) ) {

					const transformsTexts = node.getAttribute( 'transform' ).split( ')' );

					for ( let tIndex = transformsTexts.length - 1; tIndex >= 0; tIndex -- ) {

						const transformText = transformsTexts[ tIndex ].trim();

						if ( transformText === '' ) continue;

						const openParPos = transformText.indexOf( '(' );
						const closeParPos = transformText.length;

						if ( openParPos > 0 && openParPos < closeParPos ) {

							const transformType = transformText.slice( 0, openParPos );

							const array = parseFloats( transformText.slice( openParPos + 1 ) );

							currentTransform.identity();

							switch ( transformType ) {

								case 'translate':

									if ( array.length >= 1 ) {

										const tx = array[ 0 ];
										let ty = 0;

										if ( array.length >= 2 ) {

											ty = array[ 1 ];

										}

										currentTransform.translate( tx, ty );

									}

									break;

								case 'rotate':

									if ( array.length >= 1 ) {

										let angle = 0;
										let cx = 0;
										let cy = 0;

										// Angle
										angle = array[ 0 ] * Math.PI / 180;

										if ( array.length >= 3 ) {

											// Center x, y
											cx = array[ 1 ];
											cy = array[ 2 ];

										}

										// Rotate around center (cx, cy)
										tempTransform1.makeTranslation( - cx, - cy );
										tempTransform2.makeRotation( angle );
										tempTransform3.multiplyMatrices( tempTransform2, tempTransform1 );
										tempTransform1.makeTranslation( cx, cy );
										currentTransform.multiplyMatrices( tempTransform1, tempTransform3 );

									}

									break;

								case 'scale':

									if ( array.length >= 1 ) {

										const scaleX = array[ 0 ];
										let scaleY = scaleX;

										if ( array.length >= 2 ) {

											scaleY = array[ 1 ];

										}

										currentTransform.scale( scaleX, scaleY );

									}

									break;

								case 'skewX':

									if ( array.length === 1 ) {

										currentTransform.set(
											1, Math.tan( array[ 0 ] * Math.PI / 180 ), 0,
											0, 1, 0,
											0, 0, 1
										);

									}

									break;

								case 'skewY':

									if ( array.length === 1 ) {

										currentTransform.set(
											1, 0, 0,
											Math.tan( array[ 0 ] * Math.PI / 180 ), 1, 0,
											0, 0, 1
										);

									}

									break;

								case 'matrix':

									if ( array.length === 6 ) {

										currentTransform.set(
											array[ 0 ], array[ 2 ], array[ 4 ],
											array[ 1 ], array[ 3 ], array[ 5 ],
											0, 0, 1
										);

									}

									break;

							}

						}

						transform.premultiply( currentTransform );

					}

				}

				return transform;

			}

			function transformPath( path, m ) {

				function transfVec2( v2 ) {

					tempV3.set( v2.x, v2.y, 1 ).applyMatrix3( m );

					v2.set( tempV3.x, tempV3.y );

				}

				function transfEllipseGeneric( curve ) {

					// For math description see:
					// https://math.stackexchange.com/questions/4544164

					const a = curve.xRadius;
					const b = curve.yRadius;

					const cosTheta = Math.cos( curve.aRotation );
					const sinTheta = Math.sin( curve.aRotation );

					const v1 = new three_module_min_js.Vector3( a * cosTheta, a * sinTheta, 0 );
					const v2 = new three_module_min_js.Vector3( - b * sinTheta, b * cosTheta, 0 );

					const f1 = v1.applyMatrix3( m );
					const f2 = v2.applyMatrix3( m );

					const mF = tempTransform0.set(
						f1.x, f2.x, 0,
						f1.y, f2.y, 0,
						0, 0, 1,
					);

					const mFInv = tempTransform1.copy( mF ).invert();
					const mFInvT = tempTransform2.copy( mFInv ).transpose();
					const mQ = mFInvT.multiply( mFInv );
					const mQe = mQ.elements;

					const ed = eigenDecomposition( mQe[ 0 ], mQe[ 1 ], mQe[ 4 ] );
					const rt1sqrt = Math.sqrt( ed.rt1 );
					const rt2sqrt = Math.sqrt( ed.rt2 );

					curve.xRadius = 1 / rt1sqrt;
					curve.yRadius = 1 / rt2sqrt;
					curve.aRotation = Math.atan2( ed.sn, ed.cs );

					const isFullEllipse =
						( curve.aEndAngle - curve.aStartAngle ) % ( 2 * Math.PI ) < Number.EPSILON;

					// Do not touch angles of a full ellipse because after transformation they
					// would converge to a sinle value effectively removing the whole curve

					if ( ! isFullEllipse ) {

						const mDsqrt = tempTransform1.set(
							rt1sqrt, 0, 0,
							0, rt2sqrt, 0,
							0, 0, 1,
						);

						const mRT = tempTransform2.set(
							ed.cs, ed.sn, 0,
							- ed.sn, ed.cs, 0,
							0, 0, 1,
						);

						const mDRF = mDsqrt.multiply( mRT ).multiply( mF );

						const transformAngle = phi => {

							const { x: cosR, y: sinR } =
								new three_module_min_js.Vector3( Math.cos( phi ), Math.sin( phi ), 0 ).applyMatrix3( mDRF );

							return Math.atan2( sinR, cosR );

						};

						curve.aStartAngle = transformAngle( curve.aStartAngle );
						curve.aEndAngle = transformAngle( curve.aEndAngle );

						if ( isTransformFlipped( m ) ) {

							curve.aClockwise = ! curve.aClockwise;

						}

					}

				}

				function transfEllipseNoSkew( curve ) {

					// Faster shortcut if no skew is applied
					// (e.g, a euclidean transform of a group containing the ellipse)

					const sx = getTransformScaleX( m );
					const sy = getTransformScaleY( m );

					curve.xRadius *= sx;
					curve.yRadius *= sy;

					// Extract rotation angle from the matrix of form:
					//
					//  | cosθ sx   -sinθ sy |
					//  | sinθ sx    cosθ sy |
					//
					// Remembering that tanθ = sinθ / cosθ; and that
					// `sx`, `sy`, or both might be zero.
					const theta =
						sx > Number.EPSILON
							? Math.atan2( m.elements[ 1 ], m.elements[ 0 ] )
							: Math.atan2( - m.elements[ 3 ], m.elements[ 4 ] );

					curve.aRotation += theta;

					if ( isTransformFlipped( m ) ) {

						curve.aStartAngle *= - 1;
						curve.aEndAngle *= - 1;
						curve.aClockwise = ! curve.aClockwise;

					}

				}

				const subPaths = path.subPaths;

				for ( let i = 0, n = subPaths.length; i < n; i ++ ) {

					const subPath = subPaths[ i ];
					const curves = subPath.curves;

					for ( let j = 0; j < curves.length; j ++ ) {

						const curve = curves[ j ];

						if ( curve.isLineCurve ) {

							transfVec2( curve.v1 );
							transfVec2( curve.v2 );

						} else if ( curve.isCubicBezierCurve ) {

							transfVec2( curve.v0 );
							transfVec2( curve.v1 );
							transfVec2( curve.v2 );
							transfVec2( curve.v3 );

						} else if ( curve.isQuadraticBezierCurve ) {

							transfVec2( curve.v0 );
							transfVec2( curve.v1 );
							transfVec2( curve.v2 );

						} else if ( curve.isEllipseCurve ) {

							// Transform ellipse center point

							tempV2.set( curve.aX, curve.aY );
							transfVec2( tempV2 );
							curve.aX = tempV2.x;
							curve.aY = tempV2.y;

							// Transform ellipse shape parameters

							if ( isTransformSkewed( m ) ) {

								transfEllipseGeneric( curve );

							} else {

								transfEllipseNoSkew( curve );

							}

						}

					}

				}

			}

			function isTransformFlipped( m ) {

				const te = m.elements;
				return te[ 0 ] * te[ 4 ] - te[ 1 ] * te[ 3 ] < 0;

			}

			function isTransformSkewed( m ) {

				const te = m.elements;
				const basisDot = te[ 0 ] * te[ 3 ] + te[ 1 ] * te[ 4 ];

				// Shortcut for trivial rotations and transformations
				if ( basisDot === 0 ) return false;

				const sx = getTransformScaleX( m );
				const sy = getTransformScaleY( m );

				return Math.abs( basisDot / ( sx * sy ) ) > Number.EPSILON;

			}

			function getTransformScaleX( m ) {

				const te = m.elements;
				return Math.sqrt( te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] );

			}

			function getTransformScaleY( m ) {

				const te = m.elements;
				return Math.sqrt( te[ 3 ] * te[ 3 ] + te[ 4 ] * te[ 4 ] );

			}

			// Calculates the eigensystem of a real symmetric 2x2 matrix
			//    [ A  B ]
			//    [ B  C ]
			// in the form
			//    [ A  B ]  =  [ cs  -sn ] [ rt1   0  ] [  cs  sn ]
			//    [ B  C ]     [ sn   cs ] [  0   rt2 ] [ -sn  cs ]
			// where rt1 >= rt2.
			//
			// Adapted from: https://www.mpi-hd.mpg.de/personalhomes/globes/3x3/index.html
			// -> Algorithms for real symmetric matrices -> Analytical (2x2 symmetric)
			function eigenDecomposition( A, B, C ) {

				let rt1, rt2, cs, sn, t;
				const sm = A + C;
				const df = A - C;
				const rt = Math.sqrt( df * df + 4 * B * B );

				if ( sm > 0 ) {

					rt1 = 0.5 * ( sm + rt );
					t = 1 / rt1;
					rt2 = A * t * C - B * t * B;

				} else if ( sm < 0 ) {

					rt2 = 0.5 * ( sm - rt );

				} else {

					// This case needs to be treated separately to avoid div by 0

					rt1 = 0.5 * rt;
					rt2 = - 0.5 * rt;

				}

				// Calculate eigenvectors

				if ( df > 0 ) {

					cs = df + rt;

				} else {

					cs = df - rt;

				}

				if ( Math.abs( cs ) > 2 * Math.abs( B ) ) {

					t = - 2 * B / cs;
					sn = 1 / Math.sqrt( 1 + t * t );
					cs = t * sn;

				} else if ( Math.abs( B ) === 0 ) {

					cs = 1;
					sn = 0;

				} else {

					t = - 0.5 * cs / B;
					cs = 1 / Math.sqrt( 1 + t * t );
					sn = t * cs;

				}

				if ( df > 0 ) {

					t = cs;
					cs = - sn;
					sn = t;

				}

				return { rt1, rt2, cs, sn };

			}

			//

			const paths = [];
			const stylesheets = {};

			const transformStack = [];

			const tempTransform0 = new three_module_min_js.Matrix3();
			const tempTransform1 = new three_module_min_js.Matrix3();
			const tempTransform2 = new three_module_min_js.Matrix3();
			const tempTransform3 = new three_module_min_js.Matrix3();
			const tempV2 = new three_module_min_js.Vector2();
			const tempV3 = new three_module_min_js.Vector3();

			const currentTransform = new three_module_min_js.Matrix3();

			const xml = new DOMParser().parseFromString( text, 'image/svg+xml' ); // application/xml

			parseNode( xml.documentElement, {
				fill: '#000',
				fillOpacity: 1,
				strokeOpacity: 1,
				strokeWidth: 1,
				strokeLineJoin: 'miter',
				strokeLineCap: 'butt',
				strokeMiterLimit: 4
			} );

			const data = { paths: paths, xml: xml.documentElement };

			// console.log( paths );
			return data;

		}

		static createShapes( shapePath ) {

			// Param shapePath: a shapepath as returned by the parse function of this class
			// Returns Shape object

			const BIGNUMBER = 999999999;

			const IntersectionLocationType = {
				ORIGIN: 0,
				DESTINATION: 1,
				BETWEEN: 2,
				LEFT: 3,
				RIGHT: 4,
				BEHIND: 5,
				BEYOND: 6
			};

			const classifyResult = {
				loc: IntersectionLocationType.ORIGIN,
				t: 0
			};

			function findEdgeIntersection( a0, a1, b0, b1 ) {

				const x1 = a0.x;
				const x2 = a1.x;
				const x3 = b0.x;
				const x4 = b1.x;
				const y1 = a0.y;
				const y2 = a1.y;
				const y3 = b0.y;
				const y4 = b1.y;
				const nom1 = ( x4 - x3 ) * ( y1 - y3 ) - ( y4 - y3 ) * ( x1 - x3 );
				const nom2 = ( x2 - x1 ) * ( y1 - y3 ) - ( y2 - y1 ) * ( x1 - x3 );
				const denom = ( y4 - y3 ) * ( x2 - x1 ) - ( x4 - x3 ) * ( y2 - y1 );
				const t1 = nom1 / denom;
				const t2 = nom2 / denom;

				if ( ( ( denom === 0 ) && ( nom1 !== 0 ) ) || ( t1 <= 0 ) || ( t1 >= 1 ) || ( t2 < 0 ) || ( t2 > 1 ) ) {

					//1. lines are parallel or edges don't intersect

					return null;

				} else if ( ( nom1 === 0 ) && ( denom === 0 ) ) {

					//2. lines are colinear

					//check if endpoints of edge2 (b0-b1) lies on edge1 (a0-a1)
					for ( let i = 0; i < 2; i ++ ) {

						classifyPoint( i === 0 ? b0 : b1, a0, a1 );
						//find position of this endpoints relatively to edge1
						if ( classifyResult.loc == IntersectionLocationType.ORIGIN ) {

							const point = ( i === 0 ? b0 : b1 );
							return { x: point.x, y: point.y, t: classifyResult.t };

						} else if ( classifyResult.loc == IntersectionLocationType.BETWEEN ) {

							const x = + ( ( x1 + classifyResult.t * ( x2 - x1 ) ).toPrecision( 10 ) );
							const y = + ( ( y1 + classifyResult.t * ( y2 - y1 ) ).toPrecision( 10 ) );
							return { x: x, y: y, t: classifyResult.t, };

						}

					}

					return null;

				} else {

					//3. edges intersect

					for ( let i = 0; i < 2; i ++ ) {

						classifyPoint( i === 0 ? b0 : b1, a0, a1 );

						if ( classifyResult.loc == IntersectionLocationType.ORIGIN ) {

							const point = ( i === 0 ? b0 : b1 );
							return { x: point.x, y: point.y, t: classifyResult.t };

						}

					}

					const x = + ( ( x1 + t1 * ( x2 - x1 ) ).toPrecision( 10 ) );
					const y = + ( ( y1 + t1 * ( y2 - y1 ) ).toPrecision( 10 ) );
					return { x: x, y: y, t: t1 };

				}

			}

			function classifyPoint( p, edgeStart, edgeEnd ) {

				const ax = edgeEnd.x - edgeStart.x;
				const ay = edgeEnd.y - edgeStart.y;
				const bx = p.x - edgeStart.x;
				const by = p.y - edgeStart.y;
				const sa = ax * by - bx * ay;

				if ( ( p.x === edgeStart.x ) && ( p.y === edgeStart.y ) ) {

					classifyResult.loc = IntersectionLocationType.ORIGIN;
					classifyResult.t = 0;
					return;

				}

				if ( ( p.x === edgeEnd.x ) && ( p.y === edgeEnd.y ) ) {

					classifyResult.loc = IntersectionLocationType.DESTINATION;
					classifyResult.t = 1;
					return;

				}

				if ( sa < - Number.EPSILON ) {

					classifyResult.loc = IntersectionLocationType.LEFT;
					return;

				}

				if ( sa > Number.EPSILON ) {

					classifyResult.loc = IntersectionLocationType.RIGHT;
					return;


				}

				if ( ( ( ax * bx ) < 0 ) || ( ( ay * by ) < 0 ) ) {

					classifyResult.loc = IntersectionLocationType.BEHIND;
					return;

				}

				if ( ( Math.sqrt( ax * ax + ay * ay ) ) < ( Math.sqrt( bx * bx + by * by ) ) ) {

					classifyResult.loc = IntersectionLocationType.BEYOND;
					return;

				}

				let t;

				if ( ax !== 0 ) {

					t = bx / ax;

				} else {

					t = by / ay;

				}

				classifyResult.loc = IntersectionLocationType.BETWEEN;
				classifyResult.t = t;

			}

			function getIntersections( path1, path2 ) {

				const intersectionsRaw = [];
				const intersections = [];

				for ( let index = 1; index < path1.length; index ++ ) {

					const path1EdgeStart = path1[ index - 1 ];
					const path1EdgeEnd = path1[ index ];

					for ( let index2 = 1; index2 < path2.length; index2 ++ ) {

						const path2EdgeStart = path2[ index2 - 1 ];
						const path2EdgeEnd = path2[ index2 ];

						const intersection = findEdgeIntersection( path1EdgeStart, path1EdgeEnd, path2EdgeStart, path2EdgeEnd );

						if ( intersection !== null && intersectionsRaw.find( i => i.t <= intersection.t + Number.EPSILON && i.t >= intersection.t - Number.EPSILON ) === undefined ) {

							intersectionsRaw.push( intersection );
							intersections.push( new three_module_min_js.Vector2( intersection.x, intersection.y ) );

						}

					}

				}

				return intersections;

			}

			function getScanlineIntersections( scanline, boundingBox, paths ) {

				const center = new three_module_min_js.Vector2();
				boundingBox.getCenter( center );

				const allIntersections = [];

				paths.forEach( path => {

					// check if the center of the bounding box is in the bounding box of the paths.
					// this is a pruning method to limit the search of intersections in paths that can't envelop of the current path.
					// if a path envelops another path. The center of that oter path, has to be inside the bounding box of the enveloping path.
					if ( path.boundingBox.containsPoint( center ) ) {

						const intersections = getIntersections( scanline, path.points );

						intersections.forEach( p => {

							allIntersections.push( { identifier: path.identifier, isCW: path.isCW, point: p } );

						} );

					}

				} );

				allIntersections.sort( ( i1, i2 ) => {

					return i1.point.x - i2.point.x;

				} );

				return allIntersections;

			}

			function isHoleTo( simplePath, allPaths, scanlineMinX, scanlineMaxX, _fillRule ) {

				if ( _fillRule === null || _fillRule === undefined || _fillRule === '' ) {

					_fillRule = 'nonzero';

				}

				const centerBoundingBox = new three_module_min_js.Vector2();
				simplePath.boundingBox.getCenter( centerBoundingBox );

				const scanline = [ new three_module_min_js.Vector2( scanlineMinX, centerBoundingBox.y ), new three_module_min_js.Vector2( scanlineMaxX, centerBoundingBox.y ) ];

				const scanlineIntersections = getScanlineIntersections( scanline, simplePath.boundingBox, allPaths );

				scanlineIntersections.sort( ( i1, i2 ) => {

					return i1.point.x - i2.point.x;

				} );

				const baseIntersections = [];
				const otherIntersections = [];

				scanlineIntersections.forEach( i => {

					if ( i.identifier === simplePath.identifier ) {

						baseIntersections.push( i );

					} else {

						otherIntersections.push( i );

					}

				} );

				const firstXOfPath = baseIntersections[ 0 ].point.x;

				// build up the path hierarchy
				const stack = [];
				let i = 0;

				while ( i < otherIntersections.length && otherIntersections[ i ].point.x < firstXOfPath ) {

					if ( stack.length > 0 && stack[ stack.length - 1 ] === otherIntersections[ i ].identifier ) {

						stack.pop();

					} else {

						stack.push( otherIntersections[ i ].identifier );

					}

					i ++;

				}

				stack.push( simplePath.identifier );

				if ( _fillRule === 'evenodd' ) {

					const isHole = stack.length % 2 === 0 ? true : false;
					const isHoleFor = stack[ stack.length - 2 ];

					return { identifier: simplePath.identifier, isHole: isHole, for: isHoleFor };

				} else if ( _fillRule === 'nonzero' ) {

					// check if path is a hole by counting the amount of paths with alternating rotations it has to cross.
					let isHole = true;
					let isHoleFor = null;
					let lastCWValue = null;

					for ( let i = 0; i < stack.length; i ++ ) {

						const identifier = stack[ i ];
						if ( isHole ) {

							lastCWValue = allPaths[ identifier ].isCW;
							isHole = false;
							isHoleFor = identifier;

						} else if ( lastCWValue !== allPaths[ identifier ].isCW ) {

							lastCWValue = allPaths[ identifier ].isCW;
							isHole = true;

						}

					}

					return { identifier: simplePath.identifier, isHole: isHole, for: isHoleFor };

				} else {

					console.warn( 'fill-rule: "' + _fillRule + '" is currently not implemented.' );

				}

			}

			// check for self intersecting paths
			// TODO

			// check intersecting paths
			// TODO

			// prepare paths for hole detection
			let scanlineMinX = BIGNUMBER;
			let scanlineMaxX = - BIGNUMBER;

			let simplePaths = shapePath.subPaths.map( p => {

				const points = p.getPoints();
				let maxY = - BIGNUMBER;
				let minY = BIGNUMBER;
				let maxX = - BIGNUMBER;
				let minX = BIGNUMBER;

		      	//points.forEach(p => p.y *= -1);

				for ( let i = 0; i < points.length; i ++ ) {

					const p = points[ i ];

					if ( p.y > maxY ) {

						maxY = p.y;

					}

					if ( p.y < minY ) {

						minY = p.y;

					}

					if ( p.x > maxX ) {

						maxX = p.x;

					}

					if ( p.x < minX ) {

						minX = p.x;

					}

				}

				//
				if ( scanlineMaxX <= maxX ) {

					scanlineMaxX = maxX + 1;

				}

				if ( scanlineMinX >= minX ) {

					scanlineMinX = minX - 1;

				}

				return { curves: p.curves, points: points, isCW: three_module_min_js.ShapeUtils.isClockWise( points ), identifier: - 1, boundingBox: new three_module_min_js.Box2( new three_module_min_js.Vector2( minX, minY ), new three_module_min_js.Vector2( maxX, maxY ) ) };

			} );

			simplePaths = simplePaths.filter( sp => sp.points.length > 1 );

			for ( let identifier = 0; identifier < simplePaths.length; identifier ++ ) {

				simplePaths[ identifier ].identifier = identifier;

			}

			// check if path is solid or a hole
			const isAHole = simplePaths.map( p => isHoleTo( p, simplePaths, scanlineMinX, scanlineMaxX, ( shapePath.userData ? shapePath.userData.style.fillRule : undefined ) ) );


			const shapesToReturn = [];
			simplePaths.forEach( p => {

				const amIAHole = isAHole[ p.identifier ];

				if ( ! amIAHole.isHole ) {

					const shape = new three_module_min_js.Shape();
					shape.curves = p.curves;
					const holes = isAHole.filter( h => h.isHole && h.for === p.identifier );
					holes.forEach( h => {

						const hole = simplePaths[ h.identifier ];
						const path = new three_module_min_js.Path();
						path.curves = hole.curves;
						shape.holes.push( path );

					} );
					shapesToReturn.push( shape );

				}

			} );

			return shapesToReturn;

		}

		static getStrokeStyle( width, color, lineJoin, lineCap, miterLimit ) {

			// Param width: Stroke width
			// Param color: As returned by THREE.Color.getStyle()
			// Param lineJoin: One of "round", "bevel", "miter" or "miter-limit"
			// Param lineCap: One of "round", "square" or "butt"
			// Param miterLimit: Maximum join length, in multiples of the "width" parameter (join is truncated if it exceeds that distance)
			// Returns style object

			width = width !== undefined ? width : 1;
			color = color !== undefined ? color : '#000';
			lineJoin = lineJoin !== undefined ? lineJoin : 'miter';
			lineCap = lineCap !== undefined ? lineCap : 'butt';
			miterLimit = miterLimit !== undefined ? miterLimit : 4;

			return {
				strokeColor: color,
				strokeWidth: width,
				strokeLineJoin: lineJoin,
				strokeLineCap: lineCap,
				strokeMiterLimit: miterLimit
			};

		}

		static pointsToStroke( points, style, arcDivisions, minDistance ) {

			// Generates a stroke with some width around the given path.
			// The path can be open or closed (last point equals to first point)
			// Param points: Array of Vector2D (the path). Minimum 2 points.
			// Param style: Object with SVG properties as returned by SVGLoader.getStrokeStyle(), or SVGLoader.parse() in the path.userData.style object
			// Params arcDivisions: Arc divisions for round joins and endcaps. (Optional)
			// Param minDistance: Points closer to this distance will be merged. (Optional)
			// Returns BufferGeometry with stroke triangles (In plane z = 0). UV coordinates are generated ('u' along path. 'v' across it, from left to right)

			const vertices = [];
			const normals = [];
			const uvs = [];

			if ( SVGLoader.pointsToStrokeWithBuffers( points, style, arcDivisions, minDistance, vertices, normals, uvs ) === 0 ) {

				return null;

			}

			const geometry = new three_module_min_js.BufferGeometry();
			geometry.setAttribute( 'position', new three_module_min_js.Float32BufferAttribute( vertices, 3 ) );
			geometry.setAttribute( 'normal', new three_module_min_js.Float32BufferAttribute( normals, 3 ) );
			geometry.setAttribute( 'uv', new three_module_min_js.Float32BufferAttribute( uvs, 2 ) );

			return geometry;

		}

		static pointsToStrokeWithBuffers( points, style, arcDivisions, minDistance, vertices, normals, uvs, vertexOffset ) {

			// This function can be called to update existing arrays or buffers.
			// Accepts same parameters as pointsToStroke, plus the buffers and optional offset.
			// Param vertexOffset: Offset vertices to start writing in the buffers (3 elements/vertex for vertices and normals, and 2 elements/vertex for uvs)
			// Returns number of written vertices / normals / uvs pairs
			// if 'vertices' parameter is undefined no triangles will be generated, but the returned vertices count will still be valid (useful to preallocate the buffers)
			// 'normals' and 'uvs' buffers are optional

			const tempV2_1 = new three_module_min_js.Vector2();
			const tempV2_2 = new three_module_min_js.Vector2();
			const tempV2_3 = new three_module_min_js.Vector2();
			const tempV2_4 = new three_module_min_js.Vector2();
			const tempV2_5 = new three_module_min_js.Vector2();
			const tempV2_6 = new three_module_min_js.Vector2();
			const tempV2_7 = new three_module_min_js.Vector2();
			const lastPointL = new three_module_min_js.Vector2();
			const lastPointR = new three_module_min_js.Vector2();
			const point0L = new three_module_min_js.Vector2();
			const point0R = new three_module_min_js.Vector2();
			const currentPointL = new three_module_min_js.Vector2();
			const currentPointR = new three_module_min_js.Vector2();
			const nextPointL = new three_module_min_js.Vector2();
			const nextPointR = new three_module_min_js.Vector2();
			const innerPoint = new three_module_min_js.Vector2();
			const outerPoint = new three_module_min_js.Vector2();

			arcDivisions = arcDivisions !== undefined ? arcDivisions : 12;
			minDistance = minDistance !== undefined ? minDistance : 0.001;
			vertexOffset = vertexOffset !== undefined ? vertexOffset : 0;

			// First ensure there are no duplicated points
			points = removeDuplicatedPoints( points );

			const numPoints = points.length;

			if ( numPoints < 2 ) return 0;

			const isClosed = points[ 0 ].equals( points[ numPoints - 1 ] );

			let currentPoint;
			let previousPoint = points[ 0 ];
			let nextPoint;

			const strokeWidth2 = style.strokeWidth / 2;

			const deltaU = 1 / ( numPoints - 1 );
			let u0 = 0, u1;

			let innerSideModified;
			let joinIsOnLeftSide;
			let isMiter;
			let initialJoinIsOnLeftSide = false;

			let numVertices = 0;
			let currentCoordinate = vertexOffset * 3;
			let currentCoordinateUV = vertexOffset * 2;

			// Get initial left and right stroke points
			getNormal( points[ 0 ], points[ 1 ], tempV2_1 ).multiplyScalar( strokeWidth2 );
			lastPointL.copy( points[ 0 ] ).sub( tempV2_1 );
			lastPointR.copy( points[ 0 ] ).add( tempV2_1 );
			point0L.copy( lastPointL );
			point0R.copy( lastPointR );

			for ( let iPoint = 1; iPoint < numPoints; iPoint ++ ) {

				currentPoint = points[ iPoint ];

				// Get next point
				if ( iPoint === numPoints - 1 ) {

					if ( isClosed ) {

						// Skip duplicated initial point
						nextPoint = points[ 1 ];

					} else nextPoint = undefined;

				} else {

					nextPoint = points[ iPoint + 1 ];

				}

				// Normal of previous segment in tempV2_1
				const normal1 = tempV2_1;
				getNormal( previousPoint, currentPoint, normal1 );

				tempV2_3.copy( normal1 ).multiplyScalar( strokeWidth2 );
				currentPointL.copy( currentPoint ).sub( tempV2_3 );
				currentPointR.copy( currentPoint ).add( tempV2_3 );

				u1 = u0 + deltaU;

				innerSideModified = false;

				if ( nextPoint !== undefined ) {

					// Normal of next segment in tempV2_2
					getNormal( currentPoint, nextPoint, tempV2_2 );

					tempV2_3.copy( tempV2_2 ).multiplyScalar( strokeWidth2 );
					nextPointL.copy( currentPoint ).sub( tempV2_3 );
					nextPointR.copy( currentPoint ).add( tempV2_3 );

					joinIsOnLeftSide = true;
					tempV2_3.subVectors( nextPoint, previousPoint );
					if ( normal1.dot( tempV2_3 ) < 0 ) {

						joinIsOnLeftSide = false;

					}

					if ( iPoint === 1 ) initialJoinIsOnLeftSide = joinIsOnLeftSide;

					tempV2_3.subVectors( nextPoint, currentPoint );
					tempV2_3.normalize();
					const dot = Math.abs( normal1.dot( tempV2_3 ) );

					// If path is straight, don't create join
					if ( dot > Number.EPSILON ) {

						// Compute inner and outer segment intersections
						const miterSide = strokeWidth2 / dot;
						tempV2_3.multiplyScalar( - miterSide );
						tempV2_4.subVectors( currentPoint, previousPoint );
						tempV2_5.copy( tempV2_4 ).setLength( miterSide ).add( tempV2_3 );
						innerPoint.copy( tempV2_5 ).negate();
						const miterLength2 = tempV2_5.length();
						const segmentLengthPrev = tempV2_4.length();
						tempV2_4.divideScalar( segmentLengthPrev );
						tempV2_6.subVectors( nextPoint, currentPoint );
						const segmentLengthNext = tempV2_6.length();
						tempV2_6.divideScalar( segmentLengthNext );
						// Check that previous and next segments doesn't overlap with the innerPoint of intersection
						if ( tempV2_4.dot( innerPoint ) < segmentLengthPrev && tempV2_6.dot( innerPoint ) < segmentLengthNext ) {

							innerSideModified = true;

						}

						outerPoint.copy( tempV2_5 ).add( currentPoint );
						innerPoint.add( currentPoint );

						isMiter = false;

						if ( innerSideModified ) {

							if ( joinIsOnLeftSide ) {

								nextPointR.copy( innerPoint );
								currentPointR.copy( innerPoint );

							} else {

								nextPointL.copy( innerPoint );
								currentPointL.copy( innerPoint );

							}

						} else {

							// The segment triangles are generated here if there was overlapping

							makeSegmentTriangles();

						}

						switch ( style.strokeLineJoin ) {

							case 'bevel':

								makeSegmentWithBevelJoin( joinIsOnLeftSide, innerSideModified, u1 );

								break;

							case 'round':

								// Segment triangles

								createSegmentTrianglesWithMiddleSection( joinIsOnLeftSide, innerSideModified );

								// Join triangles

								if ( joinIsOnLeftSide ) {

									makeCircularSector( currentPoint, currentPointL, nextPointL, u1, 0 );

								} else {

									makeCircularSector( currentPoint, nextPointR, currentPointR, u1, 1 );

								}

								break;

							case 'miter':
							case 'miter-clip':
							default:

								const miterFraction = ( strokeWidth2 * style.strokeMiterLimit ) / miterLength2;

								if ( miterFraction < 1 ) {

									// The join miter length exceeds the miter limit

									if ( style.strokeLineJoin !== 'miter-clip' ) {

										makeSegmentWithBevelJoin( joinIsOnLeftSide, innerSideModified, u1 );
										break;

									} else {

										// Segment triangles

										createSegmentTrianglesWithMiddleSection( joinIsOnLeftSide, innerSideModified );

										// Miter-clip join triangles

										if ( joinIsOnLeftSide ) {

											tempV2_6.subVectors( outerPoint, currentPointL ).multiplyScalar( miterFraction ).add( currentPointL );
											tempV2_7.subVectors( outerPoint, nextPointL ).multiplyScalar( miterFraction ).add( nextPointL );

											addVertex( currentPointL, u1, 0 );
											addVertex( tempV2_6, u1, 0 );
											addVertex( currentPoint, u1, 0.5 );

											addVertex( currentPoint, u1, 0.5 );
											addVertex( tempV2_6, u1, 0 );
											addVertex( tempV2_7, u1, 0 );

											addVertex( currentPoint, u1, 0.5 );
											addVertex( tempV2_7, u1, 0 );
											addVertex( nextPointL, u1, 0 );

										} else {

											tempV2_6.subVectors( outerPoint, currentPointR ).multiplyScalar( miterFraction ).add( currentPointR );
											tempV2_7.subVectors( outerPoint, nextPointR ).multiplyScalar( miterFraction ).add( nextPointR );

											addVertex( currentPointR, u1, 1 );
											addVertex( tempV2_6, u1, 1 );
											addVertex( currentPoint, u1, 0.5 );

											addVertex( currentPoint, u1, 0.5 );
											addVertex( tempV2_6, u1, 1 );
											addVertex( tempV2_7, u1, 1 );

											addVertex( currentPoint, u1, 0.5 );
											addVertex( tempV2_7, u1, 1 );
											addVertex( nextPointR, u1, 1 );

										}

									}

								} else {

									// Miter join segment triangles

									if ( innerSideModified ) {

										// Optimized segment + join triangles

										if ( joinIsOnLeftSide ) {

											addVertex( lastPointR, u0, 1 );
											addVertex( lastPointL, u0, 0 );
											addVertex( outerPoint, u1, 0 );

											addVertex( lastPointR, u0, 1 );
											addVertex( outerPoint, u1, 0 );
											addVertex( innerPoint, u1, 1 );

										} else {

											addVertex( lastPointR, u0, 1 );
											addVertex( lastPointL, u0, 0 );
											addVertex( outerPoint, u1, 1 );

											addVertex( lastPointL, u0, 0 );
											addVertex( innerPoint, u1, 0 );
											addVertex( outerPoint, u1, 1 );

										}


										if ( joinIsOnLeftSide ) {

											nextPointL.copy( outerPoint );

										} else {

											nextPointR.copy( outerPoint );

										}


									} else {

										// Add extra miter join triangles

										if ( joinIsOnLeftSide ) {

											addVertex( currentPointL, u1, 0 );
											addVertex( outerPoint, u1, 0 );
											addVertex( currentPoint, u1, 0.5 );

											addVertex( currentPoint, u1, 0.5 );
											addVertex( outerPoint, u1, 0 );
											addVertex( nextPointL, u1, 0 );

										} else {

											addVertex( currentPointR, u1, 1 );
											addVertex( outerPoint, u1, 1 );
											addVertex( currentPoint, u1, 0.5 );

											addVertex( currentPoint, u1, 0.5 );
											addVertex( outerPoint, u1, 1 );
											addVertex( nextPointR, u1, 1 );

										}

									}

									isMiter = true;

								}

								break;

						}

					} else {

						// The segment triangles are generated here when two consecutive points are collinear

						makeSegmentTriangles();

					}

				} else {

					// The segment triangles are generated here if it is the ending segment

					makeSegmentTriangles();

				}

				if ( ! isClosed && iPoint === numPoints - 1 ) {

					// Start line endcap
					addCapGeometry( points[ 0 ], point0L, point0R, joinIsOnLeftSide, true, u0 );

				}

				// Increment loop variables

				u0 = u1;

				previousPoint = currentPoint;

				lastPointL.copy( nextPointL );
				lastPointR.copy( nextPointR );

			}

			if ( ! isClosed ) {

				// Ending line endcap
				addCapGeometry( currentPoint, currentPointL, currentPointR, joinIsOnLeftSide, false, u1 );

			} else if ( innerSideModified && vertices ) {

				// Modify path first segment vertices to adjust to the segments inner and outer intersections

				let lastOuter = outerPoint;
				let lastInner = innerPoint;

				if ( initialJoinIsOnLeftSide !== joinIsOnLeftSide ) {

					lastOuter = innerPoint;
					lastInner = outerPoint;

				}

				if ( joinIsOnLeftSide ) {

					if ( isMiter || initialJoinIsOnLeftSide ) {

						lastInner.toArray( vertices, 0 * 3 );
						lastInner.toArray( vertices, 3 * 3 );

						if ( isMiter ) {

							lastOuter.toArray( vertices, 1 * 3 );

						}

					}

				} else {

					if ( isMiter || ! initialJoinIsOnLeftSide ) {

						lastInner.toArray( vertices, 1 * 3 );
						lastInner.toArray( vertices, 3 * 3 );

						if ( isMiter ) {

							lastOuter.toArray( vertices, 0 * 3 );

						}

					}

				}

			}

			return numVertices;

			// -- End of algorithm

			// -- Functions

			function getNormal( p1, p2, result ) {

				result.subVectors( p2, p1 );
				return result.set( - result.y, result.x ).normalize();

			}

			function addVertex( position, u, v ) {

				if ( vertices ) {

					vertices[ currentCoordinate ] = position.x;
					vertices[ currentCoordinate + 1 ] = position.y;
					vertices[ currentCoordinate + 2 ] = 0;

					if ( normals ) {

						normals[ currentCoordinate ] = 0;
						normals[ currentCoordinate + 1 ] = 0;
						normals[ currentCoordinate + 2 ] = 1;

					}

					currentCoordinate += 3;

					if ( uvs ) {

						uvs[ currentCoordinateUV ] = u;
						uvs[ currentCoordinateUV + 1 ] = v;

						currentCoordinateUV += 2;

					}

				}

				numVertices += 3;

			}

			function makeCircularSector( center, p1, p2, u, v ) {

				// param p1, p2: Points in the circle arc.
				// p1 and p2 are in clockwise direction.

				tempV2_1.copy( p1 ).sub( center ).normalize();
				tempV2_2.copy( p2 ).sub( center ).normalize();

				let angle = Math.PI;
				const dot = tempV2_1.dot( tempV2_2 );
				if ( Math.abs( dot ) < 1 ) angle = Math.abs( Math.acos( dot ) );

				angle /= arcDivisions;

				tempV2_3.copy( p1 );

				for ( let i = 0, il = arcDivisions - 1; i < il; i ++ ) {

					tempV2_4.copy( tempV2_3 ).rotateAround( center, angle );

					addVertex( tempV2_3, u, v );
					addVertex( tempV2_4, u, v );
					addVertex( center, u, 0.5 );

					tempV2_3.copy( tempV2_4 );

				}

				addVertex( tempV2_4, u, v );
				addVertex( p2, u, v );
				addVertex( center, u, 0.5 );

			}

			function makeSegmentTriangles() {

				addVertex( lastPointR, u0, 1 );
				addVertex( lastPointL, u0, 0 );
				addVertex( currentPointL, u1, 0 );

				addVertex( lastPointR, u0, 1 );
				addVertex( currentPointL, u1, 1 );
				addVertex( currentPointR, u1, 0 );

			}

			function makeSegmentWithBevelJoin( joinIsOnLeftSide, innerSideModified, u ) {

				if ( innerSideModified ) {

					// Optimized segment + bevel triangles

					if ( joinIsOnLeftSide ) {

						// Path segments triangles

						addVertex( lastPointR, u0, 1 );
						addVertex( lastPointL, u0, 0 );
						addVertex( currentPointL, u1, 0 );

						addVertex( lastPointR, u0, 1 );
						addVertex( currentPointL, u1, 0 );
						addVertex( innerPoint, u1, 1 );

						// Bevel join triangle

						addVertex( currentPointL, u, 0 );
						addVertex( nextPointL, u, 0 );
						addVertex( innerPoint, u, 0.5 );

					} else {

						// Path segments triangles

						addVertex( lastPointR, u0, 1 );
						addVertex( lastPointL, u0, 0 );
						addVertex( currentPointR, u1, 1 );

						addVertex( lastPointL, u0, 0 );
						addVertex( innerPoint, u1, 0 );
						addVertex( currentPointR, u1, 1 );

						// Bevel join triangle

						addVertex( currentPointR, u, 1 );
						addVertex( innerPoint, u, 0 );
						addVertex( nextPointR, u, 1 );

					}

				} else {

					// Bevel join triangle. The segment triangles are done in the main loop

					if ( joinIsOnLeftSide ) {

						addVertex( currentPointL, u, 0 );
						addVertex( nextPointL, u, 0 );
						addVertex( currentPoint, u, 0.5 );

					} else {

						addVertex( currentPointR, u, 1 );
						addVertex( nextPointR, u, 0 );
						addVertex( currentPoint, u, 0.5 );

					}

				}

			}

			function createSegmentTrianglesWithMiddleSection( joinIsOnLeftSide, innerSideModified ) {

				if ( innerSideModified ) {

					if ( joinIsOnLeftSide ) {

						addVertex( lastPointR, u0, 1 );
						addVertex( lastPointL, u0, 0 );
						addVertex( currentPointL, u1, 0 );

						addVertex( lastPointR, u0, 1 );
						addVertex( currentPointL, u1, 0 );
						addVertex( innerPoint, u1, 1 );

						addVertex( currentPointL, u0, 0 );
						addVertex( currentPoint, u1, 0.5 );
						addVertex( innerPoint, u1, 1 );

						addVertex( currentPoint, u1, 0.5 );
						addVertex( nextPointL, u0, 0 );
						addVertex( innerPoint, u1, 1 );

					} else {

						addVertex( lastPointR, u0, 1 );
						addVertex( lastPointL, u0, 0 );
						addVertex( currentPointR, u1, 1 );

						addVertex( lastPointL, u0, 0 );
						addVertex( innerPoint, u1, 0 );
						addVertex( currentPointR, u1, 1 );

						addVertex( currentPointR, u0, 1 );
						addVertex( innerPoint, u1, 0 );
						addVertex( currentPoint, u1, 0.5 );

						addVertex( currentPoint, u1, 0.5 );
						addVertex( innerPoint, u1, 0 );
						addVertex( nextPointR, u0, 1 );

					}

				}

			}

			function addCapGeometry( center, p1, p2, joinIsOnLeftSide, start, u ) {

				// param center: End point of the path
				// param p1, p2: Left and right cap points

				switch ( style.strokeLineCap ) {

					case 'round':

						if ( start ) {

							makeCircularSector( center, p2, p1, u, 0.5 );

						} else {

							makeCircularSector( center, p1, p2, u, 0.5 );

						}

						break;

					case 'square':

						if ( start ) {

							tempV2_1.subVectors( p1, center );
							tempV2_2.set( tempV2_1.y, - tempV2_1.x );

							tempV2_3.addVectors( tempV2_1, tempV2_2 ).add( center );
							tempV2_4.subVectors( tempV2_2, tempV2_1 ).add( center );

							// Modify already existing vertices
							if ( joinIsOnLeftSide ) {

								tempV2_3.toArray( vertices, 1 * 3 );
								tempV2_4.toArray( vertices, 0 * 3 );
								tempV2_4.toArray( vertices, 3 * 3 );

							} else {

								tempV2_3.toArray( vertices, 1 * 3 );
								tempV2_3.toArray( vertices, 3 * 3 );
								tempV2_4.toArray( vertices, 0 * 3 );

							}

						} else {

							tempV2_1.subVectors( p2, center );
							tempV2_2.set( tempV2_1.y, - tempV2_1.x );

							tempV2_3.addVectors( tempV2_1, tempV2_2 ).add( center );
							tempV2_4.subVectors( tempV2_2, tempV2_1 ).add( center );

							const vl = vertices.length;

							// Modify already existing vertices
							if ( joinIsOnLeftSide ) {

								tempV2_3.toArray( vertices, vl - 1 * 3 );
								tempV2_4.toArray( vertices, vl - 2 * 3 );
								tempV2_4.toArray( vertices, vl - 4 * 3 );

							} else {

								tempV2_4.toArray( vertices, vl - 2 * 3 );
								tempV2_3.toArray( vertices, vl - 1 * 3 );
								tempV2_4.toArray( vertices, vl - 4 * 3 );

							}

						}

						break;

				}

			}

			function removeDuplicatedPoints( points ) {

				// Creates a new array if necessary with duplicated points removed.
				// This does not remove duplicated initial and ending points of a closed path.

				let dupPoints = false;
				for ( let i = 1, n = points.length - 1; i < n; i ++ ) {

					if ( points[ i ].distanceTo( points[ i + 1 ] ) < minDistance ) {

						dupPoints = true;
						break;

					}

				}

				if ( ! dupPoints ) return points;

				const newPoints = [];
				newPoints.push( points[ 0 ] );

				for ( let i = 1, n = points.length - 1; i < n; i ++ ) {

					if ( points[ i ].distanceTo( points[ i + 1 ] ) >= minDistance ) {

						newPoints.push( points[ i ] );

					}

				}

				newPoints.push( points[ points.length - 1 ] );

				return newPoints;

			}

		}


	}

	// Generated by LiveScript 1.6.0

	return SVGLoader;

})(THREE);
var OrbitControls = (function (three_module_min_js) {
	'use strict';

	// OrbitControls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one-finger move
	//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
	//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

	const _changeEvent = { type: 'change' };
	const _startEvent = { type: 'start' };
	const _endEvent = { type: 'end' };
	const _ray = new three_module_min_js.Ray();
	const _plane = new three_module_min_js.Plane();
	const TILT_LIMIT = Math.cos( 70 * three_module_min_js.MathUtils.DEG2RAD );

	class OrbitControls extends three_module_min_js.EventDispatcher {

		constructor( object, domElement ) {

			super();

			this.object = object;
			this.domElement = domElement;
			this.domElement.style.touchAction = 'none'; // disable touch scroll

			// Set to false to disable this control
			this.enabled = true;

			// "target" sets the location of focus, where the object orbits around
			this.target = new three_module_min_js.Vector3();

			// Sets the 3D cursor (similar to Blender), from which the maxTargetRadius takes effect
			this.cursor = new three_module_min_js.Vector3();

			// How far you can dolly in and out ( PerspectiveCamera only )
			this.minDistance = 0;
			this.maxDistance = Infinity;

			// How far you can zoom in and out ( OrthographicCamera only )
			this.minZoom = 0;
			this.maxZoom = Infinity;

			// Limit camera target within a spherical area around the cursor
			this.minTargetRadius = 0;
			this.maxTargetRadius = Infinity;

			// How far you can orbit vertically, upper and lower limits.
			// Range is 0 to Math.PI radians.
			this.minPolarAngle = 0; // radians
			this.maxPolarAngle = Math.PI; // radians

			// How far you can orbit horizontally, upper and lower limits.
			// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
			this.minAzimuthAngle = - Infinity; // radians
			this.maxAzimuthAngle = Infinity; // radians

			// Set to true to enable damping (inertia)
			// If damping is enabled, you must call controls.update() in your animation loop
			this.enableDamping = false;
			this.dampingFactor = 0.05;

			// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
			// Set to false to disable zooming
			this.enableZoom = true;
			this.zoomSpeed = 1.0;

			// Set to false to disable rotating
			this.enableRotate = true;
			this.rotateSpeed = 1.0;

			// Set to false to disable panning
			this.enablePan = true;
			this.panSpeed = 1.0;
			this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
			this.keyPanSpeed = 7.0;	// pixels moved per arrow key push
			this.zoomToCursor = false;

			// Set to true to automatically rotate around the target
			// If auto-rotate is enabled, you must call controls.update() in your animation loop
			this.autoRotate = false;
			this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

			// The four arrow keys
			this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };

			// Mouse buttons
			this.mouseButtons = { LEFT: three_module_min_js.MOUSE.ROTATE, MIDDLE: three_module_min_js.MOUSE.DOLLY, RIGHT: three_module_min_js.MOUSE.PAN };

			// Touch fingers
			this.touches = { ONE: three_module_min_js.TOUCH.ROTATE, TWO: three_module_min_js.TOUCH.DOLLY_PAN };

			// for reset
			this.target0 = this.target.clone();
			this.position0 = this.object.position.clone();
			this.zoom0 = this.object.zoom;

			// the target DOM element for key events
			this._domElementKeyEvents = null;

			//
			// public methods
			//

			this.getPolarAngle = function () {

				return spherical.phi;

			};

			this.getAzimuthalAngle = function () {

				return spherical.theta;

			};

			this.getDistance = function () {

				return this.object.position.distanceTo( this.target );

			};

			this.listenToKeyEvents = function ( domElement ) {

				domElement.addEventListener( 'keydown', onKeyDown );
				this._domElementKeyEvents = domElement;

			};

			this.stopListenToKeyEvents = function () {

				this._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );
				this._domElementKeyEvents = null;

			};

			this.saveState = function () {

				scope.target0.copy( scope.target );
				scope.position0.copy( scope.object.position );
				scope.zoom0 = scope.object.zoom;

			};

			this.reset = function () {

				scope.target.copy( scope.target0 );
				scope.object.position.copy( scope.position0 );
				scope.object.zoom = scope.zoom0;

				scope.object.updateProjectionMatrix();
				scope.dispatchEvent( _changeEvent );

				scope.update();

				state = STATE.NONE;

			};

			// this method is exposed, but perhaps it would be better if we can make it private...
			this.update = function () {

				const offset = new three_module_min_js.Vector3();

				// so camera.up is the orbit axis
				const quat = new three_module_min_js.Quaternion().setFromUnitVectors( object.up, new three_module_min_js.Vector3( 0, 1, 0 ) );
				const quatInverse = quat.clone().invert();

				const lastPosition = new three_module_min_js.Vector3();
				const lastQuaternion = new three_module_min_js.Quaternion();
				const lastTargetPosition = new three_module_min_js.Vector3();

				const twoPI = 2 * Math.PI;

				return function update( deltaTime = null ) {

					const position = scope.object.position;

					offset.copy( position ).sub( scope.target );

					// rotate offset to "y-axis-is-up" space
					offset.applyQuaternion( quat );

					// angle from z-axis around y-axis
					spherical.setFromVector3( offset );

					if ( scope.autoRotate && state === STATE.NONE ) {

						rotateLeft( getAutoRotationAngle( deltaTime ) );

					}

					if ( scope.enableDamping ) {

						spherical.theta += sphericalDelta.theta * scope.dampingFactor;
						spherical.phi += sphericalDelta.phi * scope.dampingFactor;

					} else {

						spherical.theta += sphericalDelta.theta;
						spherical.phi += sphericalDelta.phi;

					}

					// restrict theta to be between desired limits

					let min = scope.minAzimuthAngle;
					let max = scope.maxAzimuthAngle;

					if ( isFinite( min ) && isFinite( max ) ) {

						if ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;

						if ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;

						if ( min <= max ) {

							spherical.theta = Math.max( min, Math.min( max, spherical.theta ) );

						} else {

							spherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?
								Math.max( min, spherical.theta ) :
								Math.min( max, spherical.theta );

						}

					}

					// restrict phi to be between desired limits
					spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

					spherical.makeSafe();


					// move target to panned location

					if ( scope.enableDamping === true ) {

						scope.target.addScaledVector( panOffset, scope.dampingFactor );

					} else {

						scope.target.add( panOffset );

					}

					// Limit the target distance from the cursor to create a sphere around the center of interest
					scope.target.sub( scope.cursor );
					scope.target.clampLength( scope.minTargetRadius, scope.maxTargetRadius );
					scope.target.add( scope.cursor );

					// adjust the camera position based on zoom only if we're not zooming to the cursor or if it's an ortho camera
					// we adjust zoom later in these cases
					if ( scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera ) {

						spherical.radius = clampDistance( spherical.radius );

					} else {

						spherical.radius = clampDistance( spherical.radius * scale );

					}

					offset.setFromSpherical( spherical );

					// rotate offset back to "camera-up-vector-is-up" space
					offset.applyQuaternion( quatInverse );

					position.copy( scope.target ).add( offset );

					scope.object.lookAt( scope.target );

					if ( scope.enableDamping === true ) {

						sphericalDelta.theta *= ( 1 - scope.dampingFactor );
						sphericalDelta.phi *= ( 1 - scope.dampingFactor );

						panOffset.multiplyScalar( 1 - scope.dampingFactor );

					} else {

						sphericalDelta.set( 0, 0, 0 );

						panOffset.set( 0, 0, 0 );

					}

					// adjust camera position
					let zoomChanged = false;
					if ( scope.zoomToCursor && performCursorZoom ) {

						let newRadius = null;
						if ( scope.object.isPerspectiveCamera ) {

							// move the camera down the pointer ray
							// this method avoids floating point error
							const prevRadius = offset.length();
							newRadius = clampDistance( prevRadius * scale );

							const radiusDelta = prevRadius - newRadius;
							scope.object.position.addScaledVector( dollyDirection, radiusDelta );
							scope.object.updateMatrixWorld();

						} else if ( scope.object.isOrthographicCamera ) {

							// adjust the ortho camera position based on zoom changes
							const mouseBefore = new three_module_min_js.Vector3( mouse.x, mouse.y, 0 );
							mouseBefore.unproject( scope.object );

							scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / scale ) );
							scope.object.updateProjectionMatrix();
							zoomChanged = true;

							const mouseAfter = new three_module_min_js.Vector3( mouse.x, mouse.y, 0 );
							mouseAfter.unproject( scope.object );

							scope.object.position.sub( mouseAfter ).add( mouseBefore );
							scope.object.updateMatrixWorld();

							newRadius = offset.length();

						} else {

							console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.' );
							scope.zoomToCursor = false;

						}

						// handle the placement of the target
						if ( newRadius !== null ) {

							if ( this.screenSpacePanning ) {

								// position the orbit target in front of the new camera position
								scope.target.set( 0, 0, - 1 )
									.transformDirection( scope.object.matrix )
									.multiplyScalar( newRadius )
									.add( scope.object.position );

							} else {

								// get the ray and translation plane to compute target
								_ray.origin.copy( scope.object.position );
								_ray.direction.set( 0, 0, - 1 ).transformDirection( scope.object.matrix );

								// if the camera is 20 degrees above the horizon then don't adjust the focus target to avoid
								// extremely large values
								if ( Math.abs( scope.object.up.dot( _ray.direction ) ) < TILT_LIMIT ) {

									object.lookAt( scope.target );

								} else {

									_plane.setFromNormalAndCoplanarPoint( scope.object.up, scope.target );
									_ray.intersectPlane( _plane, scope.target );

								}

							}

						}

					} else if ( scope.object.isOrthographicCamera ) {

						scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / scale ) );
						scope.object.updateProjectionMatrix();
						zoomChanged = true;

					}

					scale = 1;
					performCursorZoom = false;

					// update condition is:
					// min(camera displacement, camera rotation in radians)^2 > EPS
					// using small-angle approximation cos(x/2) = 1 - x^2 / 8

					if ( zoomChanged ||
						lastPosition.distanceToSquared( scope.object.position ) > EPS ||
						8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ||
						lastTargetPosition.distanceToSquared( scope.target ) > 0 ) {

						scope.dispatchEvent( _changeEvent );

						lastPosition.copy( scope.object.position );
						lastQuaternion.copy( scope.object.quaternion );
						lastTargetPosition.copy( scope.target );

						return true;

					}

					return false;

				};

			}();

			this.dispose = function () {

				scope.domElement.removeEventListener( 'contextmenu', onContextMenu );

				scope.domElement.removeEventListener( 'pointerdown', onPointerDown );
				scope.domElement.removeEventListener( 'pointercancel', onPointerUp );
				scope.domElement.removeEventListener( 'wheel', onMouseWheel );

				scope.domElement.removeEventListener( 'pointermove', onPointerMove );
				scope.domElement.removeEventListener( 'pointerup', onPointerUp );


				if ( scope._domElementKeyEvents !== null ) {

					scope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );
					scope._domElementKeyEvents = null;

				}

				//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

			};

			//
			// internals
			//

			const scope = this;

			const STATE = {
				NONE: - 1,
				ROTATE: 0,
				DOLLY: 1,
				PAN: 2,
				TOUCH_ROTATE: 3,
				TOUCH_PAN: 4,
				TOUCH_DOLLY_PAN: 5,
				TOUCH_DOLLY_ROTATE: 6
			};

			let state = STATE.NONE;

			const EPS = 0.000001;

			// current position in spherical coordinates
			const spherical = new three_module_min_js.Spherical();
			const sphericalDelta = new three_module_min_js.Spherical();

			let scale = 1;
			const panOffset = new three_module_min_js.Vector3();

			const rotateStart = new three_module_min_js.Vector2();
			const rotateEnd = new three_module_min_js.Vector2();
			const rotateDelta = new three_module_min_js.Vector2();

			const panStart = new three_module_min_js.Vector2();
			const panEnd = new three_module_min_js.Vector2();
			const panDelta = new three_module_min_js.Vector2();

			const dollyStart = new three_module_min_js.Vector2();
			const dollyEnd = new three_module_min_js.Vector2();
			const dollyDelta = new three_module_min_js.Vector2();

			const dollyDirection = new three_module_min_js.Vector3();
			const mouse = new three_module_min_js.Vector2();
			let performCursorZoom = false;

			const pointers = [];
			const pointerPositions = {};

			function getAutoRotationAngle( deltaTime ) {

				if ( deltaTime !== null ) {

					return ( 2 * Math.PI / 60 * scope.autoRotateSpeed ) * deltaTime;

				} else {

					return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

				}

			}

			function getZoomScale( delta ) {

				const normalized_delta = Math.abs( delta ) / ( 100 * ( window.devicePixelRatio | 0 ) );
				return Math.pow( 0.95, scope.zoomSpeed * normalized_delta );

			}

			function rotateLeft( angle ) {

				sphericalDelta.theta -= angle;

			}

			function rotateUp( angle ) {

				sphericalDelta.phi -= angle;

			}

			const panLeft = function () {

				const v = new three_module_min_js.Vector3();

				return function panLeft( distance, objectMatrix ) {

					v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
					v.multiplyScalar( - distance );

					panOffset.add( v );

				};

			}();

			const panUp = function () {

				const v = new three_module_min_js.Vector3();

				return function panUp( distance, objectMatrix ) {

					if ( scope.screenSpacePanning === true ) {

						v.setFromMatrixColumn( objectMatrix, 1 );

					} else {

						v.setFromMatrixColumn( objectMatrix, 0 );
						v.crossVectors( scope.object.up, v );

					}

					v.multiplyScalar( distance );

					panOffset.add( v );

				};

			}();

			// deltaX and deltaY are in pixels; right and down are positive
			const pan = function () {

				const offset = new three_module_min_js.Vector3();

				return function pan( deltaX, deltaY ) {

					const element = scope.domElement;

					if ( scope.object.isPerspectiveCamera ) {

						// perspective
						const position = scope.object.position;
						offset.copy( position ).sub( scope.target );
						let targetDistance = offset.length();

						// half of the fov is center to top of screen
						targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

						// we use only clientHeight here so aspect ratio does not distort speed
						panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
						panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

					} else if ( scope.object.isOrthographicCamera ) {

						// orthographic
						panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
						panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

					} else {

						// camera neither orthographic nor perspective
						console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
						scope.enablePan = false;

					}

				};

			}();

			function dollyOut( dollyScale ) {

				if ( scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera ) {

					scale /= dollyScale;

				} else {

					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
					scope.enableZoom = false;

				}

			}

			function dollyIn( dollyScale ) {

				if ( scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera ) {

					scale *= dollyScale;

				} else {

					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
					scope.enableZoom = false;

				}

			}

			function updateZoomParameters( x, y ) {

				if ( ! scope.zoomToCursor ) {

					return;

				}

				performCursorZoom = true;

				const rect = scope.domElement.getBoundingClientRect();
				const dx = x - rect.left;
				const dy = y - rect.top;
				const w = rect.width;
				const h = rect.height;

				mouse.x = ( dx / w ) * 2 - 1;
				mouse.y = - ( dy / h ) * 2 + 1;

				dollyDirection.set( mouse.x, mouse.y, 1 ).unproject( scope.object ).sub( scope.object.position ).normalize();

			}

			function clampDistance( dist ) {

				return Math.max( scope.minDistance, Math.min( scope.maxDistance, dist ) );

			}

			//
			// event callbacks - update the object state
			//

			function handleMouseDownRotate( event ) {

				rotateStart.set( event.clientX, event.clientY );

			}

			function handleMouseDownDolly( event ) {

				updateZoomParameters( event.clientX, event.clientX );
				dollyStart.set( event.clientX, event.clientY );

			}

			function handleMouseDownPan( event ) {

				panStart.set( event.clientX, event.clientY );

			}

			function handleMouseMoveRotate( event ) {

				rotateEnd.set( event.clientX, event.clientY );

				rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

				const element = scope.domElement;

				rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

				rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

				rotateStart.copy( rotateEnd );

				scope.update();

			}

			function handleMouseMoveDolly( event ) {

				dollyEnd.set( event.clientX, event.clientY );

				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					dollyOut( getZoomScale( dollyDelta.y ) );

				} else if ( dollyDelta.y < 0 ) {

					dollyIn( getZoomScale( dollyDelta.y ) );

				}

				dollyStart.copy( dollyEnd );

				scope.update();

			}

			function handleMouseMovePan( event ) {

				panEnd.set( event.clientX, event.clientY );

				panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

				scope.update();

			}

			function handleMouseWheel( event ) {

				updateZoomParameters( event.clientX, event.clientY );

				if ( event.deltaY < 0 ) {

					dollyIn( getZoomScale( event.deltaY ) );

				} else if ( event.deltaY > 0 ) {

					dollyOut( getZoomScale( event.deltaY ) );

				}

				scope.update();

			}

			function handleKeyDown( event ) {

				let needsUpdate = false;

				switch ( event.code ) {

					case scope.keys.UP:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateUp( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( 0, scope.keyPanSpeed );

						}

						needsUpdate = true;
						break;

					case scope.keys.BOTTOM:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateUp( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( 0, - scope.keyPanSpeed );

						}

						needsUpdate = true;
						break;

					case scope.keys.LEFT:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateLeft( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( scope.keyPanSpeed, 0 );

						}

						needsUpdate = true;
						break;

					case scope.keys.RIGHT:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							rotateLeft( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );

						} else {

							pan( - scope.keyPanSpeed, 0 );

						}

						needsUpdate = true;
						break;

				}

				if ( needsUpdate ) {

					// prevent the browser from scrolling on cursor keys
					event.preventDefault();

					scope.update();

				}


			}

			function handleTouchStartRotate( event ) {

				if ( pointers.length === 1 ) {

					rotateStart.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					rotateStart.set( x, y );

				}

			}

			function handleTouchStartPan( event ) {

				if ( pointers.length === 1 ) {

					panStart.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					panStart.set( x, y );

				}

			}

			function handleTouchStartDolly( event ) {

				const position = getSecondPointerPosition( event );

				const dx = event.pageX - position.x;
				const dy = event.pageY - position.y;

				const distance = Math.sqrt( dx * dx + dy * dy );

				dollyStart.set( 0, distance );

			}

			function handleTouchStartDollyPan( event ) {

				if ( scope.enableZoom ) handleTouchStartDolly( event );

				if ( scope.enablePan ) handleTouchStartPan( event );

			}

			function handleTouchStartDollyRotate( event ) {

				if ( scope.enableZoom ) handleTouchStartDolly( event );

				if ( scope.enableRotate ) handleTouchStartRotate( event );

			}

			function handleTouchMoveRotate( event ) {

				if ( pointers.length == 1 ) {

					rotateEnd.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					rotateEnd.set( x, y );

				}

				rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

				const element = scope.domElement;

				rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

				rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

				rotateStart.copy( rotateEnd );

			}

			function handleTouchMovePan( event ) {

				if ( pointers.length === 1 ) {

					panEnd.set( event.pageX, event.pageY );

				} else {

					const position = getSecondPointerPosition( event );

					const x = 0.5 * ( event.pageX + position.x );
					const y = 0.5 * ( event.pageY + position.y );

					panEnd.set( x, y );

				}

				panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

			}

			function handleTouchMoveDolly( event ) {

				const position = getSecondPointerPosition( event );

				const dx = event.pageX - position.x;
				const dy = event.pageY - position.y;

				const distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );

				dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

				dollyOut( dollyDelta.y );

				dollyStart.copy( dollyEnd );

				const centerX = ( event.pageX + position.x ) * 0.5;
				const centerY = ( event.pageY + position.y ) * 0.5;

				updateZoomParameters( centerX, centerY );

			}

			function handleTouchMoveDollyPan( event ) {

				if ( scope.enableZoom ) handleTouchMoveDolly( event );

				if ( scope.enablePan ) handleTouchMovePan( event );

			}

			function handleTouchMoveDollyRotate( event ) {

				if ( scope.enableZoom ) handleTouchMoveDolly( event );

				if ( scope.enableRotate ) handleTouchMoveRotate( event );

			}

			//
			// event handlers - FSM: listen for events and reset state
			//

			function onPointerDown( event ) {

				if ( scope.enabled === false ) return;

				if ( pointers.length === 0 ) {

					scope.domElement.setPointerCapture( event.pointerId );

					scope.domElement.addEventListener( 'pointermove', onPointerMove );
					scope.domElement.addEventListener( 'pointerup', onPointerUp );

				}

				//

				addPointer( event );

				if ( event.pointerType === 'touch' ) {

					onTouchStart( event );

				} else {

					onMouseDown( event );

				}

			}

			function onPointerMove( event ) {

				if ( scope.enabled === false ) return;

				if ( event.pointerType === 'touch' ) {

					onTouchMove( event );

				} else {

					onMouseMove( event );

				}

			}

			function onPointerUp( event ) {

				removePointer( event );

				if ( pointers.length === 0 ) {

					scope.domElement.releasePointerCapture( event.pointerId );

					scope.domElement.removeEventListener( 'pointermove', onPointerMove );
					scope.domElement.removeEventListener( 'pointerup', onPointerUp );

				}

				scope.dispatchEvent( _endEvent );

				state = STATE.NONE;

			}

			function onMouseDown( event ) {

				let mouseAction;

				switch ( event.button ) {

					case 0:

						mouseAction = scope.mouseButtons.LEFT;
						break;

					case 1:

						mouseAction = scope.mouseButtons.MIDDLE;
						break;

					case 2:

						mouseAction = scope.mouseButtons.RIGHT;
						break;

					default:

						mouseAction = - 1;

				}

				switch ( mouseAction ) {

					case three_module_min_js.MOUSE.DOLLY:

						if ( scope.enableZoom === false ) return;

						handleMouseDownDolly( event );

						state = STATE.DOLLY;

						break;

					case three_module_min_js.MOUSE.ROTATE:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						} else {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						}

						break;

					case three_module_min_js.MOUSE.PAN:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						} else {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						}

						break;

					default:

						state = STATE.NONE;

				}

				if ( state !== STATE.NONE ) {

					scope.dispatchEvent( _startEvent );

				}

			}

			function onMouseMove( event ) {

				switch ( state ) {

					case STATE.ROTATE:

						if ( scope.enableRotate === false ) return;

						handleMouseMoveRotate( event );

						break;

					case STATE.DOLLY:

						if ( scope.enableZoom === false ) return;

						handleMouseMoveDolly( event );

						break;

					case STATE.PAN:

						if ( scope.enablePan === false ) return;

						handleMouseMovePan( event );

						break;

				}

			}

			function onMouseWheel( event ) {

				if ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;

				event.preventDefault();

				scope.dispatchEvent( _startEvent );

				handleMouseWheel( event );

				scope.dispatchEvent( _endEvent );

			}

			function onKeyDown( event ) {

				if ( scope.enabled === false || scope.enablePan === false ) return;

				handleKeyDown( event );

			}

			function onTouchStart( event ) {

				trackPointer( event );

				switch ( pointers.length ) {

					case 1:

						switch ( scope.touches.ONE ) {

							case three_module_min_js.TOUCH.ROTATE:

								if ( scope.enableRotate === false ) return;

								handleTouchStartRotate( event );

								state = STATE.TOUCH_ROTATE;

								break;

							case three_module_min_js.TOUCH.PAN:

								if ( scope.enablePan === false ) return;

								handleTouchStartPan( event );

								state = STATE.TOUCH_PAN;

								break;

							default:

								state = STATE.NONE;

						}

						break;

					case 2:

						switch ( scope.touches.TWO ) {

							case three_module_min_js.TOUCH.DOLLY_PAN:

								if ( scope.enableZoom === false && scope.enablePan === false ) return;

								handleTouchStartDollyPan( event );

								state = STATE.TOUCH_DOLLY_PAN;

								break;

							case three_module_min_js.TOUCH.DOLLY_ROTATE:

								if ( scope.enableZoom === false && scope.enableRotate === false ) return;

								handleTouchStartDollyRotate( event );

								state = STATE.TOUCH_DOLLY_ROTATE;

								break;

							default:

								state = STATE.NONE;

						}

						break;

					default:

						state = STATE.NONE;

				}

				if ( state !== STATE.NONE ) {

					scope.dispatchEvent( _startEvent );

				}

			}

			function onTouchMove( event ) {

				trackPointer( event );

				switch ( state ) {

					case STATE.TOUCH_ROTATE:

						if ( scope.enableRotate === false ) return;

						handleTouchMoveRotate( event );

						scope.update();

						break;

					case STATE.TOUCH_PAN:

						if ( scope.enablePan === false ) return;

						handleTouchMovePan( event );

						scope.update();

						break;

					case STATE.TOUCH_DOLLY_PAN:

						if ( scope.enableZoom === false && scope.enablePan === false ) return;

						handleTouchMoveDollyPan( event );

						scope.update();

						break;

					case STATE.TOUCH_DOLLY_ROTATE:

						if ( scope.enableZoom === false && scope.enableRotate === false ) return;

						handleTouchMoveDollyRotate( event );

						scope.update();

						break;

					default:

						state = STATE.NONE;

				}

			}

			function onContextMenu( event ) {

				if ( scope.enabled === false ) return;

				event.preventDefault();

			}

			function addPointer( event ) {

				pointers.push( event.pointerId );

			}

			function removePointer( event ) {

				delete pointerPositions[ event.pointerId ];

				for ( let i = 0; i < pointers.length; i ++ ) {

					if ( pointers[ i ] == event.pointerId ) {

						pointers.splice( i, 1 );
						return;

					}

				}

			}

			function trackPointer( event ) {

				let position = pointerPositions[ event.pointerId ];

				if ( position === undefined ) {

					position = new three_module_min_js.Vector2();
					pointerPositions[ event.pointerId ] = position;

				}

				position.set( event.pageX, event.pageY );

			}

			function getSecondPointerPosition( event ) {

				const pointerId = ( event.pointerId === pointers[ 0 ] ) ? pointers[ 1 ] : pointers[ 0 ];

				return pointerPositions[ pointerId ];

			}

			//

			scope.domElement.addEventListener( 'contextmenu', onContextMenu );

			scope.domElement.addEventListener( 'pointerdown', onPointerDown );
			scope.domElement.addEventListener( 'pointercancel', onPointerUp );
			scope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );

			// force an update at start

			this.update();

		}

	}

	// Generated by LiveScript 1.6.0

	return OrbitControls;

})(THREE);
var EffectComposer = (function (three_module_min_js) {
	'use strict';

	/**
	 * Full-screen textured quad shader
	 */

	const CopyShader = {

		name: 'CopyShader',

		uniforms: {

			'tDiffuse': { value: null },
			'opacity': { value: 1.0 }

		},

		vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

		fragmentShader: /* glsl */`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`

	};

	class Pass {

		constructor() {

			this.isPass = true;

			// if set to true, the pass is processed by the composer
			this.enabled = true;

			// if set to true, the pass indicates to swap read and write buffer after rendering
			this.needsSwap = true;

			// if set to true, the pass clears its buffer before rendering
			this.clear = false;

			// if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
			this.renderToScreen = false;

		}

		setSize( /* width, height */ ) {}

		render( /* renderer, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

			console.error( 'THREE.Pass: .render() must be implemented in derived pass.' );

		}

		dispose() {}

	}

	// Helper for passes that need to fill the viewport with a single quad.

	const _camera = new three_module_min_js.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	// https://github.com/mrdoob/three.js/pull/21358

	class FullscreenTriangleGeometry extends three_module_min_js.BufferGeometry {

		constructor() {

			super();

			this.setAttribute( 'position', new three_module_min_js.Float32BufferAttribute( [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
			this.setAttribute( 'uv', new three_module_min_js.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

		}

	}

	const _geometry = new FullscreenTriangleGeometry();

	class FullScreenQuad {

		constructor( material ) {

			this._mesh = new three_module_min_js.Mesh( _geometry, material );

		}

		dispose() {

			this._mesh.geometry.dispose();

		}

		render( renderer ) {

			renderer.render( this._mesh, _camera );

		}

		get material() {

			return this._mesh.material;

		}

		set material( value ) {

			this._mesh.material = value;

		}

	}

	class ShaderPass extends Pass {

		constructor( shader, textureID ) {

			super();

			this.textureID = ( textureID !== undefined ) ? textureID : 'tDiffuse';

			if ( shader instanceof three_module_min_js.ShaderMaterial ) {

				this.uniforms = shader.uniforms;

				this.material = shader;

			} else if ( shader ) {

				this.uniforms = three_module_min_js.UniformsUtils.clone( shader.uniforms );

				this.material = new three_module_min_js.ShaderMaterial( {

					name: ( shader.name !== undefined ) ? shader.name : 'unspecified',
					defines: Object.assign( {}, shader.defines ),
					uniforms: this.uniforms,
					vertexShader: shader.vertexShader,
					fragmentShader: shader.fragmentShader

				} );

			}

			this.fsQuad = new FullScreenQuad( this.material );

		}

		render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

			if ( this.uniforms[ this.textureID ] ) {

				this.uniforms[ this.textureID ].value = readBuffer.texture;

			}

			this.fsQuad.material = this.material;

			if ( this.renderToScreen ) {

				renderer.setRenderTarget( null );
				this.fsQuad.render( renderer );

			} else {

				renderer.setRenderTarget( writeBuffer );
				// TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
				if ( this.clear ) renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );
				this.fsQuad.render( renderer );

			}

		}

		dispose() {

			this.material.dispose();

			this.fsQuad.dispose();

		}

	}

	class MaskPass extends Pass {

		constructor( scene, camera ) {

			super();

			this.scene = scene;
			this.camera = camera;

			this.clear = true;
			this.needsSwap = false;

			this.inverse = false;

		}

		render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

			const context = renderer.getContext();
			const state = renderer.state;

			// don't update color or depth

			state.buffers.color.setMask( false );
			state.buffers.depth.setMask( false );

			// lock buffers

			state.buffers.color.setLocked( true );
			state.buffers.depth.setLocked( true );

			// set up stencil

			let writeValue, clearValue;

			if ( this.inverse ) {

				writeValue = 0;
				clearValue = 1;

			} else {

				writeValue = 1;
				clearValue = 0;

			}

			state.buffers.stencil.setTest( true );
			state.buffers.stencil.setOp( context.REPLACE, context.REPLACE, context.REPLACE );
			state.buffers.stencil.setFunc( context.ALWAYS, writeValue, 0xffffffff );
			state.buffers.stencil.setClear( clearValue );
			state.buffers.stencil.setLocked( true );

			// draw into the stencil buffer

			renderer.setRenderTarget( readBuffer );
			if ( this.clear ) renderer.clear();
			renderer.render( this.scene, this.camera );

			renderer.setRenderTarget( writeBuffer );
			if ( this.clear ) renderer.clear();
			renderer.render( this.scene, this.camera );

			// unlock color and depth buffer and make them writable for subsequent rendering/clearing

			state.buffers.color.setLocked( false );
			state.buffers.depth.setLocked( false );

			state.buffers.color.setMask( true );
			state.buffers.depth.setMask( true );

			// only render where stencil is set to 1

			state.buffers.stencil.setLocked( false );
			state.buffers.stencil.setFunc( context.EQUAL, 1, 0xffffffff ); // draw if == 1
			state.buffers.stencil.setOp( context.KEEP, context.KEEP, context.KEEP );
			state.buffers.stencil.setLocked( true );

		}

	}

	class ClearMaskPass extends Pass {

		constructor() {

			super();

			this.needsSwap = false;

		}

		render( renderer /*, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

			renderer.state.buffers.stencil.setLocked( false );
			renderer.state.buffers.stencil.setTest( false );

		}

	}

	class EffectComposer {

		constructor( renderer, renderTarget ) {

			this.renderer = renderer;

			this._pixelRatio = renderer.getPixelRatio();

			if ( renderTarget === undefined ) {

				const size = renderer.getSize( new three_module_min_js.Vector2() );
				this._width = size.width;
				this._height = size.height;

				renderTarget = new three_module_min_js.WebGLRenderTarget( this._width * this._pixelRatio, this._height * this._pixelRatio, { type: three_module_min_js.HalfFloatType } );
				renderTarget.texture.name = 'EffectComposer.rt1';

			} else {

				this._width = renderTarget.width;
				this._height = renderTarget.height;

			}

			this.renderTarget1 = renderTarget;
			this.renderTarget2 = renderTarget.clone();
			this.renderTarget2.texture.name = 'EffectComposer.rt2';

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;

			this.renderToScreen = true;

			this.passes = [];

			this.copyPass = new ShaderPass( CopyShader );
			this.copyPass.material.blending = three_module_min_js.NoBlending;

			this.clock = new three_module_min_js.Clock();

		}

		swapBuffers() {

			const tmp = this.readBuffer;
			this.readBuffer = this.writeBuffer;
			this.writeBuffer = tmp;

		}

		addPass( pass ) {

			this.passes.push( pass );
			pass.setSize( this._width * this._pixelRatio, this._height * this._pixelRatio );

		}

		insertPass( pass, index ) {

			this.passes.splice( index, 0, pass );
			pass.setSize( this._width * this._pixelRatio, this._height * this._pixelRatio );

		}

		removePass( pass ) {

			const index = this.passes.indexOf( pass );

			if ( index !== - 1 ) {

				this.passes.splice( index, 1 );

			}

		}

		isLastEnabledPass( passIndex ) {

			for ( let i = passIndex + 1; i < this.passes.length; i ++ ) {

				if ( this.passes[ i ].enabled ) {

					return false;

				}

			}

			return true;

		}

		render( deltaTime ) {

			// deltaTime value is in seconds

			if ( deltaTime === undefined ) {

				deltaTime = this.clock.getDelta();

			}

			const currentRenderTarget = this.renderer.getRenderTarget();

			let maskActive = false;

			for ( let i = 0, il = this.passes.length; i < il; i ++ ) {

				const pass = this.passes[ i ];

				if ( pass.enabled === false ) continue;

				pass.renderToScreen = ( this.renderToScreen && this.isLastEnabledPass( i ) );
				pass.render( this.renderer, this.writeBuffer, this.readBuffer, deltaTime, maskActive );

				if ( pass.needsSwap ) {

					if ( maskActive ) {

						const context = this.renderer.getContext();
						const stencil = this.renderer.state.buffers.stencil;

						//context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );
						stencil.setFunc( context.NOTEQUAL, 1, 0xffffffff );

						this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, deltaTime );

						//context.stencilFunc( context.EQUAL, 1, 0xffffffff );
						stencil.setFunc( context.EQUAL, 1, 0xffffffff );

					}

					this.swapBuffers();

				}

				if ( MaskPass !== undefined ) {

					if ( pass instanceof MaskPass ) {

						maskActive = true;

					} else if ( pass instanceof ClearMaskPass ) {

						maskActive = false;

					}

				}

			}

			this.renderer.setRenderTarget( currentRenderTarget );

		}

		reset( renderTarget ) {

			if ( renderTarget === undefined ) {

				const size = this.renderer.getSize( new three_module_min_js.Vector2() );
				this._pixelRatio = this.renderer.getPixelRatio();
				this._width = size.width;
				this._height = size.height;

				renderTarget = this.renderTarget1.clone();
				renderTarget.setSize( this._width * this._pixelRatio, this._height * this._pixelRatio );

			}

			this.renderTarget1.dispose();
			this.renderTarget2.dispose();
			this.renderTarget1 = renderTarget;
			this.renderTarget2 = renderTarget.clone();

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;

		}

		setSize( width, height ) {

			this._width = width;
			this._height = height;

			const effectiveWidth = this._width * this._pixelRatio;
			const effectiveHeight = this._height * this._pixelRatio;

			this.renderTarget1.setSize( effectiveWidth, effectiveHeight );
			this.renderTarget2.setSize( effectiveWidth, effectiveHeight );

			for ( let i = 0; i < this.passes.length; i ++ ) {

				this.passes[ i ].setSize( effectiveWidth, effectiveHeight );

			}

		}

		setPixelRatio( pixelRatio ) {

			this._pixelRatio = pixelRatio;

			this.setSize( this._width, this._height );

		}

		dispose() {

			this.renderTarget1.dispose();
			this.renderTarget2.dispose();

			this.copyPass.dispose();

		}

	}

	// Generated by LiveScript 1.6.0

	return EffectComposer;

})(THREE);
var ShaderPass = (function (three_module_min_js) {
	'use strict';

	class Pass {

		constructor() {

			this.isPass = true;

			// if set to true, the pass is processed by the composer
			this.enabled = true;

			// if set to true, the pass indicates to swap read and write buffer after rendering
			this.needsSwap = true;

			// if set to true, the pass clears its buffer before rendering
			this.clear = false;

			// if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
			this.renderToScreen = false;

		}

		setSize( /* width, height */ ) {}

		render( /* renderer, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

			console.error( 'THREE.Pass: .render() must be implemented in derived pass.' );

		}

		dispose() {}

	}

	// Helper for passes that need to fill the viewport with a single quad.

	const _camera = new three_module_min_js.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	// https://github.com/mrdoob/three.js/pull/21358

	class FullscreenTriangleGeometry extends three_module_min_js.BufferGeometry {

		constructor() {

			super();

			this.setAttribute( 'position', new three_module_min_js.Float32BufferAttribute( [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
			this.setAttribute( 'uv', new three_module_min_js.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

		}

	}

	const _geometry = new FullscreenTriangleGeometry();

	class FullScreenQuad {

		constructor( material ) {

			this._mesh = new three_module_min_js.Mesh( _geometry, material );

		}

		dispose() {

			this._mesh.geometry.dispose();

		}

		render( renderer ) {

			renderer.render( this._mesh, _camera );

		}

		get material() {

			return this._mesh.material;

		}

		set material( value ) {

			this._mesh.material = value;

		}

	}

	class ShaderPass extends Pass {

		constructor( shader, textureID ) {

			super();

			this.textureID = ( textureID !== undefined ) ? textureID : 'tDiffuse';

			if ( shader instanceof three_module_min_js.ShaderMaterial ) {

				this.uniforms = shader.uniforms;

				this.material = shader;

			} else if ( shader ) {

				this.uniforms = three_module_min_js.UniformsUtils.clone( shader.uniforms );

				this.material = new three_module_min_js.ShaderMaterial( {

					name: ( shader.name !== undefined ) ? shader.name : 'unspecified',
					defines: Object.assign( {}, shader.defines ),
					uniforms: this.uniforms,
					vertexShader: shader.vertexShader,
					fragmentShader: shader.fragmentShader

				} );

			}

			this.fsQuad = new FullScreenQuad( this.material );

		}

		render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

			if ( this.uniforms[ this.textureID ] ) {

				this.uniforms[ this.textureID ].value = readBuffer.texture;

			}

			this.fsQuad.material = this.material;

			if ( this.renderToScreen ) {

				renderer.setRenderTarget( null );
				this.fsQuad.render( renderer );

			} else {

				renderer.setRenderTarget( writeBuffer );
				// TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
				if ( this.clear ) renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );
				this.fsQuad.render( renderer );

			}

		}

		dispose() {

			this.material.dispose();

			this.fsQuad.dispose();

		}

	}

	// Generated by LiveScript 1.6.0

	return ShaderPass;

})(THREE);
var RenderPass = (function (three_module_min_js) {
	'use strict';

	class Pass {

		constructor() {

			this.isPass = true;

			// if set to true, the pass is processed by the composer
			this.enabled = true;

			// if set to true, the pass indicates to swap read and write buffer after rendering
			this.needsSwap = true;

			// if set to true, the pass clears its buffer before rendering
			this.clear = false;

			// if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
			this.renderToScreen = false;

		}

		setSize( /* width, height */ ) {}

		render( /* renderer, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

			console.error( 'THREE.Pass: .render() must be implemented in derived pass.' );

		}

		dispose() {}

	}

	// Helper for passes that need to fill the viewport with a single quad.

	new three_module_min_js.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	// https://github.com/mrdoob/three.js/pull/21358

	class FullscreenTriangleGeometry extends three_module_min_js.BufferGeometry {

		constructor() {

			super();

			this.setAttribute( 'position', new three_module_min_js.Float32BufferAttribute( [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
			this.setAttribute( 'uv', new three_module_min_js.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

		}

	}

	new FullscreenTriangleGeometry();

	class RenderPass extends Pass {

		constructor( scene, camera, overrideMaterial = null, clearColor = null, clearAlpha = null ) {

			super();

			this.scene = scene;
			this.camera = camera;

			this.overrideMaterial = overrideMaterial;

			this.clearColor = clearColor;
			this.clearAlpha = clearAlpha;

			this.clear = true;
			this.clearDepth = false;
			this.needsSwap = false;
			this._oldClearColor = new three_module_min_js.Color();

		}

		render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

			const oldAutoClear = renderer.autoClear;
			renderer.autoClear = false;

			let oldClearAlpha, oldOverrideMaterial;

			if ( this.overrideMaterial !== null ) {

				oldOverrideMaterial = this.scene.overrideMaterial;

				this.scene.overrideMaterial = this.overrideMaterial;

			}

			if ( this.clearColor !== null ) {

				renderer.getClearColor( this._oldClearColor );
				renderer.setClearColor( this.clearColor );

			}

			if ( this.clearAlpha !== null ) {

				oldClearAlpha = renderer.getClearAlpha();
				renderer.setClearAlpha( this.clearAlpha );

			}

			if ( this.clearDepth == true ) {

				renderer.clearDepth();

			}

			renderer.setRenderTarget( this.renderToScreen ? null : readBuffer );

			if ( this.clear === true ) {

				// TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
				renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );

			}

			renderer.render( this.scene, this.camera );

			// restore

			if ( this.clearColor !== null ) {

				renderer.setClearColor( this._oldClearColor );

			}

			if ( this.clearAlpha !== null ) {

				renderer.setClearAlpha( oldClearAlpha );

			}

			if ( this.overrideMaterial !== null ) {

				this.scene.overrideMaterial = oldOverrideMaterial;

			}

			renderer.autoClear = oldAutoClear;

		}

	}

	// Generated by LiveScript 1.6.0

	return RenderPass;

})(THREE);
var CopyShader = (function () {
	'use strict';

	/**
	 * Full-screen textured quad shader
	 */

	const CopyShader = {

		name: 'CopyShader',

		uniforms: {

			'tDiffuse': { value: null },
			'opacity': { value: 1.0 }

		},

		vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

		fragmentShader: /* glsl */`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`

	};

	// Generated by LiveScript 1.6.0

	return CopyShader;

})();
var ConvolutionShader = (function (three_module_min_js) {
	'use strict';

	/**
	 * Convolution shader
	 * ported from o3d sample to WebGL / GLSL
	 */

	const ConvolutionShader = {

		name: 'ConvolutionShader',

		defines: {

			'KERNEL_SIZE_FLOAT': '25.0',
			'KERNEL_SIZE_INT': '25'

		},

		uniforms: {

			'tDiffuse': { value: null },
			'uImageIncrement': { value: new three_module_min_js.Vector2( 0.001953125, 0.0 ) },
			'cKernel': { value: [] }

		},

		vertexShader: /* glsl */`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

		fragmentShader: /* glsl */`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,

		buildKernel: function ( sigma ) {

			// We lop off the sqrt(2 * pi) * sigma term, since we're going to normalize anyway.

			const kMaxKernelSize = 25;
			let kernelSize = 2 * Math.ceil( sigma * 3.0 ) + 1;

			if ( kernelSize > kMaxKernelSize ) kernelSize = kMaxKernelSize;

			const halfWidth = ( kernelSize - 1 ) * 0.5;

			const values = new Array( kernelSize );
			let sum = 0.0;
			for ( let i = 0; i < kernelSize; ++ i ) {

				values[ i ] = gauss( i - halfWidth, sigma );
				sum += values[ i ];

			}

			// normalize the kernel

			for ( let i = 0; i < kernelSize; ++ i ) values[ i ] /= sum;

			return values;

		}

	};

	function gauss( x, sigma ) {

		return Math.exp( - ( x * x ) / ( 2.0 * sigma * sigma ) );

	}

	// Generated by LiveScript 1.6.0

	return ConvolutionShader;

})(THREE);
var FilmShader = (function () {
	'use strict';

	const FilmShader = {

		name: 'FilmShader',

		uniforms: {

			'tDiffuse': { value: null },
			'time': { value: 0.0 },
			'intensity': { value: 0.5 },
			'grayscale': { value: false }

		},

		vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

		fragmentShader: /* glsl */`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`,

	};

	// Generated by LiveScript 1.6.0

	return FilmShader;

})();
var BloomPass = (function (three_module_min_js) {
	'use strict';

	class Pass {

		constructor() {

			this.isPass = true;

			// if set to true, the pass is processed by the composer
			this.enabled = true;

			// if set to true, the pass indicates to swap read and write buffer after rendering
			this.needsSwap = true;

			// if set to true, the pass clears its buffer before rendering
			this.clear = false;

			// if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
			this.renderToScreen = false;

		}

		setSize( /* width, height */ ) {}

		render( /* renderer, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

			console.error( 'THREE.Pass: .render() must be implemented in derived pass.' );

		}

		dispose() {}

	}

	// Helper for passes that need to fill the viewport with a single quad.

	const _camera = new three_module_min_js.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	// https://github.com/mrdoob/three.js/pull/21358

	class FullscreenTriangleGeometry extends three_module_min_js.BufferGeometry {

		constructor() {

			super();

			this.setAttribute( 'position', new three_module_min_js.Float32BufferAttribute( [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
			this.setAttribute( 'uv', new three_module_min_js.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

		}

	}

	const _geometry = new FullscreenTriangleGeometry();

	class FullScreenQuad {

		constructor( material ) {

			this._mesh = new three_module_min_js.Mesh( _geometry, material );

		}

		dispose() {

			this._mesh.geometry.dispose();

		}

		render( renderer ) {

			renderer.render( this._mesh, _camera );

		}

		get material() {

			return this._mesh.material;

		}

		set material( value ) {

			this._mesh.material = value;

		}

	}

	/**
	 * Convolution shader
	 * ported from o3d sample to WebGL / GLSL
	 */

	const ConvolutionShader = {

		name: 'ConvolutionShader',

		defines: {

			'KERNEL_SIZE_FLOAT': '25.0',
			'KERNEL_SIZE_INT': '25'

		},

		uniforms: {

			'tDiffuse': { value: null },
			'uImageIncrement': { value: new three_module_min_js.Vector2( 0.001953125, 0.0 ) },
			'cKernel': { value: [] }

		},

		vertexShader: /* glsl */`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

		fragmentShader: /* glsl */`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,

		buildKernel: function ( sigma ) {

			// We lop off the sqrt(2 * pi) * sigma term, since we're going to normalize anyway.

			const kMaxKernelSize = 25;
			let kernelSize = 2 * Math.ceil( sigma * 3.0 ) + 1;

			if ( kernelSize > kMaxKernelSize ) kernelSize = kMaxKernelSize;

			const halfWidth = ( kernelSize - 1 ) * 0.5;

			const values = new Array( kernelSize );
			let sum = 0.0;
			for ( let i = 0; i < kernelSize; ++ i ) {

				values[ i ] = gauss( i - halfWidth, sigma );
				sum += values[ i ];

			}

			// normalize the kernel

			for ( let i = 0; i < kernelSize; ++ i ) values[ i ] /= sum;

			return values;

		}

	};

	function gauss( x, sigma ) {

		return Math.exp( - ( x * x ) / ( 2.0 * sigma * sigma ) );

	}

	class BloomPass extends Pass {

		constructor( strength = 1, kernelSize = 25, sigma = 4 ) {

			super();

			// render targets

			this.renderTargetX = new three_module_min_js.WebGLRenderTarget( 1, 1, { type: three_module_min_js.HalfFloatType } ); // will be resized later
			this.renderTargetX.texture.name = 'BloomPass.x';
			this.renderTargetY = new three_module_min_js.WebGLRenderTarget( 1, 1, { type: three_module_min_js.HalfFloatType } ); // will be resized later
			this.renderTargetY.texture.name = 'BloomPass.y';

			// combine material

			this.combineUniforms = three_module_min_js.UniformsUtils.clone( CombineShader.uniforms );

			this.combineUniforms[ 'strength' ].value = strength;

			this.materialCombine = new three_module_min_js.ShaderMaterial( {

				name: CombineShader.name,
				uniforms: this.combineUniforms,
				vertexShader: CombineShader.vertexShader,
				fragmentShader: CombineShader.fragmentShader,
				blending: three_module_min_js.AdditiveBlending,
				transparent: true

			} );

			// convolution material

			const convolutionShader = ConvolutionShader;

			this.convolutionUniforms = three_module_min_js.UniformsUtils.clone( convolutionShader.uniforms );

			this.convolutionUniforms[ 'uImageIncrement' ].value = BloomPass.blurX;
			this.convolutionUniforms[ 'cKernel' ].value = ConvolutionShader.buildKernel( sigma );

			this.materialConvolution = new three_module_min_js.ShaderMaterial( {

				name: convolutionShader.name,
				uniforms: this.convolutionUniforms,
				vertexShader: convolutionShader.vertexShader,
				fragmentShader: convolutionShader.fragmentShader,
				defines: {
					'KERNEL_SIZE_FLOAT': kernelSize.toFixed( 1 ),
					'KERNEL_SIZE_INT': kernelSize.toFixed( 0 )
				}

			} );

			this.needsSwap = false;

			this.fsQuad = new FullScreenQuad( null );

		}

		render( renderer, writeBuffer, readBuffer, deltaTime, maskActive ) {

			if ( maskActive ) renderer.state.buffers.stencil.setTest( false );

			// Render quad with blured scene into texture (convolution pass 1)

			this.fsQuad.material = this.materialConvolution;

			this.convolutionUniforms[ 'tDiffuse' ].value = readBuffer.texture;
			this.convolutionUniforms[ 'uImageIncrement' ].value = BloomPass.blurX;

			renderer.setRenderTarget( this.renderTargetX );
			renderer.clear();
			this.fsQuad.render( renderer );


			// Render quad with blured scene into texture (convolution pass 2)

			this.convolutionUniforms[ 'tDiffuse' ].value = this.renderTargetX.texture;
			this.convolutionUniforms[ 'uImageIncrement' ].value = BloomPass.blurY;

			renderer.setRenderTarget( this.renderTargetY );
			renderer.clear();
			this.fsQuad.render( renderer );

			// Render original scene with superimposed blur to texture

			this.fsQuad.material = this.materialCombine;

			this.combineUniforms[ 'tDiffuse' ].value = this.renderTargetY.texture;

			if ( maskActive ) renderer.state.buffers.stencil.setTest( true );

			renderer.setRenderTarget( readBuffer );
			if ( this.clear ) renderer.clear();
			this.fsQuad.render( renderer );

		}

		setSize( width, height ) {

			this.renderTargetX.setSize( width, height );
			this.renderTargetY.setSize( width, height );

		}

		dispose() {

			this.renderTargetX.dispose();
			this.renderTargetY.dispose();

			this.materialCombine.dispose();
			this.materialConvolution.dispose();

			this.fsQuad.dispose();

		}

	}

	const CombineShader = {

		name: 'CombineShader',

		uniforms: {

			'tDiffuse': { value: null },
			'strength': { value: 1.0 }

		},

		vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

		fragmentShader: /* glsl */`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`

	};

	BloomPass.blurX = new three_module_min_js.Vector2( 0.001953125, 0.0 );
	BloomPass.blurY = new three_module_min_js.Vector2( 0.0, 0.001953125 );

	// Generated by LiveScript 1.6.0

	return BloomPass;

})(THREE);
var FilmPass = (function (three_module_min_js) {
	'use strict';

	class Pass {

		constructor() {

			this.isPass = true;

			// if set to true, the pass is processed by the composer
			this.enabled = true;

			// if set to true, the pass indicates to swap read and write buffer after rendering
			this.needsSwap = true;

			// if set to true, the pass clears its buffer before rendering
			this.clear = false;

			// if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
			this.renderToScreen = false;

		}

		setSize( /* width, height */ ) {}

		render( /* renderer, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

			console.error( 'THREE.Pass: .render() must be implemented in derived pass.' );

		}

		dispose() {}

	}

	// Helper for passes that need to fill the viewport with a single quad.

	const _camera = new three_module_min_js.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	// https://github.com/mrdoob/three.js/pull/21358

	class FullscreenTriangleGeometry extends three_module_min_js.BufferGeometry {

		constructor() {

			super();

			this.setAttribute( 'position', new three_module_min_js.Float32BufferAttribute( [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
			this.setAttribute( 'uv', new three_module_min_js.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

		}

	}

	const _geometry = new FullscreenTriangleGeometry();

	class FullScreenQuad {

		constructor( material ) {

			this._mesh = new three_module_min_js.Mesh( _geometry, material );

		}

		dispose() {

			this._mesh.geometry.dispose();

		}

		render( renderer ) {

			renderer.render( this._mesh, _camera );

		}

		get material() {

			return this._mesh.material;

		}

		set material( value ) {

			this._mesh.material = value;

		}

	}

	const FilmShader = {

		name: 'FilmShader',

		uniforms: {

			'tDiffuse': { value: null },
			'time': { value: 0.0 },
			'intensity': { value: 0.5 },
			'grayscale': { value: false }

		},

		vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

		fragmentShader: /* glsl */`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`,

	};

	class FilmPass extends Pass {

		constructor( intensity = 0.5, grayscale = false ) {

			super();

			const shader = FilmShader;

			this.uniforms = three_module_min_js.UniformsUtils.clone( shader.uniforms );

			this.material = new three_module_min_js.ShaderMaterial( {

				name: shader.name,
				uniforms: this.uniforms,
				vertexShader: shader.vertexShader,
				fragmentShader: shader.fragmentShader

			} );

			this.uniforms.intensity.value = intensity; // (0 = no effect, 1 = full effect)
			this.uniforms.grayscale.value = grayscale;

			this.fsQuad = new FullScreenQuad( this.material );

		}

		render( renderer, writeBuffer, readBuffer, deltaTime /*, maskActive */ ) {

			this.uniforms[ 'tDiffuse' ].value = readBuffer.texture;
			this.uniforms[ 'time' ].value += deltaTime;

			if ( this.renderToScreen ) {

				renderer.setRenderTarget( null );
				this.fsQuad.render( renderer );

			} else {

				renderer.setRenderTarget( writeBuffer );
				if ( this.clear ) renderer.clear();
				this.fsQuad.render( renderer );

			}

		}

		dispose() {

			this.material.dispose();

			this.fsQuad.dispose();

		}

	}

	// Generated by LiveScript 1.6.0

	return FilmPass;

})(THREE);
// Generated by LiveScript 1.6.0
var anikitThreeRenderer;
anikitThreeRenderer = function(kit, node, t, opt){
  var values, box, bbox, w, h, ref$, wx, wy, wz, nx, ny, nz, m, mat, gmat, opacity;
  opt == null && (opt = {});
  opt = import$(import$({}, kit.config), opt);
  if (!kit.preset) {
    t = kit.timing(t, opt);
    values = kit.affine(t, opt);
  }
  box = new THREE.Box3().setFromObject(node);
  node.geometry.computeBoundingBox();
  bbox = node.geometry.boundingBox;
  if (kit.preset) {
    w = bbox.max.x - bbox.min.x;
    h = bbox.max.y - bbox.min.y;
    values = kit.step(t, {
      width: w,
      height: h
    }, 'affine');
  }
  if (!values) {
    return;
  }
  if (kit.preset) {
    ref$ = ['x', 'y', 'z'].map(function(it){
      return bbox.max[it] - bbox.min[it];
    }).map(function(d, i){
      return (opt.origin || values.transformOrigin || [0, 0, 0])[i] * d;
    }), wx = ref$[0], wy = ref$[1], wz = ref$[2];
  } else {
    ref$ = ['x', 'y', 'z'].map(function(it){
      return bbox.max[it] - bbox.min[it];
    }).map(function(d, i){
      return ((opt.origin || values.transformOrigin || [0.5, 0.5, 0.5])[i] - 0.5) * d / 2;
    }), wx = ref$[0], wy = ref$[1], wz = ref$[2];
  }
  ref$ = ['x', 'y', 'z'].map(function(it){
    return (bbox.max[it] + bbox.min[it]) * 0.5;
  }), nx = ref$[0], ny = ref$[1], nz = ref$[2];
  if ((nx || ny || nz) && !node.repos) {
    m = new THREE.Matrix4();
    m.set(1, 0, 0, -nx, 0, 1, 0, -ny, 0, 0, 1, -nz, 0, 0, 0, 1);
    if (node.geometry.applyMatrix) {
      node.geometry.applyMatrix(m);
    } else {
      node.geometry.applyMatrix4(m);
    }
    node.repos = m.invert
      ? m.invert()
      : m.getInverse(m);
  }
  node.matrixAutoUpdate = false;
  mat = values.transform || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  [3, 7, 11].map(function(it){
    return mat[it] = mat[it] / 1;
  });
  gmat = new THREE.Matrix4().makeTranslation(wx, wy, wz);
  node.matrix.set.apply(node.matrix, mat);
  node.matrix.multiply(gmat);
  node.matrix.premultiply(gmat.invert
    ? gmat.invert()
    : gmat.getInverse(gmat));
  if (node.repos) {
    node.matrix.premultiply(node.repos);
  }
  opacity = values.opacity != null ? values.opacity : 1;
  if (node.material.uniforms && node.material.uniforms.alpha) {
    node.material.uniforms.alpha.value = opacity;
  }
  node.material.transparent = true;
  return node.material.opacity = opacity;
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
