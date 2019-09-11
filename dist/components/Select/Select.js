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
var Icon_1 = __importDefault(require("../Icon"));
var Dropdown_1 = __importDefault(require("../Dropdown"));
var styles_1 = __importDefault(require("./styles"));
var index_1 = require("../index");
var Select = function (_a) {
    var value = _a.value, optionList = _a.optionList, _b = _a.maxHeight, maxHeight = _b === void 0 ? 350 : _b, onChange = _a.onChange, keyExtractor = _a.keyExtractor, renderSelected = _a.renderSelected, renderOption = _a.renderOption;
    var _c = react_1.useState(false), isOpen = _c[0], setOpen = _c[1];
    var open = react_1.useCallback(function () { return setOpen(true); }, [setOpen]);
    var close = react_1.useCallback(function () { return setOpen(false); }, [setOpen]);
    var ref = react_1.useRef();
    var onSelect = react_1.useCallback(function (option) { return function () {
        onChange(option);
        close();
    }; }, [onChange, close]);
    return (react_1.default.createElement("div", { ref: ref, key: "Select", className: no_important_1.css(styles_1.default.container) },
        react_1.default.createElement(index_1.ClickOutsideListener, { onClickOutside: close },
            react_1.default.createElement("div", { "data-testid": "select", className: no_important_1.css(styles_1.default.selectedContainer), onClick: open },
                react_1.default.createElement("div", null, renderSelected(value)),
                react_1.default.createElement(Icon_1.default, { icon: "angle-down" })),
            react_1.default.createElement(Dropdown_1.default, { isOpen: isOpen },
                react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.optionListContainer), style: { width: ref.current && ref.current.offsetWidth, maxHeight: maxHeight } }, optionList.map(function (option) { return (react_1.default.createElement("div", { "data-testid": "select-option", className: no_important_1.css([styles_1.default.optionContainer, value === option && styles_1.default.active]), key: keyExtractor(option), onClick: onSelect(option) }, renderOption(option))); }))))));
};
exports.default = react_1.memo(Select);
//# sourceMappingURL=Select.js.map