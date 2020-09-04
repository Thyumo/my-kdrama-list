import React from "react";
import RealmApp, { useRealmApp } from "./realm/RealmApp";
import RealmApolloProvider from "./realm/RealmApolloProvider";
import LoginScreen from "./components/LoginScreen";
import Board from "./components/Board";

const App: React.FC = (props) => {
  return (
    <RealmApp>
      <RequireAuthentication />
    </RealmApp>
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