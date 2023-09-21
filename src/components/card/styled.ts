import { styled } from 'styled-components';
import Skeleton from '@utils/styled-skeleton';

export const Card = styled.article`
  position: relative;
  width: 100%;
  max-width: 15rem;
  min-height: 15rem;
`;

export const Card__Content = styled.div<{ $isVisible: boolean; $isLoadedImage: boolean }>`
  display: ${(props) => (props.$isLoadedImage ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  transition:
    box-shadow 0.2s linear,
    opacity 1s linear;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 var(--card-box-shadow);
  }
`;

export const Card__Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Card__Title = styled.h3`
  font-family: Roboto, serif;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 1.25rem 0 0;
`;

export const Card__DescriptionBlock = styled.div`
  display: block;
`;

export const Card__Description = styled.span`
  font-family: Roboto, serif;
  font-size: 0.85rem;
`;

export const Card__Fallback = styled.article`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Card__Fallback_Image = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  ${Skeleton}
`;

export const Card__Fallback_Text = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0);
  font-size: 1rem;
  line-height: 1;
  ${Skeleton}
`;
