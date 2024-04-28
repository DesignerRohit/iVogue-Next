"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExploreRangeTab1, ExploreRangeTab2, ExploreRangeTab3, ExploreRangeTab4, ExploreRangeTab5 } from '@/api/homepage/homepage'
import sideimg from "/public/images/homepage/sidecover.png";
import sideimg2 from "/public/images/homepage/insta2.png";
import sideimg3 from "/public/images/homepage/insta3.png";
import sideimg4 from "/public/images/homepage/insta4.png";
import { useRouter } from 'next/navigation'
const ExploreRange = () => {
    const router = useRouter();
    return (
        <>
            <div className='container py-10'>
                <h2 className='text-center fs-8 fw-semibold mb-9 text-capitalize' >explore the range</h2>
                <ul className="nav nav-pills mb-3 d-flex gap-4 justify-content-center explore" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-0 active text-capitalize fs-4" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">all</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-0  text-capitalize fs-4" id="pills-lather-tab" data-bs-toggle="pill" data-bs-target="#pills-lather" type="button" role="tab" aria-controls="pills-lather" aria-selected="false">Lather case</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-0  text-capitalize fs-4" id="pills-hard-tab" data-bs-toggle="pill" data-bs-target="#pills-hard" type="button" role="tab" aria-controls="pills-hard" aria-selected="false">hard case</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-0 text-capitalize fs-4" id="pills-transparent-tab" data-bs-toggle="pill" data-bs-target="#pills-transparent" type="button" role="tab" aria-controls="pills-transparent" aria-selected="false">transparent case</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link rounded-0 text-capitalize fs-4" id="pills-phone-tab" data-bs-toggle="pill" data-bs-target="#pills-phone" type="button" role="tab" aria-controls="pills-phone" aria-selected="false">Phone Cases</button>
                    </li>
                </ul>
                <div className="tab-content mt-5 pb-3" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    {ExploreRangeTab1.map((exp1) => {
                                        return (
                                            <div className='col-md-6' key={exp1.key}>
                                                <div className='bg-gray p-5 pb-4 position-relative text-center mb-4'>
                                                    <Link href={`/category/mobile-covers?prodcat=${exp1.url}`} className='text-decoration-none'>
                                                        <div className='position-relative hover-img overflow-hidden'>
                                                            <Image
                                                                src={exp1.img}
                                                                alt="img"
                                                                className='object-fit-cover'
                                                                style={{ width: "100%", height: "100%" }}
                                                            />
                                                            <h3 className='fs-6 fw-normal text-black text-capitalize pt-2'>{exp1.title}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <Image
                                    src={sideimg}
                                    alt="img"
                                    className='object-fit-cover'
                                    style={{ width: "100%", height: "750px" }}

                                />
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-lather" role="tabpanel" aria-labelledby="pills-lather-tab">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    {ExploreRangeTab2.map((exp2) => {
                                        return (
                                            <div className='col-md-6' key={exp2.key}>
                                                <div className='bg-gray p-5 pb-4 position-relative text-center mb-4'>
                                                    <Link href={`/category/mobile-covers?prodcat=${exp2.url}`} className='text-decoration-none'>
                                                        <div className='position-relative hover-img overflow-hidden'>
                                                            <Image
                                                                src={exp2.img}
                                                                alt="img"
                                                                className='object-fit-cover'
                                                                style={{ width: "100%", height: "100%" }}
                                                            />
                                                            <h3 className='fs-6 fw-normal text-black text-capitalize pt-2'>{exp2.title}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <Image
                                    src={sideimg2}
                                    alt="img"
                                    className='object-fit-cover'
                                    style={{ width: "100%", height: "750px" }}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-hard" role="tabpanel" aria-labelledby="pills-hard-tab">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    {ExploreRangeTab3.map((exp3) => {
                                        return (
                                            <div className='col-md-6' key={exp3.key}>
                                                <div className='bg-gray p-5 pb-4 position-relative text-center mb-4'>
                                                    <Link href={`/category/mobile-covers?prodcat=${exp3.url}`} className='text-decoration-none'>
                                                        <div className='position-relative hover-img overflow-hidden'>
                                                            <Image
                                                                src={exp3.img}
                                                                alt="img"
                                                                className='object-fit-cover'
                                                                style={{ width: "100%", height: "100%" }}
                                                            />
                                                            <h3 className='fs-6 fw-normal text-black text-capitalize pt-2'>{exp3.title}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <Image
                                    src={sideimg3}
                                    alt="img"
                                    className='object-fit-cover'
                                    style={{ width: "100%", height: "750px" }}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-transparent" role="tabpanel" aria-labelledby="pills-transparent-tab">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    {ExploreRangeTab4.map((exp4) => {
                                        return (
                                            <div className='col-md-6' key={exp4.key}>
                                                <div className='bg-gray p-5 pb-4 position-relative text-center mb-4'>
                                                    <Link href={`/category/mobile-covers?prodcat=${exp4.url}`} className='text-decoration-none'>
                                                        <div className='position-relative hover-img overflow-hidden'>
                                                            <Image
                                                                src={exp4.img}
                                                                alt="img"
                                                                className='object-fit-cover'
                                                                style={{ width: "100%", height: "100%" }}
                                                            />
                                                            <h3 className='fs-6 fw-normal text-black text-capitalize pt-2'>{exp4.title}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <Image
                                    src={sideimg4}
                                    alt="img"
                                    className='object-fit-cover'
                                    style={{ width: "100%", height: "750px" }}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-phone" role="tabpanel" aria-labelledby="pills-phone-tab">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    {ExploreRangeTab5.map((exp5) => {
                                        return (
                                            <div className='col-md-6' key={exp5.key}>
                                                <div className='bg-gray p-5 pb-4 position-relative text-center mb-4'>
                                                    <Link href={`/category/mobile-covers?prodcat=${exp5.url}`} className='text-decoration-none'>
                                                        <div className='position-relative hover-img overflow-hidden'>
                                                            <Image
                                                                src={exp5.img}
                                                                alt="img"
                                                                className='object-fit-cover'
                                                                style={{ width: "100%", height: "100%" }}
                                                            />
                                                            <h3 className='fs-6 fw-normal text-black text-capitalize pt-2'>{exp5.title}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <Image
                                    src={sideimg}
                                    alt="img"
                                    className='object-fit-cover'
                                    style={{ width: "100%", height: "750px" }}

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center '>
                    <button className="btn btn-outline-indigo px-12 mt-2 py-2 w-100 fw-normal w-auto" onClick={()=>{router.push('/category/mobile-covers')}}>View All</button>
                </div>
            </div>
        </>
    )
}

export default ExploreRange
