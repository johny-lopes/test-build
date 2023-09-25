import{s as j,j as i,h as St,P as v,r as g,c as Et,i as qe,k as Oe,u as ct,m as ut,a as dt,I as fe,n as Pe,o as ge,p as Ot,q as Ye,B as he,M as Pt,T as Rt}from"./index-3ed8a00b.js";import{O as Tt,R as Te,o as _t,P as re,Q as It}from"./warning-a14cd055.js";import{Q as kt,c as zt,d as Mt}from"./index.esm-5d19a493.js";import{d as $t,R as Lt}from"./empty-profile-9ad3cc92.js";const Bt=j.div`

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
        padding-left: 0
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
`,Ut=({loading:e=!0,columns:t,data:n,responsive:r=!0,noTableHead:a=!1,pagination:o=!1,paginationPerPage:c=10,totalRows:d=0,selectableRows:x=!1,toggleClearSelectedRows:u=!1,onSelectedRowsChange:p,onPageChange:w,onRowsPerPageChange:k})=>{const l=C=>{p&&p(C)},S=C=>{w&&w(C)},R=C=>{k&&k(C)};return i.jsx(Bt,{children:i.jsx(kt,{columns:t,data:n,progressPending:e,progressComponent:i.jsx(St,{}),noDataComponent:i.jsx("p",{style:{lineHeight:"normal"},children:"No register to show."}),noTableHead:a,pagination:o,paginationRowsPerPageOptions:[5,10,15,30],paginationPerPage:c,customStyles:{headRow:{style:{fontSize:"1rem"}},cells:{style:{fontSize:"1rem"}}},responsive:r,selectableRows:x,onSelectedRowsChange:l,clearSelectedRows:u,onSort:C=>console.log("onSort: ",C),onColumnOrderChange:C=>console.log("onColumnOrderChange: ",C),paginationServer:!0,paginationTotalRows:d,onChangeRowsPerPage:R,onChangePage:S})})};function X(e,t,n,r){function a(o){return o instanceof n?o:new n(function(c){c(o)})}return new(n||(n=Promise))(function(o,c){function d(p){try{u(r.next(p))}catch(w){c(w)}}function x(p){try{u(r.throw(p))}catch(w){c(w)}}function u(p){p.done?o(p.value):a(p.value).then(d,x)}u((r=r.apply(e,t||[])).next())})}function Z(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,c;return c={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function d(u){return function(p){return x([u,p])}}function x(u){if(r)throw new TypeError("Generator is already executing.");for(;c&&(c=0,u[0]&&(n=0)),n;)try{if(r=1,a&&(o=u[0]&2?a.return:u[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,u[1])).done)return o;switch(a=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,a=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(p){u=[6,p],a=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Je(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),a,o=[],c;try{for(;(t===void 0||t-- >0)&&!(a=r.next()).done;)o.push(a.value)}catch(d){c={error:d}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(c)throw c.error}}return o}function Qe(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Nt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function oe(e,t){var n=Ht(e);if(typeof n.path!="string"){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof t=="string"?t:typeof r=="string"&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Ht(e){var t=e.name,n=t&&t.lastIndexOf(".")!==-1;if(n&&!e.type){var r=t.split(".").pop().toLowerCase(),a=Nt.get(r);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var Kt=[".DS_Store","Thumbs.db"];function Wt(e){return X(this,void 0,void 0,function(){return Z(this,function(t){return me(e)&&Gt(e.dataTransfer)?[2,Jt(e.dataTransfer,e.type)]:Vt(e)?[2,qt(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,Yt(e)]:[2,[]]})})}function Gt(e){return me(e)}function Vt(e){return me(e)&&me(e.target)}function me(e){return typeof e=="object"&&e!==null}function qt(e){return _e(e.target.files).map(function(t){return oe(t)})}function Yt(e){return X(this,void 0,void 0,function(){var t;return Z(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(r){return r.getFile()}))];case 1:return t=n.sent(),[2,t.map(function(r){return oe(r)})]}})})}function Jt(e,t){return X(this,void 0,void 0,function(){var n,r;return Z(this,function(a){switch(a.label){case 0:return e.items?(n=_e(e.items).filter(function(o){return o.kind==="file"}),t!=="drop"?[2,n]:[4,Promise.all(n.map(Qt))]):[3,2];case 1:return r=a.sent(),[2,Xe(pt(r))];case 2:return[2,Xe(_e(e.files).map(function(o){return oe(o)}))]}})})}function Xe(e){return e.filter(function(t){return Kt.indexOf(t.name)===-1})}function _e(e){if(e===null)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Qt(e){if(typeof e.webkitGetAsEntry!="function")return Ze(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?ft(t):Ze(e)}function pt(e){return e.reduce(function(t,n){return Qe(Qe([],Je(t),!1),Je(Array.isArray(n)?pt(n):[n]),!1)},[])}function Ze(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=oe(t);return Promise.resolve(n)}function Xt(e){return X(this,void 0,void 0,function(){return Z(this,function(t){return[2,e.isDirectory?ft(e):Zt(e)]})})}function ft(e){var t=e.createReader();return new Promise(function(n,r){var a=[];function o(){var c=this;t.readEntries(function(d){return X(c,void 0,void 0,function(){var x,u,p;return Z(this,function(w){switch(w.label){case 0:if(d.length)return[3,5];w.label=1;case 1:return w.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return x=w.sent(),n(x),[3,4];case 3:return u=w.sent(),r(u),[3,4];case 4:return[3,6];case 5:p=Promise.all(d.map(Xt)),a.push(p),o(),w.label=6;case 6:return[2]}})})},function(d){r(d)})}o()})}function Zt(e){return X(this,void 0,void 0,function(){return Z(this,function(t){return[2,new Promise(function(n,r){e.file(function(a){var o=oe(a,e.fullPath);n(o)},function(a){r(a)})})]})})}var en=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",a=(e.type||"").toLowerCase(),o=a.replace(/\/.*$/,"");return n.some(function(c){var d=c.trim().toLowerCase();return d.charAt(0)==="."?r.toLowerCase().endsWith(d):d.endsWith("/*")?o===d.replace(/\/.*$/,""):a===d})}return!0};function et(e){return rn(e)||nn(e)||ht(e)||tn()}function tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rn(e){if(Array.isArray(e))return Ie(e)}function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(n),!0).forEach(function(r){gt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){return ln(e)||an(e,t)||ht(e,t)||on()}function on(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e,t){if(e){if(typeof e=="string")return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}}function Ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function an(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,c,d;try{for(n=n.call(e);!(a=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));a=!0);}catch(x){o=!0,d=x}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw d}}return r}}function ln(e){if(Array.isArray(e))return e}var sn="file-invalid-type",cn="file-too-large",un="file-too-small",dn="too-many-files",pn=function(t){t=Array.isArray(t)&&t.length===1?t[0]:t;var n=Array.isArray(t)?"one of ".concat(t.join(", ")):t;return{code:sn,message:"File type must be ".concat(n)}},rt=function(t){return{code:cn,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},it=function(t){return{code:un,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},fn={code:dn,message:"Too many files"};function mt(e,t){var n=e.type==="application/x-moz-file"||en(e,t);return[n,n?null:pn(t)]}function xt(e,t,n){if(W(e.size))if(W(t)&&W(n)){if(e.size>n)return[!1,rt(n)];if(e.size<t)return[!1,it(t)]}else{if(W(t)&&e.size<t)return[!1,it(t)];if(W(n)&&e.size>n)return[!1,rt(n)]}return[!0,null]}function W(e){return e!=null}function gn(e){var t=e.files,n=e.accept,r=e.minSize,a=e.maxSize,o=e.multiple,c=e.maxFiles,d=e.validator;return!o&&t.length>1||o&&c>=1&&t.length>c?!1:t.every(function(x){var u=mt(x,n),p=ie(u,1),w=p[0],k=xt(x,r,a),l=ie(k,1),S=l[0],R=d?d(x):null;return w&&S&&!R})}function xe(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function pe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function ot(e){e.preventDefault()}function hn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function mn(e){return e.indexOf("Edge/")!==-1}function xn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return hn(e)||mn(e)}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),c=1;c<a;c++)o[c-1]=arguments[c];return t.some(function(d){return!xe(r)&&d&&d.apply(void 0,[r].concat(o)),xe(r)})}}function bn(){return"showOpenFilePicker"in window}function yn(e){if(W(e)){var t=Object.entries(e).filter(function(n){var r=ie(n,2),a=r[0],o=r[1],c=!0;return bt(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(o)||!o.every(yt))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(n,r){var a=ie(r,2),o=a[0],c=a[1];return nt(nt({},n),{},gt({},o,c))},{});return[{description:"Files",accept:t}]}return e}function vn(e){if(W(e))return Object.entries(e).reduce(function(t,n){var r=ie(n,2),a=r[0],o=r[1];return[].concat(et(t),[a],et(o))},[]).filter(function(t){return bt(t)||yt(t)}).join(",")}function wn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function jn(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function bt(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function yt(e){return/^.*\.[\w]+$/.test(e)}var Dn=["children"],Cn=["open"],An=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Fn=["refKey","onChange","onClick"];function Sn(e){return Pn(e)||On(e)||vt(e)||En()}function En(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function On(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pn(e){if(Array.isArray(e))return ke(e)}function Re(e,t){return _n(e)||Tn(e,t)||vt(e,t)||Rn()}function Rn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(e,t){if(e){if(typeof e=="string")return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ke(e,t)}}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,c,d;try{for(n=n.call(e);!(a=(c=n.next()).done)&&(r.push(c.value),!(t&&r.length===t));a=!0);}catch(x){o=!0,d=x}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw d}}return r}}function _n(e){if(Array.isArray(e))return e}function at(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?at(Object(n),!0).forEach(function(r){ze(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){if(e==null)return{};var n=In(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function In(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var $e=g.forwardRef(function(e,t){var n=e.children,r=be(e,Dn),a=jt(r),o=a.open,c=be(a,Cn);return g.useImperativeHandle(t,function(){return{open:o}},[o]),Et.createElement(g.Fragment,null,n(D(D({},c),{},{open:o})))});$e.displayName="Dropzone";var wt={disabled:!1,getFilesFromEvent:Wt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};$e.defaultProps=wt;$e.propTypes={children:v.func,accept:v.objectOf(v.arrayOf(v.string)),multiple:v.bool,preventDropOnDocument:v.bool,noClick:v.bool,noKeyboard:v.bool,noDrag:v.bool,noDragEventsBubbling:v.bool,minSize:v.number,maxSize:v.number,maxFiles:v.number,disabled:v.bool,getFilesFromEvent:v.func,onFileDialogCancel:v.func,onFileDialogOpen:v.func,useFsAccessApi:v.bool,autoFocus:v.bool,onDragEnter:v.func,onDragLeave:v.func,onDragOver:v.func,onDrop:v.func,onDropAccepted:v.func,onDropRejected:v.func,onError:v.func,validator:v.func};var Me={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function jt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=D(D({},wt),e),n=t.accept,r=t.disabled,a=t.getFilesFromEvent,o=t.maxSize,c=t.minSize,d=t.multiple,x=t.maxFiles,u=t.onDragEnter,p=t.onDragLeave,w=t.onDragOver,k=t.onDrop,l=t.onDropAccepted,S=t.onDropRejected,R=t.onFileDialogCancel,C=t.onFileDialogOpen,$=t.useFsAccessApi,U=t.autoFocus,z=t.preventDropOnDocument,N=t.noClick,m=t.noKeyboard,E=t.noDrag,b=t.noDragEventsBubbling,y=t.onError,A=t.validator,_=g.useMemo(function(){return vn(n)},[n]),L=g.useMemo(function(){return yn(n)},[n]),ee=g.useMemo(function(){return typeof C=="function"?C:lt},[C]),G=g.useMemo(function(){return typeof R=="function"?R:lt},[R]),O=g.useRef(null),I=g.useRef(null),ve=g.useReducer(kn,Me),ae=Re(ve,2),V=ae[0],T=ae[1],h=V.isFocused,te=V.isFileDialogActive,H=g.useRef(typeof window<"u"&&window.isSecureContext&&$&&bn()),Le=function(){!H.current&&te&&setTimeout(function(){if(I.current){var f=I.current.files;f.length||(T({type:"closeDialog"}),G())}},300)};g.useEffect(function(){return window.addEventListener("focus",Le,!1),function(){window.removeEventListener("focus",Le,!1)}},[I,te,G,H]);var q=g.useRef([]),Be=function(f){O.current&&O.current.contains(f.target)||(f.preventDefault(),q.current=[])};g.useEffect(function(){return z&&(document.addEventListener("dragover",ot,!1),document.addEventListener("drop",Be,!1)),function(){z&&(document.removeEventListener("dragover",ot),document.removeEventListener("drop",Be))}},[O,z]),g.useEffect(function(){return!r&&U&&O.current&&O.current.focus(),function(){}},[O,U,r]);var K=g.useCallback(function(s){y?y(s):console.error(s)},[y]),Ue=g.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),q.current=[].concat(Sn(q.current),[s.target]),pe(s)&&Promise.resolve(a(s)).then(function(f){if(!(xe(s)&&!b)){var F=f.length,P=F>0&&gn({files:f,accept:_,minSize:c,maxSize:o,multiple:d,maxFiles:x,validator:A}),M=F>0&&!P;T({isDragAccept:P,isDragReject:M,isDragActive:!0,type:"setDraggedFiles"}),u&&u(s)}}).catch(function(f){return K(f)})},[a,u,K,b,_,c,o,d,x,A]),Ne=g.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var f=pe(s);if(f&&s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return f&&w&&w(s),!1},[w,b]),He=g.useCallback(function(s){s.preventDefault(),s.persist(),ue(s);var f=q.current.filter(function(P){return O.current&&O.current.contains(P)}),F=f.indexOf(s.target);F!==-1&&f.splice(F,1),q.current=f,!(f.length>0)&&(T({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),pe(s)&&p&&p(s))},[O,p,b]),le=g.useCallback(function(s,f){var F=[],P=[];s.forEach(function(M){var ne=mt(M,_),Q=Re(ne,2),je=Q[0],De=Q[1],Ce=xt(M,c,o),de=Re(Ce,2),Ae=de[0],Fe=de[1],Se=A?A(M):null;if(je&&Ae&&!Se)F.push(M);else{var Ee=[De,Fe];Se&&(Ee=Ee.concat(Se)),P.push({file:M,errors:Ee.filter(function(Ft){return Ft})})}}),(!d&&F.length>1||d&&x>=1&&F.length>x)&&(F.forEach(function(M){P.push({file:M,errors:[fn]})}),F.splice(0)),T({acceptedFiles:F,fileRejections:P,type:"setFiles"}),k&&k(F,P,f),P.length>0&&S&&S(P,f),F.length>0&&l&&l(F,f)},[T,d,_,c,o,x,k,l,S,A]),se=g.useCallback(function(s){s.preventDefault(),s.persist(),ue(s),q.current=[],pe(s)&&Promise.resolve(a(s)).then(function(f){xe(s)&&!b||le(f,s)}).catch(function(f){return K(f)}),T({type:"reset"})},[a,le,K,b]),Y=g.useCallback(function(){if(H.current){T({type:"openDialog"}),ee();var s={multiple:d,types:L};window.showOpenFilePicker(s).then(function(f){return a(f)}).then(function(f){le(f,null),T({type:"closeDialog"})}).catch(function(f){wn(f)?(G(f),T({type:"closeDialog"})):jn(f)?(H.current=!1,I.current?(I.current.value=null,I.current.click()):K(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):K(f)});return}I.current&&(T({type:"openDialog"}),ee(),I.current.value=null,I.current.click())},[T,ee,G,$,le,K,L,d]),Ke=g.useCallback(function(s){!O.current||!O.current.isEqualNode(s.target)||(s.key===" "||s.key==="Enter"||s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),Y())},[O,Y]),We=g.useCallback(function(){T({type:"focus"})},[]),Ge=g.useCallback(function(){T({type:"blur"})},[]),Ve=g.useCallback(function(){N||(xn()?setTimeout(Y,0):Y())},[N,Y]),J=function(f){return r?null:f},we=function(f){return m?null:J(f)},ce=function(f){return E?null:J(f)},ue=function(f){b&&f.stopPropagation()},Dt=g.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=s.refKey,F=f===void 0?"ref":f,P=s.role,M=s.onKeyDown,ne=s.onFocus,Q=s.onBlur,je=s.onClick,De=s.onDragEnter,Ce=s.onDragOver,de=s.onDragLeave,Ae=s.onDrop,Fe=be(s,An);return D(D(ze({onKeyDown:we(B(M,Ke)),onFocus:we(B(ne,We)),onBlur:we(B(Q,Ge)),onClick:J(B(je,Ve)),onDragEnter:ce(B(De,Ue)),onDragOver:ce(B(Ce,Ne)),onDragLeave:ce(B(de,He)),onDrop:ce(B(Ae,se)),role:typeof P=="string"&&P!==""?P:"presentation"},F,O),!r&&!m?{tabIndex:0}:{}),Fe)}},[O,Ke,We,Ge,Ve,Ue,Ne,He,se,m,E,r]),Ct=g.useCallback(function(s){s.stopPropagation()},[]),At=g.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=s.refKey,F=f===void 0?"ref":f,P=s.onChange,M=s.onClick,ne=be(s,Fn),Q=ze({accept:_,multiple:d,type:"file",style:{display:"none"},onChange:J(B(P,se)),onClick:J(B(M,Ct)),tabIndex:-1},F,I);return D(D({},Q),ne)}},[I,n,d,se,r]);return D(D({},V),{},{isFocused:h&&!r,getRootProps:Dt,getInputProps:At,rootRef:O,inputRef:I,open:J(Y)})}function kn(e,t){switch(t.type){case"focus":return D(D({},e),{},{isFocused:!0});case"blur":return D(D({},e),{},{isFocused:!1});case"openDialog":return D(D({},Me),{},{isFileDialogActive:!0});case"closeDialog":return D(D({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return D(D({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return D(D({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return D({},Me);default:return e}}function lt(){}async function zn(e){const t=new FileReader;return t.readAsDataURL(e),new Promise((n,r)=>{t.onload=()=>n(t.result),t.onerror=a=>r(a)})}function st(e,t){if(!e)return null;const n=e.split(",");if(!n[0])return null;const r=atob(n[0]);let a=r.length;const o=new Uint8Array(a);for(;a--;)o[a]=r.charCodeAt(a);return new File([o],t,{type:t})}const ye=200,Mn=j.div`
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
`,$n=j.div`
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
`,Ln=e=>e.isDragAccept||e.isDragReject?"#ccc":e.isFocused?"#2196f3":"#ffffff",Bn=j.div`
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
`,Nn=({name:e,value:t=void 0,formik:n=void 0,label:r="Photo",placeholder:a="Max size 5 Mb.",tooltip:o="Drag and drop a file here or click to select a file.",disabled:c=!1,maxSizeMB:d=5,extensions:x={"image/jpeg":[".jpeg"],"image/png":[".png"],"image/gif":[".gif"]},rejectedFileFeedback:u})=>{const[p,w]=g.useState([]),[k,l]=g.useState([]),S=g.useMemo(()=>[{code:"file-too-large",message:`File larger than the ${d} MB limit`},{code:"file-invalid-type",message:"Invalid file format"}],[d]),R=g.useCallback(async b=>{t!=null&&t.name&&e&&w(b.map(y=>Object.assign(y,{preview:URL.createObjectURL(y)})))},[e,t==null?void 0:t.name]),{getRootProps:C,getInputProps:$,isFocused:U,isDragAccept:z,isDragReject:N}=jt({multiple:!1,accept:x,maxSize:1e3*1e3*d,disabled:c,maxFiles:1,onDropRejected(b,y){var _;const A=(_=b[0])==null?void 0:_.errors.map(L=>L.code);l(A),m(A)},onDropAccepted(b,y){l([]),m([])},onDrop:b=>{if(b[0].name!==(t==null?void 0:t.name))R(b),E(b);else if(t&&(p==null?void 0:p.length)===0){const A=st(t.data,t.name);A&&R([A])}}}),m=g.useCallback(b=>{const y=b.map(A=>{var _;return(_=S.find(L=>A===L.code))==null?void 0:_.message});if(u&&y&&S){const A=y.reduce((_,L)=>_+=", "+L);u(A)}},[S,u]);g.useEffect(()=>{if(t&&(p==null?void 0:p.length)===0){const b=st(t.data,t.name);b&&R([b])}},[R,p==null?void 0:p.length,e,t]);const E=g.useCallback(async b=>{const y=b[0],A=await zn(y);A!=null&&n.setFieldValue(e,{name:y.name,data:A.replace("data:","").replace(/^.+,/,""),size:y.size})},[n,e]);return g.useEffect(()=>()=>{p.forEach(b=>URL.revokeObjectURL(b.preview))},[p]),i.jsxs(Mn,{children:[i.jsx("span",{children:r}),i.jsxs($n,{children:[(p==null?void 0:p.length)>0&&i.jsx("aside",{children:i.jsx("img",{src:p[0].preview,onLoad:()=>{URL.revokeObjectURL(p[0].preview)},alt:p[0].name||"photo preview"})},p[0].name),i.jsx(Bn,{...C({className:`dropzone ${(p==null?void 0:p.length)===0?"empty":""}`,isFocused:U,isDragAccept:z,isDragReject:N}),title:c?"":o,"aria-label":`${r}. ${o}`,children:i.jsx("input",{...$()})})]}),i.jsxs(Un,{children:[i.jsxs("p",{children:["Attatch photo ",i.jsx(Tt,{})]}),i.jsxs("span",{children:[i.jsx("small",{children:a}),i.jsx("small",{children:"Allowed formats: .png, .jpg, .gif"})]})]})]})},Hn=qe().shape({name:Oe().min(3,"Minimum 3 characters").max(50,"Maximum 50 characters").required().label("Nome"),email:Oe().email().required().label("Email"),profile:qe().required().shape({id:Oe()})}),Kn=j.div`
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
`,Jn=({userEditing:e})=>{var C,$,U,z,N;const{modalIsOpen:t,toggleModal:n}=ct(),r={name:"",email:"",profile:null,company:null,landingPage:0,admin:!1,status:1},{save:a,edit:o,clearUserEditing:c,fetchUserListSSP:d,profiles:x,companies:u}=ut(),p=document.createElement("div"),w=()=>{n(),d(1,10,null)},l=dt({onSubmit:m=>{e?o(m,w):a(m,w)},validationSchema:Hn,enableReinitialize:!0,initialValues:e!=null&&e.id?{...e,profile:e==null?void 0:e.profile,company:e==null?void 0:e.company}:r}),S=m=>{var E,b;return(E=l==null?void 0:l.getFieldMeta(m))!=null&&E.touched&&((b=l==null?void 0:l.getFieldMeta(m))!=null&&b.error)?l.getFieldMeta(m).error:""},R=()=>{l.resetForm(),c()};return i.jsx(Kn,{children:i.jsx(Lt,{isOpen:t,contentLabel:e?"Edit User":"Create New User",appElement:p,onRequestClose:n,onAfterClose:R,style:{content:{top:"50%",left:"50%",padding:"0",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",height:"80%"}},children:i.jsxs(Wn,{children:[i.jsxs(Gn,{children:[i.jsx("h1",{children:e?"Edit User":"Create New User"}),i.jsx("button",{type:"button",onClick:()=>n(),children:i.jsx(Te,{})})]}),i.jsx(Vn,{className:"modal-body",children:i.jsxs("form",{id:"hookform",onSubmit:l.handleSubmit,children:[i.jsxs("div",{children:[i.jsx("span",{children:i.jsx(Nn,{name:"photo",value:((C=l==null?void 0:l.values)==null?void 0:C.photo)||void 0,formik:l,maxSizeMB:1,extensions:{"image/jpeg":[],"image/png":[]}})}),i.jsxs("span",{children:[i.jsx(fe,{name:"name",label:"Name",value:($=l==null?void 0:l.values)==null?void 0:$.name,onChange:l==null?void 0:l.handleChange,errorText:S("name"),autoFocus:!0}),i.jsx(fe,{name:"email",label:"E-mail",value:(U=l==null?void 0:l.values)==null?void 0:U.email,onChange:l==null?void 0:l.handleChange,errorText:S("email")}),i.jsx(Pe,{name:"profile",label:"Profile",value:l!=null&&l.values?x==null?void 0:x.find(m=>{var E;return(m==null?void 0:m.id)===((E=l==null?void 0:l.values.profile)==null?void 0:E.id)}):void 0,onChange:m=>{l.setFieldValue("profile",m)},errorText:S("profile"),options:x}),i.jsxs("div",{className:"jobtitle-and-isadmin",children:[i.jsx(fe,{name:"jobTitle",label:"Job Title",value:(z=l==null?void 0:l.values)==null?void 0:z.jobTitle,onChange:l==null?void 0:l.handleChange}),i.jsx(ge,{id:"admin",name:"admin",label:"Is Admin?",onChange:l==null?void 0:l.handleChange})]})]})]}),i.jsxs("div",{children:[i.jsx(Pe,{name:"company",label:"Company",value:l!=null&&l.values?u==null?void 0:u.find(m=>{var E;return(m==null?void 0:m.id.toString())===((E=l==null?void 0:l.values.company)==null?void 0:E.id.toString())}):void 0,onChange:m=>{l.setFieldValue("company",m)},options:u,searchable:!0}),i.jsx(Ot,{name:"status",label:"Status",value:(N=l==null?void 0:l.values)==null?void 0:N.status,onChange:m=>{console.log(m),l.setFieldValue("status",m.value)}}),i.jsx(Pe,{name:"landingPage",label:"Landing Page",value:l!=null&&l.values?Ye.find(m=>{var E;return(m==null?void 0:m.id.toString())===((E=l==null?void 0:l.values.landingPage)==null?void 0:E.toString())}):void 0,onChange:m=>{l.setFieldValue("landingPage",Number(m.id))},options:Ye,searchable:!0})]})]})}),i.jsx(qn,{children:i.jsxs(Yn,{children:[i.jsx(he,{onClick:n,btnTheme:"secondary",children:"Cancel"}),i.jsx(he,{type:"submit",btnTheme:"primary",form:"hookform",children:"Save"})]})})]})})})},Qn=j.div`
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
`,Xn=({children:e})=>i.jsx(Qn,{children:e}),Zn=j.div`

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
`,or=j.div`
  display: flex;
  justify-content: space-between;
`,ar=j.span`
  display: flex;
  gap: 32px;
  /* width: 100%; */
`,lr=j.span`
  display: flex;
  gap: 32px;

  > span:last-child {
    align-self: center;
  }
`,sr=j.button`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 22px;
    height: 22px;
  }
`,fr=()=>{var V,T;const[e,t]=g.useState(1),[n,r]=g.useState(10),[a,o]=g.useState(!1),[c,d]=g.useState(!1),[x,u]=g.useState(0),[p,w]=g.useState(!1),{toggleModal:k}=ct(),{setProfileOptions:l,setCompanyOptions:S,setUserEditingById:R,removeUserById:C,fetchUserListSSP:$,userEditing:U,userListSSP:z,loadingFetch:N}=ut(),m=g.useRef(!0),E=[{name:"Actions",width:"80px",cell:h=>i.jsxs(Xn,{"aria-label":"Action buttons",children:[i.jsx("button",{onClick:()=>_(h.id),"aria-label":"Edit user action",children:i.jsx(zt,{})}),i.jsx("button",{onClick:()=>A(h.id),"aria-label":"Remove user action",children:i.jsx(Mt,{})})]})},{name:"Name",minWidth:"260px",cell:h=>h.name},{name:"E-mail",width:"200px",cell:h=>h.email},{name:"Profile",width:"150px",cell:h=>h.profile},{name:"Job Title",width:"150px",cell:h=>h.jobTitle},{name:"Company",width:"150px",cell:h=>h.company},{name:"Admin",width:"150px",cell:h=>h.admin?"Yes":"No"},{name:"Status",width:"100px",cell:h=>h.status}],y=dt({onSubmit:h=>{$(e,n,h)},initialValues:{search:""}}),A=h=>{C(h)},_=h=>{R(h),k()},L=()=>{o(!a)},ee=()=>{d(!c)},G=()=>{w(!p),u(0)},O=h=>{u(h.selectedCount)},I=h=>{t(h)},ve=h=>{r(h)},ae=h=>{y.setFieldValue("status",h.target.checked?1:0)};return g.useEffect(()=>{m.current||l()},[l]),g.useEffect(()=>{m.current||S()},[S]),g.useEffect(()=>{m.current||$(e,n,y.values)},[e,$,y.values.status,n]),g.useEffect(()=>()=>{m.current=!1},[]),i.jsxs(Zn,{className:"admin-container",children:[i.jsxs(er,{className:"content-wrapper",children:[i.jsxs(tr,{children:[i.jsxs(ir,{children:[i.jsxs(or,{children:[i.jsx(ar,{children:i.jsx(he,{btnTheme:"primary",onClick:k,children:"Create New User"})}),i.jsxs(lr,{children:[i.jsxs(sr,{type:"button",onClick:G,children:[i.jsx(Te,{})," ",x," item selected"]}),i.jsx("span",{children:i.jsx(ge,{name:"view-assigned-to-me",label:"View assigned to me",fit:!0})})]})]}),i.jsxs("div",{children:[i.jsxs("form",{onSubmit:y.handleSubmit,children:[i.jsx(fe,{name:"search",placeholder:"",value:(V=y==null?void 0:y.values)==null?void 0:V.search,onChange:y==null?void 0:y.handleChange,fit:!0}),i.jsx("button",{type:"submit",children:i.jsx(Pt,{})})]}),i.jsx(he,{btnTheme:"primary","aria-label":"Filter",onClick:L,children:i.jsx(_t,{})})]})]}),i.jsxs(rr,{children:[i.jsx(Rt,{children:"User Administration"}),i.jsx(Ut,{loading:N,columns:E,data:((T=z==null?void 0:z.data)==null?void 0:T.map(h=>{var te,H;return{id:h.id,name:h.name,email:h.email,profile:(te=h.profile)==null?void 0:te.name,jobTitle:h.jobTitle,company:(H=h.company)==null?void 0:H.name,admin:!0,status:h.status}}))||[],pagination:!0,selectableRows:!0,onSelectedRowsChange:O,toggleClearSelectedRows:p,paginationPerPage:n,onPageChange:I,onRowsPerPageChange:ve,totalRows:z.rows})]})]}),i.jsxs(nr,{className:`filter ${a?"open":""}`,children:[i.jsxs("div",{children:[i.jsx("p",{children:"Filters"}),i.jsx("button",{type:"button",onClick:L,children:i.jsx(Te,{})})]}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsxs("span",{children:[i.jsx("p",{children:"Profile"}),i.jsx(re,{})]})}),i.jsx("li",{children:i.jsxs("span",{children:[i.jsx("p",{children:"Job Title"}),i.jsx(re,{})]})}),i.jsx("li",{children:i.jsxs("span",{children:[i.jsx("p",{children:"Company"}),i.jsx(re,{})]})}),i.jsxs("li",{children:[i.jsxs("button",{type:"button",onClick:ee,children:[i.jsx("p",{children:"Status"}),c?i.jsx(It,{}):i.jsx(re,{})]}),i.jsxs("div",{className:c?"open":"",children:[i.jsx(ge,{name:"status",label:"Active",onChange:ae,fit:!0}),i.jsx(ge,{name:"noActive",label:"Not Active",fit:!0})]})]}),i.jsx("li",{children:i.jsxs("span",{children:[i.jsx("p",{children:"Admin"}),i.jsx(re,{})]})})]})]})]}),i.jsx(Jn,{userEditing:U})]})};export{fr as default};
