import React from "react";
import Review1 from "../../assests/images/Maple-grove1.png";
import Review2 from "../../assests/images/Sunshine-academy1.png";
import Review3 from "../../assests/images/Crestwood1.png";

const Testimonies = () => {
  return (
    <div className="">
      <div className="flex justify-around flex-row">
        <img
          src={Review1}
          width={620}
          height={540}
          alt=""

        />
        <img src={Review2} width={620} height={540} alt="" />
      </div>
      <div className="flex justify-center">
        <img src={Review3} width={620} height={540} alt="" />
      </div>
    </div>
  );
};

export default Testimonies;
