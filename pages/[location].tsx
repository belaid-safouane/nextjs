import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { LocationDetails } from "../components/LocationDetails";
import { Header } from "../components/Header";
import { locations, casablanca } from "../data";

const Location: NextPage = () => {
  const router = useRouter();
  const { location: slug } = router.query;

  const data = casablanca.find(
    (location) => `sos-medecin-${location.slug}` == slug
  );

  return (
    <div className="">
      <Head>
        <title>SOS Medecin Urgence {data?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header white />
      {data && <LocationDetails location={data} />}
    </div>
  );
};

export default Location;
