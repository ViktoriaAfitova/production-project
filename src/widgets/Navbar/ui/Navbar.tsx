import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HorizontalStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const authData = useSelector(selectUserAuthData);

  const onCloseModal = useCallback(() => {
    setAuthModalVisible(false);
  }, []);

  const onShowModal = useCallback(() => {
    setAuthModalVisible(true);
  }, []);

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
        <HorizontalStack gap="16" className={style.container}>
          <NotificationButton />
          <AvatarDropdown />
        </HorizontalStack>
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
