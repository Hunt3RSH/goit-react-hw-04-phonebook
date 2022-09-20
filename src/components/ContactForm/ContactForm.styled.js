import styled from 'styled-components';

export const ContactFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContactFormButton = styled.button`
  border: none;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  :hover,
  :focus {
    background: #ffa680;
  }
`;
