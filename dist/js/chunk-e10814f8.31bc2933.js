(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e10814f8"],{"25f9":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"px-4 py-4 mx-auto max-w-screen-xl"},r=Object(a["j"])("div",{class:"pt-3 text-2xl font-semibold text-center md:text-3xl"}," Врачи ",-1),s={key:0,class:"items-center justify-center mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 grid-flow-row max-w-max"};function i(e,t,c,i,l,o){var f=Object(a["D"])("staff-card"),b=Object(a["D"])("loading-container");return Object(a["w"])(),Object(a["g"])("div",n,[r,i.staff_members.length>0?(Object(a["w"])(),Object(a["g"])("div",s,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["B"])(i.staff_members,(function(e){return Object(a["w"])(),Object(a["g"])(f,{key:e,staff_member:e,class:"h-full max-w-max"},null,8,["staff_member"])})),128))])):(Object(a["w"])(),Object(a["g"])(b,{key:1,loading_title:"Загрузка персонала..."},null,8,["loading_title"]))])}var l=c("5502"),o=(c("b0c0"),{class:"flex flex-col justify-between h-full max-w-xs px-4 py-3 mx-auto bg-gray-100 rounded-md"}),f={class:"h-48"},b={class:"mt-4"},m={class:"text-xl font-semibold text-center"},d={class:"mt-2 text-lg text-right text-gray-600"},j={class:"mt-2 text-lg tracking-wide text-gray-600"},u=Object(a["j"])("div",{class:"px-8 py-3 mx-auto mt-4 text-lg font-semibold tracking-wide text-white bg-black cursor-pointer select-none max-w-max rounded-xl"}," Записаться на прием ",-1);function g(e,t,c,n,r,s){return Object(a["w"])(),Object(a["g"])("div",null,[Object(a["j"])("div",o,[Object(a["j"])("div",null,[Object(a["j"])("div",f,[Object(a["j"])("img",{src:c.staff_member.imgsrc[0],class:"object-contain w-full h-full rounded-md"},null,8,["src"])]),Object(a["j"])("div",b,[Object(a["j"])("span",m,Object(a["H"])(c.staff_member.name),1),Object(a["j"])("div",d,Object(a["H"])(c.staff_member.working_years),1),Object(a["j"])("div",j,Object(a["H"])(c.staff_member.scope),1)])]),u])])}var x={name:"StaffCard",props:{staff_member:Object},setup:function(){var e="https://novostipmr.com/sites/default/files/filefield_paths/rpror.jpg";return{member_image:e}}};x.render=g;var O=x,p=c("a3fe"),w={components:{StaffCard:O,LoadingContainer:p["a"]},name:"StaffPage",setup:function(){var e=Object(l["b"])(),t=Object(a["e"])((function(){return e.state.staff.staff_members}));return{staff_members:t}}};w.render=i;t["default"]=w},a3fe:function(e,t,c){"use strict";var a=c("7a23"),n={class:"flex flex-col items-center justify-center"},r={class:"mb-3 text-lg font-medium tracking-wider"};function s(e,t,c,s,i,l){var o=Object(a["D"])("Icon");return Object(a["w"])(),Object(a["g"])("div",n,[Object(a["j"])("div",r,Object(a["H"])(c.loading_title),1),Object(a["j"])(o,{icon:"eos-icons:bubble-loading",width:"45"})])}var i=c("5779"),l={name:"LoadingContainer",props:{loading_title:String},components:{Icon:i["a"]}};l.render=s;t["a"]=l}}]);
//# sourceMappingURL=chunk-e10814f8.31bc2933.js.map