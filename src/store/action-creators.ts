import { AuthActionCreators } from './reducers/auth/action-creators';
import { DocsActionCreators } from './reducers/documents/action-creators';
import { NewsActionCreators } from './reducers/news/action-creators';
import { ReestrActioCreators } from './reducers/reestrs/action-creators';
import { UserActionCreators } from './reducers/user/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...ReestrActioCreators,
  ...NewsActionCreators,
  ...DocsActionCreators,
  ...UserActionCreators,
};
