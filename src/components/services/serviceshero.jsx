"use client";

import { motion } from "framer-motion";
import SpaIcon from "@mui/icons-material/Spa";

export default function ServicesHero() {
  return (
    <section
      className="services-hero relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg,#df865b,#FF69B4,#FFD700)",
        backgroundSize: "400% 400%",
        padding: "4rem 1.5rem",
        marginTop: "5rem", // ✅ Added margin from top
        fontFamily: "'Segoe UI','Roboto','Helvetica Neue',sans-serif",
        color: "#ffffff",
        textAlign: "center",
        border: "1px solid transparent",
        borderRadius: "12px",
        boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* White overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.15)",
          mixBlendMode: "overlay",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 1, maxWidth: "820px", margin: "0 auto" }}
      >
        <motion.span
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          style={{ display: "inline-block", marginBottom: "0.75rem" }}
        >
          <SpaIcon style={{ fontSize: "3rem", color: "#ffffff" }} />
        </motion.span>

        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: "clamp(2rem,6vw,2.7rem)",
            marginBottom: "1.2rem",
            fontWeight: 700,
            background: "linear-gradient(90deg,#FFD700,#ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
        >
          Discover Our Wellness Services
        </motion.h1>

        <motion.p
          whileHover={{ scale: 1.02, color: "#FFF4BC" }}
          transition={{ duration: 0.3 }}
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            fontSize: "clamp(1rem,2.5vw,1.125rem)",
            lineHeight: "1.6",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          SR Holistic Wellness offers a diverse range of holistic therapies that
          restore balance and well‑being. Whether you're looking to relax,
          rejuvenate, or heal, our personalized treatments are designed to
          nurture both body and mind in a serene, luxurious environment.
        </motion.p>
      </motion.div>

      <style jsx>{`
        @keyframes slideGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .services-hero {
          animation: slideGradient 22s linear infinite alternate;
          border-image: linear-gradient(135deg, #27545b, #ffd700) 1;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
