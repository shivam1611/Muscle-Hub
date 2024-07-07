import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffnesss: 250 }}
    >
      <Navbar />
      AboutPage
    </motion.div>
  );
}

export default AboutPage;
