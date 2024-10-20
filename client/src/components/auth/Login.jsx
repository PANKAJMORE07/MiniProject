import React, { useState } from 'react'
import { handleError, handleSuccess } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
function Login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate();
   
   const loginUser = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        const {success, message, jwtToken, name} = data;
        
        
        if (!success) {
          
          handleError(message || 'Login failed');
          throw new Error(message || 'Login failed');
        }
      
      handleSuccess(message || 'LogIn Successfully');

      localStorage.setItem('token', jwtToken); //------> storing token in local storage
      localStorage.setItem('name', name);

      console.log('Login successful:', data);
      setTimeout(() => navigate('/'), 1000);
        
    } catch (error) {
        console.error('Login error:', error.message);
    }
   }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full gap-7'>
      <h1>Login</h1>
      <form 
      onSubmit={loginUser}
      className='flex flex-col gap-7 border-2 border-gray-300 p-10 rounded-md'>
        <input 
        className='p-2 rounded-md border-2 border-black'
        type="email" 
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />

        <input 
        className='p-2 rounded-md border-2 border-black'
        type="password" 
        placeholder='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
        <span>Dont have an account? <Link to="/register">Register</Link></span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login