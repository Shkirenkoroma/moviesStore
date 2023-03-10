import { FC } from "react";
import { IButtonProps } from "types";
import "./style.css";

const Button: FC<IButtonProps> = ({
	nameButton,
	onClick,
	disabled,
	className
}): JSX.Element => {
	return (
		<button  className={className} disabled={disabled} onClick={onClick}>
			{nameButton}
		</button>
	);
};

export default Button;
