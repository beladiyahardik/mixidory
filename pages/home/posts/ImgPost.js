import React from 'react'

const ImgPost = () => {
    return (
        <>
            <div className='p-5 shadow-lg m-5 rounded-2xl'>
                <div className='flex items-center border-b-2 p-2 border-black'>
                    <img src="./images/girl.png" alt="" width="75px" className='rounded-full' />
                    <p className='md:text-xl xs:text-lg ml-2 font-bold font-sans'>priyu malavya</p>
                </div>
                <div className='p-3'>
                    <img src="./images/test-img-post-2.png" alt="" className='mx-auto'/>
                </div>
                <div className='flex items-center p-5'>
                    <img src="./images/heart.svg" alt="" width="30px" />
                    <img src="./images/message-square.svg" alt="" width="30px" className='ml-3' />
                </div>
            </div>
        </>
    )
}

export default ImgPost