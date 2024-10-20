import PropTypes from "prop-types";
import { StyledButton } from "./styled";

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
Button.proTypes = {
  children: PropTypes.node,
};

export default Button;
