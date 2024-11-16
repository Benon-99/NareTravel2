"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold">Nare Travel and Tours</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for local and international travel services, offering comprehensive solutions for both leisure and business travelers since 2014.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 space-y-4"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/armenia-tours" className="text-gray-400 hover:text-white transition-colors">Armenia Tours</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 space-y-6"
          >
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <MapPin className="h-6 w-6 flex-shrink-0" />
                <span>Teryan St 105/1, Citadel Business Center • Yerevan, Armenia</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <Phone className="h-6 w-6 flex-shrink-0" />
                <div className="space-x-2">
                  <span>+374-10-545046</span>
                  <span>•</span>
                  <span>+374-91-005046</span>
                </div>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <Mail className="h-6 w-6 flex-shrink-0" />
                <span>info@nare.am</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Nare Travel and Tours. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}