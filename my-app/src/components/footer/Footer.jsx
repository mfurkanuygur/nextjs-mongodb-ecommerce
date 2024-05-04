import Link from "next/link"
import { FaLinkedin, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";

const Footer = () => {
    return (
        <div className="px-4 py-4 xl:px-24 lg:pt-12 lg:pb-3 w-full   bg-main-color text-white">
            <div className="my-4 text-center lg:text-left">
                <h1 className="text-2xl font-semibold ">NextStore</h1>
            </div>
            <div className="border-b pb-4 flex justify-between flex-col lg:flex-row text-center lg:text-left ">
                <div>
                    <Link href={"/"} className=""><p className="font-light text-sm my-2">Home</p></Link>
                    <Link href={"./products"}><p className="font-light text-sm my-2">Products</p></Link>
                    <Link href={"./about"}> <p className="font-light text-sm my-2">About</p></Link>
                </div>
                <div>

                </div>
                <div className="flex flex-col gap-2 my-2">
                    <h1 className="font-semibold ">Search</h1>
                    <form className=" w-2/3 lg:w-full mx-auto flex items-center border rounded-md bg-white ">
                        <input type="search"  placeholder="Search something!!" className="w-full py-1 px-2 rounded-md transition font-light outline-none text-main-color focus:text-black " />
                        <MdSearch className="text-3xl  cursor-pointer text-main-color" />
                    </form>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <h1 className="font-semibold ">Contact</h1>
                    <p className="font-light text-sm ">Email: <Link href={"mailto:uygurmfurkan@gmail.com"} >uygurmfurkan@gmail.com</Link></p>
                    <p className="font-light text-sm ">Sivas/Turkiye</p>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <h1 className="font-semibold ">Follow Us</h1>
                    <div className="flex  gap-2 justify-center">
                        <Link href={"https://github.com/mfurkanuygur/"} target="_blank"> <FaSquareGithub className="text-2xl transition-all  hover:scale-110" /></Link>
                        <Link href={"https://www.linkedin.com/in/mfurkanuygur1/"} target="_blank"> <FaLinkedin className="text-2xl transition-all  hover:scale-110" /></Link>
                        <Link href={"https://www.instagram.com/mfrknu/"} target="_blank"> <FaSquareInstagram className="text-2xl transition-all hover:scale-110" /></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mt-4 py-4 px-12 bg-white text-main-color rounded-md">
                <h1 className="font-extralight text-sm tracking-widest">Muhammed Furkan UYGUR</h1>
                <div className="flex  gap-4">
                    <Link href={"https://github.com/mfurkanuygur/"} target="_blank"> <FaSquareGithub className="text-2xl transition-all  hover:scale-110" /></Link>
                    <Link href={"https://www.linkedin.com/in/mfurkanuygur1/"} target="_blank"> <FaLinkedin className="text-2xl transition-all  hover:scale-110" /></Link>
                    <Link href={"https://www.instagram.com/mfrknu/"} target="_blank"> <FaSquareInstagram className="text-2xl transition-all hover:scale-110" /></Link>
                </div>
                <p className="font-bold text-center">This project is for educational purposes only!!!</p>
            </div>
        </div>
    )
}

export default Footer