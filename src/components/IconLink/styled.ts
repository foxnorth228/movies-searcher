import { styled } from 'styled-components';

export const IconLink = styled.a<{ $image: string }>`
  display: block;
  width: 17px;
  height: 16px;
  margin-right: 27px;
  background-image: ${(props) => `url(${props.$image})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 1s linear;
  &:hover {
    transform: scale(1.5);
  }
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
  }
`;
