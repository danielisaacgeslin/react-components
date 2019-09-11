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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ClickOutsideListener = /** @class */ (function (_super) {
    __extends(ClickOutsideListener, _super);
    function ClickOutsideListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        _this.handleClick = function (event) {
            var onClickOutside = _this.props.onClickOutside;
            var insideRef = _this.props.insideRef || _this.ref.current;
            if (insideRef && !insideRef.contains(event.target))
                onClickOutside();
        };
        return _this;
    }
    ClickOutsideListener.prototype.componentDidMount = function () {
        var document = this.props.document;
        document.addEventListener('mousedown', this.handleClick);
    };
    ClickOutsideListener.prototype.componentWillUnmount = function () {
        var document = this.props.document;
        document.removeEventListener('mousedown', this.handleClick);
    };
    ClickOutsideListener.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", { key: "click-outside-listener", ref: this.ref }, children));
    };
    ClickOutsideListener.defaultProps = {
        document: window.document,
        insideRef: null,
        onClickOutside: /* istanbul ignore next */ function () { return null; }
    };
    return ClickOutsideListener;
}(React.PureComponent));
exports.default = ClickOutsideListener;
//# sourceMappingURL=ClickOutsideListener.js.map