import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/Pages/Hero";
import { PageContainer } from "../components/PageContainer";
import styles from "../styles/Home.module.css";
import { About } from "../components/pages/About";

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <About />
    </PageContainer>
  );
}
