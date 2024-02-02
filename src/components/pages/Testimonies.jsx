import React from "react";
import Review1 from "../../assests/images/Maple-grove1.png";
import Review2 from "../../assests/images/Sunshine-academy1.png";
import Review3 from "../../assests/images/Crestwood1.png";

const Testimonies = () => {
  return (
    <div className="sm:-mb-16">
      <h1 className="text-center text-3xl font-bold my-20 text-orange-500 self">What they are saying</h1>
      <div className="flex-row grid grid-cols-1 md:grid-cols-2 justify-items-center ">
        <img
          src={Review1}
          width={620}
          height={540}
          alt=""

        />
        <img src={Review2} width={620} height={540} alt="" />
      </div>
      <div className="flex justify-center md:my-16">
        <img src={Review3} width={620} height={540} alt="" />
      </div>
    </div>
  );
};

export default Testimonies;
