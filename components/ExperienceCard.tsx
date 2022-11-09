import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[600px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px]"
        src="https://pbs.twimg.com/profile_images/1529288783077822465/f0dVpcDQ_400x400.jpg"
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-3xl font-light">Front-end Engineer Candidate</h4>
        <p className="font-semibold text-2xl mt-1">Home Company</p>
        <div className="flex md:px-5 space-x-2 my-2">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1529288783077822465/f0dVpcDQ_400x400.jpg"
            alt=""
          />
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1529288783077822465/f0dVpcDQ_400x400.jpg"
            alt=""
          />
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1529288783077822465/f0dVpcDQ_400x400.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started from June 2022</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary </li>
          <li>Summary </li>
        </ul>
      </div>
    </article>
  );
}
