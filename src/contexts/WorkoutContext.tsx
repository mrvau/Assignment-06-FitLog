"use client";
import React, { createContext, useState } from "react";
import Workout from "@/types/workout.types";

interface WorkoutContextInterface {
	todayPlan: Workout[];
	setTodayPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
	savedPlan: Workout[];
	setSavedPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
	doneWorkouts: number[];
	setDoneWorkouts: React.Dispatch<React.SetStateAction<number[]>>;
}

export const WorkoutContext = createContext<WorkoutContextInterface>({
	savedPlan: [],
	setSavedPlan: () => {},
	todayPlan: [],
	setTodayPlan: () => {},
	doneWorkouts: [],
	setDoneWorkouts: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
	const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
	const [savedPlan, setSavedPlan] = useState<Workout[]>([]);
	const [doneWorkouts, setDoneWorkouts] = useState<number[]>([]);

	const value = {
		todayPlan,
		setTodayPlan,
		savedPlan,
		setSavedPlan,
		doneWorkouts,
		setDoneWorkouts,
	};
	return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;
