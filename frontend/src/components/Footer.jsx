import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-400 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-yellow-400">Explore</h2>
            <ul className="space-y-2">
              {["Home", "Trending Blogs", "Devotional Posts", "Top Creators"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-yellow-400">Categories</h2>
            <ul className="space-y-2">
              {["Tech & Programming", "Web Development", "AI & Machine Learning", "Devotionals"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-yellow-400">Resources</h2>
            <ul className="space-y-2">
              {["Code Snippets", "Tutorials", "Open Source Projects", "Community Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4 text-yellow-400">About</h2>
            <ul className="space-y-2">
              {["About ByteBlog", "Contact Us", "Careers", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-black py-5 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-yellow-400">
            Byte<span className="text-yellow-400">Blog</span>
          </div>
          <div className="text-sm text-gray-500 text-center sm:text-left">
            &copy; 2024 ByteBlog. All rights reserved.
          </div>
          <div className="flex space-x-5 text-yellow-400 text-2xl">
            <a href="https://github.com/AJKakarot" className="hover:text-yellow-500 transition-colors">
              <FaGithub />
            </a>
            <a href="https://medium.com/@2301661530002" className="hover:text-yellow-500 transition-colors">
              <FaMedium />
            </a>
            <a href="https://www.linkedin.com/in/ajeet-gupta-99aa6b281/" className="hover:text-yellow-500 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
