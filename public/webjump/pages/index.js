import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useContext, useState } from 'react';
import MyContext from '../contexts/myContext';
import { MdViewModule, MdViewList } from 'react-icons/md';
import Link from 'next/dist/client/link';
import Card from '../components/card';
import MenuOption from '../components/nav';
import { Dictionary } from '../components/dictionary';

import pants2 from '../public/media/pants-2.jpg';

import * as S from '../styles/index';

export default function Home(props) {
	console.log(props);
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

	let key1 = 100;

	function createKey1() {
		key1++;
	}

	let key2 = 200;

	function createKey2() {
		key2++;
	}

	const [list, setList] = useState(false);

	const [products, setProducts] = useState([]);

	function changeGrid(e) {
		setList(!list);
	}

	function setAtualPage(name, id) {
		setPage(name);
		setPageId(id - 1);
		setfilterIsActive(undefined);
	}

	return (
		<>
			<Head>
				<title>Webjump - Home</title>
				<meta
					name="description"
					content="Um projeto desenvolvido para aprendizado e desafios."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{isNaN(atualPageId) ? (
				<>
					<S.Container>
						<S.Content>
							<div className="home-main">
								<aside>
									<nav>
										<ul>
											<li>
												<Link href="#">
													<a onClick={() => setAtualPage(undefined, undefined)}>
														Página Inicial
													</a>
												</Link>
											</li>
											{props.categories.map((categorie) => {
												return (
													<li key={categorie.id}>
														<MenuOption
															onClickFunction={() =>
																setAtualPage(categorie.name, categorie.id)
															}
														>
															{categorie.name}
														</MenuOption>
													</li>
												);
											})}
										</ul>
									</nav>
								</aside>
								<section className="home-content">
									<div className="home-banner"></div>
									<article>
										<h2>Seja bem-vindo!</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Phasellus vestibulum tempus hendrerit. Aenean rhoncus
											risus massa, at interdum nisi gravida sit amet. Etiam eget
											metus accumsan dui pharetra bibendum. Ut consectetur
											molestie velit, vitae convallis velit pretium a. Morbi
											lobortis erat turpis, ac porttitor leo commodo ut.
											Curabitur tincidunt justo mi, ac ultricies ex consectetur
											sed. Maecenas ex augue, accumsan eget ornare sed, luctus
											porttitor erat. Sed feugiat nulla et risus viverra, quis
											ullamcorper nunc sollicitudin. Morbi bibendum, leo
											vulputate consectetur posuere, mauris massa ornare dolor,
											sit amet lacinia nisi velit vel lacus. Ut dapibus felis
											nec nunc porta, a pulvinar ante eleifend.
										</p>
									</article>
								</section>
							</div>
						</S.Content>
					</S.Container>
				</>
			) : (
				<>
					<S.Container>
						<S.Content>
							<p>
								{atualPage ? (
									<>
										<a href="#">Página Inicial</a>
										<span>{' > '}</span>
										<a href="#" className="atual-page">
											{atualPage}
										</a>
									</>
								) : (
									''
								)}
							</p>
							<div className="main-content">
								<S.FilterContent>
									<h3>FILTRE POR</h3>
									<h4>Categorias</h4>
									<ul>
										{props.categories.map((categorie) => {
											return (
												<li key={categorie.id}>
													<MenuOption
														onClickFunction={() =>
															setAtualPage(categorie.name, categorie.id)
														}
													>
														{categorie.name}
													</MenuOption>
												</li>
											);
										})}
									</ul>
									{selectedFilter ? (
										<>
											<h4>{Dictionary[selectedFilter]}</h4>
											{selectedFilter == 'color' ? (
												<>
													<div className="color-filter">
														{filteredOptions.map((color) => {
															return (
																<div
																	key={key1}
																	className={color}
																	onClick={() => {
																		setfilterIsActive(color);
																		createKey1();
																	}}
																></div>
															);
														})}
													</div>
												</>
											) : (
												<ul>
													{filteredOptions.map((option) => {
														return (
															<li
																className="click"
																key={key2}
																onClick={() => {
																	setfilterIsActive(option);
																	createKey2();
																}}
															>
																{option}
															</li>
														);
													})}
												</ul>
											)}
										</>
									) : (
										''
									)}
								</S.FilterContent>
								<S.ProductsContent>
									<h2>{atualPage}</h2>
									<div className="filter-products-content">
										<div className="products-view">
											<MdViewModule
												color={list ? '#ccc' : '#9acbc5'}
												size="32"
												onClick={changeGrid}
											/>
											<MdViewList
												color={list ? '#9acbc5' : '#ccc'}
												size="32"
												onClick={changeGrid}
											/>
										</div>
										<div className="products-select">
											<p>ORDENAR POR</p>
											<select>
												<option>Preço</option>
											</select>
										</div>
									</div>
									<S.ProductsCardContainer list={list ? 1 : 0}>
										<Card productList={props.products} />
										{/* <article className="card">
											<div className="card-img-holder">
												<Image src={pants2} alt="alterar" />
											</div>
											<div className="card-information">
												<h5>Tênis Adidas</h5>
												<div className="card-price-container">
													<span className="card-old-price">
														<s>R$299,90</s>
													</span>
													<span className="card-price">R$99,90</span>
												</div>
												<Link href="#">
													<a>COMPRAR</a>
												</Link>
											</div>
										</article> */}
									</S.ProductsCardContainer>
								</S.ProductsContent>
							</div>
						</S.Content>
					</S.Container>
				</>
			)}
		</>
	);
}
