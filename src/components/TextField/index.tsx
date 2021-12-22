import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  TextField as MaterialTextField,
  TextFieldProps as MaterialTextFieldProps,
  Typography,
} from '@mui/material';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { FieldError } from 'react-hook-form';

type TextFieldProps = MaterialTextFieldProps & {
  hookFormError?: FieldError | null;
  maxLength?: number;
};

const StyledTextField = styled(MaterialTextField)<MaterialTextFieldProps>(
  ({ theme, hiddenLabel, error }) => ({
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
      ...(error && {
        border: '1px solid red',
      }),
      input: {
        height: '0.417em',
        '&::placeholder': {
          color: `${theme.palette.primary.dark} !important`,
          opacity: 1,
        },
      },
      textarea: {
        '&::placeholder': {
          color: `${theme.palette.primary.dark} !important`,
          opacity: 1,
        },
      },
      // fix white box on input when hiddenLabel is false
      ...(!hiddenLabel && {
        input: {
          padding: '16px 10px',
          paddingTop: '22px',
          boxSizing: 'border-box',
        },
        span: {
          display: 'none',
        },
      }),
      '&:hover': {
        backgroundColor: hiddenLabel ? 'rgba(255, 255, 255, 0.42)' : '#FFFFFF',
        border: '1px solid #80ccff',
      },
      '&.Mui-focused': {
        backgroundColor: hiddenLabel ? 'rgba(255, 255, 255, 0.42)' : '#FFFFFF',
        border: '1px solid #80ccff',
        fieldset: {
          border: 'none',
        },
      },
    },
  })
);

const TextField: React.FC<TextFieldProps> = ({
  label = 'Label here',
  hiddenLabel,
  hookFormError,
  maxLength,
  rows,
  ...rest
}) => (
  <Box
    sx={{
      height: rows ? '100%' : '55px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <StyledTextField
      {...(!hiddenLabel && { label })}
      {...(rows && { rows })}
      {...(hiddenLabel && { hiddenLabel: true })}
      InputProps={
        {
          disableUnderline: true,
        } as Partial<OutlinedInputProps>
      }
      inputProps={{
        ...(maxLength && { maxLength: maxLength }),
      }}
      error={!!hookFormError}
      {...rest}
    />
    {hookFormError && (
      <Typography sx={{ fontSize: 10, color: 'red', marginLeft: '2px' }}>
        {hookFormError.message}
      </Typography>
    )}
  </Box>
);

export default TextField;
