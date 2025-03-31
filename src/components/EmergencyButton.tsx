import React from 'react';
import { AlertCircle } from 'lucide-react';

export function EmergencyButton() {
  const handleEmergency = () => {
    // In a real app, this would trigger emergency services
    alert('Emergency services would be contacted');
  };

  return (
    <button
      onClick={handleEmergency}
      className="fixed top-4 right-4 md:top-6 md:right-6 bg-[#FF3B30] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 transition-all transform hover:scale-105 active:scale-95"
    >
      <AlertCircle className="w-6 h-6" />
      <span>SOS</span>
    </button>
  );
}