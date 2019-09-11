"use strict";
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
var styles_1 = __importDefault(require("./styles"));
var Dropdown = function (_a) {
    var isOpen = _a.isOpen, top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right, small = _a.small, children = _a.children;
    var handleClick = react_1.useCallback(function (event) { return event.stopPropagation(); }, []);
    return (react_1.default.createElement("div", { key: "Dropdown", className: no_important_1.css([styles_1.default.container, isOpen && styles_1.default.open, small && styles_1.default.small]), style: { top: top, bottom: bottom, left: left, right: right }, onClick: handleClick }, isOpen && children));
};
exports.default = react_1.memo(Dropdown);
//# sourceMappingURL=Dropdown.js.map