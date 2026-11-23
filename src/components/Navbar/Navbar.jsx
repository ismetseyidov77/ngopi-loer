import React from "react";
import { Menu, ShoppingCart, LucideUser2 } from "lucide-react";
import LogoImg from '/src/assets/Logo/ngopi-logo.svg'

function Navbar() {

    // isOpen state for dropdown 
    const [isOpen, setIsOpen] = React.useState(false)

    // toggle menu onClick for button side 
    const toggleMenu = () => setIsOpen((prev) => !prev)

    return (
        <section className="relative flex justify-between items-center px-3 py-6 md:px-4 md:py-7">
            <div className="flex gap-x-3">
                {/* Menu Icon Button  */}
                <button className="cursor-pointer" onClick={toggleMenu}><Menu className="text-white md:hidden" />
                </button>
                {/* Logo Img Side  */}
                <img src={LogoImg} alt={LogoImg} className="w-auto h-auto" />
            </div>
            {/* Naviagtion Menu Side  */}
            <nav className="hidden md:flex md:justify-between md:items-center">
                <ul className="flex gap-x-3 list-none text-xl text-white/80 font-rubik font-medium">
                    <li><a href="#" className="text-primary hover:text-white transition delay-100">Home</a></li>
                    <li><a href="#" className="hover:text-primary transition delay-100">About Us</a></li>
                    <li><a href="#" className="hover:text-primary transition delay-100">Our Menu</a></li>
                    <li><a href="#" className="hover:text-primary transition delay-100">Contact Us</a></li>
                </ul>
            </nav>
            {/* Icon Lucide Side  */}
            <div className="flex gap-x-1 md:gap-x-4">
                <button className="bg-white/30 rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center cursor-pointer hover:bg-white/50 transition delay-100"><ShoppingCart className="text-white w-4 h-4 md:w-6 md:h-6" /></button>
                <button className="bg-white/30 rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center cursor-pointer hover:bg-white/50 transition delay-100"><LucideUser2 className="text-white w-4 h-4 md:w-6 md:h-6" /></button>
            </div>
            {/* dropdown menu side and isOpen && */}
            {isOpen && <div className="absolute top-full left-0 md:hidden w-full h-40 bg-dark/90">
                <ul className="flex flex-col justify-center items-center my-3 gap-y-2 list-none text-xl text-white/80 font-rubik font-medium">
                    <li><a href="#" className="hover:text-primary transition delay-100">Home</a></li>
                    <li><a href="#" className="hover:text-primary transition delay-100">About Us</a></li>
                    <li><a href="#" className="hover:text-primary transition delay-100">Our Menu</a></li>
                    <li><a href="#" className="hover:text-primary transition delay-100">Contact Us</a></li>
                </ul>
            </div>}
        </section>
    )
}

export default Navbar;