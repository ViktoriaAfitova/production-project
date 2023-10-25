import { AboutPage } from 'pages/About';
import { ArticlesPage } from 'pages/Articles';
import { ArticleDetailsPage } from 'pages/ArticlesDetails';
import { HomePage } from 'pages/Home';
import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  Home = 'home',
  About = 'about',
  Profile = 'profile',
  NotFound = 'notFound',
  Articles = 'articles',
  ArticleDetails = 'articleDetails',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Profile]: '/profile/', // + :id
  [AppRoutes.NotFound]: '*',
  [AppRoutes.Articles]: '/articles',
  [AppRoutes.ArticleDetails]: '/articles/', // + :id
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Home]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.About]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.Profile]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NotFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
  [AppRoutes.Articles]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ArticleDetails]: {
    path: `${RoutePath.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
};
