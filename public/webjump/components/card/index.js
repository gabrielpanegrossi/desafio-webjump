import { useState, useEffect, useContext } from 'react';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import MyContext from '../../contexts/myContext';
import dynamic from 'next/dynamic';
import { Dictionary } from '../dictionary';

import * as S from './style';

export default function Card(props) {
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

	const [actualList, setActualList] = useState([]);

	let specialPrice = 0;

	function checkHeight() {
		props.productList[atualPageId].items.map((product) => {
			specialPrice = product.specialPrice ? specialPrice + 1 : specialPrice + 0;
		});
	}

	function numberWithCommas(num) {
		return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	checkHeight();

	function changeActualList(filterIsActive) {
		console.log(filterIsActive);
		if (filterIsActive) {
			const list = [];
			props.productList[atualPageId].items.forEach((item) => {
				if (filterIsActive === Dictionary[item.filter[0][selectedFilter]]) {
					if (filterIsActive == Dictionary[item.filter[0][selectedFilter]]) {
						list.push(item);
					}
				} else {
					if (filterIsActive == item.filter[0][selectedFilter]) {
						list.push(item);
					}
				}
			});

			return setActualList(list);
		} else {
			return setActualList(props.productList[atualPageId].items);
		}
	}

	useEffect(() => {
		changeActualList(filterIsActive);
	}, [atualPage]);
	useEffect(() => {
		changeActualList(filterIsActive);
	}, [filterIsActive]);

	return (
		<>
			{actualList.map((product) => {
				return (
					<S.Card
						className="card"
						key={product.id}
						heightParameter={specialPrice}
					>
						<div className="card-img-holder">
							<Image
								src={`/${product.image}`}
								alt={`${product.name}`}
								width="150"
								height="150"
							/>
						</div>
						<div className="card-information">
							<h5>{product.name.toUpperCase()}</h5>
							<div className="card-price-container">
								{product.specialPrice ? (
									<>
										<span className="card-old-price">
											<s>R${numberWithCommas(product.price)}</s>
										</span>
										<span className="card-price">
											R${numberWithCommas(product.specialPrice)}
										</span>{' '}
									</>
								) : (
									<span className="card-price">
										R${numberWithCommas(product.price)}
									</span>
								)}
							</div>
						</div>
						<div className="button-holder">
							<Link href="#">
								<a>COMPRAR</a>
							</Link>
						</div>
					</S.Card>
				);
			})}
		</>
	);

	// return <h1>a</h1>;
}
