import Image from "next/image";

const HomepageBanner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full items-center border py-12 md:px-12 md:py-24 gap-8">
            <div className=" md:w-1/2 flex flex-col text-center md:text-left gap-4">
                <h1 className=" text-3xl md:text-5xl text-text-main-color font-bold  ">
                    <div className="text-3xl md:text-5xl text-primary-red my-3">
                        &ldquo;Easy, Fast, Secure&rdquo;
                    </div>
                    <div>No matter what you need</div>
                    <div>We&rsquo;re here for you</div>
                  
                </h1>
                <h4 className="text-justify text-main-color leading-5 px-5 md:px-0">
                    Keeping customer satisfaction at the forefront, we cater to every need
                    with our wide range of products. We turn shopping into an enjoyable
                    experience with our user-friendly interface and fast delivery service.
                    By safeguarding our customers&rsquo; personal information through our secure
                    payment system, we ensure secure online shopping. We continuously
                    strive to provide you with the best shopping experience by constantly
                    improving and keeping up with innovations
                </h4>
            </div>
            <div className="md:w-1/2">
                <Image
                    src="/shoppingImg.avif"
                    width={1}
                    height={1}
                    alt="Shopping Image"
                    className="w-full saturate-200 "
                />
            </div>
        </div>
    );
};

export default HomepageBanner;
