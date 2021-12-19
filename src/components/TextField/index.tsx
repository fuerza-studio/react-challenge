import React from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
} from '@mui/material';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

const StyledTextField = styled(MaterialTextField)<MaterialTextFieldProps>(
  ({ theme, hiddenLabel }) => ({
    minWidth: '100%',
    '& .MuiFormLabel-root': {
      fontSize: 12,
      fontWeight: 600,
      color: theme.palette.primary.dark,
      transform: 'translate(12px, 12px) scale(1)',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#736D6B',
      fontSize: 9,
      fontWeight: 400,
      transform: 'translate(12px, 7px) scale(0.75)',
    },
    '& .MuiFormLabel-filled': {
      color: '#736D6B',
      fontSize: 9,
      fontWeight: 400,
      transform: 'translate(12px, 7px) scale(0.75)',
    },
    '& .MuiInputBase-root': {
      fontSize: 12,
      fontFamily: 'Montserrat',
      fontWeight: hiddenLabel ? 600 : 400,
      border: '1px solid rgba(157, 164, 166, 0.07);',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: hiddenLabel ? 'rgba(255, 255, 255, 0.42)' : '#FFFFFF',
      color: theme.palette.primary.main,
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      input: {
        height: '0.417em',
        '&::placeholder': {
          color: `${theme.palette.primary.dark} !important`,
          opacity: 1,
        },
      },
      '&:hover': {
        backgroundColor: hiddenLabel ? 'rgba(255, 255, 255, 0.42)' : '#FFFFFF',
        border: '1px solid #80ccff',
      },
      '&.Mui-focused': {
        backgroundColor: hiddenLabel ? 'rgba(255, 255, 255, 0.42)' : '#FFFFFF',
        border: '1px solid #80ccff',
      },
    },
  })
);

const TextField: React.FC<MaterialTextFieldProps> = ({
  label = 'Label here',
  hiddenLabel,
  ...rest
}) => (
  <StyledTextField
    {...(!hiddenLabel && { label })}
    {...(hiddenLabel && { hiddenLabel: true })}
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...rest}
  />
);

export default TextField;
