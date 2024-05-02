"use client"
import Image from "next/image";
import banner1 from '../../../public/banner1.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from "react";
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
        <div className="w-full border py-12 my-6">
            <Swiper className='relative  flex  justify-center items-center h-96'
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
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}>
                <button onClick={slidePrev} className=" absolute left-0 top-1/2 z-10" >
                    left
                </button>
                <button onClick={slideNext} className="absolute top-1/2 right-0 z-10">
                    right
                </button>
                {products.map(p => (
                    <SwiperSlide key={p.id} className="p-1">
                        <div className="h-full flex flex-col gap-8 lg:flex-row  justify-center  items-center border  py-8">
                            <div className=" flex justify-center ">
                                <Image src={p.image} alt={p.title} width={100} height={100} className="w-full" />
                            </div>
                            <div className="lg:w-1/2 flex flex-col">
                                <h1 className="text-lg">{p.title}</h1>
                                <h4 className="">$ {p.price} </h4>
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
