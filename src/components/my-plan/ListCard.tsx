import Workout from "@/types/workout.types";
import Image from "next/image";
import clock from "@/assets/clock.png";
import fire from "@/assets/fire.png";
import star from "@/assets/star.png";
import tick from "@/assets/tick.svg";
import cross from "@/assets/cross.svg";
import Link from "next/link";
import Button from "../shared/Button";

const ListCard = ({ plan, tab }: { plan: Workout; tab: string }) => {
	const { duration, caloriesBurned, rating } = plan;
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
		<div className="flex flex-col md:flex-row items-center justify-between bg-accent p-4 rounded-xl group">
			<div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
				<div className="rounded-xl md:w-55 md:h-30 overflow-hidden">
					<Image
						src={plan.image}
						alt={plan.name}
						width={300}
						height={300}
						className="group-hover:scale-150 transition-all duration-300 w-full h-auto object-cover"
					/>
				</div>
				<div className="space-y-1">
					<h4 className="font-primary font-bold text-xl">{plan.name}</h4>
					<span className="text-gray-400">{plan.equipment}</span>
					<div className="flex items-center gap-6 py-2">
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
			</div>
			<div className="flex flex-col-reverse w-full md:w-fit lg:flex-row items-center md:items-end lg:items-center gap-2">
				<Link
					href={`/workouts/${plan.id}`}
					className="btn btn-outline rounded-full font-normal w-full text-center lg:w-fit">
					View Details
				</Link>
				{tab === "today" && (
					<div className="flex items-center justify-between w-full md:w-fit gap-2">
						<Button
							className="btn btn-filled rounded-xl text-center w-full md:w-fit"
							icon={{ iconImage: tick, name: "Tick Icon" }}
							type="mark"
							disabled={false}
							workout={plan}>
							Mark as Done
						</Button>
						<Button
							icon={{ iconImage: cross, name: "Cross Icon" }}
							type="remove"
							className="cursor-pointer p-2"
							workout={plan}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ListCard;
