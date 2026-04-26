import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ icon: Icon, title, description, link }) {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </motion.div>
  );
}
