import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Wrapper, ArtistsWrapper, ArtistSkeleonWrapper, ArtistLoaderWrapper } from "./styled";
import ArtistCard from "./ArtistCard";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

function Artists({ isLoading, artists }) {
  const { width } = useWindowSize();
  const isMobileLayout = width > breakpoints.md;

  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <ArtistLoaderWrapper key={num}>
              <Skeleton
                wrapper={ArtistSkeleonWrapper}
                key={num}
                height={isMobileLayout ? 95 : 75}
                width={isMobileLayout ? 95 : 75}
                circle
              />
              <Skeleton height={isMobileLayout ? 27 : 19} />
            </ArtistLoaderWrapper>
          ))}
        <Swiper slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            artists?.map((artist) => (
              <SwiperSlide key={artist.id} style={{ width: "auto" }}>
                <ArtistCard name={artist.name} image={artist.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistsWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;
