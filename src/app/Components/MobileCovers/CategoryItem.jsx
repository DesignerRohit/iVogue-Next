

import Image from "next/image"


const CategoryItem = ({image,title,handleData,Case}) => {
  return (
    <>
     <div className={`d-flex flex-column gap-3 covertype ${Case}`} onClick={handleData}>
        <Image src={image} alt="mobile_cover" />
         <p className="text-center text-base fs-4 text-dark">{title}</p>
       </div>
    </>
  )
}

export default CategoryItem

