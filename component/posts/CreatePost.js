import React from "react";

const CreatePost = () => {
  return (
    <div className='createPost'>
      <div className='createPostContainer'>
        <div className='flex'>
          <div className='userAvtar'>
            <img src='./images/man.png' />
          </div>
          <div className='postInput'>
            <textarea />
          </div>
        </div>
        <button className=''>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
