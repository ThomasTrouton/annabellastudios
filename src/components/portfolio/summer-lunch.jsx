import React from "react";

import img0 from "../../assets/portfolio/detailled/yellow/0.jpeg"
import img1 from "../../assets/portfolio/detailled/yellow/1.jpeg"
import img2 from "../../assets/portfolio/detailled/yellow/2.jpeg"
import img3 from "../../assets/portfolio/detailled/yellow/3.jpeg"
import img4 from "../../assets/portfolio/detailled/yellow/4.jpeg"
import img5 from "../../assets/portfolio/detailled/yellow/5.jpeg"
import img6 from "../../assets/portfolio/detailled/yellow/6.jpeg"
import img7 from "../../assets/portfolio/detailled/yellow/7.jpeg"
import img8 from "../../assets/portfolio/detailled/yellow/8.jpeg"

function SummerLunch() {
  return (
    <div className="summerLunch">
     <div className="container text-center">
     <img className="img-fluid mx-auto" src={img0} />
     <div className="row mt-3 mt-lg-5">
      <div className="col">
       <p className="descr-1">
        Summer Long Lunch
       </p>
      </div>
     </div>
     <div className="row mb-3">
      <div className="col-12 col-lg-6">
       <p className="para-1 mb-0">
        Location
       </p>
       <p className="descr-1">
        Water St Kitchen
       </p>
      </div>
      <div className="col-12 col-lg-6">
       <p className="para-1 mb-0">
        Photographer
       </p>
       <p className="descr-1">
        Paul Beutel
       </p>
      </div>
     </div>
     <div className="row justify-content-around">
      <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img1} alt="first" />
      </div>
      <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
        <img className="img-fluid w-80" loading="lazy" src={img2} />
      </div>
      <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
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
      <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img6} />
      </div>
      <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
        <img className="img-fluid w-80" loading="lazy" src={img7} />
      </div>
      <div className="col-12 col-lg-4 mt-0 mt-lg-3 mb-3 px-3">
       <img className="img-fluid w-80" loading="lazy" src={img8} />
      </div>
     </div>
    </div>
    </div>
  );
}

export default SummerLunch;