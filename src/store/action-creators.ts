import { AuthActionCreators } from './reducers/auth/action-creators';
import { NewsActionCreators } from './reducers/news/action-creators';
import { ReestrActioCreators } from './reducers/reestrs/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...ReestrActioCreators,
  ...NewsActionCreators,
};
