import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setAuthModalVisible(false);
  }, []);

  const onShowModal = useCallback(() => {
    setAuthModalVisible(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(style.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.ClearInverted}
          className={style.links}
          onClick={onLogout}
        >
          {t('Log out')}
        </Button>
        <LoginModal isVisible={authModalVisible} onClose={onCloseModal} />
      </div>
    );
  }

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.ClearInverted}
        className={style.links}
        onClick={onShowModal}
      >
        {t('Sign in')}
      </Button>
      {authModalVisible && (
        <LoginModal
          isVisible={authModalVisible}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
});
