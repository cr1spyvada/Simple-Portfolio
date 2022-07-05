import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/Hero";
import { PageContainer } from "../components/PageContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <PageContainer>
      <Hero />
    </PageContainer>
  );
}
