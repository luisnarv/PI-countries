import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetDetail } from "../actions";
import { useEffect } from "react";
import style from "./Detail.module.css";
import img1 from "../IMG/3.2.1.png";

export default function Detail(props) {
const dispatch = useDispatch()
const detail = useSelector(state => state.detail)
const countrys = useSelector((state) => state.detail)
useEffect(()=> {
dispatch(GetDetail(props.match.params.id));
},[dispatch])


console.log(detail)
const activities = detail.activities?.map(e => {
    
    return { 
        id:e.id,
        name: e.name,
        difficulty: e.difficulty,
        duration: e.duration,
        season: e.season,
        time: e.time,
        details: e.details,
    }
  
})
let contador = 1
 

return(
<div className={style.container}>
<div className={style.container2}>
<div ><Link  to = "/Home"><img className={style.button}src={img1}></img></Link> </div>
{/* <div > <h1 className={style.button1}>Detail </h1> </div> */}
<div ><Link  to = "/Activity"> <h3 className={style.button2}>Created activity</h3></Link> </div>


<div>
    {
        !countrys.length > 0 ? //no es verdadero que la longitud de countrys sea mayor que 0

        //Si el resultado es falso, se ejecutará 
        //               |
        //               V
        <div className={style.countri}>
               <h1>{countrys.name}</h1>


 <div> <img className={style.img} src={countrys.image}/></div> 
              
              <p>Code: {countrys.id}</p>
               <p>Continent: {countrys.continent}</p>
               <p>Capital: {countrys.capital}</p>
               <p>Subregion: {countrys.subregion}</p>
               <p>Area: {countrys.area}</p>
               <p>Population: {countrys.population}</p>
             </div>
//Si el resultado de la evaluación es verdadero, se ejecutará la primera parte de la expresión:
             :  <p>LOADING....</p>
             }
              
</div>

<div className={style.fon}>
{activities?.length > 0 ? activities?.map(e => {
                                        return ( 
                                        <div>
                                            
                                            <div className={style.activity} key={e.id}>
                                                <h1>ACTIVITIES {contador ++}</h1>
                                                <p>Name: {e.name}</p>
                                                <p>Difficulty: {e.difficulty}</p>
                                                <p>Duration: {e.duration}</p>
                                                <p>Season: {e.season}</p>
                                                <p>Time: {e.time}</p>
                                                <p>Details: {e.details}</p>
                                                <hr></hr>
                                            </div>
                                            </div>
                                        )
                                    })
                                        : <p className={style.activity}>LOADING....</p>}

</div>
</div>
</div>

)



}