export interface CartItemData {
  id: string;
  quantity: number;
}

export interface ShopItemData {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  category: ShopItemCategory;
  size: ClothingSize;
}

export type ClothingSize = 'S' | 'M' | 'L';
export type ShopItemCategory = 'Hat' | 'Shirt';

export const Categories: {
  category: ShopItemCategory;
  name: string;
}[] = [
  {
    category: 'Hat',
    name: 'Hats',
  },
  {
    category: 'Shirt',
    name: 'Shirts',
  },
];
