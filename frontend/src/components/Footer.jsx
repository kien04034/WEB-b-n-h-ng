import React from "react";
import { Link } from "react-router";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 mt-40 text-sm">
                <div>
                    <Link to='/'><img className="mb-5 w-32" src={assets.logo} alt="Forever" /></Link>
                    <p className="w-full md:w-2/3 text-gray-600">
                        Shop Phụ Kiện Pickleball
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>0866037682</li>
                        <li>nguyenkientk123@gmail.com</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Footer;