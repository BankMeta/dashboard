import React, {useState} from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { FaFileDownload } from "react-icons/fa";

const Transactions = () => {
  const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 
    
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
  return (
    <>
        <section>
            <div className="h-screen bg-gradient-to-r from-slate-500 to-yellow-100">
              <p className="text-left p-10 text-2xl font-semibold">Transactions</p>
              <div className='flex'>
                <div className='w-[450px] pl-10 flex'>
                    <Datepicker 
                        value={value} 
                        onChange={handleValueChange}
                    />
                    <button type="button" className="text-white ml-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Apply</button>
                </div>
                <div className='flex bg-slate-100 cursor-pointer items-center ml-[400px] space-x-3 mr-2 font-semibold bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 text-gray-100 rounded-md px-6 py-2 hover:bg-white hover:text-white hover:ring-slate-300 mx-8 mb-1 shadow-lg shadow-slate-800/100'>
                  <FaFileDownload />
                  <p>Statement</p>
                </div>
              </div>

              <div>
                <div className='flex'>
                  <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-[535px] w-[1150px] rounded-md p-5 m-6 mt-3 text-left border-2 border-emerald-300 ">
                    <div className='flex'>
                      <h1 className="text-gray-300 font-semibold whitespace-nowrap text-2xl">All Transactions</h1>
                      <form className="flex items-center ml-[550px]">
                        <label for="simple-search" className="sr-only">Search</label>
                        <div className="relative w-72">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-slate-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                      </form>
                    </div>
                    <table className="w-full text-sm mt-5 text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                          <tr>
                              <th scope="col" className="px-7 py-3">
                                  Date
                              </th>
                              <th scope="col" className="px-7 py-3">
                                  Description
                              </th>
                              <th scope="col" className="px-7 py-3">
                                  Amount
                              </th>
                              <th scope="col" className="px-7 py-3">
                                  Status
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="text-white border-b bg-slate-800 border-gray-700 hover:bg-slate-900 ">
                              <td className="w-4 p-4">
                                  <div className="flex items-center font-bold font-base">
                                      16 FEB
                                  </div>
                              </td>
                              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                  <div className="pl-3">
                                      <div className="text-base font-semibold text-white">HDFC Bank</div>
                                      <div className="font-normal text-gray-500">Withdraw to Bank Account</div>
                                  </div>  
                              </th>
                              <td className="px-6 py-4 font-bold text-base">
                                  $ 2300
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center">
                                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Completed
                                  </div>
                              </td>
                          </tr>
                          <tr className="text-white border-b bg-slate-800 border-gray-700 hover:bg-slate-900 ">
                              <td className="w-4 p-4">
                                  <div className="flex items-center font-bold font-base">
                                      20 MAR
                                  </div>
                              </td>
                              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <div className="pl-3">
                                      <div className="text-base font-semibold text-white">Alfaaz Lingua Pvt. Ltd.</div>
                                      <div className="font-normal text-gray-500">Withdraw to Bank Account</div>
                                  </div>
                              </th>
                              <td className="px-6 py-4 font-bold text-base">
                                  $ 4000
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center">
                                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Completed
                                  </div>
                              </td>
                          </tr>
                          <tr className="text-white border-b bg-slate-800 border-gray-700 hover:bg-slate-900 ">
                              <td className="w-4 p-4">
                                  <div className="flex items-center font-bold font-base">
                                      20 MAY
                                  </div>
                              </td>
                              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <div className="pl-3">
                                      <div className="text-base font-semibold text-white">John Clark</div>
                                      <div className="font-normal text-gray-500">Payment Pending</div>
                                  </div>
                              </th>
                              <td className="px-6 py-4 font-bold text-base">
                                  $ 4000
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center">
                                      <div className="h-2.5 w-2.5 rounded-full bg-orange-400 mr-2"></div> Pending
                                  </div>
                              </td>
                          </tr>
                          <tr className="text-white border-b bg-slate-800 border-gray-700 hover:bg-slate-900 ">
                              <td className="w-4 p-4">
                                  <div className="flex items-center font-bold font-base">
                                      05 AUG
                                  </div>
                              </td>
                              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <div className="pl-3">
                                      <div className="text-base font-semibold text-white">INDUSIND BANK</div>
                                      <div className="font-normal text-gray-500">Payment Received</div>
                                  </div>
                              </th>
                              <td className="px-6 py-4 font-bold text-base">
                                  $ 2300
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center">
                                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Completed
                                  </div>
                              </td>
                          </tr>
                          <tr className="text-white border-b bg-slate-800 border-gray-700 hover:bg-slate-900 ">
                              <td className="w-4 p-4">
                                  <div className="flex items-center font-bold font-base">
                                      08 OCT
                                  </div>
                              </td>
                              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <div className="pl-3">
                                      <div className="text-base font-semibold text-white">xyz123@upi.com</div>
                                      <div className="font-normal text-gray-500">Payment Rejected</div>
                                  </div>
                              </th>
                              <td className="px-6 py-4 font-bold text-base">
                                  $ 200
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex items-center">
                                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Rejected
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Transactions