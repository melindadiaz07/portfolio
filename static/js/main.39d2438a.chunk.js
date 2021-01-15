(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),A=a(30),i=a.n(A),r=a(11),o=(a(53),a(54),a(87)),h=a(3),l=Object(h.g)((function(e){var t=e.location.pathname;return Object(s.jsx)("div",{children:Object(s.jsx)(o.a,{pointing:!0,secondary:!0,children:Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)(o.a.Item,{as:r.b,to:"/home",name:" Home ",active:"/home"===t}),Object(s.jsx)(o.a.Item,{as:r.b,to:"/about",name:"About ",active:"/about"===t}),Object(s.jsx)(o.a.Item,{as:r.b,to:"/projects",name:"Projects",active:"/projects"===t}),Object(s.jsx)(o.a.Item,{as:r.b,to:"/skills",name:" Skills  ",active:"/skills"===t}),Object(s.jsx)(o.a.Menu,{position:"right",children:Object(s.jsx)(o.a.Item,{as:r.b,to:"/contact",name:"Contact ",active:"/contact"===t})})]})})})})),d=function(){return Object(s.jsx)("div",{id:"about-page",children:Object(s.jsx)("div",{className:"about-container",children:Object(s.jsxs)("h3",{children:["After working for years as a metalsmith and running a creative business, I fell in love with coding while building my company\u2019s website. I\u2019d planned to throw it together with a template, but being a perfectionist with a very specific design in mind, I ended up creating it from scratch - and learning a lot about programming.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"As a designer, I was initially drawn to front-end development (HTML/CSS and Javascript), but after learning Ruby and creating my own Rails-based API I quickly found backend development just as rewarding - I\u2019m constantly amazed at how something as seemingly logic-based as writing code actually involves a tremendous amount of creativity. It\u2019s the perfect blend of right and left brain problem solving, and I can't get enough of learning new ways to work with different languages and frameworks.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"I have experience working with Javascript, HTML/CSS, React, Redux, Ruby/Rails, SQL, PostgreSQL, Bootstrap, Semantic UI, and Mocha. I\u2019m very interested in working with and learning design principles to keep my code well-organized, like the MVC design pattern. As a lifelong learner, I always have a new language (or 3) I\u2019m learning - currently I\u2019m studying Python and C#."]})})})},j=a(35),b=a.p+"static/media/moviematchplaceholder.db7c338c.gif",m=function(){return Object(s.jsxs)("div",{className:"movie-match-container",children:[Object(s.jsx)("img",{className:"movie-match-gif",src:b,alt:"demo gif"}),Object(s.jsx)("h3",{className:"movie-match-description",children:"Sign up, create your list of favorite films, and see the 10 people with lists most similiar to yours."})]})},g=a(13),u=a.n(g),x=function(){return Object(s.jsxs)("div",{className:"brakebills-container",children:[Object(s.jsx)(u.a,{url:"https://youtu.be/67evagTgJ_c",controls:!0,height:"500px",width:"970px",modestbranding:"0"}),Object(s.jsx)("h3",{className:"brakebills-description",children:"This project was a fun take on a classic academic website - it's based on a fictional university from the book/ tv series The Magicians. The premise is that to outsiders, Brakebills is a regular ivy leage school, when in reality it teaches magic (think Hogwarts for adults.)"}),Object(s.jsx)("h3",{className:"brakebills-description",children:"This concept is reflected in the layout of the website - there's a public facing version that shows traditional university content, and secret content that can only be seen by logged in students or facutly."}),Object(s.jsx)("h3",{className:"brakebills-description",children:"I also had a lot of fun building a message board on the logged-in side. Users can see messages posted by other students, and replies are conditionally rendered by clicking on different posts. The user can also add their own posts or replies to the board, and the content is instantly rendered to the page as well as sent to the database to persist the information."})]})},U=function(){return Object(s.jsxs)("div",{className:"learn-tracker-container",children:[Object(s.jsx)(u.a,{url:"https://youtu.be/H1ecrdMsdp4",controls:!0,height:"500px",width:"970px",modestbranding:"0"}),Object(s.jsx)("h3",{className:"learn-tracker-description",children:"I built the Learning Tracker site to organize all my plans to learn new programming languages and frameworks. To create a responsive frontend, I implemented React.js, and use Semantic UI for styling. To build the backend, I created a Rails Api, and used a PostreSQL database to store user information and course data."}),Object(s.jsx)("h3",{className:"learn-tracker-description",children:"The most interesting aspect of creating this application was implementing the responsive progress bars. I installed the Victory Pie npm package to render the circular chart components, and created functions to calculate progress that rerun any time a box is checked."})]})},O=function(){return Object(s.jsxs)("div",{className:"wom-container",children:[Object(s.jsx)(u.a,{url:"https://youtu.be/_gVwOLFwaic",controls:!0,height:"500px",width:"970px",modestbranding:"0"}),Object(s.jsx)("h3",{className:"wom-description",children:"Using Javascript to build this app allowed me to create a very interactive user minterface. Players can select an existing character, or get 'sorted' into a house (chosen through a function that selects a random house id from the database). Once the game starts, magical creatures are randomly selected from the API, and rendered in random 'locations'(backgrounds) to create numerous scenarios."}),Object(s.jsx)("h3",{className:"wom-description",children:"There were a lot of challenging but rewarding pieces in creating this game. As a single page application, many elements need to stay hidden until specific scenarios are reached, and even then the items that should render are tied to events in the game - for instance, potion bottles at the bottom of the screen show how many lives a player has left, and are removed in order when a life is lost. This information is also stored in the backend (using a Rails API and a SQLite database), so that it persists."})]})},B=function(){var e=Object(c.useState)(Object(s.jsx)(x,{})),t=Object(j.a)(e,2),a=t[0],n=t[1],A=function(e){document.querySelector(".selected-tab").classList.remove("selected-tab"),e.currentTarget.classList.add("selected-tab")};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"side-tabs",children:[Object(s.jsxs)("div",{className:"tab selected-tab",onClick:function(e){n(Object(s.jsx)(x,{})),A(e)},children:[Object(s.jsx)("h3",{children:"Brakebills University"}),Object(s.jsx)("p",{children:"An academic website with secret content"})]}),Object(s.jsxs)("div",{className:"tab",onClick:function(e){n(Object(s.jsx)(U,{})),A(e)},children:[Object(s.jsx)("h3",{children:" Learning Tracker "}),Object(s.jsx)("p",{children:"Build or find custom curriculum"})]}),Object(s.jsxs)("div",{className:"tab",onClick:function(e){n(Object(s.jsx)(O,{})),A(e)},children:[Object(s.jsx)("h3",{children:" World of Magic "}),Object(s.jsx)("p",{children:"Cast spells to catch magical creatures"})]}),Object(s.jsxs)("div",{className:"tab",onClick:function(e){n(Object(s.jsx)(m,{})),A(e)},children:[Object(s.jsx)("h3",{children:"Movie Matcher "}),Object(s.jsx)("p",{children:"Meet your matches based on your favorite films"})]})]}),Object(s.jsx)("div",{className:"display-project-container",children:a})]})},p=function(){return Object(s.jsxs)("div",{id:"skills-page",children:[Object(s.jsx)("h2",{children:"Skills & Experience"}),Object(s.jsxs)("div",{className:"skills-container",children:[Object(s.jsxs)("div",{className:"frontend-container grid-item",children:[Object(s.jsx)("h3",{children:" <\xa0  Front End  \xa0>"}),Object(s.jsx)("h4",{children:"Languages: "}),Object(s.jsx)("p",{children:"JavaScript"}),Object(s.jsx)("p",{children:"HTML"}),Object(s.jsx)("p",{children:"CSS"}),Object(s.jsx)("h4",{children:"Frameworks/Libraries:"}),Object(s.jsx)("p",{children:"React"}),Object(s.jsx)("p",{children:"Bootstrap"}),Object(s.jsx)("p",{children:"Semantic UI"}),Object(s.jsx)("p",{children:"Material UI"})]}),Object(s.jsxs)("div",{className:"backend-container grid-item",children:[Object(s.jsx)("h3",{children:" <\xa0 Back End \xa0>"}),Object(s.jsx)("h4",{children:"Languages:"}),Object(s.jsx)("p",{children:"Ruby"}),Object(s.jsx)("p",{children:"SQL"}),Object(s.jsx)("p",{children:"Javascript"}),Object(s.jsx)("h4",{children:"Frameworks/Databases:"}),Object(s.jsx)("p",{children:"Rails"}),Object(s.jsx)("p",{children:"Node.js"}),Object(s.jsx)("p",{children:"Express.js"}),Object(s.jsx)("p",{children:"PostgreSQL"})]}),Object(s.jsxs)("div",{className:"testing-container grid-item",children:[Object(s.jsx)("h3",{children:" < \xa0 Testing \xa0>"}),Object(s.jsx)("h4",{children:"Languages:"}),Object(s.jsx)("p",{children:"Mocha"}),Object(s.jsx)("h4",{children:"Frameworks/Libraries:"}),Object(s.jsx)("p",{children:"Chai"}),Object(s.jsx)("p",{children:"Cypress"})]})]})]})},R=a(33),f=a(34),v=a(17),w=a(37),y=a(36),Q=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var s;return Object(R.a)(this,a),(s=t.call(this,e)).submitForm=s.submitForm.bind(Object(v.a)(s)),s.state={status:""},s}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.status;return Object(s.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/xleopone",method:"POST",children:[Object(s.jsx)("input",{type:"text",className:"input-text",name:"name",placeholder:"Your Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",className:"input-text",name:"_replyto",placeholder:"Your Email"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{name:"message",rows:"8",cols:"40",placeholder:"Message"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"SUCCESS"===e?Object(s.jsx)("p",{children:"Thanks! Your message was successfully submitted."}):Object(s.jsx)("button",{className:"submit-button",children:"Submit"}),"ERROR"===e&&Object(s.jsx)("p",{children:"Ooops! There was an error."})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,s=new FormData(a),c=new XMLHttpRequest;c.open(a.method,a.action),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},c.send(s)}}]),a}(n.a.Component),k=function(){return Object(s.jsx)("div",{id:"contact-page",children:Object(s.jsxs)("div",{className:"contact-container",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAGAAAAABAAAAYAAAAAEAAqACAAQAAAABAAAADqADAAQAAAABAAAADgAAAACO/LruAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAB0UlEQVQoFZ1SO2gVQRS95868ffueMYkgGisThEgklZUICgGDhYWKpLAXFMSQUhFE1CKtjSCIloJVKgVt0ttooVhZ2KSJoDH4Nrsz93g3hod20QPDXu6ecz9nRuQ/gYUFKaa29ndrTWE3NQqL+cjEehWn0tgdiWmuK1wzQQEKAOGfReg5eg5kIyEd+Lw+vhoB/Ujh/Gg/XPq55ZErXPgXXLiNfldlY2DvaPikTp0zhNvfNm2pyVLRWU2SqklMO2fLjJIy+WPAW7B8w7uf0rLAFWV+ooE1Es8mk7dFlNJbxPYUEV0j3yt5Rsy+Evq015GrcVAzR5XDPuCjHOWNCK/VDeYFcq8VevdlY34OiQ8Q5Lx6smpc499t/HbExk3ySIz60ogP7Q+f8gsy9lngRAcq7SotYq9AqGquuSsPaXE1BNzsQC7UmStOYRlxsWZY6QRbTLTTbsz1soPJcGK6nBTqfecEKJ91Ao63JqnKbIDMJEMVA2ZTxmXnvaLisWVaOHms1/cBFvf2dcmn6Lt5EhTDFdrYzfGcFHtKPVc3nIbgRfRLnSFwcLPia18gGkRb8RA7sZnQOY1f8iEPj+KuP7nvMjpSiu3qyVVed0w2NoeF/zX4BcnC64dZtW5KAAAAAElFTkSuQmCC",alt:"email logo",className:"contact-icons"}),"email: ",Object(s.jsx)("a",{href:"mailto:melindadiaz@me.com",children:" melindadiaz@me.com"})]}),Object(s.jsxs)("h3",{children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAtFBMVEUAAAB3UxB2UhB2UhB2UhB2UhB2UhB3UxFyTxJ2UhB2UhAAAAB2Ug93UxF5UxN3URB1URB2UhB2UhB2UhB2UhB2Ug91UhB2UhB1UQ9xVQ55UQ14UxB3VBJ2ThR3UhB0UhB1UA95UQ12UhB2URF0URJ2UhB3UxJ2UhB2UxB2UhB3UhB2UxB2URB3VRF4VQ51UhF2URB2UhB2UhB3UhB2UhB2UxB2URF2URB2UhB2URF2UhAAAAAEFWEjAAAAOnRSTlMAjvqM/NDzTR3s+QG3XCjxv+Pq3e3WyvJVEiYxOg2sUSMT+6k5ziuTs56urVIPJDugr9+7zdLYvPaKXX93kQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDA8VCALgqITcAAAAgUlEQVQY023PxRaCYAAF4fHHLhQDA+xuxbzv/2B6cAF4nOW3G1JGsYyFUTqTjQlSjnwhElQsQTkOqlC1E2DX6nIaTbXa7hc6dNWj74E/CGGIrxFh40kMps4M5hEspCWsIvCkNWx+YfsXdux14Cid4KzP3CW46hbcJTd4PA1Wcv/1BlNIJfcZP3HtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTE1VDIxOjA4OjAyKzAwOjAwWAAB5QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0xNVQyMTowODowMiswMDowMClduVkAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC",alt:"linkedin logo",className:"contact-icons"}),"linkedIn: ",Object(s.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/melindadiaz/",children:" linkedin.com/in/melindadiaz/"})]}),Object(s.jsxs)("h3",{children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA/FBMVEUAAABVVQB3UhB3URB3UhB2UhB1VBF3UBF2Ug93URB3Uw51UhF2UhB2UhB2UQ92Ug93UhB2UhB2UhB2UhB2UxB2Ug92UxB5VQx3URB1Ug95UQ11UQ94UA92Uw93Uw91UA92URB2UhBzTQ12UhB1UhB2URF2UxF2UhB2UhJ4VBB3UhF2UhB2UhAAAAB2Ug92UhB2UhCAgAB2UhB4UxB3VBJ2UhB2URBtSRJ4Sw92UxB2Ug92UhB2URBzVRJ3URB3URB2UxB2UhB2URB2UhB2ThR2VQ12UhF3VRF2UxB2UhB3VRGAQABxVRx2UxB2ThR3UxF2UQ90URJ2UhAAAAB8hnvsAAAAUnRSTlMAAz6Bn4A9SdbVR3r+/Xdj5K/6+K3nXxXxliZVMzRWI6DvFH2hqXvJOEDI7fIB9+zzAt4xOtzCDhGRx+uNKi+Q7qu82RonqA/Pvh4ECcwNqqY5Ow5onQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkDA4DLBUyhFgaAAAAuUlEQVQY0zWO6XZBQRCEa7iuWCP2JUIsQewiQYiLWGMJ9f4PY4Y79af7q9NdpwAp4XAahssUsOV+4E0e7519ftoKBBU/MvQUVhiJxhgHEkmmkM48Z19yyPO1gCJZ0mFl8g0VsqqNGvmOOhtNbYgW24iwoxndMFvokR/a6JOfKJFfgzsPZZ4Bk6Pv8eQHmFozWaYPzBvTxe8SWKlya3m42e7+9nIeJB9P6nXwT4qbcT7Z6eZIVhHWRe1XfTkiBvL2ORQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTRUMDM6NDQ6MjErMDA6MDCucm9+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE0VDAzOjQ0OjIxKzAwOjAw3y/XwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=",alt:"github logo",className:"contact-icons"}),"gitHub: ",Object(s.jsx)("a",{target:"_blank",href:"https://github.com/melindadiaz07",children:" github.com/melindadiaz07"})]}),Object(s.jsxs)("h3",{children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAyVBMVEUAAAB2VA91UQ92UhBzVRJ2Ug92URB2UhB0URJ2URB2URB3UhB2UxB2URN2UhB3VRF2UhB1Uw52UhB1UxBxVRN2Ug92UhB2Uw+AYAB2UhB2UhB2UhB2URB2Ug91VRV2UhB2UhF2UhB2UhJ2UhB3URB2UhB2Uw91UhB2UhB2UhB3TxF2UhF2Uw92UhB4Sw95UQ13UhAAAAB2UhB2URBVVQB2UhB2UhB3URFmZgB1URB3Uw91Ug+AVQB3UhB3URF1UBB6UhR2UhAAAABoS9tqAAAAQXRSTlMAQ1VOKlRS/jnCboOtKaQe/SWPlBvn8pcI4OzZjfcYXZniHPmBxDSh7dAtarb2ESbkAUGgA33LPAWjVtcGrmswGXKU/koAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AwOAzAPKZH8PQAAAJ9JREFUGNNlz+USwjAQBOAlSHB3L1LcSrGi+/4vxRWKDOTPbb7M5O6A3+NTSvmfMSAxiJAmGX5AhNRRICYQd+8JeUpKTQmkMxKyEnJS84UiWQLKlaoHtTrZaKLVNl7Q6ZI99M03YEAOzRE+MJb/jckXYErO5i9YLFewyDU8sKfcAFvusB+SB0B6agfOcXU6y2D6AllIWbCvuLlJhf62vwMQ+BldTKVPdAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0xNFQwMzo0ODoxNSswMDowMM6OrAAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMTRUMDM6NDg6MTUrMDA6MDC/0xS8AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"medium logo",className:"contact-icons"}),"blog: ",Object(s.jsx)("a",{target:"_blank",href:"https://melindadiaz-75942.medium.com/",children:" melindadiaz-75942.medium.com/"})]}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),Object(s.jsx)("h3",{children:"Or send me a message right here \u25be "}),Object(s.jsx)(Q,{})]})})},E=function(){return Object(s.jsx)("div",{className:"blog-container"})},I=a.p+"static/media/hexheadshot.8aa111ae.png",C=function(){return Object(s.jsxs)("div",{id:"home-page",children:[Object(s.jsxs)("div",{className:"home-page-container",children:[Object(s.jsx)("hr",{id:"top-rule"}),Object(s.jsx)("img",{src:I,alt:"headshot",className:"headshot"}),Object(s.jsx)("hr",{id:"bottom-rule"}),Object(s.jsx)("h2",{children:"Hi, I'm Melinda Diaz - a Software Engineer and Full Stack Developer living in Alexandria, VA."})]}),Object(s.jsx)("div",{className:"text-background"})]})};var S=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{id:"nav-container",children:Object(s.jsx)(l,{})}),Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(s.jsx)(h.a,{to:"/home"})}}),Object(s.jsx)(h.b,{exact:!0,path:"/home",render:function(){return Object(s.jsx)(C,{})}}),Object(s.jsx)(h.b,{exact:!0,path:"/about",render:function(){return Object(s.jsx)(d,{})}}),Object(s.jsx)(h.b,{exact:!0,path:"/projects",render:function(){return Object(s.jsx)(B,{})}}),Object(s.jsx)(h.b,{exact:!0,path:"/skills",render:function(){return Object(s.jsx)(p,{})}}),Object(s.jsx)(h.b,{exact:!0,path:"/contact",render:function(){return Object(s.jsx)(k,{})}}),Object(s.jsx)(h.b,{exact:!0,path:"/blog",render:function(){return Object(s.jsx)(E,{})}}),Object(s.jsx)(h.b,{render:function(){return Object(s.jsx)(h.a,{to:"/"})}})]})]})};a(76);i.a.render(Object(s.jsx)(r.a,{basename:"/portfolio",children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.39d2438a.chunk.js.map