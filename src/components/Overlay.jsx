import { Scroll } from "@react-three/drei";
import React from "react";

const Hero = ({ title, subTitle }) => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl">{title}</h1>
          <p>{subTitle}</p>
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
          <h2 className="text-2xl uppercase">{heading}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default function Overlay() {
  return (
    <Scroll html>
      <div className="w-screen">

        <Hero title={"Vespa"} subTitle={"Description"} />

        <div className="h-screen" />
        <Section
          heading={"Timeless Design"}
          description={"Description"}
          alignStart={true}
        />

        <Section
          heading={"Lifestyle"}
          description={"Description"}
          alignStart={false}
        />

        <Section
          heading={"Comfortable Seats"}
          description={"Description"}
          alignStart={true}
        />

        <Section
          heading={"Engine"}
          description={"Description"}
          alignStart={false}
        />

        <Section
          heading={"Suspension"}
          description={"Description"}
          alignStart={true}
        />
      </div>
    </Scroll>
  );
}
