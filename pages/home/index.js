import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../component/posts/CreatePost";
import Post from "../../component/posts/Post";
import { Auth, KEY } from "../../config/auth";
import { GetAllPostAction } from "../../redux/action/PostAction";

const Index = () => {
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const AllPost = useSelector((state) => state.allPost.POST);

  useEffect(() => {
    const formData = new FormData();
    formData.append("username", Auth.get(KEY.USER));
    dispatch(GetAllPostAction(formData));
  }, []);

  useEffect(() => {
    if (AllPost) {
      setPost(AllPost);
    }
  }, [AllPost]);

  useEffect(() => {
    if (post) {
      console.log("post", post);
    }
  }, [post]);

  return (
    <>
      <div className='container'>
        <CreatePost />
        <div className='homePostContainer'>
          {post.length ? post.map((ele, i) => <Post key={i} data={ele} />) : ""}
        </div>
      </div>
    </>
  );
};

export default Index;
