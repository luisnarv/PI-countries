import React from "react";
import {Link } from 'react-router-dom';
import style from "./Landing.module.css"
import img from "../IMG/1.jpg";
import img2 from "../IMG/9.png";
import img3 from "../IMG/1.3.jpg";
import img4 from "../IMG/1.8.png";
import "./landing.css"

 function Landing() {

  return (
    
    <div className={`container && ${style.container} `} > 
    <div className={`container2 && ${style.container2} `}> 

    
    
    





    </div>
          <img className={`img && ${style.img}`}  src={img} alt="img"></img>
     <div>
     
        
          <img className={`img3 && ${style.img3}`} src={img3} alt="img3" ></img>
          
 

<img className={`img4 && ${style.img4}`} src={img4} alt="img4"></img>


<Link to="/Home"><img  className={`img2 && ${style.img2}`} src={img2}  alt="img2"></img>
     
     </Link>
     <div className={`text2 && ${style.text2}`} >
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