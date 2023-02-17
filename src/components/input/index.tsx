import { FC } from "react";
import "./style.css";

interface IInputProps {
	placeholder?: string;
	value?: string | number;
	setValue?: any;
	id?: string;
	type?: string;
	className: string;
	name?: string;
	onBlur?: any;
	setEmailDirty?: any;
	onChange?: any;
}

const Input: FC<IInputProps> = ({
	placeholder,
	value,
	id,
	type,
	className,
	name,
	onBlur,
	onChange,
	setValue,
}): JSX.Element => {
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
