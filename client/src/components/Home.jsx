import React, {useState, useEffect} from "react";
import Card from './Card'
import { useDispatch, useSelector } from "react-redux";
import { detail, filterCreate, filterTemp, getDog, getTemp , orderName, orderW} from "../actions";
import Pagination from "./Pagination";
import h from '../style/home.module.css'
import Nav from "./Nav";


export default function Home() {
    
    const dispatch= useDispatch()
    const dogs= useSelector(state => state.dog)
    const [page, setPage] = useState(1)
    const [dogsPage ,] = useState(8)
    const lastDogs= page * dogsPage 
    const [, setOrder] = useState('')
    const firtDogs= lastDogs - dogsPage
    const currentDogs= dogs.slice(firtDogs,lastDogs)
    const temperaments= useSelector(state => state.temperament)

    const paginado = (pageNumber) => {
        setPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDog())
        dispatch(getTemp())
        dispatch(detail())
    }, [dispatch])

    function handleCreate (e) {
        e.preventDefault()
        dispatch(filterCreate(e.target.value))
        setPage(1)
    }

    function handleTemp (e) {
        e.preventDefault()
        dispatch(filterTemp(e.target.value))
        setPage(1)
    }

    function handleOrderName (e) {
        e.preventDefault()
        dispatch(orderName(e.target.value))
        setPage(1)
        setOrder(`${e.target.value}`)
    }

    function handleOrderWeight (e) {
        e.preventDefault()
        dispatch(orderW(e.target.value))
        setPage(1)
        setOrder(`${e.target.value}`)
    }


    return(
        <div className={h.home}>
            <Nav setPage={setPage} />
            <div className={h.divSelect}>
            <select onChange={(e) => handleOrderName(e)}>
                <option value='all'>Order By Name:</option>
                <option key='A' value='A' >A - Z</option>
                <option key='Z' value='Z'>Z - A</option>
            </select>
            <select onChange={(e) => handleOrderWeight(e)}>
                <option value='all'>Order By Weight:</option>
                <option key='asc' value='asc' >Ascendant</option>
                <option key='desc' value='desc'>Falling</option>
            </select>
            <select onChange={(e) => handleCreate(e)}>
                <option value='all'>Order By Create:</option>
                <option key='API' value='API' >API</option>
                <option key='DB' value='DB'>DB</option>
            </select>
            <select onChange={(e) => handleTemp(e)}>
                <option key='all' value='all' >Filter by Temp.</option>
                {temperaments && temperaments.map( e => {
                    return(
                        <option key={e.name} value={e.name} >{e.name}</option>
                    )
                })}
            </select>
            </div>


            { typeof currentDogs === 'object' ?
            <Pagination dogsPage={dogsPage} dogs={dogs.length} paginado={paginado}  /> : <Pagination dogsPage={dogsPage} dogs={0} paginado={paginado} />  }
            <div className={h.contCard}>
            <div className={h.cards}>
                {typeof currentDogs != 'object' || currentDogs.length===0 ? <img width='300px' heigth='300px' alt="esperando" src="https://i.pinimg.com/originals/8c/21/96/8c2196780eb48b18fcce2de130a213bb.gif"/> : currentDogs.map(e =>{
                    return(
                        <Card key={e.id} id={e.id} name={e.name} img={e.img} weight={e.weight} temperaments={e.temperaments}   />
                    )
                })}
            </div>
            </div>
            { typeof currentDogs === 'object' ?
            <Pagination dogsPage={dogsPage} dogs={dogs.length} paginado={paginado}  /> : <Pagination dogsPage={dogsPage} dogs={0} paginado={paginado} />  }
        </div>
    )
}