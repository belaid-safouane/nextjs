export const LocationDetails = ({ location: { name: location } }) => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              SOS Medecins Docteur a domicile urgence{" "}
              {/* <span className="inline-block text-red-accent-400"> */}
              {location}
              {/* </span> */}
            </h2>
            <p className="text-base text-gray-700 md:text-lg mt-1">
              Vous habitez à {location} et vous avez besoin d'un médecin
              généraliste urgentiste ou spécialiste pour tout type d'urgence, un
              médecin arrive chez vous dans les plus brefs délais sos médecins
              est là pour répondre à vos besoins d'urgence le médecin le plus
              proche de votre zone se déplace rapidement chez vous à {location}{" "}
              et environs.
            </p>
            <p className="text-base text-gray-700 md:text-lg mt-1">
              Bien souvent, les urgences arrivent aux moments où l'on s'y attend
              le moins, et il arrive que vous ayez besoin d’un médecin à
              domicile , L'intervention se fait en 10 minutes environ.
            </p>
            <p className="text-base text-gray-700 md:text-lg mt-1">
              SOS Médecins Docteur a domicile {location} est là pour répondre à
              toutes les situations d'urgence. Avec notre équipe de médecins
              généralistes et spécialistes dévouée pour leurs patients,
            </p>

            <p className="text-base text-gray-700 md:text-lg mt-1">
              SOS Médecins {location} vous propose une intervention immédiate
              d’un médecin à domicile {location} pour toutes vos urgences de
              santé !
            </p>
            <p className="text-base text-gray-700 md:text-lg mt-1">
              Quel que soit votre besoin médical ou celui de vos proches, SOS
              MÉDECINS {location} vous donne la possibilité de joindre en un
              clic un médecin à domicile {location} 24 heures sur 24.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h5 className=" mb-8 text-4xl font-extrabold leading-none md:pl-2">
          SOS Medecins Docteur a domicile urgence {location}
        </h5>
        <p className="text-base text-gray-700 md:text-lg md:w-1/2">
          SOS Médecins pour des soins d'urgence à domicile ou sur votre lieu de
          travail, accompagnement médical vers une structure hospitalière le
          plus proche et le mieux adapté.
        </p>
        <div className="grid gap-3 row-gap-3 lg:grid-cols-3 mt-2 space-y-3">
          {/* {districts.map((district, index) => (
            <div className="flex items-center">
              <span className="mr-1">
                <svg
                  className="w-5 h-5 mt-px text-red-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Docteur a domicile Urgence {district}
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};
