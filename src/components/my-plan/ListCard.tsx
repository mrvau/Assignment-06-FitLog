import Workout from "@/types/workout.types";
import Image from "next/image";
import clock from "@/assets/clock.svg";
import fire from "@/assets/fire.svg";
import star from "@/assets/star.svg";
import tick from "@/assets/tick.svg";
import cross from "@/assets/cross.svg";
import Link from "next/link";
import Button from "../shared/Button";

const ListCard = ({ plan }: { plan: Workout }) => {
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
		<div className="flex items-center justify-between bg-accent p-6">
			<div className="flex">
				<div>
					<Image src={plan.image} alt={plan.name} width={300} height={300} />
				</div>
				<div>
					<h4>{plan.name}</h4>
					<span>{plan.equipment}</span>
				</div>
				<div>
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
			<div>
				<Link href={`/workouts/${plan.id}`}>View Details</Link>
				<Button
					className="btn btn-filled"
					icon={{ iconImage: tick, name: "Tick Icon" }}
					type="mark"
					disabled={false}
					workout={plan}>
					Mark as Done
				</Button>
				<Button
					icon={{ iconImage: cross, name: "Cross Icon" }}
					className="btn"
					workout={plan}
				/>
			</div>
		</div>
	);
};

export default ListCard;
