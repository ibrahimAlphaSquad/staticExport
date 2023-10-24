"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3493,3562],{3562:function(e,t,r){r.r(t),r(7294);var n=r(5893),a=function(e){var t=e.type,r=void 0===t?"":t,a=e.placeholder,o=void 0===a?"placeholder":a,i=e.value,s=e.required,l=void 0!==s&&s,c=e.id,d=void 0===c?"Wachtwoord":c,u=e.onChange,p=e.role,f=e.ariaLabel,h=void 0===f?"":f,m=e.moreClasses,x=e.disabled;return e.autoFocus,(0,n.jsx)("div",{className:"relative w-full",children:"password"===r?(0,n.jsx)("input",{onChange:function(e){u(e)},type:r,role:p,name:o,"aria-label":h,id:d,required:l,autoComplete:"new-password",className:"border-[1px] border-[#CDCDCD] pl-4 pr-9 py-[10px] placeholder:text-[#888888] f-f-s font-normal text-base leading-6 focus:outline-2 focus:outline-primary-light dark:focus:outline-primary-dark rounded-[10px] w-full bg-white text-[#282828] ".concat(m),placeholder:o,disabled:x}):(0,n.jsx)("input",{onChange:function(e){u(e)},type:r,value:void 0===i?"":i,role:p,"aria-label":h,id:d,required:l,autoComplete:"new-password",className:"".concat(x?"disabled:cursor-not-allowed disabled:bg-[#e2e2e2]":""," border-[1px] border-[#CDCDCD] px-4 py-[10px] placeholder:text-[#888888] f-f-s font-normal text-base leading-6 focus:outline-2 focus:outline-primary-light dark:focus:outline-primary-dark rounded-[10px] w-full bg-white text-[#282828] ").concat(m),placeholder:o,disabled:x})})};t.default=a},3493:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(9499),a=r(29),o=r(6835),i=r(7794),s=r.n(i),l=r(7294),c=r(8367),d=r(1163),u=r(1664),p=r.n(u),f=r(791),h=r(39),m=r(3562),x=r(674),g=r(1248),b=r(4512),w=r(4376);r(3299);var v=r(5893);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function k(){var e=(0,g.I0)(),t=(0,d.useRouter)(),r=(0,l.useState)(0),i=r[0],u=r[1],k=(0,x.Fe)(),j=(0,o.Z)(k,1)[0],C=(0,l.useState)(!1),N=C[0],E=C[1],I=(0,l.useState)(!1),S=I[0],D=I[1],B=(0,l.useState)(!1),L=B[0],O=B[1],T=(0,l.useState)(""),M=T[0],P=T[1],Z=(0,l.useState)(!1),A=Z[0],_=Z[1],W=(0,l.useState)(!1),R=W[0],z=W[1],V=(0,l.useState)(!1),q=V[0],F=V[1],Y=(0,l.useState)(null),G=Y[0],U=Y[1],H=(0,l.useState)({email:void 0,password:void 0}),K=H[0],X=H[1],J=(0,l.useState)(null);J[0],J[1];var Q=(0,g.v9)(function(e){return e.dataSlice.auth}),$=(0,g.v9)(function(e){return e.dataSlice.user}),ee=(0,g.v9)(function(e){return e.dataSlice.userVerified}),et=(0,g.v9)(function(e){return e.dataSlice.appDefaults}),er=(0,w.iq)(),en=(0,o.Z)(er,1)[0],ea=(0,x.yY)(),eo=(0,o.Z)(ea,1)[0],ei=(0,w.Es)(),es=(0,o.Z)(ei,1)[0],el=(0,g.v9)(function(e){return e.dataSlice.courses}),ec=t.query.error,ed=(0,h.Z)().translate;function eu(){return ep.apply(this,arguments)}function ep(){return(ep=(0,a.Z)(s().mark(function r(){var n;return s().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(el&&0===el.all.length)){r.next=6;break}return r.next=3,es().unwrap().catch(function(e){console.log("err: Failed to fetch",e),E(!1)});case 3:r.t0=r.sent,r.next=7;break;case 6:r.t0=el;case 7:(n=r.t0)&&(e((0,b.sL)(n)),1==n.all.length?(e((0,b.KB)(!0)),P(null),E(!1),ef(n.all[0])):t.push("/course-overview"));case 9:case"end":return r.stop()}},r)}))).apply(this,arguments)}(0,l.useEffect)(function(){ec&&(O(ec),setTimeout(function(){O(null)},5e3))},[ec]),(0,l.useEffect)(function(){Q&&$&&$.verified&&$.enabled&&($.onboarded?(P("Logging in, please wait.."),E(!0),X({email:$.email}),eu()):t.push("/complete-profile"))},[Q,$]);var ef=function(e){t.push("/course/".concat(e.id))};function eh(){return{width:window.innerWidth}}(0,l.useEffect)(function(){ee&&(z(!0),F(!0))},[ee]),(0,l.useEffect)(function(){et&&U(et.verification_success_text)},[et]);var em,ex,eg,eb,ew,ev=(ex=(em=(0,l.useState)(eh()))[0],eg=em[1],(0,l.useEffect)(function(){function e(){eg(eh())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),ex).width,ey=function(e){switch(e){case"User does not exist.":O("".concat(ed.userDoesNotExist));break;case"User email or password is not correct.":case"Incorrect username or password.":O("".concat(ed.incorrectUsernameOrPassword));break;case"The user is not authenticated":O("".concat(ed.theUserIsNotAuthenticated));break;default:O(e)}},ek=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},K);switch(O(null),t){case"email":r.email=e;break;case"password":r.password=e}X(r)},ej=(eb=(0,a.Z)(s().mark(function r(n){var a,o;return s().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:n.preventDefault(),O(null),N||(S?(E(!0),eo({email:a=K.email,password:K.password}).unwrap().then(function(r){localStorage.setItem("auth",!0),localStorage.setItem("token",r.accessToken),en().unwrap().then(function(n){n.enabled?(e((0,b.o4)(r.accessToken)),e((0,b.av)(n)),n.verified?n.onboarded?(E(!1),eu()):t.push("/complete-profile"):(O("".concat(ed.accountUnverifiedPleaseCheckInbox)),E(!1))):(O("".concat(ed.accountDisabledPleaseContactSupport)),E(!1))}).catch(function(e){console.error(e),E(!1)})}).catch(function(e){var t;console.error("Erorr is :",e),ey(null===(t=e.data)||void 0===t?void 0:t.message),setTimeout(function(){O(null)},5e3),E(!1)})):D(!0));case 3:case"end":return r.stop()}},r)})),function(e){return eb.apply(this,arguments)}),eC=function(e){e.preventDefault(),O(null),j(null==K?void 0:K.email).unwrap().then(function(){P("".concat(ed.verificationEmailSentSuccessfully)),setTimeout(function(){P(null)},3e3)}).catch(function(e){O("".concat(ed.cannotSendVerificationEmailAtThisTime)),setTimeout(function(){O(null)},3e3),console.error(e)})},eN=function(){document.getElementById("email").setCustomValidity("".concat(ed.includeAnInTheEmailAddress));var e=document.getElementById("password");null==e||e.setCustomValidity("".concat(ed.pleaseFillInThisField))},eE=function(){var e=document.getElementById("email");null==e||e.setCustomValidity("");var t=document.getElementById("password");null==t||t.setCustomValidity("")},eI=(ew=(0,a.Z)(s().mark(function e(){var t,r;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=gapi.auth2.getAuthInstance().signIn(),console.log({s:r});case 3:case"end":return e.stop()}},e)})),function(){return ew.apply(this,arguments)});return(0,v.jsxs)(v.Fragment,{children:[R&&(0,v.jsxs)("div",{className:"absolute z-10 h-10 right-0 left-0 top-0 text-white bg-primary-light  flex items-center justify-center w-full ".concat(q&&"fadeInDownModal"," ").concat(!q&&"fadeInUpModal"),children:[(0,v.jsx)("p",{className:"text-sm leading-4 !leading-leadingBody capitalize f-f-s text-white",children:G||"".concat(ed.yourEmailAddressHasBeenConfirmedYouCanLogIn," \uD83D\uDE04")}),(0,v.jsx)("svg",{role:"button","aria-label":"close announcement modal",onClick:function(){return F(!1)},className:"cursor-pointer absolute right-4",width:"14",height:"14",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M16 2L2 16M2 2L16 16",stroke:"currentColor",strokeWidth:"3"})})]}),(0,v.jsx)("div",{style:{backgroundImage:"url(".concat(ev>=480?'"'.concat(f.PRIMARY_BACKGROUND,'"'):"",")")},className:"bg-white smp:bg-body bg-no-repeat bg-cover bg-center  relative w-full min-h-screen z-0 smp:dark:bg-bodyDark dark:bg-dark transition-all ease-in-out duration-300 py-12 justify-between flex flex-col",children:(0,v.jsxs)("div",{className:"flex flex-col items-center h-full",children:[(0,v.jsx)("div",{className:"flex items-center justify-center mb-12",children:(0,v.jsx)(p(),{id:"logo",href:"/",children:(0,v.jsxs)("a",{className:"w-28 md:w-32 lg:w-36 xl:w-40",children:[(0,v.jsx)("img",{className:"dark:hidden object-cover object-center w-full",src:f.PRIMARY_LOGO,alt:"img"}),(0,v.jsx)("img",{className:"hidden dark:block object-cover object-center w-full",src:f.PRIMARY_LOGO_WHITE,alt:"img"})]})})}),(0,v.jsxs)("form",{name:"login",id:"login-form","data-required-message":"".concat(ed.pleaseFillInThisField),"aria-label":"login-form",onSubmit:function(e){return ej(e)},className:"sm:bg-white dark:bg-dark max-w-[382px] w-full p-6 flex flex-col space-y-4 sm:login-box-shadow rounded-lg mb-12",children:[(0,v.jsxs)("p",{className:"f-f-s font-semibold !font-fontBody text-sm text-center text-slate-800 dark:text-white",children:[f.SIGN_IN_TEXT?f.SIGN_IN_TEXT:ed.loginWith," "," ",(0,v.jsx)("span",{translate:"no",className:"notranslate uppercase",children:f.APP_TITLE})]}),et&&et.toogleSignIn&&et.tooltipSigninText?(0,v.jsx)("div",{onMouseEnter:function(){return u(1)},onMouseLeave:function(){return u(0)},className:"flex justify-center items-cente f-f-s cursor-default relative w-full xl:py-0 xl:pb-2 2xl:pb-2",children:(0,v.jsxs)("div",{className:"flex justify-center md:px-0 py-2 fatfrank text-xs font-normal",children:[(0,v.jsx)("p",{children:ed.howDoesItWork}),(0,v.jsxs)("div",{className:"w-5 h-5",children:[(0,v.jsxs)("svg",{width:"18",height:"18",className:"pl-1 pb-1 cursor-pointer",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M9.56213 8.25073C9.56213 7.94007 9.31029 7.68823 8.99963 7.68823C8.68897 7.68823 8.43713 7.94007 8.43713 8.25073V12.7507C8.43713 13.0614 8.68897 13.3132 8.99963 13.3132C9.31029 13.3132 9.56213 13.0614 9.56213 12.7507V8.25073Z",fill:"#475569"}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99963 0.938232C4.54684 0.938232 0.937134 4.54794 0.937134 9.00073C0.937134 13.4535 4.54684 17.0632 8.99963 17.0632C13.4524 17.0632 17.0621 13.4535 17.0621 9.00073C17.0621 4.54794 13.4524 0.938232 8.99963 0.938232ZM2.06213 9.00073C2.06213 5.16926 5.16816 2.06323 8.99963 2.06323C12.8311 2.06323 15.9371 5.16926 15.9371 9.00073C15.9371 12.8322 12.8311 15.9382 8.99963 15.9382C5.16816 15.9382 2.06213 12.8322 2.06213 9.00073Z",fill:"#475569"}),(0,v.jsx)("path",{d:"M9.74963 6.00073C9.74963 6.41495 9.41384 6.75073 8.99963 6.75073C8.58542 6.75073 8.24963 6.41495 8.24963 6.00073C8.24963 5.58652 8.58542 5.25073 8.99963 5.25073C9.41384 5.25073 9.74963 5.58652 9.74963 6.00073Z",fill:"#475569"})]}),(0,v.jsxs)("div",{role:"tooltip",className:"".concat(i?"opacity-1":"opacity-0"," text-center rounded-xl w-[45%] bg-[#d6d9de] z-20 transition duration-500 ease-in-out absolute -right-12 top-0 pointer-events-none shadow-lg p-4 text-black rounded-t-lg  "),children:[(0,v.jsx)("svg",{className:"absolute -left-3",width:"14",height:"28",viewBox:"0 0 14 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M14 0C14 0 13.9999 30.2522 14 27.8659C14.0001 25.4796 14.0001 23.0933 11.0001 19.5138C9.00986 17.1392 3.93895 11.0888 0.750696 7.28475C-0.340208 5.98314 0.587472 4.00275 2.28579 4.00275L6 4.00275C6 4.00275 9.49999 4.00275 12 4.00275C14.0001 4.00275 14 0 14 0Z",fill:"#DBDEE3"})}),(0,v.jsx)("p",{className:"text-xs leading-4 w-full break-words",children:"".concat(et.tooltipSigninText)})]})]})]})}):null,(0,v.jsx)("div",{className:"flex flex-col w-full space-y-2",children:(0,v.jsxs)("div",{id:"signin-button",role:"button",onClick:function(){return eI()},className:"py-3 focus:outline-none flex flex-row justify-center items-center w-full bg-white rounded-[10px] border border-[#CBD5E1]",children:[(0,v.jsx)("img",{className:"w-35 h-35",src:"/assets/images/google.png"}),(0,v.jsx)("p",{className:"pl-6 f-f-s font-normal text-base text-black !leading-leadingBody",children:ed.continuewithGoogle})]})}),(0,v.jsx)("p",{className:"f-f-s font-normal !font-fontBody text-sm text-black dark:text-white text-center uppercase",children:ed.or}),(0,v.jsxs)("div",{className:"flex flex-col w-full space-y-2",children:[(0,v.jsx)(m.default,{autoComplete:"username",onInvalid:function(){return eN()},id:"email",value:K.email,onChange:function(e){ek(e.target.value,"email"),eE()},type:"email",required:!0,placeholder:"".concat(ed.enterYourEmailAddress)}),(0,v.jsx)(c.LG,{top:!0,spy:S,duration:500,delay:0,children:(0,v.jsxs)("div",{className:"relative w-full ".concat(S?"block ":"hidden"),children:[(0,v.jsx)(m.default,{onInvalid:function(){return eN()},type:A?"text":"password",placeholder:ed.enterPassword,id:"Wachtwoord",moreClasses:"".concat(S?"":"hidden"),autoComplete:"new-password",value:K.password,onChange:function(e){ek(e.target.value,"password"),eE()},required:!!S}),A?(0,v.jsx)("svg",{id:"hide-password",role:"button",onClick:function(){return _(!1)},className:"absolute right-3 top-3 w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#282828",children:(0,v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,v.jsxs)("svg",{role:"button",id:"view-password",onClick:function(){return _(!0)},className:"absolute right-3 top-3",width:25,height:25,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M2.53623 12.8224C2.46715 12.6151 2.46709 12.3907 2.53605 12.1834C3.92441 8.00972 7.86147 5 12.5015 5C17.1394 5 21.0749 8.00692 22.465 12.1776C22.5341 12.3849 22.5342 12.6093 22.4652 12.8166C21.0768 16.9903 17.1398 20 12.4997 20C7.86188 20 3.92632 16.9931 2.53623 12.8224Z",stroke:"#282828",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M15.5007 12.5C15.5007 14.1569 14.1575 15.5 12.5007 15.5C10.8438 15.5 9.50068 14.1569 9.50068 12.5C9.50068 10.8431 10.8438 9.5 12.5007 9.5C14.1575 9.5 15.5007 10.8431 15.5007 12.5Z",stroke:"#282828",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]}),(0,v.jsxs)("p",{className:"f-f-s text-black dark:text-white text-sm !leading-leadingBody text-center",children:[ed.forgotYourPassword," ",(0,v.jsx)(p(),{id:"reset-password",href:"/reset-password",children:(0,v.jsx)("a",{children:(0,v.jsx)("span",{className:"capitalize font-semibold !font-fontBody text-primary-light dark:text-primary-dark",children:ed.resetPassword})})})]}),(0,v.jsxs)("button",{id:"submit-form",type:"submit",disabled:!K.email||N,className:"min-w-[84px] f-f-s outline-none bg-primary-light dark:bg-primary-dark active:bg-primary-light-active active:bg-opacity-100 dark:active:bg-primary-dark-active dark:active:bg-opacity-100 hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover cursor-pointer focus:bg-opacity-70 focus:bg-primary-light dark:focus:bg-opacity-70 dark:focus:bg-primary-dark\n                                border dark:border-primary-dark border-primary-light active:border-primary-light-active dark:active:border-primary-dark-active active:border-opacity-100 dark:active:border-opacity-100 hover:border-primary-light-hover dark:hover:border-primary-dark-hover focus:border-opacity-70 focus:border-primary-light dark:focus:border-opacity-70 dark:focus:border-primary-dark\n                                text-white dark:text-black text-base px-3 py-2 lg:py-3 md:px-5 leading-6 rounded-[10px] disabled:cursor-not-allowed disabled:bg-[#888888] disabled:border-[#888888] dark:disabled:border-[#888888] disabled:text-white dark:disabled:bg-[#888888] transition-all duration-400 ease-in-out font-bold",children:[(0,v.jsx)("span",{className:"capitalize ".concat(S?"":"hidden"),children:ed.login}),(0,v.jsx)("span",{className:"".concat(S&&"hidden"),children:ed.loginWithEmail})]}),L||M?(0,v.jsxs)("div",{className:"text-center text-xs ".concat(L?"text-red-500":"text-primary-light"," "),children:[(0,v.jsx)("p",{children:L||null}),L&&L.includes("not verified")&&(0,v.jsx)("p",{role:"button",onClick:function(e){return eC(e)},className:"text-primary-light dark:text-primary-dark !font-fontBody text-sm font-bold leading-[22px] !leading-leadingBody text-center mt-1",children:ed.resendVerificationEmail}),M||null]}):null,(0,v.jsx)(p(),{id:"signup",href:"/signup",children:(0,v.jsxs)("a",{className:"text-black dark:text-white  text-sm !leading-leadingBody text-center f-f-s",children:[ed.noAccountYet," ",(0,v.jsx)("span",{className:"font-semibold !font-fontBody text-primary-light dark:text-primary-dark capitalize",children:ed.registerNow})]})})]})]})})]})}}}]);