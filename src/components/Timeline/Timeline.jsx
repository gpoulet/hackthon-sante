import React from "react";
import { object } from "prop-types";
import { Timeline } from 'antd';
import { formatDDMMYYYY } from '../../util'

function TimelinePage ({ timeline }) {
  const { title, events } = timeline;
  return (
    <div>
      <h1></h1>
      <Timeline>
        {events.map(event => <Timeline.Item color="green">{formatDDMMYYYY(event.date)} : {event.title}</Timeline.Item>)}
      </Timeline>
    </div>
  );
}

TimelinePage.propTypes = {
  timeline: object
};

export default TimelinePage
