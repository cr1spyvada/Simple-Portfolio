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
import { faAngleDown, faArrowUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Animation from '../components/Animation';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [topVisible, setTopVisible] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) setTopVisible(false);
    else setTopVisible(true);
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
      <Animation className="absolute h-full w-full z-[-1]" />
      <div className="relative space-y-14 mt-10 scroll-smooth">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <div className="fixed z-[2] items-end flex flex-col gap-y-2 bottom-5 right-0 p-2 md:mr-3">
          {visible && <ToggleButton onClick={scrollToTop} icon={faArrowUp} />}
          <ToggleButton onClick={changeState} icon={!darkTheme ? faMoon : faSun} />
        </div>
      </div>
      {topVisible && (
        <div className="dark:text-white absolute z-[1] flex flex-col justify-center items-center mb-2 w-full bottom-0">
          <div className="animate-bounceY text-5xl mx-auto">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div>Scroll Down</div>
        </div>
      )}
      <Footer />
    </div>
  );
}
