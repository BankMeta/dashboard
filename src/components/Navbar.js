import React, {useState} from 'react'
import { AiOutlineGitlab } from "react-icons/ai";
import user from "../assets/profile.jpeg"
import { NavbarData } from '../data/NavbarData';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [userMenu, setUserMenu] = useState(false);
    const handleUserMenu = (show) => {
    setUserMenu(show);
    };
    const [notificationMenu, setNotificationMenu] = useState(false);
    const handlenotificationMenu = (show) => {
    setNotificationMenu(show);
  };

  return (
    <>
        <section>
            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black border-opacity-90 w-full h-20 flex items-center pl-8 space-x-2">
                <div>
                    <AiOutlineGitlab className="bg-amber-300 text-2xl rounded-full cursor-pointer"/>
                </div>
                <div>
                    <p className="text-white text-2xl pl-2 font-semibold cursor-pointer">Butterfly</p>
                </div>
                <div>
                    <ul className="flex pl-48">
                        {/* <li className="text-white hover:bg-gray-500 rounded-lg text-xl items-center p-2 ml-2 font-semibold cursor-pointer">All Coins</li>
                        <li className="text-white hover:bg-gray-500 rounded-lg text-xl items-center p-2 ml-20 font-semibold cursor-pointer">Stable Coins</li> */}
                        <div className="text-xl font-normal flex">
                
                            {
                                NavbarData.map((item, index) => {
                                    return(
                                        <div key={index} className="mr-20 whitespace-nowrap">
                                            <NavLink to={item.path} className="hover:bg-gray-500 p-3 w-full rounded-lg font-bold justify-start items-center text-white text-l">
                                                <span>{item.title}</span>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </ul>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pl-[450px] sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div>
                        <div>
                            <button 
                                className="bg-gray-800 flex p-1 mr-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                id="user-menu"
                                onFocus={() => handlenotificationMenu(true)}
                                onBlur={() => handlenotificationMenu(false)}
                            >
                            
                            <span className="sr-only">View notifications</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            </button>
                        </div>
                        {notificationMenu ? (
                            <div
                            className="origin-top-left bg-black absolute right-48 mt-2 w-72 rounded-md shadow-lg py-1 ring-black ring-opacity-5"
                            role="menu"
                            >
                            <p className="block px-4 py-2 text-center bg-gray-700 text-gray-400 text-base font-semibold hover:bg-gray-500">
                                All Notifications
                            </p>
                            <p className="block px-4 py-2 bg-slate-800 text-sm text-white hover:bg-slate-900">
                                1st Message
                            </p>
                            <p className="block px-4 py-2 text-sm bg-slate-800 text-white hover:bg-slate-900">
                                2nd Message
                            </p>
                            </div>
                        ) : null}
                    </div>
                    {/* Notifications Dropdown */}
                    


                    <button className="bg-gray-800 flex ml-3 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">View wallet details</span>
                        <svg 
                            className="h-6 w-6" 
                            xmlns="http://www.w3.org/2000/svg" 
                             
                            preserveAspectRatio="xMidYMid meet" 
                            viewBox="0 0 1024 1024">
                                <g transform="translate(1024 0) scale(-1 1)">
                                    <path fill="currentColor" d="M1023.65 290.48c.464-23.664-5.904-78.848-77.84-98.064L223.394 47.794c-52.944 0-96 43.055-96 96v128.704l-32-.08c-52.752.223-95.632 43.15-95.632 95.967v511.808c0 52.945 43.056 96 96 96h832.464c52.945 0 96-43.055 96-96zM191.393 143.793c0-16.72 12.88-30.463 29.216-31.871l706 142.88c.256.128-5.248 17.935-30.88 17.6H191.393zM960.24 880.21c0 17.664-14.336 32-32 32H95.76c-17.664 0-32-14.336-32-32V368.386c0-17.664 14.336-32 32-32h800.064c31.408 0 64.4-10.704 64.4-31.888V880.21h.016zM191.824 560.498c-35.344 0-64 28.656-64 64s28.656 64 64 64s64-28.656 64-64s-28.656-64-64-64z"/>
                                </g>
                        </svg>
                    </button>

                    {/* <!-- User dropdown --> */}
                    <div className="ml-5 relative">
                        <div>
                            <button
                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
                            id="user-menu"
                            onFocus={() => handleUserMenu(true)}
                            onBlur={() => handleUserMenu(false)}
                            >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-14 w-14 object-cover border-2 rounded-full"
                                src={user}
                                alt=""
                            />
                            </button>
                        </div>
                        {userMenu ? (
                            <div
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                            role="menu"
                            >
                            <a
                                href='/MyDetails'
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Your Profile
                            </a>
                            <a
                                href="/settings"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Settings
                            </a>
                            <a
                                href="#Signout"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Sign out
                            </a>
                            </div>
                        ) : null}
                    </div>
                    {/* User dropdown menu ends */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar