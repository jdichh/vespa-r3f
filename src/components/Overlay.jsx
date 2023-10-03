import { Scroll } from "@react-three/drei";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-center justify-center bg-[#5b7c99]">
        <div className="text-center">
          <h1 className="text-2xl">Vespa</h1>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

const Section = ({ heading, description, alignStart }) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center ${
        alignStart ? "items-start" : "items-end"
      } px-6 pointer-events-none`}
    >
      <div className="h-1/3 w-full max-w-[17.5%]">
        <div className="bg-white h-full rounded-sm p-6 text-left">
          <h2 className="text-xl uppercase">{heading}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

const EndCard = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-center justify-center bg-transparent">
        <div className="text-center">
          <h1 className="text-2xl">Vespa</h1>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
};

export default function Overlay() {
  return (
    <Scroll html>
      <div className="w-screen">
        <Hero />

        <div className="h-screen" />
        <Section
          heading={"Timeless Design"}
          description={
            "The Vespa's timeless design blends heritage and innovation, a classic style that's always in vogue, turning heads on every ride."
          }
          alignStart={true}
        />

        <Section
          heading={"Lifestyle"}
          description={
            "Embrace the Vespa lifestyle - it's a unique way of life where every ride is an adventure, and your scooter is your passport to freedom."
          }
          alignStart={false}
        />

        <Section
          heading={"Comfortable Ergonomics"}
          description={
            "Enjoy comfortable riding with Vespa's ergonomic design, plush seating, and a soft ride, ensuring every journey is a pleasure."
          }
          alignStart={true}
        />

        <Section
          heading={"Engine"}
          description={
            "The Vespa's powerful and dependable engine not only delivers performance but also efficiency, ensuring a smooth and responsive ride."
          }
          alignStart={false}
        />

        <EndCard />
      </div>
    </Scroll>
  );
}
