import React from "react";
import { Icon } from 'antd'

function Document({ name, file }) {
  return (
    <>
      <a href={file} target="_blank" rel="noreferrer noopener">
      <Icon type="file" />&nbsp;{name}
      </a>
    </>
  )
}

export default Document