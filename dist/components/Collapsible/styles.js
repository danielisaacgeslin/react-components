"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var constants_1 = require("../../constants");
exports.default = no_important_1.StyleSheet.create({
    bodyContainer: {
        display: 'flex',
        overflow: 'hidden',
        flexWrap: 'wrap',
        transition: 'all 0.3s',
        flex: 0
    },
    bodyContainerOpen: {
        flex: 1
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    title: {
        textTransform: 'capitalize',
        fontSize: constants_1.STYLE.FONT.SIZE.P
    },
    icon: {
        cursor: 'pointer'
    }
});
//# sourceMappingURL=styles.js.map