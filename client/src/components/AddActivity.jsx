import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GetActivity, GetCountries, PostACtivity } from '../actions/index';
import style from "./AddActivity.module.css";
import { Link } from 'react-router-dom';




function valida(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "Name required"
    }
    return errors;
}

function AddActivity() {
    const dispatch = useDispatch()
    const history = useHistory()

    
    const countries = useSelector(state => state.countries).sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;
    })

    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    useEffect(() => {
        dispatch(GetCountries())
    }, [dispatch])

    useEffect(() => {
        dispatch(GetActivity())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(valida({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(id) {
        setInput({
            ...input,
            countries: [...input.countries, id.target.value]
        })
    }

    function handleSeason(e) {
        setInput({
            ...input,
            season: e.target.value
        })
    }

    function handleSelctDifficulty(e) {
        setInput({
            ...input,
            difficulty: e.target.value
        })
    }

    function handleSelectDuration(e) {
        setInput({
            ...input,
            duration: e.target.value
        })
    }

    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(PostACtivity(input))

       /*  alert('enviado') */
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
        })
         history.push('/Home')
    
    }

    const season = ['Summer', 'Autumn', 'Winter', 'Spring'];
    const difficulty = [1, 2, 3, 4, 5];
    const duration = ["30 M", "1H", "2H", "3H", "+H"];

    return (
        <div className={style.form}
        >
            <div className={style.container}
            >
                <div ><Link  to = "/Home"><button className={style.button}>Volver</button></Link> </div>

                <div>
                    <h2>Add Activity</h2>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div //</form>className={style.act}
                            >
                                <label>Activity: </label>
                                <input type="text" value={input.name} name="name" onChange={handleChange} placeholder="Activity name..." required />
                                {errors.name && (
                                    <p /*className={style.error}*/>
                                        {/* {errors.name} */}
                                        </p>
                                )}
                            </div>
                            <div //className={style.season}
                            >
                        
                                <label>Season: </label>
                                <select onChange={handleSeason} required>
                                    <option value="" hidden>Select season</option>
                                    {season.map(e => (
                                        <option value={e} name="season" key={e} >{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div //className={style.diffi}
                            >
                                <label>Difficulty: </label>
                                <select onChange={handleSelctDifficulty} required >
                                    <option value="" hidden>Choose an option</option>
                                    {difficulty.map(e => (
                                        <option value={e} name="difficulty">{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div >
                                <label>Duration: </label>
                                <select onChange={handleSelectDuration} required>
                                    <option value="" hidden>Choose an option</option>
                                    {duration.map(e => (
                                        <option value={e} name="duration">{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div >
                                <label>Country: </label>
                                <select onChange={handleSelect} required>
                                    <option value="" hidden>Select country</option>
                                    {countries.map(e => (
                                        <option value={e.id} name="countries" key={e.id} >{e.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <ul>
                                    <li>{input.countries.map(i =>
                                        <div>
                                            {i}
                                            <button onClick={() => handleDelete(i)} type="button">X</button>
                                        </div>)}</li>
                                </ul>
                            </div>
                            <button type="submit">Add Activity</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddActivity
