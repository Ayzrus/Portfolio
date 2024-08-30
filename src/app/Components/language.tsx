'use client';
import { useState, useEffect } from 'react';
import Flag from 'react-flagkit'; // Biblioteca para bandeiras
import { useLanguage } from '../Context/LanguageContext';

const LanguageDropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<JSX.Element>();
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    // Carregar a linguagem do localStorage quando o componente for montado
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      changeLanguage(
        savedLanguage === "PT" ? "pt" : savedLanguage === "GB" ? "en" : ""
      );
      setSelectedLanguage(<Flag country={savedLanguage} className="w-4 h-4 rounded-full me-2" aria-hidden="true" />);
    } else {
      // Definir a linguagem padrão se nada estiver salvo
      setSelectedLanguage(<Flag country="PT" className="w-4 h-4 rounded-full me-2" aria-hidden="true" />);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const selectLanguage = (countryCode: string) => {
    const flag = <Flag country={countryCode} className="w-4 h-4 rounded-full me-2" aria-hidden="true" />;
    setSelectedLanguage(flag);
    setIsOpen(false);
    changeLanguage(
      countryCode === "PT" ? "pt" : countryCode === "GB" ? "en" : ""
    );
    // Salvar a linguagem selecionada no localStorage
    localStorage.setItem('selectedLanguage', countryCode);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center font-medium justify-center text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer"
      >
        {selectedLanguage}
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <a
            href="#"
            onClick={() => selectLanguage('GB')}
            className="flex items-center px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag country="GB" className="w-4 h-4 rounded-full me-2" aria-hidden="true" />
            English (UK)
          </a>
          <a
            href="#"
            onClick={() => selectLanguage('PT')}
            className="flex items-center px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Flag country="PT" className="w-4 h-4 rounded-full me-2" aria-hidden="true" />
            Português (PT)
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdownButton;
