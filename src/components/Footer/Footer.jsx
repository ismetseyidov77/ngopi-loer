import React from "react";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import ngopiLogoImg from "../../assets/Logo/ngopi-logo.svg";
import xIcon from "../../assets/Footer/x-icon.svg";
import fbIcon from "../../assets/Footer/fb-icon.svg";
import wpIcon from "../../assets/Footer/wp-icon.svg";
import instagramIcon from "../../assets/Footer/inst-icon.svg";
import youtubeIcon from "../../assets/Footer/youtube-icon.svg";
import tiktokIcon from "../../assets/Footer/tiktok-icon.svg";

function Footer() {
    return (
        // Footer side 
        <footer className="w-full h-200 bg-brown px-5 py-12">
            <div className="w-full flex flex-col gap-y-5">
                <img src={ngopiLogoImg} className="w-43 h-auto" alt="ngopi logo" />
                <p className="text-base text-cream font-rubik font-light">There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.</p>
                <div className="w-46 h-auto flex gap-x-3">
                    <a href="#"><img src={xIcon} alt="x icon" /></a>
                    <a href="#"><img src={fbIcon} alt="facebook icon" /></a>
                    <a href="#"><img src={wpIcon} alt="whatsapp icon" /></a>
                    <a href="#"><img src={instagramIcon} alt="instagram icon" /></a>
                    <a href="#"><img src={youtubeIcon} alt="youtube icon" /></a>
                    <a href="#"><img src={tiktokIcon} alt="tiktok icon" /></a>
                </div>
                <div className="w-68 h-37 flex flex-col py-6 gap-y-3">
                    {/* contact us side  */}
                    <h3 className="text-xl text-cream font-rubik font-semibold">Contact Us</h3>
                    <address className="not-italic flex flex-col gap-y-3 font-rubik text-cream py-3">
                        <div className="flex items-center gap-x-2">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <p className="text-sm">72, Wall street, King Road, NY 20110</p>
                        </div>
                        {/* phone icon side  */}
                        <a href="tel:8002758777" className="flex items-center gap-x-2">
                            <PhoneCall className="w-5 h-5 shrink-0" />
                            <span className="text-sm">800.275.8777</span>
                        </a>
                        {/* mail icon side */}
                        <a href="mailto:ngopiloer@gmail.com" className="flex items-center gap-x-2">
                            <Mail className="w-5 h-5 shrink-0" />
                            <span className="text-sm">ngopiloer@gmail.com</span>
                        </a>
                    </address>
                </div>
                {/* subscribe side  */}
                <div className="flex flex-col items-start gap-y-5 py-7 border-b border-cream">
                    <label htmlFor="newsletter-email" className="text-xl text-cream font-semibold">Subscribe To Newsletter</label>
                    <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Your E-Mail Address"
                        className="w-full px-4 py-2 bg-white rounded-lg placeholder:text-place-gray placeholder:text-sm"
                    />
                    <button className="px-6 py-3 bg-primary rounded-lg text-white text-sm font-rubik">Subscribe</button>
                    <span className="text-cream text-sm font-base italic font-rubik">Sign up with your email address to receive news and updates</span>
                </div>
                <span className="text-cream font-rubik text-xs text-center whitespace-nowrap">Copyright ©2023 NgopiLoer. All rights reserved.</span>
                {/* finally  */}
            </div>
        </footer>
    )
}

export default Footer;