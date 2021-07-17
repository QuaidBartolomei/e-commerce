const routes = {
  index: '/',
  item: (id: string) => `/item/${id}`,
  category: (id: string) => `/category/${id}`,
  cart: '/cart',
  checkout: '/checkout',
  login: '/login',
  register: '/register',
  api: {
    items: (id: string = '') => `/api/items/${id}`,
    categories: (id: string = '') => `/api/categories/${id}`,
    login: '/api/login',
  },
};

export default routes;
