import { motion } from 'framer-motion';

export default function TrustLogos({ logos }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      className="py-16 bg-light"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-gray-900 mb-12">
          Trusted by Leading Firms
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              variants={itemVariants}
            >
              <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
