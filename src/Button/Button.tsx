import { ButtonHTMLAttributes } from "react";
import Styled from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => (
  <Styled.Button>{text}</Styled.Button>
);

export default Button;
