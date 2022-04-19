import React from "react";

import img0 from "../../assets/portfolio/detailled/birthday-celebration/0.jpg"
import img1 from "../../assets/portfolio/detailled/birthday-celebration/1.jpg"
import img2 from "../../assets/portfolio/detailled/birthday-celebration/2.jpg"
import img3 from "../../assets/portfolio/detailled/birthday-celebration/3.jpg"
import img4 from "../../assets/portfolio/detailled/birthday-celebration/4.jpg"
import img5 from "../../assets/portfolio/detailled/birthday-celebration/5.jpg"
import img6 from "../../assets/portfolio/detailled/birthday-celebration/6.jpg"
import img7 from "../../assets/portfolio/detailled/birthday-celebration/7.jpg"
import img8 from "../../assets/portfolio/detailled/birthday-celebration/8.jpg"
import img9 from "../../assets/portfolio/detailled/birthday-celebration/9.jpg"
import img10 from "../../assets/portfolio/detailled/birthday-celebration/10.jpg"
import img11 from "../../assets/portfolio/detailled/birthday-celebration/11.jpg"
import img12 from "../../assets/portfolio/detailled/birthday-celebration/12.jpg"


function BirthdayCelebration() {
  return (
    <div className="birthdayCelebration">
     <div className="container text-center">
     <img className="img-fluid mx-auto" src={img0} />
     <div className="row mt-3 mt-lg-5">
      <div className="col">
       <p className="descr-1">
        Birthday Celebration
       </p>
      </div>
     </div>
     <div className="row mb-3">
      <div className="col-12 col-lg-6">
       <p className="para-1 mb-0">
        Location
       </p>
       <p className="descr-1">
        Private Residence
       </p>
      </div>
      <div className="col-12 col-lg-6">
       <p className="para-1 mb-0">
        Photographer
       </p>
       <p className="descr-1">
       Bobby Rein
       </p>
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img11} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img12} />
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img1} />
      </div>
      {/* <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
        <img className="img-fluid w-80" loading="lazy" src={img2} />
      </div> */}
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
        <img className="img-fluid w-80" loading="lazy" src={img3}/>
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img4} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img5} />
      </div>
     </div>

     <div className="row justify-content-around">
      {/* <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img6} />
      </div> */}
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
        <img className="img-fluid w-80" loading="lazy" src={img7} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
        <img className="img-fluid w-80" loading="lazy" src={img8}/>
      </div>
     </div>

     <div className="row justify-content-around">
      <div className="col-12 col-lg-12 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img6} />
      </div>
     </div>

     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img9} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img10} />
      </div>
     </div>
    </div>
    </div>
  );
}

export default BirthdayCelebration;