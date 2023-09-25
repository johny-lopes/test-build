import{C as F,s as p,r as n,c as m,F as on,G as me}from"./index-3ed8a00b.js";var X;function ie(e,t){return e[t]}function We(e,t){return t.split(".").reduce((o,a)=>{const l=a.match(/[^\]\\[.]+/g);if(l&&l.length>1)for(let i=0;i<l.length;i++)return o[l[i]][l[i+1]];return o[a]},e)}function an(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function ln(e=[],t,o="id"){const a=e.slice(),l=ie(t,o);return l?a.splice(a.findIndex(i=>ie(i,o)===l),1):a.splice(a.findIndex(i=>i===t),1),a}function ut(e){return e.map((t,o)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=o+1),a})}function pe(e,t){return Math.ceil(e/t)}function Ne(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const D=()=>null;function Ct(e,t=[],o=[]){let a={},l=[...o];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(l=[...l,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:l.join(" ")}}function ke(e,t=[],o="id"){const a=ie(e,o);return a?t.some(l=>ie(l,o)===a):t.some(l=>l===e)}function Ee(e,t){return t?e.findIndex(o=>be(o.id,t)):-1}function be(e,t){return e==t}function rn(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:l,rowCount:i,mergeSelections:s}=t,g=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const v=g?[...e.selectedRows,...l.filter(u=>!ke(u,e.selectedRows,a))]:e.selectedRows.filter(u=>!ke(u,l,a));return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:v.length,selectedRows:v,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:g?i:0,selectedRows:g?l:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:l,isSelected:i,rowCount:s,singleSelect:g}=t;return g?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[l],toggleOnSelectedRowsChange:o}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:ln(e.selectedRows,l,a),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:an(e.selectedRows,l),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:l,totalRows:i,mergeSelections:s}=t;if(s){const g=[...e.selectedRows,...l.filter(b=>!ke(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:g.length,allSelected:!1,selectedRows:g,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:l.length,allSelected:l.length===i,selectedRows:l,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:l,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:l,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:a,paginationServer:l,visibleOnly:i,persistSelectedOnPageChange:s}=t,g=l&&s,b=l&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),g&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:l}=t;return Object.assign(Object.assign({},e),{currentPage:l,rowsPerPage:a})}}}const sn=F`
	pointer-events: none;
	opacity: 0.4;
`,dn=p.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&sn};
	${({theme:e})=>e.table.style};
`,cn=F`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,gn=p.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&cn};
	${({theme:e})=>e.head.style};
`,un=p.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,vt=(e,...t)=>F`
		@media screen and (max-width: ${599}px) {
			${F(e,...t)}
		}
	`,pn=(e,...t)=>F`
		@media screen and (max-width: ${959}px) {
			${F(e,...t)}
		}
	`,bn=(e,...t)=>F`
		@media screen and (max-width: ${1280}px) {
			${F(e,...t)}
		}
	`,hn=e=>(t,...o)=>F`
				@media screen and (max-width: ${e}px) {
					${F(t,...o)}
				}
			`,de=p.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,yt=p(de)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&F`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&vt`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&pn`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&bn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&hn(e)`
    display: none;
  `};
