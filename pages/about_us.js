import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutMain from "../components/AboutUs/AboutMain";

export default function About() {
 
  return (
    <div className="bg-[#F5F5F5]">
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by leopard" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header color />
      <AboutMain />
      <Footer />
    </div>
  );
}