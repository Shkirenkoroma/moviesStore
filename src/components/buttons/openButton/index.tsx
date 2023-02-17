import { FC } from "react";
import "./style.css";

interface IOpenButtonProps {
	nameButton: string;
}

const OpenButton: FC<IOpenButtonProps> = ({ nameButton }) => {
	return (
		<div className="container">
			<button className="container__button">{nameButton}</button>
		</div>
	);
};

export default OpenButton;
