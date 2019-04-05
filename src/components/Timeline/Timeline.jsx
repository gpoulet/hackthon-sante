import React from "react";
import { object } from "prop-types";
import { Timeline } from 'antd';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { formatDDMMYYYY } from '../../util'
import { getColorFromType } from '../../constants'

function TimelinePage({ timeline }) {
  const { title, events } = timeline;
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg"/>
      <Card>
        <Card.Header
          title={title}
        />
        <Card.Body>
          <Timeline>
            {events.map((event, index) => <Timeline.Item key={index}
              color={getColorFromType(event.type, event.date)}>{formatDDMMYYYY(event.date)} : {event.title}</Timeline.Item>)}
          </Timeline>
        </Card.Body>
      </Card>
    </WingBlank>);
}

TimelinePage.propTypes = {
  timeline: object
}

export default TimelinePage
