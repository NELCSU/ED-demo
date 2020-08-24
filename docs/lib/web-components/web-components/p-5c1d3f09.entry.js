import{r as t,c as e,h as i,g as r,H as s}from"./p-3d9ea163.js";class o{constructor(i){t(this,i),this.disabled=!1,this.open=!1,this.ready=!1,this.size=2,this.closed=e(this,"closed",7),this.loaded=e(this,"loaded",6),this.opened=e(this,"opened",7)}validateOpen(t){Boolean(t)?this.opened.emit(this.host):this.closed.emit(this.host)}componentDidLoad(){const t=this.host.shadowRoot.querySelector("summary"),e=this.host.shadowRoot.querySelector("details");t.addEventListener("click",t=>!this.disabled||(t.preventDefault(),t.stopPropagation(),!1)),e.addEventListener("toggle",t=>(t.preventDefault(),t.stopImmediatePropagation(),!1)),this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}onClick(t){return this.disabled?(t.preventDefault(),t.stopPropagation(),!1):(this.open=!this.host.open,!0)}onKeyDown(t){if(this.disabled)return t.preventDefault(),t.stopPropagation(),!1;if(229===t.keyCode)return!1;switch(t.code){case"Space":this.open=!this.open}return!0}render(){const t={padding:`0.75rem 0.75rem 0.75rem ${this.size+1.5}rem`};return i("details",{tabindex:this.disabled?void 0:0,open:this.open},i("summary",{role:"button",tabindex:"-1"},i("div",{class:"icon",style:{"background-image":this.open?`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='${this.size}rem' width='${this.size}rem' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23005eb8'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A")`:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='${this.size}rem' width='${this.size}rem' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23005eb8'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M12 8v8M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A")`,"background-position":"center","background-repeat":"no-repeat","border-radius":"50%",height:this.size+"rem",width:this.size+"rem"}},i("slot",{name:"icon"})),i("div",{class:"title"},i("slot",{name:"title"}))),i("div",{style:t},i("slot",{name:"content"})))}get host(){return r(this)}static get watchers(){return{open:["validateOpen"]}}}o.style=":host{width:100%}:host([disabled]),:host([disabled])>details{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}details{display:block;line-height:1.5;margin-bottom:8px;width:100%}summary{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:0.5rem 0.5rem 0.5rem 1rem}summary:focus{outline:none}summary::-webkit-details-marker{display:none}.title{width:100%}.title>::slotted(*){-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:justify;justify-content:space-between;padding-left:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";class n{constructor(i){t(this,i),this.align="vertical",this.disabled=!1,this.ready=!1,this.resizable=!1,this.sort="ASC",this.cleared=e(this,"cleared",6),this.loaded=e(this,"loaded",6),this.sorted=e(this,"sorted",6)}validateHAlign(t){this.align=t}validateClear(t){if(t){for(let t of Array.from(this.host.children))this.host.removeChild(t);this.cleared.emit(this.host),this.clear=!1}}validateSort(t){const e=Array.from(this.host.children).sort("DESC"===t?(t,e)=>(t.textContent||"")>(e.textContent||"")?-1:1:(t,e)=>(t.textContent||"")>(e.textContent||"")?1:-1);Array.from(this.host.children).map(t=>this.host.removeChild(t)),e.map(t=>this.host.appendChild(t)),this.sort=t,this.sorted.emit(this.host)}componentDidLoad(){this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}render(){let t="item-collection "+this.align;return t+=!this.disabled&&this.resizable?" resize-"+this.align:"",i("div",{class:t,tabindex:this.disabled?void 0:0},i("slot",null))}get host(){return r(this)}static get watchers(){return{align:["validateHAlign"],clear:["validateClear"],sort:["validateSort"]}}}n.style=":host{max-height:inherit;max-width:inherit}:host([disabled]),:host([disabled])>.item-collection{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.item-collection:focus{outline:none}.item-collection{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;max-height:inherit;min-width:inherit;min-height:1rem;min-width:4rem;width:100%}.horizontal{-ms-flex-align:start;align-items:flex-start;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;overflow-x:auto;overflow-y:hidden}.resize-horizontal:focus{border:dashed 1px #ccc;resize:horizontal}.resize-vertical:focus{border:dashed 1px #ccc;resize:vertical}.vertical{-ms-flex-align:start;align-items:flex-start;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-pack:start;justify-content:flex-start;overflow-x:hidden;overflow-y:auto}";class a{constructor(i){t(this,i),this.color="#eeeeee",this.deletable=!1,this.disabled=!1,this.ready=!1,this.selectable=!1,this.deleting=e(this,"deleting",7),this.deleted=e(this,"deleted",7),this.loaded=e(this,"loaded",6),this.selected=e(this,"selected",6)}validateClear(t){t&&(this.deleted.emit(this.host),this.host.parentNode.removeChild(this.host))}componentDidLoad(){this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}onclick(t){!this.disabled&&this.selectable?(this.host.classList.contains("selected")?this.host.classList.remove("selected"):this.host.classList.add("selected"),this.selected.emit(this.host)):t.preventDefault()}onKeyDown(t){if(this.disabled||!this.selectable||229===t.keyCode)return t.stopImmediatePropagation(),void t.preventDefault();this.deletable&&"Delete"===t.code&&this.deleting.emit(this.host)}render(){const t="text"+(this.selectable&&!this.disabled?" selectable":"");return i("div",{class:"list-item",tabindex:this.selectable?0:void 0},i("div",{class:"bullet"+(this.selectable&&!this.disabled?" selectable":""),style:{"background-color":this.color,border:"1px solid "+this.color}}),i("div",{class:t},i("slot",null)))}get host(){return r(this)}static get watchers(){return{clear:["validateClear"]}}}a.style=":host{max-height:inherit;max-width:inherit}:host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.selectable{cursor:pointer}.list-item{-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;margin:1px}.bullet{border-radius:50%;display:inline-block;height:0.8rem;width:0.8rem}.text{display:inline-block;margin-left:0.5rem}";class l{constructor(i){t(this,i),this.align="center",this.open=!1,this.ready=!1,this.closed=e(this,"closed",7),this.loaded=e(this,"loaded",6),this.opened=e(this,"opened",7)}validateOpen(t){Boolean(t)?this.opened.emit(this.host):this.closed.emit(this.host)}componentDidLoad(){this.loaded.emit(this.host)}componentWillRender(){this.ready=!0}render(){return i("div",{class:"modal-view"},i("div",{class:"modal-content "+this.align},i("slot",null)))}get host(){return r(this)}static get watchers(){return{open:["validateOpen"]}}}l.style=":host{pointer-events:none}.modal-view{opacity:0;-webkit-transition:opacity 500ms;transition:opacity 500ms}:host([open]){pointer-events:auto}:host([open])>.modal-view{background-color:rgba(0, 0, 0, 0.5);bottom:0;display:block;left:0;opacity:1;position:fixed;right:0;top:0;-webkit-transition:opacity 500ms;transition:opacity 500ms;z-index:10000}.modal-content{position:absolute}.bottom{bottom:0%;left:50%;-webkit-transform:translate(-50%, 0%);transform:translate(-50%, 0%)}.center{left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.top{left:50%;top:0%;-webkit-transform:translate(-50%, 0%);transform:translate(-50%, 0%)}";class h{constructor(i){t(this,i),this.available=!0,this.ready=!1,this.loaded=e(this,"loaded",6),this.changed=e(this,"changed",6)}componentDidLoad(){this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}onOnline(){this.available=!0,this.changed.emit(this.host)}onOffline(){this.available=!1,this.changed.emit(this.host)}render(){return i("div",{hidden:this.available},i("slot",null))}get host(){return r(this)}}h.style=":host([hidden]){display:none !important}";class d{constructor(i){t(this,i),this.disabled=!1,this.on=!1,this.ready=!1,this.size=4,this.loaded=e(this,"loaded",6),this.changed=e(this,"changed",7)}validateOpen(){this.changed.emit(this.host)}componentDidLoad(){this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}onClick(){this.on=!this.on}render(){const t=this.size/2+"rem";return i(s,{"aria-checked":this.on?"true":"false"},i("span",null,i("style",null,`input { height: ${t}; width: ${this.size+"rem"} }\n    input:before { height: ${t}; width: ${t} }`),i("input",{type:"checkbox",checked:this.on,value:""})))}get host(){return r(this)}static get watchers(){return{on:["validateOpen"]}}}var c;d.style=':host{display:inline-block}:host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}input{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:var(--bg-color, #eeeeee);border:1px solid var(--color, #999999);border-radius:2rem;cursor:pointer;outline:none;position:relative;-webkit-transition:background 450ms ease;transition:background 450ms ease}input:before,input:after{border-radius:100%;content:"";display:block;position:absolute;-webkit-transform:translate(-1px, -1px);transform:translate(-1px, -1px);transition:background 450ms ease, -webkit-transform 450ms ease;-webkit-transition:background 450ms ease, -webkit-transform 450ms ease;transition:background 450ms ease, transform 450ms ease;transition:background 450ms ease, transform 450ms ease, -webkit-transform 450ms ease}input:before{background-color:var(--color, #999999)}:host([on])>span>input{background-color:var(--bg-color-on, #555555);border-color:var(--color-on, #000000)}:host([on])>span>input:before{background-color:var(--color-on, #000000);-webkit-transform:translate(99%, -1px);transform:translate(99%, -1px)}',function(t){t[t.NO_KEY=0]="NO_KEY",t[t.CTRL_KEY=1]="CTRL_KEY",t[t.SHIFT_KEY=2]="SHIFT_KEY"}(c||(c={}));class p{constructor(t){this._=new Map,this._selectionCount=0,t&&(Array.isArray(t)?t.forEach(t=>{this._.has(t)||this._.set(t,{filtered:!1,selected:!1})}):this._.has(t)||this._.set(t,{filtered:!1,selected:!1}))}get members(){const t=[];return this._.forEach((e,i)=>{t.push(i)}),t}get selection(){const t=[];return this._selectionCount>0&&this._.forEach((e,i)=>{e.selected&&t.push(i)}),t}add(t){if(!this._.has(t)){let e={filtered:!1,selected:!1};this._selectionCount>0&&(e.filtered=!0),this._.set(t,e)}return this}clear(){return this._.forEach((t,e)=>{this._.set(e,{filtered:!1,selected:!1})}),this._selectionCount=0,this.lastSelection=void 0,this}has(t){return this._.has(t)}isFiltered(t){const e=this._.get(t);return!!e&&e.filtered}isSelected(t){const e=this._.get(t);return!!e&&e.selected}remove(t){const e=this._.get(t);return e&&e.selected&&--this._selectionCount,this._.delete(t),0===this._selectionCount?this.clear():this.lastSelection===t&&(this.lastSelection=this.selection[0]),this}toggle(t,e=c.NO_KEY){return e===c.SHIFT_KEY?this.toggleRange(t):e===c.CTRL_KEY?this.toggleCumulative(t):this.toggleSingle(t)}toggleCumulative(t){const e=this._.get(t);return e&&(e.selected=!e.selected,e.selected?++this._selectionCount:--this._selectionCount,this._.set(t,e)),0===this._selectionCount||this._selectionCount===this._.size?this.clear():(this._.forEach((t,e)=>{t.filtered=!t.selected,this._.set(e,t)}),this.lastSelection=t),this}toggleRange(t){if(t===this.lastSelection)this.clear();else{let e=0;this._selectionCount=0,this._.forEach((i,r)=>{1===e?(t!==r&&this.lastSelection!==r||(e=-1),void 0===this.lastSelection?(e=-1,i={filtered:!0,selected:!1}):(i={filtered:!1,selected:!0},++this._selectionCount)):0!==e||t!==r&&this.lastSelection!==r?i={filtered:!0,selected:!1}:(e=1,i={filtered:!1,selected:!0},++this._selectionCount),this._.set(r,i)}),this.lastSelection=t,0!==this._selectionCount&&this._selectionCount!==this._.size||this.clear()}return this}toggleSingle(t){const e=this._.get(t);return e&&(e.selected?this.clear():(this._.forEach((e,i)=>{t===i?(e.selected=!e.selected,e.filtered=!e.selected):e={filtered:!0,selected:!1},this._.set(i,e)}),this._selectionCount=1,this.lastSelection=t)),this}}class u{constructor(i){t(this,i),this._slicer=new p,this.clear=!1,this.disabled=!1,this.ready=!1,this.cleared=e(this,"cleared",6),this.errored=e(this,"errored",6),this.loaded=e(this,"loaded",6),this.selected=e(this,"selected",6)}validateClear(t){if(t){this._slicer.clear();for(let t of Array.from(this.host.children))t.classList.remove("filtered"),t.classList.remove("selected");this.clear=!1,this.cleared.emit(this.host)}}componentDidLoad(){new MutationObserver(t=>{for(let e=0;e<t.length;++e)for(let i=0;i<t[e].addedNodes.length;++i){const r=t[e].addedNodes[i];if(r.classList.contains("slicer-item")){const t=r.textContent;this._slicer.has(t)?(r&&r.parentNode&&r.parentNode.removeChild(r),this.errored.emit("Duplicate entry detected: "+t)):this._slicer.add(t)}}}).observe(this.host,{childList:!0});for(let t of Array.from(this.host.children))this._slicer.add(t.textContent);this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}onclick(t){if(this.disabled)return void t.preventDefault();const e=t.target;if(e.classList.contains("slicer-item")){this._slicer.toggle(e.textContent,t.shiftKey?c.SHIFT_KEY:t.ctrlKey?c.CTRL_KEY:c.NO_KEY);const i=this._slicer.selection;if(0===i.length)this.clear=!0;else for(let t of Array.from(this.host.children))-1===i.indexOf(t.textContent)?(t.classList.add("filtered"),t.classList.remove("selected")):(t.classList.remove("filtered"),t.classList.add("selected"));this.selected.emit(i)}}render(){return i("div",{class:"slicer",tabindex:this.disabled?void 0:0},i("slot",null))}get host(){return r(this)}static get watchers(){return{clear:["validateClear"]}}}u.style=":host{max-height:inherit;max-width:inherit}:host([disabled]),:host([disabled])>.slicer{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.slicer{-ms-flex-align:stretch;align-items:stretch;border-color:var(--border-color, #000);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:start;justify-content:flex-start;max-height:inherit;min-width:inherit;min-height:1rem;min-width:4rem;overflow-x:hidden;overflow-y:auto;padding:var(--padding, 10px);width:var(--width, 100%)}.slicer:focus{outline:none}::slotted(.slicer-item){cursor:pointer;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";class m{constructor(i){t(this,i),this.disabled=!1,this.label="",this.pre="",this.ready=!1,this.suf="",this.loaded=e(this,"loaded",6)}componentDidLoad(){this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}render(){return i("div",{class:"status-badge"},i("div",{class:"icon"},i("div",{class:-1===this.rag?"diamond":0===this.rag?"triangle":1===this.rag?"circle":""})),i("div",{class:"text"},i("span",null,this.pre),i("slot",null),i("span",null,this.suf)),i("div",{class:"label"},this.label?" "+this.label:""))}get host(){return r(this)}}m.style=':host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.status-badge{-ms-flex-align:center;align-items:center;background-color:var(--background-color, #fff);border:1px solid var(--color, #330066);color:var(--color, #330066);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:var(--height, 8rem);-ms-flex-pack:justify;justify-content:space-between;margin:0.25rem;padding:0.25rem;width:var(--width, 8rem)}.status-badge>.icon{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:end;justify-content:flex-end;width:100%}.status-badge>.label{font-variant-caps:all-small-caps;font-size:1.2rem;font-weight:bold}.status-badge>.text{font-size:2rem}.diamond{border:0.5rem solid transparent;border-bottom-color:#ff0000;height:0;position:relative;top:-0.5rem;width:0}.diamond:after{content:"";border:0.5rem solid transparent;border-top-color:#ff0000;height:0;left:-0.5rem;position:absolute;top:0.5rem;width:0}.triangle{width:0;height:0;border-left:0.5rem solid transparent;border-right:0.5rem solid transparent;border-bottom:1rem solid #ffd700}.circle{background:#009900;border-radius:50%;height:1rem;width:1rem}';class f{constructor(i){t(this,i),this._mask=/.*/gi,this.cleartext=!0,this.disabled=!1,this.mask="",this.maxlength=-1,this.minlength=-1,this.pattern="",this.placeholder="",this.ready=!1,this.width=20,this.loaded=e(this,"loaded",6)}validateMask(t){this._mask=new RegExp(t)}componentDidLoad(){this._input=this.host.shadowRoot.querySelector("input"),this._mask=new RegExp(this.mask),this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}onInput(){this.value=this._input.value}onKeyDown(t){return!(this.disabled||229===t.keyCode||!this._editKeyPressed(t)&&!this._mask.test(t.key)&&(t.preventDefault(),t.stopPropagation(),1))}onPaste(t){if(!this.disabled&&t.clipboardData){const e=t.clipboardData.getData("text/plain");return!!this._mask.test(e)||(t.preventDefault(),t.stopPropagation(),!1)}return!1}onSearch(){const t=new InputEvent("input",{bubbles:!0,cancelable:!0});this.host.dispatchEvent(t)}_editKeyPressed(t){return"Delete"===t.code||"Backspace"===t.code||"ArrowLeft"===t.code||"ArrowRight"===t.code}render(){return i("input",{type:this.cleartext?"search":"password",maxlength:this.maxlength,minlength:this.minlength,pattern:this.pattern,placeholder:this.placeholder,size:this.width,value:this.value})}get host(){return r(this)}static get watchers(){return{mask:["validateMask"]}}}f.style=":host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}input{border:2px solid #aaa;-webkit-box-sizing:border-box;box-sizing:border-box;padding:4px;outline:transparent;-webkit-transition:border-color 0.25s ease, color 0.25s ease;transition:border-color 0.25s ease, color 0.25s ease;z-index:9}input:focus{border:2px solid #000}input::-webkit-input-placeholder{color:#aaa}input::-moz-placeholder{color:#aaa}input:-ms-input-placeholder{color:#aaa}input::-ms-input-placeholder{color:#aaa}input::placeholder{color:#aaa}input::-webkit-search-cancel-button{cursor:pointer}";class b{constructor(t){let e;if(this.r=0,this.g=0,this.b=0,t=t.toLowerCase().replace("#",""),void 0===b.CSS[t])if(3===t.length){const e=t.substr(0,1);this.r=this._n(parseInt(`${e}${e}`,16));const i=t.substr(1,1);this.g=this._n(parseInt(`${i}${i}`,16));const r=t.substr(2,1);this.b=this._n(parseInt(`${r}${r}`,16))}else 6===t.length&&(e=parseInt(t,16),this.r=this._n(this._rshift(e)),this.g=this._n(this._gshift(e)),this.b=this._n(this._bshift(e)));else e=b.CSS[t],this.r=this._n(this._rshift(e)),this.g=this._n(this._gshift(e)),this.b=this._n(this._bshift(e))}get brightness(){return(299*this.r+587*this.g+114*this.b)/1e3}colorDifference(t){return Math.max(this.r,t.r)-Math.min(this.r,t.r)+(Math.max(this.g,t.g)-Math.min(this.g,t.g))+(Math.max(this.b,t.b)-Math.min(this.b,t.b))}toCSSString(){const t=parseInt(this.toHex(),16);return Object.keys(b.CSS).find(e=>b.CSS[e]===t)}toHex(){return this._hex(this.r)+this._hex(this.g)+this._hex(this.b)}toString(){return"#"+this.toHex()}_rshift(t){return t>>16&255}_gshift(t){return t>>8&255}_bshift(t){return t>>0&255}_hex(t){return(t<16?"0":"")+t.toString(16)}_n(t){return t>255?255:t<0?0:t}}b.brightnessThreshold=125,b.CSS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},b.differenceThreshold=500;class g{constructor(i){t(this,i),this.color="#eeeeee",this.deletable=!1,this.disabled=!1,this.label="",this.selectable=!1,this.deleting=e(this,"deleting",7),this.deleted=e(this,"deleted",7),this.loaded=e(this,"loaded",6),this.selected=e(this,"selected",7)}componentDidLoad(){this.loaded.emit(this.host)}componentWillLoad(){this.ready=!0}onClick(t){!this.disabled&&this.selectable?(this.host.classList.contains("selected")?this.host.classList.remove("selected"):this.host.classList.add("selected"),this.selected.emit(this.host)):t.preventDefault()}onKeyDown(t){if(this.disabled||!this.selectable||229===t.keyCode)return t.stopImmediatePropagation(),void t.preventDefault();!this.deletable||"Backspace"!==t.code&&"Delete"!==t.code||this.deleting.emit(this.host)}async delete(){this.deleted.emit(this.host);const t=this.host.parentNode;return this.host.insertAdjacentText("beforebegin",this.host.textContent||""),t.removeChild(this.host),t.normalize(),Promise.resolve(!0)}render(){const t=this.selectable?"selectable":"",e=this.selectable?0:void 0,r=new b(this.color).brightness>b.brightnessThreshold?"#000000":"#ffffff";return i("mark",{class:t,tabindex:e,style:{"background-color":this.color,color:r}},i("slot",null),i("span",null,this.label?" "+this.label:""))}get host(){return r(this)}}function w(t,e){if((i=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var i,r=t.slice(0,i);return[r.length>1?r[0]+r.slice(2):r,+t.slice(i+1)]}g.style=":host([disabled]),:host([disabled])>mark{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.selectable{cursor:pointer}.text-tag:focus{-webkit-box-shadow:0 0 0 4px #ffcd60;box-shadow:0 0 0 4px #ffcd60;outline:none}mark{-webkit-box-decoration-break:clone;border-radius:0.35em;box-decoration-break:clone;line-height:1.3rem;margin:auto 0.25rem;padding:0.2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}mark>span{font-size:0.7em;font-weight:bold;text-transform:uppercase}";var x,v=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function k(t){if(!(e=v.exec(t)))throw new Error("invalid format: "+t);var e;return new y({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function y(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function z(t,e){var i=w(t,e);if(!i)return t+"";var r=i[0],s=i[1];return s<0?"0."+new Array(-s).join("0")+r:r.length>s+1?r.slice(0,s+1)+"."+r.slice(s+1):r+new Array(s-r.length+2).join("0")}k.prototype=y.prototype,y.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var M={"%":function(t,e){return(100*t).toFixed(e)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},o:function(t){return Math.round(t).toString(8)},p:function(t,e){return z(100*t,e)},r:z,s:function(t,e){var i=w(t,e);if(!i)return t+"";var r=i[0],s=i[1],o=s-(x=3*Math.max(-8,Math.min(8,Math.floor(s/3))))+1,n=r.length;return o===n?r:o>n?r+new Array(o-n+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+w(t,Math.max(0,e+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function _(t){return t}var C,L,$,E=Array.prototype.map,D=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];C=function(t){var e,i,r=void 0===t.grouping||void 0===t.thousands?_:(e=E.call(t.grouping,Number),i=t.thousands+"",function(t,r){for(var s=t.length,o=[],n=0,a=e[0],l=0;s>0&&a>0&&(l+a+1>r&&(a=Math.max(1,r-l)),o.push(t.substring(s-=a,s+a)),!((l+=a+1)>r));)a=e[n=(n+1)%e.length];return o.reverse().join(i)}),s=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",n=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?_:function(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}(E.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",h=void 0===t.minus?"-":t.minus+"",d=void 0===t.nan?"NaN":t.nan+"";function c(t){var e=(t=k(t)).fill,i=t.align,c=t.sign,p=t.symbol,u=t.zero,m=t.width,f=t.comma,b=t.precision,g=t.trim,w=t.type;"n"===w?(f=!0,w="g"):M[w]||(void 0===b&&(b=12),g=!0,w="g"),(u||"0"===e&&"="===i)&&(u=!0,e="0",i="=");var v="$"===p?s:"#"===p&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",y="$"===p?o:/[%p]/.test(w)?l:"",z=M[w],_=/[defgprs%]/.test(w);function C(t){var s,o,l,p=v,k=y;if("c"===w)k=z(t)+k,t="";else{var M=(t=+t)<0||1/t<0;if(t=isNaN(t)?d:z(Math.abs(t),b),g&&(t=function(t){t:for(var e,i=t.length,r=1,s=-1;r<i;++r)switch(t[r]){case".":s=e=r;break;case"0":0===s&&(s=r),e=r;break;default:if(!+t[r])break t;s>0&&(s=0)}return s>0?t.slice(0,s)+t.slice(e+1):t}(t)),M&&0==+t&&"+"!==c&&(M=!1),p=(M?"("===c?c:h:"-"===c||"("===c?"":c)+p,k=("s"===w?D[8+x/3]:"")+k+(M&&"("===c?")":""),_)for(s=-1,o=t.length;++s<o;)if(48>(l=t.charCodeAt(s))||l>57){k=(46===l?n+t.slice(s+1):t.slice(s))+k,t=t.slice(0,s);break}}f&&!u&&(t=r(t,1/0));var C=p.length+t.length+k.length,L=C<m?new Array(m-C+1).join(e):"";switch(f&&u&&(t=r(L+t,L.length?m-k.length:1/0),L=""),i){case"<":t=p+t+k+L;break;case"=":t=p+L+t+k;break;case"^":t=L.slice(0,C=L.length>>1)+p+t+k+L.slice(C);break;default:t=L+p+t+k}return a(t)}return b=void 0===b?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),C.toString=function(){return t+""},C}return{format:c,formatPrefix:function(t,e){var i,r=c(((t=k(t)).type="f",t)),s=3*Math.max(-8,Math.min(8,Math.floor((i=e,((i=w(Math.abs(i)))?i[1]:NaN)/3)))),o=Math.pow(10,-s),n=D[8+s/3];return function(t){return r(o*t)+n}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),L=C.format,function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}($||($={}));var S=function(){function t(t,e,i,r){return this.x=t,this.y=e,this.width=i,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),A="undefined"!=typeof window?window:{},j=(/msie|trident/i.test(A.navigator&&A.navigator.userAgent),function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=!1),Object.freeze({inlineSize:(i?e:t)||0,blockSize:(i?t:e)||0})});Object.freeze({devicePixelContentBoxSize:j(),borderBoxSize:j(),contentBoxSize:j(),contentRect:new S(0,0,0,0)}),L(",.2f"),L(",.1f"),L(",.0f");class O{constructor(i){t(this,i),this._paused=!1,this._pointer="",this._position={orientX:"left",orientY:"top",x:-1,y:-1},this.expires=0,this.for="",this.ready=!1,this.show=!1,this.loaded=e(this,"loaded",6),this.changed=e(this,"changed",7)}validateExpires(){this._progressCount=0,this.expires?(this._panel.classList.remove("hidden"),this._progress.classList.remove("hidden")):(this._panel.classList.add("hidden"),this._progress.classList.add("hidden"))}validateFor(){this.for&&(this._for=document.getElementById(this.for),this._position=function(t,e,i=0){const r=t.getBoundingClientRect(),s=e.getBoundingClientRect(),o=document.documentElement.clientHeight,n=document.documentElement.clientWidth;let a=r.right+window.scrollX+i,l=r.top+window.scrollY+r.height/2-s.height/2,h="right",d="middle";return l+s.height>o&&(d="top",l=r.top+window.scrollY-i-s.height),l<window.scrollY&&(d="bottom",l=r.bottom+window.scrollY+i),a+s.width>n&&(h="left",a=r.left+window.scrollX-i-s.width),a<window.scrollX&&(h="center",a=r.left+window.scrollX+r.width/2),{orientX:h,orientY:d,x:a,y:l}}(this._for,this._tip),this._tip.style.top=this._position.y+("top"===this._position.orientY?-20:20)+"px",this._tip.style.left=this._position.x+("right"===this._position.orientX?-40:40)+"px",this._pointer=`${this._position.orientY}-${this._position.orientX}`)}validateShow(){this._tip.style.opacity=this.show?"1":"0",this.show?this._startTimer():this._clearTimer(),this.changed.emit(this.host)}componentDidLoad(){this.loaded.emit(this.host),this._tip=this.host.shadowRoot.querySelector(".tip"),this._panel=this._tip.querySelector(".tip-panel"),this._progress=this._tip.querySelector(".tip-progress"),this._pause=this._panel.querySelector(".tip-action"),this._pause.addEventListener("click",()=>{this._paused?(this._startTimer(),this._paused=!1):(this._pause.textContent="resume",this._paused=!0,clearInterval(this._timerProgress),this._timerProgress=null)})}componentWillLoad(){this.ready=!0}_clearTimer(){clearInterval(this._timerProgress),this._paused=!1,this._timerProgress=null}_startTimer(){this.show&&this.expires&&(this._pause.textContent="pause",this._paused||(this._progressCount=this.expires/100,this._progress.max=this.expires,this._progress.value=0),this._timerProgress=setInterval(()=>{this._progress.value+=this._progressCount,this._progress.value>=this._progress.max&&(this._clearTimer(),this.show=!1)},this._progressCount))}render(){const t="tip-panel"+(this.expires?"":" hidden");return i(s,null,i("div",{class:"tip"},i("div",{class:"tip-wrapper "+this._pointer},i("progress",{class:`tip-progress${this.expires?"":" hidden"} ${this._position.orientY}`,max:"100",value:"0"}),i("div",{class:"tip-message"},i("slot",null)),i("div",{class:t},i("span",{class:"tip-action"},"pause")))))}get host(){return r(this)}static get watchers(){return{expires:["validateExpires"],for:["validateFor"],show:["validateShow"]}}}O.style=':host{display:block}:host([show])>.tip{opacity:1 !important;pointer-events:auto !important}.hidden{display:none !important}.tip{max-height:25%;max-width:25%;min-height:50px;min-width:100px;opacity:0;pointer-events:none;position:absolute;-webkit-transition:opacity 400ms ease-out;transition:opacity 400ms ease-out}.tip-action{cursor:pointer;font-size:0.8em;margin-right:5px}.tip-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;margin:1em 5px 0.4em 0;width:100%}.tip-wrapper{background-color:#fff;border:1px solid #009;margin-bottom:0;padding-bottom:0;position:relative}.tip-wrapper:before{border-style:solid;content:"";height:0px;position:absolute;width:0px}.tip-wrapper:after{border-style:solid;content:"";height:0px;position:absolute;width:0px}.tip-wrapper.top-right:before{border-width:10px;border-left-color:#009;border-right-color:transparent;border-top-color:#009;border-bottom-color:transparent;bottom:-21px;left:19px}.tip-wrapper.top-right:after{border-width:10px;border-left-color:#fff;border-right-color:transparent;border-top-color:#fff;border-bottom-color:transparent;bottom:-19.5px;left:20px}.tip-wrapper.top-left:before{border-width:10px;border-right-color:#009;border-left-color:transparent;border-bottom-color:transparent;border-top-color:#009;bottom:-21px;right:19px}.tip-wrapper.top-left:after{border-width:10px;border-left-color:transparent;border-right-color:#fff;border-top-color:#fff;border-bottom-color:transparent;bottom:-19.5px;right:20px}.tip-wrapper.middle-left:before{border-width:10px;border-right-color:transparent;border-left-color:#009;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);right:-20px}.tip-wrapper.middle-left:after{border-width:10px;border-right-color:transparent;border-left-color:#fff;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);right:-19px}.tip-wrapper.middle-right:before{border-width:10px;border-right-color:#009;border-left-color:transparent;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);left:-20px}.tip-wrapper.middle-right:after{border-width:9.5px;border-right-color:#fff;border-left-color:transparent;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);left:-18.5px}.tip-wrapper.bottom-left:before{border-width:10px;border-right-color:#009;border-left-color:transparent;border-bottom-color:#009;border-top-color:transparent;top:-21px;right:19px}.tip-wrapper.bottom-left:after{border-width:10px;border-left-color:transparent;border-right-color:#fff;border-top-color:transparent;border-bottom-color:#fff;top:-19px;right:19.5px}.tip-wrapper.bottom-right:before{border-width:10px;border-right-color:transparent;border-left-color:#009;border-bottom-color:#009;border-top-color:transparent;top:-21px;left:19px}.tip-wrapper.bottom-right:after{border-width:10px;border-right-color:transparent;border-left-color:#fff;border-bottom-color:#fff;border-top-color:transparent;top:-19px;left:19.5px}.tip-message{padding:10px;width:100%}.tip-progress{border-radius:0;height:0.3em;left:0;margin:0;padding:0;position:absolute;width:100%}.tip-progress.bottom{bottom:-1px}.tip-progress.top{top:-1px}.tip-progress::-webkit-progress-bar{border-radius:0;height:0.3em;margin:0;padding:0;width:100%}.tip-progress::-webkit-progress-value{background-color:#009;border-radius:0;display:block;height:0.3em;margin:0;padding:0;width:100%}';export{o as nel_expand_item,n as nel_item_collection,a as nel_list_item,l as nel_modal_view,h as nel_network_connection,d as nel_on_off,u as nel_slicer,m as nel_status_badge,f as nel_text_input,g as nel_text_tag,O as nel_tip}