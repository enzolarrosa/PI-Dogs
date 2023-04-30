import React from "react";
import p from '../style/pagination.module.css'

export default function Pagination({dogsPage,dogs, paginado, string,index}) {

    const pageNumber= []

    for(let i=0; i<= Math.floor(dogs/dogsPage); i++){
       pageNumber.push(i+1)
    }

    return(
        <div className={p.conteiner}>
            <div className={p.divUl}>
            <ul className={p.ul}>
                {string !== 'dog not found' && pageNumber.length && pageNumber.map((n,i) => {
               return(  index === i? 
                                <li className={p.li} key={n}>
                                    <button className={p.index} key={n} onClick={() => paginado(n)}>{n}</button>
                                </li>
                         :  <li className={p.li} key={n}>
                         <button key={n} onClick={() => paginado(n)}>{n}</button>
                     </li>
                  )
                })}
            </ul>
            </div>
        </div>

    )
}