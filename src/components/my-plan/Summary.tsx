"use client";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";

const SummaryItem = ({
	summaryTitle,
	summaryValue,
}: {
	summaryTitle: string;
	summaryValue: number;
}) => {
	return (
		<div className="not-last:border-r border-gray-800 w-full px-5 md:px-8 first:text-foreground">
			<span className="block text-gray-400 text-xs font-medium mb-2">{summaryTitle}</span>
			<span className="block font-primary font-bold text-5xl">{summaryValue}</span>
		</div>
	);
};

const Summary = () => {
	const { todayPlan } = useContext(WorkoutContext);

	const totalWorkouts = todayPlan.length;
	const minutes = todayPlan.reduce((acc, current) => acc + current.duration, 0);
	const calories = todayPlan.reduce((acc, current) => acc + current.caloriesBurned, 0);

	return (
		<div className="flex items-center justify-between bg-gray-800/30 py-4 md:py-7 rounded-xl border border-gray-800">
			<SummaryItem summaryTitle="Exercises" summaryValue={totalWorkouts} />
			<SummaryItem summaryTitle="Minutes" summaryValue={minutes} />
			<SummaryItem summaryTitle="Calories" summaryValue={calories} />
		</div>
	);
};

export default Summary;
