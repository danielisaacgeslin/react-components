"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var no_important_1 = require("aphrodite/no-important");
var Icon_1 = __importDefault(require("../Icon"));
var styles_1 = __importDefault(require("./styles"));
var Collapsible = /** @class */ (function (_super) {
    __extends(Collapsible, _super);
    function Collapsible() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
            height: 0
        };
        _this.ref = react_1.default.createRef();
        _this.toggleCollapsible = function () { return _this.setState(function (state) { return (__assign({}, state, { isOpen: !state.isOpen })); }); };
        return _this;
    }
    Collapsible.prototype.componentDidMount = function () {
        var defaultOpen = this.props.defaultOpen;
        this.setState({ isOpen: defaultOpen });
    };
    Collapsible.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        var height = prevState.height;
        setTimeout(function () {
            /* istanbul ignore if */
            if (_this.ref.current && _this.ref.current.scrollHeight !== height)
                _this.setState({ height: _this.ref.current.scrollHeight });
        });
    };
    Collapsible.prototype.render = function () {
        var _a = this.props, children = _a.children, title = _a.title, iconOpen = _a.iconOpen, iconCollapsed = _a.iconCollapsed;
        var _b = this.state, isOpen = _b.isOpen, height = _b.height;
        return (react_1.default.createElement("div", { key: "Collapsible" },
            react_1.default.createElement("header", { className: no_important_1.css(styles_1.default.header) },
                typeof title === 'string' ? react_1.default.createElement("span", { className: no_important_1.css(styles_1.default.title) }, title) : title,
                react_1.default.createElement("div", { "data-attribute": "button-toggle", className: no_important_1.css(styles_1.default.icon), onClick: this.toggleCollapsible }, isOpen ? iconOpen : iconCollapsed)),
            react_1.default.createElement("div", { ref: this.ref, className: no_important_1.css(styles_1.default.bodyContainer), style: { height: isOpen ? height : 0 } }, children)));
    };
    Collapsible.defaultProps = {
        defaultOpen: true,
        iconOpen: react_1.default.createElement(Icon_1.default, { icon: 'angle-up' }),
        iconCollapsed: react_1.default.createElement(Icon_1.default, { icon: 'angle-down' })
    };
    return Collapsible;
}(react_1.PureComponent));
exports.default = Collapsible;
//# sourceMappingURL=Collapsible.js.map