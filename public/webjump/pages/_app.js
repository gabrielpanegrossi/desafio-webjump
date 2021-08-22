import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import MyContext from '../contexts/myContext';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState(undefined);
	const [atualPage, setPage] = useState('');
	const [atualPageId, setPageId] = useState(undefined);
	const [selectedFilter, setSelectedFilter] = useState(undefined);
	const [filteredOptions, setFilteredOptions] = useState(undefined);
	const [filterIsActive, setfilterIsActive] = useState(false);

	const fetchCategories = () => {
		const url = `http://localhost:8888/api/V1/categories/list`;

		fetch(url)
			.then((data) => data.json())
			.then((response) => Array.prototype.slice.call(response.items))
			.then((treatedData) => {
				setCategories(treatedData);
				fetchProducts(treatedData);
			});
	};

	async function fetchProducts(categoriesIds) {
		const results = categoriesIds.map(async (item) => {
			const response = await fetch(
				`http://localhost:8888/api/V1/categories/${item.id}`
			);
			return response.json();
		});

		Promise.all(results)
			.then((response) => Array.prototype.slice.call(response))
			.then((treatedData) => {
				setProducts(treatedData);
			});
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<>
			<MyContext.Provider
				value={{
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
				}}
			>
				<Header categories={categories} products={products} />
				<Component {...pageProps} categories={categories} products={products} />
			</MyContext.Provider>
			<Footer />
		</>
	);
}

export default MyApp;
