import React, { useState, useEffect   } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GetActivity, GetCountries, PostACtivity } from '../actions/index';
import style from "./AddActivity.module.css";
import { Link } from 'react-router-dom';
// import "./AddActivity.css";
import img1 from "../IMG/sum.jpg"
import img2 from "../IMG/autum.jpg"
import img3 from "../IMG/winter.jpg"
import img4 from "../IMG/spring.jpg"


function valida(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "Name required"
    }     
  return errors;

}



function AddActivity () {
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




    const [errors, setErrors] = useState({

        name: '',

    })


    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        time:"",
        details:"",
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

        if(!e.target.value){setMostrarBoton(false)
        }else{setMostrarBoton(true)}
        
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

    function handleSelectTime(e){
        setInput({
            ...input,
            time: e.target.value
        })
    }

function handleDetail(e){
    setInput({
        ...input,
        details: e.target.value
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
        alert("enviado")
       /*  alert('enviado') */
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            time:"",
        details:"",
            countries: []
        })
        //  history.push('/Home')
    
    }

    const season = ['Summer', 'Autumn', 'Winter', 'Spring'];
    const difficulty = [1, 2, 3, 4, 5];
    const duration = ["30 M", "1H", "2H", "3H", "+H"];
    const time =["A.M.", "P.M."];



    const [mostrarBoton, setMostrarBoton] = useState(false);
    
    
    const mostrarBotonFunc = () => {
        if(input.name){
        setMostrarBoton(true)}
    }
    
  
    return (
        <div className={` ${style.form1}`}>
        <div className={`${style.form}`}>

 
<img className={` ${style.img1}`} src={img1} alt="img1" />
<img className={` ${style.img2}`} src={img2} alt="img2" />
<img className={`${style.img3}`} src={img3} alt="img3" />
<img className={`${style.img4}`} src={img4} alt="img4" />

     <Link  to = "/Home"><button className={`${style.radius}`}>x</button></Link> 
                    
                
                    
                    
                    
 <h2 className={` ${style.text}`}>Add Activity</h2>  
 <div>
<form className={` ${style.container}`} onSubmit={handleSubmit}>                                                    
                                
 <label>Activity: </label> 
 <input className={` ${style.select}`}type="text" value={input.name} name="name" onChange={handleChange}  placeholder="Activity name..." />
    {errors.name && ( <p className={style.error}>{errors.name}</p>)}
                                
                                        
                               
                        
<label className={` ${style.select2}`} >Season: </label>
 <select className={` ${style.select}`} onChange={handleSeason} required>
<option value={input.season} hidden>Select season</option>
{season.map(e => ( <option value={e} name="season" key={e} >{e}</option>))}
 </select>
                            
                            
                                <label>Difficulty: </label>
                                <select  className={`${style.select}`}  onChange={handleSelctDifficulty} required >
                                    <option value="" hidden>Choose an option</option>
                                    {difficulty.map(e => (
                                        <option value={e} name="difficulty">{e}</option>
                                    ))}
                                </select>
            
                                <label>Duration: </label>
                                <select className={`${style.select}`}  onChange={handleSelectDuration} required>
                                    <option value="" hidden>Choose an option</option>
                                    {duration.map(e => (
                                        <option value={e} name="duration">{e}</option>
                                    ))}
                                </select>

                                <label>Time: </label>
                                <select className={` ${style.select}`}  onChange={handleSelectTime} required>
                                    <option value="" hidden>Choose an option</option>
                                    {time.map(e => (
                                        <option value={e} name="time">{e}</option>
                                    ))}
                                </select>
                          
                           
                                <label>Country: </label>
                                <select className={`${style.select}`} onChange={handleSelect} required>
                                    <option className={style.select} value="" hidden>Select country</option>
                                    {countries.map(e => (
                                        <option value={e.id} name="countries" key={e.id} >{e.name}</option>
                                    ))}
                                </select>
                         
                            <div>
                                <ul>
                                    <li className={` ${style.lista}`}>{input.countries.map(i =>
                                        <div>
                                            {i}
                                            <button onClick={() => handleDelete(i)} type="button">❌</button>
                                        </div>)}</li>
                                </ul>
                            </div>

                            <label>Details: </label> 
<textarea  className={`${style.select}`} type="text" value={input.details} name="details" onChange={handleDetail} placeholder="Detail activity..."></textarea>

{mostrarBoton && ( <button id='boton' className={`${style.button}`} type="submit">Add Activity</button>)}



                        </form>
                    </div>
                
            
        </div>
        </div>
    )
                                                    
}

export default AddActivity
