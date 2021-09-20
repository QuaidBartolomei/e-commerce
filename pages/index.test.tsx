import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';

describe('Index page', () => {
  it('renders index page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getByText('Hats')).toBeInTheDocument();
  });
});
