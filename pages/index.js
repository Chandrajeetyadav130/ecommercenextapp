import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
export default function Home() {
  return (
    <div

    >
      <Head>
        <title>EcommerceNextApp.com</title>
      </Head>

     

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Shop with EcommerceNextApp</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Here you can purchase a variaties of products with a convinent price</p>
          </div>
          <div className="flex flex-wrap -m-4">
       
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
               
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Tshirts</h2>
                <p className="leading-relaxed text-base">Here you can purchase a variaties of tshirt with a convinent price</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Hoodies</h2>
                <p className="leading-relaxed text-base">Here you can purchase a variaties of hoodies with a convinent price.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
               
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Stickers</h2>
                <p className="leading-relaxed text-base">Here you can purchase a variaties of stickers with a convinent price</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Mugs</h2>
                <p className="leading-relaxed text-base">Here you can purchase a mugs of products with a convinent price</p>
              </div>
            </div>
         
          </div>
        </div>
      </section>



    </div>
  );
}
