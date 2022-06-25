import React from "react";
// import Track from "../Track/Track";

function TrackList({track}) {
	return (
		<div class="TrackList">
			<p>{`Track Name: ${track.name}`}</p>
			<p>{`Artist: ${track.artist}`}</p>
			<p>{`Album: ${track.album}`}</p>
		</div>
	);
}

export default TrackList;
