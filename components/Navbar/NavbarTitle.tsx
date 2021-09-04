import Link from 'components/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import routes from 'utils/routes';
import Logo from './Logo';

const NavbarTitle = ({ title }: { title?: string }) => {
  title = title || 'Clothing';
  const CompanyLogo = () => (
    <Logo height='32px' width='32px' stroke='white' strokeWidth={2} />
  );

  return (
    <Link
      href={routes.index}
      color='inherit'
      sx={{
        flex: 1,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '>*': {
          pl: 1,
        },
      }}
      underline='none'
    >
      <CompanyLogo />
      <Typography component='h1' variant='h5' align='center' noWrap>
        {title}
      </Typography>
    </Link>
  );
};

export default NavbarTitle;
