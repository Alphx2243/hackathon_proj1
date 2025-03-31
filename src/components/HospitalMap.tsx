import React from 'react';
import { MapPin } from 'lucide-react';

export function HospitalMap() {
  return (
    <div className="relative h-[400px] bg-gray-100 rounded-b-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/95 p-6 rounded-xl shadow-soft backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="animate-pulse">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <span className="font-medium text-gray-900">Loading nearby hospitals...</span>
          </div>
        </div>
      </div>
    </div>
  );
}