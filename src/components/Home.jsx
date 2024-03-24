import React from "react";
import SliderComponent from "../components/SliderComponent";
import MenuBar from "./common/MenuBar";

const Home = () => {
  return (
    <div className=" relative w-full h-[100vh] bg-blue-600">
      <MenuBar />
      <p className="px-6 text-2xl font-bold">BMW</p>
      <div className="w-full p-2">
        <SliderComponent />
      </div>
      <div className="flex justify-between items-center mt-4 px-12">
        <div className="buttons">Telegram</div>
        <div className="buttons">Reward</div>
        <div className="buttons">VIP</div>
        <div className="buttons">Team</div>
      </div>
      <div className="bg-white h-[500px] mt-4 rounded-t-xl">
      </div>
    </div>
  );
};

export default Home;
