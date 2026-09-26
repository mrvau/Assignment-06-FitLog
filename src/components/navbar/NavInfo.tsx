"use client";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import Link from "next/link";
import { useContext } from "react";

const NavInfo = () => {
	const { todayPlan, savedPlan } = useContext(WorkoutContext);
	return (
		<div className="flex md:flex-1 flex-col md:flex-row items-end md:items-center justify-end gap-1 md:gap-6 text-xs md:text-sm lg:text-base">
			<Link href={"/my-plan/today"} className="text-gray-300 center gap-2">
				Plan <div className="circle bg-foreground text-background">{todayPlan.length}</div>
			</Link>
			<Link href={"/my-plan/saved"} className="text-gray-600 center gap-2">
				Saved{" "}
				<div className="circle border border-gray-700 text-gray-300">
					{savedPlan.length}
				</div>
			</Link>
		</div>
	);
};

export default NavInfo;
