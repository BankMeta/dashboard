import React from 'react'
import user from "../assets/profile.jpeg"
import { MdOutlineVerified } from "react-icons/md";

const MyDetails = () => {
  return (
    <>
        <div>
            <div className="flex">
                <p className="flex text-center text-xl ml-3 font-semibold sm:text-2xl whitespace-nowrap">Profile Information</p>
                <button type="button" class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-[700px] mb-5 ">Edit</button>
            </div>
            <div className="flex flex-row justify-left w-96 p-3 mt-5 rounded-xl sm:px-12 ">
                <img src={user} alt="" className="w-24 h-24 mx-auto rounded-full dark:bg-gray-500 object-cover" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                      <h2 className="flex text-xl ml-3 font-semibold whitespace-nowrap font-nova-flat sm:text-2xl">Ritesh Raj <MdOutlineVerified className="whitespace-nowrap ml-2 mt-2 rounded-full text-black bg-green-500 text-xl" /></h2>
                      <p className="px-5 -ml-2 text-xs sm:text-base dark:text-gray-400">Freelancer</p>
                    </div>
                </div>
                <div className=''>
                    <ul className='flex items-center px-6 py-4 text-gray-500 whitespace-nowrap'>
                        <li className='ml-[200px]'>
                            First Name
                            <p className='text-white mt-3 font-nova-flat'>
                                Ritesh
                            </p>
                        </li>
                        <li className=' ml-[200px]'>
                            Last Name
                            <p className='text-white mt-3 font-nova-flat'>
                              Raj
                            </p>
                        </li>
                    </ul>
                    <ul className='flex items-center px-6 py-4 text-gray-500 whitespace-nowrap'>
                        <li className='ml-[200px]'>
                            Email
                            <p className='text-white mt-3 font-nova-flat'>
                              xyz123@gmail.com
                            </p>
                        </li>
                    </ul>
                    <ul className='flex items-center px-6 py-4 text-gray-500 whitespace-nowrap'>
                        <li className='ml-[200px]'>
                            Recovery Email
                            <p className='text-white mt-3 font-nova-flat'>
                              abc123@gmail.com
                            </p>
                        </li>
                    </ul>
                    <ul className='flex items-center px-6 py-4 text-gray-500 whitespace-nowrap'>
                        <li className='ml-[200px]'>
                            Country
                            <p className='text-white mt-3 font-nova-flat'>
                              INDIA
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyDetails