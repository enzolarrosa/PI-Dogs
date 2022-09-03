import React from "react";
import c from '../style/card.module.css'
import { Link } from "react-router-dom";
import nicky from '../img/nicky.jpg'


export default function Card ({id, name , img , weight, temperaments}) {
  temperaments.forEach(e => e.name= e.name[0].toUpperCase() + e.name.substring(1))
    const temp= temperaments.map(e => {return e.name})
      return (
        <div key={id} className={c.conteiner} >
             <div className={c.divImg}><img className={c.img} src={img.length > 10 ? img : nicky } alt='dog' /></div>
             <div className={c.divP}>
             <h1>{name.toUpperCase()}</h1>
             <div className={c.divP}>
             <p>Weight : Between {weight} Kg</p>
             <p>Temperaments : {temp.join(', ')}</p>
             </div>
             </div>
             <div className={c.divDetail}>
          <Link to={`/detail/${id}`}>
              <button>Detail</button>
          </Link>
             </div>
        </div> 
      )
}