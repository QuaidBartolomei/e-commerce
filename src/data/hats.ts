import fedora from 'assets/hats/fedora.jpg';
import orange_hat from 'assets/hats/orange_hat.jpg';
import ribbon_hat from 'assets/hats/ribbon_hat.jpg';
import striped_hat from 'assets/hats/striped_hat.jpg';
import cap from 'assets/hats/logo_cap.jpg';
import { ShopItemData } from 'pages/Shop/Shop';
import shortid from 'shortid';

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
