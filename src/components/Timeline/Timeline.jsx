import React from "react";
import { object } from "prop-types";
import { Timeline } from 'antd';
import { formatDDMMYYYY } from '../../util'
import { getColorFromType } from '../../constants'

function TimelinePage({ timeline }) {
  const { title, events } = timeline;
  return (
    <div>
      <p>{ title }</p>
    <Timeline>
      { events.map(event => <Timeline.Item color={getColorFromType(event.type, event.date)}>{formatDDMMYYYY(event.date)} : {event.title}</Timeline.Item>) }
    </Timeline>
    </div>);
}

TimelinePage.propTypes = {
  timeline: object
}

export default TimelinePage