import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTABanner({
  heading,
  subheading,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
}) {
  return (
    <motion.section
      className="bg-gradient-to-r from-primary to-blue-600 text-white py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {heading}
        </motion.h2>

        {subheading && (
          <motion.p
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {subheading}
          </motion.p>
        )}

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to={primaryLink || "/book-call"}
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            {primaryText || "Book a Free Consultation"}
          </Link>
          {secondaryLink && (
            <Link
              to={secondaryLink}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 inline-block"
            >
              {secondaryText || "Learn More"}
            </Link>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
