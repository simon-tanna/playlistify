import React from "react";
import TrackList from "../TrackList/TrackList";

function Playlist() {
	return (
		<div className="Playlist">
			<input value="New Playlist" />
			{/* <!-- Add a TrackList component --> */}
			<button className="Playlist-save">SAVE TO SPOTIFY</button>
		</div>
	);
}

export default Playlist;
