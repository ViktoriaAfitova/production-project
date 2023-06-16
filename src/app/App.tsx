import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
