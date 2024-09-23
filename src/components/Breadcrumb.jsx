import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniHome } from "react-icons/hi2";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="text-sm text-gray-600 mb-11 font-primary-font">
      <ul className="flex items-center space-x-2 text-[16px]">
        <li className='text-zinc-400'>
          <Link to="/" className="hover:text-gray-800 flex items-center gap-2">
          <HiMiniHome/>
           <p>Home</p>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center gap-2">
             <IoIosArrowForward/>
              {isLast ? (
                <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
              ) : (
                <Link to={to} className="hover:text-gray-800">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
