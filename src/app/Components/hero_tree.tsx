"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../Context/LanguageContext";
import { motion } from 'framer-motion';

type Repo = {
  html_url: string;
  name: string;
  description: string;
};

const Hero_Tree = () => {
  const { translations } = useLanguage();

  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepo = (): void => {
    const url: string = `https://api.github.com/users/Ayzrus/repos`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        return response.json();
      })
      .then((data: Repo[]) => {
        const filteredRepos = data.filter(repo => repo.name !== 'Ayzrus' && repo.name !== "Portfolio");
        setRepos(filteredRepos);
      })
      .catch(error => console.error('Erro ao buscar repositórios:', error));
  };

  useEffect(() => {
    fetchRepo();
  }, []);

  return (
    <section id="projects" className="bg-white dark:bg-zinc-900">
      <div className="max-w-screen-2xl px-4 py-16 mx-auto lg:py-32 min-h-[800px]">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          {translations.hero_tree.projectsTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {repos.map((repo) => (
            <motion.div
              key={repo.html_url}
              className="relative bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-[#28CB8B] dark:text-[#28CB8B]">
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {repo.description || "No description available."}
              </p>

              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-600 dark:text-gray-300"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.599.111.793-.261.793-.578 0-.285-.01-1.043-.015-2.048-3.338.726-4.042-1.61-4.042-1.61-.545-1.386-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.774.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.234-3.221-.124-.304-.535-1.527.117-3.183 0 0 1.007-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.019.005 2.047.137 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.656.242 2.879.118 3.183.768.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.104.814 2.227 0 1.608-.015 2.902-.015 3.295 0 .32.192.694.799.577C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero_Tree;
