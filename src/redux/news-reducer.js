let ADD_PROGRAM = "ADD_PROGRAM";
let UPDATE_PROGRAM = "UPDATE_PROGRAM";

let initialState = {
    new: [
        { name: "HTML5", done: "Done" },
        { name: "CSS3", done: "Done" },
        { name: "JavaScript", done: "Middle" },
        { name: "ReactJs", done: "Start" },
    ],
    newNews: "text",
};

let newsReducer = (state = initialState, action = 2) => {
    switch (action.type) {
        case UPDATE_PROGRAM:
            state.newNews = action.program;
            return state;
        case ADD_PROGRAM:
            let program = {
                name: state.newNews,
                done: "Not now",
            }
            state.new.push(program);
            return state;
        default:
            return state;
    }
}

export let addProgramActionCreator = () => {
    return {
        type: ADD_PROGRAM,
    }
}

export let updateProgramText = (text) => {
    return {
        type: UPDATE_PROGRAM,
        program: text,
    }
}

export default newsReducer;