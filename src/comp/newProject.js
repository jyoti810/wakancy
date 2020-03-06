import React from 'react';
import './newProject.css';



const Wak=({colorProp,icon,cont})=>{
    return(
    <div className="one" style={{background:colorProp}}>
        <img src={icon}></img>
        <p>{cont}</p>

    
    </div>


    )
}

export default Wak;
