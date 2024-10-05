export const fetchTodos = async (URL) => {
	return fetch(URL)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		});
};
