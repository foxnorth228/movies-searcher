import { styled } from 'styled-components';

export const Logo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: start;
`;

export const Logo__Icon = styled.i<{ $logoPath: string }>`
  display: block;
  width: calc(1.5rem * 29 / 21);
  height: 1.5rem;
  background: url(${(props) => props.$logoPath});
  margin-right: 0.2rem;
`;
