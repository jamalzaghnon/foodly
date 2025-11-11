
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: number;
  priceRange: '$' | '$$' | '$$$';
  imageUrl: string;
  logoUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Cuisine {
  name: string;
  imageUrl: string;
}
