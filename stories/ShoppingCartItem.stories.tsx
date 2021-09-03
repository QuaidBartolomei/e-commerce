import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CartItemData } from '../interfaces/shopItem.interface';
import React from 'react';
import ShoppingCartItem from '../components/Cart/CartItem/ShoppingCartItem';
import Box from '@material-ui/system/Box';

const sampleData: CartItemData[] = [
  {
    category: 'Hats',
    id: '1',
    quantity: 2,
    color: 'black',
    size: 'large',
    imageUrls: [
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
    ],
    name:
      'Anniversary Gift for Him,Personalized Wallet,Mens Wallet,Engraved Wallet,Leather Wallet,Custom Wallet,Boyfriend Gift for Men,Gift for Dad ',
    price: 40.3,
    inventory: [
      {
        color: 'black',
        size: 'large',
        stock: 3,
      },
    ],
  },
  {
    category: 'Hats',
    id: '1',
    quantity: 2,
    color: 'black',
    size: 'large',
    inventory: [
      {
        color: 'black',
        size: 'large',
        stock: 3,
      },
    ],
    imageUrls: [
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
    ],
    name:
      'Anniversary Gift for Him,Personalized Wallet,Mens Wallet,Engraved Wallet,Leather Wallet,Custom Wallet,Boyfriend Gift for Men,Gift for Dad ',
    price: 40.3,
  },
  {
    category: 'Hats',
    id: '1',
    quantity: 2,
    color: 'black',
    size: 'large',
    inventory: [
      {
        color: 'black',
        size: 'large',
        stock: 3,
      },
    ],
    imageUrls: [
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
      'https://picsum.photos/300/600',
    ],
    name:
      'Anniversary Gift for Him,Personalized Wallet,Mens Wallet,Engraved Wallet,Leather Wallet,Custom Wallet,Boyfriend Gift for Men,Gift for Dad ',
    price: 40.3,
  },
];

export default {
  title: 'Example/ShoppingCartItem',
  component: ShoppingCartItem,
} as ComponentMeta<typeof ShoppingCartItem>;

const Template: ComponentStory<typeof ShoppingCartItem> = args => (
  <ShoppingCartItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: sampleData[0],
};

export const Multiple = () => (
  <Box>
    <ShoppingCartItem item={sampleData[0]} />
    <ShoppingCartItem item={sampleData[1]} />
    <ShoppingCartItem item={sampleData[2]} />
  </Box>
);
