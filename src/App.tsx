import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import RealmApp, { useRealmApp } from "./realm/RealmApp";
import RealmApolloProvider from "./realm/RealmApolloProvider";
import LoginScreen from "./components/LoginScreen";
import Board from "./components/Board";
import theme from "./theme";

const App: React.FC = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<RealmApp>
				<RequireAuthentication />
			</RealmApp>
		</ThemeProvider>
	);
};
export default App;

function RequireAuthentication() {
	const app = useRealmApp();
	if (!app) {
		return <div>Loading</div>;
	}
	return app.user ? (
		<RealmApolloProvider>
			<Board />
		</RealmApolloProvider>
	) : (
		<LoginScreen />
	);
}
