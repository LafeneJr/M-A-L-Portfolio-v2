import { motion } from "framer-motion";

import Signature from "../../../assets/signature.png";

export const AnimatedSignature = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      className="relative"
    >
      {/* Soft Glow */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: .7,
          duration: 1,
        }}
        className="
        absolute
        inset-0

        rounded-full

        bg-indigo-500/10

        blur-3xl
      "
      />

      <img
        src={Signature}
        alt="signature"
        className={
          `
        signature-svg

        w-70
        md:w-90
        lg:w-107.5

        h-25
        sm:h-30
        md:h-40
        lg:h-auto
      `
        }
      />
    </motion.div>
  );
};