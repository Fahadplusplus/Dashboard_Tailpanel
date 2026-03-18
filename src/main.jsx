import ReactDOM from "react-dom/client";
import App from "./App"
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider";
const clientId = import.meta.env.VITE_KINDE_CLIENT_ID;
const domain = import.meta.env.VITE_KINDE_DOMAIN;
const redirectUri = import.meta.env.VITE_KINDE_REDIRECT_URL;
const logoutUri = import.meta.env.VITE_KINDE_LOGOUT_URL;
const baseUri = import.meta.env.VITE_BASE_URL;

ReactDOM.createRoot(document.getElementById("root")).render(


    <KindeProvider
		clientId={clientId}
		domain={domain}
		redirectUri={redirectUri}
		logoutUri={logoutUri}
        baseUri={baseUri}


	>
		 <App />
	</KindeProvider>


     
 

);