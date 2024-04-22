import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
const CommonProductCard = ({image}) => {
  const [fillheart , setfillheart] = useState("");
  const handlewishlist = () => {
    if(fillheart===""){
      setfillheart("teenyicons:heart-solid");
    }
    else{
      setfillheart("");
    }
  }
  return (
    <>
      <div className="position-relative p-6">
        <div className="bg-light pb-3 px-13">
          <Image src={image} alt="image" className="img-fluid" />
          <h3 className="text-dark-gray  fw-bold fs-6">iPhone 15 Pro Max</h3>
          <div className="d-flex justify-content-between mt-1">
            <span className="fs-5 fw-normal text-dark-gray ">
              {`From Rs.699`}
            </span>
            <span className="fs-5 fw-normal text-dark-gray  text-decoration-line-through">
              1399
            </span>
            <span className="fs-5 fw-normal text-indigo">{`Save rs.700`}</span>
          </div>
          <p className="mb-0 fw-normal fs-5 text-danger mt-2">
            BUY 2 @ 20% OFF
          </p>
        </div>
        <div className="heart-group position-absolute pointer" style={{top:"19px",right:"23px"}} onClick={handlewishlist}>
        <Icon icon='cil:heart' className="fs-55 text-primary position-absolute  top-0 end-0" />
        <Icon icon={fillheart} className="fs-55 text-primary position-absolute  top-0 end-0" />
        </div>
      </div>
    </>
  );
};

export default CommonProductCard;
