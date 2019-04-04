import React, { useState } from "react"
import { func } from "prop-types";
import { Input, DatePicker } from 'antd';
import moment from "moment"


function UserAdd({ add }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dateNaissance, setDateNaissance] = useState(moment())

  function onClick() {
    add({ firstName, lastName, dateNaissance: moment(dateNaissance).format("DD/MM/YYYY") })
  }

  return (
    <div>
      <Input placeholder="Prénom" value={firstName} onChange={e => setFirstName(e.target.value)}/>
      <Input placeholder="Nom" value={lastName} onChange={e => setLastName(e.target.value)}/>
      <DatePicker placeholder="Date de naissance" value={dateNaissance}
                  onChange={e => setDateNaissance(e)}/>
      <button onClick={() => onClick()}>Ajouter</button>

    </div>
  )
}

UserAdd.propTypes = {
  add: func
}

export default UserAdd