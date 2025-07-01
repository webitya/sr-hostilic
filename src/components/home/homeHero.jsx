"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomeHero() {
  const router = useRouter();

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #7b4b1a, #df865b, #ffb07c)",
        padding: "4rem 1rem",
        marginTop: "5rem",
        color: "#ffffff",
        borderRadius: "16px",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ flex: "1 1 480px" }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              fontWeight: 600,
            }}
          >
            Welcome to{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #f9d423, #fdd835, #f9d423)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontWeight: 700,
                textShadow: "0 1px 8px rgba(255, 217, 0, 0.8)",
              }}
            >
              SR Holistic Wellness
            </motion.span>
          </motion.h1>

          <p
            style={{
              maxWidth: "720px",
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Welcome to SR Holistic Wellness — a sanctuary where healing meets
            luxury. With over 13 years of experience, we specialize in
            personalized wellness therapies that blend traditional healing with
            modern care. From rejuvenating massages and Ayurvedic treatments to
            mind-body practices and organic skincare, our holistic approach
            nurtures your body, calms your mind, and revives your spirit.
          </p>

          {/* GALLERY BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => router.push("/services")}
            style={{
              backgroundColor: "#f9d423",
              color: "#4b2e13",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
            }}
          >
            Our Gallery →
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ flex: "1 1 400px" }}
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 32px rgba(0,0,0,0.45)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              maxWidth: "420px",
              height: "480px",
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
            }}
          >
            <img
              src="/tagline.jpg"
              alt="Holistic spa ambience"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                right: "1rem",
                fontSize: "1.6rem",
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 500,
                background: "linear-gradient(90deg, #a64ac9, #6a1b9a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                textShadow: "0 1px 6px rgba(0,0,0,0.3)",
              }}
            >
              “Discover the Power of Holistic Living — Where Every Experience Is
              Designed to Elevate Your Body, Enlighten Your Mind, and Awaken
              Your Soul.”
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
