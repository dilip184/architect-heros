import { motion } from "framer-motion";
import CTABanner from "../components/CTABanner";
import { whyUsData } from "../data/testimonials";

const ProcessIcon = ({ number }) => (
  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
    {number}
  </div>
);

export default function WhyUsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose ArchitectHeros
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We combine expertise, quality, and efficiency to deliver exceptional
            results
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Strengths
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Communication System */}
      <section className="section-container bg-light">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Communication System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We keep you informed every step of the way with clear, transparent
            communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Weekly Updates",
              description:
                "Regular progress reports and status updates to keep you informed.",
            },
            {
              title: "Direct Contact",
              description:
                "Dedicated project manager available for questions and discussions.",
            },
            {
              title: "Transparent Timeline",
              description:
                "Clear milestones and deliverable dates set from the beginning.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QA Process */}
      <section className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our QA Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality assurance is built into every stage of our workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Initial Review",
              description:
                "Every deliverable is reviewed for accuracy and compliance.",
            },
            {
              step: 2,
              title: "Technical Check",
              description:
                "Technical validation against project specifications.",
            },
            {
              step: 3,
              title: "Client Review",
              description: "Client feedback and requested revisions.",
            },
            {
              step: 4,
              title: "Final Approval",
              description: "Final quality sign-off before delivery.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProcessIcon number={item.step} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-container bg-light">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven process that ensures success at every stage.
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              phase: "Proposal",
              description:
                "We understand your project requirements and provide a detailed proposal with timeline and deliverables.",
              points: [
                "Requirements analysis",
                "Scope definition",
                "Timeline creation",
                "Pricing proposal",
              ],
            },
            {
              phase: "Execution",
              description:
                "Our team works diligently on your project with regular updates and quality checks.",
              points: [
                "Kickoff meeting",
                "Design development",
                "Iterations & feedback",
                "Quality assurance",
              ],
            },
            {
              phase: "Delivery",
              description:
                "Final deliverables are provided with full documentation and ongoing support.",
              points: [
                "Final review",
                "Documentation package",
                "Training (if needed)",
                "Post-delivery support",
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {item.phase}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Experience the ArchitectHeros Difference"
        primaryText="Book a Consultation"
      />
    </div>
  );
}
