export const sendData = (getState) => {
	console.log(getState);
	alert('Вы успешно зарегестрировались!');
	window.location.reload();
};
