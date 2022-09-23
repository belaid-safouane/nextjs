import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Header, HeaderHome } from "../components/Header";
import { Faq } from "./../components/FAQ";
import { About } from "./../components/About";
import { Service } from "./../components/Service";
import { Find } from "./../components/Find";
import { Locations } from "../components/Locations";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>SOS Medecin Urgence Casablanca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeaderHome />
      <Faq />
      <About />
      <Locations />
      {/* <Find /> */}
      <Service />
    </div>
  );
};

export default Home;
