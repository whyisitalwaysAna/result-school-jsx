// Simulating sending data to the server

export const sendData = (state) => {
	const data = state.reduce((acc, object) => {
		return (acc = {
			...acc,
			[object.name]: object.value,
		});
	}, {});

	console.log(data);
	alert('Вы успешно зарегестрировались!');
	window.location.reload();
};
