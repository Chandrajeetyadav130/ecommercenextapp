import Link from 'next/link'
import React from 'react'
import Product from '@/models/Product'
import connectDb from '@/middleware/mongoose'
import mongoose from 'mongoose'
const Tshirt = ({products}) => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap m-4 gap-4 justify-center">
 {products.map((items)=>{
  return(
    <Link key={items._id} href={`/products/${items.slugs}`} className='lg:w-1/5 md:w-1/2 p-4 w-full shadow'>
    <div className="">
      <div className="block relative w-full rounded overflow-hidden">
        <img alt="ecommerce" className="m-auto md:m-0  block " src={items.img}/>
      </div>
      <div className="mt-4 text-center sm:text-start">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 truncate text-ellipsis">{items.name}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium truncate text-ellipsis">{items.title}</h2>
        <p className="mt-1 truncate text-ellipsis">₹{items.price}</p>
        <p className='truncate text-ellipsis font-semibold'>color:{items.color}</p>
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
  let product=await Product.find()
  return {
    props: { products:JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
  }
}
export default Tshirt