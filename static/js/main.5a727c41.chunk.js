(this["webpackJsonpread-my-news"]=this["webpackJsonpread-my-news"]||[]).push([[0],{144:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(10),r=c.n(i),s=(c(85),c(19)),a=c(69),l=c.n(a),d=c(168),j=c(160),o=c(161),h=c(162),b=c(163),x=c(164),O=c(165),m=c(70),p=c.n(m),g=c(158),u=Object(g.a)({media:{height:200},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space=between",borderBottom:"10px solid white",height:"31rem",boxShadow:"0 0 5px 2px rgba(10,50,60,0.5)",transition:"0.3s ease"},activeCard:{boxShadow:"0 0 5px 2px black",transform:"scale(1.03,1.03)"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardAction:{padding:"0 16px 3px 16px",display:"flex",justifyContent:"space-between"}}),y=c(2),f=function(e){var t=e.article,c=t.description,n=t.publishedAt,i=t.source,r=t.title,s=t.url,a=t.urlToImage,l=e.i,m=e.activearticle,g=u();return Object(y.jsxs)(d.a,{className:p()(g.card,m===l?g.activeCard:null),children:[Object(y.jsxs)(j.a,{href:s,target:"_black",children:[Object(y.jsx)(o.a,{className:g.media,image:a||"https://media.gettyimages.com/vectors/breaking-news-vector-id1183566393?s=612x612"}),Object(y.jsxs)("div",{className:g.details,children:[Object(y.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(n).toDateString()}),Object(y.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"h2",children:i.name})]}),Object(y.jsx)(h.a,{gutterBottom:!0,variant:"h5",className:g.title,children:r}),Object(y.jsx)(b.a,{children:Object(y.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:c})})]}),Object(y.jsxs)(x.a,{className:g.cardAction,children:[Object(y.jsx)(O.a,{size:"small",color:"primary",children:"Learn More"}),Object(y.jsx)(h.a,{variant:"h5",color:"textSecondary",children:l+1})]})]})},w=c(167),v=c(166),N=Object(g.a)({container:{padding:"0 5%",width:"100%",margin:0},container1:{padding:"0 5%",width:"100%",margin:"0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},image:{width:"50rem",alignItems:"center"},cards:{margin:"30px",height:"350px",width:"250px",backgroundColor:"purple",color:"white",textAlign:"center",padding:"10px",borderRadius:"10px",boxShadow:"0 0 5px 5px rgba(0,0,0,0.5)"}}),k=function(e){var t=e.articles,c=e.activearticle,n=N();return t.length?Object(y.jsx)(w.a,{in:!0,children:Object(y.jsx)(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(y.jsx)(v.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(y.jsx)(f,{article:e,activearticle:c,i:t})},t)}))})}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("center",{children:Object(y.jsx)("img",{src:"https://media-exp1.licdn.com/dms/image/C561BAQFzAiAvq0Jg8Q/company-background_10000/0/1565260089604?e=2159024400&v=beta&t=ygcEIMzRHClwTjBwChX2naoGiS2TCeDwozFfEAM73ek",className:n.image,alt:""})}),Object(y.jsxs)("div",{className:n.container1,children:[Object(y.jsxs)("div",{className:n.cards,children:[Object(y.jsx)("h3",{children:Object(y.jsx)("strong",{children:"About the Project"})}),Object(y.jsx)("h4",{children:"Try saying:"}),Object(y.jsx)("h4",{children:Object(y.jsx)("strong",{children:"Tell me about the project"})}),Object(y.jsx)("h3",{children:Object(y.jsx)("strong",{children:"About working"})}),Object(y.jsx)("h4",{children:"Try saying:"}),Object(y.jsx)("h4",{children:Object(y.jsx)("strong",{children:"What this project can do?"})})]}),Object(y.jsxs)("div",{className:n.cards,children:[Object(y.jsx)("h3",{children:Object(y.jsx)("strong",{children:"Latest news"})}),Object(y.jsx)("h4",{children:"Try saying:"}),Object(y.jsx)("h4",{children:Object(y.jsx)("strong",{children:"Give me the Latest News"})}),Object(y.jsx)("h5",{children:"After showing the latest news "}),Object(y.jsx)("h5",{children:"if you want me to read it"}),Object(y.jsx)("h5",{children:"Try saying: yes (after I ask you)"})]}),Object(y.jsxs)("div",{className:n.cards,children:[Object(y.jsx)("h3",{children:Object(y.jsx)("strong",{children:"News by term:"})}),Object(y.jsx)("h4",{children:"Try Saying:"}),Object(y.jsx)("h4",{children:Object(y.jsx)("strong",{children:'What is up with the ("term")?'})}),Object(y.jsx)("h5",{children:"Example:"}),Object(y.jsx)("h5",{children:"What is up with coronavirus?"})]}),Object(y.jsxs)("div",{className:n.cards,children:[Object(y.jsx)("h3",{children:Object(y.jsx)("strong",{children:"Open Article:"})}),Object(y.jsx)("h4",{children:"Try saying:"}),Object(y.jsx)("h3",{children:"Open Article Number (number)"}),Object(y.jsx)("h3",{children:Object(y.jsx)("strong",{children:"Open portfolio:"})}),Object(y.jsx)("h4",{children:"Try saying:"}),Object(y.jsx)("h3",{children:"Open the Portfolio"})]})]})]})},A=c(73),C=c.n(A),S=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(-1),a=Object(s.a)(r,2),d=a[0],j=a[1];return Object(n.useEffect)((function(){l()({key:"5d88918a1ca328b42688f63e32efb6562e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,c=e.articles,n=e.number;if("newHeadlines"===t)console.log(c),i(c),j(-1);else if("highlight"===t)j((function(e){return e+1}));else if("open"===t){var r=n.length>2?C()(n,{fuzzy:!0}):n;window.open(c[r-1].url,"_blank")}else"openportfolio"===t&&window.open("https://vedant-jain03.github.io/portfolio/","_blank")}})}),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:Object(y.jsx)("center",{children:"Welcome To Read-My-News"})}),Object(y.jsx)(k,{articles:c,activearticle:d})]})};r.a.render(Object(y.jsx)(S,{}),document.getElementById("root"))},85:function(e,t,c){}},[[144,1,2]]]);
//# sourceMappingURL=main.5a727c41.chunk.js.map