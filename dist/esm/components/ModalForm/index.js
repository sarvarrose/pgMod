import React from 'react';
import './styles.css';
import { Modal } from 'react-responsive-modal';
var ModalForm = function (_a) {
    var isOpen = _a.isOpen, children = _a.children, onClose = _a.onClose;
    return (React.createElement("div", null,
        React.createElement(Modal, { open: isOpen, onClose: onClose, center: true }, children)));
};
export default ModalForm;
//# sourceMappingURL=index.js.map