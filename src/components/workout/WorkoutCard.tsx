import Workout from "@/types/workout.types";
import Image from "next/image";
import clock from "@/assets/clock.png";
import fire from "@/assets/fire.png";
import star from "@/assets/star.png";
import Link from "next/link";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
	const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

	const workoutInfo = [
		{
			icon: clock,
			type: duration,
			unit: "min",
			infoName: "Total Duration",
		},
		{
			icon: fire,
			type: caloriesBurned,
			unit: "kcal",
			infoName: "Calorie To Burned",
		},
		{
			icon: star,
			type: rating,
			unit: "",
			infoName: "Overall Rating",
		},
	];
	return (
		<Link
			href={`/workouts/${id}`}
			className="bg-accent rounded-2xl overflow-hidden group text-left border border-gray-600">
			<div className="overflow-hidden">
				<Image
					src={image}
					alt={name}
					width={800}
					height={500}
					className="w-full h-40 object-cover object-[0%_25%] group-hover:scale-150 transition-all duration-300"
				/>
			</div>
			<div className="px-6 py-4">
				<div className="flex items-center gap-2 mb-2">
					{muscleGroups.map((muscle, index) => (
						<div
							key={index}
							className="px-2 py-1 bg-foreground text-background font-semibold rounded-full text-xs">
							{muscle}
						</div>
					))}
				</div>
				<div className="mb-4">
					<h3 className="font-primary font-bold text-xl mb-1">{name}</h3>
					<span className="text-gray-400 text-sm">{equipment}</span>
				</div>
				<div className="flex items-center justify-between border-t border-slate-600 pt-4">
					{workoutInfo.map((info, index) => (
						<div key={index} className="flex items-center gap-2">
							<Image src={info.icon} alt={info.infoName} width={14} height={14} />
							<span className="text-[#a3a3a3]">
								{info.type} {info.unit}
							</span>
						</div>
					))}
				</div>
			</div>
		</Link>
	);
};

export default WorkoutCard;
