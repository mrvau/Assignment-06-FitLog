"use client";
import ListCard from "./ListCard";
import { useContext } from "react";
import { WorkoutContext } from "@/contexts/WorkoutContext";

const PlanList = () => {
	const { todayPlan } = useContext(WorkoutContext);
	return (
		<div>
			<div>
				<div>
					<button>Today&apos;s Plan</button>
					<button>Saved</button>
				</div>
				<div>
					<span>Sort By</span>
					<select>
						<option value="duration">Duration</option>
						<option value="calories">Calories</option>
						<option value="rating">Rating</option>
					</select>
				</div>
			</div>
			<div>
				{todayPlan.map((plan) => (
					<ListCard key={plan.id} plan={plan} />
				))}
			</div>
		</div>
	);
};

export default PlanList;
