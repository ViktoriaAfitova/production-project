import { VerticalStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../store/api';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import style from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = ({
  className,
}: NotificationListProps) => {
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VerticalStack
        gap="16"
        max
        className={classNames(style.notificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VerticalStack>
    );
  }

  return (
    <VerticalStack
      gap="16"
      max
      className={classNames(style.notificationList, {}, [className])}
    >
      {data?.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
        />
      ))}
    </VerticalStack>
  );
};
