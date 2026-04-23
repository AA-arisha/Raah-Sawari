// src/constants/data.ts
import type { RideOption, RecentLocation, Feature, MockDriver } from '../types';

export const RIDE_OPTIONS: RideOption[] = [
  { id: "moto",     name: "Moto",     urdu: "موٹو", icon: "🏍️", seats: 1, eta: "3 min", basePrice: 120, description: "Fast & affordable" },
  { id: "mini",     name: "Mini",     urdu: "منی",  icon: "🚗", seats: 3, eta: "5 min", basePrice: 220, description: "Comfortable AC ride" },
  { id: "rickshaw", name: "Rickshaw", urdu: "رکشہ", icon: "🛺", seats: 2, eta: "4 min", basePrice: 90,  description: "Classic Karachi style" },
];

export const RECENT_LOCATIONS: RecentLocation[] = [
  { id: 1, name: "Dolmen Mall Clifton",  area: "Clifton, Karachi",         icon: "🛍️" },
  { id: 2, name: "Agha Khan Hospital",   area: "Stadium Road, Karachi",    icon: "🏥" },
  { id: 3, name: "Karachi University",    area: "University Road, Karachi", icon: "🎓" },
  { id: 4, name: "Jinnah Airport T1",     area: "PAF Base Faisal, Karachi", icon: "✈️" },
];

export const SUGGESTIONS: string[] = [
  "Dolmen Mall Clifton, Karachi",
  "Karachi University, University Road",
  "Jinnah Airport Terminal 1",
  "Agha Khan Hospital, Stadium Road",
  "Tariq Road, PECHS, Karachi",
  "Sea View, DHA Phase 8",
  "Centaurus Mall, Clifton",
  "Burns Road, Old City",
  "Bahadurabad, Karachi",
  "Gulshan-e-Iqbal, Block 13",
];

export const FEATURES: Feature[] = [
  { icon: "💸", title: "You Set the Price",    desc: "Negotiate your fare directly — no surge pricing surprises." },
  { icon: "🌸", title: "Female Driver Option", desc: "Opt for a female driver anytime for extra peace of mind." },
  { icon: "⚡", title: "Rides in Minutes",     desc: "Connect with nearby drivers fast, day or night." },
  { icon: "🛡️", title: "Safe Every Trip",      desc: "Live tracking, SOS button & verified drivers on every ride." },
  { icon: "🛺", title: "All Ride Types",       desc: "Rickshaw, Moto, Mini, AC Car — your city, your choice." },
  { icon: "📍", title: "Karachi Born",         desc: "Built for the streets of Karachi — every block, every lane." },
];

export const MOCK_DRIVER: MockDriver = {
  name: "Usman Raza",
  urduName: "عثمان رضا",
  rating: 4.8,
  trips: 1240,
  vehicle: "Suzuki Alto 2021",
  color: "White",
  plate: "KHI-5501",
  phone: "+92-300-1234567",
  avatar: "UR",
  eta: 4,
};