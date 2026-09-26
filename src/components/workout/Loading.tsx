import React from "react";

const Loading = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div className="bg-accent rounded-2xl h-90 overflow-hidden group text-left border border-gray-600 animate-pulse" />
			<div className="bg-accent rounded-2xl h-90 overflow-hidden group text-left border border-gray-600 animate-pulse" />
			<div className="bg-accent rounded-2xl h-90 overflow-hidden group text-left border border-gray-600 animate-pulse" />
		</div>
	);
};

export default Loading;
