import React from "react";
import Cardimage1 from "../../assests/images/About-icon1.svg";
import Cardimage2 from "../../assests/images/About-icon2.svg";
import Cardimage3 from "../../assests/images/About-icon3.svg";

const About = () => {
  return (
    <div id="About" className="">
      <h2 className="text-2xl text-center text-gray-400 font-semibold my-20">
        Trusted by Schools Accross Lagos, Abuja, Nasarrawa and Porthacourt
      </h2>
      <div className="text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold my-8  text-teal-700 ">
          All in one <span className="text-orange-500">Exercise Book</span>{" "}
          Solution
        </h1>
        <p className="max-w-[528px]">
          Our meticulously designed resource enhances learning, combining
          creativity and academic excellence in a single, comprehensive tool for
          young scholars' holistic development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <div class=" flex flex-col mt-6 text-gray-700 bg-slate-100 hover:bg-slate-300 hover:scale-110 shadow-md bg-clip-border rounded-xl mx-5 max-w-[350px] max-h-[350px]">
          <div class="p-6 ">
            <img src={Cardimage1} alt="" className="" />
            <h5 class="mb-2 text-xl font-semibold leading-snug mt-25">
              Engaging Content
            </h5>
            <p class="leading-relaxed">
              Our books captivate young minds with colorful illustrations and
              interactive exercises, fostering joyful learning experiences.
            </p>
          </div>
        </div>
        <div class="flex flex-col mt-6 text-gray-700 bg-slate-100 hover:bg-slate-300 hover:scale-110  shadow-md bg-clip-border rounded-xl mx-5 max-w-[350px] max-h-[350px]">
          <div class="p-6">
            <img src={Cardimage2} alt="" />
            <h5 class="mb-2 text-xl font-semibold leading-snug">
              Curriculum Aligned
            </h5>
            <p class=" leading-relaxed">
              Meticulously designed to align with educational standards,
              ensuring seamless integration into nursery and primary school
              curricula
            </p>
          </div>
        </div>
        <div class="flex flex-col mt-6 text-gray-700 bg-slate-100 hover:bg-slate-300 hover:scale-110 shadow-md bg-clip-border rounded-xl mx-5 max-w-[350px] max-h-[350px]">
          <div class="p-6">
            <img src={Cardimage3} alt="" />
            <h5 class=" mb-2 text-xl font-semibold leading-snug">
              Holistic Learning
            </h5>
            <p class="leading-relaxed">
              Our books embrace a multisensory approach, stimulating all senses
              to facilitate comprehensive understanding and enrich children's
              learning journeys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
