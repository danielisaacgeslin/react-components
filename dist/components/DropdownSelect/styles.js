"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var general_1 = require("utils/dist/models/general");
var utils_1 = require("utils/dist/utils");
exports.default = no_important_1.StyleSheet.create({
    container: {
        display: 'inline-block',
        fontSize: 12
    },
    dropdownContainer: {
        position: 'relative'
    },
    dropdownBody: {
        position: 'absolute',
        left: 0,
        top: 5,
        minWidth: '100%',
        boxSizing: 'border-box',
        background: general_1.Color.WHITE,
        padding: 12,
        boxShadow: '0 1px 5px 0 ' + utils_1.hexToRgba(general_1.Color.GRAY, 25),
        zIndex: 300
    },
    box: {
        border: '1px solid ' + utils_1.hexToRgba(general_1.Color.GRAY, 25),
        borderRadius: 5
    },
    clear: {
        appearance: 'none',
        padding: '10px 0 0',
        border: 0,
        fontSize: 14,
        fontWeigh: 300,
        background: 'transparent',
        color: general_1.Color.GRAY,
        cursor: 'pointer'
    },
    option: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 10
    },
    optionLabel: {
        display: 'inline-block',
        marginLeft: 7,
        textTransform: 'initial',
        whiteSpace: 'nowrap'
    },
    chip: {
        cursor: 'pointer',
        paddingLeft: 7
    },
    button: {
        appearance: 'none',
        padding: '0 7px',
        lineHeight: '32px',
        color: general_1.Color.GRAY,
        backgroundColor: general_1.Color.WHITE
    },
    buttonWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    caret: {
        marginLeft: 10
    },
    caretRotate: {
        transform: 'rotate(180deg)'
    }
});
//# sourceMappingURL=styles.js.map