import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { device } from "styles/BreakPoints";
import Header from "components/Header";
import Player from "components/Player";

export const ContentWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 120px;
  width: 100%;

  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.items || "flex-start"};
  justify-content: ${(props) => props.content || "start"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"}px;

  ${device.md} {
    padding: 0 15px;
  }

  ${device.xl} {
    padding: 0 62px;
  }
`;

function Layout() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Player />
    </>
  );
}

export default Layout;
