"use client";

import Button from "./Button";
import Workout from "@/types/workout.types";

import add from "@/assets/add.png";
import save from "@/assets/save.png";
import { useContext } from "react";
import { WorkoutContext } from "@/contexts/WorkoutContext";

const DetailsButtons = ({ workout }: { workout: Workout }) => {
	const { todayPlan, savedPlan } = useContext(WorkoutContext);
	const isTodayPlan = todayPlan.find((plan) => plan.id === workout.id) ? true : false;
	const isSavedPlan = savedPlan.find((plan) => plan.id === workout.id) ? true : false;
	return (
		<div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-10">
			<Button
				workout={workout}
				className="btn btn-filled rounded-lg"
				icon={{ iconImage: add, name: "Add Icon" }}
				disabled={isTodayPlan}
				type="plan">
				<span>Add to today&apos;s plan</span>
			</Button>
			<Button
				workout={workout}
				className="btn btn-outline rounded-lg"
				icon={{ iconImage: save, name: "Save Icon" }}
				disabled={isSavedPlan}
				type="save">
				<span>Save for later</span>
			</Button>
		</div>
	);
};

export default DetailsButtons;
