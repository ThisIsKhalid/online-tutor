import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
// import component
import Drawer from 'react-modern-drawer'
//import styles
import 'react-modern-drawer/dist/index.css'

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
    };

  return (
    <>
      <div class="z-[100] absolute w-full pt-10 px-5 lg:px-0">
        <div className="container mx-auto">
          <div class=" grid items-center grid-cols-2 lg:grid-cols-3">
            <ul class="items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink className="text-lg font-medium">Home</NavLink>
              </li>
              <li>
                <NavLink className="text-lg font-medium">Blog</NavLink>
              </li>
              <li>
                <NavLink className="text-lg font-medium">Course</NavLink>
              </li>
            </ul>
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center lg:mx-auto"
            >
              <svg
                class="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Company
              </span>
            </a>
            <ul class="items-center hidden ml-auto lg:flex">
              <li>
                <Link className="text-lg font-medium mr-5">Log In</Link>
              </li>
              <li>
                <Link className=" text-white bg-black/90 py-3 px-4 rounded-full">
                  Sign Up
                </Link>
              </li>
            </ul>
            <div class="ml-auto lg:hidden">
              <button
                onClick={toggleDrawer}
              >
                <FiMenu className="text-2xl text-gray-800" />
              </button>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className=""
                size="50%"
              >
                <div className="bg-gray-800 h-full w-full pr-5 py-10">
                  <div className="ml-5">
                    <CiLogin
                      onClick={toggleDrawer}
                      className="text-[#FFCD70] text-2xl"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <NavLink className='text-white'>Home</NavLink>
                    <NavLink className='text-white'>Blog</NavLink>
                    <NavLink className='text-white'>Course</NavLink>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
