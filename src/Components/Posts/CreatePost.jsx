import { async } from "@firebase/util";
import { React, useState } from "react";
import "./createpost.css";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // console.log(title)
  // console.log(content)
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const uploadPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      content: content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="cal-broker-name">
        <div className="cal-name">
          <h2>
            <b>Create A Blog Post</b>
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
                />
                <div id="qty-error">
                  <br />
                </div>
              </div>
              <div className="tabs">
                <button onClick={uploadPost} className="tab-item amount-heading-font">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
