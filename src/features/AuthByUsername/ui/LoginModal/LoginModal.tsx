import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import style from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isVisible: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isVisible, onClose }: LoginModalProps) => (
  <Modal
    className={classNames(style.loginModal, {}, [className])}
    isVisible={isVisible}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
