const TokenReducer = (state = localStorage.getItem('token_agexis'), action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      localStorage.setItem('token_agexis', action.payload);
      return action.payload;
    case 'REMOVE_TOKEN':
      localStorage.removeItem('token_agexis');
      return null;
    default:
      return state;
  }
};
export default TokenReducer;
