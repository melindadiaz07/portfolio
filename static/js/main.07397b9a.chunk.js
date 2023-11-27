(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{53:function(e,t,s){},54:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),A=s(30),i=s.n(A),r=s(11),o=(s(53),s(54),s(88)),h=s(3),l=Object(h.g)((function(e){var t=e.location.pathname;return Object(a.jsx)("div",{children:Object(a.jsx)(o.a,{pointing:!0,secondary:!0,children:Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(o.a.Item,{as:r.b,to:"/home",name:" Home ",active:"/home"===t}),Object(a.jsx)(o.a.Item,{as:r.b,to:"/about",name:"About ",active:"/about"===t}),Object(a.jsx)(o.a.Item,{as:r.b,to:"/projects",name:"Projects",active:"/projects"===t}),Object(a.jsx)(o.a.Item,{as:r.b,to:"/skills",name:" Skills  ",active:"/skills"===t}),Object(a.jsx)(o.a.Menu,{position:"right",children:Object(a.jsx)(o.a.Item,{as:r.b,to:"/contact",name:"Contact ",active:"/contact"===t})})]})})})})),d=function(){return Object(a.jsx)("div",{id:"about-page",children:Object(a.jsx)("div",{className:"about-container",children:Object(a.jsxs)("h3",{children:["After working for years as a metalsmith and running a creative business, I fell in love with coding while building my company\u2019s website. I\u2019d planned to throw it together with a template, but being a perfectionist with a very specific design in mind, I ended up creating it from scratch - and learning a lot about programming.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"As a designer, I was initially drawn to front-end development (HTML/CSS and Javascript), but after learning Ruby and creating my own Rails-based API I quickly found backend development just as rewarding - I\u2019m constantly amazed at how something as seemingly logic-based as writing code actually involves a tremendous amount of creativity. It\u2019s the perfect blend of right and left brain problem solving, and I can't get enough of learning new ways to work with different languages and frameworks.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I have experience working with Javascript, HTML/CSS, React, Redux, Vue, React Native, Typescript, Ruby/Rails, SQL, PostgreSQL, Bootstrap, and REST APIs. I\u2019m very interested in working with and learning design principles to keep my code well-organized, like the MVC design pattern. "]})})})},j=s(35),b=s.p+"static/media/moviematchplaceholder.db7c338c.gif",m=function(){return Object(a.jsxs)("div",{className:"movie-match-container",children:[Object(a.jsx)("img",{className:"movie-match-gif",src:b,alt:"demo gif"}),Object(a.jsx)("h3",{className:"movie-match-description",children:"Sign up, create your list of favorite films, and see the 10 people with lists most similiar to yours."})]})},g=s(13),u=s.n(g),x=function(){return Object(a.jsxs)("div",{className:"brakebills-container",children:[Object(a.jsx)(u.a,{url:"https://youtu.be/67evagTgJ_c",controls:!0,height:"500px",width:"970px",modestbranding:"0"}),Object(a.jsx)("h3",{className:"brakebills-description",children:"This project was a fun take on a classic academic website - it's based on a fictional university from the book/ tv series The Magicians. The premise is that to outsiders, Brakebills is a regular ivy leage school, when in reality it teaches magic (think Hogwarts for adults.)"}),Object(a.jsx)("h3",{className:"brakebills-description",children:"This concept is reflected in the layout of the website - there's a public facing version that shows traditional university content, and secret content that can only be seen by logged in students or facutly."}),Object(a.jsx)("h3",{className:"brakebills-description",children:"I also had a lot of fun building a message board on the logged-in side. Users can see messages posted by other students, and replies are conditionally rendered by clicking on different posts. The user can also add their own posts or replies to the board, and the content is instantly rendered to the page as well as sent to the database to persist the information."})]})},U=function(){return Object(a.jsxs)("div",{className:"learn-tracker-container",children:[Object(a.jsx)(u.a,{url:"https://youtu.be/H1ecrdMsdp4",controls:!0,height:"500px",width:"970px",modestbranding:"0"}),Object(a.jsx)("h3",{className:"learn-tracker-description",children:"I built the Learning Tracker site to organize all my plans to learn new programming languages and frameworks. To create a responsive frontend, I implemented React.js, and use Semantic UI for styling. To build the backend, I created a Rails Api, and used a PostreSQL database to store user information and course data."}),Object(a.jsx)("h3",{className:"learn-tracker-description",children:"The most interesting aspect of creating this application was implementing the responsive progress bars. I installed the Victory Pie npm package to render the circular chart components, and created functions to calculate progress that rerun any time a box is checked."})]})},O=function(){return Object(a.jsxs)("div",{className:"wom-container",children:[Object(a.jsx)(u.a,{url:"https://youtu.be/_gVwOLFwaic",controls:!0,height:"500px",width:"970px",modestbranding:"0"}),Object(a.jsx)("h3",{className:"wom-description",children:"Using Javascript to build this app allowed me to create a very interactive user minterface. Players can select an existing character, or get 'sorted' into a house (chosen through a function that selects a random house id from the database). Once the game starts, magical creatures are randomly selected from the API, and rendered in random 'locations'(backgrounds) to create numerous scenarios."}),Object(a.jsx)("h3",{className:"wom-description",children:"There were a lot of challenging but rewarding pieces in creating this game. As a single page application, many elements need to stay hidden until specific scenarios are reached, and even then the items that should render are tied to events in the game - for instance, potion bottles at the bottom of the screen show how many lives a player has left, and are removed in order when a life is lost. This information is also stored in the backend (using a Rails API and a SQLite database), so that it persists."})]})},B=function(){var e=Object(c.useState)(Object(a.jsx)(x,{})),t=Object(j.a)(e,2),s=t[0],n=t[1],A=function(e){document.querySelector(".selected-tab").classList.remove("selected-tab"),e.currentTarget.classList.add("selected-tab")};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"side-tabs",children:[Object(a.jsxs)("div",{className:"tab selected-tab",onClick:function(e){n(Object(a.jsx)(x,{})),A(e)},children:[Object(a.jsx)("h3",{children:"Brakebills University"}),Object(a.jsx)("p",{children:"An academic website with secret content"})]}),Object(a.jsxs)("div",{className:"tab",onClick:function(e){n(Object(a.jsx)(U,{})),A(e)},children:[Object(a.jsx)("h3",{children:" Learning Tracker "}),Object(a.jsx)("p",{children:"Build or find custom curriculum"})]}),Object(a.jsxs)("div",{className:"tab",onClick:function(e){n(Object(a.jsx)(O,{})),A(e)},children:[Object(a.jsx)("h3",{children:" World of Magic "}),Object(a.jsx)("p",{children:"Cast spells to catch magical creatures"})]}),Object(a.jsxs)("div",{className:"tab",onClick:function(e){n(Object(a.jsx)(m,{})),A(e)},children:[Object(a.jsx)("h3",{children:"Movie Matcher "}),Object(a.jsx)("p",{children:"Meet your matches based on your favorite films"})]})]}),Object(a.jsx)("div",{className:"display-project-container",children:s})]})},p=function(){return Object(a.jsxs)("div",{id:"skills-page",children:[Object(a.jsx)("h2",{children:"Skills & Experience"}),Object(a.jsxs)("div",{className:"skills-container",children:[Object(a.jsxs)("div",{className:"frontend-container grid-item",children:[Object(a.jsx)("h3",{children:" <\xa0  Front End  \xa0>"}),Object(a.jsx)("h4",{children:"Languages: "}),Object(a.jsx)("p",{children:"JavaScript"}),Object(a.jsx)("p",{children:"HTML"}),Object(a.jsx)("p",{children:"CSS"}),Object(a.jsx)("h4",{children:"Frameworks/Libraries:"}),Object(a.jsx)("p",{children:"React.js"}),Object(a.jsx)("p",{children:"React Native"}),Object(a.jsx)("p",{children:"Redux"}),Object(a.jsx)("p",{children:"jQuery"}),Object(a.jsx)("p",{children:"Bootstrap"}),Object(a.jsx)("p",{children:"Vue.js"})]}),Object(a.jsxs)("div",{className:"backend-container grid-item",children:[Object(a.jsx)("h3",{children:" <\xa0 Back End \xa0>"}),Object(a.jsx)("h4",{children:"Languages:"}),Object(a.jsx)("p",{children:"Ruby"}),Object(a.jsx)("p",{children:"SQL"}),Object(a.jsx)("p",{children:"Javascript"}),Object(a.jsx)("h4",{children:"Frameworks/Databases:"}),Object(a.jsx)("p",{children:"Rails"}),Object(a.jsx)("p",{children:"Node.js"}),Object(a.jsx)("p",{children:"Express.js"}),Object(a.jsx)("p",{children:"PostgreSQL"})]}),Object(a.jsxs)("div",{className:"testing-container grid-item",children:[Object(a.jsx)("h3",{children:" < \xa0 Testing \xa0>"}),Object(a.jsx)("h4",{children:"Languages:"}),Object(a.jsx)("p",{children:"Mocha"}),Object(a.jsx)("h4",{children:"Frameworks/Libraries:"}),Object(a.jsx)("p",{children:"Chai"}),Object(a.jsx)("p",{children:"Cypress"})]})]})]})},R=s(33),f=s(34),v=s(17),w=s(37),y=s(36),Q=function(e){Object(w.a)(s,e);var t=Object(y.a)(s);function s(e){var a;return Object(R.a)(this,s),(a=t.call(this,e)).submitForm=a.submitForm.bind(Object(v.a)(a)),a.state={status:""},a}return Object(f.a)(s,[{key:"render",value:function(){var e=this.state.status;return Object(a.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/xleopone",method:"POST",children:[Object(a.jsx)("input",{type:"text",className:"input-text",name:"name",placeholder:"Your Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",className:"input-text",name:"_replyto",placeholder:"Your Email"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{name:"message",rows:"8",cols:"40",placeholder:"Message"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"SUCCESS"===e?Object(a.jsx)("p",{children:"Thanks! Your message was successfully submitted."}):Object(a.jsx)("button",{className:"submit-button",children:"Submit"}),"ERROR"===e&&Object(a.jsx)("p",{children:"Ooops! There was an error."})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var s=e.target,a=new FormData(s),c=new XMLHttpRequest;c.open(s.method,s.action),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?(s.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},c.send(a)}}]),s}(n.a.Component),k=function(){return Object(a.jsx)("div",{id:"contact-page",children:Object(a.jsxs)("div",{className:"contact-container",children:[Object(a.jsxs)("h3",{children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAGAAAAABAAAAYAAAAAEAAqACAAQAAAABAAAADqADAAQAAAABAAAADgAAAACO/LruAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAB0UlEQVQoFZ1SO2gVQRS95868ffueMYkgGisThEgklZUICgGDhYWKpLAXFMSQUhFE1CKtjSCIloJVKgVt0ttooVhZ2KSJoDH4Nrsz93g3hod20QPDXu6ecz9nRuQ/gYUFKaa29ndrTWE3NQqL+cjEehWn0tgdiWmuK1wzQQEKAOGfReg5eg5kIyEd+Lw+vhoB/Ujh/Gg/XPq55ZErXPgXXLiNfldlY2DvaPikTp0zhNvfNm2pyVLRWU2SqklMO2fLjJIy+WPAW7B8w7uf0rLAFWV+ooE1Es8mk7dFlNJbxPYUEV0j3yt5Rsy+Evq015GrcVAzR5XDPuCjHOWNCK/VDeYFcq8VevdlY34OiQ8Q5Lx6smpc499t/HbExk3ySIz60ogP7Q+f8gsy9lngRAcq7SotYq9AqGquuSsPaXE1BNzsQC7UmStOYRlxsWZY6QRbTLTTbsz1soPJcGK6nBTqfecEKJ91Ao63JqnKbIDMJEMVA2ZTxmXnvaLisWVaOHms1/cBFvf2dcmn6Lt5EhTDFdrYzfGcFHtKPVc3nIbgRfRLnSFwcLPia18gGkRb8RA7sZnQOY1f8iEPj+KuP7nvMjpSiu3qyVVed0w2NoeF/zX4BcnC64dZtW5KAAAAAElFTkSuQmCC",alt:"email logo",className:"contact-icons"}),"email: ",Object(a.jsx)("a",{href:"mailto:melindadiaz@me.com",children:" melindadiaz@me.com"})]}),Object(a.jsxs)("h3",{children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAtFBMVEUAAAB3UxB2UhB2UhB2UhB2UhB2UhB3UxFyTxJ2UhB2UhAAAAB2Ug93UxF5UxN3URB1URB2UhB2UhB2UhB2UhB2Ug91UhB2UhB1UQ9xVQ55UQ14UxB3VBJ2ThR3UhB0UhB1UA95UQ12UhB2URF0URJ2UhB3UxJ2UhB2UxB2UhB3UhB2UxB2URB3VRF4VQ51UhF2URB2UhB2UhB3UhB2UhB2UxB2URF2URB2UhB2URF2UhAAAAAEFWEjAAAAOnRSTlMAjvqM/NDzTR3s+QG3XCjxv+Pq3e3WyvJVEiYxOg2sUSMT+6k5ziuTs56urVIPJDugr9+7zdLYvPaKXX93kQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDA8VCALgqITcAAAAgUlEQVQY023PxRaCYAAF4fHHLhQDA+xuxbzv/2B6cAF4nOW3G1JGsYyFUTqTjQlSjnwhElQsQTkOqlC1E2DX6nIaTbXa7hc6dNWj74E/CGGIrxFh40kMps4M5hEspCWsIvCkNWx+YfsXdux14Cid4KzP3CW46hbcJTd4PA1Wcv/1BlNIJfcZP3HtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTE1VDIxOjA4OjAyKzAwOjAwWAAB5QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0xNVQyMTowODowMiswMDowMClduVkAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC",alt:"linkedin logo",className:"contact-icons"}),"linkedIn: ",Object(a.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/melindadiaz/",children:" linkedin.com/in/melindadiaz/"})]}),Object(a.jsxs)("h3",{children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA/FBMVEUAAABVVQB3UhB3URB3UhB2UhB1VBF3UBF2Ug93URB3Uw51UhF2UhB2UhB2UQ92Ug93UhB2UhB2UhB2UhB2UxB2Ug92UxB5VQx3URB1Ug95UQ11UQ94UA92Uw93Uw91UA92URB2UhBzTQ12UhB1UhB2URF2UxF2UhB2UhJ4VBB3UhF2UhB2UhAAAAB2Ug92UhB2UhCAgAB2UhB4UxB3VBJ2UhB2URBtSRJ4Sw92UxB2Ug92UhB2URBzVRJ3URB3URB2UxB2UhB2URB2UhB2ThR2VQ12UhF3VRF2UxB2UhB3VRGAQABxVRx2UxB2ThR3UxF2UQ90URJ2UhAAAAB8hnvsAAAAUnRSTlMAAz6Bn4A9SdbVR3r+/Xdj5K/6+K3nXxXxliZVMzRWI6DvFH2hqXvJOEDI7fIB9+zzAt4xOtzCDhGRx+uNKi+Q7qu82RonqA/Pvh4ECcwNqqY5Ow5onQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDA4DLBUyhFgaAAAAuUlEQVQY0zWO6XZBQRCEa7iuWCP2JUIsQewiQYiLWGMJ9f4PY4Y79af7q9NdpwAp4XAahssUsOV+4E0e7519ftoKBBU/MvQUVhiJxhgHEkmmkM48Z19yyPO1gCJZ0mFl8g0VsqqNGvmOOhtNbYgW24iwoxndMFvokR/a6JOfKJFfgzsPZZ4Bk6Pv8eQHmFozWaYPzBvTxe8SWKlya3m42e7+9nIeJB9P6nXwT4qbcT7Z6eZIVhHWRe1XfTkiBvL2ORQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTRUMDM6NDQ6MjErMDA6MDCucm9+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE0VDAzOjQ0OjIxKzAwOjAw3y/XwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=",alt:"github logo",className:"contact-icons"}),"gitHub: ",Object(a.jsx)("a",{target:"_blank",href:"https://github.com/melindadiaz07",children:" github.com/melindadiaz07"})]}),Object(a.jsxs)("h3",{children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAyVBMVEUAAAB2VA91UQ92UhBzVRJ2Ug92URB2UhB0URJ2URB2URB3UhB2UxB2URN2UhB3VRF2UhB1Uw52UhB1UxBxVRN2Ug92UhB2Uw+AYAB2UhB2UhB2UhB2URB2Ug91VRV2UhB2UhF2UhB2UhJ2UhB3URB2UhB2Uw91UhB2UhB2UhB3TxF2UhF2Uw92UhB4Sw95UQ13UhAAAAB2UhB2URBVVQB2UhB2UhB3URFmZgB1URB3Uw91Ug+AVQB3UhB3URF1UBB6UhR2UhAAAABoS9tqAAAAQXRSTlMAQ1VOKlRS/jnCboOtKaQe/SWPlBvn8pcI4OzZjfcYXZniHPmBxDSh7dAtarb2ESbkAUGgA33LPAWjVtcGrmswGXKU/koAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AwOAzAPKZH8PQAAAJ9JREFUGNNlz+USwjAQBOAlSHB3L1LcSrGi+/4vxRWKDOTPbb7M5O6A3+NTSvmfMSAxiJAmGX5AhNRRICYQd+8JeUpKTQmkMxKyEnJS84UiWQLKlaoHtTrZaKLVNl7Q6ZI99M03YEAOzRE+MJb/jckXYErO5i9YLFewyDU8sKfcAFvusB+SB0B6agfOcXU6y2D6AllIWbCvuLlJhf62vwMQ+BldTKVPdAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0xNFQwMzo0ODoxNSswMDowMM6OrAAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMTRUMDM6NDg6MTUrMDA6MDC/0xS8AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"medium logo",className:"contact-icons"}),"blog: ",Object(a.jsx)("a",{target:"_blank",href:"https://melindadiaz-75942.medium.com/",children:" melindadiaz-75942.medium.com/"})]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Or send me a message right here \u25be "}),Object(a.jsx)(Q,{})]})})},E=function(){return Object(a.jsx)("div",{className:"blog-container"})},C=s.p+"static/media/hexheadshot.8aa111ae.png",S=function(){return Object(a.jsxs)("div",{id:"home-page",children:[Object(a.jsxs)("div",{className:"home-page-container",children:[Object(a.jsx)("hr",{id:"top-rule"}),Object(a.jsx)("img",{src:C,alt:"headshot",className:"headshot"}),Object(a.jsx)("hr",{id:"bottom-rule"}),Object(a.jsx)("h2",{children:"Hi, I'm Melinda Diaz - a Software Engineer and Full Stack Developer living in Eugene, OR."})]}),Object(a.jsx)("div",{className:"text-background"})]})};var I=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{id:"nav-container",children:Object(a.jsx)(l,{})}),Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(h.a,{to:"/home"})}}),Object(a.jsx)(h.b,{exact:!0,path:"/home",render:function(){return Object(a.jsx)(S,{})}}),Object(a.jsx)(h.b,{exact:!0,path:"/about",render:function(){return Object(a.jsx)(d,{})}}),Object(a.jsx)(h.b,{exact:!0,path:"/projects",render:function(){return Object(a.jsx)(B,{})}}),Object(a.jsx)(h.b,{exact:!0,path:"/skills",render:function(){return Object(a.jsx)(p,{})}}),Object(a.jsx)(h.b,{exact:!0,path:"/contact",render:function(){return Object(a.jsx)(k,{})}}),Object(a.jsx)(h.b,{exact:!0,path:"/blog",render:function(){return Object(a.jsx)(E,{})}}),Object(a.jsx)(h.b,{render:function(){return Object(a.jsx)(h.a,{to:"/"})}})]})]})};s(77);i.a.render(Object(a.jsx)(r.a,{basename:"/portfolio",children:Object(a.jsx)(I,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.07397b9a.chunk.js.map