import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  
  return (
    //   navbar goes here
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
            {/* logo */}
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span className="font-bold">Sang Hyuk An</span>
              </Link>
            </div>

          <div className="flex space-x-1">
            
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              
              <Link
                href="/career"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Career
              </Link>

              <Link
                href="/interest"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Interest
              </Link>
              <Link
                href="/projects"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Projects
              </Link>

              <Link
                href="/papers"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Papers
              </Link>

              <Link
                href="/achievement"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Achievements
              </Link>

            </div>
          </div>

          

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={`${!menuToggle ? "hidden" : ""} md:hidden`}>
        <Link
          href="/career"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Career
        </Link>
        <Link href="/interest" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Interest
        </Link>
        <Link href="/project" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Projects
        </Link>
        <Link href="/papers" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Papers
        </Link>
        <Link href="/achievement" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Achievements
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;