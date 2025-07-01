"use client";

import { motion } from "framer-motion";

export default function HomeWellnessServices() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        padding: "3rem 1rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#604235",
      }}
    >
      {/* Optional moving background (comment to disable) */}
      {/* <div className="absolute inset-0 bg-[url('/bg-texture.jpg')] bg-cover opacity-10 animate-backgroundMove" /> */}

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-center text-[#7b4b1a] mb-4"
        >
          Our Hospitality Partnerships
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          SR Holistic Wellness proudly delivers luxury spa experiences within two iconic WelcomHeritage
          destinations in Jaisalmer, Rajasthan.
        </motion.p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mandir Palace */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="/welcomheritage-mandir.jpg"
              alt="WelcomHeritage Mandir Palace"
              className="w-full aspect-video object-cover rounded-md mb-4"
            />
            <h3 className="text-[#27545b] font-semibold text-lg mb-2">
              WelcomHeritage Mandir Palace
            </h3>
            <p className="text-sm leading-relaxed">
              Operating since 2019, this 200‑year‑old heritage palace blends royal
              splendor with SR Holistic Wellness spa therapies for an unforgettable stay.
            </p>
          </motion.div>

          {/* Mohangarh Fort */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="/welcomeheritage-mohangarh.jpg"
              alt="WelcomHeritage Mohangarh Fort"
              className="w-full aspect-video object-cover rounded-md mb-4"
            />
            <h3 className="text-[#27545b] font-semibold text-lg mb-2">
              WelcomHeritage Mohangarh Fort
            </h3>
            <p className="text-sm leading-relaxed">
              Since 2019, guests at this yellow‑sandstone fort immerse themselves
              in regal ambience complemented by our signature holistic spa rituals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Optional background animation */}
      <style jsx>{`
        @keyframes backgroundMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-backgroundMove {
          animation: backgroundMove 40s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}
