(this["webpackJsonpreact-fake-store"]=this["webpackJsonpreact-fake-store"]||[]).push([[4],{40:function(e,t,c){"use strict";c.r(t);c(2);var a=c(6),s=c(3),r=c(7),i=c(14),n=c(10),l=c(1);const d=s.c.section`
  display: grid;
  place-items: center;
  ${r.a.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}

  .cart-content {
    display: grid;
    gap: 1rem;
    ${r.a.lg`
    grid-column: 1/3;
    `}
  }

  .cart__items {
    padding: 1rem;
  }

  .cart__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  
  .clear-btn {
    padding: 0.75rem 1.5rem;
  }
`;t.default=()=>{const{cart:e,clearCart:t}=Object(n.b)();return e.length<1?Object(l.jsx)(i.i,{}):Object(l.jsxs)("main",{children:[Object(l.jsx)(i.c,{title:"Cart"}),Object(l.jsxs)(d,{className:"page",children:[Object(l.jsxs)("div",{className:"cart-content",children:[Object(l.jsx)("div",{className:"cart__items",children:e.map((e=>Object(l.jsx)(i.f,{...e},e.id)))}),Object(l.jsxs)("div",{className:"cart__links",children:[Object(l.jsx)(i.d,{variant:"primary",children:Object(l.jsx)(a.b,{to:"/products",children:"Buy More Items"})}),Object(l.jsx)(i.d,{variant:"secondary",className:"clear-btn",onClick:t,children:"Empty Cart"})]})]}),Object(l.jsx)(i.g,{})]})]})}}}]);
//# sourceMappingURL=4.dc84085a.chunk.js.map