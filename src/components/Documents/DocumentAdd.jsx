import React, { useState } from "react";
import { func } from "prop-types";
import { Input,DatePicker,ImagePicker } from "antd-mobile";
import { createForm } from 'rc-form';
import moment from "moment"
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import List from "antd-mobile/es/list";


function DocumentAdd({ add, match }) {
  const [name, setName] = useState("");
  const [ files, setFiles ] = useState([]);
  const [date, setDate] = useState(new Date());


  function onClick() {
    add({ name, date:moment(date).format("DD/MM/YYYY"), id: match.params.id, userId:match.params.userId });
  }
  const onChange = (files) => {
    setFiles(files)
  };

  return (
<List>      <Input
        placeholder="name file"
        value={name}
        onChange={e => setName(e.target.value)}
      />

        <DatePicker
            mode="date"
            title="Date de saisie"
            value={date}
            locale={enUs}
            onChange={date => setDate(date)}>
          <List.Item arrow="horizontal">Date</List.Item>

        </DatePicker>
  <ImagePicker
      files={files}
      onChange={onChange}
      onImageClick={(index, fs) => console.log(index, fs)}
      selectable={files.length < 7}
      multiple={false}
  />
  <List.Item>
    <div
        style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
        onClick={onClick}
    >
      Ajouter
    </div>
  </List.Item>
</List>
  );
}

DocumentAdd.propTypes = {
  add: func
};

export default DocumentAdd;
