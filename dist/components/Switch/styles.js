"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
exports.default = no_important_1.StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        cursor: 'pointer',
        backgroundColor: '#444444',
        transition: '.4s',
        borderRadius: 34
    },
    disabled: {
        opacity: 0.5
    },
    ball: {
        backgroundColor: 'white',
        borderRadius: '100%',
        width: 22,
        minWidth: 22,
        maxWidth: 22,
        height: 22,
        minHeight: 22,
        maxHeight: 22
    },
    ballChecked: {
        flexDirection: 'row-reverse',
        right: 0,
        left: 'initial'
    },
    ballContainer: {
        padding: '0 5px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    label: {
        color: '#FFFFFF',
        fontSize: 13,
        paddingLeft: 3,
        paddingRight: 3
    }
});
//# sourceMappingURL=styles.js.map