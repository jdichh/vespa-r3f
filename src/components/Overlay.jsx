import { Scroll } from "@react-three/drei";
import vespaLogo from '/vespa_logo.webp'
import { AiFillDownCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-center justify-center bg-[#5b7c99]">
        <div className="flex flex-col justify-center items-center">
            <img
              src={vespaLogo}
              alt="vespa logo"
              width={250}
              height={250}
            />
          <AiFillDownCircle size={40} color="#FFF" className="mt-6 mb-3"/>
          <h2 className="font-playfair-display">Scroll down to continue.</h2>
        </div>
      </div>
    </section>
  );
};

const Section = ({ heading, description, alignStart }) => {
  return (
    <>
      <section
        className={`h-screen flex flex-col justify-start ${
          alignStart ? "items-start" : "items-end"
        } p-0`}
      >
        <div className="w-full h-full max-w-[310px] lg:max-w-[420px]">
          <div
            className={`bg-[#EEEEEE] p-5 ${
              alignStart
                ? "text-left rounded-r-full border-[3px] border-l-black"
                : "text-right rounded-l-full border-[3px] border-r-black"
            } `}
          >
            <h2 className="text-lg lg:text-2xl uppercase font-playfair-display leading-none">
              {heading}
            </h2>
            <p className="font-merriweather-sans mt-3 text-xs lg:text-base">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const EndCard = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-end justify-between bg-transparent pb-4">
        <header className="text-center flex flex-col items-center">
          <h2>
            <img
              src={vespaLogo}
              alt="vespa logo"
              width={100}
              height={100}
              loading="lazy"
            />
          </h2>
        </header>
        <h2 className="font-playfair-display flex flex-col text-right items-end text-[0.45rem] sm:text-base">
          Made by Jason Dichoso with React-Three-Fiber and GSAP.{" "}
          <span className="sm:text-xs">
            Not affiliated with Piaggio and/or Vespa.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default function Overlay() {
  return (
    <Scroll html>
      <Hero />
      <main className="w-screen pointer-events-none px-3">
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
              "The Vespa 125's peppy and dependable heart not only delivers performance but also efficiency, giving you a smooth and responsive engine."
            }
            alignStart={false}
          />
          <EndCard />
        </div>
      </main>
    </Scroll>
  );
}
