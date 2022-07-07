import {   DocsState, DocsAction, DocsActionEnum } from './types';

const initialState: DocsState = {
  docsData: [],
  isLoading: false,
  error: null,
};

export default function docsReducer(state = initialState, action: DocsAction): DocsState {
  switch (action.type) {
    case DocsActionEnum.REQUEST_DOCS:
      return {
        docsData: [],
        isLoading: true,
        error: null,
      };
    case DocsActionEnum.RECEIVE_DOCS_SUCCESS:
      return {
        docsData: action.payload,
        isLoading: false,
        error: null,
      };
    case DocsActionEnum.RECEIVE_DOCS_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case DocsActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
