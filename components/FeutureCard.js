// components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-6xl text-gray-600 mb-4">{icon}</div> {/* Icon placeholder */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
};

export default FeatureCard;

