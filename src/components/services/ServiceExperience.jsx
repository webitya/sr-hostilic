"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    feedback:
      "The Swedish massage was incredible. I left feeling totally renewed. The staff was kind, the environment was peaceful, and I can't wait to come back.",
  },
  {
    name: "Sneha Kapoor",
    feedback:
      "Absolutely the best Ayurvedic experience I’ve had. From the oils to the healing touch, everything felt personal and effective. A true sanctuary!",
  },
  {
    name: "Rahul Sharma",
    feedback:
      "I was skeptical about reiki but felt calmer and more balanced than I have in months. Truly a holistic experience worth every minute.",
  },
];

export default function ServiceExperience() {
  return (
    <motion.section
      className="py-12 px-6 font-sans text-[#604235] text-center bg-gradient-to-br from-[#f6e3d5] via-[#f3d5b5] to-[#e5c1a5] animate-pulse"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-10 text-yellow-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What Our Guests Say
      </motion.h2>

      <motion.div
        className="grid gap-8 max-w-5xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {testimonials.map((person) => (
          <motion.div
            key={person.name}
            className="bg-[#fefaf5] p-6 rounded-xl shadow-sm text-left cursor-pointer hover:shadow-md transition duration-300"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <p className="italic text-sm text-gray-700 mb-4">"{person.feedback}"</p>
            <p className="font-bold text-[#27545b]">— {person.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}