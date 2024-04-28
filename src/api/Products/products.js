import leatherimg1 from "/public/images/leather_case2.webp";
import leathergroup1 from "/public/images/leather_case_group2.webp"; 
import leatherimg2 from "/public/images/leather_case3.webp";
import leathergroup2 from "/public/images/leather_case_group3.webp";
import hardimg1 from "/public/images/hard_case1.webp";
import hardgroup1 from "/public/images/hard_case_group1.webp";
import hardimg2 from "/public/images/hard_case2.webp";
import hardgroup2 from "/public/images/hard_case_group2.webp";
import transparentimg1 from "/public/images/transparent_case1.webp";
import transparentgroup1 from "/public/images/transparent_case_group1.webp";
import transparentimg2 from "/public/images/transparent_case2.webp";
import transparentgroup2 from "/public/images/transparent_case_group2.webp";
import phoneCaseimg1 from "/public/images/phone_case1.webp";
import phonegroup1 from "/public/images/phone_case_group1.webp";
import phoneCaseimg2 from "/public/images/phone_case2.webp";
import phonegroup2 from "/public/images/phone_case_group2.webp";
import common_product from "/public/images/homepage/product.png";
import sliderLeatherImage1 from "/public/images/leather_case2.png"
import sliderLeatherImage2 from "/public/images/leather_case3.png"
import sliderhardImage1 from "/public/images/hard_case1.png"
import sliderhardImage2 from "/public/images/hard_case2.png"
import slidertransparentImage1 from "/public/images/transparent_case1.png"
import slidertransparentImage2 from "/public/images/transparent_case2.png"
import sliderphoneImage1 from "/public/images/phone_case1.png"
import sliderphoneImage2 from "/public/images/phone_case2.png"
import temperedCover from "/public/images/tempered-glass/tempered_glass.webp"
import airpodsCover from "/public/images/airpods/airpods-cover.webp"
import airpodsCoverGroup from "/public/images/airpods/airpods-cover-group.webp"
import temperedCoverGroup from "/public/images/tempered-glass/tempered_glass_group.webp"
import temperedCoverSlider from "/public/images/tempered-glass/slider_tempered_glass.png"
import airpodsCoverSlider from "/public/images/airpods/slider-airpods-cover.webp"

