import React from "react";
import { object, string } from "prop-types"
import { Timeline } from 'antd';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import TimelineItem from './TimelineItem'

function TimelinePage({ timeline, parkoursId }) {
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
            {events.map((event, index) => <TimelineItem parkoursId={parkoursId} key={index} {...event} />)}
          </Timeline>
        </Card.Body>
      </Card>
    </WingBlank>);
}

TimelinePage.propTypes = {
  timeline: object,
  parkoursId: string
}

export default TimelinePage