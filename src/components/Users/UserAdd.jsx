import React, { useState } from "react"
import { func } from "prop-types";
import moment from "moment"
import { InputItem, List, DatePicker, ImagePicker } from "antd-mobile";
import { createForm } from 'rc-form';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';


function UserAdd ({ add, form }) {
  const { getFieldProps } = form;
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ files, setFiles ] = useState([]);
  const [ dateNaissance, setDateNaissance ] = useState(new Date());

  const onClick = () => {
    add({
      firstName: firstName.props.value,
      lastName: lastName.props.value,
      dateNaissance: moment(dateNaissance).format("DD/MM/YYYY")
    })
  }

  const onChange = (files) => {
    setFiles(files)
  };

  return (
    <List>
      <InputItem
        {...getFieldProps('Prénom')}
        clear
        placeholder="Prénom"
        ref={setFirstName}
      />
      <InputItem
        {...getFieldProps('Nom')}
        clear
        placeholder="Nom"
        ref={setLastName}
      />
      <DatePicker
        mode="date"
        title="Date de naissance"
        value={dateNaissance}
        locale={enUs}
        onChange={date => setDateNaissance(date)}
      >
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
  )
}

UserAdd.propTypes = {
  add: func
}

export default createForm()(UserAdd)
