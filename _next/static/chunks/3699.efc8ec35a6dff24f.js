"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3699],{3699:function(e,t,r){r.r(t);var o=r(7294),s=r(8367),a=r(1664),n=r.n(a),l=r(7886),i=r(5675),d=r.n(i),c=r(9173),u=r(1248),h=r(39),x=r(5893);t.default=function(e){var t=e.id,r=e.images,a=e.name,i=e.attempted,p=e.userTrackings,g=e.course,m=e.idx,f=e.index,b=e.isLocked,k=(0,u.v9)((function(e){return e.dataSlice.moduleListing})),v=(0,o.useState)(0),j=v[0],y=v[1],w=(0,o.useState)(!1),N=w[0],C=w[1],M=(0,h.Z)().translate;return(0,o.useEffect)((function(){if(p){var e=p&&p[0],t=e&&e.progress?e.progress:0;t&&y(t),C(!(!t||100!==t))}}),[p]),(0,x.jsx)(n(),{id:"feature-course-".concat(m),href:(0,l.yM)(g)?k?"/course/".concat(t):"/course/module/".concat(t):"javascript:void(0)",children:(0,x.jsx)("a",{className:"rounded-lg transition-all duration-300 ease-in-out group overflow-hidden hover:shadow-custom",children:(0,x.jsx)(s.LG,{appear:!0,delay:25*f,spy:g,children:(0,x.jsxs)("div",{className:"relative cursor-pointer w-full h-[220px] md:h-[426px] rounded-lg text-white",children:[(0,x.jsx)("div",{className:" opacity-100 z-10 transition-all duration-300 ease-in-out absolute inset-0 background-mask w-full h-full rounded-lg "}),r&&r.primary?(0,x.jsx)(d(),{className:"object-center object-cover rounded-lg transition-all ease-in-out duration-300 group-hover:scale-105",src:r&&r.primary?r.primary:(0,l.gJ)(),layout:"fill","aria-label":"featured-course",alt:"featured-course-img"}):(0,x.jsx)("div",{className:"notfoundImg h-full",children:(0,x.jsx)("div",{className:"notfoundImg-text h-full group-hover:scale-105 transition-all duration-300 ease-in-out",children:(0,x.jsx)("h1",{className:"text-primary-light dark:text-primary-dark text-2xl md:text-3xl lg:text-4xl",children:(0,x.jsxs)("span",{children:[g.name," "]})})})}),(0,x.jsx)("div",{className:"absolute h-full w-full rounded-lg ".concat((0,l.yM)(g)?"bg-black opacity-20 rounded-lg":"bg-black opacity-20 group-hover:opacity-60 group-hover:bg-primary-light transform transition-all duration-300 ease-in-out ")}),(0,x.jsxs)("div",{className:"absolute inset-0 w-full z-10",children:[(0,x.jsx)("div",{className:"absolute right-3 top-3 ".concat(i&&j<100?"group-hover:bg-white dark:group-hover:bg-black bg-primary-light dark:bg-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark text-white dark:text-black":"group-hover:bg-white dark:group-hover:bg-black bg-primary-light dark:bg-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark text-white dark:text-black "," h-[30px] w-[30px] rounded-full"),children:(0,x.jsx)("div",{className:"flex w-full h-full items-center justify-center",children:(0,l.yM)(g)?(0,x.jsx)(o.Fragment,{children:!N&&0!==j&&j<100?(0,x.jsx)("p",{className:"f-f-s font-bold !font-fontBody text-[10px]",children:(0,l.AM)(j)}):(0!=j||N)&&100==j&&N?c.hi:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-player-play",width:"18",height:"18",viewBox:"0 0 24 24",strokeWidth:"1",stroke:"currentColor",fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,x.jsx)("path",{d:"M7 4v16l13 -8z"})]})}):(0,x.jsx)("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M12.875 7.875V5.0625C12.875 3.19854 11.364 1.6875 9.5 1.6875C7.63604 1.6875 6.125 3.19854 6.125 5.0625V7.875M5.5625 16.3125H13.4375C14.3695 16.3125 15.125 15.557 15.125 14.625V9.5625C15.125 8.63052 14.3695 7.875 13.4375 7.875H5.5625C4.63052 7.875 3.875 8.63052 3.875 9.5625V14.625C3.875 15.557 4.63052 16.3125 5.5625 16.3125Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),(0,x.jsx)("div",{className:"flex w-full h-full items-end f-f-p font-bold !font-fontBody text-white p-2 md:p-4",children:(0,x.jsx)("h1",{className:"text-base md:text-lg break-words",children:a})}),(0,x.jsx)("p",{className:"absolute bottom-0 md:bottom-8 left-2 right-2 text-white text-sm h-16 px-5 text-center ".concat((0,l.yM)(g)?"hidden":" hidden group-hover:block"),children:b?(0,x.jsx)("span",{children:M.unlockThisCourseByEnteringYourLicenseCode}):(0,l.yM)(g)?(0,x.jsxs)("span",{children:[M.complete," ",(0,x.jsxs)("span",{className:"font-bold !font-fontBody text-wmo-blue ",children:[" ",g&&g.contingent&&g.contingent.name]})," ",M.toStartThisCourse]}):(0,l.M2)(g)?(0,x.jsxs)("span",{children:[M.complete," ",(0,x.jsxs)("span",{className:"font-bold !font-fontBody text-wmo-blue ",children:[" ",g.contingent&&g.contingent.name]})," ",M.toStartThisCourse]}):(0,x.jsxs)("span",{children:[M.thisCourseIsAvailableAfter,(0,x.jsxs)("span",{className:"font-bold !font-fontBody text-wmo-blue ",children:[(0,x.jsx)("br",{})," ",g&&g.unlockingRules&&g.unlockingRules.length&&(0,l.tK)(g.unlockingRules[0].unlocksAt)]}),(0,x.jsx)("br",{})]})})]})]},m)})})},t)}}}]);