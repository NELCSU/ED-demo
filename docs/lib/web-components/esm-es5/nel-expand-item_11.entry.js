var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-3b92e0a1.js';
var nelExpandItemCss = ":host{width:100%}:host([disabled]),:host([disabled])>details{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}details{display:block;line-height:1.5;margin-bottom:8px;width:100%}summary{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:0.5rem 0.5rem 0.5rem 1rem}summary:focus{outline:none}summary::-webkit-details-marker{display:none}.title{width:100%}.title>::slotted(*){-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:justify;justify-content:space-between;padding-left:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";
/**
 * Similar in function to detail/summary elements
 */
var ExpandItem = /** @class */ (function () {
    function ExpandItem(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * If true, main contents of element are visible
         */
        this.open = false;
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        /**
         * Adjusts the size of the marker, using CSS rem units of measurement
         */
        this.size = 2;
        this.closed = createEvent(this, "closed", 7);
        this.loaded = createEvent(this, "loaded", 6);
        this.opened = createEvent(this, "opened", 7);
    }
    ExpandItem.prototype.validateOpen = function (newValue) {
        if (Boolean(newValue)) {
            this.opened.emit(this.host);
        }
        else {
            this.closed.emit(this.host);
        }
    };
    ExpandItem.prototype.componentDidLoad = function () {
        var _this = this;
        var su = this.host.shadowRoot.querySelector("summary");
        var dt = this.host.shadowRoot.querySelector("details");
        su.addEventListener("click", function (ev) {
            if (_this.disabled) {
                ev.preventDefault();
                ev.stopPropagation();
                return false;
            }
            return true;
        });
        dt.addEventListener("toggle", function (ev) {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            return false;
        });
        this.loaded.emit(this.host);
    };
    ExpandItem.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    ExpandItem.prototype.onClick = function (ev) {
        if (this.disabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }
        this.open = !this.host.open;
        return true;
    };
    ExpandItem.prototype.onKeyDown = function (ev) {
        if (this.disabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }
        if (ev.keyCode === 229) {
            return false;
        }
        switch (ev.code) {
            case "Space":
                this.open = !this.open;
                break;
        }
        return true;
    };
    ExpandItem.prototype.render = function () {
        var tab = this.disabled ? undefined : 0;
        var contentStyle = {
            padding: "0.75rem 0.75rem 0.75rem " + (this.size + 1.5) + "rem"
        };
        var iconStyle = {
            "background-image": this.open
                ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='" + this.size + "rem' width='" + this.size + "rem' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23005eb8'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A\")"
                : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='" + this.size + "rem' width='" + this.size + "rem' aria-hidden='true'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23005eb8'%3E%3C/circle%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M12 8v8M8 12h8'%3E%3C/path%3E%3C/svg%3E%0A\")",
            "background-position": "center",
            "background-repeat": "no-repeat",
            "border-radius": "50%",
            height: this.size + "rem",
            width: this.size + "rem"
        };
        return (h("details", { tabindex: tab, open: this.open }, h("summary", { role: "button", tabindex: "-1" }, h("div", { class: "icon", style: iconStyle }, h("slot", { name: "icon" })), h("div", { class: "title" }, h("slot", { name: "title" }))), h("div", { style: contentStyle }, h("slot", { name: "content" }))));
    };
    Object.defineProperty(ExpandItem.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExpandItem, "watchers", {
        get: function () {
            return {
                "open": ["validateOpen"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ExpandItem;
}());
ExpandItem.style = nelExpandItemCss;
var nelItemCollectionCss = ":host{max-height:inherit;max-width:inherit}:host([disabled]),:host([disabled])>.item-collection{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.item-collection:focus{outline:none}.item-collection{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:100%;max-height:inherit;min-width:inherit;min-height:1rem;min-width:4rem;width:100%}.horizontal{-ms-flex-align:start;align-items:flex-start;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;overflow-x:auto;overflow-y:hidden}.resize-horizontal:focus{border:dashed 1px #ccc;resize:horizontal}.resize-vertical:focus{border:dashed 1px #ccc;resize:vertical}.vertical{-ms-flex-align:start;align-items:flex-start;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-pack:start;justify-content:flex-start;overflow-x:hidden;overflow-y:auto}";
/**
 * Organises child elements vertically or horizontally
 */
var ItemCollection = /** @class */ (function () {
    function ItemCollection(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Aligns child elements within collection. Defaults to vertical list.
         */
        this.align = "vertical";
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        /**
         * Displays the element resize handle (bottom right corner) if true
         */
        this.resizable = false;
        /**
         * Sorts child elements in collection based on text content
         */
        this.sort = "ASC";
        this.cleared = createEvent(this, "cleared", 6);
        this.loaded = createEvent(this, "loaded", 6);
        this.sorted = createEvent(this, "sorted", 6);
    }
    ItemCollection.prototype.validateHAlign = function (newValue) {
        this.align = newValue;
    };
    ItemCollection.prototype.validateClear = function (newValue) {
        if (newValue) {
            for (var _i = 0, _b = Array.from(this.host.children); _i < _b.length; _i++) {
                var el = _b[_i];
                this.host.removeChild(el);
            }
            this.cleared.emit(this.host);
            this.clear = false;
        }
    };
    ItemCollection.prototype.validateSort = function (newValue) {
        var _this = this;
        var sorted = Array.from(this.host.children)
            .sort(newValue === "DESC"
            ? function (a, b) { return (a.textContent || "") > (b.textContent || "") ? -1 : 1; }
            : function (a, b) { return (a.textContent || "") > (b.textContent || "") ? 1 : -1; });
        Array.from(this.host.children)
            .map(function (el) { return _this.host.removeChild(el); });
        sorted.map(function (el) { return _this.host.appendChild(el); });
        this.sort = newValue;
        this.sorted.emit(this.host);
    };
    ItemCollection.prototype.componentDidLoad = function () {
        this.loaded.emit(this.host);
    };
    ItemCollection.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    ItemCollection.prototype.render = function () {
        var cls = "item-collection " + this.align;
        cls += !this.disabled && this.resizable ? " resize-" + this.align : "";
        var tab = this.disabled ? undefined : 0;
        return (h("div", { class: cls, tabindex: tab }, h("slot", null)));
    };
    Object.defineProperty(ItemCollection.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemCollection, "watchers", {
        get: function () {
            return {
                "align": ["validateHAlign"],
                "clear": ["validateClear"],
                "sort": ["validateSort"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ItemCollection;
}());
ItemCollection.style = nelItemCollectionCss;
var nelListItemCss = ":host{max-height:inherit;max-width:inherit}:host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.selectable{cursor:pointer}.list-item{-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;margin:1px}.bullet{border-radius:50%;display:inline-block;height:0.8rem;width:0.8rem}.text{display:inline-block;margin-left:0.5rem}";
/**
 * Similar in behaviour to li element
 */
var ListItem = /** @class */ (function () {
    function ListItem(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the bullet color of the element. Default is #eeeeee
         */
        this.color = "#eeeeee";
        /**
         * If true, allows the element to be delete using keyboard
         */
        this.deletable = false;
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        /**
         * If true, allows the element to receive focus
         */
        this.selectable = false;
        this.deleting = createEvent(this, "deleting", 7);
        this.deleted = createEvent(this, "deleted", 7);
        this.loaded = createEvent(this, "loaded", 6);
        this.selected = createEvent(this, "selected", 6);
    }
    ListItem.prototype.validateClear = function (newValue) {
        if (newValue) {
            this.deleted.emit(this.host);
            var parent = this.host.parentNode;
            parent.removeChild(this.host);
        }
    };
    ListItem.prototype.componentDidLoad = function () {
        this.loaded.emit(this.host);
    };
    ListItem.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    ListItem.prototype.onclick = function (ev) {
        if (this.disabled || !this.selectable) {
            ev.preventDefault();
            return;
        }
        if (this.host.classList.contains("selected")) {
            this.host.classList.remove("selected");
        }
        else {
            this.host.classList.add("selected");
        }
        this.selected.emit(this.host);
    };
    ListItem.prototype.onKeyDown = function (ev) {
        if (this.disabled || !this.selectable || ev.keyCode === 229) {
            ev.stopImmediatePropagation();
            ev.preventDefault();
            return;
        }
        if (this.deletable && ev.code === "Delete") {
            this.deleting.emit(this.host);
        }
    };
    ListItem.prototype.render = function () {
        var tab = this.selectable ? 0 : undefined;
        var bcls = "bullet" + (this.selectable && !this.disabled ? " selectable" : "");
        var tcls = "text" + (this.selectable && !this.disabled ? " selectable" : "");
        var bst = {
            "background-color": this.color,
            border: "1px solid " + this.color
        };
        return (h("div", { class: "list-item", tabindex: tab }, h("div", { class: bcls, style: bst }), h("div", { class: tcls }, h("slot", null))));
    };
    Object.defineProperty(ListItem.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem, "watchers", {
        get: function () {
            return {
                "clear": ["validateClear"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ListItem;
}());
ListItem.style = nelListItemCss;
var nelModalViewCss = ":host{pointer-events:none}.modal-view{opacity:0;-webkit-transition:opacity 500ms;transition:opacity 500ms}:host([open]){pointer-events:auto}:host([open])>.modal-view{background-color:rgba(0, 0, 0, 0.5);bottom:0;display:block;left:0;opacity:1;position:fixed;right:0;top:0;-webkit-transition:opacity 500ms;transition:opacity 500ms;z-index:10000}.modal-content{position:absolute}.bottom{bottom:0%;left:50%;-webkit-transform:translate(-50%, 0%);transform:translate(-50%, 0%)}.center{left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.top{left:50%;top:0%;-webkit-transform:translate(-50%, 0%);transform:translate(-50%, 0%)}";
/**
 * Displays a modal background for displaying messages above page content
 */
var ModalView = /** @class */ (function () {
    function ModalView(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Aligns child elements. Defaults to center of viewport.
         */
        this.align = "center";
        /**
         * If true, displays the modal element
         */
        this.open = false;
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        this.closed = createEvent(this, "closed", 7);
        this.loaded = createEvent(this, "loaded", 6);
        this.opened = createEvent(this, "opened", 7);
    }
    ModalView.prototype.validateOpen = function (newValue) {
        if (Boolean(newValue)) {
            this.opened.emit(this.host);
        }
        else {
            this.closed.emit(this.host);
        }
    };
    ModalView.prototype.componentDidLoad = function () {
        this.loaded.emit(this.host);
    };
    ModalView.prototype.componentWillRender = function () {
        this.ready = true;
    };
    ModalView.prototype.render = function () {
        var cls = "modal-content " + this.align;
        return (h("div", { class: "modal-view" }, h("div", { class: cls }, h("slot", null))));
    };
    Object.defineProperty(ModalView.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalView, "watchers", {
        get: function () {
            return {
                "open": ["validateOpen"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ModalView;
}());
ModalView.style = nelModalViewCss;
var nelNetworkConnectionCss = ":host([hidden]){display:none !important}";
/**
 * Displays content when network connectivity is interrupted
 */
var NetworkConnection = /** @class */ (function () {
    function NetworkConnection(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If true, content within element remains hidden
         */
        this.available = true;
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        this.loaded = createEvent(this, "loaded", 6);
        this.changed = createEvent(this, "changed", 6);
    }
    NetworkConnection.prototype.componentDidLoad = function () {
        this.loaded.emit(this.host);
        // this.ready = true;
    };
    NetworkConnection.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    NetworkConnection.prototype.onOnline = function () {
        this.available = true;
        this.changed.emit(this.host);
    };
    NetworkConnection.prototype.onOffline = function () {
        this.available = false;
        this.changed.emit(this.host);
    };
    NetworkConnection.prototype.render = function () {
        return (h("div", { hidden: this.available }, h("slot", null)));
    };
    Object.defineProperty(NetworkConnection.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return NetworkConnection;
}());
NetworkConnection.style = nelNetworkConnectionCss;
var nelOnOffCss = ":host{display:inline-block}:host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}input{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:var(--bg-color, #eeeeee);border:1px solid var(--color, #999999);border-radius:2rem;cursor:pointer;outline:none;position:relative;-webkit-transition:background 450ms ease;transition:background 450ms ease}input:before,input:after{border-radius:100%;content:\"\";display:block;position:absolute;-webkit-transform:translate(-1px, -1px);transform:translate(-1px, -1px);transition:background 450ms ease, -webkit-transform 450ms ease;-webkit-transition:background 450ms ease, -webkit-transform 450ms ease;transition:background 450ms ease, transform 450ms ease;transition:background 450ms ease, transform 450ms ease, -webkit-transform 450ms ease}input:before{background-color:var(--color, #999999)}:host([on])>span>input{background-color:var(--bg-color-on, #555555);border-color:var(--color-on, #000000)}:host([on])>span>input:before{background-color:var(--color-on, #000000);-webkit-transform:translate(99%, -1px);transform:translate(99%, -1px)}";
/**
 * Similar in behaviour to the checkbox (without indeterminate state)
 */
var OnOff = /** @class */ (function () {
    function OnOff(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * If true, element is in the 'on' state
         */
        this.on = false;
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        /**
         * Adjusts the size of the element, using CSS rem units of measurement
         */
        this.size = 4;
        this.loaded = createEvent(this, "loaded", 6);
        this.changed = createEvent(this, "changed", 7);
    }
    OnOff.prototype.validateOpen = function () {
        this.changed.emit(this.host);
    };
    OnOff.prototype.componentDidLoad = function () {
        this.loaded.emit(this.host);
    };
    OnOff.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    OnOff.prototype.onClick = function () {
        this.on = !this.on;
    };
    OnOff.prototype.render = function () {
        var ht = this.size / 2 + "rem";
        var w = this.size + "rem";
        var st = "input { height: " + ht + "; width: " + w + " }\n    input:before { height: " + ht + "; width: " + ht + " }";
        return (h(Host, { "aria-checked": this.on ? "true" : "false" }, h("span", null, h("style", null, st), h("input", { type: "checkbox", checked: this.on, value: "" }))));
    };
    Object.defineProperty(OnOff.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnOff, "watchers", {
        get: function () {
            return {
                "on": ["validateOpen"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return OnOff;
}());
OnOff.style = nelOnOffCss;
var SlicerModifier;
(function (SlicerModifier) {
    SlicerModifier[SlicerModifier["NO_KEY"] = 0] = "NO_KEY";
    SlicerModifier[SlicerModifier["CTRL_KEY"] = 1] = "CTRL_KEY";
    SlicerModifier[SlicerModifier["SHIFT_KEY"] = 2] = "SHIFT_KEY";
})(SlicerModifier || (SlicerModifier = {}));
var Slicer = /** @class */ (function () {
    function Slicer(list) {
        var _this = this;
        this._ = new Map();
        this._selectionCount = 0;
        if (list) {
            if (Array.isArray(list)) {
                list.forEach(function (item) {
                    if (!_this._.has(item)) {
                        _this._.set(item, { filtered: false, selected: false });
                    }
                });
            }
            else if (!this._.has(list)) {
                this._.set(list, { filtered: false, selected: false });
            }
        }
    }
    Object.defineProperty(Slicer.prototype, "members", {
        get: function () {
            var result = [];
            this._.forEach(function (value, key) {
                result.push(key);
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slicer.prototype, "selection", {
        get: function () {
            var result = [];
            if (this._selectionCount > 0) {
                this._.forEach(function (value, key) {
                    if (value.selected) {
                        result.push(key);
                    }
                });
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Slicer.prototype.add = function (key) {
        if (!this._.has(key)) {
            var state = { filtered: false, selected: false };
            if (this._selectionCount > 0) {
                state.filtered = true;
            }
            this._.set(key, state);
        }
        return this;
    };
    Slicer.prototype.clear = function () {
        var _this = this;
        this._.forEach(function (_, key) {
            _this._.set(key, { filtered: false, selected: false });
        });
        this._selectionCount = 0;
        this.lastSelection = undefined;
        return this;
    };
    Slicer.prototype.has = function (key) {
        return this._.has(key);
    };
    Slicer.prototype.isFiltered = function (key) {
        var item = this._.get(key);
        return item ? item.filtered : false;
    };
    Slicer.prototype.isSelected = function (key) {
        var item = this._.get(key);
        return item ? item.selected : false;
    };
    Slicer.prototype.remove = function (key) {
        var state = this._.get(key);
        if (state && state.selected) {
            --this._selectionCount;
        }
        this._.delete(key);
        if (this._selectionCount === 0) {
            this.clear();
        }
        else if (this.lastSelection === key) {
            this.lastSelection = this.selection[0];
        }
        return this;
    };
    Slicer.prototype.toggle = function (item, modifier) {
        if (modifier === void 0) { modifier = SlicerModifier.NO_KEY; }
        if (modifier === SlicerModifier.SHIFT_KEY) {
            return this.toggleRange(item);
        }
        else if (modifier === SlicerModifier.CTRL_KEY) {
            return this.toggleCumulative(item);
        }
        else {
            return this.toggleSingle(item);
        }
    };
    Slicer.prototype.toggleCumulative = function (key) {
        var _this = this;
        var state = this._.get(key);
        if (state) {
            state.selected = !state.selected;
            if (state.selected) {
                ++this._selectionCount;
            }
            else {
                --this._selectionCount;
            }
            this._.set(key, state);
        }
        if (this._selectionCount === 0 || this._selectionCount === this._.size) {
            this.clear();
        }
        else {
            this._.forEach(function (value, key) {
                value.filtered = !value.selected;
                _this._.set(key, value);
            });
            this.lastSelection = key;
        }
        return this;
    };
    Slicer.prototype.toggleRange = function (item) {
        var _this = this;
        if (item === this.lastSelection) {
            this.clear();
        }
        else {
            var state_1 = 0;
            this._selectionCount = 0;
            this._.forEach(function (value, key) {
                if (state_1 === 1) {
                    if (item === key || _this.lastSelection === key) {
                        state_1 = -1;
                    }
                    if (_this.lastSelection === undefined) {
                        state_1 = -1;
                        value = { filtered: true, selected: false };
                    }
                    else {
                        value = { filtered: false, selected: true };
                        ++_this._selectionCount;
                    }
                }
                else if (state_1 === 0) {
                    if (item === key || _this.lastSelection === key) {
                        state_1 = 1;
                        value = { filtered: false, selected: true };
                        ++_this._selectionCount;
                    }
                    else {
                        value = { filtered: true, selected: false };
                    }
                }
                else {
                    value = { filtered: true, selected: false };
                }
                _this._.set(key, value);
            });
            this.lastSelection = item;
            if (this._selectionCount === 0 || this._selectionCount === this._.size) {
                this.clear();
            }
        }
        return this;
    };
    Slicer.prototype.toggleSingle = function (item) {
        var _this = this;
        var state = this._.get(item);
        if (state) {
            if (state.selected) {
                this.clear();
            }
            else {
                this._.forEach(function (value, key) {
                    if (item === key) {
                        value.selected = !value.selected;
                        value.filtered = !value.selected;
                    }
                    else {
                        value = { filtered: true, selected: false };
                    }
                    _this._.set(key, value);
                });
                this._selectionCount = 1;
                this.lastSelection = item;
            }
        }
        return this;
    };
    return Slicer;
}());
var nelSlicerCss = ":host{max-height:inherit;max-width:inherit}:host([disabled]),:host([disabled])>.slicer{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.slicer{-ms-flex-align:stretch;align-items:stretch;border-color:var(--border-color, #000);border-style:var(--border-style, solid);border-width:var(--border-width, 1px);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:start;justify-content:flex-start;max-height:inherit;min-width:inherit;min-height:1rem;min-width:4rem;overflow-x:hidden;overflow-y:auto;padding:var(--padding, 10px);width:var(--width, 100%)}.slicer:focus{outline:none}::slotted(.slicer-item){cursor:pointer;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";
/**
 * Organises child elements vertically or horizontally
 */
var Slicer$1 = /** @class */ (function () {
    function Slicer$1(hostRef) {
        registerInstance(this, hostRef);
        this._slicer = new Slicer();
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.clear = false;
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        this.cleared = createEvent(this, "cleared", 6);
        this.errored = createEvent(this, "errored", 6);
        this.loaded = createEvent(this, "loaded", 6);
        this.selected = createEvent(this, "selected", 6);
    }
    Slicer$1.prototype.validateClear = function (newValue) {
        if (newValue) {
            this._slicer.clear();
            for (var _i = 0, _b = Array.from(this.host.children); _i < _b.length; _i++) {
                var el = _b[_i];
                el.classList.remove("filtered");
                el.classList.remove("selected");
            }
            this.clear = false;
            this.cleared.emit(this.host);
        }
    };
    Slicer$1.prototype.componentDidLoad = function () {
        var _this = this;
        var obs = new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; ++i) {
                for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
                    var el = mutations[i].addedNodes[j];
                    if (el.classList.contains("slicer-item")) {
                        var item = el.textContent;
                        if (_this._slicer.has(item)) {
                            if (el && el.parentNode) {
                                el.parentNode.removeChild(el);
                            }
                            _this.errored.emit("Duplicate entry detected: " + item);
                        }
                        else {
                            _this._slicer.add(item);
                        }
                    }
                }
            }
        });
        obs.observe(this.host, { childList: true });
        for (var _i = 0, _b = Array.from(this.host.children); _i < _b.length; _i++) {
            var el = _b[_i];
            this._slicer.add(el.textContent);
        }
        this.loaded.emit(this.host);
    };
    Slicer$1.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    Slicer$1.prototype.onclick = function (ev) {
        if (this.disabled) {
            ev.preventDefault();
            return;
        }
        var el = ev.target;
        if (el.classList.contains("slicer-item")) {
            this._slicer.toggle(el.textContent, ev.shiftKey
                ? SlicerModifier.SHIFT_KEY
                : ev.ctrlKey
                    ? SlicerModifier.CTRL_KEY
                    : SlicerModifier.NO_KEY);
            var selection = this._slicer.selection;
            if (selection.length === 0) {
                this.clear = true;
            }
            else {
                for (var _i = 0, _b = Array.from(this.host.children); _i < _b.length; _i++) {
                    var el_1 = _b[_i];
                    if (selection.indexOf(el_1.textContent) === -1) {
                        el_1.classList.add("filtered");
                        el_1.classList.remove("selected");
                    }
                    else {
                        el_1.classList.remove("filtered");
                        el_1.classList.add("selected");
                    }
                }
            }
            this.selected.emit(selection);
        }
    };
    Slicer$1.prototype.render = function () {
        var tab = this.disabled ? undefined : 0;
        return (h("div", { class: "slicer", tabindex: tab }, h("slot", null)));
    };
    Object.defineProperty(Slicer$1.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slicer$1, "watchers", {
        get: function () {
            return {
                "clear": ["validateClear"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Slicer$1;
}());
Slicer$1.style = nelSlicerCss;
var nelStatusBadgeCss = ":host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.status-badge{-ms-flex-align:center;align-items:center;background-color:var(--background-color, #fff);border:1px solid var(--color, #330066);color:var(--color, #330066);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:var(--height, 8rem);-ms-flex-pack:justify;justify-content:space-between;margin:0.25rem;padding:0.25rem;width:var(--width, 8rem)}.status-badge>.icon{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:end;justify-content:flex-end;width:100%}.status-badge>.label{font-variant-caps:all-small-caps;font-size:1.2rem;font-weight:bold}.status-badge>.text{font-size:2rem}.diamond{border:0.5rem solid transparent;border-bottom-color:#ff0000;height:0;position:relative;top:-0.5rem;width:0}.diamond:after{content:\"\";border:0.5rem solid transparent;border-top-color:#ff0000;height:0;left:-0.5rem;position:absolute;top:0.5rem;width:0}.triangle{width:0;height:0;border-left:0.5rem solid transparent;border-right:0.5rem solid transparent;border-bottom:1rem solid #ffd700}.circle{background:#009900;border-radius:50%;height:1rem;width:1rem}";
/**
 * Displays a status badge
 */
var StatusBadge = /** @class */ (function () {
    function StatusBadge(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * Sets the text label to be applied to the element
         */
        this.label = "";
        /**
         * Sets the prefix label to be applied to the element
         */
        this.pre = "";
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        /**
         * Sets the suffix label to be applied to the element
         */
        this.suf = "";
        this.loaded = createEvent(this, "loaded", 6);
    }
    StatusBadge.prototype.componentDidLoad = function () {
        this.loaded.emit(this.host);
    };
    StatusBadge.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    StatusBadge.prototype.render = function () {
        var ico = this.rag === -1
            ? "diamond"
            : this.rag === 0
                ? "triangle"
                : this.rag === 1
                    ? "circle"
                    : "";
        return (h("div", { class: "status-badge" }, h("div", { class: "icon" }, h("div", { class: ico })), h("div", { class: "text" }, h("span", null, this.pre), h("slot", null), h("span", null, this.suf)), h("div", { class: "label" }, this.label ? " " + this.label : "")));
    };
    Object.defineProperty(StatusBadge.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return StatusBadge;
}());
StatusBadge.style = nelStatusBadgeCss;
var nelTextInputCss = ":host([disabled]){cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}input{border:2px solid #aaa;-webkit-box-sizing:border-box;box-sizing:border-box;padding:4px;outline:transparent;-webkit-transition:border-color 0.25s ease, color 0.25s ease;transition:border-color 0.25s ease, color 0.25s ease;z-index:9}input:focus{border:2px solid #000}input::-webkit-input-placeholder{color:#aaa}input::-moz-placeholder{color:#aaa}input:-ms-input-placeholder{color:#aaa}input::-ms-input-placeholder{color:#aaa}input::placeholder{color:#aaa}input::-webkit-search-cancel-button{cursor:pointer}";
/**
 * Similar in behaviour to the input element
 */
var TextInput = /** @class */ (function () {
    function TextInput(hostRef) {
        registerInstance(this, hostRef);
        this._mask = /.*/gi;
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.cleartext = true;
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * Sets a regular expression to restrict data entry to allowed characters
         */
        this.mask = "";
        /**
         * Maximum length of text entry
         */
        this.maxlength = -1;
        /**
         * Minimum length of text entry
         */
        this.minlength = -1;
        /**
         * Sets a regular expression to validate text
         */
        this.pattern = "";
        /**
         * Sets a visual text prompt as a palceholder within text box
         */
        this.placeholder = "";
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        /**
         * Width of text entry
         */
        this.width = 20;
        this.loaded = createEvent(this, "loaded", 6);
    }
    TextInput.prototype.validateMask = function (newValue) {
        this._mask = new RegExp(newValue);
    };
    TextInput.prototype.componentDidLoad = function () {
        this._input = this.host.shadowRoot.querySelector("input");
        this._mask = new RegExp(this.mask);
        this.loaded.emit(this.host);
    };
    TextInput.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    TextInput.prototype.onInput = function () {
        this.value = this._input.value;
    };
    TextInput.prototype.onKeyDown = function (ev) {
        if (this.disabled || ev.keyCode === 229) {
            return false;
        }
        if (!this._editKeyPressed(ev) && !this._mask.test(ev.key)) {
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }
        return true;
    };
    TextInput.prototype.onPaste = function (ev) {
        if (!this.disabled && ev.clipboardData) {
            var paste = ev.clipboardData.getData("text/plain");
            if (!this._mask.test(paste)) {
                ev.preventDefault();
                ev.stopPropagation();
                return false;
            }
            return true;
        }
        return false;
    };
    TextInput.prototype.onSearch = function () {
        var input = new InputEvent("input", { bubbles: true, cancelable: true });
        this.host.dispatchEvent(input);
    };
    TextInput.prototype._editKeyPressed = function (ev) {
        return ev.code === "Delete" || ev.code === "Backspace" ||
            ev.code === "ArrowLeft" || ev.code === "ArrowRight";
    };
    TextInput.prototype.render = function () {
        return (h("input", { type: this.cleartext ? "search" : "password", maxlength: this.maxlength, minlength: this.minlength, pattern: this.pattern, placeholder: this.placeholder, size: this.width, value: this.value }));
    };
    Object.defineProperty(TextInput.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextInput, "watchers", {
        get: function () {
            return {
                "mask": ["validateMask"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return TextInput;
}());
TextInput.style = nelTextInputCss;
var RGB = /** @class */ (function () {
    function RGB(value) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        value = value.toLowerCase().replace("#", "");
        var n;
        if (RGB.CSS[value] === undefined) {
            if (value.length === 3) {
                var r = value.substr(0, 1);
                this.r = this._n(parseInt("" + r + r, 16));
                var g = value.substr(1, 1);
                this.g = this._n(parseInt("" + g + g, 16));
                var b = value.substr(2, 1);
                this.b = this._n(parseInt("" + b + b, 16));
            }
            else if (value.length === 6) {
                n = parseInt(value, 16);
                this.r = this._n(this._rshift(n));
                this.g = this._n(this._gshift(n));
                this.b = this._n(this._bshift(n));
            }
        }
        else {
            n = RGB.CSS[value];
            this.r = this._n(this._rshift(n));
            this.g = this._n(this._gshift(n));
            this.b = this._n(this._bshift(n));
        }
    }
    Object.defineProperty(RGB.prototype, "brightness", {
        get: function () {
            return (this.r * 299 + this.g * 587 + this.b * 114) / 1000;
        },
        enumerable: false,
        configurable: true
    });
    RGB.prototype.colorDifference = function (compare) {
        return (Math.max(this.r, compare.r) - Math.min(this.r, compare.r)) +
            (Math.max(this.g, compare.g) - Math.min(this.g, compare.g)) +
            (Math.max(this.b, compare.b) - Math.min(this.b, compare.b));
    };
    RGB.prototype.toCSSString = function () {
        var value = parseInt(this.toHex(), 16);
        return Object.keys(RGB.CSS).find(function (key) { return RGB.CSS[key] === value; });
    };
    RGB.prototype.toHex = function () {
        return this._hex(this.r) + this._hex(this.g) + this._hex(this.b);
    };
    RGB.prototype.toString = function () {
        return "#" + this.toHex();
    };
    RGB.prototype._rshift = function (n) {
        return n >> 16 & 0xff;
    };
    RGB.prototype._gshift = function (n) {
        return n >> 8 & 0xff;
    };
    RGB.prototype._bshift = function (n) {
        return n >> 0 & 0xff;
    };
    RGB.prototype._hex = function (value) {
        return (value < 16 ? "0" : "") + value.toString(16);
    };
    RGB.prototype._n = function (n) {
        return n > 255 ? 255 : n < 0 ? 0 : n;
    };
    return RGB;
}());
RGB.brightnessThreshold = 125;
RGB.CSS = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
RGB.differenceThreshold = 500;
var nelTextTagCss = ":host([disabled]),:host([disabled])>mark{cursor:not-allowed;opacity:0.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none !important}.selectable{cursor:pointer}.text-tag:focus{-webkit-box-shadow:0 0 0 4px #ffcd60;box-shadow:0 0 0 4px #ffcd60;outline:none}mark{-webkit-box-decoration-break:clone;border-radius:0.35em;box-decoration-break:clone;line-height:1.3rem;margin:auto 0.25rem;padding:0.2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}mark>span{font-size:0.7em;font-weight:bold;text-transform:uppercase}";
/**
 * Similar in function to mark element
 */
var TextTag = /** @class */ (function () {
    function TextTag(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the background color of the element
         */
        this.color = "#eeeeee";
        /**
         * If true, allows the element to be delete using keyboard
         */
        this.deletable = false;
        /**
         * If false, element is partly greyed out and not responding to user input
         */
        this.disabled = false;
        /**
         * Sets the text label  to be applied to the element
         */
        this.label = "";
        /**
         * If true, allows the element to receive focus
         */
        this.selectable = false;
        this.deleting = createEvent(this, "deleting", 7);
        this.deleted = createEvent(this, "deleted", 7);
        this.loaded = createEvent(this, "loaded", 6);
        this.selected = createEvent(this, "selected", 7);
    }
    TextTag.prototype.componentDidLoad = function () {
        this.loaded.emit(this.host);
    };
    TextTag.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    TextTag.prototype.onClick = function (ev) {
        if (this.disabled || !this.selectable) {
            ev.preventDefault();
            return;
        }
        if (this.host.classList.contains("selected")) {
            this.host.classList.remove("selected");
        }
        else {
            this.host.classList.add("selected");
        }
        this.selected.emit(this.host);
    };
    TextTag.prototype.onKeyDown = function (ev) {
        if (this.disabled || !this.selectable || ev.keyCode === 229) {
            ev.stopImmediatePropagation();
            ev.preventDefault();
            return;
        }
        if (this.deletable && (ev.code === "Backspace" || ev.code === "Delete")) {
            this.deleting.emit(this.host);
        }
    };
    /**
     * Removes element from DOM
     */
    TextTag.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parent;
            return __generator(this, function (_b) {
                this.deleted.emit(this.host);
                parent = this.host.parentNode;
                this.host.insertAdjacentText("beforebegin", this.host.textContent || "");
                parent.removeChild(this.host);
                parent.normalize();
                return [2 /*return*/, Promise.resolve(true)];
            });
        });
    };
    TextTag.prototype.render = function () {
        var cls = this.selectable ? "selectable" : "";
        var tab = this.selectable ? 0 : undefined;
        var _foreColor = (new RGB(this.color)).brightness > RGB.brightnessThreshold
            ? "#000000"
            : "#ffffff";
        var styles = {
            "background-color": this.color,
            color: _foreColor
        };
        return (h("mark", { class: cls, tabindex: tab, style: styles }, h("slot", null), h("span", null, this.label ? " " + this.label : "")));
    };
    Object.defineProperty(TextTag.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return TextTag;
}());
TextTag.style = nelTextTagCss;
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function formatDecimal(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
        return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}
function exponent(x) {
    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
    return function (value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while (i > 0 && g > 0) {
            if (length + g + 1 > width)
                g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width)
                break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}
function formatNumerals(numerals) {
    return function (value) {
        return value.replace(/[0-9]/g, function (i) {
            return numerals[+i];
        });
    };
}
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier)))
        throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function () {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width === undefined ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
};
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (s[i]) {
            case ".":
                i0 = i1 = i;
                break;
            case "0":
                if (i0 === 0)
                    i0 = i;
                i1 = i;
                break;
            default:
                if (!+s[i])
                    break out;
                if (i0 > 0)
                    i0 = 0;
                break;
        }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
    var d = formatDecimal(x, p);
    if (!d)
        return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
            : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
                : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}
function formatRounded(x, p) {
    var d = formatDecimal(x, p);
    if (!d)
        return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
            : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}
var formatTypes = {
    "%": function (x, p) { return (x * 100).toFixed(p); },
    "b": function (x) { return Math.round(x).toString(2); },
    "c": function (x) { return x + ""; },
    "d": function (x) { return Math.round(x).toString(10); },
    "e": function (x, p) { return x.toExponential(p); },
    "f": function (x, p) { return x.toFixed(p); },
    "g": function (x, p) { return x.toPrecision(p); },
    "o": function (x) { return Math.round(x).toString(8); },
    "p": function (x, p) { return formatRounded(x * 100, p); },
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": function (x) { return Math.round(x).toString(16).toUpperCase(); },
    "x": function (x) { return Math.round(x).toString(16); }
};
function identity(x) {
    return x;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "-" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = formatSpecifier(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n")
            comma = true, type = "g";
        // The "" type, and any invalid type, is an alias for ".12~g".
        else if (!formatTypes[type])
            precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || (fill === "0" && align === "="))
            zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6
            : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
                : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            }
            else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim)
                    value = formatTrim(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+")
                    valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while (++i < n) {
                        if (c = value.charCodeAt(i), 48 > c || c > 57) {
                            valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                            value = value.slice(0, i);
                            break;
                        }
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero)
                value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero)
                value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch (align) {
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function () {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function (value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
}
var locale;
var format;
defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    minus: "-"
});
function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    return locale;
}
var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return Object.freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());
var global = typeof window !== 'undefined' ? window : {};
var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) {
        inlineSize = 0;
    }
    if (blockSize === void 0) {
        blockSize = 0;
    }
    if (switchSizes === void 0) {
        switchSizes = false;
    }
    return Object.freeze({
        inlineSize: (switchSizes ? blockSize : inlineSize) || 0,
        blockSize: (switchSizes ? inlineSize : blockSize) || 0
    });
};
var zeroBoxes = Object.freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var format2 = format(",.2f"), format1 = format(",.1f"), format0 = format(",.0f");
/**
 * Returns the x,y pair measurement
 * @param referenceElement - element to position targetElement by
 * @param targetElement - element that will receive position values
 * @param padding - (optional) additional padding to account for
 */
function positionPop(referenceElement, targetElement, padding) {
    if (padding === void 0) { padding = 0; }
    var rb = referenceElement.getBoundingClientRect();
    var tb = targetElement.getBoundingClientRect();
    var ch = document.documentElement.clientHeight;
    var cw = document.documentElement.clientWidth;
    var x = (rb.right + window.scrollX) + padding;
    var y = (rb.top + window.scrollY) - (tb.height / 2 - rb.height / 2);
    var h = "right";
    var v = "middle";
    if (y + tb.height - window.scrollY > ch) {
        v = "top";
        y = rb.top + window.scrollY - padding - tb.height;
    }
    if (y < window.scrollY) {
        v = "bottom";
        y = (rb.bottom + window.scrollY) + padding;
    }
    if (x + tb.width - window.scrollX > cw) {
        h = "left";
        x = (rb.left + window.scrollX) - padding - tb.width;
    }
    if (x < window.scrollX) {
        h = "center";
        x = (rb.left + window.scrollX) + (rb.width / 2);
    }
    return { orientX: h, orientY: v, x: x, y: y };
}
var nelTipCss = ":host{display:block}:host([show])>.tip{opacity:1 !important;pointer-events:auto !important}.hidden{display:none !important}.tip{max-height:25%;max-width:25%;min-height:50px;min-width:100px;opacity:0;pointer-events:none;position:absolute;-webkit-transition:opacity 400ms ease-in-out;transition:opacity 400ms ease-in-out}.tip-action{cursor:pointer;font-size:0.8em;margin-right:5px}.tip-panel{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;margin:1em 5px 0.4em 0;width:100%}.tip-wrapper{background-color:#fff;border:1px solid #009;margin-bottom:0;padding-bottom:0;position:relative;z-index:100000}.tip-wrapper:before{border-style:solid;content:\"\";height:0px;position:absolute;width:0px}.tip-wrapper:after{border-style:solid;content:\"\";height:0px;position:absolute;width:0px}.tip-wrapper.top-right:before{border-width:10px;border-left-color:#009;border-right-color:transparent;border-top-color:#009;border-bottom-color:transparent;bottom:-21px;left:19.5px}.tip-wrapper.top-right:after{border-width:10px;border-left-color:#fff;border-right-color:transparent;border-top-color:#fff;border-bottom-color:transparent;bottom:-19.5px;left:20px}.tip-wrapper.top-left:before{border-width:10px;border-right-color:#009;border-left-color:transparent;border-bottom-color:transparent;border-top-color:#009;bottom:-21px;right:19px}.tip-wrapper.top-left:after{border-width:10px;border-left-color:transparent;border-right-color:#fff;border-top-color:#fff;border-bottom-color:transparent;bottom:-19.5px;right:19.5px}.tip-wrapper.middle-left:before{border-width:10px;border-right-color:transparent;border-left-color:#009;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);right:-20px}.tip-wrapper.middle-left:after{border-width:10px;border-right-color:transparent;border-left-color:#fff;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);right:-19px}.tip-wrapper.middle-right:before{border-width:10px;border-right-color:#009;border-left-color:transparent;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);left:-20px}.tip-wrapper.middle-right:after{border-width:9.5px;border-right-color:#fff;border-left-color:transparent;border-bottom-color:transparent;border-top-color:transparent;top:calc(50% - 10px);left:-18.5px}.tip-wrapper.bottom-left:before{border-width:10px;border-right-color:#009;border-left-color:transparent;border-bottom-color:#009;border-top-color:transparent;top:-21px;right:19px}.tip-wrapper.bottom-left:after{border-width:10px;border-left-color:transparent;border-right-color:#fff;border-top-color:transparent;border-bottom-color:#fff;top:-19px;right:19.5px}.tip-wrapper.bottom-right:before{border-width:10px;border-right-color:transparent;border-left-color:#009;border-bottom-color:#009;border-top-color:transparent;top:-21px;left:19px}.tip-wrapper.bottom-right:after{border-width:10px;border-right-color:transparent;border-left-color:#fff;border-bottom-color:#fff;border-top-color:transparent;top:-19px;left:19.5px}.tip-message{padding:10px;width:100%}.tip-progress{border-radius:0;height:0.3em;left:0;margin:0;padding:0;position:absolute;width:100%}.tip-progress.bottom{bottom:-1px}.tip-progress.top{top:-1px}.tip-progress::-webkit-progress-bar{border-radius:0;height:0.3em;margin:0;padding:0;width:100%}.tip-progress::-webkit-progress-value{background-color:#009;border-radius:0;display:block;height:0.3em;margin:0;padding:0;width:100%}";
/**
 * Displays a content tooltip
 */
var Tip = /** @class */ (function () {
    function Tip(hostRef) {
        registerInstance(this, hostRef);
        this._left = 0;
        this._padding = 20;
        this._paused = false;
        this._pointer = "";
        this._position = { orientX: "left", orientY: "top", x: -1, y: -1 };
        this._top = 0;
        /**
         * Hides the visible tip after n milliseconds. 0 (disabled) is default
         */
        this.expires = 0;
        /**
         * If true, element is visible
         */
        this.for = "";
        /**
         * True when element can correctly respond to external programmatic access
         */
        this.ready = false;
        /**
         * If true, element is visible
         */
        this.show = false;
        this.loaded = createEvent(this, "loaded", 6);
        this.changed = createEvent(this, "changed", 7);
    }
    Tip.prototype.validateExpires = function () {
        this._progressCount = 0;
        if (this.expires) {
            this._panel.classList.remove("hidden");
            this._progress.classList.remove("hidden");
        }
        else {
            this._panel.classList.add("hidden");
            this._progress.classList.add("hidden");
        }
    };
    Tip.prototype.validateFor = function () {
        if (this.for) {
            this._for = document.getElementById(this.for);
            this._position = positionPop(this._for, this._tip);
            var adjLeft = this._position.orientY === "middle"
                ? (this._position.orientX === "left" ? -this._padding : this._padding) * 0.5
                : (this._position.orientX === "left" ? this._padding : -this._padding) * 1.5;
            var adjTop = this._position.orientY === "top"
                ? -this._padding
                : this._position.orientY === "bottom"
                    ? this._padding
                    : 0;
            this._top = this._position.y + adjTop;
            this._left = this._position.x + adjLeft;
            this._pointer = this._position.orientY + "-" + this._position.orientX;
        }
    };
    Tip.prototype.validateShow = function () {
        this._tip.style.opacity = this.show ? "1" : "0";
        if (this.show) {
            this._startTimer();
        }
        else {
            this._clearTimer();
        }
        this.changed.emit(this.host);
    };
    Tip.prototype.componentDidLoad = function () {
        var _this = this;
        this.loaded.emit(this.host);
        this._tip = this.host.shadowRoot.querySelector(".tip");
        this._panel = this._tip.querySelector(".tip-panel");
        this._progress = this._tip.querySelector(".tip-progress");
        this._pause = this._panel.querySelector(".tip-action");
        this._pause.addEventListener("click", function () {
            if (_this._paused) {
                _this._startTimer();
                _this._paused = false;
            }
            else {
                _this._pause.textContent = "resume";
                _this._paused = true;
                clearInterval(_this._timerProgress);
                _this._timerProgress = null;
            }
        });
    };
    Tip.prototype.componentWillLoad = function () {
        this.ready = true;
    };
    Tip.prototype._clearTimer = function () {
        clearInterval(this._timerProgress);
        this._paused = false;
        this._timerProgress = null;
    };
    Tip.prototype._startTimer = function () {
        var _this = this;
        if (this.show && this.expires) {
            this._pause.textContent = "pause";
            if (!this._paused) {
                this._progressCount = this.expires / 100;
                this._progress.max = this.expires;
                this._progress.value = 0;
            }
            this._timerProgress = setInterval(function () {
                _this._progress.value += _this._progressCount;
                if (_this._progress.value >= _this._progress.max) {
                    _this._clearTimer();
                    _this.show = false;
                }
            }, this._progressCount);
        }
    };
    Tip.prototype.render = function () {
        var pos = { left: this._left + "px", top: this._top + "px" };
        var cls = "tip";
        var clsWrapper = "tip-wrapper " + this._pointer;
        var clsPanel = "tip-panel" + (this.expires ? "" : " hidden");
        var clsBar = "tip-progress" + (this.expires ? "" : " hidden") + " " + this._position.orientY;
        return (h(Host, null, h("div", { class: cls, style: pos }, h("div", { class: clsWrapper }, h("progress", { class: clsBar, max: "100", value: "0" }), h("div", { class: "tip-message" }, h("slot", null)), h("div", { class: clsPanel }, h("span", { class: "tip-action" }, "pause"))))));
    };
    Object.defineProperty(Tip.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tip, "watchers", {
        get: function () {
            return {
                "expires": ["validateExpires"],
                "for": ["validateFor"],
                "show": ["validateShow"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Tip;
}());
Tip.style = nelTipCss;
export { ExpandItem as nel_expand_item, ItemCollection as nel_item_collection, ListItem as nel_list_item, ModalView as nel_modal_view, NetworkConnection as nel_network_connection, OnOff as nel_on_off, Slicer$1 as nel_slicer, StatusBadge as nel_status_badge, TextInput as nel_text_input, TextTag as nel_text_tag, Tip as nel_tip };
