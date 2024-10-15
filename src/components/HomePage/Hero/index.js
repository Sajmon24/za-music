import DesktopRadioImage from "assets/images/radio-desktop.png";
import { PlayButton, TextWrapper, Wrapper } from "./styled";
import { ButtonText, MainTitle, Text } from "components/ui/Typography";
import { Play } from "components/ui/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle> Radio </MainTitle>
        <Text> Pick your mood. We will play a perfect mix! </Text>
        <PlayButton>
          <Play />
          <ButtonText> Play </ButtonText>
        </PlayButton>
      </TextWrapper>
      <img src={DesktopRadioImage} alt="Hands holding radio" />
    </Wrapper>
  );
}

export default Hero;
