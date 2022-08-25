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
import { motion } from 'framer-motion';

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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
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
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: darkTheme ? '#F0F9F6' : '#F0F9F6',
      mixBlendMode: 'difference'
    }
  };
  const textEnter = (id = 1) => {
    console.log('enter');
    const cursorVariantOptions = ['default', 'text', 'clickable'];
    setCursorVariant(cursorVariantOptions[id]);
  };
  const textLeave = () => {
    console.log('leave');
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
  return (
    //TODO: clear commented code
    // <div className="bg-gradient-to-b text-w6 dark:text-w1 from-w1 to-w4 text-xs sm:text-sm md:text-md lg:text-lg transition-colors duration-500 dark:from-w6 dark:to-w6">
    <div className="bg-gradient-to-b text-w6 dark:text-w1 bg-w1 text-xs sm:text-sm md:text-md lg:text-lg transition-colors duration-500 dark:bg-w6">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <NavBar textEnter={textEnter} textLeave={textLeave} />
      <div className="relative space-y-14 scroll-smooth">
        <Hero textEnter={textEnter} textLeave={textLeave} />
        <About textEnter={textEnter} textLeave={textLeave} />
        <Experience textEnter={textEnter} textLeave={textLeave} />
        <Projects textEnter={textEnter} textLeave={textLeave} />
        <div className="fixed z-[2] items-end flex flex-col gap-y-2 bottom-5 right-0 p-1 md:mr-3">
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
      <Footer textEnter={textEnter} textLeave={textLeave} />
      <motion.div
        transition={{ type: 'spring', stiffness: 250, mass: 0.1 }}
        className="fixed invisible md:visible h-8 w-8 bg-w6 dark:bg-w1 z-[110] top-0 left-0 pointer-events-none rounded-full"
        variants={variants}
        animate={cursorVariant}></motion.div>
    </div>
  );
}
