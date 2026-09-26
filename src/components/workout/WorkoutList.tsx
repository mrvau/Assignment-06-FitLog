import Workout from "@/types/workout.types";
import WorkoutCard from "./WorkoutCard";
import { getWorkouts } from "@/lib/api";

const WorkoutList = async () => {
	const workouts = await getWorkouts();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{workouts.map((workout: Workout) => (
				<WorkoutCard key={workout.id} workout={workout} />
			))}
		</div>
	);
};

export default WorkoutList;
