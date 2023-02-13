import React from "react";
import style from "./Card.module.css"


export default function Card({name, image, continent}) {
    return (
        <div className={style.container}>
            <div className={style.text}> 
                <h1 >{name}</h1>
         <hr/>
           <h3>{continent}</h3>
            </div>
          

            <div ><img className={style.img} src={image} alt="imagen de pais"/></div>
            
        </div>
    );
}