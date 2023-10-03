import { Scroll } from "@react-three/drei";
import React from "react";
import vespaLogo from "/images/vespalogo.png";

const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-center justify-center bg-[#5b7c99]">
        <header className="text-center">
          <h1>
            <img src={vespaLogo} alt="vespa logo" width={500} height={500} />
          </h1>
        </header>
      </div>
    </section>
  );
};

const Section = ({ heading, description, alignStart }) => {
  return (
    <section
      className={`h-screen flex flex-col justify-start ${
        alignStart ? "items-start" : "items-end"
      } p-0`}
    >
      <div className="w-full h-full max-w-[400px]">
        <div
          className={`bg-[#EEEEEE] p-6 ${
            alignStart
              ? "text-left rounded-r-full border-[5px] border-l-black"
              : "text-right rounded-l-full border-[5px] border-r-black"
          } `}
        >
          <h2 className="text-[2rem] uppercase font-playfair-display leading-none">
            {heading}
          </h2>
          <p className="font-merriweather-sans mt-3">{description}</p>
        </div>
      </div>
    </section>
  );
};

const EndCard = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-end justify-between bg-transparent">
        <header className="text-center flex flex-col items-center">
          <h2>
            <img
              src={vespaLogo}
              alt="vespa logo"
              width={300}
              height={300}
              loading="lazy"
              className="pb-6"
            />
          </h2>
          {/* <p className="bg-[#5b7c99] px-4 py-1 rounded-md font-merriweather-sans text-sm font-semibold">
            I, the creator of this project, am NOT in any way affiliated with
            Vespa. This is just a PERSONAL PROJECT.
          </p> */}
        </header>
        <h3 className="pb-6 font-playfair-display flex flex-col items-end">
          Made by Jason Dichoso with React-Three-Fiber and GSAP.{" "}
          <span className="text-sm">
            Not affiliated with Piaggio and/or Vespa.
          </span>
        </h3>
      </div>
    </section>
  );
};

export default function Overlay() {
  return (
    <Scroll html>
      <div className="w-screen pointer-events-none">
        <Hero />
        <div className="h-screen" />

        <div className="max-w-[1850px] mx-auto">
          <Section
            heading={"A Timeless Design"}
            description={
              "The Vespa 125's timeless design blends heritage and innovation, a classic style that's always in vogue, turning heads on every ride."
            }
            alignStart={true}
          />

          <Section
            heading={"Vespa Lifestyle"}
            description={
              "Embrace the Vespa lifestyle - it's a unique way of life where every ride is an adventure, and your scooter is your passport to freedom."
            }
            alignStart={false}
          />

          <Section
            heading={"Comfortable Ergonomics"}
            description={
              "Enjoy comfortable riding with the Vespa 125's ergonomic design, plush seating, and a soft ride. Ensuring every journey is a pleasure."
            }
            alignStart={true}
          />

          <Section
            heading={"The Heart & Soul"}
            description={
              "The Vespa 125's peppy and dependable engine not only delivers performance but also efficiency, ensuring a smooth and responsive ride."
            }
            alignStart={false}
          />
          <EndCard />
        </div>
      </div>
    </Scroll>
  );
}
