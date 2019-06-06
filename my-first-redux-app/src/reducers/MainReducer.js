const initialState = []
export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERLIST':
      return { ...state, userList: action.payload };
    case 'ADD_USER':
      console.log(action.payload.data);
      return { ...state };
    case 'EDIT_USER':
      console.log(action.payload.data);
      return { ...state };
    default:
      return state;
  }
}
