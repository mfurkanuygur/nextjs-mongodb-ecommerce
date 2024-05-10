"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNewUser } from "@/lib/request";
import { useLoginState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react"

const SignIn = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const loginState = useLoginState((state) => state.loginState);
    const updateLoginState = useLoginState((state) => state.updateLoginState);
    const handleSign = (e) => {
        e.preventDefault()
        if (name !== "" && surname !== "" && password !== "") {
            const newUser = {
                token: self.crypto.randomUUID(),
                name: name.trim().toLocaleLowerCase(),
                surname: surname.trim().toLocaleLowerCase(),
                password: password.trim().toLocaleLowerCase(),
                carts: []
            };
            createNewUser(newUser)
                .then(() => {
                    updateLoginState(!loginState);
                    toast.success("Giriş başarılı")
                    setTimeout(() => {
                        router.push("/");
                    }, 2000);

                    setName("");
                    setSurname("");
                    setPassword("");
                }).catch(error => {
                    toast.error("Kullanıcı var")
                    setTimeout(() => {
                        router.push("/login");
                    }, 3000);
                });
        }

    }
    return (
        <div className='h-full flex flex-col justify-center items-center gap-8 py-24'>
            <h1 className='text-2xl font-bold'>Welcome new user</h1>
            <form className='w-full md:w-1/4 flex flex-col gap-3' onSubmit={(e) => (handleSign(e))}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className="w-min text-sm">Name</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} className='border border-main-color px-2 py-1 rounded-md text-sm outline-none' placeholder="Enter your name!" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="surname" className="w-min text-sm">Surname</label>
                    <input type="text" id='surname' value={surname} onChange={(e) => setSurname(e.target.value)} className='border border-main-color px-2 py-1 rounded-md text-sm outline-none' placeholder="Enter your surname!" />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className="w-min text-sm">Password</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-main-color px-2 py-1 rounded-md text-sm outline-none' placeholder="Enter your password!" />
                </div>
                {/* <div className='flex flex-col gap-1'>
                    <label htmlFor="mail" className="w-min text-sm">Mail</label>
                    <input type="email" id='mail' className='border border-main-color px-2 py-1 rounded-md text-sm outline-none' placeholder="Enter your mail!" />
                </div> */}
                <button className="w-full px-4 py-2 rounded-md bg-main-color text-white hover:bg-primary-red transition-all">Sign in</button>
                <ToastContainer />

            </form>
        </div>
    )
}

export default SignIn