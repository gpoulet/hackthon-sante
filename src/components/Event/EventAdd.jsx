import React, { useState } from 'react';
import { DatePicker, InputItem, List } from "antd-mobile";
import { Button } from "antd";
import { createForm } from 'rc-form';
import enUs from "antd-mobile/lib/date-picker/locale/en_US";

const EventAdd = ({ add, match, form }) => {
  const { getFieldProps } = form;
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());

  function onClick() {
    add({ title: title.props.value, date: date.props.value, parkourId: match.params.parkourId });
  }

  return (
    <List>
      <InputItem
        {...getFieldProps('title')}
        clear
        placeholder="Titre"
        ref={setTitle}
      />
      <DatePicker
        mode="date"
        title="Date de l'événement"
        value={date}
        locale={enUs}
        onChange={date => setDate(date)}
      >
        <List.Item arrow="horizontal">Date</List.Item>
      </DatePicker>
      <List.Item>
        <Button type="primary" onClick={onClick}>Ajouter</Button>
      </List.Item>
    </List>
  );
};

export default createForm()(EventAdd);
