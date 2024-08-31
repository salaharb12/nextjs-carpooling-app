// app/lib/types.ts

export interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    ridesOffered: number;
    ridesTaken: number;
  }
  
  export interface Ride {
    id: string;
    from: string;
    to: string;
    date: string;
    price: number;
    seats: number;
    driver: User;
    passengers: User[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface RideFormData {
    from: string;
    to: string;
    date: string;
    price: string;
    seats: string;
  }
  
  export interface SearchParams {
    from?: string;
    to?: string;
    date?: string;
    minSeats?: number;
  }