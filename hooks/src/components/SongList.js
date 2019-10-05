import React, { useState } from "react";
import uuid from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home", id: 1 },
    { title: "Memory Gospel", id: 2 },
    { title: "This Wild Darkness", id: 3 }
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "New Song", id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a Song</button>
    </div>
  );
};

export default SongList;
