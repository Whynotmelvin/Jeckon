import React from "react";
import Homeimage from "../../assests/images/Group 7902.png";
import Bannerimage from "../../assests/images/Banner-img1.jpg";
import Bannerimage2 from "../../assests/images/Banner-img2.jpg";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div id="Home">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center  bg-primary">
        <div className="text-center  md:my-14">
          <h1 className="text-5xl leading-relaxed font-bold text-teal-700 max-w-[808px]">
            The Book of Higher Learning
            <br />
            <span className="text-orange-500">... JEKON</span>
          </h1>
          <h6 className="max-w-[528px] mx-auto text-bold leading-relaxed my-10">
            Enriching Learning Journeys: Explore our diverse collection of
            engaging and educational books tailored for primary and nursery
            schools, crafted by Jekon Publishers
          </h6>
          <Link>
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full my-4 sm:my-3">
              Contact us 
            </button> 
          </Link>
        </div>
        <div className="flex justify-items-end items-center my-20 md:my-14">
          <img src={Homeimage} width={440} height={224} alt="home" />
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

      <div className="grid grid-cols-1 md:grid-cols-2 my-12 justify-items-center">
        <div className="hidden sm:block">
          <img
            src={Bannerimage}
            width={440}
            height={224}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className=" ">
          <img
            src={Bannerimage2}
            width={440}
            height={224}
            alt=""
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
