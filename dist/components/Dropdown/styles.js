"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var general_1 = require("utils/dist/models/general");
var utils_1 = require("utils/dist/utils");
exports.default = no_important_1.StyleSheet.create({
    container: {
        position: 'absolute',
        boxShadow: "0 1px 5px 0 " + utils_1.hexToRgba(general_1.Color.BLACK, 20),
        backgroundColor: general_1.Color.WHITE,
        zIndex: 200,
        borderRadius: 3,
        padding: '10px 15px',
        opacity: 0,
        color: general_1.Color.GRAY,
        fontSize: 15
    },
    open: {
        opacity: 1
    },
    small: {
        borderRadius: 100,
        padding: '7px 10px'
    }
});
//# sourceMappingURL=styles.js.map