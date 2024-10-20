import styled from "styled-components";
import { HEADER_HEIGHT } from "common/constants";

export const Wrapper = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 0px 0px 25px 25px;
  height: ${HEADER_HEIGHT}px;
`;
export const LogoWrapper = styled.header`
  display: flex;
  gap: 20px;
`;