`,mn=F`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,wn=p(yt).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&mn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var fn=n.memo(function({id:e,column:t,row:o,rowIndex:a,dataTag:l,isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:v,onDragLeave:u}){const{style:w,classNames:L}=Ct(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.createElement(wn,{id:e,"data-column-id":t.id,role:"cell",className:L,"data-tag":l,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:w,isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:v,onDragLeave:u},!t.cell&&n.createElement("div",{"data-tag":l},function(y,f,H,x){if(!f)return null;if(typeof f!="string"&&typeof f!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return H&&typeof H=="function"?H(y,x):f&&typeof f=="function"?f(y,x):We(y,f)}(o,t.selector,t.format,a)),t.cell&&t.cell(o,a,t,e))}),Rt=n.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:l=!1,disabled:i=!1,onClick:s=D}){const g=t,b=g!=="input"?o.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),v=n.useMemo(()=>function(u,...w){let L;return Object.keys(u).map(y=>u[y]).forEach((y,f)=>{typeof y=="function"&&(L=Object.assign(Object.assign({},u),{[Object.keys(u)[f]]:y(...w)}))}),L||u}(o,a),[o,a]);return n.createElement(g,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=a)},style:b,onClick:i?D:s,name:e,"aria-label":e,checked:l,disabled:i},v,{onChange:D}))});const xn=p(de)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Cn({name:e,keyField:t,row:o,rowCount:a,selected:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:g,selectableRowDisabled:b,onSelectedRow:v}){const u=!(!b||!b(o));return n.createElement(xn,{onClick:w=>w.stopPropagation(),className:"rdt_TableCell",noPadding:!0},n.createElement(Rt,{name:e,component:i,componentOptions:s,checked:l,"aria-checked":l,onClick:()=>{v({type:"SELECT_SINGLE_ROW",row:o,isSelected:l,keyField:t,rowCount:a,singleSelect:g})},disabled:u}))}const vn=p.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function yn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:a,row:l,onToggled:i}){const s=t?o.expanded:o.collapsed;return n.createElement(vn,{"aria-disabled":e,onClick:()=>i&&i(l),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const Rn=p(de)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Sn({row:e,expanded:t=!1,expandableIcon:o,id:a,onToggled:l,disabled:i=!1}){return n.createElement(Rn,{onClick:s=>s.stopPropagation(),noPadding:!0},n.createElement(yn,{id:a,row:e,expanded:t,expandableIcon:o,disabled:i,onToggled:l}))}const En=p.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var On=n.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:l}){const i=["rdt_ExpanderRow",...l.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return n.createElement(En,{className:i,extendedRowStyle:a},n.createElement(t,Object.assign({data:e},o)))}),Pe,Be,pt;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(Pe||(Pe={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Be||(Be={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(pt||(pt={}));const kn=F`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Pn=F`
	&:hover {
		cursor: pointer;
	}
`,Dn=p.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&kn};
	${({pointerOnHover:e})=>e&&Pn};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Hn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:l=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:g,expandableRowsComponentProps:b,expandableRowsHideExpander:v,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:w=!1,highlightOnHover:L=!1,id:y,expandableInheritConditionalStyles:f,keyField:H,onRowClicked:x=D,onRowDoubleClicked:P=D,onRowMouseEnter:$=D,onRowMouseLeave:S=D,onRowExpandToggled:O=D,onSelectedRow:M=D,pointerOnHover:T=!1,row:C,rowCount:R,rowIndex:U,selectableRowDisabled:A=null,selectableRows:N=!1,selectableRowsComponent:Q,selectableRowsComponentProps:k,selectableRowsHighlight:ne=!1,selectableRowsSingle:ce=!1,selected:oe,striped:ae=!1,draggingColumnId:De,onDragStart:He,onDragOver:$e,onDragEnd:Fe,onDragEnter:G,onDragLeave:we}){const[V,fe]=n.useState(o);n.useEffect(()=>{fe(o)},[o]);const Z=n.useCallback(()=>{fe(!V),O(!V,C)},[V,O,C]),Le=T||s&&(u||w),je=n.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(x(C,E),!a&&s&&u&&Z())},[a,u,s,Z,x,C]),xe=n.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(P(C,E),!a&&s&&w&&Z())},[a,w,s,Z,P,C]),Ie=n.useCallback(E=>{$(C,E)},[$,C]),Y=n.useCallback(E=>{S(C,E)},[S,C]),q=ie(C,H),{style:Ce,classNames:ve}=Ct(C,t,["rdt_TableRow"]),Me=ne&&oe,Te=f?Ce:{},Ae=ae&&U%2==0;return n.createElement(n.Fragment,null,n.createElement(Dn,{id:`row-${y}`,role:"row",striped:Ae,highlightOnHover:L,pointerOnHover:!a&&Le,dense:l,onClick:je,onDoubleClick:xe,onMouseEnter:Ie,onMouseLeave:Y,className:ve,selected:Me,style:Ce},N&&n.createElement(Cn,{name:`select-row-${q}`,keyField:H,row:C,rowCount:R,selected:oe,selectableRowsComponent:Q,selectableRowsComponentProps:k,selectableRowDisabled:A,selectableRowsSingle:ce,onSelectedRow:M}),s&&!v&&n.createElement(Sn,{id:q,expandableIcon:i,expanded:V,row:C,onToggled:Z,disabled:a}),e.map(E=>E.omit?null:n.createElement(fn,{id:`cell-${E.id}-${q}`,key:`cell-${E.id}-${q}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:C,rowIndex:U,isDragging:be(De,E.id),onDragStart:He,onDragOver:$e,onDragEnd:Fe,onDragEnter:G,onDragLeave:we}))),s&&V&&n.createElement(On,{key:`expander-${q}`,data:C,extendedRowStyle:Te,extendedClassNames:ve,ExpanderComponent:g,expanderComponentProps:b}))}const $n=p.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Fn=({sortActive:e,sortDirection:t})=>m.createElement($n,{sortActive:e,sortDirection:t},"▲"),Ln=p(yt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,jn=F`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&F`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,In=p.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&jn};
