import Workout from "@/types/workout.types";
import WorkoutCard from "./WorkoutCard";

const getWorkouts = async () => {
	const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
	return response.json();
};

const WorkoutList = async () => {
	const workouts = await getWorkouts();
	return (
		<section className="container py-6 text-center md:text-left">
			<div className="space-y-2 mb-6">
				<h2 className="font-primary font-bold text-2xl md:text-3xl">THE LIBRARY</h2>
				<p className="text-sm text-gray-500">
					Twelve lifts covering every major muscle group.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{workouts.map((workout: Workout) => (
					<WorkoutCard key={workout.id} workout={workout} />
				))}
			</div>
		</section>
	);
};

export default WorkoutList;
