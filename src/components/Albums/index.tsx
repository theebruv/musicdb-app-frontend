import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Album } from "../../types";
import { useMediaQuery } from "react-responsive";
import AlbumItem from "./AlbumItem";

type AlbumsProps = {
	albums: Album[];
};
const Albums: React.FC<AlbumsProps> = ({ albums }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 40em)" });
	if (!albums) {
		return null;
	}

	return (
		<Box p='4'>
			<Text as='h3' fontSize='20' fontWeight={700}>
				Albums
			</Text>
			<SimpleGrid columns={isTabletOrMobile ? 1 : 4} spacing={10} mt="4">
				{albums.map((album) => (
					<AlbumItem key={album.id} album={album} />
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Albums;
