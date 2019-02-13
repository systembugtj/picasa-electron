import ActionTypes from './types';

export const listFiles = folder => dispatch => dispatch({type: ActionTypes.LIST_FILES, payload: { folder }});
export const addFolders = folders => dispatch => dispatch({type: ActionTypes.ADD_FOLDERS, payload: { folders }});
