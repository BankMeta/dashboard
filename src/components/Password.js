import React from 'react'

const Password = () => {
  return (
    <>
        <div>
            <p className="flex text-center text-xl ml-3 font-semibold sm:text-2xl whitespace-nowrap">Password Setting</p>
        </div>
        <div>
            <section>
                <div className="flex flex-col items-center">
                    <div className="w-full p-6 rounded-lg shadow  md:mt-0 sm:max-w-md sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-300">
                            Change Password
                        </h2>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-300">Current Password</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-300">New Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-300">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 mb-7 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-md rounded-lg text-md px-5 py-2.5 text-center">Reset passwod</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Password