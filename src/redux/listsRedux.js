import shortid from 'shortid';

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getAllLists = (state) => state.lists;

const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

export const addList = (payload) => ({ type: ADD_LIST, payload });
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...statePart,
        {
          id: shortid(),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];
    default:
      return statePart;
  }
};

export default listsReducer;
