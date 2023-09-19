import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isVisible: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isVisible, onClose }: LoginModalProps) => (
  <Modal
    className={classNames('', {}, [className])}
    isVisible={isVisible}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
