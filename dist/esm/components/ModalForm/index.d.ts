import { FC, PropsWithChildren } from 'react';
import 'react-responsive-modal/styles.css';
type Props = {
    isOpen: boolean;
    onClose: () => void;
};
declare const ModalForm: FC<PropsWithChildren<Props>>;
export default ModalForm;
