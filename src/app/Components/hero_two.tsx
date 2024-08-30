"use client";
import Image from "next/image";
import photo from "@/app/Assets/img.png";
import { useLanguage } from "../Context/LanguageContext";
import { motion } from 'framer-motion';

const Hero_Two = () => {
  const { translations } = useLanguage();

  return (
    <section id="about" className="bg-white dark:bg-zinc-900">
      <div className="grid max-w-screen-2xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 min-h-[800px]">

        {/* Texto */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {translations.hero_two?.title}
          </motion.h1>
          <motion.h5
            className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {translations.hero_two?.subtitle}
          </motion.h5>
          <motion.p
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {translations.hero_two?.description}
          </motion.p>
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
      </div>
    </section>
  )
}

export default Hero_Two;
