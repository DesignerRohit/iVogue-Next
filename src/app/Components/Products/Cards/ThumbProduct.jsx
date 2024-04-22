import Image from "next/image";
const ThumbProduct = ({image}) => {
  return (
    <>
      <div className="p-6" style={{cursor:"pointer"}}>
        <div className="border border-1 border-black active-slide">
          <Image src={image} alt="image" className="img-fluid " />
        </div>
      </div>
    </>
  );
};

export default ThumbProduct;
