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
var react_1 = __importStar(require("react"));
var no_important_1 = require("aphrodite/no-important");
var Icon_1 = __importDefault(require("../Icon/Icon"));
var styles_1 = __importDefault(require("./styles"));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* istanbul ignore next line */
        _this.state = {
            isOpen: false,
            title: 'default',
            body: react_1.default.createElement("div", null),
            confirmText: 'Confirm',
            cancelText: 'Cancel',
            disabled: false,
            onConfirm: function () {
                /** */
            },
            onCancel: function () {
                /** */
            }
        };
        _this.close = function () { return _this.setState({ isOpen: false }); };
        _this.wrapOnClose = function (fn) { return function () {
            fn();
            _this.close();
        }; };
        return _this;
    }
    Modal.prototype.render = function () {
        var _a = this.state, isOpen = _a.isOpen, title = _a.title, body = _a.body, onConfirm = _a.onConfirm, onCancel = _a.onCancel, confirmText = _a.confirmText, confirmColor = _a.confirmColor, confirmBackground = _a.confirmBackground, cancelText = _a.cancelText, cancelColor = _a.cancelColor, cancelBackground = _a.cancelBackground, disabled = _a.disabled, invertBtns = _a.invertBtns;
        return (isOpen && (react_1.default.createElement("div", { "data-testid": "modal", key: "Modal", className: no_important_1.css(styles_1.default.backdrop) },
            react_1.default.createElement("div", { className: no_important_1.css([styles_1.default.container, isOpen && styles_1.default.open]) },
                react_1.default.createElement("header", { className: no_important_1.css(styles_1.default.headerContainer) },
                    react_1.default.createElement("span", { className: no_important_1.css(styles_1.default.title) }, title),
                    react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.headerBtn), onClick: this.wrapOnClose(onCancel) },
                        react_1.default.createElement(Icon_1.default, { icon: "times" }))),
                react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.bodyContainer) }, body),
                react_1.default.createElement("footer", { className: no_important_1.css([styles_1.default.footerContainer, invertBtns && styles_1.default.invertedFooterContainer]) },
                    react_1.default.createElement("button", { "data-testid": "modal-cancel", className: no_important_1.css(styles_1.default.btn), style: invertBtns ? { color: confirmColor, background: confirmBackground } : { color: cancelColor, background: cancelBackground }, onClick: this.wrapOnClose(onCancel) }, cancelText),
                    react_1.default.createElement("button", { "data-testid": "modal-confirm", disabled: disabled, className: no_important_1.css([styles_1.default.btn, disabled && styles_1.default.disabled]), style: invertBtns ? { color: cancelColor, background: cancelBackground } : { color: confirmColor, background: confirmBackground }, onClick: this.wrapOnClose(onConfirm) }, confirmText))))));
    };
    return Modal;
}(react_1.PureComponent));
exports.default = Modal;
//# sourceMappingURL=ModalComponent.js.map