import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarData } from '../data/SidebarData'


const Sidebar = () => {

    const activeLink = "hover:bg-gray-500 bg-gray-500 pl-7 mt-7 w-full h-14 rounded-lg font-bold flex justify-start items-center text-white text-l space-x-1"
    const normalLink = "hover:bg-gray-500 pl-7 mt-7 w-full h-14 rounded-lg font-bold flex justify-start items-center text-white text-l space-x-1"
  return (
    <>
        <section>
            <div className="text-xl font-normal">
                
                {
                    SidebarData.map((item, index) => {
                        return(
                            <div key={index}>
                                <NavLink to={item.path} 
                                    className={({ isActive }) => 
                                    isActive ? activeLink : normalLink}
                                >
                                    <span>{item.icon}</span>
                                    <span className="pl-3">{item.title}</span>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
            
        </section>
    </>
  )
}

export default Sidebar