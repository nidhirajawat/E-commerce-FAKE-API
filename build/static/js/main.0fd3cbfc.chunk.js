(this["webpackJsonpreact-fake-store"]=this["webpackJsonpreact-fake-store"]||[]).push([[0],{10:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(2),i=r(4);const c=(e,t)=>{const{type:r,payload:n}=t;if(r===i.a){const{product:t,amount:r}=n,i=e.cart.find((e=>e.id===t.id));if(i){const t=e.cart.map((e=>{if(e.id===i.id){let t=e.amount+r;return{...e,amount:t}}return e}));return{...e,cart:t}}{const{id:n,title:i,image:c,price:o}=t,a={id:n,title:i,image:c,price:o,amount:r};return{...e,cart:[...e.cart,a],isCheckout:!1}}}if(r===i.t){const{id:t,value:r}=n,i=e.cart.map((e=>{if(e.id===t){if("inc"===r){let t=e.amount+1;return{...e,amount:t}}if("dec"===r){let t=e.amount-1;return t<1&&(t=1),{...e,amount:t}}}return e}));return{...e,cart:i}}if(r===i.p){const t=e.cart.filter((e=>e.id!==n));return{...e,cart:t}}if(r===i.c)return{...e,cart:[]};if(r===i.f){const{total_items:t,total_price:r}=e.cart.reduce(((e,t)=>{const{amount:r,price:n}=t;return e.total_items+=r,e.total_price+=n*r,e}),{total_price:0,total_items:0});return{...e,total_items:t,total_price:r}}if(r===i.b)return{...e,isCheckout:!0,cart:[]};throw new Error(`No Matching "${r}" - action type `)};var o=r(1);const a={cart:(()=>{let e=localStorage.getItem("cart");return e?JSON.parse(e):[]})(),total_price:0,total_items:0,isCheckout:!1},s=Object(n.createContext)(),l=e=>{let{children:t}=e;const[r,l]=Object(n.useReducer)(c,a);Object(n.useEffect)((()=>{l({type:i.f}),localStorage.setItem("cart",JSON.stringify(r.cart))}),[r.cart]);return Object(o.jsx)(s.Provider,{value:{...r,addToCart:(e,t)=>{l({type:i.a,payload:{product:e,amount:t}})},toggleAmount:(e,t)=>{l({type:i.t,payload:{id:e,value:t}})},removeItem:e=>{l({type:i.p,payload:e})},clearCart:()=>{l({type:i.c})},checkout:()=>{l({type:i.b})}},children:t})},d=()=>Object(n.useContext)(s)},12:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(2),i=r(4);const c=(e,t)=>{const{type:r,payload:n}=t;if(r===i.n){let t=n.map((e=>e.price));return t=Math.max(...t),{...e,all_products:[...n],filtered_products:[...n],filters:{...e.filters,max_price:t,price:t}}}if(r===i.q)return{...e,grid_view:!0};if(r===i.r)return{...e,grid_view:!1};if(r===i.v)return{...e,sort:n};if(r===i.s){const{sort:t,filtered_products:r}=e;let n=[...r];return"price-lowest"===t&&(n=n.sort(((e,t)=>e.price-t.price))),"price-highest"===t&&(n=n.sort(((e,t)=>t.price-e.price))),"name-a"===t&&(n=n.sort(((e,t)=>e.title.localeCompare(t.title)))),"name-z"===t&&(n=n.sort(((e,t)=>t.title.localeCompare(e.title)))),{...e,filtered_products:n}}if(r===i.u){const{name:t,value:r}=n;return{...e,filters:{...e.filters,[t]:r}}}if(r===i.g){const{all_products:t}=e,{text:r,category:n,price:i}=e.filters;let c=[...t];return r&&(c=c.filter((e=>e.title.toLowerCase().includes(r)))),"all"!==n&&(c=c.filter((e=>e.category===n))),c=c.filter((e=>e.price<=i)),{...e,filtered_products:c}}if(r===i.d)return{...e,filters:{...e.filters,text:"",category:"all",price:e.filters.max_price}};throw new Error(`No Matching "${r}" - action type `)};var o=r(8),a=r(1);const s={filtered_products:[],all_products:[],grid_view:!0,sort:"price-lowest",filters:{text:"",category:"all",min_price:0,price:0,max_price:0}},l=Object(n.createContext)(),d=e=>{let{children:t}=e;const{products:r}=Object(o.b)(),[d,m]=Object(n.useReducer)(c,s);Object(n.useEffect)((()=>{m({type:i.n,payload:r})}),[r]),Object(n.useEffect)((()=>{m({type:i.g}),m({type:i.s})}),[r,d.sort,d.filters]);return Object(a.jsx)(l.Provider,{value:{...d,setGridView:()=>{m({type:i.q})},setListView:()=>{m({type:i.r})},updateSort:e=>{const t=e.target.value;m({type:i.v,payload:t})},updateFilters:e=>{let t=e.target.name,r=e.target.value;console.log({name:t,value:r}),"category"===t&&(r=e.target.dataset.category),"price"===t&&(r=Number(r)),m({type:i.u,payload:{name:t,value:r}})},clearFilters:()=>{m({type:i.d})}},children:t})},m=()=>Object(n.useContext)(l)},14:function(e,t,r){"use strict";r.d(t,"q",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"u",(function(){return x})),r.d(t,"c",(function(){return y})),r.d(t,"t",(function(){return w})),r.d(t,"r",(function(){return k})),r.d(t,"m",(function(){return z})),r.d(t,"h",(function(){return E})),r.d(t,"l",(function(){return R})),r.d(t,"o",(function(){return P})),r.d(t,"k",(function(){return U})),r.d(t,"s",(function(){return B})),r.d(t,"v",(function(){return M})),r.d(t,"p",(function(){return J})),r.d(t,"j",(function(){return Y})),r.d(t,"w",(function(){return Q})),r.d(t,"a",(function(){return X})),r.d(t,"b",(function(){return te})),r.d(t,"f",(function(){return ne})),r.d(t,"i",(function(){return ce})),r.d(t,"g",(function(){return ae})),r.d(t,"x",(function(){return se})),r.d(t,"d",(function(){return le})),r.d(t,"n",(function(){return ve}));var n=r(2),i=r.n(n),c=r(6),o=r(3),a=r(7),s=r(15),l=r(1);const d=[{id:1,text:"Home",url:"/"},{id:2,text:"Products",url:"/products"},{id:3,text:"About",url:"/about"}],m=[{id:1,name:"Business-to-Business",text:"We've already defined B2B ecommerce as involving transactions between two or more businesses. B2C ecommerce , by contrast, covers transactions between businesses and individual end consumers",icon:Object(l.jsx)(s.a,{})},{id:2,name:"Business-to-Cunsumer",text:"B2C (business-to-consumer) ecommerce is a business model where a business sells products or services directly to consumers online:",icon:Object(l.jsx)(s.b,{})},{id:3,name:"Consumer-to-Consumer",text:"customer to customer\u201d; it's a business model that fosters commerce between private individuals, usually in an online environment.",icon:Object(l.jsx)(s.c,{})}];var u=r(8);const b=o.c.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding-inline: 2rem;
  box-shadow: 0 0 5rem 0.5rem var(--bg-color);
  position: fixed;
  background: var(--blue-color-2);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .header-center {
    width: min(100%, var(--max-width));
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__btn {
    ${a.a.md`
      display:none;
      `}
  }

  .header__nav {
    display: none;
    ${a.a.md`
      display:inline-block;
      `}

    ul {
      display: inline-flex;
      gap: 2.5rem;

      a {
        display: inline-block;
        font-size: var(--fs-500);
        padding: 0.2rem;
        border-bottom: 0.3rem solid transparent;
      }

      .active {
        border-bottom-color: var(--red-color-1);
      }
    }
  }

  .header__cart {
    display: none;
    ${a.a.md`
      display:inline-block;
      `}
  }
`;var p=()=>{const{openSidebar:e}=Object(u.b)();return Object(l.jsx)(b,{children:Object(l.jsxs)("div",{className:"header-center",children:[Object(l.jsx)(c.b,{to:"/",children:Object(l.jsx)(ve.FaShopifyStyled,{})}),Object(l.jsx)("nav",{className:"header__nav",children:Object(l.jsx)("ul",{children:d.map((e=>{let{id:t,url:r,text:n}=e;return Object(l.jsx)("li",{children:Object(l.jsx)(c.c,{to:r,className:e=>{let{isActive:t}=e;return t?"active":null},children:n})},t)}))})}),Object(l.jsx)("div",{className:"header__cart",children:Object(l.jsx)(f,{})}),Object(l.jsx)("button",{type:"button",onClick:e,className:"header__btn",children:Object(l.jsx)(ve.FaBarsStyled,{})})]})})},j=r(10);const h=o.c.div`
  display: flex;
  align-items: center;

  a {
    font-size: var(--fs-500);
  }

  .cart__container {
    display: flex;
    margin-right: 3rem;
    border-bottom: 0.3rem solid transparent;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .active {
    border-color: var(--red-color-1);
  }
  
  .cart-icon {
    position: relative;
    margin-left: 0.4rem;

    span {
      position: absolute;
      top: -12px;
      right: -18px;
      padding: 0.1rem;
      min-width: 2rem;
      background-color: var(--red-color-1);
      border-radius: 50%;
      color: var(--blue-color-3);
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;var f=()=>{const{closeSidebar:e}=Object(u.b)(),{total_items:t}=Object(j.b)();return Object(l.jsx)(h,{children:Object(l.jsxs)(c.c,{to:"/cart",onClick:e,className:e=>{let{isActive:t}=e;return t?"cart__container active":"cart__container"},children:["Cart",Object(l.jsxs)("div",{className:"cart-icon",children:[Object(l.jsx)(ve.FaShoppingCartStyled,{}),Object(l.jsx)("span",{children:t})]})]})})};const g=o.c.div`
  ${a.a.md`
    display:none;
`}
  .sidebar {
    background: var(--bg-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    transform: translate(-120%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--blue-color-2);
    padding: 0 2rem;
    box-shadow: 0 0 1rem 1rem var(--bg-color);
  }

  .sidebar__nav {
    margin-bottom: 4rem;
    a {
      display: block;
      padding: 1rem;
      font-size: var(--fs-600);
      &:hover {
        padding-left: 1.5rem;
      }
    }
    .active {
      color: var(--red-color-1);
    }
  }

  .sidebar__cart {
    width: max-content;
    margin-inline: auto;
  }
`;var x=()=>{const{closeSidebar:e,isSidebarOpen:t}=Object(u.b)();return Object(l.jsx)(g,{children:Object(l.jsxs)("aside",{className:t?"show-sidebar sidebar":"sidebar",children:[Object(l.jsxs)("div",{className:"sidebar-header",children:[Object(l.jsx)(c.b,{to:"/",onClick:e,children:Object(l.jsx)(ve.FaStoreStyled,{})}),Object(l.jsx)("button",{type:"button",onClick:e,children:Object(l.jsx)(ve.FaTimesStyled,{})})]}),Object(l.jsx)("nav",{className:"sidebar__nav",children:Object(l.jsx)("ul",{children:d.map((t=>{let{id:r,url:n,text:i}=t;return Object(l.jsx)("li",{children:Object(l.jsx)(c.c,{className:e=>{let{isActive:t}=e;return t?"active":null},to:n,onClick:e,children:i})},r)}))})}),Object(l.jsx)("div",{className:"sidebar__cart",children:Object(l.jsx)(f,{})})]})})};const v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(e.length>t&&e.length>0){let r=e+" ";return r=e.substr(0,t),r=e.substr(0,r.lastIndexOf(" ")),r=r.length>0?r:e.substr(0,t),r+"..."}return e},O=o.c.div`
  height: var(--breadcrumb-height);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.3rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    font-size: var(--fs-400);
    color: var(--blue-color-1);
    transition: var(--transition);
    &:hover {
      color: var(--green-color-1);
    }
  }
  
  span {
    font-size: var(--fs-400);
    color: var(--green-color-1);

  }
`;var y=e=>{let{title:t,products:r}=e;return Object(l.jsxs)(O,{children:[Object(l.jsx)(c.b,{to:"/",children:"Home /"}),r&&Object(l.jsx)(c.b,{to:"/products",children:" prodcuts / "}),Object(l.jsxs)("span",{children:["  ",v(t,20)]})]})};const _=o.c.section`
  padding: 2rem 1.5rem;
  display: grid;
  justify-items: center;
  gap: 1.5rem;
  ${a.a.md`  
  grid-template-columns: 1fr 1fr 1fr;
  `}

  .service {
    padding: 1rem 1.5rem;
    border: 0.2rem solid var(--green-color-1);
    border-radius: var(--radius);
    transition: var(--transition);
    &:hover {
      box-shadow: 0 0 1rem 1rem var(--bg-color);
    }
  }

  .service__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    svg {
      color: var(--green-color-1);
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  p {
    text-align: justify;
  }
`;var w=()=>Object(l.jsx)(_,{children:m.map((e=>{let{id:t,name:r,icon:n,text:i}=e;return Object(l.jsxs)("article",{className:"service",children:[Object(l.jsxs)("div",{className:"service__header",children:[n,Object(l.jsx)(se.H3,{children:r})]}),Object(l.jsx)(se.P,{children:i})]},t)}))});const S=o.c.section`
  padding: 1rem;
  height: auto;

  h2 {
    margin-bottom: 3rem;
  }
`;var k=()=>{const{popular_products:e,products_loading:t,products_error:r}=Object(u.b)();return t?Object(l.jsx)(J,{}):r?Object(l.jsx)(Y,{}):Object(l.jsxs)(S,{children:[Object(l.jsx)(se.H2,{children:"All Products-"}),Object(l.jsx)(R,{products:e.slice(0,3)})]})},N=r.p+"static/media/hero_img2.7d607e48.png";const C=o.c.section`
  overflow: hidden;

  .hero {
    padding: 0 1rem 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
  }

  .hero__title {
    align-self: flex-start;
    margin-top: 10vh;
    position: relative;
    z-index: 1;
    text-align: center;
    span {
      color: var(--green-color-1);
    }

    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      left: -5rem;
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      background: var(--yellow-color-1);
      z-index: -1;
    }
  }

  .header__link {
    width: max-content;
    z-index: 1;
    text-align: center;
    margin-left: 100px;
  }
  

  .hero__img {
    width: min(90%, 480px);
    align-self: flex-end;
    margin-top: -200px
  }
`;var z=()=>Object(l.jsx)(C,{children:Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsxs)(se.H1,{className:"hero__title",children:[Object(l.jsx)("span",{children:"Hello!"})," ",Object(l.jsx)("br",{})," You need to shop right now!"]}),Object(l.jsx)(le,{variant:"primary",className:"header__link",children:Object(l.jsx)(c.b,{to:"/products",children:"Shop Now"})}),Object(l.jsx)("div",{className:"hero__img",children:Object(l.jsx)("img",{src:N,alt:"hero - img"})})]})});const $=o.c.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
  max-width: 750px;

  .contact__text {
    h2 {
      margin-bottom: 2rem;
    }
  }

  .contact__form {
    border-radius: var(--radius);
    border: 0.3rem solid var(--green-color-1);
    padding: 0.5rem;
    width: min(100%, 500px);
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    input,
    button {
      font-size: var(--fs-400);
    }

    button {
      background: var(--green-color-1);
      border-radius: var(--radius);
      padding: 0.5rem 1rem;
      transition: var(--transition);
      color: var(--blue-color-3);
      &:hover {
        color: var(--white-color);
      }
    }
  }
`;var E=()=>Object(l.jsxs)($,{children:[Object(l.jsxs)("div",{className:"contact__text",children:[Object(l.jsx)(se.H2,{children:"Lorem ipsum a dolor actipous create amit, dolor color qualification."}),Object(l.jsx)(se.P,{children:"Lorem orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]}),Object(l.jsxs)("form",{className:"contact__form",onSubmit:e=>e.preventDefault(),children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter Email"}),Object(l.jsx)("button",{type:"submit",children:"Subscribe"})]})]});const T=o.c.div`
  display: grid;
  gap: 2rem 1.5rem;
  justify-content: center;

  ${a.a.md`
  grid-template-columns: 1fr 1fr;
`}
  ${a.a.xl`
  grid-template-columns: 1fr 1fr 1fr ;
`}

article {
    padding: 1rem;
    background: var(--white-color);
    border-radius: var(--radius);
    transition: var(--transition);
    min-height: 35rem;

    &:hover {
      box-shadow: 0 0 1rem 1rem var(--gray-color-2);
    }
    h3 {
      margin: 1rem 0;
      min-height: 2.4rem;
    }
    img {
      max-height: 25rem;
      object-fit: contain;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p {
      font-size: 1.8rem;
      color: var(--red-color-1);
    }
  }
`;var R=e=>{let{products:t}=e;return Object(l.jsx)(T,{children:t.map((e=>{let{title:t,id:r,image:n,price:i,rating:o}=e;return Object(l.jsxs)("article",{children:[Object(l.jsx)(c.b,{to:`/products/${r}`,children:Object(l.jsx)("img",{src:n,alt:t})}),Object(l.jsx)(se.H3,{title:t,children:v(t,25)}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["$",i]}),Object(l.jsx)(Q,{stars:o})]})]},r)}))})};const F=o.c.div`
  article {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
    background: #fff;
    padding: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
    transform: scale(1);
    &:hover {
      box-shadow: 0 0 1rem 1rem var(--gray-color-2);
    }

    img {
      width: min(25vw, 220px);
      height: 20rem;
      object-fit: contain;
    }

    .product__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }

    h3 {
      min-height: 2.2rem;
      color: var(--blue-color-4);
    }

    .price {
      font-size: 1.8rem;
      color: var(--red-color-1);
    }

    button {
      width: max-content;
    }
  }
`;var P=e=>{let{products:t}=e;return Object(l.jsx)(F,{children:t.map((e=>{let{title:t,image:r,id:n,price:i,description:o}=e;return Object(l.jsxs)("article",{children:[Object(l.jsx)("div",{className:"product__img",children:Object(l.jsx)("img",{src:r,alt:t})}),Object(l.jsxs)("div",{className:"product__info",children:[Object(l.jsx)(se.H3,{children:t}),Object(l.jsxs)("p",{className:"price",children:["$",i]}),Object(l.jsx)(se.P,{children:v(o,120)}),Object(l.jsx)(le,{variant:"primary",children:Object(l.jsx)(c.b,{to:`/products/${n}`,children:"Details"})})]})]},n)}))})},A=r(12);const I=o.c.div`
  display: flex;
  justify-content: center;
`,L=o.c.div`
  display: flex;
  justify-content: center;
  margin-bottom:50px;
`,H=o.c.img`
  width: 300px;
  height: 300px;
  margin: auto;
`,D=Object(o.c)("div")`
  /* Thêm các quy tắc CSS tùy chỉnh cho StyledH4 */
  font-size: 30px;
  font-weight: bold;
  /* ... */
`;var B=()=>{const{filtered_products:e,grid_view:t}=Object(A.b)(),{products_loading:r,products_error:n}=Object(u.b)();return n?Object(l.jsx)(Y,{}):r?Object(l.jsx)(J,{}):e.length<1?Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)(L,{children:Object(l.jsx)(D,{children:"Lorem ipsum quality above the ipsum motor our the qualify...."})}),Object(l.jsx)(I,{children:Object(l.jsx)(H,{src:"https://cdn-icons-png.flaticon.com/512/6009/6009660.png",alt:""})})]}):!1===t?Object(l.jsx)(P,{products:e}):Object(l.jsx)(R,{products:e})};const G=o.c.div`
  margin-bottom: 2rem;

  .content {
    position: sticky;
    top: 7rem;
  }

  .filter__form {
    display: grid;
    gap: 2rem;
  }

  .search__input {
    background: var(--blue-color-3);
    border-radius: 0.5rem;
    padding: 1rem;
    width: min(100%, 200px);
    font-size: var(--fs-400);
  }

  .form__control > *:not(:first-child) {
    margin-top: 1rem;
  }

  .form__categories {
    display: grid;
    justify-items: flex-start;
    gap: 1rem;

    button {
      color: var(--blue-color-1);
      font-size: var(--fs-500);
      padding-right: 0.5rem;
      text-transform: capitalize;
      transition: var(--transition);
      border-bottom: 0.3rem solid transparent;
      &:hover {
        padding-left: 0.5rem;
      }
    }

    .active {
      border-bottom-color: var(--green-color-1);
      padding-left: 0.5rem;
    }
  }

  .price {
    color: var(--red-color-1);
    font-size: var(--fs-500);
  }

  .clear-btn {
    margin-block: 2rem;
    padding: 0.75rem 1.5rem;
  }
`;var U=()=>{const{filters:{text:e,category:t,min_price:r,max_price:n,price:i},updateFilters:c,all_products:o,clearFilters:a}=Object(A.b)(),s=((e,t)=>{let r=e.map((e=>e[t]));return["all",...new Set(r)]})(o,"category");return o.length>0?Object(l.jsx)(G,{children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("form",{className:"filter__form",onSubmit:e=>e.preventDefault(),children:[Object(l.jsx)("div",{className:"form__control",children:Object(l.jsx)("input",{type:"text",name:"text",placeholder:"Search",className:"search__input",value:e,onChange:c})}),Object(l.jsxs)("div",{className:"form__control",children:[Object(l.jsx)(se.H4,{children:"Categories"}),Object(l.jsx)("div",{className:"form__categories",children:s.map(((e,r)=>Object(l.jsx)("button",{type:"button",name:"category",className:t===e?"active":null,onClick:c,"data-category":e,children:e},r)))})]}),Object(l.jsxs)("div",{className:"form__control",children:[Object(l.jsx)(se.H4,{children:"Price"}),Object(l.jsxs)("p",{className:"price",children:["$",i]}),Object(l.jsx)("input",{type:"range",name:"price",min:r,max:n,value:i,onChange:c})]})]}),Object(l.jsx)(le,{variant:"secondary",className:"clear-btn",onClick:a,children:"Reset the Filter"})]})}):Object(l.jsx)("div",{})};const q=o.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  ${a.a.sm`
        gap:0 1rem;
    `}

  .sort__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    button {
      margin-right: 0.3rem;
      display: inline-block;
      padding: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      ${a.a.md`
        padding: 0.5rem;
      `}
    }
  }

  .sort__items {
    font-size: 1.3rem;
    span {
      display: inline-block;
      min-width: 2rem;
      text-align: center;
      color: var(--blue-color-1);
    }
  }

  .sort__line {
    background-color: var(--red-color-1);
    height: 0.3rem;
    width: 30%;
    display: none;
    margin-inline: auto;

    ${a.a.lg`
    display: inline-block;
    `}
    ${a.a.xl`
    width:40%;
    `}
  }

  .sort__form {
    margin-left: auto;
    label {
      color: var(--blue-color-1);
      margin-right: 0.2rem;
      font-size: var(--fs-400);
    }
    option {
      font-size: var(--fs-600);
      padding: 1rem;
      background: var(--bg-color);
    }
  }

  .active {
    border: 0.2rem solid var(--green-color-1);
    border-radius: 0.3rem;
  }
`;var M=()=>{const{filtered_products:e,grid_view:t,setGridView:r,setListView:n,updateSort:i,sort:c}=Object(A.b)();return Object(l.jsxs)(q,{children:[Object(l.jsxs)("div",{className:"sort__btns",children:[Object(l.jsx)("button",{type:"button",onClick:r,className:t?"active":null,children:Object(l.jsx)(ve.BsFillGridFillStyled,{})}),Object(l.jsx)("button",{type:"button",onClick:n,className:t?null:"active",children:Object(l.jsx)(ve.BsListStyled,{})})]}),Object(l.jsxs)(se.P,{className:"sort__items",children:[Object(l.jsx)("span",{children:e.length})," products found"]}),Object(l.jsx)("div",{className:"sort__line"}),Object(l.jsxs)("form",{className:"sort__form",children:[Object(l.jsx)("label",{htmlFor:"sort",children:"Sort by :"}),Object(l.jsxs)("select",{name:"sort",id:"sort",className:"sort__input",value:c,onChange:i,children:[Object(l.jsx)("option",{value:"price-lowest",children:"Price (Lowest)"}),Object(l.jsx)("option",{value:"price-highest",children:"Price (Highest)"}),Object(l.jsx)("option",{value:"name-a",children:"Name (A-Z)"}),Object(l.jsx)("option",{value:"name-z",children:"Name (Z-A)"})]})]})]})};const V=o.c.div`
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${e=>e.lazy||"calc(100vh - (var(--header-height) + var(--footer-height)))"};

  margin-top: ${e=>e.lazy||"var(--header-height)"};

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--red-color-1);
    animation: spinner 0.6s linear infinite;
  }
`;var J=e=>Object(l.jsx)(V,{children:Object(l.jsx)("div",{className:"loading"})});const W=o.c.div`
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-color-1);
`;var Y=()=>Object(l.jsx)(W,{children:Object(l.jsx)(se.H2,{children:"there was an error"})}),Z=r(13);const K=o.c.div`
  span {
    font-size: 1.4rem;
    margin-inline: 0.1rem;
    color: var(--yellow-color-2);
  }
`;var Q=e=>{let{stars:t={rate:""}}=e;const{rate:r}=t,n=Array.from({length:5},((e,t)=>{const n=t+.5;return Object(l.jsx)("span",{children:r>=t+1?Object(l.jsx)(Z.d,{}):r>=n?Object(l.jsx)(Z.e,{}):Object(l.jsx)(Z.c,{})},t)}));return Object(l.jsx)(K,{children:n})};var X=e=>{let{product:t}=e;const{addToCart:r}=Object(j.b)(),[i,o]=Object(n.useState)(1);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(te,{amount:i,increase:()=>{o((e=>e+1))},decrease:()=>{o((e=>{let t=e-1;return t<1&&(t=1),t}))}}),Object(l.jsx)(le,{variant:"primary",children:Object(l.jsx)(c.b,{to:"/cart",id:"link",onClick:()=>r(t,i),children:"Add to cart"})})]})};const ee=o.c.div`
  width: max-content;
  display: flex;
  gap: 1rem;

  .opacity {
    opacity: 0.5;
    cursor: auto;
  }

  span {
    text-align: center;
    min-width: 2.6rem;
    font-size: var(--fs-700);
    color: var(--gray-color-1);
  }

  button {
    padding: 0.3rem;
    display: inline-block;
    transform: scale(1);
  }

  button:active {
    transform: scale(0.9);
  }
`;var te=e=>{let{increase:t,decrease:r,amount:n}=e;return Object(l.jsxs)(ee,{children:[Object(l.jsx)("button",{type:"button",className:n<2&&"opacity ",onClick:r,children:Object(l.jsx)(ve.FaMinusStyled,{})}),Object(l.jsx)("span",{children:n}),Object(l.jsx)("button",{type:"button",onClick:t,children:Object(l.jsx)(ve.FaPlusStyled,{})})]})};const re=o.c.article`
  padding: 0.5rem;
  background: var(--white-color);
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  
  ${a.a.sm`
    gap: 2rem;
    `}
  ${a.a.md`
    gap: 3rem;
    `}

  .item__img {
    display: none;
    ${a.a.md`
    display: inline;
    `}
    img {
      max-width: 8rem;
    }
  }

  .item__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    span {
      color: var(--red-color-1);
    }

    a {
      font-size: var(--fs-400);
    }
  }

  .item__delete {
    padding: 0.6rem;
    transition: var(--transition);
    transform: scale(1);
  }

  .active {
    transform: scale(1.3);
  }
`;var ne=e=>{let{title:t,price:r,amount:n,id:i,image:o}=e;const{toggleAmount:a,removeItem:s}=Object(j.b)();return Object(l.jsxs)(re,{children:[Object(l.jsx)("div",{className:"item__img",children:Object(l.jsx)("img",{src:o,alt:t})}),Object(l.jsxs)("div",{className:"item__info",children:[Object(l.jsx)(c.b,{to:`/products/${i}`,title:t,children:v(t,20)}),Object(l.jsxs)(se.P,{children:["$",r," \u2613 ",n," :",Object(l.jsx)("br",{}),Object(l.jsxs)("span",{children:["$",(r*n).toFixed(2)]})]})]}),Object(l.jsx)(te,{amount:n,increase:()=>{a(i,"inc")},decrease:()=>{a(i,"dec")}}),Object(l.jsx)("button",{className:n<2?"item__delete active":"item__delete ",onClick:()=>s(i),children:Object(l.jsx)(ve.FaTrashStyled,{})})]})};const ie=o.c.section`
  display: grid;
  place-items: center;

  .empty-cart {
    text-align: center;
    h1 {
      margin-top:-50px;
      margin-bottom: 0.5rem;
      span {
        color: var(--red-color-1);
      }
      font-size: 35px;
    }
    img {
      width: 350px;
      height: 350px;
    }
    #ok{
      width:200px;
      margin-bottom:-300px;
    }
    #ok2{
      font-size: 25px;
    }
  }
`;var ce=()=>Object(l.jsx)("main",{children:Object(l.jsx)(ie,{className:"page-w-b  ",children:Object(l.jsxs)("div",{className:"empty-cart",children:[Object(l.jsxs)(se.H1,{children:["Your shopping cart is ",Object(l.jsx)("span",{children:"Empty"})]}),Object(l.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/11329/11329060.png",alt:""}),Object(l.jsx)("br",{}),Object(l.jsx)(le,{id:"ok",variant:"primary",children:Object(l.jsx)(c.b,{id:"ok2",to:"/products",children:"Shop now"})})]})})});const oe=o.c.article`
  border: 0.2rem solid var(--green-color-1);
  border-radius: var(--radius);
  padding: 1rem 1.5rem;

  ${a.a.lg`
  align-self: flex-start;
    `}

  .total__items {
    span {
      color: var(--blue-color-1);
      display: inline-block;
      text-align: center;
      width: 12rem;
      font-size: var(--fs-600);
    }
  }

  .total__price {
    span {
      color: var(--red-color-1);
      display: inline-block;
      text-align: center;
      font-size: var(--fs-600);
      width: 12rem;
      margin-left: 60px;
    }
  }

  hr {
    border-bottom: 0.2rem solid var(--red-color-1);
    margin: 1.5rem 0;
  }

  .total__btn {
    background: var(--green-color-1);
    width: 100%;
    padding: 0.5rem;
    color: var(--white-color);
    font-size: 1.4rem;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.2rem;
    border: 0.2rem solid var(--green-color-1);
    transition: var(--transition);
    &:hover {
      background: transparent;
      color: var(--red-color-1);
    }
  }
`;var ae=()=>{const{total_items:e,total_price:t,checkout:r}=Object(j.b)();return Object(l.jsxs)(oe,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)(se.H3,{className:"total__items",children:["Total Items : ",Object(l.jsx)("span",{children:e})]}),Object(l.jsx)("br",{}),Object(l.jsxs)(se.H4,{className:"total__price",children:["Total Price : ",Object(l.jsxs)("span",{children:["$",t.toFixed(2)]})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)(c.b,{to:"/checkout",type:"button",className:"total__btn ",onClick:r,children:"Order Now"})]})};var se={H1:o.c.h1`
  font-size: var(--fs-700);
  color: var(--gray-color-1);
`,H2:o.c.h2`
  font-size: var(--fs-600);
  color: var(--gray-color-1);
`,H3:o.c.h3`
  font-size: var(--fs-500);
  color: var(--blue-color-4);
`,H4:o.c.h4`
  font-size: var(--fs-500);
  color: var(--blue-color-4);
`,P:o.c.p`
  font-size: var(--fs-500);
  color: var(--gray-color-1);
`};var le=o.c.button`
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;

  a {
    display: inline-block;
  }
  ${e=>{switch(e.variant){case"primary":return o.b`
          border: 0.2rem solid var(--green-color-1);
          a {
            padding: 0.75rem 1.5rem;
          }
          &:hover {
            background: var(--green-color-1);
            a {
              color: var(--white-color);
            }
          }
        `;case"secondary":return o.b`
          border: 0.2rem solid var(--red-color-1);
          color: var(--gray-color-1);
          a {
            padding: 0.75rem 1.5rem;
            color: var(--gray-color-1);
          }
          &:hover {
            background: var(--red-color-1);
            color: var(--white-color);
            a {
              color: var(--white-color);
            }
          }
        `}}}
`,de=r(11);const me=o.b`
  font-size: 2.5rem;
`,ue=o.b`
  font-size: 5rem;
`,be=o.b`
  font-size: 2rem;
`,pe=Object(o.c)(Z.a)`
  color: var(--blue-color-1);
  ${be}
`,je=Object(o.c)(Z.b)`
  color: var(--blue-color-1);
  ${be}
`,he=Object(o.c)(de.c)`
  ${be}
  color: var(--green-color-1);
`,fe=Object(o.c)(de.h)`
  ${be}
  color: var(--red-color-1);
`,ge=Object(o.c)(de.b)`
  ${be}
  color: var(--red-color-1);
`,xe=Object(o.c)(de.g)`
  ${me}
  color: var(--red-color-1);
`;var ve={FaBarsStyled:Object(o.c)(de.a)`
  ${me}
  color: var(--blue-color-1);
`,FaTimesStyled:xe,FaStoreStyled:Object(o.c)(de.f)`
  ${me}
  color: var(--blue-color-1);
`,FaShoppingCartStyled:Object(o.c)(de.e)`
  ${be}
  color: var(--blue-color-1);
`,FaPlusStyled:he,FaMinusStyled:ge,BsFillGridFillStyled:pe,FaTrashStyled:fe,BsListStyled:je,FaShopifyStyled:Object(o.c)(de.d)`
  ${ue}
  color: var(--blue-color-1);
`}},34:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r.n(n),c=r(20),o=r.n(c),a=r(6),s=r(14),l=r(5),d=r(1);const m=i.a.lazy((()=>r.e(7).then(r.bind(null,35)))),u=i.a.lazy((()=>r.e(8).then(r.bind(null,36)))),b=i.a.lazy((()=>r.e(3).then(r.bind(null,37)))),p=i.a.lazy((()=>r.e(6).then(r.bind(null,38)))),j=i.a.lazy((()=>r.e(9).then(r.bind(null,39)))),h=i.a.lazy((()=>r.e(4).then(r.bind(null,40)))),f=i.a.lazy((()=>r.e(5).then(r.bind(null,41))));var g=()=>Object(d.jsx)(i.a.Suspense,{fallback:Object(d.jsx)(s.p,{lazy:!0}),children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(m,{})}),Object(d.jsx)(l.a,{path:"/products/:id",element:Object(d.jsx)(j,{})}),Object(d.jsx)(l.a,{path:"/products",element:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{path:"/about",element:Object(d.jsx)(b,{})}),Object(d.jsx)(l.a,{path:"/cart",element:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"/checkout",element:Object(d.jsx)(f,{})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)(p,{})})]})}),x=r(3),v=r(7);r(33);var O=x.a`
/* variables  */
:root {
  /** colors */
  --blue-color-1: #155e75;
  --blue-color-2: #edffec;
  --blue-color-3: #efeff0;
  --blue-color-4: #075985;
  --bg-color: #fff;
  --red-color-1: #e11d48;
  --green-color-1: #16a34a;
  --yellow-color-1: #ffff00;
  --yellow-color-2: #ffa200;
  --gray-color-1: #6b7280;
  --gray-color-2: #d6d7da41;
  --white-color: #fff;

  /** sizes */
  --max-width: 1300px;
  --header-height: 6rem;
  --footer-height: 5rem;
  --breadcrumb-height: 5rem;

  /** styles */
  --transition: 0.3s;
  --radius: 0.35rem;


  /* font-sizes */
  --fs-900: 9.375rem;
  --fs-800: 3rem;
  --fs-700: 2.5rem;
  --fs-600: 2rem;
  --fs-500: 1.62rem;
  --fs-400: 1.425rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;
}

/* resets */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
}

html {
  scroll-behavior: smooth;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

/*? typographi */
html {
  font-size: 0.525rem;  //8px
  
  ${v.a.sm`
    font-size: 0.562rem;  //9px
    `}

${v.a.md`
  font-size: 0.625rem;  //10px
  `}

${v.a.lg`
font-size: 0.75rem; //12px
  `}
}


/*? global styles */

body {
  background: var(--bg-color);
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}

img {
  width: 100%;
  height: 100%;
}

section {
  width: min(100%, var(--max-width));
  margin-inline:  auto;
}
main {
  margin-top: var(--header-height);
}

a {
  color: var(--green-color-1);
  transition: var(--transition);
}
a:hover {
  color: var(--blue-color-1);
}
/*? global class */

.page {
  min-height: calc(
    100vh -
      (var(--header-height) + var(--footer-height) + var(--breadcrumb-height))
  );
}
.page-w-b {
  margin-top: var(--header-height);
  min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
}


`;var y=()=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)(a.a,{children:[Object(d.jsx)(s.q,{}),Object(d.jsx)(s.u,{}),Object(d.jsx)(g,{})]})]}),_=r(8),w=r(12),S=r(10);o.a.render(Object(d.jsx)(_.a,{children:Object(d.jsx)(w.a,{children:Object(d.jsx)(S.a,{children:Object(d.jsx)(y,{})})})}),document.getElementById("root"))},4:function(e,t,r){"use strict";r.d(t,"o",(function(){return n})),r.d(t,"e",(function(){return i})),r.d(t,"h",(function(){return c})),r.d(t,"j",(function(){return o})),r.d(t,"i",(function(){return a})),r.d(t,"k",(function(){return s})),r.d(t,"m",(function(){return l})),r.d(t,"l",(function(){return d})),r.d(t,"n",(function(){return m})),r.d(t,"q",(function(){return u})),r.d(t,"r",(function(){return b})),r.d(t,"v",(function(){return p})),r.d(t,"s",(function(){return j})),r.d(t,"u",(function(){return h})),r.d(t,"g",(function(){return f})),r.d(t,"d",(function(){return g})),r.d(t,"a",(function(){return x})),r.d(t,"p",(function(){return v})),r.d(t,"t",(function(){return O})),r.d(t,"c",(function(){return y})),r.d(t,"f",(function(){return _})),r.d(t,"b",(function(){return w}));const n="OPEN_SIDEBAR",i="CLOSE_SIDEBAR",c="GET_PRODUCTS_BEGIN",o="GET_PRODUCTS_SUCCESS",a="GET_PRODUCTS_ERROR",s="GET_SINGLE_PRODUCT_BEGIN",l="GET_SINGLE_PRODUCT_SUCCESS",d="GET_SINGLE_PRODUCT_ERROR",m="LOAD_PRODUCTS",u="SET_GRID_VIEW",b="SET_LIST_VIEW",p="UPDATE_SORT",j="SORT_PRODUCTS",h="UPDATE_FILTERS",f="FILTER_PRODUCTS",g="CLEAR_FILTERS",x="ADD_TO_CART",v="REMOVE_CART_ITEM",O="TOGGLE_CART_ITEM",y="CLEAR_CART",_="COUNT_CART_TOTALS",w="CHECKOUT"},7:function(e,t,r){"use strict";const n={sm:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return`@media (min-width:576px){\n            ${t}\n        } `},md:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return`@media (min-width:768px){\n            ${t}\n        } `},lg:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return`@media (min-width:992px){\n            ${t}\n        } `},xl:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return`@media (min-width:1200px){\n            ${t}\n        } `},xxl:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return`@media (min-width:1400px){\n            ${t}\n        } `}};t.a=n},8:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(2),i=r(4);const c=(e,t)=>{let{type:r,payload:n}=t;if(r===i.e)return{...e,isSidebarOpen:!1};if(r===i.o)return{...e,isSidebarOpen:!0};if(r===i.h)return{...e,products_loading:!0};if(r===i.j){const t=n.filter((e=>e.rating.rate>=4.5));return{...e,products_loading:!1,products:n,popular_products:t}}if(r===i.i)return{...e,products_loading:!1,products_error:!0};if(r===i.k)return{...e,single_product_loading:!0};if(r===i.m)return{...e,single_product_loading:!1,single_product:n};if(r===i.l)return{...e,single_product_loading:!1,single_product_error:!0};throw new Error(`No Matching "${r}" - action type `)};var o=r(1);const a={isSidebarOpen:!1,products_loading:!1,products_error:!1,products:[],popular_products:[],single_product_loading:!1,single_product_error:!1,single_product:{}},s=Object(n.createContext)(),l="https://fakestoreapi.com/products",d=e=>{let{children:t}=e;const[r,d]=Object(n.useReducer)(c,a);Object(n.useEffect)((()=>{(async e=>{d({type:i.h});try{const t=await fetch(e),r=await t.json();d({type:i.j,payload:r})}catch(t){d({type:i.i})}})(l)}),[]);return Object(o.jsx)(s.Provider,{value:{...r,openSidebar:()=>{d({type:i.o})},closeSidebar:()=>{d({type:i.e})},fetchSingleProduct:async e=>{d({type:i.k});try{const t=await fetch(`${l}/${e}`),r=await t.json();d({type:i.m,payload:r})}catch(t){d({type:i.l})}}},children:t})},m=()=>Object(n.useContext)(s)}},[[34,1,2]]]);
//# sourceMappingURL=main.0fd3cbfc.chunk.js.map