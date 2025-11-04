import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const TikTokIcon = ({ size, className }: { size: number; className: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { label: 'À propos de', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Informations légales', path: '/legal' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com',
    },
    {
      icon: TikTokIcon,
      label: 'TikTok',
      url: 'https://tiktok.com',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: 'https://youtube.com',
    },
  ];

  return (
    <footer className="bg-[#111111] text-[#f5f5f5]" role="contentinfo">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Logo and Brand Text */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff6600] to-orange-700 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold text-white">MotoMarket</span>
            </Link>
            <p className="text-[#d0d0d0] text-sm leading-relaxed max-w-2xl mx-auto">
              Votre marketplace de confiance pour motos et scooters neufs et d'occasion.
            </p>
          </div>

          {/* Main Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[#d0d0d0] hover:text-[#ff6600] transition-colors duration-200 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Emphasized Pro Client Access Link */}
              <li>
                <Link
                  to="/pro"
                  className="inline-flex items-center px-4 py-2 bg-[#ff6600] text-white rounded-lg font-semibold text-sm hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-[#ff6600]"
                  aria-label="Accès client professionnel"
                >
                  Accès client pro
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-[#d0d0d0] hover:bg-[#ff6600] hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Copyright */}
          <p className="text-[#a0a0a0] text-sm">
            © {currentYear} MotoMarket. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
