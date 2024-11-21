(this["webpackJsonpreact-fake-store"]=this["webpackJsonpreact-fake-store"]||[]).push([[9],{39:function(e,c,t){"use strict";t.r(c);var r=t(2),s=t(5),i=t(6),a=t(3),o=t(8),n=t(14),j=t(7),l=t(1);const d=a.c.section`
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    padding: 1.5rem 1rem;
    background: #fff;
    display: grid;
    justify-items: center;
    gap: 2rem;
    ${j.a.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}

    .product__img {
      img {
        max-width: 20rem;
        object-fit: contain;
      }
    }

    .product__info {
      display: grid;
      gap: 1rem;
      ${j.a.lg`
      grid-column: 2/4;
    `}

      button {
        width: max-content;
      }

      .info__price {
        color: var(--green-color-1);
        span {
          color: var(--red-color-1);
        }
      }

      .info__category {
        color: var(--green-color-1);
        span {
          color: var(--gray-color-1);
        }
      }
    }
  }
`;c.default=()=>{const e=Object(s.f)(),{id:c}=Object(s.g)(),{single_product:t,single_product_loading:a,single_product_error:j,fetchSingleProduct:b}=Object(o.b)(),{title:p,price:g,image:x,category:f,description:m,rating:u}=t;return Object(r.useEffect)((()=>{b(c)}),[c]),Object(r.useEffect)((()=>{j&&setTimeout((()=>{e("/")}),3e3)}),[j]),a?Object(l.jsx)("div",{className:"page-w-b",children:Object(l.jsx)(n.p,{})}):j?Object(l.jsx)("div",{className:"page-w-b",children:Object(l.jsx)(n.j,{})}):Object(l.jsxs)("main",{children:[Object(l.jsx)(n.c,{title:p,products:!0}),Object(l.jsx)(d,{className:"page",children:Object(l.jsxs)("article",{children:[Object(l.jsx)("div",{className:"product__img",children:Object(l.jsx)("img",{src:x,alt:p})}),Object(l.jsxs)("div",{className:"product__info",children:[Object(l.jsx)(n.d,{variant:"secondary",children:Object(l.jsx)(i.b,{to:"/products",children:"back to products"})}),Object(l.jsx)(n.x.H2,{children:p}),Object(l.jsx)(n.w,{stars:u}),Object(l.jsxs)(n.x.P,{className:"info__price",children:["Price : ",Object(l.jsxs)("span",{children:["$",g]})]}),Object(l.jsxs)(n.x.P,{className:"info__category",children:["Category : ",Object(l.jsx)("span",{children:f})]}),Object(l.jsx)(n.x.P,{children:m}),Object(l.jsx)(n.a,{product:t})]})]})})]})}}}]);
//# sourceMappingURL=9.4f8ff801.chunk.js.map