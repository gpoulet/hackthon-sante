import React, { useState } from "react";
import { func } from "prop-types";
import { Input } from "antd";
import moment from "moment";

function ParkourAdd({ add, match }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onClick() {
    add({ title, description, user: match.params.userId, events : [] });
  }

  return (
    <div>
      <Input
        placeholder="Titre"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        placeholder="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={() => onClick()}>Ajouter</button>
    </div>
  );
}

ParkourAdd.propTypes = {
  add: func
};

export default ParkourAdd;
