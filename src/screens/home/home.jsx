import Image from "./imagehome/hbg.jpg";
import Bali from "./imagehome/bali.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-full w-full bg-cover bg-no-repeat " style={{ backgroundImage: `url(${Image})` }}>
      <div className="bg-[#2a263dd1] absolute h-screen w-full"></div>
      <div className="flex flex-col justify-center items-center text-center h-screen ">
        <div className="z-10 w-44 h-40 text-center justify-center items-center ">
          <img src={Bali} alt="" />
        </div>
        <div className="z-10">
        <div className="z-10  mt-4 pt-4 text-center justify-center items-center font-pacifico ">
          <div className="text-white pb-7 lg:text-5xl md:text-4.5xl text-4xl">A Better way to</div>
          <div className="ml-3 text-[#fcb371] lg:text-5xl md:text-4.5xl text-4xl">Travel to Bali</div>
        </div>
        <div className="z-10 mb-4 mt-4 text-white ">Cheapest and Easier</div>
        <div className="z-10 lg:flex-row md:flex md:flex-row  flex flex-col lg:space-x-4 md:space-x-4 space-x-1 font-pacifico text-center justify-center items-center">
          <Link to="/about" className="p-1.5 text-center justify-center items-center box-border h-11 w-36 border-4 border-solid  border-[#fcb371] rounded-md text-[#fcb371]">
            About Us
          </Link>
          <Link to="/reservation" className="box-border color bg-[#fcb371] rounded-md lg:h-11 lg:flex  w-36  lg:p-2 md:2 p-2 text-center justify-center items-center text-white lg:mt-0 md:mt-0 mt-2">
            Reservation
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
