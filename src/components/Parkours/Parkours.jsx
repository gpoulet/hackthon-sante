import React from "react";

import Parkour from "./Parkour.jsx";
import { Icon, Row, Col, Card, Typography } from "antd";

const { Title } = Typography;

function Parkours({ parkours }) {
  return (
    <Row gutter={16}>
      {parkours.map(parkour => (
        <Col span={8}  key={parkour.id}>
          <Parkour parkour={parkour} />
        </Col>
      ))}
        <Col span={8} >
        <Card>
            <Title> <Icon type="plus-circle" /> Parcours</Title>
          </Card>
        </Col>
    </Row>
  );
}

Parkours.defaultProps = {
  parkours: []
};

export default Parkours;
