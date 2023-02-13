import React from "react";
import {Link } from 'react-router-dom';
import style from "./Landing.module.css"
import img from "../IMG/1.jpg";
import img2 from "../IMG/1.2.png";
import img3 from "../IMG/1.3.jpg";
import img4 from "../IMG/1.8.png";


 function Landing() {

  return (
    
    <div className={style.container} > 
    <div className={style.container2}> 

    
    
    





    </div>
          <img className={style.img}  src={img}></img>
     <div>
        
          <img className={style.img3} src={img3} ></img>
          
 

<img className={style.img4} src={img4}></img>


<Link to="/Home"><img  className={style.img2 && style.o} src={img2}></img>

    <h1 className={style.texto && style.p} >Welcome to World</h1>
     
     </Link>
     <div className={style.text2} >
<p>Tecnologías utilizadas  </p>
<p>React </p>
<p>Redux  </p>
<p>Sequelize </p>
<p>PostgreSQL </p>
<p>Nodejs  </p>
<p>Css  </p>
</div>
   


      </div>
    </div>
  );
}

export default Landing;