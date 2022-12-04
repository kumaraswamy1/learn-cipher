export const loginReducer = (state, { type, payload }) => {
	switch (type) {
		case "SET_USERNAME":
			return { ...state, username: payload };
		case "SET_PASSWORD":
			return { ...state, password: payload };
		case "SET_NAME":
			return { ...state, name: payload };
		case "SET_EMAIL":
			return { ...state, email: payload };
		case "SET_TOKEN":
			return { ...state, token: payload };
		case "CLEAR_CREDENTIALS":
			return { ...state, username: "", password: "", name: "", email: "" };
		default:
			return state;
	}
};
