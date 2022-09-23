import { locations } from "../data";

export const Find = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            text pour villes ici
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg"></p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map(({ slug, city, districts }, index) => (
          <div key={index}>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-red-accent-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <a href={`/${slug}`} className="">
              <h6 className="mb-2 font-semibold leading-5">{city}</h6>
            </a>

            <p className="mb-3 text-sm text-gray-900">
              Consultation Visite Médecin à Domicile {city}
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              {districts.slice(0, 4).map((district, index) => (
                <li key={index} className="flex items-start">
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
                  {district}
                </li>
              ))}
            </ul>
            <a
              href={`/${slug}`}
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-accent-400 hover:text-red-800"
            >
              voir plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
