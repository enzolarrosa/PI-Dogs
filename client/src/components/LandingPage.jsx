import React from "react";
import {Link} from 'react-router-dom'
import l from '../style/landingPage.module.css'

export default function Landing(){
    return (
        <div className={l.landing}>
                {/* <h1 className={l.h1}>PI DOGS</h1> */}
            <Link to='/home'>
            <button className={l.btn}>Start</button>
            </Link>
        </div>
    )
}