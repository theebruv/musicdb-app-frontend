import { useQuery } from "@apollo/client";
import { Flex, Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useParams, useNavigate } from "react-router-dom";
import { GET_ARTIST_TOP_TRACKS, GET_ARTIST_ALBUMS, GET_ARTIST } from "../../graphql/artists";
import { Album, Track, Artist } from "../../types";
import { Albums, LoadingSpinner, Tracks } from "../../components";
import ArtistProfile from "../../components/ArtistProfile";

const ArtistView: React.FC = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 40em)" });
	const { id } = useParams();
	const navigate = useNavigate();

	if (!id) {
		navigate("/");
	}

	const {
		data: artist,
		loading: artistLoading,
		error: artistError,
	} = useQuery<{ getArtist: Artist }>(GET_ARTIST, {
		variables: {
			userId: Number(id),
		},
	});
	const {
		data: tracks,
		loading: tracksLoading,
		error: tracksError,
	} = useQuery<{ getArtistTopTracks: Track[] }>(GET_ARTIST_TOP_TRACKS, {
		variables: {
			userId: Number(id),
		},
	});

	const {
		data: albums,
		loading: albumsLoading,
		error: albumsError,
	} = useQuery<{ getArtistAlbums: Album[] }>(GET_ARTIST_ALBUMS, {
		variables: {
			userId: Number(id),
		},
	});

	return (
		<Flex flexDir='column'>
			{artistLoading || tracksLoading || albumsLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<Flex flexDir={isTabletOrMobile ? "column" : "row"} m='4'>
						{artist && artist.getArtist && <ArtistProfile artist={artist.getArtist} />}
						{tracks && tracks.getArtistTopTracks && <Tracks tracks={tracks.getArtistTopTracks} />}
					</Flex>
					{albums && albums.getArtistAlbums && <Albums albums={albums.getArtistAlbums} />}
				</>
			)}
			{artistError && (
				<Alert status='error' my='2'>
					<AlertIcon />
					There was an error loading the artist.
				</Alert>
			)}
			{tracksError && (
				<Alert status='error' my='2'>
					<AlertIcon />
					There was an error loading the artist's top tracks.
				</Alert>
			)}
			{albumsError && (
				<Alert status='error' my='2'>
					<AlertIcon />
					There was an error loading the artist's albums.
				</Alert>
			)}
		</Flex>
	);
};

export default ArtistView;
