import React from "react";

function Track({ track }) {
	const isRemoval = false;
	const renderAction = () => {
		isRemoval ? <button>-</button> : <button>+</button>;
	};

	return (
		<div className="Track">
			<div className="Track-information">
				<h3>Track Name: {track.name}</h3>
				<p>Artist: {track.artist}</p>
				<p>Album: {track.album}</p>
			</div>
			{renderAction()}
		</div>
	);
}

export default Track;
