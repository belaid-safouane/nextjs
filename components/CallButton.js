import { PhoneIcon } from "@heroicons/react/outline";

export const CallButton = () => {
  return (
    <a
      href="tel:0522204920"
      type="submit"
      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-accent-400 hover:bg-red-accent-700 focus:shadow-outline focus:outline-none"
    >
      <PhoneIcon className="h-5 w-5 mr-1"  />
      0522 20 49 20
    </a>
  );
};
