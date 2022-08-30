import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from "react-router-dom";
import { getDetail} from '../actions/index'
import d from '../style/detail.module.css'

export default function Detail() {

   const {id} = useParams()
   const dispatch = useDispatch()
   const detail= useSelector(state => state.dogDetail)

   useEffect(() => {
    dispatch(getDetail(id))
   },[dispatch,id])

   return(
      <div className={d.conteiner}>
        { !detail.img? <div className={d.divLoading}>  <img width='300px' heigth='300px' alt="esperando" src="https://i.pinimg.com/originals/8c/21/96/8c2196780eb48b18fcce2de130a213bb.gif"/> </div> :
         <div className={d.divDetail}>
          
             <div  className={d.divImg}>
             <h1>{detail.name}</h1>
               <img  className={d.img} src={detail.img} alt='detail' />
             </div>
             <div  className={d.divInfo}>
               <p>{detail.name} , has a height between {detail.height} CM  and While their weight is between {detail.weight} KG . The life expectancy of these dear friends is {detail.lifeSpan} .  The temperaments that qualify this breed or dog are :  {detail.temperaments} . </p>
             </div>
             <div  className={d.divBtn}>
               <Link to='/home'>
               <button >Back</button>
               </Link>
             </div>
            
         </div>
}
      </div>
   )

}
