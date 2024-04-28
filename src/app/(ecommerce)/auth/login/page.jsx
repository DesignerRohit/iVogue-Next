"use client"

import { Icon } from "@iconify/react"


const Login = () => {
  return (
    <>
      <div className="container my-52 ">
           <div className="row justify-content-center ">
            <div className="col-lg-10">
            <div className="d-flex flex-column gap-54 login-box px-56 py-61 bg-light-primary">
           <div className="d-flex gap-3 align-items-center">
              <h3 className="fs-8 fw-bold text-darkscale-variant mb-0">Login</h3>
              <span className="fs-6 fw-normal text-darkscale-variant">OR</span>
              <span className="fs-8 fw-bold text-darkscale-variant">Signup</span>
           </div>
           <div className="d-flex flex-column gap-6">
           <form className=' py-3 px-4 border rounded-0  login-input position-relative d-flex align-items-center bg-lightextra'>
              <span className="pe-4 fs-4 border-2 lh-1 border-end border-grayextra text-grayextra">+91</span>
              <input type="number" className="form-control ps-4 py-2 fw-light fs-4 border-0 shadow-none half-letter" id="exampleFormControlInput1" placeholder="Mobile Number*" />
            </form>
            <p className="mb-0 text-grayscale-variant fs-81 d-flex gap-1 align-items-center ">By continuing, I agree to the
             <span className="fs-81 fw-bold text-primary ">Terms of Use</span><span className="mb-0 text-grayscale-variant fs-81">&</span>
             <span className="fs-81 fw-bold text-primary ">Privacy Policy</span>
             </p>
            </div>
            <div className="d-flex flex-column gap-6">
               <button className="btn btn-primary rounded-0 fs-5 fw-bold py-3">Continue</button>
               <p className="mb-0 text-grayscale-variant fs-81 d-flex gap-1 align-items-center ">Have trouble logging in?
             <span className="fs-81 fw-bold text-primary ">Get help</span>
             </p>
            </div>
           </div>
            </div>
           </div>
      </div>
    </>
  )
}

export default Login
