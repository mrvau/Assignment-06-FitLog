"use client";
import { createContext, ReactNode, useState } from "react";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
	const [todayPlan, setTodayPlan] = useState([]);
	const [savedPlan, setSavedPlan] = useState([]);

	const value = {
		todayPlan,
		setTodayPlan,
		savedPlan,
		setSavedPlan,
	};
	return <WorkoutContext.Provider value={{}}>{children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;
