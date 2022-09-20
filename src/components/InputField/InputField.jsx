import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, InputStyled, InputWrapper } from './InputField.styled';

export const InputField = ({ children, ...other }) => {
  const {
    label,
    value,
    onChange,
    type,
    name,
    pattern,
    title,
    required = false,
  } = other;
  return (
    <>
      <InputWrapper>
        <InputLabel>{label}</InputLabel>
        <InputStyled
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required={required}
        />
        {children}
      </InputWrapper>
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};
