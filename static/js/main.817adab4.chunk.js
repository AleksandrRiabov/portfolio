(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(49),n=s.n(i),r=(s(67),s(6)),l=s(7),o=s(12),j=(s(68),s(54)),d=s.n(j),m=(s(69),s(52)),b=s.n(m),h=s.p+"static/media/moviesSmall.07571d3c.png",p=s.p+"static/media/moviesMedium.2ca28da0.jpg",u=s.p+"static/media/moviesLarge.aa65c23e.jpg",O=s.p+"static/media/moviesXL.bbcb4ff6.png",x=s.p+"static/media/pToolSmall.a31e037b.png",g=s.p+"static/media/pToolMedium.6204ebe4.jpg",v=s.p+"static/media/pToolLarge.37d6e6e5.jpg",f=s.p+"static/media/pToolXL.e8a8b356.png",N=s.p+"static/media/wptSmall.b284436e.png",k=s.p+"static/media/wptMedium.cc2bb27a.png",w=s.p+"static/media/wptLarge.197ca7b2.png",y=s.p+"static/media/wptXl.e444c8b3.png",S=s(36),L=s.n(S),I=s(51),A=s.n(I),C=s(0),M={portfolio:[{name:"WPT",title:"WPT - Warehouse Planning Tool",subtitle:"Delivering a robust dashboard and interactive capabilities for efficient warehouse management",featured:!0,url:"https://warehouse-planning-tool.onrender.com/",github:"https://github.com/AleksandrRiabov/wpt",technologies:["React.Js","TypeScript","Node.Js (Express)","MongoDB Atlas","MaterialUI","Recharts.js","Date-fns","react-router","Firebase Authentication","Deployed on render.com"],imgSmall:N,imgMedium:k,imgLarge:w,imgXl:y,desc:"An enhanced version of the original 'Export Planning Tool' from my portfolio. This user-friendly application features customizable charts and a versatile dashboard. Effectively analyze trends, anticipate seasonal changes, and make well-informed decisions with adjustable date ranges.",paragraphs:["In the dynamic world of logistics, warehouses often collaborate with external distributors, emphasizing the need for timely trailer requests. This demands foresight, striking a balance between excess and shortage. The WPT app offers a visionary solution, reshaping estimation accuracy. Embrace this shift, take immediate action, and eliminate uncertainties in trailer requisition."]},{name:"export-planning-tool",title:"Export Planning Tool",subtitle:"Designed to simplify the process of estimating the required number of trailers.",featured:!1,url:"https://guarded-savannah-03210.herokuapp.com/",github:"https://github.com/AleksandrRiabov/fs-planning-tool",technologies:["React.Js","Node.Js (Express)","MongoDB Atlas","MaterialUI","Charts.Js","Moment.Js","AJAX","react-router","Deployed on Heroku"],imgSmall:x,imgMedium:g,imgLarge:v,imgXl:f,desc:"MERN stack Application designed to simplify the process of estimating the required number of trailers. All estimates are based on the average of the five previous weeks, or specific days of the week. With app's charts, you can easily identify seasonal orders spikes, and be prepared for the growing demand.",paragraphs:["Some of the warehouses hiring other logistic companies to distribute the stock. To speed up deliveries it is beneficial to request trailers as soon as the warehouse received the order. However, it is very difficult to predict the number of trailers before the warehouse order has been fully picked and the number of pallets available. There is always a risk to request too many or not enough trailers to distribute everything. This App will help to make all estimates more accurate."]},{name:"movies",title:"Movies App",subtitle:"Ract App which use a real API to display movies.",featured:!0,url:"https://aleksandrriabov.github.io/movies/",github:"https://github.com/AleksandrRiabov/movies",technologies:["ReactJs","Responsive CSS","MaterialUI","AJAX","GitHub","react-router-dom"],imgSmall:h,imgMedium:p,imgLarge:u,imgXl:O,desc:"This App allows you to view popular, now playing and top rated movies. View Individual movie and get the movies data such as cast, movie duration, summary, recommended movies,etc. View Individual Persons and get thier details. Search for Movies using search bar.",paragraphs:["Application consuming themoviedb.org API. Some of the pages design is cloned from API provider's website."]}],socialLinks:[{name:"GitHub",icon:Object(C.jsx)(L.a,{fontSize:"inherit"}),url:"https://github.com/AleksandrRiabov",message:"Follow for open-source projects"},{name:"LinkedIn",icon:Object(C.jsx)(A.a,{fontSize:"inherit"}),url:"https://www.linkedin.com/in/aleksandr-riabov",message:"Let's connect on LinkedIn"}],links:[{name:"Home",url:"/",navLink:!0},{name:"Portfolio",url:"/portfolio",message:"View Alek's previous work",navLink:!0},{name:"About",url:"/about",message:"Learn about Alek's skills",navLink:!0},{name:"Get In Touch",url:"/contacts",message:"Send a general message",navLink:!1}]},T=s.p+"static/media/Aleksandr-Riabov-CV.42af232d.pdf",R=function(e){var t=e.pathname,s=e.setMenuOpen;return Object(C.jsx)("div",{className:"menu",children:Object(C.jsxs)("div",{className:"menuAside",children:[Object(C.jsxs)("div",{className:"asideHeader",children:[Object(C.jsx)("div",{className:"menuSocials",children:M.socialLinks.map((function(e){return Object(C.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.icon},e.name)}))}),Object(C.jsx)("div",{onClick:function(){return s(!1)},className:"closeIcon",children:Object(C.jsx)(b.a,{fontSize:"inherit"})})]}),Object(C.jsxs)("div",{onClick:function(e){return function(e){(e.target.classList.contains("menuLink")||e.target.classList.contains("menuContactsBtn"))&&s(!1)}(e)},className:"menuLinksContainer",children:[Object(C.jsxs)("ul",{className:"menuLinks",children:[M.links.map((function(e){var s=e.url,a=e.name;return e.navLink?Object(C.jsx)(r.b,{to:s,children:Object(C.jsx)("li",{className:"menuLink ".concat(t===s?"menuActive":""),children:a})},a):null})),Object(C.jsx)("a",{href:T,target:"_blank",rel:"noreferrer",children:Object(C.jsx)("li",{className:"menuLink",children:"Resume"})})]}),Object(C.jsx)(r.b,{to:"/contacts",children:Object(C.jsx)("div",{className:"menuContactsBtn",children:"Get In Touch"})})]})]})})},P=s(26),E=s.n(P);var J=function(e){var t=e.category,s=e.action,a=e.label;E.a.event({category:t,action:s,label:a}),console.log(t,s,a)},D=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],i=Object(l.f)().pathname;return Object(C.jsx)("div",{className:"navbar",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"navbarInner",children:[Object(C.jsx)("div",{className:"navbarLeft",children:Object(C.jsx)(r.b,{to:"/",children:Object(C.jsxs)("div",{className:"navbarLogo",children:[Object(C.jsx)("span",{className:"logoName",children:"A"}),"RIABOV"]})})}),Object(C.jsxs)("div",{className:"navbarRight",children:[Object(C.jsxs)("ul",{className:"navbarLinks",children:[M.links.map((function(e){var t=e.url,s=e.name;return e.navLink?Object(C.jsx)(r.b,{to:t,children:Object(C.jsx)("li",{className:i===t?"navbarActive":"navLink",children:s})},s):null})),Object(C.jsx)("a",{href:T,target:"_blank",rel:"noreferrer",onClick:function(){return J({category:"Resume View",action:"Open CV",label:"CV"})},children:Object(C.jsx)("li",{className:"navLink",children:"Resume"})}),Object(C.jsx)(r.b,{to:"/contacts",children:Object(C.jsx)("li",{className:"navbarContacts",children:"Get In Touch"})})]}),Object(C.jsxs)("div",{className:"navbarMobile",children:[Object(C.jsx)("div",{onClick:function(){return c(!0)},className:"navbarBurger",children:Object(C.jsx)(d.a,{fontSize:"inherit"})}),s&&Object(C.jsx)(R,{pathname:i,setMenuOpen:c})]})]})]})})})},W=(s(79),s.p+"static/media/Aleks.7e7c0f82.jpg"),_=function(e){var t=e.link;return Object(C.jsxs)("div",{className:"footerLink",children:[Object(C.jsxs)("div",{className:"top",children:[t.icon,Object(C.jsx)("p",{className:"linkName",children:t.name})]}),Object(C.jsx)("p",{className:"desc",children:t.message})]},t.name)},B=function(){return Object(C.jsxs)("div",{className:"footer",children:[Object(C.jsxs)("div",{className:"inner",children:[Object(C.jsx)("div",{className:"left",children:Object(C.jsxs)("div",{className:"card",children:[Object(C.jsx)("div",{className:"imageWrapper",children:Object(C.jsx)("img",{src:W,alt:"Me",width:"100%"})}),Object(C.jsx)("div",{className:"about",children:Object(C.jsx)("p",{children:"I'm proactive and results oriented self-taught web development enthusiast, I have a keen interest in emerging technology and key strengths in HTML, CSS, JavaScript, React, Node.Js (Express), MongoDB."})})]})}),Object(C.jsxs)("div",{className:"right",children:[Object(C.jsx)("div",{className:"footerLinks",children:M.socialLinks.map((function(e){return Object(C.jsx)("a",{href:e.url,children:Object(C.jsx)(_,{link:e})},e.name)}))}),Object(C.jsx)("div",{className:"footerLinks internalLinks",children:M.links.map((function(e){return e.message?Object(C.jsx)(r.b,{to:e.url,children:Object(C.jsx)(_,{link:e})},e.name):""}))})]})]}),Object(C.jsx)("div",{className:"copiright",children:"\xa92021 @Sania.Riabov@gmail.com"})]})},F=s(14),H=(s(80),function(e){var t=e.title,s=void 0===t?"":t,a=e.subtitle,c=void 0===a?"":a,i=e.position,n=void 0===i?"center":i;return Object(C.jsxs)("div",{className:"titleRoot",style:{textAlign:n},children:[Object(C.jsx)("h1",{className:"title",children:s}),Object(C.jsx)("h3",{className:"subtitle",children:c})]})}),G=(s(81),s(82),function(e){var t=e.icon,s=e.title,a=e.text;return Object(C.jsx)("div",{className:"headerCard",children:Object(C.jsxs)("div",{className:"headerCardInner",children:[Object(C.jsx)("div",{className:"headerCardIcon",children:Object(C.jsx)("img",{src:t,alt:"",width:"100%"})}),Object(C.jsxs)("div",{className:"headerCardText",children:[Object(C.jsx)("h4",{className:"headrerCardTitle",children:s}),Object(C.jsx)("p",{className:"headerCardDecs",children:a})]})]})})}),X=s.p+"static/media/JS.5761b291.png",q=s.p+"static/media/nodeJs.e71346fe.png",z=s.p+"static/media/mongoDB.81169275.jpg",V=function(){return Object(C.jsx)("div",{className:"homeHeader",children:Object(C.jsxs)("div",{className:"headerInner",children:[Object(C.jsx)(G,{icon:X,title:"JavaScript",text:"I can create single page application using REACT or add interactivity to the website."}),Object(C.jsx)(G,{icon:q,title:"Node.Js",text:'Able to write back-end server for web applications using "Express" framework.'}),Object(C.jsx)(G,{icon:z,title:"MongoDB",text:"Have experience performing CRUD operations in MERN stack applications."})]})})},U={background:"#d8d8d8",margin:"1rem 0",height:"1px"},Y=function(){return Object(C.jsx)("div",{style:U})},K=(s(83),function(e){var t=e.props,s=t.imgSmall,a=t.imgMedium,c=t.imgLarge,i=t.imgXl,n=t.desc,l=t.title,o=t.name;return Object(C.jsxs)("div",{className:"workPreview",children:[Object(C.jsx)("div",{className:"left",children:Object(C.jsxs)("div",{className:"inner",children:[Object(C.jsx)(r.b,{to:"/portfolio/".concat(o),children:Object(C.jsx)("div",{className:"image small",children:Object(C.jsx)("img",{src:s,alt:"",className:"screenShot"})})}),Object(C.jsx)("div",{className:"titleWrapper",children:Object(C.jsx)(r.b,{to:"/portfolio/".concat(o),children:Object(C.jsxs)("h3",{className:"title",children:[Object(C.jsx)("span",{className:"arrow",children:" > "}),l]})})}),Object(C.jsx)("p",{className:"descriptions",children:n})]})}),Object(C.jsx)("div",{className:"right",children:Object(C.jsx)(r.b,{to:"/portfolio/".concat(o),children:Object(C.jsxs)("div",{className:"inner",children:[Object(C.jsx)("div",{className:"image xl",children:Object(C.jsx)("img",{src:i,alt:"",className:"screenShot"})}),Object(C.jsx)("div",{className:"image large",children:Object(C.jsx)("img",{src:c,alt:"",className:"screenShot"})}),Object(C.jsx)("div",{className:"image medium",children:Object(C.jsx)("img",{src:a,alt:"",className:"screenShot"})})]})})})]})}),Z=(s(84),function(e){var t=e.text,s=e.path,a=e.link;e.type;return a?Object(C.jsx)("div",{className:"btnWrapper",children:Object(C.jsx)("div",{className:"btn",children:Object(C.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(C.jsx)("div",{className:"inner",children:Object(C.jsxs)("p",{className:"text",children:[t||"Get In Touch"," "]})})})})}):Object(C.jsx)("div",{className:"btnWrapper",children:Object(C.jsx)("div",{className:"btn",children:Object(C.jsx)(r.b,{to:s||"/contacts",children:Object(C.jsx)("div",{className:"inner",children:Object(C.jsxs)("p",{className:"text",children:[t||"Get In Touch"," "]})})})})})});var Q=function(e){var t=e.title;Object(a.useEffect)((function(){E.a.send({hitType:"pageview",page:window.location.pathname,title:t})}),[t])},$=function(){return Q({title:"Home page"}),Object(C.jsxs)("section",{className:"page",children:[Object(C.jsxs)("section",{children:[Object(C.jsx)(H,{title:"Web Developer",subtitle:"Hi. I\u2019m Aleks, a highly motivated, self-starting developer seeking to launch a career building web applications and services."}),Object(C.jsx)(V,{})]}),Object(C.jsx)(Y,{}),Object(C.jsxs)("section",{className:"section",children:[Object(C.jsx)(H,{title:"Featured Work"}),M.portfolio.map((function(e){return e.featured?Object(C.jsx)(K,{props:Object(F.a)({},e)},e.title):null}))]}),Object(C.jsx)(Z,{})]})},ee=function(){return Q({title:"Portfolio page"}),Object(C.jsxs)("section",{className:"page",children:[Object(C.jsx)(H,{title:"My Portfolio",subtitle:"See my works below. Unless explicitly stated otherwise, all their back-end and front-end parts were completely done by me.."}),M.portfolio.map((function(e){return Object(C.jsx)(K,{props:Object(F.a)({},e)},e.title)})),Object(C.jsx)(Z,{text:"Get In Touch",path:"/contacts"})]})},te=(s(85),function(){return Q({title:"Aubout page"}),Object(C.jsxs)("section",{className:"page",children:[Object(C.jsx)(H,{title:"About Me"}),Object(C.jsxs)("div",{className:"sectionAbout",children:[Object(C.jsxs)("p",{className:"inline",children:[Object(C.jsx)("img",{src:W,alt:"web developer",className:"img"}),"I'm proactive and results oriented self-taught web development enthusiast, I have a keen interest in emerging technology and key strengths in HTML, CSS, JavaScript, React, Node.Js (Express), MongoDB."]}),Object(C.jsx)("p",{children:"In addition to my professional qualifications, I have also recently completed the \u2018The Web Developer Bootcamp\u2019 with Udemy, and I use my free time to refine these skills wherever I can. In parallel, I have proactively sought work experience where I can utilise my computer knowledge whilst developing my interpersonal and communication skills. I am now looking for a Junior Web Developer or Software Engineer role, where I can continue to learn and develop, whilst adding value to my team."})]}),Object(C.jsx)(Z,{})]})}),se=(s(86),s(87),s(55)),ae=s.n(se),ce=s(56),ie=s.n(ce),ne=function(){return Object(C.jsx)("div",{className:"contactOptions",children:Object(C.jsxs)("div",{className:"contactOptionsInner",children:[Object(C.jsx)("div",{className:"contactOptionsSocial",children:M.socialLinks.map((function(e){var t=e.url,s=e.name,a=e.icon;return Object(C.jsx)("a",{href:t,children:Object(C.jsxs)("div",{className:"contactOptionContent contactOption",children:[Object(C.jsx)("div",{className:"contactOptionIcon",children:a}),Object(C.jsxs)("p",{children:[" ",s]})]})},s)}))}),Object(C.jsxs)("div",{className:"contactOption",children:[Object(C.jsx)("p",{className:"optionName",children:"Phone:"}),Object(C.jsxs)("div",{className:"contactOptionContent",children:[Object(C.jsx)("div",{className:"contactOptionIcon",children:Object(C.jsx)(ae.a,{fontSize:"inherit"})}),Object(C.jsx)("p",{className:"phone",children:"+447946434597"})]})]}),Object(C.jsxs)("div",{className:"contactOption",children:[Object(C.jsx)("p",{className:"optionName",children:"Email:"}),Object(C.jsxs)("div",{className:"contactOptionContent",children:[Object(C.jsx)("div",{className:"contactOptionIcon",children:Object(C.jsx)(ie.a,{fontSize:"inherit"})}),Object(C.jsx)("p",{className:"phone",children:"sania.riabov@gmail.com"})]})]})]})})},re=s(11),le=s(105),oe=(s(88),s(58)),je=function(e){e.status;var t=e.setStatus,s=Object(a.useRef)(),c=Object(a.useState)(!1),i=Object(o.a)(c,2),n=i[0],r=i[1],l=Object(a.useState)({user_name:"",user_email:"",subject:"",message:"",errorMessage:""}),j=Object(o.a)(l,2),d=j[0],m=j[1],b=d.user_name,h=d.user_email,p=d.subject,u=d.message,O=d.errorMessage,x=function(e){oe.a.sendForm("service_8p6t4j5","template_x9phtvt",s.current,"user_UM0K5O3trmWOIepHfScXj").then((function(e){t({message:"Thank you for getting in touch. I endeavour to reply within 1 working day.",sent:!0}),console.log(e.text)}),(function(e){console.log(e.text)}))},g=function(e){m(Object(F.a)(Object(F.a)({},d),{},Object(re.a)({},e.target.name,e.target.value)))};return Object(C.jsx)("div",{className:"contactFormContainer",children:Object(C.jsxs)("form",{ref:s,onSubmit:function(e){e.preventDefault(),(""===b.replace(/\s/g,"")?(m(Object(F.a)(Object(F.a)({},d),{},{errorMessage:"Please Add Your Name."})),0):h.replace(/\s/g,"").length<3?(m(Object(F.a)(Object(F.a)({},d),{},{errorMessage:"Please Add Correct Email."})),0):p.replace(/\s/g,"").length<1?(m(Object(F.a)(Object(F.a)({},d),{},{errorMessage:"Please Add Subject."})),0):!(u.replace(/\s/g,"").length<9)||(m(Object(F.a)(Object(F.a)({},d),{},{errorMessage:"Please Add Message"})),0))&&(r(!0),J({category:"Contact form",action:"Email sent",label:"Contact form email sent"}),x(e))},className:"contactForm",children:[O&&Object(C.jsx)("div",{className:"validationError",children:O}),Object(C.jsxs)("label",{htmlFor:"name",children:["Name ",Object(C.jsx)("span",{className:"req",children:"*"})]}),Object(C.jsx)("input",{id:"name",type:"text",placeholder:"eg, Aleks Riabov",name:"user_name",value:d.user_name,onChange:g}),Object(C.jsxs)("label",{htmlFor:"email",children:["Email ",Object(C.jsx)("span",{className:"req",children:"*"})]}),Object(C.jsx)("input",{id:"email",type:"email",placeholder:"hello@gmail.com",name:"user_email",value:d.user_email,onChange:g}),Object(C.jsxs)("label",{htmlFor:"subject",children:["Subject ",Object(C.jsx)("span",{className:"req",children:"*"})]}),Object(C.jsx)("input",{id:"subject",type:"text",placeholder:"eg, Job Offer",name:"subject",value:d.subject,onChange:g}),Object(C.jsxs)("label",{htmlFor:"message",children:["General Message ",Object(C.jsx)("span",{className:"req",children:"*"})]}),Object(C.jsx)("textarea",{rows:"5",name:"message",onChange:g,value:d.message}),n?Object(C.jsx)("div",{className:"formLoading",children:Object(C.jsx)(le.a,{})}):Object(C.jsx)("button",{className:"contactFormBtn",type:"submit",children:"Send Now"})]})})},de=(s(89),function(e){var t=e.message;return Object(a.useEffect)((function(){window.scroll(0,0)})),Object(C.jsx)("div",{className:"thanks",children:Object(C.jsx)("div",{className:"thanksContent",children:Object(C.jsx)(H,{title:"Thank You!",subtitle:t})})})}),me=function(){Object(a.useEffect)((function(){window.scroll(0,0)}),[]),Q({title:"Contacts page"});var e=Object(a.useState)({message:"",sent:!1}),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(C.jsx)("section",{className:"page relative",children:s.sent?Object(C.jsx)(de,{message:s.message}):Object(C.jsxs)("div",{children:[Object(C.jsx)(H,{title:"Contact Aleksandr Riabov",subtitle:"Contact me on one of the options listed below or send a general message using the form."}),Object(C.jsxs)("div",{className:"contactPageContent",children:[Object(C.jsx)(je,{status:s,setStatus:c}),Object(C.jsx)(ne,{})]})]})})},be=(s(90),function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(!1),n=Object(o.a)(i,2),j=n[0],d=n[1],m=Object(l.g)().projectName;if(Q({title:"Project ".concat(m," page")}),Object(a.useEffect)((function(){window.scroll(0,0);var e=M.portfolio.filter((function(e){return e.name===m}))[0];e?c(e):d(!0)}),[m]),j)return Object(C.jsx)("section",{className:"page",children:Object(C.jsxs)("h2",{className:"notExist",children:["This page does not exist or has been removed, please go to"," ",Object(C.jsx)("span",{className:"neLink",children:Object(C.jsx)(r.b,{to:"/portfolio",children:"portfolio"})})," ","page.."]})});var b=s.url,h=s.github,p=s.technologies,u=s.title,O=s.subtitle,x=s.imgMedium,g=s.imgLarge,v=s.imgXl,f=s.paragraphs,N=s.desc;return Object(C.jsx)("section",{className:"page",children:Object(C.jsxs)("div",{className:"project",children:[Object(C.jsxs)("div",{className:"projectInner",children:[Object(C.jsxs)("div",{className:"projectLeft",children:[Object(C.jsx)("div",{className:"projectWebsite",onClick:function(){return J({category:"Project Link View",action:"Click Deployed Page",label:m})},children:Object(C.jsx)(Z,{text:"View Website",link:b})}),Object(C.jsxs)("div",{className:"projectTech",children:[Object(C.jsx)("h6",{className:"projectTechTitle",children:"Technologies"}),Object(C.jsx)("ul",{className:"projectTechList",children:p&&p.map((function(e){return Object(C.jsx)("li",{children:e},e)}))}),Object(C.jsx)("div",{className:"projectGithub",onClick:function(){return J({category:"Project Link View",action:"Click Source Code",label:m})},children:Object(C.jsxs)("a",{href:h,target:"_blank",rel:"noreferrer",children:[Object(C.jsx)(L.a,{fontSize:"inherit"}),Object(C.jsx)("span",{children:"See code"})]})})]})]}),Object(C.jsx)("div",{className:"projectRight",children:Object(C.jsxs)("div",{className:"projectRightInner",children:[Object(C.jsx)("div",{className:"projectTitle",children:Object(C.jsx)(H,{title:u,subtitle:O,position:"start"})}),Object(C.jsx)("p",{children:N}),Object(C.jsxs)("div",{className:"projectImgWrapper",children:[Object(C.jsx)("img",{className:"imgXl",src:v,alt:"",width:"100%"}),Object(C.jsx)("img",{className:"imgLg",src:g,alt:"",width:"100%"}),Object(C.jsx)("img",{className:"imgMd",src:x,alt:"",width:"100%"})]})]})})]}),Object(C.jsxs)("div",{className:"projectParagraphs",children:[Object(C.jsx)("div",{className:"paragraphsLeft"}),Object(C.jsx)("div",{className:"paragraphsRight",children:f&&f.map((function(e,t){return Object(C.jsx)("p",{className:"",children:e},t)}))})]}),Object(C.jsx)(Z,{})]})})}),he=(s(91),s(57)),pe=s.n(he),ue=function(){return Q({title:"404 Not Found page"}),Object(C.jsx)("section",{className:"page notFound",children:Object(C.jsxs)("div",{className:"nfInner",children:[Object(C.jsx)("h1",{children:"404"}),Object(C.jsx)("h2",{children:"Page Not Found"}),Object(C.jsxs)(r.b,{to:"/",className:"goBack",children:[Object(C.jsx)(pe.a,{color:"inherit"})," Go to Home Page.."]})]})})};E.a.initialize("G-ERZJ09S779");var Oe=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(r.a,{children:[Object(C.jsx)(D,{}),Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{path:"/",exact:!0,children:Object(C.jsx)($,{})}),Object(C.jsx)(l.a,{path:"/portfolio",exact:!0,children:Object(C.jsx)(ee,{})}),Object(C.jsx)(l.a,{path:"/portfolio/:projectName",exact:!0,children:Object(C.jsx)(be,{})}),Object(C.jsx)(l.a,{path:"/about",exact:!0,children:Object(C.jsx)(te,{})}),Object(C.jsx)(l.a,{path:"/contacts",exact:!0,children:Object(C.jsx)(me,{})}),Object(C.jsx)(l.a,{path:"/*",component:ue})]}),Object(C.jsx)(B,{})]})})};n.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(Oe,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.817adab4.chunk.js.map