import { Scroll } from "@react-three/drei";
import React from "react";

const Section = ({ children, alignStart }) => {
  return (
    <section className={`h-screen flex flex-col justify-center ${alignStart ? 'items-start' : 'items-end'} p-3`}>
      <div className="w-1/4 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-md px-8 py-12 text-center text-2xl">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default function Overlay() {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section alignStart={false}>
          <h1>Test 1</h1>
        </Section>
        <Section alignStart={true}>
          <h1>Test 2</h1>
        </Section>
        <Section alignStart={false}>
          <h1>Test 3</h1>
        </Section>
        <Section alignStart={true}>
          <h1>Test 4</h1>
        </Section>
        <Section alignStart={false}>
          <h1>Test 5</h1>
        </Section>
        {/* <Section alignStart={true}>
          <h1>Test 6</h1>
        </Section>
        <Section alignStart={false}>
          <h1>Test 7</h1>
        </Section>
        <Section alignStart={true}>
          <h1>Test 8</h1>
        </Section>
        <Section alignStart={false}>
          <h1>Test 9</h1>
        </Section>
        <Section alignStart={true}>
          <h1>Test 10</h1>
        </Section>
        <Section alignStart={false}>
          <h1>Test 11</h1>
        </Section> */}
      </div>
    </Scroll>
  );
}
