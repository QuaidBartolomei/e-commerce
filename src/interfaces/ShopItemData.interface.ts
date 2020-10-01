export default interface CartItemData {
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
  id: string;
  category: ShopItemCategory;
  size: ClothingSize;
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
