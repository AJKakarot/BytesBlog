import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0f172a] text-gray-400 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-white">Products</h2>
            <ul className="space-y-2">
              {["Flutter", "React", "Android", "iOS"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-white">Design to Code</h2>
            <ul className="space-y-2">
              {["Figma Plugin", "Templates"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-white">Comparison</h2>
            <ul className="space-y-2">
              {[
                "DhiWise vs Anima",
                "DhiWise vs Appsmith",
                "DhiWise vs FlutterFlow",
                "DhiWise vs Monday Hero",
                "DhiWise vs Retool",
                "DhiWise vs Bubble",
                "DhiWise vs Figma Dev Mode",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-white">Company</h2>
            <ul className="space-y-2">
              {["About Us", "Contact Us", "Career", "Terms of Service", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-[#0e162a] py-5 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold text-white">
            Byte<span className="text-blue-500">Blog</span>
          </div>
          <div className="text-sm text-gray-500 text-center sm:text-left">
            &copy; 2024 ByteBlog. All rights reserved.
          </div>
          <div className="flex space-x-5 text-white text-xl">
            <a href="https://github.com/AJKakarot" className="hover:text-blue-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://medium.com/@2301661530002" className="hover:text-blue-400 transition-colors">
              <FaMedium />
            </a>
            <a href="https://www.linkedin.com/in/ajeet-gupta-99aa6b281/" className="hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
