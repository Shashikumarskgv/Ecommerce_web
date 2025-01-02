import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/feedback/yash.jpg";
import Image2 from "../../assets/feedback/kowshik.png";
import Image3 from "../../assets/feedback/asif.jpg";
import Image4 from "../../assets/feedback/sai.jpg";
import Image5 from "../../assets/feedback/baba.jpg";
import Image6 from "../../assets/feedback/prashamsha.jpg";
import Image7 from "../../assets/feedback/sameer.jpg";


const TestimonialData = [
  {
    id: 1,
    name: "Yaswanth",
    text: "I’ve been shopping at Shashi Store for months now, and I’m always impressed by the quality of the clothes. The styles are trendy, and I always find something that fits perfectly. The prices are also great, especially with the discounts! Highly recommend .",
    img: Image1,
  },
  {
    id: 2,
    name: "Kowshik",
    text: "Shashi Store has become my go-to for men’s wear. The quality and design of their clothing are top-notch. I bought a few outfits recently, and they fit perfectly and look amazing. Definitely the best place to shop for fashionable and budget-friendly clothes!",
    img: Image2,
  },
  {
    id: 3,
    name: "Asif Hussain",
    text: "I was looking for something unique for my wardrobe, and I found exactly what I wanted at Shashi Store. Their collection are fresh, quality and durable, and the discounts make it even better and they fit perfectly and look . I’ll definitely be back for more!",
    img: Image3,
  },
  {
    id: 4,
    name: "Krishna Sai",
    text: "The shopping experience was amazing! The website is user-friendly, and delivery was super fast. I got a beautiful outfit for a special occasion, and it was just perfect I bought a few outfits recently. I’m really happy with my purchase and the customer service.",
    img: Image4,
  },
  {
    id: 5,
    name: "Baba shareef",
    text: "I’ve tried many online stores, but Shashi Store stands out for its quality and variety. The clothes are stylish and comfortable It’s always a great experience shopping here. Totally worth the money I bought a few outfits recently, and I’ll definitely shop again!",
    img: Image5,
  },
  {
    id: 6,
    name: "Sameer",
    text: "I recently bought some casual wear for everyday use, and I couldn’t be happier. The fabric is soft, and the fit is exactly how I like it. I always find something that fits perfectly Their collection are fresh and quality. It’s my new favorite store for men’s fashion!",
    img: Image7,
  },
  {
    id: 7,
    name: "Prashamsha",
    text: "I absolutely love shopping at Shashi Store. The women’s collection is gorgeous, and the prices are unbeatable. Every outfit I’ve purchased has been high quality and stylish. I’m a loyal customer for life. the discounts make it even better and they fit perfectly and look . ",
    img: Image6,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
          
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Feedbacks
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Our customers love the style, quality, and amazing deals at Shashi Store. Here’s what they have to say:
          </p>
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                  <div className="mb-4 ">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 ">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
