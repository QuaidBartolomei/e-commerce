export interface CartItemData {
  id: string;
  quantity: number;
}

export interface ShopItemData {
  id: string;
  imageUrls: string[];
  name: string;
  price: number;
  category: ShopItemCategory;
  sizes: ClothingSize[];
}

export type ClothingSize = 'S' | 'M' | 'L';
export type ShopItemCategory = 'Hats' | 'Shirts' | 'Hoodies';

export const Categories: ShopItemCategory[] = [
  'Hats',
  'Shirts',
  'Hoodies'
]