const initState = { user: [] };

export const SignupReducer = (state = initState, action) => {
  switch (action.type) {
    case 'Signup':
      return { user: [...state.user, { ...action.payload }] }
    default:
      return state;
  }
}