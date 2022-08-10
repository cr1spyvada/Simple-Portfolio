import Head from 'next/head';
import { Hero } from '../components/sections/Hero';
import styles from '../styles/Home.module.css';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import Experience from '../components/sections/Experience';
import ToggleButton from '../components/buttons/ToggleButton';
import { useEffect, useState } from 'react';
import { faArrowUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // typeof window !== 'undefined' &&
    window.addEventListener('scroll', toggleVisible);
  });

  function changeState() {
    if (darkTheme === false) {
      document.documentElement.classList.add('dark');
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkTheme(false);
    }
  }

  return (
    <div className="bg-white text-xs sm:text-sm md:text-md lg:text-lg transition-colors duration-500 dark:bg-slate-900">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <NavBar />
      <div className="relative mt-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <div className="fixed items-end flex flex-col gap-y-2 bottom-5 right-0 p-2 md:mr-3">
          {visible && <ToggleButton onClick={scrollToTop} icon={faArrowUp} />}
          <ToggleButton onClick={changeState} icon={!darkTheme ? faMoon : faSun} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
