import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import NextJsImage from "@/app/plugin/NextJsImage";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ProductPreviewCard = ({ shareIcon, image, heartIcon,prodInfo}) => {
  const [open, setOpen] = useState(false);
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
        <div
          className="zoom position-absolute pointer"
          onClick={() => setOpen(true)}
          style={{ bottom: "45px", right: "45px" }}
        >
          <Icon icon="ic:baseline-fullscreen" className="text-dark fs-9" />
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[prodInfo.sliderthumbnail, ...prodInfo.photos]}
        render={{ slide: NextJsImage }}
        plugins={[Thumbnails]}
      />
    </>
  );
};

export default ProductPreviewCard;
