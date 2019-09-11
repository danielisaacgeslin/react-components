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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var no_important_1 = require("aphrodite/no-important");
var styles_1 = __importDefault(require("./styles"));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function () {
            var _a = _this.props, disabled = _a.disabled, onChange = _a.onChange;
            if (!disabled)
                onChange();
        };
        return _this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, checked = _a.checked, disabled = _a.disabled, checkedColor = _a.checkedColor, unCheckedColor = _a.unCheckedColor, checkedLabel = _a.checkedLabel, unCheckedLabel = _a.unCheckedLabel;
        var hasLabel = !!(checkedLabel || unCheckedLabel);
        return (React.createElement("div", { key: "Switch", style: { display: 'inline-block' }, onClick: this.onChange },
            React.createElement("label", { className: no_important_1.css(styles_1.default.container, disabled && styles_1.default.disabled), style: { width: hasLabel ? 75 : 50, backgroundColor: checked ? checkedColor : unCheckedColor } },
                React.createElement("div", { className: no_important_1.css([styles_1.default.ballContainer, checked && styles_1.default.ballChecked]) },
                    hasLabel && React.createElement("span", { className: no_important_1.css(styles_1.default.label) }, checked ? checkedLabel : unCheckedLabel),
                    React.createElement("div", { className: no_important_1.css(styles_1.default.ball) })))));
    };
    Switch.defaultProps = {
        disabled: false,
        checkedColor: '#444444',
        unCheckedColor: '#CCCCCC',
        checkedLabel: '',
        unCheckedLabel: ''
    };
    return Switch;
}(React.PureComponent));
exports.default = Switch;
//# sourceMappingURL=Switch.js.map