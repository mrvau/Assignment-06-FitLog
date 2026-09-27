"use client";
import Button from "../shared/Button";
import Workout from "@/types/workout.types";
import tick from "@/assets/tick.svg";
import { useContext } from "react";
import { WorkoutContext } from "@/contexts/WorkoutContext";

const ListCardButton = ({ plan }: { plan: Workout }) => {
	const { doneWorkouts } = useContext(WorkoutContext);
	const isDone = doneWorkouts.find((id) => id === plan.id) ? true : false;
	return (
		<Button
			className="btn btn-filled rounded-xl text-center w-full md:w-fit"
			icon={{ iconImage: tick, name: "Tick Icon" }}
			type="mark"
			disabled={isDone}
			workout={plan}>
			Mark as Done
		</Button>
	);
};

export default ListCardButton;
