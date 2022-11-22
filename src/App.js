import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.dialogsPage.dialogs} />

        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  updateNewPostText={props.updateNewPostText}
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              exact
              path="/dialogs"
              element={
                <Dialogs
                  state={props.state.dialogsPage}
                  addPerson={props.addPerson}
                  updatePerson={props.updatePerson}
                  newMessage={props.state.dialogsPage.newMessage}
                />
              }
            />
            <Route path="/news" element={<News news={props.state.news} />} />
            <Route
              path="/music"
              element={
                <Music
                  newArtist={props.state.musicPage.newArtist}
                />
              }
            />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
