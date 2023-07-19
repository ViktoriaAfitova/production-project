import { classNames } from "shared/lib/classNames/classNames";
import { Spinner } from "shared/ui/Spinner/Spinner";
import style from "./Loader.module.scss";

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
