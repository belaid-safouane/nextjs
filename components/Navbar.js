import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CallButton } from "./CallButton";
import { locations } from "../data";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setsubmenuOpen] = useState(false);

  return (
    <div
      className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      onMouseLeave={() => setsubmenuOpen(false)}
    >
      <div className="relative flex items-center justify-between">
        <Link href="/">
          <a
            aria-label="SOS Medecin Casblanca"
            title="SOS Medecin Casblanca"
            className="inline-flex items-center"
          >
            <Image
              src="/urgence-casa.png"
              width={160}
              height={59}
              layout="fixed"
            />
          </a>
        </Link>
        <ul className="hidden items-center space-x-8 lg:flex">
          <li>
            <Link href="/">
              <a
                title="SOS Medecin casablanca"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400 md:text-sm"
              >
                Accueil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/medecin-urgentiste-casablanca">
              <a
                title="Medecin urgentiste Casablanca"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400 md:text-sm"
                onMouseEnter={() => setsubmenuOpen(true)}
              >
                Medecin Urgentiste a Domicile Casablanca
              </a>
            </Link>
          </li>
          <li>
            <CallButton />
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-red-50 focus:bg-red-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/">
                      <a
                        aria-label="SOS Medecin Casblanca"
                        title="SOS Medecin Casblanca"
                        className="inline-flex items-center"
                      >
                        <Image
                          src="/urgence-casa.png"
                          width={160}
                          height={59}
                          layout="fixed"
                        />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/">
                        <a
                          title="SOS Medecin casablanca"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
                        >
                          Accueil
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/medecin-urgentiste-casablanca">
                        <a
                          title="Medecin urgentiste Casablanca"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
                        >
                          Medecin Urgentiste a Domicile Casablanca
                        </a>
                      </Link>
                    </li>
                    {locations[0].districts.map(({ slug, name }, index) => (
                      <li key={index} className="">
                        <Link key={index} href={`/sos-medecin-${slug}`}>
                          <a
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
                          >
                            Medecin Urgentiste a domicile {name}
                          </a>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <a
                        href="tel:0522204920"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-accent-400 hover:bg-red-accent-700 focus:shadow-outline focus:outline-none"
                        title="0522204920"
                      >
                        0522 20 49 20
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      {submenuOpen && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 pt-5">
          {locations[0].districts.map(({ slug, name }, index) => (
            <Link key={index} href={`/sos-medecin-${slug}`}>
              <a className="text-gray-900 text-sm">{name}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
