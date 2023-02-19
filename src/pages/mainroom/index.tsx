import "./style.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import ReactPaginate from "react-paginate";
import logo from "../../assets/img/label.png";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { addMovieCard, getAllReviews, getMovies } from "../../redux/actions";
import { Oval } from "react-loader-spinner";
import { useActions } from "../../redux/hooks/useActions";

const MainRoom = ({}) => {
	//@ts-ignore
	const stateData = useSelector((state) => state.movies.movies);
	console.log("stateData", stateData);
	const [modalActive, setModalActive] = useState(false);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;
	const dispatch = useDispatch();
	//@ts-ignore
	const { getMovies } = useActions();

	const setDataMovie = (item: any) => {
		setModalActive(!modalActive);
		dispatch(addMovieCard(item));
		dispatch(getAllReviews(item.id));
	};

	useEffect(() => {
		//@ts-ignore
		console.log("setMovies", getMovies());
		dispatch(getMovies());
	}, []);

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
						<li className="list__item">Новинки</li>
						<li className="list__item">Подборки</li>
						<li className="list__item">Фильмы</li>
						<li className="list__item">Сериалы</li>
						<li className="list__item">Топ фильмов</li>
					</ul>
				</nav>
				<div className="user">
					<div className="user__serverdata">
						<span className="span">{loginData.email}</span>
						<span className="welcome">Добро пожаловать!</span>
					</div>
					<div>
						<NavLink to="/*">
							<button className="buttonToExit" onClick={() => removeItem()}>
								Выйти
							</button>
						</NavLink>
					</div>
				</div>
			</div>
			{currentItems.length ? (
				<div className="movies__boxes">
					{currentItems.map((item: any) => (
						<Movie
							key={item.id}
							item={item}
							setDataMovie={() => setDataMovie(item)}
						/>
					))}
				</div>
			) : (
				<Oval
					height={80}
					width={80}
					color="#fdfdfd"
					wrapperClass="preloader"
					visible={true}
					ariaLabel="oval-loading"
					secondaryColor="#fdfdfd"
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			)}
			<Modal modalActive={modalActive} setModalActive={setModalActive} />
			{currentItems.length ? (
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
			) : (
				""
			)}
		</div>
	);
};

export default MainRoom;
