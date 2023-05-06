import { FC } from "react";
import { ICheckbox } from "types";

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
