(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(66),c=n.n(o),s=(n(201),n(23)),i=n.n(s),u=n(51),l=n(25),d=n(31),h=n(26),f=n(27),m=(n(203),n(204),n(3)),p=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showMore:!1},e}return Object(d.a)(n,[{key:"showMore",value:function(){!1===this.state.showMore?this.setState({showMore:!0}):this.setState({showMore:!1})}},{key:"showText",value:function(){return!1===this.state.showMore?"Show More":"Show Less"}},{key:"desc",value:function(e){return!1===this.state.showMore?"":e.description}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"event",children:[Object(m.jsx)("h2",{children:t.summary}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Creator:"})," ",t.creator.email]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Start Time:"})," ",t.start.dateTime]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Location:"})," ",t.location]}),this.state.showMore&&Object(m.jsx)("p",{className:"description",children:this.desc(t)}),Object(m.jsx)("button",{className:"details-btn",onClick:function(){e.showMore(t)},children:this.showText()})]})})}}]),n}(r.Component),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"eventList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(p,{event:e})},e.id)}))})})}}]),n}(r.Component),b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Alert",children:Object(m.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),g=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,fontWeight:"500",fontSize:"1em",height:"45px"}},r.color="#365c89",r}return n}(b),j=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,fontWeight:"500",fontSize:"1em"}},r.color="red",r}return n}(b),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"citySearch",children:[Object(m.jsx)(g,{text:this.state.infoText}),Object(m.jsx)("input",{type:"text",className:"city",label:"Search for events by City",placeholder:"Search for a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return console.log(n),e.setState({numberOfEvents:n}),n<1||n>32?e.setState({errorText:"Please choose a number between 1 and 32",numberOfEvents:""}):(e.setState({numberOfEvents:n,errorText:""}),void e.props.updateNumberOfEvents(n))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"numberOfEvents",children:[Object(m.jsx)("label",{htmlFor:"numberOfEvent",children:"Number of Events"}),Object(m.jsx)("input",{type:"number",className:"event-number-input",placeholder:"Enter Number of Events",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(m.jsx)(j,{text:this.state.errorText})]})}}]),n}(r.Component),y=(n(206),n(189));var x=function(e){return e.showWelcomeScreen?Object(m.jsxs)("div",{className:"WelcomeScreen",children:[Object(m.jsx)("h1",{children:"Welcome to the MeetApp for Coding Events"}),Object(m.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(m.jsx)("div",{className:"button_cont",align:"center",children:Object(m.jsxs)("div",{class:"google-btn",children:[Object(m.jsx)("div",{class:"google-icon-wrapper",children:Object(m.jsx)(y.a,{size:"2.4rem"})}),Object(m.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})})]})}),Object(m.jsx)("a",{href:"https://edisonabdiel.github.io/meet-app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},k=n(18),S=n(359),T=n(366),E=n(180),Z=n(92),W=n(74),M=function(e){var t=e.events,n=["React","JavaScript","Node","jQuery","AngularJS"],a=["#FFA06B","#FC93A8","#F74568","#F48EDE","#EB63CD"];Object(r.useEffect)((function(){i((function(){return function(){var e=n.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e.filter((function(e){return e.value}))}()}))}),[t]);var o=Object(r.useState)([]),c=Object(k.a)(o,2),s=c[0],i=c[1];return Object(m.jsx)(S.a,{height:400,children:Object(m.jsxs)(T.a,{width:400,height:400,children:[Object(m.jsx)(E.a,{data:s,cx:200,cy:200,labelLine:!1,outerRadius:80,innerRadius:10,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:s.map((function(e,t){return Object(m.jsx)(Z.a,{fill:a[t]},"cell-".concat(t))}))}),Object(m.jsx)(W.a,{align:"center",height:45})]})})},C=n(363),N=n(364),A=n(185),L=n(186),J=n(77),q=n(191),B=n(190),R=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2022-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2022-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2022-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2022-05-19T19:14:30.000Z",updated:"2022-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2022-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2022-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2022-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000t",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2022-05-19T19:17:46.000Z",updated:"2022-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2022-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2022-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2022-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000w",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2022-05-19T19:14:30.000Z",updated:"2022-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2022-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2022-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2022-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];R=JSON.parse(JSON.stringify(R));var D=n(120),I=n.n(D),F=n(97),U=n.n(F),z=function(e){var t=e.map((function(e){return e.location}));return Object(B.a)(new Set(t))},H=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return U.a.done(),e.abrupt("return",R);case 4:return t=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},e.next=7,P();case 7:if(!(n=e.sent)){e.next=17;break}return t(),r="https://dld2mjoeyk.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=13,I.a.get(r);case 13:return(a=e.sent).data&&(o=z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),U.a.done(),e.abrupt("return",a.data.events);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://a8g82lvs56.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,H(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,I.a.get("https://a8g82lvs56.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",a&&_(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.numberOfEvents,r=e.state;r.currentLocation,r.numberOfEvents;t&&Y().then((function(r){var a=("all"===t?r:r.filter((function(e){return e.location===t}))).slice(0,n);e.setState({events:a,currentLocation:t})}))},e.updateNumberOfEvents=function(t){e.setState({numberOfEvents:t}),e.updateEvents(e.state.currentLocation,t)},e.getData=function(){var t=e.state,n=t.locations,r=t.events;return n.map((function(e){var t=r.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,a,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,H(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&Y().then((function(e){o.mounted&&o.setState({events:e,locations:z(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(m.jsx)("div",{className:"App"}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"app-name",children:"Meet App"}),Object(m.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(m.jsx)(O,{updateNumberOfEvents:this.updateNumberOfEvents,numberOfEvents:this.state.numberOfEvents}),Object(m.jsx)("h4",{children:"Events in each city"}),Object(m.jsxs)("div",{className:"data-vis-wrapper",children:[Object(m.jsx)(M,{events:this.state.events}),Object(m.jsx)(S.a,{height:400,children:Object(m.jsxs)(C.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(m.jsx)(N.a,{}),Object(m.jsx)(A.a,{type:"category",dataKey:"city",name:"city"}),Object(m.jsx)(L.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(m.jsx)(J.a,{cursor:{strokeDasharray:"3 3"}}),Object(m.jsx)(q.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(m.jsx)(v,{events:this.state.events}),Object(m.jsx)(x,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){P()}})]})}}]),n}(r.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};n(187).config("67016e93f38e44a18280fb78cce9175f").install(),c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}(),K()}},[[358,1,2]]]);
//# sourceMappingURL=main.b97ca39f.chunk.js.map