`,Mn=p.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Tn=n.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:a={},sortDirection:l,sortIcon:i,sortServer:s,pagination:g,paginationServer:b,persistSelectedOnSort:v,selectableRowsVisibleOnly:u,onSort:w,onDragStart:L,onDragOver:y,onDragEnd:f,onDragEnter:H,onDragLeave:x}){n.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,$]=n.useState(!1),S=n.useRef(null);if(n.useEffect(()=>{S.current&&$(S.current.scrollWidth>S.current.clientWidth)},[P]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=l;be(a.id,e.id)&&(k=l===X.ASC?X.DESC:X.ASC),w({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:g&&b&&!v||s||u})},M=k=>n.createElement(Fn,{sortActive:k,sortDirection:l}),T=()=>n.createElement("span",{className:[l,"__rdt_custom_sort_icon__"].join(" ")},i),C=!(!e.sortable||!be(a.id,e.id)),R=!e.sortable||t,U=e.sortable&&!i&&!e.right,A=e.sortable&&!i&&e.right,N=e.sortable&&i&&!e.right,Q=e.sortable&&i&&e.right;return n.createElement(Ln,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:be(e.id,o),onDragStart:L,onDragOver:y,onDragEnd:f,onDragEnter:H,onDragLeave:x},e.name&&n.createElement(In,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:R?void 0:O,onKeyPress:R?void 0:k=>{k.key==="Enter"&&O()},sortActive:!R&&C,disabled:R},!R&&Q&&T(),!R&&A&&M(C),typeof e.name=="string"?n.createElement(Mn,{title:P?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!R&&N&&T(),!R&&U&&M(C)))});const An=p(de)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function _n({headCell:e=!0,rowData:t,keyField:o,allSelected:a,mergeSelections:l,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:g,selectableRowDisabled:b,onSelectAllRows:v}){const u=i.length>0&&!a,w=b?t.filter(f=>!b(f)):t,L=w.length===0,y=Math.min(t.length,w.length);return n.createElement(An,{className:"rdt_TableCol",headCell:e,noPadding:!0},n.createElement(Rt,{name:"select-all-rows",component:s,componentOptions:g,onClick:()=>{v({type:"SELECT_ALL_ROWS",rows:w,rowCount:y,mergeSelections:l,keyField:o})},checked:a,indeterminate:u,disabled:L}))}function St(e=Pe.AUTO){const t=typeof window=="object",[o,a]=n.useState(!1);return n.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const l=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],g=i.dir==="rtl"||s.dir==="rtl";a(l&&g)}},[e,t]),o}const zn=p.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Nn=p.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,bt=p.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function Wn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:a,direction:l}){const i=St(l),s=a>0;return o?n.createElement(bt,{visible:s},n.cloneElement(o,{selectedCount:a})):n.createElement(bt,{visible:s,rtl:i},n.createElement(zn,null,((g,b,v)=>{if(b===0)return null;const u=b===1?g.singular:g.plural;return v?`${b} ${g.message||""} ${u}`:`${b} ${u} ${g.message||""}`})(e,a,i)),n.createElement(Nn,null,t))}const Bn=p.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Gn=p.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Vn=p.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Un=({title:e,actions:t=null,contextMessage:o,contextActions:a,contextComponent:l,selectedCount:i,direction:s,showMenu:g=!0})=>n.createElement(Bn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.createElement(Gn,null,e),t&&n.createElement(Vn,null,t),g&&n.createElement(Wn,{contextMessage:o,contextActions:a,contextComponent:l,direction:s,selectedCount:i}));function Et(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o}const Qn={left:"flex-start",right:"flex-end",center:"center"},Yn=p.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Qn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Jn=e=>{var{align:t="right",wrapContent:o=!0}=e,a=Et(e,["align","wrapContent"]);return n.createElement(Yn,Object.assign({align:t,wrapContent:o},a))},Kn=p.div`
	display: flex;
	flex-direction: column;
