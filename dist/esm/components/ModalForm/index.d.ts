import { FC, PropsWithChildren } from 'react';
import './styles.css';
type Props = {
    isOpen: boolean;
    onClose: () => void;
};
declare const ModalForm: FC<PropsWithChildren<Props>>;
export default ModalForm;
