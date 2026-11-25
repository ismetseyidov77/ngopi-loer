import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import americanoCoffeeImg from "../../assets/OurMenu/americano-coffee.webp";
import espressoCoffeeImg from "../../assets/OurMenu/espresso-coffee.webp";
import latteCoffeeImg from "../../assets/OurMenu/latte-coffee.webp";

// menuData side 
const menuData = [
    { id: 1, img: americanoCoffeeImg, title: "Americano Coffee", rating: "5.9", desc: "Lorem ipsum dolor sit amet consectetur. Fermentum dolor nibh lectus aenean eu sit ut. Eget tortor nullam eros pretium tincidunt ipsum at.", price: "$ 13.6" },
    { id: 2, img: espressoCoffeeImg, title: "Espresso Coffee", rating: "5.9", desc: "Lorem ipsum dolor sit amet consectetur. Fermentum dolor nibh lectus aenean eu sit ut. Eget tortor nullam eros pretium tincidunt ipsum at.", price: "$ 18.1" },
    { id: 3, img: latteCoffeeImg, title: "Latte Coffee", rating: "5.9", desc: "Lorem ipsum dolor sit amet consectetur. Fermentum dolor nibh lectus aenean eu sit ut. Eget tortor nullam eros pretium tincidunt ipsum at.", price: "$ 15.5" }
]

function OurMenu() {
    return (
        <section className="w-full min-h-447 bg-cream py-3 flex flex-col">
            <h2 className="text-center text-3xl/12.5 text-dark-secondary font-main">Our Menu</h2>
            <div className="flex justify-end items-center px-5 py-2">
                <button className="bg-primary px-2 py-3 text-white text-sm/5 font-rubik font-light rounded-lg hover:bg-primary/70">See All Product</button>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5 px-5 py-2">
                {/* menu data using map method side  */}
                {menuData.map(item => (
                    <article className="w-full h-128 flex flex-col justify-center items-start rounded-2xl bg-white font-rubik px-4.5 gap-y-2" key={item.id}>
                        <img className="w-full h-62" src={item.img} alt={item.title} />
                        <h3 className=" text-2xl font-semibold text-dark-secondary">{item.title}</h3>
                        {/* icon and rating side  */}
                        <div className="flex justify-center items-center gap-x-2">
                            <Star className="w-7.5 h-7.5 text-primary fill-primary" />
                            <span className="text-xl">{item.rating}</span>
                        </div>
                        <p className="text-sm/5 text-dark-secondary font-light max-w-xs">{item.desc}</p>
                        <div className="w-full flex justify-between items-center">
                            <span className="font-rubik font-bold text-3xl">{item.price}</span>
                            <button className="font-rubik text-primary border border-primary rounded-xl flex justify-center items-center text-sm px-3.5 py-2 gap-x-2"><ShoppingCart className="w-4 h-4 text-primary"/>Add to Cart</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default OurMenu;