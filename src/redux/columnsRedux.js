import shortid from 'shortid';

export const getColumnsByList = ({ columns }, listId) => {
  return columns.filter((column) => column.listId === listId);
};

const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [
        ...statePart,
        {
          id: shortid(),
          listId: action.payload.listId,
          title: action.payload.title,
          icon: action.payload.icon,
        },
      ];
    default:
      return statePart;
  }
};

export default columnsReducer;
