import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import seedTracks from "../../data/tracks.json";

function App() {
	const [searchResults, setSearchResults] = useState(seedTracks);

	useEffect(() => {
		setSearchResults(seedTracks);
	}, []);

	return (
		<div>
			<h1>
				Pl<span className="highlight">laylis</span>tify
			</h1>
			<div className="App">
				<SearchBar />
				<div className="App-playlist">
					<SearchResults searchResults={searchResults} />
					<Playlist />
				</div>
			</div>
		</div>
	);
}

export default App;
