import{s as j,j as a,k as St,P as y,r as h,c as Et,m as Ce,n as se,u as at,o as lt,a as st,I as Fe,p as Ae,q as Ee,t as Ot,v as Ge,B as ue,w as Pt,T as Tt,x as Rt,y as _t}from"./index-db52d6f6.js";import{O as It,R as ct,o as kt,P as Z,Q as $t}from"./warning-bc0976b2.js";import{Q as zt}from"./index.es-3a94ad4c.js";import{d as Mt,R as Lt}from"./empty-profile-dd7ae0f7.js";const Bt=j.div`

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
`,Ut=({loading:e=!0,columns:t,data:n,responsive:r=!0,noTableHead:o=!1,pagination:i=!1,paginationPerPage:c=10,totalRows:d=0,selectableRows:b=!1,toggleClearSelectedRows:u=!1,onSelectedRowsChange:f,onPageChange:v,onRowsPerPageChange:k})=>{const l=F=>{f&&f(F)},O=F=>{v&&v(F)},E=F=>{k&&k(F)};return a.jsx(Bt,{children:a.jsx(zt,{columns:t,data:n,progressPending:e,progressComponent:a.jsx(St,{}),noDataComponent:a.jsx("p",{style:{lineHeight:"normal"},children:"No register to show."}),noTableHead:o,pagination:i,paginationRowsPerPageOptions:[5,10,15,30],paginationPerPage:c,customStyles:{headRow:{style:{fontSize:"1rem"}},cells:{style:{fontSize:"1rem"}}},responsive:r,selectableRows:b,onSelectedRowsChange:l,clearSelectedRows:u,onSort:F=>console.log("onSort: ",F),onColumnOrderChange:F=>console.log("onColumnOrderChange: ",F),paginationServer:!0,paginationTotalRows:d,onChangeRowsPerPage:E,onChangePage:O})})};function Y(e,t,n,r){function o(i){return i instanceof n?i:new n(function(c){c(i)})}return new(n||(n=Promise))(function(i,c){function d(f){try{u(r.next(f))}catch(v){c(v)}}function b(f){try{u(r.throw(f))}catch(v){c(v)}}function u(f){f.done?i(f.value):o(f.value).then(d,b)}u((r=r.apply(e,t||[])).next())})}function J(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,c;return c={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function d(u){return function(f){return b([u,f])}}function b(u){if(r)throw new TypeError("Generator is already executing.");for(;c&&(c=0,u[0]&&(n=0)),n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Ve(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],c;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(d){c={error:d}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(c)throw c.error}}return i}function qe(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Nt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,t){var n=Ht(e);if(typeof n.path!="string"){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof t=="string"?t:typeof r=="string"&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Ht(e){var t=e.name,n=t&&t.lastIndexOf(".")!==-1;if(n&&!e.type){var r=t.split(".").pop().toLowerCase(),o=Nt.get(r);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Kt=[".DS_Store","Thumbs.db"];function Wt(e){return Y(this,void 0,void 0,function(){return J(this,function(t){return pe(e)&&Gt(e.dataTransfer)?[2,Jt(e.dataTransfer,e.type)]:Vt(e)?[2,qt(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,Yt(e)]:[2,[]]})})}function Gt(e){return pe(e)}function Vt(e){return pe(e)&&pe(e.target)}function pe(e){return typeof e=="object"&&e!==null}function qt(e){return Oe(e.target.files).map(function(t){return te(t)})}function Yt(e){return Y(this,void 0,void 0,function(){var t;return J(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(r){return r.getFile()}))];case 1:return t=n.sent(),[2,t.map(function(r){return te(r)})]}})})}function Jt(e,t){return Y(this,void 0,void 0,function(){var n,r;return J(this,function(o){switch(o.label){case 0:return e.items?(n=Oe(e.items).filter(function(i){return i.kind==="file"}),t!=="drop"?[2,n]:[4,Promise.all(n.map(Qt))]):[3,2];case 1:return r=o.sent(),[2,Ye(ut(r))];case 2:return[2,Ye(Oe(e.files).map(function(i){return te(i)}))]}})})}function Ye(e){return e.filter(function(t){return Kt.indexOf(t.name)===-1})}function Oe(e){if(e===null)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Qt(e){if(typeof e.webkitGetAsEntry!="function")return Je(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?pt(t):Je(e)}function ut(e){return e.reduce(function(t,n){return qe(qe([],Ve(t),!1),Ve(Array.isArray(n)?ut(n):[n]),!1)},[])}function Je(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=te(t);return Promise.resolve(n)}function Xt(e){return Y(this,void 0,void 0,function(){return J(this,function(t){return[2,e.isDirectory?pt(e):Zt(e)]})})}function pt(e){var t=e.createReader();return new Promise(function(n,r){var o=[];function i(){var c=this;t.readEntries(function(d){return Y(c,void 0,void 0,function(){var b,u,f;return J(this,function(v){switch(v.label){case 0:if(d.length)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return b=v.sent(),n(b),[3,4];case 3:return u=v.sent(),r(u),[3,4];case 4:return[3,6];case 5:f=Promise.all(d.map(Xt)),o.push(f),i(),v.label=6;case 6:return[2]}})})},function(d){r(d)})}i()})}function Zt(e){return Y(this,void 0,void 0,function(){return J(this,function(t){return[2,new Promise(function(n,r){e.file(function(o){var i=te(o,e.fullPath);n(i)},function(o){r(o)})})]})})}var en=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(c){var d=c.trim().toLowerCase();return d.charAt(0)==="."?r.toLowerCase().endsWith(d):d.endsWith("/*")?i===d.replace(/\/.*$/,""):o===d})}return!0};function Qe(e){return rn(e)||nn(e)||ft(e)||tn()}function tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rn(e){if(Array.isArray(e))return Pe(e)}function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xe(Object(n),!0).forEach(function(r){dt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){return ln(e)||an(e,t)||ft(e,t)||on()}function on(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e,t){if(e){if(typeof e=="string")return Pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pe(e,t)}}function Pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function an(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,c,d;try{for(n=n.call(e);!(o=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));o=!0);}catch(b){i=!0,d=b}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw d}}return r}}function ln(e){if(Array.isArray(e))return e}var sn="file-invalid-type",cn="file-too-large",un="file-too-small",pn="too-many-files",dn=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var n=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:sn,message:"File type must be ".concat(n)}},et=function(t){return{code:cn,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},tt=function(t){return{code:un,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},fn={code:pn,message:"Too many files"};function gt(e,t){var n=e.type==="application/x-moz-file"||en(e,t);return[n,n?null:dn(t)]}function ht(e,t,n){if(K(e.size))if(K(t)&&K(n)){if(e.size>n)return[!1,et(n)];if(e.size<t)return[!1,tt(t)]}else{if(K(t)&&e.size<t)return[!1,tt(t)];if(K(n)&&e.size>n)return[!1,et(n)]}return[!0,null]}function K(e){return e!=null}function gn(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,c=e.maxFiles,d=e.validator;return!i&&t.length>1||i&&c>=1&&t.length>c?!1:t.every(function(b){var u=gt(b,n),f=ee(u,1),v=f[0],k=ht(b,r,o),l=ee(k,1),O=l[0],E=d?d(b):null;return v&&O&&!E})}function de(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ce(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function nt(e){e.preventDefault()}function hn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function mn(e){return e.indexOf("Edge/")!==-1}function xn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return hn(e)||mn(e)}function M(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];return t.some(function(d){return!de(r)&&d&&d.apply(void 0,[r].concat(i)),de(r)})}}function bn(){return"showOpenFilePicker"in window}function yn(e){if(K(e)){var t=Object.entries(e).filter(function(n){var r=ee(n,2),o=r[0],i=r[1],c=!0;return mt(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(i)||!i.every(xt))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(n,r){var o=ee(r,2),i=o[0],c=o[1];return Ze(Ze({},n),{},dt({},i,c))},{});return[{description:"Files",accept:t}]}return e}function vn(e){if(K(e))return Object.entries(e).reduce(function(t,n){var r=ee(n,2),o=r[0],i=r[1];return[].concat(Qe(t),[o],Qe(i))},[]).filter(function(t){return mt(t)||xt(t)}).join(",")}function wn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function jn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function mt(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function xt(e){return/^.*\.[\w]+$/.test(e)}var Dn=["children"],Cn=["open"],Fn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],An=["refKey","onChange","onClick"];function Sn(e){return Pn(e)||On(e)||bt(e)||En()}function En(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function On(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pn(e){if(Array.isArray(e))return Te(e)}function Se(e,t){return _n(e)||Rn(e,t)||bt(e,t)||Tn()}function Tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(e,t){if(e){if(typeof e=="string")return Te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(e,t)}}function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,c,d;try{for(n=n.call(e);!(o=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));o=!0);}catch(b){i=!0,d=b}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw d}}return r}}function _n(e){if(Array.isArray(e))return e}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(n),!0).forEach(function(r){Re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fe(e,t){if(e==null)return{};var n=In(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function In(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ie=h.forwardRef(function(e,t){var n=e.children,r=fe(e,Dn),o=vt(r),i=o.open,c=fe(o,Cn);return h.useImperativeHandle(t,function(){return{open:i}},[i]),Et.createElement(h.Fragment,null,n(D(D({},c),{},{open:i})))});Ie.displayName="Dropzone";var yt={disabled:!1,getFilesFromEvent:Wt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ie.defaultProps=yt;Ie.propTypes={children:y.func,accept:y.objectOf(y.arrayOf(y.string)),multiple:y.bool,preventDropOnDocument:y.bool,noClick:y.bool,noKeyboard:y.bool,noDrag:y.bool,noDragEventsBubbling:y.bool,minSize:y.number,maxSize:y.number,maxFiles:y.number,disabled:y.bool,getFilesFromEvent:y.func,onFileDialogCancel:y.func,onFileDialogOpen:y.func,useFsAccessApi:y.bool,autoFocus:y.bool,onDragEnter:y.func,onDragLeave:y.func,onDragOver:y.func,onDrop:y.func,onDropAccepted:y.func,onDropRejected:y.func,onError:y.func,validator:y.func};var _e={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function vt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=D(D({},yt),e),n=t.accept,r=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,c=t.minSize,d=t.multiple,b=t.maxFiles,u=t.onDragEnter,f=t.onDragLeave,v=t.onDragOver,k=t.onDrop,l=t.onDropAccepted,O=t.onDropRejected,E=t.onFileDialogCancel,F=t.onFileDialogOpen,L=t.useFsAccessApi,U=t.autoFocus,w=t.preventDropOnDocument,B=t.noClick,$=t.noKeyboard,x=t.noDrag,m=t.noDragEventsBubbling,C=t.onError,A=t.validator,R=h.useMemo(function(){return vn(n)},[n]),z=h.useMemo(function(){return yn(n)},[n]),Q=h.useMemo(function(){return typeof F=="function"?F:it},[F]),N=h.useMemo(function(){return typeof E=="function"?E:it},[E]),P=h.useRef(null),p=h.useRef(null),wt=h.useReducer(kn,_e),ke=Se(wt,2),he=ke[0],_=ke[1],jt=he.isFocused,$e=he.isFileDialogActive,ne=h.useRef(typeof window<"u"&&window.isSecureContext&&L&&bn()),ze=function(){!ne.current&&$e&&setTimeout(function(){if(p.current){var g=p.current.files;g.length||(_({type:"closeDialog"}),N())}},300)};h.useEffect(function(){return window.addEventListener("focus",ze,!1),function(){window.removeEventListener("focus",ze,!1)}},[p,$e,N,ne]);var W=h.useRef([]),Me=function(g){P.current&&P.current.contains(g.target)||(g.preventDefault(),W.current=[])};h.useEffect(function(){return w&&(document.addEventListener("dragover",nt,!1),document.addEventListener("drop",Me,!1)),function(){w&&(document.removeEventListener("dragover",nt),document.removeEventListener("drop",Me))}},[P,w]),h.useEffect(function(){return!r&&U&&P.current&&P.current.focus(),function(){}},[P,U,r]);var H=h.useCallback(function(s){C?C(s):console.error(s)},[C]),Le=h.useCallback(function(s){s.preventDefault(),s.persist(),ae(s),W.current=[].concat(Sn(W.current),[s.target]),ce(s)&&Promise.resolve(o(s)).then(function(g){if(!(de(s)&&!m)){var S=g.length,T=S>0&&gn({files:g,accept:R,minSize:c,maxSize:i,multiple:d,maxFiles:b,validator:A}),I=S>0&&!T;_({isDragAccept:T,isDragReject:I,isDragActive:!0,type:"setDraggedFiles"}),u&&u(s)}}).catch(function(g){return H(g)})},[o,u,H,m,R,c,i,d,b,A]),Be=h.useCallback(function(s){s.preventDefault(),s.persist(),ae(s);var g=ce(s);if(g&&s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return g&&v&&v(s),!1},[v,m]),Ue=h.useCallback(function(s){s.preventDefault(),s.persist(),ae(s);var g=W.current.filter(function(T){return P.current&&P.current.contains(T)}),S=g.indexOf(s.target);S!==-1&&g.splice(S,1),W.current=g,!(g.length>0)&&(_({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ce(s)&&f&&f(s))},[P,f,m]),re=h.useCallback(function(s,g){var S=[],T=[];s.forEach(function(I){var X=gt(I,R),q=Se(X,2),xe=q[0],be=q[1],ye=ht(I,c,i),le=Se(ye,2),ve=le[0],we=le[1],je=A?A(I):null;if(xe&&ve&&!je)S.push(I);else{var De=[be,we];je&&(De=De.concat(je)),T.push({file:I,errors:De.filter(function(At){return At})})}}),(!d&&S.length>1||d&&b>=1&&S.length>b)&&(S.forEach(function(I){T.push({file:I,errors:[fn]})}),S.splice(0)),_({acceptedFiles:S,fileRejections:T,type:"setFiles"}),k&&k(S,T,g),T.length>0&&O&&O(T,g),S.length>0&&l&&l(S,g)},[_,d,R,c,i,b,k,l,O,A]),ie=h.useCallback(function(s){s.preventDefault(),s.persist(),ae(s),W.current=[],ce(s)&&Promise.resolve(o(s)).then(function(g){de(s)&&!m||re(g,s)}).catch(function(g){return H(g)}),_({type:"reset"})},[o,re,H,m]),G=h.useCallback(function(){if(ne.current){_({type:"openDialog"}),Q();var s={multiple:d,types:z};window.showOpenFilePicker(s).then(function(g){return o(g)}).then(function(g){re(g,null),_({type:"closeDialog"})}).catch(function(g){wn(g)?(N(g),_({type:"closeDialog"})):jn(g)?(ne.current=!1,p.current?(p.current.value=null,p.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):H(g)});return}p.current&&(_({type:"openDialog"}),Q(),p.current.value=null,p.current.click())},[_,Q,N,L,re,H,z,d]),Ne=h.useCallback(function(s){!P.current||!P.current.isEqualNode(s.target)||(s.key===" "||s.key==="Enter"||s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),G())},[P,G]),He=h.useCallback(function(){_({type:"focus"})},[]),Ke=h.useCallback(function(){_({type:"blur"})},[]),We=h.useCallback(function(){B||(xn()?setTimeout(G,0):G())},[B,G]),V=function(g){return r?null:g},me=function(g){return $?null:V(g)},oe=function(g){return x?null:V(g)},ae=function(g){m&&g.stopPropagation()},Dt=h.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=s.refKey,S=g===void 0?"ref":g,T=s.role,I=s.onKeyDown,X=s.onFocus,q=s.onBlur,xe=s.onClick,be=s.onDragEnter,ye=s.onDragOver,le=s.onDragLeave,ve=s.onDrop,we=fe(s,Fn);return D(D(Re({onKeyDown:me(M(I,Ne)),onFocus:me(M(X,He)),onBlur:me(M(q,Ke)),onClick:V(M(xe,We)),onDragEnter:oe(M(be,Le)),onDragOver:oe(M(ye,Be)),onDragLeave:oe(M(le,Ue)),onDrop:oe(M(ve,ie)),role:typeof T=="string"&&T!==""?T:"presentation"},S,P),!r&&!$?{tabIndex:0}:{}),we)}},[P,Ne,He,Ke,We,Le,Be,Ue,ie,$,x,r]),Ct=h.useCallback(function(s){s.stopPropagation()},[]),Ft=h.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=s.refKey,S=g===void 0?"ref":g,T=s.onChange,I=s.onClick,X=fe(s,An),q=Re({accept:R,multiple:d,type:"file",style:{display:"none"},onChange:V(M(T,ie)),onClick:V(M(I,Ct)),tabIndex:-1},S,p);return D(D({},q),X)}},[p,n,d,ie,r]);return D(D({},he),{},{isFocused:jt&&!r,getRootProps:Dt,getInputProps:Ft,rootRef:P,inputRef:p,open:V(G)})}function kn(e,t){switch(t.type){case"focus":return D(D({},e),{},{isFocused:!0});case"blur":return D(D({},e),{},{isFocused:!1});case"openDialog":return D(D({},_e),{},{isFileDialogActive:!0});case"closeDialog":return D(D({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return D(D({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return D(D({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return D({},_e);default:return e}}function it(){}async function $n(e){const t=new FileReader;return t.readAsDataURL(e),new Promise((n,r)=>{t.onload=()=>n(t.result),t.onerror=o=>r(o)})}function ot(e,t){if(!e)return null;const n=e.split(",");if(!n[0])return null;const r=atob(n[0]);let o=r.length;const i=new Uint8Array(o);for(;o--;)i[o]=r.charCodeAt(o);return new File([i],t,{type:t})}const ge=200,zn=j.div`
    width: ${ge}px;
    min-width: ${ge}px;
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
`,Mn=j.div`
    overflow: hidden;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    position: relative;
    height: ${ge}px;

    @media (max-width: 576px) {
        max-height: ${ge}px;
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
`,Ln=e=>e.isDragAccept||e.isDragReject?"#ccc":e.isFocused?"#2196f3":"#ffffff",Bn=j.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-color: #fff;
    border: 2px solid ${e=>Ln(e)};

    &.empty {
        background: url(${Mt}) center / 100% 100% no-repeat;
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
`,Un=j.div`
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
`,Nn=({name:e,value:t=void 0,formik:n=void 0,label:r="Photo",placeholder:o="Max size 5 Mb.",tooltip:i="Drag and drop a file here or click to select a file.",disabled:c=!1,maxSizeMB:d=5,extensions:b={"image/jpeg":[".jpeg"],"image/png":[".png"],"image/gif":[".gif"]},rejectedFileFeedback:u})=>{const[f,v]=h.useState([]),[k,l]=h.useState([]),O=h.useMemo(()=>[{code:"file-too-large",message:`File larger than the ${d} MB limit`},{code:"file-invalid-type",message:"Invalid file format"}],[d]),E=h.useCallback(async m=>{t!=null&&t.name&&e&&v(m.map(C=>Object.assign(C,{preview:URL.createObjectURL(C)})))},[e,t==null?void 0:t.name]),{getRootProps:F,getInputProps:L,isFocused:U,isDragAccept:w,isDragReject:B}=vt({multiple:!1,accept:b,maxSize:1e3*1e3*d,disabled:c,maxFiles:1,onDropRejected(m,C){var R;const A=(R=m[0])==null?void 0:R.errors.map(z=>z.code);l(A),$(A)},onDropAccepted(m,C){l([]),$([])},onDrop:m=>{if(m[0].name!==(t==null?void 0:t.name))E(m),x(m);else if(t&&(f==null?void 0:f.length)===0){const A=ot(t.data,t.name);A&&E([A])}}}),$=h.useCallback(m=>{const C=m.map(A=>{var R;return(R=O.find(z=>A===z.code))==null?void 0:R.message});if(u&&C&&O){const A=C.reduce((R,z)=>R+=", "+z);u(A)}},[O,u]);h.useEffect(()=>{if(t&&(f==null?void 0:f.length)===0){const m=ot(t.data,t.name);m&&E([m])}},[E,f==null?void 0:f.length,e,t]);const x=h.useCallback(async m=>{const C=m[0],A=await $n(C);A!=null&&n.setFieldValue(e,{name:C.name,data:A.replace("data:","").replace(/^.+,/,""),size:C.size})},[n,e]);return h.useEffect(()=>()=>{f.forEach(m=>URL.revokeObjectURL(m.preview))},[f]),a.jsxs(zn,{children:[a.jsx("span",{children:r}),a.jsxs(Mn,{children:[(f==null?void 0:f.length)>0&&a.jsx("aside",{children:a.jsx("img",{src:f[0].preview,onLoad:()=>{URL.revokeObjectURL(f[0].preview)},alt:f[0].name||"photo preview"})},f[0].name),a.jsx(Bn,{...F({className:`dropzone ${(f==null?void 0:f.length)===0?"empty":""}`,isFocused:U,isDragAccept:w,isDragReject:B}),title:c?"":i,"aria-label":`${r}. ${i}`,children:a.jsx("input",{...L()})})]}),a.jsxs(Un,{children:[a.jsxs("p",{children:["Attatch photo ",a.jsx(It,{})]}),a.jsxs("span",{children:[a.jsx("small",{children:o}),a.jsx("small",{children:"Allowed formats: .png, .jpg, .gif"})]})]})]})},Hn=Ce().shape({name:se().min(3,"Minimum 3 characters").max(50,"Maximum 50 characters").required().label("Nome"),email:se().email().required().label("Email"),profile:Ce().required().shape({id:se()}),company:Ce().required().shape({id:se()})}),Kn=j.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background};
`;j.div`
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
`;j.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 32px;
`;j.div`
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
`;j.span`
  user-select: none;  
  
  svg {
    height: 10px;
    width: 10px;    
    color: #626262;

    &:nth-child(n + 1):nth-child(-n + ${e=>e.rate}) {
      color: #DFB300;
    }
  }
`;const Wn=j.div`
  display: flex;
  flex-direction: column;
`,Gn=j.div`
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
`,Vn=j.div`
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
`,qn=j.div`
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
`,Yn=j.div`
  display: flex;
`,Jn=({userEditing:e})=>{var F,L,U,w,B,$;const{modalIsOpen:t,toggleModal:n}=at(),r={name:"",email:"",profile:null,company:null,landingPage:0,admin:!1,status:1},{save:o,edit:i,clearUserEditing:c,fetchUserListSSP:d,profiles:b,companies:u}=lt(),f=document.createElement("div"),v=()=>{n(),d(1,10,null)},l=st({onSubmit:x=>{e?i(x,v):o(x,v)},validationSchema:Hn,enableReinitialize:!0,initialValues:e!=null&&e.id?{...e,profile:e==null?void 0:e.profile,company:e==null?void 0:e.company}:r}),O=x=>{var m,C;return(m=l==null?void 0:l.getFieldMeta(x))!=null&&m.touched&&((C=l==null?void 0:l.getFieldMeta(x))!=null&&C.error)?l.getFieldMeta(x).error:""},E=()=>{l.resetForm(),c()};return a.jsx(Kn,{children:a.jsx(Lt,{isOpen:t,contentLabel:e?"Edit User":"Create New User",appElement:f,onRequestClose:n,onAfterClose:E,style:{content:{top:"50%",left:"50%",padding:"0",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",height:"80%"}},children:a.jsxs(Wn,{children:[a.jsxs(Gn,{children:[a.jsx("h1",{children:e?"Edit User":"Create New User"}),a.jsx("button",{type:"button",onClick:()=>n(),children:a.jsx(ct,{})})]}),a.jsx(Vn,{className:"modal-body",children:a.jsxs("form",{id:"hookform",onSubmit:l.handleSubmit,children:[a.jsxs("div",{children:[a.jsx("span",{children:a.jsx(Nn,{name:"photo",value:((F=l==null?void 0:l.values)==null?void 0:F.photo)||void 0,formik:l,maxSizeMB:1,extensions:{"image/jpeg":[],"image/png":[]}})}),a.jsxs("span",{children:[a.jsx(Fe,{name:"name",label:"Name *",value:(L=l==null?void 0:l.values)==null?void 0:L.name,onChange:l==null?void 0:l.handleChange,errorText:O("name"),autoFocus:!0}),a.jsx(Fe,{name:"email",label:"E-mail *",value:(U=l==null?void 0:l.values)==null?void 0:U.email,onChange:l==null?void 0:l.handleChange,errorText:O("email")}),a.jsx(Ae,{name:"profile",label:"Profile *",value:l!=null&&l.values?b==null?void 0:b.find(x=>{var m;return(x==null?void 0:x.id)===((m=l==null?void 0:l.values.profile)==null?void 0:m.id)}):void 0,onChange:x=>{l.setFieldValue("profile",x)},errorText:O("profile"),options:b}),a.jsxs("div",{className:"jobtitle-and-isadmin",children:[a.jsx(Fe,{name:"jobTitle",label:"Job Title",value:(w=l==null?void 0:l.values)==null?void 0:w.jobTitle,onChange:l==null?void 0:l.handleChange}),a.jsx(Ee,{id:"admin",name:"admin",label:"Is Admin?",onChange:l==null?void 0:l.handleChange,checked:(B=l==null?void 0:l.values)==null?void 0:B.admin})]})]})]}),a.jsxs("div",{children:[a.jsx(Ae,{name:"company",label:"Company *",value:l!=null&&l.values?u==null?void 0:u.find(x=>{var m;return(x==null?void 0:x.id.toString())===((m=l==null?void 0:l.values.company)==null?void 0:m.id.toString())}):void 0,onChange:x=>{l.setFieldValue("company",x)},errorText:O("profile"),options:u,searchable:!0}),a.jsx(Ot,{name:"status",label:"Status",value:($=l==null?void 0:l.values)==null?void 0:$.status,onChange:x=>{console.log(x),l.setFieldValue("status",x.value)}}),a.jsx(Ae,{name:"landingPage",label:"Landing Page",value:l!=null&&l.values?Ge.find(x=>{var m;return(x==null?void 0:x.id.toString())===((m=l==null?void 0:l.values.landingPage)==null?void 0:m.toString())}):void 0,onChange:x=>{l.setFieldValue("landingPage",Number(x.id))},options:Ge,searchable:!0})]})]})}),a.jsx(qn,{children:a.jsxs(Yn,{children:[a.jsx(ue,{onClick:n,btnTheme:"secondary",children:"Cancel"}),a.jsx(ue,{type:"submit",btnTheme:"primary",form:"hookform",children:"Save"})]})})]})})})},Qn=j.div`
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
`,Xn=({children:e})=>a.jsx(Qn,{children:e}),Zn=j.div`

`,er=j.div`
  display: flex;
  height: calc(100vh - 80px);
`,tr=j.div`
  width: 100%;
  overflow-y: auto;
`,nr=j.aside`
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
          height: 50px;
        }

        > div {
          align-items: self-start;
          font-size: 12px;
        }
      }
    }
  }
`,rr=j.div`
  padding: 0 32px;
`,ir=j.div`
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
`,or=j.div`
  display: flex;
  justify-content: space-between;
`,ar=j.span`
  display: flex;
  gap: 32px;
  /* width: 100%; */
`;j.span`
  display: flex;
  gap: 32px;

  > span:last-child {
    align-self: center;
  }
`;j.button`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 22px;
    height: 22px;
  }
`;const pr=()=>{var N,P;const[e,t]=h.useState(1),[n,r]=h.useState(10),[o,i]=h.useState(!1),[c,d]=h.useState(!1),{toggleModal:b}=at(),{setProfileOptions:u,setCompanyOptions:f,setUserEditingById:v,removeUserById:k,fetchUserListSSP:l,userEditing:O,userListSSP:E,loadingFetch:F}=lt(),L=[{name:"Actions",width:"80px",cell:p=>a.jsxs(Xn,{"aria-label":"Action buttons",children:[a.jsx("button",{onClick:()=>x(p.id),"aria-label":"Edit user action",children:a.jsx(Rt,{})}),a.jsx("button",{onClick:()=>$(p.id),"aria-label":"Remove user action",children:a.jsx(_t,{})})]})},{name:"Name",minWidth:"260px",cell:p=>p.name},{name:"E-mail",width:"200px",cell:p=>p.email},{name:"Profile",width:"150px",cell:p=>p.profile},{name:"Job Title",width:"150px",cell:p=>p.jobTitle},{name:"Company",width:"150px",cell:p=>p.company},{name:"Admin",width:"150px",cell:p=>p.admin},{name:"Status",width:"100px",cell:p=>p.status}],w=st({onSubmit:p=>{l(e,n,p)},initialValues:{search:""}}),B=h.useCallback(()=>{l(e,n,w.values)},[e,l,w.values,n]),$=p=>{k(p,B)},x=p=>{v(p),b()},m=()=>{i(!o)},C=()=>{d(!c)},A=p=>{t(p)},R=p=>{r(p)},z=p=>{w.setFieldValue("status",p.target.checked?1:null)},Q=p=>{w.setFieldValue("status",p.target.checked?0:null)};return h.useEffect(()=>{u()},[u]),h.useEffect(()=>{f()},[f]),h.useEffect(()=>{l(e,n,w.values)},[e,l,w.values.status,w.values.assignedToMe,n]),a.jsxs(Zn,{className:"admin-container",children:[a.jsxs(er,{className:"content-wrapper",children:[a.jsxs(tr,{children:[a.jsxs(ir,{children:[a.jsx(or,{children:a.jsx(ar,{children:a.jsx(ue,{btnTheme:"primary",onClick:b,children:"Create New User"})})}),a.jsxs("div",{children:[a.jsx("form",{onSubmit:w.handleSubmit,children:a.jsx(Pt,{name:"search",value:(N=w==null?void 0:w.values)==null?void 0:N.search,onChange:w==null?void 0:w.handleChange,onClick:w==null?void 0:w.submitForm,fit:!0})}),a.jsx(ue,{btnTheme:"primary","aria-label":"Filter",onClick:m,children:a.jsx(kt,{})})]})]}),a.jsxs(rr,{children:[a.jsx(Tt,{children:"User Administration"}),a.jsx(Ut,{loading:F,columns:L,data:((P=E==null?void 0:E.data)==null?void 0:P.map(p=>({id:p.id,name:p.name,email:p.email,profile:p.profile,jobTitle:p.jobTitle,company:p.company,admin:p.admin,status:p.status})))||[],pagination:!0,paginationPerPage:n,onPageChange:A,onRowsPerPageChange:R,totalRows:E.rows})]})]}),a.jsxs(nr,{className:`filter ${o?"open":""}`,children:[a.jsxs("div",{children:[a.jsx("p",{children:"Filters"}),a.jsx("button",{type:"button",onClick:m,children:a.jsx(ct,{})})]}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsxs("span",{children:[a.jsx("p",{children:"Profile"}),a.jsx(Z,{})]})}),a.jsx("li",{children:a.jsxs("span",{children:[a.jsx("p",{children:"Job Title"}),a.jsx(Z,{})]})}),a.jsx("li",{children:a.jsxs("span",{children:[a.jsx("p",{children:"Company"}),a.jsx(Z,{})]})}),a.jsxs("li",{children:[a.jsxs("button",{type:"button",onClick:C,children:[a.jsx("p",{children:"Status"}),c?a.jsx($t,{}):a.jsx(Z,{})]}),a.jsxs("div",{className:c?"open":"",children:[a.jsx(Ee,{name:"statusActive",id:"statusActive",label:"Active",onChange:z,fit:!0}),a.jsx(Ee,{name:"statusInactive",id:"statusInactive",label:"Inactive",onChange:Q,fit:!0})]})]}),a.jsx("li",{children:a.jsxs("span",{children:[a.jsx("p",{children:"Admin"}),a.jsx(Z,{})]})})]})]})]}),a.jsx(Jn,{userEditing:O})]})};export{pr as default};
