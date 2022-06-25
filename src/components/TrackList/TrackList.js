import React from "react";
// import Track from "../Track/Track";

function TrackList({track}) {
	return (
		<div class="TrackList">
			<p>{`Track Name: ${track.name}`}</p>
		</div>
	);
}

export default TrackList;
