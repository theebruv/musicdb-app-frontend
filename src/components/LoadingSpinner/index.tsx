import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const LoadingSpinner = () => {
	return (
		<Flex justifyContent='center' alignItems='center'>
			<Spinner my='8' />
		</Flex>
	);
};

export default LoadingSpinner;
