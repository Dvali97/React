import s from "./Music.module.css";
import { useRef } from 'react';
import Artist from "./Artist/Artist";


const Music = (props) => {

  let Art = props.playlist.map(a =>
    <Artist artist={a.artist} id={a.id}/>)



  return (
    <div>
      <div className={s.content}>
        Music
        {Art}
      </div>
    </div>
  );
};

export default Music;
