import { Box, OrderedList, Text } from "@chakra-ui/react";
import React from "react";
import { Track } from "../../types";
import { useMediaQuery } from "react-responsive";
import TrackItem from "./TrackItem";

type TracksProps = {
	tracks: Track[];
};
const Tracks: React.FC<TracksProps> = ({ tracks }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 40em)" });

	if (!tracks) {
		return null;
	}

	return (
		<Box p='4' width={isTabletOrMobile ? "100%" : "50%"}>
			<Text as='h3' fontSize='20' fontWeight={700}>
				Top Tracks
			</Text>
			<OrderedList mt='4'>
				{tracks.map((track) => (
					<TrackItem key={track.id} track={track} />
				))}
			</OrderedList>
		</Box>
	);
};

export default Tracks;
