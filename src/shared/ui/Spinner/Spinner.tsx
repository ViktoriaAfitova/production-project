import { classNames } from 'shared/lib/classNames/classNames';
import './Spinner.scss';

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
