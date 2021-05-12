import styled from "styled-components";
import { backgroundCard } from '../../constants/colors'

export const HeaderContainer = styled.header`
  height: 8vh;
  background: ${ backgroundCard };
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

export const LeftHeaderButton = styled.button`
  position: absolute;
  left: 10px;
`;

export const RightHeaderButton = styled.button`
  position: absolute;
  right: 10px;
`;

export const RegionsButton = styled.button`
  position: absolute;
  left: 200px;
`;