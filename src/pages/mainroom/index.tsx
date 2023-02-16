import "./style.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import ReactPaginate from "react-paginate";
import logo from "../../assets/img/movies.png";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { addMovieCard, getAllreviews } from "../../redux/actions";

const MainRoom = ({}) => {
	//@ts-ignore
	const stateData = useSelector((state) => state.moviesData.movies);
	const [modalActive, setModalActive] = useState(false);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;
	const dispatch = useDispatch();

	const setDataMovie = (item: any) => {
		setModalActive(!modalActive);
		dispatch(addMovieCard(item));
		dispatch(getAllreviews());
	};

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(stateData.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(stateData.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, stateData]);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % stateData.length;
		setItemOffset(newOffset);
	};

	const loginData = JSON.parse(localStorage.getItem("user") || "{}");
	const removeItem = () => {
		localStorage.removeItem("user");
	};

	return (
		<div className="container__main">
			<div className="header">
				<img src={logo} alt="logo" />
				<nav className="navigation">
					<ul className="list">
						<li className="list__item">Главная</li>
						<li className="list__item">Категории</li>
						<li className="list__item">О Нас</li>
					</ul>
				</nav>
				<div>
					<span className="span">{loginData.email}, добро пожаловать ! </span>
					<NavLink to="/*">
						<button className="buttonToExit" onClick={() => removeItem()}>
							Выйти
						</button>
					</NavLink>
				</div>
			</div>
			<div className="movies__boxes">
				{currentItems.map((item: any) => (
					<Movie
						key={item.id}
						item={item}
						setDataMovie={() => setDataMovie(item)}
					/>
				))}
			</div>
			<Modal modalActive={modalActive} setModalActive={setModalActive} />
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				containerClassName="pagination"
				pageLinkClassName="page-num"
				previousLinkClassName="page-num"
				nextLinkClassName="page-num"
				activeLinkClassName="active"
			/>
		</div>
	);
};

export default MainRoom;
