"use client";

import { motion } from "framer-motion";

const services = [
  {
    name: "Swedish Massage",
    description:
      "A gentle, relaxing full-body massage that soothes muscles and improves circulation.",
    image: "/swedish.jpg",
  },
  {
    name: "Ayurvedic Therapy",
    description:
      "Healing therapies based on ancient Indian traditions using herbal oils and techniques.",
    image: "/ayurvedic.jpg",
  },
  {
    name: "Hot Stone Massage",
    description:
      "Heated stones placed on key points of the body to release deep tension and stress.",
    image: "/hotstone.jpg",
  },
  {
    name: "Thai Massage",
    description:
      "Yoga-like stretches combined with deep tissue pressure to balance energy and flexibility.",
    image: "/thai.jpg",
  },
  {
    name: "Reiki Healing",
    description:
      "An energy-based treatment that promotes emotional balance and inner peace.",
    image: "/reiki.jpg",
  },
  {
    name: "Organic Facials",
    description:
      "Customized facials using pure, organic products to refresh and nourish your skin.",
    image: "/facial.jpg",
  },
  {
    name: "Deep Tissue Massage",
    description:
      "Targets deeper muscle layers to release chronic tension and improve mobility.",
    image: "/deeptissue.jpg",
  },
  {
    name: "Aromatherapy",
    description:
      "Healing through essential oils that uplift your senses and calm your body.",
    image: "/aroma.jpg",
  },
  {
    name: "Detox Body Wrap",
    description:
      "A rejuvenating body treatment to flush out toxins and revitalize your skin.",
    image: "/bodywrap.jpg",
  },
];

export default function ServiceList() {
  return (
    <section className="bg-[#fefaf7] py-12 px-6 font-sans text-[#604235]">
      {/* Section Heading */}
      <motion.h2
        className="text-center text-3xl font-semibold mb-8 text-[#7b4b1a]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our Signature Services
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        className="grid gap-8 max-w-[1100px] mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.name}
            className="bg-white p-4 rounded-2xl shadow-sm text-left cursor-pointer hover:shadow-lg transition-shadow"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.04, rotate: 0.2 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={service.image}
              alt={service.name}
              className="w-full h-44 object-cover rounded-xl mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-[#27545b] text-lg font-medium mb-1">
              {service.name}
            </h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}