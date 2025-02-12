import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";
import { loadGenre } from "services/api";
import { useLoadData } from "hooks/useLoadData";
import { Music } from "components/ui/Icons";
import { MainTitle, SmallText } from "components/ui/Typography";
import TracksTable from "components/TracksTable";
import { SongsCountWrapper, TextWrapper, Wrapper } from "./styled";

function Genre() {
  const { genreId } = useParams();
  const [genre, isLoading] = useLoadData(() => loadGenre(genreId));

  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>{genre?.genre?.name || <Skeleton width={200} />}</MainTitle>
        <SongsCountWrapper>
          <Music color={theme.colors.secondaryGrey} />
          <SmallText>
            {isLoading ? <Skeleton width={40} /> : `${genre?.tracks?.length} songs`}
          </SmallText>
        </SongsCountWrapper>
      </TextWrapper>
      <TracksTable isLoading={isLoading} tracks={genre?.tracks} />
    </Wrapper>
  );
}

export default Genre;
