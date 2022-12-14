import Rbg from "./resimage/rbg.png";
import Back from "./resimage/back.png";
import { Link } from "react-router-dom";

export const Reservation = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center flex" style={{ backgroundImage: `url(${Rbg})` }}>
      <div className="bg-[#2a263dd1] absolute h-screen w-full"></div>
      <div className="z-50 lg:ml-20 lg:mt-20 md:ml-20 md:mt-20 ml-5 mt-5 h-7 w-7">
        <Link to="/">
          <img className="lg:h-10 h-7" src={Back} alt="" />
        </Link>
      </div>
      <div className="items-center text-center justify-center flex flex-col w-full z-10 lg:-ml-20 md:-ml-20 -ml-10 mb-20 h-screen">
        <div className="text-[#fcb371] font-normal lg:text-5xl text-2xl lg:mb-6 md:mb-6 mb-2 mt-5 leading-[5.25rem] font-pacifico">Reservations</div>
        <input className="bg-white shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] text-sm mb-2 lg:w-96 md:w-96 w-60 lg:h-11 md:h-11 h-8 pl-2 rounded-md" type="name" name="username" placeholder="Input Your Name" />
        <input className="mt-2 lg:w-96 md:w-96 w-60 lg:h-11 md:h-11 h-8 pl-2 rounded-md text-sm" type="email" name="mail" placeholder="Input Your Email" />
        <div className="lg:mt-2 md:mt-4 lg:mb-2 lg:flex flex  lg:flex-row flex-col lg:w-96 md:w-96 lg:h-11 lg:space-x-5">
          <input className="pl-2 lg:mt-2 md:mt-0 md:mb-2 mb-2 mt-4 text-sm rounded-md lg:mr-2 md:w-96 md:h-11 w-60 h-8 " type="tel" name="phone" placeholder="Input your phone" />
          <input className="pl-2 lg:mb-2 md:mt-2 mt-2 text-sm rounded-md md:w-96 md:h-11 w-60 h-8" type="select" name="" placeholder="Select your nationality" />
        </div>
        <textarea className="pl-2 mt-4 mb-2 lg:w-96 md:w-96 w-60 h-11 rounded-md text-sm pt-2" name="trip" id="" cols="23" rows="4" placeholder="Explain about your trip"></textarea>
        <div className="bg-[#fcb371] lg:w-96 md:w-96 w-60 h-11 mt-4 rounded-md">
          <div className="text-[white] text-sm justify-center items-center mt-2 font-pacifico">submit</div>
        </div>
      </div>
    </div>
  );
};
