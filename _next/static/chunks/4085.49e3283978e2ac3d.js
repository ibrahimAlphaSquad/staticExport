"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4085],{4085:function(e,t,n){n.r(t);var s=n(7294),l=n(7886),r=n(39),o=n(5460),d=n(9173),i=n(1248),a=n(1163),c=n(5893);t.default=function(e){var t,n,u,m,x=e.getLessonType,f=e.rounded,p=void 0!==f&&f,h=(e.moduleCompleted,e.updating),g=(0,a.useRouter)().push,v=(0,i.v9)((function(e){return e.dataSlice.currentModule})),j=(0,i.v9)((function(e){return e.dataSlice.nextLesson})),b=(0,i.v9)((function(e){return e.dataSlice.currentCourse})),k=(0,i.v9)((function(e){return e.dataSlice.moduleListing})),C=(0,i.v9)((function(e){return e.dataSlice.modalsMeta})),w=(0,i.v9)((function(e){return e.dataSlice.courseSettings}));console.log("LessonEndedPopUp",{currentModule:v,nextLesson:j,currentCourse:b,moduleListing:k,modalsMeta:C,modalDefault:w});var L=(0,r.Z)().translate,N=(0,s.useState)(0),y=N[0],S=N[1];(0,s.useEffect)((function(){w&&S((0,l.DT)(w.ModuleCompletion.image.length))}),[w]);return(0,c.jsx)(s.Fragment,{children:(0,c.jsx)("div",{className:"fixed md:absolute inset-0 bg-white dark:bg-darkBg z-40 md:w-full h-screen md:h-auto flex justify-center items-center ".concat(p?"md:rounded-[10px]":"xl:rounded-t-lg xl:rounded-tr-none drop-shadow-wmo-20px md:rounded-[10px] xl:rounded-l-lg xl:rounded-r-none "),children:(0,c.jsxs)("div",{className:"flex flex-col sm:w-10/12 w-full px-4 md:flex-row justify-center items-center md:items-start md:space-x-14",children:[(0,c.jsx)("div",{className:"flex flex-shrink-0 items-center justify-center h-120px w-120px rounded-full border-4 border-[#ECECEC]",children:(0,c.jsx)("img",{alt:"lesson completion",className:"rounded-full object-cover object-center h-full w-full",src:w&&null!==w&&void 0!==w&&null!==(t=w.LessonCompletion)&&void 0!==t&&null!==(n=t.image)&&void 0!==n&&n.length?w.LessonCompletion.image[y]:"/assets/images/gif1.gif"})}),(0,c.jsxs)("div",{className:"md:text-left text-center flex flex-col justify-center items-center md:justify-start md:items-start p-5 md:p-0 md:pr-3 lg:pr-0 ",children:[(0,c.jsxs)("p",{className:"text-primary-light dark:text-primary-dark f-f-p font-bold text-2xl leading-8",children:[w&&null!==w&&void 0!==w&&null!==(u=w.LessonCompletion)&&void 0!==u&&u.title?w.LessonCompletion.title:L.congrats,(0,c.jsx)("br",{}),(0,c.jsx)("span",{className:"f-f-s text-base leading-6 font-normal text-black dark:text-white",children:w&&null!==w&&void 0!==w&&null!==(m=w.LessonCompletion)&&void 0!==m&&m.description?(0,l.nJ)(C,w.LessonCompletion.description):L.completedThisLesson})]}),(0,c.jsxs)("h1",{className:"break-words pt-5 text-center md:text-left",children:[" ",j?(0,c.jsxs)("span",{className:"text-black dark:text-white text-base leading-6 font-normal f-f-s",children:[L.continueWith," ",(0,c.jsx)("br",{})," ",(0,c.jsx)("span",{className:" text-primary-light dark:text-primary-dark text-base leading-6 font-bold text-center",children:j&&j.name})]}):null]}),(0,c.jsx)("div",{className:"relative mt-10 md:mt-5",children:(0,c.jsx)(o.default,{icon:d._3,text:L.nextOne,disabled:h,onClickHandler:function(){return!h&&void(j?x(j,k?v:b):g(k?"/course/".concat(v.course.id):"/course-overview"))}})})]})]})})})}}}]);