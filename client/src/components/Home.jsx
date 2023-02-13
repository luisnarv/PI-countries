import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { GetCountries, filContinent, filPopulation, AzFilter, SearchCountry } from "../actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import style from "./Home.module.css";
import img from "../IMG/2.4.png";





export default function Home(){

    const [order, setOrder] = useState('')
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    //{ estados globales 
    const [currentPage,setCurrentPage] = useState(1) //estado con la página actual y un estado que
    // setea la página (1) es por que la pagina inicial es 1 
    
    const [countriesPage, setCountriesPage] = useState(10) // va a setear las country por pagina 10xpagina
 
    //}fin de estados 
    const lastCountri = currentPage * countriesPage 
    const firstCountri = lastCountri - countriesPage 
    const currentCountries = allCountries.slice(firstCountri,lastCountri) //va a contener las countri de la pagina actual 

    const paginado = (pageNumber)=>{
        if(pageNumber === 1){setCountriesPage(9)}else{setCountriesPage(10)}
        setCurrentPage(pageNumber)
    }





    useEffect(()=>{
        dispatch(GetCountries());
        // dispatch(filContinent())
    },[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(GetCountries());
}




function handlePopulations(e) {
   //e.preventDefault();
    dispatch(filPopulation(e.target.value))
    setOrder(e.target.value)
}

    function handleContinents(e) {
       //e.preventDefault();
        dispatch(filContinent(e.target.value))
        setOrder(e.target.value)
    }

    function handleAZ(e) {
       e.preventDefault();
        dispatch(AzFilter(e.target.value))
        setOrder(e.target.value)
    }


 function handleSearch(e) {
        dispatch(SearchCountry(e.target.value))
    }


 return (
 <div className={style.container}>

    
            
            <h1 className={style.txt}>Api Countries</h1> 
     <div>
          <div className={style.nav}>
                <Link to= "/Activity">
                     <button className={style.button}>Crear actividad</button> 
                     </Link>
                         <input className={style.search}type='text'  placeholder="Search country ...            🔍" onChange={handleSearch}/>

                               <button className={style.button5} onClick={e=>{handleClick(e)}}>Clean filters 🧹</button>

                   <div>
                       <select className={style.button2} onChange={e=> handleContinents(e)}>
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

      
                     <div>
                       <select className={style.button3} onChange={e=> handlePopulations(e)}>
                        <option value='Max' key='Max'>Max population</option>
                        <option value='Min' key='Min'>Min population</option>
                       </select>
                    </div>

                 
                 <div>
                    <select  className={style.button4} onChange={handleAZ}>
                        <option value='AZ' key='AZ'>A-Z</option>
                        <option value='ZA' key='ZA'>Z-A</option>
                    </select>
                </div>
    
       
       </div>
<img className={style.home} src={img} alt="" />
       <div >
    {/* paginado con estados */}
     
       <Paginado
countriesPage={countriesPage+1}
allCountries = {allCountries.length}
paginado = {paginado}
/> 
     </div>
                      <div className={style.card}>
                {




                 currentCountries?.map( (c)=> {
                        return(
                            <div >
                                <div>
                            <Link to={"/countries/" + c.id}>

                        <Card  name= {c.name} image= {c.image} continent={c.continent}/>
                        </Link>
                        </div>
                        </div>
                        );
                    })
                }
</div>

            </div>


        </div>
    )



}


























    // return (
    //     <div>
    //         <Link to= "/countries">crear actividad</Link>
    //         <h1>TITULO DE LA PAGINA</h1>
    //         <button onClick={e=>{handleClick(e)}}>volver a cargar todas las countries</button>
    //         <div>
    //             <select>
    //                 <option value="asc">Ascendente</option>
    //                 <option value="desc">Descendente</option>
    //             </select>

    //             {
    //              currentCountries.map( el=> {
    //                     return(
    //                     <Card name= {el.name} image= {el.image} continent={el.continent}/>)
    //                 })
    //             }

    //         </div>
    //     </div>
    // )

