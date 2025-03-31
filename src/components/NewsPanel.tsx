import React from 'react';
import { Bell, Newspaper, Calendar, Syringe } from 'lucide-react';

export function NewsPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Healthcare Updates</h2>
          <p className="text-sm text-gray-600 mt-1">Latest news and announcements</p>
        </div>
        <button className="text-primary hover:text-primary/80 font-medium">View All</button>
      </div>
      
      <div className="space-y-6">
        <div className="group hover:bg-red-50/50 border-l-4 border-red-500 pl-4 py-3 rounded-r-xl transition-colors">
          <div className="flex items-center space-x-2 text-red-600 mb-2">
            <Bell className="w-5 h-5" />
            <span className="font-semibold">Urgent Alert</span>
          </div>
          <h3 className="font-medium text-gray-900 group-hover:text-red-900">COVID-19 Variant Update</h3>
          <p className="text-sm text-gray-600 mt-1 group-hover:text-red-700">New guidelines issued for public safety measures.</p>
        </div>

        <div className="group hover:bg-blue-50/50 border-l-4 border-blue-500 pl-4 py-3 rounded-r-xl transition-colors">
          <div className="flex items-center space-x-2 text-blue-600 mb-2">
            <Newspaper className="w-5 h-5" />
            <span className="font-semibold">Latest Research</span>
          </div>
          <h3 className="font-medium text-gray-900 group-hover:text-blue-900">Breakthrough in Cancer Treatment</h3>
          <p className="text-sm text-gray-600 mt-1 group-hover:text-blue-700">New immunotherapy shows promising results in clinical trials.</p>
        </div>

        <div className="group hover:bg-green-50/50 border-l-4 border-green-500 pl-4 py-3 rounded-r-xl transition-colors">
          <div className="flex items-center space-x-2 text-green-600 mb-2">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Upcoming Event</span>
          </div>
          <h3 className="font-medium text-gray-900 group-hover:text-green-900">Community Health Fair</h3>
          <p className="text-sm text-gray-600 mt-1 group-hover:text-green-700">Free health screenings and consultations this weekend.</p>
        </div>

        <div className="group hover:bg-purple-50/50 border-l-4 border-purple-500 pl-4 py-3 rounded-r-xl transition-colors">
          <div className="flex items-center space-x-2 text-purple-600 mb-2">
            <Syringe className="w-5 h-5" />
            <span className="font-semibold">Vaccination Drive</span>
          </div>
          <h3 className="font-medium text-gray-900 group-hover:text-purple-900">Flu Shot Campaign</h3>
          <p className="text-sm text-gray-600 mt-1 group-hover:text-purple-700">Annual vaccination program starts next week.</p>
        </div>
      </div>
    </div>
  );
}