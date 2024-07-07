import { Outlet } from "react-router-dom";
import classes from "./Authemtication.module.css";
import { motion } from "framer-motion";

function AuthenticationPage() {
  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffnesss: 250 }}
    >
      <Outlet />
    </motion.div>
  );
}

export default AuthenticationPage;
