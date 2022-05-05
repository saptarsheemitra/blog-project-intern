import { async } from "@firebase/util";
import { React, useState, useEffect } from "react";
import "./createpost.css";
import { addDoc, collection , getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [contentUpdate, setContentUpdate] = useState("");

  const postsCollectionRef = collection(db, "posts");

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), blogid: doc.id })));
      console.log(postList)
    };
    getPosts();
  }, );

  setTitleUpdate(postList.map((post) => post.title))
  setContentUpdate(postList.map((post) => post.content))

  return (
    <div className="container">
      <div className="cal-broker-name">
        <div className="cal-name">
          <h2>
            <b>Update Post</b>
          </h2>
        </div>
      </div>

      <div className="input-container">
        <div className="tab-container">
          <div className="input-div">
            <div className="input-section-one">
              <div className="input-label amount-heading-font">
                <label htmlFor="title">Title</label>
                <br />
              </div>
              <div className="input-area">
                <input
                  className="input-field input-title-font"
                  id="title"
                  type="text"
                  placeholder="Title of the Blog"
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={titleUpdate}
                />
                <div id="price-error">
                  <br />
                </div>
              </div>
            </div>
            <div className="input-section-two">
              <div className="input-label amount-heading-font">
                <label htmlFor="content">Content Of the Blog</label>
                <br />
              </div>
              <div className="input-area">
                <textarea
                  className="input-text input-textarea-font"
                  id="content"
                  type="text"
                  placeholder="Content Of the Blog"
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  value={contentUpdate}
                />
                <div id="qty-error">
                  <br />
                </div>
              </div>
              <div className="tabs">
                <button  className="tab-item amount-heading-font">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
