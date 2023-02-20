import { FC } from "react";
import { IInputProps } from "types";
import "./style.css";

const Input: FC<IInputProps> = ({ placeholder, value, id, type, className, name, onBlur, setValue }): JSX.Element => {
	
	return (
		<div className="container">
			<input
				className={className}
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={setValue}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default Input;
