import React from "react";
import { ArrowDown } from "lucide-react";


function Hero() {
    return (
        <>
            {/* Title Text Side  */}
            <div className="grow flex justify-center items-start pt-12">
                <h1 className="text-center font-main text-white text-5xl max-w-2xs lg:text-7xl lg:max-w-3xl">Relax & Enjoy
                    Your Coffee</h1>
            </div>
            {/* Arrow Down Button Icon Side  */}
            <div className="flex justify-center items-center pb-10">
                <button className="w-12 h-12 lg:w-18 lg:h-18 bg-primary flex justify-center items-center rounded-full cursor-pointer"><ArrowDown className="text-white w-5 h-5 lg:w-8 lg:h-8" /></button>
            </div>
        </>
    )
}

export default Hero;