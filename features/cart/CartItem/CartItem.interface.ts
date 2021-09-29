import { Product } from 'features/shop-item/shopItem.interface';

export interface CartItem extends Product {
  id: string;
  quantity: number;
  color: string;
  size: string;
}
