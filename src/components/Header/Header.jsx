import React from "react";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { ArrowDown } from "lucide-react";
import LogoImg from '/src/assets/Logo/ngopi-logo.svg'

function Header() {
    return (
        // Header background image side 
        <div className="bg-header w-full h-218 bg-cover bg-center flex flex-col">
            <div className="flex justify-between items-center px-3 py-6 md:px-4 md:py-7">
                <div className="flex gap-x-3">
                    {/* Menu Icon Button  */}
                    <button className="cursor-pointer"><Menu className="text-white md:hidden" /></button>
                    {/* Logo Img Side  */}
                    <img src={LogoImg} alt={LogoImg} className="w-auto h-auto" />
                </div>
                {/* Naviagtion Menu Side  */}
                <nav className="hidden md:flex md:justify-between md:items-center">
                    <ul className="flex gap-x-3 list-none text-xl text-white/80 font-rubik font-medium">
                        <li><a href="#" className="text-primary">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Menu</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                {/* Icon Lucide Side  */}
                <div className="flex gap-x-1 md:gap-x-4">
                    <button className="bg-white/30 rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center cursor-pointer"><ShoppingCart className="text-white w-4 h-4 md:w-6 md:h-6" /></button>
                    <button className="bg-white/30 rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center cursor-pointer"><User className="text-white w-4 h-4 md:w-6 md:h-6" /></button>
                </div>
            </div>
            {/* Title Text Side */}
            <div className="grow flex justify-center items-start pt-12">
                <h1 className="text-center font-main text-white text-5xl max-w-2xs lg:text-7xl lg:max-w-3xl">Relax & Enjoy
                    Your Coffee</h1>
            </div>
            {/* Arrow Down Icon Side  */}
            <div className="flex justify-center items-center pb-10">
                <button className="w-12 h-12 lg:w-18 lg:h-18 bg-primary flex justify-center items-center rounded-full cursor-pointer"><ArrowDown className="text-white w-5 h-5 lg:w-8 lg:h-8" /></button>
            </div>
        </div>
    )
}

export default Header;