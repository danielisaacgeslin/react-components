"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var general_1 = require("utils/dist/models/general");
var utils_1 = require("utils/dist/utils");
exports.default = no_important_1.StyleSheet.create({
    container: {
        width: '100%',
        color: general_1.Color.BLACK
    },
    selectedContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        border: "1px solid " + utils_1.hexToRgba(general_1.Color.GRAY, 50),
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    optionListContainer: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        margin: '0 -15px',
        backgroundColor: general_1.Color.WHITE
    },
    optionContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        cursor: 'pointer',
        transition: 'all 0.1s',
        ':hover': {
            backgroundColor: utils_1.hexToRgba(general_1.Color.BLACK, 7)
        }
    },
    active: {
        backgroundColor: utils_1.hexToRgba(general_1.Color.BLACK, 11)
    }
});
//# sourceMappingURL=styles.js.map