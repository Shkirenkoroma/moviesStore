import "./style.css";
import { FC } from "react";
const RegButton: FC<any> = ({ onClick, disabled }): JSX.Element => {
	return (
		<div className="container">
			<button
				className="container__button"
				onClick={onClick}
				disabled={disabled}
			>
				 Зарегестрироваться
			</button>
		</div>
	);
};

export default RegButton;
