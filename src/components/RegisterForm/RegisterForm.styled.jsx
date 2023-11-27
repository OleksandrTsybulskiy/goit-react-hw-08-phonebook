import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  display: block;
  width: inherit;
  margin-bottom: 10px;
  margin-top: 7px;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  color: var(--text);
  border: var(--text);
  background-color: var(--section);
  outline: transparent;
  border-radius: 20px;
  padding: 10px 20px;
`;
