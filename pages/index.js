import Head from 'next/head';
import Image from 'next/image';
import { Hero } from '../components/sections/Hero';
import { PageContainer } from '../components/PageContainer';
import styles from '../styles/Home.module.css';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import Experience from '../components/sections/Experience';

export default function Home() {
  return (
    <div className="bg-sky-200 sm:text-sm dark:bg-slate-900 px-20">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <NavBar />
      <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
