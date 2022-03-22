import React from "react";
import { Box, Divider, Flex, ListItem, Text } from "@chakra-ui/react";
import { Track } from "../../types";
import dayjs from "dayjs";

type TrackItemProps = {
	track: Track;
};

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
	return (
		<Box width='100%' mb='2'>
			<ListItem key={track.id} height='50px' justifyContent='center'>
				<Flex justifyContent='space-between'>
					<Text>{track.title}</Text>
					<Text>{dayjs(100).minute()}</Text>
				</Flex>
			</ListItem>
			<Divider />
		</Box>
	);
};

export default TrackItem;
