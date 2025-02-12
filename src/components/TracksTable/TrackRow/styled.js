import styled from "styled-components";
import { device } from "styles/BreakPoints";
import { SubText, Text } from "components/ui/Typography";
import IconButton from "components/ui/IconButton";

export const TableData = styled.td`
  padding: 10px 20px 10px 0;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const TrackSubtext = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  align-items: center;
  gap: 25px;

  ${device.md} {
    gap: 10px;
  }
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px 10px 0;

  ${device.md} {
    gap: 2px;
  }
`;

export const TrackInfoImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;

  ${device.md} {
    height: 45px;
    width: 45px;
    border-radius: 10px;
  }
`;

export const StyledTrackRow = styled.tr`
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    .text {
      display: none;
    }

    .icon {
      display: block;
    }

    background-color: ${({ theme }) => theme.colors.lightWhite};
  }
  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 15px;
  }
  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const SongNumberText = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const IconWrapper = styled.div`
  display: none;
  width: 20px;
  height: 20px;
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;
