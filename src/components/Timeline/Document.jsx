import React from "react";
import { Icon } from 'antd'

function Document({ name, file }) {
  return (
    <div>
      <a href={file} target="_blank" rel="noreferrer noopener">
      <Icon type="file-pdf" />&nbsp;{name}
      </a>
    </div>
  )
}

export default Document