import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils';

function Register() {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate();
   
   const registerUser = async (e) => {
    e.preventDefault();
    
    if(!username || !email || !password){
      return handleError("All fields are required")
    }

    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        const {success, message, error} = data;
        
        if (!success) {
            console.log(data);
            const details = error.details[0].message;
            handleError(details || 'Registration failed');
            throw new Error(details || message || 'Registration failed');

        }

        handleSuccess(message || 'Registered Successfully');
        console.log('Register successful:', data);
        // Redirect to login page after successful registration
        setTimeout(() => navigate('/login'), 1000);

    } catch (error) {
        console.error('Register error:', error.message);
        
    }
   }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full gap-7'>
      <h1>Register</h1>
      <form 
      onSubmit={registerUser}
      className='flex flex-col gap-7 border-2 border-gray-300 p-10 rounded-md'>
        
        <input 
        className='p-2 rounded-md border-2 border-black'
        type="text" 
        placeholder='name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

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
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register
