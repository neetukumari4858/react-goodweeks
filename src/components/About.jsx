import React from "react";
import aboutImg from "../Images/about.png";
import scissorIcon from "../Images/scissor.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative lg:top-[-13rem] top-[-2rem] w-full bg-black text-white py-20 flex flex-col items-center px-4 md:px-16  "
    >
      {/* Section Heading */}
      <div className="text-center ">
        <h2 className="text-white text-3xl font-semibold tracking-wide">
          About Flap
        </h2>

        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="w-12 h-px bg-gray-500"></span>
          <img src={scissorIcon} alt="scissor" className="w-5 opacity-80" />
          <span className="w-12 h-px bg-gray-500"></span>
        </div>
      </div>
      {/* Content Wrapper */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center max-w-6xl w-full">
        <div className="flex justify-center relative">
          <div
            className="
              absolute left-10 top-13 bg-yellow-400
              w-20 h-20
              rounded-tl-[120px] rounded-bl-[120px] rounded-br-[120px]
              border-2 border-white shadow-lg
              lg:left-7 lg:w-36 lg:h-36
            "
          ></div>
          <img
            src={aboutImg}
            alt="Barbershop"
            className="relative left-10 w-[10rem] h-[10rem] lg:w-[17rem] lg:h-[20rem] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[120px] border-2 border-white shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-3 lg:text-start ">
            Exceptional Expertise
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            At Flap barbershop, we are a team of highly skilled and experienced
            barbers who are dedicated to delivering top-notch grooming services.
            With a shared love for the art of barbering, we bring a diverse
            range of expertise to cater to every individual's unique style
            preferences.
          </p>
          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-2">
              <span>
                <img
                  src={scissorIcon}
                  alt="scissor"
                  className="w-5 opacity-80"
                />
              </span>
              Highly skilled barbers with a passion for their craft
            </li>
            <li className="flex gap-2">
              <span>
                <img
                  src={scissorIcon}
                  alt="scissor"
                  className="w-5 opacity-80"
                />
              </span>
              Attention to detail and precision in every haircut
            </li>
            <li className="flex gap-2">
              <span>
                <img
                  src={scissorIcon}
                  alt="scissor"
                  className="w-5 opacity-80"
                />
              </span>
              Use of premium quality grooming products
            </li>
            <li className="flex gap-2">
              <span>
                <img
                  src={scissorIcon}
                  alt="scissor"
                  className="w-5 opacity-80"
                />
              </span>
              Cozy and relaxed environment that feels like home
            </li>
            <li className="flex gap-2">
              <span>
                <img
                  src={scissorIcon}
                  alt="scissor"
                  className="w-5 opacity-80"
                />
              </span>
              Convenient scheduling options for your busy lifestyle
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
