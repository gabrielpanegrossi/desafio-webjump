import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;

	a {
		cursor: pointer;
	}

	.atual-page {
		color: #cc0d1f;
	}
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	width: 95%;
	max-width: 980px;
	margin: 0 auto;
	z-index: 400;
	padding: 20px 0 60px;

	.main-content {
		display: flex;
		justify-content: space-between;

		width: 100%;
		gap: 5%;
	}

	.home-main {
		display: flex;
		justify-content: space-between;
		gap: 5%;

		aside {
			width: 100%;
			max-width: 200px;
			padding-left: 10px;
			border: 1px solid #e2dedb;
			background-color: #e2dedb;

			li {
				margin-bottom: 10px;
			}
		}

		.home-content {
			display: flex;
			flex-direction: column;
			gap: 20px;

			width: 80%;

			.home-banner {
				width: 100%;
				min-height: 200px;
				background-color: #acacac;
			}

			h2 {
				margin-top: 0;
			}
		}
	}

	@media screen and (max-width: 767px) {
		padding: 0;

		.main-content {
			display: flex;
			flex-direction: column;
			justify-content: center;

			width: 100%;
			gap: 40px;
		}

		aside {
			display: none;
		}

		.home-content {
			width: 100% !important;
		}
	}
`;

export const FilterContent = styled.aside`
	width: 100%;
	max-width: 200px;
	height: fit-content;
	padding: 20px 10px 40px;
	border: 1px solid #ccc;

	.click {
		cursor: pointer;
	}

	h3 {
		color: #cc0d1f;
		margin-top: 0;
	}

	h4 {
		color: #83a3a0;
	}

	ul {
		color: #666;

		li {
			margin-bottom: 10px;
		}
	}

	.color-filter {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		width: fit-content;
		height: fit-content;

		div {
			width: 40px;
			height: 30px;
			border: 1px solid #ccc;
			cursor: pointer;
		}

		.Red {
			background-color: red;
		}

		.Orange {
			background-color: orange;
		}

		.Blue {
			background-color: blue;
		}

		.Black {
			background-color: black;
		}

		.Yellow {
			background-color: yellow;
		}

		.Pink {
			background-color: pink;
		}

		.Gray {
			background-color: Gray;
		}

		.Beige {
			background-color: Beige;
		}
	}

	@media (max-width: 767px) {
		max-width: 320px;
		padding-left: 5%;
	} ;
`;

export const ProductsContent = styled.section`
	width: 80%;

	h2 {
		margin-top: 0;
	}

	.filter-products-content {
		display: flex;
		justify-content: space-between;

		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;

		.products-select {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			width: 60%;
			gap: 10%;

			p {
				margin: 0;
				white-space: nowrap;
			}

			select {
				height: 30px;
				width: 100%;
				max-width: 200px;
				padding-left: 5px;

				border: 1px solid #ccc;
			}
		}
	}

	@media (max-width: 767px) {
		width: 100%;

		.filter-products-content {
			justify-content: center;

			.products-view {
				display: none;
			}

			.products-select {
				width: 100%;
			}
		}
	}
`;

export const ProductsCardContainer = styled.section`
	display: flex;

	flex-wrap: wrap;
	${(props) =>
		props.list
			? 'flex-direction:column; justify-content:flex-start; align-items:flex-start;'
			: '	flex-wrap: wrap; justify-content: flex-start;'};

	.card {
		display: flex;

		margin-top: 40px;
		margin-right: 25px;

		${(props) =>
			props.list
				? 'width:100%; height:fit-content; gap:5%; align-items:center;'
				: 'min-width: 150px; width: 20%; flex-direction: column; height: 330px; gap: 10px;'};

		.card-img-holder {
			width: 100%;
			max-width: 150px;
			max-height: 150px;

			border: 1px solid #ccc;

			div {
				max-height: 150px;
				height: 100%;

				img {
					object-fit: contain;
				}
			}
		}

		.card-information {
			display: flex;
			justify-content: space-between;

			gap: 10px;
			${(props) =>
				props.list
					? 'align-items:center; min-width:200px;'
					: 'flex-direction: column;'};
		}

		h5 {
			text-align: center;
			margin: 0;
			color: #666;
			font-weight: 400;
			font-size: 16px;
		}

		.card-price-container {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 10px;

			.card-old-price {
				color: #666;
			}

			.card-price {
				color: #cc0d1f;
				font-weight: bolder;
			}
		}

		a {
			width: 100%;
			max-width: 150px;
			height: fit-content;
			padding: 10px 0;

			color: white;
			font-weight: bolder;
			font-size: 16px;
			text-align: center;
			background-color: #9acbc5;
			border: 1px solid #9acbc5;
		}

		.button-holder {
			display: flex;
			align-items: center;
			width: 100%;
		}
	}

	@media (max-width: 767px) {
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;

		.card {
			min-width: 110px;
			width: 20%;
			flex-direction: column;
			justify-content: center;
			height: 380px;
			gap: 10px;
			margin-right: 20px;
			margin-top: 0px;
		}

		.card-information {
			display: flex;

			gap: 10px;
			align-items: initial;
			flex-direction: column;
		}
	}
`;
