import React from "react";
import { Icon } from 'antd'

function Document({ name, file }) {
  return (
    <div>
      <a href={file} target="_blank" rel="noreferrer noopener">
      <Icon type="file" />&nbsp;{name}
      </a>
    </div>
  )
}

export default Document