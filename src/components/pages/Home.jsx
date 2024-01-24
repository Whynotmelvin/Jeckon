import React from "react";
import Homeimage from "../../assests/images/Homeimage.svg";
import Bannerimage from "../../assests/images/Banner-img1.jpg";
import Bannerimage2 from "../../assests/images/Banner-img2.jpg";


const Home = () => {
  return (
    <div>
      <div className="flex justify-center bg-primary">
        <div className="flex justify-items-start text-5xl items-center max-w-[628px] leading-relaxed font-bold text-teal-700">
          The Book of Higher Learning...<span>JECKON</span>
        </div>
        <div className="flex justify-items-end items-center">
          <img src={Homeimage} className="max-w-[641px]" alt="home" />
        </div>
      </div>

      <div className="text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold my-12 text-teal-700 ">
          Who is <span className="text-orange-500">Jeckon Publishers </span>
        </h1>
        <p className="max-w-[528px] ">
          Jeckon Publishers excels in crafting vibrant and educational exercise
          books tailored for nursery to primary school. Our engaging materials
          foster curiosity, making learning a joyful journey for young minds.
        </p>
      </div>

      <div className="flex flex-row  justify-around my-12">
        <div>
          <img
            src={Bannerimage}
            width={440}
            height={224}
            alt=""
            className="rounded-lg mx-10"
          />
        </div>
        <div className="relative">
          <img
            src={Bannerimage2}
            width={440}
            height={224}
            alt=""
            className="rounded-lg mx-10"
          />
          <div className="absolute">
            <h1>Elevate the kids</h1>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
