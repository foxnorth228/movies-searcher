import { styled } from 'styled-components';

export const Switcher = styled.label`
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  background: transparent;
  border: 1px solid #fd7e14;
  border-radius: 0.75rem;
  overflow: hidden;
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
`;

export const Switcher__Input = styled.input`
  display: none;
`;

export const Switcher__Slider = styled.span`
  z-index: -1;
  display: block;
  width: 2.5rem;
  height: 1.5rem;
  background-color: transparent;
  position: absolute;
  left: -1px;
  top: -1px;
  transition: background-color 0.3s linear;
  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #fd7e14;
    border-radius: 50%;
    background-color: white;
    transform: translateX(0);
    transition:
      transform 0.3s linear,
      background-color 0.3s linear;
  }
  ${Switcher}:hover > &:before {
    background-color: #dcdcdc;
  }
  ${Switcher__Input}:checked + & {
    background-color: #fd7e14;
  }
  ${Switcher__Input}:checked + &:before {
    transform: translateX(1rem);
  }
`;
