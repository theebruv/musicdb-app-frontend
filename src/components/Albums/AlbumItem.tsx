import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Album } from "../../types";

type AlbumItemProps = {
	album: Album;
};

const AlbumItem: React.FC<AlbumItemProps> = ({ album }) => {
	return (
		<Box width='100%' mb='8'>
			<Image src={album.cover} h='100%' w='100%' objectFit='cover' />
			<Box p='2'>
				<Text as='h4' fontWeight={600}>
					{album.title}
				</Text>
				<Text>{album.release_date}</Text>
			</Box>
		</Box>
	);
};

export default AlbumItem;
