import React from 'react'

const ButtonComponent = ({style,content,url,outerStyle}:any) => {
  return (
    <a href={url} style={outerStyle}>
     <button style={style}>{content}</button>
    </a>
  )
}

export default ButtonComponent