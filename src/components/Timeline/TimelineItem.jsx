import React from "react";
import { Timeline } from 'antd';

import { formatDDMMYYYY } from '../../util'
import { getColorFromType } from '../../constants'

function TimelineItem({ parkoursId, type, date, title }) {
  return (
    <Timeline.Item
      color={getColorFromType(type, date)}>{formatDDMMYYYY(date)} : {title}
      <p>

      </p>
    </Timeline.Item>
  )
}

export default TimelineItem