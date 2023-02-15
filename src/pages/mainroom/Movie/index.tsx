import "./style.css";

const Movie = ({ item, setDataMovie }: any) => {

	return (
		<div className="movieBox" onClick={setDataMovie}>
			<div className="movieBox__fullTitle">{item.fullTitle}</div>
			<div className="movieBox__image">
				<img src={item.image} alt="label" />
			</div>
			<div className="movieBox__crew">{item.crew}</div>
			<div className="describe">
				<div className="movieBox__imDbRating">Рейтинг: {item.imDbRating}</div>
				<div className="movieBox__year">Год выпуска: {item.year}</div>
			</div>
			
		</div>
	);
};

export default Movie;
