import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import seedTracks from "../../data/tracks.json";

function App() {
	const intitialPlaylist = {
		playlistName: "My Playlist",
		playlistTracks: [
			{
				name: "test3",
				artist: "test3",
				album: "test3",
				id: 3,
			},
			{
				name: "test4",
				artist: "test4",
				album: "test4",
				id: 4,
			},
		],
	};
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState(intitialPlaylist);

	useEffect(() => {
		setSearchResults(seedTracks);
	}, []);

	return (
		<div>
			<h1>
				Pl<span className="highlight">aylis</span>tify
			</h1>
			<div className="App">
				<SearchBar />
				<div className="App-playlist">
					<SearchResults searchResults={searchResults} />
					<Playlist playlist={playlist} />
				</div>
			</div>
		</div>
	);
}

export default App;