`,Xn=p.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&F`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&F`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,ht=p.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Zn=p.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,qn=p(de)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,eo=p.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,to=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.createElement("path",{d:"M7 10l5 5 5-5z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),no=p.select`
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

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,oo=p.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
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
`,ao=e=>{var{defaultValue:t,onChange:o}=e,a=Et(e,["defaultValue","onChange"]);return n.createElement(oo,null,n.createElement(no,Object.assign({onChange:o,defaultValue:t},a)),n.createElement(to,null))},r={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return m.createElement("div",null,"To add an expander pass in a component instance via ",m.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:m.createElement(()=>m.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),m.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:m.createElement(()=>m.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),m.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:m.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:m.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Be.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),m.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),m.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:Pe.AUTO,onChangePage:D,onChangeRowsPerPage:D,onRowClicked:D,onRowDoubleClicked:D,onRowMouseEnter:D,onRowMouseLeave:D,onRowExpandToggled:D,onSelectedRowsChange:D,onSort:D,onColumnOrderChange:D},lo={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},ro=p.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Oe=p.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,io=p.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${vt`
    width: 100%;
    justify-content: space-around;
  `};
`,Ot=p.span`
	flex-shrink: 1;
	user-select: none;
`,so=p(Ot)`
	margin: 0 24px;
`,co=p(Ot)`
	margin: 0 4px;
`;var go=n.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:a=r.direction,paginationRowsPerPageOptions:l=r.paginationRowsPerPageOptions,paginationIconLastPage:i=r.paginationIconLastPage,paginationIconFirstPage:s=r.paginationIconFirstPage,paginationIconNext:g=r.paginationIconNext,paginationIconPrevious:b=r.paginationIconPrevious,paginationComponentOptions:v=r.paginationComponentOptions,onChangeRowsPerPage:u=r.onChangeRowsPerPage,onChangePage:w=r.onChangePage}){const L=(()=>{const k=typeof window=="object";function ne(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[ce,oe]=n.useState(ne);return n.useEffect(()=>{if(!k)return()=>null;function ae(){oe(ne())}return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),ce})(),y=St(a),f=L.width&&L.width>599,H=pe(t,e),x=o*e,P=x-e+1,$=o===1,S=o===H,O=Object.assign(Object.assign({},lo),v),M=o===H?`${P}-${t} ${O.rangeSeparatorText} ${t}`:`${P}-${x} ${O.rangeSeparatorText} ${t}`,T=n.useCallback(()=>w(o-1),[o,w]),C=n.useCallback(()=>w(o+1),[o,w]),R=n.useCallback(()=>w(1),[w]),U=n.useCallback(()=>w(pe(t,e)),[w,t,e]),A=n.useCallback(k=>u(Number(k.target.value),o),[o,u]),N=l.map(k=>n.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&N.push(n.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const Q=n.createElement(ao,{onChange:A,defaultValue:e,"aria-label":O.rowsPerPageText},N);return n.createElement(ro,{className:"rdt_Pagination"},!O.noRowsPerPage&&f&&n.createElement(n.Fragment,null,n.createElement(co,null,O.rowsPerPageText),Q),f&&n.createElement(so,null,M),n.createElement(io,null,n.createElement(Oe,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":$,onClick:R,disabled:$,isRTL:y},s),n.createElement(Oe,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":$,onClick:T,disabled:$,isRTL:y},b),!f&&Q,n.createElement(Oe,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:C,disabled:S,isRTL:y},g),n.createElement(Oe,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,isRTL:y},i)))});const te=(e,t)=>{const o=n.useRef(!0);n.useEffect(()=>{o.current?o.current=!1:e()},t)};var uo=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(a){return a.$$typeof===po}(t)}(e)},po=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function he(e,t){return t.clone!==!1&&t.isMergeableObject(e)?se((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function bo(e,t,o){return e.concat(t).map(function(a){return he(a,o)})}function mt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function wt(e,t){try{return t in e}catch{return!1}}function ho(e,t,o){var a={};return o.isMergeableObject(e)&&mt(e).forEach(function(l){a[l]=he(e[l],o)}),mt(t).forEach(function(l){(function(i,s){return wt(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,l)||(wt(e,l)&&o.isMergeableObject(t[l])?a[l]=function(i,s){if(!s.customMerge)return se;var g=s.customMerge(i);return typeof g=="function"?g:se}(l,o)(e[l],t[l],o):a[l]=he(t[l],o))}),a}function se(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||bo,o.isMergeableObject=o.isMergeableObject||uo,o.cloneUnlessOtherwiseSpecified=he;var a=Array.isArray(t);return a===Array.isArray(e)?a?o.arrayMerge(e,t,o):ho(e,t,o):he(t,o)}se.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,a){return se(o,a,t)},{})};var mo=se;const ft={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},xt={default:ft,light:ft,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function wo(e,t,o,a){const[l,i]=n.useState(()=>ut(e)),[s,g]=n.useState(""),b=n.useRef("");te(()=>{i(ut(e))},[e]);const v=n.useCallback(x=>{var P,$,S;const{attributes:O}=x.target,M=(P=O.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;M&&(b.current=((S=($=l[Ee(l,M)])===null||$===void 0?void 0:$.id)===null||S===void 0?void 0:S.toString())||"",g(b.current))},[l]),u=n.useCallback(x=>{var P;const{attributes:$}=x.target,S=(P=$.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(S&&b.current&&S!==b.current){const O=Ee(l,b.current),M=Ee(l,S),T=[...l];T[O]=l[M],T[M]=l[O],i(T),t(T)}},[t,l]),w=n.useCallback(x=>{x.preventDefault()},[]),L=n.useCallback(x=>{x.preventDefault()},[]),y=n.useCallback(x=>{x.preventDefault(),b.current="",g("")},[]),f=function(x=!1){return x?X.ASC:X.DESC}(a),H=n.useMemo(()=>l[Ee(l,o==null?void 0:o.toString())]||{},[o,l]);return{tableColumns:l,draggingColumnId:s,handleDragStart:v,handleDragEnter:u,handleDragOver:w,handleDragLeave:L,handleDragEnd:y,defaultSortDirection:f,defaultSortColumn:H}}var xo=n.memo(function(e){const{data:t=r.data,columns:o=r.columns,title:a=r.title,actions:l=r.actions,keyField:i=r.keyField,striped:s=r.striped,highlightOnHover:g=r.highlightOnHover,pointerOnHover:b=r.pointerOnHover,dense:v=r.dense,selectableRows:u=r.selectableRows,selectableRowsSingle:w=r.selectableRowsSingle,selectableRowsHighlight:L=r.selectableRowsHighlight,selectableRowsNoSelectAll:y=r.selectableRowsNoSelectAll,selectableRowsVisibleOnly:f=r.selectableRowsVisibleOnly,selectableRowSelected:H=r.selectableRowSelected,selectableRowDisabled:x=r.selectableRowDisabled,selectableRowsComponent:P=r.selectableRowsComponent,selectableRowsComponentProps:$=r.selectableRowsComponentProps,onRowExpandToggled:S=r.onRowExpandToggled,onSelectedRowsChange:O=r.onSelectedRowsChange,expandableIcon:M=r.expandableIcon,onChangeRowsPerPage:T=r.onChangeRowsPerPage,onChangePage:C=r.onChangePage,paginationServer:R=r.paginationServer,paginationServerOptions:U=r.paginationServerOptions,paginationTotalRows:A=r.paginationTotalRows,paginationDefaultPage:N=r.paginationDefaultPage,paginationResetDefaultPage:Q=r.paginationResetDefaultPage,paginationPerPage:k=r.paginationPerPage,paginationRowsPerPageOptions:ne=r.paginationRowsPerPageOptions,paginationIconLastPage:ce=r.paginationIconLastPage,paginationIconFirstPage:oe=r.paginationIconFirstPage,paginationIconNext:ae=r.paginationIconNext,paginationIconPrevious:De=r.paginationIconPrevious,paginationComponent:He=r.paginationComponent,paginationComponentOptions:$e=r.paginationComponentOptions,responsive:Fe=r.responsive,progressPending:G=r.progressPending,progressComponent:we=r.progressComponent,persistTableHead:V=r.persistTableHead,noDataComponent:fe=r.noDataComponent,disabled:Z=r.disabled,noTableHead:Le=r.noTableHead,noHeader:je=r.noHeader,fixedHeader:xe=r.fixedHeader,fixedHeaderScrollHeight:Ie=r.fixedHeaderScrollHeight,pagination:Y=r.pagination,subHeader:q=r.subHeader,subHeaderAlign:Ce=r.subHeaderAlign,subHeaderWrap:ve=r.subHeaderWrap,subHeaderComponent:Me=r.subHeaderComponent,noContextMenu:Te=r.noContextMenu,contextMessage:Ae=r.contextMessage,contextActions:E=r.contextActions,contextComponent:kt=r.contextComponent,expandableRows:ye=r.expandableRows,onRowClicked:Ge=r.onRowClicked,onRowDoubleClicked:Ve=r.onRowDoubleClicked,onRowMouseEnter:Ue=r.onRowMouseEnter,onRowMouseLeave:Qe=r.onRowMouseLeave,sortIcon:Pt=r.sortIcon,onSort:Dt=r.onSort,sortFunction:Ye=r.sortFunction,sortServer:_e=r.sortServer,expandableRowsComponent:Ht=r.expandableRowsComponent,expandableRowsComponentProps:$t=r.expandableRowsComponentProps,expandableRowDisabled:Je=r.expandableRowDisabled,expandableRowsHideExpander:Ke=r.expandableRowsHideExpander,expandOnRowClicked:Ft=r.expandOnRowClicked,expandOnRowDoubleClicked:Lt=r.expandOnRowDoubleClicked,expandableRowExpanded:Xe=r.expandableRowExpanded,expandableInheritConditionalStyles:jt=r.expandableInheritConditionalStyles,defaultSortFieldId:It=r.defaultSortFieldId,defaultSortAsc:Mt=r.defaultSortAsc,clearSelectedRows:Ze=r.clearSelectedRows,conditionalRowStyles:Tt=r.conditionalRowStyles,theme:qe=r.theme,customStyles:et=r.customStyles,direction:ge=r.direction,onColumnOrderChange:At=r.onColumnOrderChange,className:_t}=e,{tableColumns:tt,draggingColumnId:nt,handleDragStart:ot,handleDragEnter:at,handleDragOver:lt,handleDragLeave:rt,handleDragEnd:it,defaultSortDirection:zt,defaultSortColumn:Nt}=wo(o,At,It,Mt),[{rowsPerPage:J,currentPage:_,selectedRows:ze,allSelected:st,selectedCount:dt,selectedColumn:W,sortDirection:le,toggleOnSelectedRowsChange:Wt},ee]=n.useReducer(rn,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Nt,toggleOnSelectedRowsChange:!1,sortDirection:zt,currentPage:N,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:r.contextMessage}),{persistSelectedOnSort:ct=!1,persistSelectedOnPageChange:Re=!1}=U,gt=!(!R||!Re&&!ct),Bt=Y&&!G&&t.length>0,Gt=He||go,Vt=n.useMemo(()=>((c={},h="default",I="default")=>{const z=xt[h]?h:I;return mo({table:{style:{color:(d=xt[z]).text.primary,backgroundColor:d.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:d.text.primary,backgroundColor:d.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:d.background.default,minHeight:"52px"}},head:{style:{color:d.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:d.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:d.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:d.context.background,fontSize:"18px",fontWeight:400,color:d.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:d.text.primary,backgroundColor:d.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:d.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:d.selected.text,backgroundColor:d.selected.default,borderBottomColor:d.background.default}},highlightOnHoverStyle:{color:d.highlightOnHover.text,backgroundColor:d.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:d.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:d.background.default},stripedStyle:{color:d.striped.text,backgroundColor:d.striped.default}},expanderRow:{style:{color:d.text.primary,backgroundColor:d.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:d.button.default,fill:d.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:d.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:d.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:d.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:d.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:d.button.default,fill:d.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:d.button.disabled,fill:d.button.disabled},"&:hover:not(:disabled)":{backgroundColor:d.button.hover},"&:focus":{outline:"none",backgroundColor:d.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:d.text.primary,backgroundColor:d.background.default}}},c);var d})(et,qe),[et,qe]),Ut=n.useMemo(()=>Object.assign({},ge!=="auto"&&{dir:ge}),[ge]),j=n.useMemo(()=>{if(_e)return t;if(W!=null&&W.sortFunction&&typeof W.sortFunction=="function"){const c=W.sortFunction,h=le===X.ASC?c:(I,z)=>-1*c(I,z);return[...t].sort(h)}return function(c,h,I,z){return h?z&&typeof z=="function"?z(c.slice(0),h,I):c.slice(0).sort((d,Se)=>{let K,B;if(typeof h=="string"?(K=We(d,h),B=We(Se,h)):(K=h(d),B=h(Se)),I==="asc"){if(K<B)return-1;if(K>B)return 1}if(I==="desc"){if(K>B)return-1;if(K<B)return 1}return 0}):c}(t,W==null?void 0:W.selector,le,Ye)},[_e,W,le,t,Ye]),ue=n.useMemo(()=>{if(Y&&!R){const c=_*J,h=c-J;return j.slice(h,c)}return j},[_,Y,R,J,j]),Qt=n.useCallback(c=>{ee(c)},[]),Yt=n.useCallback(c=>{ee(c)},[]),Jt=n.useCallback(c=>{ee(c)},[]),Kt=n.useCallback((c,h)=>Ge(c,h),[Ge]),Xt=n.useCallback((c,h)=>Ve(c,h),[Ve]),Zt=n.useCallback((c,h)=>Ue(c,h),[Ue]),qt=n.useCallback((c,h)=>Qe(c,h),[Qe]),re=n.useCallback(c=>ee({type:"CHANGE_PAGE",page:c,paginationServer:R,visibleOnly:f,persistSelectedOnPageChange:Re}),[R,Re,f]),en=n.useCallback(c=>{const h=pe(A||ue.length,c),I=Ne(_,h);R||re(I),ee({type:"CHANGE_ROWS_PER_PAGE",page:I,rowsPerPage:c})},[_,re,R,A,ue.length]);if(Y&&!R&&j.length>0&&ue.length===0){const c=pe(j.length,J),h=Ne(_,c);re(h)}te(()=>{O({allSelected:st,selectedCount:dt,selectedRows:ze.slice(0)})},[Wt]),te(()=>{Dt(W,le,j.slice(0))},[W,le]),te(()=>{C(_,A||j.length)},[_]),te(()=>{T(J,_)},[J]),te(()=>{re(N)},[N,Q]),te(()=>{if(Y&&R&&A>0){const c=pe(A,J),h=Ne(_,c);_!==h&&re(h)}},[A]),n.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ze})},[w,Ze]),n.useEffect(()=>{if(!H)return;const c=j.filter(I=>H(I)),h=w?c.slice(0,1):c;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:h,totalRows:j.length,mergeSelections:gt})},[t,H]);const tn=f?ue:j,nn=Re||w||y;return n.createElement(on,{theme:Vt},!je&&(!!a||!!l)&&n.createElement(Un,{title:a,actions:l,showMenu:!Te,selectedCount:dt,direction:ge,contextActions:E,contextComponent:kt,contextMessage:Ae}),q&&n.createElement(Jn,{align:Ce,wrapContent:ve},Me),n.createElement(Xn,Object.assign({responsive:Fe,fixedHeader:xe,fixedHeaderScrollHeight:Ie,className:_t},Ut),n.createElement(Zn,null,G&&!V&&n.createElement(ht,null,we),n.createElement(dn,{disabled:Z,className:"rdt_Table",role:"table"},!Le&&(!!V||j.length>0&&!G)&&n.createElement(gn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:xe},n.createElement(un,{className:"rdt_TableHeadRow",role:"row",dense:v},u&&(nn?n.createElement(de,{style:{flex:"0 0 48px"}}):n.createElement(_n,{allSelected:st,selectedRows:ze,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:x,rowData:tn,keyField:i,mergeSelections:gt,onSelectAllRows:Yt})),ye&&!Ke&&n.createElement(qn,null),tt.map(c=>n.createElement(Tn,{key:c.id,column:c,selectedColumn:W,disabled:G||j.length===0,pagination:Y,paginationServer:R,persistSelectedOnSort:ct,selectableRowsVisibleOnly:f,sortDirection:le,sortIcon:Pt,sortServer:_e,onSort:Qt,onDragStart:ot,onDragOver:lt,onDragEnd:it,onDragEnter:at,onDragLeave:rt,draggingColumnId:nt})))),!j.length&&!G&&n.createElement(eo,null,fe),G&&V&&n.createElement(ht,null,we),!G&&j.length>0&&n.createElement(Kn,{className:"rdt_TableBody",role:"rowgroup"},ue.map((c,h)=>{const I=ie(c,i),z=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(I)?h:I,d=ke(c,ze,i),Se=!!(ye&&Xe&&Xe(c)),K=!!(ye&&Je&&Je(c));return n.createElement(Hn,{id:z,key:z,keyField:i,"data-row-id":z,columns:tt,row:c,rowCount:j.length,rowIndex:h,selectableRows:u,expandableRows:ye,expandableIcon:M,highlightOnHover:g,pointerOnHover:b,dense:v,expandOnRowClicked:Ft,expandOnRowDoubleClicked:Lt,expandableRowsComponent:Ht,expandableRowsComponentProps:$t,expandableRowsHideExpander:Ke,defaultExpanderDisabled:K,defaultExpanded:Se,expandableInheritConditionalStyles:jt,conditionalRowStyles:Tt,selected:d,selectableRowsHighlight:L,selectableRowsComponent:P,selectableRowsComponentProps:$,selectableRowDisabled:x,selectableRowsSingle:w,striped:s,onRowExpandToggled:S,onRowClicked:Kt,onRowDoubleClicked:Xt,onRowMouseEnter:Zt,onRowMouseLeave:qt,onSelectedRow:Jt,draggingColumnId:nt,onDragStart:ot,onDragOver:lt,onDragEnd:it,onDragEnter:at,onDragLeave:rt})}))))),Bt&&n.createElement("div",null,n.createElement(Gt,{onChangePage:re,onChangeRowsPerPage:en,rowCount:A||j.length,currentPage:_,rowsPerPage:J,direction:ge,paginationRowsPerPageOptions:ne,paginationIconLastPage:ce,paginationIconFirstPage:oe,paginationIconNext:ae,paginationIconPrevious:De,paginationComponentOptions:$e})))});function Co(e){return me({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function vo(e){return me({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"}}]})(e)}function yo(e){return me({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"}}]})(e)}function Ro(e){return me({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function So(e){return me({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}export{Ro as F,xo as Q,Co as a,vo as b,yo as c,So as d};
