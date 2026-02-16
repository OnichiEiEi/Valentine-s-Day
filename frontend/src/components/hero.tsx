"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import img1 from "../assets/img_1.png";
import img2 from "../assets/img_2.png";
import img3 from "../assets/img_3.png";
import img4 from "../assets/img_4.png";
import rose from "../assets/rose.png";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <Swiper 
            className="w-full max-w-screen h-120 gap-4"
            modules={[Autoplay]}
            autoplay={{ delay: 800, disableOnInteraction: false, pauseOnMouseEnter: false }}
            slidesPerView={1}
            speed={500}
            loop={true}
            >
                <SwiperSlide className=""><Image src={img1} alt="Valentine's Day" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide className=""><Image src={img2} alt="Valentine's Day" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide className=""><Image src={img3} alt="Valentine's Day" className="w-full h-full object-cover" /></SwiperSlide>
                <SwiperSlide className=""><Image src={img4} alt="Valentine's Day" className="w-full h-full object-cover" /></SwiperSlide>
            </Swiper>
            <div className="absolute top-80 z-10 bg-orange-100 px-10 py-4 shadow-md w-[375px] md:w-3xl md:top-100 h-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="order-2 text-center md:order-1 md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:my-6 ">Happy Valentine's Day!</h1>
                        <p className="h-[1px] bg-black w-full mb-2 md:mb-6"></p>
                        <p className="text-sm md:text-2xl my-2">Create a surprise gift for that special someone. Create lasting memories and precious moments for the people you love.</p>
                        <p className="h-[1px] bg-black w-full mb-2 mb:mb-6"></p>
                        <button className="bg-black text-white text-sm md:text-xl px-4 py-2 my-2 cursor-pointer">Create special memories here</button>
                    </div>
                    <Image src={rose} alt="Valentine's Day" className="w-full h-40 md:h-84 object-cover mt-2 order-1 md:order-2" />
                </div>
            </div>
            <div className="bg-stone-800 h-70 md:h-90 w-full"></div>
            <div className="bg-black w-full text-center text-white font-bold text-xl py-2 space-x-4 overflow-hidden">
                <div className="marquee flex gap-10 w-max">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <span key={index}>🤍 HAPPY VALENTINE'S DAY!</span>
                    ))}
                </div>
            </div>
        </div>
    );
}