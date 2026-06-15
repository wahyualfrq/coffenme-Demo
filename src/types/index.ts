export type MenuCategory = 'main' | 'beverage';

export interface MenuItem {
  id: string;
  name: string;
  price: string; // e.g., 'Rp45.000' or can be number, let's keep it clean
  description?: string;
  image: string;
  category: MenuCategory;
}

export interface BusinessInfo {
  name: string;
  category: string;
  address: {
    street: string;
    subdistrict: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
  };
  whatsapp: {
    number: string;
    link: string;
  };
  instagram: {
    username: string;
    link: string;
  };
  operationalHours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
