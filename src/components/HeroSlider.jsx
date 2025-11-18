import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FirstBgImg from "../Images/firstbgImg.png";
import FirstMiddleImg from "../Images/firstMiddleImg.png";
import FirstSmallImg from "../Images/firstSmallImg.png";
import SecondBgImg from "../Images/secongImg.jpg";
import SecondMiddleImg from "../Images/secondMiddle.jpg";
import SecondSmallImg from "../Images/secondsmall.jpg";
import ThirdBgImg from "../Images/thirdBig.jpg";
import ThirdMiddleImg from "../Images/thirdMiddle.jpg";
import ThirdSmallImg from "../Images/ThirdSmall.jpg";

const slides = [
  {
    big: FirstBgImg,
    medium: FirstMiddleImg,
    small: FirstSmallImg,
  },
  {
    big: SecondBgImg,
    medium: SecondMiddleImg,
    small: SecondSmallImg,
  },
  {
    big: ThirdBgImg,
    medium: ThirdMiddleImg,
    small: ThirdSmallImg,
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section id="home" className="relative ">
      <div className="lg:h-[50rem] flex flex-col md:flex-row justify-center relative bg-black text-white gap-4 sm:gap-8 md:gap-[14rem] px-6 md:px-24 pt-24">
        <div className="mt-0 lg:mt-[5rem]">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Elevate Your Look with <br />
            <span className="text-yellow-400">Expert Barber Services</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-md">
            We bring you the finest grooming service with top-notch expertise.
          </p>
          <button className="mt-6 border border-white-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
            BOOK NOW
          </button>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative">
          {/* BIG IMAGE */}
          <img
            src={slides[index].big}
            alt="big"
            className="relative top-[3rem] lg:top-4 w-[350px] h-[230px] lg:w-[550px] lg:h-[430px] object-cover shadow-xl"
          />

          {/* MEDIUM IMAGE */}
          <div className="flex gap-2 relative lg:top-[-21rem] top-[-10rem]">
            <img
              src={slides[index].medium}
              alt="medium"
              className="w-[7rem] h-[10rem] lg:w-[12rem] lg:h-[20rem] rounded-tl-[120px] rounded-bl-[120px] rounded-br-[120px] border-2 border-white shadow-lg"
            />
            <div className="w-[6rem] h-[7.6rem] lg:w-[9rem] lg:h-[16rem] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[120px] border-2 border-white shadow-lg"></div>
          </div>

          {/* SMALL IMAGE */}
          <div className="relative top-[-30rem] left-[-11rem]">
            <img
              src={slides[index].small}
              alt="small"
              className="
                hidden lg:block 
                lg:w-[10rem] 
                lg:h-[10rem] 
                lg:rounded-tl-[120px] 
                lg:rounded-bl-[120px] 
                lg:rounded-br-[120px] 
                lg:border-2 
                lg:border-white 
                shadow-lg
              "
            />
          </div>
        </div>
      </div>

      {/* PAGINATION (LEFT SIDE) */}

      <div className="relative lg:top-[-10rem] pl-20 lg:pl-[8rem] -translate-y-1/2 z-20 flex items-center gap-4">
        {/* PREV */}
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white"
        >
          <ChevronLeft size={28} />
        </button>

        {/* NUMBERING */}
        <div className="text-gray-300 text-3xl font-bold text-center">
          {String(index + 1).padStart(2, "0")}/
          <span className="text-yellow-400 ">{slides.length}</span>
        </div>

        {/* NEXT */}
        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
