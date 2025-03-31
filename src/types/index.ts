export interface User {
  id: string;
  email: string;
  fullName: string;
  bloodType: string;
  emergencyContacts: EmergencyContact[];
  medicalHistory: MedicalRecord[];
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  isNotified: boolean;
}

export interface MedicalRecord {
  id: string;
  date: string;
  type: string;
  description: string;
  attachments: string[];
  doctorId: string;
}

export interface Hospital {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  availableBeds: number;
  specialties: string[];
  emergencyContact: string;
}

export interface Ambulance {
  id: string;
  status: 'available' | 'dispatched' | 'occupied';
  location: {
    lat: number;
    lng: number;
  };
  eta?: number;
}

export interface DonationRequest {
  id: string;
  type: 'blood' | 'organ' | 'equipment' | 'monetary';
  status: 'active' | 'fulfilled' | 'expired';
  urgency: 'low' | 'medium' | 'high';
  description: string;
  requiredAmount?: number;
  collectedAmount?: number;
}