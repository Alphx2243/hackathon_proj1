import { create } from 'zustand';
import { User, Hospital, Ambulance, DonationRequest } from '../types';

interface State {
  user: User | null;
  hospitals: Hospital[];
  ambulances: Ambulance[];
  donationRequests: DonationRequest[];
  emergencyActive: boolean;
  loading: boolean;
  error: string | null;
}

interface Actions {
  setUser: (user: User | null) => void;
  activateEmergency: () => void;
  deactivateEmergency: () => void;
  updateHospitals: (hospitals: Hospital[]) => void;
  updateAmbulances: (ambulances: Ambulance[]) => void;
  updateDonationRequests: (requests: DonationRequest[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useStore = create<State & Actions>((set) => ({
  user: null,
  hospitals: [],
  ambulances: [],
  donationRequests: [],
  emergencyActive: false,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),
  activateEmergency: () => set({ emergencyActive: true }),
  deactivateEmergency: () => set({ emergencyActive: false }),
  updateHospitals: (hospitals) => set({ hospitals }),
  updateAmbulances: (ambulances) => set({ ambulances }),
  updateDonationRequests: (requests) => set({ donationRequests }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));