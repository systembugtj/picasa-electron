import ActionTypes from '../actions/types';

//const { createSelector } = reselect;

const initialState = {
  filter: undefined,
  folders: undefined,

};

export default function watched(state, action) {
  switch (action.type) {
    case ActionTypes.LIST_FILES: {
      return Object.assign({}, state, { filter: false });
    }
    case ActionTypes.ADD_FOLDERS: {
      return Object.assign({}, state, { folders: action.payload.folders });
    }
    /*

    case types.SHOW_ALL: {
      return Object.assign({}, state, { filter: undefined });
    }

    case types.DELETE_TODO: {
      let todos = omit(state.folders, [action.id]);
      return Object.assign({}, state, { all: todos });
    }

    case types.EDIT_TODO: {
      let todos = mapValues(state.folders, todo => {
        return todo.id === action.id ? defaults({
          text: action.text
        }, todo) : todo;
      });
      return Object.assign({}, state, { all: todos });
    }

    case types.COMPLETE_TODO: {
      let todos = mapValues(state.folders, todo => {
        return todo.id === action.id ? defaults({
          completed: !todo.completed
        }, todo) : todo;
      });
      return Object.assign({}, state, { all: todos });
    }

    case types.ADD_TODO: {
      const id = Object.values(state.folders).reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      let todo = {
        [id]: {
          id: id,
          completed: false,
          text: action.text
        }
      }
      let todos = merge({}, state.folders, todo);
      return Object.assign({}, state, { all: todos });
    }
    */
    default: {
      return state || initialState;
    }
  }
}
/*
const all = state => state.todos.folders;
const filter = state => state.todos.filter;

export const getTodos = createSelector(
  all,
  filter,
  (all, filter) => {
    return omitBy(all, todo => {
      return filter === undefined ? false : filter !== todo.completed;
    });
  }
);

export const getAllTodosCount = createSelector(all, (all) => Object.values(all).length);
export const getFilter = createSelector(filter, filter => filter);
export const getTodosCount = createSelector(getTodos, (todos) => Object.values(todos).length);
export const getCompletedCount = createSelector(all, (all) => Object.values(all).filter(t => t.completed).length);
*/
