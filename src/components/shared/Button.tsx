"use client";
import { ReactNode, useContext } from "react";
import Image, { StaticImageData } from "next/image";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import Workout from "@/types/workout.types";
import { toast } from "react-toastify";

interface ButtonProps {
	className: string;
	icon?: {
		iconImage: StaticImageData;
		name: string;
	};
	children?: ReactNode;
	type?: string;
	workout: Workout;
	disabled?: boolean;
}

const Button = ({ workout, className, icon, type, disabled, children }: ButtonProps) => {
	const { todayPlan, setTodayPlan, setSavedPlan } = useContext(WorkoutContext);

	const handleClick = (workout: Workout) => {
		if (type === "plan") {
			setTodayPlan((prev) => [...prev, workout]);
			toast.success(`${workout.name} added to Today's Plan`);
		} else if (type === "save") {
			setSavedPlan((prev) => [...prev, workout]);
			toast.success(`${workout.name} added to Saved Plan`);
		} else if (type === "remove") {
			const remainingPlan = todayPlan.filter((plan) => plan.id !== workout.id);
			setTodayPlan(remainingPlan);
			toast.warning(`${workout.name} removed from Today's plan`);
		}
	};

	return (
		<button className={className} onClick={() => handleClick(workout)} disabled={disabled}>
			{icon && children ? (
				<div className="flex items-center justify-center md:justify-start gap-2">
					<Image src={icon.iconImage} alt={icon.name} width={20} height={20} />
					<span>{children}</span>
				</div>
			) : icon ? (
				<Image src={icon.iconImage} alt={icon.name} width={20} height={20} />
			) : (
				<span>{children}</span>
			)}
		</button>
	);
};

export default Button;
