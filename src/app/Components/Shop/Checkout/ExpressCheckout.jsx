import React from 'react'
import { Icon } from "@iconify/react";

const ExpressCheckout = () => {
  return (
    <>
      <div className="col-xl-6 px-0">
        <div className="position-relative px-xl-3 px-7">
          <div className="checkout-cover"></div>
          <h3 className="text-uppercase fs-8 fw-bold pt-8">
            Express checkout
          </h3>
          <form action="">
            <div className="row">
              <div className="col-lg-8 mt-57">
                <input
                  type="email"
                  className="form-control fs-4 input-indication"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                />
                <div id="emailHelp" className="form-text fs-4 text-black">
                  You can create an account after checkout.
                </div>
              </div>
            </div>
          </form>
          <div className="border-2 border-top mt-57 pt-57"></div>
          <form action="" className="row">
            <div className="col-xl-11">
              <div className="row gy-4">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control fs-4 input-indication"
                    id="Inputfirstname1"
                    aria-describedby="firstnameHelp"
                    placeholder="First Name*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control fs-4 input-indication"
                    id="Inputlastname1"
                    placeholder="Last Name*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control fs-4 input-indication"
                    id="Inputnumber1"
                    placeholder="Number*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control fs-4 input-indication"
                    id="Inputcompany"
                    placeholder="Company"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control fs-4 input-indication"
                    id="Inputaddress"
                    placeholder="Street address line 1*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control fs-4 input-indication"
                    id="Inputaddress2"
                    placeholder="Street address line 2*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <select
                    className="form-select text-black"
                    aria-label="Default select example"
                  >
                    <option>Country*</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <select
                    className="form-select text-black"
                    aria-label="Default select example"
                  >
                    <option>State/Province *</option>
                    <option value="India">Ahmedabad</option>
                    <option value="USA">Mumbai</option>
                    <option value="France">Ranchi</option>
                    <option value="Germany">Jaipur</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control fs-4 input-indication"
                    id="Inputcity"
                    placeholder="City*"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="number"
                    className="form-control fs-4 input-indication"
                    id="Inputcode"
                    placeholder="Zip/Postal Code*"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex flex-column my-8">
            <h3 className="fs-8 text-black mb-3 ">Shipping Methods</h3>
            <div className="d-flex gap-54">
              <div className="d-flex align-items-center gap-1">
                <div
                  className="wrap border border-2 p-0 border-subtle-dark d-flex justify-content-center align-align-items-center "
                  style={{ width: "fit-content" }}
                >
                  <Icon
                    icon="material-symbols:check"
                    className="fs-4 text-black"
                  />
                </div>
                <span className="fs-5 text-black fw-normal">Rs10.00</span>
              </div>
              <span className="fs-5 text-black fw-normal">Fixed</span>
              <span className="fs-5 text-black fw-normal">Flat Rate</span>
            </div>
          </div>
          <div className="d-flex flex-column gap-4 mb-8">
            <h3 className="fs-8 text-black lh-1 mb-0">Payment Method</h3>
            <span className="fs-5 text-black fw-normal">
              Check / Money order
            </span>
          </div>
          <div className="d-flex flex-column gap-4 pb-14">
            <h3 className="fs-8 text-black lh-1 mb-0">Billing Address</h3>
            <div className="d-flex align-items-center gap-1">
              <div
                className="wrap border border-2 p-0 border-subtle-dark d-flex justify-content-center align-align-items-center "
                style={{ width: "fit-content" }}
              >
                <Icon
                  icon="material-symbols:check"
                  className="fs-4 text-black"
                />
              </div>
              <span className="fs-5 text-black fw-normal">
                My billing and shipping address are the same
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpressCheckout
