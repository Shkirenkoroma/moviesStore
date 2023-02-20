import { FC } from "react";
import "./style.css";

interface IOpenButtonProps {
	nameButton?: string;
	onClick?: any;
	disabled?: boolean;
	className?: string;
}

const Button: FC<IOpenButtonProps> = ({
	nameButton,
	onClick,
	disabled,
	className,
}) => {
	return (
		<div className="container">
			<button className={className} disabled={disabled} onClick={onClick}>
				{nameButton}
			</button>
		</div>
	);
};

export default Button;
