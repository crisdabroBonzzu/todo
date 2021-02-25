// Action types
export const types = {
  ADD_TODO: "ADD_TODO",
};

// Initial state
const todo = {
  title: "initial todo",
  completed: false,
};

export const INITIAL_STATE = [todo];

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  addTodo: (title) => ({
    type: types.ADD_TODO,
    title,
  }),
};

export const selectors = {
  getTodos: (state) => state.todos,
};
