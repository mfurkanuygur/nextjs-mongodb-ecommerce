import Image from "next/image"
import Link from "next/link";
import { MdOutlineFavoriteBorder, MdOutlineAddShoppingCart, MdOutlineQuestionMark } from "react-icons/md";

const RenderProduct = ({ product }) => {
    return (
        <div className="rounded-md flex flex-col items-center justify-center gap-4 p-4 shadow-xl  text-main-color border border-main-color">
            <div className="h-40 flex justify-center items-center hover:scale-105 transition-all" >
                {/*  width={100} height={200} */}
                <Image src={product?.image} width={100} height={100} alt={product?.title} />
            </div>
            <div className="w-full capitalize">
                <h1 className="line-clamp-1">{product?.title}</h1>
                <div className="flex justify-between items-center">
                    <p className="font-light text-xs ">{product?.category}</p>
                    <p className="font-bold">$ {product?.price}</p>
                </div>
            </div>
            <div className="w-full flex justify-between items-center gap-2">
                <button className="w-1/3 border px-3 py-2 rounded-md hover:scale-105 flex justify-center items-center bg-main-color hover:bg-primary-red transition-all text-white">
                    <MdOutlineFavoriteBorder className="text-xl " /></button>
                <button className="w-1/3 border px-3 py-2 rounded-md hover:scale-105 flex justify-center items-center transition-all hover:text-primary-red"><MdOutlineAddShoppingCart className="text-xl transition-all " /></button>
                <Link href={`/products/${product?.id}`} className="w-1/3">
                    <button className="w-full border px-3 py-2 rounded-md hover:scale-105 flex justify-center items-center transition-all hover:text-primary-red">
                        <MdOutlineQuestionMark className="text-xl transition-all " />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default RenderProduct