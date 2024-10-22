import React from 'react'
import Link from 'next/link';
// import { IoMdCart, IoIosCloseCircle } from "react-icons/io";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
    return (
        <>
            <div className='conatiner m-auto px-2 md:px-20'>
                <h1 className='font-semibold text-center '>Checkout</h1>
                <h2 className='mx-auto px-2'>Delivery details</h2>
                <div className="flex-wrap md:flex my-2 mx-auto" >
                    <div className="w-full md:px-2 md:w-1/2">
                        <label htmlFor='name'>Name</label>
                        <input className='w-full bg-white rounded border border-gray-300 focus:border-white focus:ring-2 outline-none' type='text' name='name' id='name' />
                    </div>
                    <div className="w-full md:px-2  md:w-1/2">
                        <label htmlFor='email'>email</label>
                        <input className='w-full bg-white rounded border border-gray-300 focus:border-white focus:ring-2 outline-none' type='email' id='email' name='email' />
                    </div>
                </div>
                <div className=" mb-4 px-2">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">address</label>
                    <textarea id="address" placeholder='phone address state pincode' name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <div className="flex-wrap md:flex my-2 mx-auto" >
                    <div className="w-full md:px-2 md:w-1/2">
                        <label htmlFor='phone'>Phone</label>
                        <input className='w-full bg-white rounded border border-gray-300 focus:border-white focus:ring-2 outline-none' type='text' name='phone' id='phone' />
                    </div>
                    <div className="w-full md:px-2  md:w-1/2">
                        <label htmlFor='city'>city</label>
                        <input className='w-full bg-white rounded border border-gray-300 focus:border-white focus:ring-2 outline-none' type='city' id='email' name='email' />
                    </div>
                </div>
                <div className="flex-wrap md:flex my-2 mx-auto" >
                    <div className="w-full md:px-2 md:w-1/2">
                        <label htmlFor='state'>state</label>
                        <input className='w-full bg-white rounded border border-gray-300 focus:border-white focus:ring-2 outline-none' type='text' name='state' id='state' />
                    </div>
                    <div className="w-full md:px-2  md:w-1/2">
                        <label htmlFor='pincode'>pincode</label>
                        <input className='w-full bg-white rounded border border-gray-300 focus:border-white focus:ring-2 outline-none' type='pincode' id='email' name='email' />
                    </div>
                </div>
                <h2 className='mx-auto px-2'>2.Review details</h2>

                <div className="sidecart  px-5 py-10  bg-pink-400 z-[52]">
                    <ol>
                        {Object.keys(cart).length === 0 && <p>Your cart is empty</p>}
                        {Object.keys(cart).map((k) => {
                            return (
                                <li className='list-decimal font-semibold text-sm  my-4' key={k}>
                                    <div className='flex gap-8'>
                                        <div className=" text-black">{cart[k].name}</div>
                                        <div className=" flex mx-1 gap-1">
                                            <FaMinusCircle onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='text-pink-500 text-xl cursor-pointer' />
                                            <span className='text-white text-sm'>{cart[k].qty}</span>
                                            <FaPlusCircle onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='text-pink-500 text-xl cursor-pointer ' />

                                        </div>

                                    </div>
                                </li>
                            )
                        })}


                    </ol>
                    <span>Subtotal ₹{subtotal}</span>
                 
                </div>
                <div className="paytotal">
          <button onClick={clearCart} className="my-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Pay ₹{subtotal}</button>

                </div>
            </div>
        </>
    )
}

export default Checkout