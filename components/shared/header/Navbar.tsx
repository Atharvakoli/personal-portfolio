"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    "Home",
    "Work",
    "Services",
    "About",
    "Blog",
    "Contact",
    "How-it-works",
  ];
  return (
    <>
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 text-blue-600">
              <svg
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">WebDev</h2>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item == "Home" ? "" : item.toLowerCase()}`}
                className="text-sm font-medium hover:text-blue-600"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-[#111418]"
              data-icon="Bell"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </div>
          </button>
          <Link
            href="/profile"
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/32e84e22-4b77-453d-874e-1a11f28541ff.png")',
            }}
          />

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 z-10 bg-white border-b border-gray-200 md:hidden">
              <nav className="flex flex-col p-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item == "Home" ? "" : item.toLowerCase()}`}
                    className="py-2 text-sm font-medium hover:text-blue-600"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#111418]"
                  data-icon="Bell"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                  </svg>
                </div>
              </button>
              <Link
                href="/profile"
                className="absolute bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/32e84e22-4b77-453d-874e-1a11f28541ff.png")',
                }}
              />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
