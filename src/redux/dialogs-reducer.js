let SEND_MESSAGE = "SEND_MESSAGE";
let UPDATE_MESSAGE = "UPDATE_MESSAGE";

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_MESSAGE:
      state.newMessageBody = action.newMessage;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
}


export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}

export let updateMessageText = (text) => {
  return {
    type: UPDATE_MESSAGE,
    newMessage: text,
  }
}


export default dialogsReducer;
