import React, { useEffect, useState } from 'react';
import { AlertCircle, Ambulance, MapPin, Phone } from 'lucide-react';
import { useStore } from '../store/useStore';

export function EmergencyModule() {
  const { emergencyActive, activateEmergency, deactivateEmergency } = useStore();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (emergencyActive && 'geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error('Error getting location:', error),
        { enableHighAccuracy: true }
      );
    }
  }, [emergencyActive]);

  const handleEmergency = () => {
    if (!emergencyActive) {
      activateEmergency();
      // In a real app, this would trigger emergency services
      alert('Emergency services are being contacted');
    } else {
      deactivateEmergency();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-4 z-50">
      {emergencyActive && (
        <div className="bg-white p-6 rounded-xl shadow-soft backdrop-blur-sm w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Emergency Active</h3>
            <div className="animate-pulse">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">Location tracking active</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
              <Ambulance className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Ambulance dispatched</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Emergency contacts notified</span>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={handleEmergency}
        className={`${
          emergencyActive ? 'bg-gray-600' : 'bg-accent'
        } hover:opacity-90 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center space-x-3 transition-all transform hover:scale-105 active:scale-95`}
      >
        <AlertCircle className="w-6 h-6" />
        <span className="text-lg">{emergencyActive ? 'Cancel Emergency' : 'SOS'}</span>
      </button>
    </div>
  );
}