import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setAuthModalVisible(!authModalVisible);
  }, [authModalVisible]);

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.ClearInverted}
        className={style.links}
        onClick={toggleAuthModal}
      >
        {t('Sign in')}
      </Button>
      <Modal isVisible={authModalVisible} onClose={toggleAuthModal}>
        {/* eslint-disable-next-line */}
        {t("Hello! I'm a Modal window")}
      </Modal>
    </div>
  );
}
