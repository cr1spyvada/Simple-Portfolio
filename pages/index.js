import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/Pages/Hero";
import { PageContainer } from "../components/PageContainer";
import styles from "../styles/Home.module.css";
import { About } from "../components/pages/About";
import { Projects } from '../components/Pages/Projects';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import Experience from '../components/Pages/Experience';

export default function Home() {
  return (
    <div className="bg-sky-200 sm:text-sm dark:bg-slate-900 px-20">
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
