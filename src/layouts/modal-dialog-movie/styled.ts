import { styled } from 'styled-components';
import Skeleton from '@utils/styled-skeleton';

export const ModalDialogMovie = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(75, 75, 75, 0.8);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDialogMovie__Content = styled.article<{ $width: number }>`
  width: ${(props) => props.$width};
  height: ${(props) => (props.$width / 4) * 3};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDialogMovie__Video = styled.iframe<{ $width: number }>`
  width: ${(props) => props.$width};
  height: ${(props) => (props.$width / 4) * 3};
  border: none;
`;

export const ModalDialogMovie__ErrorMessage = styled.h1`
  padding: 0.75rem 0.25rem;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 2rem;
  color: white;
  text-align: center;
`;

export const Modal__Fallback = styled.article`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Modal__Fallback_Image = styled.div`
  width: 100%;
  height: 100%;
  ${Skeleton}
`;
