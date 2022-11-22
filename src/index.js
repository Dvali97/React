import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addPerson,
  addPost,
  updateNewPostText,
  updatePerson,
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addPerson={addPerson}
          updatePerson={updatePerson}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
