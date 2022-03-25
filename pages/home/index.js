import React from 'react'
import ImgPost from './posts/ImgPost'
import TextPost from './posts/TextPost'

const index = () => {
    return (
        <>
            <div className='container'>
                <TextPost />
                <TextPost />
                <ImgPost />
            </div>
        </>
    )
}

export default index