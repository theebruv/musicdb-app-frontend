import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Artist } from "../../types";

type ArtistProps = {
	artist: Artist;
};
const ArtistProfile: React.FC<ArtistProps> = ({ artist }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 40em)" });

	if (!artist) return null;
	return (
		<Box width={isTabletOrMobile ? "100%" : "50%"} height='340px'>
			<Box position='absolute' mt='150px' ml='50px' zIndex={1}>
				<Text fontSize='24' fontWeight={800}>
					{artist.name}
				</Text>
				<Text fontSize='16' fontWeight={700}>
					{artist.nb_fan} fans
				</Text>
			</Box>
			<Image src={artist.picture} h='100%' w='100%' objectFit='cover' opacity='50%' />
		</Box>
	);
};

export default ArtistProfile;
