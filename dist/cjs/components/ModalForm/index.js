"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
require("./styles.css");
var react_responsive_modal_1 = require("react-responsive-modal");
var ModalForm = function (_a) {
    var isOpen = _a.isOpen, children = _a.children, onClose = _a.onClose;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_responsive_modal_1.Modal, { open: isOpen, onClose: onClose, center: true }, children)));
};
exports.default = ModalForm;
//# sourceMappingURL=index.js.map