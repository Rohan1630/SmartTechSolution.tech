import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Tech Services</h2>
          <p className="leading-relaxed">Providing top-notch tech solutions for your business.</p>
        </div>
          
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-300">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" className="hover:text-white transition-colors duration-300"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="hover:text-white transition-colors duration-300"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
          </div>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <p className="leading-relaxed">Email: <a href="mailto:info@techservices.com" className="hover:text-white transition-colors duration-300">info@techservices.com</a></p>
          <p className="leading-relaxed">Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">+123 456 7890</a></p>
          <p className="leading-relaxed">Address: 123 Tech Street, Silicon Valley, CA</p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Tech Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
