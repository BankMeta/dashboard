import React from 'react'

const Wallet = () => {
  return (
    <>
        <section>
          <div className="h-screen bg-gradient-to-r from-slate-500 to-yellow-100">
            <div className="flex">
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-48 w-full rounded-md p-5 m-6 text-left border-2 border-emerald-300 ">
                <h1 className="text-gray-300 font-semibold text-2xl">Overwiew</h1>
                <div className='flex'>
                  <ul>
                    <li className="text-white mt-12 pr-[120px] text-lg">Market Value</li>
                    <li className="text-indigo-200 mt-3 pr-[120px] text-lg font-semibold">$ 35,098</li>
                  </ul>
                  <ul>
                    <li className="text-white mt-12 pr-[120px] inline-flex text-lg">Net Cost</li>
                    <li className="text-indigo-200 mt-3 pr-[120px] text-lg font-semibold">$ 30,985</li>
                  </ul>
                  <ul>
                    <li className="text-white mt-12 pr-[120px] inline-flex text-lg">Holdings in  &nbsp;<span className="bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500">BTC</span></li>
                    <li className="text-indigo-200 mt-3 pr-[120px] text-lg font-semibold">2607.55 BTC</li>
                  </ul>
                  <ul>
                    <li className="text-white mt-12 pr-[120px] inline-flex text-lg">Profit / Loss</li>
                    <li className="text-green-400 mt-3 pr-[120px] text-lg font-semibold">+ $ 22,239</li>
                  </ul>
                  <ul>
                    <li className="text-white mt-12 pr-[120px] inline-flex text-lg">Change</li>
                    <li className="text-green-400 mt-3 pr-[120px] text-lg font-semibold">+ 8.07%</li>
                  </ul>
                </div>
                
              </div>
              {/* <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 h-48 w-80 rounded-md p-5 m-6 text-white font-semibold text-center text-2xl border-2 border-gray-700">Investment</div>
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-48 w-80 rounded-md p-5 m-6 text-white font-semibold text-center text-2xl border-2 border-gray-700">Profit</div> */}
          
            </div>
            <div className='flex'>
              <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-[455px] w-[700px] rounded-md p-5 m-6 mt-3 text-left border-2 border-emerald-300 ">
                <h1 className="text-gray-300 font-semibold text-2xl">Holdings</h1>
                      <table className="w-full mt-5 text-sm text-left text-gray-300">
                          <thead className="text-xs text-gray-300 uppercase">
                              <tr>
                                  <th scope="col" className="px-6 py-3">
                                      Coins
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      <div className="flex items-center">
                                          Amount
                                          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                      </div>
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      <div className="flex items-center">
                                          Holding
                                          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                      </div>
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      <span className="sr-only items-center">Deposit</span>
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      <span className="sr-only items-center">Withdraw</span>
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className="bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                      Bitcoin
                                  </th>
                                  <td className="px-6 py-4">
                                      $ 12,000
                                  </td>
                                  <td className="px-6 py-4">
                                      44 BTC
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Deposit</a>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
                                  </td>
                              </tr>
                              <tr className="bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                      Ethereum
                                  </th>
                                  <td className="px-6 py-4">
                                      $ 5000
                                  </td>
                                  <td className="px-6 py-4">
                                      235 ETH
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Deposit</a>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
                                  </td>
                              </tr>
                              <tr className="bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                      Ripple
                                  </th>
                                  <td className="px-6 py-4">
                                      $ 10,800
                                  </td>
                                  <td className="px-6 py-4">
                                      100 XRP
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Deposit</a>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
                                  </td>
                              </tr>
                              <tr className="bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                      Matic
                                  </th>
                                  <td className="px-6 py-4">
                                      $ 60,800
                                  </td>
                                  <td className="px-6 py-4">
                                      1000 MAT
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Deposit</a>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
                                  </td>
                              </tr>
                              <tr className="bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                      Solana
                                  </th>
                                  <td className="px-6 py-4">
                                      $ 50,800
                                  </td>
                                  <td className="px-6 py-4">
                                      50 SOL
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Deposit</a>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
                                  </td>
                              </tr>
                              <tr className="bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                      Algorand
                                  </th>
                                  <td className="px-6 py-4">
                                      $ 5,800
                                  </td>
                                  <td className="px-6 py-4">
                                      100 ALGO
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Deposit</a>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
              </div>
                <div>
                  <div class="space-y-7 mt-3">
                      <div class="w-96 h-52 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                      
                          <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />
                          
                          <div class="w-full px-8 absolute top-8">
                              <div class="flex justify-between">
                                  <div class="">
                                      <p class="font-light">
                                          Name
                                      </p>
                                      <p class="font-medium tracking-widest">
                                          John Clark
                                      </p>
                                  </div>
                                  <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                              </div>
                              <div class="pt-1">
                                  <p class="font-light">
                                      Card Number
                                  </p>
                                  <p class="font-medium tracking-more-wider">
                                      4642  3489  9867  7632
                                  </p>
                              </div>
                              <div class="pt-6 pr-6">
                                  <div class="flex justify-between">
                                      <div class="">
                                          <p class="font-light text-xs">
                                              Valid
                                          </p>
                                          <p class="font-medium tracking-wider text-sm">
                                              11/15
                                          </p>
                                      </div>
                                      <div class="">
                                          <p class="font-light text-xs">
                                              Expiry
                                          </p>
                                          <p class="font-medium tracking-wider text-sm">
                                              03/25
                                          </p>
                                      </div>
              
                                      <div class="">
                                          <p class="font-light text-xs">
                                              CVV
                                          </p>
                                          <p class="font-bold tracking-more-wider text-sm">
                                              ···
                                          </p>
                                      </div>
                                  </div>
                              </div>
              
                          </div>
                      </div>
              
                      <div class="w-96 h-52 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                          
                          <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/Zi6v09P.png" />
                          
                          <div class="w-full px-8 absolute top-8">
                              <div class="flex justify-between">
                                  <div class="">
                                      <p class="font-light">
                                          Name
                                      </p>
                                      <p class="font-medium tracking-widest">
                                          John Clark
                                      </p>
                                  </div>
                                  <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                              </div>
                              <div class="pt-1">
                                  <p class="font-light">
                                      Card Number
                                  </p>
                                  <p class="font-medium tracking-more-wider">
                                      4642  3489  9867  7632
                                  </p>
                              </div>
                              <div class="pt-6 pr-6">
                                  <div class="flex justify-between">
                                      <div class="">
                                          <p class="font-light text-xs">
                                              Valid
                                          </p>
                                          <p class="font-medium tracking-wider text-sm">
                                              11/15
                                          </p>
                                      </div>
                                      <div class="">
                                          <p class="font-light text-xs">
                                              Expiry
                                          </p>
                                          <p class="font-medium tracking-wider text-sm">
                                              03/25
                                          </p>
                                      </div>
              
                                      <div class="">
                                          <p class="font-light text-xs">
                                              CVV
                                          </p>
                                          <p class="font-bold tracking-more-wider text-sm">
                                              ···
                                          </p>
                                      </div>
                                  </div>
                              </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Wallet