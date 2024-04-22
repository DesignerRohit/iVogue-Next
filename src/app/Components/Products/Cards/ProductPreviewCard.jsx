
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ProductPreviewCard = ({shareIcon,image,heartIcon}) => {
  return (
    <>
      <div className="bg-light-primary pt-9 pb-11 position-relative ">
        <Image src={image} alt="image" className="w-100" />
        <div
          className="d-flex gap-7 position-absolute"
          style={{ top: "25px", right: "25px" }}
        >
          <Link href="#">
            <Icon icon={shareIcon} className="text-dark fs-52" />
          </Link>
          <Link href="#">
            <Icon icon={heartIcon} className="text-dark fs-52" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductPreviewCard;
