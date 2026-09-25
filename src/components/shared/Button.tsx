"use client";
import {ReactNode, useContext} from "react";
import Image, {StaticImageData} from "next/image";
import {WorkoutContext} from "@/contexts/WorkoutContext";

interface ButtonProps {
	className: string;
	icon?: {
		iconImage: StaticImageData;
		name: string;
	};
	children: ReactNode;
}

const Button = ({ className, icon, children }: ButtonProps) => {
	const {setTodayPlan, setSavedPlan} = useContext(WorkoutContext)
	return (
		<button
			className={`${className} font-bold px-4 py-1 md:py-2 text-sm lg:text-base cursor-pointer`}>
			{
				icon ?
					(
						<div className="flex items-center gap-2">
							<Image src={icon.iconImage} alt={icon.name} width={20} height={20} />
							<span>{children}</span>
						</div>
					)
					: (
						<span>{children}</span>
					)
			}
		</button>
	);
};

export default Button;
