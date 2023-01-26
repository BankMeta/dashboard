import React from 'react'

const Account = () => {
  return (
    <>
      <div className="pt-5 m-5 h-[335px] w-[1170] rounded-md bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
        <p className="text-center font-semibold text-3xl" >Start your investment today</p>
        <section className="ml-36 mt-20">
          <p className="ml-2 pb-2">Select Coin</p>
          <div className="relative inline-flex">
            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
            <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>Choose coin</option>
              <option>Bitcoin</option>
              <option>Ethereum</option>
              <option>Solana</option>
              <option>Algorand</option>
              <option>Matic</option>
              <option>Ripple</option>
              <option>Doge Coin</option>
              <option>USDT</option>
            </select>
          </div>
       
          <input type="number" placeholder="enter the amount" className="ml-5 border border-gray-300 rounded-full text-gray-600 h-10 pl-5 bg-white hover:border-gray-400 focus:outline-none appearance-none" />
          <button type="submit" className="ml-5 bg-amber-400 hover:bg-amber-300 text-black font-bold py-2 px-4 rounded-full">
            Buy Now
          </button>
        </section>
        </div>
        <div className="pt-5 m-5 h-[335px] w-[1170] rounded-md bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
          <p className="text-center font-semibold text-3xl">Withdraw your money</p>
          <section className="ml-36 mt-20">
            <p className="ml-2 pb-2">Withdrawal Amount</p>
            <input type="number" placeholder="enter the amount" className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 bg-white hover:border-gray-400 focus:outline-none appearance-none" />
            <button type="submit" className="ml-5 bg-amber-400 hover:bg-amber-300 text-black font-bold py-2 px-4 rounded-full">
              Withdraw Now
            </button>
          </section>
        </div>
    </>
  )
}

export default Account