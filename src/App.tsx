import React from 'react';
import { Calendar, Search, FileText, MessageSquare } from 'lucide-react';
import { EmergencyModule } from './components/EmergencyModule';
import { DashboardCard } from './components/DashboardCard';
import { HospitalMap } from './components/HospitalMap';
import { ProfileSummary } from './components/ProfileSummary';
import { DonationModule } from './components/DonationModule';
import { NewsPanel } from './components/NewsPanel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <EmergencyModule />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 glass-morphism rounded-2xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ResQMed Dashboard</h1>
              <p className="mt-1 text-gray-600">Welcome back, John</p>
            </div>
          </div>
        </header> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Appointments"
            description="Schedule or view your appointments"
            icon={Calendar}
            bgColor="bg-primary/10"
            iconColor="text-primary"
          />
          <DashboardCard
            title="Find Hospital"
            description="Search nearby hospitals"
            icon={Search}
            bgColor="bg-accent/10"
            iconColor="text-accent"
          />
          <DashboardCard
            title="Medical Records"
            description="Access your health documents"
            icon={FileText}
            bgColor="bg-secondary/10"
            iconColor="text-secondary"
          />
          <DashboardCard
            title="AI Assistant"
            description="Get instant medical guidance"
            icon={MessageSquare}
            bgColor="bg-primary/10"
            iconColor="text-primary"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 glass-morphism rounded-2xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">Nearby Hospitals</h2>
              <p className="text-sm text-gray-600 mt-1">Find healthcare facilities in your area</p>
            </div>
            <HospitalMap />
          </div>
          <div className="glass-morphism rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
            <ProfileSummary />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DonationModule />
          <NewsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;