import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useLogin } from "../../context/AuthProvider";
import { default as logo } from "../../logo.svg";
import { Password, Username } from "../../components";

export function Login() {
	const labelFocus = useRef(null);

	const {
		loginWithCredentials,
		state: { username, password },

		dispatch,
	} = useLogin();

	const loginHandler = async (e) => {
		e.preventDefault();
		loginWithCredentials(Username, Password);
	};

	return (
		<div className="flex items-center justify-center mx-auto m-10 px-6 py-12  lg:px-8 border border-gray-800 rounded-t-xl">
			<div className="w-full max-w-md space-y-8">
				<div className="text-center items-center m-1">
					<img src={logo} alt=" Logo" className="mx-auto" />
					<h2 className="mt-6 pb-4 text-center text-3xl font-bold tracking-tight text-white">
						Sign in to your account
					</h2>
					<p className="  text-base text-white">
						Or Don't have an account?
						<span className="text-indigo-600">
							<NavLink to="/signup"> Sign up! </NavLink>
						</span>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={loginHandler}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<Username username={username} userDispatch={dispatch} />
						<Password password={password} userDispatch={dispatch} />
					</div>

					<div>
						<button className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<LockClosedIcon
									className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
									aria-hidden="true"
								/>
							</span>
							Sign in
						</button>
					</div>
				</form>

				<button
					className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					onClick={() => {
						dispatch({ type: "SET_USERNAME", payload: "test" });
						dispatch({ type: "SET_PASSWORD", payload: "test123#A" });
					}}
				>
					Use Guest Credentials
				</button>
			</div>
		</div>
	);
}
