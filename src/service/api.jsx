async function fetchApi() {
	//URL params
	const API_KEY = "112103a89f43817e1ae7d8a60b354bbb";
	const baseUrl = `https://api.themoviedb.org/3/`;
	const params = `trending/movie/day?api_key=${API_KEY}`;

	// https://api.themoviedb.org/3/movie/550?api_key=112103a89f43817e1ae7d8a60b354bbb

	const url = baseUrl + params;

	const fetchA = await fetch(url).then((response) => {
		console.log("response", response);
		return response.json();
	});
	console.log(fetchA);
	return fetchA;
}

export { fetchApi };
