let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE_POST";

let initialState = {
    posts: [
        { id: "1", message: "Hi, how are you?", likesCount: "20" },
        { id: "2", message: "It's my first post", likesCount: "15" },
        { id: "3", message: "It's my first post man", likesCount: "12" },
        { id: "4", message: "It's my first post Dude", likesCount: "55" },
    ],
    newPostText: "text",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_POST:
            state.newPostText = action.newPost;
            return state;
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 27,
            };
            state.posts.push(newPost);
            return state;
        default:
            return state;

    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export let updatePostText = (text) => {
    return {
        type: UPDATE_POST,
        newPost: text,
    }
}

export default profileReducer;