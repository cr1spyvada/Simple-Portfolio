import { useEffect, useState } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';

import { faAngleDown, faArrowUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleButton from '../components/buttons/ToggleButton';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [topVisible, setTopVisible] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState('default');

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
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: darkTheme ? '#F0F9F6' : '#F0F9F6',
      mixBlendMode: 'difference'
    },
    text: {
      height: 180,
      width: 180,
      x: mousePosition.x - 90,
      y: mousePosition.y - 90,
      backgroundColor: darkTheme ? '#F0F9F6' : '#F0F9F6',
      mixBlendMode: 'difference'
    },
    clickable: {
      height: 25,
      width: 25,
      x: mousePosition.x - 12.5,
      y: mousePosition.y - 12.5,
      backgroundColor: darkTheme ? '#F0F9F6' : '#F0F9F6',
      mixBlendMode: 'difference'
    }
  };
  const variantsOuter = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'transparent',
      border: '1px solid #08080D',
      borderColor: darkTheme ? '#F0F9F6' : '#08080D'
    }
  };
  const textEnter = (id = 1) => {
    const cursorVariantOptions = ['default', 'text', 'clickable'];
    setCursorVariant(cursorVariantOptions[id]);
  };
  const textLeave = () => {
    setCursorVariant('default');
  };

  function changeState() {
    if (darkTheme === false) {
      document.documentElement.classList.add('dark');
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkTheme(false);
    }
  }
  const sectionProps = {
    textEnter: textEnter,
    textLeave: textLeave
  };

  return (
    //TODO: clear commented code
    // <div className="bg-gradient-to-b text-w6 dark:text-w1 from-w1 to-w4 text-xs sm:text-sm md:text-md lg:text-lg transition-colors duration-500 dark:from-w6 dark:to-w6">
    <div className="snap-y snap-mandatory select-none bg-gradient-to-b text-w6 dark:text-w1 bg-w1 text-xs sm:text-sm md:text-md lg:text-lg transition-colors duration-500 dark:bg-w6">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Vaisakh NP</title>
      </Head>
      <NavBar {...sectionProps} />
      <div className="relative space-y-14 scroll-smooth">
        <Hero {...sectionProps} />
        <About {...sectionProps} />
        <Experience {...sectionProps} />
        <Projects {...sectionProps} />
        <Contact {...sectionProps} />
        <div className="fixed z-[110] items-end flex flex-col gap-y-2 bottom-5 right-0 p-1 md:mr-3">
          {visible && <ToggleButton onClick={scrollToTop} icon={faArrowUp} />}
          <ToggleButton onClick={changeState} icon={!darkTheme ? faMoon : faSun} />
        </div>
      </div>
      {topVisible && (
        <div className="dark:text-w1 absolute text-md z-[1] flex flex-col justify-center items-center mb-2 w-full bottom-0">
          <div className="animate-bounceY mx-auto">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div>Scroll Down</div>
        </div>
      )}
      <Footer {...sectionProps} />
      <motion.div
        transition={{ duration: 2, type: 'spring', stiffness: 10000, mass: 0.15 }}
        className="invisible sm:visible fixed h-4 w-4 bg-w6 dark:bg-w1 z-[110] top-0 left-0 pointer-events-none rounded-full"
        variants={variants}
        animate={cursorVariant}></motion.div>
      <motion.div
        transition={{ duration: 2, type: 'spring', stiffness: 100, mass: 0.1 }}
        className="invisible sm:visible fixed h-8 w-8 bg-w2 dark:bg-w2 z-[110] top-0 left-0 pointer-events-none rounded-full"
        variants={variantsOuter}
        animate={'default'}></motion.div>
    </div>
  );
}
