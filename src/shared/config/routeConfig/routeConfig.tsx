import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  Home = 'home',
  About = 'about',
  NotFound = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.NotFound]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.About]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NotFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
