import React, { useState } from "react";
import { func } from "prop-types";
import { Input } from "antd";

function DocumentAdd({ add, match }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function onClick() {
    add({ name, date, id: match.params.id, userId:match.params.userId });
  }

  return (
    <div>
      <Input
        placeholder="Titre"
        value={title}
        onChange={e => setName(e.target.value)}
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

DocumentAdd.propTypes = {
  add: func
};

export default DocumentAdd;
