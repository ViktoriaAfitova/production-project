import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/homeIcon.svg';
import AboutIcon from 'shared/assets/icons/aboutIcon.svg';
import ProfileIcon from 'shared/assets/icons/profileIcon.svg';
import ArticleIcon from 'shared/assets/icons/articleIcon.svg';
import { SidebarLinks } from './types';

export const selectSidebarLinks = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarLinksList: SidebarLinks[] = [
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
    ];

    if (userData) {
      sidebarLinksList.push(
        {
          path: RoutePath.profile + userData.id,
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
      );
    }

    return sidebarLinksList;
  },
);
