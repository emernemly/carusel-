import React from 'react';
import './Login.scss';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../actions/UserActions';
import { Button, Form } from 'react-bootstrap';
const Login = () => {
  const dispatch = useDispatch();

  const HandleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: 'aaa',
      password: 'aaa',
    };
    await dispatch(LoginAction(data));
  };

  return (
    <div>
      <h1 className='title'>Login</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button onClick={HandleLogin} variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
