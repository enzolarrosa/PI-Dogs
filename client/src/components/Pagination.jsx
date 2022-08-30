import React from "react";
import p from '../style/pagination.module.css'

export default function Pagination({dogsPage,dogs, paginado}) {

    const pageNumber= []

    for(let i=0; i<= Math.floor(dogs/dogsPage); i++){
       pageNumber.push(i+1)
    }

    return(
        <div className={p.conteiner}>
            <div className={p.divUl}>
            <ul className={p.ul}>
                {pageNumber.length && pageNumber.map(n => {
                    return (
                        <li className={p.li} key={n}>
                            <button key={n} onClick={() => paginado(n)}>{n}</button>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>

    )
}