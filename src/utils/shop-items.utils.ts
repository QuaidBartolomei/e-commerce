import {
  Categories,
  ClothingSize,
  ShopItemCategory,
  ShopItemData,
} from 'interfaces/shop-item.interface';
import shortid from 'shortid';
import { randomValue } from './list.utils';
import { randomNumber } from './number.utils';
import * as db from 'utils/db.utils';

let images: {
  Hats: string[];
  Shirts: string[];
  Hoodies: string[];
} = {
  Hats: [
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Ffedora.jpg?alt=media&token=84bd83a0-c6ed-41eb-bab3-863262ebe778',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Flogo_cap.jpg?alt=media&token=8985498b-1ac3-451f-a200-44bea1e11b3e',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fribbon_hat.jpg?alt=media&token=87e09ab7-02d8-4e67-bf73-5b468a021b99',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Forange_hat.jpg?alt=media&token=7008b93b-9cf8-4c97-85d2-098af481dcc3',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fstriped_hat.jpg?alt=media&token=48a45031-ddd9-4783-b7e4-e84095100e6f',
  ],
  Shirts: [
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2FNnuAm0Ldz?alt=media&token=5dac7947-4b57-41da-a3f2-f063c3237ab4',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2F_HYFrT7jc?alt=media&token=096afeaf-51bc-41ac-8474-ca57f16406f9',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2FkxtqLLZHu?alt=media&token=d61d7248-d08d-4cd7-bbc2-e27a9a0cef84',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fyellow-shirt.jpg?alt=media&token=da28c3af-f44d-4df8-a396-e5d2bc74ae49',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fblack-shirt.jpg?alt=media&token=3fac520d-8326-4c20-9755-4ff3ca864dac',
  ],
  Hoodies: [
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fmens-sweaters.jpg?alt=media&token=2bdb9ec3-affd-4833-9094-52307f4dc65d',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fpexels-ro-han-1693420.jpg?alt=media&token=4adf766c-8db4-492b-9d8c-dbdbf51f00a3',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fpexels-aidan-jarrett-634785.jpg?alt=media&token=c48c56c6-3f8b-40e5-a2f7-24247d237884',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fpexels-bogdan-glisik-1661471.jpg?alt=media&token=71def95c-bf67-43a0-92d2-a287bad62d3f',
    'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/images%2Fpexels-luis-quintero-1689724.jpg?alt=media&token=0c4774f6-626b-42ca-a323-a63c7a6b82c2',
  ],
};

function randomPrice() {
  return randomNumber(10000) / 100;
}
export function generateShopItem(): ShopItemData {
  let category = randomValue(Categories);
  let sizes: ClothingSize[] = ['S', 'M', 'L'];
  let imageUrls = [
    images[category][randomNumber(images[category].length)],
    ...images[category],
  ];
  let price = randomPrice();
  let baseItemId = shortid.generate();
  let name = 'Dumb ' + category.substr(0, category.length - 1);
  let baseItem: ShopItemData = {
    category,
    id: baseItemId,
    imageUrls,
    name,
    price,
    sizes,
  };
  return baseItem;
}

export async function generateItemAndAddToDb() {
  let item = generateShopItem();
  await db.addShopItem(item);
  return console.log(item);
}