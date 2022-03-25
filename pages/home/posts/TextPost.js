import React from 'react'

const TextPost = () => {
    return (
        <>
            <div className='p-5 shadow-lg m-5 rounded-2xl'>
                <div className='flex items-center border-b-2 p-2 border-black'>
                    <img src="./images/man.png" alt="" width="75px" className='rounded-full' />
                    <p className='md:text-xl xs:text-lg ml-2 font-bold font-sans'>Piyush Koladiya</p>
                </div>
                <div className='p-5 pb-6'>
                    <p className='md:text-lg font-semibold font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='flex items-center p-5'>
                    <img src="./images/heart.svg" alt="" width="30px" />
                    <img src="./images/message-square.svg" alt="" width="30px" className='ml-3' />
                </div>
            </div>
        </>
    )
}

export default TextPost