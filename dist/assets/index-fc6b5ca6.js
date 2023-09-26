import{s as r,j as t,D as h,E as m,r as f,T as u,B as b,x as g,y}from"./index-18a85b89.js";import{Q as w}from"./index.es-b3d3b164.js";const v=r.div`

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
`,j=({columns:e,data:n,responsive:s=!0,noTableHead:i=!1,pagination:x=!1,selectableRows:a=!1,toggleClearSelectedRows:d=!1,onSelectedRowsChange:l})=>{const c=p=>{l&&l(p)};return t.jsx(v,{children:t.jsx(w,{columns:e,data:n,progressComponent:t.jsx("p",{children:"Loading..."}),noDataComponent:t.jsx("p",{style:{lineHeight:"normal"},children:"No register to show."}),noTableHead:i,pagination:x,paginationRowsPerPageOptions:[5,10,15,30],customStyles:{headRow:{style:{fontSize:"1rem"}},cells:{style:{fontSize:"1rem"}}},responsive:s,selectableRows:a,onSelectedRowsChange:c,clearSelectedRows:d})})},C=r.div`
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
`,k=({children:e})=>t.jsx(C,{children:e}),T=r.div`

`,$=r.div`
  display: flex;
  height: calc(100vh - 80px);
`,R=r.div`
  width: 100%;
  overflow-y: auto;
`,_=r.div`
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
`;const P=r.span`
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
`;const F=()=>{const{fetchProfileAdminList:e,setProfileEditingById:n,removeProfileById:s,profileAdminList:i,loadingFetch:x}=h(),a=m(),d=[{name:"Name",cell:o=>o.name},{name:"Status",cell:o=>o.status},{name:"Actions",width:"80px",cell:o=>t.jsxs(k,{"aria-label":"Action buttons",children:[t.jsx("button",{onClick:()=>c(o.id),"aria-label":"Edit user action",children:t.jsx(g,{})}),t.jsx("button",{onClick:()=>l(o.id),"aria-label":"Remove user action",children:t.jsx(y,{})})]})}],l=o=>{s(o)},c=o=>{n(o),a(`/profile-admin/edit/${o}`)},p=()=>{a("/profile-admin/create")};return f.useEffect(()=>{e()},[e]),t.jsx(T,{className:"profile-admin-container",children:t.jsx($,{className:"content-wrapper",children:t.jsx(R,{children:t.jsxs(_,{children:[t.jsx(u,{children:"Profile Administration"}),t.jsx(P,{children:t.jsx(b,{btnTheme:"primary",onClick:p,children:"Create New Item"})}),t.jsx(j,{columns:d,data:(i==null?void 0:i.map(o=>({id:o.id,name:o.name,status:o.status})))||[]})]})})})})};export{F as default};
