import styled from "styled-components";
import { device } from "styles/BreakPoints";
import {
  HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  MOBILE_PLAYER_HEIGHT,
  PLAYER_HEIGHT,
} from "common/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${HEADER_HEIGHT}px - ${PLAYER_HEIGHT}px);

  ${device.lg} {
    height: calc(100vh - ${MOBILE_HEADER_HEIGHT}px - ${MOBILE_PLAYER_HEIGHT}px);
  }
`;
