import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://pbs.twimg.com/profile_images/1529288783077822465/f0dVpcDQ_400x400.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-over md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
      </div>
      <p className="text-base">
        This is Dorothy, focusing on software engineering to empower users&apos;
        experiences. My aim is to harness front-end technology to empower users&apos; experience as well as SDG impact. I have
        built up some projects challenges to solidify my front-end developer
        skills. I am always holding a resilient attitude and growth mindset to
        solve problems in the digital world.
      </p>
    </motion.div>
  );
}
