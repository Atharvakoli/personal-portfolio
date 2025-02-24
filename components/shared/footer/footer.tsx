import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-24 bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">John Doe</h3>
            <p className="text-sm text-gray-600">
              Full-stack developer passionate about creating innovative web
              solutions
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/johndoe"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/johndoe"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/johndoe"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Atharva koli. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
