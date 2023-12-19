import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
  isUserAdmin, isUserManager, selectUserAuthData, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const authData = useSelector(selectUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onCloseModal = useCallback(() => {
    setAuthModalVisible(false);
  }, []);

  const onShowModal = useCallback(() => {
    setAuthModalVisible(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(style.navbar, {}, [className])}>
        <Text
          className={style.appName}
          title={t('app')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.articleCreate}
          color={AppLinkColor.Secondary}
          className={style.create}
        >
          {t('Create article')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={style.dropdown}
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('Admin'),
              href: RoutePath.adminPanel,
            }] : []),
            {
              content: t('Profile'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('Log out'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames(style.navbar, {}, [className])}>
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
    </header>
  );
});
