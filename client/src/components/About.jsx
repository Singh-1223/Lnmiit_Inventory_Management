import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen px-4 py-8 md:p-10 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Effortless Inventory Management for Growing Businesses</h2>
      <p className="text-gray-600 text-center md:max-w-2xl mb-8">
        Tired of spreadsheets and messy stock counts? We have a simple and powerful solution for taking control of your inventory.
      </p>
      <div className="flex flex-wrap justify-around md:justify-center gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <i className="fas fa-boxes text-3xl text-gray-500 mb-2"></i>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Track Your Inventory</h3>
          <p className="text-gray-600 text-center">Never lose sight of your stock levels again.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <i className="fas fa-chart-line text-3xl text-gray-500 mb-2"></i>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Get Insights</h3>
          <p className="text-gray-600 text-center">Make data-driven decisions with real-time reports.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <i className="fas fa-rocket text-3xl text-gray-500 mb-2"></i>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Boost Efficiency</h3>
          <p className="text-gray-600 text-center">Automate tasks and streamline your workflow.</p>
        </div>
      </div>
      <p className="text-gray-600 text-center mt-8">Join us and experience the power of effortless inventory management.</p>
    </section>
  );
}

export default About