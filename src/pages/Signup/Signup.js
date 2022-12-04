import { useState } from "react";
import { Link } from "react-router-dom";
import { Email, Name, Password, Username } from "../../components";

import { useLogin } from "../../context/AuthProvider";
import { default as logo } from "../../logo.svg";
import { isPasswordValid } from "../../utils/regex";

export function Signup() {
	const {
		dispatch,
		SignupUser,
		state: { username, name, password, email },
	} = useLogin();
	const [passwordError, setPasswordError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!isPasswordValid(password)) {
			setPasswordError(
				"Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters."
			);
		} else {
			await SignupUser(Name, Username, Email, Password);
			setPasswordError(null);
		}
	};

	return (
		<div className="flex items-center justify-center mx-auto m-10 px-6 py-12  lg:px-8 border w-96 border-gray-800 rounded-t-xl">
			<div className="w-full max-w-md space-y-8">
				<div>
					<img src={logo} alt=" Logo" className="mx-auto" />
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
						Register here !
					</h2>
				</div>
				<form className="mt-8  " onSubmit={handleSubmit}>
					<Username username={username} userDispatch={dispatch} />
					<Email email={email} userDispatch={dispatch} />
					<Name name={name} userDispatch={dispatch} />
					<Password password={password} userDispatch={dispatch} />
					{passwordError && <p className="text-red-400">{passwordError}</p>}
					<div>
						<button className="group relative flex w-full justify-center  mt-4  rounded-md  -transparent  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
							<Link to={`/signup`}> Sign up!</Link>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
