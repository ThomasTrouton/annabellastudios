
import React from "react";
import { Link } from "react-router-dom";

import first from "../../assets/portfolio/vertical/D1E4CE1A-F678-4A0A-8BB2-EEF81806C057.jpeg"
import second from "../../assets/portfolio/vertical/8472DA9B-F804-4FF0-B481-61D4262767E8.jpeg"
import third from "../../assets/portfolio/horizontal/110818_2123.jpg"
import fourth from "../../assets/portfolio/vertical/512F8923-7592-4A3D-BB92-E872B6DC9E9A.jpeg"
import fifth from "../../assets/portfolio/vertical/F885031B-EE3C-470C-889F-3F31A1CD63E0.JPG"
import sixth from "../../assets/portfolio/horizontal/34E97A0B-6827-4396-BD95-9566A75E918F.jpg"

function Posts() {
  return (
    <div className="home">
      <div className="container">
      <div className="container">
     <p className="tab-heading">
      Portfolio
     </p>
     <div className="row mt-4">
      <div className="col">
       <div className="img-hover">
       <Link to="/portfolio/summer-long-lunch">
        <img className="w-100" loading="lazy" src={first}/>
        <div className="overlay">
         <div className="text text-overlay">
          Summer Long Lunch
         </div>
        </div>
        </Link>
       </div>
      </div>
      <div className="col">
       <div className="img-hover">
       <Link to="/portfolio/baby-shower">
        <img className="w-100" loading="lazy" src={second} />
        <div className="overlay">
         <div className="text text-overlay">
          Baby Shower
         </div>
        </div>
        </Link>
       </div>
      </div>
     </div>
     <div className="row mt-4">
      <div className="col">
       <div className="img-hover">
       <Link to="/portfolio/sarah-conor">
        <img className="w-100" loading="lazy" src={third} />
        <div className="overlay">
         <div className="text text-overlay">
          Sarah &amp; Conor Wedding
         </div>
        </div>
        </Link>
       </div>
      </div>
     </div>
     <div className="row mt-4">
      <div className="col">
       <img className="w-100" loading="lazy" src={fourth} />
      </div>
      <div className="col">
       <img className="w-100" loading="lazy" src={fifth} />
      </div>
     </div>
     <div className="row mt-4 mb-5">
      <div className="col">
       <img className="w-100" loading="lazy" src={sixth} />
      </div>
     </div>
    </div>
      </div>
    </div>
  );
}

export default Posts;
