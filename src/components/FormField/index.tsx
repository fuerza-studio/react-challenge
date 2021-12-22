import React from 'react';
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from 'react-hook-form';

import TextField from '../TextField';

interface FormFieldProps<T> extends Partial<ControllerProps<T>> {
  hiddenLabel?: boolean;
  label?: string;
  placeholder?: string;
  name: Path<T>;
}

const FormField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  hiddenLabel,
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <TextField
        label={label}
        placeholder={placeholder}
        {...(hiddenLabel && { hiddenLabel: true })}
        onChange={onChange}
        value={value}
      />
    )}
  />
);

export default FormField;
