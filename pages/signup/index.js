import React from 'react'
import Head from "next/head";
import { useState } from 'react/cjs/react.production.min';

const index = () => {


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

                <section class='flex justify-center items-center h-screen bg-gray-100'>
                    <div class='max-w-md w-full bg-white rounded p-6 space-y-4 flex flex-col justify-center'>
                        <div class='mb-4'>
                            <p class='text-gray-600'>Sign up</p>
                            <h2 class='text-xl font-bold'>Join our community</h2>
                        </div>
                        <div>
                            <input
                                class='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                                type='text'
                                placeholder='User Name'
                            />
                        </div>
                        <div className='relative'>
                            <input
                                class='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                                type='password'
                                placeholder='Password'
                            />
                            <img src="./images/eye.svg" alt="" className='absolute top-4 right-3' />
                        </div>
                        <div className='relative'>
                            <input
                                class='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                                type="password"
                                placeholder='conform Password'
                            />
                            <img src="./images/eye.svg" alt="" className='absolute top-4 right-3'/>
                        </div>
                        <div>
                            <input
                                class='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
                                type='date'
                                placeholder='date of brith'
                            />
                        </div>
                        <form action="/action_page.php" className='flex items-center'>
                            <input type="radio" id="Male" name="fav_language" value="Male" className='mr-2' />
                            <label for="Male">Male</label><br />
                            <input type="radio" id="Female" name="fav_language" value="Female" className='mr-2 ml-3' />
                            <label for="Female">Female</label><br />
                        </form>
                        <div>
                            <button class='w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default index