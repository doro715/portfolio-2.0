/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] h-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center object-cover"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light text-center">
          {experience?.jobTitle}
        </h4>
        <p className="font-semibold text-1.5xl text-center mt-1">
          {experience?.company}
        </p>
        <p className="uppercase py-2 text-sm text-center text-gray-300">
          {new Date(experience.dateStarted).toDateString()}-{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="flex space-x-1 my-2 justify-center">
          {experience.technologies.map((technology) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <ul className="list-disc space-y-3 ml-5 text-base scrollbar overflow-y-scroll">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
