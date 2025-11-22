import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" bg-gradient-to-br from-purple-900 via-gray-900 to-black py-10 px-6  border-t border-pink-500/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">

                {/* Contact Info */}
                <div className="text-center md:text-left space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-wide">Let’s Connect With Me</h3>
                    <p className="text-white">Email: <a href="mailto:astomar9628@gmail.com" className="hover:text-pink-400 transition text-white">yash83849@gmail.com</a></p>
                    <p className="text-white">Phone: <span className="hover:text-pink-400 transition text-white">+91 8738087103</span></p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-5 text-2xl">


                    <a
                        href="https://x.com/yash83849"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-pink-500 transition transform hover:scale-110"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yash-gupta-a2200126b/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-pink-500 transition transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/yash83849"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-pink-500 transition transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

             {/* Footer Bottom Text */}
            <div className="text-center text-sm text-white">
                © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Yash Gupta</span> — Built with using{" "}
                <span className="text-indigo-400">React</span> & <span className="text-pink-400">Tailwind CSS</span>
            </div>

        </footer>
    );
}