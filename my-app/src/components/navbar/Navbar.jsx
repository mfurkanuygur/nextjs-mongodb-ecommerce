"use client"
import { useLoginState } from "@/store/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FiUserPlus, FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdOutlineLogout, MdMenu, MdSearch } from "react-icons/md";
const Links = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "about", url: "/about" },
]
const Navbar = () => {
    const inputRef = useRef()
    const [menuState, setMenuState] = useState(false)
    const openMenu = () => {
        setMenuState(!menuState)
    }

    const loginState = useLoginState((state) => state.loginState)
    const updateLoginState = useLoginState((state) => state.updateLoginState)
    useEffect(() => {
        const isLogin = sessionStorage.getItem("isLogin");
        if (isLogin && !loginState) {
            updateLoginState(true);
        }
    }, [loginState, updateLoginState]);
    return (
        <header className=" sticky top-0 z-40  bg-white text-main-color pb-2" >
            <nav className=" px-4 lg:px-24 py-4" >
                <div className="flex justify-between items-center capitalize font-bold">
                    <Link className="text-2xl font-semibold " href={"/"}>NextStore</Link>
                    {Links.map(link => (
                        <Link href={link.url} className="hidden md:block font-light text-sm transition-all hover:text-primary-red ">{link.name}</Link>
                    ))}
                    <form onSubmit={(e) => handleSearch(e)} className="hidden md:flex items-center border rounded-md  ">
                        <input type="search" ref={inputRef} placeholder="Search something!!" className="w-full py-1 px-2 rounded-md transition font-light outline-none text-gray-500 focus:text-black hidden md:block" />
                        <MdSearch className="text-3xl mr-2 cursor-pointer" />
                        {/* <button className="absolute right-0 p-3" onClick={ handleClear}>x</button> */}
                    </form>
                    {
                        loginState &&
                        <>
                            <div className="flex gap-8">
                                <Link href={"/favorites"} className="hidden md:block"><MdOutlineFavoriteBorder className="text-xl transition-all hover:text-primary-red" /></Link>
                                <Link href={"/cart"} className="hidden md:block"><MdOutlineShoppingCart className="text-xl transition-all hover:text-primary-red" /></Link>
                                <button onClick={() => handleLogout()} ><MdOutlineLogout className="text-xl transition-all hover:text-primary-red" /></button>
                            </div>
                        </> || <>
                            <div className="flex gap-6 ">
                                <Link href={"/login"} className="hidden md:block border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
                                    <div className="flex gap-2 justify-center items-center ">
                                        <FiUser className="text-xl" />
                                        <p className="text-sm font-medium">Login</p>
                                    </div>
                                </Link>
                                <Link href={"/signin"} className="hidden md:block border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
                                    <div className="flex gap-2 justify-center items-center ">
                                        <FiUserPlus className="text-xl " />
                                        <p className="text-sm font-medium">Sign In</p>
                                    </div>
                                </Link>
                            </div>
                        </>
                    }
                    <div className='cursor-pointer md:hidden'>
                        <MdMenu className="text-3xl" onClick={() => openMenu()} />
                    </div>
                </div>
                {menuState && (
                    <div className="flex flex-col justify-center items-center text-center gap-5 mt-5 capitalize font-bold  md:hidden">
                        {Links.map(link => (
                            <Link href={link.url} className=" font-light text-sm transition-all hover:text-primary-red ">{link.name}</Link>
                        ))}
                        <div className="flex gap-6 ">
                            <Link href={"/login"} className=" border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
                                <div className="flex gap-2 justify-center items-center ">
                                    <FiUser className="text-xl" />
                                    <p className="text-sm font-medium">Login</p>
                                </div>
                            </Link>
                            <Link href={"/signin"} className=" border-2 border-primary-red text-primary-red transition-all hover:border-main-color hover:text-main-color py-2 px-3 rounded-md">
                                <div className="flex gap-2 justify-center items-center ">
                                    <FiUserPlus className="text-xl " />
                                    <p className="text-sm font-medium">Sign In</p>
                                </div>
                            </Link>
                        </div>
                        {/* <form onSubmit={(e) => handleSearch(e)} className="flex relative items-center border rounded-md">
                            <input type="search" ref={inputRef} placeholder="Search something!!" className="w-auto p-1  rounded-md transition font-light  outline-none text-gray-500 focus:text-black" />
                        </form> */}
                    </div>
                )}
            </nav>
            <form onSubmit={(e) => handleSearch(e)} className="flex gap-2 items-center border rounded-md md:hidden mx-4 mt-1">
                <MdSearch className="text-2xl ml-2" />
                <input type="search" ref={inputRef} placeholder="Search something!!" className="w-auto p-1  rounded-md transition font-light  outline-none text-gray-500 focus:text-black" />
            </form>
        </header >
    )
}

export default Navbar