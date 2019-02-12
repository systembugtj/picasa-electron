import ActionTypes from './types';

export const listFiles = folder => dispatch => dispatch({type: ActionTypes.LIST_FILES, payload: { folder } });
