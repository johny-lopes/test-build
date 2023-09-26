import{s as o,r,j as e,u as q,a as B,I as N,R as L,l as I,b as W,B as D,M as A,F as j,T as E}from"./index-db52d6f6.js";import{R as O}from"./warning-bc0976b2.js";import{R as V,d as H}from"./empty-profile-dd7ae0f7.js";import{Q as G}from"./index.es-3a94ad4c.js";const Q=o.div`
  display: flex;
  flex-direction: row;

  > nav {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-right: 8px;
    padding-left: 8px;
    width: 100%;
    color: rgba(0,0,0,0.54);
    font-size: 13px;
    min-height: 56px;
    /* background-color: #FFF; */
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: rgba(0,0,0,.12);

    > span:first-child {
      margin: 0 4px;
      flex-shrink: 1;
      user-select: none;
    }

    > div:nth-child(2) {
      position: relative;
      flex-shrink: 0;
      font-size: inherit;
      color: inherit;
      margin-top: 1px;

      > select {
        cursor: pointer;
        height: 24px;
        max-width: 100%;
        user-select: none;
        padding-left: 8px;
        padding-right: 24px;
        box-sizing: content-box;
        font-size: inherit;
        color: inherit;
        border: none;
        background-color: transparent;
        appearance: none;
        direction: ltr;
        flex-shrink: 0;
      }

      > svg {
        top: 0;
        right: 0;
        color: inherit;
        position: absolute;
        fill: currentColor;
        width: 24px;
        height: 24px;
        display: inline-block;
        user-select: none;
        pointer-events: none;
      }
    }

    > span:nth-child(3) {
      margin: 0 24px;
    }

    > div:nth-child(4) {
      display: flex;
      align-items: center;
      border-radius: 4px;
      white-space: nowrap;

      > button {
        position: relative;
        display: block;
        user-select: none;
        border: none;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        padding: 8px;
        /* margin: px; */
        cursor: pointer;
        transition: 0.4s;
        color: rgba(0,0,0,.54);
        fill: rgba(0,0,0,.54);
        background-color: transparent;

        &:focus-visible {
          outline: -webkit-focus-ring-color auto 1px;
        }

        &:hover:not(:disabled) {
          background-color: rgba(0, 0, 0, 0.12);
        }

        &:disabled {
          cursor: unset;
          color: rgba(0, 0, 0, 0.18);
          fill: rgba(0, 0, 0, 0.18);
        }
      }
    }
  }
`,U=({length:t=0,currentPage:s=1,rowsPerPageList:x=[10,15,20,30],rowsPerPage:l=x&&x.length>0?x[0]:10,setCurrentPage:c,setRowsPerPage:d})=>{const[u,p]=r.useState(s*l),[i,b]=r.useState(t>0?Math.ceil(t/l):1),[y,g]=r.useState(!1),[w,m]=r.useState(!1),[v,f]=r.useState(!1),[k,F]=r.useState(!1),a=()=>{c(1)},M=()=>{c(s>1?s-1:1)},S=()=>{c(s<i?s+1:s)},z=()=>{c(i)},C=async h=>{c(1),d(Number(h.target.value))},n=()=>`${u-l+1}-${s===i?Math.floor(t/l)*l+t%l:u} of ${t}`;return r.useEffect(()=>{p(s*l)},[s,l]),r.useEffect(()=>{b(()=>t===0?0:Math.ceil(t/l))},[t,l]),r.useEffect(()=>{g(s===1),m(s===1),f(s===i),F(s===i)},[s,i]),e.jsx(Q,{children:e.jsxs("nav",{children:[e.jsx("span",{children:"Rows per page:"}),e.jsxs("div",{children:[e.jsx("select",{"aria-label":"Rows per page:",onChange:C,value:l,children:x.map((h,$)=>e.jsx("option",{value:h,children:h},$))}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M7 10l5 5 5-5z"}),e.jsx("path",{d:"M0 0h24v24H0z",fill:"none"})]})]}),e.jsx("span",{children:n()}),e.jsxs("div",{children:[e.jsx("button",{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":"true",disabled:t===0||y,onClick:a,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",children:[e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),e.jsx("path",{fill:"none",d:"M24 24H0V0h24v24z"})]})}),e.jsx("button",{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":"true",disabled:t===0||w,onClick:M,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",children:[e.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),e.jsx("path",{d:"M0 0h24v24H0z",fill:"none"})]})}),e.jsx("button",{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":"true",disabled:t===0||v,onClick:S,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",children:[e.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),e.jsx("path",{d:"M0 0h24v24H0z",fill:"none"})]})}),e.jsx("button",{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":"true",disabled:t===0||k,onClick:z,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",children:[e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),e.jsx("path",{fill:"none",d:"M0 0h24v24H0V0z"})]})})]})]})})},Y=o.div`

    .rdt_TableHead {
        .rdt_TableHeadRow {
            background-color: ${t=>t.theme.colors.secondary};
            color: ${t=>t.theme.colors.darkGrey};
        }
    }

    .rdt_TableHeadRow, .rdt_TableRow {
        background-color: ${t=>t.theme.colors.primary};
        background-color: ${t=>t.theme.colors.background};
        color: ${t=>t.theme.colors.darkGrey};
        border-bottom-color: ${t=>t.theme.colors.grey};
        min-height: 51px;
        font-weight: 300;
    }

    .rdt_TableHeadRow:first-of-type {
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: ${t=>t.theme.colors.grey};
    }

    .rdt_TableRow:last-of-type {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: ${t=>t.theme.colors.grey};
    }

    .rdt_TableCol:first-of-type,
    .rdt_TableCell:first-of-type {
        padding-left: 0
    }

    .rdt_TableCol:last-of-type,
    .rdt_TableCell:last-of-type {
        padding-right: 0
    }

    .rdt_Pagination {
        justify-content: center;
        box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.10);
        color: ${t=>t.theme.colors.darkGrey};
        width: 448px;
        border-radius: 10px;
        min-height: 40px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 16px;
    }
`,J=({columns:t,data:s,responsive:x=!0,noTableHead:l=!1,pagination:c=!1,selectableRows:d=!1,toggleClearSelectedRows:u=!1,onSelectedRowsChange:p})=>{const i=b=>{p&&p(b)};return e.jsx(Y,{children:e.jsx(G,{columns:t,data:s,progressComponent:e.jsx("p",{children:"Loading..."}),noDataComponent:e.jsx("p",{style:{lineHeight:"normal"},children:"No register to show."}),noTableHead:l,pagination:c,paginationRowsPerPageOptions:[5,10,15,30],customStyles:{headRow:{style:{fontSize:"1rem"}},cells:{style:{fontSize:"1rem"}}},responsive:x,selectableRows:d,onSelectedRowsChange:i,clearSelectedRows:u})})},K=o.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  background-color: ${t=>t.theme.colors.background};
`;o.div`
  display: flex;
  flex-direction: row;
  background: ${t=>t.theme.colors.blue};
  border-radius: 10px;
  padding: 16px;
  margin: 16px;

  justify-content: center;

  form {

    display: flex;
    width: 100%;

    > .input-search {
  
      /* min-width: 830px; */
      width: 100%;
  
      /* @media (max-width: 768px) {
        min-width: 350px;
      } */
  
      > div {
        flex-direction: column;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;        
      }
    }

    button {
      background: #eee;
      padding: 0 16px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      &:focus-visible {
        outline: dashed #FFF 1px;
      }
      
      svg {
        font-size: 27px;
      }
    }
  }
`;o.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 32px;
`;o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 250px;
  min-width: 250px;
  max-width: 333px;
  gap: 16px;

  &:hover {
    background-color: #e6eef7;
    /* box-shadow: 1px 1px 6px #cbcbcb; */
  }

  > div {
    &:nth-child(1) {
      display: inherit;
      align-self: center;
      height: 200px;
    }

    &:nth-child(2) {
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
    }

    &:nth-child(3) {
      display: flex;
      justify-content: space-between;
    }

    &:nth-child(4) {
      display: flex;
      justify-content: space-between;

      > span:first-child {
        > span:last-child {
          font-size: 10px;
        }
      }

      > span:last-of-type {
        display: flex;
        flex-direction: row;
        justify-content: end;

        > p {
          margin-right: 4px
        }
      }
    }

    &:nth-child(5) {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow-y: hidden;
      text-align: justify;
      color: var(--gray3);
    }

    &:nth-child(6) {
      display: flex;
      justify-content: end;

      button {
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: #313131;
        color: #fff;

        &:focus-visible {
          outline: dashed #FFF 1px;
          outline-offset: -4px;
        }
      }
    }
  }
`;o.span`
  user-select: none;  
  
  svg {
    height: 10px;
    width: 10px;    
    color: #626262;

    &:nth-child(n + 1):nth-child(-n + ${t=>t.rate}) {
      color: #DFB300;
    }
  }
`;const X=o.div`
  display: flex;
  flex-direction: column;
`,Z=o.div`
  display: flex;
  flex-direction: row;

  .input-search {
    padding: 16px 0 16px 16px;
  }

  button {
    width: 71.89px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:focus-visible {
      outline: dashed #000 1px;
      outline-offset: -16px;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
`,P=o.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow: auto;
  color: #000;
  /* outline: solid #BDBDBD 1px; */

  p {
    color: ${t=>t.theme.colors.grey};
  }
`,ee=o.span`
  display: flex;
  width: 30px;
  height: 30px;
`,te=()=>{var u,p;const{modalIsOpen:t,toggleModal:s}=q(),x={search:""},l=document.createElement("div"),d=B({onSubmit:i=>{console.log(i),s()},initialValues:x});return e.jsx(K,{children:e.jsx(V,{isOpen:t,contentLabel:"Search Results Modal",appElement:l,onRequestClose:s,style:{content:{top:"50%",left:"50%",padding:"0",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:e.jsxs(X,{className:"modal-content",children:[e.jsxs(Z,{children:[e.jsx(N,{name:"search",placeholder:"",value:(u=d==null?void 0:d.values)==null?void 0:u.search,onChange:d==null?void 0:d.handleChange,className:"input-search",autoFocus:!0,fit:!0}),e.jsx("button",{type:"button",onClick:()=>s(),children:e.jsx(O,{})})]}),e.jsxs(P,{children:[e.jsx("p",{children:`Results (${L.length} items)`}),e.jsx(J,{columns:[{name:"photo",width:"50px",selector:i=>i.photo},{name:"name",selector:i=>i.name},{name:"actions",width:"100px",center:!0,cell:i=>e.jsx("h1",{children:"Input"})}],data:(p=L)==null?void 0:p.map(i=>{const b=i!=null&&i.photo?`data:image/png;base64,${i.photo}`:H;return{id:i.id,name:(i==null?void 0:i.name)||"-",photo:(i==null?void 0:i.photo)||e.jsx(ee,{children:e.jsx("img",{src:b,alt:(i==null?void 0:i.name)||"N/A"})}),actions:""}}),noTableHead:!0})]})]})})})},T=t=>t.toLocaleString("en-us",{style:"currency",currency:"USD"}),ie=o.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  background-color: ${t=>t.theme.colors.background};
`,ne=o.div`
  display: flex;
  flex-direction: row;
  background: ${t=>t.theme.colors.blue};
  border-radius: 10px;
  padding: 16px;
  margin: 16px;

  justify-content: center;

  form {

    display: flex;
    width: 100%;

    > .input-search {
  
      /* min-width: 830px; */
      width: 100%;
  
      /* @media (max-width: 768px) {
        min-width: 350px;
      } */
  
      > div {
        flex-direction: column;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;        
      }
    }

    button {
      background: #eee;
      padding: 0 16px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      &:focus-visible {
        outline: dashed #000 1px;
        outline-offset: -4px;
      }
      
      svg {
        font-size: 27px;
      }
    }
  }
`,oe=o.div`
  display: flex;
  flex-direction: column;
`,se=o.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 32px;
`,le=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 250px;
  min-width: 250px;
  max-width: 333px;
  gap: 16px;

  perspective: 1000px;

  /* &:hover {
    background-color: #e6eef7;
  } */

  &.return {
    > div.card-inner {
      transform: rotateY(180deg);
    }
  }
`,re=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  height: 420px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
`,ae=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 250px;
  min-width: 250px;
  max-width: 333px;
  gap: 16px;

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  &:hover {
    background-color: #e6eef7;
  }

  > div {

    &:nth-child(1) {
      display: inherit;
      align-self: center;
      height: 200px;
    }

    &:nth-child(2) {
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
    }

    &:nth-child(3) {
      display: flex;
      justify-content: space-between;
    }

    &:nth-child(3) {
      display: flex;
      justify-content: space-between;
    }

    &:nth-child(4) {
      display: flex;
      justify-content: space-between;

      > span:first-child {
        > span:last-child {
          font-size: 10px;
        }
      }

      > span:last-of-type {
        display: flex;
        flex-direction: row;
        justify-content: end;

        > p {
          margin-right: 4px
        }
      }
    }

    &:nth-child(5) {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow-y: hidden;
      text-align: justify;
      color: var(--gray3);

      font-family: artifex-cf, serif !important;
      font-style: normal;
      font-weight: 400;
    }

    &:nth-child(6) {
      display: flex;
      justify-content: end;

      button {
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: #313131;
        color: #fff;

        &:focus-visible {
          outline: dashed #FFF 1px;
          outline-offset: -4px;
        }
      }
    }
  }
`,de=o.div`
  background: #eee;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  overflow-y: hidden;
  padding: 8px;
  
  > p.description {
    text-align: justify;
  }
`,ce=o.span`
  user-select: none;  
  
  svg {
    height: 10px;
    width: 10px;    
    color: #626262;

    &:nth-child(n + 1):nth-child(-n + ${t=>t.rate}) {
      color: #DFB300;
    }
  }
`;o.div`
  display: flex;
  flex-direction: column;
  background: red;

  button {
    background: green;
  }
`;o.div`
  display: flex;
  flex-direction: column;
`;o.div`
  display: flex;
  flex-direction: column;
`;const pe=o.div`
    width: 100%;
    min-height: 200px;
    background: url(${I}) center no-repeat #ffffff96;
    background-size: 5rem;

    position: absolute;
    z-index: 1;
    height: -webkit-fill-available;
    top: 80px;
`,he=()=>e.jsx(pe,{}),ge=()=>{var C;const{toggleModal:t}=q(),s={search:""},{loadingFetch:x,loadingRequest:l,loadingReturn:c,webStoreRequestList:d,webStoreReturnList:u,currentTabClass:p,fetchWebStoreRequestList:i,fetchWebStoreReturnList:b}=W(),y=r.useRef(!0),[g,w]=r.useState(1),[m,v]=r.useState(10),[f,k]=r.useState(1),a=B({onSubmit:n=>{console.log(n),t()},initialValues:s}),M=()=>{console.log("Added in truck")},S=()=>{w(1),v(10)},z=n=>new Promise(h=>setTimeout(h,n));return r.useEffect(()=>{y.current||(f===1&&i(g,m,a.values),f===2&&b(g,m,a.values))},[g,m,a==null?void 0:a.values,f]),r.useEffect(()=>{const n=h=>{document.querySelectorAll(".request, .return").forEach(async(R,_)=>{await z((_+1)*150),h==="request"&&(R.classList.add("request"),R.classList.remove("return")),h==="return"&&(R.classList.add("return"),R.classList.remove("request"))})};y.current||n(p)},[p]),r.useEffect(()=>()=>{y.current=!1},[]),e.jsxs(ie,{className:"request-items_container",children:[e.jsxs(ne,{children:[e.jsx(D,{type:"button",onClick:()=>{k(1),S()},btnTheme:"secondary",disabled:f===1||c,children:l&&!c?"...":"Request"}),e.jsx(D,{type:"button",onClick:()=>{k(2),S()},btnTheme:"secondary",disabled:f===2||l,children:c&&!l?"...":"Return"}),e.jsxs("form",{onSubmit:a.handleSubmit,children:[e.jsx(N,{name:"search",placeholder:"",value:(C=a==null?void 0:a.values)==null?void 0:C.search,onChange:a==null?void 0:a.handleChange,fit:!0}),e.jsx("button",{type:"submit",children:e.jsx(A,{})})]})]}),e.jsxs(oe,{children:[x&&e.jsx(he,{}),e.jsx(se,{children:(p==="request"?d.data:p==="return"?u.data:[]).map((n,h)=>e.jsx(le,{className:"request",children:e.jsxs(re,{className:"card-inner",children:[e.jsxs(ae,{className:"front",children:[e.jsx("div",{children:e.jsx("img",{src:H,alt:n.title})}),e.jsx("div",{children:e.jsx("h1",{children:n.title})}),e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx("label",{children:"Daily"}),e.jsx("p",{children:n.daily?T(n.daily):"-"})]}),e.jsxs("span",{children:[e.jsx("label",{children:"Weekly"}),e.jsx("p",{children:n.weekly?T(n.weekly):"-"})]}),e.jsxs("span",{children:[e.jsx("label",{children:"Monthly"}),e.jsx("p",{children:n.monthly?T(n.monthly):"-"})]})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsxs(ce,{rate:n.rate||0,children:[e.jsx(j,{}),e.jsx(j,{}),e.jsx(j,{}),e.jsx(j,{}),e.jsx(j,{})]}),e.jsx("span",{children:n.votes>999?"999+":n.votes})]}),e.jsxs("span",{children:[e.jsx("p",{children:"In stock:"}),e.jsx("p",{children:n.inStock>999?"999+":n.inStock})]})]}),e.jsx("div",{children:e.jsx("small",{children:n.description})}),e.jsx("div",{children:e.jsx("button",{type:"button",onClick:M,children:e.jsx("span",{children:"Add to truck"})})})]}),e.jsxs(de,{className:"back",children:[e.jsx(E,{children:"Return"}),e.jsx(E,{children:n.title}),e.jsx("br",{}),e.jsx("p",{children:"In Stock"}),e.jsx("p",{children:n.inStock}),e.jsx("br",{}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx("br",{}),e.jsx("p",{className:"description",children:n.description})]})]})},h))}),e.jsx(U,{length:f===1?d.rows:u.rows,currentPage:g,setCurrentPage:w,rowsPerPage:m,setRowsPerPage:v})]}),e.jsx(te,{})]})};export{ge as default};
