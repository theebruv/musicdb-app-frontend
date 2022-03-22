import { gql } from "@apollo/client";

export const SEARCH_ARTIST = gql`
	query SearchArtist($name: String!) {
		searchArtist(name: $name) {
			id
			name
			picture
			nb_fan
			nb_album
		}
	}
`;

export const GET_ARTIST_TOP_TRACKS = gql`
	query GetArtistTopTracks($userId: Int!) {
		getArtistTopTracks(userId: $userId) {
			id
			title
			duration
		}
	}
`;

export const GET_ARTIST_ALBUMS = gql`
	query GetArtistAlbums($userId: Int!) {
		getArtistAlbums(userId: $userId) {
			id
			title
			release_date
			cover
		}
	}
`;

export const GET_ARTIST = gql`
	query GetArtist($userId: Int!) {
		getArtist(userId: $userId) {
			id
			name
			picture
			nb_fan
			nb_album
		}
	}
`;
