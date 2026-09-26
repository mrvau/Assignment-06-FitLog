import Workout from "@/types/workout.types";

export const getWorkouts = async (): Promise<Workout[]> => {
	const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
	return response.json();
};

export const getWorkout = async (id: string): Promise<Workout> => {
	const response = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
	return response.json();
};
