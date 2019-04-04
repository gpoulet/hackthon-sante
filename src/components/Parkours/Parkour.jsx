import React from "react";

import { Card, Badge, Typography} from "antd";

const { Title } = Typography;

function Parkour({ parkour }) {
  return (

    <Badge count={parkour.events.length} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}>
          <Card>
            <Title>{parkour.title}</Title>
          </Card>
      </Badge>
  );
}
export default Parkour;
