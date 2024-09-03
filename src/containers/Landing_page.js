import React from 'react';
import Welcome_Carousel from '../components/Carousel';
import { Typography } from '@mui/material';
import Slider from '../components/Slider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rpic1 from "../pics/recent1-removebg-preview.png";
import Rpic2 from "../pics/recent2-removebg-preview.png";
import Rpic3 from "../pics/recent3-removebg-preview.png";
import Rpic4 from "../pics/recents4.png";
import Rpic5 from "../pics/recents5.png";
import Rpic6 from "../pics/recents6.png";
import Spic1 from "../pics/mobile.jpeg";
import Spic2 from "../pics/fashion.jpeg";
import Spic3 from "../pics/electronics.png";
import off701 from "../pics/Sunglasses.jpeg";
import off702 from "../pics/Handbag.jpg";
import off703 from "../pics/phone X pro.jpg";
import off704 from "../pics/Earbud.jpg";
import off705 from "../pics/Air purifier.jpg";
import off706 from "../pics/Vacumm cleaner.jpg";

const R_products = [
  {
    name: "Motorola edge 50 fusion",
    price: "29,990/-",
    image: Rpic1
  },
  {
    name: "Nothing 2a",
    price: "26,000/-",
    image: Rpic2
  },
  {
    name: "Samsung S23 FE",
    price: "37,999/-",
    image: Rpic3
  },
  {
    name: "Reebok Sneakers",
    price: "1,499/-",
    image: Rpic4
  },
  {
    name: "Adidas Running shoes",
    price: "2,199/-",
    image: Rpic5
  },
  {
    name: "Oxford Formal Shoes",
    price: "1,299/-",
    image: Rpic6,
  }
];

const OIYS = [
    {
        name: "Fashion",
        price: '80%',
        description: "Enjoy a fantastic 80% off on all fashion items. Upgrade your wardrobe with the latest trends and styles. Don't miss out on this limited-time offer!",
        image: Spic2
      },
      {
        name: "Mobiles",
        price: '70%',
        description: "Get a whopping 70% off on all mobiles and accessories. Find the perfect phone and essential accessories at unbeatable prices.",
        image: Spic1
      },
      {
        name: "Home Appliances",
        price: '70%',
        description: "Massive 70% off on a wide range of home appliances. Upgrade your home with the latest gadgets and appliances at incredible discounts.",
        image: Spic3
      }
]

const off_70 = [
    {
      name: "Sunglasses",
      price: "$29.99",
      originalPrice: "$99.99",
      image: off701,
      category: "Fashion"
    },
    {
      name: "Designer Handbag",
      price: "$89.99",
      originalPrice: "$299.99",
      image: off702,
      category: "Fashion"
    },
    {
      name: "Smartphone X Pro",
      price: "$149.99",
      originalPrice: "$499.99",
      image: off703,
      category: "Mobiles and Accessories"
    },
    {
      name: "Bluetooth Earbuds",
      price: "$49.99",
      originalPrice: "$169.99",
      image: off704,
      category: "Mobiles and Accessories"
    },
    {
      name: "Air Purifier",
      price: "$89.99",
      originalPrice: "$299.99",
      image: off705,
      category: "Home Appliances"
    },
    {
      name: "Vacuum Cleaner",
      price: "$149.99",
      originalPrice: "$499.99",
      image: off706,
      category: "Home Appliances"
    }
  ];
  
export default function Landing_page() {

// Responsive settings for the carousel
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Welcome_Carousel />
      {/* Recent Views */}
      <div className="overflow-hidden mb-2 bg-amber-100">
      <p className='text-3xl mt-4 ms-5 font-semibold text-gray-800'>Recently Viewed</p>
         <Carousel
            responsive={responsive} 
            infinite={true} 
            autoPlay={false} 
            autoPlaySpeed={3000} 
            keyBoardControl={true} 
            showDots={true} 
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={["tablet", "mobile"]}
    >
          {R_products.map((product, index) => (
            <Slider key={index} data={product} />
          ))}
        </Carousel>
      </div>
    
    <div>
        <p className='text-4xl text-center mb-2'  >Sales & offers</p>
        <div className=' bg-amber-100'>
        <p className='text-3xl mt-4 pt-4 ms-5 font-semibold text-gray-800'>
            Week In A Year Sale
        </p>
        <div className='flex flex-wrap md:flex-nowrap '>
        {
            OIYS.map((product,index)=>(
                <Slider key={index} data={product} />
            ))
        }
        </div>
        {/* <p className='text-4xl text-center mb-2 bg-white p-4' >Offers</p> */}
        <p className='text-3xl mt-4 ms-5 font-semibold text-gray-800'>
           Offer:- 70% Off
        </p>
        <Carousel
            responsive={responsive} 
            infinite={true} 
            autoPlay={false} 
            autoPlaySpeed={3000} 
            keyBoardControl={true} 
            showDots={true} 
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={["tablet", "mobile"]}
    >
          {off_70.map((product, index) => (
            <Slider key={index} data={product} />
          ))}
        </Carousel>
        </div>
    </div>

     </div>
  );
}
