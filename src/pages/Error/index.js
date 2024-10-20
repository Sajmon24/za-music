import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styled";
import { ButtonText, SectionTitle } from "components/ui/Typography";
import Button from "components/ui/Button";

export function Error({ isErrorPage }) {
  const navigate = useNavigate();

  if (isErrorPage) {
    return (
      <Wrapper>
        <SectionTitle>Something went wrong :(</SectionTitle>
        <Button onClick={() => navigate(0)}>
          <ButtonText>Go back</ButtonText>
        </Button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <SectionTitle>Page was not found :(</SectionTitle>
    </Wrapper>
  );
}

Error.protoTypes = {
  isErrorPage: PropTypes.bool,
};

export default Error;
