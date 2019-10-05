import React, { useState } from "react";

const NewSongForm = props => {
  const [title, setTitle] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setTitle("");
    props.addSong(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input type="text" value={title} required onChange={e => setTitle(e.target.value)} />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default NewSongForm;
