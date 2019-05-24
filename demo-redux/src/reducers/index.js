const reducer = (state = {}, action) => {
  switch (action.type) {
    case "HELLO_REACT":
      return { ...state, say: 'Hello Redux World' };
    default:
      return state;
  }
};

export default reducer;