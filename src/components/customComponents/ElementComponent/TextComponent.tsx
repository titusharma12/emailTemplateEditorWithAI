import React from 'react'

const TextComponent = ({style,content}:any) => {
  return (
    <h2 style={style}>{content}</h2>
  )
}

export default TextComponent