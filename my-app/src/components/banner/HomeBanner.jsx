import Link from "next/link"

const HomeBanner = () => {
    return (
        <div className="w-full text-center p-8 md:p-24 my-8 rounded-md bg-main-color text-white flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl font-bold">Best Prices, Finest Products!</h1>
            <p className="font-light">Top-notch products at unbeatable prices, ensuring maximum value for your money.</p>
            <Link href={"/products"} className="w-auto mx-auto">
                <button className=" text-sm px-4 py-2 rounded-md bg-primary-red hover:bg-white hover:text-main-color transition-all" >
                    See Products
                </button>
            </Link>
        </div>
    )
}

export default HomeBanner