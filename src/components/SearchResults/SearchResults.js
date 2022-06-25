import React from "react";
import TrackList from "../TrackList/TrackList";

function SearchResults({searchResults}) {
	return (
		<div className="SearchResults">
			<h2>Results</h2>
			{searchResults.map((track) => (
				<TrackList key={track.id} track={track} />
			))}
			
		</div>
	);
}

export default SearchResults;
