import React from "react";
import Homeimage from '../../assests/images/Homeimage.svg';

const Home = () => {
  return (
    <div className="flex justify-center bg-primary ">
      <div className="flex justify-items-start text-5xl items-center max-w-[628px] leading-relaxed font-bold text-emrald">The Book of Higher Learning...JECKON</div>
      <div className="flex justify-items-end items-center">
        <img src={Homeimage} className="max-w-[641px]" alt="home"/>
      </div>
    </div>
  );
};

export default Home;
