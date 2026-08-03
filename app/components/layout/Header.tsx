import Link from "next/link";
import { Menu } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-emerald-600"
          >
            Excellent People Foundation
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="border-b-2 border-emerald-600 pb-1 font-medium text-emerald-600"
            >
              Home
            </Link>

            <Link
              href="/programs"
              className="font-medium text-gray-600 transition-colors hover:text-emerald-600"
            >
              Programs
            </Link>

            <Link
              href="/about"
              className="font-medium text-gray-600 transition-colors hover:text-emerald-600"
            >
              About
            </Link>

            <Button href="/donate">Donate</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-emerald-600 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </Container>
    </header>
  );
}
