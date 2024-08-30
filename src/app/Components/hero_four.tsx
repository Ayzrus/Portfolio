"use client";
import parsisplan from "@/app/Assets/parsisplan.png"
import novabit from "@/app/Assets/novabit.png"
import { useLanguage } from "../Context/LanguageContext";
import { motion } from 'framer-motion';
import Image from "next/image";

const Hero_four = () => {
  const { translations } = useLanguage();

  return (
    <section id="experience" className="bg-white dark:bg-zinc-900">
      <div className="max-w-screen-2xl px-4 py-16 mx-auto lg:py-32 min-h-[800px]">
        {/* Título Centralizado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {translations.hero_four.Title}
          </h2>
        </div>

        {/* Cards Centralizados */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md max-w-xs text-center"
          >
            <Image
              property="priority"
              alt="Parsisplan"
              src={parsisplan}
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                PARSISPLAN-Sistemas de Informação, Lda
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {translations.hero_four.parsisplan}
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md max-w-xs text-center"
          >
            <Image
              property="priority"
              alt="Novabit"
              src={novabit}
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Nov@bit, Informática LDA
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {translations.hero_four.novabit}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero_four;
