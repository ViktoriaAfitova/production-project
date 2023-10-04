import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'widgets/Loader/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
