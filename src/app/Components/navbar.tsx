// components/Navbar.tsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LanguageDropdownButton from './language';
import { useLanguage } from '../Context/LanguageContext';

const Navbar = () => {
  const { translations } = useLanguage();
  const [activeItem, setActiveItem] = useState<string>('home');

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
    }
  };

  const navItems = ['home', 'about', 'projects', 'experience', 'contacts'];

  return (
    <motion.nav
      className="bg-white dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <motion.button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
        <motion.div
          className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-gray-700">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
