"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[563],{4563:function(A,e,r){r.r(e),r.d(e,{default:function(){return j}});var t=r(9434),a=r(2791),s=r(7397),i=r(7689),n=r(1087),u="SuperheroList_superheroList__d7dPI",c="SuperheroList_superhero-card__IzvR0",o="SuperheroList_superheroImage__i3Rw+",S="SuperheroList_superhero-nickname__OYDkV",l="SuperheroList_pagination__jaXad",L="SuperheroList_page__QcKwv",h="SuperheroList_activePage__dGu0g",d="SuperheroList_arrowButton__TwiWH",p="SuperheroList_disabled__sFw0B",x="SuperheroList_buttonContainer__vftaH",f="SuperheroList_createButton__rMvCU",b=r(4892),m=r(3329),N=function(){var A=(0,t.I0)(),e=(0,i.s0)(),r=(0,t.v9)((function(A){return A.superheroes.superheroes})),N=(0,t.v9)((function(A){return A.superheroes.currentPage})),j=(0,t.v9)((function(A){return A.superheroes.totalPages}));(0,a.useEffect)((function(){A((0,s.r9)({page:N,limit:5}))}),[A,N]);for(var Q=b,v=[],Z=1;Z<=j;Z++)v.push(Z);return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:x,children:(0,m.jsx)("button",{onClick:function(){e("/create")},className:f,children:"Create Superhero"})}),(0,m.jsx)("ul",{className:u,children:r.map((function(A){return(0,m.jsx)(n.rU,{to:"info/".concat(A._id),children:(0,m.jsxs)("li",{className:c,children:[A.images.length>0?(0,m.jsx)("img",{src:A.images[0],alt:A.nickname,className:o}):(0,m.jsx)("img",{src:Q,alt:"Default"}),(0,m.jsx)("h3",{className:S,children:A.nickname})]})},A._id)}))}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("button",{className:"".concat(d," ").concat(1===N?p:""),onClick:function(){N>1&&A((0,s.r9)({page:N-1,limit:5}))},disabled:1===N,children:"Previous"}),v.map((function(e){return(0,m.jsx)("button",{className:N===e?h:L,onClick:function(){return r=e,void A((0,s.r9)({page:r,limit:5}));var r},children:e},e)})),(0,m.jsx)("button",{className:"".concat(d," ").concat(N===j?p:""),onClick:function(){N<j&&A((0,s.r9)({page:N+1,limit:5}))},disabled:N===j,children:"Next"})]})]})},j=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(N,{})})}},4892:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=563.a4ecd7c3.chunk.js.map