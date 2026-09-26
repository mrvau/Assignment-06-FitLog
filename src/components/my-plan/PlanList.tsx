"use client";
import ListCard from "./ListCard";
import { MouseEvent, useContext, useState } from "react";
import Workout from "@/types/workout.types";
import Link from "next/link";
import { WorkoutContext } from "@/contexts/WorkoutContext";

const PlanList = ({ tab }: { tab: string }) => {
	const sortPlan = (plans: Workout[]) => {
		const sortedPlans = [...plans];

		if (sortBy === "duration") {
			sortedPlans.sort((a, b) => a.duration - b.duration);
		} else if (sortBy === "calories") {
			sortedPlans.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
		} else {
			sortedPlans.sort((a, b) => a.rating - b.rating);
		}

		return sortedPlans;
	};

	const { todayPlan, savedPlan } = useContext(WorkoutContext);

	const [selected, setSelected] = useState(tab);
	const [sortBy, setSortBy] = useState("duration");

	const sortedTodayPlan = sortPlan(todayPlan);
	const sortedSavedPlan = sortPlan(savedPlan);

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;
		setSelected(target.getAttribute("aria-label") || "today");
	};
	return (
		<div className="space-y-4">
			<div className="flex flex-col md:flex-row gap-6 items-start md:items-center md:justify-between">
				<div className="flex items-center gap-2 p-1 bg-gray-800/30 rounded-xl">
					<button
						className={`${selected === "today" ? "activeTab" : "font-normal text-gray-600"} btn`}
						onClick={handleClick}
						aria-label="today">
						Today&apos;s Plan
					</button>
					<button
						className={`${selected === "saved" ? "activeTab" : "font-normal text-gray-600"} btn`}
						onClick={handleClick}
						aria-label="saved">
						Saved
					</button>
				</div>
				<div className="space-x-2">
					<span className="text-gray-600 hidden md:inline-block">Sort By</span>
					<select
						className="dropdown"
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}>
						<option value="duration">Duration</option>
						<option value="calories">Calories</option>
						<option value="rating">Rating</option>
					</select>
				</div>
			</div>
			<div className="space-y-4">
				{selected === "today" && sortedTodayPlan.length > 0 ? (
					sortedTodayPlan.map((plan) => (
						<ListCard key={plan.id} plan={plan} tab={selected} />
					))
				) : selected === "saved" && sortedSavedPlan.length > 0 ? (
					sortedSavedPlan.map((plan) => (
						<ListCard key={plan.id} plan={plan} tab={selected} />
					))
				) : (
					<div className="flex flex-col items-center py-20 border border-dashed border-gray-700 rounded-xl bg-gray-800/30 gap-4">
						<div className="text-center space-y-2">
							<h4 className="font-primary font-bold text-2xl">NOTHING HERE YET</h4>
							<p className="text-gray-600">
								Browse the library and add a lift to get today moving.
							</p>
						</div>
						<Link href={"/"} className="btn btn-filled rounded-full">
							Go to Workouts
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default PlanList;
