import { UserRole } from 'entities/User';
import { AboutPage } from 'pages/About';
import { AdminPanelPage } from 'pages/AdminPanel';
import { ArticleEditPage } from 'pages/ArticleEdit';
import { ArticlesPage } from 'pages/Articles';
import { ArticleDetailsPage } from 'pages/ArticlesDetails';
import { ForbiddenPage } from 'pages/Forbidden';
import { HomePage } from 'pages/Home';
import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
}

export enum AppRoutes {
  Home = 'home',
  About = 'about',
  Profile = 'profile',
  Articles = 'articles',
  ArticleDetails = 'articleDetails',
  ArticleCreate = 'articleCreate',
  ArticleEdit = 'articleEdit',
  AdminPanel = 'adminPanel',
  Forbidden = 'forbidden',
  NotFound = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Profile]: '/profile/',
  [AppRoutes.Articles]: '/articles',
  [AppRoutes.ArticleDetails]: '/articles/',
  [AppRoutes.ArticleCreate]: '/articles/create',
  [AppRoutes.ArticleEdit]: '/articles/:id/edit',
  [AppRoutes.AdminPanel]: '/admin',
  [AppRoutes.Forbidden]: '/forbidden',
  [AppRoutes.NotFound]: '*',
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
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
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
  [AppRoutes.ArticleCreate]: {
    path: `${RoutePath.articleCreate}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ArticleEdit]: {
    path: `${RoutePath.articleEdit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.AdminPanel]: {
    path: `${RoutePath.adminPanel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.Forbidden]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
  },
  [AppRoutes.NotFound]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
