import ActionTypes from './types';

export const addFolderList = folders => dispatch => dispatch({type: ActionTypes.ADD_FOLDER_LIST, payload: { folders }});
export const addFolders = folders => dispatch => dispatch({type: ActionTypes.ADD_FOLDERS, payload: { folders }});

export const addFiles = files => dispatch => dispatch({
    type: ActionTypes.ADD_FILES, 
    payload: { 
        files 
    }
});
