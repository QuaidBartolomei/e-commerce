export default interface CartItemData {
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
  id: string;
  category: ShopItemCategory;
}

export interface ShopItemData {
  imageUrl: string;
  name: string;
  price: number;
  id: string;
  category: ShopItemCategory;
}

export type ClothingSize = 'S' | 'M' | 'L';
export type ShopItemCategory = 'Hat' | 'Shirt';
