import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center md:justify-center">
          <div className="flex space-x-8">
            <div>
              <a href="#" className="flex items-center px-2 text-slate-600">
                <img src="/favicon.jpg" alt="logo" width={50} height={50} />
                <span className="font-montserrat font-bold pl-5">

                </span>
              </a>
            </div>
          </div>
          <div className="hidden text-lg font-bold md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-slate-600">
              Home
            </a>

            <a href="#" className="py-5 px-3 text-slate-600">
              What We Do
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              Features & Services
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              Contact Us
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </a>

          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features & Services
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
