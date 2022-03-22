import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import React from "react";
import { Artists, LoadingSpinner } from "../../components";
import { Artist } from "../../types";

type HomeProps = {
	artists: Artist[];
	loading: boolean;
	error: any;
};
const Home: React.FC<HomeProps> = ({ artists, loading, error }) => {
	return (
		<Box pt='4'>
			{loading ? <LoadingSpinner /> : <Artists artists={artists} />}
			{error && (
				<Alert status='error' my='2'>
					<AlertIcon />
					There was an error searching the artist.
				</Alert>
			)}
		</Box>
	);
};

export default Home;
