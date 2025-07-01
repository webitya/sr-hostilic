"use client";

import { useState } from "react";
import Link from "next/link";
import SpaIcon from "@mui/icons-material/Spa";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* FIXED NAVBAR */
    <header className="fixed top-0 left-0 w-full bg-white py-5 px-8 border-b border-gray-200 shadow-md z-30">
      {/* NAV CONTAINER */}
      <nav className="flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 select-none"
          style={{ fontFamily: "cursive" }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-[#7b4b1a]"
          >
            <SpaIcon fontSize="large" />
          </motion.span>
          <span className="text-[#7b4b1a] text-[1.8rem] font-bold leading-none">
            SR Holistic Wellness
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-[#7b4b1a] hover:text-[#5a3613] transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <motion.a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-[#7b4b1a] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#5a3613] focus:outline-none"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneIcon fontSize="small" />
              </motion.span>
              +91‑9876543210
            </motion.a>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle navigation"
          className="md:hidden text-[#7b4b1a]"
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <motion.ul
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden flex flex-col gap-6 mt-4 list-none px-8"
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-[#7b4b1a] py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <motion.a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 bg-[#7b4b1a] text-white px-5 py-2 rounded-full font-semibold shadow-md"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.span
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneIcon fontSize="small" />
            </motion.span>
            +91‑9876543210
          </motion.a>
        </li>
      </motion.ul>
    </header>
  );
}
