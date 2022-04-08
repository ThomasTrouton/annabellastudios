import React from "react";

import img0 from "../../assets/portfolio/detailled/sarah/0.jpg"
import img1 from "../../assets/portfolio/detailled/sarah/1.jpg"
import img2 from "../../assets/portfolio/detailled/sarah/2.jpg"
import img3 from "../../assets/portfolio/detailled/sarah/3.jpg"
import img4 from "../../assets/portfolio/detailled/sarah/4.jpg"
import img5 from "../../assets/portfolio/detailled/sarah/5.jpg"
import img6 from "../../assets/portfolio/detailled/sarah/6.jpg"
import img7 from "../../assets/portfolio/detailled/sarah/7.jpg"
import img8 from "../../assets/portfolio/detailled/sarah/8.jpg"
import img9 from "../../assets/portfolio/detailled/sarah/9.jpg"
import img10 from "../../assets/portfolio/detailled/sarah/10.jpg"

function SarahConor() {
  return (
    <div className="sarahConor">
     <div className="container text-center">
     <img className="img-fluid mx-auto" src={img0} />
     <div className="row mt-3 mt-lg-5">
      <div className="col">
       <p className="descr-1">
       SARAH & CONOR
       </p>
      </div>
     </div>
     <div className="row mb-3">
      <div className="col-12 col-lg-6">
       <p className="para-1 mb-0">
        Location
       </p>
       <p className="descr-1">
        Oystershed London
       </p>
      </div>
      <div className="col-12 col-lg-6">
       <p className="para-1 mb-0">
        Photographer
       </p>
       <p className="descr-1">
        .
       </p>
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img1} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img2} />
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img3} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img4} />
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img5} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img6} />
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img7} />
      </div>
      <div className="col-12 col-lg-6 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img8} />
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

export default SarahConor;