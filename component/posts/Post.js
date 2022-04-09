import React, { useState } from "react";
import Image from 'next/image';

const Post = () => {
  const [star, setStar] = useState('star');

  const like = () => {
    if (star === 'star')
      setStar('filledstar')
    else
      setStar('star')
  }

  return (
    <>
      <div className="postContainer">
        <div className="flex postHead">
          <Image src='/images/man.png' width={25} height={25} className='rounded-full postHeadImage' />

          <div className="ml-2">Bhargav</div>
          <img src='/icons/verified.png' width={15} height={15} className='verifyIcon' title="Verified" />
        </div>
        <div className="postBody">
          <img src="./images/testPost.jpg" />
          <p className="postBodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="postFooter">
          <img src={`./icons/${star}.png`} className="star" onClick={like} />
        </div>
      </div>
    </>
  );
};

export default Post;
