import React from 'react';
import { Heart, Gift, Package, Coins } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { DonationRequest } from '../types';

export function DonationModule() {
  const { donationRequests } = useStore();

  const getIcon = (type: DonationRequest['type']) => {
    switch (type) {
      case 'blood':
        return Heart;
      case 'organ':
        return Gift;
      case 'equipment':
        return Package;
      case 'monetary':
        return Coins;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Donation Requests</h2>
          <p className="text-sm text-gray-600 mt-1">Help save lives through donations</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Donate Now
        </button>
      </div>
      
      <div className="grid gap-4">
        {donationRequests.map((request) => {
          const Icon = getIcon(request.type);
          return (
            <div
              key={request.id}
              className="border border-gray-100 rounded-xl p-4 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`
                  p-3 rounded-xl
                  ${request.urgency === 'high' ? 'bg-red-50 text-red-600' :
                    request.urgency === 'medium' ? 'bg-yellow-50 text-yellow-600' :
                    'bg-green-50 text-green-600'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 capitalize">{request.type} Donation</h3>
                    <span className={`
                      text-sm px-3 py-1 rounded-full font-medium
                      ${request.status === 'active' ? 'bg-blue-100 text-blue-700' :
                        request.status === 'fulfilled' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'}
                    `}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{request.description}</p>
                  {request.requiredAmount && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-gray-900">
                          {((request.collectedAmount || 0) / request.requiredAmount * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{
                            width: `${((request.collectedAmount || 0) / request.requiredAmount * 100)}%`
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}