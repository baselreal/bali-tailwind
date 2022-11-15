import Bg1 from "./image/abg.png";
import Back from "./image/back.png";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="h-screen w-full bg-cover bg-center flex" style={{ backgroundImage: `url(${Bg1})` }}>
      <div className="bg-[#2a263dd1] absolute h-full w-full"></div>
      <div className="z-10 lg:w-45 md:w-35 lg:ml-20 lg:mt-20 md:ml-20 md:mt-20 ml-5 mt-10">
        <Link to="/">
          <img className="lg:h-10 md:h-10 h-5" src={Back} alt="" />
        </Link>
      </div>
      <div className="flex flex-col justify-center text-center items-center w-screen h-full lg:-ml-20 md:-ml-20 -ml-8 -mt-5">
        <div className="z-10 font-pacifico lg:text-5xl md:text-4xl text-2xl lg:mb-6 leading-[5.25rem]  text-[#FCB371]">About Us</div>
        <div className="z-10 text-white lg:text-4xl md:text-3xl lg:mt-0 md:mt-6 leading-10 font-normal lg:w-2/4 md:w-2/4  text-center ">
          More than 10 years, Arkademy Travel Services has grow at a steady pace and become one of Indonesia's leading travel agent offering a complete travel solution for both leisure and business travels. The company has over 500 staff
          within 24 branches across the country
        </div>
      </div>
    </section>
  );
};
