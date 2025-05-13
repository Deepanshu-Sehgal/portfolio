// pages/About.jsx
import { motion } from "framer-motion";

import Home from "../components/Home";

const Homepage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    <Home />
  </motion.div>
);

export default Homepage;
