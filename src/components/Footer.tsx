import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl">AEDI Security</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading cybersecurity firm in Kenya, providing comprehensive security solutions 
              to protect businesses from evolving digital threats.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="text-gray-300">info@aedisecurity.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/check-breach" className="text-gray-300 hover:text-primary transition-colors">Check Breach</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services#pentest" className="text-gray-300 hover:text-primary transition-colors">Penetration Testing</a></li>
              <li><a href="/services#assessment" className="text-gray-300 hover:text-primary transition-colors">Vulnerability Assessment</a></li>
              <li><a href="/services#training" className="text-gray-300 hover:text-primary transition-colors">Security Training</a></li>
              <li><a href="/services#incident" className="text-gray-300 hover:text-primary transition-colors">Incident Response</a></li>
              <li><a href="/services#cloud" className="text-gray-300 hover:text-primary transition-colors">Cloud Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 AEDI Security. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;