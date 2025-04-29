import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async  (data) => {
    const userInfo = {
      access_key: "7fb1081f-be24-46fb-9503-01af146add20",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Message sent successfully");
      // Reset form fields
      document.querySelector("form").reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white">
      <div className="bg-black/60 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8 bg-white/10 backdrop-blur-md p-10 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-yellow-400">Contact Us</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
              <h3 className="text-lg font-medium text-yellow-300 mb-4">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-sm text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="text-lg font-medium text-yellow-300 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4 text-yellow-300">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-yellow-500" />
                  <span>+91 8840713812</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-yellow-500" />
                  <span>gajeet031@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-yellow-500" />
                  <span>Kanpur Nagar, Kanpur, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
