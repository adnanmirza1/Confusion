(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{142:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),s=t.n(l),o=(t(93),t(94),t(18)),c=t(19),m=t(21),i=t(20),u=t(14),d=t(146),h=t(147),E=t(148),f=t(149),p=t(150),g=t(151),b=t(152),v=t(153),N=t(173),y=t(154),w=t(155),O=t(156),M=t(157),k=t(158),C=t(7),L=t(6),S=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},j="http://localhost:3001/",x=t(52);function F(e){var a=e.dish;return r.a.createElement(x.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(h.a,{top:!0,src:j+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(p.a,null,a.description))))}function D(e){var a=e.comments,t=e.postComment,n=e.dishId,l=a.map((function(e){return r.a.createElement("li",{key:e.id},e.comment,r.a.createElement("br",null),r.a.createElement("br",null),"-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))),r.a.createElement("br",null),r.a.createElement("br",null))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},l),r.a.createElement(R,{dishId:n,postComment:t}))}var A=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(S,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(C.b,{to:"/menu"},"Menu")),r.a.createElement(b.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(F,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(D,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}},R=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(v.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}," Submit comment")),r.a.createElement("div",{className:"row row-content"},r.a.createElement(N.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(y.a,{toggle:this.toggleModal}," Submit comment"),r.a.createElement(w.a,null,r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(L.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"rating"},"\xa0\xa0Rating"),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"author",md:2},"Your name"),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.text,{model:".author",id:"author",name:"author",placeholder:"Author",className:"form-control",validators:{required:I,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:T(15)}}),r.a.createElement(L.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 3 characters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"feedback",md:2},"Your feedback"),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.textarea,{model:".message",id:"message",name:"message",rows:"6",className:"form-control",validators:{required:I}}),r.a.createElement(L.Errors,{className:"text-danger",model:".message",show:"touched",messages:{required:"Required"}}))),r.a.createElement(v.a,{type:"submit",value:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component),q=t(159);function P(e){var a=e.dish;e.onClick;return r.a.createElement(d.a,null,r.a.createElement(C.b,{to:"/menu/".concat(a.id)},r.a.createElement(h.a,{width:"100%",src:j+a.image,alt:a.name}),r.a.createElement(q.a,null,r.a.createElement(f.a,null,a.name))))}var H=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(P,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(S,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(C.b,{to:"/home"},"Home")),r.a.createElement(b.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},_=t(160);function W(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(S,null):n?r.a.createElement("h4",null,n):r.a.createElement(x.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(h.a,{src:j+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(_.a,null,a.designation):null,r.a.createElement(p.a,null,a.description))))}var U=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.leader}))))},Y=t(161),B=t(162),G=t(163),z=t(164),K=t(165),J=t(166),Z=t(167),$=t(168),Q=t(169),V=t(170),X=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleLogin=n.handleLogin.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Y.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(B.a,{onClick:this.toggleNav}),r.a.createElement(G.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(z.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(K.a,{navbar:!0},r.a.createElement(J.a,null,r.a.createElement(C.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(J.a,null,r.a.createElement(C.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(J.a,null,r.a.createElement(C.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(J.a,null,r.a.createElement(C.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(K.a,{className:"ml-auto",navbar:!0},r.a.createElement(J.a,null,r.a.createElement(v.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(Z.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(N.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(y.a,{toggle:this.toggleModal},"Login"),r.a.createElement(w.a,null,r.a.createElement($.a,{onSubmit:this.handleLogin},r.a.createElement(Q.a,null,r.a.createElement(M.a,{htmlFor:"username"},"Username"),r.a.createElement(V.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(Q.a,null,r.a.createElement(M.a,{htmlFor:"password"},"Password"),r.a.createElement(V.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(Q.a,{check:!0},r.a.createElement(M.a,{check:!0},r.a.createElement(V.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(v.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var ee=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(C.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},ae=t(171),te=t(172);function ne(e){var a=e.leader;return r.a.createElement("div",{key:a.id,className:"col-12 mt-5"},r.a.createElement(ae.a,{tag:"li"},r.a.createElement(ae.a,{left:!0,middle:!0},r.a.createElement(ae.a,{object:!0,src:a.image,alt:a.name})),r.a.createElement(ae.a,{body:!0,className:"col-12"},r.a.createElement(ae.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description))))}var re=function(e){var a=e.leaders.map((function(e){return r.a.createElement(ne,{leader:e})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(C.b,{to:"/home"},"Home")),r.a.createElement(b.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.a,null,r.a.createElement(te.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(E.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,null,r.a.createElement(E.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(ae.a,{list:!0},a))))},le=t(30),se=t(25),oe=function(e){return e&&e.length},ce=function(e){return function(a){return!a||a.length<=e}},me=function(e){return function(a){return a&&a.length>=e}},ie=function(e){return!isNaN(Number(e))},ue=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},de=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(C.b,{to:"/home"},"Home")),r.a.createElement(b.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement($.a,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:oe,minLength:me(3),maxLength:ce(15)}}),r.a.createElement(L.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:oe,minLength:me(3),maxLength:ce(15)}}),r.a.createElement(L.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:oe,minLength:me(3),maxLength:ce(15),isNumber:ie}}),r.a.createElement(L.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:oe,validEmail:ue}}),r.a.createElement(L.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(M.a,{check:!0},r.a.createElement(L.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(k.a,{md:{size:3,offset:1}},r.a.createElement(L.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(M.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(k.a,{md:10},r.a.createElement(L.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(O.a,{className:"form-group"},r.a.createElement(k.a,{md:{size:10,offset:2}},r.a.createElement(v.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),he=function(){return{type:"DISHES_LOADING"}},Ee=function(e){return{type:"DISHES_FAILED",payload:e}},fe=function(e){return{type:"ADD_DISHES",payload:e}},pe=function(e){return{type:"COMMENTS_FAILED",payload:e}},ge=function(e){return{type:"ADD_COMMENTS",payload:e}},be=function(){return{type:"PROMOS_LOADING"}},ve=function(e){return{type:"PROMOS_FAILED",payload:e}},Ne=function(e){return{type:"ADD_PROMOS",payload:e}},ye=t(15),we=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement("div",null,r.a.createElement(ye.TransitionGroup,null,r.a.createElement(ye.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(le.d,{location:this.props.location},r.a.createElement(le.b,{path:"/home",component:function(){return r.a.createElement(U,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),r.a.createElement(le.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(re,{leaders:e.props.leaders})}}),"} />",r.a.createElement(le.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(H,{dishes:e.props.dishes})}}),r.a.createElement(le.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(A,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(le.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(de,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(le.a,{to:"/home"}))))),r.a.createElement(ee,null))}}]),t}(n.Component),Oe=Object(le.g)(Object(se.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(j+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(he(!0)),fetch(j+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(fe(a))})).catch((function(a){return e(Ee(a.message))}))}))},resetFeedbackForm:function(){e(L.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(j+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(be()),fetch(j+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ne(a))})).catch((function(a){return e(ve(a.message))}))}))}}}))(we)),Me=(t(142),t(12)),ke=t(26),Ce=t(86),Le=t(87),Se=t.n(Le),je={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Me.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Me.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Me.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Me.a)({},e,{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Me.a)({},e,{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(Me.a)({},e,{comments:e.comments.concat(t)});default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Me.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Me.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Me.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Ae=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,a=arguments.length>1?arguments[1]:void 0;return a.type,e},Te=Object(ke.createStore)(Object(ke.combineReducers)(Object(Me.a)({dishes:xe,comments:Fe,promotions:De,leaders:Ie},Object(L.createForms)({feedback:je}))),Object(ke.applyMiddleware)(Ce.a,Se.a)),Re=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(se.Provider,{store:Te},r.a.createElement(C.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Oe,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(143),t(144);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,a,t){e.exports=t(145)},93:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.620a6ee7.chunk.js.map