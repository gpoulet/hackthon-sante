import React, { useState } from "react";
import { func } from "prop-types";
import { List, InputItem } from "antd-mobile";
import { createForm } from 'rc-form';

function ParkourAdd({ add, match, form }) {
  const { getFieldProps } = form;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onClick() {
    add({ title: title.props.value, description: description.props.value, user: match.params.userId, events : [] });
  }

  return (
    <List>
      <InputItem
        {...getFieldProps('title')}
        clear
        placeholder="Titre"
        ref={setTitle}
      />
      <InputItem
        {...getFieldProps('description')}
        clear
        placeholder="Description"
        ref={setDescription}
      />
      <List.Item>
        <button onClick={onClick}>Ajouter</button>
      </List.Item>
    </List>
  );
}

ParkourAdd.propTypes = {
  add: func
};

export default createForm()(ParkourAdd);
