import { getWorkout } from "@/lib/api";
import Button from "@/components/shared/Button";
import Image from "next/image";
import add from "@/assets/add.png";
import save from "@/assets/save.png";

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
				<h1 className="font-primary font-bold text-3xl md:text-4xl">{name}</h1>
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
				<div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
					<Button className="btn-filled rounded-lg">
						<div className="flex items-center gap-2">
							<Image src={add} alt="Add icon" width={24} height={24} />
							<span>Add to today&apos;s plan</span>
						</div>
					</Button>
					<Button className="btn-outline rounded-lg">
						<div className="flex items-center gap-2">
							<Image src={save} alt="Add icon" width={24} height={24} />
							<span>Save for later</span>
						</div>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default WorkoutDetailsPage;
