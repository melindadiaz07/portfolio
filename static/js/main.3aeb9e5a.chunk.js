(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(24),r=n.n(i),j=n(9),o=(n(46),n(47),n(63)),b=n(3),d=Object(b.g)((function(e){var t=e.location.pathname;return Object(a.jsx)("div",{children:Object(a.jsx)(o.a,{pointing:!0,secondary:!0,children:Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(o.a.Item,{as:j.b,to:"/home",name:"Home",active:"/home"===t}),Object(a.jsx)(o.a.Item,{as:j.b,to:"/about",name:"About",active:"/about"===t}),Object(a.jsx)(o.a.Item,{as:j.b,to:"/projects",name:"Projects",active:"/projects"===t}),Object(a.jsx)(o.a.Item,{as:j.b,to:"/skills",name:"Skills",active:"/skills"===t}),Object(a.jsx)(o.a.Menu,{position:"right",children:Object(a.jsx)(o.a.Item,{as:j.b,to:"/contact",name:"Contact",active:"/contact"===t})})]})})})})),l=(n.p,function(){return Object(a.jsx)("div",{id:"about-page",children:Object(a.jsx)("div",{className:"about-container",children:Object(a.jsxs)("h3",{children:["After working for years as a metalsmith and running a creative business, I fell in love with coding while building my company\u2019s website. I\u2019d planned to throw it together with a template, but being a perfectionist with a very specific design in mind, I ended up creating it from scratch - and learning a lot about programming.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"As a designer, I was initially drawn to front-end development (HTML/CSS and Javascript), but after learning Ruby and creating my own Rails-based API I quickly found backend development just as rewarding - I\u2019m constantly amazed at how something as seemingly logic-based as writing code actually involves a tremendous amount of creativity. It\u2019s the perfect blend of right and left brain problem solving, and I never want to stop learning new ways to work with different languages and frameworks.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I have experience working with Javascript, HTML/CSS, React, Redux, Ruby/Rails, SQL, PostgreSQL, Bootstrap, Semantic UI, and Mocha. I\u2019m very interested in working with and learning design principles to keep my code well-organized, like the MVC design pattern. As a lifelong learning, I always have a new language (or 3) I\u2019m learning - currently I\u2019m studying Python and C++."]})})})}),h=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"side-tabs"})})},m=function(){return Object(a.jsxs)("div",{className:"skills-container",children:[Object(a.jsx)("h2",{children:"Skills & Experience"}),Object(a.jsxs)("div",{className:"frontend-container",children:[Object(a.jsx)("h3",{children:"Front End"}),Object(a.jsx)("h4",{children:"Languages: "}),Object(a.jsx)("p",{children:"JavaScript"}),Object(a.jsx)("p",{children:"HTML"}),Object(a.jsx)("p",{children:"CSS"}),Object(a.jsx)("h4",{children:"Frameworks/Libraries:"}),Object(a.jsx)("p",{children:"React"}),Object(a.jsx)("p",{children:"Bootstrap"}),Object(a.jsx)("p",{children:"Semantic UI"}),Object(a.jsx)("p",{children:"Material UI"})]}),Object(a.jsxs)("div",{className:"backend-container",children:[Object(a.jsx)("h3",{children:"Backend"}),Object(a.jsx)("h4",{children:"Languages:"}),Object(a.jsx)("p",{children:"Ruby"}),Object(a.jsx)("p",{children:"SQL"}),Object(a.jsx)("p",{children:"Javascript"}),Object(a.jsx)("h4",{children:"Frameworks/Databases:"}),Object(a.jsx)("p",{children:"Rails"}),Object(a.jsx)("p",{children:"PostgreSQL"})]}),Object(a.jsxs)("div",{className:"testing-container",children:[Object(a.jsx)("h3",{children:"Testing"}),Object(a.jsx)("h4",{children:"Languages:"}),Object(a.jsx)("p",{children:"Mocha"}),Object(a.jsx)("h4",{children:"Frameworks/Libraries:"}),Object(a.jsx)("p",{children:"Chai"}),Object(a.jsx)("p",{children:"Cypress"})]})]})},x=n(27),u=n(28),O=n(14),p=n(30),g=n(29),f=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).submitForm=a.submitForm.bind(Object(O.a)(a)),a.state={status:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.status;return Object(a.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/xleopone",method:"POST",children:[Object(a.jsx)("input",{type:"text",className:"input-text",name:"name",placeholder:"Your Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",className:"input-text",name:"_replyto",placeholder:"Your Email"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{name:"message",rows:"8",cols:"40",placeholder:"Message"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"SUCCESS"===e?Object(a.jsx)("p",{children:"Thanks! Your message was successfully submitted."}):Object(a.jsx)("button",{className:"submit-button",children:"Submit"}),"ERROR"===e&&Object(a.jsx)("p",{children:"Ooops! There was an error."})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var n=e.target,a=new FormData(n),c=new XMLHttpRequest;c.open(n.method,n.action),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?(n.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},c.send(a)}}]),n}(s.a.Component),v=function(){return Object(a.jsxs)("div",{className:"contact-container",children:[Object(a.jsxs)("h3",{children:["email: ",Object(a.jsx)("a",{href:"mailto:melindadiaz@me.com",children:" melindadiaz@me.com"})]}),Object(a.jsxs)("h3",{children:["linkedIn: ",Object(a.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/melindadiaz/",children:" linkedin.com/in/melindadiaz/"})]}),Object(a.jsxs)("h3",{children:["gitHub: ",Object(a.jsx)("a",{href:"https://github.com/melindadiaz07",children:" github.com/melindadiaz07"})]}),Object(a.jsxs)("h3",{children:["blog: ",Object(a.jsx)("a",{href:"https://melindadiaz-75942.medium.com/",children:" melindadiaz-75942.medium.com/"})]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"Or send me a message right here \u25be "}),Object(a.jsx)(f,{})]})},w=function(){return Object(a.jsx)("div",{className:"blog-container"})},y=n.p+"static/media/headshot.dd93133f.jpg",k=function(){return Object(a.jsxs)("div",{className:"home-page-container",children:[Object(a.jsx)("img",{src:y,alt:"headshot",className:"headshot"}),Object(a.jsx)("h2",{children:"Hi, I'm Melinda Diaz - a Software Engineer and Full Stack Developer living in Alexandria, VA."})]})};var S=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{id:"nav-container",children:Object(a.jsx)(d,{})}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(b.a,{to:"/home"})}}),Object(a.jsx)(b.b,{exact:!0,path:"/home",render:function(){return Object(a.jsx)(k,{})}}),Object(a.jsx)(b.b,{exact:!0,path:"/about",render:function(){return Object(a.jsx)(l,{})}}),Object(a.jsx)(b.b,{exact:!0,path:"/projects",render:function(){return Object(a.jsx)(h,{})}}),Object(a.jsx)(b.b,{exact:!0,path:"/skills",render:function(){return Object(a.jsx)(m,{})}}),Object(a.jsx)(b.b,{exact:!0,path:"/contact",render:function(){return Object(a.jsx)(v,{})}}),Object(a.jsx)(b.b,{exact:!0,path:"/blog",render:function(){return Object(a.jsx)(w,{})}}),Object(a.jsx)(b.b,{render:function(){return Object(a.jsx)(b.a,{to:"/"})}})]})]})};n(52);r.a.render(Object(a.jsx)(j.a,{basename:"/portfolio",children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.3aeb9e5a.chunk.js.map