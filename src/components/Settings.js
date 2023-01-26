import React from 'react'
import { IoFingerPrint } from "react-icons/io5";
import { BsFillShieldLockFill, BsBoxArrowUpRight } from "react-icons/bs";
import { MdOutlineMobileFriendly, MdOutlineMarkEmailRead, MdArrowForwardIos } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Settings = () => {
  return (
    <>
        <div>
            <p className="flex text-center text-xl ml-3 font-semibold sm:text-2xl whitespace-nowrap">User General Settings</p>
        </div>
        <div className="flex">
            <div className="pl-3 items-center px-6 py-4 text-gray-300 whitespace-nowrap m-5">
                <div className="text-md font-semibold">
                    Push Notifications
                </div>
                <div className="font-normal text-gray-500">
                    If you want regular updates regarding the account activities <br/>then you can activate the Notification icon
                </div>
            </div> 
            <div className="mt-9">
                <label className="relative inline-flex items-center cursor-pointer ml-2 mt-2">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-br from-purple-600 to-blue-500"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
            </div> 
        </div>
        <div className="flex">
            <div className="pl-3 items-center px-6 whitespace-nowrap text-gray-300 ml-5">
                <div className="text-md font-semibold">
                    Two-Factor Authentication (2FA)
                </div>
                <div className="font-normal text-gray-500">
                    To protect your account <br/>it is recommended to turn on at least one 2FA.
                </div>
            </div> 
            <div className='flex'>
                <div className='h-[60px] w-[120px] bg-slate-600 rounded-md ml-32 relative'>
                    <p className="text-gray-300 cursor-pointer text-xs font-nova-flat flex mt-[20px] ml-[14px]">Biometric <IoFingerPrint className='text-lg ml-2' /></p>
                    <FiCheckCircle className='absolute text-black cursor-pointer ml-[103px] mt-2 text-lg bg-green-400 rounded-full' />
                </div>
                <div className='h-[60px] w-[120px] bg-slate-600 rounded-md ml-2'>
                    <p className="text-gray-300 text-xs cursor-pointer font-nova-flat mt-[15px] ml-[14px]">Authenticator App <BsFillShieldLockFill className='text-lg ml-9 mt-1' /></p>
                    <HiOutlineExclamationCircle className='absolute text-black cursor-pointer ml-[103px] -mt-2 text-lg bg-orange-400 rounded-full' />
                </div>
                <div className='h-[60px] w-[120px] bg-slate-600 rounded-md ml-2'>
                    <p className="text-gray-300 text-xs cursor-pointer font-nova-flat flex mt-[20px] ml-[28px]">Mobile <MdOutlineMobileFriendly className='text-lg ml-2' /></p>
                    <FiCheckCircle className='absolute text-black cursor-pointer ml-[103px] mt-2 text-lg bg-green-400 rounded-full' />
                </div>
                <div className='h-[60px] w-[120px] bg-slate-600 rounded-md ml-2'>
                    <p className="text-gray-300 text-xs cursor-pointer font-nova-flat flex mt-[20px] ml-[28px]">Email <MdOutlineMarkEmailRead className='text-lg ml-2' /></p>
                    <FiCheckCircle className='absolute text-black cursor-pointer ml-[103px] mt-2 text-lg bg-green-400 rounded-full' />
                </div>
            </div> 
        </div>
        <div className="flex mt-9">
            <div className="pl-3 items-center px-6 whitespace-nowrap text-gray-300 ml-5">
                <div className="text-md font-semibold">
                    Manage Account
                </div>
                <div className="font-normal text-gray-500">
                    If you are willing to disable or close your account.
                </div>
            </div>
            <MdArrowForwardIos className="text-xl ml-[105px] mt-3 cursor-pointer" />
        </div>
        <div className="flex mt-9">
            <div className="pl-3 items-center px-6 whitespace-nowrap text-gray-300 ml-5">
                <div className="text-md font-semibold">
                    Legal & Terms of Services
                </div>
                <div className="font-normal text-gray-500">
                    Kindly go through the Legal & Terms of Services.
                </div>
            </div>
            <BsBoxArrowUpRight className="text-xl ml-[115px] mt-3 cursor-pointer" />
        </div>
        <div className='items-center text-center mt-12 text-xs'>
            <p>Please do not disclose SMS and Google Authentication codes to anyone, <br/>including Butterfly customer support.</p>
        </div>
    </>
  )
}

export default Settings