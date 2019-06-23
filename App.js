import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import RootNavigation from "./src/rootNavigation";
import navigationServices from "./src/helper/navigationServices";

const App = () => (
	<Provider store={store}>
		<RootNavigation
			ref={navRef => navigationServices.setTopLevelNavigator(navRef)}
		/>
	</Provider>
);

export default App;
