import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import React, { useState, useEffect } from "react";
import "./allposts.css";

const AllPosts = () => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), blogid: doc.id })));
    };
    console.log(postList)
    getPosts();
  }, []);

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
            <div
              className="btn_primary "
            >
              Edit
            </div>
            <div
              className="btn_primary"
            >
              Delete
            </div>
          </div>
              {/* <a className="btn_primary" href="#">
                Read More
              </a>
              <a className="btn_primary" href="#">
                Read More
              </a> */}
            </div>
          </div>
        
        </>
        );
      })}
    </div>
  );
};

export default AllPosts;
