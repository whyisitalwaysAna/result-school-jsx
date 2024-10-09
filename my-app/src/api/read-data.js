export const readData = async (URL) => {
	return fetch(URL)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		});
}
