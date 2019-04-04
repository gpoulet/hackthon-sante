import React from "react";

function Parkours({ parkours }) {
  return (
    <div>
      { parkours.map(parkour => "coucou" ) }
    </div>
  )
}

Parkours.defaultProps= {
    parkours: []
}

export default Parkours;