import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import React, { useState, useEffect } from "react";
import "./allposts.css";
import { async } from "@firebase/util";

const AllPosts = (props) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), blogid: doc.id })));
      console.log(postList)
    };
    getPosts();
  }, [postList]);
  const deletePost = async (blogid) => {
      const postDoc = doc(db,"posts", blogid);
      await deleteDoc(postDoc);
  }
  return (
    <div>
      {postList.map((post) => {
        return (
            <>
          <div className="wrapper">
            <div className="blog_post">
              <div className="container_copy">
                <h1>{post.title}</h1>
                <h3>By {post.author.name}</h3>
                <h3>By {post.author.id}</h3>
                <h3>By {post.blogid}</h3>
                <p>
                  {post.content}
                </p>
              </div>
              <div className="tabs-btns">
              {props.isAuth && post.author.id === auth.currentUser.uid && ( <button onClick={UpdatePostRoute} className="btn_primary">
              Edit
            </button>
            )}
            {props.isAuth && post.author.id === auth.currentUser.uid && ( <button onClick={()=> {deletePost(post.blogid);}} className="btn_primary">
              Delete
            </button>
            )}
          </div>
            </div>
          </div>
        
        </>
        );
      })}
    </div>
  );
};

export default AllPosts;
