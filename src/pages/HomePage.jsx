import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import StatsBar from '../components/StatsBar';
import CTABanner from '../components/CTABanner';
import TrustLogos from '../components/TrustLogos';
import { whyUsPoints } from '../data/services';
import { testimonialsData, statsData, trustLogos } from '../data/testimonials';

// Icon components (simple SVG icons)
const ArchitectureIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const BIMIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const MEPIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  </svg>
);

const ScanIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Architecture + MEP.
              <br />
              <span className="text-primary">Design + Production.</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              From concept to construction documents, we deliver comprehensive design and engineering solutions for modern buildings.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row justify-center gap-4 pt-8"
              variants={itemVariants}
            >
              <Link to="/book-call" className="btn-primary text-center">
                Book a Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary text-center">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Bar */}
      <StatsBar stats={statsData} />

      {/* Features/Plug-In Section */}
      <section className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine design excellence with production capacity to deliver exceptional results on time and within budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {whyUsPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard number={index + 1} title={point.title} description={point.description} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container bg-light">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive architecture and engineering solutions tailored to your project needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={ArchitectureIcon}
            title="Architectural Design"
            description="Complete design services from concept to construction documents."
            link="/architecture"
          />
          <ServiceCard
            icon={BIMIcon}
            title="BIM Consulting"
            description="Expert BIM strategies and model management services."
            link="/services"
          />
          <ServiceCard
            icon={MEPIcon}
            title="MEP Engineering"
            description="Mechanical, electrical, and plumbing system design."
            link="/mep"
          />
          <ServiceCard
            icon={ScanIcon}
            title="Scan to BIM"
            description="Convert existing buildings into accurate BIM models."
            link="/scan-to-bim"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from architects, engineers, and project managers who trust us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel testimonials={testimonialsData} />
        </div>
      </section>

      {/* Trust Logos Section */}
      <TrustLogos logos={trustLogos} />

      {/* CTA Banner */}
      <CTABanner heading="Ready to Transform Your Project?" subheading="Let's discuss how we can help bring your vision to life." />
    </div>
  );
}
