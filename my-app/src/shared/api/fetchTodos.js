export const fetchTodos = (URL, setter, errorMessage) => {
	fetch(URL)
		.then((response) => response.json())
		.then((data) => {
			setter(data);
		})
		.catch((error) => console.error(`${errorMessage}: ${error.message}`));
};
