import styled, { css } from "styled-components";

export const ContainerMob = styled.section`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')}; 
  color: blue;

  font-size: 2rem;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 15rem 0 0 0;
  z-index: 5;
  align-items: center;
  justify-content: center;
  position: fixed;

  background-color: rgba(36, 36, 36, 0.836);

  opacity: 0;
  transition: opacity 0.2s;

  ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    color: blue;
  `} 
`;  
 