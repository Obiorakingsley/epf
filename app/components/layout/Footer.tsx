import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Container from "../ui/Container";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Programs", href: "/programs" },
  { name: "Latest News", href: "/news" },
  { name: "Privacy Policy", href: "/privacy" },
];

const supportLinks = [
  { name: "Donate Today", href: "/donate" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Partnerships", href: "/partners" },
  { name: "Terms of Service", href: "/terms" },
];

const socials = [
  {
    icon: FaFacebook,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-emerald-600">
              Excellent People Foundation
            </h3>

            <p className="mb-6 leading-7 text-gray-600">
              Empowering human potential through sustainable community-driven
              development and education.
            </p>

            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-semibold text-emerald-600">Quick Links</h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition hover:text-emerald-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-5 font-semibold text-emerald-600">Support Us</h4>

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition hover:text-emerald-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-semibold text-emerald-600">Contact Us</h4>

            <div className="space-y-5 text-gray-600">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-emerald-600" />

                <p>
                  123 Foundation Way
                  <br />
                  Suite 500
                  <br />
                  New York, NY 10001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-600" />

                <a href="mailto:contact@excellentpeople.org">
                  contact@excellentpeople.org
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-600" />

                <span>+1 (212) 555-0123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Excellent People Foundation. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
