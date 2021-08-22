import styled, { keyframes } from 'styled-components';

const animaMenu = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    visibility: none;
    pointer-events: none;
  }

  to {   
    opacity: 1;
    visibility: visible;
    transform: translateY(0%);
    pointer-events: all;
  }
`;

export const Container = styled.div`
	width: 100%;

	a {
		cursor: pointer;
	}

	@media (max-width: 767px) {
		display: none;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	width: 95%;
	max-width: 980px;
	margin: 0 auto;
	justify-content: space-between;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	.logo-holder {
		width: 30%;
		max-width: 200px;
	}

	.header-search-bar {
		display: flex;
		justify-content: flex-end;
		width: 60%;
		max-width: 450px;

		input {
			height: 30px;
			width: 80%;

			border: 1px solid #ccc;
			color: black;
			padding-left: 2%;
		}

		button {
			padding: 0 5%;

			color: white;
			background-color: #cc0d1f;
			border: 1px solid #cc0d1f;
			font-weight: bolder;
		}
	}

	@media screen and (max-width: 767px) {
		padding: 0 20px;
	}
`;

export const AccountContainer = styled.div`
	width: 100%;
	background-color: black;

	a {
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
	span,
	a {
		color: white;
		font-size: 12px;
	}
`;

export const AccountContent = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	width: 95%;
	max-width: 980px;
	margin: 0 auto;
	z-index: 400;
	padding: 10px 0;
	position: relative;

	@media screen and (max-width: 767px) {
		padding: 5px 20px;
		justify-content: center;
	}
`;

export const NavContainer = styled.div`
	width: 100%;

	background-color: #cc0d1f;

	a {
		cursor: pointer;
	}

	@media screen and (max-width: 767px) {
		background-color: white;
	}
`;

export const MenuContent = styled.nav`
	display: flex;
	align-items: center;
	width: 95%;
	max-width: 980px;
	margin: 0 auto;
	justify-content: space-between;
	z-index: 400;
	padding: 15px 0;
	position: relative;

	.logo-container {
		width: 20%;
		padding: 10px 0;
		min-width: 150px;
		max-width: 180px;
	}

	@media screen and (max-width: 767px) {
		flex-direction: column;
		justify-content: center;
		padding: 0 20px;
	}
`;

export const MenuWrapper = styled.div`
	max-width: 980px;
	margin: 0 auto;
`;

export const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 768px;

	a {
		color: white;
		font-weight: bolder;
		text-decoration: none;
		font-size: 16px;
		margin-right: 10px;
	}

	@media (max-width: 500px) {
		a {
			font-size: 12px;
		}
	}

	@media screen and (max-width: 767px) {
		display: ${(props) => (props.isActive ? 'flex' : 'none')};
		flex-direction: column;
		position: absolute;
		max-width: 250px;
		top: 100%;
		left: 0;
		background: white;
		border: 1px solid #ccc;
		padding: 20px 40px;

		a {
			color: #cc0d1f;
			margin-bottom: 10px;
		}
	}
`;

export const MobileSearch = styled.div`
	display: none;
	width: 100%;

	input {
		${(props) =>
			props.isActive ? 'opacity:1;; height:30px;' : 'opacity:0; height:0px;'};
		width: 100%;
		padding-left: 2%;
		margin: 10px 0;
		transition: all 0.3s;

		border: 1px solid #ccc;
		color: black;
	}

	@media (max-width: 767px) {
		display: block;
	}
`;

export const MenuMobile = styled.button`
	display: none;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background: none;
	padding: 0;
	outline: 0;
	border: 0;

	svg {
		cursor: pointer;
	}

	.logo-holder {
		width: 50%;
		max-width: 200px;

		div,
		img {
			width: 100% !important;
		}
	}

	@media screen and (max-width: 767px) {
		display: flex;
	}
`;

export const Dropdown = styled.span`
	position: relative;
	cursor: pointer;

	ul {
		display: none;
		position: absolute;
		top: 2px;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		color: black;
		padding: 0px 0px 10px 8px;
		border: 5px solid transparent;
		border-radius: 20px;
		width: 180px;
		z-index: 2000;

		li {
			list-style: none;
			text-align: center;
			animation: ${animaMenu} 0.5s ease-in;

			a {
				width: 150px;
				display: block;
				font-size: 12px;
				padding: 0;
				padding-top: 10px;
				color: black;

				&:hover {
					font-weight: 700;
				}
			}
		}

		@media screen and (max-width: 767px) {
			left: 10px;
			transform: translateX(0);
		}
	}

	&:hover ul,
	&:checked ul {
		display: block;
	}
`;
