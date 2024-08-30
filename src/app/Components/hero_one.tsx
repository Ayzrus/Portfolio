"use client";
import Image from "next/image";
import photo from "@/app/Assets/IMG_20240707_172727.jpg";
import { FaPython, FaJava, FaJsSquare } from 'react-icons/fa';
import { SiC, SiCsharp, SiLua, SiNextdotjs, SiReact, SiTypescript, SiVisualbasic } from 'react-icons/si';
import { useLanguage } from "../Context/LanguageContext";
import { motion } from 'framer-motion';

const Hero_One = () => {
  const { translations } = useLanguage();

  return (
    <section id="home" className="bg-white dark:bg-zinc-900">
      <div className="grid max-w-screen-2xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 min-h-[800px]">

        {/* Texto */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {translations.hero_one?.title}
          </motion.h1>
          <motion.p
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {translations.hero_one?.description}
          </motion.p>
          <div className="mt-4">
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('projects');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block px-6 py-3 text-base font-medium text-white bg-[#28CB8B] rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-[#28CB8B] dark:hover:bg-[#43A046] transition-transform duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Projetos
            </motion.a>
          </div>
        </div>

        {/* Imagem */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
          <div className="relative overflow-hidden rounded-full w-60 h-60">
            <Image
              property="priority"
              alt="Rodrigo Carvalho"
              src={photo}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: 'center top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
        </div>

        {/* Linguagens */}
        <div className="col-span-12 lg:col-span-12 px-4 mx-auto text-center mt-8 lg:mt-0">
          <span className="font-semibold text-gray-400 uppercase">Linguagens e Frameworks</span>
          <div className="flex flex-wrap justify-center items-center mt-4 text-gray-500">
            {[FaPython, FaJava, FaJsSquare, SiCsharp, SiLua, SiC, SiVisualbasic, SiTypescript, SiNextdotjs, SiReact].map((Icon, index) => (
              <a key={index} className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <Icon className="text-3xl mb-1 transition-transform transform hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero_One;
