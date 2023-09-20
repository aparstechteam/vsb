import{r as Le,o as S,c as ee,w as F,a as y,t as V,b as L,F as Q,d as ve,e as Ee,h as J,i as fe,p as be,f as g,g as K,j as W,k as O,l as q,m as te,n as Pe,q as C,s as N,u as R,v as A,T as De,x as re,y as j,z as U}from"./index-682e654b.js";const Te={class:"p-2 my-3 border md:p-5 dark:bg-gray-500 rounded-xl dark:text-white"},Ce={__name:"QuestionCard",props:{question:{type:Object,required:!0}},setup(e){return(n,l)=>{const a=Le("router-link");return S(),ee(a,{to:`/question/${e.question.id}`},{default:F(()=>[y("div",Te,[y("h1",null,V(e.question.title),1)])]),_:1},8,["to"])}}},Ie={class:"max-w-2xl bensen"},Re={__name:"QuestionList",props:{questions:{type:Array,required:!0}},setup(e){return(n,l)=>(S(),L("div",Ie,[(S(!0),L(Q,null,ve(e.questions,a=>(S(),ee(Ce,{key:a.id,question:a},null,8,["question"]))),128))]))}};function I(e,n,...l){if(e in n){let t=n[e];return typeof t=="function"?t(...l):t}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,I),a}var Z=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Z||{}),je=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(je||{});function H({visible:e=!0,features:n=0,ourProps:l,theirProps:a,...t}){var o;let i=he(a,l),s=Object.assign(t,{props:i});if(e||n&2&&i.static)return Y(s);if(n&1){let d=(o=i.unmount)==null||o?0:1;return I(d,{0(){return null},1(){return Y({...t,props:{...i,hidden:!0,style:{display:"none"}}})}})}return Y(s)}function Y({props:e,attrs:n,slots:l,slot:a,name:t}){var o,i;let{as:s,...d}=ge(e,["unmount","static"]),r=(o=l.default)==null?void 0:o.call(l,a),u={};if(a){let x=!1,k=[];for(let[_,$]of Object.entries(a))typeof $=="boolean"&&(x=!0),$===!0&&k.push(_);x&&(u["data-headlessui-state"]=k.join(" "))}if(s==="template"){if(r=me(r??[]),Object.keys(d).length>0||Object.keys(n).length>0){let[x,...k]=r??[];if(!Ae(x)||k.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(n)).map(m=>m.trim()).filter((m,T,v)=>v.indexOf(m)===T).sort((m,T)=>m.localeCompare(T)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let _=he((i=x.props)!=null?i:{},d),$=Ee(x,_);for(let m in _)m.startsWith("on")&&($.props||($.props={}),$.props[m]=_[m]);return $}return Array.isArray(r)&&r.length===1?r[0]:r}return J(s,Object.assign({},d,u),{default:()=>r})}function me(e){return e.flatMap(n=>n.type===Q?me(n.children):[n])}function he(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},l={};for(let a of e)for(let t in a)t.startsWith("on")&&typeof a[t]=="function"?(l[t]!=null||(l[t]=[]),l[t].push(a[t])):n[t]=a[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(l).map(a=>[a,void 0])));for(let a in l)Object.assign(n,{[a](t,...o){let i=l[a];for(let s of i){if(t instanceof Event&&t.defaultPrevented)return;s(t,...o)}}});return n}function Ne(e){let n=Object.assign({},e);for(let l in n)n[l]===void 0&&delete n[l];return n}function ge(e,n=[]){let l=Object.assign({},e);for(let a of n)a in l&&delete l[a];return l}function Ae(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Fe=0;function Ve(){return++Fe}function ne(){return Ve()}var w=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(w||{});function Be(e){throw new Error("Unexpected object: "+e)}var E=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(E||{});function Me(e,n){let l=n.resolveItems();if(l.length<=0)return null;let a=n.resolveActiveIndex(),t=a??-1,o=(()=>{switch(e.focus){case 0:return l.findIndex(i=>!n.resolveDisabled(i));case 1:{let i=l.slice().reverse().findIndex((s,d,r)=>t!==-1&&r.length-d-1>=t?!1:!n.resolveDisabled(s));return i===-1?i:l.length-1-i}case 2:return l.findIndex((i,s)=>s<=t?!1:!n.resolveDisabled(i));case 3:{let i=l.slice().reverse().findIndex(s=>!n.resolveDisabled(s));return i===-1?i:l.length-1-i}case 4:return l.findIndex(i=>n.resolveId(i)===e.id);case 5:return null;default:Be(e)}})();return o===-1?a:o}function h(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}let ye=Symbol("Context");var M=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(M||{});function qe(){return fe(ye,null)}function He(e){be(ye,e)}function ie(e,n){if(e)return e;let l=n??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function Ue(e,n){let l=g(ie(e.value.type,e.value.as));return K(()=>{l.value=ie(e.value.type,e.value.as)}),W(()=>{var a;l.value||h(n)&&h(n)instanceof HTMLButtonElement&&!((a=h(n))!=null&&a.hasAttribute("type"))&&(l.value="button")}),l}var ze=Object.defineProperty,Ke=(e,n,l)=>n in e?ze(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,ue=(e,n,l)=>(Ke(e,typeof n!="symbol"?n+"":n,l),l);class Qe{constructor(){ue(this,"current",this.detect()),ue(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let le=new Qe;function We(e){if(le.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=h(e);if(n)return n.ownerDocument}return document}let se=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ge=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Ge||{}),Ye=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ye||{}),Xe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Xe||{}),ae=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ae||{});function xe(e,n=0){var l;return e===((l=We(e))==null?void 0:l.body)?!1:I(n,{0(){return e.matches(se)},1(){let a=e;for(;a!==null;){if(a.matches(se))return!0;a=a.parentElement}return!1}})}var Je=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Je||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Ze(e,n=l=>l){return e.slice().sort((l,a)=>{let t=n(l),o=n(a);if(t===null||o===null)return 0;let i=t.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,n,l){le.isServer||W(a=>{document.addEventListener(e,n,l),a(()=>document.removeEventListener(e,n,l))})}function et(e,n,l){le.isServer||W(a=>{window.addEventListener(e,n,l),a(()=>window.removeEventListener(e,n,l))})}function tt(e,n,l=O(()=>!0)){function a(o,i){if(!l.value||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s))return;let d=function r(u){return typeof u=="function"?r(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let r of d){if(r===null)continue;let u=r instanceof HTMLElement?r:h(r);if(u!=null&&u.contains(s)||o.composed&&o.composedPath().includes(u))return}return!xe(s,ae.Loose)&&s.tabIndex!==-1&&o.preventDefault(),n(o,s)}let t=g(null);z("pointerdown",o=>{var i,s;l.value&&(t.value=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),z("mousedown",o=>{var i,s;l.value&&(t.value=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),z("click",o=>{t.value&&(a(o,()=>t.value),t.value=null)},!0),z("touchend",o=>a(o,()=>o.target instanceof HTMLElement?o.target:null),!0),et("blur",o=>a(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var we=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(we||{});let nt=q({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:n,attrs:l}){return()=>{let{features:a,...t}=e,o={"aria-hidden":(a&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return H({ourProps:o,theirProps:t,slot:{},attrs:l,slots:n,name:"Hidden"})}}});function Oe(e={},n=null,l=[]){for(let[a,t]of Object.entries(e))_e(l,Se(n,a),t);return l}function Se(e,n){return e?e+"["+n+"]":n}function _e(e,n,l){if(Array.isArray(l))for(let[a,t]of l.entries())_e(e,Se(n,a.toString()),t);else l instanceof Date?e.push([n,l.toISOString()]):typeof l=="boolean"?e.push([n,l?"1":"0"]):typeof l=="string"?e.push([n,l]):typeof l=="number"?e.push([n,`${l}`]):l==null?e.push([n,""]):Oe(l,n,e)}function lt(e,n,l){let a=g(l==null?void 0:l.value),t=O(()=>e.value!==void 0);return[O(()=>t.value?e.value:a.value),function(o){return t.value||(a.value=o),n==null?void 0:n(o)}]}function de(e){return[e.screenX,e.screenY]}function at(){let e=g([-1,-1]);return{wasMoved(n){let l=de(n);return e.value[0]===l[0]&&e.value[1]===l[1]?!1:(e.value=l,!0)},update(n){e.value=de(n)}}}let ce=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function pe(e){var n,l;let a=(n=e.innerText)!=null?n:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return a;let o=!1;for(let s of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),o=!0;let i=o?(l=t.innerText)!=null?l:"":a;return ce.test(i)&&(i=i.replace(ce,"")),i}function ot(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let l=e.getAttribute("aria-labelledby");if(l){let a=l.split(" ").map(t=>{let o=document.getElementById(t);if(o){let i=o.getAttribute("aria-label");return typeof i=="string"?i.trim():pe(o).trim()}return null}).filter(Boolean);if(a.length>0)return a.join(", ")}return pe(e).trim()}function rt(e){let n=g(""),l=g("");return()=>{let a=h(e);if(!a)return"";let t=a.innerText;if(n.value===t)return l.value;let o=ot(a).trim().toLowerCase();return n.value=t,l.value=o,o}}function it(e,n){return e===n}var ut=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ut||{}),st=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(st||{}),dt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(dt||{});function ct(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let $e=Symbol("ListboxContext");function G(e){let n=fe($e,null);if(n===null){let l=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,G),l}return n}let pt=q({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>it},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:n,attrs:l,emit:a}){let t=g(1),o=g(null),i=g(null),s=g(null),d=g([]),r=g(""),u=g(null),x=g(1);function k(c=p=>p){let p=u.value!==null?d.value[u.value]:null,f=Ze(c(d.value.slice()),D=>h(D.dataRef.domRef)),b=p?f.indexOf(p):null;return b===-1&&(b=null),{options:f,activeOptionIndex:b}}let _=O(()=>e.multiple?1:0),[$,m]=lt(O(()=>e.modelValue),c=>a("update:modelValue",c),O(()=>e.defaultValue)),T=O(()=>$.value===void 0?I(_.value,{1:[],0:void 0}):$.value),v={listboxState:t,value:T,mode:_,compare(c,p){if(typeof e.by=="string"){let f=e.by;return(c==null?void 0:c[f])===(p==null?void 0:p[f])}return e.by(c,p)},orientation:O(()=>e.horizontal?"horizontal":"vertical"),labelRef:o,buttonRef:i,optionsRef:s,disabled:O(()=>e.disabled),options:d,searchQuery:r,activeOptionIndex:u,activationTrigger:x,closeListbox(){e.disabled||t.value!==1&&(t.value=1,u.value=null)},openListbox(){e.disabled||t.value!==0&&(t.value=0)},goToOption(c,p,f){if(e.disabled||t.value===1)return;let b=k(),D=Me(c===E.Specific?{focus:E.Specific,id:p}:{focus:c},{resolveItems:()=>b.options,resolveActiveIndex:()=>b.activeOptionIndex,resolveId:B=>B.id,resolveDisabled:B=>B.dataRef.disabled});r.value="",u.value=D,x.value=f??1,d.value=b.options},search(c){if(e.disabled||t.value===1)return;let p=r.value!==""?0:1;r.value+=c.toLowerCase();let f=(u.value!==null?d.value.slice(u.value+p).concat(d.value.slice(0,u.value+p)):d.value).find(D=>D.dataRef.textValue.startsWith(r.value)&&!D.dataRef.disabled),b=f?d.value.indexOf(f):-1;b===-1||b===u.value||(u.value=b,x.value=1)},clearSearch(){e.disabled||t.value!==1&&r.value!==""&&(r.value="")},registerOption(c,p){let f=k(b=>[...b,{id:c,dataRef:p}]);d.value=f.options,u.value=f.activeOptionIndex},unregisterOption(c){let p=k(f=>{let b=f.findIndex(D=>D.id===c);return b!==-1&&f.splice(b,1),f});d.value=p.options,u.value=p.activeOptionIndex,x.value=1},theirOnChange(c){e.disabled||m(c)},select(c){e.disabled||m(I(_.value,{0:()=>c,1:()=>{let p=C(v.value.value).slice(),f=C(c),b=p.findIndex(D=>v.compare(f,C(D)));return b===-1?p.push(f):p.splice(b,1),p}}))}};tt([i,s],(c,p)=>{var f;v.closeListbox(),xe(p,ae.Loose)||(c.preventDefault(),(f=h(i))==null||f.focus())},O(()=>t.value===0)),be($e,v),He(O(()=>I(t.value,{0:M.Open,1:M.Closed})));let P=O(()=>{var c;return(c=h(i))==null?void 0:c.closest("form")});return K(()=>{te([P],()=>{if(!P.value||e.defaultValue===void 0)return;function c(){v.theirOnChange(e.defaultValue)}return P.value.addEventListener("reset",c),()=>{var p;(p=P.value)==null||p.removeEventListener("reset",c)}},{immediate:!0})}),()=>{let{name:c,modelValue:p,disabled:f,form:b,...D}=e,B={open:t.value===0,disabled:f,value:T.value};return J(Q,[...c!=null&&T.value!=null?Oe({[c]:T.value}).map(([oe,ke])=>J(nt,Ne({features:we.Hidden,key:oe,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:b,name:oe,value:ke}))):[],H({ourProps:{},theirProps:{...l,...ge(D,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:B,slots:n,attrs:l,name:"Listbox"})])}}}),vt=q({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${ne()}`}},setup(e,{attrs:n,slots:l,expose:a}){let t=G("ListboxButton");a({el:t.buttonRef,$el:t.buttonRef});function o(r){switch(r.key){case w.Space:case w.Enter:case w.ArrowDown:r.preventDefault(),t.openListbox(),N(()=>{var u;(u=h(t.optionsRef))==null||u.focus({preventScroll:!0}),t.value.value||t.goToOption(E.First)});break;case w.ArrowUp:r.preventDefault(),t.openListbox(),N(()=>{var u;(u=h(t.optionsRef))==null||u.focus({preventScroll:!0}),t.value.value||t.goToOption(E.Last)});break}}function i(r){switch(r.key){case w.Space:r.preventDefault();break}}function s(r){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),N(()=>{var u;return(u=h(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(r.preventDefault(),t.openListbox(),ct(()=>{var u;return(u=h(t.optionsRef))==null?void 0:u.focus({preventScroll:!0})})))}let d=Ue(O(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var r,u;let x={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:k,..._}=e,$={ref:t.buttonRef,id:k,type:d.value,"aria-haspopup":"listbox","aria-controls":(r=h(t.optionsRef))==null?void 0:r.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(u=h(t.labelRef))==null?void 0:u.id,k].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:o,onKeyup:i,onClick:s};return H({ourProps:$,theirProps:_,slot:x,attrs:n,slots:l,name:"ListboxButton"})}}}),ft=q({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${ne()}`}},setup(e,{attrs:n,slots:l,expose:a}){let t=G("ListboxOptions"),o=g(null);a({el:t.optionsRef,$el:t.optionsRef});function i(r){switch(o.value&&clearTimeout(o.value),r.key){case w.Space:if(t.searchQuery.value!=="")return r.preventDefault(),r.stopPropagation(),t.search(r.key);case w.Enter:if(r.preventDefault(),r.stopPropagation(),t.activeOptionIndex.value!==null){let u=t.options.value[t.activeOptionIndex.value];t.select(u.dataRef.value)}t.mode.value===0&&(t.closeListbox(),N(()=>{var u;return(u=h(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})}));break;case I(t.orientation.value,{vertical:w.ArrowDown,horizontal:w.ArrowRight}):return r.preventDefault(),r.stopPropagation(),t.goToOption(E.Next);case I(t.orientation.value,{vertical:w.ArrowUp,horizontal:w.ArrowLeft}):return r.preventDefault(),r.stopPropagation(),t.goToOption(E.Previous);case w.Home:case w.PageUp:return r.preventDefault(),r.stopPropagation(),t.goToOption(E.First);case w.End:case w.PageDown:return r.preventDefault(),r.stopPropagation(),t.goToOption(E.Last);case w.Escape:r.preventDefault(),r.stopPropagation(),t.closeListbox(),N(()=>{var u;return(u=h(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case w.Tab:r.preventDefault(),r.stopPropagation();break;default:r.key.length===1&&(t.search(r.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}let s=qe(),d=O(()=>s!==null?(s.value&M.Open)===M.Open:t.listboxState.value===0);return()=>{var r,u,x,k;let _={open:t.listboxState.value===0},{id:$,...m}=e,T={"aria-activedescendant":t.activeOptionIndex.value===null||(r=t.options.value[t.activeOptionIndex.value])==null?void 0:r.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(k=(u=h(t.labelRef))==null?void 0:u.id)!=null?k:(x=h(t.buttonRef))==null?void 0:x.id,"aria-orientation":t.orientation.value,id:$,onKeydown:i,role:"listbox",tabIndex:0,ref:t.optionsRef};return H({ourProps:T,theirProps:m,slot:_,attrs:n,slots:l,features:Z.RenderStrategy|Z.Static,visible:d.value,name:"ListboxOptions"})}}}),bt=q({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${ne()}`}},setup(e,{slots:n,attrs:l,expose:a}){let t=G("ListboxOption"),o=g(null);a({el:o,$el:o});let i=O(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===e.id:!1),s=O(()=>I(t.mode.value,{0:()=>t.compare(C(t.value.value),C(e.value)),1:()=>C(t.value.value).some(v=>t.compare(C(v),C(e.value)))})),d=O(()=>I(t.mode.value,{1:()=>{var v;let P=C(t.value.value);return((v=t.options.value.find(c=>P.some(p=>t.compare(C(p),C(c.dataRef.value)))))==null?void 0:v.id)===e.id},0:()=>s.value})),r=rt(o),u=O(()=>({disabled:e.disabled,value:e.value,get textValue(){return r()},domRef:o}));K(()=>t.registerOption(e.id,u)),Pe(()=>t.unregisterOption(e.id)),K(()=>{te([t.listboxState,s],()=>{t.listboxState.value===0&&s.value&&I(t.mode.value,{1:()=>{d.value&&t.goToOption(E.Specific,e.id)},0:()=>{t.goToOption(E.Specific,e.id)}})},{immediate:!0})}),W(()=>{t.listboxState.value===0&&i.value&&t.activationTrigger.value!==0&&N(()=>{var v,P;return(P=(v=h(o))==null?void 0:v.scrollIntoView)==null?void 0:P.call(v,{block:"nearest"})})});function x(v){if(e.disabled)return v.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),N(()=>{var P;return(P=h(t.buttonRef))==null?void 0:P.focus({preventScroll:!0})}))}function k(){if(e.disabled)return t.goToOption(E.Nothing);t.goToOption(E.Specific,e.id)}let _=at();function $(v){_.update(v)}function m(v){_.wasMoved(v)&&(e.disabled||i.value||t.goToOption(E.Specific,e.id,0))}function T(v){_.wasMoved(v)&&(e.disabled||i.value&&t.goToOption(E.Nothing))}return()=>{let{disabled:v}=e,P={active:i.value,selected:s.value,disabled:v},{id:c,value:p,disabled:f,...b}=e,D={id:c,ref:o,role:"option",tabIndex:v===!0?void 0:-1,"aria-disabled":v===!0?!0:void 0,"aria-selected":s.value,disabled:void 0,onClick:x,onFocus:k,onPointerenter:$,onMouseenter:$,onPointermove:m,onMousemove:m,onPointerleave:T,onMouseleave:T};return H({ourProps:D,theirProps:b,slot:P,attrs:l,slots:n,name:"ListboxOption"})}}});function mt(e,n){return S(),L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[y("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})])}function ht(e,n){return S(),L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[y("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})])}const gt={class:"relative mt-1"},yt={class:"block truncate"},xt={class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},wt={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"},X={__name:"SelectComponent",props:{options:{type:Array,required:!0}},emits:["changeValue"],setup(e,{emit:n}){const l=g("Select an option");return te(l,a=>{n("changeValue",a)}),(a,t)=>(S(),L("div",null,[R(A(pt),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o)},{default:F(()=>[y("div",gt,[R(A(vt),{class:"relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:F(()=>[y("span",yt,V(l.value),1),y("span",xt,[R(A(ht),{class:"w-5 h-5 text-gray-400","aria-hidden":"true"})])]),_:1}),R(De,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:F(()=>[R(A(ft),{class:"absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:F(()=>[(S(!0),L(Q,null,ve(e.options,(o,i)=>(S(),ee(A(bt),{key:i,value:o,as:"template"},{default:F(({active:s,selected:d})=>[y("li",{class:re([s?"bg-amber-100 text-amber-900":"text-gray-900","relative cursor-default select-none py-2 pl-10 pr-4"])},[y("span",{class:re([d?"font-medium":"font-normal","block truncate"])},V(o),3),d?(S(),L("span",wt,[R(A(mt),{class:"w-5 h-5","aria-hidden":"true"})])):j("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]))}},Ot={class:"container py-20 mx-auto"},St={class:"max-w-2xl p-5 mx-auto bg-orange-200/10 dark:bg-orange-300 backdrop-blur-lg rounded-2xl"},_t=y("h1",{class:"text-2xl font-semibold text-center"}," Filter Questions ",-1),$t={class:"grid gap-4"},kt={key:0,class:"form-control"},Lt=y("label",{for:"chapter",class:"label"},"Select Chapter",-1),Et={key:1,class:"form-control"},Pt=y("label",{for:"chapter",class:"label"},"Select Exercises",-1),Dt={key:2,class:"form-control"},Tt=y("label",{for:"chapter",class:"label"},"Select Types",-1),Ct={key:0},It=y("h1",{class:"flex items-center justify-center gap-4 my-5 text-3xl font-semibold text-center dark:text-white"}," প্রশ্ন সমূহ ",-1),Rt={class:"flex justify-center gap-2 text-lg text-white"},jt={key:0},Nt={key:1},At={key:2},Ft={class:"max-w-xl mx-auto mt-4 space-y-5"},Bt={__name:"Index",setup(e){const n=g({chapter:"",excercise:"",type:""}),l=g({chapter:[],exercise:[],type:[]}),a=g([]);(()=>{U.get("/questions/chapters").then(d=>{l.value.chapter=d.data,n.value.chapter="",n.value.exercise="",n.value.type=""}).catch(d=>{console.log(d)})})();const o=()=>{U.get(`questions/chapters/${n.value.chapter}/exercises`).then(d=>{l.value.exercise=d.data,n.value.exercise="",n.value.type=""}).catch(d=>{console.log(d)})},i=()=>{U.get(`questions/chapters/${n.value.chapter}/exercises/${n.value.exercise}/types`).then(d=>{l.value.type=d.data,n.value.type=""}).catch(d=>{console.log(d)})},s=()=>{U.get(`questions/query?chapter=${n.value.chapter}&exercise=${n.value.exercise}&type=${n.value.type}`).then(d=>{a.value=d.data}).catch(d=>{console.log(d)})};return(d,r)=>(S(),L("div",Ot,[y("div",St,[_t,y("div",$t,[l.value.chapter.length>0?(S(),L("div",kt,[Lt,R(X,{onChangeValue:r[0]||(r[0]=u=>{n.value.chapter=u,o()}),options:l.value.chapter},null,8,["options"])])):j("",!0),l.value.exercise.length>0?(S(),L("div",Et,[Pt,R(X,{onChangeValue:r[1]||(r[1]=u=>{n.value.exercise=u,i()}),options:l.value.exercise},null,8,["options"])])):j("",!0),l.value.type.length>0?(S(),L("div",Dt,[Tt,R(X,{onChangeValue:r[2]||(r[2]=u=>n.value.type=u),options:l.value.type},null,8,["options"])])):j("",!0)]),y("div",{class:"mt-4 text-center"},[y("button",{class:"btn btn-neutral",onClick:s}," Find Questions ")])]),a.value.length>0?(S(),L("div",Ct,[It,y("p",Rt,[n.value.chapter?(S(),L("span",jt,V(n.value.chapter),1)):j("",!0),n.value.exercise?(S(),L("span",Nt," >> "+V(n.value.exercise),1)):j("",!0),n.value.type?(S(),L("span",At," >> "+V(n.value.type),1)):j("",!0)]),y("div",Ft,[R(Re,{questions:a.value},null,8,["questions"])])])):j("",!0)]))}};export{Bt as default};
