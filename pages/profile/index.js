import React from "react";

const Index = () => {
  return (
    <>
      <div className='profile'>
        <div className='profile-page  flex items-center gap-x-4'>
          <div className='profile-pic'>
            <img src='./images/profil-pic.jpg' alt='' />
          </div>
          <div className='userDetail'>
            <h5 className='userName'>Priyu Malavya</h5>
            <h6 className='userBio'>attitude girl</h6>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Index;
