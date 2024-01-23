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
        <div>
          <h1 className="text-3xl font-bold my-12 ">
            Who is Jeckon Publishers
          </h1>
          <p className="max-w-[528px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            architecto nulla nesciunt, voluptatibus minus perspiciatis illum
            aperiam numquam pariatur voluptatum similique?.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row  justify-between">
            <div>
              <img src={Bannerimage} width={440} height={224} alt=""  className="rounded-lg"/>
            </div>
            <div>
              <img src={Bannerimage2} width={440} height={224} alt="" className="rounded-lg"/>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl mx-5 max-w-[350px] max-h-[350px]">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Engaging Content
              </h5>
              <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Our books captivate young minds with colorful illustrations and
                interactive exercises, fostering joyful learning experiences.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-[350px]">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Curriculum Aligned
              </h5>
              <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Meticulously designed to align with educational standards,
                ensuring seamless integration into nursery and primary school
                curricula
              </p>
            </div>
          </div>
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  max-w-[350px]">
            <div class="p-6">
              <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Holistic Learning
              </h5>
              <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Our books embrace a multisensory approach, stimulating all
                senses to facilitate comprehensive understanding and enrich
                children's learning journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
