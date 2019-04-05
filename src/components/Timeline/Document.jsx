import React from "react";
import { Icon } from 'antd'

function Document({ name, file }) {
  return (
    <p>
      <a href={file} target="_blank" rel="noreferrer noopener">
      <Icon type="file" />&nbsp;{name}
      </a>
    </p>
  )
}

export default Document