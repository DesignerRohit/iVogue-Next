import Image from 'next/image'

const ProductFeatureCard = ({image,title,description}) => {
  return (
    <>
      <div className="d-flex gap-4 align-items-center ">
        <Image src={image} alt="image" className="img-fluid rounded-2 " />
        <div className="d-flex flex-column">
          <h3 className="text-subtle-dark fs-6 fw-bold letter mb-1 ">
            {title}
          </h3>
          <p className="mb-0 text-gray-emphasis fw-normal letter fs-56 lh-sm">
           {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductFeatureCard;
