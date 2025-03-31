import React from 'react';
import { User, Heart, Activity, Calendar } from 'lucide-react';

export function ProfileSummary() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="font-semibold text-xl text-gray-900">John Doe</h2>
          <p className="text-gray-600 text-sm">Patient ID: 123456</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="flex items-center space-x-3">
            <Heart className="w-5 h-5 text-red-500" />
            <div>
              <p className="text-sm text-gray-600">Blood Type</p>
              <p className="font-medium text-gray-900">A+</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 p-4 rounded-xl">
          <div className="flex items-center space-x-3">
            <Activity className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-medium text-gray-900">Healthy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-200 p-4 rounded-xl">
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-600">Next Appointment</p>
            <p className="font-medium text-gray-900">March 15, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}