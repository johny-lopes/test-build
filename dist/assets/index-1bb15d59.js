import{s as w,j as o,k as Et,P as v,r as m,c as Ot,m as Oe,n as de,u as ct,o as ut,a as pt,I as Pe,p as Te,q as ge,t as Pt,v as qe,B as he,w as Tt,T as Rt,x as _t,y as It}from"./index-96b06510.js";import{O as kt,R as dt,o as zt,P as Ye,Q as ne}from"./warning-9ed6a631.js";import{Q as Mt}from"./index.es-6a321b83.js";import{d as $t,R as Lt}from"./empty-profile-25015ccb.js";const Bt=w.div`

    .rdt_TableHead {
        .rdt_TableHeadRow {
            background-color: ${e=>e.theme.colors.tableTitle};
            color: ${e=>e.theme.colors.darkGrey};
            font-weight: bold;
        }
    }

    .rdt_TableHeadRow, .rdt_TableRow {
        background-color: ${e=>e.theme.colors.background};
        color: ${e=>e.theme.colors.darkGrey};
        min-height: 51px;
        font-weight: 300;
        border: transparent;

        &:nth-child(even) {
            background:${e=>e.theme.colors.tableStripedRow};
        }
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
`,Ut=({loading:e=!0,columns:t,data:n,responsive:r=!0,noTableHead:a=!1,pagination:i=!1,paginationPerPage:c=10,totalRows:f=0,selectableRows:b=!1,toggleClearSelectedRows:u=!1,onSelectedRowsChange:g,onPageChange:y,onRowsPerPageChange:I})=>{const l=F=>{g&&g(F)},E=F=>{y&&y(F)},C=F=>{I&&I(F)};return o.jsx(Bt,{children:o.jsx(Mt,{columns:t,data:n,progressPending:e,progressComponent:o.jsx(Et,{}),noDataComponent:o.jsx("p",{style:{lineHeight:"normal"},children:"No register to show."}),noTableHead:a,pagination:i,paginationRowsPerPageOptions:[5,10,15,30],paginationPerPage:c,customStyles:{headRow:{style:{fontSize:"1rem"}},cells:{style:{fontSize:"1rem"}}},responsive:r,selectableRows:b,onSelectedRowsChange:l,clearSelectedRows:u,onSort:F=>console.log("onSort: ",F),onColumnOrderChange:F=>console.log("onColumnOrderChange: ",F),paginationServer:!0,paginationTotalRows:f,onChangeRowsPerPage:C,onChangePage:E})})};function J(e,t,n,r){function a(i){return i instanceof n?i:new n(function(c){c(i)})}return new(n||(n=Promise))(function(i,c){function f(g){try{u(r.next(g))}catch(y){c(y)}}function b(g){try{u(r.throw(g))}catch(y){c(y)}}function u(g){g.done?i(g.value):a(g.value).then(f,b)}u((r=r.apply(e,t||[])).next())})}function Q(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,c;return c={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function f(u){return function(g){return b([u,g])}}function b(u){if(r)throw new TypeError("Generator is already executing.");for(;c&&(c=0,u[0]&&(n=0)),n;)try{if(r=1,a&&(i=u[0]&2?a.return:u[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;switch(a=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,a=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(g){u=[6,g],a=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Je(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),a,i=[],c;try{for(;(t===void 0||t-- >0)&&!(a=r.next()).done;)i.push(a.value)}catch(f){c={error:f}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(c)throw c.error}}return i}function Qe(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Nt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ie(e,t){var n=Kt(e);if(typeof n.path!="string"){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof t=="string"?t:typeof r=="string"&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Kt(e){var t=e.name,n=t&&t.lastIndexOf(".")!==-1;if(n&&!e.type){var r=t.split(".").pop().toLowerCase(),a=Nt.get(r);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var Ht=[".DS_Store","Thumbs.db"];function Wt(e){return J(this,void 0,void 0,function(){return Q(this,function(t){return me(e)&&Gt(e.dataTransfer)?[2,Jt(e.dataTransfer,e.type)]:Vt(e)?[2,qt(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,Yt(e)]:[2,[]]})})}function Gt(e){return me(e)}function Vt(e){return me(e)&&me(e.target)}function me(e){return typeof e=="object"&&e!==null}function qt(e){return _e(e.target.files).map(function(t){return ie(t)})}function Yt(e){return J(this,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(r){return r.getFile()}))];case 1:return t=n.sent(),[2,t.map(function(r){return ie(r)})]}})})}function Jt(e,t){return J(this,void 0,void 0,function(){var n,r;return Q(this,function(a){switch(a.label){case 0:return e.items?(n=_e(e.items).filter(function(i){return i.kind==="file"}),t!=="drop"?[2,n]:[4,Promise.all(n.map(Qt))]):[3,2];case 1:return r=a.sent(),[2,Xe(ft(r))];case 2:return[2,Xe(_e(e.files).map(function(i){return ie(i)}))]}})})}function Xe(e){return e.filter(function(t){return Ht.indexOf(t.name)===-1})}function _e(e){if(e===null)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Qt(e){if(typeof e.webkitGetAsEntry!="function")return Ze(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?gt(t):Ze(e)}function ft(e){return e.reduce(function(t,n){return Qe(Qe([],Je(t),!1),Je(Array.isArray(n)?ft(n):[n]),!1)},[])}function Ze(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=ie(t);return Promise.resolve(n)}function Xt(e){return J(this,void 0,void 0,function(){return Q(this,function(t){return[2,e.isDirectory?gt(e):Zt(e)]})})}function gt(e){var t=e.createReader();return new Promise(function(n,r){var a=[];function i(){var c=this;t.readEntries(function(f){return J(c,void 0,void 0,function(){var b,u,g;return Q(this,function(y){switch(y.label){case 0:if(f.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return b=y.sent(),n(b),[3,4];case 3:return u=y.sent(),r(u),[3,4];case 4:return[3,6];case 5:g=Promise.all(f.map(Xt)),a.push(g),i(),y.label=6;case 6:return[2]}})})},function(f){r(f)})}i()})}function Zt(e){return J(this,void 0,void 0,function(){return Q(this,function(t){return[2,new Promise(function(n,r){e.file(function(a){var i=ie(a,e.fullPath);n(i)},function(a){r(a)})})]})})}var en=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",a=(e.type||"").toLowerCase(),i=a.replace(/\/.*$/,"");return n.some(function(c){var f=c.trim().toLowerCase();return f.charAt(0)==="."?r.toLowerCase().endsWith(f):f.endsWith("/*")?i===f.replace(/\/.*$/,""):a===f})}return!0};function et(e){return rn(e)||nn(e)||mt(e)||tn()}function tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rn(e){if(Array.isArray(e))return Ie(e)}function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(n),!0).forEach(function(r){ht(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ht(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e,t){return ln(e)||an(e,t)||mt(e,t)||on()}function on(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mt(e,t){if(e){if(typeof e=="string")return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function an(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,c,f;try{for(n=n.call(e);!(a=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));a=!0);}catch(b){i=!0,f=b}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw f}}return r}}function ln(e){if(Array.isArray(e))return e}var sn="file-invalid-type",cn="file-too-large",un="file-too-small",pn="too-many-files",dn=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var n=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:sn,message:"File type must be ".concat(n)}},rt=function(t){return{code:cn,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},it=function(t){return{code:un,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},fn={code:pn,message:"Too many files"};function xt(e,t){var n=e.type==="application/x-moz-file"||en(e,t);return[n,n?null:dn(t)]}function bt(e,t,n){if(H(e.size))if(H(t)&&H(n)){if(e.size>n)return[!1,rt(n)];if(e.size<t)return[!1,it(t)]}else{if(H(t)&&e.size<t)return[!1,it(t)];if(H(n)&&e.size>n)return[!1,rt(n)]}return[!0,null]}function H(e){return e!=null}function gn(e){var t=e.files,n=e.accept,r=e.minSize,a=e.maxSize,i=e.multiple,c=e.maxFiles,f=e.validator;return!i&&t.length>1||i&&c>=1&&t.length>c?!1:t.every(function(b){var u=xt(b,n),g=re(u,1),y=g[0],I=bt(b,r,a),l=re(I,1),E=l[0],C=f?f(b):null;return y&&E&&!C})}function xe(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function fe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function ot(e){e.preventDefault()}function hn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function mn(e){return e.indexOf("Edge/")!==-1}function xn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return hn(e)||mn(e)}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),c=1;c<a;c++)i[c-1]=arguments[c];return t.some(function(f){return!xe(r)&&f&&f.apply(void 0,[r].concat(i)),xe(r)})}}function bn(){return"showOpenFilePicker"in window}function yn(e){if(H(e)){var t=Object.entries(e).filter(function(n){var r=re(n,2),a=r[0],i=r[1],c=!0;return yt(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(i)||!i.every(vt))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(n,r){var a=re(r,2),i=a[0],c=a[1];return nt(nt({},n),{},ht({},i,c))},{});return[{description:"Files",accept:t}]}return e}function vn(e){if(H(e))return Object.entries(e).reduce(function(t,n){var r=re(n,2),a=r[0],i=r[1];return[].concat(et(t),[a],et(i))},[]).filter(function(t){return yt(t)||vt(t)}).join(",")}function wn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function jn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function yt(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function vt(e){return/^.*\.[\w]+$/.test(e)}var Dn=["children"],Cn=["open"],Fn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],An=["refKey","onChange","onClick"];function Sn(e){return Pn(e)||On(e)||wt(e)||En()}function En(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function On(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pn(e){if(Array.isArray(e))return ke(e)}function Re(e,t){return _n(e)||Rn(e,t)||wt(e,t)||Tn()}function Tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wt(e,t){if(e){if(typeof e=="string")return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ke(e,t)}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,c,f;try{for(n=n.call(e);!(a=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));a=!0);}catch(b){i=!0,f=b}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw f}}return r}}function _n(e){if(Array.isArray(e))return e}function at(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?at(Object(n),!0).forEach(function(r){ze(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){if(e==null)return{};var n=In(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function In(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var $e=m.forwardRef(function(e,t){var n=e.children,r=be(e,Dn),a=Dt(r),i=a.open,c=be(a,Cn);return m.useImperativeHandle(t,function(){return{open:i}},[i]),Ot.createElement(m.Fragment,null,n(j(j({},c),{},{open:i})))});$e.displayName="Dropzone";var jt={disabled:!1,getFilesFromEvent:Wt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};$e.defaultProps=jt;$e.propTypes={children:v.func,accept:v.objectOf(v.arrayOf(v.string)),multiple:v.bool,preventDropOnDocument:v.bool,noClick:v.bool,noKeyboard:v.bool,noDrag:v.bool,noDragEventsBubbling:v.bool,minSize:v.number,maxSize:v.number,maxFiles:v.number,disabled:v.bool,getFilesFromEvent:v.func,onFileDialogCancel:v.func,onFileDialogOpen:v.func,useFsAccessApi:v.bool,autoFocus:v.bool,onDragEnter:v.func,onDragLeave:v.func,onDragOver:v.func,onDrop:v.func,onDropAccepted:v.func,onDropRejected:v.func,onError:v.func,validator:v.func};var Me={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Dt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=j(j({},jt),e),n=t.accept,r=t.disabled,a=t.getFilesFromEvent,i=t.maxSize,c=t.minSize,f=t.multiple,b=t.maxFiles,u=t.onDragEnter,g=t.onDragLeave,y=t.onDragOver,I=t.onDrop,l=t.onDropAccepted,E=t.onDropRejected,C=t.onFileDialogCancel,F=t.onFileDialogOpen,M=t.useFsAccessApi,U=t.autoFocus,k=t.preventDropOnDocument,N=t.noClick,$=t.noKeyboard,d=t.noDrag,x=t.noDragEventsBubbling,D=t.onError,A=t.validator,T=m.useMemo(function(){return vn(n)},[n]),L=m.useMemo(function(){return yn(n)},[n]),X=m.useMemo(function(){return typeof F=="function"?F:lt},[F]),W=m.useMemo(function(){return typeof C=="function"?C:lt},[C]),O=m.useRef(null),_=m.useRef(null),oe=m.useReducer(kn,Me),Z=Re(oe,2),p=Z[0],R=Z[1],ve=p.isFocused,ee=p.isFileDialogActive,ae=m.useRef(typeof window<"u"&&window.isSecureContext&&M&&bn()),Le=function(){!ae.current&&ee&&setTimeout(function(){if(_.current){var h=_.current.files;h.length||(R({type:"closeDialog"}),W())}},300)};m.useEffect(function(){return window.addEventListener("focus",Le,!1),function(){window.removeEventListener("focus",Le,!1)}},[_,ee,W,ae]);var G=m.useRef([]),Be=function(h){O.current&&O.current.contains(h.target)||(h.preventDefault(),G.current=[])};m.useEffect(function(){return k&&(document.addEventListener("dragover",ot,!1),document.addEventListener("drop",Be,!1)),function(){k&&(document.removeEventListener("dragover",ot),document.removeEventListener("drop",Be))}},[O,k]),m.useEffect(function(){return!r&&U&&O.current&&O.current.focus(),function(){}},[O,U,r]);var K=m.useCallback(function(s){D?D(s):console.error(s)},[D]),Ue=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),G.current=[].concat(Sn(G.current),[s.target]),fe(s)&&Promise.resolve(a(s)).then(function(h){if(!(xe(s)&&!x)){var S=h.length,P=S>0&&gn({files:h,accept:T,minSize:c,maxSize:i,multiple:f,maxFiles:b,validator:A}),z=S>0&&!P;R({isDragAccept:P,isDragReject:z,isDragActive:!0,type:"setDraggedFiles"}),u&&u(s)}}).catch(function(h){return K(h)})},[a,u,K,x,T,c,i,f,b,A]),Ne=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var h=fe(s);if(h&&s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return h&&y&&y(s),!1},[y,x]),Ke=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var h=G.current.filter(function(P){return O.current&&O.current.contains(P)}),S=h.indexOf(s.target);S!==-1&&h.splice(S,1),G.current=h,!(h.length>0)&&(R({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),fe(s)&&g&&g(s))},[O,g,x]),le=m.useCallback(function(s,h){var S=[],P=[];s.forEach(function(z){var te=xt(z,T),Y=Re(te,2),je=Y[0],De=Y[1],Ce=bt(z,c,i),pe=Re(Ce,2),Fe=pe[0],Ae=pe[1],Se=A?A(z):null;if(je&&Fe&&!Se)S.push(z);else{var Ee=[De,Ae];Se&&(Ee=Ee.concat(Se)),P.push({file:z,errors:Ee.filter(function(St){return St})})}}),(!f&&S.length>1||f&&b>=1&&S.length>b)&&(S.forEach(function(z){P.push({file:z,errors:[fn]})}),S.splice(0)),R({acceptedFiles:S,fileRejections:P,type:"setFiles"}),I&&I(S,P,h),P.length>0&&E&&E(P,h),S.length>0&&l&&l(S,h)},[R,f,T,c,i,b,I,l,E,A]),se=m.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),G.current=[],fe(s)&&Promise.resolve(a(s)).then(function(h){xe(s)&&!x||le(h,s)}).catch(function(h){return K(h)}),R({type:"reset"})},[a,le,K,x]),V=m.useCallback(function(){if(ae.current){R({type:"openDialog"}),X();var s={multiple:f,types:L};window.showOpenFilePicker(s).then(function(h){return a(h)}).then(function(h){le(h,null),R({type:"closeDialog"})}).catch(function(h){wn(h)?(W(h),R({type:"closeDialog"})):jn(h)?(ae.current=!1,_.current?(_.current.value=null,_.current.click()):K(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):K(h)});return}_.current&&(R({type:"openDialog"}),X(),_.current.value=null,_.current.click())},[R,X,W,M,le,K,L,f]),He=m.useCallback(function(s){!O.current||!O.current.isEqualNode(s.target)||(s.key===" "||s.key==="Enter"||s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),V())},[O,V]),We=m.useCallback(function(){R({type:"focus"})},[]),Ge=m.useCallback(function(){R({type:"blur"})},[]),Ve=m.useCallback(function(){N||(xn()?setTimeout(V,0):V())},[N,V]),q=function(h){return r?null:h},we=function(h){return $?null:q(h)},ce=function(h){return d?null:q(h)},ue=function(h){x&&h.stopPropagation()},Ct=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=s.refKey,S=h===void 0?"ref":h,P=s.role,z=s.onKeyDown,te=s.onFocus,Y=s.onBlur,je=s.onClick,De=s.onDragEnter,Ce=s.onDragOver,pe=s.onDragLeave,Fe=s.onDrop,Ae=be(s,Fn);return j(j(ze({onKeyDown:we(B(z,He)),onFocus:we(B(te,We)),onBlur:we(B(Y,Ge)),onClick:q(B(je,Ve)),onDragEnter:ce(B(De,Ue)),onDragOver:ce(B(Ce,Ne)),onDragLeave:ce(B(pe,Ke)),onDrop:ce(B(Fe,se)),role:typeof P=="string"&&P!==""?P:"presentation"},S,O),!r&&!$?{tabIndex:0}:{}),Ae)}},[O,He,We,Ge,Ve,Ue,Ne,Ke,se,$,d,r]),Ft=m.useCallback(function(s){s.stopPropagation()},[]),At=m.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=s.refKey,S=h===void 0?"ref":h,P=s.onChange,z=s.onClick,te=be(s,An),Y=ze({accept:T,multiple:f,type:"file",style:{display:"none"},onChange:q(B(P,se)),onClick:q(B(z,Ft)),tabIndex:-1},S,_);return j(j({},Y),te)}},[_,n,f,se,r]);return j(j({},p),{},{isFocused:ve&&!r,getRootProps:Ct,getInputProps:At,rootRef:O,inputRef:_,open:q(V)})}function kn(e,t){switch(t.type){case"focus":return j(j({},e),{},{isFocused:!0});case"blur":return j(j({},e),{},{isFocused:!1});case"openDialog":return j(j({},Me),{},{isFileDialogActive:!0});case"closeDialog":return j(j({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return j(j({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return j(j({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return j({},Me);default:return e}}function lt(){}async function zn(e){const t=new FileReader;return t.readAsDataURL(e),new Promise((n,r)=>{t.onload=()=>n(t.result),t.onerror=a=>r(a)})}function st(e,t){if(!e)return null;const n=e.split(",");if(!n[0])return null;const r=atob(n[0]);let a=r.length;const i=new Uint8Array(a);for(;a--;)i[a]=r.charCodeAt(a);return new File([i],t,{type:t})}const ye=200,Mn=w.div`
    width: ${ye}px;
    min-width: ${ye}px;
    height: min-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > span {
        display: flex;
        align-self: start;
        margin-bottom: 4px;

        @media (max-width: 768px) {
            align-self: center;
        }
    }

    > small {
        color: var(--secondary);

        &.errors {
            margin-top: 2px;
            align-self: start;
            text-align: left;
            color: red;
            min-height: 15px;
        }
    }
`,$n=w.div`
    overflow: hidden;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    position: relative;
    height: ${ye}px;

    @media (max-width: 576px) {
        max-height: ${ye}px;
    }

    aside {
        display: 'flex';
        flex-direction: 'row';
        flex-wrap: 'wrap';
        margin-top: 16;
        min-width: 100%;

        img {
            display: block;
            max-width: 100%;
            min-width: 100%;
        }

        &.invalid {
            border: 2px solid red;
        }
    }
`,Ln=e=>e.isDragAccept||e.isDragReject?"#ccc":e.isFocused?"#2196f3":"#ffffff",Bn=w.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-color: #fff;
    border: 2px solid ${e=>Ln(e)};

    &.empty {
        background: url(${$t}) center / 100% 100% no-repeat;
        filter: opacity(0.5);
    }

    &:hover {
        cursor: pointer;
    }

    p {
        font-size: 12px;
        color: var(--secondary);
        background: green;
        background: transparent;
    }
`,Un=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 16px;

    p {
        font-size: 16px;
    }

    > span {
        display: inherit;
        flex-direction: column;
        align-items: center;

        small {
            font-size: 14px;
        }
    }
`,Nn=({name:e,value:t=void 0,formik:n=void 0,label:r="Photo",placeholder:a="Max size 5 Mb.",tooltip:i="Drag and drop a file here or click to select a file.",disabled:c=!1,maxSizeMB:f=5,extensions:b={"image/jpeg":[".jpeg"],"image/png":[".png"],"image/gif":[".gif"]},rejectedFileFeedback:u})=>{const[g,y]=m.useState([]),[I,l]=m.useState([]),E=m.useMemo(()=>[{code:"file-too-large",message:`File larger than the ${f} MB limit`},{code:"file-invalid-type",message:"Invalid file format"}],[f]),C=m.useCallback(async x=>{t!=null&&t.name&&e&&y(x.map(D=>Object.assign(D,{preview:URL.createObjectURL(D)})))},[e,t==null?void 0:t.name]),{getRootProps:F,getInputProps:M,isFocused:U,isDragAccept:k,isDragReject:N}=Dt({multiple:!1,accept:b,maxSize:1e3*1e3*f,disabled:c,maxFiles:1,onDropRejected(x,D){var T;const A=(T=x[0])==null?void 0:T.errors.map(L=>L.code);l(A),$(A)},onDropAccepted(x,D){l([]),$([])},onDrop:x=>{if(x[0].name!==(t==null?void 0:t.name))C(x),d(x);else if(t&&(g==null?void 0:g.length)===0){const A=st(t.data,t.name);A&&C([A])}}}),$=m.useCallback(x=>{const D=x.map(A=>{var T;return(T=E.find(L=>A===L.code))==null?void 0:T.message});if(u&&D&&E){const A=D.reduce((T,L)=>T+=", "+L);u(A)}},[E,u]);m.useEffect(()=>{if(t&&(g==null?void 0:g.length)===0){const x=st(t.data,t.name);x&&C([x])}},[C,g==null?void 0:g.length,e,t]);const d=m.useCallback(async x=>{const D=x[0],A=await zn(D);A!=null&&n.setFieldValue(e,{name:D.name,data:A.replace("data:","").replace(/^.+,/,""),size:D.size})},[n,e]);return m.useEffect(()=>()=>{g.forEach(x=>URL.revokeObjectURL(x.preview))},[g]),o.jsxs(Mn,{children:[o.jsx("span",{children:r}),o.jsxs($n,{children:[(g==null?void 0:g.length)>0&&o.jsx("aside",{children:o.jsx("img",{src:g[0].preview,onLoad:()=>{URL.revokeObjectURL(g[0].preview)},alt:g[0].name||"photo preview"})},g[0].name),o.jsx(Bn,{...F({className:`dropzone ${(g==null?void 0:g.length)===0?"empty":""}`,isFocused:U,isDragAccept:k,isDragReject:N}),title:c?"":i,"aria-label":`${r}. ${i}`,children:o.jsx("input",{...M()})})]}),o.jsxs(Un,{children:[o.jsxs("p",{children:["Attatch photo ",o.jsx(kt,{})]}),o.jsxs("span",{children:[o.jsx("small",{children:a}),o.jsx("small",{children:"Allowed formats: .png, .jpg, .gif"})]})]})]})},Kn=Oe().shape({name:de().min(3,"Minimum 3 characters").max(50,"Maximum 50 characters").required().label("Nome"),email:de().email().required().label("Email"),profile:Oe().required().shape({id:de()}),company:Oe().required().shape({id:de()})}),Hn=w.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background};
`;w.div`
  display: flex;
  flex-direction: row;
  background: ${e=>e.theme.colors.blue};
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
`;w.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 32px;
`;w.div`
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
`;w.span`
  user-select: none;  
  
  svg {
    height: 10px;
    width: 10px;    
    color: #626262;

    &:nth-child(n + 1):nth-child(-n + ${e=>e.rate}) {
      color: #DFB300;
    }
  }
`;const Wn=w.div`
  display: flex;
  flex-direction: column;
`,Gn=w.div`
  display: flex;
  flex-direction: row;

  h1 {
    display: flex;
    width: 100%;
    justify-content: center;    
    padding: 16px 0 16px 16px;
    font-size: 24px;
    color: ${e=>e.theme.colors.darkGrey};
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
`,Vn=w.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  overflow: auto;
  color: #000;
  /* outline: solid #BDBDBD 1px; */
  gap: 16px;
  height: inherit;

  p {
    color: ${e=>e.theme.colors.grey};
  }

  > form {
    display: flex;
    flex-direction: column;

    > div {
      
      &:first-child {
        display: inherit;
        gap: 32px;

        > span:last-child {
          display: inherit;
          flex-direction: column;
          width: 100%;
          gap: 16px;

          .jobtitle-and-isadmin {
            display: inherit;
            width: 100%;
            
            > div {
              &:first-child {
                flex: 2;
              }
              &:last-child {
                flex: 1;
                align-self: flex-end;
                place-items: end;
              }            
            }
          }
        }
      }

      &:last-child {
        display: inherit;
        gap: 16px;
        flex-direction: column;
      }
    }    
  }
`,qn=w.div`
  display: flex;
  padding: 16px;
  width: 100%;
  justify-content: end;

  > div {
    gap: 32px;

    button {
      width: 100px;
    }
  }
`,Yn=w.div`
  display: flex;
`,Jn=({userEditing:e})=>{var F,M,U,k,N,$;const{modalIsOpen:t,toggleModal:n}=ct(),r={name:"",email:"",profile:null,company:null,landingPage:0,admin:!1,status:1},{save:a,edit:i,clearUserEditing:c,fetchUserListSSP:f,profiles:b,companies:u}=ut(),g=document.createElement("div"),y=()=>{n(),f(1,10,null)},l=pt({onSubmit:d=>{e?i(d,y):a(d,y)},validationSchema:Kn,enableReinitialize:!0,initialValues:e!=null&&e.id?{...e,profile:e==null?void 0:e.profile,company:e==null?void 0:e.company}:r}),E=d=>{var x,D;return(x=l==null?void 0:l.getFieldMeta(d))!=null&&x.touched&&((D=l==null?void 0:l.getFieldMeta(d))!=null&&D.error)?l.getFieldMeta(d).error:""},C=()=>{l.resetForm(),c()};return o.jsx(Hn,{children:o.jsx(Lt,{isOpen:t,contentLabel:e?"Edit User":"Create New User",appElement:g,onRequestClose:n,onAfterClose:C,style:{content:{top:"50%",left:"50%",padding:"0",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",height:"80%"}},children:o.jsxs(Wn,{children:[o.jsxs(Gn,{children:[o.jsx("h1",{children:e?"Edit User":"Create New User"}),o.jsx("button",{type:"button",onClick:()=>n(),children:o.jsx(dt,{})})]}),o.jsx(Vn,{className:"modal-body",children:o.jsxs("form",{id:"hookform",onSubmit:l.handleSubmit,children:[o.jsxs("div",{children:[o.jsx("span",{children:o.jsx(Nn,{name:"photo",value:((F=l==null?void 0:l.values)==null?void 0:F.photo)||void 0,formik:l,maxSizeMB:1,extensions:{"image/jpeg":[],"image/png":[]}})}),o.jsxs("span",{children:[o.jsx(Pe,{name:"name",label:"Name *",value:(M=l==null?void 0:l.values)==null?void 0:M.name,onChange:l==null?void 0:l.handleChange,errorText:E("name"),autoFocus:!0}),o.jsx(Pe,{name:"email",label:"E-mail *",value:(U=l==null?void 0:l.values)==null?void 0:U.email,onChange:l==null?void 0:l.handleChange,errorText:E("email")}),o.jsx(Te,{name:"profile",label:"Profile *",value:l!=null&&l.values?b==null?void 0:b.find(d=>{var x;return(d==null?void 0:d.id)===((x=l==null?void 0:l.values.profile)==null?void 0:x.id)}):void 0,onChange:d=>{l.setFieldValue("profile",d)},errorText:E("profile"),options:b}),o.jsxs("div",{className:"jobtitle-and-isadmin",children:[o.jsx(Pe,{name:"jobTitle",label:"Job Title",value:(k=l==null?void 0:l.values)==null?void 0:k.jobTitle,onChange:l==null?void 0:l.handleChange}),o.jsx(ge,{id:"admin",name:"admin",label:"Is Admin?",onChange:l==null?void 0:l.handleChange,checked:(N=l==null?void 0:l.values)==null?void 0:N.admin})]})]})]}),o.jsxs("div",{children:[o.jsx(Te,{name:"company",label:"Company *",value:l!=null&&l.values?u==null?void 0:u.find(d=>{var x;return(d==null?void 0:d.id.toString())===((x=l==null?void 0:l.values.company)==null?void 0:x.id.toString())}):void 0,onChange:d=>{l.setFieldValue("company",d)},errorText:E("profile"),options:u,searchable:!0}),o.jsx(Pt,{name:"status",label:"Status",value:($=l==null?void 0:l.values)==null?void 0:$.status,onChange:d=>{console.log(d),l.setFieldValue("status",d.value)}}),o.jsx(Te,{name:"landingPage",label:"Landing Page",value:l!=null&&l.values?qe.find(d=>{var x;return(d==null?void 0:d.id.toString())===((x=l==null?void 0:l.values.landingPage)==null?void 0:x.toString())}):void 0,onChange:d=>{l.setFieldValue("landingPage",Number(d.id))},options:qe,searchable:!0})]})]})}),o.jsx(qn,{children:o.jsxs(Yn,{children:[o.jsx(he,{onClick:n,btnTheme:"secondary",children:"Cancel"}),o.jsx(he,{type:"submit",btnTheme:"primary",form:"hookform",children:"Save"})]})})]})})})},Qn=w.div`
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
`,Xn=({children:e})=>o.jsx(Qn,{children:e}),Zn=w.div`

`,er=w.div`
  display: flex;
  height: calc(100vh - 80px);
`,tr=w.div`
  width: 100%;
  overflow-y: auto;
`,nr=w.aside`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 24px 0px rgba(22, 22, 22, 0.10);
  width: 0;
  overflow: hidden;
  transition: width 0.3s ease;
  padding: 32px 0;
  gap: 16px;

  &.open {
    width: 364px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    font-size: 16px;
    align-items: center;
    height: 32px;
    
    svg {
      font-size: 26px;
    }
  }

  > ul {
    
    > li {
      border-top: solid var(--gray5) 1px;

      &:last-child {
        border-bottom: solid var(--gray5) 1px;
      }

      > button, > span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 32px;
        font-family: inherit;
        font-size: 14px;
        height: 32px;
        width: 100%;

        svg {
          font-size: 20px;
          margin-right: 4px;
        }
      }

      > div {
        display: flex;
        flex-direction: column;        
        height: 0;
        padding: 0 32px 0 48px;
        gap: 8px;
        overflow-y: hidden;

        &.open {
          height: auto;
          padding-bottom: 16px;
        }

        > div {
          align-items: self-start;
          font-size: 12px;
        }
      }

      ul {
        gap: 8px;
        display: flex;
        flex-direction: column;        
        gap: 8px;

        > li {
          align-items: self-start;
          font-size: 12px;

          > div {
            align-items: start;
          }
        }
      }
    }
  }
`,rr=w.div`
  padding: 0 32px;
`,ir=w.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #A7A7A7 0%, #8C8C8C 100%);
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
  }
`,or=w.div`
  display: flex;
  justify-content: space-between;
`,ar=w.span`
  display: flex;
  gap: 32px;
  /* width: 100%; */
`;w.span`
  display: flex;
  gap: 32px;

  > span:last-child {
    align-self: center;
  }
`;w.button`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 22px;
    height: 22px;
  }
`;const pr=()=>{var oe,Z;const[e,t]=m.useState(1),[n,r]=m.useState(10),[a,i]=m.useState(!1),[c,f]=m.useState(!1),[b,u]=m.useState(!1),{toggleModal:g}=ct(),{setProfileOptions:y,setCompanyOptions:I,setUserEditingById:l,removeUserById:E,fetchUserListSSP:C,userEditing:F,userListSSP:M,loadingFetch:U,profiles:k}=ut(),N=[{name:"Actions",width:"80px",cell:p=>o.jsxs(Xn,{"aria-label":"Action buttons",children:[o.jsx("button",{onClick:()=>A(p.id),"aria-label":"Edit user action",children:o.jsx(_t,{})}),o.jsx("button",{onClick:()=>D(p.id),"aria-label":"Remove user action",children:o.jsx(It,{})})]})},{name:"Name",minWidth:"260px",cell:p=>p.name},{name:"E-mail",width:"200px",cell:p=>p.email},{name:"Profile",width:"150px",cell:p=>p.profile},{name:"Job Title",width:"150px",cell:p=>p.jobTitle},{name:"Company",width:"150px",cell:p=>p.company},{name:"Admin",width:"150px",cell:p=>p.admin},{name:"Status",width:"100px",cell:p=>p.status}],d=pt({onSubmit:p=>{C(e,n,p)},initialValues:{search:""}}),x=m.useCallback(()=>{C(e,n,d.values)},[e,C,d.values,n]),D=p=>{E(p,x)},A=p=>{l(p),g()},T=()=>{i(!a)},L=p=>{t(p)},X=p=>{r(p)},W=p=>{d.setFieldValue("status",p.target.checked?1:null)},O=p=>{d.setFieldValue("status",p.target.checked?0:null)},_=p=>{document.querySelectorAll("[name=profileId]").forEach(ve=>{const ee=ve;ee.id!==p&&(ee.checked=!1)}),d.setFieldValue("profileId",p)};return m.useEffect(()=>{y()},[y]),m.useEffect(()=>{I()},[I]),m.useEffect(()=>{C(e,n,d.values)},[e,C,d.values.status,d.values.profileId,n]),o.jsxs(Zn,{className:"admin-container",children:[o.jsxs(er,{className:"content-wrapper",children:[o.jsxs(tr,{children:[o.jsxs(ir,{children:[o.jsx(or,{children:o.jsx(ar,{children:o.jsx(he,{btnTheme:"primary",onClick:g,children:"Create New User"})})}),o.jsxs("div",{children:[o.jsx("form",{onSubmit:d.handleSubmit,children:o.jsx(Tt,{name:"search",value:(oe=d==null?void 0:d.values)==null?void 0:oe.search,onChange:d==null?void 0:d.handleChange,onClick:d==null?void 0:d.submitForm,fit:!0})}),o.jsx(he,{btnTheme:"primary","aria-label":"Filter",onClick:T,children:o.jsx(zt,{})})]})]}),o.jsxs(rr,{children:[o.jsx(Rt,{children:"User Administration"}),o.jsx(Ut,{loading:U,columns:N,data:((Z=M==null?void 0:M.data)==null?void 0:Z.map(p=>({id:p.id,name:p.name,email:p.email,profile:p.profile,jobTitle:p.jobTitle,company:p.company,admin:p.admin,status:p.status})))||[],pagination:!0,paginationPerPage:n,onPageChange:L,onRowsPerPageChange:X,totalRows:M.rows})]})]}),o.jsxs(nr,{className:`filter ${a?"open":""}`,children:[o.jsxs("div",{children:[o.jsx("p",{children:"Filters"}),o.jsx("button",{type:"button",onClick:T,children:o.jsx(dt,{})})]}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsxs("button",{type:"button",onClick:()=>u(!b),children:["Profile",b?o.jsx(Ye,{}):o.jsx(ne,{})]}),o.jsx("div",{className:b?"open":"",children:(k==null?void 0:k.length)>0?o.jsx("ul",{children:k.map((p,R)=>o.jsx("li",{children:o.jsx(ge,{id:p.id,name:"profileId",label:(p==null?void 0:p.name)||"N/A",onChange:()=>_(p.id),fit:!0})},String(R)))}):o.jsx("p",{children:"No profiles"})})]}),o.jsx("li",{children:o.jsxs("span",{children:[o.jsx("p",{children:"Job Title"}),o.jsx(ne,{})]})}),o.jsx("li",{children:o.jsxs("span",{children:[o.jsx("p",{children:"Company"}),o.jsx(ne,{})]})}),o.jsxs("li",{children:[o.jsxs("button",{type:"button",onClick:()=>f(!c),children:["Status",c?o.jsx(Ye,{}):o.jsx(ne,{})]}),o.jsxs("div",{className:c?"open":"",children:[o.jsx(ge,{name:"statusActive",id:"statusActive",label:"Active",onChange:W,fit:!0}),o.jsx(ge,{name:"statusInactive",id:"statusInactive",label:"Inactive",onChange:O,fit:!0})]})]}),o.jsx("li",{children:o.jsxs("span",{children:[o.jsx("p",{children:"Admin"}),o.jsx(ne,{})]})})]})]})]}),o.jsx(Jn,{userEditing:F})]})};export{pr as default};
