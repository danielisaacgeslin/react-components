"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var general_1 = require("utils/dist/models/general");
var utils_1 = require("utils/dist/utils");
var check_svg_1 = __importDefault(require("../../assets/images/check.svg"));
exports.default = no_important_1.StyleSheet.create({
    block: {
        appearance: 'none',
        position: 'relative',
        outline: 0,
        cursor: 'pointer',
        width: 18,
        height: 18,
        display: 'inline-block',
        ':before': {
            content: '""',
            position: 'absolute',
            display: 'block',
            width: 18,
            height: 18,
            border: "1px solid " + utils_1.hexToRgba(general_1.Color.GRAY, 70)
        },
        ':after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            width: 18,
            height: 18,
            border: "1px solid transparent"
        },
        ':checked': {
            ':before': {
                backgroundColor: general_1.Color.BLACK,
                border: "1px solid " + general_1.Color.BLACK
            },
            ':after': {
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: "url(" + check_svg_1.default + ")"
            }
        },
        ':disabled': {
            opacity: 0.45
        }
    },
    checkboxType: {
        ':before': {
            borderRadius: 4
        },
        ':after': {
            borderRadius: 4
        }
    },
    radioType: {
        ':before': {
            borderRadius: '100%'
        },
        ':after': {
            borderRadius: '100%'
        }
    }
});
//# sourceMappingURL=styles.js.map