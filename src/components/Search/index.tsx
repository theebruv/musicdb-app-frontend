import { Avatar, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import React from "react";
import { useNavigate } from "react-router-dom";

type SearchProps = {
	searchKey: string;
	onChange: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchKey, onChange }) => {
	const navigate = useNavigate();
	return (
		<Flex flexDir='row' justifyContent='space-between' width='100%' alignItems='center' py='2'>
			<Avatar name='Deezer Music' mr='16' />
			<InputGroup>
				<InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.300' />} />
				<Input
					type='text'
					placeholder='Artist name'
					value={searchKey}
					onChange={(e) => {
						navigate("/");
						onChange(e.target.value);
					}}
				/>
			</InputGroup>
		</Flex>
	);
};

export default Search;
