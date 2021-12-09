async function fetchApi(searchQuery, page) {
	//URL params
	const API_KEY = "23474268-70d851d8204f5902d9e83a665";
	const baseUrl = `https://pixabay.com/api/`;
	const params = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
	const url = baseUrl + params;

	const fetchA = await fetch(url).then((response) => {
		// console.log("response", response);
		return response.json();
	});
	return fetchA;
}

export { fetchApi };
