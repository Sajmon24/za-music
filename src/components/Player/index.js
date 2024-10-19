import Slider from "rc-slider";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { actions } from "context/actions";
import { ContentWrapper } from "components/Layout";
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
  TrackTitle,
} from "./styled";
import IconButton from "components/ui/IconButton";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import { theme } from "styles/Theme";
import { formatSecondsToMSS } from "utils/time";

function Player() {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);
  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.7,
  });
  const audioRef = useRef();

  const togglePlay = () => dispatch({ type: actions.TOGGLE_PLAY });

  const handlePrevSong = () => dispatch({ type: actions.PREV_SONG });
  const handleNextSong = () => dispatch({ type: actions.NEXT_SONG });

  const onTimeUpdate = () => {
    if (!audioRef?.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  const onTrackTimeDrag = (newTime) => {
    if (!audioRef?.current) return;

    audioRef.current.currentTime = newTime;
    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 1;
    onVolumeChange(newVolume);
  };

  const onVolumeChange = (newVolume) => {
    if (!audioRef?.current) return;

    audioRef.current.volume = newVolume;
    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  useEffect(() => {
    if (!audioRef?.current) return;

    if (isPlaying) {
      audioRef?.current.play().catch((err) => console.log(err));
    } else {
      audioRef?.current.pause();
    }
  }, [audioRef, track, isPlaying]);

  if (!track) {
    return null;
  }

  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center">
        <audio
          ref={audioRef}
          src={track?.preview}
          controls
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onTimeUpdate}
          hidden
          onEnded={handleNextSong}
        />
        <TrackInfoWrapper>
          <TrackImage src={track?.album.cover} alt={`${track?.album.title}'s cover`} />
          <TrackInfoTextWrapper>
            <TrackTitle>{track?.title}</TrackTitle>
            <ArtistName>{track?.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton onClick={handlePrevSong} width={35} height={35}>
            <SkipLeft />
          </IconButton>
          <IconButton onClick={togglePlay} width={55} height={55} withBackground>
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton onClick={handleNextSong} width={35} height={35}>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>{formatSecondsToMSS(playerState.currentTime)}</TrackTime>
          <Slider
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            onChange={onTrackTimeDrag}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{ border: "none", backgroundColor: theme.colors.white, marginTop: -3 }}
          />
          <TrackTime>{formatSecondsToMSS(playerState.duration)}</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton onClick={toggleVolume} width={24} height={24}>
            <Volume />
          </IconButton>
          <Slider
            step={0.01}
            min={0}
            max={1}
            value={playerState.volume}
            onChange={onVolumeChange}
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
