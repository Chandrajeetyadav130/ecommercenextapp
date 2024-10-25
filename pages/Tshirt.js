import Link from 'next/link'
import React from 'react'
import Product from '@/models/Product'
import connectDb from '@/middleware/mongoose'
import mongoose from 'mongoose'
const Tshirt = ({products}) => {
  // const p=Object.keys(products)
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap m-4 gap-4 justify-center">
 {Object.keys(products).map((items)=>{
  return(
    <Link key={products[items]._id} href={`/products/${products[items].slugs}`} className='hover:shadow lg:w-1/5 md:w-1/2 p-4 w-full border'>
    <div>
      <div className="block relative w-full rounded overflow-hidden h-[300px] ">
        <img alt="ecommerce" className="m-auto md:m-0  block " src={products[items].img}/>
      </div>
      <div className="mt-4 text-center sm:text-start">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 truncate text-ellipsis">{products[items].title}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium truncate text-ellipsis">{products[items].slugs}</h2>
        <p className="mt-1 truncate text-ellipsis">₹{products[items].price}</p>

        <div className='truncate text-ellipsis font-semibold'>
          {products[items].size.includes('s') && <span className='border-gray-200 mx-1'>s</span>}
          {products[items].size.includes('m') && <span className='border-gray-200 mx-1'>m</span>}
          {products[items].size.includes('l') && <span className='border-gray-200 mx-1'>l</span>}
          {products[items].size.includes('xl') && <span className='border-gray-200 mx-1'>xl</span>}
          {products[items].size.includes('xxl') && <span className='border-gray-200 mx-1'>xxl</span>}
          </div>
          <div className='truncate text-ellipsis font-semibold'>
          {products[items].color.includes('red') &&<button className="border-2  bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
          }
          {products[items].color.includes('blue') && <button className="border-2  bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[items].color.includes('green') && <button className="border-2  bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[items].color.includes('yellow') && <button className="border-2  bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[items].color.includes('black') && <button className="border-2  bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
        
          {products[items].color.includes('pink') && <button className="border-2  bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          </div>

      </div>
    </div>
    </Link>
  )
 })}
   
  
    </div>
  </div>
</section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.mongoUri)
  }
  let product=await Product.find({category:'tshirt'})
  let tshirts={}
  for(let item of product){
    if(item.title in tshirts){
      if(!tshirts[item.title].color.include(item.color)&& item.availability>0){
        tshirts[item.title].color.push(item.color)
      }
      if(!tshirts[item.title].size.include(item.size) && item.availability>0){
        tshirts[item.title].size.push(item.size)
      }
    }
    else{
      tshirts[item.title]=JSON.parse(JSON.stringify(item))
      if(item.availability>0){
        tshirts[item.title].color=[item.color]
        tshirts[item.title].size=[item.size]
      }
    }
  }
  return {
    props: { products:JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  }
}
export default Tshirt