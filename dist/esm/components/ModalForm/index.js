import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
var ModalForm = function () {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var onOpenModal = function () { return setOpen(true); };
    var onCloseModal = function () { return setOpen(false); };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: onOpenModal }, "Open modal"),
        React.createElement(Modal, { open: open, onClose: onCloseModal, center: true },
            React.createElement("h2", null, "Simple centered modal"),
            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."))));
};
export default ModalForm;
//# sourceMappingURL=index.js.map