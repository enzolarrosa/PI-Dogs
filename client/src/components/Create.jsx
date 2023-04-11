import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import { getTemp, postDog } from "../actions";
import img from '../img/logoCreate.png'
import c from '../style/create.module.css'



function validate (input) {
    const vName = /^[a-zA-Z\s]+$/ ;
    let error = {}
    if (!vName.test(input.name)) {
        error.name = "Do not use special characters and/or numbers"
    }
    if(input.name?.length === 0) {
        error.name = "Write a name"
    }
    if(input.weight1 < 2 || input.weight1 > 100 || input.weight2 < 2 || input.weight2 > 100 ) {
        error.weight= "Cannot pass less than 2 or more than 100 KG"
    }
    if(input.weight1.length === 0 || input.weight2.length === 0) {
        error.weight= 'Write a weight'
    }
    if(input.height1.length === 0 || input.height2.length === 0) {
        error.height= 'Write a height'
    }
    
    return error
}

export default function Create () {
    const dispatch = useDispatch()
    const allTemp = useSelector(state => state.temperament)
    const [err, setErr] = useState({})
    const history = useHistory()
    const [input , setInput] = useState({
        name: '',
        img: '',
        height1: '',
        height2: '',
        weight1: '',
        weight2: '',
        lifeSpan1: '',
        lifeSpan2: '',
        temperament: [],
    })

    useEffect(() => {
        dispatch(getTemp())
    }, [dispatch])
    

    function handleInput (e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErr(validate({
            ...input,
            [e.target.name] : e.target.value
        }))


    }

    function handleTempe(e) {
        e.preventDefault()
        if(!input.temperament.includes(e.target.value)){
            if(input.temperament.length === 5) return;
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value]
            })
        }
    }
    
    function handleDelete(e) {
        setInput({
            ...input,
            temperament: input.temperament.filter(el => el !== e)
        })
    }
    
    function handleSubmit (e) {
        e.preventDefault()
        if(err.name) { return alert(err.name)}
        if(err.height) { return alert(err.height)}
        if(err.weight) { return alert(err.weight)}
        if(!err.length){            
            dispatch(postDog(input))
            history.push('/home')
        }
    }

    console.log('height1 :' + input.height1  )
    
    return (
        <div className={c.conteiner}>
            <div className={c.divMuestra}>
            <h2>You Dog</h2>
            <div className={c.divImg}>
            <img className={c.img} src={img} alt='create'/> 
            </div>
            <div className={c.divP}>
            <p>Name : {input.name}</p>
            <p>Weight : {input.weight1 + ' - ' + input.weight2 + ' Kg'}</p>
            <p>Temperaments : </p>
            </div>
            <div className={c.divTemp}>
            {input.temperament && input.temperament.map(e => {return <span value={e}>{e} <button onClick={() => handleDelete(e)}>x</button></span>})}
            </div>
            </div>
            <form className={c.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={c.divForm}>
            <h3>Create You Dog</h3>
                <label>Name: </label>
                <div className={c.inputName}>
                <input autoComplete='off' type='text' name='name' onChange={(e) => handleInput(e) } />
                {err.name && <div className={c.divH5} > <h5>{err.name}</h5></div>}
                </div>
                <label>Height: </label>
                <div className={c.divInput}>
                <input autoComplete='off' type='number' name='height1' placeholder="Height Min"  onChange={(e) => handleInput(e) } />
                <input autoComplete='off' type='number' name='height2' placeholder="Height Max" onChange={(e) => handleInput(e) } />
                {err.height && <div className={c.divH5} > <h5>{err.height}</h5></div>}
                </div>
                <label>Weight: </label>
                <div className={c.divInput}>
                <input autoComplete='off' type='number' name='weight1' placeholder="Weight Min"  onChange={(e) => handleInput(e) } />
                <input autoComplete='off' type='number' name='weight2' placeholder="Weight Min" onChange={(e) => handleInput(e) } />
                {err.weight && <div className={c.divH5}> <h5>{err.weight}</h5></div>}
                </div>
                <label>Life Span: </label>
                <div className={c.divInput}>
                <input autoComplete='off' type='text' name='lifeSpan1'  onChange={(e) => handleInput(e) } />
                <input autoComplete='off' type='text' name='lifeSpan2' onChange={(e) => handleInput(e) } />
                </div>
                <label>URL image: </label>
                <div className={c.inputName}>
                <input autoComplete='off' type='text' name='img' placeholder="It's not mandatory" onChange={(e) => handleInput(e) } />
                </div>
                <label>Temperaments: </label>
                <div className={c.inputName}>
                <select onChange={(e) => handleTempe(e)}>
                    <option></option>
                    {allTemp && allTemp.map(e => {
                        return(
                            <option name='temperament' key={e.name}  >{e.name}</option>
                        )
                    })}
                </select>
                </div>
            </div>
            <div className={c.divBtn}>
                <Link to='/home'>
                <button>Back</button>
                </Link>
                <button type="submit" >Submit</button>
            </div>
            </form>
        </div>
    )
}