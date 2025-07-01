"use client";

import { motion } from "framer-motion";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SchoolIcon from "@mui/icons-material/School";
import SpaIcon from "@mui/icons-material/Spa";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import StoreIcon from "@mui/icons-material/Store";

const services = [
  {
    title: "Consultation & Design",
    description:
      "Expert spa concept planning, architectural input, treatment menu design, and brand‑aligned wellness experiences.",
    icon: DesignServicesIcon,
  },
  {
    title: "Wellness Programs",
    description:
      "Custom‑tailored yoga, mindfulness, and natural healing therapies for holistic well‑being.",
    icon: SelfImprovementIcon,
  },
  {
    title: "Training & Development",
    description:
      "Comprehensive staff training, SOP creation, guest handling, and service‑quality enhancement.",
    icon: SchoolIcon,
  },
  {
    title: "Massages",
    description:
      "Therapeutic massages—from Swedish & deep tissue to Balinese & aromatherapy—to relax and heal.",
    icon: SpaIcon,
  },
  {
    title: "Ayurveda",
    description:
      "Traditional Ayurvedic treatments focused on detoxification, restoration, and long‑term balance.",
    icon: LocalHospitalIcon,
  },
  {
    title: "Beauty Treatments",
    description:
      "Facials, scrubs, wraps, and natural skincare rituals designed to revive your skin’s radiance.",
    icon: FaceRetouchingNaturalIcon,
  },
  {
    title: "Salon Services & Wedding Makeovers",
    description:
      "Bridal beauty solutions: hairstyling, makeup, grooming, and pre‑wedding spa packages.",
    icon: FavoriteIcon,
  },
  {
    title: "Spa Management",
    description:
      "End‑to‑end spa operations: staffing, service execution, inventory control, revenue optimization.",
    icon: ManageAccountsIcon,
  },
  {
    title: "Retail & Product Consulting",
    description:
      "Launch spa retail zones: natural product selection, merchandising, and branding guidance.",
    icon: StoreIcon,
  },
];

export default function AboutManagement() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "3rem 1.5rem",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        color: "#604235",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#7b4b1a",
          fontWeight: 600,
        }}
      >
        Our Service Expertise
      </motion.h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {services.map(({ title, description, icon: Icon }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            style={{
              background:
                "linear-gradient(#fefaf5 0 0) padding-box, linear-gradient(135deg,#ffd29a,#ff69b4) border-box",
              border: "1px solid transparent",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              cursor: "default",
            }}
          >
            {/* Icon */}
            <Icon style={{ color: "#df865b", fontSize: "2rem" }} />
            <h3 style={{ color: "#27545b", margin: "0" }}>{title}</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
