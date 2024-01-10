import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-screen flex flex-col items-center justify-center bg-teal-900 p-4 pb-2 pt-3">
      <div className="flex flex-col md:flex-row md:justify-between text-white">
        <div className="flex items-center mb-4 md:mb-0">
          <a href="/" className="text-2xl font-bold tracking-widest text-white">Well Goods</a>
          <p className="ml-4 text-sm font-medium">Effortlessly manage your inventory.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center ">
          {/* <a href="#" className="mr-4 hover:text-teal-500">Features</a>
          <a href="#" className="mr-4 hover:text-teal-500">Pricing</a>
          <a href="#" className="mr-4 hover:text-teal-500">Blog</a>
          <a href="#" className="mr-4 hover:text-teal-500">Contact</a> */}
          <a href="#" className="ml-4 md:ml-0 text-teal-400 hover:text-white">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#" className="ml-4 md:ml-0 text-teal-400 hover:text-white">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Well Goods . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
