export type ClothingSize = 'S' | 'M' | 'L';
export type ShopItemCategory = 'Hats' | 'Shirts' | 'Hoodies';

export interface Product {
  id: string;
  imageUrls: string[];
  name: string;
  price: number;
  category: ShopItemCategory;
  inventory: ProductInventory[];
}

interface ProductOptions {
  color: string;
  size: string;
}

export interface ProductInventory extends ProductOptions {
  stock: number;
}

export const Categories: ShopItemCategory[] = ['Hats', 'Shirts', 'Hoodies'];

export interface CartItemData extends ProductOptions {
  id: string;
  quantity: number;
}
