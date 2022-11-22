import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { useRef } from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

    let newName = useRef();

  let addPerson = () => {
    props.addPerson();
  }

  let onPersonChange = () => {
    let name = newName.current.value;
    props.updatePerson(name);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.DialogsItems}>
        {dialogsElements}
        <div>
          <input onChange={onPersonChange} ref={newName} value={props.newMessage}/>
        </div>
        <div>
          <button onClick={addPerson}>Button</button>
        </div>
      </div>
      <div className={s.Messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
