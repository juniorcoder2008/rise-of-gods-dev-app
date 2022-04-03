import React, { useRef } from 'react';
import axios from 'axios';

const Login = ({ setLoginState, loginState }) => {

  const userName = useRef();
  const userID = useRef();
  const userPass = useRef();

  const loginUser = async e => {
    e.preventDefault();

    console.log(`Name: ${userName.current.value}; ID: ${userID.current.value}; Password: ${userPass.current.value}`);

    axios.post('https://rog-dev-app.herokuapp.com//login', { name: userName.current.value, password: userPass.current.value, id: userID.current.value }).then(res => {
      console.log(res.data);

      if (res.data.status === 'ok') {
        setLoginState(true);
      } else {
        console.log('WHY U DO DIS');
        userName.current.classList.add('text-rose-500');
        userPass.current.value = '';
        userID.current.value = '';
      }
    });
  }

  return (
    <div className='ml-10 mt-10'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <form className='flex flex-col gap-3 mt-5' onSubmit={loginUser}>
        <input ref={userName} type="text" placeholder='User Name' className='input' />
        <input ref={userID} type="text" inputMode='number' placeholder='User ID' className='input appearance-none' />
        <input ref={userPass} type="password" placeholder='Password' className='input' />
        <button type="submit" className='btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default Login