let rerenderEntireTree = () => {}

let state = {
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
    newMessage: "საწყისი მესიჯი",
  },
  news: [
    { name: "HTML5", done: "Done" },
    { name: "CSS3", done: "Done" },
    { name: "JavaScript", done: "Middle" },
    { name: "ReactJs", done: "Start" },
  ],
  musicPage: {
    playlist: [
      { artist: "Snoop Dogg", id: "1" },
      { artist: "Eminem", id: "2" },
    ],
    newArtist: 'შეიყვანეთ ახალი არტისტი',
  },
};

window.state = state;

//ამატებს  posts მასივში კიდევ ერთ ელემენტს,
// რომლის მნიშვნელობასაც იღებს textarea ში შეყვანილი ტექსტისგან
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 27,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

//newPostText მნიშვნელობას ანიჭებს ახალ მნიშვნელობას და ცვლის ძველ ტექსტს
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  };


  // ფუნქცია addPerson ამატებს მომხმარებლის სახელს და გამოაქვს გვერდზე
export const addPerson = () => {
  let newPerson = {
    name: state.dialogsPage.newMessage, 
    id: "2",
  }
  state.dialogsPage.dialogs.push(newPerson);
  state.dialogsPage.newMessage = "";
  rerenderEntireTree(state);
}

export const updatePerson = (text) => {
  state.dialogsPage.newMessage = text;
  rerenderEntireTree(state);
}


/////////////////////////////////////////////////////////////////////////////

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
} 

export default state;
