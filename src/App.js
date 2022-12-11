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
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                store={props.store}
              />
            }
          />
          <Route
            exact
            path="/dialogs"
            element={
              <Dialogs
                store={props.store}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news" element={<News
            dispatch={props.dispatch}
            store={props.store}
            news={props.state.news.new}
          />} />
          <Route
            path="/music"
            element={
              <Music />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
