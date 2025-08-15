import React, { ReactNode} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Metadata for SEO and accessibility
export const metatdat = {
  title:"AI Assistant",
  description: "Portfolio and projects of a Full Stack AI Engineer",
};

// Props type definition for scalability
interface RootLayoutProps {
  children: ReactNode;
}

/**
 * RootLayout Component
 * Wraps all pages with a consistent Navbar and Footer.
 * Keeps the structure clean and DRY (Don't Repeat Yourself).
 */

export default function RootLayout ({ children } : RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* Global Navigation */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
};