import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./context/DataProvider";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<DataProvider>
					<App />
				</DataProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
