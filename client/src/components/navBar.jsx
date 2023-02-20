import React from "react";
import style from "./navBar.module.css";
import {useState, useEffect} from "react";
import {useDispatch,useSelector } from "react-redux";
import { GetCountries, filContinent, filPopulation, AzFilter} from "../actions";
import { Link } from "react-router-dom";
 import  Home from "./Home";
    
const Navbar = () => {
    const [order, setOrder] = useState('');
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    

    
    useEffect(()=>{
        dispatch(GetCountries());
        // dispatch(filContinent())
    },[dispatch])

    function handleAZ(e) {
        e.preventDefault();
         dispatch(AzFilter(e.target.value))
         setOrder(e.target.value)
     }


     function handlePopulations(e) {
        e.preventDefault();
         dispatch(filPopulation(e.target.value))
         setOrder(e.target.value)
     }


     function handleContinents(e) {
        //e.preventDefault();
         dispatch(filContinent(e.target.value));
         setOrder(e.target.value);
        
         

     }

     function handleClick(e){
        e.preventDefault();
        dispatch(GetCountries());
    }
    

   


    return(
        <div className={style.navbar}>
        
            <div className={`${style.nav_items} ${isOpen && style.open}`}>

            <Link to= "/Activity">
                <button className={`button && ${style.button}`}>Crear actividad</button>                                                       
             </Link>
     
<div>
            <select className={` ${style.button3}`} onChange={e=> handlePopulations(e)}>
                        <option value='Max' key='Max'>Max population</option>
                        <option value='Min' key='Min'>Min population</option>
                       </select>
</div>

<div>
                       <select className={` ${style.button2}`} onChange={e=> handleContinents(e)}>
                        <option value='All' key='All'>All continents</option>
                        <option value='Africa' key='Africa'>Africa</option>
                        <option value='Antarctica' key='Antarctica'>Antarctica</option>
                        <option value='Asia' key='Asia'>Asia</option>
                        <option value='Europe' key='Europe'>Europe</option>
                        <option value='North America' key='NorthAmerica'>North America</option>
                        <option value='Oceania' key='Oceania'>Oceania</option>
                        <option value='South America' key='SouthAmerica'>South America</option>
                      </select>
</div>

               <button className={` ${style.button5}`} onClick={e=>{handleClick(e)}}>Clean filters    🧹</button>
                
                <div>

                    <select  className={`${style.button4}`} onChange={handleAZ}>
                        <option value='AZ' key='AZ'>A-Z</option>
                        <option value='ZA' key='ZA'>Z-A</option>
                    </select>
                </div>
            </div>

            <div className={`${style.nav_toggle} ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar