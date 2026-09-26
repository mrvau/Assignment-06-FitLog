import { getWorkout } from "@/lib/api";
import Button from "@/components/shared/Button";
import Image from "next/image";
import DetailsButtons from "@/components/shared/DetailsButtons";

const WorkoutDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const workout = await getWorkout(id);
	if (!workout) throw new Error("Workout NOT FOUND!");
	const {
		name,
		image,
		caloriesBurned,
		description,
		difficulty,
		duration,
		equipment,
		instructions,
		muscleGroups,
		rating,
		reps,
		sets,
	} = workout;

	const workoutDetails = Object.entries({
		equipment,
		difficulty,
		sets,
		reps,
		duration,
		calories: caloriesBurned,
		rating,
	});

	return (
		<section className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-4 md:py-10 text-center md:text-left">
			<div className="overflow-hidden h-fit rounded-xl group">
				<Image
					src={image}
					alt={name}
					width={1300}
					height={1600}
					className="object-cover w-full h-auto group-hover:scale-125 transition-all duration-300"
				/>
			</div>
			<div className="space-y-4">
				<h2 className="font-primary font-bold text-3xl md:text-4xl">{name}</h2>
				<p className="text-gray-500 text-sm md:text-base lg:text-lg">{description}</p>
				<div className="flex items-center justify-center md:justify-start gap-2">
					{muscleGroups.map((muscle, index) => (
						<div
							key={index}
							className="px-2 py-1 md:px-3 bg-foreground text-background font-semibold rounded-full text-xs md:text-sm lg:text-base">
							{muscle}
						</div>
					))}
				</div>
				<div className="bg-accent rounded-xl border border-gray-700">
					{workoutDetails.map((details) => {
						const [key, value] = details;
						return (
							<div
								key={key}
								className="flex items-center justify-between p-2 md:p-2.5 not-last:border-b not-last:border-gray-700 text-sm lg:text-base">
								<div className="text-gray-500 font-bold">{key.toUpperCase()}</div>
								<div className="text-gray-200 font-medium">{value}</div>
							</div>
						);
					})}
				</div>
				<div className="text-left">
					<h2 className="font-primary font-bold text-lg lg:text-2xl">INSTRUCTIONS</h2>
					<div className="space-y-4 mt-2">
						{instructions.map((instruction, index) => (
							<p key={index} className="text-sm lg:text-base text-gray-300">
								{index + 1}. {instruction}
							</p>
						))}
					</div>
				</div>
				<DetailsButtons workout={workout} />
			</div>
		</section>
	);
};

export default WorkoutDetailsPage;
