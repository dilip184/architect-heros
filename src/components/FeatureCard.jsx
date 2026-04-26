import { motion } from 'framer-motion';

export default function FeatureCard({ number, title, description }) {
  return (
    <motion.div
      className="relative p-6"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
        {number}
      </div>
      <div className="pl-8">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
