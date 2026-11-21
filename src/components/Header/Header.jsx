import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

function Header() {
    return (
        // Header background image side 
        <div className="bg-header w-full h-218 bg-cover bg-center flex flex-col">
            {/* Navbar side  */}
            <Navbar />
            {/* Hero side  */}
            <Hero />
        </div>
    )
}

export default Header;