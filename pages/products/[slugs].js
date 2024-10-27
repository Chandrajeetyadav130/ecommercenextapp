import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import Product from '@/models/Product'
import mongoose from 'mongoose'
const Slugs = ({ buyNow,cart, addToCart, product, variants }) => {
  console.log(variants)
  const router = useRouter()
  // console.log(router.query.slugs)
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)
  const checkServiceAvailbility = async () => {
    if (!pin) {
      alert("Please enter a pin code");
      return;
    }
    const allapipin = await axios.get("http://localhost:3000/api/pincode")
    const pincodeval = await allapipin.data

    if (pincodeval.includes(parseInt(pin))) {
      setService(true)
    }
    else {
      setService(false)
    }
  }
  const handlepininput = (e) => {
    setPin(e.target.value)

  }
  // Update selected size and color
  const refreshVariants = (newSize, newColor) => {
    setSize(newSize);
    setColor(newColor);
    router.push(`/product/${variants[newColor][newSize].slugs}`); // Update the URL if necessary
  };

  return (
    // <p>Post: {}</p>
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap shadow py-2">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto rounded" src={product.img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}({product.size.toUpperCase()}/{product.color})</h1>
         
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {variants["yellow"] && variants["yellow"][size] && (
                    <button onClick={() => refreshVariants(size, "yellow")} className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  )}
                  {variants["blue"] && variants["blue"][size] && (
                    <button onClick={() => refreshVariants(size, "blue")} className="border-2 border-gray-300 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  )}

                  {variants["black"] && variants["black"][size] && (
                    <button onClick={() => refreshVariants(size, "black")} className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                  )}
                  {/* {Object.keys(variants).includes("yellow") && Object.keys(variants["yellow"]).includes(size)&&  <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>} */}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => refreshVariants(e.target.value, color)}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                    >
                      {variants[color] && variants[color]["s"] && <option value="s">S</option>}
                      {variants[color] && variants[color]["m"] && <option value="m">M</option>}
                      {variants[color] && variants[color]["l"] && <option value="l">L</option>}
                      {variants[color] && variants[color]["xl"] && <option value="xl">XL</option>}
                      {variants[color] && variants[color]["xxl"] && <option value="xxl">XXL</option>}
                    </select>
                  

                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                <button onClick={()=>buyNow(product.slugs, 1, product.price, product.title, size, color)} className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">Buy now</button>

                <button onClick={() => addToCart(product.slugs, 1, product.price, product.title, size, color)} className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">Add to cart</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pin flex gap-3 my-4">
                <input placeholder='Enter pin to check availbilty' onChange={handlepininput} type="text" className=" bg-white text-sm rounded border border-gray-300 focus:border-pink-500  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button onClick={checkServiceAvailbility}>check</button>
              </div>
              <div className="serviceavalable">
                {!service && service != null && <p>Service is not availble</p>}
                {service && service != null && <p>Service is  availble</p>}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.mongoUri)
  }
  let product = await Product.findOne({ slugs: context.query.slugs })
  let variants = await Product.find({ title: product?.title })
  let colorSizeSlug = {}
  for (let item of variants) {
    if (colorSizeSlug[item.color]) {
      colorSizeSlug[item.color][item.size] = { slugs: item.slugs };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slugs: item.slugs };
    }
  }
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: colorSizeSlug // Use `colorSizeSlug` instead of raw `variants`
    } // will be passed to the page component as props
  }
}

export default Slugs


