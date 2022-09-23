import Image from "next/image";

export const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              SOS Medecin Urgence Casablanca
              {/* <span className="inline-block text-red-accent-400">
                Casablanca
              </span> */}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Urgence Casablanca service médical de qualité. Consultation
              Medecin a domicile assurées par des médecins expérimentés.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-red-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Urgence Casablanca
              </h6>
              <p className="text-sm text-gray-900">
                Prise en charge rapide adapté a toutes les situations
                d’urgences.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-red-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Les urgences DE ROUTINES
              </h6>
              <p className="text-sm text-gray-900">
                Docteurs, hospitalisation et suivi des patients à domicile
                Pédiatrique et adulte
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-red-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                URGENCES Casablanca
              </h6>
              <p className="text-sm text-gray-900">
                Ambulances médicalisés staff professionnel rodé à l’urgence
                prise en charge 24h/24.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-red-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                MEDECINE FAMILIALE
              </h6>
              <p className="text-sm text-gray-900">
                Consultations visites docteur à domicile pédiatrique et adultes
                suivi des dossiers médicaux depuis la prise d'appel jusqu'au
                bilan et fin d'intervention.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-ful">
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/2353_R0lVIERBTiA1MjYtMTg.jpg"
            alt=""
            width={425}
            height={319}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
