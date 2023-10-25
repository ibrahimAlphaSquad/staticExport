(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2786,3562],{3562:function(e,t,o){"use strict";o.r(t),o(7294);var r=o(5893),a=function(e){var t=e.type,o=void 0===t?"":t,a=e.placeholder,n=void 0===a?"placeholder":a,l=e.value,i=e.required,s=void 0!==i&&i,c=e.id,d=void 0===c?"Wachtwoord":c,u=e.onChange,f=e.role,p=e.ariaLabel,h=void 0===p?"":p,x=e.moreClasses,m=e.disabled;return e.autoFocus,(0,r.jsx)("div",{className:"relative w-full",children:"password"===o?(0,r.jsx)("input",{onChange:function(e){u(e)},type:o,role:f,name:n,"aria-label":h,id:d,required:s,autoComplete:"new-password",className:"border-[1px] border-[#CDCDCD] pl-4 pr-9 py-[10px] placeholder:text-[#888888] f-f-s font-normal text-base leading-6 focus:outline-2 focus:outline-primary-light dark:focus:outline-primary-dark rounded-[10px] w-full bg-white text-[#282828] ".concat(x),placeholder:n,disabled:m}):(0,r.jsx)("input",{onChange:function(e){u(e)},type:o,value:void 0===l?"":l,role:f,"aria-label":h,id:d,required:s,autoComplete:"new-password",className:"".concat(m?"disabled:cursor-not-allowed disabled:bg-[#e2e2e2]":""," border-[1px] border-[#CDCDCD] px-4 py-[10px] placeholder:text-[#888888] f-f-s font-normal text-base leading-6 focus:outline-2 focus:outline-primary-light dark:focus:outline-primary-dark rounded-[10px] w-full bg-white text-[#282828] ").concat(x),placeholder:n,disabled:m})})};t.default=a},2786:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return L}});var r=o(29),a=o(9499),n=o(6835),l=o(7794),i=o.n(l),s=o(7294),c=o(8367),d=o(1664),u=o.n(d),f=o(791),p=o(39),h=o(7886),x=o(3562),m=o(674),g=o(1248),v=o(4376),y=o(1163),b=o(4512),w=o(6426),j=o(5893);function C(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function k(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?C(Object(o),!0).forEach(function(t){(0,a.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function L(){var e=(0,g.I0)(),t=(0,y.useRouter)(),o=(0,g.v9)(function(e){return e.dataSlice.user}),a=(0,g.v9)(function(e){return e.dataSlice.appDefaults}),l=(0,v.y6)(),d=(0,n.Z)(l,1)[0],C=(0,s.useState)(0),L=C[0],N=C[1],_=(0,s.useState)(!1),E=_[0],S=_[1],T=(0,s.useState)(!1),M=T[0],B=T[1],P=(0,s.useState)(null),O=P[0],R=P[1],I=(0,s.useState)(!1),A=I[0],D=I[1],Z=(0,s.useState)(""),V=Z[0],U=Z[1],W=(0,s.useState)(""),G=W[0],q=W[1],F=(0,s.useState)(!1),z=F[0],H=F[1],K=(0,s.useState)(!1),Y=K[0],X=K[1],J=(0,m.B)(),Q=(0,n.Z)(J,1)[0],$=(0,m.Fe)(),ee=(0,n.Z)($,1)[0],et=(0,s.useState)({email:"",password:""}),eo=et[0],er=et[1],ea=(0,p.Z)().translate;function en(){return{width:window.innerWidth}}var el,ei,es,ec=(ei=(el=(0,s.useState)(en()))[0],es=el[1],(0,s.useEffect)(function(){function e(){es(en())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),ei).width;(0,s.useEffect)(function(){o&&!o.verified&&(er(k(k({},eo),{},{email:o.email})),H(!0))},[o]);var ed,eu=function(e,t){var o=k({},eo);switch(R(null),t){case"email":o.email=e;break;case"password":o.password=e}er(o),ef(o.password)},ef=function(e){var t=20,o="red";e.length>=10&&/[a-z]/.test(e)&&/[A-Z]/.test(e)&&/\d/.test(e)?(t=100,o="green"):e.length>=6&&/\d/.test(e)&&(t=60,o="orange"),U(e?t:0),q(o)},ep=(ed=(0,r.Z)(i().mark(function e(t){var o,r;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),R(null),M?""===eo.password?R("".concat(ea.pleaseEnterPassword)):eo.password.length<8?R("".concat(ea.passwordMustBeAtLeastFiveCharactersLong)):(S(!0),Q({email:o=eo.email,password:eo.password}).unwrap().then(function(){H(!0),S(!1)}).catch(function(e){var t;eh(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.message),S(!1),setTimeout(function(){R("")},3e3)})):B(!0);case 3:case"end":return e.stop()}},e)})),function(e){return ed.apply(this,arguments)}),eh=function(e){"A user with the give email/username already exists."===e?R("".concat(ea.userAlreadyExists)):R(e)},ex=function(){document.getElementById("email").setCustomValidity("".concat(ea.includeAnInTheEmailAddress));var e=document.getElementById("password");null==e||e.setCustomValidity("".concat(ea.pleaseFillInThisField))},em=function(){var e=document.getElementById("email");null==e||e.setCustomValidity("");var t=document.getElementById("password");null==t||t.setCustomValidity("")},eg=function(e){e.preventDefault(),ee(null==o?void 0:o.email).unwrap().then(function(){X("".concat(ea.verificationEmailSentSuccessfully)),setTimeout(function(){X(null)},3e3)}).catch(function(e){R("".concat(ea.cannotSendVerificationEmailAtThisTime)),setTimeout(function(){R(null)},3e3),console.error(e)})},ev=(0,w.Nq)({onSuccess:function(e){console.log({codeResponse:e}),ey(e)}}),ey=function(o){var r={token:o.access_token};console.log({payload:r,data:o}),d(r).unwrap().then(function(o){localStorage.setItem("auth",!0),localStorage.setItem("token",o.accessToken),getProfile().unwrap().then(function(r){r.enabled?(e((0,b.o4)(o.accessToken)),e((0,b.av)(r)),r.onboarded?t.push("/course-overview"):t.push("/complete-profile")):googleLogout().then(function(){localStorage.removeItem("auth"),localStorage.removeItem("token"),t.push({pathname:"/login",query:{error:"Account disabled. Please contact support."}})})}).catch(function(e){console.error("err:google",e)})}).catch(function(e){console.log("goolgeAuthHandler error",e)})};return(0,j.jsx)("div",{style:{backgroundImage:"url(".concat(ec>=480?f.PRIMARY_BACKGROUND:"",")")},className:"bg-white smp:bg-body bg-no-repeat bg-cover bg-center relative w-full min-h-screen z-0 smp:dark:bg-bodyDark dark:bg-dark transition-all ease-in-out duration-300 py-12 justify-between flex flex-col",children:(0,j.jsxs)("div",{className:"flex flex-col items-center h-full",children:[(0,j.jsx)("div",{className:"flex items-center justify-center mb-12",children:(0,j.jsx)(u(),{id:"logo",href:"/",children:(0,j.jsxs)("a",{className:"w-28 md:w-32 lg:w-36 xl:w-40",children:[(0,j.jsx)("img",{className:"dark:hidden object-cover object-center w-full",src:f.PRIMARY_LOGO,alt:"img"}),(0,j.jsx)("img",{className:"hidden dark:block object-cover object-center w-full",src:f.PRIMARY_LOGO_WHITE,alt:"img"})]})})}),z?(0,j.jsxs)("div",{className:"sm:bg-white dark:bg-dark max-w-[382px] w-full p-6 flex flex-col space-y-8 sm:login-box-shadow rounded-lg mb-12 text-primary-light dark:text-primary-dark",children:[(0,j.jsx)("p",{className:"text-base leading-6 font-bold !font-fontBody text-center",children:ea.checkYourInboxToLogIn}),(0,j.jsx)("div",{className:"flex items-center justify-center",children:a&&a.verification_code_image?(0,j.jsx)("img",{className:"w-32 h-32 rounded-full object-cover",src:a.verification_code_image,alt:"logo"}):(0,j.jsxs)("svg",{width:100,height:101,viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,j.jsx)("circle",{opacity:"0.6",cx:50,cy:"50.5",r:50,fill:"#ECECEC"}),(0,j.jsx)("path",{d:"M68.125 72.8751C72.1291 72.8751 75.375 69.6292 75.375 65.6251V45.8718L58.7513 55.5914L67.1718 60.1255C68.0532 60.6001 68.3829 61.6993 67.9084 62.5806C67.4338 63.462 66.3346 63.7918 65.4532 63.3172L51.7186 55.9216C50.6457 55.3439 49.3543 55.3439 48.2814 55.9216L34.5468 63.3172C33.6654 63.7918 32.5662 63.462 32.0916 62.5806C31.6171 61.6993 31.9468 60.6001 32.8282 60.1255L41.2487 55.5913L24.625 45.8718V65.6251C24.625 69.6292 27.8709 72.8751 31.875 72.8751L68.125 72.8751Z",fill:"currentColor"}),(0,j.jsx)("path",{d:"M24.625 41.6727V39.8729C24.625 37.2057 26.0894 34.754 28.4378 33.4895L46.5628 23.7299C48.7086 22.5744 51.2914 22.5744 53.4372 23.7299L71.5622 33.4895C73.9106 34.754 75.375 37.2058 75.375 39.8729V41.6727L55.0125 53.5782L53.4372 52.7299C51.2914 51.5745 48.7086 51.5745 46.5628 52.7299L44.9875 53.5782L24.625 41.6727Z",fill:"currentColor"}),(0,j.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40.25 38.5C40.25 33.1152 44.6152 28.75 50 28.75C55.3848 28.75 59.75 33.1152 59.75 38.5C59.75 43.8848 55.3848 48.25 50 48.25C44.6152 48.25 40.25 43.8848 40.25 38.5Z",fill:"#05A760"}),(0,j.jsx)("path",{d:"M53.6103 36.686C53.8511 36.3489 53.773 35.8805 53.4359 35.6398C53.0989 35.399 52.6305 35.4771 52.3897 35.8141L49.1543 40.3437L47.5303 38.7197C47.2374 38.4268 46.7626 38.4268 46.4697 38.7197C46.1768 39.0126 46.1768 39.4875 46.4697 39.7804L48.7197 42.0304C48.8756 42.1863 49.0921 42.2657 49.3119 42.2475C49.5316 42.2293 49.7322 42.1154 49.8603 41.936L53.6103 36.686Z",fill:"white"})]})}),(0,j.jsxs)("div",{className:"flex flex-col space-y-2 ",children:[(0,j.jsxs)("p",{className:"text-black dark:text-white text-base leading-6 font-normal !leading-leadingBody f-f-s text-center px-1",children:[ea.toCompleteRegistration," ",(0,j.jsx)("span",{translate:"no",className:"notranslate f-f-s text-base leading-6 font-bold !font-fontBody",children:eo.email})," "]}),(0,j.jsx)("div",{className:"flex items-end justify-center space-x-3 text-black dark:text-white"})]}),(0,j.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,j.jsx)("p",{className:"f-f-s font-normal text-sm leading-[22px] text-center",children:ea.didnReceiveLink}),(0,j.jsx)("a",{role:"button",id:"resend-verification-email",onClick:function(e){return eg(e)},className:"text-primary-light dark:text-primary-dark !font-fontBody text-sm font-bold leading-[22px] !leading-leadingBody text-center mt-1",children:ea.reSendTheVerificationEmail}),O||Y?(0,j.jsxs)("p",{className:"".concat(O?"text-red-600":"text-green-600 "," font-semibold !font-fontBody text-xs leading-[18px] !leading-leadingBody text-center"),children:[" ",O||Y||""," "]}):null]})]}):(0,j.jsxs)("form",{name:"signup",autoComplete:void 0,role:"form",id:"signup-form","aria-label":"signup-form","data-required-message":"".concat(ea.pleaseFillInThisField),onSubmit:function(e){return ep(e)},className:"sm:bg-white dark:bg-dark max-w-[382px] w-full p-6 flex flex-col space-y-4 sm:login-box-shadow rounded-lg mb-12",children:[a&&a.toogleSignUp&&a.tooltipSignupText?(0,j.jsx)("div",{onMouseEnter:function(){return N(1)},onMouseLeave:function(){return N(0)},className:"flex justify-center items-cente f-f-s cursor-default relative w-full xl:py-0 xl:pb-2 2xl:pb-2",children:(0,j.jsxs)("div",{className:"flex justify-center md:px-0 py-2 fatfrank text-xs font-normal",children:[(0,j.jsx)("p",{children:ea.howDoesItWork}),(0,j.jsxs)("div",{className:"w-5 h-5",children:[(0,j.jsxs)("svg",{width:"18",height:"18",className:"pl-1 pb-1 cursor-pointer",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,j.jsx)("path",{d:"M9.56213 8.25073C9.56213 7.94007 9.31029 7.68823 8.99963 7.68823C8.68897 7.68823 8.43713 7.94007 8.43713 8.25073V12.7507C8.43713 13.0614 8.68897 13.3132 8.99963 13.3132C9.31029 13.3132 9.56213 13.0614 9.56213 12.7507V8.25073Z",fill:"#475569"}),(0,j.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99963 0.938232C4.54684 0.938232 0.937134 4.54794 0.937134 9.00073C0.937134 13.4535 4.54684 17.0632 8.99963 17.0632C13.4524 17.0632 17.0621 13.4535 17.0621 9.00073C17.0621 4.54794 13.4524 0.938232 8.99963 0.938232ZM2.06213 9.00073C2.06213 5.16926 5.16816 2.06323 8.99963 2.06323C12.8311 2.06323 15.9371 5.16926 15.9371 9.00073C15.9371 12.8322 12.8311 15.9382 8.99963 15.9382C5.16816 15.9382 2.06213 12.8322 2.06213 9.00073Z",fill:"#475569"}),(0,j.jsx)("path",{d:"M9.74963 6.00073C9.74963 6.41495 9.41384 6.75073 8.99963 6.75073C8.58542 6.75073 8.24963 6.41495 8.24963 6.00073C8.24963 5.58652 8.58542 5.25073 8.99963 5.25073C9.41384 5.25073 9.74963 5.58652 9.74963 6.00073Z",fill:"#475569"})]}),(0,j.jsxs)("div",{role:"tooltip",className:"".concat(L?"opacity-1":"opacity-0"," text-center rounded-xl w-[45%] bg-[#d6d9de] z-20 transition duration-500 ease-in-out absolute -right-12 top-0 pointer-events-none shadow-lg p-4 text-black rounded-t-lg "),children:[(0,j.jsx)("svg",{className:"absolute -left-3",width:"14",height:"28",viewBox:"0 0 14 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,j.jsx)("path",{d:"M14 0C14 0 13.9999 30.2522 14 27.8659C14.0001 25.4796 14.0001 23.0933 11.0001 19.5138C9.00986 17.1392 3.93895 11.0888 0.750696 7.28475C-0.340208 5.98314 0.587472 4.00275 2.28579 4.00275L6 4.00275C6 4.00275 9.49999 4.00275 12 4.00275C14.0001 4.00275 14 0 14 0Z",fill:"#DBDEE3"})}),(0,j.jsx)("p",{className:"text-xs leading-4 w-full break-words",children:"".concat(a.tooltipSignupText)})]})]})]})}):null,(0,j.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,j.jsxs)("p",{className:"f-f-s font-semibold !font-fontBody text-sm text-center text-slate-800 dark:text-white mb-2",children:[f.SIGN_UP_TEXT?f.SIGN_UP_TEXT:ea.welcometo," ",(0,j.jsx)("span",{className:"uppercase",children:f.APP_TITLE})]}),(0,j.jsxs)("div",{role:"button",id:"signup-with-google",onClick:function(){return ev()},className:"py-3 focus:outline-none flex flex-row justify-center items-center w-full bg-white rounded-[10px] border border-[#CBD5E1]",children:[(0,j.jsx)("img",{className:"w-35 h-35",src:"/assets/images/google.png"}),(0,j.jsx)("p",{className:"pl-6 text-base font-normal text-black leading-[24px] !leading-leadingBody",children:ea.continuewithGoogle})]})]}),(0,j.jsx)("p",{className:"  font-normal !font-fontBody text-base leading-6 uppercase text-black dark:text-white text-center",children:ea.or}),(0,j.jsxs)("div",{className:"flex flex-col w-full space-y-2",children:[(0,j.jsx)(x.default,{onInvalid:function(){return ex()},id:"email",value:eo.email,onChange:function(e){eu(e.target.value,"email"),em()},type:"email",required:!0,placeholder:"".concat(ea.enterYourEmailAddress)}),(0,j.jsx)(c.LG,{top:!0,spy:M,duration:500,delay:0,children:(0,j.jsxs)("div",{className:"relative ".concat(M?"block":"hidden"),children:[(0,j.jsx)(x.default,{onInvalid:function(){return ex()},id:"password",autoComplete:void 0,autoCorrect:"false",value:eo.password,onChange:function(e){eu(e.target.value,"password"),em()},type:A?"text":"password",required:!!M,placeholder:ea.enterPassword}),A?(0,j.jsx)("svg",{role:"button",id:"hide-password",onClick:function(){return D(!1)},className:"absolute right-3 top-3 w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#282828",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,j.jsxs)("svg",{role:"button",id:"view-password",onClick:function(){return D(!0)},className:"absolute right-3 top-3",width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,j.jsx)("path",{d:"M2.53623 12.8224C2.46715 12.6151 2.46709 12.3907 2.53605 12.1834C3.92441 8.00972 7.86147 5 12.5015 5C17.1394 5 21.0749 8.00692 22.465 12.1776C22.5341 12.3849 22.5342 12.6093 22.4652 12.8166C21.0768 16.9903 17.1398 20 12.4997 20C7.86188 20 3.92632 16.9931 2.53623 12.8224Z",stroke:"#282828",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,j.jsx)("path",{d:"M15.5007 12.5C15.5007 14.1569 14.1575 15.5 12.5007 15.5C10.8438 15.5 9.50068 14.1569 9.50068 12.5C9.50068 10.8431 10.8438 9.5 12.5007 9.5C14.1575 9.5 15.5007 10.8431 15.5007 12.5Z",stroke:"#282828",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,j.jsxs)("p",{className:"text-xs leading-[18px] font-normal f-f-s mt-2 text-[#4E4E4E] dark:text-gray-300",children:[ea.passwordValidationDescription,"."," "]})]})}),(0,j.jsx)(c.LG,{top:!0,spy:M,duration:500,delay:0,children:M&&(0,j.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,j.jsx)("div",{style:{width:"100%",height:"4px",backgroundColor:"lightgray",marginTop:"5px"},children:(0,j.jsx)("div",{style:{width:"calc(".concat(V>=20?100:0,"%)"),height:"100%",backgroundColor:G}})}),(0,j.jsx)("div",{style:{width:"100%",height:"4px",backgroundColor:"lightgray",marginTop:"5px"},children:(0,j.jsx)("div",{style:{width:"calc(".concat(V>=60?100:0,"%)"),height:"100%",backgroundColor:G}})}),(0,j.jsx)("div",{style:{width:"100%",height:"4px",backgroundColor:"lightgray",marginTop:"5px"},children:(0,j.jsx)("div",{style:{width:"calc(".concat(V>=100?100:0,"%)"),height:"100%",backgroundColor:G}})})]})})]}),a&&(a.terms_of_service||a.privacy_policy)?(0,j.jsxs)("p",{className:"text-black dark:text-white f-f-s text-sm leading-[22px] font-normal  !leading-leadingBody text-center",children:[ea.bySigningUpAgreeWMO," ",f.APP_TITLE?f.APP_TITLE:"Learnforce",a&&a.terms_of_service?(0,j.jsx)("span",{className:"px-1 font-semibold !font-fontBody text-primary-light dark:text-primary-dark no-underline cursor-pointer",children:(0,j.jsxs)("a",{target:"_blank",rel:"noreferrer",href:a&&a.terms_of_service?(0,h.Wh)(a.terms_of_service):"javaScript:void(0)",children:[" ",ea.conditions]})}):null,a&&a.terms_of_service&&a.privacy_policy?(0,j.jsx)("span",{className:"f-f-s text-sm leading-[22px] font-normal",children:ea.andThe}):null,a&&a.privacy_policy?(0,j.jsx)("span",{className:"px-1 font-semibold !font-fontBody text-primary-light dark:text-primary-dark no-underline cursor-pointer",children:(0,j.jsx)("a",{target:"_blank",rel:"noreferrer",href:a&&a.privacy_policy?(0,h.Wh)(a.privacy_policy):"javaScript:void(0)",children:ea.privacyPolicy})}):null]}):null,(0,j.jsxs)("button",{type:"submit",id:"submit-form",disabled:!eo.email||E,className:"min-w-[84px] f-f-s outline-none bg-primary-light dark:bg-primary-dark active:bg-primary-light-active active:bg-opacity-100 dark:active:bg-primary-dark-active dark:active:bg-opacity-100 hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover cursor-pointer focus:bg-opacity-70 focus:bg-primary-light dark:focus:bg-opacity-70 dark:focus:bg-primary-dark\n                                border dark:border-primary-dark border-primary-light active:border-primary-light-active dark:active:border-primary-dark-active active:border-opacity-100 dark:active:border-opacity-100 hover:border-primary-light-hover dark:hover:border-primary-dark-hover focus:border-opacity-70 focus:border-primary-light dark:focus:border-opacity-70 dark:focus:border-primary-dark\n                                text-white dark:text-black text-base px-3 py-2 lg:py-3 md:px-5 leading-6 rounded-[10px] disabled:cursor-not-allowed disabled:bg-[#888888] disabled:border-[#888888] dark:disabled:border-[#888888] disabled:text-white dark:disabled:bg-[#888888] transition-all duration-400 ease-in-out font-bold",children:[(0,j.jsx)("span",{className:"capitalize ".concat(!M&&"hidden"),children:"".concat(ea.register)}),(0,j.jsx)("span",{className:"".concat(M&&"hidden"),children:"".concat(ea.loginWithEmail)})]}),O?(0,j.jsx)("p",{className:"text-center text-xs ".concat(O?"text-red-500":"text-green-500"," "),children:O||null}):null,(0,j.jsx)(u(),{id:"login",href:"/login",children:(0,j.jsxs)("a",{className:"dark:text-white text-black text-sm font-normal f-f-s !leading-leadingBody text-center",children:[ea.alreadyAnAccount," ",(0,j.jsxs)("span",{className:"font-semibold text-sm leading-[22px] !font-fontBody text-primary-light dark:text-primary-dark",children:[" ",ea.login]})]})})]})]})})}},4019:function(e,t){"use strict";function o(e,t,o,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,o){"use strict";var r=o(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(2648).Z,n=o(7273).Z,l=a(o(7294)),i=o(4957),s=o(7995),c=o(647),d=o(1992),u=o(639),f=o(4019),p=o(227),h={};function x(e,t,o,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,r)).catch(function(e){});var a=r&&void 0!==r.locale?r.locale:e&&e.locale;h[t+"%"+o+(a?"%"+a:"")]=!0}}var m=l.default.forwardRef(function(e,t){var o,a,m=e.href,g=e.as,v=e.children,y=e.prefetch,b=e.passHref,w=e.replace,j=e.shallow,C=e.scroll,k=e.locale,L=e.onClick,N=e.onMouseEnter,_=e.onTouchStart,E=e.legacyBehavior,S=void 0===E?!0!==Boolean(!1):E,T=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,S&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var M=!1!==y,B=l.default.useContext(c.RouterContext),P=l.default.useContext(d.AppRouterContext);P&&(B=P);var O=l.default.useMemo(function(){var e=i.resolveHref(B,m,!0),t=r(e,2),o=t[0],a=t[1];return{href:o,as:g?i.resolveHref(B,g):a||o}},[B,m,g]),R=O.href,I=O.as,A=l.default.useRef(R),D=l.default.useRef(I);S&&(a=l.default.Children.only(o));var Z=S?a&&"object"==typeof a&&a.ref:t,V=r(u.useIntersection({rootMargin:"200px"}),3),U=V[0],W=V[1],G=V[2],q=l.default.useCallback(function(e){(D.current!==I||A.current!==R)&&(G(),D.current=I,A.current=R),U(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[I,Z,R,G,U]);l.default.useEffect(function(){var e=W&&M&&i.isLocalURL(R),t=void 0!==k?k:B&&B.locale,o=h[R+"%"+I+(t?"%"+t:"")];e&&!o&&x(B,R,I,{locale:t})},[I,R,W,k,M,B]);var F={ref:q,onClick:function(e){S||"function"!=typeof L||L(e),S&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,t,o,r,a,n,s,c,d,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(f=e).currentTarget.target)||"_self"===p)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&i.isLocalURL(o)){e.preventDefault();var f,p,h=function(){"beforePopState"in t?t[a?"replace":"push"](o,r,{shallow:n,locale:c,scroll:s}):t[a?"replace":"push"](o,{forceOptimisticNavigation:!u})};d?l.default.startTransition(h):h()}}(e,B,R,I,w,j,C,k,Boolean(P),M)},onMouseEnter:function(e){S||"function"!=typeof N||N(e),S&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),!(!M&&P)&&i.isLocalURL(R)&&x(B,R,I,{priority:!0})},onTouchStart:function(e){S||"function"!=typeof _||_(e),S&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),!(!M&&P)&&i.isLocalURL(R)&&x(B,R,I,{priority:!0})}};if(!S||b||"a"===a.type&&!("href"in a.props)){var z=void 0!==k?k:B&&B.locale,H=B&&B.isLocaleDomain&&f.getDomainLocale(I,z,B.locales,B.domainLocales);F.href=H||p.addBasePath(s.addLocale(I,z,B&&B.defaultLocale))}return S?l.default.cloneElement(a,F):l.default.createElement("a",Object.assign({},T,F),o)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,o(2648).Z)(o(7294)),a=r.default.createContext(null);t.AppRouterContext=a;var n=r.default.createContext(null);t.LayoutRouterContext=n;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;var i=r.default.createContext(null);t.TemplateContext=i},1664:function(e,t,o){e.exports=o(7942)}}]);