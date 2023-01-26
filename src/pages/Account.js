import React, { useState } from 'react'
import MyDetails from '../components/MyDetails';
import Password from '../components/Password';
import Settings from '../components/Settings';

const tabsData = [
  {
    label: 'My Details',
    path: '/mydetails',
    content: <MyDetails />,
  },
  {
    label: 'Settings',
    path: '/settings',
    content: <Settings />,
  },
  {
    label: 'Password',
    content:<Password />,
  },
];

const Account = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
        <section>
            <div className="h-screen bg-gradient-to-r from-slate-500 to-yellow-100">
              <p className="text-left pl-5 pt-5 text-2xl font-semibold">Partner Profile</p>
              <div className='h-[620px] bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg m-5 text-gray-300 font-semibold text-md'>
                <div>
                  <div className="flex space-x-24 p-3 border-b">
                    {tabsData.map((tab, idx) => {
                      return (
                        <button
                          key={idx}
                          className={`py-2 ml-10 border-b-4 transition-colors duration-300 ${
                            idx === activeTabIndex
                              ? 'border-teal-500'
                              : 'border-transparent hover:border-gray-200'
                          }`}
                          onClick={() => setActiveTabIndex(idx)}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                    </div>
                      <div className="py-10 ml-10">
                        <p>{tabsData[activeTabIndex].content}</p>
                      </div>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Account