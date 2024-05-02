"use client"
import Image from "next/image";
import banner1 from '../../../public/banner1.jpg'
import { MdOutlineFavoriteBorder, MdOutlineAddShoppingCart, MdOutlineQuestionMark, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from "react";
import Link from "next/link";
const HomepageBanner = ({ products }) => {

    const swiperRef = useRef(null);
    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className="w-full   py-12 mb-6 bg-main-color rounded-md">
            <Swiper className='relative  flex   justify-center items-center h-80 mx-12'
                slidesPerView={1} centeredSlides={true}
                loop={true} pagination={{ clickable: true }} modules={[Autoplay, Navigation]} freeMode={true}
                navigation={true} ref={swiperRef} autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 50,
                    },
                }}>
                <button onClick={slidePrev} className=" absolute left-0 top-1/3 z-10 hidden md:block bg-main-color hover:bg-primary-red transition-all py-8" >
                    <MdKeyboardDoubleArrowLeft className="text-3xl text-white " />
                </button>
                <button onClick={slideNext} className="absolute top-1/3 right-0 z-10 hidden md:block bg-main-color hover:bg-primary-red transition-all py-8">
                    <MdKeyboardDoubleArrowRight className="text-3xl text-white "/>
                </button>
                {products.map(p => (
                    <SwiperSlide key={p.id} className="p-1">
                        {/* <div className="h-full flex flex-col gap-8 xl:flex-row  justify-center  items-center border  py-8">
                            <div className=" flex justify-center ">
                                <Image src={p.image} alt={p.title} width={100} height={100} className="w-full" />
                            </div>
                            <div className="lg:w-1/2 flex flex-col">
                                <h1 className="text-lg">{p.title}</h1>
                                <h4 className="">$ {p.price} </h4>
                            </div>
                        </div> */}
                        <div className="rounded-md flex flex-col items-center justify-center gap-4 p-4 shadow-xl bg-white text-main-color border border-main-color">
                            <div className="h-40 flex justify-center items-center hover:scale-105 transition-all" >
                                {/*  width={100} height={200} */}
                                <Image src={p?.image} width={100} height={100} alt={p?.title} />
                            </div>
                            <div className="w-full capitalize">
                                <h1 className="line-clamp-1">{p?.title}</h1>
                                <div className="flex justify-between items-center">
                                    <p className="font-light text-xs ">{p?.category}</p>
                                    <p className="font-bold">$ {p?.price}</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center gap-2">
                                <button className="w-1/3 border px-3 py-2 rounded-md hover:scale-105 flex justify-center items-center bg-main-color hover:bg-primary-red transition-all text-white">
                                    <MdOutlineFavoriteBorder className="text-xl " /></button>
                                <button className="w-1/3 border px-3 py-2 rounded-md hover:scale-105 flex justify-center items-center transition-all hover:text-primary-red"><MdOutlineAddShoppingCart className="text-xl transition-all " /></button>
                                <Link href={`/products/${p?.id}`} className="w-1/3">
                                    <button className="w-full border px-3 py-2 rounded-md hover:scale-105 flex justify-center items-center transition-all hover:text-primary-red">
                                        <MdOutlineQuestionMark className="text-xl transition-all " />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>


        // <div className="flex flex-col-reverse md:flex-row w-full items-center py-12 md:px-12 md:py-24 gap-4 md:gap-8 bg-main-color rounded-lg shadow-lg shadow-main-color  ">
        //     <div className=" md:w-1/2 flex flex-col text-center md:text-left gap-4 ">
        //         <h1 className=" text-3xl md:text-5xl text-text-main-color font-bold  ">
        //             <div className="text-3xl md:text-5xl text-primary-red my-3">
        //                 &ldquo;Easy, Fast, Secure&rdquo;
        //             </div>
        //             <div className="bg-white rounded-lg mb-1 py-1 mx-8 md:mx-0">No matter what you need</div>
        //             <div className="bg-white rounded-lg mt-1 py-1 mx-8 md:mx-0">We&rsquo;re here for you</div>

        //         </h1>
        //         <h4 className="text-justify  leading-5 px-5 md:px-0 text-white">
        //             Keeping customer satisfaction at the forefront, we cater to every need
        //             with our wide range of products. We turn shopping into an enjoyable
        //             experience with our user-friendly interface and fast delivery service.
        //             By safeguarding our customers&rsquo; personal information through our secure
        //             payment system, we ensure secure online shopping. We continuously
        //             strive to provide you with the best shopping experience by constantly
        //             improving and keeping up with innovations
        //         </h4>
        //     </div>
        //     <div className="relative md:w-1/2 bg-main-color flex justify-center p-4" >
        //         <Image
        //             src={banner1}
        //             // src="/banner2.jpg"
        //             width={500}
        //             height={500}
        //             alt="Shopping Image"
        //             className="rounded-lg "
        //         />
        //     </div>
        // </div>
    );
};

export default HomepageBanner;
