import Image from "next/image";
import banner2 from '../../../public/banner2.jpg'
const HomepageBanner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full items-center py-12 md:px-12 md:py-24 gap-8 bg-main-color rounded-lg shadow-lg shadow-main-color  ">
            <div className=" md:w-1/2 flex flex-col text-center md:text-left gap-4 ">
                <h1 className=" text-3xl md:text-5xl text-text-main-color font-bold  ">
                    <div className="text-3xl md:text-5xl text-primary-red my-3">
                        &ldquo;Easy, Fast, Secure&rdquo;
                    </div>
                    <div className="bg-white rounded-lg mb-1 py-1 mx-8 md:mx-0">No matter what you need</div>
                    <div className="bg-white rounded-lg mt-1 py-1 mx-8 md:mx-0">We&rsquo;re here for you</div>

                </h1>
                <h4 className="text-center md:text-justify  leading-5 px-5 md:px-0 text-white">
                    Keeping customer satisfaction at the forefront, we cater to every need
                    with our wide range of products. We turn shopping into an enjoyable
                    experience with our user-friendly interface and fast delivery service.
                    By safeguarding our customers&rsquo; personal information through our secure
                    payment system, we ensure secure online shopping. We continuously
                    strive to provide you with the best shopping experience by constantly
                    improving and keeping up with innovations
                </h4>
            </div>
            <div className="relative md:w-1/2 bg-main-color flex justify-center" >
                <Image
                    src={banner2}
                    // src="/banner2.jpg"
                    width={500}
                    height={500}
                    alt="Shopping Image"
                    className="rounded-lg "
                />
            </div>
        </div>
    );
};

export default HomepageBanner;
