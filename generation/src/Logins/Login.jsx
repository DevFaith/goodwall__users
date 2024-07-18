import React, { useState } from 'react';
import { db } from '../Config';
import { auth } from '../Config';
import { collection, addDoc } from 'firebase/firestore';
import {  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


function Write() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    if (!firstName || !lastName || !email) {
      alert('All fields are required');
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log(result);
        await addDoc(collection(db, 'users'), {
          first: firstName,
          last: lastName,
          email: email,
          user1: result.user.uid
        })
     
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        alert(`Welcome ${user.displayName}`);
      }).catch((error) => {
        console.error("Error during Google sign-in: ", error);
        alert(`Google sign-in failed: ${error.message}`);
      });
  };

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4'>
      <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Enter Personal Data</h1>
        <input
          type="text"
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <input
          type="text"
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <input
          type="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <input
          type="password"
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <button
          onClick={submit}
          className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4'
        >
          Submit
        </button>
        <h1 className='text-center text-lg mb-4'>or</h1>
        <button
          onClick={signInWithGoogle}
          className='flex items-center justify-center w-full p-2 border border-gray-300 rounded hover:bg-gray-200'
        >
          <FcGoogle className='mr-2' /> Login with Google
        </button>
      </div>
    </div>
  );
}

export default Write;
