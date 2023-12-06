import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistor, { store } from "../store/index";
import theme from "../src/styles/theme";
import spiels from "../src/constants/spiels";
import NavBar from "../src/components/NavBar";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>{spiels.APP_NAME}</title>
			</Head>
			<ChakraProvider theme={theme}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<NavBar />
						<Component {...pageProps} />
					</PersistGate>
				</Provider>
			</ChakraProvider>
		</QueryClientProvider>
	);
};

export default App;
