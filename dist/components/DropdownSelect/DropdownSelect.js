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
var React = __importStar(require("react"));
var no_important_1 = require("aphrodite/no-important");
var ClickOutsideListener_1 = __importDefault(require("../ClickOutsideListener"));
var Icon_1 = __importDefault(require("../Icon"));
var Checkbox_1 = __importDefault(require("../Checkbox"));
var styles_1 = __importDefault(require("./styles"));
var DropdownSelect = /** @class */ (function (_super) {
    __extends(DropdownSelect, _super);
    function DropdownSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: [],
            tempValue: [],
            isOpen: false
        };
        _this.ref = React.createRef();
        _this.toggleOpen = function (open) { return function () {
            var _a = _this.props, onClose = _a.onClose, onOpen = _a.onOpen;
            var _b = _this.state, tempValue = _b.tempValue, isOpen = _b.isOpen;
            if (open === isOpen)
                return;
            _this.setState({ isOpen: open });
            if (!open) {
                _this.setState({ value: tempValue });
                onClose(tempValue);
            }
            else {
                onOpen();
            }
        }; };
        _this.toggleOption = function (selected, isTemp) { return function () {
            var onClose = _this.props.onClose;
            var _a = _this.state, tempValue = _a.tempValue, value = _a.value;
            var newValue = tempValue.includes(selected) ? tempValue.filter(function (v) { return v !== selected; }) : tempValue.concat([selected]);
            _this.setState({ tempValue: newValue, value: isTemp ? value : newValue });
            if (!isTemp)
                onClose(newValue);
        }; };
        _this.clear = function () {
            _this.setState({ tempValue: [] });
        };
        return _this;
    }
    DropdownSelect.prototype.componentDidMount = function () {
        var _a = this.props, optionList = _a.optionList, initialValue = _a.initialValue, onClose = _a.onClose;
        var value = initialValue.filter(function (v) { return !!optionList.find(function (option) { return option.value === v; }); });
        this.setState({ value: value, tempValue: value });
        onClose(value);
    };
    DropdownSelect.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, optionList = _a.optionList, showChips = _a.showChips;
        var _b = this.state, isOpen = _b.isOpen, value = _b.value, tempValue = _b.tempValue;
        var optionMap = optionList.reduce(function (total, curr) {
            var _a;
            return (__assign({}, total, (_a = {}, _a[curr.value] = curr.label, _a)));
        }, {});
        return (React.createElement("div", { key: "DropdownSelect", className: no_important_1.css(styles_1.default.container) },
            React.createElement(ClickOutsideListener_1.default, { onClickOutside: this.toggleOpen(false) },
                React.createElement("button", { type: "button", className: no_important_1.css(styles_1.default.button, styles_1.default.box), onClick: this.toggleOpen(true) },
                    React.createElement("span", { className: no_important_1.css(styles_1.default.buttonWrapper) },
                        (showChips || !value.length) && label,
                        !showChips && !!value.length && label + " (" + value.length + ")",
                        React.createElement(Icon_1.default, { icon: "chevron-down", size: "sm", className: no_important_1.css(styles_1.default.caret, isOpen && styles_1.default.caretRotate) }))),
                showChips &&
                    value.map(function (itemValue) { return (React.createElement("span", { key: itemValue, onClick: !isOpen
                            ? _this.toggleOption(itemValue, false)
                            : function () {
                                /** */
                            }, className: no_important_1.css(styles_1.default.chip), "data-testid": "chip" },
                        optionMap[itemValue],
                        " ",
                        React.createElement(Icon_1.default, { icon: "times" }))); }),
                React.createElement("div", { className: no_important_1.css(styles_1.default.dropdownContainer) }, isOpen && (React.createElement("div", { className: no_important_1.css(styles_1.default.dropdownBody, styles_1.default.box) },
                    optionList.map(function (option) { return (React.createElement("div", { className: no_important_1.css(styles_1.default.option), key: option.value, onClick: _this.toggleOption(option.value, true), "data-testid": "dropdown-option" },
                        React.createElement(Checkbox_1.default, { checked: tempValue.includes(option.value) }),
                        React.createElement("span", { className: no_important_1.css(styles_1.default.optionLabel) }, String(option.value)))); }),
                    React.createElement("button", { className: no_important_1.css(styles_1.default.clear), type: "button", onClick: this.clear }, "Clear")))))));
    };
    DropdownSelect.defaultProps = {
        label: 'select options',
        initialValue: [],
        optionList: [],
        showChips: true,
        onOpen: /* istanbul ignore next */ function () { return null; },
        onClose: /* istanbul ignore next */ function () { return null; }
    };
    return DropdownSelect;
}(React.PureComponent));
exports.default = DropdownSelect;
//# sourceMappingURL=DropdownSelect.js.map