import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { updateMessageText } from './../../redux/dialogs-reducer';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  // let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateMessageText(body));
  }



  return (
    <div className={s.dialogs}>
      <div className={s.DialogsItems}>
        Message
        {dialogsElements}
      </div>
      <div className={s.Messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <div><textarea 
          // value={newMessageBody}
            placeholder="Enter your message"
            onChange={onNewMessageChange}></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
