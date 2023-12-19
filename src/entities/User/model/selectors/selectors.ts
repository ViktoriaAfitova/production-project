import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
export const selectMounted = (state: StateSchema) => state.user._mounted;
export const selectRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(selectRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(selectRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
