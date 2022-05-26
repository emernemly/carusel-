import axios from 'axios';
export const LoginAction = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      'https://mimz-app.herokuapp.com/user/signin',
      data
    );
    dispatch({
      type: 'SET_TOKEN',
      payload: res.data.token,
    });
    dispatch({
      type: 'SET_USER',
      payload: res.data.user,
    });

    //refresh =>//= window.location = '/';
  } catch (err) {
    console.log(err.response.data);
  }
};
