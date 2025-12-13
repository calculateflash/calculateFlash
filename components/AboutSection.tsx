"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/**
 * Container animation (stagger children)
 */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * Item animation (fade + slide up)
 * Uses cubic-bezier easing for premium smoothness
 */
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ Premium ease-out (Stripe / Apple style)
    },
  },
};

export function AboutSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-20 bg-white p-10 rounded-2xl shadow-sm border"
    >
      {/* Title */}
      <motion.h2
        variants={item}
        className="text-3xl font-bold text-blue-700 mb-2"
      >
        About CalculateFlash
      </motion.h2>

      <motion.p
        variants={item}
        className="text-slate-600 mb-8 max-w-2xl"
      >
        A premium platform built to simplify calculations and empower smarter
        financial, health, and everyday decisions.
      </motion.p>

      {/* Feature Blocks */}
      <div className="grid gap-8">

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="transition rounded-xl"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            All-in-One Calculator Platform
          </h3>
          <p className="text-slate-700 leading-relaxed">
            CalculateFlash brings together a comprehensive suite of modern
            calculators designed to deliver instant, accurate results. With a
            clean and intuitive interface, users can calculate, plan, and
            analyze without dealing with complex formulas or technical details.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="transition rounded-xl"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Trusted Financial Tools
          </h3>
          <p className="text-slate-700 leading-relaxed">
            From EMI, SIP, GST, compound interest, and income tax calculators to
            FD, RD, inflation, and more, every financial tool is built using
            industry-standard formulas trusted by banks and institutions. This
            ensures clarity, transparency, and confidence in every calculation.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="transition rounded-xl"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Health & Utility Made Effortless
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Beyond finance, CalculateFlash includes essential health and utility
            calculators such as BMI, calorie needs, age calculators, and unit
            converters. Designed for speed and accuracy, these tools support
            smarter daily decisions with minimal effort.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="transition rounded-xl"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Built for Performance & Discoverability
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Our platform is engineered for fast loading, mobile responsiveness,
            and structured SEO optimization. This ensures an exceptional user
            experience while helping search engines accurately understand and
            rank our content.
          </p>
        </motion.div>

      </div>

      {/* Mission Highlight */}
      <motion.div
        variants={item}
        className="mt-10 pt-6 border-t"
      >
        <p className="text-slate-800 font-medium leading-relaxed max-w-3xl">
          Our mission is to become the most reliable and user-focused calculator
          platform online—empowering millions of users with fast, accurate, and
          beautifully designed tools for smarter everyday decision-making.
        </p>
      </motion.div>
    </motion.section>
  );
}
