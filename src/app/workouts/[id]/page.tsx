import React from "react";

const WorkoutDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	return <div>Workout {id}</div>;
};

export default WorkoutDetailsPage;
