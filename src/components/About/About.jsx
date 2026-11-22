import React from "react";
import aboutLogoImg from "../../assets/About/logo-about.webp"

function About() {
    return (
        <section className="w-full min-h-176 bg-cream flex flex-col lg:grid lg:grid-cols-2 lg:content-center lg:px-16">
            {/* about us title text side  */}
            <div className="text-header text-center py-6 lg:col-start-1 lg:text-left">
                <h2 className="text-3xl/12.5 font-main lg:text-5xl">About Us</h2>
            </div>
            {/* about us logo side  */}
            <div className="px-4 lg:col-start-2 lg:row-start-1 lg:row-span-3">
                <img className="w-87 h-78 lg:w-121 lg:h-109" src={aboutLogoImg} alt="Ethiopian coffee cup illustration" />
            </div>
            {/* text description side */}
            <div className="flex justify-center items-center px-5 py-6 lg:col-start-1 lg:py-0">
                <p className="font-rubik text-gray max-w-xs lg:max-w-lg text-center lg:text-left text-sm">
                    Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia. We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of that country’s coffee. The fruity acidity of this single origin coffee is balanced by its sweet honey notes, creating soft, light notes with a light character.
                </p>
            </div>
            {/* learn more button side  */}
            <div className="flex justify-center items-center py-3 lg:col-start-1 lg:justify-start">
                <button className="bg-primary px-7 py-3 rounded-lg text-white cursor-pointer font-rubik text-base font-light hover:bg-primary/70 hover:transition delay-100">Learn More</button>
            </div>
        </section>
    )
}

export default About;