import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'
import Sidebar from './Sidebar'
// import { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";

const MainPage = () => {
    // const [open, setOpen] = useState(true);
  return (
    <>
        {/* Heading */}
        <section>
            <Navbar />
        </section>

        {/* Sidebar */}
        <section>
            <div className="grid grid-cols-11">
                {/* <div className={`${open ? "col-span-2" : "w-16"} bg-slate-900 h-screen pl-2 duration-400 relative`}>
                <BsArrowLeftShort className={`text-slate-900 bg-white rounded-full border border-slate-900 cursor-pointer text-2xl absolute -right-3 -top-3 ${!open && "rotate-180"}`}
                onClick={() => setOpen (!open)} />
                    <Sidebar />
                </div> */}
                <div className="col-span-2 bg-gradient-to-b from-gray-700 via-gray-900 to-black h-screen pl-2 rounded-b-md duration-400 relative">
                <BsArrowLeftShort className="text-slate-900 bg-white rounded-full border border-slate-900 cursor-pointer text-2xl absolute -right-3 -top-3"/>
                    <Sidebar />
                </div>

                <div className="col-span-9">
                    <NavPage />
                </div>
            </div>
        </section>
    </>
  )
}

export default MainPage