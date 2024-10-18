import Slider from "rc-slider";
import { ContentWrapper } from "components/Layout";
import { Text } from "components/ui/Typography";
import {
  Wrapper,
  TrackInfoWrapper,
  TrackImage,
  TrackInfoTextWrapper,
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
} from "./styled";
import IconButton from "components/ui/IconButton";
import { Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import { theme } from "styles/Theme";

const track = {
  id: 1926829907,
  title: "WOW",
  title_short: "WOW",
  title_version: "",
  link: "https://www.deezer.com/track/1926829907",
  duration: 143,
  rank: 499252,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview:
    "https://cdnt-preview.dzcdn.net/api/1/1/6/7/4/0/6747a054d2ccfdb9b7576969ccc27ab0.mp3?hdnea=exp=1729242468~acl=/api/1/1/6/7/4/0/6747a054d2ccfdb9b7576969ccc27ab0.mp3*~data=user_id=0,application_id=42~hmac=a9e634672e9c628a6ae3b5450520f447bb69765cb8662a4801fc4e58260e474a",
  md5_image: "fa95f881444bd00a203540479e61da0b",
  position: 1,
  artist: {
    id: 7656150,
    name: "Toby Romeo",
    link: "https://www.deezer.com/artist/7656150",
    picture: "https://api.deezer.com/artist/7656150/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/b3d75fd8dbfc6ae737909cccd8000740/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/b3d75fd8dbfc6ae737909cccd8000740/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/b3d75fd8dbfc6ae737909cccd8000740/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/b3d75fd8dbfc6ae737909cccd8000740/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/7656150/top?limit=50",
    type: "artist",
  },
  album: {
    id: 359481347,
    title: "WOW",
    cover: "https://api.deezer.com/album/359481347/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/fa95f881444bd00a203540479e61da0b/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/fa95f881444bd00a203540479e61da0b/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/fa95f881444bd00a203540479e61da0b/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/fa95f881444bd00a203540479e61da0b/1000x1000-000000-80-0-0.jpg",
    md5_image: "fa95f881444bd00a203540479e61da0b",
    tracklist: "https://api.deezer.com/album/359481347/tracks",
    type: "album",
  },
  type: "track",
};

function Player() {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfoWrapper>
          <TrackImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
          <TrackInfoTextWrapper>
            <Text>{track?.title}</Text>
            <ArtistName>{track?.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton width={35} height={35}>
            <SkipLeft />
          </IconButton>
          <IconButton width={55} height={55} withBackground>
            <Play />
          </IconButton>
          <IconButton width={35} height={35}>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>0:00</TrackTime>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime>2:30</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton width={24} height={24}>
            <Volume />
          </IconButton>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Player;
