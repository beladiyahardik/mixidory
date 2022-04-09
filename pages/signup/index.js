import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { SignupAction } from "../../redux/action/SignupAction";

const index = () => {
  const [user, setUser] = useState({
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
    gender: undefined,
    birthday: undefined
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const signup = () => {
    if (user.password !== user.confirmPassword) {
      toast.error('Password not matched');
    }
    else if (user.username && user.password && user.birthday && user.gender) {
      const formData = new FormData();
      formData.append('username', user.username);
      formData.append('password', user.password);
      formData.append('gender', user.gender);
      formData.append('birthday', user.birthday);
      dispatch(SignupAction(formData));
    }
    else{
      toast.info('All fields required');
    }
  }

  return (
    <>
      <div>
        <Head>
          <title>Mixidory</title>
          <meta
            name='description'
            content='Welcome to the worlds creative diary.'
          />
        </Head>

        <section className='flex justify-center items-center h-screen bg-gray-100'>
          <div className='max-w-md w-full bg-white rounded p-6 space-y-4 flex flex-col justify-center'>
            <div className='mb-4'>
              <p className='text-gray-600'>Sign up</p>
              <h2 className='text-xl font-bold'>Join our community</h2>
            </div>
            <div>
              <input
                className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                type='text'
                placeholder='Username'
                name="username"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='relative'>
              <input
                className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                type='password'
                placeholder='Password'
                name="password"
                onChange={(e) => handleChange(e)}
              />

            </div>
            <div className='relative'>
              <input
                className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                type='password'
                placeholder='confirm Password'
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                type='date'
                placeholder='date of brith'
                name='birthday'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='flex items-center'>
              <input
                type='radio'
                id='Male'
                name='gender'
                value='Male'
                className='mr-2'
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor='Male'>Male</label>
              <br />
              <input
                type='radio'
                id='Female'
                name='gender'
                value='Female'
                className='mr-2 ml-3'
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor='Female'>Female</label>
              <br />
            </div>
            <div>
              <button className='w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200' onClick={signup}>
                Sign up
              </button>
            </div>
            <div>
              Already have an <Link href="/"><span className="text-blue-500 cursor-pointer">account</span></Link>?
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
