import styled from "styled-components";

//STYLE

export const Title = styled.h1`
  color: #403b7b;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Save = styled.button`
  background-image: linear-gradient(177deg, #7638c6 0%, #3710e6 100.41%);

  color: white;
  padding: 0.5rem;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1rem;

  cursor: pointer;

  border-radius: 10px;

  &:hover {
    background-image: linear-gradient(177deg, #7638c6 0%, #3710e6 100.41%);
  }
`;

export const CloseModal = styled.button`
  background-color: transparent;

  padding: 0.5rem;

  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;
`;

