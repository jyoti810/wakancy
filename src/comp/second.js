import React from 'react';
import './second.css';


 const Second=({colorProp,icon,cont,border,head,headColor})=>{
    return(
        <div className="two" style={{background:colorProp,border,head}}>
        
        <img src={icon}></img>
         <h3 style={{color:headColor}}>{head}</h3>
        <p>{cont}</p>

    
    </div>
    )
}
export default Second;