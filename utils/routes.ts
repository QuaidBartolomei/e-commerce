const routes = {
  index: '/',
  item: (id: string) => `/item/${id}`,
  category: (id: string) => `/category/${id}`,
  cart: '/cart',
  api: {
    items: (id: string = '') => `/api/items/${id}`,
    categories: (id: string = '') => `/api/categories/${id}`,
  },
};

export default routes;
