import React from "react";
import Homeimage from '../../assests/images/Homeimage.svg';

const Home = () => {
  return (
    <div className="flex ">
      <div className="flex justify-items-start text-3xl ">One App, All of your exams in e-series</div>
      <div className="flex justify-items-end">
        <img src={Homeimage}/>
      </div>
    </div>
  );
};

export default Home;
