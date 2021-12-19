import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Link as MaterialLink,
  LinkProps as MaterialLinkProps,
} from '@mui/material';

interface LinkProps extends MaterialLinkProps {
  type?: 'primary' | 'secondary' | 'terciary';
}

export const LinkBehavior = React.forwardRef<
  any,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const StyledLink = styled(MaterialLink)<LinkProps>(
  ({ type, theme }) => {
    switch (type) {
      case 'secondary':
        return {
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'Montserrat',
          color: theme.palette.primary.main,
        };
      case 'terciary':
        return {
          fontSize: 12,
          fontWeight: 400,
          fontFamily: 'Montserrat',
          color: '#6E3421',
        };
      default:
      case 'primary':
        return {
          fontSize: 14,
          fontWeight: 600,
          fontFamily: 'Montserrat',
          color: theme.palette.primary.dark,
        };
    }
  },
  {
    cursor: 'pointer',
  }
);

const Link: React.FC<LinkProps> = ({
  children,
  type = 'primary',
  ...props
}) => (
  <StyledLink type={type} {...props}>
    {children}
  </StyledLink>
);

LinkBehavior.displayName = 'LinkBehavior';
export default Link;
