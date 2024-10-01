export const changeTodos = (URL, method, value, errorMessage, setters) => {
	fetch(URL, {
		method: method,
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify(value),
	})
		.catch((error) => console.error(`${errorMessage}: ${error.message}`))
		.finally(...setters);
};
