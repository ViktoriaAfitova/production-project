import { classNames } from "shared/lib/classNames/classNames";
import style from "./Loader.module.scss";
import { Spinner } from "shared/ui/Spinner/Spinner";

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className={classNames(style.loader, {}, [className])}>
      <Spinner />
    </div>
  );
}
