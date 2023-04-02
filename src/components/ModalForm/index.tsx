import React, { FC, PropsWithChildren, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

type Props = {
  isOpen: boolean
  onClose: () => void
}

const ModalForm: FC<PropsWithChildren<Props>> = ({
  isOpen,
  children,
  onClose = () => {}
}) => {
  return (
    <div>
      <Modal open={isOpen} onClose={onClose} center>
        {children}
      </Modal>
    </div>
  );
};

export default ModalForm