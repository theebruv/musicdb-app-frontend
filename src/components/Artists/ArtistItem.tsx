import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { Artist } from "../../types";
import { useNavigate } from "react-router-dom";

type ArtistItemProps = {
	artist: Artist;
};

const ArtistItem: React.FC<ArtistItemProps> = ({ artist }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 40em)" });
	const navigate = useNavigate();

	return (
		<Flex
			key={artist.id}
			flexDir='column'
			width='100%'
			border='1px solid black'
			cursor='pointer'
			onClick={() =>
				navigate({
					pathname: "/artist/" + artist.id,
				})
			}>
			<Image src={artist.picture} alt={artist.name} width='100%' />
			<Box p='2'>
				<Text>{artist.name}</Text>
				<Text>{artist.nb_fan} fans</Text>
				{!isTabletOrMobile && <Text>{artist.nb_album} albums</Text>}
			</Box>
		</Flex>
	);
};

export default ArtistItem;
