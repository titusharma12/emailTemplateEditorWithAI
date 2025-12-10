import React from 'react'

const LogoHeaderComponent = ({style,outerStyle,imageUrl}:any) => {
  return (
    <div style={outerStyle}>
        <img src={imageUrl} alt="logoHeader" style={style}/>
    </div>
  )
}

export default LogoHeaderComponent