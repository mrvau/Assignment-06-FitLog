"use client";
import { ReactNode, useContext } from "react";
import Image, { StaticImageData } from "next/image";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import Workout from "@/types/workout.types";

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
	const { setTodayPlan, setSavedPlan } = useContext(WorkoutContext);

	const handleClick = (workout: Workout) => {
		if (type === "plan") {
			setTodayPlan((prev) => [...prev, workout]);
		} else {
			setSavedPlan((prev) => [...prev, workout]);
		}
	};

	return (
		<button className={className} onClick={() => handleClick(workout)} disabled={disabled}>
			{icon && children ? (
				<div className="flex items-center gap-2">
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
