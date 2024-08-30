"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LanguageDropdownButton from './language';
import { useLanguage } from '../Context/LanguageContext';

const Navbar = () => {
  const { translations } = useLanguage();
  const [activeItem, setActiveItem] = useState<string>('home');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'projects', 'experience', 'contacts'].includes(hash)) {
        setActiveItem(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${sectionId}`);
      setActiveItem(sectionId);
      // Close the menu after navigation on mobile
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const navItems = ['home', 'about', 'projects', 'experience', 'contacts'];

  return (
    <motion.nav
      className="bg-white dark:bg-zinc-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Botão de Menu Móvel no Lado Esquerdo */}
        <div className="md:hidden">
          <motion.button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </motion.button>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Rodrigo Carvalho
          </h1>
        </div>

        <motion.div
          className="hidden md:flex items-center justify-center w-full md:w-auto"
          id="desktop-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-gray-700">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item);
                  }}
                  className={`block py-2 px-3 rounded md:p-0 ${activeItem === item
                    ? 'text-[#28CB8B]'
                    : 'text-gray-900 dark:text-white dark:hover:text-[#28CB8B]'
                    }`}
                >
                  {(translations.navbar[item as keyof typeof translations.navbar]) || item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
            <li>
              <LanguageDropdownButton />
            </li>
          </ul>
        </motion.div>


        {/* Menu Móvel */}
        <motion.div
          className="fixed top-16 left-0 w-full bg-gray-50 dark:bg-zinc-800 border-t border-gray-200 dark:border-gray-700 md:hidden"
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ overflow: 'hidden' }}
        >
          <ul className="flex flex-col p-4 font-medium">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item);
                  }}
                  className={`block py-2 px-3 rounded ${activeItem === item
                    ? 'text-[#28CB8B]'
                    : 'text-gray-900 dark:text-white dark:hover:text-[#28CB8B]'
                    }`}
                >
                  {(translations.navbar[item as keyof typeof translations.navbar]) || item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
            <li>
              <LanguageDropdownButton />
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
