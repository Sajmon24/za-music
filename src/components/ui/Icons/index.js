import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as ArrowRightIcon } from "assets/icons/arrow-right.svg";
import { ReactComponent as MusicIcon } from "assets/icons/music.svg";
import { ReactComponent as SkipIcon } from "assets/icons/skip.svg";
import { ReactComponent as VolumeIcon } from "assets/icons/volume.svg";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as PauseIcon } from "assets/icons/pause.svg";
import { ReactComponent as UsersIcon } from "assets/icons/users.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const SkipLeft = styled(SkipIcon)`
  fill: ${(props) => props.color || "white"};
`;

const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const SkipRight = styled(SkipLeft)`
  transform: rotate(180deg);
`;

const Volume = styled(VolumeIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Music = styled(MusicIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const ArrowRight = styled(ArrowRightIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);
`;

const Users = styled(UsersIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Heart = styled(HeartIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Search = styled(SearchIcon)`
  fill: ${(props) => props.color || "white"};
`;
export {
  Logo,
  Play,
  SkipLeft,
  Pause,
  SkipRight,
  Volume,
  Music,
  ArrowLeft,
  ArrowRight,
  Users,
  Heart,
  Search,
};
