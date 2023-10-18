import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import AboutIcon from 'shared/assets/icons/aboutIcon.svg';
import ProfileIcon from 'shared/assets/icons/profileIcon.svg';
import ArticleIcon from 'shared/assets/icons/articleIcon.svg';

export interface SidebarLinks {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarLinksList: SidebarLinks[] = [
  {
    path: RoutePath.home,
    Icon: HomeIcon,
    text: 'Home',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'About',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'Article',
    authOnly: true,
  },
];
