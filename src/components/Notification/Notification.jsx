import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './Notification.styled';

export const Notification = ({ message }) => <Paragraph>{message}</Paragraph>;

Notification.propTypes = {
  message: PropTypes.string,
};
