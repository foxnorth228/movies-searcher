import { css } from 'styled-components';

export const Skeleton = css`
  background: linear-gradient(
    to right,
    #e0e0e0 0%,
    #e0e0e0 35%,
    #f0f0f0 50%,
    #d8d8d8 50%,
    #d8d8d8 100%
  );
  background-size: 200% 100%;
  background-position-x: right;
  animation: skeleton 1.2s ease-out infinite;

  @keyframes skeleton {
    from {
      background-position-x: right;
    }
    to {
      background-position-x: left;
    }
  }
`;
