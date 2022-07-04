import Login from '../pages/Login';
import Main from '../pages/Main';
import PersonalCabinet from '../pages/PersonalCabinet';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/main',
  PERSONALCABINET = '/',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    exact: true,
    component: Login,
  },
  {
    path: RouteNames.MAIN,
    exact: true,
    component: Main,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.PERSONALCABINET,
    exact: true,
    component: PersonalCabinet,
  },
  {
    path: RouteNames.MAIN,
    exact: true,
    component: Main,
  },
];
