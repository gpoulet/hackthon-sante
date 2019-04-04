import React from "react";
import Document from "./Document";
function Documents({ documents }) {
  return (
    <div>
      { documents.map(document => <Document {...document} key={document.id} />) }
    </div>
  )
}

Users.defaultProps= {
  documents: []
}

export default Documents;