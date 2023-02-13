import React from "react";
import style from "./Paginado.module.css"

export default function Paginado ({ countriesPage, allCountries, paginado }) {
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(allCountries/countriesPage); i++){  // redondea las countri sobre la cantidad que se quiere por pagina 
       pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={style.lista}>
                {pageNumbers  && pageNumbers.map(number =>(
                    <li className={style.number} key={number}>
                    <a className={style.pagin} onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>

    )


}