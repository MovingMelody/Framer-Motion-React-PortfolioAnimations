// import the page components
import AboutSection from "../components/AboutSection";
import React, { Fragment } from "react";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
export default AboutUs;
