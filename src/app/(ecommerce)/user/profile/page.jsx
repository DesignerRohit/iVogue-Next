"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import user from "/public/images/user/user.png"
import { Icon } from '@iconify/react'

const Profile = () => {
  const[male,setMale] = useState(null);
  const[female,setFemale] = useState("material-symbols:check");
  const[mobile,setMobile] = useState("+91 00000 00000")

  const handleGender = (e) => {
    const value = e.target.innerText;
    if(value==="Female" && female){}
    else if(value==="Female" && !female){
      setMale(null)
      setFemale("material-symbols:check");
    }
    else if(value==="Male" && male){}
    else{
      setFemale(null)
      setMale("material-symbols:check");
    }
  }
  return (
    <>
      <div className="container mt-52">
        <div className="row justify-content-center ">
          <div className="col-lg-10">
            <div className="profile-block bg-light-primary py-53 px-52">
              <div className=" d-flex gap-7 align-items-center">
                <div className="img-group position-relative ">
                  <Image
                    src={user}
                    alt="image"
                    className="img-fluid rounded-circle"
                  />
                  <button
                    className="btn btn-primary rounded-circle position-absolute top-0 p-2"
                    style={{ right: "8px" }}
                  >
                    <Icon icon="iconamoon:edit-light" className="fs-22" />
                  </button>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="fs-8 fw-bold text-dark">
                    Account holder Name
                  </h5>
                  <span className="fs-6 fw-normal text-dark">
                    +91 00000 00000
                  </span>
                </div>
              </div>
              <hr className="my-10 border-darkextra border-bottom" />
              <form action="">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div className="form-wrapper border border-2 border-darkextra pe-63 py-2">
                    <div className="row">
                      <div className="col-lg-9  ">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control float-feature fs-4"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={mobile}
                            onChange={(e)=>setMobile(e.target.value)}
                          />
                          <label htmlFor="floatingInput" className=' fs-4'>Mobile Number</label>
                        </div>
                      </div>
                      <div className="col-lg-3 d-flex align-items-center ">
                        <button className="btn btn-outline-darkextra border-2 rounded-0 flex-grow-1 text-primary py-2">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control float-feature-input fs-4"
                      id="floatingname"
                      placeholder="Full Name"
                    />
                    <label htmlFor="floatingname" className=' fs-4'>Full Name</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control float-feature-input fs-4"
                      id="floatingemail"
                      placeholder="Email"
                    />
                    <label htmlFor="floatingemail" className=' fs-4'>Email</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="radio-box py-55 px-13 d-flex justify-content-center  align-items-center  border border-2 border-darkextra pointer" onClick={handleGender}>
                      <span className='fs-4 fw-normal d-flex align-items-center gap-1'>
                      <Icon icon={male} className='fs-22 text-primary' />
                        Male
                      </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="radio-box py-55 px-13 d-flex justify-content-center  align-items-center  border border-2 border-darkextra pointer" onClick={handleGender}>
                      <span className='fs-4 fw-normal d-flex align-items-center gap-1'>
                      <Icon icon={female} className='fs-22 text-primary' />
                       Female
                      </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control float-feature-input fs-4"
                      id="floatingbirthday"
                      placeholder="Full Name"
                    />
                    <label htmlFor="floatingbirthday" className=' fs-4'>Birthday</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control float-feature-input fs-4"
                      id="floatingalternateMo"
                      placeholder="Full Name"
                    />
                    <label htmlFor="floatingalternateMo" className=' fs-4'>Alternate mobile details</label>
                  </div>
                </div>
              </div>
              <button type='submit' className='fs-5 btn btn-primary fw-bold mt-10 w-100 py-2'>Save details</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
