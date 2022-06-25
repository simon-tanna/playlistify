import React from "react";
import Track from "../Track/Track";

function TrackList({ tracks }) {
	return (
		<>
			<div class="TrackList">
				{tracks.map(
					(track) => {
						return <Track track={track} key={track.id} />;
					}
					// <>
					// 	<p>{`Track Name: ${track.name}`}</p>
					// 	<p>{`Artist: ${track.artist}`}</p>
					// 	<p>{`Album: ${track.album}`}</p>
					// </>
				)}
			</div>
		</>
	);
}

export default TrackList;
