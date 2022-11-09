import Head from "next/head";
import Header from "../components/Header";
import type { NextPage } from "next";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        {/* eslint-disable */}
        <title>Dorothy's Portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky  bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter cursor-pointer grayscale hover:grayscale-0"
              src="https://pbs.twimg.com/profile_images/1529288783077822465/f0dVpcDQ_400x400.jpg"
              alt=""
            ></img>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
