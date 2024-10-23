import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useWindowSize } from "hooks/useWindowSize";
import { theme } from "styles/Theme";
import { loadArtist } from "services/api";
import { breakpoints } from "styles/BreakPoints";
import { Music } from "components/ui/Icons";
import { MainTitle, SectionTitle, SmallText } from "components/ui/Typography";
import TracksTable from "components/TracksTable";
import {
  ArtistImage,
  ArtistImageLoaderWrapper,
  ArtistInfoWrapper,
  FansCountWrapper,
  TextWrapper,
  Wrapper,
} from "./styled";

function Artist() {
  const { width } = useWindowSize();
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const artist = await loadArtist(artistId);
        setArtist(artist);
      } catch (err) {
        toast.error(err.message);
        //
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <Wrapper>
      <ArtistInfoWrapper>
        {artist ? (
          <ArtistImage src={artist?.artist?.picture_big} alt={`${artist?.artist?.name}'s photo`} />
        ) : (
          <Skeleton
            width={width < breakpoints.md ? "100%" : 350}
            height={width < breakpoints.md ? 176 : 350}
            borderRadius={25}
            wrapper={ArtistImageLoaderWrapper}
          />
        )}
        <TextWrapper>
          <MainTitle>{artist?.artist?.name || <Skeleton width={200} />}</MainTitle>
          <FansCountWrapper>
            <Music color={theme.colors.secondaryGrey} />
            <SmallText>
              {isLoading ? <Skeleton width={40} /> : `${artist?.artist?.nb_fan} Fans`}
            </SmallText>
          </FansCountWrapper>
        </TextWrapper>
      </ArtistInfoWrapper>
      <div>
        <SectionTitle>Top Tracks</SectionTitle>
        <TracksTable isLoading={isLoading} tracks={artist?.tracks} />
      </div>
    </Wrapper>
  );
}

export default Artist;
