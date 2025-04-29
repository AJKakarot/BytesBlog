import React, { useEffect } from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Creator from "../Home/Creator";
import { motion } from "framer-motion";

function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-yellow-400">
      {/* Hero Section */}
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold">Welcome to Our Blogging World 🌍</h1>
          <p className="mt-2 text-yellow-300">
            Discover stories, wisdom, and inspirations from creators across the globe.
          </p>
        </motion.div>
        <Hero />
      </section>

      {/* Trending Section */}
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-semibold">🔥 Trending Blogs</h2>
          <p className="mt-2 text-yellow-300">See what’s buzzing and making headlines right now.</p>
        </motion.div>
        <Trending />
      </section>

      {/* Devotional Section */}
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-semibold">🙏 Devotional Thoughts</h2>
          <p className="mt-2 text-yellow-300">
            Feed your soul with peace, faith, and spiritual blogs.
          </p>
        </motion.div>
        <Devotional />
      </section>

      {/* Creators Section */}
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-semibold">👑 Meet Our Creators</h2>
          <p className="mt-2 text-yellow-300">
            Amazing minds sharing their stories, journeys, and creativity.
          </p>
        </motion.div>
        <Creator />
      </section>
    </div>
  );
}

export default Home;
