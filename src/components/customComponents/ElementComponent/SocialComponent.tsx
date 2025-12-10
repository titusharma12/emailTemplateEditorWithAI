import React from 'react'

const SocialComponent = ({ socialIcons,style,outerStyle}:any) => {
  return (
    <div style={outerStyle}>
       {
 socialIcons?.map((icon:any,index:number)=>(
      <a key={index} href={icon.url} >
        <img src={icon.icon} alt="social-icon" style={style}/>
      </a>
    ))
       } 
    </div>
   
  )
}

export default SocialComponent