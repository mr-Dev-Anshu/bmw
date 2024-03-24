import React from "react";
import SliderComponent from "../components/SliderComponent";
import MenuBar from "./common/MenuBar";
import SlideButton from "./SlideButton";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className=" relative h-[100vh] bg-blue-600">
      <MenuBar />
      <p className="px-6 py-3 text-3xl tracking-widest text-white font-bold">BMW</p>
      <div className="w-full p-2">
        <SliderComponent />
      </div>
      <div className="flex justify-between items-center mt-4 px-12">
        <HashLink>
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            Telegram
          </div>
        </HashLink>
        <HashLink>
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            Reward
          </div>
        </HashLink>
        <HashLink>
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            VIP
          </div>
        </HashLink>
        <HashLink>
          <div className="buttons rounded-xl font-semibold text-xl bg-white w-72">
            Team
          </div>
        </HashLink>
      </div>
      <SlideButton />
    </div>
  );
};

export default Home;
