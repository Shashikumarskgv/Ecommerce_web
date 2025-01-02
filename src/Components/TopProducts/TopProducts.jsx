import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import Img4 from "../../assets/shirt/shirt4.png";
import Img5 from "../../assets/shirt/shirt5.png";
import Img6 from "../../assets/shirt/shirt6.png";
import Img7 from "../../assets/shirt/shirt7.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Perfect for everyday comfort and style, our casual wear collection offers a variety of options for every occasion.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Add a touch of fun to your wardrobe with our printed shirts. From vibrant patterns to subtle designs, they’re the perfect mix of casual and stylish.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Our women’s shirts collection is all about chic simplicity. With trendy cuts and flattering fits, these shirts are ideal for both work and casual outings.",
  },
  {
    id: 4,
    img: Img4,
    title: "Hoddie",
    description:
      "Our Hoddie collection is all about chic simplicity. With trendy cuts and flattering fits, these shirts are ideal for both work and casual outings.",
  },
  {
    id: 5,
    img: Img5,
    title: "Women Top",
    description:
      "Our women’s Top collection is all about chic simplicity. With trendy cuts and flattering fits, these shirts are ideal for both work and casual outings.",
  },
  {
    id: 6,
    img: Img6,
    title: "Geans Pant",
    description:
      "Our Geans Pant collection is all about chic simplicity. With trendy cuts and flattering fits, these shirts are ideal for both work and casual outings.",
  },
  {
    id: 7,
    img: Img7,
    title: "Design jacket",
    description:
      "Our Design jacket collection is all about chic simplicity. With trendy cuts and flattering fits, these shirts are ideal for both work and casual outings.",
  },
  
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-24">
         
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Explore our best-reviewed men's, women's, and kids' collections—loved by customers for their quality and style. Don't miss out on these fan favorites!
          </p>
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-25 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
