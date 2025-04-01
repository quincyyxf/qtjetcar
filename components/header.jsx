import React from "react";
import { FaUser , FaSignInAlt, FaSignOutAlt , Fa, FaBuilding} from 'react-icons/fa';
const Header = () => {
  return (
    <header className="bg-blue-500">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img className="h-12 w-12" src="/images/logo.svg" alt="QT Jet Car" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Home
                </a>
                <a href="/excursions" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Excursions
                </a>
                <a href="/book" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="/login" className="mr-3 text-white hover:text-gray-200">
               <FaSignInAlt className='inline mr-1'/> Login
              </a>
              <a href="/register" className="mr-3 text-white hover:text-gray-200">
              <FaUser className='inline mr-1'/> Register
              </a>
              <a href="/my-bookings" className="text-white hover:text-gray-200">
              <FaBuilding className='inline mr-1'/> My Bookings
              </a>
              <a href="/logout" className="mx-3 text-white hover:text-gray-200">
              <FaSignOutAlt className='inline mr-1'/> Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700">
            Home
          </a>
          <a href="/excursions" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700">
            Excursions
          </a>
          <a href="/book" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

