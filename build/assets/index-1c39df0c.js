import{s as r,j as t,w as u,x as f,r as x,T as b,B as g}from"./index-473353eb.js";import{Q as y,c as w,d as v}from"./index.esm-8cafe164.js";const j=r.div`

    .rdt_TableHead {
        .rdt_TableHeadRow {
            background-color: ${e=>e.theme.colors.secondary};
            color: ${e=>e.theme.colors.darkGrey};
        }
    }

    .rdt_TableHeadRow, .rdt_TableRow {
        background-color: ${e=>e.theme.colors.primary};
        background-color: ${e=>e.theme.colors.background};
        color: ${e=>e.theme.colors.darkGrey};
        border-bottom-color: ${e=>e.theme.colors.grey};
        min-height: 51px;
        font-weight: 300;
    }

    .rdt_TableHeadRow:first-of-type {
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: ${e=>e.theme.colors.grey};
    }

    .rdt_TableRow:last-of-type {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: ${e=>e.theme.colors.grey};
    }

    .rdt_TableCol:first-of-type,
    .rdt_TableCell:first-of-type {
        padding-left: 16px
    }

    .rdt_TableCol:last-of-type,
    .rdt_TableCell:last-of-type {
        padding-right: 0
    }

    .rdt_Pagination {
        justify-content: center;
        box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.10);
        color: ${e=>e.theme.colors.darkGrey};
        width: 448px;
        border-radius: 10px;
        min-height: 40px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 16px;
    }
`,C=({columns:e,data:s,responsive:d=!0,noTableHead:i=!1,pagination:h=!1,selectableRows:a=!1,toggleClearSelectedRows:n=!1,onSelectedRowsChange:l})=>{const c=p=>{l&&l(p)};return t.jsx(j,{children:t.jsx(y,{columns:e,data:s,progressComponent:t.jsx("p",{children:"Loading..."}),noDataComponent:t.jsx("p",{style:{lineHeight:"normal"},children:"No register to show."}),noTableHead:i,pagination:h,paginationRowsPerPageOptions:[5,10,15,30],customStyles:{headRow:{style:{fontSize:"1rem"}},cells:{style:{fontSize:"1rem"}}},responsive:d,selectableRows:a,onSelectedRowsChange:c,clearSelectedRows:n})})},k=r.div`
    display: flex;
    column-gap: 16px;

    a {
        color: ${e=>e.theme.colors.darkGrey};

        &:link, &:hover, &:visited, &:active {
            color: ${e=>e.theme.colors.darkGrey};
        }
    }

    a:last-child {
        color: ${e=>e.theme.colors.primaryText};

        &:link, &:hover, &:visited, &:active {
            color: ${e=>e.theme.colors.primaryText};
        }
    }

    button {
        color: #394E6D;
    }
`,T=({children:e})=>t.jsx(k,{children:e}),$=r.div`

`,R=r.div`
  display: flex;
  height: calc(100vh - 80px);
`,_=r.div`
  width: 100%;
  overflow-y: auto;
`,P=r.div`
  padding: 0 32px;
  row-gap: 16px;
  display: flex;
  flex-direction: column;  
`;r.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
  justify-content: center;
  gap: 16px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.10);

  > div:last-child {
    display: flex;
    flex-direction: row;
    gap: 32px;

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
        /* padding: 0 16px; */
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

    button {
      width: 48px;
    }
  }
`;r.div`
  display: flex;
  justify-content: space-between;
`;const E=r.span`
  display: flex;
  gap: 32px;
  /* padding: 0 32px; */
`;r.button`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 22px;
    height: 22px;
  }
`;const N=()=>{const{fetchProfileAdminList:e,setProfileEditingById:s,removeProfileById:d,profileAdminList:i,loadingFetch:h}=u(),a=f(),n=x.useRef(!0),l=[{name:"Name",cell:o=>o.name},{name:"Status",cell:o=>o.status},{name:"Actions",width:"80px",cell:o=>t.jsxs(T,{"aria-label":"Action buttons",children:[t.jsx("button",{onClick:()=>p(o.id),"aria-label":"Edit user action",children:t.jsx(w,{})}),t.jsx("button",{onClick:()=>c(o.id),"aria-label":"Remove user action",children:t.jsx(v,{})})]})}],c=o=>{d(o)},p=o=>{s(o),a(`/profile-admin/edit/${o}`)},m=()=>{a("/profile-admin/create")};return x.useEffect(()=>{n.current||e()},[e]),x.useEffect(()=>()=>{n.current=!1},[]),t.jsx($,{className:"profile-admin-container",children:t.jsx(R,{className:"content-wrapper",children:t.jsx(_,{children:t.jsxs(P,{children:[t.jsx(b,{children:"Profile Administration"}),t.jsx(E,{children:t.jsx(g,{btnTheme:"primary",onClick:m,children:"Create New Item"})}),t.jsx(C,{columns:l,data:(i==null?void 0:i.map(o=>({id:o.id,name:o.name,status:o.status})))||[]})]})})})})};export{N as default};
