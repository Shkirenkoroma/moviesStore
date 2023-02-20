export type StringQuery = string;

export interface IResponseMovieCard {
	movies: {id: string;
	fullTitle: string;
	crew: string;
	title: string;
	year: string;
	imDbRating: string;}
}

export interface IResponseReviews {
	 username: string; date: string; content: string ;
}

export interface IResponseApi {
	response: IResponseMovieCard[];
}

export interface IButtonProps {
	nameButton?: string;
	onClick?: any;
	disabled?: boolean;
	className?: string;
}

export interface ICheckbox {
	id: string;
	type: string;
	checked: boolean;
	setChecked: any;
}

export interface IInputProps {
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

export interface ILocalStorage {
	email: string;
	password: string;
}

export interface IModalProps {
	modalActive: boolean;
	setModalActive: (modalActive: boolean) => void;
}

export interface IStateReviews{
	username: string; date: string; content: string
}

export interface IMovieProps {
	item: {
		id: string;
		fullTitle: string;
		crew: string;
		title: string;
		year: string;
		image: string;
		imDbRating: string;
	};
	setDataMovie: () => void;
}

export interface ResponseGenerator {
	data?: any;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
}
