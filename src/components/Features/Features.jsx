import React from "react";
import coffeeIcon from "../../assets/Features/coffee-vector.svg"
import wifiIcon from "../../assets/Features/wifi-vector.svg"
import comfortableIcon from "../../assets/Features/comfortable-vector.svg"
import creativeIcon from "../../assets/Features/creative-vector.svg"

// features data side 
const featuresData = [
    {
        id: 1, img: coffeeIcon, title: "High Quality", desc: "Enjoy an unrivaled coffee taste sensation with our selected coffee beans, carefully roasted to create a fresh cup of coffee that captivates your taste buds."
    },
    {
        id: 2, img: wifiIcon, title: "Fast Wi-Fi and Work Area", desc: "Combine productivity with the pleasure of coffee. Enjoy a super-fast Wi-Fi connection and a comfortable workspace, where creative ideas bloom while sipping your favorite coffee."
    },
    {
        id: 3, img: comfortableIcon, title: "Comfortable and Friendly Room", desc: "Find the perfect place to gather, work or relax with friends in a warm and friendly atmosphere. Our spaces are designed to create a pleasant experience."
    },
    {
        id: 4, img: creativeIcon, title: "Creative and Innovative Menu", desc: "There is always something new to try on every visit. From specialty coffees to delicious snacks, our menu is designed to satisfy a variety of tastes."
    }
]

function Features() {
    return (
        <section className="w-full min-h-330 bg-brown px-3 py-3 lg:min-h-130">
            <h2 className="text-center text-cream text-3xl/12.5 font-main">Features</h2>
            <div className="grid grid-cols-1 gap-y-10 my-5 lg:grid-cols-4">
                {/* Features Data using Map method  */}
                {featuresData.map(feature =>
                // article side 
                (<article className="flex flex-col justify-start items-center gap-y-5 px-3 py-5 border-b border-cream/50 last:border-none lg:border-none" key={feature.id}>
                    <img src={feature.img} className="w-25 h-25" />
                    <h3 className="text-cream text-center text-3xl font-bold font-rubik max-w-70 lg:text-2xl lg:min-h-16">{feature.title}</h3>
                    <p className="text-cream text-center max-w-sm font-rubik lg:max-w-57">{feature.desc}</p>
                </article>)
                )}
            </div>
        </section>
    )
}

export default Features;