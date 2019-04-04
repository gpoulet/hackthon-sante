import React, { useState } from "react"
import { func } from "prop-types";
import moment from "moment"
import { InputItem, List, DatePicker } from "antd-mobile";
import { createForm } from 'rc-form';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';


function UserAdd ({ add, form }) {
  const { getFieldProps } = form;
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ dateNaissance, setDateNaissance ] = useState(new Date());

  function onClick () {
    add({
      firstName: firstName.props.value,
      lastName: lastName.props.value,
      dateNaissance: moment(dateNaissance).format("DD/MM/YYYY")
    })
  }

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
