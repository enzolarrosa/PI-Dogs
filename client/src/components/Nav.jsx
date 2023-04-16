import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {getName} from '../actions/index'
import n from '../style/nav.module.css'
import {BiSearchAlt2} from 'react-icons/bi'

export default function Nav({setPage}){

    const dispatch = useDispatch()


    function handleSearch(e) {
       e.preventDefault()
       dispatch(getName(e.target.value))
       setPage(1)
    }

    return (
    <nav className={n.nav}>
       <div className={n.conteiner}>
        <div className={n.create}>
            <Link to='/create'>
            <button className={n.dog}>Create Dog!</button>
            </Link>
        </div>
        <div className={n.navbar}>
        <button className={n.btnSearch}><BiSearchAlt2/></button>
        <input onChange={(e) => handleSearch(e)} className={n.search} placeholder='Search...' type="search" />
        </div>
       </div>
    </nav>
    )
}