import React from "react";
import { object, string } from "prop-types"
import { Timeline } from 'antd';
import { Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { Icon } from "antd";
import TimelineItem from './TimelineItem'

function TimelinePage({ timeline, parkoursId }) {
  const { title, events } = timeline;
  return (
    <div>
    <WingBlank size="lg">
      <WhiteSpace size="lg"/>
      <h2><Icon type="branches"/>&nbsp;&nbsp;{title}</h2>
      <Card>
        <Card.Body>
          <Timeline>
            {events.map((event, index) => <TimelineItem parkoursId={parkoursId} key={index} {...event} />)}
          </Timeline>
        </Card.Body>
      </Card>
    </WingBlank>
      <br/>
      <Button type="primary"><Icon type="plus" />&nbsp;&nbsp;Ajouter</Button>
    </div>);
}

TimelinePage.propTypes = {
  timeline: object,
  parkoursId: string
}

export default TimelinePage
