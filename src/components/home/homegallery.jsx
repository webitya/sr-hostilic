"use client";

import { motion } from "framer-motion";
import SpaIcon from "@mui/icons-material/Spa";

export default function HomeGallery() {
  return (
    <section className="relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-[url('/gallery-bg.jpg')] bg-cover bg-center opacity-10 animate-backgroundMove" />

      <div className="relative z-10 bg-[#fffaf0]/90 py-16 px-6 text-center font-sans">
        {/* Title with icon */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-[#7b4b1a] flex justify-center items-center gap-2 mb-8"
        >
          <SpaIcon className="text-[#7b4b1a]" />
          Explore Our Wellness Space
        </motion.h2>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {[
            "/gallery1.jpg",
            "/gallery2.jpg",
            "/gallery3.jpg",
            "/gallery4.jpg",
            "/gallery5.jpg",
            "/gallery6.jpg",
            "/gallery1.jpg",
            "/gallery2.jpg",
            "/gallery3.jpg",
          ].map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Wellness image ${idx + 1}`}
                className="w-full h-60 object-cover transition-all duration-300 hover:shadow-xl"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-[#604235] max-w-xl mx-auto"
        >
          Every corner is curated to calm your senses and elevate your wellness journey.
        </motion.p>
      </div>

      {/* Background animation keyframes */}
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
          animation: backgroundMove 30s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}
