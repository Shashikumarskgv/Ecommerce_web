import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Image4 from "../../assets/hero/simple.png";
import Image5 from "../../assets/hero/style.png";
import Image6 from "../../assets/hero/classy.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50 % off on Black Friday sale",
    description:
    "Black Friday Bonanza Don’t miss the biggest sale of the year! Get a whopping 50% OFF on all Black Friday Sale products. Hurry, these deals won’t last long!"
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 40 % off on Kids wear",
    description:
      "Little Smiles, Big Savings Make your kids shine with our adorable collection! Enjoy an exclusive 40% OFF on all kids' wear. Style and savings in one place!",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 20 %  off on all products",
    description:
      "Everything Must Go From trendy to timeless, get your favorites now with 20% OFF on ALL products. It’s the perfect time to shop!",
  },
  {
    id: 4,
    img: Image4,
    title: "Upto 30% off on Women wear",
    description:
      "Style for Her Unleash her inner diva! Explore stunning women’s wear at an unbeatable 30% OFF. Don’t wait to shine!",
  },
  {
    id: 5,
    img: Image5,
    title: "Upto 50%  off on Fasion sale",
    description:
      "Fashion Fever Trendsetters rejoice! Score the season’s hottest looks with 50% OFF on our Fashion Sale products. Look amazing without breaking the bank!",
  },
  {
    id: 6,
    img: Image6,
    title: "70% off on classy Men wear",
    description:
      "Men’s Classy Picks Redefine your wardrobe with our premium classy men’s wear at an unbelievable 70% OFF. Elevate your style game now!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className="h-[500px] w-[500px] bg-primary/40 absolute -bottom-3/4 left-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl sm:text-3xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
