"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("react-responsive-modal/styles.css");
var react_responsive_modal_1 = require("react-responsive-modal");
var ModalForm = function () {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var onOpenModal = function () { return setOpen(true); };
    var onCloseModal = function () { return setOpen(false); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: onOpenModal }, "Open modal"),
        react_1.default.createElement(react_responsive_modal_1.Modal, { open: open, onClose: onCloseModal, center: true },
            react_1.default.createElement("h2", null, "Simple centered modal"),
            react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."))));
};
exports.default = ModalForm;
//# sourceMappingURL=index.js.map