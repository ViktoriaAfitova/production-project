import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { Notification } from '../../model/types';
import style from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem = ({
  className,
  notification,
}: NotificationItemProps) => {
  const notificationContent = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(style.notificationItem, {}, [className])}
    >
      <Text
        title={notification.title}
        text={notification.description}
      />
    </Card>
  );

  if (notification.href) {
    return (
      <a
        target="_blank"
        href={notification.href}
        className={classNames(style.link, {}, [className])}
        rel="noreferrer"
      >
        {notificationContent}
      </a>
    );
  }

  return notificationContent;
};
