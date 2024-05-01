"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CollectionData } from '@/api/homepage/homepage'
import { useRouter } from 'next/navigation'
const FeatureCollections = () => {
    const router = useRouter();
    return (
        <>
            <div className='container pt-sm-12 pt-7'>
                <h2 className='text-center fs-8 fw-semibold mb-10'>Feature Collection</h2>
                <div className='row'>
                    {CollectionData.map((featurecoll) => {
                        return (
                            <div className='col-md-4 mb-sm-0 mb-6' key={featurecoll.key}>
                                <Link href={`/category/mobile-covers/${featurecoll.url}`} >
                                    <div className='position-relative hover-img overflow-hidden collection-box'>
                                        <Image
                                            src={featurecoll.img}
                                            alt="img"
                                            className='object-fit-cover'
                                            style={{ width: "100%", height: "100%" }}

                                        />
                                        <div className='badge bg-primary-subtle rounded-0 text-dark fw-normal fs-4 px-3 position-absolute z-1 tag'>{featurecoll.tag}</div>
                                        <div className='position-absolute  title w-100'>
                                        <h3 className='fs-8 fw-semibold text-dark-light mb-0 pb-3'>{featurecoll.name}</h3>
                                        <p className='fs-4 fw-normal text-dark-light mb-0'>{featurecoll.desc}</p>
                                        </div>
                                       
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    <div className='d-flex justify-content-center mt-sm-8 mt-6 mb-4'>
                        <button className="btn btn-outline-indigo px-12 mt-2 py-2 w-100 fw-normal w-auto" onClick={()=>{
                            router.push("/category/mobile-covers")
                        }}>View All</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default FeatureCollections
