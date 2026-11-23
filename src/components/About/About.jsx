import React from "react";
import aboutLogoImg from "../../assets/About/logo-about.webp"

function About() {
    return (
        <section className="w-full min-h-176 bg-cream text-center flex justify-center items-center flex-col py-5 px-4 lg:grid lg:grid-cols-2 lg:content-center lg:px-20 lg:gap-6">
            {/* about us title text side  */}
            <h2 className="text-3xl/12.5 font-main lg:text-5xl lg:col-start-1 lg:text-left">About Us</h2>
            {/* about us logo side  */}
            <img className="w-87 h-78 my-2 object-contain lg:w-121 lg:h-109 lg:col-start-2 lg:row-start-1 lg:row-span-3 xl:w-161 xl:h-144 lg:justify-self-end" src={aboutLogoImg} alt="Ethiopian coffee cup illustration" />
            {/* text description side */}
            <p className="font-rubik text-gray max-w-xs text-left text-sm my-5 lg:max-w-lg lg:col-start-1 lg:text-xl">
                Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia. We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of that country’s coffee. The fruity acidity of this single origin coffee is balanced by its sweet honey notes, creating soft, light notes with a light character.
            </p>
            {/* learn more button side  */}
            <button className="bg-primary px-7 py-3 my-2 rounded-lg text-white cursor-pointer font-rubik text-base font-light hover:bg-primary/70 transition-colors duration-200 lg:col-start-1 lg:justify-self-start">Learn More</button>
        </section>
    )
}

export default About;