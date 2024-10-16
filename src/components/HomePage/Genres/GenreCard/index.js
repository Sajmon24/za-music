import PropTypes from "prop-types";

import { SectionSubtitle } from "components/ui/Typography";
import { Wrapper } from "./styled";

function GenreCard({ backgroundImage, name }) {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <SectionSubtitle>{name}</SectionSubtitle>
    </Wrapper>
  );
}
GenreCard.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};
export default GenreCard;
