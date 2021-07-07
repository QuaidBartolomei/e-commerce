const routes = {
  item: (id: string) => `/item/${id}`,
  category: (id: string) => `/category/${id}`,
  api: {
    items: (id: string = '') => `/api/items/${id}`,
    categories: (id: string = '') => `/api/categories/${id}`,
  },
};

export default routes;
