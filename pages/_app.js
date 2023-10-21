import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
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
				<NavBar />
				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	);
};

export default App;
