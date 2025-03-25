export interface Location {
    city: string;
    area: string;
    latitude: number;
    longitude: number;
}

export interface Property {
    title: string;
    description: string;
    price: number;
    currency: string;
    location: Location;
    size_sqm: number;
    bedrooms: number;
    bathrooms: number;
    parking_spaces: number;
    amenities: string[];
    images: string[];
    property_type: string;
    furnished: boolean;
    year_built: number;
    listing_type: "For Sale" | "For Rent";
}


export interface PropertyResponse extends Property {
    _id: string;
    created_at: string;
    updated_at: string;
}

export interface PropertyFilters {
  page?: number;
  limit?: number;
  location?: string;
  city?: string;
  area?: string;
  minPrice?: number;
  maxPrice?: number;
  minSize?: number;
  maxSize?: number;
  bedrooms?: number;
  bathrooms?: number;
  furnished?: boolean;
  property_type?: string;
  listing_type?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}
