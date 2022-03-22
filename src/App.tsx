import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ChakraProvider, theme, Container } from "@chakra-ui/react";
import { Home, Artist as ArtistView } from "./containers";
import { SEARCH_ARTIST } from "./graphql/artists";
import { useQuery } from "@apollo/client";
import { Search } from "./components";
import { Artist } from "./types";

export const App: React.FC = () => {
	const [name, setName] = React.useState("");

	const { data, loading, error } = useQuery<{
		searchArtist: Artist[];
	}>(SEARCH_ARTIST, {
		variables: {
			name,
		},
	});
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Container maxW='container.lg'>
					<Search searchKey={name} onChange={setName} />
					<Routes>
						<Route path='/' element={<Home artists={data?.searchArtist || []} error={error} loading={loading} />} />
						<Route path='/artist/:id' element={<ArtistView />} />
					</Routes>
				</Container>
			</Router>
		</ChakraProvider>
	);
};
