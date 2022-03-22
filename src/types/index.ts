export type Artist = {
	id: number;
	name: string;
	picture: string;
	nb_fan: number;
	nb_album: number;
};

export type Track = {
	id: number;
	title: string;
	duration: number;
};

export type Album = {
	id: number;
	title: string;
	cover: string;
	release_date: Date;
};
