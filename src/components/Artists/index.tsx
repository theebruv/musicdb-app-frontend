import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Artist } from "../../types";
import { useMediaQuery } from "react-responsive";
import ArtistItem from "./ArtistItem";

type ArtistsProps = {
	artists: Artist[];
};
const Artists: React.FC<ArtistsProps> = ({ artists }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 40em)" });
	if (!artists) {
		return null;
	}

	return (
		<Box my='4'>
			<SimpleGrid columns={isTabletOrMobile ? 1 : 3} spacing={10}>
				{artists.map((artist) => (
					<ArtistItem key={artist.id} artist={artist} />
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Artists;
