import React from 'react'

const ButtonComponent = ({style,content,url}:any) => {
  return (
    <a href={url} >
     <button style={style}>{content}</button>
    </a>
  )
}

export default ButtonComponent