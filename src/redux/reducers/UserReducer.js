const UserReducer = (
  state = JSON.parse(localStorage.getItem('user_agexis') || null),
  action
) => {
  switch (action.type) {
    case 'SET_USER':
      localStorage.setItem('user_agexis', JSON.stringify(action.payload));
      return action.payload;

    case 'REMOVE_USER':
      localStorage.removeItem('user_agexis');
      return null;

    default:
      return state;
  }
};

export default UserReducer;
