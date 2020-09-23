import fedora from 'assets/hats/fedora.jpg';
import orange_hat from 'assets/hats/orange_hat.jpg';
import ribbon_hat from 'assets/hats/ribbon_hat.jpg';
import striped_hat from 'assets/hats/striped_hat.jpg';
import cap from 'assets/hats/logo_cap.jpg';
import shortid from 'shortid';
import { ShopItemData } from 'interfaces/ShopItemData.interface';
import black_shirt from 'assets/shirts/black-shirt.jpg';
import blue_shirt from 'assets/shirts/blue-shirt.jpg';
import pink_shirt from 'assets/shirts/pink-shirt.jpg';
import plaid_shirt from 'assets/shirts/plaid-shirt.jpg';
import yellow_shirt from 'assets/shirts/yellow-shirt.jpg';

export const hatData: ShopItemData[] = [
  {
    imageUrl: fedora,
    name: 'Fedora',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: orange_hat,
    name: 'Fedora',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: ribbon_hat,
    name: 'Fedora',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: cap,
    name: 'Fedora',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: striped_hat,
    name: 'Fedora',
    price: 25,
    id: shortid.generate(),
  },
];


export const shirtData: ShopItemData[] = [
  {
    imageUrl: black_shirt,
    name: 'Black Shirt',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: blue_shirt,
    name: 'Blue Shirt',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: pink_shirt,
    name: 'Pink Shirt',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: plaid_shirt,
    name: 'Plaid Shirt',
    price: 25,
    id: shortid.generate(),
  },
  {
    imageUrl: yellow_shirt,
    name: 'Yellow Shirt',
    price: 25,
    id: shortid.generate(),
  },
];