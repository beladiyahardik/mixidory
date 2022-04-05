import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useReducer } from "react-redux";
import { Auth, KEY } from "../config/auth";
import { LoginAction } from "../redux/action/LoginAction";
import styles from "../styles/Home.module.css";
import Layout from "./layout";

export default function Home() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const isLogin = useReducer((state) => state.login.login);

  const login = () => {
    if (user.username && user.password) {
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("password", user.password);
      dispatch(LoginAction(formData));
    }
  };

  useEffect(() => {
    console.log("isLogin", isLogin);
    if (isLogin.status && isLogin.username) {
      window.location = "/home";
    }
  }, [isLogin]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mixidory</title>
        <meta
          name='description'
          content='Welcome to the worlds creative diary.'
        />
      </Head>
      <Layout>
        <section className='flex justify-center items-center h-screen bg-gray-100'>
          <div className='max-w-md w-full bg-white rounded p-6 space-y-4'>
            <div className='mb-4'>
              <p className='text-gray-600'>Sign In</p>
              <h2 className='text-xl font-bold'>Join our community</h2>
            </div>
            <div>
              <input
                className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                type='text'
                placeholder='Username'
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div>
              <input
                className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                type='password'
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='Password'
              />
            </div>
            <div>
              <button
                className='w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200'
                onClick={login}>
                Sign In
              </button>
            </div>
            {/* <div className='flex items-center justify-between'>
            <div className='flex flex-row items-center'>
              <input
                type='checkbox'
                className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
              />
              <label
                for='comments'
                className='ml-2 text-sm font-normal text-gray-600'>
                Remember me
              </label>
            </div>
            <div>
              <a className='text-sm text-blue-600 hover:underline' href='#'>
                Forgot password?
              </a>
            </div>
          </div> */}
          </div>
        </section>
      </Layout>
    </div>
  );
}
