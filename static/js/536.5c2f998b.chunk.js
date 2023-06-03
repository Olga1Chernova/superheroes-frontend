"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[536],{3536:function(e,r,s){s.r(r),s.d(r,{default:function(){return b}});var a=s(5861),i=s(4687),n=s.n(i),t=s(5705),c=s(1686),m=s.n(c),l=s(6727),o=s(9434),d=s(7689),p=s(7397),u="SuperheroAddPage_container__TREHk",h="SuperheroAddPage_title__-3Ql6",_="SuperheroAddPage_formControl__T8jqp",x="SuperheroAddPage_label__AL7Ga",N="SuperheroAddPage_input__YChs4",g="SuperheroAddPage_error__+Ww79",j="SuperheroAddPage_button__tQ9C5",v=s(3329),f=l.Ry().shape({nickname:l.Z_().required("Nickname is required"),real_name:l.Z_().required("Real name is required"),origin_description:l.Z_().required("Origin description is required"),superpowers:l.Z_().trim().required("Superpowers are required").test("is-array","Superpowers must be a comma-separated list",(function(e){if(!e)return!0;var r=e.split(",").map((function(e){return e.trim()}));return Array.isArray(r)})),catch_phrase:l.Z_().required("Catch phrase is required"),images:l.Z_().url("Invalid images URL format")}),b=function(){var e=(0,o.I0)(),r=(0,d.s0)(),s=function(){var s=(0,a.Z)(n().mark((function s(a,i){var t,c;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=i.setSubmitting,c=i.resetForm,s.prev=1,a.superpowers=a.superpowers.split(","),a.images=a.images.split(","),s.next=6,e((0,p.ze)(a));case 6:m().Notify.success("Superhero created successfully"),t(!1),c(),r("/"),s.next=16;break;case 12:s.prev=12,s.t0=s.catch(1),m().Notify.failure("Failed to create superhero due to server error ".concat(s.t0.message)),t(!1);case 16:case"end":return s.stop()}}),s,null,[[1,12]])})));return function(e,r){return s.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("h2",{className:h,children:"Add Superhero"}),(0,v.jsx)(t.J9,{initialValues:{nickname:"",real_name:"",origin_description:"",superpowers:"",catch_phrase:"",images:""},validationSchema:f,onSubmit:function(e,r){var a=r.setSubmitting,i=r.resetForm;return s(e,{setSubmitting:a,resetForm:i})},children:function(e){var r=e.isSubmitting;return(0,v.jsxs)(t.l0,{children:[(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{className:x,htmlFor:"nickname",children:"Nickname:"}),(0,v.jsx)(t.gN,{type:"text",id:"nickname",name:"nickname",className:N}),(0,v.jsx)(t.Bc,{name:"nickname",component:"div",className:g})]}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{className:x,htmlFor:"real_name",children:"Real Name:"}),(0,v.jsx)(t.gN,{type:"text",id:"real_name",name:"real_name",className:N}),(0,v.jsx)(t.Bc,{name:"real_name",component:"div",className:g})]}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{className:x,htmlFor:"origin_description",children:"Origin Description:"}),(0,v.jsx)(t.gN,{type:"text",id:"origin_description",name:"origin_description",className:N}),(0,v.jsx)(t.Bc,{name:"origin_description",component:"div",className:g})]}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{className:x,htmlFor:"superpowers",children:"Superpowers:"}),(0,v.jsx)(t.gN,{type:"text",id:"superpowers",name:"superpowers",className:N}),(0,v.jsx)(t.Bc,{name:"superpowers",component:"div",className:g})]}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{className:x,htmlFor:"catch_phrase",children:"Catch Phrase:"}),(0,v.jsx)(t.gN,{type:"text",id:"catch_phrase",name:"catch_phrase",className:N}),(0,v.jsx)(t.Bc,{name:"catch_phrase",component:"div",className:g})]}),(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)("label",{className:x,htmlFor:"images",children:"Images:"}),(0,v.jsx)(t.gN,{type:"text",id:"images",name:"images",className:N}),(0,v.jsx)(t.Bc,{name:"images",component:"div",className:g})]}),(0,v.jsx)("button",{className:j,type:"submit",disabled:r,children:"Create"})]})}})]})}}}]);
//# sourceMappingURL=536.5c2f998b.chunk.js.map