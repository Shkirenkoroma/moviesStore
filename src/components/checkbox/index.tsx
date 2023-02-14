import "./style.css";
import { FC } from "react";

interface ICheckbox {
	id: string;
	type: string;
	checked: boolean;
	setChecked: any;
}

const Checkbox: FC<ICheckbox> = ({ checked, setChecked }): JSX.Element => {
	return (
		<input
			type="checkbox"
			id="checkbox"
			checked={checked}
			onChange={setChecked}
		/>
	);
};

export default Checkbox;
