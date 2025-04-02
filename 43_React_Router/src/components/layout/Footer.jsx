import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-300 text-gray-900 py-6 mt-10 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">© {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="/" className="hover:text-gray-700">Home</a>
          <a href="/about" className="hover:text-gray-700">About</a>
          <a href="/movie" className="hover:text-gray-700">Movies</a>
          <a href="/contact" className="hover:text-gray-700">Contact</a>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="hover:text-gray-700">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
