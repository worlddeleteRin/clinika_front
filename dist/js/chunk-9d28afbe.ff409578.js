(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d28afbe"],{"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?a(t):c(n(t))}},"65f0":function(t,e,r){var n=r("861d"),c=r("e8b5"),i=r("b622"),o=i("species");t.exports=function(t,e){var r;return c(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||o(e,t,{value:i.f(t)})}},"96c4":function(t,e,r){"use strict";r.r(e);r("b0c0"),r("a4d3"),r("e01a");var n=r("7a23"),c={key:0,class:"px-4 py-6 md:py-10"},i={class:"flex flex-col md:flex-row"},o={class:"md:w-5/12 w-full rounded-md max-h-[550px] relative overflow-hidden"},a={class:"md:ml-7 md:w-7/12"},s={class:"mt-4 text-xl font-medium"},u={class:"mt-1 text-sm text-gray-700"},f={class:"mt-2"},l={class:"mt-9 relative max-w-[800px] mx-auto"},d={class:"w-9/12 mr-1"},b={class:"w-3/12 text-xl font-medium text-right"};function v(t,e,r,v,p,m){var y=Object(n["D"])("contact-form-main");return v.service_loaded&&v.current_service?(Object(n["w"])(),Object(n["g"])("div",c,[Object(n["j"])("div",i,[Object(n["j"])("div",o,[Object(n["j"])("img",{src:v.current_service.imgsrc[0],class:"object-contain w-full h-full rounded-md"},null,8,["src"])]),Object(n["j"])("div",a,[Object(n["j"])("div",s,Object(n["H"])(v.current_service.name),1),Object(n["j"])("div",u,Object(n["H"])(v.current_service.label),1),Object(n["j"])("div",f,Object(n["H"])(v.current_service.description),1)])]),Object(n["j"])("div",l,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(v.current_service.subservices,(function(t){return Object(n["w"])(),Object(n["g"])("div",{key:t,class:"flex justify-between w-full px-3 py-3 mt-2 bg-gray-100 rounded-md"},[Object(n["j"])("div",d,Object(n["H"])(t.name),1),Object(n["j"])("div",b,Object(n["H"])(t.price)+" ₽ ",1)])})),128))]),Object(n["j"])(y,{class:"mt-8"})])):Object(n["h"])("",!0)}var p=r("1da1"),m=(r("96cf"),r("6c02")),y=r("5502"),j=r("6a99"),g={name:"ServicePage",props:{},components:{ContactFormMain:j["a"]},computed:{},methods:{},setup:function(){var t=Object(m["c"])(),e=Object(y["b"])(),r=t.params.slug,c=Object(n["z"])(!1),i=Object(n["e"])((function(){return e.state.services.current_service}));return Object(n["r"])(Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("getCurrentService",r);case 2:c.value=!0;case 3:case"end":return t.stop()}}),t)})))),{service_slug:r,current_service:i,service_loaded:c}}};g.render=v;e["default"]=g},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),i=r("d066"),o=r("c430"),a=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),v=r("825a"),p=r("7b0b"),m=r("fc6a"),y=r("c04e"),j=r("5c6c"),g=r("7c73"),h=r("df75"),O=r("241c"),w=r("057f"),S=r("7418"),x=r("06cf"),_=r("9bf2"),P=r("d1e7"),k=r("9112"),E=r("6eeb"),H=r("5692"),N=r("f772"),J=r("d012"),C=r("90e3"),F=r("b622"),A=r("e538"),D=r("746f"),I=r("d44e"),R=r("69f3"),T=r("b727").forEach,$=N("hidden"),z="Symbol",B="prototype",M=F("toPrimitive"),Q=R.set,W=R.getterFor(z),q=Object[B],G=c.Symbol,K=i("JSON","stringify"),L=x.f,U=_.f,V=w.f,X=P.f,Y=H("symbols"),Z=H("op-symbols"),tt=H("string-to-symbol-registry"),et=H("symbol-to-string-registry"),rt=H("wks"),nt=c.QObject,ct=!nt||!nt[B]||!nt[B].findChild,it=a&&f((function(){return 7!=g(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=L(q,e);n&&delete q[e],U(t,e,r),n&&t!==q&&U(q,e,n)}:U,ot=function(t,e){var r=Y[t]=g(G[B]);return Q(r,{type:z,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,r){t===q&&st(Z,e,r),v(t);var n=y(e,!0);return v(r),l(Y,n)?(r.enumerable?(l(t,$)&&t[$][n]&&(t[$][n]=!1),r=g(r,{enumerable:j(0,!1)})):(l(t,$)||U(t,$,j(1,{})),t[$][n]=!0),it(t,n,r)):U(t,n,r)},ut=function(t,e){v(t);var r=m(e),n=h(r).concat(vt(r));return T(n,(function(e){a&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?g(t):ut(g(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,$)&&this[$][e])||r)},dt=function(t,e){var r=m(t),n=y(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var c=L(r,n);return!c||!l(Y,n)||l(r,$)&&r[$][n]||(c.enumerable=!0),c}},bt=function(t){var e=V(m(t)),r=[];return T(e,(function(t){l(Y,t)||l(J,t)||r.push(t)})),r},vt=function(t){var e=t===q,r=V(e?Z:m(t)),n=[];return T(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(s||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=C(t),r=function(t){this===q&&r.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),it(this,e,j(1,t))};return a&&ct&&it(q,e,{configurable:!0,set:r}),ot(e,t)},E(G[B],"toString",(function(){return W(this).tag})),E(G,"withoutSetter",(function(t){return ot(C(t),t)})),P.f=lt,_.f=st,x.f=dt,O.f=w.f=bt,S.f=vt,A.f=function(t){return ot(F(t),t)},a&&(U(G[B],"description",{configurable:!0,get:function(){return W(this).description}}),o||E(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:G}),T(h(rt),(function(t){D(t)})),n({target:z,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=G(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),K){var pt=!s||f((function(){var t=G();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,c=[t],i=1;while(arguments.length>i)c.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),c[1]=e,K.apply(null,c)}})}G[B][M]||k(G[B],M,G[B].valueOf),I(G,z),J[$]=!0},b727:function(t,e,r){var n=r("0366"),c=r("44ad"),i=r("7b0b"),o=r("50c4"),a=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(v,p,m,y){for(var j,g,h=i(v),O=c(h),w=n(p,m,3),S=o(O.length),x=0,_=y||a,P=e?_(v,S):r||d?_(v,0):void 0;S>x;x++)if((b||x in O)&&(j=O[x],g=w(j,x,h),t))if(e)P[x]=g;else if(g)switch(t){case 3:return!0;case 5:return j;case 6:return x;case 2:s.call(P,j)}else switch(t){case 4:return!1;case 7:s.call(P,j)}return l?-1:u||f?f:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),c=r("83ab"),i=r("da84"),o=r("5135"),a=r("861d"),s=r("9bf2").f,u=r("e893"),f=i.Symbol;if(c&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var b=d.prototype=f.prototype;b.constructor=d;var v=b.toString,p="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=v.call(t);if(o(l,t))return"";var r=p?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=chunk-9d28afbe.ff409578.js.map