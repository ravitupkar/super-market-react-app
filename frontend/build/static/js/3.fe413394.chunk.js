(this["webpackJsonpsuper-market"]=this["webpackJsonpsuper-market"]||[]).push([[3],{68:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},80:function(e,a,t){"use strict";t.r(a);var n=t(10),l=t(11),i=t(14),c=t(12),r=t(13),s=t(0),m=t.n(s),u=t(68),o=t(8),p=t.n(o),h=t(21),d=t(16),b=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(c.a)(a).call(this,e))).handleSubmit=function(e){var a,n,l,i,c;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:e.preventDefault(),a=t.state,n=a.name,l=a.email,i=a.message,c={name:n,email:l,message:i},d.a.createContact(c).then((function(e){console.log(JSON.stringify(e)),t.setState({name:"",email:"",message:""})}));case 4:case"end":return r.stop()}}))},t.state={name:"",email:"",message:""},t.handleInputChange=t.handleInputChange.bind(Object(h.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(h.a)(t)),t}return Object(r.a)(a,e),Object(l.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(u.a)({},n,t))}},{key:"render",value:function(){return m.a.createElement("div",{className:"col-md-6 w3_agileits_contact_grid_right"},m.a.createElement("h2",{className:"w3_agile_header"},"Leave a",m.a.createElement("span",null," Message")),m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("span",{className:"input input--ichiro"},m.a.createElement("input",{className:"input__field input__field--ichiro",type:"text",id:"input-25",name:"name",value:this.state.name,onChange:this.handleInputChange,placeholder:"",required:""}),m.a.createElement("label",{className:"input__label input__label--ichiro",htmlFor:"input-25"},m.a.createElement("span",{className:"input__label-content input__label-content--ichiro"},"Your Name"))),m.a.createElement("span",{className:"input input--ichiro"},m.a.createElement("input",{className:"input__field input__field--ichiro",type:"email",id:"input-26",name:"email",value:this.state.email,onChange:this.handleInputChange,placeholder:" ",required:""}),m.a.createElement("label",{className:"input__label input__label--ichiro",htmlFor:"input-26"},m.a.createElement("span",{className:"input__label-content input__label-content--ichiro"},"Your Email"))),m.a.createElement("textarea",{name:"message",value:this.state.message,onChange:this.handleInputChange,placeholder:"Your message here...",required:""}),m.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(s.Component),_=t(5),f=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"col-md-6 w3_agileits_contact_grid_left"},m.a.createElement("div",{className:"agile_map"},m.a.createElement("iframe",{title:"title",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917",style:{border:"0",width:"100%"}})),m.a.createElement("div",{className:"agileits_w3layouts_map_pos"},m.a.createElement("div",{className:"agileits_w3layouts_map_pos1"},m.a.createElement("h3",null,"Contact Info"),m.a.createElement("p",null,"1234k Avenue, 4th block, New York City."),m.a.createElement("ul",{className:"wthree_contact_info_address"},m.a.createElement("li",null,m.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),m.a.createElement(_.b,{to:"mailto:info@example.com"},"info@example.com")),m.a.createElement("li",null,m.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"}),"+(0123) 232 232")),m.a.createElement("div",{className:"w3_agile_social_icons w3_agile_social_icons_contact"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement(_.b,{to:"#",className:"icon icon-cube agile_facebook"})),m.a.createElement("li",null,m.a.createElement(_.b,{to:"#",className:"icon icon-cube agile_rss"})),m.a.createElement("li",null,m.a.createElement(_.b,{to:"#",className:"icon icon-cube agile_t"})))))))}}]),a}(s.Component),E=t(15);t.d(a,"default",(function(){return g}));var g=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(E.a,{page:"Contact"}),m.a.createElement("div",{className:"about"},m.a.createElement("div",{className:"w3_agileits_contact_grids"},m.a.createElement(f,null),m.a.createElement(b,null),m.a.createElement("div",{className:"clearfix"}," "))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=3.fe413394.chunk.js.map