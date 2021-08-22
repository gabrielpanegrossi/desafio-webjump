import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/dist/client/image';
import MenuOption from '../nav';
import WebjumpLogo from '../../public/media/webjumplogo.png';
import MyContext from '../../contexts/myContext';
import { Dictionary } from '../dictionary';

import { MdMenu, MdClose } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

import * as S from './style';

const Header = (props) => {
	const [mobile, setMobile] = useState(true);
	const [mobileSearch, setMobileSearch] = useState(true);
	const {
		atualPage,
		setPage,
		atualPageId,
		setPageId,
		selectedFilter,
		setSelectedFilter,
		filteredOptions,
		setFilteredOptions,
		filterIsActive,
		setfilterIsActive,
	} = useContext(MyContext);

	const router = useRouter();

	function handleMenu(e) {
		setMobile((prev) => !prev);
	}

	function handleSearch(e) {
		setMobileSearch((prev) => !prev);
	}

	function setAtualPage(name, id) {
		setPage(name);
		setPageId(id - 1);
		setfilterIsActive(undefined);
	}

	function setFilters() {
		const filter = Object.entries(props.products[atualPageId].filters[0])[0][0];
		setSelectedFilter(
			Object.entries(props.products[atualPageId].filters[0])[0][0]
		);

		const filterOptions = [];

		props.products[atualPageId].items.map((item) => {
			if (filter == 'color') {
				if (!filterOptions.includes(Dictionary[item.filter[0][filter]])) {
					filterOptions.push(Dictionary[item.filter[0][filter]]);
				}
			} else {
				if (!filterOptions.includes(item.filter[0][filter])) {
					filterOptions.push(item.filter[0][filter]);
				}
			}
		});
		setFilteredOptions(filterOptions);
	}

	useEffect(() => {
		atualPageId > -1 ? setFilters() : '';
	}, [atualPageId]);

	return (
		<header>
			<S.AccountContainer>
				<S.AccountContent>
					<Link href="#">
						<a>Acesse sua conta</a>
					</Link>
					<span>ou</span>
					<Link href="#">
						<a>Cadastra-se</a>
					</Link>
				</S.AccountContent>
			</S.AccountContainer>
			<S.Container>
				<S.Content>
					<Link href="#">
						<a className="logo-holder">
							<Image src={WebjumpLogo} alt="alterar" />
						</a>
					</Link>
					<div className="header-search-bar">
						<input placeholder="Pesquisar..." />
						<button>BUSCAR</button>
					</div>
				</S.Content>
			</S.Container>
			<S.NavContainer>
				<S.MenuContent>
					<S.MenuContainer isActive={!mobile}>
						<Link href="#">
							<a onClick={() => setAtualPage(undefined, undefined)}>
								Página Inicial
							</a>
						</Link>
						{props.categories.map((categorie) => {
							return (
								<MenuOption
									key={categorie.id}
									onClickFunction={() =>
										setAtualPage(categorie.name, categorie.id)
									}
								>
									{categorie.name}
								</MenuOption>
							);
						})}
					</S.MenuContainer>

					<S.MenuMobile aria-label="abrir menu">
						{mobile ? (
							<MdMenu onClick={handleMenu} color="black" size="32" />
						) : (
							<MdClose onClick={handleMenu} color="black" size="32" />
						)}
						<div className="logo-holder">
							<a href="#">
								<Image src={WebjumpLogo} alt="alterar" />
							</a>
						</div>
						<FaSearch color="#cc0d1f" size="26" onClick={handleSearch} />
					</S.MenuMobile>
					<S.MobileSearch isActive={!mobileSearch}>
						<input placeholder="Pesquisar..." />
					</S.MobileSearch>
				</S.MenuContent>
			</S.NavContainer>
		</header>
	);
};

export default Header;
