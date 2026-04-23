// src/types/index.ts

export interface RideOption {
  id: string;
  name: string;
  urdu: string;
  icon: string;
  seats: number;
  eta: string;
  basePrice: number;
  description: string;
}

export interface RecentLocation {
  id: number;
  name: string;
  area: string;
  icon: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface MockDriver {
  name: string;
  urduName: string;
  rating: number;
  trips: number;
  vehicle: string;
  color: string;
  plate: string;
  phone: string;
  avatar: string;
  eta: number;
}

export interface Route {
  from: string;
  to: string;
}

export interface Booking {
  ride: RideOption;
  fare: number;
  femalePref: boolean;
}

export type Screen = 
  | 'home' 
  | 'route' 
  | 'rides' 
  | 'searching' 
  | 'driver' 
  | 'inRide';

export interface FareStepperState {
  fare: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
  isMin: boolean;
  isMax: boolean;
}

export interface CountdownState {
  count: number;
  reset: () => void;
  stop: () => void;
  expired: boolean;
}