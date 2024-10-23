import React from 'react'
import Link from 'next/link'
const Signup = () => {
  return (
    <div>
            <div className="relative h-screen bg-gray-50 overflow-hidden">
    <div
        className="absolute top-20 left-2 w-[500px] h-[500px]">
    </div>
    <div
        className="absolute top-20 right-32 w-[500px] h-[500px] ">
    </div>
    <div
        className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px]">
    </div>
    <div
        className="absolute bottom-10 right-52 w-[500px] h-[500px]  rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000">
    </div>
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
            <h2  className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Signup to your account
            </h2>
            <div className="my-1 text-center text-sm text-gray-600">
               <span className='px-2'>Or</span> 
                <Link href="/Login" className="font-medium text-pink-600 hover:text-pink-500">Login
                    </Link>
            </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST">
                <div>
                        <label for="email" className="block text-sm font-medium text-gray-700">Name</label>
                        <div className="mt-1">
                            <input id="name" name="name" type="text" autocomplete="name" required=""
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"/>
                        </div>
                    </div>
                    <div>
                        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" required=""
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"/>
                        </div>
                    </div>

                    <div>
                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                    required=""
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                       

                        <div className="text-sm">
                            <Link href="/Forgot" className="font-medium text-pink-600 hover:text-pink-500">Forgot your
                                password?</Link>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">signup</button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                       
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Signup