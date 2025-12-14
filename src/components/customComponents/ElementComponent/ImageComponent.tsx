import React from 'react'

const ImageComponent = ({imageUrl,style,outerStyle,url}:any) => {
  return (
   
      <a href={url} style={outerStyle}>

        <img src={imageUrl} alt="Image" style={style}/>
      </a>
  
  )
}

export default ImageComponent