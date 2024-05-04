import { getUniqueProduct } from "@/lib/request"
import Image from "next/image"

const page = async ({ params }) => {
  const { slug } = params
  console.log(slug, "asd")
  const product = await getUniqueProduct(slug)
  const { category, count, description, id, image, price, title } = product
  return (
    <div className="flex min-h-screen flex-col items-center justify-between container mx-auto p-4 xl:px-24 lg:py-12 w-full " key={id}>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className=" lg:w-1/2  flex justify-center border-2 border-cyan-800 rounded-xl p-8 shadow-2xl min-h-64">
          <Image src={image} alt={title} width={200} height={200} />
        </div>
        <div className="capitalize  lg:w-1/2 flex flex-col gap-4 ">
          <h5 className="">{category}</h5>
          <h1 className="font-bold lg:text-2xl">{title}</h1>
          <h2 className="font-bold text-2xl">$ {price}</h2>
          <p >{description}</p>
          <div className=" w-full bg-slate-300 font-semibold  rounded-lg flex ">
            <button className="w-1/2 p-3 text-cyan-800 hover:bg-cyan-800 hover:text-white transition rounded-lg">Add Favorite</button>
            <button className="w-1/2 p-3 text-cyan-800 hover:bg-cyan-800 hover:text-white transition rounded-lg">Add Cart</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page