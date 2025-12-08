import React from 'react'

const ImageComponent = ({imageUrl,style,outStyle}:any) => {
  return (
    <div>
        <img src={imageUrl} alt="Image" style={style}/>
    </div>
  )
}

export default ImageComponent