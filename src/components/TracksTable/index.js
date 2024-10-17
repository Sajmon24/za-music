import PropTypes from "prop-types";
import { SubText } from "components/ui/Typography";
import {
  Line,
  SongNumberText,
  StyledIconButton,
  Table,
  TableData,
  TableHead,
  TableHeading,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWrapper,
  TrackSubtext,
  TrackTitle,
  TableHeadingTime,
} from "./styled";
import { Heart } from "components/ui/Icons";
import { formatSecondsToMSS } from "utils/time";

function TracksTable({ tracks }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeading>
            <SubText>#</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Song name</SubText>
          </TableHeading>
          <TableHeadingTime>
            <SubText>Time</SubText>
          </TableHeadingTime>
          <TableHeading>
            <SubText>Album name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Action</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {tracks?.map((track, index) => (
          <tr key={track.id}>
            <TableData>
              <SongNumberText>{String(index + 1).padStart(2, "0")}</SongNumberText>
            </TableData>
            <TrackInfo>
              <TrackInfoImage src={track.album.cover} alt={`${track.album.name}'s cover`} />
              <TrackInfoTextWrapper>
                <TrackTitle>{track.title}</TrackTitle>
                <TrackSubtext>{track.artist.name}</TrackSubtext>
              </TrackInfoTextWrapper>
            </TrackInfo>
            <TableData>
              <SubText>{formatSecondsToMSS(track.duration)}</SubText>
            </TableData>
            <TableData>
              <TrackSubtext>{track.album.title}</TrackSubtext>
            </TableData>
            <TableData>
              <StyledIconButton width={25} height={25}>
                <Heart />
              </StyledIconButton>
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
};

export default TracksTable;
