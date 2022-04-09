import React from 'react';
import Post from '../../component/posts/Post';

const index = () => {
    return (
        <>
            <div className='container'>
                <div className='homePostContainer'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                </div>
            </div>
        </>
    )
}

export default index