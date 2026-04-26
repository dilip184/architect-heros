import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                AH
              </div>
              <span>ArchitectHeros</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Design excellence meets production capacity. Your trusted partner in architecture and MEP engineering.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/architecture" className="hover:text-primary transition-colors">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link to="/mep" className="hover:text-primary transition-colors">
                  MEP Engineering
                </Link>
              </li>
              <li>
                <Link to="/scan-to-bim" className="hover:text-primary transition-colors">
                  Scan to BIM
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  BIM Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="mailto:info@architectheros.com" className="hover:text-primary transition-colors">
                  info@architectheros.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>123 Design Street, NYC</li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 ArchitectHeros. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
