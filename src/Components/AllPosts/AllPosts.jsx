import { getDocs, collection, deleteDoc, doc , addDoc} from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import React, { useState, useEffect } from "react";
import "./allposts.css";
// import { async } from "@firebase/util";
import { useNavigate } from 'react-router-dom';

const AllPosts = (props) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const [comment, setComment] = useState("");
  // const commentsCollectionRef = collection(db, "comments");
  let navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), blogid: doc.id })));
    };

    // const getCooments = async () => {
    //   const data = await getDocs(commentsCollectionRef);
    //   setComment(data.docs.map((doc) => ({ ...doc.data(), comment: doc.comment})));   **** Could not implement the add comment feature ***
    //   console.log(comment);
    // };
    // setTimeout(getCooments, 2000);

    setTimeout(getPosts, 1000);
    // getPosts();
    
  }, [postList]);

  // const uploadComment = async () => {
  //   await addDoc(commentsCollectionRef, {
  //     comment: comment,
  //   });
  //   navigate("/")
  // };

  const uploadComment = () => {
    alert("Thanks for commenting on the post \n Would you like to post a new blog ?")
    setComment("")
    navigate("/createpost")
  }


  const deletePost = async (blogid) => {
    const postDoc = doc(db, "posts", blogid);
    await deleteDoc(postDoc);
  };
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
                  {/* <h3>By {post.author.id}</h3>
                  <h3>By {post.blogid}</h3> */}
                  <p>{post.content}</p>
                </div>
                <div className="tabs-btns">
                  {/* {props.isAuth && post.author.id === auth.currentUser.uid && ( <button onClick={UpdatePostRoute} className="btn_primary">
              Edit
            </button>
            )} */}
                  {props.isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.blogid);
                      }}
                      className="btn_primary"
                    >
                      Delete
                    </button>
                  )}
                  <div className="input-section-com">
                    <div className="input-label amount-heading-font">
                      <label htmlFor="title">Add Comment</label>
                      <br />
                    </div>
                    <div className="input-area">
                      <input
                        className="input-field-com input-title-font"
                        id="comment"
                        type="text"
                        placeholder="Add Comment"
                        autoComplete="off"
                        required
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      />
                      <div className="tabs">
                        <button onClick={uploadComment} className="tab-item amount-heading-font">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
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
