import React from "react";
import TrackList from "../TrackList/TrackList";

function Playlist({ playlist }) {
	return (
		<div className="Playlist">
			<input defaultValue={"New Playlist"} />
			<h3>{playlist.playlistName}</h3>
			<TrackList tracks={playlist.playlistTracks} />
			<button className="Playlist-save">SAVE TO SPOTIFY</button>
		</div>
	);
}

export default Playlist;
