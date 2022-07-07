import Login from '../pages/Login';
import Main from '../pages/Main';
import PersonalCabinet from '../pages/PersonalCabinet';
import MyInformation from '../components/personalCabinet/myInformation/MyInformation';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/main',
  PERSONALCABINET_INFO = '/information',
  PERSONALCABINET_NOTIFICATION = '/notification',
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
    path: RouteNames.PERSONALCABINET_INFO,
    exact: true,
    component: PersonalCabinet,
  },
  {
    path: RouteNames.MAIN,
    exact: true,
    component: Main,
  },
  {
    path: RouteNames.PERSONALCABINET_NOTIFICATION,
    exact: true,
    component: PersonalCabinet,
  },
];
