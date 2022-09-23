const services = [
  "Consultations médecin à domicile",
  "MÉDECIN DE NUIT",
  "MÉDECINS URGENTISTES",
  "TRANSPORT AMBULANCE",
  "MÉDECINS DE GARDE",
  "Perfusion Sérum à domicile",
  "SOINS ET PREMIERS TRAITEMENTS",
  "AVION SANITAIRE",
  "CERTIFICAT MÉDICAL",
  "CONSEIL MÉDICAL",
  "HOSPITALISATION À DOMICILE",
  "MÉDECIN DE PROXIMITÉ",
  "AMBULANCE MÉDICALISÉE",
  "URGENCE A DOMICILE",
  "URGENCE Casablanca a DOMICILE",
  "AVION SANITAIRE / Civière",
  "SOINS PARAMEDICALES A DOMICILE",
  "Dentist de garde 24h/24",
  "contre visite médicale",
  "bilan sanguin a domicile",
  "analyses sanguines a domicile",
];

export const Locations = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h5 className="mb-8 text-4xl font-extrabold leading-none md:pl-2">
        SOS Medecins Urgence Casablanca
      </h5>
      <p className="text-base text-gray-700 md:text-lg md:w-1/2">
        Urgence Casablanca pour tout vos urgences à domicile ou sur votre lieu
        de travail, et accompagnement médicale vers une structure hospitalière.
      </p>
      <div className="grid gap-3 row-gap-3 lg:grid-cols-3 mt-2 space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center uppercase">
            <span className="mr-1 uppercase">
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
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};
