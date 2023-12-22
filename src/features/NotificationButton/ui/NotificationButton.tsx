import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/notificationIcon.svg';
import style from './NotificationButton.module.scss';

export const NotificationButton = () => {
  return (
    <Popover
      direction="bottom left"
      trigger={(
        <Button theme={ButtonTheme.Clear}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      )}
    >
      <NotificationList className={style.notifications} />
    </Popover>
  );
};
