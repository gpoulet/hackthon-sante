import React from "react";
import { object } from "prop-types";
import { Timeline } from 'antd';
import { formatDDMMYYYY } from '../../util'

function TimelinePage({ timeline }) {
  const { title, events } = timeline;
  return (
    <div>
      <p>title</p>
    <Timeline>
      { events.map(event => <Timeline.Item color="green">{formatDDMMYYYY(event.date)} : {event.title}</Timeline.Item>) }
      <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
    </Timeline>
    </div>);
}

TimelinePage.propTypes = {
  timeline: object
}

export default TimelinePage