import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full py-6 mt-4 bg-gray-900 md:mt-2 xl:mt-6">
      <div className="flex flex-col items-center justify-between w-full px-4 text-sm text-gray-400 sm:flex-row">
        <Link 
          className="flex items-center mb-4 sm:mb-0 group" 
          to="https://portfolio-n71a.onrender.com"
        >
          <FaGlobe className="mr-3 text-lg text-emerald-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
          <span className="text-base transition-colors duration-300 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl group-hover:text-emerald-400">
            Web Developer Portfolio
          </span>
        </Link>
        <div className="text-center sm:text-right">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">© All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}