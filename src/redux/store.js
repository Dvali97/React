import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from './news-reducer';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you?", likesCount: "20" },
        { id: "2", message: "It's my first post", likesCount: "15" },
        { id: "3", message: "It's my first post man", likesCount: "12" },
        { id: "4", message: "It's my first post Dude", likesCount: "55" },
      ],
      newPostText: "text",
    },
    dialogsPage: {
      dialogs: [
        { name: "Dito", id: "1" },
        { name: "Dato", id: "2" },
        { name: "Nino", id: "3" },
        { name: "Tatia", id: "4" },
      ],
      messages: [
        { message: "Hi" },
        { message: "Ho are you today?" },
        { message: "Good" },
      ],
      newMessageBody: "საწყისი მესიჯი",
    },
    news: {
      new: [
        { name: "HTML5", done: "Done" },
        { name: "CSS3", done: "Done" },
        { name: "JavaScript", done: "Middle" },
        { name: "ReactJs", done: "Start" },
      ],
      newNews: "text",
    },
    musicPage: {
      playlist: [
        { artist: "Snoop Dogg", id: "1" },
        { artist: "Eminem", id: "2" },
      ],
      newArtist: 'შეიყვანეთ ახალი არტისტი',
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },


  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },


  dispatch(action) {
 
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.news = newsReducer(this._state.news, action);

    this._callSubscriber(this._state);
  }

}


export default store;
window.store = store;

