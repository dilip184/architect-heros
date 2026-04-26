import { motion } from "framer-motion";
import CTABanner from "../components/CTABanner";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & Principal Architect",
      bio: "With 20+ years of experience in architecture and design",
      image: "https://i.pravatar.cc/150?img=10",
    },
    {
      name: "Sarah Johnson",
      role: "BIM Manager",
      bio: "Expert in Building Information Modeling and project coordination",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Michael Chen",
      role: "MEP Director",
      bio: "Specialist in mechanical, electrical, and plumbing systems",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      bio: "Creative architect focused on innovative and sustainable design",
      image: "https://i.pravatar.cc/150?img=13",
    },
  ];

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
            About ArchitectHeros
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Delivering exceptional architecture and engineering solutions since
            2010
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At ArchitectHeros, we're committed to transforming design visions
              into built reality. Our mission is to provide world-class
              architectural and engineering services that combine innovation,
              quality, and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe in the power of good design to create spaces that
              inspire, function optimally, and stand the test of time.
            </p>
            <div className="space-y-4">
              {[
                "Deliver exceptional design and engineering solutions",
                "Build lasting relationships with our clients",
                "Foster innovation and continuous improvement",
                "Maintain the highest standards of quality and ethics",
              ].map((mission, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{mission}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-light p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Values
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in every project, no matter the size.",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace new technologies and approaches to solve complex design challenges.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We work as partners with our clients, understanding their unique needs.",
                },
                {
                  title: "Integrity",
                  description:
                    "We conduct our business with honesty, transparency, and accountability.",
                },
              ].map((value, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* History/Timeline */}
      <section className="section-container bg-light">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              year: "2010",
              event:
                "Founded ArchitectHeros with a vision to revolutionize architectural services",
            },
            {
              year: "2013",
              event: "Expanded to offer BIM consulting services",
            },
            { year: "2016", event: "Launched MEP engineering division" },
            { year: "2019", event: "Introduced Scan to BIM services" },
            {
              year: "2023",
              event: "Reached 500+ completed projects milestone",
            },
            {
              year: "2024",
              event: "Expanded globally with partnerships in 45+ states",
            },
          ].map((timeline, index) => (
            <motion.div
              key={index}
              className="relative mb-8 pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full -ml-3" />
              {index < 5 && (
                <div className="absolute left-3 top-6 w-0.5 h-12 bg-primary" />
              )}
              <div>
                <p className="text-primary font-bold text-lg">
                  {timeline.year}
                </p>
                <p className="text-gray-700 mt-1">{timeline.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering exceptional
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-sm mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "14+", label: "Years in Business" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-xl opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Join Our Growing List of Satisfied Clients"
        primaryText="Get In Touch"
      />
    </div>
  );
}
