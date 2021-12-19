import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from '@mui/material';

const StyledButton = styled(MaterialButton)<MaterialButtonProps>(
  ({ variant }) => ({
    fontSize: 14,
    fontFamily: 'Montserrat',
    textTransform: 'none',
    height: 40,
    borderRadius: 40,
    fontWeight: variant === 'outlined' ? 500 : 600,
    padding: variant === 'outlined' ? '11px 12px' : '11px 50px',
  })
);

const Button: React.FC<MaterialButtonProps> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
