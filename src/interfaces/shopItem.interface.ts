export type ClothingSize = 'S' | 'M' | 'L';
export type ShopItemCategory = 'Hats' | 'Shirts' | 'Hoodies';

export interface ItemData {
  id: string;
  imageUrls: string[];
  name: string;
  price: number;
  category: ShopItemCategory;
  sizes: ClothingSize[];
}

export const Categories: ShopItemCategory[] = ['Hats', 'Shirts', 'Hoodies'];

export interface CartItemData {
  id: string;
  quantity: number;
}