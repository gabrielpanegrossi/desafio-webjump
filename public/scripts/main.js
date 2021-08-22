const menuContainer = document.querySelector('.header-menu');
const information = {};
const products = [];

async function consultCategories() {
	const response = await fetch(`http://localhost:8888/api/V1/categories/list`);
	return response.json();
}

async function consultProducts(categoriesIds) {
	const results = categoriesIds.map(async (id) => {
		const response = await fetch(
			`http://localhost:8888/api/V1/categories/${id}`
		);
		return response.json();
	});

	return Promise.all(results);
}

async function consultAllInformation() {
	const categoriesArr = await consultCategories();
	information.categories = Array.prototype.slice.call(categoriesArr.items);

	let options = `<li><a href="#">Página Inicial</a></li>`;

	const categoriesIds = [];

	information.categories.map(async (categorie) => {
		options += `<li><a href="#">${categorie.name}</a></li>`;
		categoriesIds.push(categorie.id);
	});

	information.products = await consultProducts(categoriesIds);

	menuContainer.innerHTML = options;
}

function renderMenus() {
	let options = `<li><a href="#">Página Inicial</a></li>`;

	console.log(information);

	// information.categories.map(async (categorie) => {
	// 	options += `<li><a href="#">${categorie.name}</a></li>`;
	// });
}

consultAllInformation().then(renderMenus());
