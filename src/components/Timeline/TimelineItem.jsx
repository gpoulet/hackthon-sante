import React from "react";
import { Timeline } from 'antd';

import { formatDDMMYYYY } from '../../util'
import { getColorFromType } from '../../constants'
import Document from './Document.js'

function TimelineItem({ parkoursId, type, date, title, documents }) {
  return (
    <Timeline.Item
      color={getColorFromType(type, date)}>{formatDDMMYYYY(date)} : {title}
      <p>
        {documents.map((document, index) => <Document key={index} id={document.id}/>)}
      </p>
    </Timeline.Item>
  )
}

TimelineItem.defaultProps = {
  documents: []
}

export default TimelineItem