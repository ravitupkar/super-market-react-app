(this["webpackJsonpsuper-market"]=this["webpackJsonpsuper-market"]||[]).push([[5],{68:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},72:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t(68),s=t(8),r=t.n(s),c=t(10),i=t(11),l=t(14),m=t(12),o=t(21),u=t(13),h=t(0),d=t.n(h),p=t(16),b=t(7),g=t(15);function f(e){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"alert alert-success alert-dismissible"},d.a.createElement("a",{href:"/",className:"close","data-dismiss":"alert","aria-label":"close"},"\xd7"),d.a.createElement("strong",null,"Success!")," ",e.message),d.a.createElement("div",{className:"register-home"},d.a.createElement("a",{href:"/login"},"Login")))}var E=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).handleSubmit=function(e){var a,n,s,c,i,l,m,o;return r.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:e.preventDefault(),a=t.state,n=a.fName,s=a.lName,c=a.subscribe,i=a.email,l=a.password,m=a.termsandconditions,o={firstName:n,lastName:s,subscribe:c,email:i,password:l,terms:m},p.a.createtUser(o).then((function(e){console.log(JSON.stringify(e)),t.setState({fName:"",lName:"",subscribe:!1,email:"",password:"",cpassword:"",termsandconditions:"",message:"Your are register successfully",redirect:!0})}));case 4:case"end":return r.stop()}}))},t.state={isAuthenticated:!1,fName:"",lName:"",subscribe:!1,email:"",password:"",cpassword:"",termsandconditions:"",message:"",redirect:!1},t.handleInputChange=t.handleInputChange.bind(Object(o.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(o.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,s=a.name;this.setState(Object(n.a)({},s,t))}},{key:"componentDidMount",value:function(){this.setState({message:""})}},{key:"render",value:function(){return this.state.redirect?d.a.createElement(b.a,{to:"/login"}):d.a.createElement(d.a.Fragment,null,d.a.createElement(g.a,{page:"Register"}),d.a.createElement("div",{className:"register"},d.a.createElement("div",{className:"container"},d.a.createElement("h2",null,"Register Here"),d.a.createElement("div",{className:"login-form-grids"},d.a.createElement("h5",null,"profile information"),d.a.createElement("form",{onSubmit:this.handleSubmit,method:"post"},d.a.createElement("input",{type:"text",name:"fName",placeholder:"First Name...",required:"",value:this.state.fName,onChange:this.handleInputChange}),d.a.createElement("input",{type:"text",name:"lName",placeholder:"Last Name...",required:"",value:this.state.lName,onChange:this.handleInputChange}),d.a.createElement("div",{className:"register-check-box"},d.a.createElement("div",{className:"check"},d.a.createElement("label",{className:"checkbox"},d.a.createElement("input",{type:"checkbox",name:"subscribe",checked:this.state.subscribe,onChange:this.handleInputChange}),d.a.createElement("i",null," "),"Subscribe to Newsletter"))),d.a.createElement("h6",null,"Login information"),d.a.createElement("input",{type:"email",name:"email",placeholder:"Email Address",required:"",value:this.state.email,onChange:this.handleInputChange}),d.a.createElement("input",{type:"password",name:"password",placeholder:"Password",required:"",value:this.state.password,onChange:this.handleInputChange}),d.a.createElement("input",{type:"password",name:"cpassword",placeholder:"Password Confirmation",required:"",value:this.state.cpassword,onChange:this.handleInputChange}),d.a.createElement("div",{className:"register-check-box"},d.a.createElement("div",{className:"check"},d.a.createElement("label",{className:"checkbox"},d.a.createElement("input",{type:"checkbox",name:"termsandconditions",checked:this.state.termsandconditions,onChange:this.handleInputChange}),d.a.createElement("i",null," "),"I accept the terms and conditions"))),d.a.createElement("input",{type:"submit",value:"Register"}),d.a.createElement("br",null),this.state.message?d.a.createElement(f,{message:this.state.message}):"")))))}}]),a}(h.Component)}}]);
//# sourceMappingURL=5.05be4bd8.chunk.js.map