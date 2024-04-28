import Image from 'next/image'
import React from 'react'
import feature1 from "/public/images/product-features/feature1.png"
import feature2 from "/public/images/product-features/feature2.png"
import feature3 from "/public/images/product-features/feature3.png"
import feature4 from "/public/images/product-features/feature4.png"
import feature5 from "/public/images/product-features/feature5.png"
import feature6 from "/public/images/product-features/feature6.png"
import featurethumbnail from "/public/images/product-features/feature-thumbnail.png"
import ProductFeatureCard from './Cards/ProductFeatureCard'

const ProductFeatures = () => {
  return (
    <div>
      <h2 className='text-black fs-54 fw-bold letter text-center my-lg-52 my-10'>Why Choose?</h2>
      <div className="container">
        <div className="row gy-4">
            <div className="col-lg-4 align-items-stretch justify-content-between d-flex flex-column gap-lg-0 gap-4">
                <ProductFeatureCard title="Stride Cases" image={feature1} description="Dependable Protection, Uncompromised Style." />
                <ProductFeatureCard title="Made for forever" image={feature2} description="The raised bezels offer complete camera protection and 1 mm thickness at the edges cushions it from falling, making it safe from all sides." />
                <ProductFeatureCard title="Flaunt your love" image={feature3} description="Choice of all our loyal customers, these case covers make you want to flaunt your pick." />
            </div>
            <div className="col-lg-4">
                <Image src={featurethumbnail} alt='image' className='img-fluid ' />
            </div>
            <div className="col-lg-4 align-items-stretch justify-content-between d-flex flex-column gap-lg-0 gap-4">
                <ProductFeatureCard title="360 Degree Protection" image={feature4} description="The all new shock absorption bumper gives 360 degree drop protection from 2 metres (6.6ft) height using the novel Air Cushion Technology." />
                <ProductFeatureCard title="Charge Without Bounds" image={feature5} description="A phone-case that gets along with all Qi-Certified wireless chargers, EarPods and protective screen guards, is all you need." />
                <ProductFeatureCard title="Sturdy Design" image={feature6} description="The soft raised edges of the TPU protect the camera and screen to give your phone the chance of bouncing back from all the falls it may go through. A thick layer of hard PC keeps  your phone from cracking." />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
