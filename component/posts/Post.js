import React, { useState } from "react";
import Image from "next/image";

const Post = ({ data }) => {
  const [star, setStar] = useState("star");

  const like = () => {
    if (star === "star") setStar("filledstar");
    else setStar("star");
  };

  return (
    <>
      <div className='postContainer'>
        <div className='flex postHead'>
          <Image
            src='/images/man.png'
            width={25}
            height={25}
            className='rounded-full postHeadImage'
          />

          <div className='ml-2'>{data.username}</div>
          <img
            src='/icons/verified.png'
            width={15}
            height={15}
            className='verifyIcon'
            title='Verified'
          />
        </div>
        <div className='postBody'>
          {data.media ? <img src={`https://${data.media}`} /> : ""}
          <p className='postBodyText'>{data.post}</p>
        </div>
        <div className='postFooter'>
          <img src={`./icons/${star}.png`} className='star' onClick={like} />
        </div>
      </div>
    </>
  );
};

export default Post;
