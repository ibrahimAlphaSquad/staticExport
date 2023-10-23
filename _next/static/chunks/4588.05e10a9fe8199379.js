"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4588,4085],{9037:function(e,t,l){l.r(t),l.d(t,{default:function(){return O}});var n=l(9499),s=l(29),r=l(7794),a=l.n(r),i=l(7294),d=l(5152),o=l.n(d),c=l(7886);l(374);var u=l(791),x=l(8831),m=l(2076),f=l(2141),p=l(39),g=l(5460),h=l(9173),v=l(1248),w=l(4085),j=l(5532),y=l(9779),b=l(1681),C=l(9139),k=l(1163),N=l(4512),L=l(5893);function S(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,n)}return l}function _(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?S(Object(l),!0).forEach(function(t){(0,n.Z)(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):S(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}var E=o()(function(){return l.e(9195).then(l.bind(l,9195))},{loadableGenerated:{webpack:function(){return[9195]}}}),R=o()(function(){return l.e(5855).then(l.bind(l,5855))},{loadableGenerated:{webpack:function(){return[5855]}}}),H=o()(function(){return l.e(2736).then(l.bind(l,2736))},{loadableGenerated:{webpack:function(){return[2736]}}}),I=o()(function(){return l.e(3066).then(l.bind(l,3066))},{loadableGenerated:{webpack:function(){return[3066]}}});function O(e){var t=e.lesson,l=e.getLessonType,n=e.data,r=e.lessonEnded,d=e.setLessonEnded,o=e.courseCompleted,S=e.moduleCompleted,O=e.lessonCompleted,M=e.setLessonCompleted,T=e.setLessonLocked,D=e.updating,P=e.authorData,z=e.images,V=e.attachments,Z=e.createUpdateLessonTracking,B=(0,k.useRouter)().push,A=(0,v.I0)(),G=(0,i.useRef)(null),W=(0,i.useState)(null),Y=W[0],F=W[1],K=(0,i.useState)(0),U=K[0],q=K[1],J=(0,i.useState)(window.innerHeight),X=J[0],$=J[1],Q=(0,i.useState)(window.innerWidth),ee=Q[0],et=Q[1],el=(0,i.useState)(!0),en=el[0],es=el[1],er=(0,i.useState)(!0),ea=er[0],ei=er[1],ed=(0,i.useState)(!0),eo=ed[0],ec=ed[1],eu=(0,i.useState)({effect:"confetti",toggle:!1}),ex=eu[0],em=eu[1],ef=(0,i.useState)(null),ep=ef[0],eg=ef[1],eh=(0,i.useState)(null),ev=eh[0],ew=eh[1],ej=(0,i.useState)(null),ey=ej[0],eb=ej[1],eC=(0,v.v9)(function(e){return e.dataSlice.currentModule}),ek=(0,v.v9)(function(e){return e.dataSlice.nextLesson}),eN=(0,v.v9)(function(e){return e.dataSlice.currentCourse}),eL=(0,v.v9)(function(e){return e.dataSlice.moduleListing}),eS=(0,v.v9)(function(e){return e.dataSlice.currentLessonTracking}),e_=(0,v.v9)(function(e){return e.dataSlice.modalsToggle}),eE=(0,v.v9)(function(e){return e.dataSlice.themeMode}),eR=(0,m.w5)("balloonsReward","balloons",{elementCount:200,elementSize:18,spread:150,zIndex:100,lifetime:1e3,startVelocity:10}).reward,eH=(0,p.Z)().translate;(0,i.useEffect)(function(){r&&setTimeout(function(){ei(!1)},2e3)},[r]),(0,i.useEffect)(function(){if(window.innerWidth||window.innerHeight){var e=window.innerWidth;$(window.innerHeight),et(e)}},[window.innerHeight,window.innerWidth]),(0,i.useEffect)((0,s.Z)(a().mark(function e(){var t,l;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:z&&(ew(null!==(t=null==z?void 0:z.primary)&&void 0!==t?t:null),eb(null!==(l=null==z?void 0:z.parallaxImage)&&void 0!==l?l:null));case 1:case"end":return e.stop()}},e)})),[z]),(0,i.useEffect)(function(){eS&&eS.trackingData.id===t.id&&t.type===eS.trackingData.type&&ec(!1)},[eS]);var eI,eO=function(){var e,t=Math.round(100*document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight));if(t>=100&&(t=100,d(!0)),t<0&&(t=0),t>U){if(!eS.trackingData.data.isCompleted){var l,n=structuredClone(eS),s=null===(l=n)||void 0===l?void 0:l.trackingData;s=_(_({},s),{},{data:_(_({},s.data),{},{progressLength:t})}),n=_(_({},n),{},{progress:t,trackingData:_({},s)}),A((0,N._b)(n))}q(t)}};(0,i.useEffect)(function(){return window.addEventListener("scroll",eO),function(){window.removeEventListener("scroll",eO)}}),(0,i.useEffect)(function(){if(t){var e,l,n,s;(null==eC?void 0:null===(e=eC.meta)||void 0===e?void 0:null===(l=e.settings)||void 0===l?void 0:l.custom)&&em(null==eC?void 0:null===(n=eC.meta)||void 0===n?void 0:null===(s=n.settings)||void 0===s?void 0:s.custom),es((0,c.$k)(t));try{var r=t.content.contentSections;F(r)}catch(a){F(null)}}},[t]),(0,i.useEffect)(function(){(O||S||o)&&ex&&ex.toggle&&(null==ex?void 0:ex.effect)==="balloons"&&eR()},[ex,O,o,S]),(0,i.useEffect)(function(){if(P){var e=null;try{(e=P).name?eg(e):eg(null)}catch(t){eg(null)}}},[P]);var eM=(eI=(0,s.Z)(a().mark(function e(){var l,n,s,r,i,o,c,u;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(eS&&eS.trackingData.data.isCompleted)){e.next=4;break}eT(),e.next=10;break;case 4:return c={progress:100,trackingData:{id:i=t.id,type:t.type,data:{isCompleted:!!eS&&null!=eS&&null!==(l=eS.trackingData)&&void 0!==l&&null!==(n=l.data)&&void 0!==n&&!!n.isCompleted&&(null==eS?void 0:null===(s=eS.trackingData)||void 0===s?void 0:null===(r=s.data)||void 0===r?void 0:r.isCompleted),report:null,progressLength:100}}},e.next=8,Z(t,c);case 8:e.sent&&d(!0);case 10:case"end":return e.stop()}},e)})),function(){return eI.apply(this,arguments)});(0,i.useEffect)(function(){eE&&("light"===eE&&(document.documentElement.style.setProperty("--heading-color",u.PRIMARY_COLOR_LIGHT),document.documentElement.style.setProperty("--primary-color",u.PRIMARY_COLOR_LIGHT)),"dark"===eE&&(document.documentElement.style.setProperty("--heading-color",u.PRIMARY_DARK),document.documentElement.style.setProperty("--primary-color",u.PRIMARY_DARK)))},[eE]);var eT=function(e){!ek||S||o?eL?B("/course/".concat(eC.course.id)):B("/course-overview"):eL?l(ek,e||eC):l(ek,e||eN)},eD=function(e,t){switch(e.type){case"text":return(0,L.jsx)("div",{className:"mx-auto px-4 lg:px-[98px]",children:(0,L.jsx)("div",{className:"lg:px-0 pb-4 py-4 md:py-6 lg:py-8 xl:py-10 text-sm f-f-p !leading-leadingBody md:text-base lg:text-lg ",children:(0,L.jsx)("article",{id:"articleStyles","aria-label":"article",dangerouslySetInnerHTML:{__html:e.text}})},"text_".concat(t,"_").concat(e.type))});case"image":return(0,L.jsx)("img",{src:e.image,className:"pt-5 w-full h-auto ",alt:""},"image_".concat(t,"_").concat(e.type));case"combined":return(0,L.jsxs)("div",{className:"w-full relative ",children:[(0,L.jsx)("div",{className:"lg:absolute left-0 xl:-left-[10%] h-full top-0",children:(0,L.jsx)("div",{className:"flex flex-col items-center justify-center h-full w-full",children:(0,L.jsx)("img",{src:e.image,className:"w-full object-cover object-center lg:max-w-[320px] min-h-[400px]",alt:""},t)})}),(0,L.jsxs)("div",{className:" px-4 py-4 md:py-6 lg:py-8 xl:py-10 lg:px-[98px] mx-auto relative flex lg:flex-row flex-col items-center h-full space-x-3 justify-between",children:[(0,L.jsx)("div",{className:"w-full hidden lg:block h-full lg:w-1/2 xl:w-1/5"}),(0,L.jsx)("div",{className:"w-full lg:w-4/5 lg:min-h-[400px] !leading-leadingBody text-sm f-f-p md:text-base lg:text-lg ",children:(0,L.jsx)("article",{id:"articleStyles","aria-label":"article",dangerouslySetInnerHTML:{__html:e.text}})})]})]},"combined_".concat(t));case"leftText_rightImage":return(0,L.jsxs)("div",{className:"w-full relative ",children:[(0,L.jsx)("div",{className:"lg:absolute right-0 xl:-right-[10%] h-full top-0",children:(0,L.jsx)("div",{className:"flex flex-col items-center justify-center  h-full w-full",children:(0,L.jsx)("img",{src:e.image,className:"w-full object-cover object-center lg:max-w-[320px] min-h-[400px]",alt:""},t)})}),(0,L.jsxs)("div",{className:"px-4 py-4 md:py-6 lg:py-8 xl:py-10 lg:px-[98px] mx-auto relative flex lg:flex-row flex-col h-full items-start space-x-3 justify-between",children:[(0,L.jsx)("div",{className:"w-full lg:w-4/5 lg:min-h-[400px] text-sm f-f-p !leading-leadingBody md:text-base lg:text-lg",children:(0,L.jsx)("article",{id:"articleStyles","aria-label":"article",dangerouslySetInnerHTML:{__html:e.text}})}),(0,L.jsx)("div",{className:"w-full hidden lg:block lg:w-1/2 xl:w-1/5 h-auto "})]})]},"leftText_rightImage_".concat(t,"_").concat(e.type));case"heading_text":return(0,L.jsx)("div",{className:"mx-auto px-4 lg:pr-[80px] lg:pl-[98px]",children:(0,L.jsxs)("div",{className:"flex flex-col md:flex-row items-start justify-center md:space-x-8 lg:px-0 pb-4 py-4 md:py-6 lg:py-8 xl:py-10",children:[(0,L.jsx)("section",{dangerouslySetInnerHTML:{__html:e.heading},className:"md:w-[29%] mt-4 italic text-primary-light dark:text-primary-dark font-semibold border-b-[5px] border-primary-light dark:border-primary-dark f-f-s tracking-[2%] text-sm f-f-p !leading-leadingBody md:text-base lg:text-lg"},t),(0,L.jsx)("div",{className:"md:w-[71%] f-f-p !leading-leadingBody text-xs md:text-base lg:text-lg",children:(0,L.jsx)("article",{id:"articleStyles","aria-label":"article",className:"text-xs md:text-base lg:text-lg",dangerouslySetInnerHTML:{__html:e.text}})},t)]})},"heading_text_".concat(t,"_").concat(e.type))}};return(0,L.jsx)(f.Xu,{children:(0,L.jsxs)("div",{className:"relative w-full",children:[(0,L.jsx)("div",{className:"w-full h-full bg-cover bg-no-repeat text-white absolute inset-0 ",children:ey&&(0,L.jsxs)(f.VS,{speed:40,tag:"figure",children:[(0,L.jsx)("div",{className:"fixed h-full w-full bg-blur z-10"}),(0,L.jsx)("img",{className:"w-full object-cover h-full lg:h-auto beast",style:{zIndex:-1},src:ey,alt:""})]})}),en?(0,L.jsxs)("div",{className:" relative z-30",children:[(0,L.jsx)("div",{className:"sticky mx-auto w-full container md:bg-white md:dark:bg-darkBg h-5 top-14 lg:top-20 z-40 md:shadow-header",children:(0,L.jsx)("div",{className:"md:px-10 flex items-center justify-center",children:(0,L.jsx)(E,{total:100,completed:U,bgColor:"transparent",hidelabel:!0,height:window.innerWidth<744?"8px":"21px",fillerbgHeight:window.innerWidth<744?"100%":"20%",barColor:"".concat("light"===eE?u.PRIMARY_COLOR_LIGHT:"","  ").concat("dark"===eE?u.PRIMARY_DARK:"")})})}),(0,L.jsx)(R,{sectionBackgroundImage:ev,getLessonType:l,data:n,moduleID:t.moduleId}),(0,L.jsxs)("div",{className:"min-h-[calc(100vh-548px)]",children:[(0,L.jsx)("div",{className:"".concat(ev?"mt-40 lg:mt-56":"mt-8 lg:mt-12"),children:(0,L.jsx)("div",{className:"max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 lg:px-[98px] py-8 mb-10 w-full flex items-center",children:(0,L.jsxs)("div",{className:"flex flex-col items-center w-full py-3 space-y-2",children:[(0,L.jsx)("h1",{className:"z-30 text-start w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-40px xl:!leading-leadingHeading text-white f-f-p font-bold !font-fontHeading drop-shadow-2xl",children:t.name}),(0,L.jsx)("p",{style:{whiteSpace:"pre-wrap"},className:"z-30 text-start w-full text-xs sm:text-sm md:text-base lg:text-lg text-white f-f-p !font-fontBody lg:leading-6 !leading-leadingBody",children:t.description})]})})}),(0,L.jsxs)("div",{ref:G,className:"max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative z-20 bg-white dark:bg-dark rounded-xl",children:[Y&&Y.length?Y.map(function(e,t){return(0,L.jsx)(i.Fragment,{children:eD(e,t)},"contentSection_".concat(e.type,"_").concat(t))}):(0,L.jsx)("p",{className:"flex items-center justify-center w-full h-full py-5",children:eH.noContentFound}),V&&V.length?(0,L.jsxs)("div",{className:"py-5 md:py-10 ",children:[(0,L.jsx)("h2",{className:"text-primary-light dark:text-primary-dark f-f-s text-base font-bold",children:eH.resources}),(0,L.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8",children:(function(e,t){for(var l=[],n=0;n<e.length;n+=t){var s=e.slice(n,n+t);l.push(s)}return l})(V,5).map(function(e,t){return(0,L.jsxs)("div",{children:[" ",e.map(function(t,l){return(0,L.jsxs)("a",{role:"button",href:t.url,target:"_blank",rel:"noreferrer",className:"flex space-x-[10px] py-2 border-b border-[#CDCDCD] items-center justify-between text-primary-light dark:text-primary-dark",children:[(0,L.jsxs)("div",{className:" flex items-center justify-center space-x-4 ",children:[(0,L.jsx)("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 10.0001C2 9.58585 2.33579 9.25006 2.75 9.25006L15.3401 9.25006L13.2397 7.29966C12.9361 7.01781 12.9186 6.54326 13.2004 6.23973C13.4823 5.93619 13.9568 5.91862 14.2603 6.20047L17.7603 9.45047C17.9132 9.59238 18 9.79151 18 10.0001C18 10.2086 17.9132 10.4078 17.7603 10.5497L14.2603 13.7997C13.9568 14.0815 13.4823 14.0639 13.2004 13.7604C12.9186 13.4569 12.9361 12.9823 13.2397 12.7005L15.3401 10.7501L2.75 10.7501C2.33579 10.7501 2 10.4143 2 10.0001Z",fill:"currentColor"})}),(0,L.jsx)("p",{className:"f-f-s text-base leading-8 font-normal text-black",children:t.name})]}),(0,L.jsx)("div",{children:"LINK"===e.type?(0,L.jsxs)("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 5.50006C3.83579 5.50006 3.5 5.83585 3.5 6.25006V14.7501C3.5 15.1643 3.83579 15.5001 4.25 15.5001H12.75C13.1642 15.5001 13.5 15.1643 13.5 14.7501V10.7501C13.5 10.3358 13.8358 10.0001 14.25 10.0001C14.6642 10.0001 15 10.3358 15 10.7501V14.7501C15 15.9927 13.9926 17.0001 12.75 17.0001H4.25C3.00736 17.0001 2 15.9927 2 14.7501V6.25006C2 5.00742 3.00736 4.00006 4.25 4.00006H9.25C9.66421 4.00006 10 4.33585 10 4.75006C10 5.16427 9.66421 5.50006 9.25 5.50006H4.25Z",fill:"currentColor"}),(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.19385 12.7532C6.47175 13.0604 6.94603 13.0841 7.25319 12.8062L16.5 4.44005V7.25006C16.5 7.66427 16.8358 8.00006 17.25 8.00006C17.6642 8.00006 18 7.66427 18 7.25006V2.75006C18 2.33585 17.6642 2.00006 17.25 2.00006H12.75C12.3358 2.00006 12 2.33585 12 2.75006C12 3.16427 12.3358 3.50006 12.75 3.50006H15.3032L6.24682 11.6939C5.93966 11.9718 5.91595 12.4461 6.19385 12.7532Z",fill:"currentColor"})]}):(0,L.jsxs)("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,L.jsx)("path",{d:"M10.75 2.75006C10.75 2.33585 10.4142 2.00006 10 2.00006C9.58579 2.00006 9.25 2.33585 9.25 2.75006V11.3636L6.29526 8.23509C6.01085 7.93395 5.53617 7.92039 5.23503 8.2048C4.9339 8.48921 4.92033 8.96389 5.20474 9.26503L9.45474 13.765C9.59642 13.915 9.79366 14.0001 10 14.0001C10.2063 14.0001 10.4036 13.915 10.5453 13.765L14.7953 9.26503C15.0797 8.96389 15.0661 8.48921 14.765 8.2048C14.4638 7.92039 13.9892 7.93395 13.7047 8.23509L10.75 11.3636V2.75006Z",fill:"currentColor"}),(0,L.jsx)("path",{d:"M3.5 12.7501C3.5 12.3358 3.16421 12.0001 2.75 12.0001C2.33579 12.0001 2 12.3358 2 12.7501V15.2501C2 16.7688 3.23122 18.0001 4.75 18.0001H15.25C16.7688 18.0001 18 16.7688 18 15.2501V12.7501C18 12.3358 17.6642 12.0001 17.25 12.0001C16.8358 12.0001 16.5 12.3358 16.5 12.7501V15.2501C16.5 15.9404 15.9404 16.5001 15.25 16.5001H4.75C4.05964 16.5001 3.5 15.9404 3.5 15.2501V12.7501Z",fill:"currentColor"})]})})]},l)})]},t)})})]}):"",(0,L.jsx)("div",{className:"flex flex-col items-center justify-center my-10 text-black dark:text-white",children:ep&&(0,L.jsx)(I,_({},ep))})]})]}),(0,L.jsx)("div",{className:"max-w-3xl lg:max-w-4xl xl:max-w-5xl container mx-auto flex items-center h-full justify-end pb-10 ",children:(0,L.jsx)(g.default,{disabled:eo,icon:h._3,text:eH.nextOne,onClickHandler:function(){return!eo&&eM()}})}),O||S||o?(0,L.jsxs)("div",{onClick:function(){return T(!1)},style:{zIndex:100},className:"fixed inset-0 bg-dark bg-opacity-60",children:[ex&&null!=ex&&ex.toggle&&(null==ex?void 0:ex.effect)!=="no effects"?(0,L.jsx)("div",{style:{zIndex:100},className:"fixed inset-0 pointer-events-none",children:(null==ex?void 0:ex.effect)==="fireworks"?(0,L.jsx)(x.Fireworks,{options:{speed:4,autoresize:!0,explosion:20,acceleration:1,trace:5,gravity:.2,particles:80,delay:{min:0,max:25},brightness:{min:70,max:100}},style:{top:0,left:0,width:"100%",height:"100%",position:"fixed"}}):(null==ex?void 0:ex.effect)==="balloons"?(0,L.jsx)("div",{className:"absolute bottom-0 left-0 right-0 z-[200]",children:(0,L.jsx)("div",{className:"flex items-center justify-center",children:(0,L.jsx)("span",{id:"balloonsReward"})})}):(null==ex?void 0:ex.effect)==="confetti"?(0,L.jsx)(H,{recycle:ea,numberOfPieces:ee>=1080?300:150,width:ee,height:X,gravity:.1,wind:.01,className:"w-full h-full z-50"}):null}):null,e_?(0,L.jsx)("div",{className:"container mx-auto px-4 md:px-0 flex items-center justify-center h-full w-full",children:(0,L.jsx)("div",{className:"relative w-full lg:w-2/3 h-[486px]",children:O?(0,L.jsx)(w.default,{rounded:!0,lesson:t,getLessonType:l,moduleCompleted:S,setLessonCompleted:M,setLessonLocked:T,updating:D}):S?(0,L.jsx)(y.Z,{getLessonType:l,rounded:"md:rounded-[10px]"}):o?(0,L.jsx)(j.Z,{getLessonType:l,rounded:"md:rounded-[10px]"}):null})}):null]}):null]}):(0,L.jsx)("div",{style:{zIndex:999},className:"fixed inset-0 bg-dark bg-opacity-60",children:(0,L.jsx)("div",{className:"container mx-auto px-4 md:px-0 flex items-center justify-center h-full w-full",children:(0,L.jsx)("div",{className:"relative w-full lg:w-2/3 min-h-[486px]",children:(0,c.qA)(t)?(0,L.jsx)(b.Z,{getLessonType:l,rounded:"md:rounded-[10px]"}):(0,L.jsx)(C.Z,{lesson:t,rounded:"md:rounded-[10px]"})})})})]})})}},4085:function(e,t,l){l.r(t);var n=l(7294),s=l(7886),r=l(39),a=l(5460),i=l(9173),d=l(1248),o=l(1163),c=l(5893),u=function(e){var t,l,u,x,m=e.getLessonType,f=e.rounded,p=(e.moduleCompleted,e.updating),g=(0,o.useRouter)().push,h=(0,d.v9)(function(e){return e.dataSlice.currentModule}),v=(0,d.v9)(function(e){return e.dataSlice.nextLesson}),w=(0,d.v9)(function(e){return e.dataSlice.currentCourse}),j=(0,d.v9)(function(e){return e.dataSlice.moduleListing}),y=(0,d.v9)(function(e){return e.dataSlice.modalsMeta}),b=(0,d.v9)(function(e){return e.dataSlice.courseSettings});console.log("LessonEndedPopUp",{currentModule:h,nextLesson:v,currentCourse:w,moduleListing:j,modalsMeta:y,modalDefault:b});var C=(0,r.Z)().translate,k=(0,n.useState)(0),N=k[0],L=k[1];(0,n.useEffect)(function(){b&&L((0,s.DT)(b.ModuleCompletion.image.length))},[b]);var S=function(){v?j?m(v,h):m(v,w):g(j?"/course/".concat(h.course.id):"/course-overview")};return(0,c.jsx)(n.Fragment,{children:(0,c.jsx)("div",{className:"fixed md:absolute inset-0 bg-white dark:bg-darkBg z-40 md:w-full h-screen md:h-auto flex justify-center items-center ".concat(void 0!==f&&f?"md:rounded-[10px]":"xl:rounded-t-lg xl:rounded-tr-none drop-shadow-wmo-20px md:rounded-[10px] xl:rounded-l-lg xl:rounded-r-none "),children:(0,c.jsxs)("div",{className:"flex flex-col sm:w-10/12 w-full px-4 md:flex-row justify-center items-center md:items-start md:space-x-14",children:[(0,c.jsx)("div",{className:"flex flex-shrink-0 items-center justify-center h-120px w-120px rounded-full border-4 border-[#ECECEC]",children:(0,c.jsx)("img",{alt:"lesson completion",className:"rounded-full object-cover object-center h-full w-full",src:b&&null!=b&&null!==(t=b.LessonCompletion)&&void 0!==t&&null!==(l=t.image)&&void 0!==l&&l.length?b.LessonCompletion.image[N]:"/assets/images/gif1.gif"})}),(0,c.jsxs)("div",{className:"md:text-left text-center flex flex-col justify-center items-center md:justify-start md:items-start p-5 md:p-0 md:pr-3 lg:pr-0 ",children:[(0,c.jsxs)("p",{className:"text-primary-light dark:text-primary-dark f-f-p font-bold text-2xl leading-8",children:[b&&null!=b&&null!==(u=b.LessonCompletion)&&void 0!==u&&u.title?b.LessonCompletion.title:C.congrats,(0,c.jsx)("br",{}),(0,c.jsx)("span",{className:"f-f-s text-base leading-6 font-normal text-black dark:text-white",children:b&&null!=b&&null!==(x=b.LessonCompletion)&&void 0!==x&&x.description?(0,s.nJ)(y,b.LessonCompletion.description):C.completedThisLesson})]}),(0,c.jsxs)("h1",{className:"break-words pt-5 text-center md:text-left",children:[" ",v?(0,c.jsxs)("span",{className:"text-black dark:text-white text-base leading-6 font-normal f-f-s",children:[C.continueWith," ",(0,c.jsx)("br",{})," ",(0,c.jsx)("span",{className:" text-primary-light dark:text-primary-dark text-base leading-6 font-bold text-center",children:v&&v.name})]}):null]}),(0,c.jsx)("div",{className:"relative mt-10 md:mt-5",children:(0,c.jsx)(a.default,{icon:i._3,text:C.nextOne,disabled:p,onClickHandler:function(){return!p&&S()}})})]})]})})})};t.default=u}}]);