export const PRODUCTS = [
  {
    key: "leather01",
    title:"iPhone 15 Pro Max",
    mastercat:"Cover",
    category: "leather-case",
    discount: "400",
    price: "1399",
    quantity:0,
    discountedPrice: 699,
    thumbnail:leatherimg1,
    sliderthumbnail: sliderLeatherImage1,
    image: leathergroup1,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "leather02",
    title:"iPhone 12 Pro Max",
    mastercat:"Cover",
    category: "leather-case",
    discount: "500",
    price: "1299",
    quantity:0,
    discountedPrice: "599",
    thumbnail: leatherimg2,
    image: leathergroup2,
    sliderthumbnail: sliderLeatherImage2,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "hard01",
    title:"iPhone 13 Pro Max",
    mastercat:"Cover",
    category: "hard-case",
    discount: "700",
    price: "1599",
    quantity:0,
    discountedPrice: "899",
    thumbnail: hardimg1,
    image: hardgroup1,
    sliderthumbnail: sliderhardImage1,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "hard02",
    title:"iPhone 16 Pro Max",
    mastercat:"Cover",
    category: "hard-case",
    discount: "500",
    price: "999",
    quantity:0,
    discountedPrice: "499",
    thumbnail: hardimg2,
    image: hardgroup2,
    sliderthumbnail: sliderhardImage2,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "transparent01",
    title:"iPhone 11 Pro Max",
    mastercat:"Cover",
    category: "transparent-case",
    discount: "600",
    price: "1199",
    quantity:0,
    discountedPrice: "599",
    thumbnail: transparentimg1,
    image: transparentgroup1,
    sliderthumbnail: slidertransparentImage1,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "transparent02",
    title:"iPhone 12 Pro Max",
    mastercat:"Cover",
    category: "transparent-case",
    discount: "700",
    price: "1599",
    quantity:0,
    discountedPrice: "899",
    thumbnail: transparentimg2,
    image: transparentgroup2,
    sliderthumbnail: slidertransparentImage2,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "phone01",
    title:"iPhone 14 Pro Max",
    mastercat:"Cover",
    category: "phone-case",
    discount: "300",
    price: "1399",
    quantity:0,
    discountedPrice: "999",
    thumbnail: phoneCaseimg1,
    image: phonegroup1,
    sliderthumbnail: sliderphoneImage1,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "phone02",
    title:"iPhone 13 Pro Max",
    mastercat:"Cover",
    category: "phone-case",
    discount: "800",
    price: "1199",
    quantity:0,
    discountedPrice: "499",
    thumbnail: phoneCaseimg2,
    image: phonegroup2,
    sliderthumbnail: sliderphoneImage2,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "temp01",
    title:"iPhone 13 Pro Max",
    mastercat:"Guard",
    category: "tempered-glass",
    discount: "800",
    price: "1199",
    quantity:0,
    discountedPrice: "499",
    thumbnail: temperedCover,
    image: temperedCoverGroup,
    sliderthumbnail: temperedCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "temp02",
    title:"iPhone 11 Pro Max",
    mastercat:"Guard",
    category: "tempered-glass",
    discount: "400",
    price: "999",
    quantity:0,
    discountedPrice: "799",
    thumbnail: temperedCover,
    image: temperedCoverGroup,
    sliderthumbnail: temperedCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "temp03",
    title:"iPhone 15 Pro Max",
    mastercat:"Guard",
    category: "tempered-glass",
    discount: "800",
    price: "1299",
    quantity:0,
    discountedPrice: "499",
    thumbnail: temperedCover,
    image: temperedCoverGroup,
    sliderthumbnail: temperedCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "temp04",
    title:"iPhone 16 Pro Max",
    mastercat:"Guard",
    category: "tempered-glass",
    discount: "700",
    price: "1399",
    quantity:0,
    discountedPrice: "399",
    thumbnail: temperedCover,
    image: temperedCoverGroup,
    sliderthumbnail: temperedCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "temp05",
    title:"iPhone 11 Pro Max",
    mastercat:"Guard",
    category: "tempered-glass",
    discount: "200",
    price: "1599",
    quantity:0,
    discountedPrice: "699",
    thumbnail: temperedCover,
    image: temperedCoverGroup,
    sliderthumbnail: temperedCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "temp06",
    title:"iPhone 9 Pro Max",
    mastercat:"Guard",
    category: "tempered-glass",
    discount: "500",
    price: "1199",
    quantity:0,
    discountedPrice: "799",
    thumbnail: temperedCover,
    image: temperedCoverGroup,
    sliderthumbnail: temperedCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "airpod01",
    title:"Blue Airpods Pro",
    mastercat:"Airpods",
    category: "airpods-cover",
    discount: "500",
    price: "1599",
    quantity:0,
    discountedPrice: "499",
    thumbnail: airpodsCover,
    image: airpodsCoverGroup,
    sliderthumbnail: airpodsCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "airpod02",
    title:"Poncho Airpods Pro",
    mastercat:"Airpods",
    category: "airpods-cover",
    discount: "500",
    price: "1599",
    quantity:0,
    discountedPrice: "499",
    thumbnail: airpodsCover,
    image: airpodsCoverGroup,
    sliderthumbnail: airpodsCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "airpod03",
    title:"Green Airpods Pro",
    mastercat:"Airpods",
    category: "airpods-cover",
    discount: "700",
    price: "1199",
    quantity:0,
    discountedPrice: "599",
    thumbnail: airpodsCover,
    image: airpodsCoverGroup,
    sliderthumbnail: airpodsCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "airpod04",
    title:"Poncho Airpods Pro",
    mastercat:"Airpods",
    category: "airpods-cover",
    discount: "300",
    price: "999",
    quantity:0,
    discountedPrice: "399",
    thumbnail: airpodsCover,
    image: airpodsCoverGroup,
    sliderthumbnail: airpodsCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "airpod05",
    title:"Blue Airpods 3 ",
    mastercat:"Airpods",
    category: "airpods-cover",
    discount: "300",
    price: "1399",
    quantity:0,
    discountedPrice: "699",
    thumbnail: airpodsCover,
    image: airpodsCoverGroup,
    sliderthumbnail: airpodsCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  },
  {
    key: "airpod06",
    title:"Poncho Airpods Case",
    mastercat:"Airpods",
    category: "airpods-cover",
    discount: "500",
    price: "1699",
    quantity:0,
    discountedPrice: "899",
    thumbnail: airpodsCover,
    image: airpodsCoverGroup,
    sliderthumbnail: airpodsCoverSlider,
    photos:[common_product,common_product,common_product,common_product,common_product]
  }
];

export const FILTER_BRAND = [
  {key:"brand01",brand:"Apple",quantity:34},
  {key:"brand02",brand:"Apple",quantity:183},
  {key:"brand03",brand:"One Plus",quantity:115},
  {key:"brand04",brand:"Motorola",quantity:62},
  {key:"brand05",brand:"One Plus",quantity:107},
  {key:"brand06",brand:"Apple",quantity:40},
  {key:"brand07",brand:"One Plus",quantity:237},
  {key:"brand08",brand:"Samsung",quantity:34},
  {key:"brand09",brand:"One Plus",quantity:63},
  {key:"brand10",brand:"Apple",quantity:94},
  {key:"brand11",brand:"One Plus",quantity:194},
  {key:"brand12",brand:"Apple",quantity:44},
  {key:"brand13",brand:"One Plus",quantity:14},
]

export const FILTER_MODEL = [
  {key:"model01",model:"iphone 15 pro max",quantity:34},
  {key:"model02",model:"iphone 14 pro max",quantity:183},
  {key:"model03",model:"iphone 15 pro max",quantity:115},
  {key:"model04",model:"iphone 15 pro max",quantity:62},
  {key:"model05",model:"iphone 15 pro max",quantity:107},
  {key:"model06",model:"iphone 15 pro max",quantity:40},
  {key:"model07",model:"iphone 15 pro max",quantity:237},
  {key:"model08",model:"iphone 15 pro max",quantity:34},
  {key:"model09",model:"iphone 15 pro max",quantity:63},
  {key:"model10",model:"iphone 15 pro max",quantity:94},
  {key:"model11",model:"iphone 15 pro max",quantity:194},
  {key:"model12",model:"iphone 15 pro max",quantity:44},
]
