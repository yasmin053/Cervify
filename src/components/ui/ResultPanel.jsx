import React, { useState } from "react";
import Toggle from "./toggle";

const ResultPanel = () => {
  // Manage the toggle state (on/off) and confidence slider value.
  const [isActive, setIsActive] = useState(false);
  const [confidence, setConfidence] = useState(50);

  // Toggle handler
  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  // Confidence slider handler
  const handleConfidenceChange = (e) => {
    setConfidence(e.target.value);
  };

  // Show generated text when active; 
  const descriptionText = isActive
    ? "Cervify results..."
    : "Cervify results is off. Toggle on to generate results.";

  return (
    <div className="p-[2px] rounded-2xl ">
      <div className="rounded-2xl bg-gray-50/10 backdrop-blur-md p-4 min-h-[600px] flex flex-col">
        {/* Header Section with title and toggle */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-800">Cervify</span>
          <Toggle toggled={isActive} onToggle={handleToggle} />
        </div>

        {/* Confidence Slider Section */}
        <div className="mb-2">
          <label className="block text-xs text-gray-700 mb-1">
            Confidence: {confidence}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={confidence}
            onChange={handleConfidenceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Description / Generated Text Area */}
        <div className="bg-white p-2 rounded-xl flex-grow text-sm text-gray-700">
          {descriptionText}
        </div>

        {/* Help & Settings */}
        <div className="mt-4 space-y-2 text-xs text-gray-600 text-center">
          <button className="block w-full hover:underline">Help</button>
          <button className="block w-full hover:underline">Settings</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
