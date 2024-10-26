import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-40'>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <img src='ecommerce.jpg' className='w-12 h-12 rounded-3xl'/>
        <span className="ml-3 text-xl">EcommerceNextApp.com</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Shop with EcommerceNextApp.com</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-gray-900 font-semibold tracking-widest text-sm mb-3">Shop</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <Link a className="text-gray-600 hover:text-gray-800" href={"/Tshirt"}>Tshirt</Link>
          </li>
          <li>
          <Link a className="text-gray-600 hover:text-gray-800" href={"/Hoodies"}>Hoodies</Link>
          </li>
          <li>
          <Link a className="text-gray-600 hover:text-gray-800" href={"/Sticker"}>Sticker</Link>
          </li>
          <li>
          <Link a className="text-gray-600 hover:text-gray-800" href={"/Mugs"}>Mugs</Link>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-gray-900 font-semibold tracking-widest text-sm mb-3">Social</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Facebook</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Linkedin</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Instagram</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-gray-900 font-semibold tracking-widest text-sm mb-3">About</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800"></a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Know about us</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Our misson</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Latest aims</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font  text-gray-900 font-semibold tracking-widest text-sm mb-3">	
        Let Us Help You</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Your Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">contact</a>
          </li>
       
        </nav>
      </div>
    </div>
  </div>
 
</footer>
    </div>
  )
}

export default Footer