import React from "react";
import { Card } from 'antd';
import { ROUTING_DOCUMENTS } from '../../constants'

function Document({name, eventId, date,id }) {
  return (
      <div>
        <Card title={name} bordered={false} extra={<a href={ROUTING_DOCUMENTS+"/"+id}>Choisir</a>}>
          <p>id : { id }</p>
          <p>eventId : { eventId }</p>
          <p>date :  {date} </p>
        </Card>
      </div>
  )
}

export default Document;