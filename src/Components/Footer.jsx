import React from "react";
import img from "../assets/img8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Events", path: "#our-events" },
    { name: "Programs", path: "#strategic-partners" },
  ];

  const handleQuickLinkClick = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const socialLinks = [
    { icon: faFacebookF, url: "https://www.facebook.com/psitkanpur2004" },
    { icon: faLinkedinIn, url: "https://www.linkedin.com/company/psit-startup-incubation-foundation" },
    { icon: faXTwitter, url: "https://x.com/psitsif" },
    { icon: faInstagram, url: "https://www.instagram.com/psit.sif" }
  ];

  return (
    <footer className="bg-blue-950 text-white mt-9" id="footer-id">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 py-12">
          {/* Main Content */}
          <div className="space-y-6">
            <img src={img} alt="PSIT SIF Logo" className="w-24" />
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300">Startup & Incubation Foundation</h2>
              <p className="text-gray-300">
                Empowering Innovators, Fueling Growth. We are dedicated to nurturing innovative startups
                and fostering entrepreneurial growth through mentorship, resources, and networking opportunities.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={(e) => handleQuickLinkClick(e, link.path)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Get In Touch</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <span className="font-medium">Phone:</span>
                <a href="tel:+918348911311" className="ml-2 hover:text-white transition-colors duration-200">
                  +91 89605 10510
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <span className="font-medium">Email:</span>
                <a href="mailto:anurag.dhawan@psit.ac.in" className="ml-2 hover:text-white transition-colors duration-200">
                  anurag.dhawan@psit.ac.in
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Address:</span>
                <span className="ml-2">
                  Pranveer Singh Institute of Technology NH 19, Bhauti - Kanpur - 209305 Uttar Pradesh, India
                </span>
              </p>
            </div>

            {/* Newsletter Subscription */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-blue-900 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>Copyright © {new Date().getFullYear()} PSIT SIF. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              {/* <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;