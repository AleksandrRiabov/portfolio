(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(49),i=s.n(n),r=(s(67),s(7)),l=s(6),o=s(12),j=(s(68),s(54)),d=s.n(j),m=(s(69),s(52)),b=s.n(m),h=s.p+"static/media/moviesSmall.07571d3c.png",p=s.p+"static/media/moviesMedium.2ca28da0.jpg",u=s.p+"static/media/moviesLarge.aa65c23e.jpg",O=s.p+"static/media/moviesXL.bbcb4ff6.png",x=s.p+"static/media/pToolSmall.a31e037b.png",g=s.p+"static/media/pToolMedium.6204ebe4.jpg",v=s.p+"static/media/pToolLarge.37d6e6e5.jpg",f=s.p+"static/media/pToolXL.e8a8b356.png",N=s(35),k=s.n(N),w=s(51),S=s.n(w),I=s(0),y={portfolio:[{name:"export-planning-tool",title:"Export Planning Tool",subtitle:"Designed to simplify the process of estimating the required number of trailers.",featured:!0,url:"https://guarded-savannah-03210.herokuapp.com/",github:"https://github.com/AleksandrRiabov/fs-planning-tool",technologies:["React.Js","Node.Js (Express)","MongoDB Atlas","MaterialUI","Charts.Js","Moment.Js","AJAX","react-router","Deploy on Heroku"],imgSmall:x,imgMedium:g,imgLarge:v,imgXl:f,desc:"MERN stack Application designed to simplify the process of estimating the required number of trailers. All estimates are based on the average of the five previous weeks, or specific days of the week. With app's charts, you can easily identify seasonal orders spikes, and be prepared for the growing demand.",paragraphs:["Some of the warehouses hiring other logistic companies to distribute the stock. To speed up deliveries it is beneficial to request trailers as soon as the warehouse received the order. However, it is very difficult to predict the number of trailers before the warehouse order has been fully picked and the number of pallets available. There is always a risk to request too many or not enough trailers to distribute everything. This App will help to make all estimates more accurate."]},{name:"movies",title:"Movies App",subtitle:"Ract App which use a real API to display movies.",featured:!1,url:"https://aleksandrriabov.github.io/movies/",github:"https://github.com/AleksandrRiabov/movies",technologies:["ReactJs","Responsive CSS","MaterialUI","AJAX","GitHub","react-router-dom"],imgSmall:h,imgMedium:p,imgLarge:u,imgXl:O,desc:"This App allows you to view popular, now playing and top rated movies. View Individual movie and get the movies data such as cast, movie duration, summary, recommended movies,etc. View Individual Persons and get thier details. Search for Movies using search bar.",paragraphs:["Application consuming themoviedb.org API. Some of the pages design is cloned from API provider's website."]}],socialLinks:[{name:"GitHub",icon:Object(I.jsx)(k.a,{fontSize:"inherit"}),url:"https://github.com/AleksandrRiabov",message:"Follow for open-source projects"},{name:"LinkedIn",icon:Object(I.jsx)(S.a,{fontSize:"inherit"}),url:"https://www.linkedin.com/in/aleksandr-riabov",message:"Let's connect on LinkedIn"}],links:[{name:"Home",url:"/",navLink:!0},{name:"Portfolio",url:"/portfolio",message:"View Alek's previous work",navLink:!0},{name:"About",url:"/about",message:"Learn about Alek's skills",navLink:!0},{name:"Get In Touch",url:"/contacts",message:"Send a general message",navLink:!1}]},L=function(e){var t=e.pathname,s=e.setMenuOpen;return Object(I.jsx)("div",{className:"menu",children:Object(I.jsxs)("div",{className:"menuAside",children:[Object(I.jsxs)("div",{className:"asideHeader",children:[Object(I.jsx)("div",{className:"menuSocials",children:y.socialLinks.map((function(e){return Object(I.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.icon},e.name)}))}),Object(I.jsx)("div",{onClick:function(){return s(!1)},className:"closeIcon",children:Object(I.jsx)(b.a,{fontSize:"inherit"})})]}),Object(I.jsxs)("div",{onClick:function(e){return function(e){(e.target.classList.contains("menuLink")||e.target.classList.contains("menuContactsBtn"))&&s(!1)}(e)},className:"menuLinksContainer",children:[Object(I.jsx)("ul",{className:"menuLinks",children:y.links.map((function(e){var s=e.url,c=e.name;return e.navLink?Object(I.jsx)(l.b,{to:s,children:Object(I.jsx)("li",{className:"menuLink ".concat(t===s?"menuActive":""),children:c})},c):null}))}),Object(I.jsx)(l.b,{to:"/contacts",children:Object(I.jsx)("div",{className:"menuContactsBtn",children:"Get In Touch"})})]})]})})},A=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(r.g)().pathname;return Object(I.jsx)("div",{className:"navbar",children:Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"navbarInner",children:[Object(I.jsx)("div",{className:"navbarLeft",children:Object(I.jsx)(l.b,{to:"/",children:Object(I.jsxs)("div",{className:"navbarLogo",children:[Object(I.jsx)("span",{className:"logoName",children:"A"}),"RIABOV"]})})}),Object(I.jsxs)("div",{className:"navbarRight",children:[Object(I.jsxs)("ul",{className:"navbarLinks",children:[y.links.map((function(e){var t=e.url,s=e.name;return e.navLink?Object(I.jsx)(l.b,{to:t,children:Object(I.jsx)("li",{className:n===t?"navbarActive":"navLink",children:s})},s):null})),Object(I.jsx)(l.b,{to:"/contacts",children:Object(I.jsx)("li",{className:"navbarContacts",children:"Get In Touch"})})]}),Object(I.jsxs)("div",{className:"navbarMobile",children:[Object(I.jsx)("div",{onClick:function(){return a(!0)},className:"navbarBurger",children:Object(I.jsx)(d.a,{fontSize:"inherit"})}),s&&Object(I.jsx)(L,{pathname:n,setMenuOpen:a})]})]})]})})})},M=(s(76),s.p+"static/media/Aleks.7e7c0f82.jpg"),C=function(e){var t=e.link;return Object(I.jsxs)("div",{className:"footerLink",children:[Object(I.jsxs)("div",{className:"top",children:[t.icon,Object(I.jsx)("p",{className:"linkName",children:t.name})]}),Object(I.jsx)("p",{className:"desc",children:t.message})]},t.name)},T=function(){return Object(I.jsxs)("div",{className:"footer",children:[Object(I.jsxs)("div",{className:"inner",children:[Object(I.jsx)("div",{className:"left",children:Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("div",{className:"imageWrapper",children:Object(I.jsx)("img",{src:M,alt:"Me",width:"100%"})}),Object(I.jsx)("div",{className:"about",children:Object(I.jsx)("p",{children:"I'm proactive and results oriented self-taught web development enthusiast, I have a keen interest in emerging technology and key strengths in HTML, CSS, JavaScript, React, Node.Js (Express), MongoDB."})})]})}),Object(I.jsxs)("div",{className:"right",children:[Object(I.jsx)("div",{className:"footerLinks",children:y.socialLinks.map((function(e){return Object(I.jsx)("a",{href:e.url,children:Object(I.jsx)(C,{link:e})},e.name)}))}),Object(I.jsx)("div",{className:"footerLinks internalLinks",children:y.links.map((function(e){return e.message?Object(I.jsx)(l.b,{to:e.url,children:Object(I.jsx)(C,{link:e})},e.name):""}))})]})]}),Object(I.jsx)("div",{className:"copiright",children:"\xa92021 @Sania.Riabov@gmail.com"})]})},R=s(15),E=(s(77),function(e){var t=e.title,s=void 0===t?"":t,c=e.subtitle,a=void 0===c?"":c,n=e.position,i=void 0===n?"center":n;return Object(I.jsxs)("div",{className:"titleRoot",style:{textAlign:i},children:[Object(I.jsx)("h1",{className:"title",children:s}),Object(I.jsx)("h3",{className:"subtitle",children:a})]})}),J=(s(78),s(79),function(e){var t=e.icon,s=e.title,c=e.text;return Object(I.jsx)("div",{className:"headerCard",children:Object(I.jsxs)("div",{className:"headerCardInner",children:[Object(I.jsx)("div",{className:"headerCardIcon",children:Object(I.jsx)("img",{src:t,alt:"",width:"100%"})}),Object(I.jsxs)("div",{className:"headerCardText",children:[Object(I.jsx)("h4",{className:"headrerCardTitle",children:s}),Object(I.jsx)("p",{className:"headerCardDecs",children:c})]})]})})}),P=s.p+"static/media/JS.5761b291.png",W=s.p+"static/media/nodeJs.e71346fe.png",_=s.p+"static/media/mongoDB.81169275.jpg",B=function(){return Object(I.jsx)("div",{className:"homeHeader",children:Object(I.jsxs)("div",{className:"headerInner",children:[Object(I.jsx)(J,{icon:P,title:"JavaScript",text:"I can create single page application using REACT or add interactivity to the website."}),Object(I.jsx)(J,{icon:W,title:"Node.Js",text:'Able to write back-end server for web applications using "Express" framework.'}),Object(I.jsx)(J,{icon:_,title:"MongoDB",text:"Have experience performing CRUD operations in MERN stack applications."})]})})},D={background:"#d8d8d8",margin:"1rem 0",height:"1px"},F=function(){return Object(I.jsx)("div",{style:D})},G=(s(80),function(e){var t=e.props,s=t.imgSmall,c=t.imgMedium,a=t.imgLarge,n=t.imgXl,i=t.desc,r=t.title,o=t.name;return Object(I.jsxs)("div",{className:"workPreview",children:[Object(I.jsx)("div",{className:"left",children:Object(I.jsxs)("div",{className:"inner",children:[Object(I.jsx)(l.b,{to:"/portfolio/".concat(o),children:Object(I.jsx)("div",{className:"image small",children:Object(I.jsx)("img",{src:s,alt:"",className:"screenShot"})})}),Object(I.jsx)("div",{className:"titleWrapper",children:Object(I.jsx)(l.b,{to:"/portfolio/".concat(o),children:Object(I.jsxs)("h3",{className:"title",children:[Object(I.jsx)("span",{className:"arrow",children:" > "}),r]})})}),Object(I.jsx)("p",{className:"descriptions",children:i})]})}),Object(I.jsx)("div",{className:"right",children:Object(I.jsx)(l.b,{to:"/portfolio/".concat(o),children:Object(I.jsxs)("div",{className:"inner",children:[Object(I.jsx)("div",{className:"image xl",children:Object(I.jsx)("img",{src:n,alt:"",className:"screenShot"})}),Object(I.jsx)("div",{className:"image large",children:Object(I.jsx)("img",{src:a,alt:"",className:"screenShot"})}),Object(I.jsx)("div",{className:"image medium",children:Object(I.jsx)("img",{src:c,alt:"",className:"screenShot"})})]})})})]})}),H=(s(81),function(e){var t=e.text,s=e.path,c=e.link;e.type;return c?Object(I.jsx)("div",{className:"btnWrapper",children:Object(I.jsx)("div",{className:"btn",children:Object(I.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(I.jsx)("div",{className:"inner",children:Object(I.jsxs)("p",{className:"text",children:[t||"Get In Touch"," "]})})})})}):Object(I.jsx)("div",{className:"btnWrapper",children:Object(I.jsx)("div",{className:"btn",children:Object(I.jsx)(l.b,{to:s||"/contacts",children:Object(I.jsx)("div",{className:"inner",children:Object(I.jsxs)("p",{className:"text",children:[t||"Get In Touch"," "]})})})})})}),X=function(){return Object(I.jsxs)("section",{className:"page",children:[Object(I.jsxs)("section",{children:[Object(I.jsx)(E,{title:"Web Developer",subtitle:"Hi. I\u2019m Aleks, a highly motivated, self-starting developer seeking to launch a career building web applications and services."}),Object(I.jsx)(B,{})]}),Object(I.jsx)(F,{}),Object(I.jsxs)("section",{className:"section",children:[Object(I.jsx)(E,{title:"Featured Work"}),y.portfolio.map((function(e){return e.featured?Object(I.jsx)(G,{props:Object(R.a)({},e)},e.title):null}))]}),Object(I.jsx)(H,{})]})},q=function(){return Object(I.jsxs)("section",{className:"page",children:[Object(I.jsx)(E,{title:"My Portfolio",subtitle:"See my works below. Unless explicitly stated otherwise, all their back-end and front-end parts were completely done by me.."}),y.portfolio.map((function(e){return Object(I.jsx)(G,{props:Object(R.a)({},e)},e.title)})),Object(I.jsx)(H,{text:"Get In Touch",path:"/contacts"})]})},z=(s(82),function(){return Object(I.jsxs)("section",{className:"page",children:[Object(I.jsx)(E,{title:"About Me"}),Object(I.jsxs)("div",{className:"sectionAbout",children:[Object(I.jsxs)("p",{className:"inline",children:[Object(I.jsx)("img",{src:M,alt:"web developer",className:"img"}),"I'm proactive and results oriented self-taught web development enthusiast, I have a keen interest in emerging technology and key strengths in HTML, CSS, JavaScript, React, Node.Js (Express), MongoDB."]}),Object(I.jsx)("p",{children:"In addition to my professional qualifications, I have also recently completed the \u2018The Web Developer Bootcamp\u2019 with Udemy, and I use my free time to refine these skills wherever I can. In parallel, I have proactively sought work experience where I can utilise my computer knowledge whilst developing my interpersonal and communication skills. I am now looking for a Junior Web Developer or Software Engineer role, where I can continue to learn and develop, whilst adding value to my team."})]}),Object(I.jsx)(H,{})]})}),U=(s(83),s(84),s(55)),V=s.n(U),Y=s(56),K=s.n(Y),Q=function(){return Object(I.jsx)("div",{className:"contactOptions",children:Object(I.jsxs)("div",{className:"contactOptionsInner",children:[Object(I.jsx)("div",{className:"contactOptionsSocial",children:y.socialLinks.map((function(e){var t=e.url,s=e.name,c=e.icon;return Object(I.jsx)("a",{href:t,children:Object(I.jsxs)("div",{className:"contactOptionContent contactOption",children:[Object(I.jsx)("div",{className:"contactOptionIcon",children:c}),Object(I.jsxs)("p",{children:[" ",s]})]})},s)}))}),Object(I.jsxs)("div",{className:"contactOption",children:[Object(I.jsx)("p",{className:"optionName",children:"Phone:"}),Object(I.jsxs)("div",{className:"contactOptionContent",children:[Object(I.jsx)("div",{className:"contactOptionIcon",children:Object(I.jsx)(V.a,{fontSize:"inherit"})}),Object(I.jsx)("p",{className:"phone",children:"+447946434597"})]})]}),Object(I.jsxs)("div",{className:"contactOption",children:[Object(I.jsx)("p",{className:"optionName",children:"Email:"}),Object(I.jsxs)("div",{className:"contactOptionContent",children:[Object(I.jsx)("div",{className:"contactOptionIcon",children:Object(I.jsx)(K.a,{fontSize:"inherit"})}),Object(I.jsx)("p",{className:"phone",children:"sania.riabov@gmail.com"})]})]})]})})},Z=s(11),$=s(103),ee=(s(85),s(58)),te=function(e){e.status;var t=e.setStatus,s=Object(c.useRef)(),a=Object(c.useState)(!1),n=Object(o.a)(a,2),i=n[0],r=n[1],l=Object(c.useState)({user_name:"",user_email:"",subject:"",message:"",errorMessage:""}),j=Object(o.a)(l,2),d=j[0],m=j[1],b=d.user_name,h=d.user_email,p=d.subject,u=d.message,O=d.errorMessage,x=function(e){ee.a.sendForm("service_8p6t4j5","template_tcsmpju",s.current,"user_UM0K5O3trmWOIepHfScXj").then((function(e){t({message:"Thank you for getting in touch. I endeavour to reply within 1 working day.",sent:!0}),console.log(e.text)}),(function(e){console.log(e.text)}))},g=function(e){m(Object(R.a)(Object(R.a)({},d),{},Object(Z.a)({},e.target.name,e.target.value)))};return Object(I.jsx)("div",{className:"contactFormContainer",children:Object(I.jsxs)("form",{ref:s,onSubmit:function(e){e.preventDefault(),(""===b.replace(/\s/g,"")?(m(Object(R.a)(Object(R.a)({},d),{},{errorMessage:"Please Add Your Name."})),0):h.replace(/\s/g,"").length<3?(m(Object(R.a)(Object(R.a)({},d),{},{errorMessage:"Please Add Correct Email."})),0):p.replace(/\s/g,"").length<1?(m(Object(R.a)(Object(R.a)({},d),{},{errorMessage:"Please Add Subject."})),0):!(u.replace(/\s/g,"").length<9)||(m(Object(R.a)(Object(R.a)({},d),{},{errorMessage:"Please Add Message"})),0))&&(r(!0),x(e))},className:"contactForm",children:[O&&Object(I.jsx)("div",{className:"validationError",children:O}),Object(I.jsxs)("label",{htmlFor:"name",children:["Name ",Object(I.jsx)("span",{className:"req",children:"*"})]}),Object(I.jsx)("input",{id:"name",type:"text",placeholder:"eg, Aleks Riabov",name:"user_name",value:d.user_name,onChange:g}),Object(I.jsxs)("label",{htmlFor:"email",children:["Email ",Object(I.jsx)("span",{className:"req",children:"*"})]}),Object(I.jsx)("input",{id:"email",type:"email",placeholder:"hello@gmail.com",name:"user_email",value:d.user_email,onChange:g}),Object(I.jsxs)("label",{htmlFor:"subject",children:["Subject ",Object(I.jsx)("span",{className:"req",children:"*"})]}),Object(I.jsx)("input",{id:"subject",type:"text",placeholder:"eg, Job Offer",name:"subject",value:d.subject,onChange:g}),Object(I.jsxs)("label",{htmlFor:"message",children:["General Message ",Object(I.jsx)("span",{className:"req",children:"*"})]}),Object(I.jsx)("textarea",{rows:"5",name:"message",onChange:g,value:d.message}),i?Object(I.jsx)("div",{className:"formLoading",children:Object(I.jsx)($.a,{})}):Object(I.jsx)("button",{className:"contactFormBtn",type:"submit",children:"Send Now"})]})})},se=(s(86),function(e){var t=e.message;return Object(c.useEffect)((function(){window.scroll(0,0)})),Object(I.jsx)("div",{className:"thanks",children:Object(I.jsx)("div",{className:"thanksContent",children:Object(I.jsx)(E,{title:"Thank You!",subtitle:t})})})}),ce=function(){Object(c.useEffect)((function(){window.scroll(0,0)}),[]);var e=Object(c.useState)({message:"",sent:!1}),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(I.jsx)("section",{className:"page relative",children:s.sent?Object(I.jsx)(se,{message:s.message}):Object(I.jsxs)("div",{children:[Object(I.jsx)(E,{title:"Contact Aleksandr Riabov",subtitle:"Contact me on one of the options listed below or send a general message using the form."}),Object(I.jsxs)("div",{className:"contactPageContent",children:[Object(I.jsx)(te,{status:s,setStatus:a}),Object(I.jsx)(Q,{})]})]})})},ae=(s(87),function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(o.a)(n,2),j=i[0],d=i[1],m=Object(r.h)().projectName;if(Object(c.useEffect)((function(){window.scroll(0,0);var e=y.portfolio.filter((function(e){return e.name===m}))[0];e?a(e):d(!0)}),[m]),j)return Object(I.jsx)("section",{className:"page",children:Object(I.jsxs)("h2",{className:"notExist",children:["This page does not exist or has been removed, please go to ",Object(I.jsx)("span",{className:"neLink",children:Object(I.jsx)(l.b,{to:"/portfolio",children:"portfolio"})})," page.."]})});var b=s.url,h=s.github,p=s.technologies,u=s.title,O=s.subtitle,x=s.imgMedium,g=s.imgLarge,v=s.imgXl,f=s.paragraphs,N=s.desc;return Object(I.jsx)("section",{className:"page",children:Object(I.jsxs)("div",{className:"project",children:[Object(I.jsxs)("div",{className:"projectInner",children:[Object(I.jsxs)("div",{className:"projectLeft",children:[Object(I.jsx)("div",{className:"projectWebsite",children:Object(I.jsx)(H,{text:"View Website",link:b})}),Object(I.jsxs)("div",{className:"projectTech",children:[Object(I.jsx)("h6",{className:"projectTechTitle",children:"Technologies"}),Object(I.jsx)("ul",{className:"projectTechList",children:p&&p.map((function(e){return Object(I.jsx)("li",{children:e},e)}))}),Object(I.jsx)("div",{className:"projectGithub",children:Object(I.jsxs)("a",{href:h,target:"_blank",rel:"noreferrer",children:[Object(I.jsx)(k.a,{fontSize:"inherit"}),Object(I.jsx)("span",{children:"See code"})]})})]})]}),Object(I.jsx)("div",{className:"projectRight",children:Object(I.jsxs)("div",{className:"projectRightInner",children:[Object(I.jsx)("div",{className:"projectTitle",children:Object(I.jsx)(E,{title:u,subtitle:O,position:"start"})}),Object(I.jsx)("p",{children:N}),Object(I.jsxs)("div",{className:"projectImgWrapper",children:[Object(I.jsx)("img",{className:"imgXl",src:v,alt:"",width:"100%"}),Object(I.jsx)("img",{className:"imgLg",src:g,alt:"",width:"100%"}),Object(I.jsx)("img",{className:"imgMd",src:x,alt:"",width:"100%"})]})]})})]}),Object(I.jsxs)("div",{className:"projectParagraphs",children:[Object(I.jsx)("div",{className:"paragraphsLeft"}),Object(I.jsx)("div",{className:"paragraphsRight",children:f&&f.map((function(e,t){return Object(I.jsx)("p",{className:"",children:e},t)}))})]}),Object(I.jsx)(H,{})]})})}),ne=(s(88),s(57)),ie=s.n(ne),re=function(){return Object(I.jsx)("section",{className:"page notFound",children:Object(I.jsxs)("div",{className:"nfInner",children:[Object(I.jsx)("h1",{children:"404"}),Object(I.jsx)("h2",{children:"Page Not Found"}),Object(I.jsxs)(l.b,{to:"/",className:"goBack",children:[Object(I.jsx)(ie.a,{color:"inherit"})," Go to Home Page.."]})]})})},le=s(46);var oe=function(){return Object(r.f)(),le.a.initialize("G-43E58QGWFW"),Object(c.useEffect)((function(){console.log(window.location.pathname),le.a.pageview("/heloo")})),Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(l.a,{children:[Object(I.jsx)(A,{}),Object(I.jsxs)(r.c,{children:[Object(I.jsx)(r.a,{path:"/",exact:!0,children:Object(I.jsx)(X,{})}),Object(I.jsx)(r.a,{path:"/portfolio",exact:!0,children:Object(I.jsx)(q,{})}),Object(I.jsx)(r.a,{path:"/portfolio/:projectName",exact:!0,children:Object(I.jsx)(ae,{})}),Object(I.jsx)(r.a,{path:"/about",exact:!0,children:Object(I.jsx)(z,{})}),Object(I.jsx)(r.a,{path:"/contacts",exact:!0,children:Object(I.jsx)(ce,{})}),Object(I.jsx)(r.a,{path:"/*",component:re})]}),Object(I.jsx)(T,{})]})})};i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(oe,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.39a59cbe.chunk.js.map