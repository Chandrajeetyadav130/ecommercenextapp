import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import { IoMdCart, IoIosCloseCircle } from "react-icons/io";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from 'next/link';
import { useRef } from 'react';
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
  const ref = useRef()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  useEffect(() => {
    // Open the sidebar whenever cart has items
    if (Object.keys(cart).length > 0) {
      setIsSidebarOpen(true);
    }
  }, [cart]);

  const handleCloseCart = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  };

  return (
    <>
      <div className='flex w-full top-0 shadow-md sticky bg-pink-400 z-50'>
        <div  className='w-[75%] sm:w-[82%] logo link flex flex-col justify-start sm:flex-col md:flex-row lg:justify-between px-4  py-4   '>
          <Image className="cursor-pointer" src="/ecommerce.jpg" alt='web logo' width={20} height={20} />
          <ul className='flex mx-2 gap-3 my-4 py-2 sm:my-auto'>
            <Link href={"/Tshirt"}>
              <li className='text-white cursor-pointer font-bold hover:text-pink-100'>Tshirt</li>
            </Link>
            <Link href={'/Hoodies'}> <li className='text-white font-bold cursor-pointer hover:text-pink-100'>Hoodies</li></Link>
            <Link href={"/Sticker"}><li className='text-white font-bold cursor-pointer hover:text-pink-100'>Sticker</li></Link>
            <Link href={"/Mugs"}> <li className='text-white font-bold cursor-pointer hover:text-pink-100'>Mugs</li></Link>
          </ul>
        </div>

        <div className='flex justify-end gap-4 w-[25%] sm:w-[18%] m-auto  px-4  py-4' >
          <Link href={"/Login"}><MdOutlineAccountCircle className='cursor-pointer' color='pink' size={20}/></Link>
          <IoMdCart onClick={handleCloseCart} className='cursor-pointer' color='pink' size={20} />
        </div>

      </div>
      <div ref={ref} className={`overflow-y-scroll sidecart max-w-[300px] px-5 py-10 fixed top-0 h-full right-0 bg-pink-400 z-[52] transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        
        }`}>
        <h2>shopping cart</h2>
        <span onClick={handleCloseCart} className='absolute top-2 text-4xl text-pink-700 right-2 cursor-pointer'><IoIosCloseCircle /></span>
        <ol>
          {Object.keys(cart).length === 0 && <p>Your cart is empty</p>}
          {Object.keys(cart).map((k) => {
            return (
              <li className='list-decimal font-semibold text-sm  my-4' key={k}>
                <div className='flex'>
                  <div className="w-2/3 text-black line-clamp-10">{cart[k].name} ({cart[k].size.toUpperCase()}/{cart[k].variant})</div>
                  <div className="w-1/3 flex mx-1 gap-1">
                    <FaMinusCircle onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='text-pink-500 text-xl cursor-pointer' />
                    <span className='text-white text-sm'>{cart[k].qty}</span>
                    <FaPlusCircle onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='text-pink-500 text-xl cursor-pointer ' />

                  </div>

                </div>
              </li>
            )
          })}


        </ol>
        <div className='font-bold'>
          <span>Subtotal ₹{subtotal}</span>

        </div>
        <div className="flex">
          <Link href={"/Checkout"}><button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Checkout</button></Link>
          <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear cart</button>

        </div>
      </div>
    </>
  )
}

export default Navbar