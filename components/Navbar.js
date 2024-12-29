"use client"
// components/Navbar.js
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Ensure the theme is mounted to avoid hydration mismatch
  useState(() => setMounted(true), []);

  return (
    <nav className="shadow-md sticky top-0 z-50 bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-4  lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Brand Logo */}
          <div className="flex-shrink-0">
            <Link className="text-xl font-bold" href="/">
              <Image
                src="/heading.png"
                width={220}
                height={90}
                alt="Cloudex"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link className="text-lg text-gray-800 hover:text-secondary" href="/">
              About
            </Link>
            <Link className="text-lg text-gray-800  hover:text-secondary" href="/">
              Services
            </Link>
            <Link className="text-lg text-gray-800  hover:text-secondary" href="/">
              Pricing
            </Link>
            <Link className="text-lg text-gray-800  hover:text-secondary" href="/">
              Developers
            </Link>
          </div>

          {/* Right side: Login button and Theme Switcher */}
          <div className="flex items-center space-x-4">
            <Link href="https://cloudex-eight.vercel.app/">
            <Button className="bg-secondary text-white hidden md:block py-3 px-6 rounded-3xl">
              Get Started
            </Button>
            </Link>
           

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 dark:text-black focus:outline-none"
            >
             <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white  shadow-lg z-40">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                className="text-lg text-gray-800  hover:text-primary"
                href="/"
              >
                About
              </Link>
              <Link
                className="text-lg text-gray-800  hover:text-primary"
                href="/"
              >
                Services
              </Link>
              <Link
                className="text-lg text-gray-800  hover:text-primary"
                href="/"
              >
                Pricing
              </Link>
              <Link
                className="text-lg text-gray-800  hover:text-primary"
                href="/"
              >
                Developers
              </Link>

              <Link href="https://cloudex-eight.vercel.app/">
            <Button className="bg-secondary text-white hidden md:block py-3 px-6 rounded-3xl">
              Get Started
            </Button>
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
